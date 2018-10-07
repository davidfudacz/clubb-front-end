import {
  _parseMultipleArchitectNames,
} from '../utilities'

export const _sortBuildsByYear = (build) => {
  return build.sort((a, b) => a.year - b.year)
}

export const _parseBuildWordingForDisplay = (build, onlyLastNames) => {
  const parsedArchitectsString = _parseMultipleArchitectNames(build.architects, onlyLastNames)
  let output = `${parsedArchitectsString} - ${build.year}`
  switch (build.buildType) {
    case 'redesign':
      output += ' (Redesign)'
      break
    case 'restoration':
      output += ' (Restoration)'
      break
    default:
      output += ''
  }
  return output
}
