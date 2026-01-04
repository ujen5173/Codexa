import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/settings/_base")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="w-full">
      <main>
        Base layout
        <Outlet />
      </main>
    </section>
  );
}
