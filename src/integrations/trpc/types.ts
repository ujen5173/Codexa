
export interface SearchResults {
    users:
    | {
        id: string;
        name: string;
        username: string;
        image: string | null;
        stripeSubscriptionStatus: string | null;
        isFollowing: boolean;
        isAuthor: boolean;
    }[]
    | null;
    tags:
    | {
        id: string;
        name: string;
        slug: string;
        isFollowing: boolean;
    }[]
    | null;
    articles:
    | {
        id: string;
        title: string;
        cover_image: string | null;
        slug: string;
        likesCount: number;
        commentsCount: number;
        createdAt: Date;
        updatedAt: Date;
        user: {
            id: string;
            name: string;
            username: string;
            image: string | null;
            stripeSubscriptionStatus: string | null;
        };
    }[]
    | null;
}

export const selectArticleCard = {
    with: {
        comments: {
            with: {
                user: {
                    columns: {
                        id: true,
                        image: true,
                    },
                },
            },
        },
        tags: {
            columns: {
                articleId: false,
                tagId: false,
            },
            with: {
                tag: {
                    columns: {
                        id: true,
                        name: true,
                        slug: true,
                    },
                },
            },
        },
        series: {
            columns: {
                title: true,
                slug: true,
            },
        },
        user: {
            columns: {
                id: true,
                name: true,
                username: true,
                image: true,
                bio: true,
                stripeSubscriptionStatus: true,
            },
            with: {
                handle: {
                    columns: {
                        id: true,
                        handle: true,
                        name: true,
                        about: true,
                    },
                },
            },
        },
    },
    columns: {
        id: true,
        title: true,
        slug: true,
        cover_image: true,
        disabledComments: true,
        readCount: true,
        likesCount: true,
        commentsCount: true,
        createdAt: true,
        subContent: true,
        read_time: true,
    },
} as const;

export interface Comment {
    id: string;
    body: string;
    type: "COMMENT" | "REPLY";
    createdAt: Date;
    updatedAt: Date;
    user: {
        id: string;
        name: string;
        username: string;
        image: string | null;
        stripeSubscriptionStatus: string | null;
    };
    hasLiked?: boolean;
    likesCount: number;
    replies: Comment[];
    parentId: string | null;
}


export interface Article {
    id: string;
    title: string;
    subtitle: string | null;
    slug: string;
    cover_image: string | null;
    disabledComments: boolean;
    readCount: number;
    content: string;
    read_time: number;
    likesCount: number;
    commentsCount: number;
    createdAt: Date;
    comments: Comment[];
    likes: { userId: string }[];
    user: {
        id: string;
        name: string;
        username: string;
        image: string | null;
        bio: string | null;
        stripeSubscriptionStatus: string | null;
        handle: {
            id: string;
            handle: string;
            name: string;
            about: string | null;
        } | null;
    };
    series: {
        title: string;
        slug: string;
    } | null;
    tags: {
        id: string;
        name: string;
        slug: string;
    }[];
}

export type ArticleForEdit = {
    title: string;
    subtitle: string | null;
    content: string;
    cover_image: string | null;
    cover_image_key: string | null;
    slug: string;
    seoTitle: string | null;
    seoDescription: string | null;
    seoOgImage: string | null;
    seoOgImageKey: string | null;
    disabledComments: boolean;
    series: string | null;
    tags: string[];
};

// here `Omit` is used to remove the `subtitle` property from `Article` type and add `commonUsers` property
export interface ArticleCard extends Omit<
    Article,
    "subtitle" | "comments" | "likes" | "content"
> {
    subContent: string | null;
    // commonUsers: {
    //   id: string;
    //   image: string | null;
    // }[];
}

export type ArticleCardRemoveCommonUser = Omit<ArticleCard, "commonUsers">;
export type ArticleCardRemoveCommonUserWithoutLikes = Omit<
    ArticleCard,
    "commonUsers"
>;

export interface ArticleCardWithComments extends ArticleCardRemoveCommonUserWithoutLikes {
    comments: {
        user: {
            id: string;
            image: string | null;
        };
    }[];
    commonUsers?: {
        id: string;
        image: string | null;
    }[];
}
export interface Activity {
    id: string;
    title: string;
    slug: string;
    activity_type: "ARTICLE" | "JOINED";
    createdAt: Date;
}
