import React, { useState } from 'react';
import SideSlidingPanel from '../../components/SideSlidingPanel';
import DashboardBox from '../../components/DashboardBox';
import image1 from '../../images/cards/cards-01.png';
import image2 from '../../images/cards/cards-02.png';
import image3 from '../../images/cards/cards-03.png';
import image4 from '../../images/cards/cards-04.png';
import image5 from '../../images/cards/cards-05.png';

const dashboardBoxesData = [
  {
    id: 1,
    title: 'Box 1',
    content: 'This is box 1',
    backgroundImage: image1,
  },
  {
    id: 2,
    title: 'Box 2',
    content: 'This is box 2',
    backgroundImage: image2,
  },
  {
    id: 3,
    title: 'Box 3',
    content: 'This is box 3',
    backgroundImage: image3,
  },
  {
    id: 4,
    title: 'Box 4',
    content: 'This is box 4',
    backgroundImage: image4,
  },
  {
    id: 5,
    title: 'Box 5',
    content: 'This is box 5',
    backgroundImage: image5,
  },
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
              backgroundImage={box.backgroundImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
