import { useContext, type CSSProperties } from "react";
import styles from "@/02-component-patterns/styles/styles.module.css";
import noImage from "@/02-component-patterns/assets/no-image.jpg";
import { ProductContext } from "@/02-component-patterns/context/ProductConter.ts";

export interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img = "", className, style }: Props) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt="Product image"
      style={style}
    />
  );
};
