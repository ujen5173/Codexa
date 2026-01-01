import { Link } from "@tanstack/react-router";
import { Badge } from "../../ui/badge";

interface Tag {
  id: string;
  name: string;
  slug: string;
  color?: string;
}

interface PostTagsProps {
  tags: Tag[];
}

const PostTags = ({ tags }: PostTagsProps) => {
  if (tags.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-slate-200">
      <h3 className="text-sm font-semibold text-slate-700 mb-4">Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            key={tag.id}
            to="/t/$slug"
            params={{ slug: tag.slug }}
            className="transition-transform hover:scale-105"
          >
            <Badge
              variant="secondary"
              className="text-sm px-3 py-1.5 cursor-pointer hover:bg-slate-200"
              style={{
                backgroundColor: tag.color ? `${tag.color}15` : undefined,
                borderColor: tag.color || undefined,
                color: tag.color || undefined,
              }}
            >
              {tag.name}
            </Badge>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PostTags;
