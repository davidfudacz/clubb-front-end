
export const _parseDatePosted = (date) => {
  //  date must be formatted YYYY-MM-DD
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const splitDate = date.split('-')
  const year = splitDate[0]
  const month = parseInt(splitDate[1], 10)
  const day = parseInt(splitDate[2], 10)
  return `${MONTHS[month-1]} ${day}, ${year}`
}
