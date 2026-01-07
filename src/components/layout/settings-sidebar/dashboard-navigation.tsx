import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from '@/components/ui/button';
import { useSidebar } from '@/components/ui/sidebar';
import { linkItems } from "@/constants/site";
import { Link, useLocation } from "@tanstack/react-router";
import { SidebarLeft01Icon } from 'hugeicons-react';

const DashboardNavigation = () => {
  const { toggleSidebar } = useSidebar()
  const d = useLocation();

  const pathname =
    linkItems.blog_dashboard.find(
      (e) => e.href === `/${d.pathname.split("/").slice(3)[0] ?? ""}`
    )?.label ?? "Overview";


  return (
    <div className="flex items-center gap-2">
      <Button icon={SidebarLeft01Icon} size="icon-sm" variant={"ghost"} onClick={toggleSidebar} />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{pathname}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>)
}

export default DashboardNavigation