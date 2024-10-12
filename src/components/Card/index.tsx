import { IGame } from '../Games/Games.interface';
import { useNavigate } from 'react-router-dom';

interface ICardProps {
  game: IGame;
}

const Card = ({ game }: ICardProps) => {
  const navigate = useNavigate();

  const buttonText = game.status === 'finished' ? 'View game' : 'Join game';
  const buttonBg = game.status === 'finished' ? 'bg-purple' : 'bg-pink';

  const onClick = () => {
    if (game.status === 'finished') {
      navigate(`/game/${game.id}`);
      return;
    }
  };

  return (
    <div className="w-full block max-w-sm p-6 bg-white rounded-sm shadow">
      <h2>Game id: {game.id}</h2>
      <p>Status: {game.status}</p>
      <button
        onClick={onClick}
        className={`${buttonBg} text-white text-sm px-4 py-2 mt-2 rounded`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export { Card };
