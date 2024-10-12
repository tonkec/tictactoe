import { useGetSingleGame } from '@/components/Games/hooks';
import { useParams } from 'react-router-dom';
import { Board } from '@/components/Board';
import { Loader } from '@/components/Loader';
import { Container } from '@/ui/container';
import { FaBoltLightning } from 'react-icons/fa6';

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Game = () => {
  const params = useParams();
  const id = params.id;
  const { singleGameData, isLoadingSingleGame } = useGetSingleGame(Number(id));

  if (isLoadingSingleGame) {
    return <Loader />;
  }

  const game = singleGameData?.data;
  const { first_player, second_player, board } = game;

  return (
    <Container>
      <p className="text-center text-4xl">
        {capitalize(first_player.username)}{' '}
        <FaBoltLightning color="black" className="inline" />{' '}
        {capitalize(second_player.username)}
      </p>
      <div className="flex justify-center mt-12">
        <Board board={board} />
      </div>
    </Container>
  );
};

export { Game };
