import AppMain from "@/components/layout/app-main";
import Header from "@/components/layout/header";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  ssr: false,
  component: App,
});

function App() {
  return (
    <>
      <Header />
      <AppMain />
    </>
  );
}
