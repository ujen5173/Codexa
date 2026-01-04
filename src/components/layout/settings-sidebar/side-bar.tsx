import { linkItems } from "@/constants/site";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

export function SettingsSidebar() {
  return (
    <div className="py-4 border-border border-r w-60">
      <div className="mb-2 px-2">
        <span className="text-slate-700 dark:text-slate-300 text-sm">
          BLOG DASHBOARD
        </span>
      </div>
      {linkItems.blog_dashboard.map((ddItem) => {
        if (ddItem.separator) {
          return (
            <div key={ddItem.id} className="px-2">
              {ddItem.icon}
            </div>
          );
        } else {
          return (
            <Link
              to={`/dashboard/123${ddItem.default ? "" : ddItem.href}`}
              key={ddItem.id}
              disabled={ddItem.disabled}
            >
              <div className={cn(
                !ddItem.disabled ? "hover:bg-slate-800 cursor-pointer" : "opacity-50 cursor-default",
                "flex items-center gap-2 px-3 py-1.5")}
              >
                {ddItem.icon}
                <span>{ddItem.label}</span>
              </div>
            </Link>
          );
        }
      })}
    </div>
  );
}
