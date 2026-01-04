import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/settings/_base/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/settings/profile"!</div>;
}
