import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import {
  AddCircleHalfDotIcon,
  AllBookmarkIcon,
  AnalyticsUpIcon,
  BubbleChatUserIcon,
  ChartBreakoutSquareIcon,
  Configuration02Icon,
  CreditCardIcon,
  DashboardSquare02Icon,
  DocumentCodeIcon, GlobalIcon,
  Home12Icon,
  Mail02Icon,
  MailAtSign02Icon, NoteEditIcon,
  NoteIcon, SearchList01Icon,
  Settings02Icon,
  SidebarTopIcon,
  UserGroupIcon,
  UserShield01Icon
} from "hugeicons-react";
import { AtSign, GitBranch } from "lucide-react";

import { v4 as uuid } from "uuid";

export const linkItems = {
  leftSidebar: [
    {
      id: uuid(),
      label: "Home",
      href: "/",
      icon: (
        <Home12Icon
          className="text-inherit"
          style={{ width: "17px", height: "17px" }}
        />
      ),
    },
    {
      id: uuid(),
      label: "Chat",
      href: "/chat",
      icon: (
        <BubbleChatUserIcon
          className="text-inherit"
          style={{ width: "17px", height: "17px" }}
        />
      ),
    },
    {
      id: uuid(),
      label: "Bookmarks",
      href: "/bookmarks",
      icon: (
        <AllBookmarkIcon
          className="text-inherit"
          style={{ width: "17px", height: "17px" }}
        />
      ),
    },
    {
      id: uuid(),
      label: "Write something",
      href: "/new",
      icon: (
        <AddCircleHalfDotIcon
          className="text-inherit"
          style={{ width: "17px", height: "17px" }}
        />
      ),
    },
  ],

  userDropDown: [
    {
      id: uuid(),
      label: "",
      href: "#",
      icon: <DropdownMenuSeparator />,
      separator: true,
      disabled: false,
    },
    {
      id: uuid(),
      label: "My Publications",
      href: "/dashboard",
      icon: <DocumentCodeIcon className="text-inherit" />,
      separator: false,
      disabled: false,
    },
    {
      id: uuid(),
      label: "Analytics",
      href: "/analytics",
      icon: <AnalyticsUpIcon className="text-inherit" />,
      separator: false,
      disabled: false,
    },
    {
      id: uuid(),
      label: "",
      href: "#",
      icon: <DropdownMenuSeparator />,
      separator: true,
      disabled: false,
    },
    {
      id: uuid(),
      label: "Profile",
      href: "/profile",
      icon: <UserShield01Icon className="text-inherit" />,
      separator: false,
      disabled: false,
    },
    {
      id: uuid(),
      label: "Settings",
      href: "/settings",
      icon: <Configuration02Icon className="text-inherit" />,
      separator: false,
      disabled: false,
    },
    {
      order: 2,
      id: uuid(),
      label: "Subscription",
      href: "/settings/subscription",
      icon: <CreditCardIcon className="text-inherit" />,
      separator: false,
      disabled: true,
    },
    {
      id: uuid(),
      label: "",
      href: "#",
      icon: <DropdownMenuSeparator />,
      separator: true,
      disabled: false,
    },
    {
      id: uuid(),
      label: "Changelog",
      href: "/changelog",
      icon: <GitBranch className="text-inherit" />,
      separator: false,
      disabled: true,
    },
    {
      id: uuid(),
      label: "Support and Feedback",
      href: "/publication",
      icon: <MailAtSign02Icon className="text-inherit" />,
      separator: false,
      disabled: true,
    },
    {
      id: uuid(),
      label: "Invite Membre",
      href: "/settings/affiliate",
      icon: <AtSign className="text-inherit" />,
      separator: false,
      disabled: true,
    },
    {
      id: uuid(),
      label: "",
      href: "#",
      icon: <DropdownMenuSeparator />,
      separator: true,
      disabled: false,
    },
  ],

  blog_dashboard: [
    {
      id: uuid(),
      label: "Overview",
      href: "/overview",
      default: true,
      icon: <DashboardSquare02Icon size={17} className="text-inherit" />,
      description: "Dashboard overview with stats and recent activity",
      separator: false,
      disabled: false,
    },
    {
      id: uuid(),
      label: "General",
      href: "/general",
      default: false,
      icon: <Settings02Icon size={17} className="text-inherit" />,
      description: "Basic blog configuration and settings",
      separator: false,
      disabled: false,
    },
    {
      id: uuid(),
      label: "",
      href: "#",
      default: false,
      icon: <DropdownMenuSeparator />,
      separator: true,
      disabled: false,
    },
    {
      id: uuid(),
      label: "Appearance",
      href: "/appearance",
      default: false,
      icon: <SidebarTopIcon size={17} className="text-inherit" />,
      description: "Customize your blog's theme and visual style",
      separator: false,
      disabled: false,
    },
    {
      id: uuid(),
      label: "Articles and drafts",
      href: "/posts",
      default: false,
      icon: <NoteEditIcon size={17} className="text-inherit" />,
      description: "Create and manage your blog posts",
      separator: false,
      disabled: false,
    },
    {
      id: uuid(),
      label: "Series",
      href: "/series",
      default: false,
      icon: <NoteIcon size={17} className="text-inherit" />,
      description: "Manage static pages like About or Contact",
      separator: false,
      disabled: false,
    },
    {
      id: uuid(),
      label: "",
      href: "#",
      default: false,
      icon: <DropdownMenuSeparator />,
      separator: true,
      disabled: false,
    },
    {
      id: uuid(),
      label: "Analytics",
      href: "/analytics",
      default: false,
      icon: <ChartBreakoutSquareIcon size={17} className="text-inherit" />,
      description: "Track your blog's performance and growth",
      separator: false,
      disabled: false,
    },
    {
      id: uuid(),
      label: "SEO",
      href: "/seo",
      default: false,
      icon: <SearchList01Icon size={17} className="text-inherit" />,
      description: "Optimize your content for search engines",
      separator: false,
      disabled: true,
    },
    {
      id: uuid(),
      label: "Domain",
      href: "/domain",
      default: false,
      icon: <GlobalIcon size={17} className="text-inherit" />,
      description: "Manage your custom domain settings",
      separator: false,
      disabled: true,
    },
    {
      id: uuid(),
      label: "",
      href: "#",
      default: false,
      icon: <DropdownMenuSeparator />,
      separator: true,
      disabled: true,
    },

    {
      id: uuid(),
      label: "Members",
      href: "/members",
      default: false,
      icon: <UserGroupIcon size={17} className="text-inherit" />,
      description: "Manage subscribers and team members",
      separator: false,
      disabled: true,
    },
    {
      id: uuid(),
      label: "Newsletter",
      href: "/newsletter",
      default: false,
      icon: <Mail02Icon size={17} className="text-inherit" />,
      description: "Send emails and manage campaigns",
      separator: false,
      disabled: true,
    },

  ],
  userSettings: [
    {
      id: uuid(),
      label: "General",
      href: "/settings",
      default: true,
      icon: <Settings02Icon size={17} className="text-inherit" />,
      description: "Manage your profile",
      separator: false,
      disabled: false,
    },
    {
      id: uuid(),
      label: "Email",
      href: "/settings/email",
      default: false,
      icon: <Mail02Icon size={17} className="text-inherit" />,
      description: "Manage your email settings",
      separator: false,
      disabled: false,
    },
    {
      id: uuid(),
      label: "Account",
      href: "/settings/account",
      default: false,
      icon: <UserShield01Icon size={17} className="text-inherit" />,
      description: "Manage your account",
      separator: false,
      disabled: false,
    },
  ],
};
