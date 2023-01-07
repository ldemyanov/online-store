import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GAMES } from './games';
import * as types from './../../staticData/baseTypes';

// type TRange = {
//   min: number;
//   max: number;
// };

// export enum ESortParam {
//   rating = 'rating',
//   price = 'price',
// }

// export enum ESortTrend {
//   ascending = 'ascending',
//   descending = 'descending',
// }

// export enum ECategory {
//   strategy = 'strategy',
//   cards = 'cards',
//   quiz = 'quiz',
//   economy = 'economy',
//   kids = 'kids',
//   role = 'role',
// }

// export enum ELayout {
//   list = 'list',
//   cards = 'cards',
// }

// export type TSort = {
//   param: ESortParam;
//   trend: ESortTrend;
// };

// type TPageStoreState = {
//   games: TGame[];
//   filterText: string;
//   filterPlayers: TRange;
//   filterCountInStock: TRange;
//   filterPrice: TRange;
//   sort: TSort;
//   categories: ECategory[];
//   producers: string[];
//   layout: ELayout;
// };

const initialState: types.TPageStoreState = {
  games: GAMES,
  filterText: '',
  filterPlayers: { min: 1, max: 9 },
  filterCountInStock: { min: 0, max: 220 },
  filterPrice: { min: 5, max: 350 },
  sort: { param: types.ESortParam.rating, trend: types.ESortTrend.descending },
  categories: [],
  producers: [],
  layout: types.ELayout.cards,
};

// To use only in reducers
function filterGames(state: types.TPageStoreState): types.TGame[] {
  state.games = textFilter(GAMES, state.filterText);
  state.games = state.games.filter(
    (game) =>
      game.numOfPlayers > state.filterPlayers.min &&
      game.numOfPlayers < state.filterPlayers.max &&
      game.inStock > state.filterCountInStock.min &&
      game.inStock < state.filterCountInStock.max &&
      game.price > state.filterPrice.min &&
      game.price < state.filterPrice.max &&
      state.categories.every((cat) => game.categories.includes(cat)) &&
      (state.producers.length === 0 ||
        state.producers.find((prod) => prod === game.produced))
  );
  state.games = sortGames(state.games, state.sort);
  return state.games;
}

function sortGames(games: types.TGame[], sort: types.TSort): types.TGame[] {
  const { param, trend } = sort;
  return games.sort((game1, game2) => {
    if (trend === types.ESortTrend.ascending) {
      return game1[param] - game2[param];
    } else {
      return game2[param] - game1[param];
    }
  });
}

function textFilter(games: types.TGame[], text: string): types.TGame[] {
  const textLowered: string = text.toLowerCase();
  return games.filter((game) => {
    return (
      game.name.toLowerCase().includes(textLowered) ||
      game.description.toLowerCase().includes(textLowered) ||
      game.rating.toString().toLowerCase().includes(textLowered) ||
      game.categories.some((cat) => cat.toLowerCase().includes(textLowered)) ||
      game.produced.toLowerCase().includes(textLowered) ||
      game.price.toString().toLowerCase().includes(textLowered) ||
      game.inStock.toString().toLowerCase().includes(textLowered)
    );
  });
}

const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setNumOfPlayers(state, action: PayloadAction<types.TRange>) {
      state.filterPlayers = action.payload;
      state.games = filterGames(state);
    },
    setCountInStock(state, action: PayloadAction<types.TRange>) {
      state.filterCountInStock = action.payload;
      state.games = filterGames(state);
    },
    setPrice(state, action: PayloadAction<types.TRange>) {
      state.filterPrice = action.payload;
      state.games = filterGames(state);
    },
    sort(state, action: PayloadAction<types.TSort>) {
      state.sort = action.payload;
      state.games = sortGames(state.games, action.payload);
    },
    toggleCategory(state, action: PayloadAction<types.ECategory>) {
      state.categories = state.categories.includes(action.payload)
        ? state.categories.filter((cat) => cat !== action.payload)
        : [...state.categories, action.payload];
      state.games = filterGames(state);
    },
    toggleProd(state, action: PayloadAction<string>) {
      state.producers = state.producers.includes(action.payload)
        ? state.producers.filter((producer) => producer !== action.payload)
        : [...state.producers, action.payload];
      state.games = filterGames(state);
    },
    setTextFilter(state, action: PayloadAction<string>) {
      state.filterText = action.payload;
      state.games = filterGames(state);
    },
    setCategories(state, action: PayloadAction<types.ECategory[]>) {
      state.categories = action.payload;
      state.games = filterGames(state);
    },
    setLayout(state, action: PayloadAction<types.ELayout>) {
      state.layout = action.payload;
    },
    setProd(state, action: PayloadAction<string[]>) {
      state.producers = action.payload;
      console.log(state.producers);
    },
    reset() {
      return initialState;
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;
