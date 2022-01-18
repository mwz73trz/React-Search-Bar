import "./App.css";
import React, { useState, useEffect } from "react";

const teamDictionary = {
  "Dallas Cowboys": "NFL football",
  "Cleveland Guardians": "MLB baseball",
  "Chicago Blackhawks": "NHL hockey",
  "South Carolina Gamecocks": "NCAA football",
};

const teams = Object.keys(teamDictionary);

function App() {
  const [team, setTeam] = useState("");
  const [league, setLeague] = useState("");

  function changeHandler(event) {
    const inputTeam = event.target.value;
    setTeam(inputTeam);

    if (inputTeam in teamDictionary) {
      setLeague(teamDictionary[inputTeam]);
    } else {
      setLeague("Team not Found!");
    }
  }

  function teamClickHandler(inputTeam) {
    setLeague(teamDictionary[inputTeam]);
  }

  return (
    <div className="App">
      <h1>League Detector</h1>
      <input
        onChange={changeHandler}
        value={team}
        placeholder={"Search your team"}
        className="input-element"
      />
      <h2>{team}</h2>
      <h3>{league}</h3>
      {teams.map((team) => (
        <span onClick={() => teamClickHandler(team)} className="team">
          {team}
        </span>
      ))}
    </div>
  );
}

export default App;
