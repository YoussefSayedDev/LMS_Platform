"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { getMenuLinks } from "@/constants/menu-links";
import useSession from "@/hooks/useSession";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Menu = () => {
  const [openLinks, setOpenLinks] = useState<string[]>([]);
  const { user } = useSession();
  const items = getMenuLinks(user.userType);
  const pathname = usePathname();

  const handleToggle = (link: string) => {
    if (openLinks.includes(link)) {
      setOpenLinks(openLinks.filter((l) => l !== link));
    } else {
      setOpenLinks((prev) => [...prev, link]);
    }
  };

  return (
    <>
      {items.map((item) => (
        <SidebarGroup key={item.group}>
          <SidebarGroupLabel className="uppercase text-muted-foreground">
            {item.group}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {item.links.map((i) => {
                const isOpen: boolean = openLinks.some(
                  (link: string) => i.title === link,
                );
                const url = "/" + user.userType.toLowerCase() + i.url;
                return (
                  <SidebarMenuItem
                    key={i.title}
                    className={`group/link mt-3 flex space-x-4 text-foreground transition-all duration-200`}
                  >
                    <Collapsible open={isOpen} className="w-full">
                      <CollapsibleTrigger asChild className="">
                        <SidebarMenuButton asChild>
                          <Link href={!i.subLinks ? url : "#"}>
                            <div
                              className="relative flex w-full cursor-pointer gap-1"
                              onClick={() => handleToggle(i.title)}
                            >
                              <div
                                className={`z-30 flex size-12 items-center justify-center rounded-r-2xl bg-primary`}
                              >
                                {i.icon && <i.icon className="size-5" />}
                              </div>
                              <div className="ml-1 flex w-full items-center justify-between">
                                <h2 className={`z-30 select-none text-xl`}>
                                  {i.title}
                                </h2>
                                {i.subLinks && (
                                  <div className="z-30 transition-all duration-200">
                                    {isOpen ? (
                                      <ChevronUp className="size-5" />
                                    ) : (
                                      <ChevronDown className="size-5" />
                                    )}
                                  </div>
                                )}
                              </div>
                              <div
                                className={cn(
                                  "absolute left-0 top-0 z-10 h-full w-0 transform rounded-r-2xl bg-primary transition-all duration-200 group-hover/link:w-60",
                                  pathname
                                    .split("/")
                                    .includes(i.title.toLowerCase()) && "w-60",
                                )}
                              ></div>
                            </div>
                          </Link>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="ml-10">
                        {i.subLinks &&
                          i.subLinks.map((sub) => (
                            <SidebarMenuSub key={sub.title}>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild>
                                  <Link
                                    href={
                                      "/" +
                                      user.userType.toLowerCase() +
                                      i.url +
                                      sub.url
                                    }
                                  >
                                    <h2
                                      className={`text-[16px] ${pathname.split("/").includes(sub.url.slice(1)) && "text-primary"}`}
                                    >
                                      {sub.title}
                                    </h2>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            </SidebarMenuSub>
                          ))}
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </>
  );
};

export default Menu;
