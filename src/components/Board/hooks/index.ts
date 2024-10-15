import { IMoveProps, makeMove } from '@/api/games/makeMove';
import { toastConfig } from '@/toast.config';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

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
      toast.success('Successfully made the move!', toastConfig);
      return queryClient.invalidateQueries({ queryKey: [`game`, id] });
    },
    onError: (err: Error) => {
      console.error(err);
      toast.error('There was an error making the move', toastConfig);
    },
  });

  return {
    makeMoveMutatation,
    isMakingMove,
    makeMoveError,
    isMoveSuccess,
  };
};

export { useMakeMove };
