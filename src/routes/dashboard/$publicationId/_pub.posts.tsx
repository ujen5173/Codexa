import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Separator } from "@/components/ui/separator";
import { createFileRoute } from "@tanstack/react-router";
import { Note01Icon } from "hugeicons-react";

export const Route = createFileRoute("/dashboard/$publicationId/_pub/posts")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative">
      <div className="mx-auto py-10 w-full max-w-4xl min-h-screen">
        <div className="pb-6">
          <h1 className="font-semibold text-slate-800 dark:text-slate-100 text-3xl">
            Articles and drafts
          </h1>
          <p className="mt-1 text-slate-600 dark:text-slate-400">
            Status overview of your articles and drafts
          </p>
        </div>

        <Separator />
        <div className="flex gap-2 py-4">
          <Button variant={"outline"} size="sm">
            Published
          </Button>
          <Button variant={"ghost"} size="sm">
            Drafts
          </Button>
          <Button variant={"ghost"} size="sm">
            Scheduled
          </Button>
          <Button variant={"ghost"} size="sm">
            Deleted
          </Button>
        </div>
        <Separator className="mb-4" />
        <Empty className="md:p-32 border border-border dark:border-border-600/60">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Note01Icon />
            </EmptyMedia>
            <EmptyTitle>You haven’t published any articles yet</EmptyTitle>
            <EmptyDescription>
              Your recently published articles will show up here.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
        {/* <div className="flex items-center gap-4 mb-4">
          <Input placeholder="Search articles" icon={Search01Icon} />
          <Button
            size="sm"
            variant={"outline"}
            className="rounded-full"
            icon={FilterIcon}
          >
            Filters
          </Button>
        </div> */}
      </div>
    </div>
  );
}
