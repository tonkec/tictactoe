import { apiClient } from '..';

const getAllGames = () => {
  const client = apiClient({ isAuth: false });
  return client.get('/games/');
};

export { getAllGames };
