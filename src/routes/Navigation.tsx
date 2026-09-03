import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

import logo from "@/logo.svg";
import { RegisterPage } from "@/03-forms/pages/RegisterPage.tsx";
import { FormikBasicPage } from "@/03-forms/pages/FormikBasicPage.tsx";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="Ract Logo" />

          <ul>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-basic"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/formik-basic" element={<FormikBasicPage />} />

          <Route path="/users" element={<div> Users</div>} />

          <Route path="/*" element={<Navigate to={"/"} replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
