import React from "react"
import Link from "next/link";

function Buttons() {
  return (
    <div className="buttons">
      <button type="submit">save</button>
      <button name="cancel">
        <Link href="/dashboard">
          cancel
        </Link>
      </button>
    </div>
  );
}

export default Buttons;
