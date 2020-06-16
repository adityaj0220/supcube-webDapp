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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Studies_CodeStuff\\Studies\\Web Dev_ReactJS\\git\\supcube-webDapp\\pages\\index.js?entry';

//import Particles from 'react-particles-js';
//import ParticlesBg from 'particles-bg';
//import VueParticlesBg from 'particles-bg-vue';


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
      errorMsg: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts, hh, hk, g, pass, pr;
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
                return _user2.default.methods.checkArray(_this.state.Useradd).call();

              case 8:
                hh = _context.sent;

                console.log(hh);
                _context.next = 12;
                return _user2.default.methods.index(_this.state.Useradd).call();

              case 12:
                hk = _context.sent;

                console.log(hk, _this.state.Useradd, _this.state.Userpass);
                _context.next = 16;
                return _user2.default.methods.sdet(0).call();

              case 16:
                g = _context.sent;

                console.log(g);
                _context.next = 20;
                return _user2.default.methods.userLogin(_this.state.Userpass, _this.state.Useradd).call();

              case 20:
                pass = _context.sent;

                console.log(pass);
                pr = pass[1];

                console.log(pr);
                if (pass[0] == "True") {
                  pr == "Producer" ? _routes.Router.pushRoute('/Producer/' + _this.state.Useradd) : pr == "Purchaser" ? _routes.Router.pushRoute('/Purchaser/' + _this.state.Useradd) : _routes.Router.pushRoute('/Provider/' + _this.state.Useradd);
                } else {
                  console.log("No");
                };
                _context.next = 31;
                break;

              case 28:
                _context.prev = 28;
                _context.t0 = _context['catch'](2);

                _this.setState({ errorMsg: _context.t0.message });

              case 31:
                if (_this.state.errorMsg === "Creating...") {
                  _this.setState({ errorMsg: "success", loading: true });
                } else _this.setState({ loading: false });

              case 32:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 28]]);
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
          lineNumber: 65
        }
      }, _react2.default.createElement('h5', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, " "), _react2.default.createElement('h2', { style: { color: 'white', textAlign: "center" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'Welcome to Supcube!'), _react2.default.createElement('h3', { style: { color: 'white', textAlign: "center" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, 'A blockchain solution for supply chain management!'), _react2.default.createElement(_semanticUiReact.Grid, { textAlign: 'center', style: { height: '70vh' }, verticalAlign: 'middle', __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { maxWidth: 450 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', color: 'teal', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, 'Log-in to your account'), _react2.default.createElement(_semanticUiReact.Form, { size: 'large', onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { stacked: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
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
          lineNumber: 79
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Input, {
        fluid: true,
        icon: 'lock',
        iconPosition: 'left',
        placeholder: 'Password',
        type: 'password',
        value: this.state.Userpass,
        onChange: function onChange(event) {
          return _this3.setState({ Userpass: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), this.state.errorMsg === "success" ? _react2.default.createElement(_semanticUiReact.Message, { positive: true, header: 'Hi!', content: 'We are logging you in!', __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }) : this.state.errorMsg === 'Creating...' ? _react2.default.createElement(_semanticUiReact.Message, { positive: true, header: 'Hi!', content: 'Logging in...!', __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }) : _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: 'Incorrect address or password.'
        //content={this.state.errorMsg}
        , __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', fluid: true, size: 'large', loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, 'Login'))), _react2.default.createElement(_semanticUiReact.Message, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, 'New to us?', _react2.default.createElement(_routes.Link, { route: '/signup', __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, 'Sign Up'))))));
    }
  }]);

  return User;
}(_react2.default.Component);

exports.default = User;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIkZvcm0iLCJHcmlkIiwiSGVhZGVyIiwiSW1hZ2UiLCJNZXNzYWdlIiwiU2VnbWVudCIsIkxheW91dCIsInVzZXIiLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIlVzZXIiLCJzdGF0ZSIsIlVzZXJhZGQiLCJVc2VycGFzcyIsImVycm9yTXNnIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjaGVja0FycmF5IiwiY2FsbCIsImhoIiwiY29uc29sZSIsImxvZyIsImluZGV4IiwiaGsiLCJzZGV0IiwiZyIsInVzZXJMb2dpbiIsInBhc3MiLCJwciIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJjb2xvciIsInRleHRBbGlnbiIsImhlaWdodCIsIm1heFdpZHRoIiwidGFyZ2V0IiwidmFsdWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFRLEFBQU0sQUFBTSxBQUFRLEFBQU8sQUFBUzs7QUFDckQsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFZLEFBQ3JCLEFBQVMsQUFBYzs7Ozs7O0FBQ3ZCO0FBQ0E7QUFDQTs7O0ksQUFHTTs7Ozs7Ozs7Ozs7Ozs7O3dNLEFBRUo7ZUFBUSxBQUNJLEFBQ1Y7Z0JBRk0sQUFFSSxBQUNWO2dCQUhNLEFBR0ksQUFDVjtlLEFBSk0sQUFJRztBQUpILEFBQ04sYSxBQU1GOzJGQUFXLGlCQUFBLEFBQU8sT0FBUDt1Q0FBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFFUDtzQkFBQSxBQUFNLEFBQ047c0JBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFV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b0JBREE7c0JBbEJSLEFBa0JRLEFBTU47QUFOTTtPQUFBLG1CQU1OLEFBQUMseUNBQU8sT0FBUixBQUFjLFFBQU8sT0FBckIsTUFBMkIsTUFBM0IsQUFBZ0MsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUF0RCxBQUE0RDtvQkFBNUQ7c0JBQUE7QUFBQTtTQTdCTixBQUlFLEFBQ0UsQUF3QkUsQUFLSiw0QkFBQSxBQUFDOztvQkFBRDtzQkFBQTtBQUFBO0FBQUEsU0FFRSw4QkFBQSxBQUFDLDhCQUFLLE9BQU47b0JBQUE7c0JBQUEsQUFDQTtBQURBO3lCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQTlDSixBQUNGLEFBT0EsQUFDRSxBQWtDRSxBQUVFLEFBQ0EsQUFVUDs7Ozs7RUEzR2tCLGdCQTZHbkIsQSxBQTdHeUI7O2tCQTZHekIsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9TdHVkaWVzX0NvZGVTdHVmZi9TdHVkaWVzL1dlYiBEZXZfUmVhY3RKUy9naXQvc3VwY3ViZS13ZWJEYXBwIn0=