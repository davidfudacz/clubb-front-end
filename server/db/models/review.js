const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review',{
  clubbCourseId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM,
    values: ['draft', 'published', 'overwritten']
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  title: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  datePosted: {
    type: Sequelize.DATEONLY,
  },
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    allowEmpty: false,
  }
})

module.exports = Review
