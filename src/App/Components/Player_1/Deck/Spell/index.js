import React, { Component } from "react";
import { store } from "statorgfc";
import indexOf from "lodash/indexOf";
import map from "lodash/map";

import moveP1 from "../../../../Workers/moveP1";
import Card from "../../../../Assets/card.jpg";

class Spell extends Component {
  constructor() {
    super();
    store.connectComponentState(this, ["GAME", "PLAYER_1"]);
  }

  handleClick = spell => {
    const player_1 = store.get("PLAYER_1");
    const player_2 = store.get("PLAYER_2");
    const game = store.get("GAME");

    if (
      // if not already dealt card
      player_1.active_spell.length === 0 &&
      // if enough mana
      player_1.current_mana >= spell.mana_cost
    ) {
      moveP1(spell);
    }
  };

  render() {
    const { spell, type } = this.props;
    const { GAME, PLAYER_1 } = this.state;
    const spellIcon = require(`../../../../Assets/Spells/${spell.id}.svg`);

    const activeIds = map(PLAYER_1.active_spell, "id");
    const currentActiveSpells = indexOf(activeIds, spell.id);

    if (currentActiveSpells >= 0) {
      return (
        <div
          className="deck__spell  spell  active--p1"
          style={{ background: `url(${Card})`, backgroundSize: "cover" }}
        >
          <img src={spellIcon} alt={spell.name} />
        </div>
      );
    }

    if (!GAME.isBattle || spell.mana_cost > PLAYER_1.current_mana) {
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
        onClick={() => {
          this.handleClick(spell);
        }}
      >
        <img src={spellIcon} alt={spell.name} />
      </div>
    );
  }
}

export default Spell;
