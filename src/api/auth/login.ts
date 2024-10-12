import { apiClient } from '..';

export const login = async (username: string, password: string) => {
  const client = apiClient({ isAuth: true });
  return client.post(`/login/`, { username, password });
};
