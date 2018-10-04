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
      erm: 0,
      deck_limit: 2,
      deck: [],
      active_spell: [],
      active_wrath: []
    },

    PLAYER_2: {
      name: null,
      level: null,
      current_health: 120,
      max_health: 120,
      current_mana: 120,
      max_mana: 120,
      erm: 0,
      deck_limit: 2,
      deck: [],
      active_spell: [],
      active_wrath: []
    },

    SPELLS: [
      {
        id: "waterBolt",
        name: "Water Bolt",
        type: "attack",
        attack: 25,
        defence: 0,
        mana_cost: 25,
        level_required: 1
      },
      {
        id: "fireBolt",
        name: "Fire Bolt",
        type: "attack",
        attack: 35,
        defence: 0,
        mana_cost: 35,
        level_required: 1
      },
      // {
      //   id: "iceBolt",
      //   name: "Ice Bolt",
      //   type: "attack",
      //   mana_cost: 25,
      //   level_required: 2
      // },
      // {
      //   id: "lavaBolt",
      //   name: "Lava Bolt",
      //   type: "attack",
      //   mana_cost: 25,
      //   level_required: 2
      // },
      {
        id: "waterShield",
        name: "Water Shield",
        type: "defence",
        attack: 0,
        defence: 25,
        mana_cost: 25,
        level_required: 1
      },
      {
        id: "fireShield",
        name: "Fire Shield",
        type: "defence",
        attack: 0,
        defence: 35,
        mana_cost: 35,
        level_required: 1
      }
    ],
    WRATHS: [
      {
        id: "shroudedCrux",
        name: "Shrouded Crux",
        level_required: 1,
        effect: (giver, reciever) => {
          let giverAttack = giver.active_spell[0].attack;
          let recieverDefence = reciever.active_spell[0].defence;

          // 20% extra fire damage
          giverAttack +=
            giver.active_spell[0].element === "fire"
              ? (giverAttack / 100) * 20
              : 0;

          return giverAttack - recieverDefence;
        }
      },
      {
        id: "ardanosVoice",
        name: "Adranos' Voice",
        level_required: 1,
        effect: (giver, reciever) => {
          let giverAttack = giver.active_spell[0].attack;
          let recieverDefence = reciever.active_spell[0].defence;

          // 20% extra fire damage
          giverAttack +=
            giver.active_spell[0].element === "fire"
              ? (giverAttack / 100) * 20
              : 0;

          return giverAttack - recieverDefence;
        }
      }
    ]
  });
};

export default initStore;
