import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter } from "lucide-react";

export function WelcomeNotification() {
  return (
    <div className="font-inter text-slate-800">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        Hi <span className="text-2xl">👋</span>, User
      </h2>

      <p className="mb-6 text-slate-600 leading-relaxed text-[15px]">
        Welcome to Codexa, the developer community that truly believes in creative
        freedom!
      </p>

      <p className="mb-4 text-slate-600 text-[15px]">
        Here&apos;s some information to help you get started with Codexa.
      </p>

      <h3 className="font-semibold text-[17px] mb-3 text-slate-800">
        How does it work?
      </h3>
      <ol className="list-decimal list-outside ml-5 space-y-3 mb-8 text-slate-600 text-[15px] leading-relaxed">
        <li className="pl-2">
          Developers create blog projects on Codexa. These projects live on
          either custom domains or Codexa subdomains.
        </li>
        <li className="pl-2">
          Every time an author writes an article, it&apos;s published on their
          blog and distributed to the Codexa community for discoverability.
        </li>
        <li className="pl-2">
          Users discover articles from their feeds (such as{" "}
          <span className="underline decoration-slate-300 underline-offset-2 cursor-pointer hover:text-primary transition-colors font-medium">
            personal feed
          </span>
          ,{" "}
          <span className="underline decoration-slate-300 underline-offset-2 cursor-pointer hover:text-primary transition-colors font-medium">
            following
          </span>{" "}
          and{" "}
          <span className="underline decoration-slate-300 underline-offset-2 cursor-pointer hover:text-primary transition-colors font-medium">
            featured
          </span>
          ), and engage with the content.
        </li>
      </ol>

      <h3 className="font-semibold text-[17px] mb-3 text-slate-800">
        Quick Links
      </h3>
      <ul className="mb-8 text-slate-600 space-y-2">
        <li className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
          <span className="text-xl">🌍</span>
          <Link
            to="/new"
            className="underline decoration-slate-300 underline-offset-2 hover:text-primary transition-colors text-[15px] font-medium"
          >
            Create a blog
          </Link>
        </li>
      </ul>

      <div className="border-t border-slate-100 pt-6 mt-8">
        <p className="text-slate-600 mb-4 text-[15px]">
          We share the best articles on Twitter and LinkedIn. Follow us to stay
          updated
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="w-full justify-center h-11 rounded-full border-slate-200 hover:bg-slate-50 hover:text-slate-900"
            icon={Twitter}
          >
            Twitter
          </Button>
          <Button
            variant="outline"
            className="w-full justify-center h-11 rounded-full border-slate-200 hover:bg-slate-50 hover:text-slate-900"
            icon={Linkedin}
          >
            LinkedIn
          </Button>
        </div>
      </div>
    </div>
  );
}
