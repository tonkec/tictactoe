import { useMutation } from '@tanstack/react-query';
import { logout} from '../../../api/auth/logout';
import { useNavigate } from 'react-router-dom';

function useLogoutUser() {
    const navigate = useNavigate();

    const { mutate: logoutUser, isPending: isCreating, isError: isLogoutError, isSuccess } = useMutation({
      mutationFn: () =>
        logout(),
      onSuccess: () => {
        navigate('/login');
      },
      onError: (err: Error) => console.log('error while logging out:', err.message), 
    });
  
    return { isCreating, logoutUser, isLogoutError, isSuccess };
  }

export { useLogoutUser };
