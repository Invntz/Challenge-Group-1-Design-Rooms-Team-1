// Component created by Erikas Ramanauskas

// In a parrant elment add array of info boxes with title and description:

// const infoBoxes = [
//   { title: 'Box 1', description: 'This is the description for Box 1.' },
//   { title: 'Box 2', description: 'This is the description for Box 2.' },
//   { title: 'Box 3', description: 'This is the description for Box 3.' },
//   { title: 'Box 4', description: 'This is the description for Box 4.' },
//   { title: 'Box 5', description: 'This is the description for Box 5.' },
//   { title: 'Box 6', description: 'This is the description for Box 6.' },
//   { title: 'Box 7', description: 'This is the description for Box 7.' },
// ];

// and pass as:  <SlidingPanel boxes={infoBoxes} />

import React, { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type InfoBox = {
  title: string;
  description: string;
};

type SlidingPanelProps = {
  boxes: InfoBox[];
};

const SlidingPanel: React.FC<SlidingPanelProps> = ({ boxes }) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (panelRef.current) {
        setShowLeftArrow(panelRef.current.scrollLeft > 0);
        setShowRightArrow(
          panelRef.current.scrollLeft <
            panelRef.current.scrollWidth - panelRef.current.clientWidth,
        );
      }
    };

    const panelElement = panelRef.current;
    if (panelElement) {
      panelElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (panelElement) {
        panelElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const startDrag = (e: React.MouseEvent) => {
    if (panelRef.current) {
      setIsDragging(true);
      setStartPosition(e.pageX - panelRef.current.offsetLeft);
      setScrollLeft(panelRef.current.scrollLeft);
    }
  };

  const duringDrag = (e: React.MouseEvent) => {
    if (!isDragging || !panelRef.current) return;
    e.preventDefault();
    const x = e.pageX - panelRef.current.offsetLeft;
    const walk = (x - startPosition) * 2; // The multiplier controls the scroll speed
    panelRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  const scrollLeftClick = () => {
    if (panelRef.current) {
      panelRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRightClick = () => {
    if (panelRef.current) {
      panelRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full max-w-screen-lg mx-auto">
      {showLeftArrow && (
        <button
          className="absolute top-1/2 left-0 z-20 p-2 transform -translate-y-1/2 text-white bg-blue-600 rounded-full"
          onClick={scrollLeftClick}
        >
          <FaChevronLeft />
        </button>
      )}
      <div
        ref={panelRef}
        className="flex space-x-4 cursor-pointer overflow-x-scroll no-scrollbar"
        onMouseDown={startDrag}
        onMouseMove={duringDrag}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        {boxes.map((box, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 p-4 bg-gray-100 border border-gray-200 rounded-md"
          >
            <h3 className="text-lg font-semibold text-gray-800">{box.title}</h3>
            <p className="text-gray-600">{box.description}</p>
          </div>
        ))}
      </div>
      {showRightArrow && (
        <button
          className="absolute top-1/2 right-0 z-20 p-2 transform -translate-y-1/2 text-white bg-blue-600 rounded-full"
          onClick={scrollRightClick}
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
};

export default SlidingPanel;
