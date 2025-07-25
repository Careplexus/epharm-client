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
        <nav className="p-2 bg-white shadow-md flex justify-between">
            <div className="flex justify-between items-center">
                <div className="flex place-items-center cursor-pointer">
                    <Link to="/"><h1 className="text-2xl font-bold mr-0.5">Careplexus</h1></Link>
                    <PlusCircle  className="text-blue-500" size={20} />
                </div>
            </div>
            <ul className="hidden md:flex space-x-10">
                <li className="text-white hover:text-gray-300">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="text-slate-800 font-semibold outline-none">E-Pharmacy</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem><Link to='/'>Medications</Link></DropdownMenuItem>
                            <DropdownMenuItem>Supplements</DropdownMenuItem>
                            <DropdownMenuItem>Gummies</DropdownMenuItem>
                            <DropdownMenuItem>Skincare Products</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </li>
                <li className="text-white hover:text-gray-300">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="text-slate-800 font-semibold outline-none">Our Services</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem><Link to='/telepharmacy'>Telepharmacy</Link></DropdownMenuItem>
                            <DropdownMenuItem><Link to='/sales'>Pharmaceutical sales</Link></DropdownMenuItem>
                            <DropdownMenuItem><Link to='/delivery'>Items Delivery</Link></DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    
                </li>
                <li className="text-slate-800 font-semibold hover:text-gray-300"><a href="https://careplexus.com" target="_blank" rel="noopener noreferrer">About Us</a></li>
                <li className="text-slate-800 font-semibold hover:text-gray-300"><a href="https://careplexus.com/contact-us" target="_blank" rel="noopener noreferrer">Contact</a></li>
            </ul>
            <div className="mx-2">
                <form>
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full h-8 p-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-300"
                    />
                </form>
            </div>
        </nav>
    );
}