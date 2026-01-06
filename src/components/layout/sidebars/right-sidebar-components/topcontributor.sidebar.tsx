import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { Img } from "react-image";

const TopContributorSidebar = () => {
  return (
    <div className="flex-2 bg-white dark:bg-slate-900 shadow-sm p-4 border border-border dark:border-slate-800 rounded-2xl">
      <div className="mb-4">
        <h4 className="font-semibold text-slate-700 dark:text-slate-50 text-lg">
          Top Contributor
        </h4>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Img
              src={"/users/1.png"}
              className="rounded-full size-7 object-cover"
            />
            <p className="font-medium text-slate-700 dark:text-slate-300 text-sm">
              Ramu Ranjit
            </p>
          </div>
          <Button size="icon-sm" variant={"outline"} icon={UserPlus} />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Img
              src={"/users/2.png"}
              className="rounded-full size-7 object-cover"
            />
            <p className="font-medium text-slate-700 dark:text-slate-300 text-sm">
              Yunzen Richardson
            </p>
          </div>
          <Button size="icon-sm" variant={"outline"} icon={UserPlus} />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Img
              src={"/users/3.png"}
              className="rounded-full size-7 object-cover"
            />
            <p className="font-medium text-slate-700 dark:text-slate-300 text-sm">
              Coley
            </p>
          </div>
          <Button size="icon-sm" variant={"outline"} icon={UserPlus} />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Img
              src={"/users/4.png"}
              className="rounded-full size-7 object-cover"
            />
            <p className="font-medium text-slate-700 dark:text-slate-300 text-sm">
              Sujita thapa
            </p>
          </div>
          <Button size="icon-sm" variant={"outline"} icon={UserPlus} />
        </div>
      </div>
    </div>
  );
};

export default TopContributorSidebar;
