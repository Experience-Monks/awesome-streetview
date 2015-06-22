var streetview = require('./')
var test = require('tape')
var all = require('./locations.json')
var indexOfArray = require('index-of-array')

test('random beautiful [lat, lng] Google Street View locations', function (t) {
  var rnd = streetview()
  var second = streetview()
  t.notEqual(indexOfArray(all, rnd), -1, 'gets random')
  t.notEqual(indexOfArray(all, second), -1, 'gets random')
  t.notDeepEqual(rnd, second, 'gets different than previous')
  t.deepEqual(streetview.locations, all, 'interface provides all')
  t.end()
})
