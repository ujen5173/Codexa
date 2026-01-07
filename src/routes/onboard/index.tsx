import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { authClient } from "@/lib/auth-client";
import { platformName } from "@/lib/constants";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Img } from "react-image";

export const Route = createFileRoute("/onboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="bg-slate-50 dark:bg-slate-950 w-full">
      <section className="mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 max-w-7xl min-h-[calc(100vh-65px)]">
        <div className="flex flex-col lg:flex-row flex-1 items-center gap-8 lg:gap-16 pt-12 sm:pt-20 lg:pt-28">
          <section className="flex flex-col flex-1 justify-center items-start w-full">
            <div className="space-y-4">
              <div>
                <h1 className="mb-2 font-bold text-primary text-4xl decoration-dotted underline">
                  Write. Publish. Discuss.
                </h1>
                <p className="mb-8 text-slate-700 dark:text-slate-300 text-lg">
                  Create an account or sign in to share ideas, learn from other
                  developers, and join real conversations.
                </p>

                <div className="gap-3 sm:gap-4 grid grid-cols-1 sm:grid-cols-2 w-full">
                  <div className="relative">
                    <Button
                      className="shadow-sm rounded-full w-full"
                      size="lg"
                      variant={"outline"}
                      onClick={() => {
                        authClient.signIn.social({
                          provider: "google",
                        });
                      }}
                    >
                      <Icons.google />
                      Continue with Google
                    </Button>
                  </div>
                  <div className="relative">
                    <Button
                      className="shadow-sm rounded-full w-full"
                      disabled
                      size="lg"
                      variant={"outline"}
                    >
                      <Icons.apple className="fill-transparent stroke-slate-700 dark:stroke-slate-200" />
                      Continue with Apple
                    </Button>
                    <div className="-top-2.5 right-2 absolute bg-red-600/70 opacity-70 px-2 py-1 rounded-sm font-semibold text-white text-xs">
                      Coming soon
                    </div>
                  </div>
                  <div className="relative">
                    <Button
                      className="shadow-sm rounded-full w-full"
                      disabled
                      size="lg"
                      variant={"outline"}
                    >
                      <Icons.microsoft />
                      Continue with Microsoft
                    </Button>
                    <div className="-top-2.5 right-2 absolute bg-red-600/70 opacity-70 px-2 py-1 rounded-sm font-semibold text-white text-xs">
                      Coming soon
                    </div>
                  </div>
                  <div className="relative">
                    <Button
                      className="shadow-sm rounded-full w-full"
                      disabled
                      size="lg"
                      variant={"outline"}
                    >
                      <Icons.sso className="fill-transparent stroke-slate-700 dark:stroke-slate-200" />
                      Single sign-on (SSO)
                    </Button>
                    <div className="-top-2.5 right-2 absolute bg-red-600/70 opacity-70 px-2 py-1 rounded-sm font-semibold text-white text-xs">
                      Coming soon
                    </div>
                  </div>
                </div>
              </div>

              <Separator />
              <div>
                <div className="space-y-1 mb-2">
                  <Label className="text-slate-600 dark:text-slate-300 text-base">
                    Email address
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      className="bg-white rounded-full text-base"
                      placeholder={`name@${platformName.toLowerCase()}.com`}
                    />
                    <Button className="rounded-full">Continue</Button>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  By continuing, you acknowledge that you understand and agree
                  to the{" "}
                  <Link
                    className="text-primary underline visited:underline"
                    to="/"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    className="text-primary underline visited:underline"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </section>
          <section className="hidden lg:flex flex-col flex-1 justify-center items-start space-y-8 lg:space-y-12 w-full">
            <div>
              <p className="mb-4 px-3 py-2 border-primary/70 border-l-4 font-handwritting font-medium text-slate-800 dark:text-slate-300 text-lg">
                “We built this because writing about tech shouldn’t feel like
                fighting the platform. You write, you publish, people read and
                respond. That’s it. No tricks, no noise.”
              </p>
              <div className="flex items-center gap-2">
                <Img
                  src={"/founder-ujen.jpg"}
                  alt="Founder"
                  width={100}
                  height={100}
                  className="rounded-full size-12 object-cover"
                />
                <div className="">
                  <p className="font-handwritting-2 font-semibold text-slate-800 dark:text-slate-300 text-lg">
                    Ujen Basi
                  </p>
                  <p className="text-slate-500">
                    Founder and CEO{" "}
                    <span className="text-primary underline">
                      @{platformName}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-4 px-3 py-2 border-primary/70 border-l-4 font-handwritting font-medium text-slate-800 dark:text-slate-300 text-lg">
                “This is for developers who like explaining things properly, not
                racing for clicks. If you care about clarity more than
                attention, you’ll feel at home here.”
              </p>
              <div className="flex items-center gap-2">
                <Img
                  src={"/founder-ashwesha.jpg"}
                  alt="Founder"
                  width={100}
                  height={100}
                  className="rounded-full size-12 object-cover"
                />
                <div className="">
                  <p className="font-handwritting-2 font-semibold text-slate-800 dark:text-slate-300 text-lg">
                    Ashwesha Shrestha
                  </p>
                  <p className="text-slate-500">
                    Co-founder and CFO{" "}
                    <span className="text-primary underline">
                      @{platformName}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="h-16.25"></div>
      </section>
    </main>
  );
}
