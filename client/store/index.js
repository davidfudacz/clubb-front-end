import { createStore, combineReducers, applyMiddleware } from 'redux'
import { responsiveStateReducer, responsiveStoreEnhancer } from 'redux-responsive'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import courses from './courses'
import reviews from './reviews'
import courseRatings from './course-ratings'
import selectedCourse from './selected-course'
import selectedCourseBuilds from './selected-course-builds'
import selectedCourseReview from './selected-course-review'
import selectedCourseScorecards from './selected-course-scorecards'
import selectedCourseMembershipType from './selected-course-membership-type'

const reducer = combineReducers({
  user,
  courses,
  reviews,
  courseRatings,
  selectedCourse,
  selectedCourseBuilds,
  selectedCourseReview,
  selectedCourseScorecards,
  selectedCourseMembershipType,
  browser: responsiveStateReducer,
})
const middleware = composeWithDevTools(
  responsiveStoreEnhancer,
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './courses'
export * from './reviews'
export * from './course-ratings'
export * from './selected-course'
export * from './selected-course-builds'
export * from './selected-course-review'
export * from './selected-course-scorecards'
export * from './selected-course-membership-type'
