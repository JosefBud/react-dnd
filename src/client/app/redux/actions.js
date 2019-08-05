export const SET_XP = 'SET_XP'
export const SET_LEVEL = 'SET_LEVEL';
export const SET_STAT_POINTS = 'SET_STAT_POINTS';
export const SET_STAT_MODS = 'SET_STAT_MODS';
export const SET_SKILL_MODS = 'SET_SKILL_MODS';
export const SET_SKILL_PROF = 'SET_SKILL_PROF';
export const SET_SKILL_EXP = 'SET_SKILL_EXP';
export const SET_SAVING_THROW_MOD = 'SET_SAVING_THROW_MOD';
export const SET_SAVING_THROW_PROF = 'SET_SAVING_THROW_PROF';

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