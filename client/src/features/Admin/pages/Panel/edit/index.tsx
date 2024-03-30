import React from "react";

import Form from "@/features/Admin/shared/components/Form";
import FormInputs from "./components/FromInputs";

// async function getPanelData(id: string){
// try {
//   const response = await fetch()
// }catch (err){

// }
// }

async function updatePanel(id: string ,formData : FormData){
  "use server"
  try{
console.log(id ,Object.fromEntries(formData))
  }catch(err){
  }
  ;
}

async function index({ id }: { id: string }) {
  
  // const data = await getPanelData(id)
  const updatePanelWithId = updatePanel.bind(null, id)

  return (
    <Form action={updatePanelWithId} header="Update a Panel">
        <FormInputs/>
    </Form>
  );
}

export default index;
