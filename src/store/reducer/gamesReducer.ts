import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TGame, games } from './games';

type TGameState = {
  games: TGame[];
};

type TRange = {
  min: number;
  max: number;
};

const initialState: TGameState = {
  games,
};

const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setNumOfPlayers(state, action: PayloadAction<TRange>) {
      state.games = state.games.filter((game) => {
        const { min, max } = action.payload;
        return game.numOfPlayers > min && game.numOfPlayers < max;
      });
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;
