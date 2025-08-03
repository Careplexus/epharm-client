import { Cart } from "@/components";

export default function CartPage() {
  return (
    <div className="mx-auto px-4 py-6">
      <h1 className="text-2xl md:text-2xl font-bold text-gray-800 mb-6">REVIEW SELECTED PRODUCTS</h1>
      <Cart />
    </div>
  );
}
