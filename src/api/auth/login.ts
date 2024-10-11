import { fetchClient } from "../index";

export const login = async (username: string, password: string) => {
  const client = fetchClient();
  return client.post(`https://tictactoe.aboutdream.io/login/`, {username, password})
} 
