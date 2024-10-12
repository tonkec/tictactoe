import { useGetSingleGame } from '@/components/Games/hooks';
import { useParams } from 'react-router-dom';
import { Board } from '@/components/Board';
import { Loader } from '@/components/Loader';
import { Container } from '@/ui/container';
import { Player } from '@/components/Games/Games.interface';

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const determineWinner = (
  winner: Player,
  first_player: Player,
  second_player: Player,
) => {
  if (!winner) {
    return 'No winner';
  }
  if (winner.id === first_player.id) {
    return first_player.username;
  } else if (winner.id === second_player.id) {
    return second_player.username;
  }
  return 'No winner';
};

const getClassName = (winner: string, player: string) => {
  if (winner === player) {
    return 'bg-green-200 px-4';
  }
};

const Game = () => {
  const params = useParams();
  const id = params.id;
  const { singleGameData, isLoadingSingleGame } = useGetSingleGame(Number(id));

  if (isLoadingSingleGame) {
    return <Loader />;
  }
  const game = singleGameData?.data;
  const { first_player, second_player } = game;
  const winner = determineWinner(game.winner, first_player, second_player);

  return (
    <Container>
      <p className="text-center text-4xl">
        <span className={getClassName(winner, first_player.username)}>
          {capitalize(first_player.username)}
        </span>
        <span> vs. </span>
        <span className={getClassName(winner, second_player.username)}>
          {capitalize(second_player.username)}
        </span>
      </p>
      <div className="flex justify-center mt-12">
        <Board game={game} />
      </div>
    </Container>
  );
};

export { Game };
