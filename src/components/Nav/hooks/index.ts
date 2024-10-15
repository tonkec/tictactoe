import { useMutation } from '@tanstack/react-query';
import { logout } from '@/api/auth/logout';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '@uidotdev/usehooks';
import { createNewGame } from '@/api/games/createNewGame';
import { toast } from 'react-toastify';
import { toastConfig } from '@/toast.config';
import { Error, getErrorMessage } from '@/getErrorMessage';

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
      toast.error(getErrorMessage(err), toastConfig);
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
    onError: (err: Error) => {
      toast.error(getErrorMessage(err), toastConfig);
    },
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
