import React from "react";

import Input from "@/features/Admin/shared/components/inputs/Input";
import TextArea from "@/features/Admin/shared/components/inputs/TextArea";
import FileInput from "@/features/Admin/shared/components/inputs/FileInput";
import SelectInput from "@/features/Admin/shared/components/inputs/SelectInput";

const types = [
  { id: "1", name: "slider" },
  { id: "2", name: "discovery" },
  { id: "3", name: "advertisement" },
];

function FormInputs() {
  return (
    <>
      <div className="inputs-section">
        <Input type="text" name="title" label="Title" length={20} />
        <TextArea name="description" label="Description" length={255} />
        <Input type="text" name="path" label="Path" length={50} />
        <SelectInput
          id="typeRadio"
          type="radio"
          name="type"
          label="Type"
          data={types}
        />
      </div>
      <div className="files-section">
        <FileInput name="image" label="Panel Image" accept=".jpg,.jpeg,.png" />
      </div>
    </>
  );
}

export default FormInputs;
