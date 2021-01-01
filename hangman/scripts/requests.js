const getGame = async (wordCount) => {
  const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('I tried, but I failed to get you a puzzle')
  }
}

const getCurrentCountry = async () => {
  const location = await getLocation()
  return getCountry(location.country)
}

const getCountry = async (countryCode) => {
  const response = await fetch('http://restcountries.eu/rest/v2/all')
  if (response.status === 200) {
    const data = await response.json()
    return data.find((country) => country.alpha2Code === countryCode)
  } else {
    throw new Error('I tried, but I failed to fetch the country.')
  }
}

const getLocation = async () => {
  const response = await fetch('http://ipinfo.io/json?token=b5514c18136b8b')
  if (response.status === 200) {
    return response.json()
  } else {
    throw new Error('I tried, but I failed to get your location')
  }
}
