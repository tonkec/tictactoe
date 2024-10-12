import { Link } from "react-router-dom";
import { RxExit } from "react-icons/rx";
import { useLogoutUser } from "./hooks";

const linkClassName = "text-black hover:text-yellow transition-colors duration-300";

const Nav = () => {
    const {logoutUser} = useLogoutUser();
    
    return (
        <nav className="flex fixed left-0 right-0 bg-pink px-4 items-center">
            <ul className="flex gap-4  w-full px-6 py-4">
                <li>
                    <Link className={linkClassName} to="/">Home</Link>
                </li>
                
                <li>
                    <Link className={linkClassName} to="/new">New Game</Link>
                </li>
            </ul>

            <RxExit fontSize="1.5rem" className="cursor-pointer"  onClick={() => logoutUser()} />
        </nav>
    );
    }

    export { Nav };
