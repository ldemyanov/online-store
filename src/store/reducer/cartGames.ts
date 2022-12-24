export type TCartGame = {
  game: {
    id: number;
    name: string;
    price: number;
    rating: number;
    numOfPlayers: number;
    categories: string[];
    inStock: number;
    images: string[];
    description: string;
  };
  quantity: number;
};

export const cartGames: TCartGame[] = [
  {
    game: {
      id: 23272845354,
      name: 'Gloomhaven',
      price: 120.99,
      rating: 5,
      numOfPlayers: 5,
      categories: ['strategy', 'cards', 'quiz'],
      inStock: 13,
      images: [
        'https://live.staticflickr.com/65535/52573820618_ce5b98a77c_m.jpg',
        'https://live.staticflickr.com/65535/52563442461_eb68758353_b.jpg',
        'https://live.staticflickr.com/65535/52563902775_d0d2bfaeaa_c.jpg',
        'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
      ],
      description:
        'Gloomhaven is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world. Also, players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world.',
    },
    quantity: 1,
  },
  {
    game: {
      id: 23272845,
      name: 'Game2',
      price: 150.99,
      rating: 2,
      numOfPlayers: 2,
      categories: ['strategy', 'cards'],
      inStock: 10,
      images: [
        'https://live.staticflickr.com/65535/52563902775_d0d2bfaeaa_c.jpg',
        'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
      ],
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
    },
    quantity: 2,
  },
];
