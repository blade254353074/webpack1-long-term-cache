webpackJsonp([0,1],{

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _promise = __webpack_require__(3);

	var _promise2 = _interopRequireDefault(_promise);

	exports.default = hello;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function hello() {
	  console.warn('require ensure component1');
	  new _promise2.default(function (resolve, reject) {
	    setTimeout(resolve, 1000);
	  }).then(function (_) {
	    console.info('setTimeout 1000');
	    __webpack_require__.e/* nsure */(5, function (_) {
	      var component3 = __webpack_require__(9).default;
	      console.info('load component3 chunk success!');
	      component3();
	    });
	  }).catch(function (err) {
	    return console.error(err);
	  });
	}

/***/ }

});