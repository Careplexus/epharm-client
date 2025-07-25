
import { ShoppingCart } from "lucide-react"
import { useQuantityInput } from "@/hooks/useQuantityInput"
import { Separator, QuantityInput } from   "@/components"
import { Link } from "react-router-dom"
import type { Product } from "@/types/product.type"
import { useCartStore } from "@/store/cartStore"

export default function ProductCard({product}: { product: Product }) {
   const { value, handleChange, handleIncrement, handleDecrement } = useQuantityInput()
    const { addCartItem} = useCartStore((state)=> state);


    if (!product) return (<div><h2>No product Found!</h2></div>);

    return (
        <section className="grid grid-cols-1 grid-rows-[2fr_1fr_100px] w-60 h-92  gap-x-1 bg-white shadow-md rounded-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200">
            <header className="bg-white">
                <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt="Product Image" className="object-cover"/>
                </Link>
            </header>
            <main className="m-3">
                <Link to={`/product/${product.id}`} className="text-gray-800 hover:text-blue-600 transition-colors duration-200">
                    <h2 className="font-bold">{product.name}</h2>
                </Link> 
                <div className="flex justify-between items-center mt-1">
                    <p className="mt-2 text-green-600 font-semibold">&#8358;{product.price}</p>
                    <p className="text-sm mt-2"><span className="text-orange-500 font-semibold">&#8358;{(10/100 * (Number(product.price.replace(/,/g, ''))))}</span> <span className="font-semibold">OFF</span></p>
                </div>
            </main>
            <footer>
                <Separator className="mb-0.5" />
                <div className="flex justify-between items-center py-1 mx-2">
                    <button onClick={()=> addCartItem(product.id, value)} aria-label="Add item to cart"><ShoppingCart className="cursor-pointer p-0.5 hover:bg-gray-500 hover:text-white" /></button>
                    <QuantityInput value={value} handleChange={handleChange} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />
                    <p className="font-bold text-red-500">&#8358;{Number(product.price.replace(/[,.]/g, '')) * value}</p>
                </div>
            </footer>
        </section>
    )
}