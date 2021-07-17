
const getPuzzle = async () => {
    const response = await fetch('http://puzzle.mead.io/puzzle', {})
    
    if (response.status === 200){
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

const getCountry = async (countryCode) => {
    const response =  await fetch('https://restcountries.eu/rest/v2/all')
    if (response.status === 200){
        const countries = await response.json()
        const myCountry = await countries.find((country) => country.alpha2Code === countryCode)
        if (myCountry === undefined){
            throw new Error('country code does not exists')
        } else {
            return myCountry
        }
    } else {
        throw new Error(`unable to fetch country. Error code: ${response.status}`)
    }
}

const getLocation = async () => {
    const response = await fetch('http://ipinfo.io/json?token=1ad72f5ed22257')
    if (response.status === 200){
        const location = await response.json()
        return location
    } else {
        throw new Error(`unable to fetch IP data. ${response.status} (${response.statusText})`)
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)
}

