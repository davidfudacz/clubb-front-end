import axios from 'axios'

const GET_ALL_REVIEWS_FROM_SERVER = 'GET_ALL_REVIEWS_FROM_SERVER'

const getAllReviewsFromServer = reviews => ({
  type: GET_ALL_REVIEWS_FROM_SERVER,
  reviews,
})

export const getAllReviewsFromServerThunkerator = () => 
  async dispatch => {
    try {
      const reviews = await axios.get(`/api/reviews?status=published`)
      dispatch(getAllReviewsFromServer(reviews.data))
    }
    catch (err) {
      console.log(err)
    }
  }

export default (prevState = [], action) => {
  switch (action.type) {
    case GET_ALL_REVIEWS_FROM_SERVER:
      return action.reviews
    default:
      return prevState
  }
}