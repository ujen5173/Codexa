import type * as schemaFile from "@/db/schema";
import { user } from "@/db/schema";
import { eq } from "drizzle-orm";
import { type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { ArticleCardWithComments } from "./types";

export const FILTER_TIME_OPTIONS = {
  any: "ANY",
  week: "WEEK",
  month: "MONTH",
  year: "YEAR",
};

export interface Session {
  user: {
    id: string;
    name: string;
    email: string;
    image?: string | null;
  };
  session: {
    id: string;
    expiresAt: Date;
    ipAddress?: string | null;
    userAgent?: string | null;
    userId: string;
  };
}

export function displayUniqueObjects(
  objects: Array<{ id: string; image: string | null }>,
) {
  // Create a set to store the unique IDs.
  const uniqueIds = new Set();
  // Create an array to store the unique objects.
  const uniqueObjects = [];

  // Iterate over the objects and add them to the set if they are not already present.
  for (const object of objects) {
    const id = object.id;
    if (!uniqueIds.has(id)) {
      uniqueIds.add(id);
      uniqueObjects.push(object);
    }
  }

  // Return the list of unique objects.
  return uniqueObjects;
}

export const getArticlesWithUserFollowingimages = async (
  ctx: {
    session: Session | null;
    db: PostgresJsDatabase<typeof schemaFile>;
  },
  articles: ArticleCardWithComments[],
) => {
  // If user is logged in, get the user's following images else return empty array for commenUsers
  // Retrieve user following outside the loop
  const userFollowing = ctx.session?.user
    ? await ctx.db.query.user.findFirst({
        where: eq(user.id, ctx.session.user.id),
        with: {
          following: {
            columns: {
              followingId: true,
            },
          },
        },
      })
    : null;

  // Combine the mapping logic into a single loop
  const updatedArticles = articles.map((article) => {
    const { comments, ...rest } = article;
    let followingComments: {
      id: string;
      image: string | null;
    }[] = [];

    if (userFollowing) {
        
        const followingIds = new Set(userFollowing.following.map((f: { followingId: string }) => f.followingId));
        
      followingComments = displayUniqueObjects(
        comments
          .map((c) => c.user)
          .filter((user) => followingIds.has(user.id)),
      );
    }

    return { ...rest, commonUsers: followingComments };
  });

  // Handle the case when ctx.session.user is not present
  if (!ctx.session?.user) {
    updatedArticles.forEach((article) => {
      article.commonUsers = [];
    });
  }

  return updatedArticles;
};
