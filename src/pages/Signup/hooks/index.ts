import { useMutation } from '@tanstack/react-query';
import { register } from '../../../api/register';
import { IUserProps } from "./../Signup.interface";

function useCreateUser() {
    const { mutate: createUser, isPending: isCreating } = useMutation({
      mutationFn: ({ username, password }: IUserProps) =>
        register(username, password),
      onSuccess: () => {
        console.log(
          'User created successfully. Redirecting to login page...',
        );
      },
      onError: (err: Error) => console.log('error while signing up:', err.message), 
    });
  
    return { isCreating, createUser };
  }

export { useCreateUser };
