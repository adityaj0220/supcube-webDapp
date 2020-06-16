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

var _purchaser = require('../../backend/contractInstances/purchaser');

var _purchaser2 = _interopRequireDefault(_purchaser);

var _user = require('../../backend/contractInstances/user');

var _user2 = _interopRequireDefault(_user);

var _web = require('../../backend/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Studies_CodeStuff\\Studies\\Web Dev_ReactJS\\git\\supcube-webDapp\\pages\\stakeholders\\purchaser.js?entry';


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
                            lineNumber: 27
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 28
                        }
                    }, 'View Shipment')),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement(_routes.Link, { route: '/purchaser/' + this.props.add + '/Requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Requests',
                primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }))), _react2.default.createElement('h3', { style: { color: '#0098ff' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Purchaser'), _react2.default.createElement('p', { style: { color: 'white' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Address: ', this.props.add), _react2.default.createElement(_semanticUiReact.Divider, { width: 5, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }), this.renderShip()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var stake, purchaser, camp, add;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _user2.default.methods.val(props.query.address).call();

                            case 2:
                                stake = _context.sent;

                                console.log(stake);
                                purchaser = (0, _purchaser2.default)(stake);
                                _context.next = 7;
                                return purchaser.methods.retAdd().call();

                            case 7:
                                camp = _context.sent;
                                add = props.query.address;

                                console.log(add);
                                return _context.abrupt('return', { camp: camp, add: add, stake: stake });

                            case 11:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxzdGFrZWhvbGRlcnNcXHB1cmNoYXNlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJCdXR0b24iLCJEaXZpZGVyIiwiTGF5b3V0IiwiUHVyY2hhc2VyIiwidXNlciIsIndlYjMiLCJMaW5rIiwiU2hpcG1lbnQiLCJpdGVtcyIsInByb3BzIiwiY2FtcCIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImFkZCIsImZsdWlkIiwiY29sb3IiLCJyZW5kZXJTaGlwIiwibWV0aG9kcyIsInZhbCIsInF1ZXJ5IiwiY2FsbCIsInN0YWtlIiwiY29uc29sZSIsImxvZyIsInB1cmNoYXNlciIsInJldEFkZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQUssQUFBTzs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFVOzs7O0FBRWpCLEFBQVMsQUFBWTs7Ozs7OztJLEFBR2Y7Ozs7Ozs7Ozs7O3FDQVdOO3lCQUNJOztnQkFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLEtBQVgsQUFBZ0IsSUFBSSxtQkFBVyxBQUN6Qzs7NEJBQU8sQUFDSyxBQUNSO2lEQUNBLEFBQUMsOEJBQUssT0FBVSxPQUFBLEFBQUssTUFBZixBQUFxQixxQkFBM0IsQUFBMkM7c0NBQTNDO3dDQUFBLEFBQ0E7QUFEQTtxQkFBQSxrQkFDQSxjQUFBOztzQ0FBQTt3Q0FBQTtBQUFBO0FBQUEsdUJBSkcsQUFHSCxBQUNBLEFBSUE7MkJBUkosQUFBTyxBQVFJLEFBRWQ7QUFWVSxBQUNIO0FBRlIsQUFBYyxBQWFkLGFBYmM7O2lEQWFQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7Ozs7aUNBR0MsQUFDSjttQ0FDRSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNFO0FBREY7QUFBQSxhQUFBLGtCQUNFLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLCtCQUNBLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxNQUF0Qzs4QkFBQTtnQ0FBQSxBQUNBO0FBREE7K0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQzt5QkFBRCxBQUNZLEFBQ1I7eUJBRkosQUFFWSxBQUNSO3lCQUhKOzhCQUFBO2dDQUhKLEFBQ0EsQUFDQSxBQUNJLEFBTUo7QUFOSTtBQUNJLGtDQUtSLGNBQUEsUUFBSSxPQUFPLEVBQUMsT0FBWixBQUFXLEFBQU87OEJBQWxCO2dDQUFBO0FBQUE7ZUFUQSxBQVNBLEFBQ0EsOEJBQUEsY0FBQSxPQUFHLE9BQU8sRUFBQyxPQUFYLEFBQVUsQUFBTzs4QkFBakI7Z0NBQUE7QUFBQTtlQUFxQyxrQkFBQSxBQUFLLE1BVjFDLEFBVUEsQUFBZ0QsQUFDaEQsc0JBQUEsQUFBQywwQ0FBUSxPQUFULEFBQWdCOzhCQUFoQjtnQ0FYQSxBQVdBLEFBQ0M7QUFERDtxQkFiSixBQUNFLEFBQ0UsQUFZQyxBQUFLLEFBSWI7Ozs7O2lILEFBOUMwQjs7Ozs7Ozt1Q0FDSCxlQUFBLEFBQUssUUFBTCxBQUFhLElBQUksTUFBQSxBQUFNLE1BQXZCLEFBQTZCLFMsQUFBN0IsQUFBc0M7O2lDQUFwRDtBLGlEQUNOOzt3Q0FBQSxBQUFRLElBQVIsQUFBWSxBQUNOO0EsNENBQVkseUIsQUFBQSxBQUFVOzt1Q0FDVCxVQUFBLEFBQVUsUUFBVixBQUFrQixTLEFBQWxCLEFBQTJCOztpQ0FBeEM7QSxnREFDQTtBLHNDQUFNLE1BQUEsQUFBTSxNLEFBQU0sQUFDeEI7O3dDQUFBLEFBQVEsSUFBUixBQUFZO2lFQUNMLEVBQUMsTUFBRCxNQUFNLEtBQU4sS0FBVSxPLEFBQVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFSUSxnQixBQUFNLEFBa0Q3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJwdXJjaGFzZXIuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovU3R1ZGllc19Db2RlU3R1ZmYvU3R1ZGllcy9XZWIgRGV2X1JlYWN0SlMvZ2l0L3N1cGN1YmUtd2ViRGFwcCJ9