import { useLocalStorage } from '@uidotdev/usehooks';
import { IGame } from '../Games/Games.interface';
import { useNavigate } from 'react-router-dom';
import { useJoinGame } from '../Games/hooks';
// import { useNavigate } from 'react-router-dom';
// import { useJoinGame } from '../Games/hooks';

interface ICardProps {
  game: IGame;
}

const getButtonText = (
  status: string,
  creatorOfGame: number,
  currentUserId: number,
) => {
  // if status is open, and the user is not the creator of the game, show join button
  // if status is progress, show continue button
  // if status is finished, show view button
  // if status is open and the user is the creator of the game, show view button

  if (status === 'open' && creatorOfGame !== currentUserId) {
    return 'Join';
  } else if (status === 'progress') {
    return 'Continue';
  } else if (status === 'finished') {
    return 'View';
  } else if (status === 'open' && creatorOfGame === currentUserId) {
    return 'View';
  }

  return '';
};

const Card = ({ game }: ICardProps) => {
  const navigate = useNavigate();
  const { joinGameMutation, joinGameError } = useJoinGame(Number(game.id));
  const [currentUserId] = useLocalStorage('userId');

  const creatorOfGame = game.first_player?.id || 0;
  const buttonText = getButtonText(
    game.status,
    Number(creatorOfGame),
    Number(currentUserId),
  );
  return (
    <div className="w-full block max-w-sm p-6 bg-white rounded-sm shadow">
      <h2>Game id: {game.id}</h2>
      <p>Status: {game.status}</p>
      <button
        onClick={() => {
          if (buttonText === 'Join') {
            joinGameMutation();
          } else if (buttonText === 'Continue') {
            navigate(`/game/${game.id}`);
          } else if (buttonText === 'View') {
            navigate(`/game/${game.id}`);
          }

          if (joinGameError) {
            alert('There was an error joining the game');
          }
        }}
        className={`bg-black text-white text-sm px-4 py-2 mt-2 rounded`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export { Card };
