// Created by Erikas Ramanauskas
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import LatestNewsItem from './LatestNewsItem';
import latestNewsData from './latestNewsData';

type SideSlidingPanelProps = {
  navBarHeight: number;
  onToggle: (isOpen: boolean) => void; // Callback to notify when panel is toggled
};

const SideSlidingPanel: React.FC<SideSlidingPanelProps> = ({
  navBarHeight,
  onToggle,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    onToggle(newIsOpen); // Notify the parent about the panel's state
  };

  return (
    <div
      className="fixed right-0 z-40 flex items-center"
      style={{
        top: navBarHeight,
        height: `calc(100vh - ${navBarHeight}px)`,
      }}
    >
      {/* Side panel */}
      <div
        className={`bg-white dark:bg-gray-800 shadow-lg h-full transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          width: isOpen ? '300px' : '0px', // Adjust width as needed
          overflow: 'hidden', // Hide default scrollbar
        }}
      >
        <div
          className="p-4 text-black dark:text-white"
          style={{
            height: '100%', // Ensure the content area fills the panel
            overflowY: 'auto', // Enable vertical scrolling
            paddingRight: '8px', // Optional: prevents content from hiding behind the scrollbar
          }}
        >
          <h2 className="text-xl font-semibold mb-4">Latest News</h2>
          {latestNewsData.map((newsItem) => (
            <LatestNewsItem
              key={newsItem.id}
              title={newsItem.title}
              imageSrc={newsItem.imageSrc}
              comment={newsItem.comment}
            />
          ))}
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={togglePanel}
        className={`fixed p-2 bg-blue-600 text-white rounded-full focus:outline-none transition-transform duration-300 ease-in-out transform ${
          isOpen ? '' : 'translate-x-full'
        }`}
        style={{
          top: `calc(50vh - 24px)`,
          right: isOpen ? '300px' : '32px',
        }}
      >
        {isOpen ? <FaChevronRight /> : <FaChevronLeft />}
      </button>
    </div>
  );
};

export default SideSlidingPanel;
