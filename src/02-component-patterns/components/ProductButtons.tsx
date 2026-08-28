import { useContext } from "react";
import styles from "@/02-component-patterns/styles/styles.module.css";
import { ProductContext } from "@/02-component-patterns/components/ProductCard.tsx";

export const ProductButtons = () => {
  const { handleIncreaseBy, counter } = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
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
