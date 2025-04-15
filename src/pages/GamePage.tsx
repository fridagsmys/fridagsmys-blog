import Game from "../components/Game/Game";

const GamePage = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold my-4">Lost in the Milkyway</h1>
      <Game />
    </div>
  );
};

export default GamePage;
