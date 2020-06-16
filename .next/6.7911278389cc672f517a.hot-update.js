webpackHotUpdate(6,{

/***/ 1426:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(504);

var _Layout = __webpack_require__(1140);

var _Layout2 = _interopRequireDefault(_Layout);

var _user = __webpack_require__(1156);

var _user2 = _interopRequireDefault(_user);

var _web = __webpack_require__(748);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(744);

var _particlesBg = __webpack_require__(1427);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "D:\\Studies_CodeStuff\\Studies\\Web Dev_ReactJS\\git\\supcube-webDapp\\pages\\signup.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Studies_CodeStuff\\Studies\\Web Dev_ReactJS\\git\\supcube-webDapp\\pages\\signup.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/signup")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi43OTExMjc4Mzg5Y2M2NzJmNTE3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2lnbnVwLmpzPzJlMmJkYmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBHcmlkLCBIZWFkZXIsIEltYWdlLCBNZXNzYWdlLCBTZWdtZW50IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB1c2VyIGZyb20gJy4uL2JhY2tlbmQvY29udHJhY3RJbnN0YW5jZXMvdXNlcic7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi9iYWNrZW5kL3dlYjMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vcm91dGVzJztcbmltcG9ydCBQYXJ0aWNsZXNCZyBmcm9tICdwYXJ0aWNsZXMtYmcnO1xuY2xhc3MgVXNlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxue1xuICBzdGF0ZSA9IHtcbiAgICBVc2VyYWRkIDogJycsXG4gICAgVXNlcnBhc3M6ICcnLFxuICAgIFVzZXJwcm9mOiAnJyxcbiAgICBlcnJvck1zZzogJycsXG4gICAgbG9hZGluZzpmYWxzZVxuICB9XG5cbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+XG4gIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiB0cnVlLCBlcnJvck1zZzogJ0NyZWF0aW5nLi4nfSlcblxuICAgICAgdHJ5e1xuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgYXdhaXQgdXNlci5tZXRob2RzXG4gICAgICAudXNlclNpZ251cCh0aGlzLnN0YXRlLlVzZXJwcm9mLHRoaXMuc3RhdGUuVXNlcnBhc3MpXG4gICAgICAuc2VuZCh7XG4gICAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cbiAgICAgIH0pO1xuICAgICAgc2V0VGltZW91dChSb3V0ZXIucHVzaFJvdXRlKCcvJyksMzAwMCk7XG4gIH1jYXRjaChlcnIpXG4gIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTXNnOiBlcnIubWVzc2FnZX0pO1xuICB9XG4gIGlmKHRoaXMuc3RhdGUuZXJyb3JNc2c9PT1cIkNyZWF0aW5nLi4uXCIpe1xuICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTXNnOiBcInN1Y2Nlc3NcIixsb2FkaW5nOiB0cnVlfSk7XG4gXG59XG5lbHNlXG4gIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlfSk7XG4gIH07XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgPExheW91dD5cbiAgICBcbiAgPEdyaWQgdGV4dEFsaWduPSdjZW50ZXInIHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fSB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnPlxuICAgIDxHcmlkLkNvbHVtbiBzdHlsZT17eyBtYXhXaWR0aDogNDUwIH19PlxuICAgICAgPEhlYWRlciBhcz0naDInIGNvbG9yPSd0ZWFsJyB0ZXh0QWxpZ249J2NlbnRlcic+XG4gICAgICAgICBTaWduLXVwIHdpdGggbmV3IGFjY291bnRcbiAgICAgIDwvSGVhZGVyPlxuICAgICAgPEZvcm0gc2l6ZT0nbGFyZ2UnIG9uU3VibWl0ID0ge3RoaXMub25TdWJtaXR9PlxuICAgICAgICA8U2VnbWVudCBzdGFja2VkPlxuICAgICAgICAgIDxGb3JtLklucHV0IGZsdWlkXG4gICAgICAgICAgIGljb249J3VzZXInXG4gICAgICAgICAgIGljb25Qb3NpdGlvbj0nbGVmdCdcbiAgICAgICAgICAgcGxhY2Vob2xkZXI9J0V0aGVyZXVtIGFkZHJlc3MnXG4gICAgICAgICAgIHZhbHVlID17dGhpcy5zdGF0ZS5Vc2VyYWRkfVxuICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSAoeyBVc2VyYWRkOiBldmVudC50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgIDxGb3JtLklucHV0IGZsdWlkXG4gICAgICAgICAgICBpY29uPSd1c2VyJ1xuICAgICAgICAgICAgaWNvblBvc2l0aW9uPSdsZWZ0J1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1Byb2ZpbGUnXG4gICAgICAgICAgICB2YWx1ZSA9e3RoaXMuc3RhdGUuVXNlcnByb2Z9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSAoeyBVc2VycHJvZjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgIDxGb3JtLklucHV0XG4gICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgaWNvbj0nbG9jaydcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj0nbGVmdCdcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZXQgUGFzc3dvcmQnXG4gICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcbiAgICAgICAgICAgIHZhbHVlID17dGhpcy5zdGF0ZS5Vc2VycGFzc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlICh7IFVzZXJwYXNzOiBldmVudC50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvck1zZz09PVwic3VjY2Vzc1wiID8gPE1lc3NhZ2UgcG9zaXRpdmUgaGVhZGVyPVwiQWNjb3VudCBTdGF0dXNcIiBjb250ZW50PVwiWW91ciBhY2NvdW50IGhhcyBiZWVuIGNyZWF0ZWQhXCI+PC9NZXNzYWdlPjpcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5lcnJvck1zZz09PSdDcmVhdGluZy4uLicpID8gPE1lc3NhZ2UgcG9zaXRpdmUgaGVhZGVyPVwiQWNjb3VudFwiIGNvbnRlbnQ9XCJQbGVhc2Ugd2FpdCB3aGlsZSB3ZSBzZXQgdXAgeW91ciBhY2NvdW50XCI+PC9NZXNzYWdlPjpcbiAgICAgICAgICAgICAgICA8TWVzc2FnZVxuICAgICAgICAgICAgICAgIGVycm9yXG4gICAgICAgICAgICAgICAgaGVhZGVyPVwiUGxlYXNlIGVudGVyIHZhbGlkIGFkZHJlc3Mgb3IgY2hlY2sgdGhlIHByb2ZpbGUgbmFtZSBhZ2FpbiFcIlxuICAgICAgICAgICAgICAgIC8vY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1zZ31cbiAgICAgICAgICAgICAgICAvPn1cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxCdXR0b24gY29sb3I9J3RlYWwnIGZsdWlkIHNpemU9J2xhcmdlJz5cbiAgICAgICAgICAgIFNpZ251cFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICA8L0Zvcm0+XG4gICAgICA8TWVzc2FnZT5cbiAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vbWV0YW1hc2suaW8vJz5NZXRhbWFzayBTaWdudXA/PC9hPlxuICAgICAgPC9NZXNzYWdlPlxuICAgIDwvR3JpZC5Db2x1bW4+XG4gIDwvR3JpZD5cbiAgPC9MYXlvdXQ+XG4pO1xufVxufVxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3NpZ251cC5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBSkE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFKQTtBQUFBO0FBTUE7QUFDQTtBQURBO0FBTkE7QUFBQTtBQU9BO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQVpBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFlQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFsQkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUxBO0FBQUE7QUFNQTtBQU5BO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFMQTtBQUFBO0FBTUE7QUFOQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQVBBOztBQUFBO0FBU0E7QUFUQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFIQTtBQUNBO0FBREE7QUFNQTtBQU5BO0FBQUE7O0FBTUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFNQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQU1BOzs7OztBQXpGQTtBQUNBO0FBMEZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=