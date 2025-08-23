import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar, Footer, MainHeader } from "@/components";


export default function MainLayoutPage() {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen pt-15 w-screen">
        <AppSidebar />
        <MainHeader />
        <main className="flex-1 mx-0.5 mt-16 w-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </SidebarProvider>
  );
}