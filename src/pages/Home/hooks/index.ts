import { useQuery } from '@tanstack/react-query';
import { getAllGames } from '../../../api/games/getAllGames';

const useGetAllGames = () => {
    const { data: allGames, error: allGamesError, isPending: isAllGamesLoading } = useQuery({
        queryKey: ['games'],
        queryFn: getAllGames,
    });
    
    return { allGames, allGamesError, isAllGamesLoading };
    }

export { useGetAllGames };