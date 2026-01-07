import ArticleCard from "@/components/common/article-card";
import { data } from "@/lib/constants";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/bookmarks")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 lg:flex-8 space-y-4 sm:space-y-6 rounded-sm w-full">
      <div className="bg-white dark:bg-slate-900 px-4 sm:px-6 py-8 sm:py-12 border border-border-light dark:border-slate-800 rounded-xl">
        <h1 className="mb-2 font-semibold text-gray-700 dark:text-slate-200 text-2xl sm:text-3xl text-center">
          Bookmarks
        </h1>

        <p className="mx-auto w-full sm:w-10/12 lg:w-8/12 font-normal text-gray-500 dark:text-slate-400 text-sm sm:text-base text-center px-2">
          Saved items you want to come back to later.
        </p>
      </div>
      <div className="space-y-4">
        {data["posts"].map((article) => (
          <ArticleCard article={article} />
        ))}
      </div>
    </main>
  );
}
