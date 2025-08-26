import { useState } from "react";
import { ProductCard } from "@/components";
import { products } from "@/data";
import type { Product } from "@/types/product.type";
import { Tabs, TabsContent } from "@/components";
import { ChevronDown } from "lucide-react";

type GroupedProducts = {
  [category: string]: Product[];
};

// Group products by category
const grouped: GroupedProducts = {};
products.forEach((product) => {
  const cat = product.category || "Uncategorized";
  if (!grouped[cat]) grouped[cat] = [];
  grouped[cat].push(product);
});

// Build category list
const productCategories = ["All", ...Object.keys(grouped)];

export default function ProductList({ initialCategory }: { initialCategory?: string }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategory && productCategories.includes(initialCategory)
      ? initialCategory
      : "All"
  );

  const handleSelect = (category: string) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-4">
      {/* Dropdown */}
      <div className="relative w-48 mb-4">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 rounded-md shadow hover:bg-gray-200"
        >
          {selectedCategory}
          <ChevronDown size={16} />
        </button>
        {dropdownOpen && (
          <div className="absolute w-full mt-1 bg-white shadow-md rounded-md z-20">
            {productCategories.map((category) => (
              <div
                key={category}
                onClick={() => handleSelect(category)}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 capitalize ${
                  category === selectedCategory ? "bg-gray-200 font-semibold" : ""
                }`}
              >
                {category}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Product Grid */}
      <Tabs value={selectedCategory} className="w-full">
        <TabsContent value={selectedCategory}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 place-items-center">
            {(selectedCategory === "All"
              ? products
              : grouped[selectedCategory] || []
            ).map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
