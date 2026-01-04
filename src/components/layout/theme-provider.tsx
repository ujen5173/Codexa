import { ScriptOnce } from "@tanstack/react-router";
import { createClientOnlyFn, createIsomorphicFn } from "@tanstack/react-start";
import { createContext, ReactNode, use, useEffect, useState } from "react";
import { z } from "zod";

const ThemeSchema = z.enum(["light", "dark"]).catch("light");

export type Theme = z.infer<typeof ThemeSchema>;

const themeStorageKey = "ui-theme";

const getStoredTheme = createIsomorphicFn()
  .server((): Theme => "light")
  .client((): Theme => {
    const stored = localStorage.getItem(themeStorageKey);
    return ThemeSchema.parse(stored);
  });

const setStoredTheme = createClientOnlyFn((theme: Theme) => {
  localStorage.setItem(themeStorageKey, ThemeSchema.parse(theme));
});

const applyTheme = createClientOnlyFn((theme: Theme) => {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(ThemeSchema.parse(theme));
});

const themeScript = (() => {
  function themeFn() {
    try {
      const stored = localStorage.getItem("ui-theme");
      const theme = stored === "dark" ? "dark" : "light";
      document.documentElement.classList.add(theme);
    } catch {
      document.documentElement.classList.add("light");
    }
  }
  return `(${themeFn.toString()})();`;
})();

type ThemeContextProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getStoredTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    const validated = ThemeSchema.parse(newTheme);
    setThemeState(validated);
    setStoredTheme(validated);
    applyTheme(validated);
  };

  return (
    <ThemeContext value={{ theme, setTheme }}>
      <ScriptOnce>{themeScript}</ScriptOnce>
      {children}
    </ThemeContext>
  );
}

export const useTheme = () => {
  const ctx = use(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
