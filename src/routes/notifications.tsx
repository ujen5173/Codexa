import { WelcomeNotification } from "@/components/notifications/welcome-notification";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { createFileRoute } from "@tanstack/react-router";
import {
  AtSign,
  CircleCheckBig,
  Heart,
  MessageCircleMore,
  UserPlus,
} from "lucide-react";
import { useState, type JSX } from "react";

export const Route = createFileRoute("/notifications")({
  component: RouteComponent,
});

const MOCK_NOTIFICATIONS = [
  {
    id: "1",
    type: "follow",
    user: {
      name: "Ujen Basi",
      avatarUrl:
        "https://lh3.googleusercontent.com/a/ACg8ocLw_ASOkduUo-m8j1vg7ArhVxm4lPUnVaulJ-7gJZ3Jd0xjkA=s96-c",
    },
    date: "9 Jan 2024, 11:37 pm",
    content: "",
  },
  {
    id: "2",
    type: "mention",
    user: {
      name: "ujenbasi",
      avatarUrl:
        "https://lh3.googleusercontent.com/a/ACg8ocLw_ASOkduUo-m8j1vg7ArhVxm4lPUnVaulJ-7gJZ3Jd0xjkA=s96-c",
    },
    content: "Hashnode Clone using T3 stack",
    date: "6 Jan 2024, 6:44 pm",
  },
  {
    id: "3",
    type: "comment",
    user: {
      name: "Ujen Basi",
      avatarUrl:
        "https://lh3.googleusercontent.com/a/ACg8ocLw_ASOkduUo-m8j1vg7ArhVxm4lPUnVaulJ-7gJZ3Jd0xjkA=s96-c",
    },
    post: { title: "Hello world" },
    content: "Hey ujenbasi Great project",
    date: "4 Jul 2023, 2:36 pm",
  },
  {
    id: "4",
    type: "like",
    user: {
      name: "Ujen Basi",
      avatarUrl:
        "https://lh3.googleusercontent.com/a/ACg8ocLw_ASOkduUo-m8j1vg7ArhVxm4lPUnVaulJ-7gJZ3Jd0xjkA=s96-c",
    },
    content: "Hello world",
    date: "4 Jul 2023, 2:36 pm",
  },
];

type NotificationType = "like" | "comment" | "mention" | "follow";
type ContentContext = "ICON" | "TITLE" | "CONTENT";

const notificationConfig: Record<
  NotificationType,
  {
    icon: JSX.Element;
    title: (user: string, context: string) => JSX.Element;
    content: (n: string) => string;
  }
> = {
  like: {
    icon: <Heart className="w-5 h-5 text-red-500 fill-red-500" />,
    title: (user, context) => (
      <span>
        <strong>{user}</strong> liked your article <strong>'{context}'</strong>
      </span>
    ),
    content: (n) => `${n} liked your post`,
  },
  comment: {
    icon: <MessageCircleMore className="w-5 h-5 text-blue-600" />,
    title: (user, context) => (
      <span>
        <strong>{user}</strong> commented on you article{" "}
        <strong>'{context}'</strong>
      </span>
    ),
    content: (n) => `${n} commented on your post`,
  },
  mention: {
    icon: <AtSign className="w-5 h-5 text-blue-600" />,
    title: (user, context) => (
      <span>
        <strong>{user}</strong> mentioned you in a reply{" "}
        <strong>'{context}'</strong>
      </span>
    ),
    content: (n) => `${n} mentioned you`,
  },
  follow: {
    icon: <UserPlus className="w-5 h-5 text-blue-600" />,
    title: (user) => (
      <span>
        <strong>{user}</strong> followed you
      </span>
    ),
    content: (n) => `${n} started following you`,
  },
};

function RouteComponent() {
  const [filter, setFilter] = useState<
    "all" | "likes" | "comments" | "mentions"
  >("all");

  const filteredNotifications = MOCK_NOTIFICATIONS.filter((n) => {
    if (filter === "all") return true;
    if (filter === "likes") return n.type === "like";
    if (filter === "comments") return n.type === "comment";
    if (filter === "mentions") return n.type === "mention";
    return true;
  });

  return (
    <main className="w-full px-4 py-16">
      <div className="max-w-[900px] font-inter mx-auto">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h1 className="text-4xl font-semibold">Notifications</h1>
          <Button icon={CircleCheckBig} variant={"ghost"}>
            Mark all as read
          </Button>
        </div>

        <div className="flex gap-1 mb-8 overflow-x-auto pb-2">
          <Button
            className={`hover:border-transparent ${
              filter === "all"
                ? "bg-blue-300/20 text-primary"
                : ""
            } font-medium`}
            variant={"ghost"}
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button
            className={`hover:border-transparent ${
              filter === "likes"
                ? "bg-blue-300/20 text-primary"
                : ""
            } font-medium`}
            variant={"ghost"}
            icon={Heart}
            onClick={() => setFilter("likes")}
          >
            Likes
          </Button>
          <Button
            className={`hover:border-transparent ${
              filter === "comments"
                ? "bg-blue-300/20 text-primary"
                : ""
            } font-medium`}
            variant={"ghost"}
            icon={MessageCircleMore}
            onClick={() => setFilter("comments")}
          >
            Comments
          </Button>
          <Button
            className={`hover:border-transparent ${
              filter === "mentions"
                ? "bg-blue-300/20 text-primary"
                : ""
            } font-medium`}
            variant={"ghost"}
            icon={AtSign}
            onClick={() => setFilter("mentions")}
          >
            Mentions
          </Button>
        </div>

        <div className="flex flex-col">
          {filteredNotifications.map((notification) => {
            const getContent = (context: ContentContext) => {
              const config =
                notificationConfig[notification.type as NotificationType];

              if (!config) {
                throw new Error(
                  `Unknown notification type: ${notification.type}`
                );
              }

              switch (context) {
                case "ICON":
                  return config.icon;
                case "TITLE":
                  return config.title(
                    notification.user.name,
                    notification.content
                  );
                case "CONTENT":
                  return config.content(notification.user.name);
              }
            };

            return (
              <div className="flex gap-4 py-6 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                <div className="mt-1 shrink-0">{getContent("ICON")}</div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 bg-purple-600 border border-slate-100">
                      <AvatarImage
                        src={notification.user.avatarUrl}
                        alt={notification.user.name}
                      />
                      <AvatarFallback className="bg-purple-600 text-white font-medium">
                        {notification.user.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-[15px] text-slate-700">
                      {getContent("TITLE")}
                    </div>
                  </div>
                  {notification.type === "comment" && (
                    <div className="p-4 bg-slate-100 border border-slate-200 rounded-lg text-slate-600 text-[15px]">
                      {getContent("CONTENT")}
                    </div>
                  )}
                  <span className="text-[13px] text-slate-500">
                    {notification.date}
                  </span>
                </div>
              </div>
            );
          })}

          {filteredNotifications.length === 0 && (
            <div className="py-12 text-center text-slate-500">
              No notifications found.
            </div>
          )}
        </div>

        <div className="mt-8">
          <Separator />
        </div>

        <div className="mt-8">
          <WelcomeNotification />
        </div>
      </div>
    </main>
  );
}
