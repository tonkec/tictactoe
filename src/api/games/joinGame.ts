import { apiClient } from '..';

const joinGame = () => {
  const client = apiClient({ isAuth: false });
  return client.post('/games/');
};

export { joinGame };
