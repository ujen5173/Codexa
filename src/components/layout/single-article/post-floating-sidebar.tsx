import { useTRPC } from "@/integrations/trpc/react";
import { Bookmark, Heart, List, MessageCircle, Share2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "../../ui/button";
import PostTOC from "../post-toc";

interface PostFloatingSidebarProps {
  articleId: string;
  likeCount: number;
  commentCount: number;
  isLiked: boolean;
  isBookmarked: boolean;
  contentRef: React.RefObject<HTMLDivElement>;
}

const PostFloatingSidebar = ({
  articleId,
  likeCount: initialLikeCount,
  commentCount,
  isLiked: initialIsLiked,
  isBookmarked: initialIsBookmarked,
  contentRef,
}: PostFloatingSidebarProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [isBookmarked, setIsBookmarked] = useState(initialIsBookmarked);
  const [showTOC, setShowTOC] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const trpc = useTRPC();
  const toggleLike = trpc.articles.toggleLike.useMutation();
  const toggleBookmark = trpc.articles.toggleBookmark.useMutation();
  const shareArticle = trpc.articles.share.useMutation();

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current || !sidebarRef.current) return;

      const contentRect = contentRef.current.getBoundingClientRect();
      const sidebarRect = sidebarRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const contentBottom = contentRect.bottom;
      const sidebarTop = sidebarRect.top;

      if (contentBottom <= windowHeight) {
        setIsSticky(true);
      } else if (sidebarTop <= 100) {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [contentRef]);

  const handleLike = async () => {
    if (toggleLike.isPending) return;

    const result = await toggleLike.mutateAsync({ articleId });
    setIsLiked(result.liked);
    setLikeCount((prev) => (result.liked ? prev + 1 : prev - 1));
  };

  const handleBookmark = async () => {
    if (toggleBookmark.isPending) return;

    const result = await toggleBookmark.mutateAsync({ articleId });
    setIsBookmarked(result.bookmarked);
  };

  const handleShare = async (platform?: string) => {
    if (shareArticle.isPending) return;

    const url = window.location.href;
    const title = document.title;

    if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(title)}`,
        "_blank"
      );
    } else if (platform === "linkedin") {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`,
        "_blank"
      );
    } else if (platform === "copy") {
      await navigator.clipboard.writeText(url);
    } else {
      if (navigator.share) {
        await navigator.share({
          title,
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
      }
    }

    await shareArticle.mutateAsync({ articleId, platform });
  };

  return (
    <>
      <div
        ref={sidebarRef}
        className={`fixed left-4 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 ${
          isSticky ? "bottom-auto" : "top-1/2"
        } hidden lg:block`}
      >
        <div
          className={`bg-white border border-slate-200 rounded-2xl p-4 shadow-lg flex flex-col gap-3 items-center ${
            isSticky ? "relative" : "sticky top-24"
          }`}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={handleLike}
            className={`flex flex-col gap-1 h-auto py-3 px-2 ${
              isLiked ? "text-red-500" : "text-slate-600"
            }`}
            disabled={toggleLike.isPending}
          >
            <Heart className={`size-5 ${isLiked ? "fill-current" : ""}`} />
            <span className="text-xs font-medium">{likeCount}</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="flex flex-col gap-1 h-auto py-3 px-2 text-slate-600"
            onClick={() => {
              const commentsSection =
                document.getElementById("comments-section");
              commentsSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <MessageCircle className="size-5" />
            <span className="text-xs font-medium">{commentCount}</span>
          </Button>

          <div className="w-8 h-px bg-slate-200 my-1" />

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowTOC(!showTOC)}
            className={`flex flex-col gap-1 h-auto py-3 px-2 ${
              showTOC ? "text-primary" : "text-slate-600"
            }`}
          >
            <List className="size-5" />
            <span className="text-xs font-medium">TOC</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleBookmark}
            className={`flex flex-col gap-1 h-auto py-3 px-2 ${
              isBookmarked ? "text-amber-500" : "text-slate-600"
            }`}
            disabled={toggleBookmark.isPending}
          >
            <Bookmark
              className={`size-5 ${isBookmarked ? "fill-current" : ""}`}
            />
            <span className="text-xs font-medium">Save</span>
          </Button>

          <div className="w-8 h-px bg-slate-200 my-1" />

          <div className="relative group">
            <Button
              variant="ghost"
              size="icon"
              className="flex flex-col gap-1 h-auto py-3 px-2 text-slate-600"
            >
              <Share2 className="size-5" />
              <span className="text-xs font-medium">Share</span>
            </Button>
            <div className="absolute left-full ml-2 top-0 bg-white border border-slate-200 rounded-lg shadow-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => handleShare("twitter")}
                  className="text-xs px-3 py-1.5 hover:bg-slate-100 rounded text-left whitespace-nowrap"
                >
                  Twitter
                </button>
                <button
                  onClick={() => handleShare("linkedin")}
                  className="text-xs px-3 py-1.5 hover:bg-slate-100 rounded text-left whitespace-nowrap"
                >
                  LinkedIn
                </button>
                <button
                  onClick={() => handleShare("copy")}
                  className="text-xs px-3 py-1.5 hover:bg-slate-100 rounded text-left whitespace-nowrap"
                >
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 lg:hidden z-40 bg-white border-t border-slate-200 shadow-lg">
        <div className="flex items-center justify-around py-3 px-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleLike}
            className={`flex flex-col gap-1 h-auto py-2 px-3 ${
              isLiked ? "text-red-500" : "text-slate-600"
            }`}
            disabled={toggleLike.isPending}
          >
            <Heart className={`size-5 ${isLiked ? "fill-current" : ""}`} />
            <span className="text-xs font-medium">{likeCount}</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="flex flex-col gap-1 h-auto py-2 px-3 text-slate-600"
            onClick={() => {
              const commentsSection =
                document.getElementById("comments-section");
              commentsSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <MessageCircle className="size-5" />
            <span className="text-xs font-medium">{commentCount}</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowTOC(!showTOC)}
            className={`flex flex-col gap-1 h-auto py-2 px-3 ${
              showTOC ? "text-primary" : "text-slate-600"
            }`}
          >
            <List className="size-5" />
            <span className="text-xs font-medium">TOC</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleBookmark}
            className={`flex flex-col gap-1 h-auto py-2 px-3 ${
              isBookmarked ? "text-amber-500" : "text-slate-600"
            }`}
            disabled={toggleBookmark.isPending}
          >
            <Bookmark
              className={`size-5 ${isBookmarked ? "fill-current" : ""}`}
            />
            <span className="text-xs font-medium">Save</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleShare()}
            className="flex flex-col gap-1 h-auto py-2 px-3 text-slate-600"
          >
            <Share2 className="size-5" />
            <span className="text-xs font-medium">Share</span>
          </Button>
        </div>
      </div>

      {showTOC && (
        <PostTOC contentRef={contentRef} onClose={() => setShowTOC(false)} />
      )}
    </>
  );
};

export default PostFloatingSidebar;
