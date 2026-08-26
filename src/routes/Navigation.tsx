import { Suspense } from "react";
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

import logo from "@/logo.svg";
import { routes } from "@/routes/routes.tsx";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="Ract Logo" />

          <ul>
            {routes.map(({ to, name }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Suspense fallback={<span> Loading... </span>}>
          <Routes>
            {routes.map(({ path, Component, children }) => (
              <Route
                key={path}
                path={path}
                element={Component ? <Component /> : null}
              >
                {/*  Renderiza las sub-rutas que se insertarán en el <Outlet /> */}
                {children?.map((child) => (
                  <Route
                    key={child.path}
                    path={child.path}
                    element={<child.Component />}
                  />
                ))}
              </Route>
            ))}

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};
