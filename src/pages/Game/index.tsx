import { useGetSingleGame } from '@/components/Games/hooks';
import { useParams } from 'react-router-dom';
import { Board } from '@/components/Board';
import { Loader } from '@/components/Loader';
import { Container } from '@/ui/container';
import { capitalize, determineWinner, getClassName } from './utils';

const Game = () => {
  const params = useParams();
  const id = params.id;
  const { singleGameData, isLoadingSingleGame } = useGetSingleGame(Number(id));

  if (isLoadingSingleGame) {
    return <Loader />;
  }

  const game = singleGameData?.data;
  const { first_player, second_player, status } = game;

  if (status === 'progress' || status === 'open') {
    // todo antonija
    return (
      <Container>
        <h2 className="text-center text-4xl">Game is {status}</h2>
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
