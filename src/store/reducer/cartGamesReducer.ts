import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCartGame, cartGames } from './cartGames';

type TGameState = {
  cartGames: TCartGame[];
  totalPrice: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
  firstIndex: number;
  lastIndex: number;
};

type curGameID = {
  id: number;
};

const initialState: TGameState = {
  cartGames,
  totalPrice: 0,
  itemsPerPage: 8,
  totalPages: 0,
  currentPage: 1,
  firstIndex: 0,
  lastIndex: 8,
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
      assignGamesToRender(state);
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
      updatePages(state);
      assignGamesToRender(state);
    },
    setItemsPerPage(state, action: PayloadAction<number>) {
      state.itemsPerPage = action.payload;
      updatePages(state);
      assignGamesToRender(state);
    },
    goToNextPage(state) {
      state.currentPage =
        state.currentPage < state.totalPages
          ? state.currentPage + 1
          : state.currentPage;
      assignGamesToRender(state);
    },
    goToPrevPage(state) {
      state.currentPage =
        state.currentPage > 1 ? state.currentPage - 1 : state.currentPage;
      assignGamesToRender(state);
    },
  },
});

////////////////helperFunctions

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

function countTotalPages(totalItems: number, itemsPerPage: number) {
  return totalItems % itemsPerPage === 0
    ? totalItems / itemsPerPage
    : Math.floor(totalItems / itemsPerPage) + 1;
}

function updatePages(state: TGameState) {
  state.totalPages = countTotalPages(
    state.cartGames.length,
    state.itemsPerPage
  );
  if (state.totalPages < state.currentPage)
    state.currentPage = state.totalPages;
}

function assignGamesToRender(state: TGameState) {
  state.firstIndex =
    state.itemsPerPage * state.currentPage - state.itemsPerPage;
  state.lastIndex = state.firstIndex + state.itemsPerPage - 1;
}

export const cartGameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;
