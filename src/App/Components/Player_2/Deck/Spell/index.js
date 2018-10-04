import React, { Component } from "react";
import { store } from "statorgfc";
import indexOf from "lodash/indexOf";
import map from "lodash/map";

import moveP1 from "../../../../Workers/moveP1";
import Card from "../../../../Assets/card.jpg";

class Spell extends Component {
  constructor() {
    super();
    store.connectComponentState(this, ["GAME", "PLAYER_2"]);
  }

  render() {
    const { spell, type } = this.props;
    const { GAME, PLAYER_2 } = this.state;
    const spellIcon = require(`../../../../Assets/Spells/${spell.id}.svg`);

    const activeIds = map(PLAYER_2.active_spell, "id");
    const currentActiveSpells = indexOf(activeIds, spell.id);

    if (currentActiveSpells >= 0) {
      return (
        <div
          className="deck__spell  spell  active--p2"
          style={{ background: `url(${Card})`, backgroundSize: "cover" }}
        >
          <img src={spellIcon} alt={spell.name} />
        </div>
      );
    }

    if (!GAME.isBattle || spell.mana_cost > PLAYER_2.current_mana) {
      return (
        <div
          className="deck__spell  spell  disabled"
          style={{ background: `url(${Card})`, backgroundSize: "cover" }}
        >
          <img src={spellIcon} alt={spell.name} />
        </div>
      );
    }

    return (
      <div
        className="deck__spell  spell"
        style={{ background: `url(${Card})`, backgroundSize: "cover" }}
      >
        <img src={spellIcon} alt={spell.name} />
      </div>
    );
  }
}

export default Spell;
