import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCartGame, cartGames } from './cartGames';

type TGameState = {
  cartGames: TCartGame[];
  totalPrice: number;
};

type curGameID = {
  id: number;
};

const initialState: TGameState = {
  cartGames,
  totalPrice: 0,
};

const gameSlice = createSlice({
  name: 'cartGames',
  initialState,
  reducers: {
    incQuantity(state, action: PayloadAction<curGameID>) {
      state.cartGames = state.cartGames.map((game) => {
        const thisGame = { ...game };
        if (thisGame.quantity === thisGame.game.inStock) return thisGame;
        if (thisGame.game.id !== action.payload.id) return thisGame;
        thisGame.quantity += 1;
        return thisGame;
      });
      state.totalPrice = countTotalPrice(state);
    },
    decQuantity(state, action: PayloadAction<curGameID>) {
      let isZero = false;
      state.cartGames = state.cartGames.map((game) => {
        const thisGame = { ...game };
        if (thisGame.game.id !== action.payload.id) return thisGame;
        thisGame.quantity -= 1;
        if (thisGame.quantity === 0) isZero = true;
        return thisGame;
      });
      if (isZero) {
        removeGameFromCart(state, action);
        isZero = false;
      }
      state.totalPrice = countTotalPrice(state);
    },
    // removeGameFromCart(state, action: PayloadAction<curGameID>) {
    //   state.cartGames = state.cartGames.filter(
    //     (game) => game.game.id !== action.payload.id
    //   );
    // },
    // countTotalPrice(state) {
    //   state.totalPrice = state.cartGames.reduce(
    //     (total, game) => (total += game.game.price * game.quantity),
    //     0
    //   );
    // },
  },
});

function countTotalPrice(state: TGameState) {
  return state.cartGames.reduce(
    (total: number, game: TCartGame) =>
      (total += game.game.price * game.quantity),
    0
  );
}

function removeGameFromCart(
  state: TGameState,
  action: PayloadAction<curGameID>
) {
  state.cartGames = state.cartGames.filter(
    (game: TCartGame) => game.game.id !== action.payload.id
  );
}

export const cartGameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;
