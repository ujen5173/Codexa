import { linkItems } from "@/constants/site";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

export function UserSettingsSidebar() {
  return (
    <aside className="hidden md:block border-border border-r w-64 min-h-[calc(100vh-65px)]">
      <div className="py-6 pr-4 pl-6">
        <h4 className="mb-4 font-semibold text-sm tracking-tight">Settings</h4>
        <nav className="flex flex-col gap-1">
          {linkItems.userSettings.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              disabled={item.disabled}
              className="[&.active]:bg-accent [&.active]:text-accent-foreground flex items-center gap-3 px-3 py-2 rounded-md font-medium text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              <item.icon.type
                {...item.icon.props}
                className={cn(item.icon.props.className, "size-4")}
              />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
