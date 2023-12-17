import { useState } from "react";

export default function Player() {
  const [enterPlayerName, setEnterPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setSubmitted(false);
    setEnterPlayerName(e.target.value);
  }

  function handleClick(e) {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enterPlayerName : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enterPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
