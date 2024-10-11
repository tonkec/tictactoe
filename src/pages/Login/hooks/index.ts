import { useMutation } from '@tanstack/react-query';
import { login} from '../../../api/login';
import { IUserProps } from "./../Login.interface";

function useLoginUser() {
    const { mutate: loginUser, isPending: isCreating, isError: isSignupError, isSuccess } = useMutation({
      mutationFn: ({ username, password }: IUserProps) =>
        login(username, password),
      onSuccess: () => {
        console.log(
          'User logged in successfully. Redirecting to dashboard...',
        );
      },
      onError: (err: Error) => console.log('error while logging in:', err.message), 
    });
  
    return { isCreating, loginUser, isSignupError, isSuccess };
  }

export { useLoginUser };
