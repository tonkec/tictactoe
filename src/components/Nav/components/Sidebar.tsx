import { Link } from 'react-router-dom';
import { RxExit, RxHome } from 'react-icons/rx';
import { useLogoutUser, useNewGame } from './../hooks';
import { FaPlus } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';
import { useLocalStorage } from '@uidotdev/usehooks';
import { capitalize } from '@/pages/Game/utils';
import { linkClassName } from './Sidebar.styles';
import { ISidebarProps } from './Sidebar.interface';
import { MdOutlineWbSunny } from 'react-icons/md';
import { useState } from 'react';

const Sidebar = ({ isShown, setIsShown }: ISidebarProps) => {
  const { postNewGame } = useNewGame();
  const { logoutUser } = useLogoutUser();
  const [userName] = useLocalStorage('username');
  const [isDarkMode, saveIsDarkMode] = useLocalStorage('isDarkMode', false);
  const [dark, setDark] = useState(false);

  const onClick = () => {
    postNewGame();
  };

  if (!isShown) {
    return null;
  }

  const toggleDarkMode = () => {
    setDark(!dark);
    document.body.classList.toggle('dark');
    saveIsDarkMode(!isDarkMode);
  };

  return (
    <aside className="fixed left-0 top-0 bottom-0 bg-blackDark w-[200px]">
      <IoCloseSharp
        fontSize="1.5rem"
        color="white"
        className="absolute top-4 right-4 cursor-pointer"
        onClick={() => setIsShown(false)}
      />
      <ul className="px-12 py-12 mt-12">
        <li>
          <Link className={linkClassName} to="/">
            <RxHome fontSize="1.5rem" color="white" /> Home
          </Link>
        </li>

        <li>
          <button className={linkClassName} onClick={onClick}>
            <FaPlus fontSize="1.5rem" color="white" /> New
          </button>
        </li>

        <li>
          <Link className={linkClassName} to="/profile">
            <FaRegUser fontSize="1.5rem" color="white" />{' '}
            {capitalize(userName as string)}
          </Link>
        </li>

        <li className={linkClassName} onClick={toggleDarkMode}>
          <MdOutlineWbSunny fontSize="1.5rem" color="white" /> Mode
        </li>

        <li className={linkClassName} onClick={() => logoutUser()}>
          <RxExit fontSize="1.5rem" color="white" />
          Logout
        </li>
      </ul>
    </aside>
  );
};

export { Sidebar };
