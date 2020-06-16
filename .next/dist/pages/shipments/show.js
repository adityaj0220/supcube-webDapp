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

var _shipment = require('../../backend/contractInstances/shipment');

var _shipment2 = _interopRequireDefault(_shipment);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../backend/web3');

var _web2 = _interopRequireDefault(_web);

var _user = require('../../backend/contractInstances/user');

var _user2 = _interopRequireDefault(_user);

var _uploadFile = require('../../components/uploadFile');

var _uploadFile2 = _interopRequireDefault(_uploadFile);

var _purchaser = require('../../backend/contractInstances/purchaser');

var _purchaser2 = _interopRequireDefault(_purchaser);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Studies_CodeStuff\\Studies\\Web Dev_ReactJS\\git\\supcube-webDapp\\pages\\shipments\\show.js?entry';


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
            errorMsg: '',
            loading: false
        }, _this.onClick = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts, stake, purchaser;
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

                                console.log(stake);
                                purchaser = (0, _purchaser2.default)(stake);
                                _context.next = 13;
                                return purchaser.methods.getAdd(_this.props.address, _this.state.purch).send({
                                    from: accounts[0]
                                });

                            case 13:
                                setTimeout(_routes.Router.pushRoute('/producer/' + accounts[0]), 3500);
                                _context.next = 19;
                                break;

                            case 16:
                                _context.prev = 16;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMsg: _context.t0.message });

                            case 19:

                                if (_this.state.errorMsg === "Creating...") {
                                    _this.setState({ errorMsg: "success", loading: true });
                                } else _this.setState({ loading: false });

                            case 20:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 16]]);
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
                    lineNumber: 48
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
                    lineNumber: 81
                }
            }, _react2.default.createElement('h3', { style: { color: 'white' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, 'Shipment Dashboard'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, _react2.default.createElement(_uploadFile2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            })))), _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onClick, error: !!this.state.errorMsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, _react2.default.createElement('h3', { style: { color: 'white' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, 'Send Shipment '), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, _react2.default.createElement('label', { style: { color: 'white' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, 'Purchaser Address'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.purch,
                onChange: function onChange(event) {
                    return _this3.setState({ purch: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            })), this.state.errorMsg === "success" ? _react2.default.createElement(_semanticUiReact.Message, { positive: true, header: 'Shipment Status', content: 'Sent!', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }) : this.state.errorMsg === 'Creating...' ? _react2.default.createElement(_semanticUiReact.Message, { positive: true, header: 'Shipment status', content: 'Sending...', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }) : _react2.default.createElement(_semanticUiReact.Message, {
                error: true,
                header: 'Please check the entered address!'
                //content={this.state.errorMsg}
                , __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            }), _react2.default.createElement(_semanticUiReact.Button, {
                primary: true,
                animated: true,
                loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
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
                var shipment, summary;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                shipment = (0, _shipment2.default)(props.query.address);

                                console.log(props.query.add);
                                _context2.next = 4;
                                return shipment.methods.getUser().call();

                            case 4:
                                summary = _context2.sent;

                                console.log(summary);

                                return _context2.abrupt('return', {
                                    address: props.query.address,
                                    description: summary[0],
                                    amount: summary[1]
                                });

                            case 7:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxzaGlwbWVudHNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJTaGlwbWVudCIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkljb24iLCJ3ZWIzIiwidXNlciIsIkZpbGUiLCJQdXJjaGFzZXIiLCJSb3V0ZXIiLCJMaW5rIiwiU2hvdyIsInN0YXRlIiwicHVyY2giLCJzaGlwQWRkIiwiZXJyb3JNc2ciLCJsb2FkaW5nIiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwidmFsIiwiY2FsbCIsInN0YWtlIiwiY29uc29sZSIsImxvZyIsInB1cmNoYXNlciIsImdldEFkZCIsInByb3BzIiwiYWRkcmVzcyIsInNlbmQiLCJmcm9tIiwic2V0VGltZW91dCIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJkZXNjcmlwdGlvbiIsImFtb3VudCIsIml0ZW1zIiwiaGVhZGVyIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJmbHVpZCIsImNvbG9yIiwicmVuZGVyQ2FyZHMiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNoaXBtZW50IiwicXVlcnkiLCJhZGQiLCJnZXRVc2VyIiwic3VtbWFyeSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVMsQUFBSyxBQUFLLEFBQU8sQUFBSyxBQUFNLEFBQVM7O0FBQzlDLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFTLEFBQWMsQUFDdkIsQUFBUyxBQUFZOzs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7Ozs7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QUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsdUNBQUssTUFBTixBQUFXOzhCQUFYO2dDQXZDdkIsQUFDRSxBQWFBLEFBZ0JJLEFBUWEsQUFDSSxBQVExQjtBQVIwQjs7Ozs7O21ILEFBbkdFOzs7OztpQ0FDbkI7QSwyQ0FBVyx3QkFBUyxNQUFBLEFBQU0sTSxBQUFmLEFBQXFCLEFBQ3RDOzt3Q0FBQSxBQUFRLElBQUksTUFBQSxBQUFNLE1BQWxCLEFBQXdCOzt1Q0FDRixTQUFBLEFBQVMsUUFBVCxBQUFpQixVLEFBQWpCLEFBQTJCOztpQ0FBM0M7QSxvREFDTjs7d0NBQUEsQUFBUSxJQUFSLEFBQVk7Ozs2Q0FHQyxNQUFBLEFBQU0sTUFEWixBQUNrQixBQUNyQjtpREFBYSxRQUZWLEFBRVUsQUFBUSxBQUNyQjs0Q0FBUSxRLEFBSEwsQUFHSyxBQUFRO0FBSGIsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWZPLGdCQXNIbkIsQSxBQXRIeUI7O2tCQXNIekIsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L1N0dWRpZXNfQ29kZVN0dWZmL1N0dWRpZXMvV2ViIERldl9SZWFjdEpTL2dpdC9zdXBjdWJlLXdlYkRhcHAifQ==