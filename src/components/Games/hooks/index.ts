import { useQuery } from '@tanstack/react-query';
import { getAllGames } from '../../../api/games/getAllGames';
import { getPaginatedGames } from '../../../api/games/getPaginatedGames';
import { joinGame } from '@/api/games/joinGame';
import { getSingleGame } from '@/api/games/getSingleGame';

export const useGetAllGames = () => {
  const {
    data: allGames,
    error: allGamesError,
    isPending: isAllGamesLoading,
  } = useQuery({
    queryKey: ['games'],
    queryFn: getAllGames,
  });

  return { allGames, allGamesError, isAllGamesLoading };
};

export const useGetPaginatedGames = (url: string) => {
  const {
    data: nextGames,
    error: nextGamesError,
    isPending: isNextGamesLoading,
  } = useQuery({
    queryKey: [url],
    queryFn: () => getPaginatedGames(url),
  });

  return { nextGames, nextGamesError, isNextGamesLoading };
};

export const useJoinGame = (id: number, enabled: boolean) => {
  const {
    data: joinGameData,
    error: joinGameError,
    isPending: isJoiningGame,
  } = useQuery({
    queryKey: [`games/${id}/join/`],
    queryFn: () => joinGame(id),
    enabled,
  });

  return { joinGameData, joinGameError, isJoiningGame };
};

export const useGetSingleGame = (id: number) => {
  const {
    data: singleGameData,
    error: singleGameError,
    isPending: isLoadingSingleGame,
  } = useQuery({
    queryKey: [`games/${id}/`],
    queryFn: () => getSingleGame(id),
  });

  return { singleGameData, singleGameError, isLoadingSingleGame };
};
