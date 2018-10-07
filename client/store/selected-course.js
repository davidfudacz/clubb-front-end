import axios from 'axios'
import { clubbUrl } from '../urls'

const GET_SELECTED_COURSE_FROM_CLUBB_API = 'GET_SELECTED_COURSE_FROM_CLUBB_API'

const getSelectedCourseFromClubbApi = course => ({
  type: GET_SELECTED_COURSE_FROM_CLUBB_API,
  course,
})

export const getSelectedCourseFromClubbApiThunkerator = (clubbCourseId) => 
  async dispatch => {
    try {
      const course = await axios.get(`${clubbUrl}/api/courses/${clubbCourseId}?include=club`)
      dispatch(getSelectedCourseFromClubbApi(course.data))
    }
    catch (err) {
      console.log(err)
    }
  }

export default (prevState = {}, action) => {
  switch (action.type) {
    case GET_SELECTED_COURSE_FROM_CLUBB_API:
      return action.course
    default:
      return prevState
  }
}