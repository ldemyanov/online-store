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
  position: number;
};

export const cartGames: TCartGame[] = [
  // {
  //   game: {
  //     id: 23272845354,
  //     name: 'Gloomhaven',
  //     price: 120.99,
  //     rating: 5,
  //     numOfPlayers: 5,
  //     categories: ['strategy', 'cards', 'quiz'],
  //     inStock: 13,
  //     images: [
  //       'https://live.staticflickr.com/65535/52573820618_ce5b98a77c_m.jpg',
  //       'https://live.staticflickr.com/65535/52563442461_eb68758353_b.jpg',
  //       'https://live.staticflickr.com/65535/52563902775_d0d2bfaeaa_c.jpg',
  //       'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
  //     ],
  //     description:
  //       'Gloomhaven is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world. Also, players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world.',
  //   },
  //   quantity: 1,
  //   position: 0,
  // },
  // {
  //   game: {
  //     id: 23272845,
  //     name: 'Game2',
  //     price: 150.99,
  //     rating: 2,
  //     numOfPlayers: 2,
  //     categories: ['strategy', 'cards'],
  //     inStock: 10,
  //     images: [
  //       'https://live.staticflickr.com/65535/52563902775_d0d2bfaeaa_c.jpg',
  //       'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
  //     ],
  //     description:
  //       'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
  //   },
  //   quantity: 1,
  //   position: 0,
  // },
  // {
  //   game: {
  //     id: 232728354,
  //     name: 'Gloomhaven3',
  //     price: 120.99,
  //     rating: 5,
  //     numOfPlayers: 5,
  //     categories: ['strategy', 'cards', 'quiz'],
  //     inStock: 13,
  //     images: [
  //       'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
  //     ],
  //     description:
  //       'Gloomhaven is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world. Also, players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world.',
  //   },
  //   quantity: 1,
  //   position: 0,
  // },
  // {
  //   game: {
  //     id: 23275666354,
  //     name: 'Gloomhaven4',
  //     price: 120.99,
  //     rating: 5,
  //     numOfPlayers: 5,
  //     categories: ['strategy', 'cards', 'quiz'],
  //     inStock: 13,
  //     images: [
  //       'https://live.staticflickr.com/65535/52563902775_d0d2bfaeaa_c.jpg',
  //       'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
  //     ],
  //     description:
  //       'Gloomhaven is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world. Also, players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world.',
  //   },
  //   quantity: 1,
  //   position: 0,
  // },
  // {
  //   game: {
  //     id: 232728888845,
  //     name: 'Game5',
  //     price: 150.99,
  //     rating: 2,
  //     numOfPlayers: 2,
  //     categories: ['strategy', 'cards'],
  //     inStock: 10,
  //     images: [
  //       'https://live.staticflickr.com/65535/52563902775_d0d2bfaeaa_c.jpg',
  //       'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
  //     ],
  //     description:
  //       'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
  //   },
  //   quantity: 1,
  //   position: 0,
  // },
  // {
  //   game: {
  //     id: 23272877745,
  //     name: 'Game6',
  //     price: 150.99,
  //     rating: 2,
  //     numOfPlayers: 2,
  //     categories: ['strategy', 'cards'],
  //     inStock: 10,
  //     images: [
  //       'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
  //     ],
  //     description:
  //       'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
  //   },
  //   quantity: 1,
  //   position: 0,
  // },
  // {
  //   game: {
  //     id: 23272844445,
  //     name: 'Game7',
  //     price: 150.99,
  //     rating: 2,
  //     numOfPlayers: 2,
  //     categories: ['strategy', 'cards'],
  //     inStock: 10,
  //     images: [
  //       'https://live.staticflickr.com/65535/52563902775_d0d2bfaeaa_c.jpg',
  //       'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
  //     ],
  //     description:
  //       'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
  //   },
  //   quantity: 1,
  //   position: 0,
  // },
  // {
  //   game: {
  //     id: 2327281115,
  //     name: 'Game8',
  //     price: 150.99,
  //     rating: 2,
  //     numOfPlayers: 2,
  //     categories: ['strategy', 'cards'],
  //     inStock: 10,
  //     images: [
  //       'https://live.staticflickr.com/65535/52563902775_d0d2bfaeaa_c.jpg',
  //       'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
  //     ],
  //     description:
  //       'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
  //   },
  //   quantity: 1,
  //   position: 0,
  // },
  // {
  //   game: {
  //     id: 23272222845,
  //     name: 'Game9',
  //     price: 150.99,
  //     rating: 2,
  //     numOfPlayers: 2,
  //     categories: ['strategy', 'cards'],
  //     inStock: 10,
  //     images: [
  //       'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
  //     ],
  //     description:
  //       'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
  //   },
  //   quantity: 1,
  //   position: 0,
  // },
  // {
  //   game: {
  //     id: 23272833345,
  //     name: 'Game10',
  //     price: 150.99,
  //     rating: 2,
  //     numOfPlayers: 2,
  //     categories: ['strategy', 'cards'],
  //     inStock: 10,
  //     images: [
  //       'https://live.staticflickr.com/65535/52563902775_d0d2bfaeaa_c.jpg',
  //       'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
  //     ],
  //     description:
  //       'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
  //   },
  //   quantity: 1,
  //   position: 0,
  // },
  // {
  //   game: {
  //     id: 23272844254535,
  //     name: 'Game11',
  //     price: 150.99,
  //     rating: 2,
  //     numOfPlayers: 2,
  //     categories: ['strategy', 'cards'],
  //     inStock: 10,
  //     images: [
  //       'https://live.staticflickr.com/65535/52563902775_d0d2bfaeaa_c.jpg',
  //       'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
  //     ],
  //     description:
  //       'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
  //   },
  //   quantity: 1,
  //   position: 0,
  // },
  // {
  //   game: {
  //     id: 2327279872845,
  //     name: 'Game12',
  //     price: 150.99,
  //     rating: 2,
  //     numOfPlayers: 2,
  //     categories: ['strategy', 'cards'],
  //     inStock: 10,
  //     images: [
  //       'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
  //     ],
  //     description:
  //       'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
  //   },
  //   quantity: 1,
  //   position: 0,
  // },
  // {
  //   game: {
  //     id: 23224877872845,
  //     name: 'Game13',
  //     price: 150.99,
  //     rating: 2,
  //     numOfPlayers: 2,
  //     categories: ['strategy', 'cards'],
  //     inStock: 10,
  //     images: [
  //       'https://live.staticflickr.com/65535/52563902775_d0d2bfaeaa_c.jpg',
  //       'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
  //     ],
  //     description:
  //       'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
  //   },
  //   quantity: 1,
  //   position: 0,
  // },
  // {
  //   game: {
  //     id: 2327289782845,
  //     name: 'Game14',
  //     price: 150.99,
  //     rating: 2,
  //     numOfPlayers: 2,
  //     categories: ['strategy', 'cards'],
  //     inStock: 10,
  //     images: [
  //       'https://live.staticflickr.com/65535/52563902775_d0d2bfaeaa_c.jpg',
  //       'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
  //     ],
  //     description:
  //       'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
  //   },
  //   quantity: 1,
  //   position: 0,
  // },
  // {
  //   game: {
  //     id: 23272464565845,
  //     name: 'Game15',
  //     price: 150.99,
  //     rating: 2,
  //     numOfPlayers: 2,
  //     categories: ['strategy', 'cards'],
  //     inStock: 10,
  //     images: [
  //       'https://live.staticflickr.com/65535/52563902775_d0d2bfaeaa_c.jpg',
  //       'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
  //     ],
  //     description:
  //       'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
  //   },
  //   quantity: 1,
  //   position: 0,
  // },
  // {
  //   game: {
  //     id: 23271312845,
  //     name: 'Game16',
  //     price: 150.99,
  //     rating: 2,
  //     numOfPlayers: 2,
  //     categories: ['strategy', 'cards'],
  //     inStock: 10,
  //     images: [
  //       'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
  //     ],
  //     description:
  //       'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
  //   },
  //   quantity: 1,
  //   position: 0,
  // },
  // {
  //   game: {
  //     id: 23279783892845,
  //     name: 'Game17',
  //     price: 150.99,
  //     rating: 2,
  //     numOfPlayers: 2,
  //     categories: ['strategy', 'cards'],
  //     inStock: 10,
  //     images: [
  //       'https://live.staticflickr.com/65535/52563902775_d0d2bfaeaa_c.jpg',
  //       'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
  //     ],
  //     description:
  //       'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
  //   },
  //   quantity: 1,
  //   position: 0,
  // },
  // {
  //   game: {
  //     id: 243483272845,
  //     name: 'Game18',
  //     price: 150.99,
  //     rating: 2,
  //     numOfPlayers: 2,
  //     categories: ['strategy', 'cards'],
  //     inStock: 10,
  //     images: [
  //       'https://live.staticflickr.com/65535/52563902775_d0d2bfaeaa_c.jpg',
  //       'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
  //     ],
  //     description:
  //       'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
  //   },
  //   quantity: 1,
  //   position: 0,
  // },
  // {
  //   game: {
  //     id: 232728783745,
  //     name: 'Game19',
  //     price: 150.99,
  //     rating: 2,
  //     numOfPlayers: 2,
  //     categories: ['strategy', 'cards'],
  //     inStock: 10,
  //     images: [
  //       'https://live.staticflickr.com/65535/52563902775_d0d2bfaeaa_c.jpg',
  //       'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
  //     ],
  //     description:
  //       'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
  //   },
  //   quantity: 1,
  //   position: 0,
  // },
  // {
  //   game: {
  //     id: 2327372845,
  //     name: 'Game20',
  //     price: 150.99,
  //     rating: 2,
  //     numOfPlayers: 2,
  //     categories: ['strategy', 'cards'],
  //     inStock: 10,
  //     images: [
  //       'https://live.staticflickr.com/65535/52563902775_d0d2bfaeaa_c.jpg',
  //       'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
  //     ],
  //     description:
  //       'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
  //   },
  //   quantity: 1,
  //   position: 0,
  // },
  // {
  //   game: {
  //     id: 23278672845,
  //     name: 'Game21',
  //     price: 150.99,
  //     rating: 2,
  //     numOfPlayers: 2,
  //     categories: ['strategy', 'cards'],
  //     inStock: 10,
  //     images: [
  //       'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
  //     ],
  //     description:
  //       'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
  //   },
  //   quantity: 1,
  //   position: 0,
  // },
  // {
  //   game: {
  //     id: 232722434845,
  //     name: 'Game22',
  //     price: 150.99,
  //     rating: 2,
  //     numOfPlayers: 2,
  //     categories: ['strategy', 'cards'],
  //     inStock: 10,
  //     images: [
  //       'https://live.staticflickr.com/65535/52563902775_d0d2bfaeaa_c.jpg',
  //       'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
  //     ],
  //     description:
  //       'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
  //   },
  //   quantity: 1,
  //   position: 0,
  // },
  // {
  //   game: {
  //     id: 23272782845,
  //     name: 'Game23',
  //     price: 150.99,
  //     rating: 2,
  //     numOfPlayers: 2,
  //     categories: ['strategy', 'cards'],
  //     inStock: 10,
  //     images: [
  //       'https://live.staticflickr.com/65535/52563902775_d0d2bfaeaa_c.jpg',
  //       'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
  //     ],
  //     description:
  //       'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
  //   },
  //   quantity: 1,
  //   position: 0,
  // },
  // {
  //   game: {
  //     id: 232728745,
  //     name: 'Game24',
  //     price: 150.99,
  //     rating: 2,
  //     numOfPlayers: 2,
  //     categories: ['strategy', 'cards'],
  //     inStock: 10,
  //     images: [
  //       'https://live.staticflickr.com/65535/52563902775_d0d2bfaeaa_c.jpg',
  //       'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
  //     ],
  //     description:
  //       'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
  //   },
  //   quantity: 1,
  //   position: 0,
  // },
];
