import React from "react";
import Playlist from "components/Playlist";
import Player from "./components/Player";
import Sidebar from "components/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="sidebar-playlist-wrap">
        <Sidebar />
        <Playlist />
      </div>
      <Player />
    </div>
  );
}

export default App;
