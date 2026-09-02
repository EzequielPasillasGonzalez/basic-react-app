import { type CSSProperties, type JSX } from "react";

import styles from "@/02-component-patterns/styles/styles.module.css";
import { useProduct } from "@/02-component-patterns/hooks/useProduct.ts";
import type {
  InitialValues,
  Product,
  ProductCardHandlers,
  onChangeArgs,
} from "@/02-component-patterns/interfaces/interfaces.ts";
import { ProductContext } from "@/02-component-patterns/context/ProductConter.ts";

const { Provider } = ProductContext;

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, handleIncreaseBy, isMaxCountReached, reset, maxCount } =
    useProduct({
      onChange,
      product,
      value,
      initialValues,
    });

  return (
    <Provider
      // Se provee el contexto de lo que necesitamos
      value={{
        counter,
        handleIncreaseBy,
        product,
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {
          //note: Se manda a llamar la funcion children
          children({
            count: counter,
            isMaxCountReached,
            maxCount,
            reset,
            increaseBy: handleIncreaseBy,
            product,
          })
        }
      </div>
    </Provider>
  );
};
