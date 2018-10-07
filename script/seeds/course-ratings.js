
const { CourseRating } = require('../../server/db/models')

const seedCourseRatings = async () => {
  const courseRatings = await Promise.all([
    CourseRating.create({
      clubbCourseId: 1,
      shot: 4,
      short: 4,
      fairness: 7,
      experience: 4,
      aura: 5,
      omg: 6,
      design: 6,
      assKick: 10,
    }),
    CourseRating.create({
      clubbCourseId: 2,
      shot: 8,
      short: 8,
      fairness: 7,
      experience: 4,
      aura: 5,
      omg: 6,
      design: 6,
      assKick: 10,
    }),
  ])

  console.log(`seeded ${courseRatings.length} course ratings`)
}

module.exports = seedCourseRatings