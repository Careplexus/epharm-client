import { CreditCard, MapPin } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deliveryAddressSchema, type DeliveryAddressData } from "@/schemas";
import { useDeliveryAddressStore } from "@/store/deliveryAddressStore";

type CheckoutErrors = Partial<Record<keyof DeliveryAddressData, string>>;

export default function DeliveryAddressForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    altPhone: "",
    country: "Nigeria",
    state: "",
    city: "",
    streetAddress: "", 
    landmark: "",
    postalCode: "",
  });

  const { setAddress } = useDeliveryAddressStore();
  const [errors, setErrors] = useState<CheckoutErrors>({});
  const navigate = useNavigate();

  const countries = ["Nigeria"];
  const statesInNigeria = [
    "Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno",
    "Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","FCT","Gombe","Imo",
    "Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa",
    "Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba",
    "Yobe","Zamfara",
  ];

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {

    const parsed = deliveryAddressSchema.safeParse(formData);

    if (!parsed.success) {
    const fieldErrors: CheckoutErrors = {};
    parsed.error.issues.forEach((err) => {
        const field = err.path[0] as keyof DeliveryAddressData;
        fieldErrors[field] = err.message;
    });
    setErrors(fieldErrors);
    return;
    }

    // Save validated address to Zustand
    setAddress(parsed.data);
    setErrors({});
    navigate("/checkout");
  };

  return (
    <section className="bg-white md:rounded-2xl md:shadow-md md:p-6">
      <h2 className="flex items-center gap-2 text-2xl font-semibold text-gray-800 mb-4 tracking-widest uppercase">
        <MapPin className="text-blue-500" /> Delivery Address
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Recipient Full Name
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipient's full name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className={`w-full border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter phone number"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Alternate Phone (optional)
          </label>
          <input
            type="tel"
            value={formData.altPhone}
            onChange={(e) => handleChange("altPhone", e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter alternate phone"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Country
          </label>
          <select
            title="Country"
            value={formData.country}
            onChange={(e) => handleChange("country", e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {countries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            State
          </label>
          <select
            title="State"
            value={formData.state}
            onChange={(e) => handleChange("state", e.target.value)}
            className={`w-full border ${
              errors.state ? "border-red-500" : "border-gray-300"
            } rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option value="">Select State</option>
            {statesInNigeria.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
            className={`w-full border ${
              errors.city ? "border-red-500" : "border-gray-300"
            } rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter your city"
          />
          {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
        </div>

        {/* Street Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Street Address
          </label>
          <input
            type="text"
            value={formData.streetAddress}
            onChange={(e) => handleChange("streetAddress", e.target.value)}
            className={`w-full border ${
              errors.streetAddress ? "border-red-500" : "border-gray-300"
            } rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="House number, street name"
          />
          {errors.streetAddress && <p className="text-red-500 text-sm mt-1">{errors.streetAddress}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Landmark / Delivery Instructions (optional)
          </label>
          <input
            type="text"
            value={formData.landmark}
            onChange={(e) => handleChange("landmark", e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Opposite Police Station"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Postal Code (optional)
          </label>
          <input
            type="text"
            value={formData.postalCode || ""}
            onChange={(e) => handleChange("postalCode", e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter postal code"
          />
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="cursor-pointer w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 transition"
      >
        <CreditCard /> Select Payment Method
      </button>
    </section>
  );
}
