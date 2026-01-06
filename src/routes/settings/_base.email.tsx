import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/settings/_base/email")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative">
      <div className="mx-auto px-4 py-6 w-full max-w-4xl">
        <div className="pb-6">
          <h1 className="font-semibold text-slate-800 dark:text-slate-100 text-3xl">
            Email notifications
          </h1>
          <p className="mt-1 text-slate-600 dark:text-slate-400">
            Choose the notifications you'd like in your mailbox
          </p>
        </div>
        <Separator className="mb-8" />


        <div className="space-y-4">
          <div className="flex flex-row items-center space-x-3 space-y-0 p-4 border rounded-md">
            <div className="flex-1 space-y-1 leading-none">
              <Label htmlFor="engagement">Engagement updates</Label>
              <p className="text-muted-foreground text-sm">
                Activities related to you and your content (Replies, Responses, Reactions, Mentions etc.)
              </p>
            </div>
            <Switch id="engagement" defaultChecked />
          </div>

          <div className="flex flex-row items-center space-x-3 space-y-0 p-4 border rounded-md">
            <div className="flex-1 space-y-1 leading-none">
              <Label htmlFor="new-followers">New Followers Weekly</Label>
              <p className="text-muted-foreground text-sm">
                Get weekly stats about new followers.
              </p>
            </div>
            <Switch id="new-followers" defaultChecked />
          </div>

          <div className="flex flex-row items-center space-x-3 space-y-0 p-4 border rounded-md">
            <div className="flex-1 space-y-1 leading-none">
              <Label htmlFor="content-performance">Content performance</Label>
              <p className="text-muted-foreground text-sm">
                Monthly blog posts stats newsletter (Get monthly stats for your blog posts via email.)
              </p>
            </div>
            <Switch id="content-performance" defaultChecked />
          </div>

          <div className="flex flex-row items-center space-x-3 space-y-0 p-4 border rounded-md">
            <div className="flex-1 space-y-1 leading-none">
              <Label htmlFor="communication">Communication updates</Label>
              <p className="text-muted-foreground text-sm">
                Hashnode weekly (Curated weekly newsletter with best stories and discussions.)
              </p>
            </div>
            <Switch id="communication" defaultChecked />
          </div>

          <div className="flex flex-row items-center space-x-3 space-y-0 p-4 border rounded-md">
            <div className="flex-1 space-y-1 leading-none">
              <Label htmlFor="general">General announcements</Label>
              <p className="text-muted-foreground text-sm">
                Product updates, feature additions, etc.
              </p>
            </div>
            <Switch id="general" defaultChecked />
          </div>
        </div>
      </div>

      <div className="bottom-0 sticky bg-slate-50/50 dark:bg-slate-950/50 backdrop-blur-sm p-4 border-t">
        <div className="flex justify-end mx-auto max-w-4xl">
          <Button size="lg" className="rounded-full">
            Update
          </Button>
        </div>
      </div>
    </div>
  );
}
