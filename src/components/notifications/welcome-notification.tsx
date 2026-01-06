import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter } from "lucide-react";

export function WelcomeNotification() {
  return (
    <div className="text-slate-800 dark:text-slate-100">
      <h2 className="flex items-center gap-2 mb-4 font-semibold text-xl">
        Hi <span className="text-2xl">👋</span>, User
      </h2>

      <p className="mb-6 text-[15px] text-slate-600 dark:text-slate-100 leading-relaxed">
        Welcome to Codexa, the developer community that truly believes in
        creative freedom!
      </p>

      <p className="mb-4 text-[15px] text-slate-600 dark:text-slate-100">
        Here&apos;s some information to help you get started with Codexa.
      </p>

      <h3 className="mb-3 font-semibold text-[17px] text-slate-800 dark:text-slate-100">
        How does it work?
      </h3>
      <ol className="space-y-3 mb-8 ml-5 text-[15px] text-slate-600 dark:text-slate-100 leading-relaxed list-decimal list-outside">
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
          <span className="font-medium hover:text-primary decoration-slate-300 underline underline-offset-2 transition-colors cursor-pointer">
            personal feed
          </span>
          ,{" "}
          <span className="font-medium hover:text-primary decoration-slate-300 underline underline-offset-2 transition-colors cursor-pointer">
            following
          </span>{" "}
          and{" "}
          <span className="font-medium hover:text-primary decoration-slate-300 underline underline-offset-2 transition-colors cursor-pointer">
            featured
          </span>
          ), and engage with the content.
        </li>
      </ol>

      <h3 className="mb-3 font-semibold text-[17px] text-slate-800 dark:text-slate-100">
        Quick Links
      </h3>
      <ul className="space-y-2 mb-8 text-slate-600 dark:text-slate-100">
        <li className="flex items-center gap-3">
          <span className="bg-slate-300 rounded-full w-1.5 h-1.5"></span>
          <span className="text-xl">🌍</span>
          <Link
            to="/new"
            className="font-medium text-[15px] hover:text-primary decoration-slate-300 underline underline-offset-2 transition-colors"
          >
            Create a blog
          </Link>
        </li>
      </ul>

      <div className="mt-8 pt-6 border-slate-100 border-t">
        <p className="mb-4 text-[15px] text-slate-600 dark:text-slate-100">
          We share the best articles on Twitter and LinkedIn. Follow us to stay
          updated
        </p>
        <div className="gap-4 grid grid-cols-2">
          <Button
            variant="outline"
            className="justify-center hover:bg-slate-50 dark:hover:bg-slate-700 border-slate-200 rounded-full w-full h-11 hover:text-slate-900 dark:hover:text-slate-200"
            icon={Twitter}
          >
            Twitter
          </Button>
          <Button
            variant="outline"
            className="justify-center hover:bg-slate-50 dark:hover:bg-slate-700 border-slate-200 rounded-full w-full h-11 hover:text-slate-900 dark:hover:text-slate-200"
            icon={Linkedin}
          >
            LinkedIn
          </Button>
        </div>
      </div>
    </div>
  );
}
