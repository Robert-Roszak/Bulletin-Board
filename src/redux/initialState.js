export const initialState = {
  posts: {
    data: [
      {
        id: 1,
        title: 'Title of the post',
        content: 'This is the content of the exemplary post',
        datePublished: '06/12/2021',
        dateUpdated: 'n/a',
        authorEmail: 'john.doe@example.com',
        status: 'published',
        /* optional below */
        picture: 'https://cdn.pixabay.com/photo/2019/01/21/16/15/nikon-lens-3946313_960_720.jpg',
        price: 50,
        phoneNumber: '+48777888999',
        location: 'Poland',
      },
      {
        id: 2,
        title: 'Title of the post',
        content: 'This is the content of the exemplary post',
        datePublished: '06/12/2021',
        dateUpdated: 'n/a',
        authorEmail: 'john.doe@example.com',
        status: 'published',
        /* optional below */
        picture: 'https://cdn.pixabay.com/photo/2019/01/21/16/15/nikon-lens-3946313_960_720.jpg',
        price: 50,
        phoneNumber: '+48777888999',
        location: 'Poland',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  users: {
    isLogged: true,
  },
};
