const chalk = require('chalk')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const locationQuery = process.argv[2]

if (!locationQuery){
    return console.log('Please provide a location query')
}


geocode(locationQuery,  (error, {longitude, latitude, location} = {}) => {
    if (error){
        console.log(error)
    } else {
        forecast(longitude, latitude, (error, {description, temperature, feelslike} = {}) => {
            if (error){
                console.log(error)
            } else {
                console.log(chalk.cyan(location))
                console.log(chalk.cyan(`${description}. It is ${temperature} degrees celcius outside. feels like ${feelslike}.`))
            }
        })
    }
})