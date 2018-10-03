import React, { Component } from "react";
import { store } from "statorgfc";
import find from "lodash/find";

import Spell from "./Spell";

class Pallet extends Component {
  constructor() {
    super();
    store.connectComponentState(this, ["PLAYER_2"]);
  }

  renderSpell = (spellId, i) => {
    const spells = store.get("SPELLS");
    const spell = find(spells, { id: spellId });

    return <Spell key={i} spell={spell} />;
  };

  render() {
    const { PLAYER_2 } = this.state;
    const { pallet } = PLAYER_2;

    if (pallet.length) {
      return (
        <div className="pallet--p2">
          {pallet.map((spellId, i) => this.renderSpell(spellId, i))}
        </div>
      );
    }
    return false;
  }
}

export default Pallet;
