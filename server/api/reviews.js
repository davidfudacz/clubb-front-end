const router = require('express').Router()
const { Review } = require('../db/models')
const axios = require('axios')
const { clubbUrl } = require('../urls')

router.param('id', async (req, res, next, id) => {
  try {
    req.review = await Review.findById(id)
    next()
  }
  catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  const { clubbCourseId, status } = req.query
  if (clubbCourseId && status) {
    const reviews = await Review.findAll({
      where: {
        clubbCourseId,
        status,
      }
    })
    // in the event that there is more than one published, take the newer one
    reviews.sort((a, b) => b.updatedAt - a.updatedAt)
    res.json(reviews[0])
  }
  else next()
})

router.get('/', async (req, res, next) => {
  try {
    const reviews = await Review.findAll()
    const outputReviews = await reviews.map(async review => {
      try {
        const courseInfo = await axios.get(`${clubbUrl}/api/courses/${review.clubbCourseId}?include=club`)
        review.dataValues.course = courseInfo.data
        return review
      }
      catch (err) {
        next(err)
      }

    })
    const output = await Promise.all(outputReviews)
    res.json(output)
  }
  catch (err) {
    next(err)
  }
})

router.get('/:id', (req, res, next) => {
  res.json(req.review)
})

module.exports = router