import { apiClient } from '..';

const getSingleGame = (id: number) => {
  const client = apiClient({ isAuth: false });
  return client.get(`games/${id}/`);
};

export { getSingleGame };
