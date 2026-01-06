import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Moon02Icon, Sun03Icon } from "hugeicons-react";
import {
  ChevronLeft, Search,
  Share2,
  UserPlus2
} from "lucide-react";
import Logo from "../../common/logo";
import UserDropDown from "../../common/user-drop-down";
import { Button } from "../../ui/button";
import { useTheme } from "../theme-provider";

const PostHeader = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/80 dark:bg-slate-950/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/60">
      <div className="flex items-center justify-between mx-auto px-4 py-3 h-16 max-w-7xl">
        <div className="flex items-center gap-4">
          <Link to="/">
            <Button
              size="icon"
              variant="ghost"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50"
              icon={ChevronLeft}
            />
          </Link>
          <div className="w-px h-6 bg-slate-200 dark:bg-slate-800" />
          <Logo />
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            className="md:inline-flex hidden text-slate-600 dark:text-slate-400"
            icon={Search}
          />

          <Button
            size="icon"
            variant="ghost"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-slate-800 dark:text-slate-200"
          >
            <motion.span
              key={theme}
              initial={{ rotate: -90 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? (
                <Sun03Icon className="size-5" />
              ) : (
                <Moon02Icon className="size-5" />
              )}
            </motion.span>
          </Button>

          <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-1" />

          <Button
            className="hidden sm:inline-flex font-medium"
            variant="default" // Assuming default is primary color
            icon={UserPlus2}
          >
            Follow
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="sm:hidden text-slate-600 dark:text-slate-400"
            icon={UserPlus2}
          />

          <Button
            size="icon"
            variant="ghost"
            className="text-slate-600 dark:text-slate-400"
            icon={Share2}
          />

          <UserDropDown />
        </div>
      </div>
    </header>
  );
};

export default PostHeader;
