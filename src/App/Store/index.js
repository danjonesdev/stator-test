import { store } from "statorgfc";

import game from "./Game";
import { player_1, player_2 } from "./Players";
import spells from "./Spells";
import wraths from "./Wraths";

const initStore = () => {
  store.initialize({
    ENV: {
      isDev: false
    },

    GAME: game(),
    PLAYER_1: player_1(),
    PLAYER_2: player_2(),
    SPELLS: spells(),
    WRATHS: wraths()
  });
};

export default initStore;
