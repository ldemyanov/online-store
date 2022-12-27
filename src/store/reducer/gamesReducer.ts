import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TGame, games } from './games';

type TRange = {
  min: number;
  max: number;
};

export enum ESortParam {
  rating = 'rating',
  price = 'price',
}

export enum ESortTrend {
  ascending = 'ascending',
  descending = 'descending',
}

type TSort = {
  param: ESortParam;
  trend: ESortTrend;
};

type TPageStoreState = {
  games: TGame[];
  filterPlayers: TRange;
  filterCountInStock: TRange;
  filterPrice: TRange;
  sort: TSort;
};

const initialState: TPageStoreState = {
  games,
  filterPlayers: { min: 0, max: 25 },
  filterCountInStock: { min: 0, max: 100 },
  filterPrice: { min: 0, max: 1000 },
  sort: { param: ESortParam.rating, trend: ESortTrend.descending },
};

// To use only in reducers
function filterGames(state: TPageStoreState): TGame[] {
  console.log('Фильтрую');
  state.games = games.filter(
    (game) =>
      game.numOfPlayers > state.filterPlayers.min &&
      game.numOfPlayers < state.filterPlayers.max &&
      game.inStock > state.filterCountInStock.min &&
      game.inStock < state.filterCountInStock.max &&
      game.price > state.filterPrice.min &&
      game.price < state.filterPrice.max
  );
  return state.games;
}

const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setNumOfPlayers(state, action: PayloadAction<TRange>) {
      state.filterPlayers = action.payload;
      state.games = filterGames(state);
    },
    setCountInStock(state, action: PayloadAction<TRange>) {
      state.filterCountInStock = action.payload;
      state.games = filterGames(state);
    },
    setPrice(state, action: PayloadAction<TRange>) {
      state.filterPrice = action.payload;
      state.games = filterGames(state);
    },
    sort(state, action: PayloadAction<TSort>) {
      console.log('ACTION PAYLOAD: ', action.payload);
      state.sort = action.payload;
      state.games = state.games.sort((game1, game2) => {
        if (action.payload.trend === ESortTrend.ascending) {
          return game1[action.payload.param] - game2[action.payload.param];
        } else {
          return game2[action.payload.param] - game1[action.payload.param];
        }
      });
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;
