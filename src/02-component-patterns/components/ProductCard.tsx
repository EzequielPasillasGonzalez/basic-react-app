import { createContext, type CSSProperties, type ReactElement } from "react";

import styles from "@/02-component-patterns/styles/styles.module.css";
import { useProduct } from "@/02-component-patterns/hooks/useProduct.ts";
import type {
  ProductContextProps,
  Product,
  onChangeArgs,
} from "@/02-component-patterns/interfaces/interfaces.ts";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
}: Props) => {
  const { counter, handleIncreaseBy } = useProduct({ onChange, product });

  return (
    <Provider
      // Se provee el contexto de lo que necesitamos
      value={{
        counter,
        handleIncreaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
