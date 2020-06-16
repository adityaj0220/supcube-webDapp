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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _user = require('../backend/contractInstances/user');

var _user2 = _interopRequireDefault(_user);

var _web = require('../backend/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

var _particlesBg = require('particles-bg');

var _particlesBg2 = _interopRequireDefault(_particlesBg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Studies_CodeStuff\\Studies\\Web Dev_ReactJS\\git\\supcube-webDapp\\pages\\signup.js?entry';


var User = function (_React$Component) {
  (0, _inherits3.default)(User, _React$Component);

  function User() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = User.__proto__ || (0, _getPrototypeOf2.default)(User)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      Useradd: '',
      Userpass: '',
      Userprof: '',
      errorMsg: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ loading: true, errorMsg: 'Creating..' });

                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                _context.next = 8;
                return _user2.default.methods.userSignup(_this.state.Userprof, _this.state.Userpass).send({
                  from: accounts[0]
                });

              case 8:
                setTimeout(_routes.Router.pushRoute('/'), 3000);
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](2);

                _this.setState({ errorMsg: _context.t0.message });

              case 14:
                if (_this.state.errorMsg === "Creating...") {
                  _this.setState({ errorMsg: "success", loading: true });
                } else _this.setState({ loading: false });

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 11]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(User, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { textAlign: 'center', style: { height: '100vh' }, verticalAlign: 'middle', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { maxWidth: 450 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', color: 'teal', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'Sign-up with new account'), _react2.default.createElement(_semanticUiReact.Form, { size: 'large', onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { stacked: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Input, { fluid: true,
        icon: 'user',
        iconPosition: 'left',
        placeholder: 'Ethereum address',
        value: this.state.Useradd,
        onChange: function onChange(event) {
          return _this3.setState({ Useradd: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Input, { fluid: true,
        icon: 'user',
        iconPosition: 'left',
        placeholder: 'Profile',
        value: this.state.Userprof,
        onChange: function onChange(event) {
          return _this3.setState({ Userprof: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Input, {
        fluid: true,
        icon: 'lock',
        iconPosition: 'left',
        placeholder: 'Set Password',
        type: 'password',
        value: this.state.Userpass,
        onChange: function onChange(event) {
          return _this3.setState({ Userpass: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), this.state.errorMsg === "success" ? _react2.default.createElement(_semanticUiReact.Message, { positive: true, header: 'Account Status', content: 'Your account has been created!', __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }) : this.state.errorMsg === 'Creating...' ? _react2.default.createElement(_semanticUiReact.Message, { positive: true, header: 'Account', content: 'Please wait while we set up your account', __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }) : _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: 'Please enter valid address or check the profile name again!'
        //content={this.state.errorMsg}
        , __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', fluid: true, size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, 'Signup')))), _react2.default.createElement(_semanticUiReact.Message, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement('a', { href: 'https://metamask.io/', __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, 'Metamask Signup?')))));
    }
  }]);

  return User;
}(_react2.default.Component);

exports.default = User;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxzaWdudXAuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJGb3JtIiwiR3JpZCIsIkhlYWRlciIsIkltYWdlIiwiTWVzc2FnZSIsIlNlZ21lbnQiLCJMYXlvdXQiLCJ1c2VyIiwid2ViMyIsIlJvdXRlciIsIlBhcnRpY2xlc0JnIiwiVXNlciIsInN0YXRlIiwiVXNlcmFkZCIsIlVzZXJwYXNzIiwiVXNlcnByb2YiLCJlcnJvck1zZyIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwidXNlclNpZ251cCIsInNlbmQiLCJmcm9tIiwic2V0VGltZW91dCIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJoZWlnaHQiLCJtYXhXaWR0aCIsInRhcmdldCIsInZhbHVlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBUSxBQUFNLEFBQU0sQUFBUSxBQUFPLEFBQVM7O0FBQ3JELEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7QUFDdkIsQUFBTzs7Ozs7Ozs7O0ksQUFDRDs7Ozs7Ozs7Ozs7Ozs7O3dNLEFBRUo7ZUFBUSxBQUNJLEFBQ1Y7Z0JBRk0sQUFFSSxBQUNWO2dCQUhNLEFBR0ksQUFDVjtnQkFKTSxBQUlJLEFBQ1Y7ZSxBQUxNLEFBS0U7QUFMRixBQUNOLGEsQUFPRjsyRkFBVyxpQkFBQSxBQUFPLE9BQVA7WUFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFFUDtzQkFBQSxBQUFNLEFBQ047c0JBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFVLE1BQU0sVUFIdkIsQUFHUCxBQUFjLEFBQTBCOztnQ0FIakM7Z0NBQUE7dUJBTWdCLGNBQUEs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YUFBWixBQUF1QixnQ0FBaUIsQUFBQywwQ0FBUSxVQUFULE1BQWtCLFFBQWxCLEFBQXlCLFdBQVUsU0FBbkMsQUFBMkM7b0JBQTNDO3NCQUF4QyxBQUF3QztBQUFBO09BQUEsQ0FBdkMsbUJBQ0QsQUFBQztlQUFELEFBRUE7Z0JBQU8sQUFDUDtBQUhBO0FBQ0E7b0JBREE7c0JBeEJSLEFBd0JRLEFBTU47QUFOTTtPQUFBLG1CQU1OLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLHlCQUNBLEFBQUMseUNBQU8sT0FBUixBQUFjLFFBQU8sT0FBckIsTUFBMkIsTUFBM0IsQUFBZ0M7b0JBQWhDO3NCQUFBO0FBQUE7U0FwQ04sQUFJRSxBQUNFLEFBOEJFLEFBQ0EsQUFNSiw4QkFBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNHO0FBREg7QUFBQSx5QkFDRyxjQUFBLE9BQUcsTUFBSCxBQUFRO29CQUFSO3NCQUFBO0FBQUE7U0EvQ0wsQUFDRixBQUVBLEFBQ0UsQUEwQ0UsQUFDRyxBQU1SOzs7OztFQXpGa0IsZ0IsQUFBTSxBQTJGekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2lnbnVwLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L1N0dWRpZXNfQ29kZVN0dWZmL1N0dWRpZXMvV2ViIERldl9SZWFjdEpTL2dpdC9zdXBjdWJlLXdlYkRhcHAifQ==