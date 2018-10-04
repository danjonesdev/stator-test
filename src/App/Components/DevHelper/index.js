import React, { Component } from "react";
import { store } from "statorgfc";

class DevHelper extends Component {
  constructor() {
    super();
    store.connectComponentState(this, ["GAME", "PLAYER_1"]);
  }

  render() {
    const { GAME, PLAYER_1 } = this.state;

    return (
      <div className="dev">
        <p>GAME.round: {GAME.round}</p>
        <p>GAME.isBattle: {GAME.isBattle}</p>
        <p>PLAYER_1.name: {PLAYER_1.name}</p>
        <p>PLAYER_1.level: {PLAYER_1.level}</p>
        <p>PLAYER_1.current_health: {PLAYER_1.current_health}</p>
        <p>PLAYER_1.max_health: {PLAYER_1.max_health}</p>
        <p>PLAYER_1.current_mana: {PLAYER_1.current_mana}</p>
        <p>PLAYER_1.max_mana: {PLAYER_1.max_mana}</p>
        <p>PLAYER_1.deck_limit: {PLAYER_1.deck_limit}</p>
      </div>
    );
  }
}

export default DevHelper;
