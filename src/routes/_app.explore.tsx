import ArticleCard from "@/components/common/article-card";
import { Button } from "@/components/ui/button";
import { data } from "@/lib/constants";
import { createFileRoute } from "@tanstack/react-router";
import { NotepadText, Tag, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/_app/explore")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-8 space-y-8 rounded-sm">
      <div className="bg-white dark:bg-slate-900 px-4 md:px-6 py-12 border border-border-light dark:border-slate-800 rounded-xl">
        <h1 className="mb-2 font-semibold text-gray-700 dark:text-slate-200 text-3xl text-center">
          Explore Tech articles & Tags
        </h1>
        <p className="mx-auto w-full md:w-10/12 lg:w-8/12 font-normal text-gray-500 dark:text-slate-400 text-base text-center">
          Everything that&apos;s… Codexa. Explore the most popular tech articles
          from the codexa community.
        </p>
      </div>

      <div className="space-y-4 font-inter">
        <div className="flex gap-1">
          <Button
            className="bg-blue-300/20 hover:bg-blue-300/20 hover:border-transparent font-medium text-primary hover:text-primary"
            variant="ghost"
            icon={TrendingUp}
          >
            Trending
          </Button>
          <Button
            className="hover:bg-slate-100 hover:border-slate-200 hover:dark:border-primary/10 font-medium text-slate-700 hover:dark:text-slate-300 hover:text-slate-700 dark:text-slate-200"
            variant="ghost"
            icon={Tag}
          >
            Tags
          </Button>
          <Button
            className="hover:bg-slate-100 hover:border-slate-200 hover:dark:border-primary/10 font-medium text-slate-700 hover:dark:text-slate-300 hover:text-slate-700 dark:text-slate-200"
            variant="ghost"
            icon={NotepadText}
          >
            Articles
          </Button>
        </div>
        <div className="space-y-4">
          {data["posts"].map((article) => (
            <ArticleCard article={article} />
          ))}
        </div>
      </div>
    </main>
  );
}
