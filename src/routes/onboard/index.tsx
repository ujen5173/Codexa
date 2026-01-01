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
    <main className="w-full bg-slate-50 font-inter">
      <section className="max-w-385 mx-auto min-h-[calc(100vh-65px)] px-12 py-12">
        <div className="flex gap-16 items-center pt-28 flex-1">
          <section className="flex-1 flex flex-col items-start justify-center">
            <div className="space-y-4">
              <div>
                <h1 className="text-4xl underline decoration-dotted font-bold text-primary mb-2">
                  Write. Publish. Discuss.
                </h1>
                <p className="text-lg text-slate-700 mb-8">
                  Create an account or sign in to share ideas, learn from other
                  developers, and join real conversations.
                </p>

                <div className="grid grid-cols-2 w-full gap-4">
                  <div className="relative">
                    <Button
                      className="rounded-full shadow-sm w-full"
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
                      className="rounded-full shadow-sm w-full"
                      disabled
                      size="lg"
                      variant={"outline"}
                    >
                      <Icons.apple />
                      Continue with Apple
                    </Button>
                    <div className="absolute -top-2.5 right-2 opacity-70 bg-red-600/70 font-semibold text-white text-xs px-2 py-1 rounded-sm">
                      Coming soon
                    </div>
                  </div>
                  <div className="relative">
                    <Button
                      className="rounded-full shadow-sm w-full"
                      disabled
                      size="lg"
                      variant={"outline"}
                    >
                      <Icons.microsoft />
                      Continue with Microsoft
                    </Button>
                    <div className="absolute -top-2.5 right-2 opacity-70 bg-red-600/70 font-semibold text-white text-xs px-2 py-1 rounded-sm">
                      Coming soon
                    </div>
                  </div>
                  <div className="relative">
                    <Button
                      className="rounded-full shadow-sm w-full"
                      disabled
                      size="lg"
                      variant={"outline"}
                    >
                      <Icons.sso />
                      Single sign-on (SSO)
                    </Button>
                    <div className="absolute -top-2.5 right-2 opacity-70 bg-red-600/70 font-semibold text-white text-xs px-2 py-1 rounded-sm">
                      Coming soon
                    </div>
                  </div>
                </div>
              </div>

              <Separator />
              <div>
                <div className="mb-2 space-y-1">
                  <Label className="text-base text-slate-600">
                    Email address
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      className="rounded-full bg-white text-base"
                      placeholder={`name@${platformName.toLowerCase()}.com`}
                    />
                    <Button className="rounded-full">Continue</Button>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">
                  By continuing, you acknowledge that you understand and agree
                  to the{" "}
                  <Link
                    className="underline visited:underline text-primary"
                    to="/"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    className="underline visited:underline text-primary"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </section>
          <section className="flex-1 flex flex-col items-start space-y-12 justify-center">
            <div>
              <p className="font-handwritting font-semibold border-l-4 text-slate-800 border-primary/70 text-lg px-3 py-2 mb-4">
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
                  className="rounded-full object-cover size-12"
                />
                <div className="">
                  <p className="font-semibold font-handwritting-2 text-lg text-slate-800">
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
              <p className="font-handwritting font-semibold border-l-4 text-slate-800 border-primary/70 text-lg px-3 py-2 mb-4">
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
                  className="rounded-full object-cover size-12"
                />
                <div className="">
                  <p className="font-semibold font-handwritting-2 text-lg text-slate-800">
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
