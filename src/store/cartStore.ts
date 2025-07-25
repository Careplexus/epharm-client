import { create } from "zustand";

type CartItem = {
    id: number;
    name: string;
    image: string;
    quantity: number;
    price: string; 
};

interface CartState {
    items: CartItem[];
    addCartItem: (id: number, quantity: number) => void;
    removeCartItem: (id: number) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
    items: [],
    addCartItem: (id, quantity) => set((state) => {
        const existingItem = state.items.find(item => item.id === id);
        if (existingItem) {
            return {
                items: state.items.map(item =>
                    item.id === id ? { ...item, quantity: item.quantity + quantity } : item
                )
            };
        } else {
            // Assuming you have a way to fetch product details by ID
            const newItem = { id, name: "Product Name", image: "image_url", quantity, price: "100" }; // Replace with actual product details
            return { items: [...state.items, newItem] };
        }
    }),
    removeCartItem: (id) => set((state) => ({
        items: state.items.filter(item => item.id !== id)
    })),
    clearCart: () => set({ items: [] })
}));