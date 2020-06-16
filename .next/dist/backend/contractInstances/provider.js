'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('../web3');

var _web2 = _interopRequireDefault(_web);

var _Provider = require('../build/Provider.json');

var _Provider2 = _interopRequireDefault(_Provider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
    return new _web2.default.eth.Contract(_Provider2.default.abi, address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhY2tlbmRcXGNvbnRyYWN0SW5zdGFuY2VzXFxwcm92aWRlci5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiUHJvdmlkZXIiLCJhZGRyZXNzIiwiZXRoIiwiQ29udHJhY3QiLCJhYmkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFxQixBQUFyQixBQUVBOzs7Ozs7a0JBQWUsVUFBQyxBQUFELFNBQWEsQUFDeEI7V0FBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDSCxtQkFBUyxBQUROLEtBRUgsQUFGRyxBQUFQLEFBSUg7QUFMRCIsImZpbGUiOiJwcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJEOi9TdHVkaWVzX0NvZGVTdHVmZi9TdHVkaWVzL1dlYiBEZXZfUmVhY3RKUy9naXQvc3VwY3ViZS13ZWJEYXBwIn0=