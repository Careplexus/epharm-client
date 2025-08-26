import {
  PillBottle,
  Tablets,
  Syringe,
  SoapDispenserDroplet,
  Stethoscope,
  MessageSquare,
  ClipboardList,
  Truck,
  PlusCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  ProductSearch,
} from "@/components";

export default function Navbar() {
  return (
    <nav className="bg-white px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="hover:opacity-80 transition">
 <div className="flex items-center">
  <a href="/" className="flex items-center gap-2">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">CAREPLEXUS</h1>
<PlusCircle className="text-blue-600" size={20} />
  </a>
</div>

        </Link>
      </div>

      {/* Middle - Nav Links */}
      <ul className="hidden md:flex gap-8 items-center text-sm font-semibold">
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-slate-800 hover:text-blue-600 transition outline-none cursor-pointer">
              Medicines & Essentials
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <Link to="/products" className="flex gap-2 items-center">
                  <Tablets /> <span>Medicines</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/products" className="flex gap-2 items-center">
                  <Syringe /> <span>Injectables</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/products" className="flex gap-2 items-center">
                  <PillBottle /> <span>Supplements & Tonics</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/products" className="flex gap-2 items-center">
                  <SoapDispenserDroplet /> <span>Skincare</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/products" className="flex gap-2 items-center">
                  <Stethoscope /> <span>Medical Devices</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>

        <li>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-slate-800 hover:text-blue-600 transition outline-none cursor-pointer">
              Our Services
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <Link to="/" className="flex gap-2 items-center">
                  <MessageSquare /> <span>As a Pharmacist</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/" className="flex gap-2 items-center">
                  <ClipboardList /> <span>Medications Review</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/" className="flex gap-2 items-center">
                  <Truck /> <span>Home Delivery</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>

        <li>
          <Link
            to="/about-us"
            className="text-slate-800 hover:text-blue-600 transition"
          >
            About Us
          </Link>
        </li>

        <li>
          <Link
            to="/contact-us"
            className="text-slate-800 hover:text-blue-600 transition"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Right - Search */}
      <div className="flex items-center">
        <ProductSearch />
      </div>
    </nav>
  );
}
