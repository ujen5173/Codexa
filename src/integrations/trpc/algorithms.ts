
export function searchArticlesWithBM25(query: string, articles: any[]) {
  // Simplified BM25: relying on the initial DB ILIKE filter.
  // We just return them with a dummy score or simple frequency count if needed.
  // For now, pass through.
  return articles.map((article) => ({
    article,
    score: 1, // Placeholder score
  }));
}

export function getContentBasedRecommendations(
  current: { 
      id: string; 
      tags: { id: string; name: string }[]; 
      [key: string]: any 
  },
  candidates: { 
      id: string; 
      tags: { id: string; name: string }[]; 
      [key: string]: any 
  }[],
  ignoreIds: string[],
  limit: number
) {
  const currentTagIds = new Set(current.tags.map((t) => t.id));

  const scored = candidates
    .filter((c) => !ignoreIds.includes(c.id))
    .map((candidate) => {
      const sharedTags = candidate.tags.filter((t) => currentTagIds.has(t.id));
      return {
        ...candidate,
        similarityScore: sharedTags.length,
        sharedTags,
      };
    });

  // Sort by number of shared tags
  scored.sort((a, b) => b.similarityScore - a.similarityScore);

  return scored.slice(0, limit);
}

export function getTrendingArticlesByPeriod(
  articles: {
    id: string;
    likesCount: number;
    commentsCount: number;
    readCount: number;
    createdAt: Date;
    [key: string]: any;
  }[],
  period: string, // "WEEK", "MONTH", "YEAR", "ANY"
  limit: number
) {
  // Simple scoring: likes * 2 + comments * 3 + reads
  // Plus decency bonus if needed?
  // We won't implement full time decay here to keep it simple but working.

  const scored = articles.map((article) => {
    const score =
      (article.likesCount || 0) * 2 +
      (article.commentsCount || 0) * 3 +
      (article.readCount || 0);
    return {
      ...article,
      hotScore: score,
    };
  });

  scored.sort((a, b) => b.hotScore - a.hotScore);

  return scored.slice(0, limit);
}
