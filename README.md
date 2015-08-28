# s-sortbydistance

[![NPM version](https://img.shields.io/npm/v/s-sortbydistance.svg)](https://www.npmjs.com/package/s-sortbydistance) ![Dependencies](https://img.shields.io/david/sebastiansandqvist/s-sortbydistance.svg) [![build status](http://img.shields.io/travis/sebastiansandqvist/s-sortbydistance.svg)](https://travis-ci.org/sebastiansandqvist/s-sortbydistance) [![NPM license](https://img.shields.io/npm/l/s-sortbydistance.svg)](https://www.npmjs.com/package/s-sortbydistance)

## About
Simple way to sort arrays of strings by Levenshtein distance to a string. Useful for implementing fuzzy search. Uses Sift4 algorithm.

## Installation
```bash
npm install --save s-sortbydistance
```

## Usage
```javascript
var sort = require('s-sortbydistance');

var unsorted = ['foo', 'foobar', 'bar', 'foo1', '~foo~'];
sort(unsorted, 'foo'); // ['foo', 'foo1', '~foo~', 'foobar', 'bar']
```

## License (ISC)
Copyright (c) 2015, Sebastian Sandqvist <s.github@sparque.me>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.