"use client";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
   SidebarMenu,
   SidebarMenuItem,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

import { Logo } from "../shared/logo";
import { ModeToggle } from "../mode-toggle";
import { HomeIcon, FilmIcon, UsersIcon, MessageSquareIcon, BarChartIcon, SettingsIcon, UserIcon } from "lucide-react";

import { usePathname } from "next/navigation";

const menuItems = [
   { title: "Dashboard", href: "/dashboard", icon: HomeIcon,exact:true},
   { title: "Movies", href: "/dashboard/movies", icon: FilmIcon },
   { title: "Users", href: "/dashboard/users", icon: UsersIcon },
   { title: "Reviews", href: "/dashboard/reviews", icon: MessageSquareIcon },
   { title: "Analytics", href: "/dashboard/analytics", icon: BarChartIcon },
   { title: "Settings", href: "/dashboard/settings", icon: SettingsIcon }
];

const AccountItems = [
   { title: "Profile", href: "/dashboard/Profile", icon: UserIcon },
   { title: "Public Site", href: "/dashboard/movies", icon: FilmIcon },
 
];
export default function AdminSidebar() {

   const pathname = usePathname();
   const isActive = (item: { href: string; exact?: boolean }) => {
       if (item.exact) {
          return pathname === item.href;
      }
      if (item.href === "/") {
         return pathname === "/";
      }
      return pathname.startsWith(item.href);
   };


   return (
      
      <Sidebar variant="inset" collapsible="icon" className="bg-primary/5 border-r border-primary/20">

       {/*Header With Loop */}  
         <SidebarHeader >
            <div className="flex items-center p-2">
               <Logo />
               <h2 className="ml-2 text-xl font-bold">Cinescope</h2>
               <div className="ml-auto flex items-center">
                  <ModeToggle/>
               </div>
            </div>
         </SidebarHeader>
         
         <SidebarContent>
             {/*Menu */}  
            <SidebarGroup >

            <SidebarGroupLabel>Menu</SidebarGroupLabel>

            <SidebarGroupContent>
               <SidebarMenu className="space-y-1" >
                  
                  {menuItems.map((item) => (
                     <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton className={isActive(item) ? "bg-primary/30 font-medium" : ""} asChild>

                        
                           <Link href={item.href}>
                        <item.icon className="mr-2 h-4 w-4 size-4" />
                           <span>{item.title}</span>
                           </Link>
                           </SidebarMenuButton>
                     </SidebarMenuItem>


                  ))}
               
            </SidebarMenu>
               </SidebarGroupContent>
            </SidebarGroup>

            {/*Account */}  
            <SidebarGroup >
               <SidebarGroupLabel>Account</SidebarGroupLabel>
               <SidebarGroupContent>

                  <SidebarMenu className="space-y-1" >
                     {AccountItems.map((item) => (
                        <SidebarMenuItem key={item.title}>
                           <SidebarMenuButton className={isActive(item) ? "bg-primary/30 font-medium" : ""} asChild>
                              <Link href={item.href}>
                                <item.icon className="mr-2 h-4 w-4 size-4" />
                              <span>{item.title}</span>
                           </Link>
                        </SidebarMenuButton>
                     </SidebarMenuItem>
                  ))}
               </SidebarMenu>
               </SidebarGroupContent>
            </SidebarGroup>

      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
   );
}