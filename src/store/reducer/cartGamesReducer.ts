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
  promoCodes: string[];
  discount: number;
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
  promoCodes: [],
  discount: 0,
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
      state.firstIndex = updateFirstIndex(state);
      state.lastIndex = updateLastIndex(state);
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
        state.cartGames = removeGameFromCart(state, action);
        state.cartGames = updatePosition(state);
        state.totalPages = countTotalPages(
          state.cartGames.length,
          state.itemsPerPage
        );
        state.currentPage = updateCurrentPage(state);
        state.firstIndex = updateFirstIndex(state);
        state.lastIndex = updateLastIndex(state);
      }
      state.totalPrice = countTotalPrice(state);
    },
    setItemsPerPage(state, action: PayloadAction<number>) {
      state.itemsPerPage = action.payload;
      state.totalPages = countTotalPages(
        state.cartGames.length,
        state.itemsPerPage
      );
      state.currentPage = updateCurrentPage(state);
      state.firstIndex = updateFirstIndex(state);
      state.lastIndex = updateLastIndex(state);
    },
    goToNextPage(state) {
      state.currentPage =
        state.currentPage < state.totalPages
          ? state.currentPage + 1
          : state.currentPage;
      state.firstIndex = updateFirstIndex(state);
      state.lastIndex = updateLastIndex(state);
    },
    goToPrevPage(state) {
      state.currentPage = state.currentPage > 1 ? state.currentPage - 1 : 1;
      state.firstIndex = updateFirstIndex(state);
      state.lastIndex = updateLastIndex(state);
    },
    goToPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
      state.firstIndex = updateFirstIndex(state);
      state.lastIndex = updateLastIndex(state);
    },
    initialData(state) {
      state.totalPrice = countTotalPrice(state);
      state.cartGames = updatePosition(state);
    },
    addPromo(state, action: PayloadAction<string>) {
      state.promoCodes = [action.payload, ...state.promoCodes];
      state.discount = updateDiscount(state.promoCodes);
    },
    removePromo(state, action: PayloadAction<number>) {
      state.promoCodes.splice(action.payload, 1);
      state.discount = updateDiscount(state.promoCodes);
    },
  },
});

////////////////helperFunctions

const allPromoCodes = ['ZEUS', 'MAFIA', 'ENTROPY', 'SLAANESH'];
const allDiscounts = [3, 5, 10, 20];

function updateDiscount(arr: string[]) {
  return arr
    .map((code) => allDiscounts[allPromoCodes.indexOf(code)])
    .reduce((ttl: number, val: number) => (ttl += val), 0);
}

function updatePosition(state: TCartPageState) {
  return state.cartGames.map((game, index) => {
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
  return state.cartGames.filter(
    (game: TCartGame) => game.game.id !== action.payload.id
  );
}

function countTotalPages(totalItems: number, itemsPerPage: number) {
  return totalItems % itemsPerPage === 0
    ? totalItems / itemsPerPage
    : Math.floor(totalItems / itemsPerPage) + 1;
}

function updateCurrentPage(state: TCartPageState) {
  if (state.totalPages < state.currentPage && state.totalPages > 0)
    return state.totalPages;
  if (state.totalPages === 0) return 1;
  return state.currentPage;
}

function updateFirstIndex(state: TCartPageState) {
  return state.itemsPerPage * state.currentPage - state.itemsPerPage;
}

function updateLastIndex(state: TCartPageState) {
  return state.firstIndex + state.itemsPerPage - 1;
}

export const cartGameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;
