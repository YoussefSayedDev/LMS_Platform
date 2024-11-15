"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { getMenuLinks } from "@/constants/menu-links";
import useSession from "@/hooks/useSession";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const { user } = useSession();
  const items = getMenuLinks(user.userType);
  const pathname = usePathname();

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
                const url = "/" + user.userType.toLowerCase() + i.url;
                return (
                  <SidebarMenuItem
                    key={i.title}
                    className={`group/link mt-4 flex items-center space-x-4 text-foreground transition-colors duration-200 hover:text-purple-500 ${pathname === url && "text-purple-500"}`}
                  >
                    <SidebarMenuButton asChild>
                      <Link href={url}>
                        <div
                          className={`peer-hover: flex size-12 items-center justify-center rounded-r-3xl bg-indigo-950 transition-all duration-200 hover:w-16 group-hover/link:w-16 ${pathname === url && "w-16"}`}
                        >
                          <i.icon />
                        </div>
                        <h2 className="text-lg">{i.title}</h2>
                      </Link>
                    </SidebarMenuButton>
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
