import ActivityCard from "@/components/layout/user-profile/ActivityCard";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import {
  Calendar02Icon,
  Github01Icon,
  Globe02Icon,
  Linkedin01Icon,
  MapPinpoint01Icon,
} from "hugeicons-react";
import { ChevronDown, ExternalLink, Plus } from "lucide-react";
import { Img } from "react-image";
import { v4 as uuid } from "uuid";

export const Route = createFileRoute("/u/@{$username}/")({
  component: RouteComponent,
});

const refactoredActivity = [
  [
    "Jan 01, 2026",
    [
      {
        id: 1,
        activity_type: "JOINED",
        title: "Joined Readora",
        description: "User joined the platform",
        createdAt: "2026-01-01T08:00:00Z",
      },
    ],
  ],

  [
    "Jan 02, 2026",
    [
      {
        id: 2,
        activity_type: "POSTED",
        title: "Published first story",
        description: "Posted 'The Last Signal'",
        createdAt: "2026-01-02T10:15:00Z",
      },
      {
        id: 3,
        activity_type: "COMMENTED",
        title: "Commented on a story",
        description: "Commented on 'Neon Skies'",
        createdAt: "2026-01-02T12:40:00Z",
      },
    ],
  ],

  [
    "Jan 03, 2026",
    [
      {
        id: 4,
        activity_type: "LIKED",
        title: "Liked a chapter",
        description: "Liked Chapter 3 of 'Dark Horizon'",
        createdAt: "2026-01-03T09:30:00Z",
      },
    ],
  ],

  [
    "Jan 04, 2026",
    [
      {
        id: 5,
        activity_type: "BOOKMARKED",
        title: "Bookmarked a story",
        description: "Bookmarked 'Echoes of Tomorrow'",
        createdAt: "2026-01-04T14:10:00Z",
      },
    ],
  ],

  [
    "Jan 05, 2026",
    [
      {
        id: 6,
        activity_type: "FOLLOWED",
        title: "Followed an author",
        description: "Started following @alexwrites",
        createdAt: "2026-01-05T16:25:00Z",
      },
      {
        id: 7,
        activity_type: "LIKED",
        title: "Liked a comment",
        description: "Liked a comment on 'Solar Ashes'",
        createdAt: "2026-01-05T17:00:00Z",
      },
    ],
  ],

  [
    "Jan 06, 2026",
    [
      {
        id: 8,
        activity_type: "UPDATED_PROFILE",
        title: "Updated profile",
        description: "Changed profile bio and avatar",
        createdAt: "2026-01-06T11:45:00Z",
      },
    ],
  ],

  [
    "Jan 07, 2026",
    [
      {
        id: 9,
        activity_type: "POSTED",
        title: "Published a new chapter",
        description: "Chapter 5 of 'Neon Skies'",
        createdAt: "2026-01-07T19:20:00Z",
      },
    ],
  ],
];

