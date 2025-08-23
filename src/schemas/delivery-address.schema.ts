import { z } from "zod";

export const deliveryAddressSchema = z.object({
    fullName: z.string().min(2, "Full name is required"),
    phone: z
        .string()
        .regex(/^\+?\d{7,15}$/, "Enter a valid phone number"),
    altPhone: z
        .string()
        .regex(/^\+?\d{7,15}$/, "Enter a valid phone number")
        .optional()
        .or(z.literal("")),
    country: z.string().min(2, "Country is required"),
    state: z.string().min(2, "State is required"),
    city: z.string().min(2, "City is required"),
    streetAddress: z.string().min(5, "Address is too short"),
    landmark: z.string().optional().or(z.literal("")),
    postalCode: z.string().optional(),
    
});

export type DeliveryAddressData = z.infer<typeof deliveryAddressSchema>;