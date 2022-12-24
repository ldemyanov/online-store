import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCartGame, cartGames } from './cartGames';

type TGameState = {
  cartGames: TCartGame[];
};

type curMaxQuantity = {
  id: number;
};

const initialState: TGameState = {
  cartGames,
};

const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    incQuantity(state, action: PayloadAction<curMaxQuantity>) {
      state.cartGames = state.cartGames.map((game) => {
        const thisGame = { ...game };
        if (thisGame.quantity === thisGame.game.inStock) return thisGame;
        if (thisGame.game.id !== action.payload.id) return thisGame;
        thisGame.quantity += 1;
        return thisGame;
      });
    },
    decQuantity(state, action: PayloadAction<curMaxQuantity>) {
      state.cartGames = state.cartGames.map((game) => {
        const thisGame = { ...game };
        if (thisGame.quantity === 0) return thisGame;
        if (thisGame.game.id !== action.payload.id) return thisGame;
        thisGame.quantity -= 1;
        return thisGame;
      });
    },
  },
});

export const cartGameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;
