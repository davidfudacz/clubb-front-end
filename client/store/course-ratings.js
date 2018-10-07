import axios from 'axios'
const GET_ALL_COURSE_RATINGS_FROM_SERVER = 'GET_ALL_COURSE_RATINGS_FROM_SERVER'

const getAllCourseRatingsFromServer = courseRatings => ({
  type: GET_ALL_COURSE_RATINGS_FROM_SERVER,
  courseRatings,
})

export const getAllCourseRatingsFromServerThunkerator = () => 
  async dispatch => {
    const courseRatings = await axios.get('/api/course-ratings')
    dispatch(getAllCourseRatingsFromServer(courseRatings.data))
  }

export default (prevState = [], action) => {
  switch (action.type) {
    case GET_ALL_COURSE_RATINGS_FROM_SERVER:
      return action.courseRatings
    default:
      return prevState
  }
}