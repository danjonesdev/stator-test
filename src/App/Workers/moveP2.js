import { store } from "statorgfc";

import includes from "lodash/includes";
import filter from "lodash/filter";
import sample from "lodash/sample";
import shuffle from "lodash/shuffle";

import endRound from "./endRound";

const moveP2 = () => {
  const player_2 = store.get("PLAYER_2");
  const game = store.get("GAME");

  // TODO: if player 1 has active moves
  // if attack card, throw random defence
  // if defence card, throw random attack
  // else throw random anything (even passive?)

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
