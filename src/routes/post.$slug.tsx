import PostContent from "@/components/layout/single-article/post-content";
import PostHeader from "@/components/layout/single-article/post-header";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/post/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-white">
      <PostHeader />
      <PostContent />
    </div>
  );
}
