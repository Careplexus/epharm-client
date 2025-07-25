
import {QuantityInput} from "@/components";
import { useQuantityInput } from "@/hooks/useQuantityInput";
import { Trash2Icon } from "lucide-react";
import {useCartStore} from "@/store/cartStore";
import { Link } from "react-router-dom";

export default function Cart() {
      const { value, handleIncrement, handleDecrement, handleChange } = useQuantityInput();
    const { items, removeCartItem } = useCartStore((state)=> state);

    if (items.length === 0) {
        return (
            <div className="text-center p-4">
                <h2 className="text-xl font-semibold">Your cart is empty</h2>
                <p className="text-gray-500">Add some products to your cart to see them here.</p>
            </div>
        );
    }
    return (
         <div className="container mx-auto p-4">
            {items.map((item) => (
                <div key={item.id} className="grid grid-cols-7">
                    <div className="">
                        <img src="" alt="product img" className="w-16 h-16 object-cover" />
                    </div>
                    <div>{item.name}</div>
                    <div> <QuantityInput value={value} handleChange={handleChange} handleDecrement={handleDecrement} handleIncrement={handleIncrement} /></div>
                    <div><p className="font-semibold">&#8358;{item.price}</p></div>
                    <div>{item.price}</div>
                    <div className="text-orange-500 font-bold">&#8358;{Number(item.price.replace(/[,.]/g, '')) * value}</div>
                    <div> 
                        <button onClick={() => removeCartItem(item.id)} className="text-red-500 cursor-pointer" aria-label="Delete item">
                            <Trash2Icon />
                        </button>
                    </div>
                </div>
            ))}
            <div className="mt-4">
                <h2 className="font-bold text-2xl text-orange-500">Subtotal: &#8358;{}</h2>
            </div>
            <div className="flex items-center gap-2 mt-4">
                    <Link to='' className="bg-orange-500 px-4 py-2 text-white rounded hover:bg-orange-700 transition-colors">Checkout</Link>
            </div>
        </div>
    )
}