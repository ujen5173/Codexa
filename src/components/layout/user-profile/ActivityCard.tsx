import Logo from "@/components/common/logo";
import { Link } from "@tanstack/react-router";
import { PencilEdit01Icon } from "hugeicons-react";
import type { FC } from "react";
import { v4 as uuid } from "uuid";

interface Activity {
  id: string;
  title: string;
  slug: string;
  activity_type: "ARTICLE" | "JOINED";
  createdAt: Date;
}

interface Props {
  index: number;
  item: Activity;
  activityLength: number;
}

const ActivityCard: FC<Props> = ({ index, item, activityLength }) => {
  const user = "@ujen5173";

  return (
    <div
      key={uuid()}
      className={`${index === activityLength - 1 ? "" : "border-b"
        } w-full border-border-light py-2 dark:border-border`}
    >
      <div className="flex items-center gap-2 mb-2 last:mb-0">
        {item.activity_type === "JOINED" ? (
          <Logo size="sm" onlyIcon />
        ) : (
          <PencilEdit01Icon className="fill-none stroke-gray-700 dark:stroke-text-secondary w-4 h-4" />
        )}
        <span className="text-gray-700 dark:text-slate-300">
          {item.activity_type === "JOINED"
            ? "Joined Codexa"
            : "Wrote an article"}
        </span>
      </div>

      {item.activity_type !== "JOINED" && (
        <Link to={`/u/@{$username}/$slug`} params={{
          slug: item.slug,
          username: "ujen5173"
        }} className="mb-2">
          <div>
            <span className="font-semibold text-gray-700 hover:text-gray-500 dark:hover:text-slate-100 dark:hover:text-text-primary dark:text-slate-50 dark:text-text-secondary text-lg">
              {item.title}
            </span>
          </div>
        </Link>
      )}
    </div>
  );
};

export default ActivityCard;
