webpackJsonp([2,5],{

/***/ "./src/components/component3.js":
/***/ function(module, exports) {

	'use strict';

	console.warn('require ensure component3');

	fetch('http://example.com/', { mode: 'no-cors' }).then(function (_) {
	  console.log('GET http://example.com/');
	}).catch(function (err) {
	  return console.error(err);
	});

/***/ }

});