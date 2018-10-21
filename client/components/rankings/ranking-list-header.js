import React from 'react'
import PropTypes from 'prop-types'

import { defaultBorder, primaryColor } from '../../styles'

let mainStyle = {
  ...defaultBorder,
  display: 'flex',
  flexDirection: 'column',
}

const headerStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
}

const headerSubtextStyle = {
  color: primaryColor,
  fontFamily: 'verdana',
  fontSize: '.8rem',
}

const RankingListHeader = ({ parsedName, publisherName }) => (
  <div style = {{ marginBottom: '15px' }}>
    <div className='rankingListHeader' style={ headerStyle }>{ parsedName }</div>
    <div className='rankingListHeaderSubtext' style={ headerSubtextStyle }>{ publisherName }</div>
  </div>
)

export default RankingListHeader
