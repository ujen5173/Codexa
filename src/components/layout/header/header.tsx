import { TextLoop } from "@/components/motion-primitives/text-loop";
import { Link, useNavigate, useRouter } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Moon02Icon, PencilEdit01Icon, Sun03Icon } from "hugeicons-react";
import { Bell, GitBranch, Menu, Search, Sparkles } from "lucide-react";
import { useState } from "react";
import Logo from "../../common/logo";
import UserDropDown from "../../common/user-drop-down";
import { Button } from "../../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../ui/dialog";
import { Input } from "../../ui/input";
import { Kbd } from "../../ui/kbd";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../../ui/sheet";
import { LeftSidebarContent } from "../sidebars/left-sidebar";
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
  /^(?:\/u\/@[a-zA-Z0-9_]+\/[a-zA-Z0-9-]+|\/p\/.+)$/, // user article page and publication page
  /^\/onboard$/,                                      // onboard page
  /^\/dashboard\/[a-zA-Z0-9_-]+(\/.*)?$/,             // dashboard + subroutes
  /^\/new$/,                                          // new article
];


const Header = () => {
  const [blur, setBlur] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
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
    setMobileSearchOpen(false);
    setQ("");
  };


  return (
    <header className="relative bg-white dark:bg-slate-900 shadow-sm px-4 py-3 sm:py-4 border-border border-b w-full">
      <nav className="flex justify-between items-center gap-2 sm:gap-4 mx-auto max-w-385">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-[280px] sm:w-[300px]">
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>
              <div className="bg-white dark:bg-slate-900 py-2 h-full overflow-y-auto">
                <LeftSidebarContent onLinkClick={() => setMobileMenuOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
          <Logo />
          <div className="hidden lg:flex items-center gap-2">
            <Button variant={"outline"} size="sm" className="rounded-full">My Feed</Button>
            <Button iconPlacement="right" variant={"link"} icon={Sparkles} size="sm" className="rounded-full">
              Rix
            </Button>
          </div>
        </div>
        <div className="flex flex-1 justify-end items-center gap-1 md:gap-2 min-w-0">
          <Dialog open={mobileSearchOpen} onOpenChange={setMobileSearchOpen}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden shrink-0"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="md:max-w-md">
              <DialogHeader>
                <DialogTitle>Search</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  icon={Search}
                  onChange={(e) => {
                    const txt = e.target.value;
                    setQ(txt);
                  }}
                  iconPlacement="left"
                  className="w-full"
                  iconStyle="size-4 text-muted-foreground"
                  placeholder="Search..."
                  value={q}
                  autoFocus
                />
                <Button type="submit" className="w-full">
                  Search
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          <div className="hidden md:block relative flex-1 overflow-hidden">
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
              <div className="top-2.5 left-[2.55rem] z-0 absolute w-full text-slate-500 dark:text-white text-xs sm:text-sm">
                <div className="inline-flex text-xs sm:text-sm line-clamp-1 whitespace-pre-wrap">
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
            <div className="top-1.5 right-4 absolute">
              <Kbd className="dark:bg-slate-700 px-1.5 sm:px-2 border border-border h-6 sm:h-7 text-[10px] dark:text-slate-200 sm:text-xs uppercase">
                Ctrl + K
              </Kbd>
            </div>
          </div>
          <Link to="/new" className="hidden md:block">
            <Button icon={PencilEdit01Icon} size="sm" className="rounded-full text-xs sm:text-sm">Write</Button>
          </Link>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="flex items-center">
            <Link to="/changelog" className="hidden lg:block">
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
