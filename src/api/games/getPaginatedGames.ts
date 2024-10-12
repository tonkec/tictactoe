import { fetchClient } from '..';

const getPaginatedGames = (url: string) => {
  const client = fetchClient({ isAuth: false });
  return client.get(url);
};

export { getPaginatedGames };
