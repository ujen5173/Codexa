import { Separator } from "@/components/ui/separator";
import { linkItems } from "@/constants/site";
import { platformName } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { TrendingUp } from "lucide-react";

const LeftSidebar = () => {
  return (
    <section className="top-4 left-0 sticky flex-2 bg-white dark:bg-slate-900 shadow-sm py-2 border border-border dark:border-slate-800 rounded-2xl min-w-[192px] h-min overflow-hidden">
      <ul className="pb-3 font-inter">
        {linkItems.leftSidebar.map((item) => (
          <Link key={item.id} to={item.href}>
            <li
              className={cn(
                "flex items-center gap-2 hover:bg-slate-100 hover:dark:bg-slate-800 px-4 py-2 text-slate-800 dark:text-slate-100 cursor-pointer"
              )}
            >
              {item.icon}
              <span className="font-medium text-inherit text-sm">
                {item.label}
              </span>
            </li>
          </Link>
        ))}
      </ul>
      <div className="px-2">
        <Separator />
      </div>
      <div className="px-2 py-4">
        <div className="flex justify-between items-center gap-4 mb-2 px-2">
          <p className="font-semibold text-slate-700 dark:text-slate-50 text-sm">
            Trending tags
          </p>
          <TrendingUp
            className="text-green-600"
            style={{ width: "17px", height: "17px" }}
          />
        </div>
        <ul className="">
          <Link to="/">
            <li className="flex justify-between items-center hover:bg-slate-100 hover:dark:bg-slate-800 px-2 py-1 border border-transparent hover:border-slate-200 hover:dark:border-slate-700 rounded-sm">
              <span className="text-slate-800 dark:text-zinc-100 text-sm">
                Javascript
              </span>
              <span className="bg-slate-100 dark:bg-slate-700 px-2 py-0.5 border border-border dark:border-slate-600 rounded-full text-slate-700 dark:text-slate-200 text-xs">
                99+
              </span>
            </li>
          </Link>
          <Link to="/">
            <li className="flex justify-between items-center hover:bg-slate-100 hover:dark:bg-slate-800 px-2 py-1 border border-transparent hover:border-slate-200 hover:dark:border-slate-700 rounded-sm">
              <span className="text-slate-800 dark:text-zinc-100 text-sm">
                CI/CD
              </span>
              <span className="bg-slate-100 dark:bg-slate-700 px-2 py-0.5 border border-border dark:border-slate-600 rounded-full text-slate-700 dark:text-slate-200 text-xs">
                67+
              </span>
            </li>
          </Link>
          <Link to="/">
            <li className="flex justify-between items-center hover:bg-slate-100 hover:dark:bg-slate-800 px-2 py-1 border border-transparent hover:border-slate-200 hover:dark:border-slate-700 rounded-sm">
              <span className="text-slate-800 dark:text-zinc-100 text-sm">
                Cloudflare
              </span>
              <span className="bg-slate-100 dark:bg-slate-700 px-2 py-0.5 border border-border dark:border-slate-600 rounded-full text-slate-700 dark:text-slate-200 text-xs">
                44+
              </span>
            </li>
          </Link>
          <Link to="/">
            <li className="flex justify-between items-center hover:bg-slate-100 hover:dark:bg-slate-800 px-2 py-1 border border-transparent hover:border-slate-200 hover:dark:border-slate-700 rounded-sm">
              <span className="text-slate-800 dark:text-zinc-100 text-sm">
                Tanstack start
              </span>
              <span className="bg-slate-100 dark:bg-slate-700 px-2 py-0.5 border border-border dark:border-slate-600 rounded-full text-slate-700 dark:text-slate-200 text-xs">
                38+
              </span>
            </li>
          </Link>
          <Link to="/">
            <li className="flex justify-between items-center hover:bg-slate-100 hover:dark:bg-slate-800 px-2 py-1 border border-transparent hover:border-slate-200 hover:dark:border-slate-700 rounded-sm">
              <span className="text-slate-800 dark:text-zinc-100 text-sm">
                Next.js
              </span>
              <span className="bg-slate-100 dark:bg-slate-700 px-2 py-0.5 border border-border dark:border-slate-600 rounded-full text-slate-700 dark:text-slate-200 text-xs">
                30+
              </span>
            </li>
          </Link>
        </ul>
      </div>

      <div className="px-2">
        <Separator className="w-10" />
      </div>
      <div className="px-4 pt-3 pb-2">
        <p className="text-slate-700 dark:text-slate-200 text-xs">
          &copy; {new Date().getFullYear()} {platformName} LLC
        </p>
      </div>
    </section>
  );
};

export default LeftSidebar;
