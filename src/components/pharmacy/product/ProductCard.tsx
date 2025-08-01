import { ShoppingCart } from "lucide-react";
import { Separator, QuantityInput } from "@/components";
import { Link } from "react-router-dom";
import type { Product } from "@/types/product.type";
import { useCartStore } from "@/store/cartStore";
import { useQtyStore } from "@/store/qtyStore";

export default function ProductCard({ product }: { product: Product }) {
  const qtyMap = useQtyStore((state) => state.qtyMap);
  const { addCartItem } = useCartStore();

  if (!product) return <div><h2>No product Found!</h2></div>;

  const numericPrice = Number(product.price.replace(/,/g, ""));
  const discount = (10 / 100) * numericPrice;
  const qty = qtyMap[product.id] || 1;
  const total = numericPrice * qty;

  return (
<section className="w-full max-w-[250px] bg-white shadow rounded-md overflow-hidden hover:shadow-lg transition duration-200">
  <header className="bg-white p-3">
    <Link to={`/product/${product.id}`}>
      <div className="w-full h-[160px] overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={product.name || "Pharmacy product"}
          className="w-full h-full object-cover"
        />
      </div>
    </Link>
  </header>

  <main className="flex-1 pt-2 px-3 pb-2 space-y-1">
    <Link
      to={`/product/${product.id}`}
      className="block text-gray-800 hover:text-primary transition-colors duration-200"
    >
      <h2 className="font-semibold text-sm line-clamp-2">{product.name}</h2>
    </Link>
    <div className="flex justify-between items-center text-sm">
      <p className="text-green-700 font-bold">&#8358;{numericPrice.toLocaleString()}</p>
      <p className="text-orange-500 text-xs font-medium">&#8358;{Math.floor(discount).toLocaleString()} OFF</p>
    </div>
  </main>

  <footer>
    <Separator />
    <div className="flex flex-col md:flex-row items-center justify-between px-2 py-2 gap-2">
      <div className="flex items-center gap-2">
        <button
          onClick={() => addCartItem(product.id, qty)}
          aria-label="Add item to cart"
          title="Add to cart"
          className="p-2 rounded-md border border-gray-200 hover:bg-gray-800 hover:text-white transition"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
        <QuantityInput productId={product.id} />
      </div>

      <p className="hidden md:inline text-sm font-semibold text-red-500 whitespace-nowrap">
        &#8358;{total.toLocaleString()}
      </p>
    </div>
  </footer>
</section>

  );
}
