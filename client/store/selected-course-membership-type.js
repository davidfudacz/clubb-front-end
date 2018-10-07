import axios from 'axios'
import { clubbUrl } from '../urls'

const GET_SELECTED_COURSE_MEMBERSHIP_TYPE_FROM_CLUBB_API = 'GET_SELECTED_COURSE_MEMBERSHIP_TYPE_FROM_CLUBB_API'

const getSelectedCourseMembershipTypeFromClubbApi = courseMembershipType => ({
  type: GET_SELECTED_COURSE_MEMBERSHIP_TYPE_FROM_CLUBB_API,
  courseMembershipType,
})

export const getSelectedCourseMembershipTypeFromClubbApiThunkerator = (clubbClubId) => 
  async dispatch => {
    try {
      const courseMembershipType = await axios.get(`${clubbUrl}/api/clubs/${clubbClubId}/membership-type`)
      dispatch(getSelectedCourseMembershipTypeFromClubbApi(courseMembershipType.data))
    }
    catch (err) {
      console.log(err)
    }
  }

export default (prevState = {}, action) => {
  switch (action.type) {
    case GET_SELECTED_COURSE_MEMBERSHIP_TYPE_FROM_CLUBB_API:
      return action.courseMembershipType
    default:
      return prevState
  }
}