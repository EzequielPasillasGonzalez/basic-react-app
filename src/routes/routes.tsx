import LazyPage1 from "@/01-lazyload/pages/LazyPage1.tsx";
import LazyPage2 from "@/01-lazyload/pages/LazyPage2.tsx";
import LazyPage3 from "@/01-lazyload/pages/LazyPage3.tsx";
import { NoLazy } from "@/01-lazyload/pages/NoLazy.tsx";
import { lazy, type LazyExoticComponent, type ComponentType } from "react";
import { Navigate } from "react-router-dom";

type ReactComponent =
  | LazyExoticComponent<ComponentType<any>>
  | ComponentType<any>;

interface Route {
  to: string;
  path: string;
  name: string;
  Component: ReactComponent;
  children?: {
    path: string;
    Component: ReactComponent;
  }[];
}

const LazyLayout = lazy(() => import("@/01-lazyload/layout/LazyLayout.tsx"));

export const routes: Route[] = [
  {
    path: "/lazyload",
    to: "/lazyload/lazy1",
    Component: LazyLayout,
    name: "LazyLayout",
    children: [
      { path: "lazy1", Component: LazyPage1 },
      { path: "lazy2", Component: LazyPage2 },
      { path: "lazy3", Component: LazyPage3 },
      { path: "*", Component: () => <Navigate to="lazy1" replace /> },
    ],
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
];
