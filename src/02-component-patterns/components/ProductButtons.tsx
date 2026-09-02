import { useCallback, useContext, type CSSProperties } from "react";
import styles from "@/02-component-patterns/styles/styles.module.css";
import { ProductContext } from "@/02-component-patterns/context/ProductConter.ts";

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { handleIncreaseBy, counter, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount],
  );

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button
        className={styles.buttonMinus}
        onClick={() => handleIncreaseBy(-1)}
      >
        -
      </button>

      <div className={styles.countLabel}> {counter} </div>

      <button
        className={`${styles.buttonAdd}  ${isMaxReached() ? styles.disabled : ""}`}
        onClick={() => handleIncreaseBy(+1)}
      >
        +
      </button>
    </div>
  );
};
