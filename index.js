var uniqueRandomArray = require('unique-random-array')
var locations = require('./locations.json')

module.exports = uniqueRandomArray(locations)
module.exports.locations = locations
