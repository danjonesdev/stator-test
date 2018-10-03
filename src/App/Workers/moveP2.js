import { store } from "statorgfc";

import includes from "lodash/includes";
import filter from "lodash/filter";
import sample from "lodash/sample";
import shuffle from "lodash/shuffle";

const moveP2 = () => {
  const player_1 = store.get("PLAYER_1");
  const player_2 = store.get("PLAYER_2");
  const game = store.get("GAME");

  console.log("movep2");

  // check player_1's active cards
  if (player_1.active_spells.length) {
    // if player_1 active is attack then use random deffence
    if (includes(player_1.active_spells, "attack")) {
    }
    // if player_1 active is deffence then use either attack or passive
    if (includes(player_1.active_spells, "defence")) {
    }
  } else {
    // else use random spell
    // // set player_2 active
    // let activeSpell;
    // // randomize spells
    // activeSpell = shuffle(player_2.pallet);
    //
    // // return spells that meet criteria
    // activeSpell = filter(activeSpell, { type: "attack" });
    //
    // // limit number of spells
    // activeSpell = activeSpell[1];
    //
    // console.log(activeSpell);
    //
    // // adds id to player_2 active
    // player_2.active.push(activeSpell);
  }

  game.log.push(`${player_2.name} uses ...`);

  store.set({ GAME: game });
};

export default moveP2;
