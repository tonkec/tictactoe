import axios from "axios";

export const login = async (username: string, password: string) => {
  return axios.post(`https://tictactoe.aboutdream.io/login/`, {username, password})
} 
