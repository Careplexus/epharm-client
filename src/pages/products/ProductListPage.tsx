import { ProductList } from "@/components";

export default function PopularCategoriesPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:px-2 pb-10 max-w-7xl mx-auto">
            
            <main className="md:col-span-3 space-y-4">
                <h1 className="text-xl font-bold text-gray-800 tracking-wide mb-2 ml-2">PRODUCTS</h1>
                <ProductList />
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
