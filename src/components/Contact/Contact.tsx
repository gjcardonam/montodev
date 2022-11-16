import {
  ContactProps,
  formElements,
  formItems,
  valuesInterface,
} from "../../interfaces/formInterfaces";
import React from "react";
import { useForm } from "../../hooks/hooks";
import "./Contact.css";

const Contact: React.FunctionComponent<ContactProps> = () => {
  const initialValues: valuesInterface = {
    name: "",
    lastName: "",
    email: "",
    tel: "",
  };

  const formCallBack = () => {};

  const { values, onChange, handleSubmit } = useForm(
    initialValues,
    formCallBack()
  );

  return (
    <section>
      <div>img</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            type="text"
            name="name"
            onChange={onChange}
            value={values.name}
          />
          <input
            placeholder="Last Name"
            type="text"
            name="lastName"
            onChange={onChange}
            value={values.lastName}
          />
          <input
            placeholder="Email"
            type="text"
            name="email"
            onChange={onChange}
            value={values.email}
          />
          <input
            placeholder="Phone"
            type="text"
            name="tel"
            onChange={onChange}
            value={values.tel}
          />
          <input type="submit" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
