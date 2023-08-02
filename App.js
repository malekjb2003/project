import React from "react";
import PlayersList from "./Playerlist";
import players from "./Players";
const App = () => {
  return (
    <div>
      <h1>Football Players</h1>
      <PlayersList players={players} />
    </div>
  );
};

export default App;




