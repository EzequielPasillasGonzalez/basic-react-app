import { useForm } from "@/03-forms/hooks/useForm.ts";
import "@/03-forms/styles/styles.css";
import { type SubmitEvent } from "react";

export interface RegisterForm {
  name: string;
  email: string;
  password1: string;
  password2: string;
}

export const RegisterFormikPage = () => {
  const {
    onChange,
    email,
    name,
    password1,
    password2,
    formData,
    resetForm,
    isValidEmail,
  } = useForm<RegisterForm>({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ formData });
  };

  return (
    <div>
      <h1>Register Formik Page</h1>

      <form noValidate onSubmit={(ev) => onSubmit(ev)}>
        <input
          type="text"
          value={name}
          name="name"
          onChange={(ev) => onChange(ev)}
          placeholder="Name"
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="email"
          value={email}
          name="email"
          onChange={(ev) => onChange(ev)}
          placeholder="Email"
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email no es válido</span>}

        <input
          type="password"
          value={password1}
          name="password1"
          onChange={(ev) => onChange(ev)}
          placeholder="Password"
          className={`${password1.trim().length <= 0 || (password1.trim().length < 6 && password1.trim().length > 0 && "has-error")}`}
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>La contraseña tiene que tener 6 caracteres</span>
        )}

        <input
          type="password"
          value={password2}
          name="password2"
          onChange={(ev) => onChange(ev)}
          placeholder="Repeat Password"
          className={`${password2.trim().length <= 0 || (password1.trim().length > 0 && password1 !== password2 && "has-error")}`}
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length > 0 && password1 !== password2 && (
          <span>Las contrasenas deben de ser iguales</span>
        )}

        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};
