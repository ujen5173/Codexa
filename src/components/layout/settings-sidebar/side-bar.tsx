import { linkItems } from "@/constants/site";
import { Link } from "@tanstack/react-router";

export function SettingsSidebar() {
  return (
    <div className="border-border border-r w-60">
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
              <div className="flex items-center gap-2 cursor-pointer">
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
