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
                            <Link href={`${toy.path}/${i.path}`}>
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

// export function Sidebar() {
//   return (
//     <div className="w-[240px] border-r bg-muted/40">
//       <div className="p-6">
//         <h1 className="text-2xl font-bold tracking-tight">IT-TOOLS</h1>
//         <p className="text-sm text-muted-foreground">
//           Tools for developers and IT professionals
//         </p>
//       </div>
//       <div className="space-y-4">
//         <div className="px-3 py-2">
//           <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
//             Tools
//           </h2>
//           <div className="space-y-1">
//             <Button
//               variant="ghost"
//               className="w-full justify-start gap-2"
//               asChild>
//               <Link href="/token">
//                 <Key className="h-4 w-4" />
//                 Token Generator
//               </Link>
//             </Button>
//             <Button
//               variant="ghost"
//               className="w-full justify-start gap-2"
//               asChild>
//               <Link href="/hash">
//                 <Hash className="h-4 w-4" />
//                 Hash Text
//               </Link>
//             </Button>
//             <Button
//               variant="ghost"
//               className="w-full justify-start gap-2"
//               asChild>
//               <Link href="/encrypt">
//                 <Lock className="h-4 w-4" />
//                 Encrypt
//               </Link>
//             </Button>
//             <Button
//               variant="ghost"
//               className="w-full justify-start gap-2"
//               asChild>
//               <Link href="/uuid">
//                 <Fingerprint className="h-4 w-4" />
//                 UUID Generator
//               </Link>
//             </Button>
//             <Button
//               variant="ghost"
//               className="w-full justify-start gap-2"
//               asChild>
//               <Link href="/ulid">
//                 <Shuffle className="h-4 w-4" />
//                 ULID Generator
//               </Link>
//             </Button>
//             <Button
//               variant="ghost"
//               className="w-full justify-start gap-2"
//               asChild>
//               <Link href="/decrypt">
//                 <LockKeyhole className="h-4 w-4" />
//                 Decrypt
//               </Link>
//             </Button>
//             <Button
//               variant="ghost"
//               className="w-full justify-start gap-2"
//               asChild>
//               <Link href="/verify">
//                 <ShieldCheck className="h-4 w-4" />
//                 PDF Signature Verifier
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
