import { useState, useMemo } from "react";
import { ProductCard } from "@/components";
import { products } from "@/data";
import type { Product } from "@/types/product.type";
import { ChevronDown } from "lucide-react";

type GroupedProducts = { [subcategory: string]: Product[] };

export default function ProductList({ category }: { category: string }) {
  const categoryProducts = useMemo(
    () => products.filter((p) => p.category === category),
    [category]
  );

  const grouped: GroupedProducts = {};
  categoryProducts.forEach((product) => {
    const subcat = product.subcategory || "Uncategorized";
    if (!grouped[subcat]) grouped[subcat] = [];
    grouped[subcat].push(product);
  });

  const subcategories = ["All", ...Object.keys(grouped)];
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");

  const handleSelect = (subcat: string) => {
    setSelectedSubcategory(subcat);
    setDropdownOpen(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-4">
      <div className="relative w-56 mb-4">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 rounded-md shadow hover:bg-gray-200"
        >
          {selectedSubcategory}
          <ChevronDown size={16} />
        </button>
        {dropdownOpen && (
          <div className="absolute w-full mt-1 bg-white shadow-md rounded-md z-20 max-h-64 overflow-y-auto">
            {subcategories.map((subcat) => (
              <div
                key={subcat}
                onClick={() => handleSelect(subcat)}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 capitalize ${
                  subcat === selectedSubcategory ? "bg-gray-200 font-semibold" : ""
                }`}
              >
                {subcat}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 place-items-center">
        {(selectedSubcategory === "All"
          ? categoryProducts
          : grouped[selectedSubcategory] || []
        ).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
