import { linkItems } from "@/constants/site";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

export function SettingsSidebar() {
  return (
    <div className="top-0 left-0 sticky py-4 border-border border-r w-60">
      <div className="mb-2 px-2">
        <span className="font-semibold text-slate-600 dark:text-slate-300 text-sm">
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
              to={`/dashboard/$publicationId${(ddItem.default ? "" : ddItem.href) as "/analytics" | "/posts" | "/series" | ""}`}
              params={{
                publicationId: `66591b32d988544d623ad7ce`
              }}
              key={ddItem.id}
              disabled={ddItem.disabled}
            >
              <div className={cn(
                !ddItem.disabled ? "hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer" : "opacity-50 cursor-default",
                "flex items-center gap-2 px-3 py-1.5 font-medium")}
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
