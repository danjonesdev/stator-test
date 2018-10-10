import React, { Component } from "react";
import { store } from "statorgfc";
import reverse from "lodash/reverse";

class Log extends Component {
  constructor() {
    super();
    store.connectComponentState(this, ["PLAYER_1", "PLAYER_2"]);
  }

  render() {
    const { PLAYER_1 } = this.state;
    const { current_health, current_mana } = PLAYER_1;

    return (
      <React.Fragment>
        <div className="status-bar--p1">
          <span className="status-bar__health">Health = {current_health}</span>
          <span className="status-bar__mana">Mana = {current_mana}</span>
        </div>
        <div className="status-bar--p2">
          <span className="status-bar__health">Health = {current_health}</span>
          <span className="status-bar__mana">Mana = {current_mana}</span>
        </div>
      </React.Fragment>
    );
  }
}

export default Log;
