import React from "react";

import Input from "./Input";
import TextArea from "./TextArea";
import ImageHandler from "./ImageHandler";
import Select from "./Select";

function Body() {
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

export default Body;
