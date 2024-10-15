import { useQuery, useMutation } from '@tanstack/react-query';
import { getAllGames } from '@/api/games/getAllGames';
import { getPaginatedGames } from '@/api/games/getPaginatedGames';
import { joinGame } from '@/api/games/joinGame';
import { getSingleGame } from '@/api/games/getSingleGame';
import { toast } from 'react-toastify';
import { toastConfig } from '@/toast.config';
import { Error, getErrorMessage } from '@/getErrorMessage';

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
  const {
    mutate: joinGameMutation,
    isPending: isJoinGameLoading,
    isError: joinGameError,
    isSuccess: isJoinGameSuccess,
  } = useMutation({
    mutationFn: () => joinGame(id),
    onSuccess: () => {
      toast.success('Successfully joined the game!', toastConfig);
    },
    onError: (err: Error) => {
      toast.error(getErrorMessage(err), toastConfig);
    },
  });
  return {
    joinGameMutation,
    joinGameError,
    isJoinGameLoading,
    isJoinGameSuccess,
  };
};

export const useGetSingleGame = (id: number, refetchTime: number) => {
  const {
    data: singleGameData,
    error: singleGameError,
    isPending: isLoadingSingleGame,
  } = useQuery({
    queryKey: ['game', id],
    queryFn: () => getSingleGame(id),
    refetchInterval: refetchTime,
    staleTime: 0,
  });

  return { singleGameData, singleGameError, isLoadingSingleGame };
};
