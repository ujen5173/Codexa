import { Button } from "@/components/ui/button";
import { ChevronDown, Dot } from "lucide-react";

const RecentReadsSidebar = () => {
  return (
    <div className="flex-2 bg-white dark:bg-slate-900 shadow-sm p-4 border border-border dark:border-slate-800 rounded-2xl">
      <div className="mb-4">
        <h4 className="font-semibold text-slate-700 dark:text-slate-50 text-lg">
          Recent Reads
        </h4>
      </div>
      <div className="space-y-4 mb-4">
        <div className="">
          <h4 className="font-medium text-slate-700 dark:text-slate-100 text-base">
            When AI Can Pay, Trust Must Follow
          </h4>
          <div className="flex items-center">
            <span className="text-slate-600 dark:text-slate-300 text-sm">
              Mary udoudo
            </span>{" "}
            <Dot className="text-slate-700 dark:text-slate-300" />{" "}
            <span className="text-slate-600 dark:text-slate-300 text-sm">
              10 reads
            </span>
          </div>
        </div>
        <div className="">
          <h4 className="font-medium text-slate-700 dark:text-slate-100 text-base">
            Use Case Diagrams: What They Are and Why They Matter
          </h4>
          <div className="flex items-center">
            <span className="text-slate-600 dark:text-slate-300 text-sm">
              Jessica
            </span>{" "}
            <Dot className="text-slate-700 dark:text-slate-300" />{" "}
            <span className="text-slate-600 dark:text-slate-300 text-sm">
              81 reads
            </span>
          </div>
        </div>
        <div className="">
          <h4 className="font-medium text-slate-700 dark:text-slate-100 text-base">
            AEON: When AI Learns to Pay — Building Trust in the Agentic Economy
          </h4>
          <div className="flex items-center">
            <span className="text-slate-600 dark:text-slate-300 text-sm">
              Mary udoudo
            </span>{" "}
            <Dot className="text-slate-700 dark:text-slate-300" />{" "}
            <span className="text-slate-600 dark:text-slate-300 text-sm">
              35 reads
            </span>
          </div>
        </div>
      </div>
      <Button
        icon={ChevronDown}
        iconPlacement="right"
        variant={"outline"}
        className="w-full"
      >
        See more
      </Button>
    </div>
  );
};

export default RecentReadsSidebar;
