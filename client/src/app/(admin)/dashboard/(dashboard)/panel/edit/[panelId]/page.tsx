import React from "react";
import EditPanel from "@/features/Admin/pages/Panel/edit";

function page({ params }: { params: { panelId: string } }) {
  return (
    <>
      <EditPanel id={params.panelId} />
    </>
  );
}

export default page;
