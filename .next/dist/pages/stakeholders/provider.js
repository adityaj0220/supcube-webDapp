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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _provider = require('../../backend/contractInstances/provider');

var _provider2 = _interopRequireDefault(_provider);

var _web = require('../../backend/web3');

var _web2 = _interopRequireDefault(_web);

var _user = require('../../backend/contractInstances/user');

var _user2 = _interopRequireDefault(_user);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Studies_CodeStuff\\Studies\\Web Dev_ReactJS\\git\\supcube-webDapp\\pages\\stakeholders\\provider.js?entry';


var Shipment = function (_React$Component) {
    (0, _inherits3.default)(Shipment, _React$Component);

    function Shipment() {
        (0, _classCallCheck3.default)(this, Shipment);

        return (0, _possibleConstructorReturn3.default)(this, (Shipment.__proto__ || (0, _getPrototypeOf2.default)(Shipment)).apply(this, arguments));
    }

    (0, _createClass3.default)(Shipment, [{
        key: 'renderShip',
        value: function renderShip() {
            var _this2 = this;

            var items = this.props.camp.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: _this2.props.add + '/shipment/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 25
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 26
                        }
                    }, 'View Shipment')),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_routes.Link, { route: '/provider/' + this.props.add + '/Requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Requests',
                primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }))), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }), _react2.default.createElement('h3', { style: { color: '#0098ff' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'Provider'), _react2.default.createElement('p', { style: { color: 'white' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Address: ', this.props.add), _react2.default.createElement(_semanticUiReact.Divider, { width: 5, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }), this.renderShip()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var stake, provider, camp, add;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _user2.default.methods.val(props.query.address).call();

                            case 2:
                                stake = _context.sent;

                                console.log(stake);
                                provider = (0, _provider2.default)(stake);
                                _context.next = 7;
                                return provider.methods.retAdd().call();

                            case 7:
                                camp = _context.sent;
                                add = props.query.address;
                                return _context.abrupt('return', { camp: camp, add: add });

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return Shipment;
}(_react2.default.Component);

exports.default = Shipment;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxzdGFrZWhvbGRlcnNcXHByb3ZpZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsIkJ1dHRvbiIsIkRpdmlkZXIiLCJMYXlvdXQiLCJQcm92aWRlciIsIndlYjMiLCJ1c2VyIiwiTGluayIsIlNoaXBtZW50IiwiaXRlbXMiLCJwcm9wcyIsImNhbXAiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJhZGQiLCJmbHVpZCIsImNvbG9yIiwicmVuZGVyU2hpcCIsIm1ldGhvZHMiLCJ2YWwiLCJxdWVyeSIsImNhbGwiLCJzdGFrZSIsImNvbnNvbGUiLCJsb2ciLCJwcm92aWRlciIsInJldEFkZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQUssQUFBTzs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBWTs7Ozs7OztJLEFBR2Y7Ozs7Ozs7Ozs7O3FDQVVOO3lCQUNJOztnQkFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLEtBQVgsQUFBZ0IsSUFBSSxtQkFBVyxBQUN6Qzs7NEJBQU8sQUFDSyxBQUNSO2lEQUNBLEFBQUMsOEJBQUssT0FBVSxPQUFBLEFBQUssTUFBZixBQUFxQixxQkFBM0IsQUFBMkM7c0NBQTNDO3dDQUFBLEFBQ0E7QUFEQTtxQkFBQSxrQkFDQSxjQUFBOztzQ0FBQTt3Q0FBQTtBQUFBO0FBQUEsdUJBSkcsQUFHSCxBQUNBLEFBSUE7MkJBUkosQUFBTyxBQVFJLEFBRWQ7QUFWVSxBQUNIO0FBRlIsQUFBYyxBQWFkLGFBYmM7O2lEQWFQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7Ozs7aUNBR0MsQUFDSjttQ0FDRSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNFO0FBREY7QUFBQSxhQUFBLGtCQUNFLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLCtCQUNBLEFBQUMsOEJBQUssc0JBQW9CLEtBQUEsQUFBSyxNQUF6QixBQUErQixNQUFyQzs4QkFBQTtnQ0FBQSxBQUNBO0FBREE7K0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQzt5QkFBRCxBQUNZLEFBQ1I7eUJBRkosQUFFWSxBQUNSO3lCQUhKOzhCQUFBO2dDQUhKLEFBQ0EsQUFDQSxBQUNJLEFBTUo7QUFOSTtBQUNJOzs4QkFLUjtnQ0FUQSxBQVNBLEFBQ0E7QUFEQTtBQUFBLGdDQUNBLGNBQUEsUUFBSSxPQUFPLEVBQUMsT0FBWixBQUFXLEFBQU87OEJBQWxCO2dDQUFBO0FBQUE7ZUFWQSxBQVVBLEFBQ0EsNkJBQUEsY0FBQSxPQUFHLE9BQU8sRUFBQyxPQUFYLEFBQVUsQUFBTzs4QkFBakI7Z0NBQUE7QUFBQTtlQUFxQyxrQkFBQSxBQUFLLE1BWDFDLEFBV0EsQUFBZ0QsQUFDaEQsc0JBQUEsQUFBQywwQ0FBUSxPQUFULEFBQWdCOzhCQUFoQjtnQ0FaQSxBQVlBLEFBQ0M7QUFERDtxQkFkSixBQUNFLEFBQ0UsQUFhQyxBQUFLLEFBSWI7Ozs7O2lILEFBOUMwQjs7Ozs7Ozt1Q0FDSCxlQUFBLEFBQUssUUFBTCxBQUFhLElBQUksTUFBQSxBQUFNLE1BQXZCLEFBQTZCLFMsQUFBN0IsQUFBc0M7O2lDQUFwRDtBLGlEQUNOOzt3Q0FBQSxBQUFRLElBQVIsQUFBWSxBQUNOO0EsMkNBQVcsd0IsQUFBQSxBQUFTOzt1Q0FDUCxTQUFBLEFBQVMsUUFBVCxBQUFpQixTLEFBQWpCLEFBQTBCOztpQ0FBdkM7QSxnREFDQTtBLHNDQUFNLE1BQUEsQUFBTSxNLEFBQU07aUVBQ2pCLEVBQUMsTUFBRCxNQUFNLEssQUFBTjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQVBRLGdCLEFBQU0sQUFrRDdCOztrQkFBQSxBQUFlIiwiZmlsZSI6InByb3ZpZGVyLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L1N0dWRpZXNfQ29kZVN0dWZmL1N0dWRpZXMvV2ViIERldl9SZWFjdEpTL2dpdC9zdXBjdWJlLXdlYkRhcHAifQ==