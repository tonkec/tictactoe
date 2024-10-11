import { fetchClient } from '..';

const createNewGame = () => {
    const client = fetchClient({isAuth: false});
    return client.post('/games/');
}

export { createNewGame };