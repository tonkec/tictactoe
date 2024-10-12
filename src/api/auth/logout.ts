import { fetchClient } from '..';

export const logout = async () => {
  const client = fetchClient({isAuth: false});
  return client.post(`/logout/`)
} 
