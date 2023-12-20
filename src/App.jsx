import Player from "./components/Player.jsx";
import { TimeChallenge } from "./components/TimeChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title="Easy" targetTime={1} />
        <TimeChallenge title="not easy" targetTime={5} />
        <TimeChallenge title="Getting Tough" targetTime={10} />
        <TimeChallenge title="pros only" targetTime={20} />
      </div>
    </>
  );
}

export default App;
