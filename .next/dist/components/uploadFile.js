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

var _shipment = require('../backend/contractInstances/shipment');

var _shipment2 = _interopRequireDefault(_shipment);

var _web = require('../backend/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Studies_CodeStuff\\Studies\\Web Dev_ReactJS\\git\\supcube-webDapp\\components\\uploadFile.js';


var ipfsClient = require('ipfs-http-client');
var ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

var File = function (_React$Component) {
    (0, _inherits3.default)(File, _React$Component);

    function File() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, File);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = File.__proto__ || (0, _getPrototypeOf2.default)(File)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            laoding: false,
            buffer: null,
            fileHash: '',
            errorMsg: '',
            downFile: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                event.preventDefault();

                                _this.setState({ loading: true });
                                console.log('Submitting Form ...');
                                _context2.next = 5;
                                return ipfs.add(_this.state.buffer, function () {
                                    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(error, result) {
                                        var shipment, accounts;
                                        return _regenerator2.default.wrap(function _callee$(_context) {
                                            while (1) {
                                                switch (_context.prev = _context.next) {
                                                    case 0:
                                                        _this.setState({ fileHash: result[0].hash });

                                                        shipment = (0, _shipment2.default)(_this.props.address);
                                                        _context.prev = 2;
                                                        _context.next = 5;
                                                        return _web2.default.eth.getAccounts();

                                                    case 5:
                                                        accounts = _context.sent;
                                                        _context.next = 8;
                                                        return shipment.methods.setHash(_this.state.fileHash).send({
                                                            from: accounts[0]
                                                        });

                                                    case 8:
                                                        console.log("Uploaded");
                                                        _context.next = 14;
                                                        break;

                                                    case 11:
                                                        _context.prev = 11;
                                                        _context.t0 = _context['catch'](2);

                                                        _this.setState({ errorMsg: _context.t0.message });

                                                    case 14:
                                                    case 'end':
                                                        return _context.stop();
                                                }
                                            }
                                        }, _callee, _this2, [[2, 11]]);
                                    }));

                                    return function (_x2, _x3) {
                                        return _ref3.apply(this, arguments);
                                    };
                                }());

                            case 5:

                                _this.setState({ loading: false });

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.capture = function (event) {
            event.preventDefault();
            console.log('File Captured');
            var files = event.target.files[0];
            var reader = new window.FileReader();
            reader.readAsArrayBuffer(files);
            reader.onloadend = function () {
                _this.setState({ buffer: Buffer(reader.result) });
            };
        }, _this.viewFile = function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
                var shipment, gethash;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                event.preventDefault();

                                shipment = (0, _shipment2.default)(_this.props.address);
                                _context3.next = 4;
                                return shipment.methods.getUser().call();

                            case 4:
                                gethash = _context3.sent;

                                _this.setState({ downFile: gethash[2] });
                                window.open('https://ipfs.infura.io/ipfs/' + _this.state.downFile);

                            case 7:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this2);
            }));

            return function (_x4) {
                return _ref4.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(File, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement('label', { style: { color: 'white' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'Upload shipment here :'), _react2.default.createElement(_semanticUiReact.Input, { type: 'File', onChange: this.capture, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            })), _react2.default.createElement(_semanticUiReact.Message, {
                error: true,
                header: 'Oops!',
                content: this.state.errorMsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { animated: 'fade',
                primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, 'Upload File'), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'upload', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            })))), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }), _react2.default.createElement(_semanticUiReact.Button, {
                primary: true,
                loading: this.state.loading,
                onClick: this.viewFile,
                animated: 'fade',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, 'View File'), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'eye', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }))));
        }
    }]);

    return File;
}(_react2.default.Component);

