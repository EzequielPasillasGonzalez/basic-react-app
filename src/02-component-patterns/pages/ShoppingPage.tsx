import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "@/02-component-patterns/components/";
import "@/02-component-patterns/styles/custom-styles.css";
const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "/coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {/* // notes:  Diferentes maenras de poner los children  */}
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle title={product.title} className=" text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        {/* // notes:  Diferentes maenras de poner los children  */}
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image
            className="custom-image"
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
          />
          <ProductCard.Title className=" text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: "#70D1F8" }}>
          <ProductImage
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
          />
          <ProductTitle title={product.title} style={{ fontWeight: "bold" }} />
          <ProductButtons style={{ display: "flex", justifyContent: "end" }} />
        </ProductCard>
      </div>
    </div>
  );
};
