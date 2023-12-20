import { useState, useRef } from "react";

export function TimeChallenge({ title, targetTime }) {
  const [timeExpired, setTimeExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  const timmer = useRef(undefined);

  function handleStart() {
    timmer.current = setTimeout(() => {
      setTimeExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timmer.current);
    setTimerStarted(false);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timeExpired && <p> you Lost !</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "StopChallange" : "StartChallange"}
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is Running" : "Time Inactive"}
      </p>
    </section>
  );
}
// cost[name,setname]=useState('')//mehul

//function(){setnname('mj')}
count = 0; //1//2
setcout((prev) => prev + 1);
