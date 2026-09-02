import "@/03-forms/styles/styles.css";
import { useState, type ChangeEvent, type SubmitEvent } from "react";

export const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const { email, name, password1, password2 } = registerData;

  const onChange = (event: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setRegisterData((value) => {
      return {
        ...value,
        [event.target.name]: event.target.value,
      };
    });
  };

  const onSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ registerData });
  };

  return (
    <div>
      <h1>Register Page</h1>
      {JSON.stringify(registerData, null, 4)}
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
