import { db } from '@/db'
import {
  articleBookmarks,
  articleComments,
  articleLikes,
  articles,
  articleShares,
  articleTags, user
} from '@/db/schema'
import { and, desc, eq, inArray, ne, sql } from 'drizzle-orm'
import { nanoid } from 'nanoid'
import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from './init'

import type { TRPCRouterRecord } from '@trpc/server'

const todos = [
  { id: 1, name: 'Get groceries' },
  { id: 2, name: 'Buy a new phone' },
  { id: 3, name: 'Finish the project' },
]

const todosRouter = {
  list: publicProcedure.query(() => todos),
  add: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(({ input }) => {
      const newTodo = { id: todos.length + 1, name: input.name }
      todos.push(newTodo)
      return newTodo
    }),
} satisfies TRPCRouterRecord

const articlesRouter = {
  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input, ctx }) => {
      const article = await db.query.articles.findFirst({
        where: eq(articles.slug, input.slug),
        with: {
          author: true,
          tags: {
            with: {
              tag: true,
            },
          },
        },
      })

      if (!article) {
        throw new Error('Article not found')
      }

      const likeCount = await db
        .select({ count: sql<number>`count(*)` })
        .from(articleLikes)
        .where(eq(articleLikes.articleId, article.id))
        .then((res) => Number(res[0]?.count ?? 0))

      const commentCount = await db
        .select({ count: sql<number>`count(*)` })
        .from(articleComments)
        .where(eq(articleComments.articleId, article.id))
        .then((res) => Number(res[0]?.count ?? 0))

      const bookmarkCount = await db
        .select({ count: sql<number>`count(*)` })
        .from(articleBookmarks)
        .where(eq(articleBookmarks.articleId, article.id))
        .then((res) => Number(res[0]?.count ?? 0))

      let isLiked = false
      let isBookmarked = false

      if (ctx.userId) {
        const [like] = await db
          .select()
          .from(articleLikes)
          .where(
            and(
              eq(articleLikes.articleId, article.id),
              eq(articleLikes.userId, ctx.userId)
            )
          )
          .limit(1)

        const [bookmark] = await db
          .select()
          .from(articleBookmarks)
          .where(
            and(
              eq(articleBookmarks.articleId, article.id),
              eq(articleBookmarks.userId, ctx.userId)
            )
          )
          .limit(1)

        isLiked = !!like
        isBookmarked = !!bookmark
      }

      return {
        ...article,
        likeCount,
        commentCount,
        bookmarkCount,
        isLiked,
        isBookmarked,
      }
    }),

  toggleLike: publicProcedure
    .input(z.object({ articleId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      if (!ctx.userId) {
        throw new Error('Unauthorized')
      }

      const existing = await db
        .select()
        .from(articleLikes)
        .where(
          and(
            eq(articleLikes.articleId, input.articleId),
            eq(articleLikes.userId, ctx.userId)
          )
        )
        .limit(1)

      if (existing.length > 0) {
        await db
          .delete(articleLikes)
          .where(
            and(
              eq(articleLikes.articleId, input.articleId),
              eq(articleLikes.userId, ctx.userId)
            )
          )

        await db
          .update(articles)
          .set({
            likeCount: sql`${articles.likeCount} - 1`,
          })
          .where(eq(articles.id, input.articleId))

        return { liked: false }
      } else {
        await db.insert(articleLikes).values({
          id: nanoid(),
          articleId: input.articleId,
          userId: ctx.userId,
        })

        await db
          .update(articles)
          .set({
            likeCount: sql`${articles.likeCount} + 1`,
          })
          .where(eq(articles.id, input.articleId))

        return { liked: true }
      }
    }),

  toggleBookmark: publicProcedure
    .input(z.object({ articleId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      if (!ctx.userId) {
        throw new Error('Unauthorized')
      }

      const existing = await db
        .select()
        .from(articleBookmarks)
        .where(
          and(
            eq(articleBookmarks.articleId, input.articleId),
            eq(articleBookmarks.userId, ctx.userId)
          )
        )
        .limit(1)

      if (existing.length > 0) {
        await db
          .delete(articleBookmarks)
          .where(
            and(
              eq(articleBookmarks.articleId, input.articleId),
              eq(articleBookmarks.userId, ctx.userId)
            )
          )

        return { bookmarked: false }
      } else {
        await db.insert(articleBookmarks).values({
          id: nanoid(),
          articleId: input.articleId,
          userId: ctx.userId,
        })

        return { bookmarked: true }
      }
    }),

  share: publicProcedure
    .input(
      z.object({
        articleId: z.string(),
        platform: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      await db.insert(articleShares).values({
        id: nanoid(),
        articleId: input.articleId,
        userId: ctx.userId ?? null,
        platform: input.platform ?? null,
      })

      await db
        .update(articles)
        .set({
          shareCount: sql`${articles.shareCount} + 1`,
        })
        .where(eq(articles.id, input.articleId))

      return { success: true }
    }),

  getSimilar: publicProcedure
    .input(
      z.object({
        articleId: z.string(),
        limit: z.number().default(3),
      })
    )
    .query(async ({ input }) => {
      const article = await db.query.articles.findFirst({
        where: eq(articles.id, input.articleId),
        with: {
          tags: {
            with: {
              tag: true,
            },
          },
        },
      })

      if (!article || article.tags.length === 0) {
        return []
      }

      const tagIds = article.tags.map((at) => at.tagId)

      if (tagIds.length === 0) {
        return []
      }

      const similarArticles = await db
        .selectDistinct({
          id: articles.id,
          title: articles.title,
          slug: articles.slug,
          description: articles.description,
          thumbnail: articles.thumbnail,
          publishedAt: articles.publishedAt,
          readingTime: articles.readingTime,
          authorId: articles.authorId,
        })
        .from(articles)
        .innerJoin(articleTags, eq(articles.id, articleTags.articleId))
        .where(
          and(
            ne(articles.id, input.articleId),
            eq(articles.status, 'published'),
            inArray(articleTags.tagId, tagIds)
          )
        )
        .orderBy(desc(articles.publishedAt))
        .limit(input.limit)

      if (similarArticles.length === 0) {
        return []
      }

      const authorIds = [...new Set(similarArticles.map((a) => a.authorId))]
      const authors = await db.query.user.findMany({
        where: inArray(user.id, authorIds),
      })

      const authorMap = new Map(authors.map((a) => [a.id, a]))

      return similarArticles.map((article) => ({
        id: article.id,
        title: article.title,
        slug: article.slug,
        description: article.description,
        thumbnail: article.thumbnail,
        publishedAt: article.publishedAt,
        readingTime: article.readingTime,
        author: authorMap.get(article.authorId) || { id: article.authorId, name: 'Unknown', image: null },
      }))
    }),
} satisfies TRPCRouterRecord

const writingRouter = {
  list: publicProcedure.query(async ({ ctx }) => {
    if (!ctx.userId) {
      throw new Error('Unauthorized')
    }

    const userArticles = await db.query.articles.findMany({
      where: eq(articles.authorId, ctx.userId),
      orderBy: desc(articles.updatedAt),
      with: {
        tags: {
          with: {
            tag: true,
          },
        },
      },
    })

    return userArticles
  }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
        slug: z.string().optional(),
        description: z.string().optional(),
        content: z.string().optional(),
        thumbnail: z.string().optional(),
        status: z.enum(['draft', 'published', 'scheduled', 'archived']).default('draft'),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (!ctx.userId) {
        throw new Error('Unauthorized')
      }

      const slug = input.slug || input.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
      
      const existing = await db.query.articles.findFirst({
        where: eq(articles.slug, slug),
      })

      if (existing) {
        throw new Error('Article with this slug already exists')
      }

      const article = await db.insert(articles).values({
        id: nanoid(),
        authorId: ctx.userId,
        title: input.title,
        slug,
        description: input.description || null,
        content: input.content || '',
        thumbnail: input.thumbnail || null,
        status: input.status,
      }).returning()

      return article[0]
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string().optional(),
        slug: z.string().optional(),
        description: z.string().optional(),
        content: z.string().optional(),
        thumbnail: z.string().optional(),
        status: z.enum(['draft', 'published', 'scheduled', 'archived']).optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (!ctx.userId) {
        throw new Error('Unauthorized')
      }

      const article = await db.query.articles.findFirst({
        where: and(eq(articles.id, input.id), eq(articles.authorId, ctx.userId)),
      })

      if (!article) {
        throw new Error('Article not found')
      }

      const updateData: any = {}
      if (input.title !== undefined) updateData.title = input.title
      if (input.description !== undefined) updateData.description = input.description
      if (input.content !== undefined) updateData.content = input.content
      if (input.thumbnail !== undefined) updateData.thumbnail = input.thumbnail
      if (input.status !== undefined) updateData.status = input.status
      if (input.slug !== undefined) {
        const existing = await db.query.articles.findFirst({
          where: and(eq(articles.slug, input.slug), ne(articles.id, input.id)),
        })
        if (existing) {
          throw new Error('Article with this slug already exists')
        }
        updateData.slug = input.slug
      }

      if (input.status === 'published' && !article.publishedAt) {
        updateData.publishedAt = new Date()
      }

      const updated = await db
        .update(articles)
        .set(updateData)
        .where(eq(articles.id, input.id))
        .returning()

      return updated[0]
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      if (!ctx.userId) {
        throw new Error('Unauthorized')
      }

      const article = await db.query.articles.findFirst({
        where: and(eq(articles.id, input.id), eq(articles.authorId, ctx.userId)),
      })

      if (!article) {
        throw new Error('Article not found')
      }

      await db.delete(articles).where(eq(articles.id, input.id))

      return { success: true }
    }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      if (!ctx.userId) {
        throw new Error('Unauthorized')
      }

      const article = await db.query.articles.findFirst({
        where: and(eq(articles.id, input.id), eq(articles.authorId, ctx.userId)),
        with: {
          tags: {
            with: {
              tag: true,
            },
          },
        },
      })

      if (!article) {
        throw new Error('Article not found')
      }

      return article
    }),
} satisfies TRPCRouterRecord

export const trpcRouter = createTRPCRouter({
  todos: todosRouter,
  articles: articlesRouter,
  writing: writingRouter,
})
export type TRPCRouter = typeof trpcRouter
