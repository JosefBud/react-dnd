import initialState from './initialState';

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
  SET_SKILL_EXP,
  SET_SAVING_THROW_MOD,
  SET_SAVING_THROW_PROF
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
    default:
      return state;
  }
}

const todoApp = combineReducers({
  characterXP,
  characterLevel,
  characterStats,
  characterSkills,
  savingThrows
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