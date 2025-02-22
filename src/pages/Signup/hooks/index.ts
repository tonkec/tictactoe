import { useMutation } from '@tanstack/react-query';
import { register } from '@/api/auth/register';
import { IUserProps } from './../Signup.interface';
import { toast } from 'react-toastify';
import { toastConfig } from '@/toast.config';
import { useNavigate } from 'react-router-dom';
import { Error, getErrorMessage } from '@/getErrorMessage';

function useCreateUser() {
  const navigate = useNavigate();
  const {
    mutate: createUser,
    isPending: isCreating,
    isError: isSignupError,
    isSuccess,
  } = useMutation({
    mutationFn: ({ username, password }: IUserProps) =>
      register(username, password),
    onSuccess: () => {
      toast.success('Success! Now you can log in', toastConfig);
      navigate('/login');
    },
    onError: (err: Error) => {
      toast.error(getErrorMessage(err), toastConfig);
    },
  });

  return { isCreating, createUser, isSignupError, isSuccess };
}

export { useCreateUser };
