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

var _producer = require('../../backend/contractInstances/producer');

var _producer2 = _interopRequireDefault(_producer);

var _web = require('../../backend/web3');

var _web2 = _interopRequireDefault(_web);

var _user = require('../../backend/contractInstances/user');

var _user2 = _interopRequireDefault(_user);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Studies_CodeStuff\\Studies\\Web Dev_ReactJS\\git\\supcube-webDapp\\pages\\stakeholders\\producer.js?entry';


var Shipment = function (_React$Component) {
    (0, _inherits3.default)(Shipment, _React$Component);

    function Shipment() {
        (0, _classCallCheck3.default)(this, Shipment);

        return (0, _possibleConstructorReturn3.default)(this, (Shipment.__proto__ || (0, _getPrototypeOf2.default)(Shipment)).apply(this, arguments));
    }

    (0, _createClass3.default)(Shipment, [{
        key: 'renderShip',
        value: function renderShip() {
            var items = this.props.camp.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: '/producer/shipments/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 26
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                        }
                    }, 'View Shipment')),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement(_routes.Link, { route: '/shipments/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { animated: true,
                floated: 'right',
                style: { marginBottom: 10 },
                color: 'green',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, 'Create Shipment'), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'add', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }))))), _react2.default.createElement(_routes.Link, { route: '/producer/' + this.props.add + '/Requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Requests',
                primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }))), _react2.default.createElement('h3', { style: { color: '#0098ff' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'Producer'), _react2.default.createElement('p', { style: { color: 'white' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, 'Address : ', this.props.add), _react2.default.createElement(_semanticUiReact.Divider, { width: 5, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }), this.renderShip()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var stake, producer, add, camp;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _user2.default.methods.val(props.query.address).call();

                            case 2:
                                stake = _context.sent;

                                console.log(stake);
                                producer = (0, _producer2.default)(stake);
                                _context.next = 7;
                                return producer.methods.prod().call();

                            case 7:
                                add = _context.sent;
                                _context.next = 10;
                                return producer.methods.getShipments().call();

                            case 10:
                                camp = _context.sent;

                                console.log(camp);
                                return _context.abrupt('return', { camp: camp, add: add, stake: stake });

                            case 13:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxzdGFrZWhvbGRlcnNcXHByb2R1Y2VyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsIkJ1dHRvbiIsIkRpdmlkZXIiLCJJY29uIiwiTGF5b3V0IiwiUHJvZHVjZXIiLCJ3ZWIzIiwidXNlciIsIkxpbmsiLCJTaGlwbWVudCIsIml0ZW1zIiwicHJvcHMiLCJjYW1wIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJtYXJnaW5Cb3R0b20iLCJhZGQiLCJjb2xvciIsInJlbmRlclNoaXAiLCJtZXRob2RzIiwidmFsIiwicXVlcnkiLCJjYWxsIiwic3Rha2UiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjZXIiLCJwcm9kIiwiZ2V0U2hpcG1lbnRzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBSyxBQUFPLEFBQVM7O0FBQzlCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUdmOzs7Ozs7Ozs7OztxQ0FXTixBQUNJO2dCQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixJQUFJLG1CQUFXLEFBQ3pDOzs0QkFBTyxBQUNLLEFBQ1I7aURBQ0EsQUFBQyw4QkFBSyxnQ0FBTixBQUFvQztzQ0FBcEM7d0NBQUEsQUFDQTtBQURBO3FCQUFBLGtCQUNBLGNBQUE7O3NDQUFBO3dDQUFBO0FBQUE7QUFBQSx1QkFKRyxBQUdILEFBQ0EsQUFJQTsyQkFSSixBQUFPLEFBUUksQUFFZDtBQVZVLEFBQ0g7QUFGUixBQUFjLEFBYWQsYUFiYzs7aURBYVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7OztpQ0FHQyxBQUNKO21DQUNFLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0U7QUFERjtBQUFBLGFBQUEsa0JBQ0UsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDQTtBQURBO0FBQUEsK0JBQ0EsQUFBQyw4QkFBSyxPQUFOLEFBQVk7OEJBQVo7Z0NBQUEsQUFDQTtBQURBOytCQUNBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLCtCQUNBLEFBQUMseUNBQU8sVUFBUixBQUNBO3lCQURBLEFBQ1EsQUFDUjt1QkFBUSxFQUFDLGNBRlQsQUFFUSxBQUFlLEFBQ3ZCO3VCQUhBLEFBR007OzhCQUhOO2dDQUFBLEFBS2U7QUFMZjsrQkFLZ0IsY0FBRCx3QkFBQSxBQUFRLFdBQVEsU0FBaEI7OEJBQUE7Z0NBQUE7QUFBQTtlQUxmLEFBS2UsQUFJQSxvQ0FBQyxjQUFELHdCQUFBLEFBQVEsV0FBUSxRQUFoQjs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyx1Q0FBSyxNQUFOLEFBQVc7OEJBQVg7Z0NBYm5CLEFBQ0EsQUFDQSxBQUNBLEFBU2UsQUFDSSxBQUtuQjtBQUxtQjtvQ0FLbkIsQUFBQyw4QkFBSyxzQkFBb0IsS0FBQSxBQUFLLE1BQXpCLEFBQStCLE1BQXJDOzhCQUFBO2dDQUFBLEFBQ0E7QUFEQTsrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDO3lCQUFELEFBQ1ksQUFDUjt5QkFGSixBQUVZLEFBQ1I7eUJBSEo7OEJBQUE7Z0NBcEJKLEFBa0JBLEFBQ0EsQUFDSSxBQU1KO0FBTkk7QUFDSSxrQ0FLUixjQUFBLFFBQUksT0FBTyxFQUFDLE9BQVosQUFBVyxBQUFPOzhCQUFsQjtnQ0FBQTtBQUFBO2VBMUJBLEFBMEJBLEFBQ0EsNkJBQUEsY0FBQSxPQUFHLE9BQU8sRUFBQyxPQUFYLEFBQVUsQUFBTzs4QkFBakI7Z0NBQUE7QUFBQTtlQUFzQyxtQkFBQSxBQUFLLE1BM0IzQyxBQTJCQSxBQUFpRCxBQUVqRCxzQkFBQSxBQUFDLDBDQUFRLE9BQVQsQUFBZ0I7OEJBQWhCO2dDQTdCQSxBQTZCQSxBQUNDO0FBREQ7cUJBL0JKLEFBQ0UsQUFDRSxBQThCQyxBQUFLLEFBS2I7Ozs7O2lILEFBakUwQjs7Ozs7Ozt1Q0FDSCxlQUFBLEFBQUssUUFBTCxBQUFhLElBQUksTUFBQSxBQUFNLE1BQXZCLEFBQTZCLFMsQUFBN0IsQUFBc0M7O2lDQUFwRDtBLGlEQUNOOzt3Q0FBQSxBQUFRLElBQVIsQUFBWSxBQUNOO0EsMkNBQVcsd0IsQUFBQSxBQUFTOzt1Q0FDUixTQUFBLEFBQVMsUUFBVCxBQUFpQixPLEFBQWpCLEFBQXdCOztpQ0FBcEM7QTs7dUNBQ2EsU0FBQSxBQUFTLFFBQVQsQUFBaUIsZSxBQUFqQixBQUFnQzs7aUNBQTdDO0EsZ0RBQ047O3dDQUFBLEFBQVEsSUFBUixBQUFZO2lFQUNMLEVBQUMsTUFBRCxNQUFNLEtBQU4sS0FBVSxPLEFBQVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFSUSxnQkFxRXZCLEEsQUFyRTZCOztrQkFxRTdCLEFBQWUiLCJmaWxlIjoicHJvZHVjZXIuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovU3R1ZGllc19Db2RlU3R1ZmYvU3R1ZGllcy9XZWIgRGV2X1JlYWN0SlMvZ2l0L3N1cGN1YmUtd2ViRGFwcCJ9