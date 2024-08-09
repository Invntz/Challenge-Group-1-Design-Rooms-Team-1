// Created by Erikas Ramanauskas

import React, { useState } from 'react';
import SideSlidingPanel from './NewsPanel/SideSlidingPanel';
import DashboardBox from './DashboardBox';
import dashboardBoxesData from './dashboardBoxesData';
import SlidingPanel from '@/pages/Dashboard/components/SlidingPanel';

const infoBoxes = [
  { title: 'Box 1', description: 'This is the description for Box 1.' },
  { title: 'Box 2', description: 'This is the description for Box 2.' },
  { title: 'Box 3', description: 'This is the description for Box 3.' },
  { title: 'Box 4', description: 'This is the description for Box 4.' },
  { title: 'Box 5', description: 'This is the description for Box 5.' },
  { title: 'Box 6', description: 'This is the description for Box 6.' },
  { title: 'Box 7', description: 'This is the description for Box 7.' },
];

const App: React.FC = () => {
  const navBarHeight = 80; // Eddif depending on the size of navbar
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handlePanelToggle = (isOpen: boolean) => {
    setIsPanelOpen(isOpen);
  };

  return (
    <>
      <div>
        <SideSlidingPanel
          navBarHeight={navBarHeight}
          onToggle={handlePanelToggle}
        />

        <div
          className={`pt-4 p-4 transition-all duration-300 ease-in-out flex-1 ${
            isPanelOpen ? 'ml-0' : ''
          }`}
          style={{
            maxWidth: isPanelOpen ? 'calc(100% - 300px)' : '100%',
          }}
        >
          {/* Responsive Grid of DashboardBoxes */}
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
            }}
          >
            {dashboardBoxesData.map((box) => (
              <DashboardBox
                key={box.id}
                title={box.title}
                content={box.content}
                backgroundImage={box.backgroundImage}
                link={box.link}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`pt-4 p-4 transition-all duration-300 ease-in-out flex-1 ${
          isPanelOpen ? 'ml-0' : ''
        }`}
        style={{
          maxWidth: isPanelOpen ? 'calc(100% - 300px)' : '100%',
        }}
      >
        <SlidingPanel boxes={infoBoxes} />
      </div>
    </>
  );
};

export default App;
