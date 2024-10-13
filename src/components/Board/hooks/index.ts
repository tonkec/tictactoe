import { IMoveProps, makeMove } from '@/api/games/makeMove';
import { useMutation } from '@tanstack/react-query';

const useMakeMove = () => {
  const {
    mutate: makeMoveMutatation,
    isPending: isMakingMove,
    isError: makeMoveError,
    isSuccess: isMoveSuccess,
  } = useMutation({
    mutationFn: ({ id, row, col }: IMoveProps) => makeMove({ id, row, col }),
    onSuccess: () => {
      console.log('game joined successfully');
    },
    onError: (err: Error) =>
      console.log('error while joining the game:', err.message),
  });

  return {
    makeMoveMutatation,
    isMakingMove,
    makeMoveError,
    isMoveSuccess,
  };
};

export { useMakeMove };
