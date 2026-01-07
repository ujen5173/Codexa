import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Separator } from "@/components/ui/separator";
import { createFileRoute } from "@tanstack/react-router";
import {
  Building03Icon,
  NotebookIcon,
  StarsIcon,
  UserAdd01Icon,
} from "hugeicons-react";
import { ChevronRight, PenLine, PenLineIcon } from "lucide-react";

export const Route = createFileRoute("/dashboard/$publicationId/_pub/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="mx-auto sm:px-6 py-6 sm:py-10 w-full max-w-4xl">
      <div className="pb-4 sm:pb-6">
        <div className="flex sm:flex-row flex-col items-start sm:items-center gap-2 sm:gap-4 mb-2">
          <h1 className="font-semibold text-slate-800 dark:text-slate-100 text-2xl sm:text-3xl lg:text-4xl">
            Overview
          </h1>
          <span className="flex items-center gap-1.5 bg-pink-700/10 dark:bg-pink-700/30 px-3 py-2 rounded-md font-semibold text-pink-500 text-xs">
            <StarsIcon className="size-4 text-pink-500" />
            Welcome!
          </span>
        </div>
        <p className="text-slate-700 dark:text-slate-200 text-base">
          Learn more about your new dashboard and get started
        </p>
      </div>
      <Separator />
      <section className="py-6">
        <div className="flex justify-between items-center gap-4 mb-3">
          <p className="font-semibold text-slate-800 dark:text-slate-100">
            Your publication stats
          </p>
          <Button
            variant={"link"}
            icon={ChevronRight}
            iconPlacement="right"
            size="sm"
          >
            Go to analytics
          </Button>
        </div>
        <div className="gap-4 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-1 p-3 sm:p-4 border border-border dark:border-slate-600/30 rounded-md">
            <h5 className="font-semibold text-slate-700 dark:text-slate-100 text-base sm:text-lg">
              2
            </h5>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
              7-day page view
            </p>
          </div>
          <div className="space-y-1 p-4 border border-border dark:border-slate-600/30 rounded-md">
            <h5 className="font-semibold text-slate-700 dark:text-slate-100 text-lg">
              3
            </h5>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Total page views
            </p>
          </div>
          <div className="space-y-1 p-4 border border-border dark:border-slate-600/30 rounded-md">
            <h5 className="font-semibold text-slate-700 dark:text-slate-100 text-lg">
              -
            </h5>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Newsletter subscribers
            </p>
          </div>
        </div>
      </section>
      <section className="py-6">
        <div className="flex justify-between items-center gap-4 mb-3">
          <p className="font-semibold text-slate-800 dark:text-slate-100">
            Quick Links
          </p>
        </div>
        <div className="gap-4 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 border border-border dark:border-slate-600/30 rounded-md">
            <div className="bg-purple-600/20 p-2.5 rounded-full">
              <PenLineIcon className="size-4 text-purple-700" />
            </div>
            <div className="space-y-1">
              <h5 className="font-semibold text-slate-700 dark:text-slate-100 text-lg">
                Write an article
              </h5>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Share your thoughts with the community.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 border border-border dark:border-slate-600/30 rounded-md">
            <div className="bg-blue-600/20 p-2.5 rounded-full">
              <NotebookIcon className="size-4 text-blue-700" />
            </div>
            <div className="space-y-1">
              <h5 className="font-semibold text-slate-700 dark:text-slate-100 text-lg">
                Create a series
              </h5>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Categorize your articles in one page.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 border border-border dark:border-slate-600/30 rounded-md">
            <div className="bg-pink-600/20 p-2.5 rounded-full">
              <UserAdd01Icon className="size-4 text-pink-700" />
            </div>
            <div className="space-y-1">
              <h5 className="font-semibold text-slate-700 dark:text-slate-100 text-lg">
                Invite team member
              </h5>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Invite members and start collaborating!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6">
        <div className="flex justify-between items-center gap-4 mb-3">
          <p className="font-semibold text-slate-800 dark:text-slate-100">
            Publication info
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-4 sm:gap-6">
          <div className="lg:flex-2 space-y-4 p-4 sm:p-6 border border-border dark:border-slate-600/30 rounded-md w-full">
            <div className="bg-purple-600/20 p-2.5 rounded-full w-max">
              <Building03Icon className="size-4 text-purple-700" />
            </div>
            <p className="font-semibold text-slate-700 dark:text-slate-100 text-base">
              Ujen Shrestha
            </p>
            <div className="flex bg-slate-100 dark:bg-slate-900 p-4 border dark:border-slate-800 rounded-md broder-slate-200">
              <div className="flex-1">
                <div>-</div>
                <div>Article</div>
              </div>
              <div className="flex-1">
                <div>-</div>
                <div>Follower</div>
              </div>
            </div>
            <Button variant={"outline"} className="w-full">
              Edit blog info
            </Button>
          </div>
          <div className="lg:flex-5 p-4 sm:p-6 border border-border dark:border-slate-600/30 rounded-md w-full">
            <Empty className="sm:p-6 lg:p-8">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <Building03Icon />
                </EmptyMedia>
                <EmptyTitle>No recent articles</EmptyTitle>
                <EmptyDescription>
                  Your recently published articles will show up here.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <div className="flex gap-2">
                  <Button icon={PenLine}>Start writing Project</Button>
                </div>
              </EmptyContent>
            </Empty>
          </div>
        </div>
      </section>
    </main>
  );
}
