export default function Footer() {
    return (
        <footer className="bg-slate-800 text-white py-6 mt-10">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm md:text-base">
                    © {new Date().getFullYear()} <span className="font-semibold">E-Pharmacy</span>. All rights reserved.
                </p>
                <p className="text-xs md:text-sm mt-1 text-gray-300">
                    Powered by <span className="text-white font-medium">Careplexus</span>
                </p>
            </div>
        </footer>
    );
}
