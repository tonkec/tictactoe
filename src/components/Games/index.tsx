import { useGetAllGames, useGetPaginatedGames } from "../../pages/Home/hooks";
import { Game } from "../Game";
import { Loader } from "../Loader";
import {  useState } from "react";

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
    const [paginatedUrl, setPaginatedUrl] = useState<string>(allGames?.data.next);
    const {nextGames, isNextGamesLoading} = useGetPaginatedGames(paginatedUrl || "/games/");
    
    if (isAllGamesLoading || isNextGamesLoading) {
        return <Loader />
    }   

    if (allGamesError) {
        return <div>There was an error fetching the games</div>
    }    

    if (!allGames) {
        return <div>No games available</div>;
    }

    return (
        <div>
            <h2 className="text-2xl mb-6">All games available</h2>
            <div className="flex flex-wrap gap-2">
            </div>
            <ul className="grid grid-cols-2 gap-y-5">
                {nextGames?.data.results.map((game: IGame) => (
                    <Game key={game.id} game={game} />
                ))}
            </ul>
            <div className="flex gap-2 mt-4 justify-center items-center">
                {nextGames?.data.previous &&(
                    <button className="underline" onClick={() => {
                        setPaginatedUrl(nextGames?.data.previous);
                    }}>Previous</button>
                )}
                
                {nextGames?.data.next && (
                    <button className="underline" onClick={() => {
                        setPaginatedUrl(nextGames?.data.next);
                    }}>Next</button>
                )}
            </div>
        </div>
    );
}

export { Games };