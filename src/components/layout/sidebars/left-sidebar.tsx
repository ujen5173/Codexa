import { Separator } from "@/components/ui/separator";
import { platformName } from "@/lib/constants";
import { Link } from "@tanstack/react-router";
import {
  AddCircleHalfDotIcon,
  AllBookmarkIcon,
  BubbleChatUserIcon,
  Home12Icon,
  Navigation04Icon,
} from "hugeicons-react";
import { TrendingUp } from "lucide-react";

const LeftSidebar = () => {
  return (
    <section className="h-min sticky top-4 left-0 rounded-2xl bg-white flex-2 border border-border shadow-sm py-2">
      <ul className="font-inter">
        <li className="px-4 flex items-center gap-2 py-2 cursor-pointer hover:bg-slate-100">
          <Home12Icon
            className="text-slate-800"
            style={{ width: "17px", height: "17px" }}
          />
          <span className="font-medium text-sm text-slate-800">Home</span>
        </li>
        <li className="px-4 flex items-center gap-2 py-2 cursor-pointer hover:bg-slate-100">
          <Navigation04Icon
            className="text-slate-800"
            style={{ width: "17px", height: "17px" }}
          />
          <span className="font-medium text-sm text-slate-800">Community</span>
        </li>
        <li className="px-4 flex items-center gap-2 py-2 cursor-pointer hover:bg-slate-100">
          <BubbleChatUserIcon
            className="text-slate-800"
            style={{ width: "17px", height: "17px" }}
          />
          <span className="font-medium text-sm text-slate-800">Chat</span>
        </li>
        <li className="px-4 flex items-center gap-2 py-2 cursor-pointer hover:bg-slate-100">
          <AllBookmarkIcon
            className="text-slate-800"
            style={{ width: "17px", height: "17px" }}
          />
          <span className="font-medium text-sm text-slate-800">Bookmarks</span>
        </li>
        <li className="px-4 flex items-center gap-2 py-2 cursor-pointer hover:bg-slate-100">
          <AddCircleHalfDotIcon
            className="text-slate-800"
            style={{ width: "17px", height: "17px" }}
          />
          <span className="font-medium text-sm text-slate-800">
            Write something
          </span>
        </li>
      </ul>
      <div className="px-2">
        <Separator />
      </div>
      <div className="py-4 px-2">
        <div className="flex items-center mb-2 px-2 justify-between gap-4">
          <p className="text-sm text-slate-700 font-semibold">Trending tags</p>
          <TrendingUp
            className="text-green-600"
            style={{ width: "17px", height: "17px" }}
          />
        </div>
        <ul className="">
          <Link to="/">
            <li className="flex items-center px-2 py-1 border border-transparent hover:border-slate-200 hover:bg-slate-100 rounded-sm justify-between">
              <span className="text-sm text-slate-800">Javascript</span>
              <span className="text-xs border text-slate-700 border-border bg-slate-100 px-2 py-0.5 rounded-full">
                99+
              </span>
            </li>
          </Link>
          <Link to="/">
            <li className="flex items-center px-2 py-1 border border-transparent hover:border-slate-200 hover:bg-slate-100 rounded-sm justify-between">
              <span className="text-sm text-slate-800">CI/CD</span>
              <span className="text-xs border text-slate-700 border-border bg-slate-100 px-2 py-0.5 rounded-full">
                67+
              </span>
            </li>
          </Link>
          <Link to="/">
            <li className="flex items-center px-2 py-1 border border-transparent hover:border-slate-200 hover:bg-slate-100 rounded-sm justify-between">
              <span className="text-sm text-slate-800">Cloudflare</span>
              <span className="text-xs border text-slate-700 border-border bg-slate-100 px-2 py-0.5 rounded-full">
                44+
              </span>
            </li>
          </Link>
          <Link to="/">
            <li className="flex items-center px-2 py-1 border border-transparent hover:border-slate-200 hover:bg-slate-100 rounded-sm justify-between">
              <span className="text-sm text-slate-800">Tanstack start</span>
              <span className="text-xs border text-slate-700 border-border bg-slate-100 px-2 py-0.5 rounded-full">
                38+
              </span>
            </li>
          </Link>
          <Link to="/">
            <li className="flex items-center px-2 py-1 border border-transparent hover:border-slate-200 hover:bg-slate-100 rounded-sm justify-between">
              <span className="text-sm text-slate-800">Next.js</span>
              <span className="text-xs border text-slate-700 border-border bg-slate-100 px-2 py-0.5 rounded-full">
                30+
              </span>
            </li>
          </Link>
        </ul>
      </div>

      <div className="px-2">
        <Separator className="w-10" />
      </div>
      <div className="px-4 pb-2 pt-3">
        <p className="text-xs text-slate-700">
          &copy; {new Date().getFullYear()} {platformName} LLC
        </p>
      </div>
    </section>
  );
};

export default LeftSidebar;
