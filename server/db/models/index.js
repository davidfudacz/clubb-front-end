const User = require('./user')
const CourseRating = require('./course-rating')
const LowScore = require('./low-score')
const PlayedCourse = require('./played-course')
const Review = require('./review')

PlayedCourse.belongsTo(User)
User.hasMany(PlayedCourse)

LowScore.belongsTo(User)
User.hasMany(LowScore)

Review.belongsTo(User)
User.hasMany(Review)

module.exports = {
  User,
  PlayedCourse,
  LowScore,
  CourseRating,
  Review,
}
