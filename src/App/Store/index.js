import { store } from "statorgfc";

const initStore = () => {
  store.initialize({
    ENV: {
      isDev: false
    },

    GAME: {
      round: 0,
      isBattle: false,
      log: [],
      turn: null,
      isRoundEnd: false
    },

    PLAYER_1: {
      name: "Dan",
      level: 1,
      current_health: 100,
      max_health: 100,
      current_mana: 100,
      max_mana: 100,
      pallet_items: 0,
      pallet_limit: 2,
      pallet: [],
      active_spells: []
    },

    PLAYER_2: {
      name: null,
      level: null,
      current_health: 120,
      max_health: 120,
      current_mana: 120,
      max_mana: 120,
      pallet_items: 0,
      pallet_limit: 2,
      pallet: [],
      active_spells: []
    },

    SPELLS: [
      {
        id: "waterBolt",
        name: "Water Bolt",
        type: "attack",
        mana_cost: 25,
        level_required: 1
      },
      {
        id: "fireBolt",
        name: "Fire Bolt",
        type: "attack",
        mana_cost: 25,
        level_required: 1
      },
      {
        id: "iceBolt",
        name: "Ice Bolt",
        type: "attack",
        mana_cost: 25,
        level_required: 2
      },
      {
        id: "lavaBolt",
        name: "Lava Bolt",
        type: "attack",
        mana_cost: 25,
        level_required: 2
      }
    ]
  });
};

export default initStore;
