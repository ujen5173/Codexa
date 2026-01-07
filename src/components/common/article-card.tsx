import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { NUMBER_FORMATTER } from "@/lib/constants";
import { Link } from "@tanstack/react-router";
import { formatDate } from "date-fns";
import {
  Bookmark02Icon,
  BookOpen02Icon,
  BubbleChatIcon,
  CheckmarkBadge02Icon,
  FavouriteIcon,
} from "hugeicons-react";
import { Dot } from "lucide-react";
import { Img } from "react-image";

type Article = {
  id: string;
  title: string;
  excerpt: string;
  likes: number;
  reads: number;
  discussion: number;
  readingTime: number;
  thumbnail: string | null;
  author: {
    pro: boolean;
    name: string;
    blog: string;
    image: string;
    username: string;
  };
  tags: {
    title: string;
    slug: string;
  }[];
  series: string | null;
  createdAt: Date;
};

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <Link
      to="/u/@{$username}/$slug"
      className="block"
      params={{
        username: "ujen5173",
        slug: "global-economy-thrives-in-2025-a-closer-look"
      }}
      key={article.id}>
      <div
        className="bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800/70 p-4 sm:p-5 border border-border dark:border-slate-800 rounded-xl sm:rounded-2xl"
      >
        <div className="flex items-center gap-2 sm:gap-3 mb-3">
          <Img
            src={article.author.image}
            className="rounded-full size-8 sm:size-10 object-cover shrink-0"
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <p className="font-semibold text-slate-700 dark:text-slate-200 text-sm sm:text-base truncate">
                {article.author.name}
              </p>
              <CheckmarkBadge02Icon className="fill-primary size-4 sm:size-5 text-slate-200 dark:text-slate-900 shrink-0" />
            </div>
            <div className="flex items-center gap-1 min-w-0">
              <p className="font-medium text-slate-700 dark:text-slate-200 text-xs sm:text-sm tracking-wider truncate">
                {article.author.blog}
              </p>
              <Dot className="text-slate-700 dark:text-slate-200 shrink-0" />
              <span className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm whitespace-nowrap">
                {formatDate(article.createdAt, "MMM dd, yyyy")}
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-5">
            <div className="flex-1 min-w-0 w-full">
              <p className="mb-2 font-title font-bold text-slate-800 dark:text-slate-200 text-xl sm:text-2xl line-clamp-2">
                {article.title}
              </p>
              <p className="mb-4 sm:mb-6 font-content text-slate-600 dark:text-slate-300 text-base sm:text-lg line-clamp-3">
                {article.excerpt}
              </p>
            </div>
            {
              article.likes > 1_000 && (
                <div className="w-full sm:w-56 shrink-0">
                  <Img
                    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1766924449488/90b4d3b9-cf7e-4a80-91f7-698e5dcf03a0.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
                    width={800}
                    height={512}
                    className="rounded-md w-full sm:w-56 h-60 sm:h-32 object-cover"
                  />
                </div>
              )
            }
          </div>
          <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <FavouriteIcon
                  className="text-slate-800 dark:text-slate-400"
                  size={16}
                />
                <span className="text-slate-700 dark:text-slate-200 text-sm">
                  {article.likes && (
                    <>{NUMBER_FORMATTER.format(article.likes)} likes</>
                  )}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BubbleChatIcon
                  className="text-slate-800 dark:text-slate-400"
                  size={16}
                />
                <span className="text-slate-700 dark:text-slate-200 text-sm">
                  {article.discussion && (
                    <>{NUMBER_FORMATTER.format(article.discussion)} likes</>
                  )}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen02Icon
                  className="text-slate-800 dark:text-slate-400"
                  size={16}
                />
                <span className="text-slate-700 dark:text-slate-200 text-sm">
                  {article.reads && (
                    <>{NUMBER_FORMATTER.format(article.reads)} likes</>
                  )}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 flex-1 sm:flex-initial">
                {article.tags.map((tag) => (
                  <Link key={tag.slug} to={`/tag/$slug`} params={{ slug: tag.slug }}>
                    <Badge
                      className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 px-2 sm:px-2.5 py-0.5 sm:py-1 border-transparent text-slate-700 dark:text-slate-300 text-xs sm:text-sm"
                      variant={"outline"}
                    >
                      {tag.title}
                    </Badge>
                  </Link>
                ))}
              </div>
              <Separator className="hidden sm:block h-[17px!important]" orientation="vertical" />
              <Bookmark02Icon
                className="stroke-1 text-slate-700 dark:text-slate-300 shrink-0"
                size={18}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>

  );
};

export default ArticleCard;
