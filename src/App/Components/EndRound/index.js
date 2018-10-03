import React, { Component } from "react";
import { store } from "statorgfc";

import endRound from "../../Workers/endRound";

class StartRound extends Component {
  constructor() {
    super();
    store.connectComponentState(this, ["GAME", "PLAYER_1", "PLAYER_2"]);
  }

  handleClick = () => {
    endRound();
  };

  render() {
    const { GAME, PLAYER_1, PLAYER_2 } = this.state;

    if (
      GAME.isBattle &&
      PLAYER_1.active_spells.length &&
      PLAYER_2.active_spells.length
    ) {
      return (
        <p className="start-round" onClick={this.handleClick}>
          FIGHT!
        </p>
      );
    }

    return false;
  }
}

export default StartRound;
