import type {
  Product,
  ProductInCart,
} from "@/02-component-patterns/interfaces/interfaces.ts";
import { useState } from "react";
import { products } from "@/02-component-patterns/data/products.ts";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const handleProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }
      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };

  return {
    products,
    shoppingCart,
    handleProductCountChange,
  };
};
