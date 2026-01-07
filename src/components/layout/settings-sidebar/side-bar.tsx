import Logo from "@/components/common/logo";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail, useSidebar } from "@/components/ui/sidebar";
import { linkItems } from "@/constants/site";
import { Link } from "@tanstack/react-router";

export function SettingsSidebar() {
  const { setOpenMobile, isMobile } = useSidebar();

  const handleLinkClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <Sidebar collapsible="icon" className="top-[72px] h-[calc(100svh-72px)]!">
      <SidebarHeader className='border-b border-border dark:border-slate-600/60 pt-4 block md:hidden bg-white dark:bg-slate-950'>
        <Logo />
      </SidebarHeader>
      <SidebarContent className="bg-white dark:bg-slate-950">
        <SidebarGroup>
          <SidebarGroupLabel>BLOG DASHBOARD</SidebarGroupLabel>
          <SidebarMenu>
            {linkItems.blog_dashboard.map((ddItem) => (
              <SidebarMenuItem key={ddItem.label}>
                {
                  ddItem.separator ? (
                    ddItem.icon
                  ) : (
                    <SidebarMenuButton
                      asChild
                      tooltip={ddItem.label}
                      disabled={ddItem.disabled}
                    >
                      <Link
                        to={`/dashboard/$publicationId${(ddItem.default ? "" : ddItem.href) as "/analytics" | "/posts" | "/series" | ""}`}
                        params={{
                          publicationId: `66591b32d988544d623ad7ce`
                        }}
                        onClick={handleLinkClick}
                      >
                        {ddItem.icon}
                        <span>{ddItem.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  )
                }
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
