import { Outlet } from "react-router-dom";
import { Footer, MainHeader } from "@/components";


export default function MainLayoutPage() {
  return (
    <div className="min-h-screen pt-15">
      <MainHeader />
      <main className="flex-1 mt-16"><Outlet /></main>
      <Footer />
    </div>
  );
}