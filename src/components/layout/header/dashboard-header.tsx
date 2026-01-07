import { cn } from "@/lib/utils";
import { Link, useRouter } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Moon02Icon, Sun03Icon } from "hugeicons-react";
import { Bell } from "lucide-react";
import { Img } from "react-image";
import UserDropDown from "../../common/user-drop-down";
import { Button } from "../../ui/button";
import { useTheme } from "../theme-provider";
import UserPublication from "./user-publication";

const DashboardHeader = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const pathname = router.latestLocation.pathname;

  return (
    <header className="top-0 z-50 sticky bg-white dark:bg-slate-950 shadow-sm border-border border-b w-full">
      <nav className="flex justify-between items-center gap-2 sm:gap-4 mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center gap-2 sm:gap-5 min-w-0">
          <Link to="/">
            <Img
              className={cn("object-cover select-none")}
              src={theme === "dark" ? "/logo-white.svg" : "/logo.svg"}
              alt="Codexa logo"
              draggable={false}
              width={24}
              height={24}
            />
          </Link>
          {new RegExp(/^\/dashboard\/[a-zA-Z0-9\/_-]+$/).test(pathname) && (
            <UserPublication />
          )}
        </div>
        <div className="flex flex-1 items-center gap-1 sm:gap-2 min-w-0">
          <div className="relative flex-1"></div>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <div className="flex items-center">
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

export default DashboardHeader;
