import type { Props as ProductCardButtons } from "@/02-component-patterns/components/ProductButtons.tsx";
import type { Props as ProductCardProps } from "@/02-component-patterns/components/ProductCard.tsx";
import type { Props as PropsProductImage } from "@/02-component-patterns/components/ProductImage.tsx";
import type { Props as PropsProductTitle } from "@/02-component-patterns/components/ProductTitle";
import type { JSX } from "react";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  handleIncreaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  (props: ProductCardProps): JSX.Element;
  Title: (props: PropsProductTitle) => JSX.Element;
  Image: (props: PropsProductImage) => JSX.Element;
  Buttons: (props: ProductCardButtons) => JSX.Element;
}
