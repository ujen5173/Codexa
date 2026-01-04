import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import { formatDate } from "date-fns";
import { Dot } from "lucide-react";
import { useEffect, useState } from "react";
import { Img } from "react-image";

const STORAGE_KEY = "changelog_state";

const ChangelogSidebar = () => {
  const [changeLog, setChangeLog] = useState<{
    commitMessage: string;
    date: Date;
  } | null>(null);

  const [accordionValue, setAccordionValue] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setAccordionValue(stored === "closed" ? undefined : "changelog");
  }, []);

  const handleAccordionChange = (value: string | undefined) => {
    setAccordionValue(value);
    localStorage.setItem(STORAGE_KEY, value ? "open" : "closed");
  };

  useEffect(() => {
    void (async () => {
      const res = await fetch(
        `https://api.github.com/repos/ujen5173/-theReadora-/commits?per_page=1`,
        {
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
            Authorization: `Bearer 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`,
            Accept: "application/vnd.github+json",
          },
        }
      );
      const r = await res.json();

      setChangeLog({
        commitMessage: r[0].commit.message,
        date: r[0].commit.author.date,
      });
    })();
  }, []);

  return (
    <div className="flex-2 bg-white dark:bg-slate-900 shadow-sm p-4 border border-border dark:border-slate-800 rounded-2xl">
      <Accordion
        type="single"
        collapsible
        value={accordionValue}
        onValueChange={handleAccordionChange}
      >
        <AccordionItem value="changelog" className="border-none">
          <AccordionTrigger className="items-center p-0 hover:no-underline">
            <h4 className="font-semibold text-slate-700 dark:text-slate-50 text-lg">
              Changelog
            </h4>
          </AccordionTrigger>

          <AccordionContent className="mt-3 pt-2 pb-0">
            <div className="relative mb-3">
              <div className="top-1/2 left-1/2 absolute flex items-center gap-1 bg-zinc-800 px-4 py-2 border border-zinc-700 rounded-full w-max -translate-x-1/2 -translate-y-1/2">
                <Img
                  className="object-cover select-none"
                  src="/logo-white.svg"
                  alt="Codexa white logo"
                  draggable={false}
                  width={17}
                  height={17}
                />
                <Separator
                  orientation="vertical"
                  className="bg-slate-700 h-[15px!important]"
                />
                <span className="font-medium text-slate-200 text-sm">
                  Changelog
                </span>
              </div>

              <Img
                src="/changelog-bg.png"
                className="rounded-2xl w-full h-40 object-cover"
                width={200}
                height={70}
              />
            </div>

            <Link to="/">
              <h3 className="mb-2 font-medium text-slate-700 dark:text-slate-100 text-base hover:underline leading-tight">
                {changeLog?.commitMessage}
              </h3>
            </Link>

            <div className="flex items-center mb-4">
              <span className="text-slate-600 dark:text-slate-300 text-xs">
                {formatDate(changeLog?.date ?? new Date(), "MMM dd, yyyy")}
              </span>
              <Dot className="text-slate-600 dark:text-slate-300" />
              <span className="bg-green-200 dark:bg-green-300 px-2 py-0.5 rounded-full font-semibold text-green-600 dark:text-green-800 text-xs">
                New
              </span>
            </div>

            <Button
              variant="outline"
              className="w-full text-slate-600 dark:text-slate-300"
            >
              View previous changelog
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ChangelogSidebar;
