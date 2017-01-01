webpackJsonp([1,4],{

/***/ "bFS4":
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__("Qd29");

	__webpack_require__("3WI1");

	__webpack_require__("Jk9v");

	console.info('This is page1');

/***/ },

/***/ "Qd29":
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _promise = __webpack_require__("hKoQ");

	var _promise2 = _interopRequireDefault(_promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.warn('require ensure component1');
	new _promise2.default(function (resolve, reject) {
	  setTimeout(resolve, 1000);
	}).then(function (_) {
	  console.info('setTimeout 1000');
	  !/* require.ensure */(function (_) {
	    var component3 = __webpack_require__("Jk9v").default;
	    console.info('load component3 chunk success!');
	  }(__webpack_require__));
	}).catch(function (err) {
	  return console.error(err);
	});

/***/ },

/***/ "3WI1":
/***/ function(module, exports) {

	'use strict';

	console.warn('import ES6 Module component2');

/***/ },

/***/ "Jk9v":
/***/ function(module, exports) {

	'use strict';

	console.warn('require ensure component3');

	fetch('http://example.com/', { mode: 'no-cors' }).then(function (_) {
	  console.log('GET http://example.com/');
	}).catch(function (err) {
	  return console.error(err);
	});

/***/ },

/***/ "0KVu":
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__("Qd29");

	__webpack_require__("3WI1");

	__webpack_require__("Jk9v");

	console.info('This is page2');

/***/ }

});