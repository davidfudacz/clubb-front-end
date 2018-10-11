import React from 'react'
import { connect } from 'react-redux'
import { CourseNameMainHeader, ReviewMain, ImageGallery, AllReviewsList } from '.'
import { ScorecardsViewer } from './course-info';

const mainColumnStyle = {
  flex: '2.5',
  paddingTop: '20px',
  paddingRight: '10px',
}

const images = [
  {
    original: 'http://www.2playthetips.com/images/Riviera/DSC_0002.jpg',
    thumbnail: 'http://www.2playthetips.com/images/Riviera/DSC_0002.jpg',
  },
  {
    original: 'http://www.2playthetips.com/images/Riviera/DSC_0005.jpg',
    thumbnail: 'http://www.2playthetips.com/images/Riviera/DSC_0005.jpg'
  },
  {
    original: 'http://www.2playthetips.com/images/Riviera/DSC_0007.jpg',
    thumbnail: 'http://www.2playthetips.com/images/Riviera/DSC_0007.jpg'
  },
  {
    original: 'http://www.2playthetips.com/images/Riviera/DSC_0010.jpg',
    thumbnail: 'http://www.2playthetips.com/images/Riviera/DSC_0010.jpg'
  },
  {
    original: 'http://www.2playthetips.com/images/Riviera/DSC_0013.jpg',
    thumbnail: 'http://www.2playthetips.com/images/Riviera/DSC_0013.jpg'
  }
]

/**
 * COMPONENT
 */
export const Home = ({ selectedCourseScorecards }) => {

  return (
    <div className="mainColumn" style={ mainColumnStyle }>
      {/* <AllReviewsList /> */}
      <CourseNameMainHeader />
      {/* <ImageGallery images={ images }/>
      <ReviewMain />
      <ScorecardsViewer scorecards={ selectedCourseScorecards } /> */}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = ({ user, selectedCourseScorecards }) => ({
    email: user.email,
    selectedCourseScorecards,
  })

export default connect(mapState)(Home)
