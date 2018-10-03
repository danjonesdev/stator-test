import { store } from "statorgfc";

import sample from "lodash/sample";

const newRound = () => {
  const player_1 = store.get("PLAYER_1");
  const player_2 = store.get("PLAYER_2");
  const game = store.get("GAME");

  // set game to isBattle
  game.isBattle = true;

  // increment round
  game.round++;

  // set player turn
  game.turn = sample(["PLAYER_1", "PLAYER_2"]);

  // set turn number
  game.turnNumber =
    game.turnNumber === 1 ? (game.turnNumber = 2) : (game.turnNumber = 1);

  // log
  game.log.push(`Round: ${game.round}`);
  game.log.push(`${game.turn}'s' Move`);

  store.set({ GAME: game });
};

export default newRound;
