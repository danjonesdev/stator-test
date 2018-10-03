import React, { Component } from "react";
import { store } from "statorgfc";
import includes from "lodash/includes";

class Spell extends Component {
  constructor() {
    super();
    store.connectComponentState(this, ["GAME", "PLAYER_1"]);
  }

  addSpellToPallet = (playerName, spell) => {
    const player = store.get(`${playerName}`);

    if (
      // if pallet doesn't include spell
      !includes(player.pallet, spell.id) &&
      // if pallet is not full
      player.pallet_items < player.pallet_limit &&
      // if player meets spell level requirments
      player.level >= spell.level_required
    ) {
      // add spell to pallet
      player.pallet.push(spell.id);
      // increment pallet_items
      player.pallet_items++;

      store.set({ PLAYER_1: player });
    }
  };

  render() {
    const { spell, type } = this.props;
    const { GAME, PLAYER_1 } = this.state;
    const spellIcon = require(`../../../Assets/Spells/${spell.id}.svg`);

    if (
      GAME.isBattle ||
      includes(PLAYER_1.pallet, spell.id) ||
      spell.level_required > PLAYER_1.level
    ) {
      return (
        <div className="inventory__spell  spell  disabled">
          <img src={spellIcon} alt={spell.name} />
        </div>
      );
    }

    return (
      <div
        className="inventory__spell  spell"
        onClick={() => this.addSpellToPallet("PLAYER_1", spell)}
      >
        <img src={spellIcon} alt={spell.name} />
      </div>
    );
  }
}

export default Spell;
