type Product = {
    id: number;
    image: string;
    name: string;
    price: string;
}

export default function ProductDetail({product}: { product: Product }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1 w-96 h-96 ">
                <img src={product.image} alt={product.name}/>
            </div>
            <div className="md:col-span-2">
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