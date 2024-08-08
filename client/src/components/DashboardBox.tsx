import React from 'react';

type DashboardBoxProps = {
  title: string;
  content: string;
  backgroundImage: string;
};

const DashboardBox: React.FC<DashboardBoxProps> = ({
  title,
  content,
  backgroundImage,
}) => {
  return (
    <div
      className="relative flex flex-col items-center justify-center rounded-md overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '200px', // Ensure sufficient height
        width: '100%', // Ensure full width of grid cell
        minWidth: '200px', // Ensure minimum width
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
  );
};

export default DashboardBox;
