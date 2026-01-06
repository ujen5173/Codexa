
import Logo from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sidebar, SidebarContent, SidebarFooter } from "@/components/ui/sidebar";
import { useTRPC } from "@/integrations/trpc/react";
import { authClient } from "@/lib/auth-client";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  Add01Icon,
  CheckmarkCircle01Icon,
  Delete01Icon,
  File01Icon,
  Home01Icon,
  Search01Icon,
  Settings01Icon
} from "hugeicons-react";
import { useState } from "react";
import { Img } from "react-image";

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
  const [activeTab, setActiveTab] = useState<"drafts" | "published">("drafts");

  const articles = [];
  const isLoading = false;

  const deleteArticle = useMutation(trpc.writing.delete.mutationOptions());

  const filteredArticles =
    articles?.filter(
      (article) =>
        (article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.slug.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (activeTab === "drafts" ? article.status === "draft" : article.status === "published")
    ) || [];

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm("Are you sure you want to delete this article?")) {
      await deleteArticle.mutateAsync({ id });
    }
  };

  return (
    <Sidebar className="z-50 shadow-xl backdrop-blur-sm border-border dark:border-slate-600/60 border-r">
      <SidebarContent className="flex flex-col bg-white dark:bg-slate-900 h-full">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-2">
            <Logo size="sm" onlyIcon />
            <span className="font-semibold text-lg tracking-tight">JS Topic</span>
          </div>
        </div>

        <div className="px-4 pb-2">
          <div className="relative">
            <Search01Icon className="top-1/2 left-3 absolute size-4 text-muted-foreground -translate-y-1/2" />
            <Input
              placeholder="Search stories..."
              className="bg-muted/20 focus:bg-background pl-9 border-border/40 h-9 transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="px-4 py-2">
          <div className="flex bg-muted/20 p-1 border border-border/20 rounded-lg">
            <button
              onClick={() => setActiveTab("drafts")}
              className={`flex-1 flex items-center justify-center gap-2 py-1.5 text-xs font-medium rounded-md transition-all ${activeTab === 'drafts' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              <span className="bg-orange-400 rounded-full w-2 h-2" />
              Drafts
            </button>
            <button
              onClick={() => setActiveTab("published")}
              className={`flex-1 flex items-center justify-center gap-2 py-1.5 text-xs font-medium rounded-md transition-all ${activeTab === 'published' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              <span className="bg-green-500 rounded-full w-2 h-2" />
              Published
            </button>
          </div>
        </div>

        <div className="px-4 py-2">
          <Button
            onClick={onNewArticle}
            className="justify-start w-full font-medium text-sm"
            variant="outline"
            icon={Add01Icon}
          >
            Create new story
          </Button>
        </div>

        <ScrollArea className="flex-1 px-4 py-2">
          <div className="space-y-1 pb-4">
            {isLoading && (
              <div className="space-y-3 pt-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-muted/40 rounded-lg h-16 animate-pulse" />
                ))}
              </div>
            )}

            {!isLoading && filteredArticles.length === 0 && (
              <div className="flex flex-col justify-center items-center space-y-2 py-10 text-center">
                <div className="bg-muted/30 p-3 rounded-full">
                  <File01Icon className="size-6 text-muted-foreground/50" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {searchQuery ? "No stories matching search" : `No ${activeTab} yet`}
                </p>
              </div>
            )}

            {filteredArticles.map(article => (
              <div
                key={article.id}
                onClick={() => onSelectArticle(article.id)}
                className={`group relative p-3 rounded-xl border transition-all cursor-pointer hover:shadow-sm ${selectedArticleId === article.id ? 'bg-primary/5 border-primary/20' : 'bg-card border-transparent hover:bg-muted/30 hover:border-border/50'}`}
              >
                <div className="flex justify-between items-start gap-2">
                  <div className="flex-1 space-y-1 min-w-0">
                    <h3 className={`font-medium text-sm truncate pr-6 ${selectedArticleId === article.id ? 'text-primary' : 'text-foreground'}`}>
                      {article.title || "Untitled Story"}
                    </h3>
                    <p className="text-muted-foreground text-xs">
                      Last edited {new Date(article.updatedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                    </p>
                  </div>

                  {selectedArticleId === article.id && (
                    <CheckmarkCircle01Icon className="opacity-100 size-4 text-primary transition-opacity shrink-0" />
                  )}
                </div>

                <div className="right-2 bottom-2 absolute">
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={(e) => handleDelete(article.id, e)}
                    className="hover:bg-destructive/10 opacity-0 group-hover:opacity-100 w-7 h-7 hover:text-destructive transition-all"
                  >
                    <Delete01Icon className="size-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <SidebarFooter className="p-0">
          <div className="space-y-1 bg-muted/10 p-3 border-border/50 border-t">
            <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-3 border border-border dark:border-slate-600-60 rounded-md">
              <Img src={user?.user.image ?? "/default_user.avif"} alt="" width={200} height={200} className="rounded-full size-8 object-cover" />
              <div>
                <h5 className="font-semibold text-slate-800 dark:text-slate-100 text-sm">
                  {user?.user.name}
                </h5>
                <p className="text-slate-800 dark:text-slate-100 text-xs">
                  {user?.user.email}
                </p>
              </div>
            </div>
            <Button asChild variant="ghost" className="justify-start w-full h-9 text-muted-foreground hover:text-foreground" icon={Home01Icon}>
              <Link to="/">
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="ghost" className="justify-start w-full h-9 text-muted-foreground hover:text-foreground" icon={Settings01Icon}>
              <Link to="/settings">
                Settings
              </Link>
            </Button>
          </div>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
};

export default WritingSidebar;
