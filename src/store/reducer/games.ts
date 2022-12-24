export type TGame = {
  id: number;
  name: string;
  price: number;
  rating: number;
  numOfPlayers: number;
  categories: string[];
  inStock: number;
  images: string[];
};

export const games: TGame[] = [
  {
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
  },
  {
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
  },
];
