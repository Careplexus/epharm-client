// src/components/layout/AuthHeader.tsx

import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function AuthHeader() {
  return (
    <header className="bg-white shadow-md py-4 px-6">
     <div className="">
        <Link to="/" className="flex items-center gap-1">
          <h1 className="text-2xl font-bold text-gray-800">Careplexus</h1>
          <PlusCircle className="text-blue-500" size={20} />
        </Link>
        <p className="text-sm text-gray-500">Pharma Hub</p>
      </div>
    </header>
  );
}
