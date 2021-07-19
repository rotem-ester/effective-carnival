const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=f54e436a4127eaab3ad0d1eb119fd464&query=37.8267,-122.4233'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data += chunk
    })

    response.on('end', () => {
        let dataString = JSON.parse(data)
        console.log(dataString)
    })
})

request.on('error', (error) => {
    console.log('error: ' + error)
})

request.end()