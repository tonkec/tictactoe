import { apiClient } from '..';

const joinGame = (id: number) => {
  const client = apiClient({ isAuth: false });
  return client.post(`games/${id}/join/`);
};

export { joinGame };
