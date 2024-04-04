"use client";
import React, { useState, useEffect, useRef } from "react";
import style from "./Style.module.css";

interface FileInputProps {
  accept?: string;
  label?: string;
  name: string;
}
function ImageDisplay({ name, label, accept }: FileInputProps) {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const displayFileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (uploadedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (displayFileRef.current && e.target?.result) {
          displayFileRef.current.style.backgroundImage = `url("${e.target.result}")`;
        }
      };
      reader.readAsDataURL(uploadedImage);
    }
  }, [uploadedImage]);

  function handleFileInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setUploadedImage(file || null); // Update uploadedImage state
  }

  return (
    <div className={style.fileWrapper}>
      <label>{label || name}</label>
      <div ref={displayFileRef} className={style.displayFile}>
        <input
          type="file"
          name="image"
          accept={accept || accept}
          onChange={handleFileInputChange}
        />
      </div>
    </div>
  );
}

export default ImageDisplay;
