import React from "react";
import Logo from "./Logo"
import Navigator from "./Navigator";
import ClientOptions from "./ClientOptions";



function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 py-1 h-14 border-b">
      {/* logo */}
      <Logo/>
      {/* Navigation */}
      <Navigator/>
      {/* client options: search, favorites, and shopping cart */}
      <ClientOptions/>
  
    </nav>
  );
}

export default Navbar;
