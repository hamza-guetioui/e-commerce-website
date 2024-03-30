import React from "react";

import Header from "./Header";
import Buttons from "./Buttons";

type FormProps = {
  action: (formData: FormData) => Promise<void>;
  header: string;
  children: React.ReactNode;
};

function Form({ action, header, children }: FormProps) {
  return (
    <form action={action}>
      <Header>{header}</Header>
      {children}
      <Buttons />
    </form>
  );
}

export default Form;
