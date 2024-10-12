import { useSearchParams } from "react-router-dom";
import { useGetAllGames } from "../../pages/Home/hooks";
import { Game } from "../Game";
import { Loader } from "../Loader";
import { useEffect, useState } from "react";
const buttonClassName = "mb-4 cursor-pointer p-2 text-white rounded transition duration-200";

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
    const [currentParams, setSearchParams] = useSearchParams({status: 'open'});
    
    const [currentGames, setCurrentGames] = useState<IGame[]>([]);

    useEffect(() => {
        if (!isAllGamesLoading) {
            if (currentParams.has('status') && currentParams.get('status') === 'open') {
                setCurrentGames(allGames?.data.results.filter((game: IGame) => game.status === 'open'));
            }
    
            if (currentParams.has('status') && currentParams.get('status') === 'finished') {
                setCurrentGames(allGames?.data.results.filter((game: IGame) => game.status === 'finished'));
            }
        }
    }, [currentParams, allGames, isAllGamesLoading]);
    

    if (isAllGamesLoading) {
        return <Loader />;
    }   

    if (allGamesError) {
        return <div>There was an error fetching the games</div>;
    }    

    return (
        <div>
            <h2 className="text-2xl mb-6">All open games available</h2>
            <div className="flex flex-wrap gap-2">
            <button className={`${buttonClassName} bg-pink hover:bg-pinkDark`} onClick={() => {
                setSearchParams({status: 'open'});
            }}>
                Open games
            </button>

            <button className={`${buttonClassName} bg-black hover:bg-blackDark`} onClick={() => {
                setSearchParams({status: 'finished'});
            }}>
                Finished games
            </button>
            </div>
            <ul className="grid grid-cols-2 gap-y-5">
                {currentGames.map((game: IGame) => (
                    <Game key={game.id} game={game} />
                ))}
            </ul>
        </div>
    );
}

export { Games };