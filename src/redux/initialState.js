export const initialState = {
  posts: {
    data: [
      {
        id: 1,
        title: 'Title of the post',
        content: 'This is the content of the exemplary post',
        datePublished: '06/12/2021',
        dateUpdated: '06/12/2021',
        authorEmail: 'jane.doe@example.com',
        status: 'Published',
        /* optional below */
        picture: 'https://cdn.pixabay.com/photo/2019/01/21/16/15/nikon-lens-3946313_960_720.jpg',
        price: 50,
        phoneNumber: '+48777888999',
        adLocation: 'Poland',
      },
      {
        id: 2,
        title: 'Zenit camera',
        content: 'Amazing camera for professional',
        datePublished: '08/12/2021',
        dateUpdated: '',
        authorEmail: 'john.doe@example.com',
        status: 'published',
        /* optional below */
        picture: 'https://cdn.pixabay.com/photo/2019/10/30/08/38/zenit-4588985_960_720.jpg',
        price: 500,
        phoneNumber: '+48777888999',
        location: 'Poland',
      },
      {
        id: 3,
        title: 'Looking for Junior Frontend Developer',
        content: 'We are hiring Junior Frontend Developers, no commercial experience needed!',
        datePublished: '08/12/2021',
        dateUpdated: '',
        authorEmail: 'just.hiring@example.com',
        status: 'published',
        /* optional below */
        picture: '',
        price: '',
        phoneNumber: '+48777888999',
        location: 'Poland / Remote',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  users: {
    isLogged: true,
    isAdmin: false,
    user: 'jane.doe@example.com',
  },
};
