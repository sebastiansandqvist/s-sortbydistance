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

	it('needs tests');

});