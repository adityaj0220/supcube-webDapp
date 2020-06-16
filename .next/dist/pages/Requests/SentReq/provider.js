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

var _provider = require('../../../backend/contractInstances/provider');

var _provider2 = _interopRequireDefault(_provider);

var _ProvRequest = require('../../../components/ProvRequest');

var _ProvRequest2 = _interopRequireDefault(_ProvRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Studies_CodeStuff\\Studies\\Web Dev_ReactJS\\git\\supcube-webDapp\\pages\\Requests\\SentReq\\provider.js?entry';


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
                return _react2.default.createElement(_ProvRequest2.default, {
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
            }, _react2.default.createElement(_routes.Link, { route: '/Requests/Create/provCreate', __source: {
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
            }, 'Add Request!'))), _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }), _react2.default.createElement('h3', { style: { color: 'white' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, 'Sent Requests'), _react2.default.createElement(_semanticUiReact.Divider, { width: 5, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'Serial No.'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'Description'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'Quantity'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'Recipient'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'Action'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, this.renderRow())));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var _this2 = this;

                var address, stake, provider, r, requests;
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
                                provider = (0, _provider2.default)(stake);
                                _context2.next = 8;
                                return provider.methods.getReq().call();

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
                                                        return provider.methods.getrequests(address).call();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxSZXF1ZXN0c1xcU2VudFJlcVxccHJvdmlkZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJUYWJsZSIsIkRpdmlkZXIiLCJMaW5rIiwiTGF5b3V0IiwidXNlciIsIlByb3ZpZGVyIiwiUHJvdlJlcXVlc3QiLCJSZXF1ZXN0IiwicHJvcHMiLCJyZXF1ZXN0cyIsIm1hcCIsInJlcXVlc3QiLCJpbmRleCIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwibWFyZ2luQm90dG9tIiwiY29sb3IiLCJyZW5kZXJSb3ciLCJhZGRyZXNzIiwicXVlcnkiLCJtZXRob2RzIiwidmFsIiwiY2FsbCIsInN0YWtlIiwiY29uc29sZSIsImxvZyIsInByb3ZpZGVyIiwiZ2V0UmVxIiwiciIsImFsbCIsImdldHJlcXVlc3RzIiwiaCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFPLEFBQU07O0FBQ3RCLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFpQjs7Ozs7Ozs7O0ksQUFFbEI7Ozs7Ozs7Ozs7O29DQWdCVSxBQUNOO3dCQUFPLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDL0M7dUNBQ0EsQUFBQzt5QkFBRCxBQUNLLEFBQ0w7NEJBRkEsQUFFUSxBQUNSOzZCQUhBLEFBR1M7O2tDQUhUO29DQURBLEFBQ0EsQUFNSDtBQU5HO0FBQ0EsaUJBREE7QUFGSixBQUFPLEFBU1YsYUFUVTs7OztpQ0FXSjtnQkFBQSxBQUNDLFNBREQsQUFDbUMsdUJBRG5DLEFBQ0M7Z0JBREQsQUFDUyxNQURULEFBQ21DLHVCQURuQyxBQUNTO2dCQURULEFBQ2MsYUFEZCxBQUNtQyx1QkFEbkMsQUFDYztnQkFEZCxBQUMwQixPQUQxQixBQUNtQyx1QkFEbkMsQUFDMEIsQUFDL0I7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLGFBQUEsa0JBQ0EsQUFBQyw4QkFBSyxPQUFOOzhCQUFBO2dDQUFBLEFBQ0E7QUFEQTsrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBaEIsQUFBd0IsU0FBUSxPQUFRLEVBQUMsY0FBekMsQUFBd0MsQUFBZTs4QkFBdkQ7Z0NBQUE7QUFBQTtlQUhKLEFBQ0EsQUFDQSxBQUNJLEFBR0o7OzhCQUFBO2dDQU5BLEFBTUEsQUFDSTtBQURKO0FBQUEsZ0NBQ0ksY0FBQSxRQUFJLE9BQU8sRUFBQyxPQUFaLEFBQVcsQUFBTzs4QkFBbEI7Z0NBQUE7QUFBQTtlQVBKLEFBT0ksQUFFQSxrQ0FBQSxBQUFDLDBDQUFRLE9BQVQsQUFBZ0I7OEJBQWhCO2dDQVRKLEFBU0ksQUFDQTtBQURBO2dDQUNBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0c7QUFESDtBQUFBLCtCQUNJLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURILEFBQ0csQUFDQSwrQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGSCxBQUVHLEFBQ0EsZ0NBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSEgsQUFHRyxBQUNBLDZCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUpILEFBSUcsQUFDQSw4QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFQWCxBQUNJLEFBQ0ksQUFLRyxBQUdQLDZCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0c7QUFESDtBQUFBLG9CQXJCWixBQUNJLEFBVUksQUFVSSxBQUNHLEFBQUssQUFNdkI7Ozs7O2tILEFBekQ0Qjs7Ozs7OztpQ0FDakI7QSwwQ0FBWSxNLEFBQU0sTSxBQUFsQjs7dUNBQ1ksZUFBQSxBQUFLLFFBQUwsQUFBYSxJQUFJLE1BQUEsQUFBTSxNQUF2QixBQUE2QixTLEFBQTdCLEFBQXNDOztpQ0FBcEQ7QSxrREFDTjs7d0NBQUEsQUFBUSxJQUFSLEFBQVksQUFDTjtBLDJDQUFXLHdCLEFBQUEsQUFBUzs7dUNBQ1YsU0FBQSxBQUFTLFFBQVQsQUFBaUIsUyxBQUFqQixBQUEwQjs7aUNBQXBDO0EsOENBQ047O3dDQUFBLEFBQVEsSUFBUixBQUFZOzt5REFDVyxBQUFRLE1BQUksQUFBRSxnQkFBRjt5SEFBTSxpQkFBQSxBQUFNLFNBQU47NENBQUE7c0dBQUE7c0RBQUE7aUZBQUE7eURBQUE7d0VBQUE7K0RBQ3pCLFNBQUEsQUFBUyxRQUFULEFBQWlCLFlBQWpCLEFBQTZCLFNBREosQUFDekIsQUFBc0M7O3lEQUFoRDtBQURtQyxxRUFBQTt5RkFBQSxBQUVoQzs7eURBRmdDO3lEQUFBO3dFQUFBOztBQUFBO29EQUFBO0FBQU47OzBEQUFBO2lFQUFBO0FBQUE7QSxBQUFaLG1DQUFZLENBQVo7O2lDQUFqQjtBLHFEQUlOOzt3Q0FBQSxBQUFRLElBQVIsQUFBWTtrRUFDTCxFQUFFLFNBQUYsU0FBVSxVLEFBQVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFiTyxnQkE2RHRCLEEsQUE3RDRCOztrQkE2RDVCLEFBQWUiLCJmaWxlIjoicHJvdmlkZXIuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovU3R1ZGllc19Db2RlU3R1ZmYvU3R1ZGllcy9XZWIgRGV2X1JlYWN0SlMvZ2l0L3N1cGN1YmUtd2ViRGFwcCJ9