// Created by Erikas Ramanauskas

import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import LatestNewsItem from './LatestNewsItem';
import latestNewsData from './latestNewsData';

type SideSlidingPanelProps = {
  navBarHeight: number;
  onToggle: (isOpen: boolean) => void;
};

const SideSlidingPanel: React.FC<SideSlidingPanelProps> = ({
  navBarHeight,
  onToggle,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    onToggle(newIsOpen);
  };

  return (
    <div
      className="fixed right-0 z-40 flex items-center"
      style={{
        top: navBarHeight,
        height: `calc(100vh - ${navBarHeight}px)`,
      }}
    >
      <div
        className={`bg-white dark:bg-boxdark-2 dark:text-bodydark  shadow-lg h-full transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          width: isOpen ? '300px' : '0px',
          overflow: 'hidden',
        }}
      >
        <div
          className="p-4 text-black dark:text-white"
          style={{
            height: '100%',
            overflowY: 'auto',
            paddingRight: '8px',
          }}
        >
          <h2 className="text-xl font-semibold mb-4">Follower activity</h2>
          {latestNewsData.map((newsItem) => (
            <LatestNewsItem
              key={newsItem.id}
              title={newsItem.title}
              imageSrc={newsItem.imageSrc}
              comment={newsItem.comment}
              link={newsItem.link} // Pass link prop
              user={newsItem.user} // Pass user prop
            />
          ))}
        </div>
      </div>

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
