import { IGame } from "../Games";

interface IGameProps {
    game: IGame;
}

const Game = ({game}: IGameProps) => {
    return <div className="flex-1 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h2>Game id: {game.id}</h2>
        <p>Status: {game.status}</p>
    </div>
}

export { Game };