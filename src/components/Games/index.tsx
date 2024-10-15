import { useGetAllGames, useGetPaginatedGames } from './hooks';
import { Card } from '@/components/Card';
import { Loader } from '@/components/Loader';
import { useState } from 'react';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa';
import { IGame } from './Games.interface';
import { Container } from '@/ui/container';

const Games = () => {
  const { isAllGamesLoading, allGamesError, allGames } = useGetAllGames();
  const [paginatedUrl, setPaginatedUrl] = useState<string>('');
  const { nextGames, isNextGamesLoading } = useGetPaginatedGames(
    paginatedUrl || '/games/',
  );

  if (isAllGamesLoading || isNextGamesLoading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  if (allGamesError) {
    return (
      <Container>
        <div className="mt-12 text-center">
          <h2 className="text-3xl">
            There was an error fetching the games data.
          </h2>
        </div>
      </Container>
    );
  }

  if (!allGames) {
    return (
      <Container>
        <div className="mt-12">
          <h2 className="text-3xl">No games available</h2>
        </div>
      </Container>
    );
  }

  return (
    <div className="px-4">
      <h2 className="text-3xl mb-12 mt-12 text-center">All games</h2>
      <div className="flex flex-wrap gap-2"></div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-items-center max-w-[700px] mx-auto">
        {nextGames?.data.results.map((game: IGame) => (
          <Card key={game.id} game={game} />
        ))}
      </ul>
      <div className="flex gap-2 mt-12 justify-center items-center">
        <button
          disabled={!nextGames?.data.previous}
          className="bg-black px-4 rounded"
          onClick={() => {
            setPaginatedUrl(nextGames?.data.previous);
          }}
        >
          <FaLongArrowAltLeft
            className="inline"
            fontSize="1.2rem"
            color="white"
          />
        </button>

        <button
          disabled={!nextGames?.data.next}
          className="bg-black px-4 rounded"
          onClick={() => {
            setPaginatedUrl(nextGames?.data.next);
          }}
        >
          <FaLongArrowAltRight
            className="inline"
            fontSize="1.2rem"
            color="white"
          />
        </button>
      </div>
    </div>
  );
};

export { Games };
