"use client";
import { useState } from "react";
import { CldImage, CldUploadWidget } from "next-cloudinary";

const UploadImage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <div>
      <CldUploadWidget
        uploadPreset="fistchoicecarpet"
        onSuccess={({ event, info }) => {
          if (event === "success") {
            if (info && typeof info !== "string" && "secure_url" in info) {
              console.log(info.secure_url);
              setPublicId(info.secure_url);
            } else {
              console.error("Upload failed or returned unexpected info");
            }
          }
        }}
      >
        {({ open }) => (
          <button
            className="bg-red-600 text-white p-4 rounded-lg"
            onClick={() => open()}
          >
            Upload
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default UploadImage;
