import { IMoveProps, makeMove } from '@/api/games/makeMove';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useMakeMove = (id: number) => {
  const queryClient = useQueryClient();

  const {
    mutate: makeMoveMutatation,
    isPending: isMakingMove,
    isError: makeMoveError,
    isSuccess: isMoveSuccess,
  } = useMutation({
    mutationFn: ({ id, row, col }: IMoveProps) => makeMove({ id, row, col }),
    onSuccess: () => {
      console.log(id);
      return queryClient.invalidateQueries({ queryKey: [`game`, id] });
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
