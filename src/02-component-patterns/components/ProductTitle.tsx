import { useContext, type CSSProperties } from "react";
import styles from "@/02-component-patterns/styles/styles.module.css";
import { ProductContext } from "@/02-component-patterns/context/ProductConter.ts";

export interface Props {
  title?: string;
  className?: string;
  style?: CSSProperties;
}
export const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ?? product.title}
    </span>
  );
};
