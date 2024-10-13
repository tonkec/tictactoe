import { useMutation } from '@tanstack/react-query';
import { logout } from '../../../api/auth/logout';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '@uidotdev/usehooks';
import { createNewGame } from '../../../api/games/createNewGame';

function useLogoutUser() {
  const navigate = useNavigate();
  const [, saveAuthToken] = useLocalStorage('token', null);

  const {
    mutate: logoutUser,
    isPending: isCreating,
    isError: isLogoutError,
    isSuccess,
  } = useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      saveAuthToken(null);
      navigate('/login');
    },
    onError: (err: Error) =>
      console.log('error while logging out:', err.message),
  });

  return { isCreating, logoutUser, isLogoutError, isSuccess };
}

export { useLogoutUser };

function useNewGame() {
  const navigate = useNavigate();
  const {
    mutate: postNewGame,
    isPending: isCreating,
    isError: isCreateGameError,
    isSuccess: isCreateGameSuccess,
    data: newGameData,
  } = useMutation({
    mutationFn: () => createNewGame(),
    onSuccess: (data) => {
      navigate(`/game/${Number(data.data.id)}`);
    },
    onError: (err: Error) => console.log('error while creating game:', err),
  });

  return {
    isCreating,
    postNewGame,
    isCreateGameError,
    isCreateGameSuccess,
    newGameData,
  };
}

export { useNewGame };
