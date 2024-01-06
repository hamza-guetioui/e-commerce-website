import Image from "next/image";
import React from "react";
import ExploreSection from "./ExploreSection";
import Slidebar from "./Slidebar";

function Index() {
  return (
    <div className="flex-center w-full h-[calc(100vh-5rem)] p-4 gap-3 ">
      {/* slidebar */}
      <Slidebar />
      {/*  ExploreSection: Curates items for user discovery and exploration */}
      <ExploreSection className="flex-center flex-col gap-3 w-4/12 h-full"/>
    </div>
  );
}

export default Index;
