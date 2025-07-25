import { Plus, Minus } from "lucide-react"
import { Input } from "@/components"
import type { QuantityInputProps } from "@/types/product.type"

export default function QuantityInput(
    {value, handleIncrement, handleDecrement, handleChange}: QuantityInputProps) {
    return (
       <div className="flex items-center gap-1">
            <button  type="button" aria-label="decrement" onClick={handleDecrement}><Minus className="cursor-pointer p-0.5 hover:bg-gray-500 hover:text-white" /></button>
            <Input type="number" value={value} onChange={handleChange} className="no-spinner border-1 border-gray-500 w-15 h-7 text-center" defaultValue={1} />
            <button  type="button" aria-label="increment" onClick={handleIncrement}><Plus className="cursor-pointer p-0.5 hover:bg-gray-500 hover:text-white" /></button>
        </div>
    )
}