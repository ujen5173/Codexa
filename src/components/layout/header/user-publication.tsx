import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import { Img } from "react-image";

const UserPublication = () => {
  return (
    <>
      <Separator orientation="vertical" className="h-[27px!important]" />
      <Link to="/dashboard/123">
        <div className="flex items-center gap-2 font-inter">
          <Img
            src="/logo.svg"
            width={200}
            height={200}
            className="size-6 object-cover"
          />
          <p className="font-medium text-base">Ujen basi</p>
        </div>
      </Link>
    </>
  );
};

export default UserPublication;
