// Created by Erikas ramanauskas

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
  link: string;
}

const dashboardBoxesData: DashboardBoxData[] = [
  {
    id: 1,
    title: "Women's Clothing",
    content:
      'Discover the latest trends in women’s fashion, from casual wear to evening dresses.',
    backgroundImage: image1,
    link: '/calendar',
  },
  {
    id: 2,
    title: "Men's Clothing",
    content:
      'Explore a wide range of styles in men’s fashion, including suits, casual, and sportswear.',
    backgroundImage: image2,
    link: '/',
  },
  {
    id: 3,
    title: 'Accessories',
    content:
      'Elevate your outfit with our collection of accessories, from jewelry to handbags.',
    backgroundImage: image3,
    link: '/',
  },
  {
    id: 4,
    title: 'Makeup & Beauty',
    content:
      'Find top beauty products and makeup essentials for a flawless look.',
    backgroundImage: image4,
    link: '/',
  },
  {
    id: 5,
    title: 'Shoes',
    content:
      'Step up your style with our diverse selection of shoes for every occasion.',
    backgroundImage: image5,
    link: '/',
  },
  {
    id: 6,
    title: 'Kids Clothes',
    content:
      'Shop the latest in kids’ fashion, from everyday essentials to special occasion outfits.',
    backgroundImage: image1,
    link: '/',
  },
];

export default dashboardBoxesData;
