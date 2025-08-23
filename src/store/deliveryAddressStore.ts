import { create } from "zustand";
import { deliveryAddressSchema, type DeliveryAddressData } from "@/schemas";

interface DeliveryAddressState {
  address: DeliveryAddressData | null;
  setAddress: (data: DeliveryAddressData) => void;
  clearAddress: () => void;
  validateAddress: (data: unknown) => { success: boolean; errors?: string[]; data?: DeliveryAddressData };
}

export const useDeliveryAddressStore = create<DeliveryAddressState>((set) => ({
  address: null,

  setAddress: (data) => {
    set({ address: data });
  },

  clearAddress: () => set({ address: null }),

  validateAddress: (data: unknown) => {
    const result = deliveryAddressSchema.safeParse(data);

    if (!result.success) {
      return {
        success: false,
        errors: result.error.issues.map(
          (err) => `${err.path.join(".")}: ${err.message}`
        ),
      };
    }

    return {
      success: true,
      data: result.data,
    };
  },
}));
