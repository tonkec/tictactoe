import { useMutation } from '@tanstack/react-query';
import { login } from '@/api/auth/login';
import { IUserProps } from './../Login.interface';
import { useLocalStorage } from '@uidotdev/usehooks';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { toastConfig } from '@/toast.config';
import { Error, getErrorMessage } from '@/getErrorMessage';

function useLoginUser() {
  const navigate = useNavigate();
  const [, saveAuthToken] = useLocalStorage('token', null);
  const [, saveUserId] = useLocalStorage('userId', null);
  const [, saveUserName] = useLocalStorage('username', null);

  const {
    mutate: loginUser,
    isPending: isCreating,
    isError: isSignupError,
    isSuccess,
  } = useMutation({
    mutationFn: ({ username, password }: IUserProps) =>
      login(username, password),
    onSuccess: (data) => {
      saveAuthToken(data.data.token);
      saveUserId(data.data.id);
      saveUserName(data.data.username);
      toast.success('Successfully logged in!', toastConfig);
      navigate('/');
    },
    onError: (err: Error) => {
      toast.error(getErrorMessage(err), toastConfig);
    },
  });

  return { isCreating, loginUser, isSignupError, isSuccess };
}

export { useLoginUser };
