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
      <section className="mt-12 pt-8 border-t border-slate-200">
        <h3 className="text-xl font-semibold text-slate-800 mb-6">
          Similar Articles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-slate-200 rounded-lg h-48 mb-4" />
              <div className="bg-slate-200 rounded h-4 mb-2" />
              <div className="bg-slate-200 rounded h-4 w-3/4" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (!similarArticles || similarArticles.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-slate-200">
      <h3 className="text-xl font-semibold text-slate-800 mb-6">
        Similar Articles
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {similarArticles.map((article) => (
          <Link
            key={article.id}
            to="/post/$slug"
            params={{ slug: article.slug }}
            className="group"
          >
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              {article.thumbnail && (
                <div className="aspect-video overflow-hidden bg-slate-100">
                  <Img
                    src={article.thumbnail}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-4">
                <h4 className="font-semibold text-slate-800 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h4>
                {article.description && (
                  <p className="text-sm text-slate-600 line-clamp-2 mb-3">
                    {article.description}
                  </p>
                )}
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Img
                      src={article.author.image || "/default_user.avif"}
                      alt={article.author.name}
                      className="size-5 rounded-full object-cover"
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
