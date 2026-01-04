import { useTRPC } from "@/integrations/trpc/react";
import { Link } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { Img } from "react-image";

interface PostSimilarArticlesProps {
  articleId: string;
}

const PostSimilarArticles = ({ articleId }: PostSimilarArticlesProps) => {
  const trpc = useTRPC();
  const { data: similarArticles, isLoading } =
    trpc.articles.getSimilar.useQuery({
      articleId,
      limit: 3,
    });

  if (isLoading) {
    return (
      <section className="mt-12 pt-8 border-slate-200 border-t">
        <h3 className="mb-6 font-semibold text-slate-800 text-xl">
          Similar Articles
        </h3>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-slate-200 mb-4 rounded-lg h-48" />
              <div className="bg-slate-200 mb-2 rounded h-4" />
              <div className="bg-slate-200 rounded w-3/4 h-4" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (!similarArticles || similarArticles.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-slate-200 border-t">
      <h3 className="mb-6 font-semibold text-slate-800 text-xl">
        Similar Articles
      </h3>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
        {similarArticles.map((article) => (
          <Link
            key={article.id}
            to="/post/$slug"
            params={{ slug: article.slug }}
            className="group"
          >
            <div className="bg-white hover:shadow-lg border border-slate-200 rounded-xl overflow-hidden transition-shadow">
              {article.thumbnail && (
                <div className="bg-slate-100 aspect-video overflow-hidden">
                  <Img
                    src={article.thumbnail}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-4">
                <h4 className="mb-2 font-semibold text-slate-800 group-hover:text-primary line-clamp-2 transition-colors">
                  {article.title}
                </h4>
                {article.description && (
                  <p className="mb-3 text-slate-600 text-sm line-clamp-2">
                    {article.description}
                  </p>
                )}
                <div className="flex items-center gap-4 text-slate-500 text-xs">
                  <div className="flex items-center gap-1.5">
                    <Img
                      src={article.author.image || "/default_user.avif"}
                      alt={article.author.name}
                      className="rounded-full size-5 object-cover"
                    />
                    <span>{article.author.name}</span>
                  </div>
                  {article.readingTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="size-3" />
                      <span>{article.readingTime} min</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PostSimilarArticles;
