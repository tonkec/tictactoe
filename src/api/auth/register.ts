import { fetchClient } from "./../index";

export const register = async (username: string, password: string) => {
  const client = fetchClient();
  return client.post(`https://tictactoe.aboutdream.io/register/`, {username, password})
} 
