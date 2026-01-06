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
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/settings/_base/account")({
  component: RouteComponent,
});

function RouteComponent() {
  const [deleteConfirmation, setDeleteConfirmation] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const confirmText = "delete my account";

  const handleDelete = () => {
    if (deleteConfirmation === confirmText) {
      setIsDeleting(true);
      console.log("Deleting account...");
      setTimeout(() => setIsDeleting(false), 2000);
    }
  };

  return (
    <div className="relative">
      <div className="mx-auto px-4 py-6 w-full max-w-4xl">
        <div className="pb-6">
          <h1 className="font-semibold text-slate-800 dark:text-slate-100 text-3xl">
            Account management
          </h1>
          <p className="mt-1 text-slate-600 dark:text-slate-400">
            Configure your account
          </p>
        </div>
        <Separator className="mb-8" />
        <div className="space-y-8 max-w-2xl">
          <div className="gap-2 grid">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder="Username"
              defaultValue="ujenbasi"
              className="rounded-md"
            />
            <p className="text-[0.8rem] text-muted-foreground">
              You can only change your username once.
            </p>
          </div>

          <div className="gap-2 grid">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              placeholder="Email address"
              defaultValue="ujenbasi1122@gmail.com"
              className="rounded-md"
            />
            <p className="text-[0.8rem] text-muted-foreground">
              Changing your email could break your OAuth sign-in if it differs from
              your social media email. Use magic link sign-in if this issue arises.
            </p>
          </div>

          <div className="">
            <h3 className="mb-4 font-semibold text-slate-700 dark:text-slate-100 text-lg">
              Danger Area
            </h3>
            <Separator className="mb-4" />
            <div className="flex sm:flex-row flex-col justify-between sm:items-center gap-4 mt-2">
              <div className="space-y-1">
                <p className="font-medium">Delete account</p>
                <p className="text-muted-foreground text-sm">
                  Your Codexa account administers these blogs:
                  ujen5173.codexa.dev. Your personal data will be deleted
                  permanently when you delete your account on Codexa. This
                  action is irreversible.
                </p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="destructive">Delete account</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription className="space-y-4 pt-2">
                      <div className="bg-destructive/10 p-4 border-destructive border-l-4 rounded-r text-destructive-foreground">
                        <p className="font-semibold text-destructive">Warning</p>
                        <p className="mt-1 text-sm">
                          This action is not reversible. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </p>
                      </div>
                      <div className="mt-4">
                        <p className="mb-2 text-foreground text-sm">
                          Type <span className="font-bold">{confirmText}</span>{" "}
                          to confirm.
                        </p>
                        <Input
                          className="rounded-md w-full"
                          value={deleteConfirmation}
                          onChange={(e) =>
                            setDeleteConfirmation(e.target.value)
                          }
                          placeholder={confirmText}
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
                        deleteConfirmation !== confirmText || isDeleting
                      }
                    >
                      {isDeleting ? "Deleting..." : "Delete account"}
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
          <Button size="lg" className="rounded-full">
            Update
          </Button>
        </div>
      </div>
    </div>
  );
}
