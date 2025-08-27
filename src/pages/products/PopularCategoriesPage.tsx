import { ProductSlider } from "@/components";
import { products } from "@/data";
import { motion } from "framer-motion";

export default function PopularCategoriesPage() {
  const categories = Array.from(new Set(products.map((product) => product.category)));

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:px-4 pb-12 max-w-7xl mx-auto">
      <main className="md:col-span-3 space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xl md:text-3xl font-bold tracking-wide text-center md:text-left mb-3 py-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent uppercase"
        >
          Careplexus Pharmacy Catalogue
        </motion.h1>
        <div className="space-y-10 md:mx-6">
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
