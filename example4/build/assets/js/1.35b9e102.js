webpackJsonp([1,5],{

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
	  __webpack_require__.e/* nsure */(2, function (_) {
	    var component3 = __webpack_require__("./src/components/component3.js").default;
	    console.info('load component3 chunk success!');
	  });
	}).catch(function (err) {
	  return console.error(err);
	});

/***/ }

});