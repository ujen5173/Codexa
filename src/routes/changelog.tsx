import Logo from "@/components/common/logo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { platformName } from "@/lib/constants";
import { createFileRoute, Link } from "@tanstack/react-router";
import { format } from "date-fns";
import {
  ArrowRight01Icon,
  Calendar03Icon,
  DiscordIcon,
  GitCommitIcon,
  Home01Icon,
  InstagramIcon,
  Linkedin01Icon,
  Loading03Icon,
  SparklesIcon,
  TwitterIcon
} from "hugeicons-react";
import { useEffect, useState } from "react";
import { Img } from "react-image";

export const Route = createFileRoute("/changelog")({
  component: RouteComponent,
});

// Color variants for different commits
const colorVariants = [
  "bg-blue-500/5 border-blue-500/20 hover:border-blue-500/40",
  "bg-purple-500/5 border-purple-500/20 hover:border-purple-500/40",
  "bg-green-500/5 border-green-500/20 hover:border-green-500/40",
  "bg-orange-500/5 border-orange-500/20 hover:border-orange-500/40",
  "bg-pink-500/5 border-pink-500/20 hover:border-pink-500/40",
  "bg-cyan-500/5 border-cyan-500/20 hover:border-cyan-500/40",
];

const badgeColors = [
  "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
  "bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
  "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800",
  "bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800",
  "bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-800",
  "bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800",
];

const commitBadgeColors = [
  "bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/50",
  "bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/50",
  "bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800/50",
  "bg-orange-50 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800/50",
  "bg-pink-50 dark:bg-pink-950/50 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-800/50",
  "bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/50",
];

