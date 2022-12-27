import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCartGame, cartGames } from './cartGames';

type TCartPageState = {
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

const initialState: TCartPageState = {
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
        updatePosition(state);
        updatePages(state);
        assignGamesToRender(state);
        isZero = false;
      }
      state.totalPrice = countTotalPrice(state);
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
      state.currentPage = state.currentPage > 1 ? state.currentPage - 1 : 1;
      assignGamesToRender(state);
    },
    goToPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
      assignGamesToRender(state);
    },
    initialData(state) {
      state.totalPrice = countTotalPrice(state);
      updatePosition(state);
    },
  },
});

////////////////helperFunctions

function updatePosition(state: TCartPageState) {
  state.cartGames = state.cartGames.map((game, index) => {
    const thisGame = { ...game };
    thisGame.position = index + 1;
    return thisGame;
  });
}

function countTotalPrice(state: TCartPageState) {
  return state.cartGames.reduce(
    (total: number, game: TCartGame) =>
      (total += game.game.price * game.quantity),
    0
  );
}

function removeGameFromCart(
  state: TCartPageState,
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

function updatePages(state: TCartPageState) {
  state.totalPages = countTotalPages(
    state.cartGames.length,
    state.itemsPerPage
  );
  if (state.totalPages < state.currentPage && state.totalPages > 0)
    state.currentPage = state.totalPages;
  if (state.totalPages === 0) state.currentPage = 1;
}

function assignGamesToRender(state: TCartPageState) {
  state.firstIndex =
    state.itemsPerPage * state.currentPage - state.itemsPerPage;
  state.lastIndex = state.firstIndex + state.itemsPerPage - 1;
}

export const cartGameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;
