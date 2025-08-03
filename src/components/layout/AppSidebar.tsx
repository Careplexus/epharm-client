import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarMenu,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { medicines_menu, services_menu } from "@/navigation/menu-items"
import { ChevronDown, ChevronUp, User2, Info, Mail } from "lucide-react"
import { Link } from "react-router-dom"


export default function AppSidebar() {
  return (
    <Sidebar >
      <SidebarContent>
        <div className="flex flex-col justify-between h-screen mt-5">
          <div>
            <SidebarGroup>
            <SidebarGroupContent>
            <DropdownMenu>
              <DropdownMenuTrigger><div className="flex justify-center">Medicines & Essentials <ChevronDown /></div></DropdownMenuTrigger>
              <DropdownMenuContent>
                {medicines_menu.map((item) => (
                  <DropdownMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            </SidebarGroupContent>
            </SidebarGroup>
            <div>
              <SidebarGroup>
          <SidebarGroupContent>
            <DropdownMenu>
              <DropdownMenuTrigger><div className="flex justify-center">Our Services <ChevronDown /></div></DropdownMenuTrigger>
              <DropdownMenuContent>
                {services_menu.map((item) => (
                  <DropdownMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarGroupContent>
          <SidebarGroupContent className="list-none">
             <SidebarMenuItem className="mt-5 text-dec"><h2 className="flex items-center"><Info size={15}/><span className="pl-2">About Us</span></h2></SidebarMenuItem>
            <SidebarMenuItem className="mt-5"><h2 className="flex items-center"><Mail size={15}/><span className="pl-2">Contact Us</span></h2></SidebarMenuItem>
          </SidebarGroupContent>
        </SidebarGroup>
            </div>
          </div>
        <div>
        <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> User
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                {/* <DropdownMenuItem>
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Subscriptions</span>
                </DropdownMenuItem> */}
                <DropdownMenuItem>
                  <span><Link to="user/login">Login/Register</Link></span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
        </SidebarFooter>
        </div>
        </div>

      </SidebarContent>
      
    </Sidebar>
  )
}