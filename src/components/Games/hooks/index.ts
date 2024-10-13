import { useQuery, useMutation } from '@tanstack/react-query';
import { getAllGames } from '../../../api/games/getAllGames';
import { getPaginatedGames } from '../../../api/games/getPaginatedGames';
import { joinGame } from '@/api/games/joinGame';
import { getSingleGame } from '@/api/games/getSingleGame';
import { useNavigate } from 'react-router-dom';

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

export const useJoinGame = (id: number) => {
  const navigate = useNavigate();

  const {
    mutate: joinGameMutation,
    isPending: isJoinGameLoading,
    isError: joinGameError,
    isSuccess: isJoinGameSuccess,
  } = useMutation({
    mutationFn: () => joinGame(id),
    onSuccess: () => {
      navigate('/');
    },
    onError: (err: Error) =>
      console.log('error while joining the game:', err.message),
  });
  return {
    joinGameMutation,
    joinGameError,
    isJoinGameLoading,
    isJoinGameSuccess,
  };
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
