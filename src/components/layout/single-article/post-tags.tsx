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
    <section className="mt-12 pt-8 border-slate-200 border-t">
      <h3 className="mb-4 font-semibold text-slate-700 text-sm">Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            key={tag.id}
            to="/t/$slug"
            params={{ slug: tag.slug }}
            className="hover:scale-105 transition-transform"
          >
            <Badge
              variant="secondary"
              className="hover:bg-slate-200 px-3 py-1.5 text-sm cursor-pointer"
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
