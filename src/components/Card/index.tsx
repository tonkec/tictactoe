import { IGame } from '../Games/Games.interface';
import { useJoinGame } from '../Games/hooks';
import { useState } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';

interface ICardProps {
  game: IGame;
}

const Card = ({ game }: ICardProps) => {
  const [shouldJoinGame, setShouldJoinGame] = useState(false);
  const { joinGameData } = useJoinGame(Number(game.id), shouldJoinGame);
  const [userId] = useLocalStorage('userId');

  const buttonText = game.status === 'finished' ? 'View game' : 'Join game';
  const buttonBg = game.status === 'finished' ? 'bg-purple' : 'bg-pink';

  const onClick = () => {
    if (game.status === 'finished') {
      return;
    }

    if (Number(userId) !== Number(game.first_player?.id)) {
      setShouldJoinGame(true);
      // todo antonija
    }
  };

  console.log(joinGameData); // todo antonija

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
