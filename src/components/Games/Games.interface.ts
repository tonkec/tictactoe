type Board = (null | string | number)[][];

type Player = {
  id: string;
  username: string;
};

type Status = 'open' | 'finished';

export interface IGame {
  id: string;
  status: Status;
  board: Board;
  winner: Player | null;
  first_player: Player | null;
  second_player: Player | null;
  created: Date;
}
