import React, { Component } from "react";
import { store } from "statorgfc";
import find from "lodash/find";

import Spell from "./Spell";

class Pallet extends Component {
  constructor() {
    super();
    store.connectComponentState(this, ["PLAYER_2"]);
  }

  render() {
    const { PLAYER_2 } = this.state;
    const { pallet } = PLAYER_2;

    if (pallet.length) {
      return (
        <div className="pallet--p2">
          {pallet.map((spell, i) => <Spell key={i} spell={spell} />)}
        </div>
      );
    }
    return false;
  }
}

export default Pallet;
