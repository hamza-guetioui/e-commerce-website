import React from "react";

function Header({children}:{ children: React.ReactNode}) {
  return (
    <h1 className="header">
      {children}
    </h1>
  );
}

export default Header;