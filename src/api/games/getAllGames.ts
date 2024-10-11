import { fetchClient } from "..";

const getAllGames = () => {
    const client = fetchClient({ isAuth: false });
    return client.get('/games/');
}

export { getAllGames };