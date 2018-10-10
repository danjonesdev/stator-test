import { store } from "statorgfc";

import includes from "lodash/includes";
import filter from "lodash/filter";
import sample from "lodash/sample";
import shuffle from "lodash/shuffle";

import endRound from "./endRound";

const moveP1 = spell => {
  const player_1 = store.get("PLAYER_1");
  const player_2 = store.get("PLAYER_2");
  const game = store.get("GAME");

  // take off mana const
  player_1.current_mana -= spell.mana_cost;
  // add spell to active_spell
  player_1.active_spell.push(spell);

  game.log.push(`${player_1.name} deals ${spell.name}`);

  store.set({ PLAYER_1: player_1 });
  store.set({ GAME: game });
};

export default moveP1;
