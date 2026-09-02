import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "@/02-component-patterns/components/";
import { products } from "@/02-component-patterns/data/products.ts";

import "@/02-component-patterns/styles/custom-styles.css";

const product = products[0];
export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {/* // notes:  Diferentes maenras de poner los children  */}
        {/* <ProductCard product={product2} className="bg-dark text-white">
          <ProductCard.Image
            className="custom-image"
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
          />
          <ProductCard.Title className=" text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard> */}

        {/* // notes:  Diferentes maenras de poner los children  */}
        <ProductCard
          key={product.id}
          product={product}
          className="bg-dark text-white"
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          <ProductImage className="custom-image" />
          <ProductTitle title={product.title} className=" text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};
