// Get a pair of [Name - ID] from a list of cities
export const getPairCitiesIDs = (cities) =>
  cities.map((city) => [city.name, city.id])

// Check if a 'cityName' is content of a list of cities
export const getCity = (cityName, cities) =>
  cities.find((city) => city.includes(cityName))

// Apply an IMGIX filter to images, if exist replace it with the newest
export const applyFilterToJpeg = (URL, IMGIX) => {
  if (URL) {
    const jpegFormat = /.jpeg/.exec(URL).index
    const delJpegFormat = URL.substring(0, jpegFormat)
    return `${delJpegFormat}.jpeg${IMGIX}`
  }
  return URL
}

// Split a description too long
export const formatContentText = (content) => {
  const textArr = content && content.split('.')
  return content && textArr.splice(1, textArr.length - 2).join('.')
}

// Encode a text as URL style
export const encodeTitleToURL = (string) =>
  string.toLowerCase().replaceAll(' ', '-')

// Card Activity, description & class
export const formatDescriptionActivity = (description) => {
  if (description !== undefined) {
    const splittedDesc = description.split(' ').slice(0, 17)
    splittedDesc.push('...')
    return splittedDesc.join(' ')
  }
  return description
}

// Turn a number value into EU currency locale
export const turnIntoPrice = (number) =>
  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
    number
  )

export const switchClass = (ID) => {
  switch (ID) {
    case 1:
      return 'arts_culture'
    case 2:
      return 'sightseeing'
    case 3:
      return 'food_wine'
    case 4:
      return 'entertainment'
    case 5:
      return 'sports'
    case 6:
      return 'adventure'
    case 7:
      return 'nightlife'
    default:
      return 'default'
  }
}
