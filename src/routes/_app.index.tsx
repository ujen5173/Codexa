import ArticleCard from "@/components/common/article-card";
import RightSidebar from "@/components/layout/sidebars/right-sidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { data } from "@/lib/constants";
import { createFileRoute } from "@tanstack/react-router";
import { Idea01Icon, UserGroupIcon } from "hugeicons-react";
import { PanelRight, WandSparkles } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_app/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

  return (
    <main className="flex-1 lg:flex-8 space-y-5 rounded-sm w-full">
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1 sm:gap-2">
          <Button
            className="bg-blue-300/20 hover:bg-blue-300/20 hover:border-transparent font-medium text-primary hover:text-primary"
            variant="ghost"
            icon={WandSparkles}
          >
            Personalized
          </Button>
          <Button
            className="hover:bg-slate-100 hover:border-slate-200 hover:dark:border-primary/10 font-medium text-slate-700 hover:dark:text-slate-300 hover:text-slate-700 dark:text-slate-200"
            variant="ghost"
            icon={UserGroupIcon}
          >
            Following
          </Button>

          <Button
            className="hover:bg-slate-100 hover:border-slate-200 hover:dark:border-primary/10 font-medium text-slate-700 hover:dark:text-slate-300 hover:text-slate-700 dark:text-slate-200"
            variant="ghost"
            icon={Idea01Icon}
          >
            Discover
          </Button>
        </div>
        <div className="block sm:hidden">

          <Sheet open={rightSidebarOpen} onOpenChange={setRightSidebarOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 border-border hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                aria-label="Open sidebar"
                title="Open sidebar"
              >
                <PanelRight className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0 overflow-y-auto custom-scrollbar">
              <SheetHeader className="sr-only">
                <SheetTitle>Sidebar</SheetTitle>
              </SheetHeader>
              <div className="h-full bg-sky-50/50 dark:bg-slate-950 p-4 pb-8 space-y-5">
                <RightSidebar />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="space-y-4">
        {data["posts"].map((article) => (
          <ArticleCard article={article} />
        ))}
      </div>
    </main>
  );
}
