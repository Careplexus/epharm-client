// cartStore.ts
import { create } from "zustand";
import { products } from "@/data";
import { useQtyStore } from "./qtyStore"; // import qty store

type CartItem = {
  id: number;
  name: string;
  image: string;
  price: string;
};

interface CartState {
  items: CartItem[];
  addCartItem: (id: number) => void;
  removeCartItem: (id: number) => void;
  clearCart: () => void;
  getSubtotal: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addCartItem: (id) =>
    set((state) => {
      const product = products.find((p) => p.id === id);
      if (!product) {
        console.warn(`Product with id ${id} not found.`);
        return state;
      }

      // Only add if not already in cart
      if (!state.items.find((item) => item.id === id)) {
        return {
          items: [
            ...state.items,
            {
              id: product.id,
              name: product.name,
              image: product.image || "/placeholder.png",
              price: product.price,
            },
          ],
        };
      }
      return state;
    }),

  removeCartItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  clearCart: () => set({ items: [] }),

  getSubtotal: () => {
    const { qtyMap } = useQtyStore.getState(); // get live quantities
    return get().items.reduce((sum, item) => {
      const qty = qtyMap[item.id] || 1;
      const price = Number(item.price.replace(/[,.]/g, ""));
      return sum + price * qty;
    }, 0);
  },
}));
