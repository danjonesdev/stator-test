import React, { Component } from "react";
import { store } from "statorgfc";

import initStore from "./Store";

import DevHelper from "./Components/DevHelper";
import Inventory from "./Components/Inventory";
import Pallet_P1 from "./Components/Pallet/Player_1";
import Pallet_P2 from "./Components/Pallet/Player_2";
import Player_1 from "./Components/Player_1";
import Player_2 from "./Components/Player_2";
import StartRound from "./Components/StartRound";
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
        <EndRound />
        <Inventory />
        <Player_2 />
        <Pallet_P2 />
        <Player_1 />
        <Pallet_P1 />
        <Log />
        {isDev}
      </div>
    );
  }
}

export default App;
