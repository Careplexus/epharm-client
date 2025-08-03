import { SidebarTrigger } from "@/components/ui/sidebar";
import { PhoneCallIcon, PlusCircle, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Topbar() {
    return (
        <section className="bg-white shadow-md px-4 py-2 flex justify-between items-center">
            <div className="md:hidden">
                <SidebarTrigger />
            </div>
            <div className="md:hidden flex items-center gap-1">
                <Link to="/" className="flex items-center gap-1">
                    <h1 className="text-1xl font-bold text-gray-800">CAREPLEXUS</h1>
                    <PlusCircle className="text-blue-500" size={20} />
                </Link>
            </div>
            <div className="hidden md:flex items-center space-x-2">
                <PhoneCallIcon className="text-green-500" size={20} aria-hidden="true" />
                <span className="text-sm text-gray-700 font-medium">0816 829 6445</span>
            </div>
            <div className="flex items-center space-x-3">
                <Link
                    to="/products/cart"
                    title="View Cart"
                    className="bg-orange-500 rounded-full p-2 hover:bg-orange-600 transition-colors"
                >
                    <ShoppingCart className="text-white" size={15} />
                </Link>

                <Link
                    to="/user/login"
                    title="Login"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                    <User size={20} />
                </Link>
            </div>
        </section>
    );
}
