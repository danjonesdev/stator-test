import { store } from "statorgfc";

import sample from "lodash/sample";

const newRound = () => {
  const game = store.get("GAME");

  // set game to isBattle
  game.isBattle = true;

  // increment round
  game.round++;

  // set player turn
  game.turn = sample(["PLAYER_1", "PLAYER_2"]);

  // log
  game.log.push(`Round: ${game.round}`);
  game.log.push(`${game.turn}'s' Move`);

  store.set({ GAME: game });
};

export default newRound;
