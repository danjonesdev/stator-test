import React, { Component } from "react";
import { store } from "statorgfc";
import reverse from "lodash/reverse";

class Player_1 extends Component {
  constructor() {
    super();
    store.connectComponentState(this, ["PLAYER_1"]);
  }

  render() {
    const { PLAYER_1 } = this.state;
    const { current_health } = PLAYER_1;

    return (
      <div className="health--p2">Health = {current_health}</div>
    );
  }
}

export default Player_1;
