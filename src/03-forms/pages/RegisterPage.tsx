import { useForm } from "@/03-forms/hooks/useForm.ts";
import "@/03-forms/styles/styles.css";
import { type SubmitEvent } from "react";

export interface RegisterForm {
  name: string;
  email: string;
  password1: string;
  password2: string;
}

export const RegisterPage = () => {
  const { onChange, email, name, password1, password2, formData } =
    useForm<RegisterForm>({
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
      <h1>Register Page</h1>

      <form noValidate onSubmit={(ev) => onSubmit(ev)}>
        <input
          type="text"
          value={name}
          name="name"
          onChange={(ev) => onChange(ev)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          name="email"
          onChange={(ev) => onChange(ev)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password1}
          name="password1"
          onChange={(ev) => onChange(ev)}
          placeholder="Password"
        />
        <input
          type="password"
          value={password2}
          name="password2"
          onChange={(ev) => onChange(ev)}
          placeholder="Repeat Password"
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};
