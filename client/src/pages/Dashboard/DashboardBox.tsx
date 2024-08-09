// Created by Erikas Ramanauskas

import React from 'react';
import { Link } from 'react-router-dom';

type DashboardBoxProps = {
  title: string;
  content: string;
  backgroundImage: string;
  link: string;
};

const DashboardBox: React.FC<DashboardBoxProps> = ({
  title,
  content,
  backgroundImage,
  link,
}) => {
  return (
    <Link to={link} className="w-full">
      <div
        className="relative flex flex-col items-center justify-center rounded-md overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '200px',
          width: '100%',
          minWidth: '200px',
        }}
      >
        {/* Title always visible */}
        <div className="absolute top-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white text-center">
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>

        {/* Description overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-4">
          <div className="text-white text-center">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DashboardBox;
