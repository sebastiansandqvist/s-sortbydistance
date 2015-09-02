'use strict';

// ----- dependencies
// ---------------------------------------
let sift = require('sift-distance');

// ----- sort function
//		--	@param arr {Array} strings to sort
//		--	@param str {String} sort against this
//		--	@param max {Number} remove items >= max
//		--	@return {Array} sorted by distance to str
// ---------------------------------------
function sort(arr, str, max) {

	const opts = {
		maxDistance: max || null,
		maxOffset: sort.maxOffset
	};

	if (max) {
		arr = arr.filter(function(el) {
			return sift(el, str, opts) < max;
		});
	}

	return arr.sort(function(a, b) {
		return sift(a, str, opts) - sift(b, str, opts);
	});

}

sort.maxOffset = 5;

module.exports = sort;