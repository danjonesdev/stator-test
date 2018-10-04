import React, { Component } from "react";
import { store } from "statorgfc";
import find from "lodash/find";

import Spell from "./Spell";

class Deck extends Component {
  constructor() {
    super();
    store.connectComponentState(this, ["PLAYER_1"]);
  }

  render() {
    const { PLAYER_1 } = this.state;
    const { deck } = PLAYER_1;

    if (deck.length) {
      return (
        <div className="deck--p1">
          {deck.map((spell, i) => <Spell key={i} spell={spell} />)}
        </div>
      );
    }
    return false;
  }
}

export default Deck;
