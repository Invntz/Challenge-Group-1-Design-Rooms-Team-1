// Created by Erikas Ramanauskas

import React from 'react';
import { FaThumbsUp, FaPlus, FaShare } from 'react-icons/fa';

type LatestNewsItemProps = {
  title: string;
  imageSrc: string;
  comment: string;
  link: string;
  user: {
    name: string;
    imageSrc: string;
    profileLink: string;
  };
};

const LatestNewsItem: React.FC<LatestNewsItemProps> = ({
  title,
  imageSrc,
  comment,
  link,
  user,
}) => {
  return (
    <div className="bg-white dark:bg-boxdark-2 dark:text-bodydark border border-gray-200 p-4 rounded-md shadow-md mb-4">
      <div className="flex items-center mb-4">
        <a href={user.profileLink} target="_blank" rel="noopener noreferrer">
          <img
            src={user.imageSrc}
            alt={user.name}
            className="w-10 h-10 object-cover rounded-full border border-gray-300 mr-3"
          />
        </a>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={imageSrc}
          alt="News"
          className="w-full h-32 object-cover rounded-md mb-2"
        />
      </a>
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
