import { Outlet } from "react-router-dom";
import {  AuthHeader, Footer } from "@/components";

export default function AuthLayoutPage() {
    return (
        <div className="bg-gray-50">
            <AuthHeader />
            <main className="w-full md:w-2/5 pt-5  mx-auto">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}