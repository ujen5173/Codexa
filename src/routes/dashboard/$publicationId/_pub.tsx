import { SettingsSidebar } from "@/components/layout/settings-sidebar/side-bar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { linkItems } from "@/constants/site";
import {
  createFileRoute,
  Link,
  Outlet,
  useLocation,
} from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/$publicationId/_pub")({
  component: RouteComponent,
});

function RouteComponent() {
  const d = useLocation();

  const pathname =
    linkItems.blog_dashboard.find(
      (e) => e.href === `/${d.pathname.split("/").slice(3)[0] ?? ""}`
    )?.label ?? "Overview";

  return (
    <main className="flex bg-white dark:bg-slate-950 min-h-screen">
      <SettingsSidebar />

      <section className="flex-1 p-4">
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{pathname}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <Outlet />
      </section>
    </main>
  );
}
