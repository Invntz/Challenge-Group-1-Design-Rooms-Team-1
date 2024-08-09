// Created by Erikas Ramanauskas

// Controls side panel for latest news data. To be replaced with Api call
const latestNewsData = [
  {
    id: 1,
    title: 'Person shared their design',
    imageSrc: 'https://picsum.photos/200/300',
    comment: 'This is a brief comment about the shared design.',
    link: 'https://example.com/design',
    user: {
      name: 'John Doe',
      imageSrc: 'https://picsum.photos/200/300',
      profileLink: 'https://example.com/profile/johndoe',
    },
  },
  {
    id: 2,
    title: 'New feature released',
    imageSrc: 'https://picsum.photos/200/300',
    comment: 'Check out the new feature we just released!',
    link: 'https://example.com/feature',
    user: {
      name: 'Jane Smith',
      imageSrc: 'https://picsum.photos/200/300',
      profileLink: 'https://example.com/profile/janesmith',
    },
  },
  {
    id: 3,
    title: 'Update on project',
    imageSrc: 'https://picsum.photos/200/300',
    comment: 'Here is the latest update on our ongoing project.',
    link: 'https://example.com/project',
    user: {
      name: 'Bob Johnson',
      imageSrc: 'https://picsum.photos/200/300',
      profileLink: 'https://example.com/profile/bobjohnson',
    },
  },
];

export default latestNewsData;
