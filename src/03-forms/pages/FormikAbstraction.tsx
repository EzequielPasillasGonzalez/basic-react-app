import "@/03-forms/styles/styles.css";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import {
  MyCheckbox,
  MySelect,
  MyTextInput,
} from "@/03-forms/components/index.ts";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(10, "Debe de tener 10 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("No tiene el formato de email requerido")
            .required("Requerido"),
          terms: Yup.boolean()
            .oneOf([true], "Debe de aceptar las condiciones")
            .required("Requerido"),

          jobType: Yup.string()
            .notOneOf(["it-jr"], "Esta opción no es permitida")
            .required("Requerido"),
        })}
      >
        {() => (
          <Form>
            <MyTextInput label="First Name" name="firstName" />
            <MyTextInput label="Last Name" name="lastName" />
            <MyTextInput label="Email" name="email" />

            <MySelect label="Job Type" name="jobType">
              <option value={""}>Pick Something</option>
              <option value={"developer"}>developer</option>
              <option value={"designer"}>designer</option>
              <option value={"it-senior"}>it Senior</option>
              <option value={"it-jr"}>it Jr</option>
            </MySelect>

            <MyCheckbox label="Terms and Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
