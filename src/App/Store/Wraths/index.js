export const wraths = () => {
  return [
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
  ];
};

export default wraths;
