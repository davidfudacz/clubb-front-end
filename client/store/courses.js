import axios from 'axios'
import { clubbUrl } from '../urls'

const GET_ALL_COURSES_FROM_CLUBB_API = 'GET_ALL_COURSES_FROM_CLUBB_API'

const getAllCoursesFromClubbApi = courses => ({
  type: GET_ALL_COURSES_FROM_CLUBB_API,
  courses,
})

export const getAllCoursesFromClubbApiThunkerator = () => 
  async dispatch => {
    try {
      const courses = await axios.get(`${clubbUrl}/api/courses`)
      dispatch(getAllCoursesFromClubbApi(courses.data))
    }
    catch (err) {
      console.error(err)
    }
  }

export default (prevState = [], action) => {
  switch (action.type) {
    case GET_ALL_COURSES_FROM_CLUBB_API:
      return action.courses
    default:
      return prevState
  }
}