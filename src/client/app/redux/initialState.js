const initialState = {
  characterXP: 0,
  characterLevel: 1,
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
  }
}

export default initialState;