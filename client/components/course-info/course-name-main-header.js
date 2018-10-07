import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CourseNameMainHeaderBuildInfo from './course-name-main-header-build-info'

import { defaultBorder, primaryColor } from '../../styles'
import { _parseCourseNameForDisplay } from '../../utilities';

let mainStyle = {
  ...defaultBorder,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const headerStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
}

const headerSubtextStyle = {
  color: primaryColor,
  fontFamily: 'verdana',
  fontSize: '.8rem',
}

/**
 * COMPONENT
 */
const CourseNameMainHeader = ({ selectedCourse, selectedCourseBuilds, browser, selectedCourseMembershipType }) => {
  if (!selectedCourse.id) return null

  let style = mainStyle
  if (browser.lessThan.medium) {
    style = { ...mainStyle, flexDirection: 'column', alignItems: 'flex-start' }
  }
  
  return (
    <div style={ style }>
      <div className="courseNameHeaderWrapper" >
        <div className="courseNameHeader" style={ headerStyle }>
          {_parseCourseNameForDisplay(selectedCourse)}
        </div>
        <div className="courseNameHeaderSubtext" style={ headerSubtextStyle }>
          Chicago, IL (USA) - { selectedCourseMembershipType.name }
        </div> 
      </div>
        <CourseNameMainHeaderBuildInfo builds={ selectedCourseBuilds } browser={ browser } />
    </div>
  )
}


const mapState =
  ({ selectedCourse, selectedCourseBuilds, browser, selectedCourseMembershipType }) =>
  ({ selectedCourse, selectedCourseBuilds, browser, selectedCourseMembershipType })

export default connect(mapState)(CourseNameMainHeader)

/**
 * PROP TYPES
 */
CourseNameMainHeader.propTypes = {
  selectedCourse: PropTypes.object.isRequired,
}