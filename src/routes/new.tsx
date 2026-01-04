import WritingEditor from "@/components/layout/new/writing-editor";
import WritingSidebar from "@/components/layout/new/writing-sidebar";
import { authMiddleware } from "@/middleware/auth";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/new")({
  component: RouteComponent,
  server: {
    middleware: [authMiddleware],
  },
  validateSearch: (search: Record<string, unknown>): { id?: string } => {
    return {
      id: (search.id as string) || undefined,
    };
  },
});

function RouteComponent() {
  const { id } = Route.useSearch();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedArticleId, setSelectedArticleId] = useState<
    string | undefined
  >(id);

  useEffect(() => {
    setSelectedArticleId(id);
  }, [id]);

  const handleNewArticle = () => {
    setSelectedArticleId(undefined);
    navigate({
      to: "/new",
      search: {},
    });
  };

  const handleSelectArticle = (articleId: string) => {
    setSelectedArticleId(articleId);
    navigate({
      to: "/new",
      search: { id: articleId },
    });
  };

  return (
    <div className="flex bg-white h-screen overflow-hidden">
      <WritingSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onNewArticle={handleNewArticle}
        onSelectArticle={handleSelectArticle}
        selectedArticleId={selectedArticleId}
      />
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "lg:ml-80" : ""
        }`}
      >
        <WritingEditor
          articleId={selectedArticleId}
          onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
    </div>
  );
}
