import { Link } from 'react-router-dom';
import { RxExit, RxHome } from 'react-icons/rx';
import { useLogoutUser, useNewGame } from './hooks';

const linkClassName =
  'text-black hover:text-yellow transition-colors duration-300';

const Nav = () => {
  const { postNewGame } = useNewGame();
  const { logoutUser } = useLogoutUser();

  const onClick = () => {
    postNewGame();
  };

  return (
    <nav className="flex fixed left-0 right-0 bg-pink px-4 items-center">
      <ul className="flex gap-8  w-full px-6 py-4 items-center">
        <li>
          <Link className={linkClassName} to="/">
            <RxHome fontSize="2rem" color="white" />
          </Link>
        </li>

        <li>
          <button className="bg-white px-4 rounded py-2" onClick={onClick}>
            New game
          </button>
        </li>
      </ul>

      <RxExit
        fontSize="1.5rem"
        className="cursor-pointer"
        color="white"
        onClick={() => logoutUser()}
      />
    </nav>
  );
};

export { Nav };
