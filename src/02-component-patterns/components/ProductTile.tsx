import { useContext } from "react";
import styles from "@/02-component-patterns/styles/styles.module.css";
import { ProductContext } from "@/02-component-patterns/components/ProductCard.tsx";

// Con esa desestructuracion se obliga a tener el titulo
// { title: string } es una interfaz
export const ProductTitle = ({ title }: { title: string }) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={styles.productDescription}>{title ?? product.title}</span>
  );
};

