import { QuantityInput, Separator } from "@/components";
import { useQuantityInput } from "@/hooks/useQuantityInput";

type Product = {
    id: number;
    image: string;
    name: string;
    price: string;
};

export default function ProductDetail({ product }: { product: Product }) {
    const { value, handleIncrement, handleDecrement, handleChange } = useQuantityInput();
    
    const price = Number(product.price.replace(/,/g, ''));
    const discount = (10 / 100) * price;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
            <div className="md:col-span-1 w-full max-w-sm mx-auto">
                <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-80 rounded-xl shadow"
                />
                <div className="my-6 space-y-4 px-4">
                    <Separator />
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 w-full">
                        <p className="text-orange-500 font-medium">Adjust Quantity:</p>
                        <QuantityInput
                            value={value}
                            handleChange={handleChange}
                            handleDecrement={handleDecrement}
                            handleIncrement={handleIncrement}
                        />
                    </div>
                    <Separator />
                </div>
            </div>

            {/* Product Info */}
            <div className="md:col-span-2 space-y-2">
                <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>

                <div className="bg-gray-50 p-4 rounded-xl shadow-sm space-y-1">
                    <p className="text-green-600 font-semibold text-lg">
                        Selling Price: &#8358;{product.price}
                    </p>
                    <p className="text-sm text-orange-500 font-medium">
                        Discount: &#8358;{discount.toFixed(2)}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button className="bg-blue-600 text-white px-5 py-2 rounded-xl shadow hover:bg-blue-700 transition">
                        Add to Cart
                    </button>
                    <button className="bg-gray-200 px-5 py-2 rounded-xl shadow hover:bg-gray-300 transition">
                        Buy Now
                    </button>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                    Need clarification about this product for your health?<br />
                    <span className="text-blue-500 font-medium">Book a session with a licensed pharmacist</span>
                </p>
            </div>
        </div>
    );
}
