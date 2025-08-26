import { ProductSlider } from "@/components";
import { products } from "@/data";

export default function PopularCategoriesPage() {
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:px-2 pb-10 max-w-7xl mx-auto">
      
      <main className="md:col-span-3 space-y-6">
      <h1 className=" text-xl text-center me:text-left md:text-3xl font-bold tracking-wide mb-2 text-white bg-red-600 rounded-md py-4">
  SMART PHARMACY CATALOGUE
</h1>

        <div className="space-y-6 md:mx-6">
          {categories.map((category) => {
            const productsForCategory = products.filter(
              (p) => p.category === category
            );
            return (
              <ProductSlider
                key={category}
                title={category.toUpperCase()}
                products={productsForCategory}
              />
            );
          })}
        </div>
      </main>

      <aside className="hidden md:block bg-gray-50 p-4 rounded shadow-sm h-fit">
        <h2 className="text-md font-semibold mb-2 text-gray-700">Newly Added</h2>
        <ul className="space-y-1 text-sm text-gray-600">
          <li>Product A</li>
          <li>Product B</li>
          <li>Product C</li>
        </ul>
      </aside>
    </div>
  );
}
