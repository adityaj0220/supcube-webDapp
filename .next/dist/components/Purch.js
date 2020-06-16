'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../backend/web3');

var _web2 = _interopRequireDefault(_web);

var _user = require('../backend/contractInstances/user');

var _user2 = _interopRequireDefault(_user);

var _routes = require('../routes');

var _producer = require('../backend/contractInstances/producer');

var _producer2 = _interopRequireDefault(_producer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Studies_CodeStuff\\Studies\\Web Dev_ReactJS\\git\\supcube-webDapp\\components\\Purch.js';


var RequestRow = function (_React$Component) {
    (0, _inherits3.default)(RequestRow, _React$Component);

    function RequestRow() {
        (0, _classCallCheck3.default)(this, RequestRow);

        return (0, _possibleConstructorReturn3.default)(this, (RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestRow, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                Serial = _props.Serial,
                request = _props.request;

            return _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, Serial + 1), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, request[0]), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, request[1]), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, request[3]));
        }
    }]);

    return RequestRow;
}(_react2.default.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFB1cmNoLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGFibGUiLCJCdXR0b24iLCJCdXR0b25Db250ZW50IiwiSWNvbiIsIndlYjMiLCJ1c2VyIiwiTGluayIsIlByb2R1Y2VyIiwiUmVxdWVzdFJvdyIsIlJvdyIsIkNlbGwiLCJwcm9wcyIsIlNlcmlhbCIsInJlcXVlc3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBTSxBQUFRLEFBQWU7O0FBQ3RDLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQWM7Ozs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7O2lDQUVNO2dCQUFBLEFBQ0ksTUFESixBQUNpQix1QkFEakIsQUFDSTtnQkFESixBQUNRLE9BRFIsQUFDaUIsdUJBRGpCLEFBQ1E7eUJBQ2EsS0FGckIsQUFFMEI7Z0JBRjFCLEFBRUcsZ0JBRkgsQUFFRztnQkFGSCxBQUVVLGlCQUZWLEFBRVUsQUFDZDs7bUNBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDRztBQURIO0FBQUEsYUFBQSxrQkFDSSxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx3QkFESCxBQUNHLEFBQWMsQUFDZCxvQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFGSCxBQUVHLEFBQU8sQUFBUSxBQUNmLHFCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLHVCQUhILEFBR0csQUFBTyxBQUFRLEFBQ2YscUJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsdUJBTFAsQUFDSSxBQUlHLEFBQU8sQUFBUSxBQUl6Qjs7Ozs7RUFkb0IsZ0JBZ0J6QixBLEFBaEIrQjs7a0JBZ0IvQixBQUFlIiwiZmlsZSI6IlB1cmNoLmpzIiwic291cmNlUm9vdCI6IkQ6L1N0dWRpZXNfQ29kZVN0dWZmL1N0dWRpZXMvV2ViIERldl9SZWFjdEpTL2dpdC9zdXBjdWJlLXdlYkRhcHAifQ==