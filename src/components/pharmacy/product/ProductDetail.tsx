import { QuantityInput, Separator } from "@/components";
import { Link } from "react-router-dom";
import type { Product } from "@/types/product.type";
import { useCartStore } from "@/store/cartStore";
import { useQtyStore } from "@/store/qtyStore";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ProductDetail({ product }: { product: Product }) {
  const qtyMap = useQtyStore((state) => state.qtyMap);
  const addCartItem = useCartStore((state) => state.addCartItem);
  const [added, setAdded] = useState(false);

  const numericPrice = Number(product.price.replace(/,/g, ""));
  const qty = qtyMap[product.id] || 1;
  const total = numericPrice * qty;
  const discount = (2 / 100) * total;

  const handleAddToCart = () => {
    addCartItem(product.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000); // resets after 2s
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-6 sm:py-8">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:col-span-1 w-full max-w-sm mx-auto"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-full aspect-[4/3] sm:aspect-[3/2] rounded-xl overflow-hidden shadow-md"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </motion.div>

        <div className="mt-4 space-y-4 px-2 sm:px-4">
          <Separator />
          <div className="flex justify-between items-center">
            <p className="text-orange-500 font-medium">Adjust Quantity:</p>
            <QuantityInput productId={product.id} />
          </div>
          <Separator />
        </div>
      </motion.div>

      {/* Product Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="md:col-span-2 space-y-4"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-gray-800"
        >
          {product.name}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-50 p-4 rounded-xl shadow-sm space-y-2"
        >
          <p className="text-green-600 font-bold text-md">
            Unit Price: &#8358;{product.price}
          </p>
          <p className="text-sm font-bold text-red-500">
            Total Price: &#8358;{total.toLocaleString()}
          </p>
          <p className="text-sm text-orange-500 font-bold">
            Discount: &#8358;{discount.toFixed(2)}
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-3 pt-1 sm:pt-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className={`px-6 py-3 rounded-xl shadow text-white transition ${
              added ? "bg-green-500" : "bg-blue-500 hover:bg-blue-700"
            }`}
          >
            {added ? "Added!" : "Add to Cart"}
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-gray-200 px-6 py-3 rounded-xl shadow hover:bg-gray-300 transition"
          >
            Buy Now
          </motion.button>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-gray-600 leading-relaxed"
        >
          Need a pharmacist guidance on this product?
          <br />
          <Link to="/book-pharmacist">
            <span className="text-blue-500 font-medium">
              Book a session with a licensed pharmacist
            </span>
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}
