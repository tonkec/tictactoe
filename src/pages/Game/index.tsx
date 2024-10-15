import { useGetSingleGame } from '@/components/Games/hooks';
import { Link, useParams } from 'react-router-dom';
import { Board } from '@/components/Board';
import { Loader } from '@/components/Loader';
import { Container } from '@/ui/container';
import { capitalize, determineWinner, getClassName } from './utils';
import { useEffect, useState } from 'react';

const Game = () => {
  const [refetchTime, setRefetchTime] = useState(0);
  const params = useParams();
  const id = params.id;
  const { singleGameData, isLoadingSingleGame, singleGameError } =
    useGetSingleGame(Number(id), refetchTime);

  useEffect(() => {
    if (singleGameError) {
      setRefetchTime(0);
      return;
    }
    setRefetchTime(1000);
  }, [singleGameError]);

  if (isLoadingSingleGame) {
    return <Loader />;
  }

  if (singleGameError) {
    return (
      <Container>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-center text-4xl">Game not found</h2>
          <Link to="/" className="underline mt-4">
            Go home
          </Link>
        </div>
      </Container>
    );
  }

  const game = singleGameData?.data;
  const { first_player, second_player, status } = game;

  if (status === 'progress' || status === 'open') {
    return (
      <Container>
        <h2 className="text-center text-4xl">Game status: {status}</h2>
        <div className="flex justify-center mt-12">
          <Board isClickable game={game} />
        </div>
      </Container>
    );
  }

  const winner = determineWinner(game.winner, first_player, second_player);

  return (
    <Container>
      <h2 className="text-center text-4xl">
        <span className={getClassName(winner, first_player.username)}>
          {capitalize(first_player.username)}
        </span>
        <span> vs. </span>
        <span className={getClassName(winner, second_player.username)}>
          {capitalize(second_player.username)}
        </span>
      </h2>
      <div className="flex justify-center mt-12">
        <Board game={game} />
      </div>
    </Container>
  );
};

export { Game };
