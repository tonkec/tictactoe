import { apiClient } from '..';

export const register = async (username: string, password: string) => {
  const client = apiClient({ isAuth: true });
  return client.post(`/register/`, { username, password });
};
