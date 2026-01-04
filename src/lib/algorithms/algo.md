3.3 Algorithm Details

Codexa utilizes advanced algorithms to enhance search, recommendations, content quality assessment, and user engagement on the platform. These algorithms are designed to provide accurate, relevant, and personalized experiences for technical writers and readers.

## 1. Search Ranking Algorithm using BM25 (Best Matching 25)

### Overview

Codexa employs the BM25 ranking function, an advanced probabilistic ranking algorithm that improves upon TF-IDF. BM25 provides better relevance scoring by considering term frequency saturation and document length normalization, making it ideal for technical article search.

### Algorithm Description

**BM25 Formula:**

```
BM25(q, d) = Σ IDF(qi) × (f(qi, d) × (k1 + 1)) / (f(qi, d) + k1 × (1 - b + b × |d| / avgdl))
```

Where:

- `q` = query terms
- `d` = document (article)
- `f(qi, d)` = frequency of term qi in document d
- `|d|` = length of document d
- `avgdl` = average document length in the collection
- `k1` = term frequency saturation parameter (typically 1.2-2.0)
- `b` = length normalization parameter (typically 0.75)
- `IDF(qi)` = Inverse Document Frequency of term qi

**IDF Calculation:**

```
IDF(qi) = log((N - n(qi) + 0.5) / (n(qi) + 0.5))
```

Where:

- `N` = total number of documents
- `n(qi)` = number of documents containing term qi

### Step-by-Step Algorithm

1. **Preprocessing:**

   - Tokenize query and article content
   - Apply stemming/lemmatization (e.g., Porter Stemmer)
   - Remove stop words (technical stop words preserved)
   - Normalize case and handle special characters

2. **Index Building:**

   - Build inverted index mapping terms to documents
   - Calculate document lengths and average document length
   - Pre-compute document frequencies for all terms

3. **Query Processing:**

   - Tokenize and preprocess user query
   - Extract query terms and their frequencies

4. **Score Calculation:**

   - For each article matching query terms:
     - Calculate term frequency (TF) for each query term
     - Calculate IDF for each query term
     - Apply BM25 formula with term frequency saturation
     - Apply document length normalization
     - Sum scores across all query terms

5. **Ranking:**

   - Sort articles by BM25 score in descending order
   - Apply boost factors:
     - Title match boost: 2.0x
     - Subtitle match boost: 1.5x
     - Tag match boost: 1.3x
     - Content match: 1.0x

6. **Result Presentation:**
   - Return top N ranked articles
   - Include relevance scores for transparency

### Output

1. Ranked list of articles sorted by relevance score
2. Relevance scores for each result
3. Highlighted matching terms in results

### Advantages

1. Better than TF-IDF for ranking quality
2. Handles term frequency saturation naturally
3. Accounts for document length variations
4. Industry-standard algorithm used by search engines
5. Efficient for real-time search queries

### Time Complexity

- Index Building: O(N × M) where N = articles, M = average terms per article
- Query Processing: O(Q × log(N)) where Q = query terms

---

## 2. Content-Based Recommendation using Jaccard Similarity and Tag Weighting

### Overview

Codexa recommends articles based on semantic similarity between articles using tag-based content analysis. The algorithm uses weighted Jaccard similarity to find articles with similar topics, considering tag importance and article engagement metrics.

### Algorithm Description

**Weighted Jaccard Similarity:**

```
J(A, B) = Σ min(w(t, A), w(t, B)) / Σ max(w(t, A), w(t, B))
```

Where:

- `A, B` = articles
- `w(t, A)` = weight of tag t in article A
- Tag weight calculated as: `w(t, A) = tf(t, A) × idf(t) × engagement_boost(t, A)`

**Tag Weight Components:**

1. **Term Frequency (TF):** Number of times tag appears in article context
2. **Inverse Document Frequency (IDF):** Rarity of tag across all articles
3. **Engagement Boost:** Based on article's likes, comments, and reads for that tag

**Engagement Boost Formula:**

```
engagement_boost(t, A) = 1 + log(1 + (likes_count × 0.3 + comments_count × 0.5 + read_count × 0.2))
```

### Step-by-Step Algorithm

