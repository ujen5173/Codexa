import { Button } from "@/components/ui/button";
import { platformName } from "@/lib/constants";

const PremiumSidebar = () => {
  return (
    <div className="flex-2 p-4 border border-transparent rounded-2xl pro-banner">
      <h4 className="mb-2 font-semibold text-slate-700 dark:text-slate-50 text-lg">
        Introducing {platformName} Pro 🚀
      </h4>
      <p className="mb-5 text-slate-600 dark:text-slate-300 text-sm">
        Level up your publishing experience with {platformName} Pro with
        powerful AI and premium features.
      </p>
      <div className="flex items-center gap-2">
        <Button effect={"shineHover"} variant={"dark"}>
          Upgrade now
        </Button>
        <Button
          effect="hoverUnderline"
          variant={"outline"}
          className="hover:bg-white"
        >
          Learn more
        </Button>
      </div>
    </div>
  );
};

export default PremiumSidebar;
