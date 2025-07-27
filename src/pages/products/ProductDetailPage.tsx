import { ProductDetail } from "@/components";
import { products } from "@/data";
import { useParams, Link } from "react-router-dom";

export default function ProductDetailPage() {
    const { id } = useParams<{ id: string }>();
    const productId = Number(id); // `parseInt` is fine but `Number` handles null and empty strings better

    const product = products.find((p) => p.id === productId);

    if (!product) {
        return (
            <div className="min-h-[calc(100vh-96px)] flex flex-col items-center justify-center px-4 text-center">
                <h2 className="text-xl font-semibold text-red-500 mb-2">Product Not Found</h2>
                <p className="text-gray-600 mb-4">Sorry, we couldn't find the product you're looking for.</p>
                <Link to="/" className="text-blue-500 underline hover:text-blue-600 transition">
                    Go back to homepage
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-[calc(100vh-96px)] w-full max-w-7xl mx-auto px-4 py-6">
            <ProductDetail product={product} />
        </div>
    );
}
