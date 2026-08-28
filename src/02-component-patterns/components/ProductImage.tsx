import { useContext } from "react";
import styles from "@/02-component-patterns/styles/styles.module.css";
import noImage from "@/02-component-patterns/assets/no-image.jpg";
import { ProductContext } from "@/02-component-patterns/components/ProductCard.tsx";

export const ProductImage = ({ img = "" }) => {
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
    <img className={styles.productImg} src={imgToShow} alt="Product image" />
  );
};
