import DashboardFooter from "@/components/layout/footer/dashboard-footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CursorInWindowIcon,
  NoteAddIcon,
  PropertyEditIcon,
  Settings01Icon,
} from "hugeicons-react";
import { ExternalLinkIcon } from "lucide-react";

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <main className="bg-slate-50 dark:bg-slate-950 w-full min-h-[calc(100vh-75px)]">
        <div className="mx-auto px-4 py-10 max-w-6xl">
          <div className="mb-8">
            <div className="mb-4">
              <h1 className="font-semibold text-2xl">
                Build your community, start a project.
              </h1>
            </div>
            <div className="flex items-center gap-4 bg-white dark:bg-slate-900 shadow-sm p-3 border border-border hover:border-primary/60 rounded-xl w-68 cursor-pointer">
              <div className="bg-emerald-500/20 p-3 border border-emerald-500/70 rounded-md">
                <NoteAddIcon className="text-emerald-500/70" />
              </div>
              <p className="font-medium text-slate-700 dark:text-slate-200 text-lg">
                New publication
              </p>
            </div>
          </div>
          <div className="py-6">
            <h3 className="mb-2 font-semibold text-slate-800 dark:text-slate-50 text-2xl">
              Your Publications
            </h3>
            <p className="text-slate-700 dark:text-slate-300">
              Create and manage your publications.
            </p>
          </div>
          <Separator />
          <div className="gap-4 grid grid-cols-2 py-6">
            <Link to="/dashboard/$publicationId" params={{ publicationId: "123" }}>
              <div className="bg-white dark:bg-slate-900 dark:hover:bg-slate-900/70 shadow-sm p-4 border border-border hover:border-primary/60 rounded-xl transition">
                <div className="flex justify-between items-center pb-8">
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-50 text-base">
                      Ujen Basi
                    </h4>
                    <h4 className="text-slate-700 dark:text-slate-200 text-sm">
                      ujen5173.codexa.dev
                    </h4>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-3 border border-slate-300 dark:border-slate-600 rounded-md">
                    <CursorInWindowIcon className="text-slate-700 dark:text-slate-300" />
                  </div>
                </div>
                <Separator />
                <div className="flex justify-between items-center gap-4 pt-3">
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant={"outline"} icon={PropertyEditIcon}>
                      Editor
                    </Button>
                    <Button size="sm" variant={"ghost"} icon={Settings01Icon}>
                      Dashboard
                    </Button>
                  </div>
                  <div>
                    <Button
                      size="icon"
                      variant={"link"}
                      icon={ExternalLinkIcon}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>

      <DashboardFooter />
    </>
  );
}
