import { SidebarTrigger } from "@/components/ui/sidebar";
import { PhoneCallIcon, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import UserDropdown from "./UserDropdown";


export default function Topbar() {


  return (
    <section className="px-4 pt-3 flex items-center relative">
  {/* Left: Sidebar Trigger */}
  <div className="md:hidden">
    <SidebarTrigger />
  </div>

  {/* Center: Logo */}
  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-1 pr-6">
    <Link to="/" className="flex items-center gap-1">
      <img
        src="images/logo/mortal-pestle-logo.svg"
        alt="Pharmacy Logo"
        className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-contain transition-transform duration-300 hover:scale-105"
      />
      <span className="relative text-lg sm:text-xl md:text-2xl font-extrabold text-green-600 tracking-wide">
        Apotheca
        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-green-400 rounded-full"></span>
      </span>
    </Link>
  </div>

  {/* Right: Phone + Cart + User */}
  <div className="ml-auto flex items-center space-x-3">
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
