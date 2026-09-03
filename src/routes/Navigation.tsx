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
import { FormikYupPage } from "@/03-forms/pages/FormikYupPage.tsx";

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
                to="/formik-yup"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Yup
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/formik-basic" element={<FormikBasicPage />} />

          <Route path="/formik-yup" element={<FormikYupPage />} />

          <Route path="/*" element={<Navigate to={"/"} replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
