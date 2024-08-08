import React, { useState } from 'react';
import SideSlidingPanel from '../../components/SideSlidingPanel';
import DashboardBox from '../../components/DashboardBox';

// Updated data array with 16 boxes
const dashboardBoxesData = [
  { id: 1, title: 'Box 1', content: 'This is box 1' },
  { id: 2, title: 'Box 2', content: 'This is box 2' },
  { id: 3, title: 'Box 3', content: 'This is box 3' },
  { id: 4, title: 'Box 4', content: 'This is box 4' },
  { id: 5, title: 'Box 5', content: 'This is box 5' },
  { id: 6, title: 'Box 6', content: 'This is box 6' },
  { id: 7, title: 'Box 7', content: 'This is box 7' },
  { id: 8, title: 'Box 8', content: 'This is box 8' },
  { id: 9, title: 'Box 9', content: 'This is box 9' },
  { id: 10, title: 'Box 10', content: 'This is box 10' },
  { id: 11, title: 'Box 11', content: 'This is box 11' },
  { id: 12, title: 'Box 12', content: 'This is box 12' },
  { id: 13, title: 'Box 13', content: 'This is box 13' },
  { id: 14, title: 'Box 14', content: 'This is box 14' },
  { id: 15, title: 'Box 15', content: 'This is box 15' },
  { id: 16, title: 'Box 16', content: 'This is box 16' },
];

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
        <h1 className="text-2xl font-bold mb-4">Main Content</h1>

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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
