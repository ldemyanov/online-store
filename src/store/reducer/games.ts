export type TGame = {
  id: number;
  name: string;
  manufacturer: string;
  price: number;
  rating: number;
  numOfPlayers: number;
  categories: string[];
  inStock: number;
  images: string[];
};

export const MANUFACTURES: string[] = [
  'Hobby World',
  'Magellan',
  // 'empty',
  // 'emty',
  // 'emty',
];

export const games: TGame[] = [
  {
    id: 1,
    name: 'Gloomhaven',
    manufacturer: 'Hobby World',
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
    id: 2,
    name: 'Game2',
    manufacturer: 'Magellan',
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
  {
    id: 3,
    name: 'Carcassonne',
    manufacturer: 'Hobby World',
    price: 200,
    rating: 5,
    numOfPlayers: 4,
    categories: ['strategy'],
    inStock: 5,
    images: [
      'https://gameguru.ru/media/f/wallpapers/3/1/42/5/1280.jpg',
      'https://lepreclub.ru/import_files/2b/2ba89a55e5e011e9910c9e4f0ff48d71_0c870d7d525e11ea9114a18611ac0c80.jpg',
    ],
  },
  {
    id: 4,
    name: 'Descent',
    manufacturer: 'Magellan',
    price: 700,
    rating: 3,
    numOfPlayers: 4,
    categories: ['strategy'],
    inStock: 2,
    images: [
      'https://i.pinimg.com/originals/c7/c2/d4/c7c2d4debc3953f0f073516794c56a51.jpg',
      'https://www.shutupandsitdown.com/wp-content/uploads/2019/06/fb1890b49de811e29dfff23c91709c91_1365163474.jpg',
    ],
  },
];
