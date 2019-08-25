import initialState from './initialState';

import {
  combineReducers
} from 'redux'

import {
  SET_XP,
  SET_LEVEL,
  SET_MAX_HP,
  SET_CURRENT_HP,
  SET_USED_HIT_DICE,
  SET_REMAINING_HIT_DICE,
  SET_STAT_POINTS,
  SET_STAT_MODS,
  SET_SKILL_MODS,
  SET_SKILL_PROF,
  SET_SKILL_EXP,
  SET_SAVING_THROW_MOD,
  SET_SAVING_THROW_PROF,
  SET_RESISTANCES,
  SET_DEATH_SAVES,
  SET_SPEED,
  SET_PASSIVE_WISDOM,
  SET_PROF_BONUS,
  SET_ARMOR_CLASS,
  SET_INITIATIVE,
  SET_INSPIRATION,
  SET_ABILITY_SAVE_STAT,
  SET_ABILITY_SAVE_DC
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

function hitPoints(state = initialState.hitPoints, action) {
  switch (action.type) {
    case SET_MAX_HP:
      return Object.assign({}, state, {
        max: action.number
      });
    case SET_CURRENT_HP:
      return Object.assign({}, state, {
        current: action.number
      });
    case SET_USED_HIT_DICE:
      return Object.assign({}, state, {
        usedHitDice: action.number
      });
    case SET_REMAINING_HIT_DICE:
      return Object.assign({}, state, {
        remainingHitDice: action.level - state.usedHitDice
      })
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

function savingThrows(state = initialState.savingThrows, action) {
  switch (action.type) {
    case SET_SAVING_THROW_MOD:
      return Object.assign({}, state, {
        [action.name]: {
          ...state[action.name],
          mod: action.number
        }
      });
    case SET_SAVING_THROW_PROF:
      return Object.assign({}, state, {
        [action.name]: {
          ...state[action.name],
          prof: action.boolean
        }
      });
    case SET_RESISTANCES:
      return Object.assign({}, state, {
        chosenResistances: {
          ...state.chosenResistances,
          [action.key]: action.name
        }
      });
    default:
      return state;
  }
}

function deathSaves(state = initialState.deathSaves, action) {
  switch (action.type) {
    case SET_DEATH_SAVES:
      let freshArray = state[action.name];
      freshArray[action.index] = !freshArray[action.index];
      return Object.assign({}, state, {
        [action.name]: freshArray
      });
    default:
      return state;
  }
}

function speed(state = initialState.speed, action) {
  switch (action.type) {
    case SET_SPEED:
      return Object.assign({}, state, {
        [action.name]: action.number
      })
    default:
      return state;
  }
}

function passiveWisdom(state = initialState.passiveWisdom, action) {
  switch (action.type) {
    case SET_PASSIVE_WISDOM:
      return action.number;
    default:
      return state;
  }
}

function profBonus(state = initialState.profBonus, action) {
  switch (action.type) {
    case SET_PROF_BONUS:
      return action.number;
    default:
      return state;
  }
}

function armorClass(state = initialState.armorClass, action) {
  switch (action.type) {
    case SET_ARMOR_CLASS:
      return action.number;
    default:
      return state;
  }
}

function initiative(state = initialState.initiative, action) {
  switch (action.type) {
    case SET_INITIATIVE:
      return action.number;
    default:
      return state;
  }
}

function inspiration(state = initialState.inspiration, action) {
  switch (action.type) {
    case SET_INSPIRATION:
      return action.boolean;
    default:
      return state;
  }
}

function abilitySave(state = initialState.abilitySave, action) {
  switch (action.type) {
    case SET_ABILITY_SAVE_STAT:
      return Object.assign({}, state, {
        stat: action.name
      });
    case SET_ABILITY_SAVE_DC:
      return Object.assign({}, state, {
        dc: action.number
      });
    default:
      return state;
  }
}

const allReducers = combineReducers({
  characterXP,
  characterLevel,
  hitPoints,
  characterStats,
  characterSkills,
  savingThrows,
  deathSaves,
  speed,
  passiveWisdom,
  profBonus,
  armorClass,
  initiative,
  inspiration,
  abilitySave
})

export default allReducers