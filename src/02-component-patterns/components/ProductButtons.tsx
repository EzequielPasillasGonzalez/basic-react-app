import { useCallback, useContext, type CSSProperties } from "react";
import styles from "@/02-component-patterns/styles/styles.module.css";
import { ProductContext } from "@/02-component-patterns/context/ProductConter.ts";

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  // TODO: extraer maxCount
  const { handleIncreaseBy, counter, initialValues } =
    useContext(ProductContext);

  // todo: isMaxReached = useCallback, [counter, maxCount]
  // true si el count == maxCount
  // false si el count != maxCount
  const isMaxReached = useCallback(
    () => !!initialValues?.maxCount && counter === initialValues.maxCount,
    [counter, initialValues?.maxCount],
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
