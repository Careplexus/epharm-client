import { Cart } from "@/components";

export default function CartPage() {
    return (
        <div className="container mx-auto p-4 w-full h-full my-5">
            <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
            <Cart />
        </div>
    );
}