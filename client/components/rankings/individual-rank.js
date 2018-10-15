import React from 'react'
import { defaultBorder, primaryColor } from '../../styles'

let mainStyle = {
  ...defaultBorder,
  display: 'flex',
  flexDirection: 'column',
}

const headerStyle = {
  fontSize: '1.2rem',
  fontWeight: '400',
}

const headerSubtextStyle = {
  color: primaryColor,
  fontFamily: 'verdana',
  fontSize: '.8rem',
}

const IndividualRank = ({ rank, course }) => {
  return (
    <div style={ mainStyle }>
      <div style={ headerStyle }>{ rank + ' - ' + course.parsedName }</div>
      <div style={ headerSubtextStyle }>{ course.originalBuild.year }</div>
    </div>
  )
}

export default IndividualRank
