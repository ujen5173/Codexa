import Logo from "@/components/common/logo"
import UserDropDown from "@/components/common/user-drop-down"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Link } from "@tanstack/react-router"
import { motion } from "framer-motion"
import { Moon02Icon, Sun03Icon } from "hugeicons-react"
import { Bell, Search } from "lucide-react"
import { useTheme } from "next-themes"

const PublicationHeader = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full">
      <div className="flex justify-between items-center mx-auto px-4 py-3 max-w-6xl gap-2 sm:gap-4">
        <div className="flex items-center gap-2 min-w-0">
          <Logo onlyIcon />
          <Separator className="dark:bg-600/60 bg-border h-[17px!important] hidden sm:block" orientation="vertical" />
          <h2 className="font-semibold text-base sm:text-xl truncate">
            JS Topic
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center">

            <Button variant={"ghost"} size="icon" icon={Search} className="hidden md:flex" />
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
      </div>
    </header>
  )
}

export default PublicationHeader 