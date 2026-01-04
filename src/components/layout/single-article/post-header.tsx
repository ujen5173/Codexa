import {
  ChevronDown,
  ChevronLeft,
  Menu,
  Search,
  Sun,
  UserPlus2,
} from "lucide-react";
import Logo from "../../common/logo";
import { Button } from "../../ui/button";

const PostHeader = () => {
  return (
    <header className="w-full">
      <div className="flex justify-between mx-auto px-4 py-2 max-w-300 itmes-center">
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant={"ghost-outline"}
            icon={ChevronLeft}
            iconStyle="size-5 text-slate-700"
          />
          <Button
            size="icon"
            variant={"ghost-outline"}
            icon={Menu}
            iconStyle="size-5 text-slate-700"
          />
          <Logo />
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant={"ghost-outline"}
            icon={Search}
            iconStyle="size-5 text-slate-700"
          />
          <Button
            size="icon"
            variant={"ghost-outline"}
            icon={Sun}
            iconStyle="size-5 text-slate-700"
          />
          <Button icon={UserPlus2}>Follow</Button>
          <Button
            size="icon"
            variant={"ghost-outline"}
            icon={ChevronDown}
            iconStyle="size-5 text-slate-700"
          />
        </div>
      </div>
    </header>
  );
};

export default PostHeader;
