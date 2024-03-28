import React from "react";
import Header from "./Header";
import Buttons from "./Buttons";

function index() {
  function handleResetClick() {
    // setUploadedImage(null); // Clear uploaded image
    // if (displayImageRef.current) {
    //   displayImageRef.current.style.backgroundImage = "none"; // Reset background image
    // }
  }
  return (
    <form>
      <Header />

      <Buttons handleResetClick={handleResetClick} />
    </form>
  );
}

export default index;
