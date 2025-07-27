// src/components/layout/AuthHeader.tsx

import { Link } from "react-router-dom";

export default function AuthHeader() {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          {/* Replace with your logo if available */}
          <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
            C
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Careplexus</h1>
            <p className="text-sm text-gray-500">E-Pharmacy Platform</p>
          </div>
        </Link>
      </div>
    </header>
  );
}
