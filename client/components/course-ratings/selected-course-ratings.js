import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { defaultBorder } from '../../styles'
import { _parseCourseNameForDisplay } from '../../utilities';

const style = {
  ...defaultBorder,
}

const ratingWrapper = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '1px',
  marginBottom: '2px',
}

const ratingNameStyle = {

}

const ratingStyle = {

}

const ratingsHeaderStyle = {
  fontSize: '1rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '10px',
}

const IndividualRating = ({name, rating}) => (
  <div style={ ratingWrapper }>
    <div style={ ratingNameStyle }>{`${name}:`}</div>
    <div style={ ratingStyle }>{rating}</div>
  </div>
)

/**
 * COMPONENT
 */
const SelectedCourseRatings = ({ courseRatings, selectedCourse }) => {
  if (!courseRatings.length) return null
  const selectedCourseRatings = courseRatings.find(ratings => ratings.clubbCourseId === selectedCourse.id)
  if (!selectedCourseRatings) return null
  const {
    shot,
    short,
    fairness,
    experience,
    aura,
    omg,
    design,
    total,
    assKick,
  } = selectedCourseRatings
  return (
    <div style={ style }>
      <div style={ ratingsHeaderStyle }>Our Ratings for {_parseCourseNameForDisplay(selectedCourse, true)}</div>
      <IndividualRating name='Shot Playability' rating={shot} />
      <IndividualRating name='Short Game Playability' rating={short} />
      <IndividualRating name='Fairness' rating={fairness} />
      <IndividualRating name='Experience' rating={experience} />
      <IndividualRating name='Aura' rating={aura} />
      <IndividualRating name='OMG Factor' rating={omg} />
      <IndividualRating name='Design' rating={design} />
      <div style={ ratingWrapper }>
        <div style={{ ...ratingNameStyle, fontWeight: 'bold' }}>Total:</div>
        <div style={{ ...ratingStyle, fontWeight: 'bold' }}>{total}</div>
      </div>
      <IndividualRating name='Ass-Kick Factor' rating={assKick} />
    </div>
  )
}


const mapState = ({ courseRatings, selectedCourse }) => ({ courseRatings, selectedCourse })

export default connect(mapState)(SelectedCourseRatings)

/**
 * PROP TYPES
 */
SelectedCourseRatings.propTypes = {
  courseRatings: PropTypes.array.isRequired,
  selectedCourse: PropTypes.object.isRequired,
}