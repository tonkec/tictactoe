import { RxHamburgerMenu } from 'react-icons/rx';
import { Sidebar } from './components/Sidebar';
import { useState } from 'react';

const Nav = () => {
  const [isShown, setIsShown] = useState(false);

  const onClick = () => {
    setIsShown(!isShown);
  };
  return (
    <nav className="flex fixed left-0 right-0 bg-pink dark:bg-blackDark px-4 py-6 items-center">
      <RxHamburgerMenu
        fontSize="1.5rem"
        color="white"
        onClick={onClick}
        className="cursor-pointer"
      />
      <Sidebar isShown={isShown} setIsShown={setIsShown} />
    </nav>
  );
};

export { Nav };
