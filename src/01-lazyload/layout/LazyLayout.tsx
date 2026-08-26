import { NavLink, Outlet } from "react-router-dom";

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>

      {/* Rutas hijas */}
      <ul>
        <li>
          <NavLink to="lazy1">Lazy 1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">Lazy 2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">Lazy 3</NavLink>
        </li>
      </ul>

      {/* Aquí React Router inyectará LazyPage1, LazyPage2 o LazyPage3 */}
      <Outlet />
    </div>
  );
};

export default LazyLayout;
