import React from 'react'
import PropTypes from 'prop-types'

import { defaultBorder, primaryColor } from '../../styles'

let mainStyle = {
  ...defaultBorder,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}

/**
 * COMPONENT
 */
const RankingLists = ({ rankingList }) => {  
  return (
    <div style={ mainStyle }>
      This is the list {rankingList}
    </div>
  )
}

export default RankingLists

/**
 * PROP TYPES
 */
RankingLists.propTypes = {
}