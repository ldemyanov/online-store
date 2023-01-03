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
      produced: 'Hans im Gluck',
    },
    quantity: 1,
    position: 0,
  },
  {
    game: {
      id: 212023001,
      name: 'Russian Railroads',
      price: 46.63,
      inStock: 124,
      rating: 4,
      description:
        'In Russian Railroads, players compete in an exciting race to build the largest and most advanced railway network. In order to do so, the players appoint their workers to various important tasks. The development of simple tracks will quickly bring the players to important places, while the modernization of their railway network will improve the efficiency of their machinery. Newer locomotives cover greater distances and factories churn out improved technology. Engineers, when used effectively, can be the extra boost that an empire needs to race past the competition.',
      numOfPlayers: 4,
      categories: ['strategy', 'cards', 'quiz'],
      images: [
        'https://live.staticflickr.com/65535/52602420904_8e39f2a664_c.jpg',
        'https://live.staticflickr.com/65535/52602674028_5912074b09_b.jpg',
        'https://live.staticflickr.com/65535/52601669267_a4973f3673_z.jpg',
        'https://live.staticflickr.com/65535/52602674033_5382fc821f_c.jpg',
      ],
      previewImg:
        'https://live.staticflickr.com/65535/52602674938_6260eb6289_z.jpg',
      produced: 'Hans im Gluck',
    },
    quantity: 1,
    position: 0,
  },
  {
    game: {
      id: 212023002,
      name: 'Tigris & Euphrates',
      price: 90.99,
      inStock: 57,
      rating: 4,
      description:
        "Regarded by many as Reiner Knizia's masterpiece, Tigris & Euphrates is set in the ancient fertile crescent with players building civilizations through tile placement. Players are given four different leaders: farming, trading, religion, and government. The leaders are used to collect victory points in these same categories. However, your score at the end of the game is the number of points in your weakest category, which encourages players not to get overly specialized. Conflict arises when civilizations connect on the board, i.e., external conflicts, with only one leader of each type surviving such a conflict. Leaders can also be replaced within a civilization through internal conflicts.",
      numOfPlayers: 4,
      categories: ['strategy', 'economy', 'quiz'],
      images: [
        'https://live.staticflickr.com/65535/52601681112_c557b0273a_z.jpg',
        'https://live.staticflickr.com/65535/52602432914_9e0bf5746d_z.jpg',
        'https://live.staticflickr.com/65535/52602685958_3110f82ae7_c.jpg',
        'https://live.staticflickr.com/65535/52602432889_dabc85ce7b_c.jpg',
      ],
      previewImg:
        'https://live.staticflickr.com/65535/52601681112_c557b0273a_z.jpg',
      produced: 'Hans im Gluck',
    },
    quantity: 1,
    position: 0,
  },
  {
    game: {
      id: 212023003,
      name: 'The Voyages of Marco Polo',
      price: 21.99,
      inStock: 7,
      rating: 4,
      description:
        'In The Voyages of Marco Polo, players recreate this journey, with each player having a different character from history with a special power in the game. The game is played over five rounds. Each round, the players roll their five personal dice and can perform one action each turn with them. Each action requires the use of one or more dice, and can be collecting resources or money, acquiring contracts or traveling on the board. When traveling, each player begins at Venice and can decide between several routes eastward, all the way to Beijing. When a player stops at a city, they place a trading post there, giving them access to extra actions or resources for the rest of the game. The higher the value of the dice used for an action, the better the options that may be chosen, but also the more money the player must pay if an opponent has already chosen the same action',
      numOfPlayers: 4,
      categories: ['strategy', 'economy'],
      images: [
        'https://live.staticflickr.com/65535/52602443289_15d98fbb04_z.jpg',
        'https://live.staticflickr.com/65535/52601691607_8175e700e8_c.jpg',
        'https://live.staticflickr.com/65535/52602611635_24fe452e48_c.jpg',
        'https://live.staticflickr.com/65535/52601691587_b441bf4918_c.jpg',
      ],
      previewImg:
        'https://live.staticflickr.com/65535/52602443269_966fd34417_n.jpg',
      produced: 'Hans im Gluck',
    },
    quantity: 1,
    position: 0,
  },
  {
    game: {
      id: 212023014,
      name: 'Dominion',
      price: 43.99,
      inStock: 33,
      rating: 3,
      description:
        "You are a monarch, like your parents before you, a ruler of a small pleasant kingdom of rivers and evergreens. Unlike your parents, however, you have hopes and dreams! You want a bigger and more pleasant kingdom, with more rivers and a wider variety of trees. You want a Dominion! In all directions lie fiefs, freeholds, and feodums. All are small bits of land, controlled by petty lords and verging on anarchy. You will bring civilization to these people, uniting them under your banner. But wait! It must be something in the air; several other monarchs have had the exact same idea. You must race to get as much of the unclaimed land as possible, fending them off along the way. To do this you will hire minions, construct buildings, spruce up your castle, and fill the coffers of your treasury. Your parents wouldn't be proud, but your grandparents, on your mother's side, would be delighted.",
      numOfPlayers: 3,
      categories: ['strategy', 'economy', 'cards'],
      images: [
        'https://live.staticflickr.com/65535/52602209131_73a36c5d9b_z.jpg',
        'https://live.staticflickr.com/65535/52602722908_98ff324c20_c.jpg',
        'https://live.staticflickr.com/65535/52602638435_89c02c812c_c.jpg',
        'https://live.staticflickr.com/65535/52602638460_d2b3b02cb1_c.jpg',
      ],
      previewImg:
        'https://live.staticflickr.com/65535/52602209131_73a36c5d9b_z.jpg',
      produced: 'Hans im Gluck',
    },
    quantity: 1,
    position: 0,
  },
  {
    game: {
      id: 212023015,
      name: 'Twilight Struggle',
      price: 51.99,
      inStock: 20,
      rating: 5,
      description:
        "Twilight Struggle inherits its fundamental systems from the card-driven classics We the People and Hannibal: Rome vs. Carthage. It is a quick-playing, low-complexity game in that tradition. The game map is a world map of the period, whereon players move units and exert influence in attempts to gain allies and control for their superpower. As with GMT's other card-driven games, decision-making is a challenge; how to best use one's cards and units given consistently limited resources? Twilight Struggle's Event cards add detail and flavor to the game. They cover a vast array of historical happenings, from the Arab-Israeli conflicts of 1948 and 1967, to Vietnam and the U.S. peace movement, to the Cuban Missile Crisis and other such incidents that brought the world to the brink of nuclear annihilation. Subsystems capture the prestige-laden Space Race as well as nuclear tensions, with the possibility of game-ending nuclear war.",
      numOfPlayers: 3,
      categories: ['strategy', 'cards'],
      images: [
        'https://live.staticflickr.com/65535/52602489084_e950b057ba_z.jpg',
        'https://live.staticflickr.com/65535/52602227896_6d929eda67_c.jpg',
        'https://live.staticflickr.com/65535/52602227886_d3540ccd12_z.jpg',
        'https://live.staticflickr.com/65535/52601737372_6668ce77ec_c.jpg',
      ],
      previewImg:
        'https://live.staticflickr.com/65535/52602742323_65fbe2d336_n.jpg',
      produced: 'GMT Games',
    },
    quantity: 1,
    position: 0,
  },
  {
    game: {
      id: 212023016,
      name: 'Dominant Species',
      price: 69.95,
      inStock: 2,
      rating: 5,
      description:
        "Dominant Species is a game that abstractly recreates a tiny portion of ancient history: the ponderous encroachment of an ice age and what that entails for the living creatures trying to adapt to the slowly-changing earth. Each player will assume the role of one of six major animal classes—mammal, reptile, bird, amphibian, arachnid, or insect. Each begins the game more or less in a state of natural balance in relation to one another. But that won’t last: It is indeed 'survival of the fittest'. Through wily action pawn placement, players will strive to become dominant on as many different terrain tiles as possible in order to claim powerful card effects. Players will also want to propagate their individual species in order to earn victory points for their particular animal. Players will be aided in these endeavors via speciation, migration, and adaptation actions, among others. All of this eventually leads to the end game—the final ascent of the ice age—where the player having accumulated the most victory points will have his animal crowned the Dominant Species.",
      numOfPlayers: 6,
      categories: ['strategy', 'kids'],
      images: [
        'https://live.staticflickr.com/65535/52601760112_3e3039a3f5_z.jpg',
        'https://live.staticflickr.com/65535/52602763773_6064e6c8af_c.jpg',
        'https://live.staticflickr.com/65535/52602511354_154883699b_c.jpg',
        'https://live.staticflickr.com/65535/52601760137_6f6fa21c01_c.jpg',
      ],
      previewImg:
        'https://live.staticflickr.com/65535/52601760182_7fb25c329d_m.jpg',
      produced: 'GMT Games',
    },
    quantity: 1,
    position: 0,
  },
  {
    game: {
      id: 212023017,
      name: '1846: The Race for the Midwest',
      price: 59.16,
      inStock: 91,
      rating: 5,
      description:
        '1846 is an 18XX game that traces the westward expansion of railways across the Midwestern United States. As in other 18XX games, the winner is the player with the greatest combined wealth (cash on hand + value of stock held + value of private companies owned) at the end of the game. Play proceeds in a series of stock rounds, each followed by a pair of operating rounds. In stock rounds, players act as investors buying and selling stock in corporations. During operating rounds, corporations will lay track, build stations, run trains for revenue to be paid out as dividends or withheld, and buy trains. The majority shareholder of each corporation acts at its president, making all decisions during operating rounds. Players will continue operating companies, collecting dividends, and reinvesting until the bank breaks.',
      numOfPlayers: 6,
      categories: ['strategy', 'economy'],
      images: [
        'https://live.staticflickr.com/65535/52602799073_0fef2d80e1_c.jpg',
        'https://live.staticflickr.com/65535/52602799098_0ec8b99e2f_c.jpg',
        'https://live.staticflickr.com/65535/52602716035_2477a02449_c.jpg',
        'https://live.staticflickr.com/65535/52602547359_ed3beb6d5e_c.jpg',
      ],
      previewImg:
        'https://live.staticflickr.com/65535/52602547369_e42ecf217d_z.jpg',
      produced: 'GMT Games',
    },
    quantity: 1,
    position: 0,
  },
];
