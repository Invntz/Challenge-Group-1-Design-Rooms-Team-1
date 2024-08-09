// Created by Ajithsan
// Edited by Erikas Ramanauskas

import React, { useRef } from 'react';

interface ImageUploadProps {
  onUpload: (image: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      onUpload(event.target.files[0]);
    }
  };

  return (
    <div className="border-dashed border-4 border-gray-300 rounded-lg p-4 text-center">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <button
        className="bg-primary text-white px-4 py-2 rounded"
        onClick={() => fileInputRef.current?.click()}
      >
        Upload Image
      </button>
    </div>
  );
};

export default ImageUpload;
