import { PhoneCallIcon, ShoppingCart, UserPlus } from "lucide-react";

export default function Topbar() {
    return (
        <section className="bg-white shadow-md pt-2 px-4 flex justify-between items-center">
            <div className="flex items-center  space-x-2">
                <PhoneCallIcon className="text-green-500" />
                <span className="ml-2 text-gray-700 font-semibold">08168296445</span>
            </div>
            <div className="flex items-center space-x-4">
                <div className="bg-orange-400 rounded-full p-2 cursor-pointer hover:bg-orange-500 transition-colors">
                    <ShoppingCart className="text-white" />
                </div>
                <a href="https://careplexus.com/account/pharmacists/register" title="contact page" target="_blank" rel="noopener noreferrer"><UserPlus className="text-blue-500 ml-4 cursor-pointer" /></a>
            </div>
        </section>
    )
}