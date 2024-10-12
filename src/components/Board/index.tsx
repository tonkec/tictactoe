const mapValuesToXO = (nestedArray: number[][]) => {
  if (!nestedArray) return [];

  const flatArray = nestedArray.flat();
  const uniqueValues = Array.from(new Set(flatArray));

  if (uniqueValues.length !== 2) {
    throw new Error('There should be exactly two distinct numbers.');
  }

  const [numX] = uniqueValues;

  return nestedArray.map((row) =>
    row.map((value) => (value === numX ? 'X' : 'O')),
  );
};

const Board = ({ board }: { board: number[][] }) => {
  const mappedBoard = mapValuesToXO(board);

  return (
    <div>
      {mappedBoard.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-2">
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className="w-16 mb-2 h-16 flex justify-center items-center bg-blue text-white rounded"
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export { Board };
