import React from "react";

function Select() {
  return (
    <>
      <label>Type</label>
      <div className="w-11/12 h-fit">
        <select name="type">
          <option value="slide">slide</option>
          <option value="public">Public</option>
          <option value="public">Public</option>
        </select>
      </div>
    </>
  );
}

export default Select;
