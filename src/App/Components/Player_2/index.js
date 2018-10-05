import React, { Component } from "react";
import { store } from "statorgfc";
import reverse from "lodash/reverse";

import Deck from "./Deck";
import Wrath from "./Wrath";

class Player_1 extends Component {
  constructor() {
    super();
    store.connectComponentState(this, ["PLAYER_2"]);
  }

  render() {
    const { PLAYER_2 } = this.state;
    const { current_health, current_mana } = PLAYER_2;

    return (
      <React.Fragment>
        <div className="health--p2">
          Health = {current_health} | Mana = {current_mana}
        </div>
        <Deck />
        <Wrath />
      </React.Fragment>
    );
  }
}

export default Player_1;
