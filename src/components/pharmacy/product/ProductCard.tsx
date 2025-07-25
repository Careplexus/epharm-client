import { useState } from "react"
import { ShoppingCart, Plus, Minus} from "lucide-react"
import { Input, Separator } from   "@/components"
import { Link } from "react-router-dom"

type Product = {
    id: number;
    image: string;
    name: string;
    price: string;
}

export default function ProductCard({product}: { product: Product }) {
    const [value, setValue] = useState<number>(0)

    const handleIncrement = () => {
        setValue((prev)=>prev + 1)
    }

    const handleDecrement = () => {
        setValue((prev)=>prev > 0 ? prev - 1 : 0)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const inputValue = e.target.value
        const newValue = parseInt(inputValue, 10)
        setValue(isNaN(newValue) || newValue < 0 ? 0 : newValue)
    }

    return (
        <section className="grid grid-cols-1 grid-rows-[2fr_1fr_100px] w-56 h-88 md:w-60 md:h-92  gap-x-1 bg-white shadow-md rounded-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200">
            <header className="bg-white">
                <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt="Product Image" />
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
                    <ShoppingCart className="cursor-pointer p-0.5 hover:bg-gray-500 hover:text-white" />
                    <div className="flex items-center gap-1">
                        <button  type="button" aria-label="decrement" onClick={handleDecrement}><Minus className="cursor-pointer p-0.5 hover:bg-gray-500 hover:text-white" /></button>
                        <Input type="number" value={value} onChange={handleChange} className="no-spinner border-1 border-gray-500 w-15 h-7 text-center" defaultValue={1} />
                        <button  type="button" aria-label="increment" onClick={handleIncrement}><Plus className="cursor-pointer p-0.5 hover:bg-gray-500 hover:text-white" /></button>
                    </div>
                   
                    <p className="font-bold text-red-500">&#8358;{Number(product.price.replace(/[,.]/g, '')) * value}</p>
                </div>
            </footer>
        </section>
    )
}