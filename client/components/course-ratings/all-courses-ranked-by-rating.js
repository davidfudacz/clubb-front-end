import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { _parseCourseNameForDisplay, _parseCourseUrl, _sortRatingsByTotal } from '../../utilities'

import { defaultBorder } from '../../styles'

const style = {
  ...defaultBorder,
}

const mainRatingStyle = {
  textDecoration: 'none',
  color: 'darkblue',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '3px'
}

const ranksHeaderStyle = {
  fontSize: '1rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '10px',
}

const MainRating = ({ courseRating, rank }) => (
  <Link to={_parseCourseUrl(courseRating.course)} style={ mainRatingStyle }>
    <div>{rank} - {_parseCourseNameForDisplay(courseRating.course)}</div>
    <div>{courseRating.total}</div>
  </Link>
)

/**
 * COMPONENT
 */
const AllCoursesRankedByRating = ({ courseRatings }) => {
  if (!courseRatings.length) return null
  return (
    <div style={ style }>
      <div style={ranksHeaderStyle}>Our Ranks</div>
      {
        _sortRatingsByTotal(courseRatings).map((courseRating, index) => <MainRating key={courseRating.id} courseRating={courseRating} rank={index + 1} />)
      }
    </div>
  )
}


const mapState = ({ courseRatings }) => ({ courseRatings })

export default connect(mapState)(AllCoursesRankedByRating)

/**
 * PROP TYPES
 */
AllCoursesRankedByRating.propTypes = {
  courseRatings: PropTypes.array
}

MainRating.propTypes = {
  rank: PropTypes.number.isRequired,
  courseRating: PropTypes.object.isRequired
}