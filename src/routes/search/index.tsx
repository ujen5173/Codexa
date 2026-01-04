import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { data, platformName } from "@/lib/constants";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Bookmark02Icon } from "hugeicons-react";
import { Dot } from "lucide-react";
import { Img } from "react-image";
export const Route = createFileRoute("/search/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="space-y-6 bg-white dark:bg-zinc-950 px-4 py-6 w-full font-inter">
      <div className="space-y-8 mx-auto max-w-4xl">
        <div className="p-6 border border-border dark:border-slate-800 rounded-xl">
          <h4 className="mb-2 font-semibold text-slate-700 dark:text-slate-300 text-xl">
            Search results for:
          </h4>
          <h1 className="font-semibold text-slate-800 dark:text-slate-100 text-xl">
            "Webhooks and setup in Next.js"
          </h1>
        </div>

        <div className="space-y-4">
          {data["posts"].map((article, idx) => {
            return (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-950 p-5 border border-border dark:border-slate-800 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Img
                    src={`/users/${idx + 1}.png`}
                    className="rounded-full size-10 object-cover"
                  />
                  <div className="">
                    <p className="font-semibold text-slate-700 dark:text-slate-200 text-base">
                      {article.author.name}
                    </p>
                    <div className="flex items-center">
                      <p className="text-slate-700 dark:text-slate-200 text-sm">
                        {article.author.blog.replace(
                          "hashnode",
                          platformName.toLowerCase()
                        )}
                      </p>
                      <Dot className="text-slate-700 dark:text-slate-200" />
                      <span className="text-slate-700 dark:text-slate-200 text-sm">
                        {article.published}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-2 font-bold text-slate-800 dark:text-slate-200 text-xl">
                    {article.title}
                  </p>
                  <p className="mb-6 text-slate-600 dark:text-slate-300 text-base">
                    {article.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 dark:text-slate-200 text-sm">
                      {article.likes && <>{article.likes} likes</>}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        {article.tags.map((tag) => (
                          <Link to={`/t/${tag.slug}`}>
                            <Badge
                              key={tag.slug}
                              className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 px-2.5 py-1 border-transparent text-slate-700 dark:text-slate-300"
                              variant={"outline"}
                            >
                              {tag.title}
                            </Badge>
                          </Link>
                        ))}
                      </div>
                      <Separator
                        className="h-[17px!important]"
                        orientation="vertical"
                      />
                      <Bookmark02Icon
                        className="stroke-1 text-slate-700 dark:text-slate-300"
                        size={20}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
