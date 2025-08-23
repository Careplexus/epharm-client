
import { z } from "zod";
import { deliveryAddressSchema } from "./delivery-address.schema";

export const checkoutSchema = deliveryAddressSchema.extend({
  paymentMethod: z.enum(["card", "transfer"]).refine(
    (val) => ["card", "transfer"].includes(val),
    {
      message: "Please select a payment method",
    }
  ),
});

export type CheckoutData = z.infer<typeof checkoutSchema>;
export type CheckoutErrors = Partial<Record<keyof CheckoutData, string>>;