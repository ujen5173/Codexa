import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { SLUG_SETTINGS } from "@/lib/constants";
import {
  createFileRoute,
  Link,
  useNavigate,
  useRouter,
  useSearch,
} from "@tanstack/react-router";
import { TRPCClientError } from "@trpc/client";
import { useState } from "react";
import slugify from "slugify";
import { toast } from "sonner";

export const Route = createFileRoute("/onboard/blog/setup")({
  component: RouteComponent,
  ssr: false,
});

function RouteComponent() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const { id: redirectionLink } = useSearch({ strict: false });
  const navigate = useNavigate();

  const [handle, setHandle] = useState({
    name: "",
    domain: "",
  });

  // useEffect(() => {
  //   if (isPending && !session) {
  //     navigate({
  //       to: "/onboard",
  //       replace: true,
  //     });
  //   }
  //   // if (session) {
  //   //   setHandle({ name: session.user.name, domain: session.user.name });
  //   // }
  // }, [isPending]);

  // const { mutateAsync, isLoading } =
  //   trpc.handles.createPersonalHandle.useMutation();

  const handleSubdomain = async () => {
    if (handle.domain.length > 0) {
      try {
        // const data = await mutateAsync({
        //   handle: handle,
        // });
        // if (data) {
        //   router.navigate(redirectionLink ?? "/");
        // } else {
        //   toast.error("Something went wrong!");
        // }
      } catch (err) {
        if (err instanceof TRPCClientError) toast.error(err.message);
      }
    }
  };
  return (
    <div className="bg-white dark:bg-black w-full min-h-[100dvh]">
      <div className="mx-auto px-4 py-16 max-w-[900px]">
        <h1 className="mb-4 font-semibold text-gray-700 dark:text-text-secondary text-xl">
          Where do you want this blog to be located?
        </h1>

        <div className="bg-light-bg dark:bg-primary mb-6 px-6 py-4 border border-border-light dark:border-border rounded-md">
          <div className="mb-4 md:mb-8">
            <Input
              name="name"
              onChange={(e) =>
                setHandle({
                  domain: slugify(e.target.value, SLUG_SETTINGS),
                  name: e.target.value,
                })
              }
              placeholder="Enter your blog name"
              type="INPUT"
              required={false}
              value={handle.name}
            />
          </div>

          <div className="relative mb-4">
            <div
              style={{
                bottom: "14px",
              }}
              className="right-4 absolute text-gray-500 dark:text-text-primary cursor-default"
            >
              .codexa.app
            </div>
            <Input
              name="domain"
              onChange={(e) =>
                setHandle((prev) => ({ ...prev, domain: e.target.value }))
              }
              placeholder="Enter a domain name"
              type="INPUT"
              required={false}
              value={handle.domain}
            />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Link to="/">
            <button className="btn-outline">
              <div className="px-4">
                <span className="text-gray-700 dark:text-gray-100">Back</span>
              </div>
            </button>
          </Link>

          <button
            onClick={() => void handleSubdomain()}
            className={`${isPending ? "cursor-not-allowed opacity-40" : ""
              } btn-filled`}
            disabled={isPending}
          >
            <div className="px-4">{isPending ? "Submiting..." : "Submit"}</div>
          </button>
        </div>
      </div>
    </div>
  );
}
