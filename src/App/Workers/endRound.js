import { store } from "statorgfc";

import includes from "lodash/includes";
import filter from "lodash/filter";
import concat from "lodash/concat";
import map from "lodash/map";

const endRound = () => {
  const player_1 = store.get("PLAYER_1");
  const player_2 = store.get("PLAYER_2");
  const game = store.get("GAME");

  // p1

  let player_1_damage = player_1.active_wrath[0].effect(player_1, player_2);

  if (player_1_damage > 0) {
    player_2.current_health -= player_1_damage;

    game.log.push(
      `${player_1.name} does ${player_1_damage} to ${player_2.name}`
    );
  } else {
    game.log.push(
      `${player_1.name}'s ${player_1.active_spell[0].name} is ineffective`
    );
  }

  // p2

  let player_2_damage = player_2.active_wrath[0].effect(player_2, player_1);

  if (player_2_damage > 0) {
    player_1.current_health -= player_2_damage;

    game.log.push(
      `${player_2.name} does ${player_2_damage} to ${player_1.name}`
    );
  } else {
    game.log.push(
      `${player_2.name}'s ${player_2.active_spell[0].name} is ineffective`
    );
  }

  // reset active_spell
  player_1.active_spell = [];
  player_2.active_spell = [];

  game.log.push("End Round");

  store.set({ PLAYER_1: player_1 });
  store.set({ PLAYER_2: player_2 });
  store.set({ GAME: game });
};

export default endRound;
