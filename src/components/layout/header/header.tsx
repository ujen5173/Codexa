import { TextLoop } from "@/components/motion-primitives/text-loop";
import { Link, useNavigate, useRouter } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Moon02Icon, PencilEdit01Icon, Sun03Icon } from "hugeicons-react";
import { Bell, GitBranch, Search, Sparkles } from "lucide-react";
import { useState } from "react";
import Logo from "../../common/logo";
import UserDropDown from "../../common/user-drop-down";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Kbd } from "../../ui/kbd";
import { useTheme } from "../theme-provider";

const SEARCH_PLACEHOLDERS = [
  "Search bugs, blogs, and battle scars",
  "Find code that broke things first",
  "Search ideas fueled by caffeine",
  "Find posts born from outages",
  "Search fixes that survived deployment",
  "Search wisdom gained from mistakes",
];

const DONT_SHOW_HEADER = [
  /^\/u\/@[a-zA-Z0-9]+\/[a-zA-Z0-9]+$/, // blog article page
  /^\/onboard$/, // onboard page
  /^\/dashboard\/[a-zA-Z0-9_-]+(\/.*)?$/,
];

const Header = () => {
  const [blur, setBlur] = useState(false);
  const router = useRouter();
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const pathname = router.latestLocation.pathname;

  if (DONT_SHOW_HEADER.some((regex) => regex.test(pathname))) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate({
      to: `/search?query=${encodeURIComponent(q)}`,
    });
  };

  return (
    <header className="relative bg-white dark:bg-slate-900 shadow-sm border-border border-b w-full">
      <nav className="flex justify-between items-center gap-4 mx-auto px-4 py-4 max-w-385">
        <div className="flex items-center gap-4">
          <Logo />
          <div className="flex items-center gap-2">
            <Button variant={"outline"}>My Feed</Button>
            <Button iconPlacement="right" variant={"link"} icon={Sparkles}>
              Rix
            </Button>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-2">
          <div className="relative flex-1">
            <form onSubmit={handleSubmit}>
              <Input
                icon={Search}
                onChange={(e) => {
                  const txt = e.target.value;
                  setQ(txt);
                  if (txt !== "") setBlur(true);
                  if (txt === "") setBlur(false);
                }}
                iconPlacement="left"
                className="z-5 relative"
                iconStyle="size-4 text-muted-foreground"
              />
            </form>
            {!blur && (
              <div className="top-2.5 left-[2.55rem] z-0 absolute text-slate-500 dark:text-white text-sm">
                <div className="inline-flex text-sm whitespace-pre-wrap">
                  Search for{' "'}
                  <TextLoop
                    className="overflow-y-clip"
                    interval={7}
                    transition={{
                      type: "spring",
                      stiffness: 900,
                      damping: 80,
                      mass: 10,
                    }}
                    variants={{
                      initial: {
                        y: 20,
                        rotateX: 90,
                        opacity: 0,
                        filter: "blur(4px)",
                      },
                      animate: {
                        y: 0,
                        rotateX: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                      },
                      exit: {
                        y: -20,
                        rotateX: -90,
                        opacity: 0,
                        filter: "blur(4px)",
                      },
                    }}
                  >
                    {SEARCH_PLACEHOLDERS.map((e) => (
                      <span key={e} className="text-primary">
                        {e}
                      </span>
                    ))}
                  </TextLoop>
                  {'"'}
                </div>
              </div>
            )}
            <div className="top-1.5 right-4 absolute font-inter">
              <Kbd className="dark:bg-slate-700 px-2 border border-border h-7 dark:text-slate-200 uppercase">
                Ctrl + K
              </Kbd>
            </div>
          </div>
          <Link to="/new">
            <Button icon={PencilEdit01Icon}>Write</Button>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Link to="/changelog">
              <Button
                size={"icon"}
                variant={"ghost"}
                icon={GitBranch}
                className="text-slate-800 dark:text-slate-200"
              />
            </Link>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <motion.span
                key={theme}
                initial={{ rotate: -90 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "dark" ? (
                  <Sun03Icon className="text-slate-800 dark:text-slate-200" />
                ) : (
                  <Moon02Icon className="text-slate-800 dark:text-slate-200" />
                )}
              </motion.span>
            </Button>

            <Link to="/notifications">
              <Button
                size={"icon"}
                variant={"ghost"}
                icon={Bell}
                className="text-slate-800 dark:text-slate-200"
              />
            </Link>
          </div>
          <UserDropDown />
        </div>
      </nav>
    </header>
  );
};

export default Header;
