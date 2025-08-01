import { QuantityInput } from "@/components";
import { Trash2Icon } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { Link } from "react-router-dom";
import { useQtyStore } from "@/store/qtyStore";

export default function Cart() {
  const { qtyMap } = useQtyStore();
  const { items, removeCartItem } = useCartStore((state) => state);

  if (items.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold">Your cart is empty</h2>
        <p className="text-gray-500">
          Add some products to your cart to see them here.
        </p>
      </div>
    );
  }

  // Calculate subtotal
  const subtotal = items.reduce((sum, item) => {
    const qty = qtyMap[item.id] || 1;
    const price = Number(item.price.replace(/[,.]/g, ""));
    return sum + price * qty;
  }, 0);

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Shopping Cart</h2>
      <div className="space-y-4">
        {items.map((item) => {
          const qty = qtyMap[item.id] || 1;
          const totalPrice = Number(item.price.replace(/[,.]/g, "")) * qty;

          return (
            <div
              key={item.id} 
              className="grid grid-cols-2 md:grid-cols-7 items-center gap-4 p-4 bg-white shadow rounded w-full"
            >
              <div className="col-span-1">
                <img
                  src={item.image || "/placeholder.png"}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
              </div>
              <div className="hidden md:inline-block col-span-2">
                <p className="font-semibold text-gray-700">{item.name}</p>
              </div>
              <div className="col-span-1">
                <QuantityInput productId={item.id} />
              </div>
              <div className="col-span-1">
                <p className="text-green-600 font-bold">&#8358;{item.price}</p>
              </div>
              <div className="col-span-1 text-orange-500 font-bold">
                &#8358;{totalPrice.toLocaleString()}
              </div>
              <div className="col-span-1">
                <button
                  onClick={() => removeCartItem(item.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                  aria-label="Delete item"
                >
                  <Trash2Icon />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-xl font-bold text-orange-600">
          Subtotal: &#8358;{subtotal.toLocaleString()}
        </h2>
        <Link
          to="/products/checkout"
          className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}
