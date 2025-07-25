export default function Footer() {
    return (
        <footer className="bg-slate-800 text-white py-4 mt-10">
            <div className="container mx-auto text-center">
                <p className="text-sm">© {new Date().getFullYear()} E-Pharmacy. All rights reserved.</p>
                <p className="text-xs mt-2">Powered by Careplexus</p>
            </div>
        </footer>
    );
}