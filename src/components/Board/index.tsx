import { IGame } from '../Games/Games.interface';

const allEqual = (arr: number[]) => arr.every((val) => val === arr[0]);

const getWinningCells = (board: number[][]) => {
  if (!board) return new Set();
  const winningCells: Set<string> = new Set();

  for (let i = 0; i < 3; i++) {
    if (allEqual(board[i])) {
      for (let j = 0; j < 3; j++) {
        winningCells.add(`${i}-${j}`);
      }
    }
  }

  for (let j = 0; j < 3; j++) {
    if (allEqual([board[0][j], board[1][j], board[2][j]])) {
      for (let i = 0; i < 3; i++) {
        winningCells.add(`${i}-${j}`);
      }
    }
  }

  if (allEqual([board[0][0], board[1][1], board[2][2]])) {
    winningCells.add('0-0');
    winningCells.add('1-1');
    winningCells.add('2-2');
  }

  if (allEqual([board[0][2], board[1][1], board[2][0]])) {
    winningCells.add('0-2');
    winningCells.add('1-1');
    winningCells.add('2-0');
  }

  return winningCells;
};

interface IBoardProps {
  game: IGame;
}

const Board = ({ game }: IBoardProps) => {
  const { board, first_player, second_player } = game;
  const winningCells = getWinningCells(board);

  const playerSymbols = {
    [first_player?.id || '']: first_player ? 'X' : '',
    [second_player?.id || '']: second_player ? 'O' : '',
  };

  const renderCell = (value: number, row: number, col: number) => {
    const isWinningCell = winningCells.has(`${row}-${col}`);
    const symbol = playerSymbols[value] || ''; // Get symbol for player ID

    return (
      <div
        key={`${row}-${col}`}
        className={`w-24 h-24 flex justify-center items-center border border-black ${
          isWinningCell ? 'bg-green-200' : 'bg-white'
        }`}
      >
        {symbol}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-3 gap-4 w-[300px]">
      {board.map((row, rowIndex) =>
        row.map((value, colIndex) => renderCell(value, rowIndex, colIndex)),
      )}
    </div>
  );
};

export { Board };
