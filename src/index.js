var uniqueRandomArray = require('unique-random-array')
var starWarsNames = require('./starwars-names.json')

module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames),
  top: function(number) {
    return starWarsNames.slice(0,4)
  }
}
