import { Link } from "react-router-dom";
import { medicines_menu, services_menu } from "@/navigation/menu-items";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  ProductSearch,
} from "@/components";
import { PlusCircle } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white px-4 pt-3 pb-2 flex items-center justify-between">
      <div className="flex items-center">
      <Link to="/" className="hover:opacity-90 transition-transform transform hover:scale-105">
        <div className="relative inline-block">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight uppercase">
          CPLX
        </h1>
        <PlusCircle
          className="text-blue-600 absolute -top-1 md:-top-1 right-[-13px]"
          size={16}
        />
        </div>
      </Link>

      </div>

      <ul className="hidden md:flex gap-8 items-center text-sm font-semibold">
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-slate-800 font-bold text-lg hover:text-blue-600 transition outline-none cursor-pointer">
              Medicines & Essentials
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {medicines_menu.map((item) => (
                <DropdownMenuItem key={item.title}>
                  <Link to={item.url} className="flex gap-2 items-center">
                    <item.icon /> <span>{item.title}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </li>

        <li>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-slate-800 text-lg font-bold hover:text-blue-600 transition outline-none cursor-pointer">
              Our Services
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {services_menu.map((item) => (
                <DropdownMenuItem key={item.title}>
                  <Link to={item.url} className="flex gap-2 items-center">
                    <item.icon /> <span>{item.title}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </li>

        <li>
          <Link
            to="/about-us"
            className="text-slate-800 hover:text-blue-600 transition text-lg font-bold"
          >
            About Us
          </Link>
        </li>

        <li>
          <Link
            to="/contact-us"
            className="text-slate-800 hover:text-blue-600 transition text-lg font-bold"
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="flex items-center">
        <ProductSearch />
      </div>
    </nav>
  );
}
