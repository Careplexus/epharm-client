import { ProductSlider } from "@/components";
import { products } from "@/data";
import { motion } from "framer-motion";
import { Leaf, Package, Tablet, Truck } from "lucide-react";

export default function PopularCategoriesPage() {
  const categories = Array.from(new Set(products.map((product) => product.category)));

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:px-4 pb-12 max-w-7xl mx-auto">
      <main className="md:col-span-3 space-y-3">
        <div className="bg-blue-50 py-6 px-4 md:px-8 overflow-hidden relative">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-3xl font-extrabold tracking-tight uppercase mb-1 text-gray-900"
          >
            Careplexus Pharmacy Catalogue
          </motion.h1>

          <div className="overflow-hidden whitespace-nowrap relative">
            <motion.div
              className="inline-flex items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear"
                }
              }}
            >
              <p className="text-sm sm:text-base md:text-lg font-medium text-gray-700 mr-10 flex items-center gap-2">
                Welcome to Careplexus Pharmacy — your trusted source for
                <Tablet className="inline text-blue-500" size={16} /> medicines,
                <Leaf className="inline text-green-500" size={16} /> supplements,
                <Package className="inline text-purple-500" size={16} /> medical devices,
                with <Truck className="inline text-orange-500" size={16} /> fast delivery,
                guaranteed quality, and expert care.
              </p>

              <p className="text-sm sm:text-base md:text-lg font-medium text-gray-700 mr-10 flex items-center gap-2">
                Welcome to Careplexus Pharmacy — your trusted source for
                <Tablet className="inline text-blue-500" size={16} /> medicines,
                <Leaf className="inline text-green-500" size={16} /> supplements,
                <Package className="inline text-purple-500" size={16} /> medical devices,
                with <Truck className="inline text-orange-500" size={16} /> fast delivery,
                guaranteed quality, and expert care.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="md:mx-6">
          {categories.map((category) => {
            const productsForCategory = products.filter((p) => p.category === category);
            return (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <ProductSlider title={category.toUpperCase()} products={productsForCategory} />
              </motion.div>
            );
          })}
        </div>
      </main>

      <aside className="hidden md:block bg-white p-5 rounded-xl shadow-md border border-gray-100 h-fit">
        <h2 className="text-lg font-semibold mb-3 text-gray-800">Newly Added</h2>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="hover:text-emerald-600 cursor-pointer">Product A</li>
          <li className="hover:text-emerald-600 cursor-pointer">Product B</li>
          <li className="hover:text-emerald-600 cursor-pointer">Product C</li>
        </ul>
      </aside>
    </div>
  );
}
