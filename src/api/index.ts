import axios from 'axios';
import { useLocalStorage } from "@uidotdev/usehooks";

const fetchClient = () => {
  const defaultOptions = {
    baseURL: 'https://tictactoe.aboutdream.io',
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use(function (config) {
    const [isLoggedIn] = useLocalStorage("token");
    config.headers.Authorization =  isLoggedIn ? `Bearer ${isLoggedIn}` : '';
    return config;
  });

  return instance;
};

export { fetchClient };