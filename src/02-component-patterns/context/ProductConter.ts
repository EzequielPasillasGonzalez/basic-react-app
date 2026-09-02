import type { ProductContextProps } from "@/02-component-patterns/interfaces/interfaces.ts";
import { createContext } from "react";

export const ProductContext = createContext({} as ProductContextProps);
