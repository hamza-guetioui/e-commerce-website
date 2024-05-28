import React from "react";
import Panel from "./Panel";


const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const getPanel = async () => {
  try {
    const response = await fetch(`${apiUrl}/panels?type=slider&limit=3`,{ next: { tags: ['panels'] }});
    if (!response.ok) throw new Error(response.statusText);
    const { data } = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

async function SlidePanel() {
  const swiperData = await getPanel()
  return <Panel swiperData={swiperData} />;
}

export default SlidePanel;
