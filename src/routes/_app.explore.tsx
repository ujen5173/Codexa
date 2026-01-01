import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { data, platformName } from "@/lib/constants";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookmarkPlus,
  Dot,
  NotepadText,
  Ribbon,
  Tag,
  TrendingUp,
} from "lucide-react";
import { Img } from "react-image";

export const Route = createFileRoute("/_app/explore")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="rounded-sm space-y-8 flex-8">
      <div className="rounded-md border border-border-light bg-white px-4 py-12 dark:border-border dark:bg-primary md:px-6">
        <h1 className="mb-4 text-center text-3xl font-semibold text-gray-700 dark:text-text-secondary">
          Explore Tech articles & Tags
        </h1>
        <p className="mx-auto w-full text-center text-base font-normal text-gray-500 dark:text-text-primary md:w-10/12 lg:w-8/12">
          Everything that&apos;s… Codexa. Explore the most popular tech articles
          from the codexa community. A constantly updating list of popular tags
          and the best minds in tech.
        </p>
      </div>

      <div className="space-y-4 font-inter">
        <div className="flex gap-1">
          <Button
            className="hover:border-transparent hover:bg-blue-300/20 bg-blue-300/20 hover:text-primary font-medium text-primary"
            variant="ghost"
            icon={TrendingUp}
          >
            Trending
          </Button>
          <Button
            className="hover:border-slate-200 hover:bg-slate-100 hover:text-slate-700 font-medium text-slate-700"
            variant="ghost"
            icon={Tag}
          >
            Tags
          </Button>
          <Button
            className="hover:border-slate-200 hover:bg-slate-100 hover:text-slate-700 font-medium text-slate-700"
            variant="ghost"
            icon={NotepadText}
          >
            Articles
          </Button>
        </div>
        <div className="space-y-4">
          {data["posts"].map((article, idx) => {
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-border p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Img
                    src={`/users/${idx + 1}.png`}
                    className="size-10 rounded-full object-cover"
                  />
                  <div className="">
                    <p className="text-base font-semibold text-slate-700">
                      {article.author.name}
                    </p>
                    <div className="flex items-center">
                      <p className="text-sm text-slate-700">
                        {article.author.blog.replace(
                          "hashnode",
                          platformName.toLowerCase()
                        )}
                      </p>
                      <Dot className="text-slate-700" />
                      <span className="text-slate-700 text-sm">
                        {article.published}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xl mb-2 font-bold text-slate-800">
                    {article.title}
                  </p>
                  <p className="text-base mb-6 text-slate-600">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700">
                      {article.likes && <>{article.likes} likes</>}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        {article.tags.map((tag) => (
                          <Link to={`/t/${tag}`}>
                            <Badge
                              key={tag}
                              className="hover:bg-slate-200 bg-slate-100 text-slate-700 border-transparent px-2.5 py-1"
                              variant={"outline"}
                            >
                              {tag}
                            </Badge>
                          </Link>
                        ))}
                      </div>
                      <Separator
                        className="h-[17px!important]"
                        orientation="vertical"
                      />
                      <BookmarkPlus
                        className="text-slate-700 stroke-1"
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
