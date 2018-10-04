import React, { Component } from "react";
import { store } from "statorgfc";

import newRound from "../../Workers/newRound";
import renderOpponent from "../../Workers/renderOpponent";
import moveP2 from "../../Workers/moveP2";

class StartRound extends Component {
  constructor() {
    super();
    store.connectComponentState(this, ["GAME", "PLAYER_1"]);
  }

  handleRound = () => {
    let game = store.get("GAME");
    if (game.round === 0) renderOpponent();

    newRound();

    game = store.get("GAME");
    if (game.turn === "PLAYER_2") moveP2();
  };

  render() {
    const { GAME, PLAYER_1 } = this.state;

    if (
      !GAME.isBattle &&
      PLAYER_1.deck.length === PLAYER_1.deck_limit &&
      PLAYER_1.active_wrath.length === 1
    ) {
      return (
        <p className="start-round" onClick={this.handleRound}>
          Start Round
        </p>
      );
    }

    return false;
  }
}

export default StartRound;
