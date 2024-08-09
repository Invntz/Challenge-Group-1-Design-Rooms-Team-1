import React from 'react';

interface Image {
  url: string;
  likes: number;
  comments: string[];
}

const ImageList = ({ images }: { images: Image[] }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Uploaded Images</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {images.map((image, index) => (
          <div key={index} className="border rounded-lg p-2">
            <img
              src={image.url}
              alt="Uploaded"
              className="w-full h-32 object-cover rounded"
            />
            <div className="mt-2 flex justify-between items-center">
              <span className="text-sm text-gray-600">Likes: {image.likes}</span>
              <button className="px-2 py-1 bg-blue-500 text-white rounded">Like</button>
            </div>
            <div className="mt-2">
              <h3 className="text-sm font-semibold">Comments:</h3>
              <ul>
                {image.comments.map((comment, idx) => (
                  <li key={idx} className="text-sm text-gray-700">
                    {comment}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
