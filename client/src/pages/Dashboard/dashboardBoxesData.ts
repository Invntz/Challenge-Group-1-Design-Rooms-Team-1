// Created by erikas ramanauskas

// Controls dashbord boxes data

import image1 from '../../images/cards/cards-01.png';
import image2 from '../../images/cards/cards-02.png';
import image3 from '../../images/cards/cards-03.png';
import image4 from '../../images/cards/cards-04.png';
import image5 from '../../images/cards/cards-05.png';

interface DashboardBoxData {
  id: number;
  title: string;
  content: string;
  backgroundImage: string;
}

const dashboardBoxesData: DashboardBoxData[] = [
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
  {
    id: 6,
    title: 'Box 6',
    content: 'This is box 6',
    backgroundImage: image1,
  },
  {
    id: 7,
    title: 'Box 7',
    content: 'This is box 7',
    backgroundImage: image2,
  },
  {
    id: 8,
    title: 'Box 8',
    content: 'This is box 8',
    backgroundImage: image3,
  },
  {
    id: 9,
    title: 'Box 9',
    content: 'This is box 9',
    backgroundImage: image4,
  },
  {
    id: 10,
    title: 'Box 10',
    content: 'This is box 10',
    backgroundImage: image5,
  },
];

export default dashboardBoxesData;
