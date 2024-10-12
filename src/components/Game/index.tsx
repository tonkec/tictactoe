import { IGame } from "../Games/Games.interface";

interface IGameProps {
    game: IGame;
}

const Game = ({game}: IGameProps) => {
    return <div className="w-full block max-w-sm p-6 bg-white rounded-sm shadow">
        <h2>Game id: {game.id}</h2>
        <p>Status: {game.status}</p>
    </div>
}

export { Game };