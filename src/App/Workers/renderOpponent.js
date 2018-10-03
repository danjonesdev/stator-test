import { store } from "statorgfc";

import sample from "lodash/sample";
import filter from "lodash/filter";
import shuffle from "lodash/shuffle";
import forEach from "lodash/forEach";

const renderOpponent = () => {
  const player_1 = store.get("PLAYER_1");
  const player_2 = store.get("PLAYER_2");
  const spells = store.get("SPELLS");

  // set player_2 name
  const names = ["Arkor", "Devrax"];
  player_2.name = sample(names);

  // set player_2 level
  player_2.level = player_1.level + 1;

  // set player_2 pallet
  let palletSpells;
  // randomize spells
  palletSpells = shuffle(spells);
  // limit number of spells
  palletSpells = palletSpells.slice(0, player_2.pallet_limit);
  // return spells that meet criteria
  palletSpells = filter(palletSpells, spell => {
    return spell.level_required <= player_2.level;
  });
  // adds to player_2 pallet
  player_2.pallet = palletSpells;

  store.set({ PLAYER_2: player_2 });
};

export default renderOpponent;