1. **Tag Extraction and Weighting:**

   - Extract tags from current article
   - Calculate tag weights using TF-IDF and engagement metrics
   - Normalize tag weights to [0, 1] range

2. **Candidate Article Selection:**

   - Find articles sharing at least one tag with current article
   - Filter by recency (prefer recent articles within 1 year)
   - Exclude already read articles by user

3. **Similarity Calculation:**

   - For each candidate article:
     - Extract and weight tags
     - Calculate weighted Jaccard similarity with current article
     - Apply recency decay: `similarity × (1 - age_factor)`
       - `age_factor = min(1, days_old / 365) × 0.2`

4. **Ranking:**

   - Sort by similarity score (descending)
   - Apply diversity filter: ensure tag variety in top N results
   - Limit to top 10 recommendations

5. **Result Presentation:**
   - Display related articles with similarity scores
   - Show shared tags between articles

### Output

1. List of related articles ranked by similarity
2. Similarity scores (0-1 range)
3. Shared tags between articles
4. Engagement metrics for context

### Advantages

1. Content-aware recommendations
2. Considers tag importance, not just presence
3. Balances relevance with recency
4. Handles cold-start problem (new articles)
5. Computationally efficient

### Time Complexity

- Similarity Calculation: O(T × C) where T = tags, C = candidate articles
- Overall: O(T × C × log(C)) for sorting

---

## 3. Hybrid Recommendation System using Matrix Factorization and Content Features

### Overview

Codexa uses a hybrid recommendation system combining collaborative filtering (Matrix Factorization) with content-based features. This approach provides personalized recommendations by learning user preferences from interaction history while leveraging article content characteristics.

### Algorithm Description

**Matrix Factorization Model:**

```
R ≈ P × Q^T
```

Where:

- `R` = user-item interaction matrix (users × articles)
- `P` = user latent factor matrix (users × k)
- `Q` = article latent factor matrix (articles × k)
- `k` = number of latent factors (typically 50-100)

**Prediction Formula:**

```
r̂(u, i) = μ + b_u + b_i + P_u · Q_i^T
```

Where:

- `μ` = global average rating/interaction
- `b_u` = user bias
- `b_i` = article bias
- `P_u` = user latent factors
- `Q_i` = article latent factors

**Hybrid Scoring:**

```
final_score(u, i) = α × CF_score(u, i) + (1 - α) × CB_score(u, i) + freshness_boost(i)
```

Where:

- `CF_score` = Collaborative filtering score
- `CB_score` = Content-based score (from Algorithm 2)
- `α` = blending parameter (typically 0.6-0.7)
- `freshness_boost` = time decay factor

### Step-by-Step Algorithm

1. **Data Collection:**

   - Build user-item interaction matrix from:
     - Article reads (weight: 1.0)
     - Likes (weight: 2.0)
     - Bookmarks (weight: 3.0)
     - Comments (weight: 2.5)
     - Reading time percentage (weight: 0.5-2.0 based on completion)

2. **Matrix Factorization Training:**

   - Initialize P and Q matrices with small random values
   - Use Stochastic Gradient Descent (SGD) or Alternating Least Squares (ALS)
   - Minimize loss function with L2 regularization:
     ```
     L = Σ (r_ui - r̂_ui)² + λ(||P_u||² + ||Q_i||²)
     ```
   - Train for multiple epochs until convergence

3. **Content Feature Extraction:**

   - Extract article features: tags, read time, author, series
   - Calculate content-based scores using Algorithm 2

4. **Hybrid Scoring:**

   - For target user and candidate articles:
     - Calculate collaborative filtering score from learned factors
     - Calculate content-based score
     - Apply freshness boost: `exp(-days_old / 30)`
     - Combine scores with weighted average

5. **Ranking and Filtering:**

   - Rank articles by final hybrid score
   - Filter out already read articles
   - Apply diversity constraints (max 2 articles per author)
   - Return top N personalized recommendations

6. **Model Update:**
   - Retrain model periodically (weekly) with new interactions
   - Use incremental updates for real-time adaptation

### Output

1. Personalized article recommendations
2. Recommendation scores with explanations
3. Mix of collaborative and content-based suggestions
4. Fresh content balanced with user preferences

### Advantages

