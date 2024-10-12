import { fetchClient } from "..";

const getPaginatedGames = (next: string) => {
    const client = fetchClient({ isAuth: false });
    return client.get(next);
}

export { getPaginatedGames };