import { useLocalStorage } from '@uidotdev/usehooks';
import { useNavigate } from 'react-router-dom';
import { useJoinGame } from '../Games/hooks';
import { getButtonText, getButtonColor } from './utils';
import { ICardProps } from './Card.interface';

const Card = ({ game }: ICardProps) => {
  const navigate = useNavigate();
  const { joinGameMutation } = useJoinGame(Number(game.id));
  const [currentUserId] = useLocalStorage('userId');

  const firstPlayer = game.first_player?.id || 0;
  const secondPlayer = game.second_player?.id || 0;
  const buttonText = getButtonText(
    game.status,
    Number(firstPlayer),
    Number(currentUserId),
    Number(secondPlayer),
  );
  return (
    <div className="w-full block max-w-sm p-6 bg-white rounded-sm shadow">
      <h2>Game id: {game.id}</h2>
      <p>Status: {game.status}</p>
      <button
        onClick={() => {
          if (buttonText === 'Join') {
            joinGameMutation();
            navigate(`/game/${game.id}`);
          } else if (buttonText === 'Continue') {
            navigate(`/game/${game.id}`);
          } else if (buttonText === 'View') {
            navigate(`/game/${game.id}`);
          }
        }}
        className={`${getButtonColor(buttonText)} text-white text-sm px-4 py-2 mt-2 rounded`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export { Card };
