import { useNewGame } from "./hooks";

const NewGame = () => {
    const { postNewGame } = useNewGame();

    return (
        <div>
        <button onClick={() => postNewGame()}>New game</button>
        </div>
    );
    }

export { NewGame };