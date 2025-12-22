import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";
import { Link } from "@tanstack/react-router";
import {
  AtSign,
  ChartNoAxesCombined,
  Code2,
  CreditCard,
  GitBranch,
  LogOut,
  MessageCircleQuestionMark,
  Settings,
  User,
} from "lucide-react";
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
                className="rounded-full object-cover size-10"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="font-inter font-normal text-slate-700"
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
                  <div className="absolute -bottom-[0.5px] right-0 bg-green-500 size-2 rounded-full" />
                </div>
                <div>
                  <p className="text-base font-semibold">{data.user.name}</p>
                  <p className="text-xs text-slate-600 font-normal">
                    {data.user.email}
                  </p>
                </div>
              </div>
            </DropdownMenuLabel>
            <div className="px-2">
              <DropdownMenuSeparator />
            </div>
            <DropdownMenuItem>
              <Code2 className="text-inherit" /> Publication
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ChartNoAxesCombined className="text-inherit" /> Analytics
            </DropdownMenuItem>
            <div className="px-2">
              <DropdownMenuSeparator />
            </div>
            <DropdownMenuItem>
              <User className="text-inherit" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="text-inherit" /> Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard className="text-inherit" /> Subscription
            </DropdownMenuItem>
            <div className="px-2">
              <DropdownMenuSeparator />
            </div>
            <DropdownMenuItem>
              <GitBranch className="text-inherit" /> Changelog
            </DropdownMenuItem>
            <DropdownMenuItem>
              <MessageCircleQuestionMark className="text-inherit" /> Support and
              feedback
            </DropdownMenuItem>
            <DropdownMenuItem>
              <AtSign className="text-inherit" /> Invite Member
            </DropdownMenuItem>
            <div className="px-2">
              <DropdownMenuSeparator />
            </div>
            <DropdownMenuItem
              variant="destructive"
              onClick={async () =>
                await authClient.signOut().then(() => window.location.reload())
              }
            >
              <LogOut className="text-inherit" /> Sign out
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
