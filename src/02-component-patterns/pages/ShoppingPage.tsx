import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "@/02-component-patterns/components/";

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
        <ProductCard product={product}>
          {/* // notes:  Diferentes maenras de poner los children  */}
          <ProductImage />
          <ProductTitle title={product.title} />
          <ProductButtons />
        </ProductCard>

        {/* // notes:  Diferentes maenras de poner los children  */}
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={"vsdv"} />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};
