import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { checkoutSchema, type CheckoutErrors } from "@/schemas";
import { z } from "zod";
import {CreditCard, Package, ShieldCheck } from "lucide-react";


export default function CheckoutForm() {
  const { clearCart, getSubtotal } = useCartStore();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [errors, setErrors] = useState<CheckoutErrors>({});

  const subtotal = getSubtotal();

  const deliveryFee = 1000; 
  const total = subtotal + deliveryFee;

    const handlePlaceOrder = () => {
        try {
        checkoutSchema.parse({ paymentMethod }); 
            alert("✅ Order placed successfully!");
            clearCart();
        } catch (err) {
            if (err instanceof z.ZodError) {
                const fieldErrors: Record<string, string> = {};
                err.issues.forEach((issue) => {
                const fieldName = issue.path[0] as string;
                fieldErrors[fieldName] = issue.message;
                });
                setErrors(fieldErrors);
            }
        }
    };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Payment Method */}
          <section className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-4">
              <CreditCard className="text-blue-500" /> Payment Method
            </h2>
            <div className="space-y-3">
              {["card", "transfer"].map((method) => (
                <label
                  key={method}
                  className={`flex items-center gap-3 border rounded-xl p-4 cursor-pointer transition ${
                    paymentMethod === method ? "border-blue-500 bg-blue-50" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <span className="font-medium capitalize">
                    {method === "cod" ? "Cash on Delivery" : method}
                  </span>
                </label>
              ))}
              {errors.paymentMethod && (
                <p className="text-red-500 text-sm mt-1">{errors.paymentMethod}</p>
              )}
            </div>
          </section>
        </div>

        {/* RIGHT SIDE - Order Summary */}
        <div>
          <section className="bg-white rounded-2xl shadow-md p-6 sticky top-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-4">
              <Package className="text-blue-500" /> Order Summary
            </h2>
            <div className="space-y-3">
              {/* {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>₦{parseFloat(item.price) * item.quantity}</span>
                </div>
              ))} */}
              <div className="border-t pt-3 text-md">
                <div className="flex justify-between">
                  <span className="">Subtotal</span>
                  <span className="">₦{subtotal}</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Delivery Fee: </span>
                  <span>₦{deliveryFee}</span>
                </div>
                <div className="flex justify-between font-bold text-red-500 mt-2">
                  <span>Total Payable: </span>
                  <span>₦{total}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="cursor-pointer w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 transition"
            >
              <ShieldCheck /> Place Order
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
