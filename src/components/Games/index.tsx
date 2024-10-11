import { useGetAllGames } from "../../pages/Home/hooks";
import { Loader } from "../Loader";

const Games = () => {
    const {isAllGamesLoading, allGamesError} = useGetAllGames();

    if (isAllGamesLoading) {
        return <Loader />;
    }   

    if (allGamesError) {
        return <div>There was an error fetching the games</div>;
    }

    return (
        <div>
            <h1>Games</h1>
        </div>
    );
}

export { Games };