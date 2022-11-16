import { useState } from "react";
import React from "react";
import { formElements, valuesInterface } from "../interfaces/formInterfaces";

export const useForm = (initialValues: valuesInterface, formCallBack: any) => {
  const [values, setValues] = useState(initialValues);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event: React.FormEvent<formElements>) => {
    event.preventDefault();
    console.log(values);
    setValues(initialValues);
  };

  return { values, onChange, handleSubmit };
};
