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

var _provider = require('../../../backend/contractInstances/provider');

var _provider2 = _interopRequireDefault(_provider);

var _web = require('../../../backend/web3');

var _web2 = _interopRequireDefault(_web);

var _user = require('../../../backend/contractInstances/user');

var _user2 = _interopRequireDefault(_user);

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Studies_CodeStuff\\Studies\\Web Dev_ReactJS\\git\\supcube-webDapp\\pages\\Requests\\Create\\provCreate.js?entry';


var ShipmentNew = function (_React$Component) {
    (0, _inherits3.default)(ShipmentNew, _React$Component);

    function ShipmentNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ShipmentNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ShipmentNew.__proto__ || (0, _getPrototypeOf2.default)(ShipmentNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            description: '',
            amount: null,
            purchadd: '',
            errorMsg: '',
            loading: false
        }, _this.onSubmit = function () {
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
                                return _user2.default.methods.val(accounts[0]).call();

                            case 8:
                                stake = _context.sent;
                                provider = (0, _provider2.default)(stake);

                                console.log(stake);
                                _context.next = 13;
                                return provider.methods.createRequests(_this.state.description, _this.state.amount, _this.state.purchadd).send({
                                    from: accounts[0]
                                });

                            case 13:
                                setTimeout(_routes.Router.pushRoute('/provider/' + accounts[0] + '/Requests/SentRequests'), 3000);
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

    (0, _createClass3.default)(ShipmentNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement('h1', { style: { color: 'white' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'Create Request:'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement('label', { style: { color: 'white' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'Description'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.description,
                onChange: function onChange(event) {
                    return _this3.setState({ description: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement('label', { style: { color: 'white' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'Quantity'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.amount,
                onChange: function onChange(event) {
                    return _this3.setState({ amount: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, _react2.default.createElement('label', { style: { color: 'white' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, 'Purchaser Address'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.purchadd,
                onChange: function onChange(event) {
                    return _this3.setState({ purchadd: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            })), this.state.errorMsg === "success" ? _react2.default.createElement(_semanticUiReact.Message, { positive: true, header: 'Nice!', content: 'Request has been created!', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }) : this.state.errorMsg === 'Creating...' ? _react2.default.createElement(_semanticUiReact.Message, { positive: true, header: 'Request status', content: 'Creating...!', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }) : _react2.default.createElement(_semanticUiReact.Message, {
                error: true,
                header: 'Kindly enter valid values into the form.'
                // content={this.state.errorMsg}
                , __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading,
                primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, 'Create!'))));
        }
    }]);

    return ShipmentNew;
}(_react2.default.Component);

exports.default = ShipmentNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxSZXF1ZXN0c1xcQ3JlYXRlXFxwcm92Q3JlYXRlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIlByb3ZpZGVyIiwid2ViMyIsInVzZXIiLCJMYXlvdXQiLCJSb3V0ZXIiLCJTaGlwbWVudE5ldyIsInN0YXRlIiwiZGVzY3JpcHRpb24iLCJhbW91bnQiLCJwdXJjaGFkZCIsImVycm9yTXNnIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJ2YWwiLCJjYWxsIiwic3Rha2UiLCJwcm92aWRlciIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVSZXF1ZXN0cyIsInNlbmQiLCJmcm9tIiwic2V0VGltZW91dCIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJjb2xvciIsInRhcmdldCIsInZhbHVlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBSyxBQUFPLEFBQU07O0FBQzNCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQWM7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7Ozs7OzBOLEFBQ0Y7eUJBQ0EsQUFDaUIsQUFDYjtvQkFGSixBQUVZLEFBQ1I7c0JBSEosQUFHYSxBQUNUO3NCQUpKLEFBSWEsQUFDVDtxQixBQUxKLEFBS2E7QUFMYixBQUNJLGlCLEFBTUo7aUdBQVcsaUJBQUEsQUFBTyxPQUFQO3FDQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUVQO3NDQUFBLEFBQU0sQUFDTjtzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVUsTUFBTSxVQUh2QixBQUdQLEFBQWMsQUFBMEI7O2dEQUhqQztnREFBQTt1Q0FNZ0IsY0FBQSxBQUFLLElBTnJCLEFBTWdCLEFBQVM7O2lDQUExQjtBQU5DLG9EQUFBO2dEQUFBO3VDQU9hLGVBQUEsQUFBSyxRQUFMLEFBQWEsSUFBSSxTQUFqQixBQUFpQixBQUFTLElBUHZDLEFBT2EsQUFBOEI7O2lDQUE1QztBQVBDLGlEQVFEO0FBUkMsMkNBUVUsd0JBUlYsQUFRVSxBQUFTLEFBQzFCOzt3Q0FBQSxBQUFRLElBVEQsQUFTUCxBQUFZO2dEQVRMO2dEQVVELEFBQVMsUUFBVCxBQUNMLGVBQWUsTUFBQSxBQUFLLE1BRGYsQUFDcUIsYUFBWSxNQUFBLEFBQUssTUFEdEMsQUFDNEMsUUFBTyxNQUFBLEFBQUssTUFEeEQsQUFDOEQsVUFEOUQsQUFFTDswQ0FDUyxTQWJILEFBVUQsQUFFQSxBQUNJLEFBQVM7QUFEYixBQUNGLGlDQUhFOztpQ0FLTjsyQ0FBVyxlQUFBLEFBQU8seUJBQXVCLFNBQTlCLEFBQThCLEFBQVMsS0FBbEQsMkJBZk8sQUFlUCxBQUE4RTtnREFmdkU7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBa0JQOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxVQUFVLFlBbEJsQixBQWtCUCxBQUFjLEFBQWU7O2lDQUVqQztvQ0FBRyxNQUFBLEFBQUssTUFBTCxBQUFXLGFBQWQsQUFBeUIsZUFBYyxBQUNuQzswQ0FBQSxBQUFLLFNBQVMsRUFBQyxVQUFELEFBQVcsV0FBVyxTQUFwQyxBQUFjLEFBQStCLEFBQ2hEO0FBRkQsdUNBSUEsTUFBQSxBQUFLLFNBQVMsRUFBQyxTQXhCSixBQXdCWCxBQUFjLEFBQVU7O2lDQXhCYjtpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7O2lDQTRCWDt5QkFDSTs7bUNBQ0UsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDQTtBQURBO0FBQUEsYUFBQSxrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNFO0FBREY7QUFBQSwrQkFDRSxjQUFBLFFBQUksT0FBTyxFQUFDLE9BQVosQUFBVyxBQUFPOzhCQUFsQjtnQ0FBQTtBQUFBO2VBREYsQUFDRSxBQUNBLG9DQUFBLEFBQUMsdUNBQU0sVUFBVSxLQUFqQixBQUFzQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE5QyxBQUFvRDs4QkFBcEQ7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQSxXQUFPLE9BQU8sRUFBQyxPQUFmLEFBQWMsQUFBTzs4QkFBckI7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFDQSxnQ0FBQSxBQUFDO3VCQUNPLEtBQUEsQUFBSyxNQURiLEFBQ21CLEFBQ25COzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFVLEVBQUUsYUFBYSxNQUFBLEFBQU0sT0FBN0MsQUFBUyxBQUFlLEFBQTRCO0FBRjlEOzhCQUFBO2dDQUhSLEFBQ0ksQUFFSSxBQUlKO0FBSkk7QUFDQSxpQ0FHSCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUEsV0FBTyxPQUFPLEVBQUMsT0FBZixBQUFjLEFBQU87OEJBQXJCO2dDQUFBO0FBQUE7ZUFESixBQUNJLEFBQ0EsNkJBQUEsQUFBQzt1QkFDTyxLQUFBLEFBQUssTUFEYixBQUNtQixBQUNuQjswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBVSxFQUFFLFFBQVEsTUFBQSxBQUFNLE9BQXhDLEFBQVMsQUFBZSxBQUF1QjtBQUZ6RDs4QkFBQTtnQ0FUUixBQU9JLEFBRUksQUFJSjtBQUpJO0FBQ0EsaUNBR0gsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBLFdBQU8sT0FBTyxFQUFDLE9BQWYsQUFBYyxBQUFPOzhCQUFyQjtnQ0FBQTtBQUFBO2VBREosQUFDSSxBQUNBLHNDQUFBLEFBQUM7dUJBQ08sS0FBQSxBQUFLLE1BRGIsQUFDbUIsQUFDbkI7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVUsRUFBRSxVQUFVLE1BQUEsQUFBTSxPQUExQyxBQUFTLEFBQWUsQUFBeUI7QUFGM0Q7OEJBQUE7Z0NBZlIsQUFhSSxBQUVJLEFBSUg7QUFKRztBQUNBLHNCQUdILEFBQUssTUFBTCxBQUFXLGFBQVgsQUFBc0IsNEJBQVksQUFBQywwQ0FBUSxVQUFULE1BQWtCLFFBQWxCLEFBQXlCLFNBQVEsU0FBakMsQUFBeUM7OEJBQXpDO2dDQUFsQyxBQUFrQztBQUFBO2FBQUEsU0FDbEMsQUFBSyxNQUFMLEFBQVcsYUFBWixBQUF1QixnQ0FBaUIsQUFBQywwQ0FBUSxVQUFULE1BQWtCLFFBQWxCLEFBQXlCLGtCQUFpQixTQUExQyxBQUFrRDs4QkFBbEQ7Z0NBQXhDLEFBQXdDO0FBQUE7YUFBQSxDQUF2QyxtQkFDRCxBQUFDO3VCQUFELEFBRUE7d0JBQU8sQUFDUjtBQUhDO0FBQ0E7OEJBREE7Z0NBckJKLEFBcUJJLEFBS0E7QUFMQTthQUFBLG1CQUtBLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsQUFDNUI7eUJBREE7OEJBQUE7Z0NBQUE7QUFBQTtlQTlCUixBQUNFLEFBQ0EsQUFFRSxBQTBCSSxBQU9YOzs7OztFQTNFcUIsZ0IsQUFBTSxBQThFaEM7O2tCQUFBLEFBQWUiLCJmaWxlIjoicHJvdkNyZWF0ZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9TdHVkaWVzX0NvZGVTdHVmZi9TdHVkaWVzL1dlYiBEZXZfUmVhY3RKUy9naXQvc3VwY3ViZS13ZWJEYXBwIn0=