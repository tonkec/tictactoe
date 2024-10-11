import { useMutation } from '@tanstack/react-query';
import { login} from '../../../api/login';
import { IUserProps } from "./../Login.interface";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useNavigate } from 'react-router-dom';

function useLoginUser() {
    const navigate = useNavigate();
    const [, saveAuthToken] = useLocalStorage("token", null);

    const { mutate: loginUser, isPending: isCreating, isError: isSignupError, isSuccess } = useMutation({
      mutationFn: ({ username, password }: IUserProps) =>
        login(username, password),
      onSuccess: (data) => {
        navigate('/');
        saveAuthToken(data.data.token);
      },
      onError: (err: Error) => console.log('error while logging in:', err.message), 
    });
  
    return { isCreating, loginUser, isSignupError, isSuccess };
  }

export { useLoginUser };
