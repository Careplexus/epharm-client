import { Outlet } from "react-router-dom";
import {  AuthHeader, Footer } from "@/components";

export default function AuthLayoutPage() {
    return (
        <div>
            <AuthHeader />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}