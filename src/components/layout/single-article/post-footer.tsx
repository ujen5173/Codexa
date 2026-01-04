import { Heart, MessageCircle, Share2 } from "lucide-react";
import Logo from "../../common/logo";
import { Button } from "../../ui/button";

const PostFooter = () => {
  return (
    <footer className="mt-16 pt-12 pb-8 border-slate-200 border-t">
      <div className="mx-auto px-4 max-w-236">
        <div className="flex md:flex-row flex-col justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <Logo />
            <p className="text-slate-600 text-sm">
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
        <div className="mt-8 pt-6 border-slate-200 border-t text-center">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Flowlet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PostFooter;
