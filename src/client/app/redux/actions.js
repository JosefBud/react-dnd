export const SET_XP = 'SET_XP'
export const SET_LEVEL = 'SET_LEVEL';
export const SET_MAX_HP = 'SET_MAX_HP';
export const SET_CURRENT_HP = 'SET_CURRENT_HP';
export const SET_USED_HIT_DICE = 'SET_USED_HIT_DICE';
export const SET_REMAINING_HIT_DICE = 'SET_REMAINING_HIT_DICE';
export const SET_STAT_POINTS = 'SET_STAT_POINTS';
export const SET_STAT_MODS = 'SET_STAT_MODS';
export const SET_SKILL_MODS = 'SET_SKILL_MODS';
export const SET_SKILL_PROF = 'SET_SKILL_PROF';
export const SET_SKILL_EXP = 'SET_SKILL_EXP';
export const SET_SAVING_THROW_MOD = 'SET_SAVING_THROW_MOD';
export const SET_SAVING_THROW_PROF = 'SET_SAVING_THROW_PROF';
export const SET_RESISTANCES = 'SET_RESISTANCES';
export const SET_DEATH_SAVES = 'SET_DEATH_SAVES';
export const SET_SPEED = 'SET_SPEED';
export const SET_PASSIVE_WISDOM = 'SET_PASSIVE_WISDOM';
export const SET_PROF_BONUS = 'SET_PROF_BONUS';

export function setXP(number) {
  return {
    type: SET_XP,
    number
  }
}

export function setLevel(number) {
  return {
    type: SET_LEVEL,
    number
  }
}

export function setMaxHP(number) {
  return {
    type: SET_MAX_HP,
    number
  }
}

export function setCurrentHP(number) {
  return {
    type: SET_CURRENT_HP,
    number
  }
}

export function setUsedHitDice(number) {
  return {
    type: SET_USED_HIT_DICE,
    number
  }
}

export function setRemainingHitDice(level) {
  return {
    type: SET_REMAINING_HIT_DICE,
    level
  }
}

export function setStatPoints(name, number) {
  return {
    type: SET_STAT_POINTS,
    name,
    number
  }
}

export function setStatMods(name, number) {
  return {
    type: SET_STAT_MODS,
    name,
    number
  }
}

export function setSkillMods(name, number) {
  return {
    type: SET_SKILL_MODS,
    name,
    number
  }
}

export function setSkillProf(name, boolean) {
  return {
    type: SET_SKILL_PROF,
    name,
    boolean
  }
}

export function setSkillExp(name, boolean) {
  return {
    type: SET_SKILL_EXP,
    name,
    boolean
  }
}

export function setSavingThrowMod(name, number) {
  return {
    type: SET_SAVING_THROW_MOD,
    name,
    number
  }
}

export function setSavingThrowProf(name, boolean) {
  return {
    type: SET_SAVING_THROW_PROF,
    name,
    boolean
  }
}

export function setResistances(key, name) {
  return {
    type: SET_RESISTANCES,
    key,
    name
  }
}

export function setDeathSaves(name, index) {
  return {
    type: SET_DEATH_SAVES,
    name,
    index
  }
}

export function setSpeed(name, number) {
  return {
    type: SET_SPEED,
    name,
    number
  }
}

export function setPassiveWisdom(number) {
  return {
    type: SET_PASSIVE_WISDOM,
    number
  }
}

export function setProfBonus(number) {
  return {
    type: SET_PROF_BONUS,
    number
  }
}