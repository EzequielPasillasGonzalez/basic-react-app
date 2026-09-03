import "@/03-forms/styles/styles.css";
import { Field, Form, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>

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
        {(formik) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage component={"span"} name="firstName" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage component={"span"} name="lastName" />

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="text" />
            <ErrorMessage component={"span"} name="email" />

            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select">
              <option value={""}>Pick Something</option>
              <option value={"developer"}>developer</option>
              <option value={"designer"}>designer</option>
              <option value={"it-senior"}>it Senior</option>
              <option value={"it-jr"}>it Jr</option>
            </Field>
            <ErrorMessage component={"span"} name="jobType" />

            <label htmlFor="terms">
              <Field name="terms" type="checkbox" />
              Terms and Conditions
            </label>

            <ErrorMessage component={"span"} name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
