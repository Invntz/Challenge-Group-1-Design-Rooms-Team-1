// Created by Erikas Ramanauskas

import React from 'react';
import { FaThumbsUp, FaPlus, FaShare } from 'react-icons/fa';

type LatestNewsItemProps = {
  title: string;
  imageSrc: string;
  comment: string;
};

const LatestNewsItem: React.FC<LatestNewsItemProps> = ({
  title,
  imageSrc,
  comment,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md mb-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <img
        src={imageSrc}
        alt="News"
        className="w-full h-32 object-cover rounded-md mb-2"
      />
      <p className="text-gray-700 dark:text-gray-300 mb-2">{comment}</p>
      <div className="flex space-x-2">
        <button className="text-blue-600 dark:text-blue-400">
          <FaThumbsUp />
        </button>
        <button className="text-green-600 dark:text-green-400">
          <FaPlus />
        </button>
        <button className="text-yellow-600 dark:text-yellow-400">
          <FaShare />
        </button>
      </div>
    </div>
  );
};

export default LatestNewsItem;
