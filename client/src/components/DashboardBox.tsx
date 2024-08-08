//  Created by Erikas Ramanauskas

import React from 'react';

type DashboardBoxProps = {
  title: string;
  content: string;
};

const DashboardBox: React.FC<DashboardBoxProps> = ({ title, content }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg p-4 flex items-center justify-center rounded-md text-center">
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default DashboardBox;
