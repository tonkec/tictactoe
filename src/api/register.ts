import axios from "axios";

export const register = async (username: string, password: string) => {
  return axios.post(`https://tictactoe.aboutdream.io/register/`, {username, password})
} 
