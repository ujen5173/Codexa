import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/$publicationId/_pub/posts")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/dashboard/$publicationId/_pub/general"!</div>;
}