exports.default = File;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHVwbG9hZEZpbGUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5raW5nIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkljb24iLCJTaGlwbWVudCIsIndlYjMiLCJSb3V0ZXIiLCJpcGZzQ2xpZW50IiwicmVxdWlyZSIsImlwZnMiLCJob3N0IiwicG9ydCIsInByb3RvY29sIiwiRmlsZSIsInN0YXRlIiwibGFvZGluZyIsImJ1ZmZlciIsImZpbGVIYXNoIiwiZXJyb3JNc2ciLCJkb3duRmlsZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwibG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJlcnJvciIsInJlc3VsdCIsImhhc2giLCJzaGlwbWVudCIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwic2V0SGFzaCIsInNlbmQiLCJmcm9tIiwibWVzc2FnZSIsImNhcHR1cmUiLCJmaWxlcyIsInRhcmdldCIsInJlYWRlciIsIndpbmRvdyIsIkZpbGVSZWFkZXIiLCJyZWFkQXNBcnJheUJ1ZmZlciIsIm9ubG9hZGVuZCIsIkJ1ZmZlciIsInZpZXdGaWxlIiwiZ2V0VXNlciIsImNhbGwiLCJnZXRoYXNoIiwib3BlbiIsImNvbG9yIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUyxBQUFLLEFBQU0sQUFBUSxBQUFROztBQUNwQyxBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7Ozs7OztBQUV2QixJQUFNLGFBQU4sQUFBTSxBQUFhO0FBQ25CLElBQU0sT0FBTyxXQUFXLEVBQUMsTUFBRCxBQUFPLGtCQUFrQixNQUF6QixBQUFnQyxNQUFLLFVBQTdELEFBQWEsQUFBVyxB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MkNBQUEsQUFBQyx3Q0FBTSxNQUFQLEFBQVksUUFBTyxVQUFVLEtBQTdCLEFBQWtDOzhCQUFsQztnQ0FMUixBQUNJLEFBSUksQUFFSjtBQUZJO2lDQUVKLEFBQUM7dUJBQUQsQUFFQTt3QkFGQSxBQUVPLEFBQ1A7eUJBQVMsS0FBQSxBQUFLLE1BSGQsQUFHb0I7OEJBSHBCO2dDQVBKLEFBT0ksQUFLRztBQUxIO0FBQ0EsZ0NBSUcsQUFBQyx5Q0FBTyxVQUFSLEFBQW1CLEFBQ2Y7eUJBREo7OEJBQUE7Z0NBQUEsQUFFUTtBQUZSOytCQUVTLGNBQUQsd0JBQUEsQUFBUSxXQUFRLFNBQWhCOzhCQUFBO2dDQUFBO0FBQUE7ZUFGUixBQUVRLEFBSUEsZ0NBQUMsY0FBRCx3QkFBQSxBQUFRLFdBQVEsUUFBaEI7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsdUNBQUssTUFBTixBQUFXOzhCQUFYO2dDQXBCbkIsQUFDQSxBQVlPLEFBTVEsQUFDSSxBQU1uQjtBQU5tQjs7OzhCQU1uQjtnQ0ExQkEsQUEwQkEsQUFDQztBQUREO0FBQUEsZ0NBQ0MsQUFBQzt5QkFBRCxBQUVBO3lCQUFTLEtBQUEsQUFBSyxNQUZkLEFBRW9CLEFBQ3BCO3lCQUFTLEtBSFQsQUFHYyxBQUNkOzBCQUpBLEFBSVU7OzhCQUpWO2dDQUFBLEFBTUk7QUFOSjtBQUNBLCtCQUtLLGNBQUQsd0JBQUEsQUFBUSxXQUFRLFNBQWhCOzhCQUFBO2dDQUFBO0FBQUE7ZUFOSixBQU1JLEFBSVUsOEJBQUMsY0FBRCx3QkFBQSxBQUFRLFdBQVEsUUFBaEI7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsdUNBQUssTUFBTixBQUFXOzhCQUFYO2dDQXZDdkIsQUFDSSxBQTJCQyxBQVVjLEFBQ0ksQUFNMUI7QUFOMEI7Ozs7OztFQTNGWixnQixBQUFNLEFBb0d6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJ1cGxvYWRGaWxlLmpzIiwic291cmNlUm9vdCI6IkQ6L1N0dWRpZXNfQ29kZVN0dWZmL1N0dWRpZXMvV2ViIERldl9SZWFjdEpTL2dpdC9zdXBjdWJlLXdlYkRhcHAifQ==