import OnboardHeader from "@/components/layout/onboard/header";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/onboard")({
  component: OnboardLayout,
});

function OnboardLayout() {
  return (
    <>
      <OnboardHeader />
      <Outlet />
    </>
  );
}
