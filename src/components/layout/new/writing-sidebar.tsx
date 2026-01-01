import Logo from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/integrations/trpc/react";
import { authClient } from "@/lib/auth-client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  FilePlus2,
  Files,
  FileText, PanelRightOpen, Search,
  Settings,
  Trash2
} from "lucide-react";
import { useState } from "react";

interface WritingSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNewArticle: () => void;
  onSelectArticle: (id: string) => void;
  selectedArticleId?: string;
}

const WritingSidebar = ({
  isOpen,
  onClose,
  onNewArticle,
  onSelectArticle,
  selectedArticleId,
}: WritingSidebarProps) => {
  const { data: user } = authClient.useSession();
  const trpc = useTRPC();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const { data: articles, isLoading } = useQuery(
    trpc.writing.list.queryOptions()
  );
  const deleteArticle = useMutation(trpc.writing.delete.mutationOptions());

  const filteredArticles =
    articles?.filter(
      (article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.slug.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm("Are you sure you want to delete this article?")) {
      await deleteArticle.mutateAsync({ id });
    }
  };

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 z-50 w-68 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Logo onlyIcon size="sm" />
              {user?.user && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-slate-800">
                    {user.user.name}
                  </span>
                </div>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={onClose}
              className="h-8 w-8"
              icon={PanelRightOpen}
              
            />
          </div>

          <div className="p-4 border-b border-slate-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Search articles or drafts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <Button
              onClick={onNewArticle}
              className="w-full mb-4"
              variant="ghost"
              icon={FilePlus2}
              
            >
              New draft
            </Button>

            <div className="space-y-1">
              {isLoading ? (
                <div className="text-sm text-slate-500 text-center py-8">
                  Loading...
                </div>
              ) : filteredArticles.length === 0 ? (
                <div className="text-sm text-slate-500 text-center py-8">
                  {searchQuery ? "No articles found" : "No articles yet"}
                </div>
              ) : (
                filteredArticles.map((article) => (
                  <div
                    key={article.id}
                    onClick={() => onSelectArticle(article.id)}
                    className={`group flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedArticleId === article.id
                        ? "bg-primary/10 border border-primary/20"
                        : "hover:bg-slate-100 border border-transparent"
                    }`}
                  >
                    <FileText className="size-4 text-slate-500 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-slate-800 truncate">
                        {article.title || "Untitled"}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {article.status === "draft" ? "Draft" : "Published"} •{" "}
                        {new Date(article.updatedAt).toLocaleDateString()}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={(e) => handleDelete(article.id, e)}
                      className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="size-3 text-red-500" />
                    </Button>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="p-4 border-t border-slate-200">
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => navigate({ to: "/dashboard" })}
              icon={Files}
              
            >
              View deleted articles
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => navigate({ to: "/dashboard" })}
              icon={Settings}
              
            >
              Blog Dashboard
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => navigate({ to: "/" })}
              icon={ArrowLeft}
              
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default WritingSidebar;
