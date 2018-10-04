import { store } from "statorgfc";

import sample from "lodash/sample";
import filter from "lodash/filter";
import shuffle from "lodash/shuffle";
import forEach from "lodash/forEach";

const renderOpponent = () => {
  const player_1 = store.get("PLAYER_1");
  const player_2 = store.get("PLAYER_2");
  const spells = store.get("SPELLS");
  const wraths = store.get("WRATHS");

  // set player_2 name
  const names = ["Arkor", "Devrax"];
  player_2.name = sample(names);

  // set player_2 level
  player_2.level = player_1.level + 1;

  // set player_2 deck
  let deckSpells;
  // randomize spells
  deckSpells = shuffle(spells);
  // limit number of spells
  deckSpells = deckSpells.slice(0, player_2.deck_limit);
  // return spells that meet criteria
  deckSpells = filter(deckSpells, spell => {
    return spell.level_required <= player_2.level;
  });
  // adds to player_2 deck
  player_2.deck = deckSpells;

  // adds random wrath
  player_2.active_wrath.push(sample(wraths));

  console.log(player_2);

  store.set({ PLAYER_2: player_2 });
};

export default renderOpponent;
