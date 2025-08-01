import { Plus, Minus } from "lucide-react";
import { Input } from "@/components";
import { useQtyStore } from "@/store/qtyStore";

interface QuantityInputProps {
  productId: number;
}

export default function QuantityInput({ productId }: QuantityInputProps) {
  const { qtyMap, setQty, increaseQty, decreaseQty } = useQtyStore();
  const qty = qtyMap[productId] || 1;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setQty(productId, value);
    }
  };

  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        aria-label="decrement"
        onClick={() => decreaseQty(productId)}
      >
        <Minus className="cursor-pointer p-0.5 hover:bg-gray-500 hover:text-white" />
      </button>

      <Input
        type="number"
        value={qty}
        onChange={handleChange}
        className="no-spinner border-1 border-gray-500 w-15 h-7 text-center"
      />

      <button
        type="button"
        aria-label="increment"
        onClick={() => increaseQty(productId)}
      >
        <Plus className="cursor-pointer p-0.5 hover:bg-gray-500 hover:text-white" />
      </button>
    </div>
  );
}
