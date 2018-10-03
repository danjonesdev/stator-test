import React, { Component } from "react";
import { store } from "statorgfc";
import find from "lodash/find";

import Spell from "./Spell";

class Pallet extends Component {
  constructor() {
    super();
    store.connectComponentState(this, ["PLAYER_1"]);
  }

  render() {
    const { PLAYER_1 } = this.state;
    const { pallet } = PLAYER_1;

    if (pallet.length) {
      return (
        <div className="pallet--p1">
          {pallet.map((spell, i) => <Spell key={i} spell={spell} />)}
        </div>
      );
    }
    return false;
  }
}

export default Pallet;
