
//Quantity adjustable input 
export interface QuantityInputProps {
    value: number,
    handleIncrement: () => void
    handleDecrement: () => void
    handleChange:  (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface Product {
    id: number;
    image: string;
    name: string;
    pack_size?: string;
    category?: string;
    quantity?: number;
    price: string;
}
