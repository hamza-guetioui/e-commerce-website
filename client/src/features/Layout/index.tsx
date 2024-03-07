import React from "react";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function Layout({ children }: { children: React.ReactNode }){

  return <>
    <Topbar />
    <Navbar />
    {children}
    <Footer />
  </>
}