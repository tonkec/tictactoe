import { Link } from "react-router-dom";

const linkClassName = "text-black hover:text-yellow transition-colors duration-300";

const Nav = () => {
    return (
        <nav className="flex fixed left-0 right-0">
            <ul className="flex gap-4 bg-pink w-full px-6 py-4">
                <li>
                    <Link className={linkClassName} to="/">Home</Link>
                </li>
                
                <li>
                    <Link className={linkClassName} to="/new">New Game</Link>
                </li>
               
            </ul>
        </nav>
    );
    }

    export { Nav };
