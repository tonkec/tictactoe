import { apiClient } from '..';

export const logout = async () => {
  const client = apiClient({ isAuth: false });
  return client.post(`/logout/`);
};
