import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
      style={{ top: navBarHeight, height: `calc(100vh - ${navBarHeight}px)` }}
    >
      {/* Side panel */}
      <div
        className={`bg-white dark:bg-gray-800 shadow-lg h-full transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: '300px' }} // Adjust width as needed
      >
        <div className="p-4 text-black dark:text-white">
          <h2 className="text-xl font-semibold">Side Panel Content</h2>
          <p className="mt-2">
            This is where you can add your navigation or any other content.
          </p>
          {/* Add more content or navigation items here */}
        </div>
      </div>
      {/* Toggle button */}
      <button
        onClick={togglePanel}
        className={`fixed top-${
          navBarHeight + 16
        } right-0 z-50 p-2 bg-blue-600 text-white rounded-full focus:outline-none transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-1/2'
        }`}
        style={{ marginRight: isOpen ? '300px' : '0px' }} // Adjust based on panel width
      >
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </button>
    </div>
  );
};

export default SideSlidingPanel;
