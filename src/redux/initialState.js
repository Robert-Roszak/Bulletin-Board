export const initialState = {
  posts: {
    data: [
      /* {
        id: 1,
        title: 'Title of the post',
        text: 'This is the content of the exemplary post',
        created: '06/12/2021',
        updated: '06/12/2021',
        author: 'jane.doe@example.com',
        status: 'published',
        photo: 'https://cdn.pixabay.com/photo/2019/01/21/16/15/nikon-lens-3946313_960_720.jpg',
        price: 50,
        phone: '+48777888999',
        location: 'Poland',
      },
      {
        id: 2,
        title: 'Zenit camera',
        text: 'Amazing camera for professional',
        created: '08/12/2021',
        updated: '',
        author: 'john.doe@example.com',
        status: 'published',
        photo: 'https://cdn.pixabay.com/photo/2019/10/30/08/38/zenit-4588985_960_720.jpg',
        price: 500,
        phone: '+48777888999',
        location: 'Poland',
      },
      {
        id: 3,
        title: 'Looking for Junior Frontend Developer',
        text: 'We are hiring Junior Frontend Developers, no commercial experience needed!',
        created: '08/12/2021',
        updated: '',
        author: 'just.hiring@example.com',
        status: 'published',
        photo: '',
        price: '',
        phone: '+48777888999',
        location: 'Poland / Remote',
      }, */
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  users: {
    isLogged: true,
    isAdmin: true,
    user: 'jane.doe@example.com',
  },
};
