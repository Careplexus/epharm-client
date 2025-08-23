import { CreditCard } from "lucide-react";

export default function PaymentOptions( { setPaymentMethod, paymentMethod, errors }: { setPaymentMethod: (method: string) => void; paymentMethod: string; errors: Record<string, string> }) {
    return(
        <section className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-4">
              <CreditCard className="text-blue-500" /> Payment Method
            </h2>
            <div className="space-y-3">
              {["card", "transfer", "cod"].map((method) => (
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
    )
}