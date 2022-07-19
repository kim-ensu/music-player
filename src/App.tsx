import React from "react";
import Playlist from "components/Playlist";
import Player from "./components/Player";
import Sidebar from "components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Playlist />
      <Player />
    </div>
  );
}

export default App;
