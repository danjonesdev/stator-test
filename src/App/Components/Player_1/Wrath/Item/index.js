import React, { Component } from "react";
import { store } from "statorgfc";
import indexOf from "lodash/indexOf";
import map from "lodash/map";

import moveP1 from "../../../../Workers/moveP1";
import Card from "../../../../Assets/card.jpg";

class Item extends Component {
  constructor() {
    super();
    store.connectComponentState(this, ["PLAYER_1"]);
  }

  render() {
    const { wrath } = this.props;
    const { PLAYER_1 } = this.state;
    const spellIcon = require(`../../../../Assets/Spells/${wrath.id}.svg`);

    return (
      <div
        className="deck__spell  spell"
        style={{ background: `url(${Card})`, backgroundSize: "cover" }}
      >
        <img src={spellIcon} alt={wrath.name} />
      </div>
    );
  }
}

export default Item;
