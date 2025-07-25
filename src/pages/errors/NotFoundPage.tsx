import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

export default function NotFoundPage () {
  return (
    <div className="h-full flex items-center justify-center bg-white">
      <div className="text-center p-8 max-w-md mx-auto">
        <AlertCircle className="mx-auto h-16 w-16 text-red-500 mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
        <p className="text-lg text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-sm hover:bg-blue-600 transition-colors duration-200"
        >
          Back to Online Pharma Page
        </Link>
      </div>
    </div>
  );
};