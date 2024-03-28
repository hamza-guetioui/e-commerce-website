
import React from "react";
import Input from "./components/Input";

async function log(formData: FormData) {
  "use server";
  const name = formData.get("name");
  console.log(name);
}
function index() {

  return (
    <form action={log}>
      <Input  />
      <button type="reset">reset</button>
    </form>
  );
}

export default index;
