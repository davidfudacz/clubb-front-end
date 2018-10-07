import axios from 'axios'
import { clubbUrl } from '../urls'

const GET_SELECTED_COURSE_SCORECARDS_FROM_CLUBB_API = 'GET_SELECTED_COURSE_SCORECARDS_FROM_CLUBB_API'

const getSelectedCourseScorecardsFromClubbApi = courseScorecards => ({
  type: GET_SELECTED_COURSE_SCORECARDS_FROM_CLUBB_API,
  courseScorecards,
})

export const getSelectedCourseScorecardsFromClubbApiThunkerator = (clubbCourseId) => 
  async dispatch => {
    try {
      const courseScorecards = await axios.get(`${clubbUrl}/api/courses/${clubbCourseId}/scorecards`)
      dispatch(getSelectedCourseScorecardsFromClubbApi(courseScorecards.data))
    }
    catch (err) {
      console.log(err)
    }
  }

export default (prevState = [], action) => {
  switch (action.type) {
    case GET_SELECTED_COURSE_SCORECARDS_FROM_CLUBB_API:
      return action.courseScorecards
    default:
      return prevState
  }
}