import { useMutation } from '@tanstack/react-query';
import { logout } from '@/api/auth/logout';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '@uidotdev/usehooks';
import { createNewGame } from '@/api/games/createNewGame';
import { toast } from 'react-toastify';
import { toastConfig } from '@/toast.config';

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
      toast.success('Logged out successfully', toastConfig);
    },
    onError: (err: Error) => {
      console.log('error while logging out:', err.message);
      toast.error('Error while logging out', toastConfig);
    },
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
