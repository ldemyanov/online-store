import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { gameReducer } from './reducer/gamesReducer';
import { cartGameReducer } from './reducer/cartGamesReducer';

const appReducer = combineReducers({
  gameReducer,
  cartGameReducer,
});

export const appStore = () => {
  return configureStore({
    reducer: appReducer,
  });
};

type TAppReducer = ReturnType<typeof appReducer>;
type TAppStore = ReturnType<typeof appStore>;
type TAppDispatch = TAppStore['dispatch'];

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TAppReducer> = useSelector;
