import { store } from "statorgfc";

export const spells = () => {
  return [
    {
      id: "waterBolt",
      name: "Water Bolt",
      attack: 20,
      health: 0,
      mana_cost: 20,
      level_required: 1,
      effect: null
    },
    {
      id: "fireBolt",
      name: "Fire Bolt",
      attack: 40,
      health: 0,
      mana_cost: 40,
      level_required: 1,
      effect: null
    },
    {
      id: "healthPotion",
      name: "Health Potion (Small)",
      attack: 0,
      health: 0,
      mana_cost: 30,
      level_required: 1,
      effect: {
        description: "Instant +40 mana for next round",
        func: (giverRound, recieverRound, currentPlayer) => {
          let player = store.get(`${currentPlayer}`);
          player.current_mana += 40;

          if (currentPlayer === "PLAYER_1") {
            store.set({ PLAYER_1: player });
          }
          if (currentPlayer === "PLAYER_2") {
            store.set({ PLAYER_2: player });
          }

          return giverRound;
        }
      }
    },
    {
      id: "manaPotion",
      name: "Mana Potion (Small)",
      attack: 0,
      health: 0,
      mana_cost: 30,
      level_required: 1,
      effect: {
        description: "Instant +40 mana for next round",
        func: (giverRound, recieverRound, currentPlayer) => {
          let player = store.get(`${currentPlayer}`);
          player.current_mana += 40;

          if (currentPlayer === "PLAYER_1") {
            store.set({ PLAYER_1: player });
          }
          if (currentPlayer === "PLAYER_2") {
            store.set({ PLAYER_2: player });
          }

          return giverRound;
        }
      }
    },
    {
      id: "summonGorah",
      name: "Summon Gor'ah",
      attack: 25,
      health: 10,
      mana_cost: 35,
      level_required: 1,
      effect: {
        description: "Whilst active, +10 Attack for all your active cards.",
        func: (giverRound, recieverRound, currentPlayer) => {
          let player = giverRound;
          player.active_damage += (player.active_spell.length - 1) * 10;

          return player;
        }
      }
    }
    // {
    //   id: "waterShield",
    //   name: "Water Shield",
    //   attack: 0,
    //   health: 25,
    //   mana_cost: 25,
    //   level_required: 1,
    //   effect: null
    // },
    // {
    //   id: "fireShield",
    //   name: "Fire Shield",
    //   attack: 0,
    //   health: 35,
    //   mana_cost: 35,
    //   level_required: 1,
    //   effect: null
    // }
  ];
};

export default spells;
