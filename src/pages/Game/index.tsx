import { useGetSingleGame } from '@/components/Games/hooks';
import { Link, useParams } from 'react-router-dom';
import { Board } from '@/components/Board';
import { Loader } from '@/components/Loader';
import { Container } from '@/ui/container';
import { capitalize, determineWinner, getClassName } from './utils';
import { useEffect, useState } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';
import { PageTitle } from '@/components/PageTitle';

const Game = () => {
  const [username] = useLocalStorage('username');
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
    return (
      <Container>
        <PageTitle title="Game" />
        <Loader />
      </Container>
    );
  }

  if (singleGameError) {
    return (
      <Container>
        <PageTitle title="Game" />

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

  if (!first_player || !second_player) {
    return (
      <Container>
        <PageTitle title="Game" />

        <h2 className="text-center text-4xl mb-12">
          Some players are missing.
        </h2>

        <div className="flex justify-center">
          <Board game={game} />
        </div>
      </Container>
    );
  }

  if (status === 'progress' || status === 'open') {
    return (
      <Container>
        <PageTitle title="Game" />
        <h2 className="text-center text-2xl mb-12">Game status: {status}</h2>
        <h2 className="text-center text-4xl">
          <span>{capitalize(first_player.username)}</span>
          <span> vs. </span>
          <span>{capitalize(second_player.username)}</span>
        </h2>
        <div className="flex justify-center mt-12">
          <Board
            isClickable={
              first_player.username.toLowerCase() ===
                (username as string).toLowerCase() ||
              second_player.username.toLowerCase() ===
                (username as string).toLowerCase()
            }
            game={game}
          />
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
