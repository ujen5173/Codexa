import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { linkItems } from "@/constants/site";
import { authClient } from "@/lib/auth-client";
import { Link } from "@tanstack/react-router";
import { LogOut } from "lucide-react";
import { Img } from "react-image";
import { Button } from "../ui/button";

const UserDropDown = () => {
  const { data } = authClient.useSession();

  return (
    <>
      {data?.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-full">
            <div role="button">
              <Img
                src={data?.user.image ?? "/default_user.avif"}
                alt={data?.user.name}
                width={38}
                height={38}
                className="rounded-full size-10 object-cover"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="font-normal text-slate-700 dark:text-slate-200"
            align="end"
          >
            <DropdownMenuLabel>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Img
                    src={data?.user.image ?? "/default_user.avif"}
                    alt="Default user"
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                  <div className="right-0 -bottom-[0.5px] absolute bg-green-500 rounded-full size-2" />
                </div>
                <div>
                  <p className="font-semibold text-base">{data.user.name}</p>
                  <p className="font-normal text-slate-600 dark:text-slate-300 text-xs">
                    {data.user.email}
                  </p>
                </div>
              </div>
            </DropdownMenuLabel>

            {linkItems.userDropDown.map((ddItem) => {
              if (ddItem.separator) {
                return (
                  <div key={ddItem.id} className="px-2">
                    {ddItem.icon}
                  </div>
                );
              } else {
                return (
                  <Link
                    to={ddItem.href}
                    key={ddItem.id}
                    disabled={ddItem.disabled}
                  >
                    <DropdownMenuItem
                      className="cursor-pointer"
                      disabled={ddItem.disabled}
                    >
                      {ddItem.icon}
                      <span>{ddItem.label}</span>
                    </DropdownMenuItem>
                  </Link>
                );
              }
            })}

            <DropdownMenuItem
              variant="destructive"
              onClick={async () =>
                await authClient.signOut().then(() => window.location.reload())
              }
            >
              <LogOut className="text-inherit" />
              <span>Sign out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button asChild>
          <Link to="/onboard">Sign in</Link>
        </Button>
      )}
    </>
  );
};

export default UserDropDown;
