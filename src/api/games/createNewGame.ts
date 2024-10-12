import { apiClient } from '..';

const createNewGame = () => {
  const client = apiClient({ isAuth: false });
  return client.post('/games/');
};

export { createNewGame };
