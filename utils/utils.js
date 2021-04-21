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
