import React, { useState } from 'react';

const ImageUpload = ({ onUpload }: { onUpload: (image: File) => void }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedImage) {
      onUpload(selectedImage);
      setSelectedImage(null);
    }
  };

  return (
    <div className="p-4">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
        <div className="mt-4">
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Preview"
            className="w-32 h-32 object-cover"
          />
          <button
            onClick={handleUpload}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Upload
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
