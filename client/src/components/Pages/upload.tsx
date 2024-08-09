import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import ImageList from './ImageList';

const upload = () => {
  const [images, setImages] = useState<Array<{ url: string; likes: number; comments: string[] }>>([]);

  const handleImageUpload = (image: File) => {
    const imageUrl = URL.createObjectURL(image);
    const newImage = {
      url: imageUrl,
      likes: 0,
      comments: [],
    };
    setImages((prevImages) => [newImage, ...prevImages.slice(0, 29)]); // Limit to 30 images
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center p-4">Image Upload and Gallery</h1>
      <ImageUpload onUpload={handleImageUpload} />
      <ImageList images={images} />
    </div>
  );
};

export default upload;
