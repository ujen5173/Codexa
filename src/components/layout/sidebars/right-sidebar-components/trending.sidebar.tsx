import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown, Dot } from "lucide-react";
const TrendingSidebar = () => {
  return (
    <div className="flex-2 bg-white dark:bg-slate-900 shadow-sm p-4 border border-border dark:border-slate-800 rounded-2xl">
      <div className="flex justify-between items-center gap-4 mb-4">
        <h4 className="font-semibold text-slate-700 dark:text-slate-50 text-lg">
          Trending Articles
        </h4>
        <Select value={"1_week"}>
          <SelectTrigger className="w-28">
            <SelectValue placeholder="Select timezone" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="1_week">1 week</SelectItem>
              <SelectItem value="1_month">1 month</SelectItem>
              <SelectItem value="3_month">3 month</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
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

export default TrendingSidebar;
