import { useMakeMove } from './hooks';
import { getWinningCells } from './utils';
import { IBoardProps } from './Board.interface';
import { Loader } from '../Loader';

const Board = ({ game, isClickable }: IBoardProps) => {
  const id = Number(game.id);
  const { makeMoveMutatation, isMakingMove } = useMakeMove(id);
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
                className="w-24 h-24 flex justify-center items-center bg-blue dark:bg-yellow text-white dark:text-black"
                onClick={() => {
                  const col = colIndex;
                  const row = rowIndex;
                  makeMoveMutatation({ id, row, col });
                }}
              >
                {isMakingMove ? (
                  <Loader color="white" height={20} width={20} />
                ) : (
                  playerSymbols[value]
                )}
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
        className={`w-24 h-24 flex justify-center items-center text-white ${
          isWinningCell
            ? 'bg-green-200 dark:bg-blue'
            : 'bg-blue dark:bg-yellow text-white dark:text-black'
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
