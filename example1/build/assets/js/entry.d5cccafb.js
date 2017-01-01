webpackJsonp([0,2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(4);

	console.warn('Entry(index) Bootstraping');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	__webpack_require__(3);

	// import '../components/component1'
	console.info('This is page1');

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	console.warn('import ES6 Module component2');

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	console.warn('require ensure component3');

	fetch('http://example.com/', { mode: 'no-cors' }).then(function (_) {
	  console.log('GET http://example.com/');
	}).catch(function (err) {
	  return console.error(err);
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(5);

	__webpack_require__(2);

	__webpack_require__(3);

	console.info('This is page2');

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _promise = __webpack_require__(6);

	var _promise2 = _interopRequireDefault(_promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.warn('require ensure component1');
	new _promise2.default(function (resolve, reject) {
	  setTimeout(resolve, 1000);
	}).then(function (_) {
	  console.info('setTimeout 1000');
	  !/* require.ensure */(function (_) {
	    __webpack_require__(3).default;
	    console.info('load component3 chunk success!');
	  }(__webpack_require__));
	}).catch(function (err) {
	  return console.error(err);
	});

/***/ }
]);