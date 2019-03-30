webpackJsonp([0],{

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCATION_CHANGE = exports.SET_PAGEDATA = exports.FETCHING_PAGEDATA = undefined;
exports.fetchingPageData = fetchingPageData;
exports.setPageData = setPageData;
exports.fetchPageData = fetchPageData;

var _axios = __webpack_require__(18);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FETCHING_PAGEDATA = exports.FETCHING_PAGEDATA = 'FETCHING_PAGEDATA'; /** This provides the various redux actions to trigger app state changes by the redux reducer
                                                                          * @module Redux actions
                                                                          */

var SET_PAGEDATA = exports.SET_PAGEDATA = 'SET_PAGEDATA';
var LOCATION_CHANGE = exports.LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

function fetchingPageData() {
  return {
    type: FETCHING_PAGEDATA
  };
}

function setPageData(data) {
  return {
    type: SET_PAGEDATA,
    payload: data
  };
}

function fetchPageData() {
  return function (dispatch) {
    dispatch(fetchingPageData());
    dispatch(setPageData({
      message: "Template Message"
    }));
  };
}

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(11);

var _reduxThunk = __webpack_require__(19);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouter = __webpack_require__(6);

var _reactRouterRedux = __webpack_require__(8);

var _index = __webpack_require__(62);

var reducers = _interopRequireWildcard(_index);

var _defaultState = __webpack_require__(63);

var _defaultState2 = _interopRequireDefault(_defaultState);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  app: reducers.appState,
  dataRequests: reducers.dataRequests,
  routing: _reactRouterRedux.routerReducer,
  homePage: reducers.homePageReducer
});

var routingMiddleware = (0, _reactRouterRedux.routerMiddleware)(_reactRouter.browserHistory);

var store = (0, _redux.createStore)(reducer, _defaultState2.default, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, routingMiddleware), window.devToolsExtension ? window.devToolsExtension() : function (f) {
  return f;
}));

exports.default = store;

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-unused-vars */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Error404 = function (_React$Component) {
  _inherits(Error404, _React$Component);

  function Error404() {
    _classCallCheck(this, Error404);

    return _possibleConstructorReturn(this, (Error404.__proto__ || Object.getPrototypeOf(Error404)).apply(this, arguments));
  }

  _createClass(Error404, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'page-container' },
        _react2.default.createElement(
          'h2',
          { className: 'error-heading' },
          '404 - Missing Resource '
        ),
        _react2.default.createElement(
          'p',
          null,
          'Please try again, but if the problem persist, contact an administrator.'
        )
      );
    }
  }]);

  return Error404;
}(_react2.default.Component);

Error404.displayName = 'Error404';

exports.default = Error404;

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _page = __webpack_require__(64);

var _page2 = _interopRequireDefault(_page);

var _actions = __webpack_require__(25);

var actions = _interopRequireWildcard(_actions);

