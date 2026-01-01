import LeftSidebar from "@/components/layout/sidebars/left-sidebar";
import RightSidebar from "@/components/layout/sidebars/right-sidebar";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
  component: AuthLayout,
});

function AuthLayout() {
  return (
    <>
      <main className="w-full bg-sky-50/50 px-4 py-6">
        <section className="flex gap-6 max-w-385 mx-auto">
          <LeftSidebar />
          <Outlet />
          <RightSidebar />
        </section>
      </main>
    </>
  );
}
