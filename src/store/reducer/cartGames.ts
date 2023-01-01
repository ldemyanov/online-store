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
    previewImg: string;
    description: string;
    produced: string;
  };
  quantity: number;
  position: number;
};

export const cartGames: TCartGame[] = [
  {
    game: {
      id: 112023001,
      name: 'Wingspan',
      price: 59.99,
      inStock: 3,
      rating: 5,
      description:
        'You are bird enthusiasts—researchers, bird watchers, ornithologists, and collectors—seeking to discover and attract the best birds to your network of wildlife preserves. Each bird extends a chain of powerful combinations in one of your habitats (actions). These habitats focus on several key aspects of growth: Gain food tokens via custom dice in a birdfeeder dice tower lay eggs using egg miniatures in a variety of colors draw from hundreds of unique bird cards and play them the winner is the player with the most points after 4 rounds.',
      numOfPlayers: 5,
      categories: ['strategy', 'cards', 'quiz'],
      images: [
        'https://live.staticflickr.com/65535/52600024210_1b140fe346_z.jpg',
        'https://live.staticflickr.com/65535/52600024215_1bd20f72e3_z.jpg',
        'https://live.staticflickr.com/65535/52599106437_9d34180db0_z.jpg',
        'https://live.staticflickr.com/65535/52599106397_1c4afaf85d_z.jpg',
      ],
      previewImg:
        'https://live.staticflickr.com/65535/52599595656_df5c43b56f_m.jpg',
      produced: 'Stonemaier Games',
    },
    quantity: 1,
    position: 0,
  },
  {
    game: {
      id: 112023002,
      name: 'Scythe',
      price: 55.96,
      inStock: 23,
      rating: 4,
      description:
        "Scythe is an engine-building game set in an alternate-history 1920s period. It is a time of farming and war, broken hearts and rusted gears, innovation and valor. In Scythe, each player represents a character from one of five factions of Eastern Europe who are attempting to earn their fortune and claim their faction's stake in the land around the mysterious Factory. Players conquer territory, enlist new recruits, reap resources, gain villagers, build structures, and activate monstrous mechs.",
      numOfPlayers: 4,
      categories: ['strategy', 'cards', 'economy'],
      images: [
        'https://live.staticflickr.com/65535/52599859209_9539498349_c.jpg',
        'https://live.staticflickr.com/65535/52599597216_a1ac030489_c.jpg',
        'https://live.staticflickr.com/65535/52599859214_f1cb57d07c_c.jpg',
        'https://live.staticflickr.com/65535/52599859224_92c84ca99b_c.jpg',
      ],
      previewImg:
        'https://live.staticflickr.com/65535/52599859209_9539498349_c.jpg',
      produced: 'Stonemaier Games',
    },
    quantity: 1,
    position: 0,
  },
  {
    game: {
      id: 112023003,
      name: 'Charterstone',
      price: 42.64,
      inStock: 8,
      rating: 3,
      description:
        'The prosperous Kingdom of Greengully, ruled for centuries by the Forever King, has issued a decree to its citizens to colonize the vast lands beyond its borders. In an effort to start a new village, the Forever King has selected six citizens for the task, each of whom has a unique set of skills they use to build their charter. In Charterstone, a competitive legacy game, you construct buildings and populate a shared village. Building stickers are permanently added to the game board and become action spaces for any player to use. Thus, you start off with simple choices and few workers, but soon you have a bustling village with dozens of possible actions.',
      numOfPlayers: 6,
      categories: ['strategy', 'economy'],
      images: [
        'https://live.staticflickr.com/65535/52599109262_ebc28e7cd6_c.jpg',
        'https://live.staticflickr.com/65535/52599109272_d0b5af2d01_c.jpg',
        'https://live.staticflickr.com/65535/52599860369_f62a2bb789_c.jpg',
        'https://live.staticflickr.com/65535/52599109267_9e56f25787_c.jpg',
      ],
      previewImg:
        'https://live.staticflickr.com/65535/52599109262_ebc28e7cd6_c.jpg',
      produced: 'Stonemaier Games',
    },
    quantity: 1,
    position: 0,
  },
  {
    game: {
      id: 112023004,
      name: 'Between Two Castles of Mad King Ludwig',
      price: 62.14,
      inStock: 16,
      rating: 3,
      description:
        'The king demands a castle! You are a world-renowned master builder who has been asked by the Mad King Ludwig to help design his castles. Projects of such significance require the expertise of more than one person, so for each assignment you are paired with another master builder to execute your grandiose plans. Will your planning and collaborative skills be enough to design the most impressive castles in the world?',
      numOfPlayers: 7,
      categories: ['strategy', 'cards', 'role'],
      images: [
        'https://live.staticflickr.com/65535/52599110372_c825d293ca_z.jpg',
        'https://live.staticflickr.com/65535/52600120528_9cccd413cb_z.jpg',
        'https://live.staticflickr.com/65535/52599110377_31066c2e4a_c.jpg',
        'https://live.staticflickr.com/65535/52600027830_69dd9e4ea5_c.jpg',
      ],
      previewImg:
        'https://live.staticflickr.com/65535/52600120533_2bb2fd6676_m.jpg',
      produced: 'Stonemaier Games',
    },
    quantity: 1,
    position: 0,
  },
  {
    game: {
      id: 112023005,
      name: 'Tapestry',
      price: 73.37,
      inStock: 5,
      rating: 5,
      description:
        'Create the civilization with the most storied history, starting at the beginning of humankind and reaching into the future. The paths you choose will vary greatly from real-world events or people — your civilization is unique! In Tapestry, you start from nothing and advance on any of the four advancement tracks (science, technology, exploration, and military) to earn progressively better benefits. You can focus on a specific track or take a more balanced approach. You will also improve your income, build your capital city, leverage your asymmetric abilities, earn victory points, and gain tapestry cards that will tell the story of your civilization.',
      numOfPlayers: 3,
      categories: ['strategy', 'cards'],
      images: [
        'https://live.staticflickr.com/65535/52599600746_d4739e3453_z.jpg',
        'https://live.staticflickr.com/65535/52600029105_4ce38125e5_z.jpg',
        'https://live.staticflickr.com/65535/52599111597_417272ca75_c.jpg',
        'https://live.staticflickr.com/65535/52600121808_c3cbce552d_c.jpg',
      ],
      previewImg:
        'https://live.staticflickr.com/65535/52599862584_d86f025b4a_m.jpg',
      produced: 'Stonemaier Games',
    },
    quantity: 1,
    position: 0,
  },
  {
    game: {
      id: 112023006,
      name: 'Gloomhaven',
      price: 105.98,
      inStock: 13,
      rating: 5,
      description:
        'Gloomhaven is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world. Players must work together out of necessity to clear out menacing dungeons and forgotten ruins. In the process, they will enhance their abilities with experience and loot, discover new locations to explore and plunder, and expand an ever-branching story fueled by the decisions they make.',
      numOfPlayers: 4,
      categories: ['strategy', 'cards', 'role'],
      images: [
        'https://live.staticflickr.com/65535/52563027322_ca521b6a2d_c.jpg',
        'https://live.staticflickr.com/65535/52563902775_d0d2bfaeaa_c.jpg',
        'https://live.staticflickr.com/65535/52562985637_bd01cf5acf_b.jpg',
        'https://live.staticflickr.com/65535/52563442461_eb68758353_c.jpg',
      ],
      previewImg:
        'https://live.staticflickr.com/65535/52563027322_ca521b6a2d_c.jpg',
      produced: 'Cephalofair Games',
    },
    quantity: 1,
    position: 0,
  },
  {
    game: {
      id: 112023007,
      name: 'Forge War',
      price: 45.02,
      inStock: 14,
      rating: 3,
      description:
        'In Forge War, players will take on the role of blacksmiths in a kingdom rife with marauding harpies, cursed dungeons and fire-breathing dragons. They are charged with gathering ore from the mines, purchasing weapon designs from the market and then using these resources to forge weapons for adventurers who will go on quests to fight back the ever-deepening darkness. If the adventurers are successful, they will return with more ore, money and other rewards with which players can invest back into their burgeoning weaponsmithing empire.',
      numOfPlayers: 3,
      categories: ['strategy', 'economy', 'cards'],
      images: [
        'https://live.staticflickr.com/65535/52600030595_040ff5c238_z.jpg',
        'https://live.staticflickr.com/65535/52599113227_4ff6c6902c_c.jpg',
        'https://live.staticflickr.com/65535/52599113237_3b05b12823_c.jpg',
        'https://live.staticflickr.com/65535/52600123468_cfa332cdce_c.jpg',
      ],
      previewImg:
        'https://live.staticflickr.com/65535/52600030575_6644e42005_m.jpg',
      produced: 'Cephalofair Games',
    },
    quantity: 1,
    position: 0,
  },
  {
    game: {
      id: 112023008,
      name: 'Frosthaven',
      price: 170,
      inStock: 2,
      rating: 4,
      description:
        'Frosthaven is the story of a small outpost far to the north of the capital city of White Oak, an outpost barely surviving the harsh weather as well as invasions from forces both known and unknown. There, a group of mercenaries at the end of their rope will help bring back this settlement from the edge of destruction. Not only will they have to deal with the harsh elements, but there are other, far more dangerous threats out in the unforgiving cold as well. There are Algox, the bigger, more yeti-like cousins of the Inox, attacking from the mountains; Lurkers flooding in from the northern sea; and rumors of machines that wander the frozen wastes of their own free will. The party of mercenaries must face all of these perils, and perhaps in doing so, make peace with these new races so they can work together against even more sinister forces.',
      numOfPlayers: 3,
      categories: ['strategy', 'role', 'cards'],
      images: [
        'https://live.staticflickr.com/65535/52599865534_8f521c0dd8_c.jpg',
        'https://live.staticflickr.com/65535/52600032100_91ba18b266_c.jpg',
        'https://live.staticflickr.com/65535/52599603641_01770b4358_c.jpg',
        'https://live.staticflickr.com/65535/52599114452_6c8eeaa6f7_c.jpg',
      ],
      previewImg:
        'https://live.staticflickr.com/65535/52600124723_f24596907a_z.jpg',
      produced: 'Cephalofair Games',
    },
    quantity: 1,
    position: 0,
  },
  {
    game: {
      id: 112023009,
      name: 'Founders of Gloomhaven',
      price: 69.95,
      inStock: 32,
      rating: 2,
      description:
        'Founders of Gloomhaven is a competitive tile-placement, action-selection, city-building game in which each player controls a fantastical race working to build the city of Gloomhaven and gain influence over its residents. This is a standalone game set in the same universe as Gloomhaven. The events, however, take place hundreds of years before Gloomhaven and depict the original construction of the city.',
      numOfPlayers: 3,
      categories: ['strategy', 'role', 'cards', 'economy'],
      images: [
        'https://live.staticflickr.com/65535/52600125938_c5c0d7843f_z.jpg',
        'https://live.staticflickr.com/65535/52599115602_4613deae95_n.jpg',
        'https://live.staticflickr.com/65535/52599604951_77453e4490_z.jpg',
        'https://live.staticflickr.com/65535/52600125968_fd6cbab8c3_c.jpg',
      ],
      previewImg:
        'https://live.staticflickr.com/65535/52599115597_d5fb13526e_m.jpg',
      produced: 'Cephalofair Games',
    },
    quantity: 1,
    position: 0,
  },
  {
    game: {
      id: 112023010,
      name: 'Carcassonne',
      price: 33.99,
      inStock: 12,
      rating: 4,
      description:
        'Carcassonne is a tile-placement game in which the players draw and place a tile with a piece of southern French landscape on it. The tile might feature a city, a road, a cloister, grassland or some combination thereof, and it must be placed adjacent to tiles that have already been played, in such a way that cities are connected to cities, roads to roads, etcetera. Having placed a tile, the player can then decide to place one of their meeples on one of the areas on it: on the city as a knight, on the road as a robber, on a cloister as a monk, or on the grass as a farmer. When that area is complete, that meeple scores points for its owner.',
      numOfPlayers: 2,
      categories: ['strategy', 'role', 'cards', 'economy'],
      images: [
        'https://live.staticflickr.com/65535/52600038755_9dde8900f1_m.jpg',
        'https://live.staticflickr.com/65535/52599868529_591867a878_z.jpg',
        'https://live.staticflickr.com/65535/52599117172_4e5507103e_b.jpg',
        'https://live.staticflickr.com/65535/52599606531_53851261b2_z.jpg',
      ],
      previewImg:
        'https://live.staticflickr.com/65535/52599119922_ca21f10357_n.jpg',
      produced: 'Hans im Glück',
    },
    quantity: 1,
    position: 0,
  },
];
