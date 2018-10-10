import React, { Component } from "react";
import { store } from "statorgfc";

import Spell from "./Spell";
import Wrath from "./Wrath";

class Inventory extends Component {
  constructor() {
    super();
    store.connectComponentState(this, ["SPELLS", "WRATHS"]);
  }

  render() {
    const spells = this.state.SPELLS;
    const wraths = this.state.WRATHS;

    return (
      <div className="inventory">
        <p className="inventory__tag">Spells</p>
        {spells.map((spell, i) => <Spell key={i} spell={spell} />)}
        <p className="inventory__tag">Wrath</p>
        {wraths.map((wrath, i) => <Wrath key={i} wrath={wrath} />)}
      </div>
    );
  }
}

export default Inventory;
