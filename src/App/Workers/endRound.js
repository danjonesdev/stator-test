import { store } from "statorgfc";

import includes from "lodash/includes";
import filter from "lodash/filter";
import sample from "lodash/sample";
import shuffle from "lodash/shuffle";

const endRound = () => {
  const player_1 = store.get("PLAYER_1");
  const player_2 = store.get("PLAYER_2");
  const game = store.get("GAME");

  // fightttttttt]

  // reset active_spells
  player_1.active_spells = [];
  player_2.active_spells = [];

  game.log.push("End Round");

  store.set({ PLAYER_1: player_1 });
  store.set({ PLAYER_2: player_2 });
  store.set({ GAME: game });
};

export default endRound;
