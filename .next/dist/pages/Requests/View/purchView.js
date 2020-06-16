'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _user = require('../../../backend/contractInstances/user');

var _user2 = _interopRequireDefault(_user);

var _purchaser = require('../../../backend/contractInstances/purchaser');

var _purchaser2 = _interopRequireDefault(_purchaser);

var _Purch = require('../../../components/Purch');

var _Purch2 = _interopRequireDefault(_Purch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Studies_CodeStuff\\Studies\\Web Dev_ReactJS\\git\\supcube-webDapp\\pages\\Requests\\View\\purchView.js?entry';


var Request = function (_React$Component) {
    (0, _inherits3.default)(Request, _React$Component);

    function Request() {
        (0, _classCallCheck3.default)(this, Request);

        return (0, _possibleConstructorReturn3.default)(this, (Request.__proto__ || (0, _getPrototypeOf2.default)(Request)).apply(this, arguments));
    }

    (0, _createClass3.default)(Request, [{
        key: 'renderRow',
        value: function renderRow() {
            return this.props.requests.map(function (request, index) {
                return _react2.default.createElement(_Purch2.default, {
                    key: index,
                    Serial: index,
                    request: request,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_routes.Link, { route: '/Requests/Create/purchCreate', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, 'New Request'))), _react2.default.createElement(_routes.Link, { route: '/purchaser/' + this.props.address + '/Requests/SentRequests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'Sent Requests'))), _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }), _react2.default.createElement('h3', { style: { color: 'white' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Recieved Requests'), _react2.default.createElement(_semanticUiReact.Divider, { width: 5, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, 'Serial No.'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'Description'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, 'Quantity'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'Sender'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, this.renderRow())));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var _this2 = this;

                var address, stake, purchaser, r, requests;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                _context2.next = 3;
                                return _user2.default.methods.val(props.query.address).call();

                            case 3:
                                stake = _context2.sent;

                                console.log(stake);
                                purchaser = (0, _purchaser2.default)(stake);
                                _context2.next = 8;
                                return purchaser.methods.getR().call();

                            case 8:
                                r = _context2.sent;

                                console.log(r);
                                _context2.next = 12;
                                return _promise2.default.all(r.map(function () {
                                    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(address) {
                                        var h;
                                        return _regenerator2.default.wrap(function _callee$(_context) {
                                            while (1) {
                                                switch (_context.prev = _context.next) {
                                                    case 0:
                                                        _context.next = 2;
                                                        return purchaser.methods.getrequests(address).call();

                                                    case 2:
                                                        h = _context.sent;
                                                        return _context.abrupt('return', h);

                                                    case 4:
                                                    case 'end':
                                                        return _context.stop();
                                                }
                                            }
                                        }, _callee, _this2);
                                    }));

                                    return function (_x2) {
                                        return _ref2.apply(this, arguments);
                                    };
                                }()));

                            case 12:
                                requests = _context2.sent;

                                console.log(requests);
                                return _context2.abrupt('return', { address: address, requests: requests });

                            case 15:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return Request;
}(_react2.default.Component);

exports.default = Request;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxSZXF1ZXN0c1xcVmlld1xccHVyY2hWaWV3LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiVGFibGUiLCJEaXZpZGVyIiwiTGluayIsIkxheW91dCIsInVzZXIiLCJQdXJjaGFzZXIiLCJQdXJjaCIsIlJlcXVlc3QiLCJwcm9wcyIsInJlcXVlc3RzIiwibWFwIiwicmVxdWVzdCIsImluZGV4IiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJtYXJnaW5Cb3R0b20iLCJhZGRyZXNzIiwiY29sb3IiLCJyZW5kZXJSb3ciLCJxdWVyeSIsIm1ldGhvZHMiLCJ2YWwiLCJjYWxsIiwic3Rha2UiLCJjb25zb2xlIiwibG9nIiwicHVyY2hhc2VyIiwiZ2V0UiIsInIiLCJhbGwiLCJnZXRyZXF1ZXN0cyIsImgiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBTyxBQUFNOztBQUN0QixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBVzs7Ozs7Ozs7O0ksQUFFWjs7Ozs7Ozs7Ozs7b0NBZ0JVLEFBQ047d0JBQU8sQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUMvQzt1Q0FDQSxBQUFDO3lCQUFELEFBQ0ssQUFDTDs0QkFGQSxBQUVRLEFBQ1I7NkJBSEEsQUFHUzs7a0NBSFQ7b0NBREEsQUFDQSxBQU1IO0FBTkc7QUFDQSxpQkFEQTtBQUZKLEFBQU8sQUFTVixhQVRVOzs7O2lDQVdKO2dCQUFBLEFBQ0MsU0FERCxBQUNtQyx1QkFEbkMsQUFDQztnQkFERCxBQUNTLE1BRFQsQUFDbUMsdUJBRG5DLEFBQ1M7Z0JBRFQsQUFDYyxhQURkLEFBQ21DLHVCQURuQyxBQUNjO2dCQURkLEFBQzBCLE9BRDFCLEFBQ21DLHVCQURuQyxBQUMwQixBQUMvQjs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDQTtBQURBO0FBQUEsYUFBQSxrQkFDQSxBQUFDLDhCQUFLLE9BQU47OEJBQUE7Z0NBQUEsQUFDQTtBQURBOytCQUNBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFoQixBQUF3QixTQUFRLE9BQVEsRUFBQyxjQUF6QyxBQUF3QyxBQUFlOzhCQUF2RDtnQ0FBQTtBQUFBO2VBSEosQUFDQSxBQUNBLEFBQ0ksQUFHSixrQ0FBQSxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7OEJBQUE7Z0NBQUEsQUFDQTtBQURBOytCQUNBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFoQixBQUF3QixTQUFRLE9BQVEsRUFBQyxjQUF6QyxBQUF3QyxBQUFlOzhCQUF2RDtnQ0FBQTtBQUFBO2VBUkosQUFNQSxBQUNBLEFBQ0ksQUFHSjs7OEJBQUE7Z0NBWEEsQUFXQSxBQUNJO0FBREo7QUFBQSxnQ0FDSSxjQUFBLFFBQUksT0FBTyxFQUFDLE9BQVosQUFBVyxBQUFPOzhCQUFsQjtnQ0FBQTtBQUFBO2VBWkosQUFZSSxBQUVBLHNDQUFBLEFBQUMsMENBQVEsT0FBVCxBQUFnQjs4QkFBaEI7Z0NBZEosQUFjSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDRztBQURIO0FBQUEsK0JBQ0ksY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREgsQUFDRyxBQUNBLCtCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZILEFBRUcsQUFDQSxnQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFISCxBQUdHLEFBQ0EsNkJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBTlgsQUFDSSxBQUNJLEFBSUcsQUFHUCw2QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNHO0FBREg7QUFBQSxvQkF6QlosQUFDSSxBQWVJLEFBU0ksQUFDRyxBQUFLLEFBTXZCOzs7OztrSCxBQTdENEI7Ozs7Ozs7aUNBQ2pCO0EsMENBQVksTSxBQUFNLE0sQUFBbEI7O3VDQUNZLGVBQUEsQUFBSyxRQUFMLEFBQWEsSUFBSSxNQUFBLEFBQU0sTUFBdkIsQUFBNkIsUyxBQUE3QixBQUFzQzs7aUNBQXBEO0Esa0RBQ047O3dDQUFBLEFBQVEsSUFBUixBQUFZLEFBQ047QSw0Q0FBWSx5QixBQUFBLEFBQVU7O3VDQUNaLFVBQUEsQUFBVSxRQUFWLEFBQWtCLE8sQUFBbEIsQUFBeUI7O2lDQUFuQztBLDhDQUNOOzt3Q0FBQSxBQUFRLElBQVIsQUFBWTs7eURBQ1csQUFBUSxNQUFJLEFBQUUsZ0JBQUY7eUhBQU0saUJBQUEsQUFBTSxTQUFOOzRDQUFBO3NHQUFBO3NEQUFBO2lGQUFBO3lEQUFBO3dFQUFBOytEQUN6QixVQUFBLEFBQVUsUUFBVixBQUFrQixZQUFsQixBQUE4QixTQURMLEFBQ3pCLEFBQXVDOzt5REFBakQ7QUFEbUMscUVBQUE7eUZBQUEsQUFFaEM7O3lEQUZnQzt5REFBQTt3RUFBQTs7QUFBQTtvREFBQTtBQUFOOzswREFBQTtpRUFBQTtBQUFBO0EsQUFBWixtQ0FBWSxDQUFaOztpQ0FBakI7QSxxREFJTjs7d0NBQUEsQUFBUSxJQUFSLEFBQVk7a0VBQ0wsRUFBQyxTQUFELFNBQVMsVSxBQUFUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBYk8sZ0IsQUFBTSxBQWlFNUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoicHVyY2hWaWV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L1N0dWRpZXNfQ29kZVN0dWZmL1N0dWRpZXMvV2ViIERldl9SZWFjdEpTL2dpdC9zdXBjdWJlLXdlYkRhcHAifQ==