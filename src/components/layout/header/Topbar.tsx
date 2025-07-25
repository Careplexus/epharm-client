import { PhoneCallIcon, ShoppingCart, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Topbar() {
    return (
        <section className="bg-white shadow-md px-4 py-2 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <PhoneCallIcon className="text-green-500" size={20} aria-hidden="true" />
                <span className="text-sm text-gray-700 font-medium">0816 829 6445</span>
            </div>
            <div className="flex items-center space-x-3">
                <Link
                    to="/products/cart"
                    title="View Cart"
                    className="bg-orange-500 rounded-full p-2 hover:bg-orange-600 transition-colors"
                >
                    <ShoppingCart className="text-white" size={20} />
                </Link>

                <a
                    href="https://careplexus.com/account/pharmacists/register"
                    title="Register or Login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                    <UserPlus size={24} />
                </a>
            </div>
        </section>
    );
}
