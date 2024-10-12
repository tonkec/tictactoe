import { useMutation } from '@tanstack/react-query';
import { logout} from '../../../api/auth/logout';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '@uidotdev/usehooks';

function useLogoutUser() {
    const navigate = useNavigate();
    const [, saveAuthToken] = useLocalStorage("token", null);

    const { mutate: logoutUser, isPending: isCreating, isError: isLogoutError, isSuccess } = useMutation({
      mutationFn: () =>
        logout(),
      onSuccess: () => {
        saveAuthToken(null);
        navigate('/login');
      },
      onError: (err: Error) => console.log('error while logging out:', err.message), 
    });
  
    return { isCreating, logoutUser, isLogoutError, isSuccess };
  }

export { useLogoutUser };
