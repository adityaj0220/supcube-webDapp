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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../backend/web3');

var _web2 = _interopRequireDefault(_web);

var _purchaser = require('../../backend/contractInstances/purchaser');

var _purchaser2 = _interopRequireDefault(_purchaser);

var _provider = require('../../backend/contractInstances/provider');

var _provider2 = _interopRequireDefault(_provider);

var _user = require('../../backend/contractInstances/user');

var _user2 = _interopRequireDefault(_user);

var _uploadFile = require('../../components/uploadFile');

var _uploadFile2 = _interopRequireDefault(_uploadFile);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Studies_CodeStuff\\Studies\\Web Dev_ReactJS\\git\\supcube-webDapp\\pages\\shipments\\purchView.js?entry';


var Show = function (_React$Component) {
    (0, _inherits3.default)(Show, _React$Component);

    function Show() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Show);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Show.__proto__ || (0, _getPrototypeOf2.default)(Show)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            purch: '',
            shipAdd: '',
            downFile: '',
            errorMsg: '',
            loading: false
        }, _this.onClick = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts, stake, provider;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ loading: true, errorMsg: 'Creating...' });
                                _context.prev = 2;
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return _user2.default.methods.val(_this.state.purch).call();

                            case 8:
                                stake = _context.sent;
                                provider = (0, _provider2.default)(stake);
                                _context.next = 12;
                                return provider.methods.getAdd(_this.props.address, _this.state.purch).send({
                                    from: accounts[0]
                                });

                            case 12:

                                _routes.Router.pushRoute('/purchaser/' + accounts[0]);
                                _context.next = 18;
                                break;

                            case 15:
                                _context.prev = 15;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMsg: _context.t0.message });

                            case 18:
                                if (_this.state.errorMsg === "Creating...") {
                                    _this.setState({ errorMsg: "success", loading: true });
                                } else _this.setState({ loading: false });

                            case 19:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 15]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Show, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                description = _props.description,
                amount = _props.amount;

            var items = [{
                header: 'Description',
                description: description,
                style: { overflowWrap: 'break-word',
                    fluid: 'red' }
            }, {
                header: 'Quantity',
                description: amount
            }];
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, _react2.default.createElement('h3', { style: { color: 'white' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, 'Shipment Dashboard'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, _react2.default.createElement(_uploadFile2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            })))), _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onClick, error: !!this.state.errorMsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, _react2.default.createElement('h3', { style: { color: 'white' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, 'Send Shipment '), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, _react2.default.createElement('label', { style: { color: 'white' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }, 'Provider Address'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.purch,
                onChange: function onChange(event) {
                    return _this3.setState({ purch: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            })), this.state.errorMsg === "success" ? _react2.default.createElement(_semanticUiReact.Message, { positive: true, header: 'Shipment Status', content: 'Sent!', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }) : this.state.errorMsg === 'Creating...' ? _react2.default.createElement(_semanticUiReact.Message, { positive: true, header: 'Shipment status', content: 'Sending...', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            }) : _react2.default.createElement(_semanticUiReact.Message, {
                error: true,
                header: 'Please check the entered address!'
                //content={this.state.errorMsg}
                , __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }), _react2.default.createElement(_semanticUiReact.Button, {
                primary: true, animated: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }, 'Send!'), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'paper plane', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            })))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var stake, purchaser, summary;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                console.log(props.query.address);
                                _context2.next = 3;
                                return _user2.default.methods.val(props.query.add).call();

                            case 3:
                                stake = _context2.sent;
                                purchaser = (0, _purchaser2.default)(stake);
                                _context2.next = 7;
                                return purchaser.methods.getVal(props.query.address).call();

                            case 7:
                                summary = _context2.sent;

                                console.log(summary);

                                return _context2.abrupt('return', {
                                    address: props.query.address,
                                    description: summary[0],
                                    amount: summary[1],
                                    hash: summary[2]
                                });

                            case 10:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return Show;
}(_react2.default.Component);

exports.default = Show;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxzaGlwbWVudHNcXHB1cmNoVmlldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkljb24iLCJ3ZWIzIiwiUHVyY2hhc2VyIiwiUHJvdmlkZXIiLCJ1c2VyIiwiRmlsZSIsIkxpbmsiLCJSb3V0ZXIiLCJTaG93Iiwic3RhdGUiLCJwdXJjaCIsInNoaXBBZGQiLCJkb3duRmlsZSIsImVycm9yTXNnIiwibG9hZGluZyIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsInZhbCIsImNhbGwiLCJzdGFrZSIsInByb3ZpZGVyIiwiZ2V0QWRkIiwicHJvcHMiLCJhZGRyZXNzIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwiZGVzY3JpcHRpb24iLCJhbW91bnQiLCJpdGVtcyIsImhlYWRlciIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwiZmx1aWQiLCJjb2xvciIsInJlbmRlckNhcmRzIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJhZGQiLCJwdXJjaGFzZXIiLCJnZXRWYWwiLCJzdW1tYXJ5IiwiaGFzaCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFLLEFBQUssQUFBTyxBQUFLLEFBQU0sQUFBUzs7QUFDOUMsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVksQUFDckIsQUFBUyxBQUFjOzs7Ozs7O0ksQUFFakI7Ozs7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ekIsQUFDRSxBQWFBLEFBaUJJLEFBS2UsQUFDSSxBQVE1QjtBQVI0Qjs7Ozs7O21ILEFBbEdBOzs7OztpQ0FDM0I7d0NBQUEsQUFBUSxJQUFJLE1BQUEsQUFBTSxNQUFsQixBQUF3Qjs7dUNBQ0YsZUFBQSxBQUFLLFFBQUwsQUFBYSxJQUFJLE1BQUEsQUFBTSxNQUF2QixBQUE2QixLLEFBQTdCLEFBQWtDOztpQ0FBaEQ7QSxrREFDQTtBLDRDQUFZLHlCLEFBQUEsQUFBVTs7dUNBQ04sVUFBQSxBQUFVLFFBQVYsQUFBa0IsT0FBTyxNQUFBLEFBQU0sTUFBL0IsQUFBcUMsUyxBQUFyQyxBQUE4Qzs7aUNBQTlEO0Esb0RBQ047O3dDQUFBLEFBQVEsSUFBUixBQUFZOzs7NkNBR0MsTUFBQSxBQUFNLE1BRFosQUFDa0IsQUFDckI7aURBQWEsUUFGVixBQUVVLEFBQVEsQUFDckI7NENBQVEsUUFITCxBQUdLLEFBQVEsQUFDaEI7MENBQU0sUSxBQUpILEFBSUcsQUFBUTtBQUpYLEFBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFqQlMsZ0JBc0huQixBLEFBdEh5Qjs7a0JBc0h6QixBQUFlIiwiZmlsZSI6InB1cmNoVmlldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9TdHVkaWVzX0NvZGVTdHVmZi9TdHVkaWVzL1dlYiBEZXZfUmVhY3RKUy9naXQvc3VwY3ViZS13ZWJEYXBwIn0=