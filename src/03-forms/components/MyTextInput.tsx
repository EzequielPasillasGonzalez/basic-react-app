import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: unknown;
}

export const MyTextInput = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={(props.id as string) || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      <ErrorMessage
        name={props.name}
        component={"span"}
        className="custom-span-error-class"
      />
    </>
  );
};
