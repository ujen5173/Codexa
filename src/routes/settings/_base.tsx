import { UserSettingsSidebar } from "@/components/layout/settings-sidebar/user-settings-sidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/settings/_base")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex bg-white dark:bg-slate-950">
      <UserSettingsSidebar />
      <main className="flex-1 w-full overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
