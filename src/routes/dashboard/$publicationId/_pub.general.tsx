import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { createFileRoute } from "@tanstack/react-router";
import {
  CodeCircleIcon,
  GithubIcon,
  Globe02Icon,
  Linkedin01Icon,
  TwitterIcon,
} from "hugeicons-react";
import { useState } from "react";

export const Route = createFileRoute("/dashboard/$publicationId/_pub/general")({
  component: RouteComponent,
});

function RouteComponent() {
  const [deleteConfirmation, setDeleteConfirmation] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Mock data - replace with actual data fetching in real implementation
  const projectTitle = "AI Moderation";

  const handleDelete = () => {
    if (deleteConfirmation === projectTitle) {
      setIsDeleting(true);
      // Implement delete logic here
      console.log("Deleting project...");
      setTimeout(() => setIsDeleting(false), 2000);
    }
  };

  return (
    <div className="relative">
      <div className="mx-auto px-4 py-10 w-full max-w-4xl min-h-screen">
        <div className="pb-6">
          <h1 className="font-semibold text-slate-800 dark:text-slate-100 text-3xl">
            General
          </h1>
          <p className="mt-1 text-slate-600 dark:text-slate-400">
            Manage your publication
          </p>
        </div>

        <Separator className="mb-8" />

        <div className="space-y-8">
          <div className="gap-6 grid">
            <div className="gap-2 grid">
              <Label htmlFor="pub-name">Publication Name</Label>
              <Input
                className="rounded-md"
                id="pub-name"
                placeholder="Enter publication name"
                defaultValue={projectTitle}
              />
            </div>

            <div className="gap-2 grid">
              <Label htmlFor="pub-about">About</Label>
              <Textarea
                id="pub-about"
                placeholder="Tell us about your publication"
                className="min-h-[120px]"
              />
            </div>
          </div>

          <Separator />

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">Social Profiles</h3>
              <p className="text-muted-foreground text-sm">
                Connect your social media accounts to your publication.
              </p>
            </div>

            <div className="gap-4 grid">
              <div className="gap-2 grid">
                <Label htmlFor="github" className="flex items-center gap-2">
                  <GithubIcon className="size-4" /> GitHub
                </Label>
                <Input
                  className="rounded-md"
                  id="github"
                  placeholder="https://github.com/username"
                />
              </div>

              <div className="gap-2 grid">
                <Label htmlFor="twitter" className="flex items-center gap-2">
                  <TwitterIcon className="size-4" /> Twitter
                </Label>
                <Input
                  className="rounded-md"
                  id="twitter"
                  placeholder="https://twitter.com/username"
                />
              </div>

              <div className="gap-2 grid">
                <Label htmlFor="linkedin" className="flex items-center gap-2">
                  <Linkedin01Icon className="size-4" /> LinkedIn
                </Label>
                <Input
                  className="rounded-md"
                  id="linkedin"
                  placeholder="https://linkedin.com/in/username"
                />
              </div>

              <div className="gap-2 grid">
                <Label htmlFor="devto" className="flex items-center gap-2">
                  <CodeCircleIcon className="size-4" /> Dev.to
                </Label>
                <Input
                  className="rounded-md"
                  id="devto"
                  placeholder="https://dev.to/username"
                />
              </div>

              <div className="gap-2 grid">
                <Label htmlFor="website" className="flex items-center gap-2">
                  <Globe02Icon className="size-4" /> Website
                </Label>
                <Input
                  className="rounded-md"
                  id="website"
                  placeholder="https://yourwebsite.com"
                />
              </div>
            </div>
          </div>

          <Separator />

          <div className="bg-destructive/20 p-6 border border-destructive/20 rounded-lg">
            <h3 className="font-semibold text-destructive text-lg">
              Danger Zone
            </h3>
            <div className="flex sm:flex-row flex-col justify-between sm:items-center gap-4 mt-2">
              <div className="space-y-1">
                <p className="font-medium">Delete this project</p>
                <p className="text-muted-foreground text-sm">
                  Once you delete a project, there is no going back. Please be
                  certain.
                </p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="destructive">Delete project</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      You are about to delete this project
                    </DialogTitle>
                    <DialogDescription className="space-y-4 pt-2">
                      <div className="bg-destructive/10 p-4 border-destructive border-l-4 rounded-r text-destructive-foreground">
                        <p className="font-semibold text-destructive">
                          Warning
                        </p>
                        <p className="mt-1 text-sm">
                          This action is not reversible, please be certain.
                          Deleting this will remove all your articles, blog
                          settings, drafts, and members. Team members will lose
                          access to the project but will keep their Hashnode
                          accounts.
                        </p>
                      </div>
                      <div className="mt-4">
                        <p className="mb-2 text-foreground text-sm">
                          Enter the project name{" '"}
                          <span className="font-bold">{projectTitle}'</span> to
                          continue
                        </p>
                        <Input
                          className="rounded-md w-full"
                          value={deleteConfirmation}
                          onChange={(e) =>
                            setDeleteConfirmation(e.target.value)
                          }
                          placeholder="Enter project name to confirm"
                        />
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="gap-2 sm:gap-0">
                    <DialogTrigger asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogTrigger>
                    <Button
                      variant="destructive"
                      onClick={handleDelete}
                      disabled={
                        deleteConfirmation !== projectTitle || isDeleting
                      }
                    >
                      {isDeleting ? "Deleting..." : "Delete project"}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-0 sticky bg-slate-50/50 dark:bg-slate-950/50 backdrop-blur-sm p-4 border-t">
        <div className="flex justify-end mx-auto max-w-4xl">
          <Button size="lg" className="rounded-full">Update</Button>
        </div>
      </div>
    </div>
  );
}
