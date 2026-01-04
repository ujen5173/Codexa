import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { NUMBER_FORMATTER } from "@/lib/constants";
import { Link } from "@tanstack/react-router";
import { formatDate } from "date-fns";
import {
  Bookmark02Icon,
  BookOpen02Icon,
  BubbleChatIcon,
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
    <div
      key={article.id}
      className="bg-white dark:bg-slate-900 p-5 border border-border dark:border-slate-800 rounded-2xl"
    >
      <div className="flex items-center gap-3 mb-3">
        <Img
          src={article.author.image}
          className="rounded-full size-10 object-cover"
        />
        <div className="">
          <p className="font-semibold text-slate-700 dark:text-slate-200 text-base">
            {article.author.name}
          </p>
          <div className="flex items-center">
            <p className="text-slate-700 dark:text-slate-200 text-sm">
              {article.author.blog}
            </p>
            <Dot className="text-slate-700 dark:text-slate-200" />
            <span className="text-slate-700 dark:text-slate-300 text-sm">
              {formatDate(article.createdAt, "MMM dd, yyyy")}
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
          <div className="flex items-center gap-4">
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
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {article.tags.map((tag) => (
                <Link key={tag.slug} to={`/t/${tag.slug}`}>
                  <Badge
                    className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 px-2.5 py-1 border-transparent text-slate-700 dark:text-slate-300"
                    variant={"outline"}
                  >
                    {tag.title}
                  </Badge>
                </Link>
              ))}
            </div>
            <Separator className="h-[17px!important]" orientation="vertical" />
            <Bookmark02Icon
              className="stroke-1 text-slate-700 dark:text-slate-300"
              size={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
