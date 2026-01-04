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
import { NoteIcon } from "hugeicons-react";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/dashboard/$publicationId/_pub/series")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative font-inter">
      <div className="mx-auto px-4 py-10 w-full max-w-4xl min-h-screen">
        <div className="pb-6">
          <h1 className="font-semibold text-slate-800 dark:text-slate-100 text-3xl">
            Series
          </h1>
          <p className="mt-1 text-slate-600 dark:text-slate-400">
            Create and manage your series

          </p>
        </div>

        <Separator className="mb-4" />
        <Empty className="md:p-32 border border-border dark:border-border-600/60">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <NoteIcon />
            </EmptyMedia>
            <EmptyTitle>You have not created any series yet</EmptyTitle>
            <EmptyDescription className="mb-4">
              Series can help you categorize your articles in one page and link
              them together.
            </EmptyDescription>
            <EmptyContent>
              <Button icon={Plus}>Create new series</Button>
            </EmptyContent>
          </EmptyHeader>
        </Empty>
      </div>
    </div>
  );
}
