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

var _provider = require('../../backend/contractInstances/provider');

var _provider2 = _interopRequireDefault(_provider);

var _user = require('../../backend/contractInstances/user');

var _user2 = _interopRequireDefault(_user);

var _routes = require('../../routes');

var _uploadFile = require('../../components/uploadFile');

var _uploadFile2 = _interopRequireDefault(_uploadFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Studies_CodeStuff\\Studies\\Web Dev_ReactJS\\git\\supcube-webDapp\\pages\\shipments\\provView.js?entry';


var Show = function (_React$Component) {
    (0, _inherits3.default)(Show, _React$Component);

    function Show() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Show);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Show.__proto__ || (0, _getPrototypeOf2.default)(Show)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            purch: '',
            shipAdd: '',
            downFile: '',
            errormsg: ''
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
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
                    lineNumber: 49
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement('h3', { style: { color: 'white' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'Shipment Dashboard'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement(_uploadFile2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            })))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var stake, provider, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log(props.query.address);
                                _context.next = 3;
                                return _user2.default.methods.val(props.query.add).call();

                            case 3:
                                stake = _context.sent;
                                provider = (0, _provider2.default)(stake);
                                _context.next = 7;
                                return provider.methods.getVal(props.query.address).call();

                            case 7:
                                summary = _context.sent;

                                console.log(summary);

                                return _context.abrupt('return', {
                                    address: props.query.address,
                                    description: summary[0],
                                    amount: summary[1],
                                    hash: summary[2]
                                });

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return Show;
}(_react2.default.Component);

exports.default = Show;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxzaGlwbWVudHNcXHByb3ZWaWV3LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwid2ViMyIsIlByb3ZpZGVyIiwidXNlciIsIkxpbmsiLCJSb3V0ZXIiLCJGaWxlIiwiU2hvdyIsInN0YXRlIiwicHVyY2giLCJzaGlwQWRkIiwiZG93bkZpbGUiLCJlcnJvcm1zZyIsInByb3BzIiwiZGVzY3JpcHRpb24iLCJhbW91bnQiLCJpdGVtcyIsImhlYWRlciIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwiZmx1aWQiLCJjb2xvciIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsIm1ldGhvZHMiLCJ2YWwiLCJhZGQiLCJjYWxsIiwic3Rha2UiLCJwcm92aWRlciIsImdldFZhbCIsInN1bW1hcnkiLCJoYXNoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQUssQUFBSyxBQUFPLEFBQUssQUFBTTs7QUFDckMsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFZLEFBQ3JCLEFBQVMsQUFBYzs7QUFDdkIsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUVYOzs7Ozs7Ozs7Ozs7Ozs0TSxBQUNKO21CQUFRLEFBQ0MsQUFDUDtxQkFGTSxBQUVHLEFBQ1Q7c0JBSE0sQUFHSSxBQUNWO3NCLEFBSk0sQUFJSztBQUpMLEFBQ047Ozs7O3NDQW9CWTt5QkFFa0IsS0FGbEIsQUFFdUI7Z0JBRnZCLEFBRUoscUJBRkksQUFFSjtnQkFGSSxBQUVRLGdCQUZSLEFBRVEsQUFFaEI7O2dCQUFNO3dCQUNGLEFBQ1csQUFDUDs2QkFGSixBQUVpQixBQUNiO3VCQUFPLEVBQUUsY0FBRixBQUFnQixBQUNiOzJCQUxKLEFBQ1YsQUFHVyxBQUNVO0FBSnJCLEFBQ0ksYUFGTTt3QkFPVixBQUNZLEFBQ1I7NkJBVFIsQUFBYyxBQU9WLEFBRWlCLEFBR3JCO0FBTEksQUFDSTtpREFJRCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O2lDQUdKLEFBQ0w7bUNBQ0UsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDQTtBQURBO0FBQUEsYUFBQSxrQkFDQSxjQUFBLFFBQUksT0FBTyxFQUFDLE9BQVosQUFBVyxBQUFPOzhCQUFsQjtnQ0FBQTtBQUFBO2VBREEsQUFDQSxBQUNBLHVDQUFBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDQTtBQURBO0FBQUEsK0JBQ0MsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDQztBQUREO29CQURBLEFBQ0EsQUFDQyxBQUFLLEFBRU4sZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDRjtBQURFOytCQUNGLEFBQUMsc0NBQUssU0FBUyxLQUFBLEFBQUssTUFBcEIsQUFBMEI7OEJBQTFCO2dDQVRKLEFBQ0UsQUFFQSxBQUNJLEFBSUEsQUFDRixBQU9QO0FBUE87Ozs7OztrSCxBQTNDcUI7Ozs7O2lDQUMzQjt3Q0FBQSxBQUFRLElBQUksTUFBQSxBQUFNLE1BQWxCLEFBQXdCOzt1Q0FDRixlQUFBLEFBQUssUUFBTCxBQUFhLElBQUksTUFBQSxBQUFNLE1BQXZCLEFBQTZCLEssQUFBN0IsQUFBa0M7O2lDQUFoRDtBLGlEQUNBO0EsMkNBQVcsd0IsQUFBQSxBQUFTOzt1Q0FDSixTQUFBLEFBQVMsUUFBVCxBQUFpQixPQUFPLE1BQUEsQUFBTSxNQUE5QixBQUFvQyxTLEFBQXBDLEFBQTZDOztpQ0FBN0Q7QSxtREFDTjs7d0NBQUEsQUFBUSxJQUFSLEFBQVk7Ozs2Q0FHQyxNQUFBLEFBQU0sTUFEWixBQUNrQixBQUNyQjtpREFBYSxRQUZWLEFBRVUsQUFBUSxBQUNyQjs0Q0FBUSxRQUhMLEFBR0ssQUFBUSxBQUNoQjswQ0FBTSxRLEFBSkgsQUFJRyxBQUFRO0FBSlgsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWhCUyxnQixBQUFNLEFBNkR6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJwcm92Vmlldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9TdHVkaWVzX0NvZGVTdHVmZi9TdHVkaWVzL1dlYiBEZXZfUmVhY3RKUy9naXQvc3VwY3ViZS13ZWJEYXBwIn0=