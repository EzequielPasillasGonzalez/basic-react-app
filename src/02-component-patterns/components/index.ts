import { ProductButtons } from "@/02-component-patterns/components/ProductButtons.tsx";
import { ProductCard as ProductCardHOC } from "@/02-component-patterns/components/ProductCard.tsx";
import { ProductImage } from "@/02-component-patterns/components/ProductImage.tsx";
import { ProductTitle } from "@/02-component-patterns/components/ProductTitle";
import type { ProductCardHOCProps } from "@/02-component-patterns/interfaces/interfaces.ts";

export { ProductButtons } from "@/02-component-patterns/components/ProductButtons.tsx";
export { ProductImage } from "@/02-component-patterns/components/ProductImage.tsx";
export { ProductTitle } from "@/02-component-patterns/components/ProductTitle";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
