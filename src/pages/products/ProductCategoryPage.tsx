import { Link, useParams } from "react-router-dom";
import { ProductCategoryFilter } from "@/components";
import { motion } from "framer-motion";
import {slugify } from "@/lib/slugify";
import { products } from "@/data";
import { AlertCircle } from "lucide-react";

export default function ProductCategoryPage() {
  const { category: slug } = useParams<{ category: string }>();

  const categories = Array.from(new Set(products.map((p) => p.category)));
  const matchedCategory = categories.find(c => slugify(c) === slug);


if (!matchedCategory)
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <div className="flex flex-col items-center bg-gray-50 p-8 rounded-xl shadow-md border border-gray-200">
        <AlertCircle className="text-red-500 w-16 h-16 mb-4" />
        <p className="text-center text-2xl font-bold text-gray-700">
          Oops! {slug?.toUpperCase() || "Category"} not found
        </p>
        <p className="text-center text-gray-500 mt-2">
          Please check the available categories or return to{" "}
          <Link to="/" className="text-blue-600 font-medium hover:underline">
            Homepage
          </Link>.
        </p>
      </div>
    </div>
  );


  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:px-2 pb-10 pt-3 max-w-7xl mx-auto">
      <motion.main
        className="md:col-span-3 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
      <div className="flex flex-col items-start mb-6 px-4 md:px-0">
        <div className="flex items-center mb-1">
          <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full mr-2"></span>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            {matchedCategory.toUpperCase()}
          </h1>
        </div>
        <p className="text-gray-600 text-sm sm:text-base md:text-base max-w-full md:max-w-xl">
          Explore products in the <span className="font-semibold">{matchedCategory}</span> category.
        </p>
      </div>
        <ProductCategoryFilter category={matchedCategory} />
      </motion.main>
    </div>
  );
}
