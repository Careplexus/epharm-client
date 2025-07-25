import { useState } from "react";

export function useQuantityInput() {
     const [value, setValue] = useState<number>(0)

    const handleIncrement = () => {
        setValue((prev: number)=>prev + 1)
    }

    const handleDecrement = () => {
        setValue((prev: number)=>prev > 0 ? prev - 1 : 0)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const inputValue = e.target.value
        const newValue = parseInt(inputValue, 10)
        setValue(isNaN(newValue) || newValue < 0 ? 0 : newValue)
    }
    return {
        value,
        handleIncrement,
        handleDecrement,
        handleChange
    }
}