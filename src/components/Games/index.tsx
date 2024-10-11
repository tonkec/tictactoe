import { useGetAllGames } from "../../pages/Home/hooks";
import { Game } from "../Game";
import { Loader } from "../Loader";

type Board = (null | string | number)[][];

type Player = {
    id: string;
    username: string;
}

type Status = 'open' | 'finished';

export interface IGame {
    id: string;
    status: Status;
    board: Board;
    winner: Player | null;
    firstPlayer: Player | null;
    secondPlayer: Player | null;
    created: Date;
}

const Games = () => {
    const {isAllGamesLoading, allGamesError, allGames} = useGetAllGames();

    const allOpenGames = () => {
       return allGames?.data.results.filter((game: IGame) => game.status === 'open');
    }

    if (isAllGamesLoading) {
        return <Loader />;
    }   

    if (allGamesError) {
        return <div>There was an error fetching the games</div>;
    }

    return (
        <div>
            <h2 className="text-2xl mb-6">All open games available</h2>
            <ul className="grid grid-cols-2 gap-y-5">

            {allOpenGames().map((game: IGame) => (
                <Game key={game.id} game={game} />
            ))}
            </ul>
        </div>
    );
}

export { Games };