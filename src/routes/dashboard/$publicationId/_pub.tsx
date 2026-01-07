import DashboardFooter from "@/components/layout/footer/dashboard-footer";
import DashboardHeader from "@/components/layout/header/dashboard-header";
import DashboardNavigation from "@/components/layout/settings-sidebar/dashboard-navigation";
import { SettingsSidebar } from "@/components/layout/settings-sidebar/side-bar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  createFileRoute, Outlet
} from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/$publicationId/_pub")({
  component: RouteComponent,
});

function RouteComponent() {

  return (
    <>
      <div className="[--header-height:calc(theme(spacing.14))]">
        <SidebarProvider className="flex flex-col">
          <DashboardHeader />

          <div className="flex flex-1">
            <SettingsSidebar />
            <SidebarInset
              className={cn(
                'w-full',

                'peer-data-[state=collapsed]:max-w-[calc(100vw-var(--sidebar-width-icon)-1rem)]',
                'peer-data-[state=expanded]:max-w-[calc(100vw-var(--sidebar-width)-1rem)]',

                'transition-[width] duration-200 ease-linear'
              )}
            >
              <section className="flex-1 bg-white dark:bg-slate-950 p-4">
                <DashboardNavigation />

                <Outlet />
              </section>
            </SidebarInset>
          </div>
        </SidebarProvider>
        <DashboardFooter />
      </div>
    </>
  );
}
