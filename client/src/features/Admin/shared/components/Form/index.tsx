import React from "react";
import "./Style.css";

import Header from "./components/Header";
import Buttons from "./components/Buttons";

type FormProps = {
  header: string;
  action: (formData: FormData) => Promise<void>;
  children: React.ReactNode;
};

function Form({ header, action, children }: FormProps) {
  return (
    <div className="container">
      <Header>{header}</Header>
      <form action={action}>
        <div className="form-content">{children}</div>
        <Buttons />
      </form>
    </div>
  );
}

export default Form;
