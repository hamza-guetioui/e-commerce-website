import React from "react";
import Form from "@/features/Admin/shared/components/Form";
import FormInputs from "./components/FromInputs";
import { createPanel } from "./actions";

function index() {
  return (
    <Form action={createPanel} header="Create a Panel">
      <FormInputs />
    </Form>
  );
}

export default index;
