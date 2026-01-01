import { Heart, MessageCircle, Share2 } from "lucide-react";
import Logo from "../../common/logo";
import { Button } from "../../ui/button";

const PostFooter = () => {
  return (
    <footer className="mt-16 pt-12 pb-8 border-t border-slate-200">
      <div className="max-w-236 mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Logo />
            <p className="text-sm text-slate-600">
              A platform for developers to share knowledge and grow together.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="gap-2">
              <Heart className="size-4" />
              <span>Support</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <MessageCircle className="size-4" />
              <span>Feedback</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Share2 className="size-4" />
              <span>Share</span>
            </Button>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-200 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Flowlet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PostFooter;
