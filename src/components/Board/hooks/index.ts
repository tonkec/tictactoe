import { IMoveProps, makeMove } from '@/api/games/makeMove';
import { Error, getErrorMessage } from '@/getErrorMessage';
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
      toast.error(getErrorMessage(err), toastConfig);
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
