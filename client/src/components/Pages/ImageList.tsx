// Created by Ajithsan
// Edited by Erikas Ramanauskas
import React from 'react';

interface ImageListProps {
  images: Array<{ url: string }>;
}

const ImageList: React.FC<ImageListProps> = ({ images }) => {
  return (
    <div>
      {images.map((image, index) => (
        <div key={index} className="border rounded-lg overflow-hidden">
          <img
            src={image.url}
            alt={`Uploaded ${index}`}
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
