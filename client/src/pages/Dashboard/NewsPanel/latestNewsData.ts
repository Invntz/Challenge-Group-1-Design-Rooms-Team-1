// Created by Erikas Ramanauskas

// Controls side panel for latest news data. To be replaced with Api call
const latestNewsData = [
  {
    id: 1,
    title: 'Anton shared their design',
    imageSrc: 'https://picsum.photos/200/300',
    comment: 'A cool new sneaker I sketched up.',
    link: 'https://example.com/design',
    user: {
      name: 'John Doe',
      imageSrc: 'https://picsum.photos/200/300',
      profileLink: 'https://example.com/profile/johndoe',
    },
  },
  {
    id: 2,
    title: "Erikas re-shared Michelle's design",
    imageSrc: 'https://picsum.photos/200/300',
    comment: 'Checkout this sustainable leather jacket I just designed!',
    link: 'https://example.com/feature',
    user: {
      name: 'Jane Smith',
      imageSrc: 'https://picsum.photos/200/300',
      profileLink: 'https://example.com/profile/janesmith',
    },
  },
  {
    id: 3,
    title: 'Afra shared their design',
    imageSrc: 'https://picsum.photos/200/300',
    comment: 'I just created my first design on Invntz!',
    link: 'https://example.com/project',
    user: {
      name: 'Bob Johnson',
      imageSrc: 'https://picsum.photos/200/300',
      profileLink: 'https://example.com/profile/bobjohnson',
    },
  },
];

export default latestNewsData;
