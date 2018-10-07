import React from 'react'
import ImageGallery from '../image-gallery'

const ScorecardsViewer = ({ scorecards }) => {
  const scorecardsUrls = scorecards.map(scorecard => {
    return {
      original: scorecard.imgUrl,
      thumbnail: scorecard.imgUrl,
    }
  })
  const scorecardHeader = scorecards.length > 1 ? 'Scorecards' : 'Scorecard'
  return (
  <ImageGallery images={ scorecardsUrls } header={ scorecardHeader } />
  )
}

export default ScorecardsViewer