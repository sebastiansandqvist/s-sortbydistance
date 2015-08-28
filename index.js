'use strict';

// ----- dependencies
// ---------------------------------------
var sift = require('sift-distance');

// ----- sort function
//		--	@param arr {Array} strings to sort
//		--	@param str {String} sort against this
//		--	@return {Array} sorted by distance to str
// ---------------------------------------
module.exports = function sort(arr, str) {
	return arr.sort(function(a, b) {
		return sift(a, str) - sift(b, str);
	});
};