import { IGame } from '../Games/Games.interface';

interface ICardProps {
  game: IGame;
}

const Card = ({ game }: ICardProps) => {
  const buttonText = game.status === 'finished' ? 'View game' : 'Join game';
  const buttonBg = game.status === 'finished' ? 'bg-purple' : 'bg-pink';
  return (
    <div className="w-full block max-w-sm p-6 bg-white rounded-sm shadow">
      <h2>Game id: {game.id}</h2>
      <p>Status: {game.status}</p>
      <button
        className={`${buttonBg} text-white text-sm px-4 py-2 mt-2 rounded`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export { Card };
