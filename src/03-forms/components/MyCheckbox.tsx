import { useField } from "formik";

interface Props {
  label: string;
  name: string;
  [x: string]: unknown;
}

export const MyCheckbox = ({ label, ...props }: Props) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label htmlFor={(props.id as string) || props.name}>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      {meta.touched && meta.error && (
        <span className="error"> {meta.error} </span>
      )}
    </>
  );
};
