import PostContent from "@/components/layout/single-article/post-content";
import PostHeader from "@/components/layout/single-article/post-header";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Bookmark02Icon, BubbleChatIcon, FavouriteIcon, Share08Icon, SparklesIcon } from "hugeicons-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/u/@{$username}/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300 ease-in-out relative pb-20 lg:pb-0">
      <PostHeader />
      <PostContent />

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: 100, x: "-50%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 left-1/2 z-50 w-auto"
          >
            <div className="flex items-center gap-1 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl rounded-full p-2 px-3">
              <Button variant="ghost" size="sm" className="rounded-full group relative">
                <FavouriteIcon className="size-5 text-slate-600 dark:text-slate-400 group-hover:text-rose-500" />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">46</span>
                <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 dark:bg-slate-700 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Like
                </span>
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full group relative">
                <BubbleChatIcon className="size-5 text-slate-600 dark:text-slate-400 group-hover:text-blue-500" />
                <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 dark:bg-slate-700 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Comment
                </span>
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">3</span>
              </Button>
              <Button size="icon" variant="ghost" className="size-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 group relative">
                <SparklesIcon className="size-5 text-slate-600 dark:text-slate-400 group-hover:text-purple-500" />
                <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 dark:bg-slate-700 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  AI Summarize
                </span>
              </Button>
              <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-1" />
              <Button size="icon" variant="ghost" className="size-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 group relative">
                <Share08Icon className="size-5 text-slate-600 dark:text-slate-400 group-hover:text-green-500" />
                <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 dark:bg-slate-700 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Share
                </span>
              </Button>
              <Button size="icon" variant="ghost" className="size-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 group relative">
                <Bookmark02Icon className="size-5 text-slate-600 dark:text-slate-400 group-hover:text-amber-500" />
                <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 dark:bg-slate-700 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Bookmark
                </span>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
