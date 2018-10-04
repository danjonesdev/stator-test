import React, { Component } from "react";
import { store } from "statorgfc";
import find from "lodash/find";

import Spell from "./Spell";

class Deck extends Component {
  constructor() {
    super();
    store.connectComponentState(this, ["PLAYER_2"]);
  }

  render() {
    const { PLAYER_2 } = this.state;
    const { deck } = PLAYER_2;

    if (deck.length) {
      return (
        <div className="deck--p2">
          {deck.map((spell, i) => <Spell key={i} spell={spell} />)}
        </div>
      );
    }
    return false;
  }
}

export default Deck;
