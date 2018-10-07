/* eslint react/no-danger: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { defaultBorder, primaryColor } from '../styles'
import { _parseDatePosted, _parseCourseNameForDisplay } from '../utilities'

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
  marginBottom: '10px',
}

const ReviewListItem = ({ review }) => (
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginBottom: '15px', paddingBottom: '15px', borderBottom: `1px solid ${primaryColor}`, }}>
    <div className="reviewPreview" style={{ maxHeight: '225px', textOverflow: 'hidden', overflow: 'hidden', flex: '1', whiteSpace: 'no-wrap' }}>
      <h2 style={{ margin: '0 0 3px 0' }}>{ _parseCourseNameForDisplay(review.course) }</h2>
      <div style={ dateStampStyle }>2 Play the Tips posted this review on {_parseDatePosted(review.datePosted)}</div>
      <h4 style={{ margin: '0 0 3px 0' }}>{ review.title }</h4>
      <div className="reviewContent" dangerouslySetInnerHTML={{ __html: review.content }} />
    </div>
      <img style={{ height: '225px', objectFit: 'contain', marginLeft: '15px' }} src={ review.imgUrl } />
  </div>
)

const AllReviewsList = ({ reviews }) => {
  return !!reviews.length && (
    <div style={ style }>
      {
        reviews.map(review => <ReviewListItem key={ review.id } review={ review } /> )
      }
    </div>
  )
}


const mapState = ({ reviews }) => ({ reviews })

export default connect(mapState)(AllReviewsList)

/**
 * PROP TYPES
 */
AllReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
}