import { useContext, type CSSProperties } from "react";
import styles from "@/02-component-patterns/styles/styles.module.css";
import { ProductContext } from "@/02-component-patterns/components/ProductCard.tsx";

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { handleIncreaseBy, counter } = useContext(ProductContext);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button
        className={styles.buttonMinus}
        onClick={() => handleIncreaseBy(-1)}
      >
        -
      </button>

      <div className={styles.countLabel}> {counter} </div>

      <button className={styles.buttonAdd} onClick={() => handleIncreaseBy(+1)}>
        +
      </button>
    </div>
  );
};
