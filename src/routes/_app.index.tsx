import ArticleCard from "@/components/common/article-card";
import { Button } from "@/components/ui/button";
import { data } from "@/lib/constants";
import { createFileRoute } from "@tanstack/react-router";
import { Idea01Icon, UserGroupIcon } from "hugeicons-react";
import { WandSparkles } from "lucide-react";

export const Route = createFileRoute("/_app/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-8 space-y-5 rounded-sm">
      <div className="flex gap-1">
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
      <div className="space-y-4">
        {data["posts"].map((article) => (
          <ArticleCard article={article} />
        ))}
      </div>
    </main>
  );
}
