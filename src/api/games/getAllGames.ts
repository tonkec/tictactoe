import { fetchClient } from "..";

const getAllGames = () => {
    const client = fetchClient();
    return client.get('/games');
}

export { getAllGames };