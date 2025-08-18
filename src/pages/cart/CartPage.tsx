import { Cart } from "@/components";

export default function CartPage() {
  return (
    <div className="px-4 py-6 w-screen overflow-x-hidden">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">REVIEW SELECTED PRODUCTS</h1>
      <Cart />
    </div>
  );
}
