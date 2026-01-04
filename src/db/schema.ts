import { relations } from "drizzle-orm";
import {
  boolean,
  decimal,
  index,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";


 export const articleStatusEnum = pgEnum("article_status", [
  "draft",
  "published",
  "scheduled",
  "archived",
]);
export const paymentMethodEnum = pgEnum("payment_method", [
  "stripe",
  "esewa",
  "khalti",
]);
export const subscriptionStatusEnum = pgEnum("subscription_status", [
  "active",
  "cancelled",
  "expired",
  "pending",
]);
export const notificationTypeEnum = pgEnum("notification_type", [
  "comment_reply",
  "liked",
  "user_followed",
  "new_follower_article",
  "comment_liked",
  "collaboration_invite",
]);


export const user = pgTable(
  "user",
  {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    username: text("username").unique(),
    email: text("email").notNull().unique(),
    emailVerified: boolean("email_verified").default(false).notNull(),
    image: text("image"),
    bio: text("bio"),
    website: text("website"),
    isActive: boolean("is_active").default(true),
    totalArticles: integer("total_articles").default(0),
    totalViews: integer("total_views").default(0),
    totalFollowers: integer("total_followers").default(0),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [index("user_email_idx").on(table.email)]
);

export const session = pgTable(
  "session",
  {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expires_at").notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => new Date())
      .notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
  },
  (table) => [
    index("session_userId_idx").on(table.userId),
    index("session_token_idx").on(table.token),
  ]
);

export const account = pgTable(
  "account",
  {
    id: text("id").primaryKey(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at"),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [
    index("account_userId_idx").on(table.userId),
    uniqueIndex("account_provider_id_idx").on(
      table.providerId,
      table.accountId
    ),
  ]
);

export const verification = pgTable(
  "verification",
  {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [index("verification_identifier_idx").on(table.identifier)]
);


export const publications = pgTable(
  "publications",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    name: text("name").notNull(),
    description: text("description"),
    slug: text("slug").notNull().unique(),
    logo: text("logo"),
    socialProfiles: jsonb("social_profiles").$type<{
      github?: string;
      twitter?: string;
      linkedin?: string;
      devto?: string;
      website?: string;
    }>(),
    appearance: jsonb("appearance").$type<{
      layout?: string;
      logoLight?: string;
      logoDark?: string;
      favicon?: string;
      headerColor?: string;
      showReadTime?: boolean;
      useDefaultBlogTheme?: boolean;
      showArticleViews?: boolean;
      enableSubscribePrompt?: boolean;
      enableFollowPrompt?: boolean;
    }>(),
    navbar: jsonb("navbar").$type<
      {
        label: string;
        type: "link";
        value: string;
      }[]
    >(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [
    index("publications_user_id_idx").on(table.userId),
    index("publications_slug_idx").on(table.slug),
  ]
);

export const articles = pgTable(
  "articles",
  {
    id: text("id").primaryKey(),
    authorId: text("author_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    publicationId: text("publication_id")
      .notNull()
      .references(() => publications.id, { onDelete: "cascade" }),
    title: text("title").notNull(),
    slug: text("slug").notNull().unique(),
    description: text("description"),
    content: text("content").notNull(),
    thumbnail: text("thumbnail"),
    status: articleStatusEnum("status").default("draft"),
    viewCount: integer("view_count").default(0),
    readCount: integer("read_count").default(0),
    likeCount: integer("like_count").default(0),
    commentCount: integer("comment_count").default(0),
    shareCount: integer("share_count").default(0),
    readingTime: integer("reading_time"),
    seoScore: integer("seo_score").default(0),
    isValid: boolean("is_valid").default(true),
    isFeatured: boolean("is_featured").default(false),
    publishedAt: timestamp("published_at"),
    scheduledPublishAt: timestamp("scheduled_publish_at"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [
    index("articles_author_id_idx").on(table.authorId),
    index("articles_publication_id_idx").on(table.publicationId),
    index("articles_slug_idx").on(table.slug),
    index("articles_status_idx").on(table.status),
    index("articles_published_at_idx").on(table.publishedAt),
    index("articles_is_featured_idx").on(table.isFeatured),
    index("articles_author_status_idx").on(table.authorId, table.status),
  ]
);

export const articleSeries = pgTable(
  "series",
  {
    id: text("id").primaryKey(),
    title: text("title").notNull(),
    slug: text("slug").notNull().unique(),
    description: text("description"),
    authorId: text("author_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    publicationId: text("publication_id")
      .notNull()
      .references(() => publications.id, { onDelete: "cascade" }),
    thumbnail: text("thumbnail"),
    articleCount: integer("article_count").default(0),
    viewCount: integer("view_count").default(0),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [
    index("article_series_author_id_idx").on(table.authorId),
    index("article_series_publication_id_idx").on(table.publicationId),
    index("article_series_slug_idx").on(table.slug),
  ]
);

export const articleSeriesItems = pgTable(
  "series_items",
  {
    id: text("id").primaryKey(),
    seriesId: text("series_id")
      .notNull()
      .references(() => articleSeries.id, { onDelete: "cascade" }),
    articleId: text("article_id")
      .notNull()
      .references(() => articles.id, { onDelete: "cascade" }),
    position: integer("position").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("article_series_items_series_id_idx").on(table.seriesId),
    index("article_series_items_article_id_idx").on(table.articleId),
    uniqueIndex("article_series_items_series_article_idx").on(
      table.seriesId,
      table.articleId
    ),
  ]
);

export const tags = pgTable(
  "tags",
  {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    slug: text("slug").notNull().unique(),
    articleCount: integer("article_count").default(0),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("tags_name_idx").on(table.name),
    index("tags_slug_idx").on(table.slug),
  ]
);

export const articleTags = pgTable(
  "article_tags",
  {
    id: text("id").primaryKey(),
    articleId: text("article_id")
      .notNull()
      .references(() => articles.id, { onDelete: "cascade" }),
    tagId: text("tag_id")
      .notNull()
      .references(() => tags.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("article_tags_article_id_idx").on(table.articleId),
    index("article_tags_tag_id_idx").on(table.tagId),
    uniqueIndex("article_tags_article_tag_idx").on(
      table.articleId,
      table.tagId
    ),
  ]
); 

export const articleLikes = pgTable(
  "likes",
  {
    id: text("id").primaryKey(),
    articleId: text("article_id")
      .notNull()
      .references(() => articles.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("article_likes_article_id_idx").on(table.articleId),
    index("article_likes_user_id_idx").on(table.userId),
    uniqueIndex("article_likes_article_user_idx").on(
      table.articleId,
      table.userId
    ),
  ]
);

export const articleComments = pgTable(
  "comments",
  {
    id: text("id").primaryKey(),
    articleId: text("article_id")
      .notNull()
      .references(() => articles.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    parentCommentId: text("parent_comment_id").references(
      () => articleComments.id,
      { onDelete: "cascade" }
    ),
    content: text("content").notNull(),
    likeCount: integer("like_count").default(0),
    isApproved: boolean("is_approved").default(true),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [
    index("article_comments_article_id_idx").on(table.articleId),
    index("article_comments_user_id_idx").on(table.userId),
    index("article_comments_parent_comment_id_idx").on(table.parentCommentId),
  ]
);

export const articleCommentLikes = pgTable(
  "comment_likes",
  {
    id: text("id").primaryKey(),
    commentId: text("comment_id")
      .notNull()
      .references(() => articleComments.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("article_comment_likes_comment_id_idx").on(table.commentId),
    index("article_comment_likes_user_id_idx").on(table.userId),
    uniqueIndex("article_comment_likes_comment_user_idx").on(
      table.commentId,
      table.userId
    ),
  ]
);

export const articleReadings = pgTable(
  "readings",
  {
    id: text("id").primaryKey(),
    articleId: text("article_id")
      .notNull()
      .references(() => articles.id, { onDelete: "cascade" }),
    userId: text("user_id").references(() => user.id, { onDelete: "set null" }),
    sessionId: text("session_id"),
    scrollDepth: integer("scroll_depth").default(0),
    timeSpent: integer("time_spent").default(0),
    // Caculated by user activity like: like, comment, share, bookmark, copy paste, etc.
    engagementScore: integer("engagement_score").default(0),
    isCompleted: boolean("is_completed").default(false),
    userAgent: text("user_agent"),
    ipAddress: text("ip_address"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("article_readings_article_id_idx").on(table.articleId),
    index("article_readings_user_id_idx").on(table.userId),
    index("article_readings_session_id_idx").on(table.sessionId),
  ]
);

export const articleBookmarks = pgTable(
  "bookmarks",
  {
    id: text("id").primaryKey(),
    articleId: text("article_id")
      .notNull()
      .references(() => articles.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("article_bookmarks_article_id_idx").on(table.articleId),
    index("article_bookmarks_user_id_idx").on(table.userId),
    uniqueIndex("article_bookmarks_article_user_idx").on(
      table.articleId,
      table.userId
    ),
  ]
);

export const articleShares = pgTable(
  "shares",
  {
    id: text("id").primaryKey(),
    articleId: text("article_id")
      .notNull()
      .references(() => articles.id, { onDelete: "cascade" }),
    userId: text("user_id").references(() => user.id, { onDelete: "set null" }),
    platform: varchar("platform", { length: 50 }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("article_shares_article_id_idx").on(table.articleId),
    index("article_shares_user_id_idx").on(table.userId),
  ]
);

export const userFollows = pgTable(
  "user_follows",
  {
    id: text("id").primaryKey(),
    followerId: text("follower_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    followingId: text("following_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("user_follows_follower_id_idx").on(table.followerId),
    index("user_follows_following_id_idx").on(table.followingId),
    uniqueIndex("user_follows_follower_following_idx").on(
      table.followerId,
      table.followingId
    ),
  ]
);

export const achievements = pgTable(
  "achievements",
  {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    slug: text("slug").notNull().unique(),
    description: text("description"),
    icon: text("icon"),
    // contidions:
    // {
    //   type: "points",
    //   value: 100,
    // }
    // {
    //   type: "articles",
    //   value: 10,
    // }
    // {
    //   type: "engagement",
    //   value: 10,
    // }    
    condition: jsonb("condition"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [index("achievements_slug_idx").on(table.slug)]
);

export const userAchievements = pgTable(
  "user_achievements",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    achievementId: text("achievement_id")
      .notNull()
      .references(() => achievements.id, { onDelete: "cascade" }),
    unlockedAt: timestamp("unlocked_at").defaultNow().notNull(),
  },
  (table) => [
    index("user_achievements_user_id_idx").on(table.userId),
    index("user_achievements_achievement_id_idx").on(table.achievementId),
    uniqueIndex("user_achievements_user_achievement_idx").on(
      table.userId,
      table.achievementId
    ),
  ]
);


export const subscriptions = pgTable(
  "subscriptions",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    planId: text("plan_id").notNull(),
    status: subscriptionStatusEnum("status").default("active"),
    paymentMethod: paymentMethodEnum("payment_method").notNull(),
    stripeSubscriptionId: text("stripe_subscription_id"),
    esewaId: text("esewa_id"),
    khaltiId: text("khalti_id"),
    currentPeriodStart: timestamp("current_period_start").notNull(),
    currentPeriodEnd: timestamp("current_period_end").notNull(),
    cancelledAt: timestamp("cancelled_at"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [
    index("subscriptions_user_id_idx").on(table.userId),
    index("subscriptions_status_idx").on(table.status),
    index("subscriptions_stripe_subscription_id_idx").on(
      table.stripeSubscriptionId
    ),
  ]
);

export const payments = pgTable(
  "payments",
  {
    id: text("id").primaryKey(),
    subscriptionId: text("subscription_id").references(() => subscriptions.id, {
      onDelete: "set null",
    }),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
    currency: varchar("currency", { length: 3 }).default("USD"),
    paymentMethod: paymentMethodEnum("payment_method").notNull(),
    transactionId: text("transaction_id").notNull().unique(),
    status: varchar("status", { length: 50 }).default("completed"),
    metadata: jsonb("metadata"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("payments_subscription_id_idx").on(table.subscriptionId),
    index("payments_user_id_idx").on(table.userId),
    index("payments_transaction_id_idx").on(table.transactionId),
  ]
);

export const userActivity = pgTable(
  "user_activity",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    activityType: varchar("activity_type", { length: 50 }).notNull(),
    articleId: text("article_id").references(() => articles.id, {
      onDelete: "set null",
    }),
    metadata: jsonb("metadata"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("user_activity_user_id_idx").on(table.userId),
    index("user_activity_article_id_idx").on(table.articleId),
    index("user_activity_created_at_idx").on(table.createdAt),
  ]
);

export const notifications = pgTable(
  "notifications",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    type: notificationTypeEnum("type").notNull(),
    title: text("title").notNull(),
    message: text("message"),
    relatedUserId: text("related_user_id").references(() => user.id, {
      onDelete: "set null",
    }),
    relatedArticleId: text("related_article_id").references(() => articles.id, {
      onDelete: "cascade",
    }),
    relatedCommentId: text("related_comment_id").references(
      () => articleComments.id,
      { onDelete: "cascade" }
    ),
    isRead: boolean("is_read").default(false),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("notifications_user_id_idx").on(table.userId),
    index("notifications_type_idx").on(table.type),
    index("notifications_is_read_idx").on(table.isRead),
  ]
);


export const userRelations = relations(user, ({ many }) => ({
  sessions: many(session),
  accounts: many(account),
  publications: many(publications),
  articles: many(articles),
  series: many(articleSeries),
  likes: many(articleLikes),
  comments: many(articleComments),
  readings: many(articleReadings),
  bookmarks: many(articleBookmarks),
  shares: many(articleShares),
  following: many(userFollows, { relationName: "following" }),
  followers: many(userFollows, { relationName: "followers" }),
  achievements: many(userAchievements),
  subscriptions: many(subscriptions),
  payments: many(payments),
  activity: many(userActivity),
  notifications: many(notifications),
 }));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));

export const publicationsRelations = relations(
  publications,
  ({ one, many }) => ({
    owner: one(user, {
      fields: [publications.userId],
      references: [user.id],
    }),
    articles: many(articles),
    series: many(articleSeries),
  })
);

export const articlesRelations = relations(articles, ({ many, one }) => ({
  author: one(user, {
    fields: [articles.authorId],
    references: [user.id],
  }),
  publication: one(publications, {
    fields: [articles.publicationId],
    references: [publications.id],
  }),
  tags: many(articleTags),
  likes: many(articleLikes),
  comments: many(articleComments),
  readings: many(articleReadings),
  bookmarks: many(articleBookmarks),
  shares: many(articleShares),
  seriesItems: many(articleSeriesItems),
  activity: many(userActivity),
  notifications: many(notifications),
}));

export const articleSeriesRelations = relations(
  articleSeries,
  ({ many, one }) => ({
    author: one(user, {
      fields: [articleSeries.authorId],
      references: [user.id],
    }),
    publication: one(publications, {
      fields: [articleSeries.publicationId],
      references: [publications.id],
    }),
    items: many(articleSeriesItems),
  })
);

export const articleSeriesItemsRelations = relations(
  articleSeriesItems,
  ({ one }) => ({
    series: one(articleSeries, {
      fields: [articleSeriesItems.seriesId],
      references: [articleSeries.id],
    }),
    article: one(articles, {
      fields: [articleSeriesItems.articleId],
      references: [articles.id],
    }),
  })
);

export const tagsRelations = relations(tags, ({ many }) => ({
  articles: many(articleTags),
}));

export const articleTagsRelations = relations(articleTags, ({ one }) => ({
  article: one(articles, {
    fields: [articleTags.articleId],
    references: [articles.id],
  }),
  tag: one(tags, {
    fields: [articleTags.tagId],
    references: [tags.id],
  }),
}));

export const articleLikesRelations = relations(articleLikes, ({ one }) => ({
  article: one(articles, {
    fields: [articleLikes.articleId],
    references: [articles.id],
  }),
  user: one(user, {
    fields: [articleLikes.userId],
    references: [user.id],
  }),
}));

export const articleCommentsRelations = relations(
  articleComments,
  ({ one, many }) => ({
    article: one(articles, {
      fields: [articleComments.articleId],
      references: [articles.id],
    }),
    author: one(user, {
      fields: [articleComments.userId],
      references: [user.id],
    }),
    parentComment: one(articleComments, {
      fields: [articleComments.parentCommentId],
      references: [articleComments.id],
      relationName: "replies",
    }),
    replies: many(articleComments, { relationName: "replies" }),
    notifications: many(notifications),
  })
);

export const articleReadingsRelations = relations(
  articleReadings,
  ({ one }) => ({
    article: one(articles, {
      fields: [articleReadings.articleId],
      references: [articles.id],
    }),
    user: one(user, {
      fields: [articleReadings.userId],
      references: [user.id],
    }),
  })
);

export const userFollowsRelations = relations(userFollows, ({ one }) => ({
  follower: one(user, {
    fields: [userFollows.followerId],
    references: [user.id],
    relationName: "following",
  }),
  following: one(user, {
    fields: [userFollows.followingId],
    references: [user.id],
    relationName: "followers",
  }),
}));

export const achievementsRelations = relations(achievements, ({ many }) => ({
  userAchievements: many(userAchievements),
}));

export const userAchievementsRelations = relations(
  userAchievements,
  ({ one }) => ({
    user: one(user, {
      fields: [userAchievements.userId],
      references: [user.id],
    }),
    achievement: one(achievements, {
      fields: [userAchievements.achievementId],
      references: [achievements.id],
    }),
  })
);

export const subscriptionsRelations = relations(
  subscriptions,
  ({ one, many }) => ({
    user: one(user, {
      fields: [subscriptions.userId],
      references: [user.id],
    }),
    payments: many(payments),
  })
);

export const paymentsRelations = relations(payments, ({ one }) => ({
  subscription: one(subscriptions, {
    fields: [payments.subscriptionId],
    references: [subscriptions.id],
  }),
  user: one(user, {
    fields: [payments.userId],
    references: [user.id],
  }),
})); 

export const userActivityRelations = relations(userActivity, ({ one }) => ({
  user: one(user, {
    fields: [userActivity.userId],
    references: [user.id],
  }),
  article: one(articles, {
    fields: [userActivity.articleId],
    references: [articles.id],
  }),
}));
 
export const notificationsRelations = relations(notifications, ({ one }) => ({
  user: one(user, {
    fields: [notifications.userId],
    references: [user.id],
  }),
  relatedUser: one(user, {
    fields: [notifications.relatedUserId],
    references: [user.id],
  }),
  relatedArticle: one(articles, {
    fields: [notifications.relatedArticleId],
    references: [articles.id],
  }),
  relatedComment: one(articleComments, {
    fields: [notifications.relatedCommentId],
    references: [articleComments.id],
  }),
}));

export const articleBookmarksRelations = relations(
  articleBookmarks,
  ({ one }) => ({
    article: one(articles, {
      fields: [articleBookmarks.articleId],
      references: [articles.id],
    }),
    user: one(user, {
      fields: [articleBookmarks.userId],
      references: [user.id],
    }),
  })
);

export const articleSharesRelations = relations(articleShares, ({ one }) => ({
  article: one(articles, {
    fields: [articleShares.articleId],
    references: [articles.id],
  }),
  user: one(user, {
    fields: [articleShares.userId],
    references: [user.id],
  }),
}));

export const articleCommentLikesRelations = relations(
  articleCommentLikes,
  ({ one }) => ({
    comment: one(articleComments, {
      fields: [articleCommentLikes.commentId],
      references: [articleComments.id],
    }),
    user: one(user, {
      fields: [articleCommentLikes.userId],
      references: [user.id],
    }),
  })
); 