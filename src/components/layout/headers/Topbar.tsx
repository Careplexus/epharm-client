import { SidebarTrigger } from "@/components/ui/sidebar";
import { PhoneCallIcon, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import UserDropdown from "./UserDropdown";


export default function Topbar() {


  return (
    <section className="px-4 pt-3 flex justify-between items-center relative">
      <div className="md:hidden">
        <SidebarTrigger />
      </div>

      <Link to="/" className="flex items-center gap-1">
        <img
      src="images/logo/pharmacy-logo.png"
      alt="Pharmacy Logo"
      className="h-8 w-8 md:h-10 md:w-10 object-contain transition-transform duration-300 hover:scale-105"
    />
</Link>

      <div className="flex items-center space-x-3">
        <div className="hidden md:flex items-center space-x-2">
          <PhoneCallIcon className="text-green-500" size={18} />
          <span className="text-sm text-gray-700 font-medium">0816 829 6445</span>
        </div>
        <Link
          to="/products/cart"
          className="relative bg-orange-500 rounded-full p-2 hover:bg-orange-600 transition-colors"
        >
          <ShoppingCart className="text-white" size={18} />
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            2
          </span>
        </Link>

        <UserDropdown />
      </div>


    </section>
  );
}