var _reactRedux = __webpack_require__(7);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.dispatch(actions.fetchPageData());
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _page2.default,
        { className: 'home-page', header: 'Home' },
        _react2.default.createElement(
          'h2',
          null,
          this.props.message
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

Home.displayName = 'Home';

function select(state) {
  return {
    message: state.homePage.message
  };
}

exports.default = (0, _reactRedux.connect)(select)(Home);

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return BrowserRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return HashRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(6);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return __WEBPACK_IMPORTED_MODULE_2_react_router__["MemoryRouter"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return __WEBPACK_IMPORTED_MODULE_2_react_router__["Prompt"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return __WEBPACK_IMPORTED_MODULE_2_react_router__["Redirect"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return __WEBPACK_IMPORTED_MODULE_2_react_router__["Route"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return __WEBPACK_IMPORTED_MODULE_2_react_router__["Router"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return __WEBPACK_IMPORTED_MODULE_2_react_router__["StaticRouter"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return __WEBPACK_IMPORTED_MODULE_2_react_router__["Switch"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return __WEBPACK_IMPORTED_MODULE_2_react_router__["generatePath"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return __WEBPACK_IMPORTED_MODULE_2_react_router__["matchPath"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return __WEBPACK_IMPORTED_MODULE_2_react_router__["withRouter"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "__RouterContext", function() { return __WEBPACK_IMPORTED_MODULE_2_react_router__["__RouterContext"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tiny_warning__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_extends__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_tiny_invariant__ = __webpack_require__(16);











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter =
/*#__PURE__*/
function (_React$Component) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_history__["createBrowserHistory"])(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["Router"], {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

if (process.env.NODE_ENV !== "production") {
  BrowserRouter.propTypes = {
    basename: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node,
    forceRefresh: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
    getUserConfirmation: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
    keyLength: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number
  };

  BrowserRouter.prototype.componentDidMount = function () {
    process.env.NODE_ENV !== "production" ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_tiny_warning__["a" /* default */])(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.") : void 0;
  };
}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter =
/*#__PURE__*/
function (_React$Component) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_history__["createHashHistory"])(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["Router"], {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

if (process.env.NODE_ENV !== "production") {
  HashRouter.propTypes = {
    basename: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node,
    getUserConfirmation: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
    hashType: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(["hashbang", "noslash", "slash"])
  };

  HashRouter.prototype.componentDidMount = function () {
    process.env.NODE_ENV !== "production" ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_tiny_warning__["a" /* default */])(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.") : void 0;
  };
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link =
/*#__PURE__*/
function (_React$Component) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(Link, _React$Component);

  function Link() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Link.prototype;

  _proto.handleClick = function handleClick(event, history) {
    if (this.props.onClick) this.props.onClick(event);

    if (!event.defaultPrevented && // onClick prevented default
    event.button === 0 && ( // ignore everything but left clicks
    !this.props.target || this.props.target === "_self") && // let browser handle "target=_blank" etc.
    !isModifiedEvent(event) // ignore clicks with modifier keys
    ) {
        event.preventDefault();
        var method = this.props.replace ? history.replace : history.push;
        method(this.props.to);
      }
  };

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        innerRef = _this$props.innerRef,
        replace = _this$props.replace,
        to = _this$props.to,
        rest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["innerRef", "replace", "to"]); // eslint-disable-line no-unused-vars


    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["__RouterContext"].Consumer, null, function (context) {
      !context ? process.env.NODE_ENV !== "production" ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_tiny_invariant__["a" /* default */])(false, "You should not use <Link> outside a <Router>") : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_tiny_invariant__["a" /* default */])(false) : void 0;
      var location = typeof to === "string" ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_history__["createLocation"])(to, null, null, context.location) : to;
      var href = location ? context.history.createHref(location) : "";
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_extends__["a" /* default */])({}, rest, {
        onClick: function onClick(event) {
          return _this.handleClick(event, context.history);
        },
        href: href,
        ref: innerRef
      }));
    });
  };

  return Link;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

if (process.env.NODE_ENV !== "production") {
  var toType = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object]);
  var innerRefType = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.shape({
    current: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any
  })]);
  Link.propTypes = {
    innerRef: innerRefType,
    onClick: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
    replace: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
    target: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    to: toType.isRequired
  };
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


function NavLink(_ref) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      location = _ref.location,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      rest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "strict", "style", "to"]);

  var path = typeof to === "object" ? to.pathname : to; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

  var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["Route"], {
    path: escapedPath,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;
      var isActive = !!(isActiveProp ? isActiveProp(match, location) : match);
      var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
      var style = isActive ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_extends__["a" /* default */])({}, styleProp, activeStyle) : styleProp;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Link, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_extends__["a" /* default */])({
        "aria-current": isActive && ariaCurrent || null,
        className: className,
        style: style,
        to: to
      }, rest));
    }
  });
}

if (process.env.NODE_ENV !== "production") {
  var ariaCurrentType = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(["page", "step", "location", "date", "time", "true"]);
  NavLink.propTypes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_extends__["a" /* default */])({}, Link.propTypes, {
    "aria-current": ariaCurrentType,
    activeClassName: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    activeStyle: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object,
    className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    exact: __WEBPACK_IMPORTED_MODULE_2_react_router__["Route"].propTypes.exact,
    isActive: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
    location: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object,
    strict: __WEBPACK_IMPORTED_MODULE_2_react_router__["Route"].propTypes.strict,
    style: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object
  });
}



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homePageReducer = homePageReducer;
exports.appState = appState;
exports.dataRequests = dataRequests;

var _index = __webpack_require__(25);

var actionEvents = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function homePageReducer(state, action) {
  var actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.SET_PAGEDATA) {
    newState = action.payload;
  }

  return newState;
}

function appState(state, action) {
  var actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.LOCATION_CHANGE) {
    newState.current.path = action.payload.pathname;
  }

  return newState;
}

function dataRequests(state, action) {
  var actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.SETTING_PAGEDATA) {
    newState.settings = true;
  } else if (actionType === actionEvents.SET_PAGEDATA) {
    newState.settings = false;
  }

  return newState;
}

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var state = {
  app: {
    current: {
      path: '',
      pageTitle: ''
    }
  },
  homePage: {
    message: "Template Message"
  }
};

exports.default = state;

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page() {
    _classCallCheck(this, Page);

    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this));

    _this.state = {
      error: false
    };
    return _this;
  }

  _createClass(Page, [{
    key: 'componentDidCatch',
    value: function componentDidCatch(error) {
      console.log(error);
      this.setState({
        error: true
      });
    }
  }, {
    key: 'getErrorContent',
    value: function getErrorContent() {
      return _react2.default.createElement(
        'div',
        { className: 'page-error-content' },
        'Some Error occured. We regret for inconvinience.'
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.props.className },
        _react2.default.createElement(
          'header',
          { id: 'header' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement('div', { className: 'logo-icon' }),
            _react2.default.createElement(
              'div',
              { className: 'page-header' },
              this.props.header
            )
          )
        ),
        _react2.default.createElement(
          'main',
          { id: 'body' },
          _react2.default.createElement(
            'div',
            { id: 'container', className: 'page-container' },
            this.state.error ? this.getErrorContent() : this.props.children
          )
        ),
        _react2.default.createElement(
          'footer',
          null,
          _react2.default.createElement(
            'div',
            { className: 'footer' },
            'Generated by ',
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/jefreesujit/generator-react-node' },
              'generator-react-node'
            ),
            '.'
          )
        )
      );
    }
  }]);

  return Page;
}(_react2.default.Component);

