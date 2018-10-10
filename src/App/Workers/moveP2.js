import { store } from "statorgfc";

import includes from "lodash/includes";
import shuffle from "lodash/shuffle";
import sample from "lodash/sample";
import random from "lodash/random";

import endRound from "./endRound";

const moveP2 = () => {
  const player_2 = store.get("PLAYER_2");
  const game = store.get("GAME");

  // shuffles deck
  const shuffleDeck = shuffle(player_2.deck);
  // selects random number of spells to deal
  const numberOfDeals = random(1, player_2.active_spell_limit);

  // loops thorugh shuffled deck and deals
  for (let i = 0; i < shuffleDeck.length; i++) {

    // set player_2 active
    let spell = shuffleDeck[i];
    // take off mana const
    player_2.current_mana -= spell.mana_cost;
    // adds to player_2 active_spell
    player_2.active_spell.push(spell);

    game.log.push(`${player_2.name} deals ${spell.name}`);

    // if cards dealt matches numberOfDeals
    if (i + 1 === numberOfDeals) break;
  }

  store.set({ PLAYER_2: player_2 });
  store.set({ GAME: game });
};

export default moveP2;
