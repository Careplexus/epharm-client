import { QuantityInput, Separator } from "@/components";
import { Link } from "react-router-dom";
import {type  Product } from "@/types/product.type";
import { useCartStore } from "@/store/cartStore";
import { useQtyStore } from "@/store/qtyStore";

export default function ProductDetail({ product }: { product: Product }) {

  const qtyMap = useQtyStore((state) => state.qtyMap);
  const addCartItem  = useCartStore((state) => state.addCartItem);

  const numericPrice = Number(product.price.replace(/,/g, ""));
  const discount = (10 / 100) * numericPrice;
  const qty = qtyMap[product.id] || 1;
  const total = numericPrice * qty;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-6 sm:py-8">
      {/* Image Section */}
      <div className="md:col-span-1 w-full max-w-sm mx-auto">
        <div className="w-full aspect-[4/3] sm:aspect-[3/2] rounded-xl overflow-hidden shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="mt-4 space-y-4 px-2 sm:px-4">
          <Separator />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
            <p className="text-orange-500 font-medium">Adjust Quantity:</p>
            <QuantityInput productId={product.id}/>
          </div>
          <Separator />
        </div>
         
      </div>

      {/* Product Info Section */}
      <div className="md:col-span-2 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>

        <div className="bg-gray-50 p-4 rounded-xl shadow-sm space-y-2">
          <p className="text-green-600 font-semibold text-lg">
            Selling Price: &#8358;{product.price}
          </p>
          <p className="text-sm text-orange-500 font-medium">
            Discount: &#8358;{discount.toFixed(2)}
          </p>
          <p className="text-sm font-semibold text-red-500">
           &#8358;{total.toLocaleString()}
          </p>
        </div>
       

        <div className="flex flex-col sm:flex-row gap-3 pt-1 sm:pt-2">
          <button   onClick={() => addCartItem(product.id, qty)} className="bg-blue-600 text-white px-5 py-2 rounded-xl shadow hover:bg-blue-700 transition">
            Add to Cart
          </button>
          <button className="bg-gray-200 px-5 py-2 rounded-xl shadow hover:bg-gray-300 transition">
            Buy Now
          </button>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">
         Need a pharmacist guidance on this product?
         <br />
          <Link to='/book-pharmacist'>
            <span className="text-blue-500 font-medium">Book a session with a licensed pharmacist</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
