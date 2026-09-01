import type {
  onChangeArgs,
  Product,
} from "@/02-component-patterns/interfaces/interfaces.ts";
import { useState } from "react";

interface Props {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({ onChange, product }: Props) => {
  const [counter, setCounter] = useState(0);

  const handleIncreaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);

    onChange && onChange({ product, count: newValue }); // Si tiene un valor se ejecuta la funcion
  };

  return {
    counter,
    handleIncreaseBy,
  };
};
