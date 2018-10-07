/* eslint react/no-danger: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { defaultBorder, primaryColor } from '../../styles'
import { _parseDatePosted } from '../../utilities'

const style = {
  ...defaultBorder,
  // display: 'flex',
  // flexDirection: 'row',
  // justifyContent: 'space-between',
  // flexWrap: 'wrap',
  // alignItems: 'center',
}

const titleStyle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '15px',
}

const dateStampStyle = {
  fontSize: '.8rem',
  fontStyle: 'italic',
  color: primaryColor,
  marginBottom: '15px',
}

const ReviewMain = ({ selectedCourseReview }) => {
  if (!selectedCourseReview.id) return null
  return (
    <div style={ style }>
      <div style={ dateStampStyle }>2 Play the Tips posted this review on {_parseDatePosted(selectedCourseReview.datePosted)}</div>
      <h3 style={{ textAlign: 'center' }}>{selectedCourseReview.title}</h3>
      <div className="reviewContent" dangerouslySetInnerHTML={{ __html: selectedCourseReview.content }} />
    </div>
  )
}


const mapState = ({ selectedCourseReview }) => ({ selectedCourseReview })

export default connect(mapState)(ReviewMain)

/**
 * PROP TYPES
 */
ReviewMain.propTypes = {
  selectedCourseReview: PropTypes.object.isRequired,
}