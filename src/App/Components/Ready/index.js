import React, { Component } from "react";
import { store } from "statorgfc";

import moveP2 from "../../Workers/moveP2";

class Ready extends Component {
  constructor() {
    super();
    store.connectComponentState(this, ["GAME", "PLAYER_1", "PLAYER_2"]);
  }

  handleClick = () => {
    const game = store.get("GAME");
    game.turn = "PLAYER_2";
    moveP2();
    store.set({ GAME: game });
  };

  render() {
    const { GAME, PLAYER_1, PLAYER_2 } = this.state;

    if (
      GAME.turn === 'PLAYER_1' &&
      PLAYER_1.active_spell.length
    ) {
      return (
        <p className="start-round" onClick={this.handleClick}>
          Ready!
        </p>
      );
    }

    return false;
  }
}

export default Ready;
