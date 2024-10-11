import { useGetAllGames } from "../../pages/Home/hooks";
import { Loader } from "../Loader";

const Games = () => {
    const {isAllGamesLoading} = useGetAllGames();

    if (isAllGamesLoading) {
        return <Loader />;
    }   

    return (
        <div>
            <h1>Games</h1>
        </div>
    );
}

export { Games };