function RouteComponent() {
  return (
    <main className="bg-slate-50 dark:bg-slate-950 p-4 w-full font-inter">
      <div className="bg-white dark:bg-slate-900 mx-auto px-4 py-4 border border-border rounded-xl max-w-5xl">
        <div className="space-y-4">
          <div className="flex items-center gap-8">
            <div className="flex flex-1 items-center gap-6">
              <Img
                src="https://api.dicebear.com/9.x/adventurer/svg?seed=Brian&flip=true"
                width={300}
                height={300}
                className="rounded-full size-36 object-cover"
              />

              <div className="">
                <h1 className="mb-1 font-semibold text-slate-700 dark:text-slate-50 text-3xl">
                  Akash Desarda
                </h1>
                <p className="mb-4 text-slate-700 dark:text-slate-200 text-base">
                  Building Data product powered by Machine learning
                </p>
                <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                  <p>
                    <span className="font-semibold text-slate-800 dark:text-slate-50">
                      40
                    </span>{" "}
                    Followers
                  </p>
                  <p>
                    <span className="font-semibold text-slate-800 dark:text-slate-50">
                      4
                    </span>{" "}
                    Following
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                icon={ExternalLink}
                variant={"outline"}
              ></Button>
              <Button
                size="icon"
                icon={ChevronDown}
                variant={"outline"}
              ></Button>
              <Button icon={Plus}>Follow</Button>
            </div>
          </div>
          <div className="flex justify-center items-center gap-6 p-6 border border-border rounded-sm">
            <div className="flex items-center">
              <Button
                size="icon-sm"
                className="hover:bg-slate-200 dark:hover:bg-slate-800"
                variant={"link"}
                icon={Linkedin01Icon}
              />
              <Button
                size="icon-sm"
                className="hover:bg-slate-200 dark:hover:bg-slate-800"
                variant={"link"}
                icon={Github01Icon}
              />
              <Button
                size="icon-sm"
                className="hover:bg-slate-200 dark:hover:bg-slate-800"
                variant={"link"}
                icon={Globe02Icon}
              />
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 text-base">
              <MapPinpoint01Icon size={18} />
              <p>Sanepa, Lalitpur</p>
            </div>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 text-base">
              <Calendar02Icon size={18} />
              <p>Member since Jan 1, 2026</p>
            </div>
          </div>
          <div className="px-6 py-4 border border-border rounded-sm">
            <div className="pb-4 border-border border-b">
              <h1 className="font-semibold text-slate-700 dark:text-slate-200 text-2xl">
                Writes at
              </h1>
            </div>
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center gap-4">
                <Img
                  src={
                    "https://cdn.hashnode.com/res/hashnode/image/upload/v1622644278766/g3YsrPRYa.png?w=500&h=500&auto=compress,format&format=webp"
                  }
                  width={200}
                  height={200}
                  className="size-14 object-cover"
                />
                <div className="">
                  <h4 className="font-medium text-lg">import idea</h4>
                  <p className="font-medium text-sm">importidea.dev</p>
                </div>
              </div>
              <Button icon={ExternalLink} variant="outline">
                Read the blog
              </Button>
            </div>
          </div>
          <div className="gap-4 grid grid-cols-3">
            <div className="p-4 border border-border rounded-md">
              <h1 className="mb-4 font-semibold text-slate-700 dark:text-slate-200 text-xl">
                About Me
              </h1>
              <div className="flex justify-center items-center h-32">
                <p className="text-slate-600 dark:text-slate-300 text-base text-center">
                  No bio to display
                </p>
              </div>
            </div>
            <div className="p-4 border border-border rounded-md">
              <h1 className="mb-4 font-semibold text-slate-700 dark:text-slate-200 text-xl">
                My Tech Stack
              </h1>
              <div className="flex justify-center items-center h-32">
                <p className="text-slate-600 dark:text-slate-300 text-base text-center">
                  Tech stack yet to be written
                </p>
              </div>
            </div>
            <div className="p-4 border border-border rounded-md">
              <h1 className="mb-4 font-semibold text-slate-700 dark:text-slate-200 text-xl">
                I am available for
              </h1>
              <div className="flex justify-center items-center h-32">
                <p className="text-slate-600 dark:text-slate-300 text-base text-center">
                  Nothing to show
                </p>
              </div>
            </div>
          </div>
          <div className="px-4 py-4 border border-border rounded-sm">
            <h1 className="mb-4 font-semibold text-2xl">Badges</h1>
            <div className="gap-2 grid grid-cols-2">
              <p className="p-6 border border-border rounded-md h-20">
                Talk of the Town
              </p>
              <p className="p-6 border border-border rounded-md h-20">
                Featured On Hashnode
              </p>
              <p className="p-6 border border-border rounded-md h-20">
                Word Warrior
              </p>
              <p className="p-6 border border-border rounded-md h-20">
                Self Starter
              </p>
            </div>
          </div>
          <div className="px-4 py-4 border border-border rounded-sm">
            <h1 className="mb-4 font-semibold text-2xl">Recent Activity</h1>

            <div>
              {refactoredActivity?.map((activity, index) => (
                <div
                  className="flex gap-2 lg:gap-6 w-full font-inter"
                  key={index}
                >
                  <div className="activity_date">
                    <span className="font-medium text-gray-700 dark:text-slate-200 text-sm text-center">
                      {activity[0]}
                    </span>
                    {activity[1][0]?.activity_type !== "JOINED" && (
                      <div className="activity_date_dots"></div>
                    )}
                  </div>

                  <div className="flex flex-col flex-1 justify-center">
                    {activity[1].map((item) => {
                      return (
                        <ActivityCard
                          index={index}
                          item={item}
                          key={uuid()}
                          activityLength={refactoredActivity.length}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
