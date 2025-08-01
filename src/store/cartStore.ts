import { create } from "zustand";
import { products } from "@/data";

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
      // If item already exists, update quantity
      return {
        items: state.items.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      };
    } else {
      // Get the product from the product list
      const product = products.find((p) => p.id === id);
      if (!product) {
        console.warn(`Product with id ${id} not found.`);
        return state;
      }

      const newItem: CartItem = {
        id: product.id,
        name: product.name,
        image: product.image || "/placeholder.png",
        quantity,
        price: product.price
      };

      return {
        items: [...state.items, newItem]
      };
    }
  }),

  removeCartItem: (id) => set((state) => ({
    items: state.items.filter(item => item.id !== id)
  })),

  clearCart: () => set({ items: [] })
}));
