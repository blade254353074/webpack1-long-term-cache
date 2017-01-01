webpackJsonp([1,4],{

/***/ "./src/views/page1.js":
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__("./src/components/component1.js");

	__webpack_require__("./src/components/component2.js");

	__webpack_require__("./src/components/component3.js");

	console.info('This is page1');

/***/ },

/***/ "./src/components/component1.js":
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _promise = __webpack_require__("./node_modules/es6-promise/dist/es6-promise.js");

	var _promise2 = _interopRequireDefault(_promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.warn('require ensure component1');
	new _promise2.default(function (resolve, reject) {
	  setTimeout(resolve, 1000);
	}).then(function (_) {
	  console.info('setTimeout 1000');
	  !/* require.ensure */(function (_) {
	    var component3 = __webpack_require__("./src/components/component3.js").default;
	    console.info('load component3 chunk success!');
	  }(__webpack_require__));
	}).catch(function (err) {
	  return console.error(err);
	});

/***/ },

/***/ "./src/components/component2.js":
/***/ function(module, exports) {

	'use strict';

	console.warn('import ES6 Module component2');

/***/ },

/***/ "./src/components/component3.js":
/***/ function(module, exports) {

	'use strict';

	console.warn('require ensure component3');

	fetch('http://example.com/', { mode: 'no-cors' }).then(function (_) {
	  console.log('GET http://example.com/');
	}).catch(function (err) {
	  return console.error(err);
	});

/***/ },

/***/ "./src/views/page2.js":
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__("./src/components/component1.js");

	__webpack_require__("./src/components/component2.js");

	__webpack_require__("./src/components/component3.js");

	console.info('This is page2');

/***/ }

});