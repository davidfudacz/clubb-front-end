const Sequelize = require('sequelize')
const db = require('../db')

const CourseRating = db.define('courseRating',{
  clubbCourseId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  shot: {
    type: Sequelize.INTEGER,
    allowNull: false,
    get () {
      return this.getDataValue('shot') / 10
    },
    set (rating) {
      this.setDataValue('shot', rating * 10)
    },
  },
  short: {
    type: Sequelize.INTEGER,
    allowNull: false,
    get () {
      return this.getDataValue('short') / 10
    },
    set (rating) {
      this.setDataValue('short', rating * 10)
    },
  },
  fairness: {
    type: Sequelize.INTEGER,
    allowNull: false,
    get () {
      return this.getDataValue('fairness') / 10
    },
    set (rating) {
      this.setDataValue('fairness', rating * 10)
    },
  },
  experience: {
    type: Sequelize.INTEGER,
    allowNull: false,
    get () {
      return this.getDataValue('experience') / 10
    },
    set (rating) {
      this.setDataValue('experience', rating * 10)
    },
  },
  aura: {
    type: Sequelize.INTEGER,
    allowNull: false,
    get () {
      return this.getDataValue('aura') / 10
    },
    set (rating) {
      this.setDataValue('aura', rating * 10)
    },
  },
  omg: {
    type: Sequelize.INTEGER,
    allowNull: false,
    get () {
      return this.getDataValue('omg') / 10
    },
    set (rating) {
      this.setDataValue('omg', rating * 10)
    },
  },
  design: {
    type: Sequelize.INTEGER,
    allowNull: false,
    get () {
      return this.getDataValue('design') / 10
    },
    set (rating) {
      this.setDataValue('design', rating * 10)
    },
  },
  assKick: {
    type: Sequelize.INTEGER,
    allowNull: false,
    get () {
      return this.getDataValue('assKick') / 10
    },
    set (rating) {
      this.setDataValue('assKick', rating * 10)
    },
  },
  total: {
    type: Sequelize.VIRTUAL,
    get () {
      const sum =
        this.getDataValue('shot') +
        this.getDataValue('short') +
        this.getDataValue('fairness') +
        this.getDataValue('experience') +
        this.getDataValue('aura') +
        this.getDataValue('omg') +
        this.getDataValue('design')
      const avg = (sum / 7) / 10
      return Math.round(avg * 100) / 100
    },
  },
})

module.exports = CourseRating
