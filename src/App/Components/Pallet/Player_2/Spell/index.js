import React, { Component } from "react";
import { store } from "statorgfc";

import Card from '../../../../Assets/card.jpg';

class Spell extends Component {
  constructor() {
    super();
    store.connectComponentState(this, ["GAME", "PLAYER_2"]);
  }

  render() {
    const { spell, type } = this.props;
    const { GAME, PLAYER_2 } = this.state;
    const spellIcon = require(`../../../../Assets/Spells/${spell.id}.svg`);

    if (!GAME.isBattle || spell.mana_cost > PLAYER_2.current_mana) {
      return (
        <div className="pallet__spell  spell  disabled" style={{background: `url(${Card})`, backgroundSize: 'cover'}}>
          <img src={spellIcon} alt={spell.name} />
        </div>
      );
    }

    return (
      <div className="pallet__spell  spell" style={{background: `url(${Card})`, backgroundSize: 'cover'}}>
        <img src={spellIcon} alt={spell.name} />
      </div>
    );
  }
}

export default Spell;
