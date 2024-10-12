import { apiClient } from '..';

const getPaginatedGames = (url: string) => {
  const client = apiClient({ isAuth: false });
  return client.get(url);
};

export { getPaginatedGames };
