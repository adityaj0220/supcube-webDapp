'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('../web3');

var _web2 = _interopRequireDefault(_web);

var _Purchaser = require('../build/Purchaser.json');

var _Purchaser2 = _interopRequireDefault(_Purchaser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
    return new _web2.default.eth.Contract(_Purchaser2.default.abi, address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhY2tlbmRcXGNvbnRyYWN0SW5zdGFuY2VzXFxwdXJjaGFzZXIuanMiXSwibmFtZXMiOlsid2ViMyIsIlB1cmNoYXNlciIsImFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsImFiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQXNCLEFBQXRCLEFBRUE7Ozs7OztrQkFBZSxVQUFDLEFBQUQsU0FBYSxBQUN4QjtXQUFPLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNILG9CQUFVLEFBRFAsS0FFSCxBQUZHLEFBQVAsQUFJSDtBQUxEIiwiZmlsZSI6InB1cmNoYXNlci5qcyIsInNvdXJjZVJvb3QiOiJEOi9TdHVkaWVzX0NvZGVTdHVmZi9TdHVkaWVzL1dlYiBEZXZfUmVhY3RKUy9naXQvc3VwY3ViZS13ZWJEYXBwIn0=