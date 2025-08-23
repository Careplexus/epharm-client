import { loginSchema, type LoginData  } from "./login.schema";
import { registerSchema, type RegisterData } from "./register.schema";
import { qtySchema} from "./qty-input.schema";
import { deliveryAddressSchema, type DeliveryAddressData } from "./delivery-address.schema";
import { checkoutSchema, type CheckoutData, type CheckoutErrors } from "./checkout.schema";

export {
    loginSchema,
    type LoginData,

    registerSchema,
    type RegisterData,

    qtySchema,
    deliveryAddressSchema,
    type DeliveryAddressData,

    checkoutSchema,
    type CheckoutData,
    type CheckoutErrors,
}