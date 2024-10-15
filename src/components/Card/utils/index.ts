export const getButtonText = (
  status: string,
  firstPlayer: number,
  currentUserId: number,
  secondPlayer: number,
) => {
  // if status is open, and the user is not the creator of the game, show join button
  // if status is progress, show continue button
  // if status is finished, show view button
  // if status is open and the user is the creator of the game, show view button
  // if status is open and the user is either the first or second player, show continue button

  if (status === 'open' && firstPlayer !== currentUserId) {
    return 'Join';
  } else if (
    status === 'progress' &&
    (currentUserId === firstPlayer || currentUserId === secondPlayer)
  ) {
    return 'Continue';
  } else if (status === 'finished') {
    return 'View';
  } else if (status === 'open' && firstPlayer === currentUserId) {
    return 'Continue';
  } else if (status === 'progress') {
    return 'View';
  }

  return '';
};

export const getButtonColor = (text: string) => {
  if (text === 'Join') {
    return 'bg-pink';
  } else if (text === 'Continue') {
    return 'bg-blue';
  } else if (text === 'View') {
    return 'bg-black';
  }
};
