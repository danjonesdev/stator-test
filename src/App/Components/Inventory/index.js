import React, { Component } from "react";
import { store } from "statorgfc";

import Spell from './Spell';

class Inventory extends Component {
  constructor() {
    super();
    store.connectComponentState(this, ["SPELLS"]);
  }

  render() {
    const spells = this.state.SPELLS;

    return (
      <div className="inventory">
        {spells.map((spell, i) =>
          <Spell key={i} spell={spell} />
        )}
      </div>
    );
  }
}

export default Inventory;
