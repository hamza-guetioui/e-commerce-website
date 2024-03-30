import React from "react";
import Form from "@/features/Admin/shared/components/Form";
import FormInputs from "./components/FromInputs";

async function createPanel(formData: FormData) {
  "use server";

  const data = Object.fromEntries(formData);
  delete data[Object.keys(data)[0]]; // remove $ACTION_ properties.

  try {
    const response = await fetch("http://localhost:4040/panel", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        data,
      }),
    });
    if (response.ok) {
      console.log("Panel created successfully");
    } else {
      console.error(
        "Failed to create panel:",
        response.status,
        response.statusText
      );
    }
  } catch (error) {
    console.error("Error creating panel:", error);
  }
}

function index() {
  return (
    <Form action={createPanel} header="Create a Panel">
       <FormInputs/>
    </Form>
  );
}

export default index;
