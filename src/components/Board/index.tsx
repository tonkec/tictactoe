import { IGame } from '../Games/Games.interface';
import { useMakeMove } from './hooks';
import { getWinningCells } from './utils';

interface IBoardProps {
  game: IGame;
  isClickable?: boolean;
}

const Board = ({ game, isClickable }: IBoardProps) => {
  const { makeMoveMutatation } = useMakeMove();
  const id = Number(game.id);
  const { board, first_player, second_player } = game;
  const winningCells = getWinningCells(board);

  const playerSymbols = {
    [first_player?.id || '']: first_player ? 'X' : '',
    [second_player?.id || '']: second_player ? 'O' : '',
  };

  if (isClickable) {
    return (
      <div className="grid grid-cols-3 gap-4 w-[300px]">
        {board.map((row, rowIndex) =>
          row.map((value, colIndex) => (
            <div key={colIndex}>
              <button
                key={`${rowIndex}-${colIndex}`}
                className="w-24 h-24 flex justify-center items-center bg-blue text-white bg-white"
                onClick={() => {
                  console.log('clicked', rowIndex, colIndex);
                  const col = colIndex;
                  const row = rowIndex;
                  makeMoveMutatation({ id, row, col });
                }}
              >
                <span className="text-2xl">{playerSymbols[value] || ''}</span>
              </button>
            </div>
          )),
        )}
      </div>
    );
  }

  const renderCell = (value: number, row: number, col: number) => {
    const isWinningCell = winningCells.has(`${row}-${col}`);
    const symbol = playerSymbols[value] || '';

    return (
      <div
        key={`${row}-${col}`}
        className={`w-24 h-24 flex justify-center items-center bg-blue text-white ${
          isWinningCell ? 'bg-green-200' : 'bg-white'
        }`}
      >
        <span className="text-2xl">{symbol}</span>
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
