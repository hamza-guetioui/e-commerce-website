import React from "react";
import SelectInput from "@/features/Admin/shared/components/inputs/SelectInput";

import Form from "@/features/Admin/shared/components/Form";
import FormInputs from "./components/FormInputs";

async function log(formData: FormData) {
  "use server";

  console.log(Object.fromEntries(formData));
}



function index() {
  return (
    <Form action={log} header="Create a Product">
      <FormInputs/>
   
      
    </Form>
  );
}

export default index;
