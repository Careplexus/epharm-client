import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-2 px-4 flex flex-col md:flex-row md:justify-between items-center">
      {/* Brand */}
      <div className="hidden md:flex items-center gap-1">
        <Link to="/" className="flex items-center gap-1">
          <h1 className="text-2xl font-bold text-gray-800">Careplexus</h1>
          <PlusCircle className="text-blue-500" size={20} />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-10 items-center">
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-slate-800 font-semibold outline-none cursor-pointer hover:text-blue-600">
              E-Pharmacy
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem><Link to='/'>Medications</Link></DropdownMenuItem>
              <DropdownMenuItem><Link to='/supplements'>Supplements</Link></DropdownMenuItem>
              <DropdownMenuItem><Link to='/gummies'>Gummies</Link></DropdownMenuItem>
              <DropdownMenuItem><Link to='/skincare'>Skincare Products</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>

        <li>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-slate-800 font-semibold outline-none cursor-pointer hover:text-blue-600">
              Our Services
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem><Link to='/telepharmacy'>Telepharmacy</Link></DropdownMenuItem>
              <DropdownMenuItem><Link to='/sales'>Pharmaceutical Sales</Link></DropdownMenuItem>
              <DropdownMenuItem><Link to='/delivery'>Items Delivery</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>

        <li>
          <Link
            to="/about-us"
            className="text-slate-800 font-semibold hover:text-blue-600"
          >
            About Us
          </Link>
        </li>

        <li>
          <Link
            to="/contact-us"
            className="text-slate-800 font-semibold hover:text-blue-600"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Search Bar */}
      <div className="ml-4 w-full md:w-40 sm:w-64">
        <form>
          <input
            type="text"
            placeholder="Search products..."
            className="w-full h-9 px-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </form>
      </div>
    </nav>
  );
}
