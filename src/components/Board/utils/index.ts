const allEqual = (arr: number[]) => arr.every((val) => val === arr[0]);

export const getWinningCells = (board: number[][]) => {
  if (!board) return new Set();

  if (board.flat().every((cell) => cell === null)) {
    return new Set();
  }

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
