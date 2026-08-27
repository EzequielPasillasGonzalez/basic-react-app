import styles from "@/02-component-patterns/styles/styles.module.css";
import noImage from "@/02-component-patterns/assets/no-image.jpg";
import { useProduct } from "@/02-component-patterns/hooks/useProduct.ts";

interface Props {
  product: Product;
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

export const ProductImage = ({ img = "" }) => {
  return (
    <img
      className={styles.productImg}
      src={img ? img : noImage}
      alt="Product image"
    />
  );
};

// Con esa desestructuracion se obliga a tener el titulo
// { title: string } es una interfaz
export const ProductTitle = ({ title }: { title: string }) => {
  return <span className={styles.productDescription}>{title}</span>;
};

interface ProductButtonsProps {
  counter: number;
  handleIncrease: (value: number) => void;
}

export const ProductButtons = ({
  counter,
  handleIncrease,
}: ProductButtonsProps) => {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => handleIncrease(-1)}>
        -
      </button>

      <div className={styles.countLabel}> {counter} </div>

      <button className={styles.buttonAdd} onClick={() => handleIncrease(+1)}>
        +
      </button>
    </div>
  );
};

export const ProductCard = ({ product }: Props) => {
  const { counter, handleIncreaseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} handleIncrease={handleIncreaseBy} />
    </div>
  );
};
