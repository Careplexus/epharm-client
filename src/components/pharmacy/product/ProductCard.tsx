import { ShoppingCart } from "lucide-react";
import { useQuantityInput } from "@/hooks/useQuantityInput";
import { Separator, QuantityInput } from "@/components";
import { Link } from "react-router-dom";
import type { Product } from "@/types/product.type";
import { useCartStore } from "@/store/cartStore";

export default function ProductCard({ product }: { product: Product }) {
    const { value, handleChange, handleIncrement, handleDecrement } = useQuantityInput();
    const { addCartItem } = useCartStore((state) => state);

    if (!product) return (<div><h2>No product Found!</h2></div>);

    const numericPrice = Number(product.price.replace(/,/g, ''));
    const discount = (10 / 100) * numericPrice;
    const total = numericPrice * value;

    return (
        <section className="w-full max-w-[240px] bg-white shadow rounded-md overflow-hidden hover:shadow-lg transition duration-200">
            {/* Header with spacing before image */}
            <header className="bg-white pt-3">
                <Link to={`/product/${product.id}`}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-40 object-cover rounded-t-md"
                    />
                </Link>
            </header>

            {/* Product Details */}
            <main className="pt-4 px-3 pb-2 space-y-1">
                <Link to={`/product/${product.id}`} className="block text-gray-800 hover:text-blue-600 transition-colors duration-200">
                    <h2 className="font-semibold text-sm">{product.name}</h2>
                </Link>
                <div className="flex justify-between items-center">
                    <p className="text-green-600 font-bold text-sm">&#8358;{product.price}</p>
                    <p className="text-orange-500 text-xs font-semibold">&#8358;{discount.toFixed(2)} OFF</p>
                </div>
            </main>

            {/* Footer */}
            <footer>
                <Separator />
                <div className="flex items-center justify-between px-2 py-2 gap-1">
                    <button
                        onClick={() => addCartItem(product.id, value)}
                        aria-label="Add item to cart"
                        className="p-1 rounded hover:bg-gray-800 hover:text-white transition"
                    >
                        <ShoppingCart className="w-5 h-5" />
                    </button>

                    <QuantityInput
                        value={value}
                        handleChange={handleChange}
                        handleDecrement={handleDecrement}
                        handleIncrement={handleIncrement}
                    />

                    <p className="hidden lg:inline-block text-sm font-bold text-red-500">&#8358;{total.toLocaleString()}</p>
                </div>
            </footer>
        </section>
    );
}
