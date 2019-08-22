const initialState = {
  characterXP: 0,
  characterLevel: 1,
  hitPoints: {
    max: 0,
    current: 0,
    usedHitDice: 0,
    remainingHitDice: 0
  },
  deathSaves: {
    successes: [false, false, false],
    failures: [false, false, false]
  },
  speed: {
    normal: 0,
    encumbered: 0
  },
  characterStats: {
    strength: {
      points: 0,
      mod: 0,
      related: ["athletics"]
    },
    dexterity: {
      points: 0,
      mod: 0,
      related: ["acrobatics", "sleightOfHand", "stealth"]
    },
    constitution: {
      points: 0,
      mod: 0,
      related: []
    },
    intelligence: {
      points: 0,
      mod: 0,
      related: ["arcana", "history", "investigation", "nature", "religion"]
    },
    wisdom: {
      points: 0,
      mod: 0,
      related: [
        "animalHandling",
        "insight",
        "medicine",
        "perception",
        "survival"
      ]
    },
    charisma: {
      points: 0,
      mod: 0,
      related: ["deception", "intimidation", "performance", "persuasion"]
    }
  },
  characterSkills: {
    acrobatics: {
      mod: 0,
      prof: false,
      exp: false
    },
    animalHandling: {
      mod: 0,
      prof: false,
      exp: false
    },
    arcana: {
      mod: 0,
      prof: false,
      exp: false
    },
    athletics: {
      mod: 0,
      prof: false,
      exp: false
    },
    deception: {
      mod: 0,
      prof: false,
      exp: false
    },
    history: {
      mod: 0,
      prof: false,
      exp: false
    },
    insight: {
      mod: 0,
      prof: false,
      exp: false
    },
    intimidation: {
      mod: 0,
      prof: false,
      exp: false
    },
    investigation: {
      mod: 0,
      prof: false,
      exp: false
    },
    medicine: {
      mod: 0,
      prof: false,
      exp: false
    },
    nature: {
      mod: 0,
      prof: false,
      exp: false
    },
    perception: {
      mod: 0,
      prof: false,
      exp: false
    },
    performance: {
      mod: 0,
      prof: false,
      exp: false
    },
    persuasion: {
      mod: 0,
      prof: false,
      exp: false
    },
    religion: {
      mod: 0,
      prof: false,
      exp: false
    },
    sleightOfHand: {
      mod: 0,
      prof: false,
      exp: false
    },
    stealth: {
      mod: 0,
      prof: false,
      exp: false
    },
    survival: {
      mod: 0,
      prof: false,
      exp: false
    }
  },
  savingThrows: {
    strength: {
      mod: 0,
      prof: false
    },
    dexterity: {
      mod: 0,
      prof: false
    },
    constitution: {
      mod: 0,
      prof: false
    },
    intelligence: {
      mod: 0,
      prof: false
    },
    wisdom: {
      mod: 0,
      prof: false
    },
    charisma: {
      mod: 0,
      prof: false
    },
    allResistances: ["None", "Acid", "Bludgeoning", "Cold", "Fire", "Force", "Lightning", "Necrotic", "Piercing", "Poison", "Psychic", "Radiant", "Slashing", "Thunder"],
    chosenResistances: {
      1: "None",
      2: "None",
      3: "None",
      4: "None",
      5: "None",
      6: "None"
    }
  },
  passiveWisdom: 10
}

export default initialState;