import React from "react";
import Header from "./Header";
import Buttons from "./Buttons";
import Body from "./Body";

async function createPanel(formData: FormData) {
  "use server";
  try {
    const response = await fetch("http://localhost:4040/panel", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        title: formData.get("title"),
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

function Form() {
  return (
    <form action={createPanel}>
      <Header>{"Create a Panel"}</Header>
      <Body />
      <Buttons />
    </form>
  );
}

export default Form;