Page.displayName = 'Page';

exports.default = Page;

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global location */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(7);

var _index = __webpack_require__(38);

var _index2 = _interopRequireDefault(_index);

var _reactRouterDom = __webpack_require__(44);

var _reactRouterRedux = __webpack_require__(8);

var _home = __webpack_require__(40);

var _home2 = _interopRequireDefault(_home);

var _error = __webpack_require__(39);

var _error2 = _interopRequireDefault(_error);

var _history = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var history = (0, _reactRouterRedux.syncHistoryWithStore)((0, _history.createBrowserHistory)(), _index2.default);
console.log(history);

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'view-container' },
        _react2.default.createElement(
          _reactRedux.Provider,
          { store: _index2.default },
          _react2.default.createElement(
            _reactRouterDom.Router,
            { history: history },
            _react2.default.createElement(
              _reactRouterDom.Switch,
              null,
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _home2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/404', component: _error2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { nomatch: true, component: _error2.default })
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

App.displayName = 'App';

// Bootstrap client
if (typeof window !== 'undefined') {
  window.onload = function () {
    var props = {
      path: location.pathname
    };
    _reactDom2.default.render(_react2.default.createElement(App, props), document.getElementById('reactView'));
  };
}

exports.default = App;

/***/ })

},[65]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvc3RvcmVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi92aWV3cy9wYWdlcy9lcnJvcjQwNC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdmlld3MvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci1kb20vZXNtL3JlYWN0LXJvdXRlci1kb20uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9zdG9yZXMvZGVmYXVsdFN0YXRlLmpzIiwid2VicGFjazovLy8uL2xpYi92aWV3cy9jb21wb25lbnRzL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3ZpZXdzL2luZGV4LmpzIl0sIm5hbWVzIjpbImZldGNoaW5nUGFnZURhdGEiLCJzZXRQYWdlRGF0YSIsImZldGNoUGFnZURhdGEiLCJGRVRDSElOR19QQUdFREFUQSIsIlNFVF9QQUdFREFUQSIsIkxPQ0FUSU9OX0NIQU5HRSIsInR5cGUiLCJkYXRhIiwicGF5bG9hZCIsImRpc3BhdGNoIiwibWVzc2FnZSIsInJlZHVjZXJzIiwicmVkdWNlciIsImFwcCIsImFwcFN0YXRlIiwiZGF0YVJlcXVlc3RzIiwicm91dGluZyIsInJvdXRlclJlZHVjZXIiLCJob21lUGFnZSIsImhvbWVQYWdlUmVkdWNlciIsInJvdXRpbmdNaWRkbGV3YXJlIiwiYnJvd3Nlckhpc3RvcnkiLCJzdG9yZSIsImRlZmF1bHRTdGF0ZSIsInRodW5rIiwid2luZG93IiwiZGV2VG9vbHNFeHRlbnNpb24iLCJmIiwiRXJyb3I0MDQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwiYWN0aW9ucyIsIkhvbWUiLCJwcm9wcyIsInNlbGVjdCIsInN0YXRlIiwiYWN0aW9uRXZlbnRzIiwiYWN0aW9uIiwiYWN0aW9uVHlwZSIsIm5ld1N0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiY3VycmVudCIsInBhdGgiLCJwYXRobmFtZSIsIlNFVFRJTkdfUEFHRURBVEEiLCJzZXR0aW5ncyIsInBhZ2VUaXRsZSIsIlBhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImNsYXNzTmFtZSIsImhlYWRlciIsImdldEVycm9yQ29udGVudCIsImNoaWxkcmVuIiwiaGlzdG9yeSIsIkFwcCIsIm9ubG9hZCIsImxvY2F0aW9uIiwiUmVhY3RET00iLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O1FBVWdCQSxnQixHQUFBQSxnQjtRQU1BQyxXLEdBQUFBLFc7UUFPQUMsYSxHQUFBQSxhOztBQW5CaEI7Ozs7OztBQUVPLElBQU1DLGdEQUFvQixtQkFBMUIsQyxDQU5QOzs7O0FBT08sSUFBTUMsc0NBQWUsY0FBckI7QUFDQSxJQUFNQyw0Q0FBa0IsMEJBQXhCOztBQUVBLFNBQVNMLGdCQUFULEdBQTZCO0FBQ2xDLFNBQU87QUFDTE0sVUFBTUg7QUFERCxHQUFQO0FBR0Q7O0FBRU0sU0FBU0YsV0FBVCxDQUFzQk0sSUFBdEIsRUFBNEI7QUFDakMsU0FBTztBQUNMRCxVQUFNRixZQUREO0FBRUxJLGFBQVNEO0FBRkosR0FBUDtBQUlEOztBQUVNLFNBQVNMLGFBQVQsR0FBMEI7QUFDL0IsU0FBTyxVQUFVTyxRQUFWLEVBQW9CO0FBQ3pCQSxhQUFTVCxrQkFBVDtBQUNBUyxhQUFTUixZQUFZO0FBQ25CUyxlQUFTO0FBRFUsS0FBWixDQUFUO0FBR0QsR0FMRDtBQU1ELEM7Ozs7Ozs7Ozs7Ozs7O0FDOUJEOztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBQVlDLFE7O0FBQ1o7Ozs7Ozs7O0FBRUEsSUFBTUMsVUFBVSw0QkFBZ0I7QUFDOUJDLE9BQUtGLFNBQVNHLFFBRGdCO0FBRTlCQyxnQkFBY0osU0FBU0ksWUFGTztBQUc5QkMsV0FBU0MsK0JBSHFCO0FBSTlCQyxZQUFV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Q0FBQyxxQkFBRCxJQUFPLFdBQVAsRUFBYSxNQUFLLEdBQWxCLEVBQXNCLFdBQVd6QixjQUFqQyxHQURGO0FBRUUsNENBQUMscUJBQUQsSUFBTyxNQUFLLE1BQVosRUFBbUIsV0FBV0wsZUFBOUIsR0FGRjtBQUdFLDRDQUFDLHFCQUFELElBQU8sYUFBUCxFQUFlLFdBQVdBLGVBQTFCO0FBSEY7QUFERjtBQURGO0FBREYsT0FERjtBQWFEOzs7O0VBbkJlQyxnQkFBTUMsUzs7QUFzQnhCNkIsSUFBSTVCLFdBQUosR0FBa0IsS0FBbEI7O0FBRUE7QUFDQSxJQUFJLE9BQU9OLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDakNBLFNBQU9tQyxNQUFQLEdBQWdCLFlBQU07QUFDcEIsUUFBSTFCLFFBQVE7QUFDVlUsWUFBTWlCLFNBQVNoQjtBQURMLEtBQVo7QUFHQWlCLHVCQUFTQyxNQUFULENBQWdCbEMsZ0JBQU1tQyxhQUFOLENBQW9CTCxHQUFwQixFQUF5QnpCLEtBQXpCLENBQWhCLEVBQWlEK0IsU0FBU0MsY0FBVCxDQUF3QixXQUF4QixDQUFqRDtBQUNELEdBTEQ7QUFNRDs7a0JBRWNQLEciLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBUaGlzIHByb3ZpZGVzIHRoZSB2YXJpb3VzIHJlZHV4IGFjdGlvbnMgdG8gdHJpZ2dlciBhcHAgc3RhdGUgY2hhbmdlcyBieSB0aGUgcmVkdXggcmVkdWNlclxyXG4gKiBAbW9kdWxlIFJlZHV4IGFjdGlvbnNcclxuICovXHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZFVENISU5HX1BBR0VEQVRBID0gJ0ZFVENISU5HX1BBR0VEQVRBJztcclxuZXhwb3J0IGNvbnN0IFNFVF9QQUdFREFUQSA9ICdTRVRfUEFHRURBVEEnO1xyXG5leHBvcnQgY29uc3QgTE9DQVRJT05fQ0hBTkdFID0gJ0BAcm91dGVyL0xPQ0FUSU9OX0NIQU5HRSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hpbmdQYWdlRGF0YSAoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEZFVENISU5HX1BBR0VEQVRBXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFBhZ2VEYXRhIChkYXRhKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNFVF9QQUdFREFUQSxcclxuICAgIHBheWxvYWQ6IGRhdGFcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQYWdlRGF0YSAoKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hpbmdQYWdlRGF0YSgpKTtcclxuICAgIGRpc3BhdGNoKHNldFBhZ2VEYXRhKHtcclxuICAgICAgbWVzc2FnZTogXCJUZW1wbGF0ZSBNZXNzYWdlXCJcclxuICAgIH0pKTtcclxuICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9hY3Rpb25zL2luZGV4LmpzIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCB7IHJvdXRlck1pZGRsZXdhcmUsIHJvdXRlclJlZHVjZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyByZWR1Y2VycyBmcm9tICcuLi9yZWR1Y2Vycy9pbmRleCc7XHJcbmltcG9ydCBkZWZhdWx0U3RhdGUgZnJvbSAnLi9kZWZhdWx0U3RhdGUnO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgYXBwOiByZWR1Y2Vycy5hcHBTdGF0ZSxcclxuICBkYXRhUmVxdWVzdHM6IHJlZHVjZXJzLmRhdGFSZXF1ZXN0cyxcclxuICByb3V0aW5nOiByb3V0ZXJSZWR1Y2VyLFxyXG4gIGhvbWVQYWdlOiByZWR1Y2Vycy5ob21lUGFnZVJlZHVjZXJcclxufSk7XHJcblxyXG5jb25zdCByb3V0aW5nTWlkZGxld2FyZSA9IHJvdXRlck1pZGRsZXdhcmUoYnJvd3Nlckhpc3RvcnkpO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBkZWZhdWx0U3RhdGUsIGNvbXBvc2UoXHJcbiAgYXBwbHlNaWRkbGV3YXJlKHRodW5rLCByb3V0aW5nTWlkZGxld2FyZSksXHJcbiAgd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uID8gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uKCkgOiBmID0+IGZcclxuKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3N0b3Jlcy9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBFcnJvcjQwNCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImVycm9yLWhlYWRpbmdcIj40MDQgLSBNaXNzaW5nIFJlc291cmNlIDwvaDI+XHJcbiAgICAgICAgPHA+UGxlYXNlIHRyeSBhZ2FpbiwgYnV0IGlmIHRoZSBwcm9ibGVtIHBlcnNpc3QsIGNvbnRhY3QgYW4gYWRtaW5pc3RyYXRvci48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkVycm9yNDA0LmRpc3BsYXlOYW1lID0gJ0Vycm9yNDA0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yNDA0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdmlld3MvcGFnZXMvZXJyb3I0MDQuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2UnO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9ucy5mZXRjaFBhZ2VEYXRhKCkpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxQYWdlIGNsYXNzTmFtZT1cImhvbWUtcGFnZVwiIGhlYWRlcj1cIkhvbWVcIj5cclxuICAgICAgICA8aDI+e3RoaXMucHJvcHMubWVzc2FnZX08L2gyPlxyXG4gICAgICA8L1BhZ2U+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuSG9tZS5kaXNwbGF5TmFtZSA9ICdIb21lJztcclxuXHJcbmZ1bmN0aW9uIHNlbGVjdCAoc3RhdGUpIHtcclxuICByZXR1cm4ge1xyXG4gICAgbWVzc2FnZTogc3RhdGUuaG9tZVBhZ2UubWVzc2FnZVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc2VsZWN0KShIb21lKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3ZpZXdzL3BhZ2VzL2hvbWUuanMiLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGVyLCBfX1JvdXRlckNvbnRleHQsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmV4cG9ydCAqIGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSwgY3JlYXRlSGFzaEhpc3RvcnksIGNyZWF0ZUxvY2F0aW9uIH0gZnJvbSAnaGlzdG9yeSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAndGlueS13YXJuaW5nJztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlJztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnO1xuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBhIDxSb3V0ZXI+IHRoYXQgdXNlcyBIVE1MNSBoaXN0b3J5LlxuICovXG5cbnZhciBCcm93c2VyUm91dGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEJyb3dzZXJSb3V0ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEJyb3dzZXJSb3V0ZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgX3RoaXMuaGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KF90aGlzLnByb3BzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQnJvd3NlclJvdXRlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICAgIGhpc3Rvcnk6IHRoaXMuaGlzdG9yeSxcbiAgICAgIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEJyb3dzZXJSb3V0ZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgQnJvd3NlclJvdXRlci5wcm9wVHlwZXMgPSB7XG4gICAgYmFzZW5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGZvcmNlUmVmcmVzaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZ2V0VXNlckNvbmZpcm1hdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAga2V5TGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyXG4gIH07XG5cbiAgQnJvd3NlclJvdXRlci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghdGhpcy5wcm9wcy5oaXN0b3J5LCBcIjxCcm93c2VyUm91dGVyPiBpZ25vcmVzIHRoZSBoaXN0b3J5IHByb3AuIFRvIHVzZSBhIGN1c3RvbSBoaXN0b3J5LCBcIiArIFwidXNlIGBpbXBvcnQgeyBSb3V0ZXIgfWAgaW5zdGVhZCBvZiBgaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfWAuXCIpIDogdm9pZCAwO1xuICB9O1xufVxuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBhIDxSb3V0ZXI+IHRoYXQgdXNlcyB3aW5kb3cubG9jYXRpb24uaGFzaC5cbiAqL1xuXG52YXIgSGFzaFJvdXRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShIYXNoUm91dGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBIYXNoUm91dGVyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgIF90aGlzLmhpc3RvcnkgPSBjcmVhdGVIYXNoSGlzdG9yeShfdGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEhhc2hSb3V0ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgICBoaXN0b3J5OiB0aGlzLmhpc3RvcnksXG4gICAgICBjaGlsZHJlbjogdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBIYXNoUm91dGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEhhc2hSb3V0ZXIucHJvcFR5cGVzID0ge1xuICAgIGJhc2VuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBnZXRVc2VyQ29uZmlybWF0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBoYXNoVHlwZTogUHJvcFR5cGVzLm9uZU9mKFtcImhhc2hiYW5nXCIsIFwibm9zbGFzaFwiLCBcInNsYXNoXCJdKVxuICB9O1xuXG4gIEhhc2hSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoIXRoaXMucHJvcHMuaGlzdG9yeSwgXCI8SGFzaFJvdXRlcj4gaWdub3JlcyB0aGUgaGlzdG9yeSBwcm9wLiBUbyB1c2UgYSBjdXN0b20gaGlzdG9yeSwgXCIgKyBcInVzZSBgaW1wb3J0IHsgUm91dGVyIH1gIGluc3RlYWQgb2YgYGltcG9ydCB7IEhhc2hSb3V0ZXIgYXMgUm91dGVyIH1gLlwiKSA6IHZvaWQgMDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiAhIShldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcbn1cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHJlbmRlcmluZyBhIGhpc3RvcnktYXdhcmUgPGE+LlxuICovXG5cblxudmFyIExpbmsgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoTGluaywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGluaygpIHtcbiAgICByZXR1cm4gX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTGluay5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQsIGhpc3RvcnkpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuXG4gICAgaWYgKCFldmVudC5kZWZhdWx0UHJldmVudGVkICYmIC8vIG9uQ2xpY2sgcHJldmVudGVkIGRlZmF1bHRcbiAgICBldmVudC5idXR0b24gPT09IDAgJiYgKCAvLyBpZ25vcmUgZXZlcnl0aGluZyBidXQgbGVmdCBjbGlja3NcbiAgICAhdGhpcy5wcm9wcy50YXJnZXQgfHwgdGhpcy5wcm9wcy50YXJnZXQgPT09IFwiX3NlbGZcIikgJiYgLy8gbGV0IGJyb3dzZXIgaGFuZGxlIFwidGFyZ2V0PV9ibGFua1wiIGV0Yy5cbiAgICAhaXNNb2RpZmllZEV2ZW50KGV2ZW50KSAvLyBpZ25vcmUgY2xpY2tzIHdpdGggbW9kaWZpZXIga2V5c1xuICAgICkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgbWV0aG9kID0gdGhpcy5wcm9wcy5yZXBsYWNlID8gaGlzdG9yeS5yZXBsYWNlIDogaGlzdG9yeS5wdXNoO1xuICAgICAgICBtZXRob2QodGhpcy5wcm9wcy50byk7XG4gICAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaW5uZXJSZWYgPSBfdGhpcyRwcm9wcy5pbm5lclJlZixcbiAgICAgICAgcmVwbGFjZSA9IF90aGlzJHByb3BzLnJlcGxhY2UsXG4gICAgICAgIHRvID0gX3RoaXMkcHJvcHMudG8sXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiaW5uZXJSZWZcIiwgXCJyZXBsYWNlXCIsIFwidG9cIl0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9fUm91dGVyQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICFjb250ZXh0ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIllvdSBzaG91bGQgbm90IHVzZSA8TGluaz4gb3V0c2lkZSBhIDxSb3V0ZXI+XCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAgIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IGNyZWF0ZUxvY2F0aW9uKHRvLCBudWxsLCBudWxsLCBjb250ZXh0LmxvY2F0aW9uKSA6IHRvO1xuICAgICAgdmFyIGhyZWYgPSBsb2NhdGlvbiA/IGNvbnRleHQuaGlzdG9yeS5jcmVhdGVIcmVmKGxvY2F0aW9uKSA6IFwiXCI7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhldmVudCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVDbGljayhldmVudCwgY29udGV4dC5oaXN0b3J5KTtcbiAgICAgICAgfSxcbiAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgcmVmOiBpbm5lclJlZlxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBMaW5rO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHZhciB0b1R5cGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSk7XG4gIHZhciBpbm5lclJlZlR5cGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjdXJyZW50OiBQcm9wVHlwZXMuYW55XG4gIH0pXSk7XG4gIExpbmsucHJvcFR5cGVzID0ge1xuICAgIGlubmVyUmVmOiBpbm5lclJlZlR5cGUsXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgdGFyZ2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRvOiB0b1R5cGUuaXNSZXF1aXJlZFxuICB9O1xufVxuXG5mdW5jdGlvbiBqb2luQ2xhc3NuYW1lcygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGNsYXNzbmFtZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgY2xhc3NuYW1lc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBjbGFzc25hbWVzLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBpO1xuICB9KS5qb2luKFwiIFwiKTtcbn1cbi8qKlxuICogQSA8TGluaz4gd3JhcHBlciB0aGF0IGtub3dzIGlmIGl0J3MgXCJhY3RpdmVcIiBvciBub3QuXG4gKi9cblxuXG5mdW5jdGlvbiBOYXZMaW5rKF9yZWYpIHtcbiAgdmFyIF9yZWYkYXJpYUN1cnJlbnQgPSBfcmVmW1wiYXJpYS1jdXJyZW50XCJdLFxuICAgICAgYXJpYUN1cnJlbnQgPSBfcmVmJGFyaWFDdXJyZW50ID09PSB2b2lkIDAgPyBcInBhZ2VcIiA6IF9yZWYkYXJpYUN1cnJlbnQsXG4gICAgICBfcmVmJGFjdGl2ZUNsYXNzTmFtZSA9IF9yZWYuYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3JlZiRhY3RpdmVDbGFzc05hbWUgPT09IHZvaWQgMCA/IFwiYWN0aXZlXCIgOiBfcmVmJGFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgIGFjdGl2ZVN0eWxlID0gX3JlZi5hY3RpdmVTdHlsZSxcbiAgICAgIGNsYXNzTmFtZVByb3AgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGV4YWN0ID0gX3JlZi5leGFjdCxcbiAgICAgIGlzQWN0aXZlUHJvcCA9IF9yZWYuaXNBY3RpdmUsXG4gICAgICBsb2NhdGlvbiA9IF9yZWYubG9jYXRpb24sXG4gICAgICBzdHJpY3QgPSBfcmVmLnN0cmljdCxcbiAgICAgIHN0eWxlUHJvcCA9IF9yZWYuc3R5bGUsXG4gICAgICB0byA9IF9yZWYudG8sXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiYXJpYS1jdXJyZW50XCIsIFwiYWN0aXZlQ2xhc3NOYW1lXCIsIFwiYWN0aXZlU3R5bGVcIiwgXCJjbGFzc05hbWVcIiwgXCJleGFjdFwiLCBcImlzQWN0aXZlXCIsIFwibG9jYXRpb25cIiwgXCJzdHJpY3RcIiwgXCJzdHlsZVwiLCBcInRvXCJdKTtcblxuICB2YXIgcGF0aCA9IHR5cGVvZiB0byA9PT0gXCJvYmplY3RcIiA/IHRvLnBhdGhuYW1lIDogdG87IC8vIFJlZ2V4IHRha2VuIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9waWxsYXJqcy9wYXRoLXRvLXJlZ2V4cC9ibG9iL21hc3Rlci9pbmRleC5qcyNMMjAyXG5cbiAgdmFyIGVzY2FwZWRQYXRoID0gcGF0aCAmJiBwYXRoLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtcbiAgICBwYXRoOiBlc2NhcGVkUGF0aCxcbiAgICBleGFjdDogZXhhY3QsXG4gICAgc3RyaWN0OiBzdHJpY3QsXG4gICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgIGNoaWxkcmVuOiBmdW5jdGlvbiBjaGlsZHJlbihfcmVmMikge1xuICAgICAgdmFyIGxvY2F0aW9uID0gX3JlZjIubG9jYXRpb24sXG4gICAgICAgICAgbWF0Y2ggPSBfcmVmMi5tYXRjaDtcbiAgICAgIHZhciBpc0FjdGl2ZSA9ICEhKGlzQWN0aXZlUHJvcCA/IGlzQWN0aXZlUHJvcChtYXRjaCwgbG9jYXRpb24pIDogbWF0Y2gpO1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IGlzQWN0aXZlID8gam9pbkNsYXNzbmFtZXMoY2xhc3NOYW1lUHJvcCwgYWN0aXZlQ2xhc3NOYW1lKSA6IGNsYXNzTmFtZVByb3A7XG4gICAgICB2YXIgc3R5bGUgPSBpc0FjdGl2ZSA/IF9leHRlbmRzKHt9LCBzdHlsZVByb3AsIGFjdGl2ZVN0eWxlKSA6IHN0eWxlUHJvcDtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIF9leHRlbmRzKHtcbiAgICAgICAgXCJhcmlhLWN1cnJlbnRcIjogaXNBY3RpdmUgJiYgYXJpYUN1cnJlbnQgfHwgbnVsbCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgdG86IHRvXG4gICAgICB9LCByZXN0KSk7XG4gICAgfVxuICB9KTtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICB2YXIgYXJpYUN1cnJlbnRUeXBlID0gUHJvcFR5cGVzLm9uZU9mKFtcInBhZ2VcIiwgXCJzdGVwXCIsIFwibG9jYXRpb25cIiwgXCJkYXRlXCIsIFwidGltZVwiLCBcInRydWVcIl0pO1xuICBOYXZMaW5rLnByb3BUeXBlcyA9IF9leHRlbmRzKHt9LCBMaW5rLnByb3BUeXBlcywge1xuICAgIFwiYXJpYS1jdXJyZW50XCI6IGFyaWFDdXJyZW50VHlwZSxcbiAgICBhY3RpdmVDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWN0aXZlU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGV4YWN0OiBSb3V0ZS5wcm9wVHlwZXMuZXhhY3QsXG4gICAgaXNBY3RpdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHN0cmljdDogUm91dGUucHJvcFR5cGVzLnN0cmljdCxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdFxuICB9KTtcbn1cblxuZXhwb3J0IHsgQnJvd3NlclJvdXRlciwgSGFzaFJvdXRlciwgTGluaywgTmF2TGluayB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJvdXRlci1kb20vZXNtL3JlYWN0LXJvdXRlci1kb20uanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGFjdGlvbkV2ZW50cyBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBob21lUGFnZVJlZHVjZXIgKHN0YXRlLCBhY3Rpb24pIHtcclxuICBsZXQgYWN0aW9uVHlwZSA9IGFjdGlvbi50eXBlLFxyXG4gICAgICBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcclxuXHJcbiAgaWYgKGFjdGlvblR5cGUgPT09IGFjdGlvbkV2ZW50cy5TRVRfUEFHRURBVEEpIHtcclxuICAgIG5ld1N0YXRlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3U3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBTdGF0ZSAoc3RhdGUsIGFjdGlvbikge1xyXG4gIGxldCBhY3Rpb25UeXBlID0gYWN0aW9uLnR5cGUsXHJcbiAgICAgIG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xyXG5cclxuICBpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9uRXZlbnRzLkxPQ0FUSU9OX0NIQU5HRSkge1xyXG4gICAgbmV3U3RhdGUuY3VycmVudC5wYXRoID0gYWN0aW9uLnBheWxvYWQucGF0aG5hbWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3U3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXRhUmVxdWVzdHMgKHN0YXRlLCBhY3Rpb24pIHtcclxuICBsZXQgYWN0aW9uVHlwZSA9IGFjdGlvbi50eXBlLFxyXG4gICAgICBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcclxuXHJcbiAgaWYgKGFjdGlvblR5cGUgPT09IGFjdGlvbkV2ZW50cy5TRVRUSU5HX1BBR0VEQVRBKSB7XHJcbiAgICBuZXdTdGF0ZS5zZXR0aW5ncyA9IHRydWU7XHJcbiAgfSBlbHNlIGlmIChhY3Rpb25UeXBlID09PSBhY3Rpb25FdmVudHMuU0VUX1BBR0VEQVRBKSB7XHJcbiAgICBuZXdTdGF0ZS5zZXR0aW5ncyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ld1N0YXRlO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9yZWR1Y2Vycy9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBzdGF0ZSA9IHtcclxuICBhcHA6IHtcclxuICAgIGN1cnJlbnQ6IHtcclxuICAgICAgcGF0aDogJycsXHJcbiAgICAgIHBhZ2VUaXRsZTogJydcclxuICAgIH1cclxuICB9LFxyXG4gIGhvbWVQYWdlOiB7XHJcbiAgICBtZXNzYWdlOiBcIlRlbXBsYXRlIE1lc3NhZ2VcIlxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0YXRlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvc3RvcmVzL2RlZmF1bHRTdGF0ZS5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGVycm9yOiBmYWxzZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZENhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGVycm9yOiB0cnVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEVycm9yQ29udGVudCAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtZXJyb3ItY29udGVudFwiPlxyXG4gICAgICAgIFNvbWUgRXJyb3Igb2NjdXJlZC4gV2UgcmVncmV0IGZvciBpbmNvbnZpbmllbmNlLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cclxuICAgICAgICA8aGVhZGVyIGlkPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28taWNvblwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+e3RoaXMucHJvcHMuaGVhZGVyfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPG1haW4gaWQ9XCJib2R5XCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JcclxuICAgICAgICAgICAgICA/ICB0aGlzLmdldEVycm9yQ29udGVudCgpXHJcbiAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICBHZW5lcmF0ZWQgYnkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9qZWZyZWVzdWppdC9nZW5lcmF0b3ItcmVhY3Qtbm9kZVwiPmdlbmVyYXRvci1yZWFjdC1ub2RlPC9hPi5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5QYWdlLmRpc3BsYXlOYW1lID0gJ1BhZ2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3ZpZXdzL2NvbXBvbmVudHMvcGFnZS5qcyIsIi8qIGdsb2JhbCBsb2NhdGlvbiAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmVzL2luZGV4JztcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHN5bmNIaXN0b3J5V2l0aFN0b3JlIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9wYWdlcy9ob21lJztcclxuaW1wb3J0IEVycm9yNDA0IGZyb20gJy4vcGFnZXMvZXJyb3I0MDQnO1xyXG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5cclxuY29uc3QgaGlzdG9yeSA9IHN5bmNIaXN0b3J5V2l0aFN0b3JlKGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCksIHN0b3JlKTtcclxuY29uc29sZS5sb2coaGlzdG9yeSk7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgPFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cclxuICAgICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0hvbWV9IC8+XHJcbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvNDA0XCIgY29tcG9uZW50PXtFcnJvcjQwNH0gLz5cclxuICAgICAgICAgICAgICA8Um91dGUgbm9tYXRjaCBjb21wb25lbnQ9e0Vycm9yNDA0fSAvPlxyXG4gICAgICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgICAgIDwvUm91dGVyPlxyXG4gICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkFwcC5kaXNwbGF5TmFtZSA9ICdBcHAnO1xyXG5cclxuLy8gQm9vdHN0cmFwIGNsaWVudFxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICB3aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgdmFyIHByb3BzID0ge1xyXG4gICAgICBwYXRoOiBsb2NhdGlvbi5wYXRobmFtZVxyXG4gICAgfTtcclxuICAgIFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEFwcCwgcHJvcHMpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3RWaWV3JykpO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3ZpZXdzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==