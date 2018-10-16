import React from 'react'
import { connect } from 'react-redux'
import { RankingList } from '../components'

const mainColumnStyle = {
  flex: '2.5',
  paddingTop: '20px',
  paddingRight: '10px',
}

export const Home = () => {

  return (
    <div className="mainColumn" style={ mainColumnStyle }>
      <RankingList rankingListId = '2' />
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
