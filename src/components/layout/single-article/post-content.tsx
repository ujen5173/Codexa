import "@/content.css";
import { useTRPC } from "@/integrations/trpc/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { BookOpen, Dot } from "lucide-react";
import { useRef } from "react";
import { Img } from "react-image";
import PostFooter from "../post-footer";
import PostSimilarArticles from "../post-similar-articles";
import PostTags from "../post-tags";
import PostFloatingSidebar from "./post-floating-sidebar";

const PostContent = () => {
  const { slug } = useParams({ from: "/post/$slug" });
  const contentRef = useRef<HTMLDivElement>(null);
  const trpc = useTRPC();
  const { data: article, isLoading } = useQuery(
    trpc.articles.getBySlug.queryOptions({
      slug: slug || "",
    })
  );

  if (isLoading) {
    return (
      <main className="w-full">
        <div className="mx-auto px-4 pb-12 max-w-236">
          <div className="space-y-8 animate-pulse">
            <div className="bg-slate-200 rounded-lg h-96" />
            <div className="space-y-4">
              <div className="bg-slate-200 mx-auto rounded w-3/4 h-8" />
              <div className="bg-slate-200 mx-auto rounded w-1/2 h-6" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!article) {
    return (
      <main className="w-full">
        <div className="mx-auto px-4 pb-12 max-w-236">
          <div className="py-12 text-center">
            <h1 className="mb-2 font-semibold text-slate-800 text-2xl">
              Article not found
            </h1>
            <p className="text-slate-600">
              The article you're looking for doesn't exist.
            </p>
          </div>
        </div>
      </main>
    );
  }

  const tags = article.tags?.map((at) => at.tag) || [];

  return (
    <main className="relative w-full">
      <div className="mx-auto px-4 lg:px-8 pb-12 max-w-236">
        {article.thumbnail && (
          <div className="-mx-4 md:-mx-8 lg:mx-0 mb-8 rounded-lg h-64 md:h-96 lg:h-[32rem] overflow-hidden">
            <Img
              src={article.thumbnail}
              alt={article.title}
              width={1200}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <section className="relative">
          <div className="flex lg:flex-row flex-col gap-8">
            <div className="flex-1">
              <h1 className="mb-4 md:mb-6 font-semibold text-slate-800 text-3xl md:text-4xl lg:text-5xl lg:text-left text-center">
                {article.title}
              </h1>
              {article.description && (
                <h5 className="mb-6 md:mb-8 font-medium text-slate-600 text-xl md:text-2xl lg:text-left text-center">
                  {article.description}
                </h5>
              )}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 md:gap-4 mb-8 md:mb-12 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <Img
                    src={article.author.image || "/default_user.avif"}
                    alt={article.author.name}
                    width={40}
                    height={40}
                    className="rounded-full size-10 md:size-12 object-cover"
                  />
                  <span className="font-medium text-slate-800">
                    {article.author.name}
                  </span>
                </div>
                <Dot className="size-4 text-slate-400" />
                <span className="text-slate-600">
                  {article.publishedAt
                    ? new Date(article.publishedAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }
                      )
                    : "Draft"}
                </span>
                {article.readingTime && (
                  <>
                    <Dot className="size-4 text-slate-400" />
                    <div className="flex items-center gap-2">
                      <BookOpen className="size-4 md:size-5" />
                      <span className="text-slate-600">
                        {article.readingTime} min read
                      </span>
                    </div>
                  </>
                )}
              </div>

              <div
                ref={contentRef}
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              <PostTags tags={tags} />
              <PostSimilarArticles articleId={article.id} />
            </div>
          </div>
        </section>
      </div>

      {article && (
        <PostFloatingSidebar
          articleId={article.id}
          likeCount={article.likeCount}
          commentCount={article.commentCount}
          isLiked={article.isLiked}
          isBookmarked={article.isBookmarked}
          contentRef={contentRef}
        />
      )}

      <PostFooter />
    </main>
  );
};

export default PostContent;
