
export const _sortRatingsByTotal = (ratings) => {
  return ratings.sort((a, b) => b.total - a.total)
}