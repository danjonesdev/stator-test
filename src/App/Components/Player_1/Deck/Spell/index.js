import React, { Component } from "react";
import { store } from "statorgfc";

import includes from "lodash/includes";

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

    moveP1(spell);
  };

  render() {
    const { spell, type } = this.props;
    const { GAME, PLAYER_1 } = this.state;
    const spellIcon = require(`../../../../Assets/Spells/${spell.id}.svg`);

    if (includes(PLAYER_1.active_spell, spell)) {
      return (
        <div
          className="deck__spell  deck__spell--active"
          style={{ background: `url(${Card})`, backgroundSize: "cover" }}
        >
          <img src={spellIcon} alt={spell.name} />
        </div>
      );
    }

    if (
      !GAME.isBattle ||
      spell.mana_cost > PLAYER_1.current_mana ||
      PLAYER_1.current_mana < spell.mana_cost ||
      PLAYER_1.active_spell.length >= PLAYER_1.active_spell_limit
    ) {
      return (
        <div
          className="deck__spell  disabled"
          style={{ background: `url(${Card})`, backgroundSize: "cover" }}
        >
          <img src={spellIcon} alt={spell.name} />
        </div>
      );
    }

    return (
      <div
        className="deck__spell"
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
