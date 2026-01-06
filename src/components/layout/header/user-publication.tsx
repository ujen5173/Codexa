import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import { Img } from "react-image";

const UserPublication = () => {
  return (
    <>
      <Separator orientation="vertical" className="h-[27px!important]" />
      <Link to="/dashboard/$publicationId" params={{ publicationId: "123" }}>
        <div className="flex items-center gap-2">
          <Img
            src="/logo.svg"
            width={200}
            height={200}
            className="size-6 object-cover"
          />
          <p className="font-bold text-slate-700 dark:text-slate-100 text-base">JS Topic</p>
        </div>
      </Link>
    </>
  );
};

export default UserPublication;
