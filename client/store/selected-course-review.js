import axios from 'axios'

const GET_SELECTED_COURSE_REVIEW_FROM_SERVER = 'GET_SELECTED_COURSE_REVIEW_FROM_SERVER'

const getSelectedCourseReviewFromServer = courseReview => ({
  type: GET_SELECTED_COURSE_REVIEW_FROM_SERVER,
  courseReview,
})

export const getSelectedCourseReviewFromServerThunkerator = (clubbCourseId) => 
  async dispatch => {
    try {
      const courseReview = await axios.get(`/api/reviews?clubbCourseId=${clubbCourseId}&status=published`)
      dispatch(getSelectedCourseReviewFromServer(courseReview.data))
    }
    catch (err) {
      console.log(err)
    }
  }

export default (prevState = {}, action) => {
  switch (action.type) {
    case GET_SELECTED_COURSE_REVIEW_FROM_SERVER:
      return action.courseReview
    default:
      return prevState
  }
}