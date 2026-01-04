import PostHeader from "@/components/layout/single-article/post-header";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/u/@{$username}/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-white min-h-screen">
      <PostHeader />
      {/* <PostContent /> */}
    </div>
  );
}
