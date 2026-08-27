import styles from "@/02-component-patterns/styles/styles.module.css";
import noImage from "@/02-component-patterns/assets/no-image.jpg";
import { useProduct } from "@/02-component-patterns/hooks/useProduct.ts";
import { createContext, useContext, type ReactElement } from "react";

interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

interface ProductContextProps {
  counter: number;
  handleIncreaseBy: (value: number) => void;
  product: Product;
}

const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

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

// Con esa desestructuracion se obliga a tener el titulo
// { title: string } es una interfaz
export const ProductTitle = ({ title }: { title: string }) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={styles.productDescription}>{title ?? product.title}</span>
  );
};

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

export const ProductCard = ({ product, children }: Props) => {
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
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons;
ProductCard.Image = ProductImage;
