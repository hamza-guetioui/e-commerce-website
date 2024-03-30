import React from "react";

import Input from "@/features/Admin/shared/components/inputs/Input";
import TextArea from "@/features/Admin/shared/components/inputs/TextArea";
import ImageHandler from "@/features/Admin/shared/components/inputs/ImageHandler";
import Select from "@/features/Admin/shared/components/inputs/Select";



function FormInputs() {

  return (
    <div className="container">
      <div className="inputs-group">
        <Input type="text" name="title" length={20} />
        <TextArea name="description" length={255} />
        <Input type="text" name="path" length={50} />
        <Select />
      </div>
      <div className="image-container">
        <ImageHandler />
      </div>
    </div>
  );
}

export default FormInputs;
