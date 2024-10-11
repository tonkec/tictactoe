import { fetchClient } from '..';

export const login = async (username: string, password: string) => {
  const client = fetchClient({isAuth: true});
  return client.post(`/login/`, {username, password})
} 
