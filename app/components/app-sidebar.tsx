"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  Sidebar,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  Brain,
  ChevronDown,
  Film,
  HandCoins,
  Images,
  Text,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const toysGroup = [
  {
    group: "Tool",
    path: "/tool",
    items: [
      {
        icon: HandCoins,
        name: "算计",
        path: "calculate",
      },
      {
        icon: Images,
        name: "图片",
        path: "picture",
      },
      {
        icon: Text,
        name: "文本",
        path: "text",
      },
    ],
  },
  {
    group: "Navigation",
    path: "/navigation",
    items: [
      {
        icon: Brain,
        name: "ai",
        path: "ai",
      },
    ],
  },
  {
    group: "Demo",
    path: "/demo",
    items: [
      {
        icon: Film,
        name: "动画",
        path: "animation",
      },
    ],
  },
  {
    group: "Snippet",
    path: "/snippet",
    items: [],
  },
  {
    group: "Other",
    path: "/other",
    items: [],
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight">MY - TOYS</h1>
          <p className="text-sm text-muted-foreground">
            Something useful for me
          </p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {toysGroup
          .filter((toy) => Boolean(toy.items?.length))
          .map((toy) => (
            <Collapsible
              key={toy.group}
              defaultOpen
              className="group/collapsible">
              <SidebarGroup>
                <SidebarGroupLabel asChild>
                  <CollapsibleTrigger>
                    {toy.group}
                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {toy.items.map((i) => (
                        <SidebarMenuItem key={i.name}>
                          <SidebarMenuButton asChild>
                            <Link
                              className={
                                pathname.startsWith(`${toy.path}/${i.path}`)
                                  ? "bg-sidebar-accent"
                                  : ""
                              }
                              href={`${toy.path}/${i.path}`}>
                              <i.icon />
                              <span>{i.name}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          ))}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
