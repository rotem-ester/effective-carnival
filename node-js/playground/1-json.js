const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const data = JSON.parse(dataBuffer)

data.name = 'Rotem'
data.age = 33

const updateData = JSON.stringify(data)
fs.writeFileSync('1-json.json', updateData)