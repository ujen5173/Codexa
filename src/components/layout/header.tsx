import { useNavigate, useRouter } from "@tanstack/react-router";
import { TextLoop } from "components/motion-primitives/text-loop";
import {
  Bell,
  GitBranch,
  Moon,
  PenBoxIcon,
  Search,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import Logo from "../common/logo";
import UserDropDown from "../common/user-drop-down";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Kbd } from "../ui/kbd";

const SEARCH_PLACEHOLDERS = [
  "Search bugs, blogs, and battle scars",
  "Find code that broke things first",
  "Search ideas fueled by caffeine",
  "Find posts born from outages",
  "Search fixes that survived deployment",
  "Search wisdom gained from mistakes",
];

const DONT_SHOW_HEADER = [""];

const Header = () => {
  const [blur, setBlur] = useState(false);
  const navigate = useNavigate();
  const router = useRouter();

  if (DONT_SHOW_HEADER.includes(router.latestLocation.href)) {
    navigate({ to: "/" });
    return null;
  }

  return (
    <header className="w-full border-b border-border shadow-sm bg-white">
      <nav className="flex max-w-385 mx-auto items-center justify-between gap-4 px-4 py-4">
        <div className="flex items-center gap-4">
          <Logo />
          <div className="flex items-center gap-2">
            <Button variant={"outline"}>My Feed</Button>
            <Button iconPlacement="right" variant={"link"} icon={Sparkles}>
              Rix
            </Button>
          </div>
        </div>
        <div className="flex-1 flex items-center gap-2">
          <div className="relative flex-1">
            <Input
              icon={Search}
              onChange={(e) => {
                const txt = e.target.value;
                if (txt !== "") setBlur(true);
                if (txt === "") setBlur(false);
              }}
              iconPlacement="left"
              className="z-5 relative"
              iconStyle="size-4 text-muted-foreground"
            />
            {!blur && (
              <div className="z-0 absolute top-2.5 text-slate-500 text-sm left-9">
                <div className="inline-flex whitespace-pre-wrap text-sm">
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
            <div className="absolute top-1.5 right-4">
              <Kbd className="h-7 border border-border px-2 uppercase">
                Ctrl + K
              </Kbd>
            </div>
          </div>
          <Button icon={PenBoxIcon}>Write</Button>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Button size={"icon"} variant={"ghost"} icon={GitBranch} />
            <Button size={"icon"} variant={"ghost"} icon={Moon} />
            <Button size={"icon"} variant={"ghost"} icon={Bell} />
          </div>
          <UserDropDown />
        </div>
      </nav>
    </header>
  );
};

export default Header;