function RouteComponent() {
  const [commits, setCommits] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void (async () => {
      try {
        const res = await fetch(
          `https://api.github.com/repos/ujen5173/-theReadora-/commits?per_page=30`,
          {
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
              Authorization: `Bearer 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`,
              Accept: "application/vnd.github+json",
            },
          }
        );
        const data = await res.json();
        setCommits(data);
      } catch (error) {
        console.error("Failed to fetch commits", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="relative bg-slate-50 dark:bg-slate-950 min-h-screen overflow-hidden">
      <section className="relative bg-background/80 backdrop-blur-md pt-6 pb-6 border-border border-b">
        <div className="mx-auto px-4 max-w-5xl">
          <nav className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home01Icon className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <ArrowRight01Icon className="w-3 h-3 text-muted-foreground/50" />
            <span className="text-foreground font-medium">Changelog</span>
          </nav>

          <div className="relative mb-8 shadow-2xl shadow-blue-900/10 dark:shadow-blue-900/20 rounded-3xl overflow-hidden">
            <div className="top-1/2 left-1/2 absolute flex items-center gap-3 bg-zinc-900/90 backdrop-blur-md px-6 py-3 border border-zinc-700/50 rounded-full w-max -translate-x-1/2 -translate-y-1/2 z-10">
              <Img
                className="w-6 h-6 object-cover select-none"
                src="/logo-white.svg"
                alt="Codexa white logo"
                draggable={false}
              />
              <Separator
                orientation="vertical"
                className="bg-slate-600 h-[20px!important]"
              />
              <span className="font-semibold text-slate-100 text-lg tracking-wide">
                Changelog
              </span>
            </div>

            <Img
              src="/changelog-bg.png"
              className="w-full h-64 md:h-80 object-cover"
              alt="Changelog cover"
              loader={<div className="bg-slate-200 dark:bg-slate-800 w-full h-64 md:h-80 animate-pulse" />}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 mb-4 px-4 py-2 rounded-full">
              <SparklesIcon className="w-4 h-4 text-primary" />
              <span className="font-medium text-primary text-sm">Product Updates</span>
            </div>
            <h1 className="mb-4 font-bold text-4xl text-foreground tracking-tight md:text-5xl">
              Latest Updates
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Stay up to date with the latest improvements, fixes, and features added to Codexa.
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-5xl">
          {loading && (
            <div className="flex justify-center items-center py-20">
              <Loading03Icon className="w-8 h-8 text-primary animate-spin" />
            </div>
          )}

          {!loading && (
            <div className="relative">

              <div className="gap-8 grid grid-cols-1 md:grid-cols-2 relative z-10">
                {commits.map((commit: any, index: number) => {
                  const colorIndex = index % colorVariants.length;
                  const badgeColor = badgeColors[colorIndex];
                  const cardColor = colorVariants[colorIndex];
                  const commitColor = commitBadgeColors[colorIndex];
                  const isEven = index % 2 === 0;

                  return (
                    <div
                      key={commit.sha}
                      className={`relative group ${!isEven ? 'md:mt-16' : ''}`}
                    >
                      <div className={`hidden md:flex absolute top-12 ${isEven ? '-right-[2.65rem]' : '-left-[2.65rem]'} items-center justify-center`}>
                        <div className="w-3 h-3 rounded-full bg-border group-hover:bg-primary transition-colors duration-300 ring-4 ring-background" />
                        <div className={`h-px w-8 bg-border group-hover:bg-primary/50 transition-colors duration-300 absolute ${isEven ? 'right-full' : 'left-full'}`} />
                      </div>

                      <div
                        className={`relative p-6 border-2 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden ${cardColor}`}>

                        <div className="relative flex flex-col gap-3 mb-4 z-10">
                          <div className="flex items-center justify-between">
                            <Badge className={`${badgeColor} border px-3 py-1.5 font-medium w-fit text-xs hover:bg-opacity-80 transition-colors`}>
                              <Calendar03Icon className="mr-1.5 w-3.5 h-3.5" />
                              {format(new Date(commit.commit.author.date), "MMM d, yyyy")}
                            </Badge>
                            <span className="text-muted-foreground text-xs font-mono opacity-50">#{commits.length - index}</span>
                          </div>
                        </div>

                        <h3 className="relative mb-3 font-semibold text-foreground text-lg leading-tight line-clamp-3 group-hover:text-primary transition-colors duration-200 z-10">
                          {commit.commit.message}
                        </h3>

                        <div className="relative flex sm:flex-row flex-col sm:justify-between sm:items-center gap-2 pt-3 border-border/50 border-t z-10">
                          <div className="flex items-center gap-2 text-muted-foreground text-xs">
                            {format(new Date(commit.commit.author.date), "h:mm a")}
                          </div>

                          <a
                            href={commit.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-1.5 px-2.5 py-1.5 border rounded-md font-medium text-xs transition-transform hover:scale-105 ${commitColor}`}
                          >
                            <GitCommitIcon className="w-3.5 h-3.5" />
                            <span className="font-mono">{commit.sha.substring(0, 7)}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {!loading && commits.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">No changelog entries found.</p>
            </div>
          )}
        </div>
      </section>

      <footer className="relative bg-background/80 backdrop-blur-md border-border dark:border-slate-600/60 border-t w-full">
        <div className="mx-auto px-4 py-6 max-w-6xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Logo onlyIcon />
              <ul className="flex items-center">
                <Link to="/">
                  <li className="px-2 py-1 hover:text-primary text-xs hover:underline transition">
                    Home
                  </li>
                </Link>
                <Link to="/changelog">
                  <li className="px-2 py-1 hover:text-primary text-xs hover:underline transition">
                    Changelog
                  </li>
                </Link>
                <Link to="/">
                  <li className="px-2 py-1 hover:text-primary text-xs hover:underline transition">
                    Terms and Condition
                  </li>
                </Link>
                <Link to="/">
                  <li className="px-2 py-1 hover:text-primary text-xs hover:underline transition">
                    Privacy Policy
                  </li>
                </Link>
              </ul>
            </div>
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center">
                <Button variant={"link"} icon={TwitterIcon} size="icon-sm" />
                <Button variant={"link"} icon={Linkedin01Icon} size="icon-sm" />
                <Button variant={"link"} icon={InstagramIcon} size="icon-sm" />
                <Button variant={"link"} icon={DiscordIcon} size="icon-sm" />
              </div>
              <Separator className="h-[17px!important]" orientation="vertical" />
              <div className="font-medium text-green-400 text-xs">All services are online</div>
            </div>
          </div>
          <div className="py-2 text-xs text-center">
            © {platformName} {new Date().getFullYear()} — Ujen Basi.
          </div>
        </div>
      </footer>
    </div>
  );
}
