import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "@/02-component-patterns/components/";
import type {
  onChangeArgs,
  Product,
} from "@/02-component-patterns/interfaces/interfaces.ts";
import "@/02-component-patterns/styles/custom-styles.css";
import { useState } from "react";

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "/coffee-mug.png",
};

const product2 = {
  id: "2",
  title: "Coffee Mug - Meme",
  img: "/coffee-mug2.png",
};

const products: Product[] = [product, product2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    console.log("onProductCountChange");
    console.log({ count, product });
  };

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {/* // notes:  Diferentes maenras de poner los children  */}
        {/* <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle title={product.title} className=" text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard> */}

        {/* // notes:  Diferentes maenras de poner los children  */}
        {/* <ProductCard product={product2} className="bg-dark text-white">
          <ProductCard.Image
            className="custom-image"
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
          />
          <ProductCard.Title className=" text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard> */}

        {/* <ProductCard product={product} style={{ backgroundColor: "#70D1F8" }}>
          <ProductImage
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
          />
          <ProductTitle title={product.title} style={{ fontWeight: "bold" }} />
          <ProductButtons style={{ display: "flex", justifyContent: "end" }} />
        </ProductCard> */}

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}
          >
            <ProductImage className="custom-image" />
            <ProductTitle title={product.title} className=" text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        <ProductCard
          product={product}
          className="bg-dark text-white"
          style={{ width: "100px" }}
          onChange={onProductCountChange}
        >
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product2}
          className="bg-dark text-white"
          style={{ width: "100px" }}
        >
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};
