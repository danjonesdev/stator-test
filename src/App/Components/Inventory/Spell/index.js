import React, { Component } from "react";
import { store } from "statorgfc";
import includes from "lodash/includes";

class Item extends Component {
  constructor() {
    super();
    store.connectComponentState(this, ["GAME", "PLAYER_1"]);
  }

  addSpellToDeck = spell => {
    const player = store.get("PLAYER_1");

    // add spell to deck
    player.deck.push(spell);
    // increment erm
    player.erm++;

    store.set({ PLAYER_1: player });
  };

  addWrathToDeck = wrath => {
    const player = store.get("PLAYER_1");

    // add spell to deck
    player.active_wrath.push(wrath);
    // increment erm
    player.erm++;

    store.set({ PLAYER_1: player });
  };

  render() {
    const { spell, type } = this.props;
    const { GAME, PLAYER_1 } = this.state;
    const spellIcon = require(`../../../Assets/Spells/${spell.id}.svg`);

    if (
      GAME.isBattle ||
      includes(PLAYER_1.deck, spell) ||
      spell.level_required > PLAYER_1.level ||
      PLAYER_1.deck.length === PLAYER_1.deck_limit
    ) {
      return (
        <div className="inventory__spell  disabled">
          <img src={spellIcon} alt={spell.name} />
        </div>
      );
    }

    return (
      <div
        className="inventory__spell"
        onClick={() => this.addSpellToDeck(spell)}
      >
        <img src={spellIcon} alt={spell.name} />
      </div>
    );
  }
}

export default Item;
