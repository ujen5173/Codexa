import ArticleCard from "@/components/common/article-card";
import { data } from "@/lib/constants";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/search/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="space-y-6 bg-white dark:bg-slate-950 px-4 py-6 w-full">
      <div className="space-y-8 mx-auto max-w-4xl">
        <div className="bg-slate-100 dark:bg-slate-900 p-6 border border-border dark:border-slate-800 rounded-xl">
          <h4 className="mb-2 text-slate-700 dark:text-slate-300 text-xl">
            Search results for:
          </h4>
          <h1 className="font-semibold text-slate-800 dark:text-slate-100 text-xl">
            "Webhooks and setup in Next.js"
          </h1>
        </div>

        <div className="space-y-4">
          {data["posts"].map((article) => {
            return (
              <ArticleCard article={article} />
            );
          })}
        </div>
      </div>
    </main>
  );
}
