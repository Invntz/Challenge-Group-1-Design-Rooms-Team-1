// Created by Erikas Ramanauskas

import React, { useState } from 'react';
import SideSlidingPanel from '../../components/NewsPanel/SideSlidingPanel';
import DashboardBox from '../../components/DashboardBox';
import dashboardBoxesData from './dashboardBoxesData';

const App: React.FC = () => {
  const navBarHeight = 80; // Example: 80px for the height of the top navigation bar
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handlePanelToggle = (isOpen: boolean) => {
    setIsPanelOpen(isOpen);
  };

  return (
    <div className="relative h-screen bg-gray-100 flex overflow-hidden">
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
