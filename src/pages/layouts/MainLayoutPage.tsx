import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar, Footer, MainHeader } from "@/components";
import ScrollToTop from "./ScrollToTop";


export default function MainLayoutPage() {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen pt-15 w-screen">
        <AppSidebar />
        <MainHeader />
        <main className="flex-1 mx-0.5 mt-8 w-full">
          <ScrollToTop />
          <Outlet />
        </main>
        <Footer />
      </div>
    </SidebarProvider>
  );
}