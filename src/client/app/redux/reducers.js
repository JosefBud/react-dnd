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
  }
};

import {
  combineReducers
} from 'redux'

import {
  SET_XP,
  SET_LEVEL,
  SET_STAT_POINTS,
  SET_STAT_MODS,
  SET_SKILL_MODS,
  SET_SKILL_PROF,
  SET_SKILL_EXP
} from './actions'

function characterXP(state = initialState.characterXP, action) {
  switch (action.type) {
    case SET_XP:
      return action.number;
    default:
      return state;
  }
}

function characterLevel(state = initialState.characterLevel, action) {
  switch (action.type) {
    case SET_LEVEL:
      return action.number;
    default:
      return state;
  }
}

function characterStats(state = initialState.characterStats, action) {
  switch (action.type) {
    case SET_STAT_POINTS:
      return Object.assign({}, state, {
        [action.name]: {
          ...state[action.name],
          points: action.number
        }
      });
    case SET_STAT_MODS:
      return Object.assign({}, state, {
        [action.name]: {
          ...state[action.name],
          mod: action.number
        }
      });
    default:
      return state;
  }
}

function characterSkills(state = initialState.characterSkills, action) {
  switch (action.type) {
    case SET_SKILL_MODS:
      return Object.assign({}, state, {
        [action.name]: {
          ...state[action.name],
          mod: action.number
        }
      });
    case SET_SKILL_PROF:
      return Object.assign({}, state, {
        [action.name]: {
          ...state[action.name],
          prof: action.boolean
        }
      });
    case SET_SKILL_EXP:
      return Object.assign({}, state, {
        [action.name]: {
          ...state[action.name],
          exp: action.boolean
        }
      })
    default:
      return state;
  }
}

const todoApp = combineReducers({
  characterXP,
  characterLevel,
  characterStats,
  characterSkills
})

export default todoApp

/* function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
} */