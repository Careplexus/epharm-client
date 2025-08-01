import { z } from 'zod'

export const qtySchema = z.object({
    value: z.number().min(1, "Quantity cannot be at least 1")
})