1. Combines collaborative and content signals
2. Handles cold-start for new users/articles
3. Learns complex user preferences
4. Adapts to user behavior over time
5. Provides diverse recommendations

### Time Complexity

- Training: O(I × k × epochs) where I = interactions, k = factors
- Prediction: O(k × C) where C = candidate articles
- Update: O(new_interactions × k)

---

## 4. Article Quality Score Algorithm using Multi-Factor Analysis

### Overview

Codexa calculates article quality scores using multiple signals including engagement metrics, content quality indicators, author reputation, and temporal factors. This score helps rank articles and identify high-quality content.

### Algorithm Description

**Quality Score Formula:**

```
Quality_Score = Engagement_Score × 0.4 + Content_Score × 0.3 + Author_Score × 0.2 + Freshness_Score × 0.1
```

**Component Calculations:**

1. **Engagement Score (0-100):**

   ```
   Engagement = normalize(likes × 2 + comments × 3 + reads × 1 + bookmarks × 4)
   ```

   Normalized using logarithmic scaling to prevent bias toward very popular articles.

2. **Content Score (0-100):**

   ```
   Content = (read_time_score × 0.3 + tag_relevance × 0.3 + structure_score × 0.2 + completeness × 0.2)
   ```

   - Read time score: optimal range (5-15 min) = 100, outside = decreasing
   - Tag relevance: number of relevant tags (3-7 optimal)
   - Structure: presence of headings, code blocks, examples
   - Completeness: subtitle, cover image, SEO metadata

3. **Author Score (0-100):**

   ```
   Author = (author_followers × 0.3 + author_articles_count × 0.2 + verified_badge × 30 + avg_article_quality × 0.5)
   ```

   Normalized and capped at 100.

4. **Freshness Score (0-100):**
   ```
   Freshness = 100 × exp(-days_old / 90)
   ```
   Exponential decay with 90-day half-life.

### Step-by-Step Algorithm

1. **Data Collection:**

   - Gather engagement metrics (likes, comments, reads, bookmarks)
   - Extract content features (read time, tags, structure)
   - Retrieve author information and reputation
   - Calculate article age

2. **Component Scoring:**

   - Calculate each component score independently
   - Apply normalization to [0, 100] range
   - Handle edge cases (new articles, new authors)

3. **Weighted Aggregation:**

   - Combine component scores with weights
   - Apply quality thresholds:
     - High quality: Score ≥ 75
     - Medium quality: 50 ≤ Score < 75
     - Low quality: Score < 50

4. **Ranking Application:**

   - Use quality score as tie-breaker in trending algorithms
   - Boost high-quality articles in search results
   - Filter low-quality articles from recommendations

5. **Continuous Update:**
   - Recalculate scores periodically (daily)
   - Update in real-time for significant engagement changes

### Output

1. Quality score (0-100) for each article
2. Component breakdown for transparency
3. Quality-based ranking adjustments
4. Quality badges for high-scoring articles

### Advantages

1. Multi-dimensional quality assessment
2. Balances popularity with content quality
3. Prevents gaming through single metric optimization
4. Transparent scoring components
5. Adapts to platform growth

### Time Complexity

- Per Article: O(1) - constant time calculations
- Batch Update: O(N) where N = articles

---

## 5. Trending Articles Algorithm using Reddit-Style Hot Score

### Overview

Codexa uses a time-decay algorithm similar to Reddit's "hot" ranking to identify trending articles. This algorithm balances engagement metrics with recency, ensuring fresh and popular content surfaces.

### Algorithm Description

**Hot Score Formula:**

```
Hot_Score = log10(max(1, |score|)) × sign(score) + (epoch_seconds - 1134028003) / 45000
```

**Simplified Version for Codexa:**

```
Hot_Score = engagement_score × time_decay_factor
```

**Engagement Score:**

```
engagement_score = likes × 2 + comments × 3 + reads × 1 + bookmarks × 4
```

**Time Decay Factor:**

```
time_decay = exp(-(current_time - article_time) / decay_constant)
```

Where `decay_constant` = 7 days (articles lose 50% of score after 7 days)

**Alternative: Logarithmic Time Decay**

```
time_decay = 1 / (1 + hours_old / 12)^gravity
```

