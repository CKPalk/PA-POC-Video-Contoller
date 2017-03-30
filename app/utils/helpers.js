
export function getUid() { // eslint-disable-line
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  return `${s4()}${s4()}-${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`
}

export function trimCharacter(string = '', character = '') {
  if (character.length === 0) return string
  if (string.charAt(0) === character) {
    return trimCharacter(string.slice(1), character)
  } else if (string.charAt(string.length - 1) === character) {
    return trimCharacter(string.slice(0, -1), character)
  }
  return string
}
