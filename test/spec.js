// ----- dependencies
// ---------------------------------------
var expect = require('chai').expect;
var sort = require('../index.js');


// ----- tests
// ---------------------------------------
describe('it', function() {

	it('sorts by distance to string', function() {
		var unsorted = ['hasd','asd','asdasdadsfa', 'asd1', 'foo'];
		var sorted = ['asd', 'hasd', 'asd1', 'foo', 'asdasdadsfa'];
		expect(sort(unsorted, 'asd')).to.deep.equal(sorted);

		var unsorted2 = ['foo', 'foobar', 'bar', 'foo1', '~foo~'];
		var sorted2 = ['foo', 'foo1', '~foo~', 'foobar', 'bar'];
		expect(sort(unsorted2, 'foo')).to.deep.equal(sorted2);

	});

	it('ignores items above maxDistance', function() {
		var unsorted = ['hasd','asd','asdasdadsfa', 'asd1', 'foo'];
		var sorted = ['asd', 'hasd', 'asd1', 'foo'];
		expect(sort(unsorted, 'asd', 5)).to.deep.equal(sorted);
	});

});