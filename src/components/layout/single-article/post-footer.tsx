import { platformName } from "@/lib/constants";
import Logo from "../../common/logo";
import { Button } from "../../ui/button";
import { Github01Icon, Linkedin01Icon, TwitterIcon } from "hugeicons-react";

const PostFooter = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 mt-12 p-8 lg:p-10 border border-slate-200 dark:border-slate-800 rounded-2xl transition-colors duration-300">
      <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 mb-12">
        <div className="space-y-6 lg:col-span-4">
          <div className="flex items-center gap-2">
            <Logo />
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            The open platform where developers share knowledge and grow their careers.
          </p>
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Subscribe to newsletter</h4>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white dark:bg-slate-950 shadow-sm px-3 py-2 border border-slate-200 dark:border-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 w-full text-slate-900 dark:text-white placeholder:text-slate-400 text-sm"
              />
              <Button size="sm" className="justify-center bg-indigo-600 hover:bg-indigo-700 w-full text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 lg:col-start-6">
          <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">Product</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#" className="text-slate-600 hover:text-indigo-600 dark:hover:text-indigo-400 dark:text-slate-400 transition-colors">Features</a></li>
            <li><a href="#" className="text-slate-600 hover:text-indigo-600 dark:hover:text-indigo-400 dark:text-slate-400 transition-colors">Pricing</a></li>
            <li><a href="#" className="text-slate-600 hover:text-indigo-600 dark:hover:text-indigo-400 dark:text-slate-400 transition-colors">Teams</a></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">Resources</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#" className="text-slate-600 hover:text-indigo-600 dark:hover:text-indigo-400 dark:text-slate-400 transition-colors">Blog</a></li>
            <li><a href="#" className="text-slate-600 hover:text-indigo-600 dark:hover:text-indigo-400 dark:text-slate-400 transition-colors">Docs</a></li>
            <li><a href="#" className="text-slate-600 hover:text-indigo-600 dark:hover:text-indigo-400 dark:text-slate-400 transition-colors">Community</a></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#" className="text-slate-600 hover:text-indigo-600 dark:hover:text-indigo-400 dark:text-slate-400 transition-colors">About</a></li>
            <li><a href="#" className="text-slate-600 hover:text-indigo-600 dark:hover:text-indigo-400 dark:text-slate-400 transition-colors">Careers</a></li>
            <li><a href="#" className="text-slate-600 hover:text-indigo-600 dark:hover:text-indigo-400 dark:text-slate-400 transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="flex md:flex-row flex-col-reverse justify-between items-center gap-6 pt-8 border-slate-200 dark:border-slate-800 border-t">
        <p className="text-slate-500 dark:text-slate-400 text-xs">
          © {new Date().getFullYear()} {platformName} LLC. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <Button size="icon-sm" variant="ghost" className="rounded-md" icon={Linkedin01Icon} />
          <Button size="icon-sm" variant="ghost" className="rounded-md" icon={Github01Icon} />
          <Button size="icon-sm" variant="ghost" className="rounded-md" icon={TwitterIcon} />
        </div>
      </div>
    </footer>
  );
};

export default PostFooter;
