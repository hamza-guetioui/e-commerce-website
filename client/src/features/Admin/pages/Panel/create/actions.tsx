"use server"

export async function createPanel(formData: FormData) {
    "use server";
    try {
      const response = await fetch("http://localhost:4040/panel", {
        headers: {
          "Contetnt-Type":"multipart/form-data" ,
        },
        method: "POST",
        body: formData,
      });
      
      if (response.ok) {
        console.log("Panel created successfully");
      } else {
        console.log(
          "Failed to create panel");
      }
    } catch (error) {
      console.error("Error creating panel:", error);
    }
  }
  