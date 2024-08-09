// Created by Erikas ramanauskas

// Controls dashbord boxes data

import womensImage from '../../images/dashboard/womens.png';
import mensImage from '../../images/dashboard/mens.png';
import accessoriesImage from '../../images/dashboard/accessories.png';
import makeupImage from '../../images/dashboard/makeup_beauty.png';
import shoesImage from '../../images/dashboard/shoes.png';
import kidsImage from '../../images/dashboard/kids.png';

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
    backgroundImage: womensImage,
    link: '/calendar',
  },
  {
    id: 2,
    title: "Men's Clothing",
    content:
      'Explore a wide range of styles in men’s fashion, including suits, casual, and sportswear.',
    backgroundImage: mensImage,
    link: '/',
  },
  {
    id: 3,
    title: 'Accessories',
    content:
      'Elevate your outfit with our collection of accessories, from jewelry to handbags.',
    backgroundImage: accessoriesImage,
    link: '/',
  },
  {
    id: 4,
    title: 'Makeup & Beauty',
    content:
      'Find top beauty products and makeup essentials for a flawless look.',
    backgroundImage: makeupImage,
    link: '/',
  },
  {
    id: 5,
    title: 'Shoes',
    content:
      'Step up your style with our diverse selection of shoes for every occasion.',
    backgroundImage: shoesImage,
    link: '/',
  },
  {
    id: 6,
    title: 'Kids Clothes',
    content:
      'Shop the latest in kids’ fashion, from everyday essentials to special occasion outfits.',
    backgroundImage: kidsImage,
    link: '/',
  },
];

export default dashboardBoxesData;
