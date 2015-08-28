// ----- dependencies
// ---------------------------------------
require('blanket')({
    pattern: function (filename) {
        return !/node_modules/.test(filename);
    }
});

var expect = require('chai').expect;
var sort = require('../index.js');


// ----- tests
// ---------------------------------------
describe('sort', function() {

	it('sorts by distance to string', function() {
		var unsorted = ['hasd','asd','asdasdads', 'asd1', 'foo'];
		var sorted = ['asd', 'hasd', 'asd1', 'foo', 'asdasdads'];
		expect(sort(unsorted, 'asd')).to.deep.equal(sorted);

		var unsorted2 = ['foo', 'foobar', 'bar', 'foo1', '~foo~'];
		var sorted2 = ['foo', 'foo1', '~foo~', 'foobar', 'bar'];
		expect(sort(unsorted2, 'foo')).to.deep.equal(sorted2);

	});

});