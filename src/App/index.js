import React, { Component } from "react";
import { store } from "statorgfc";

import initStore from "./Store";

import DevHelper from "./Components/DevHelper";
import Inventory from "./Components/Inventory";
import Player_1 from "./Components/Player_1";
import Player_2 from "./Components/Player_2";
import StartRound from "./Components/StartRound";
import Ready from "./Components/Ready";
import EndRound from "./Components/EndRound";
import Log from "./Components/Log";

import Background from "./Assets/background.jpg";
import "../App.css";

initStore();

class App extends Component {
  constructor() {
    super();
    store.connectComponentState(this, ["ENV", "PLAYER_1", "GAME"]);
  }

  render() {
    const isDev = this.state.ENV.isDev ? <DevHelper /> : false;

    return (
      <div
        className="Game"
        style={{ background: `url(${Background})`, backgroundSize: "cover" }}
      >
        <StartRound />
        <Ready />
        <EndRound />

        <Inventory />

        <Player_2 />
        <Player_1 />

        <Log />
        {isDev}
      </div>
    );
  }
}

export default App;
