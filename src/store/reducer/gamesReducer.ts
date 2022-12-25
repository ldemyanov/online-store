import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TGame, games } from './games';

type TRange = {
  min: number;
  max: number;
};

type TPageStoreState = {
  games: TGame[];
  filterPlayers: TRange;
  filterCountInStock: TRange;
  filterPrice: TRange;
};

const initialState: TPageStoreState = {
  games,
  filterPlayers: { min: 0, max: 25 },
  filterCountInStock: { min: 0, max: 100 },
  filterPrice: { min: 0, max: 1000 },
};

// To use only in reducers
function filterGames(state: TPageStoreState): TPageStoreState {
  console.log('Фильтрую');
  state.games = state.games.filter(
    (game) =>
      game.numOfPlayers > state.filterPlayers.min &&
      game.numOfPlayers < state.filterPlayers.max // &&
    // game.inStock > state.filterCountInStock.min &&
    // game.inStock < state.filterCountInStock.max &&
    // game.price > state.filterPrice.min &&
    // game.price < state.filterPrice.max
  );
  return state;
}

const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setNumOfPlayers(state, action: PayloadAction<TRange>) {
      state.filterPlayers = action.payload;
      state = filterGames(state);
    },
    setCountInStock(state, action: PayloadAction<TRange>) {
      state.filterCountInStock = action.payload;
      state = filterGames(state);
    },
    setPrice(state, action: PayloadAction<TRange>) {
      state.filterPrice = action.payload;
      state = filterGames(state);
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;
