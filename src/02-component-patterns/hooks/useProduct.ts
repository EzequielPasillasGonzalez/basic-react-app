import type {
  InitialValues,
  onChangeArgs,
  Product,
} from "@/02-component-patterns/interfaces/interfaces.ts";
import { useState } from "react";

interface Props {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value,
  initialValues,
}: Props) => {
  // Estado local para cuando el componente actúa de forma no controlada
  const [internalCounter, setInternalCounter] = useState(
    initialValues?.count ?? value ?? 0,
  );

  // Si `value` viene definido, es controlado; de lo contrario usa el estado interno
  const isControlled = value !== undefined;
  const counter = isControlled ? value : internalCounter;

  const handleIncreaseBy = (amount: number) => {
    // Si tienes initialValues.maxCount, puedes aplicar el límite aquí también
    let newValue = Math.max(counter + amount, 0);

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    if (!isControlled) {
      setInternalCounter(newValue);
    }

    onChange?.({ product, count: newValue }); // Si tiene un valor se ejecuta la funcion
  };

  return {
    counter,
    handleIncreaseBy,
  };
};
