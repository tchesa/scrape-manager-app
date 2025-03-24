import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { BookOpenTextIcon } from "lucide-react";

type NavItem = {
  title: string;
  url: string;
  isActive?: boolean;
  items?: NavItem[];
};

type NavGroup = {
  title: string;
  url: string;
  items: {
    [key: string]: NavItem;
  };
};

const data: NavGroup[] = [
  {
    title: "Runner",
    url: "#",
    items: {
      queue: {
        title: "Queue",
        url: "#",
      },
      history: {
        title: "History",
        url: "#",
      },
    },
  },
  {
    title: "Datasource",
    url: "#",
    items: {
      installation: {
        title: "Datasources",
        url: "#",
      },
      project: {
        title: "Credentials",
        url: "#",
      },
    },
  },
  {
    title: "Data",
    url: "#",
    items: {
      profiles: {
        title: "Profiles",
        url: "#",
      },
      visits: {
        title: "Visits",
        url: "#",
      },
    },
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <BookOpenTextIcon className="h-5 w-5" />
                <span className="text-base font-semibold">Scrape Manager</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {data.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {Object.entries(item.items).map(([key, item]) => (
                  <SidebarMenuItem key={key}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
