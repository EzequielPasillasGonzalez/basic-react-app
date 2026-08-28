import { createContext } from "react";

import styles from "@/02-component-patterns/styles/styles.module.css";
import { useProduct } from "@/02-component-patterns/hooks/useProduct.ts";
import type {
  ProductContextProps,
  ProductCardProps,
} from "@/02-component-patterns/interfaces/interfaces.ts";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, handleIncreaseBy } = useProduct();

  return (
    <Provider
      // Se provee el contexto de lo que necesitamos
      value={{
        counter,
        handleIncreaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>
        {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} handleIncrease={handleIncreaseBy} /> */}

        {children}
      </div>
    </Provider>
  );
};

// hack: Se esta añadiendo una propiedad al productCard
// ProductCard.Title = ProductTitle;
// ProductCard.Buttons = ProductButtons;
// ProductCard.Image = ProductImage;
