import {QuantityInput, Separator} from "@/components";
import { useQuantityInput } from "@/hooks/useQuantityInput";

type Product = {
    id: number;
    image: string;
    name: string;
    price: string;
}

export default function ProductDetail({product}: { product: Product }) {
    const { value, handleIncrement, handleDecrement, handleChange } = useQuantityInput();
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-">
            <div className="md:col-span-1 w-96 h-96 mb-10 md:mb-0 mx-auto">
                <img src={product.image} alt={product.name} className="object-cover" />
                <div className="w-60 my-4 mx-auto">
                    <Separator className="my-2" />
                    <div className="flex"><p className="text-orange-500 font-semibold">Adjust Quantity:</p><QuantityInput value={value} handleChange={handleChange} handleDecrement={handleDecrement} handleIncrement={handleIncrement}/></div>
                    <Separator className="my-2" />
                </div>
            </div>
            <div className="md:col-span-2 md:pt-15 md:pl-10 lg:pl-5 mt-7 md:mt-0">
                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                <p className="text-green-600 font-semibold">Selling Price: &#8358;{product.price}</p>
                <p className="text-sm mt-2 text-orange-500 font-semibold">Discount: &#8358;{(10/100 * (Number(product.price.replace(/,/g, ''))))}</p>
                <div className="flex items-center gap-2 mt-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Add to Cart</button>
                    <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition-colors">Buy Now</button>
                </div>
                <p className="my-3">Do you want clarification of this product for your health?<br/>Book a section with a licensed pharmacist</p>
            </div>
           
        </div>
    );
}