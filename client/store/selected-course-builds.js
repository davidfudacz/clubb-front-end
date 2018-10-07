import axios from 'axios'
import { clubbUrl } from '../urls'

const GET_SELECTED_COURSE_BUILDS_FROM_CLUBB_API = 'GET_SELECTED_COURSE_BUILDS_FROM_CLUBB_API'

const getSelectedCourseBuildsFromClubbApi = courseBuilds => ({
  type: GET_SELECTED_COURSE_BUILDS_FROM_CLUBB_API,
  courseBuilds,
})

export const getSelectedCourseBuildsFromClubbApiThunkerator = (clubbCourseId) => 
  async dispatch => {
    try {
      const courseBuilds = await axios.get(`${clubbUrl}/api/courses/${clubbCourseId}/builds`)
      dispatch(getSelectedCourseBuildsFromClubbApi(courseBuilds.data))
    }
    catch (err) {
      console.log(err)
    }
  }

export default (prevState = [], action) => {
  switch (action.type) {
    case GET_SELECTED_COURSE_BUILDS_FROM_CLUBB_API:
      return action.courseBuilds
    default:
      return prevState
  }
}