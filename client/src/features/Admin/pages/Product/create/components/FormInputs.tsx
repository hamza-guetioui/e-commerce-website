import React from "react";

import Input from "@/features/Admin/shared/components/inputs/Input";
import TextArea from "@/features/Admin/shared/components/inputs/TextArea";
import FileInput from "@/features/Admin/shared/components/inputs/FileInput";
import SelectInput from "@/features/Admin/shared/components/inputs/SelectInput";
import NumberInput from "@/features/Admin/shared/components/inputs/NumberInput";


const colors = [
    { id: "1", name: "red" },
    { id: "2", name: "green" },
    { id: "3", name: "blue" },
    { id: "4", name: "yellow" },
    { id: "5", name: "perper" },
    { id: "6", name: "orange" },
  ];

function FormInputs() {
  return (
    <>
      <div className="inputs-section">
        <Input type="text" name="name" label="Name" length={20} />
        <TextArea name="description" label="Description" length={255} />
        <SelectInput
          id="categoryCheckbox"
          type="checkbox"
          name="Categories"
          label="Category"
          data={colors}
        />

        <SelectInput
          id="colorsCheck"
          type="checkbox"
          name="colors"
          label="Colors"
          data={colors}
        />

        <SelectInput
          id="sizesCheckbox"
          type="checkbox"
          name="sizes"
          label="Sizes"
          data={colors}
        />
        <NumberInput name="qtyInStore" label="Quentity" initialValue={1} />
        <NumberInput name="price" label="Price" span="MAD" initialValue={1}/>
        
      </div>
      <div className="files-section">
        <FileInput name="image" label="Cover Image" accept=".jpg,.jpeg,.png" />
      </div>
    </>
  );
}

export default FormInputs;
