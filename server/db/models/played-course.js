const Sequelize = require('sequelize')
const db = require('../db')

const PlayedCourse = db.define('playedCourse',{
  clubbCourseId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
})

module.exports = PlayedCourse
