
export const _parseArchitectName = (architect, onlyLastName) => {
  if (onlyLastName) return architect.surname
  return architect.givenName + ' ' + architect.surname
}

export const _sortArchitectsAlphabetically = (architects) => {
  return architects.sort((a, b) => {
    let nameA = a.surname.toUpperCase()
    let nameB = b.surname.toUpperCase()
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  })
}

export const _parseMultipleArchitectNames = (architects, onlyLastNames) => {
  if (architects.length === 1) {
    return _parseArchitectName(architects[0], onlyLastNames)
  }
  const sortedArchitects = _sortArchitectsAlphabetically(architects)
  const architectsParsedArr = sortedArchitects.map(architect => _parseArchitectName(architect, onlyLastNames))
  // if (architects.length === 2) {
  //   return architectsParsedArr.join(' & ')
  // }  // this should still work without this conditional
  if (architects.length >= 2) {
    const removedLastArchitect = architectsParsedArr.pop()
    return architectsParsedArr.join(', ') + ` & ${removedLastArchitect}`
  }
}