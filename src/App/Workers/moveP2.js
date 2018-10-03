import { store } from "statorgfc";

import includes from "lodash/includes";
import filter from "lodash/filter";
import sample from "lodash/sample";
import shuffle from "lodash/shuffle";

import endRound from "./endRound";

const moveP2 = () => {
  const player_2 = store.get("PLAYER_2");
  const game = store.get("GAME");

  // set player_2 active
  let spell;
  // get random spell
  spell = sample(player_2.pallet);
  // take off mana const
  player_2.current_mana -= spell.mana_cost;
  // adds to player_2 active_spells
  player_2.active_spells.push(spell);

  game.log.push(`${player_2.name} uses ${spell.name}`);

  store.set({ PLAYER_2: player_2 });
  store.set({ GAME: game });
};

export default moveP2;
