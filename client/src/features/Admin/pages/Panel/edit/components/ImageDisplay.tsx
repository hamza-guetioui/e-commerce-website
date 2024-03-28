import React, { useEffect, useRef, useState } from "react";

function ImageDisplay() {

  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const displayImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (uploadedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (displayImageRef.current && e.target?.result) {
          displayImageRef.current.style.backgroundImage = `url("${e.target.result}")`;
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
    <div className="image-container">
      <label>image upload</label>
      <div ref={displayImageRef} className="dispaly-image ">
        <input type="file" name="image" onChange={handleFileInputChange} />
      </div>
    </div>
  );
}

export default ImageDisplay;
