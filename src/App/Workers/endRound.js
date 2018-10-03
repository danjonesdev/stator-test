import { store } from "statorgfc";

import includes from "lodash/includes";
import filter from "lodash/filter";
import concat from "lodash/concat";
import map from "lodash/map";

const endRound = () => {
  const player_1 = store.get("PLAYER_1");
  const player_2 = store.get("PLAYER_2");
  const game = store.get("GAME");

  // fightttttttt

  const player_1_attack = map(player_1.active_spells, "attack");
  const player_2_defence = map(player_2.active_spells, "defence");

  if (player_1_attack > player_2_defence) {
    player_2.current_health -= player_1_attack;
  }

  const player_2_attack = map(player_2.active_spells, "attack");
  const player_1_defence = map(player_1.active_spells, "defence");

  if (player_2_attack > player_1_defence) {
    player_1.current_health -= player_2_attack;
  }

  // reset active_spells
  player_1.active_spells = [];
  player_2.active_spells = [];

  game.log.push("End Round");

  store.set({ PLAYER_1: player_1 });
  store.set({ PLAYER_2: player_2 });
  store.set({ GAME: game });
};

export default endRound;
