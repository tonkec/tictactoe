import { Player } from '@/components/Games/Games.interface';

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const determineWinner = (
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

export const getClassName = (winner: string, player: string) => {
  if (winner === player) {
    return 'bg-green-200 dark:bg-blue px-4';
  }
};
