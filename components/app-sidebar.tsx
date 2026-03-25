"use client";

import * as React from "react";
import {
  IconHelp,
  IconSearch,
  IconSettings,
} from "@tabler/icons-react";
import Image from "next/image";

import { NavAgents } from "@/components/nav-agents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Bot, BrainCircuit, Folder, LayoutDashboard, LayoutPanelTop, ListTodoIcon, Mail, ThumbsUp, TicketPlus, Users } from "lucide-react";

const data = {
  user: {
    name: "Wanjohi",
    email: "wanjohi@ssogroup.co.ke",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Customer Management",
      url: "/crm",
      icon: ListTodoIcon,
    },
    {
      title: "Sales & Conversions",
      url: "/sales",
      icon: TicketPlus,
    },
    {
      title: "File Manager",
      url: "/file-manager",
      icon: Folder,
    },
    {
      title: "Page Builder",
      url: "/page-builder",
      icon: LayoutPanelTop,
    },
    {
      title: "Mail",
      url: "/mail",
      icon: Mail,
    },
    {
      title: "Team",
      url: "/team",
      icon: Users,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  agents: [
    {
      name: "Chat",
      url: "/ai-chat",
      icon: BrainCircuit,
    },
    {
      name: "Sales Agent",
      url: "/sales-agent",
      icon: Bot,
    },
    {
      name: "Social Media Agent",
      url: "/social-feed",
      icon: ThumbsUp,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5! h-fit"
            >
              <a href="#" className="flex items-start">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={120}
                  height={47}
                  className="dark:hidden"
                />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavAgents items={data.agents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
