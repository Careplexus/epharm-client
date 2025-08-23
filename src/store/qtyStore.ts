import { create } from "zustand";

type QtyState = {
  qtyMap: Record<string, number>;
  setQty: (id: number, qty: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
};

export const useQtyStore = create<QtyState>((set) => ({
  qtyMap: {},
  setQty: (id, qty) =>
    set((state) => ({
      qtyMap: { ...state.qtyMap, [id]: qty },
    })),
  increaseQty: (id) =>
    set((state) => {
      const currentQty = state.qtyMap[id] || 1;
      return {
        qtyMap: { ...state.qtyMap, [id]: currentQty + 1 },
      };
    }),
  decreaseQty: (id) =>
    set((state) => {
      const currentQty = state.qtyMap[id] || 1;
      return {
        qtyMap: {
          ...state.qtyMap,
          [id]: currentQty > 1 ? currentQty - 1 : 1,
        },
      };
    }),
  
  }));
