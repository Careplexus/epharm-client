import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarMenu,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { medicines_menu, services_menu } from "@/navigation/menu-items"
import { ChevronDown, ChevronUp, User2, Info, Mail } from "lucide-react"
import { Link } from "react-router-dom"
import { Collapsible, CollapsibleTrigger, CollapsibleContent  } from "../ui/collapsible"
import useSidebar from "@/hooks/useSidebar"

export default function AppSidebar() {

  const { isMobile, setOpenMobile } = useSidebar();
  
const handleLinkClick = () => {
  if (isMobile) {
    setOpenMobile(false);
  }
};
  return (
    <Sidebar side="right">
      <SidebarContent>
        <div className="flex flex-col justify-between h-screen mt-5">
          <div>
            <Collapsible defaultOpen>
                <SidebarGroup>
                  <SidebarGroupLabel asChild>
                    <CollapsibleTrigger>
                      Medicines & Essentials
                      <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </CollapsibleTrigger>
                  </SidebarGroupLabel>
                  <CollapsibleContent>
                    <SidebarGroupContent>
                    <SidebarMenu>
                      {medicines_menu.map((item)=>(
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild>
                            <Link to={item.url} onClick={handleLinkClick}>
                              <item.icon />
                              <span>{item.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                    </SidebarGroupContent>
                  </CollapsibleContent>
                </SidebarGroup>
            </Collapsible> 
            <Collapsible defaultOpen>
                <SidebarGroup>
                  <SidebarGroupLabel asChild>
                    <CollapsibleTrigger>
                      Our Services
                      <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </CollapsibleTrigger>
                  </SidebarGroupLabel>
                  <CollapsibleContent>
                    <SidebarGroupContent>
                    <SidebarMenu>
                      {services_menu.map((item)=>(
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild>
                            <Link to={item.url}>
                              <item.icon />
                              <span>{item.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                    </SidebarGroupContent>
                  </CollapsibleContent>
                </SidebarGroup>
            </Collapsible> 
            <SidebarGroup>
              <SidebarGroupContent className="list-none">
                <SidebarMenuItem className="mt-5 text-dec"><h2 className="flex items-center"><Info size={15}/><span className="pl-2">About Us</span></h2></SidebarMenuItem>
                <SidebarMenuItem className="mt-5"><h2 className="flex items-center"><Mail size={15}/><span className="pl-2">Contact Us</span></h2></SidebarMenuItem>
              </SidebarGroupContent>
            </SidebarGroup>
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