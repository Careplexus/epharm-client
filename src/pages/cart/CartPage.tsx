import { Cart } from "@/components";

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-6 pt-30">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>
      <Cart />
    </div>
  );
}
