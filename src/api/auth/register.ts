import { fetchClient } from "./../index";

export const register = async (username: string, password: string) => {
  const client = fetchClient({isAuth: true});
  return client.post(`/register/`, {username, password})
} 
