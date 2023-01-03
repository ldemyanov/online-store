import { TGame } from './games';

export interface ICartGame {
  game: TGame;
  quantity: number;
  position: number;
}

export const cartGames: ICartGame[] = [];
