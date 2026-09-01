import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "@/02-component-patterns/components/";
import { useShoppingCart } from "@/02-component-patterns/hooks/useShoppingCart.ts";

import "@/02-component-patterns/styles/custom-styles.css";

export const ShoppingPage = () => {
  const { handleProductCountChange, shoppingCart, products } =
    useShoppingCart();

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
            onChange={handleProductCountChange}
            value={shoppingCart[product.id]?.count ?? 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle title={product.title} className=" text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark text-white"
            style={{ width: "100px" }}
            onChange={handleProductCountChange}
            value={product.count}
          >
            <ProductImage className="custom-image" />
            <ProductButtons
              className="custom-buttons"
              style={{ display: "flex", justifyContent: "center" }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
