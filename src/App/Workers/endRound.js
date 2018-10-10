import { store } from "statorgfc";

import includes from "lodash/includes";
import filter from "lodash/filter";
import concat from "lodash/concat";
import map from "lodash/map";
import sample from "lodash/sample";

const endRound = () => {
  var PLAYER_1 = store.get("PLAYER_1");
  var PLAYER_2 = store.get("PLAYER_2");
  const game = store.get("GAME");

  // player_1 damage to target and target's health
  let _p1 = {
    damageToTarget: 0,
    targetHealth: PLAYER_2.active_spell[0].health
  };
  
  // player_2 damage to target and target's health
  let _p2 = {
    damageToTarget: 0,
    // target card's health
    targetHealth: PLAYER_1.active_spell[0].health
  };

  // p1: loop active spells
  for (let i = 0; i < PLAYER_1.active_spell.length; i++) {
    const spell = PLAYER_1.active_spell[i];
    // add spells attack to round damage
    _p1.damageToTarget += spell.attack;
    // if effect, return from function
    if (spell.effect) {
      _p1 = spell.effect.func(
        _p1,
        _p2,
        "PLAYER_1"
      );
    }
  }

  console.log('_p1', _p1);

  // inflict p1 damage to targeted p2 card
  _p1.targetHealth -= _p1.damageToTarget;
  // check if defeated target
  if (_p1.targetHealth <= 0) {
    // card is defeated
    // find and remove target card from p2
  }

  // resovle inflictions to selected cards
  // TODO: p1round.damage to p2round.health
  // TODO: p1round.health to p2round.damage

  // reset active_spell
  // PLAYER_1.active_spell = [];
  // PLAYER_2.active_spell = [];

  // add end of round mana
  PLAYER_1.current_mana += 20;
  PLAYER_2.current_mana += 20;

  game.log.push("End Round");

  store.set({ PLAYER_1: PLAYER_1 });
  store.set({ PLAYER_2: PLAYER_2 });
  store.set({ GAME: game });
};

export default endRound;
