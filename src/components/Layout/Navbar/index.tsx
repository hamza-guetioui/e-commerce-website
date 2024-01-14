"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import Navigator from "./Navigator";
import ClientOptions from "./ClientOptions";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        className={` ${
          isMenuOpen ? "fixed z-10 opacity-60 w-full h-full bg-black" : ""
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <nav className="flex sticky z-10 bg-white top-0 justify-between items-center px-4 py-1 h-14 border-b">
        {/* logo */}
        <Logo />
        {/* Navigation */}
        <Navigator isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {/* client options: search, favorites, and shopping cart */}
        <ClientOptions />
      </nav>
    </>
  );
}

export default Navbar;
