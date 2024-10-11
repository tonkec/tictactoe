import { useMutation } from '@tanstack/react-query';
import { createNewGame } from '../../../api/games/createNewGame';

function useNewGame() {
    const { mutate: postNewGame, isPending: isCreating, isError: isCreateGameError, isSuccess: isCreateGameSuccess } = useMutation({
      mutationFn: () =>
        createNewGame(),
      onSuccess: (data) => {
        console.log('game created:', data);

      },
      onError: (err: Error) => console.log('error while creating game:', err), 
    });
  
    return { isCreating, postNewGame, isCreateGameError, isCreateGameSuccess };
  }

export { useNewGame };
