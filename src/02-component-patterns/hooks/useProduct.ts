import type {
  onChangeArgs,
  Product,
} from "@/02-component-patterns/interfaces/interfaces.ts";
import { useEffect, useRef, useState } from "react";

interface Props {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: Props) => {
  const [counter, setCounter] = useState(value);

  const isControlled = useRef(!!onChange);

  const handleIncreaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({ count: value, product });
    }

    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);

    onChange && onChange({ product, count: newValue }); // Si tiene un valor se ejecuta la funcion
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    handleIncreaseBy,
  };
};
