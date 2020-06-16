'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _purchaser = require('../backend/contractInstances/purchaser');

var _purchaser2 = _interopRequireDefault(_purchaser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Studies_CodeStuff\\Studies\\Web Dev_ReactJS\\git\\supcube-webDapp\\components\\ProvRequest.js';


var RequestRow = function (_React$Component) {
    (0, _inherits3.default)(RequestRow, _React$Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onSend = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var stake, purchaser, accounts;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _user2.default.methods.val(_this.props.request[2]).call();

                        case 2:
                            stake = _context.sent;

                            console.log(stake);
                            purchaser = (0, _purchaser2.default)(stake);
                            _context.next = 7;
                            return _web2.default.eth.getAccounts();

                        case 7:
                            accounts = _context.sent;
                            _context.next = 10;
                            return purchaser.methods.addReq(_this.props.request[4], _this.props.request[2]).send({ from: accounts[0] });

                        case 10:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
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
                    lineNumber: 21
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, Serial + 1), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, request[0]), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, request[1]), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, request[2]), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { animated: true,
                basic: true, onClick: this.onSend,
                primary: true,
                color: 'green', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, 'Send'), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'arrow right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            })))));
        }
    }]);

    return RequestRow;
}(_react2.default.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFByb3ZSZXF1ZXN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGFibGUiLCJCdXR0b24iLCJJY29uIiwid2ViMyIsInVzZXIiLCJQdXJjaGFzZXIiLCJSZXF1ZXN0Um93Iiwib25TZW5kIiwibWV0aG9kcyIsInZhbCIsInByb3BzIiwicmVxdWVzdCIsImNhbGwiLCJzdGFrZSIsImNvbnNvbGUiLCJsb2ciLCJwdXJjaGFzZXIiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiYWRkUmVxIiwic2VuZCIsImZyb20iLCJSb3ciLCJDZWxsIiwiU2VyaWFsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBTSxBQUFROztBQUN2QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBZTs7Ozs7Ozs7O0ksQUFFaEI7Ozs7Ozs7Ozs7Ozs7Ozt3TixBQUVGLGtGQUFTLG1CQUFBO2tDQUFBOzBFQUFBOzBCQUFBO3FEQUFBOzZCQUFBOzRDQUFBO21DQUNlLGVBQUEsQUFBSyxRQUFMLEFBQWEsSUFBSSxNQUFBLEFBQUssTUFBTCxBQUFXLFFBQTVCLEFBQWlCLEFBQW1CLElBRG5ELEFBQ2UsQUFBd0M7OzZCQUF0RDtBQURELDZDQUVMOztvQ0FBQSxBQUFRLElBQVIsQUFBWSxBQUNOO0FBSEQsd0NBR2EseUJBSGIsQUFHYSxBQUFVOzRDQUh2QjttQ0FJa0IsY0FBQSxBQUFLLElBSnZCLEFBSWtCLEFBQVM7OzZCQUExQjtBQUpELGdEQUFBOzRDQUFBO21DQUtDLFVBQUEsQUFBVSxRQUFWLEFBQWtCLE9BQU8sTUFBQSxBQUFLLE1BQUwsQUFBVyxRQUFwQyxBQUF5QixBQUFtQixJQUFHLE1BQUEsQUFBSyxNQUFMLEFBQVcsUUFBMUQsQUFBK0MsQUFBbUIsSUFBbEUsQUFDTCxLQUFLLEVBQUMsTUFBTSxTQU5SLEFBS0MsQUFDQSxBQUFPLEFBQVM7OzZCQU5qQjs2QkFBQTs0Q0FBQTs7QUFBQTt3QkFBQTtBOzs7OztpQ0FRRDtnQkFBQSxBQUNJLE1BREosQUFDaUIsdUJBRGpCLEFBQ0k7Z0JBREosQUFDUSxPQURSLEFBQ2lCLHVCQURqQixBQUNRO3lCQUNhLEtBRnJCLEFBRTBCO2dCQUYxQixBQUVHLGdCQUZILEFBRUc7Z0JBRkgsQUFFVSxpQkFGVixBQUVVLEFBQ2Q7O21DQUNLLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0c7QUFESDtBQUFBLGFBQUEsa0JBQ0ksY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsd0JBREgsQUFDRyxBQUFjLEFBQ2Qsb0JBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsdUJBRkgsQUFFRyxBQUFPLEFBQVEsQUFDZixxQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSx1QkFISCxBQUdHLEFBQU8sQUFBUSxBQUNmLHFCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLHVCQUpILEFBSUcsQUFBTyxBQUFRLEFBQ2YscUJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFFSTtBQUZKO0FBQUEsK0JBRUksQUFBQyx5Q0FBTyxVQUFSLEFBQ0E7dUJBREEsTUFDTSxTQUFTLEtBRGYsQUFDb0IsQUFDaEI7eUJBRkosQUFHSTt1QkFISixBQUdVOzhCQUhWO2dDQUFBLEFBSVE7QUFKUjsrQkFJUyxjQUFELHdCQUFBLEFBQVEsV0FBUSxTQUFoQjs4QkFBQTtnQ0FBQTtBQUFBO2VBSlIsQUFJUSxBQUlBLHlCQUFDLGNBQUQsd0JBQUEsQUFBUSxXQUFRLFFBQWhCOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDLHVDQUFLLE1BQU4sQUFBVzs4QkFBWDtnQ0FqQnZCLEFBQ0ksQUFLRyxBQUVJLEFBUVEsQUFDSSxBQU0xQjtBQU4wQjs7Ozs7O0VBOUJOLGdCLEFBQU0sQUFzQy9COztrQkFBQSxBQUFlIiwiZmlsZSI6IlByb3ZSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IkQ6L1N0dWRpZXNfQ29kZVN0dWZmL1N0dWRpZXMvV2ViIERldl9SZWFjdEpTL2dpdC9zdXBjdWJlLXdlYkRhcHAifQ==