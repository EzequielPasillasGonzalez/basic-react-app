import { useState, type ChangeEvent } from "react";

export const useForm = <T>(initState: T) => {
  const [formData, setFormData] = useState(initState);

  const onChange = (event: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setFormData((value) => {
      return {
        ...value,
        [event.target.name]: event.target.value,
      };
    });
  };

  return {
    formData,
    ...formData,
    onChange,
  };
};
