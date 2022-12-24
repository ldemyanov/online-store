import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCartGame, cartGames } from './cartGames';

type TGameState = {
  cartGames: TCartGame[];
};

type TRange = {
  min: number;
  max: number;
};

const initialState: TGameState = {
  cartGames,
};

const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setNumOfPlayers(state, action: PayloadAction<TRange>) {
      state.cartGames = initialState.cartGames.filter((game) => {
        const { min, max } = action.payload;
        return game.game.numOfPlayers >= min && game.game.numOfPlayers <= max;
      });
    },
  },
});

export const cartGameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;
