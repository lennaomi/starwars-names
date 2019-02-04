var chai = require('chai')
var expect = chai.expect
chai.use(require('chai-like'))
chai.use(require('chai-things'))  // Don't swap these two

var starWars = require('./index')

describe('starwars-names', () => {
  describe('all', () => {
    it('should be an array of strings', () => {
      const isArrayOfStrings = array => {
        return array.every(item => {
          return typeof item === 'string'
        })
      }
      expect(starWars.all).to.satisfy(isArrayOfStrings)
    })

    it('should contain `Luke Skywalker`', () => {
      expect(starWars.all).to.include('Luke Skywalker')
    })
  })

  describe('random', () => {
    it('should return a random item from the starWars.all', () => {
      var randomItem = starWars.random()
      expect(starWars.all).to.include(randomItem)
    })
  })

  describe('top', () => {
    it('should give me `4-LOM`, `Aayla Secura`, `Admiral Ackbar`, and `Admiral Thrawn`', () => {
      const topFive = starWars.top(4)
      expect(topFive).to.be.an('array').that.contains.something.like('4-LOM')
      expect(topFive).to.be.an('array').that.contains.something.like('Aayla Secura')
      expect(topFive).to.be.an('array').that.contains.something.like('Admiral Ackbar')
      expect(topFive).to.be.an('array').that.contains.something.like('Admiral Thrawn')
    })
  })
})
