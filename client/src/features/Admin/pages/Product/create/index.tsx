import React from "react";
import Select from "./components/Select";

import Form from "@/features/Admin/shared/components/Form";
import ImageHandler from "@/features/Admin/shared/components/inputs/ImageHandler";

async function log(formData: FormData) {
  "use server";

  console.log(Object.fromEntries(formData));
}

const colors = [
  { id: "1", name: "red" },
  { id: "2", name: "green" },
  { id: "3", name: "blue" },
  { id: "4", name: "yellow" },
  { id: "5", name: "perper" },
  { id: "6", name: "orange" },
];

const value = [
  { id: "3", name: "blue" },
  { id: "4", name: "yellow" },
  { id: "6", name: "orange" },
];

function index() {
  return (
    <Form action={log} header="Create a Product">
      <div className="container">
        <div className="inputs-group">
          <Select type="radio" name="type" data={colors} />
        </div>
        <div className="image-container">
          <ImageHandler />
        </div>
      </div>
    </Form>
  );
}

export default index;
