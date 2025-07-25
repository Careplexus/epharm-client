import { ProductDetail } from "@/components";
import { products } from "@/data";
import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
    const {id} = useParams<{id: string}>();
    const productId = parseInt(id || '')

    const product = products.find((p)=> p.id === productId);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="grid grid-cols-1 place-items-center py-4 px-2 mx-2">
            <ProductDetail product={product}/>
        </div>
    )
}