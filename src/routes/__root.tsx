import Header from "@/components/layout/header/header";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import type { TRPCRouter } from "@/integrations/trpc/router";
import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import type { TRPCOptionsProxy } from "@trpc/tanstack-react-query";
import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";
import appCss from "../styles.css?url";

interface MyRouterContext {
  queryClient: QueryClient;
  trpc: TRPCOptionsProxy<TRPCRouter>;
}

const fontLink =
  "https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&family=BBH+Bogle&family=Bitcount+Grid+Single:wght@100..900&family=Caveat:wght@400..700&family=Courgette&family=Geom:ital,wght@0,300..900;1,300..900&family=Handlee&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Merienda:wght@300..900&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Shadows+Into+Light&family=Stoke:wght@300;400&display=swap";

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Codexa: Write Share and Grow your audience",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: fontLink,
      },
    ],
  }),

  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,301,400,401,500,501,700,701,900,901&f[]=cabinet-grotesk@100,200,300,400,500,700,800,900&f[]=general-sans@200,201,300,301,400,401,500,501,600,601,700,701&f[]=khand@300,400,500,600,700&display=swap" rel="stylesheet"/>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <Toaster />
          {children}
        </ThemeProvider>
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
