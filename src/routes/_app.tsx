import LeftSidebar from "@/components/layout/sidebars/left-sidebar";
import RightSidebar from "@/components/layout/sidebars/right-sidebar";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
  component: AuthLayout,
});

function AuthLayout() {
  return (
    <>
      <main className="bg-sky-50/50 dark:bg-slate-950 px-4 py-4 sm:py-6 w-full">
        <section className="flex flex-col lg:flex-row gap-4 lg:gap-6 mx-auto max-w-385">
          <LeftSidebar />
          <Outlet />
          <RightSidebar className="hidden xl:block" />
        </section>
      </main>
    </>
  );
}
