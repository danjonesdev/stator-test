import React, { Component } from "react";
import { store } from "statorgfc";
import find from "lodash/find";

import Item from "./Item";

class Wrath extends Component {
  constructor() {
    super();
    store.connectComponentState(this, ["PLAYER_1"]);
  }

  render() {
    const { PLAYER_1 } = this.state;
    const { active_wrath } = PLAYER_1;

    if (active_wrath.length) {
      return (
        <div className="wrath--p1">
          <Item wrath={active_wrath[0]} />
        </div>
      );
    }
    return false;
  }
}

export default Wrath;
