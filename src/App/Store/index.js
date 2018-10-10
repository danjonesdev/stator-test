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
      deck: [],
      deck_limit: 2,
      active_spell: [],
      active_spell_limit: 2,
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
      deck: [],
      deck_limit: 2,
      active_spell: [],
      active_spell_limit: 2,
      active_wrath: []
    },

    SPELLS: [
      {
        id: "waterBolt",
        name: "Water Bolt",
        attack: 25,
        health: 0,
        mana_cost: 25,
        level_required: 1,
        effect: null
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
      },
      {
        id: "iceBolt",
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

            if ((currentPlayer === 'PLAYER_1')) {
              store.set({ 'PLAYER_1': player });
            }
            if ((currentPlayer === 'PLAYER_2')) {
              store.set({ 'PLAYER_2': player });
            }

            return giverRound;
          }
        }
      },
      {
        id: "fireBolt",
        name: "Fire Bolt",
        attack: 35,
        health: 0,
        mana_cost: 35,
        level_required: 1,
        effect: null
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
        attack: 0,
        health: 25,
        mana_cost: 25,
        level_required: 1,
        effect: null
      },
      {
        id: "fireShield",
        name: "Fire Shield",
        attack: 0,
        health: 35,
        mana_cost: 35,
        level_required: 1,
        effect: null
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