Where `gravity` = 1.8 (controls decay rate)

### Step-by-Step Algorithm

1. **Engagement Calculation:**

   - Sum weighted engagement metrics
   - Apply logarithmic scaling: `log(1 + engagement)`
   - Normalize to prevent extreme values

2. **Time Decay Application:**

   - Calculate article age in hours
   - Apply exponential or logarithmic decay
   - Recent articles get higher boost

3. **Score Combination:**

   - Multiply engagement by time decay
   - Apply additional factors:
     - Author reputation boost: +10% for verified authors
     - Quality score boost: +5% per 10 quality points above 70

4. **Ranking:**

   - Sort articles by hot score (descending)
   - Filter minimum thresholds:
     - At least 1 like or comment
     - Published within last 90 days
   - Return top N trending articles

5. **Periodic Updates:**
   - Recalculate scores every hour
   - Cache results for performance
   - Update in real-time for new engagements

### Output

1. Trending articles ranked by hot score
2. Hot score values for transparency
3. Time-based trending (hourly, daily, weekly, monthly)

### Advantages

1. Balances popularity with freshness
2. Prevents old articles from dominating
3. Surfaces emerging content quickly
4. Computationally efficient
5. Industry-proven algorithm

### Time Complexity

- Per Article: O(1)
- Full Ranking: O(N × log(N)) for sorting
- Update: O(1) per engagement event

---

## 6. Reading Depth Analysis and Engagement Prediction

### Overview

Codexa analyzes user reading behavior to calculate reading depth and predict engagement. This helps identify valuable content and improve recommendation accuracy.

### Algorithm Description

**Reading Depth Score:**

```
Reading_Depth = (scroll_percentage × 0.4 + time_spent_ratio × 0.4 + interaction_count × 0.2)
```

Where:

- `scroll_percentage` = max scroll position / article length
- `time_spent_ratio` = actual reading time / estimated read time
- `interaction_count` = normalized count of likes, comments, bookmarks

**Engagement Prediction:**
Using logistic regression or gradient boosting:

```
P(engagement | features) = sigmoid(β₀ + β₁×depth + β₂×article_quality + β₃×user_interest + ...)
```

Features include:

- Reading depth score
- Article quality score
- User's historical engagement with similar tags
- Time of day, day of week
- Article length and complexity

### Step-by-Step Algorithm

1. **Data Collection:**

   - Track scroll events and positions
   - Measure time spent on article
   - Record interactions (likes, comments, bookmarks)
   - Collect user and article features

2. **Reading Depth Calculation:**

   - Calculate scroll percentage (0-100%)
   - Calculate time spent ratio
   - Count interactions during/after reading
   - Combine into reading depth score

3. **Engagement Prediction:**

   - Train ML model on historical data
   - Features: depth, quality, user preferences, temporal
   - Predict probability of engagement
   - Update model with new data

4. **Application:**
   - Use depth scores to rank article value
   - Predict engagement for recommendations
   - Identify drop-off points in articles
   - Provide insights to authors

### Output

1. Reading depth scores per article view
2. Engagement probability predictions
3. Reading analytics for authors
4. Content optimization insights

### Advantages

1. Measures actual content value
2. Improves recommendation quality
3. Provides actionable insights
4. Predicts user behavior
5. Enhances content discovery

### Time Complexity

- Depth Calculation: O(1) per view
- Prediction: O(F) where F = features
- Model Training: O(N × F × iterations)

---

## Summary

These algorithms work together to create a comprehensive content discovery and ranking system:

1. **BM25 Search** - Accurate, relevant search results
2. **Content-Based Recommendations** - Topic-relevant article suggestions
3. **Hybrid Recommendations** - Personalized content discovery
4. **Quality Scoring** - High-quality content identification
5. **Trending Algorithm** - Fresh, popular content surfacing
6. **Reading Depth Analysis** - Engagement understanding and prediction

All algorithms are designed to be:

- **Scalable:** Handle growing content and user base
- **Efficient:** Fast query and recommendation times
- **Accurate:** Provide relevant, high-quality results
- **Maintainable:** Clear, well-documented implementations
- **Adaptive:** Learn and improve from user behavior
