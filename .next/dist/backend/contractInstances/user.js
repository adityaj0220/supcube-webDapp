'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('../web3');

var _web2 = _interopRequireDefault(_web);

var _User = require('../build/User.json');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(_User2.default.abi, '0x89961c14320A6b80899241514781eC0B27041D68');
exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhY2tlbmRcXGNvbnRyYWN0SW5zdGFuY2VzXFx1c2VyLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJVc2VyIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsImFiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7Ozs7QUFFQSxJQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ2IsZUFBSyxBQURRLEtBRWIsQUFGYSxBQUFqQixBQUlBO2tCQUFlLEFBQWYiLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiJEOi9TdHVkaWVzX0NvZGVTdHVmZi9TdHVkaWVzL1dlYiBEZXZfUmVhY3RKUy9naXQvc3VwY3ViZS13ZWJEYXBwIn0=