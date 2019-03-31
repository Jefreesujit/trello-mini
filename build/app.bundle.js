webpackJsonp([0],{

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(12);

var _reduxThunk = __webpack_require__(19);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouter = __webpack_require__(8);

var _reactRouterRedux = __webpack_require__(9);

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
  board: (0, _redux.combineReducers)({
    panels: reducers.listReducer,
    tasks: reducers.tasksReducer
  })
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

var _page = __webpack_require__(69);

var _page2 = _interopRequireDefault(_page);

var _reactRedux = __webpack_require__(3);

var _list = __webpack_require__(67);

var _list2 = _interopRequireDefault(_list);

var _addList = __webpack_require__(65);

var _addList2 = _interopRequireDefault(_addList);

var _modal = __webpack_require__(68);

var _modal2 = _interopRequireDefault(_modal);

var _editItem = __webpack_require__(66);

var _editItem2 = _interopRequireDefault(_editItem);

var _actions = __webpack_require__(5);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      activeItem: {},
      showModal: false
    }, _this.onDragOver = function (ev) {
      ev.preventDefault();
    }, _this.onDragStart = function (ev, name) {
      ev.dataTransfer.setData("id", name);
    }, _this.onDrop = function (ev, category) {
      var id = ev.dataTransfer.getData("id");
      _this.props.dispatch(actions.moveCard({ id: id, category: category }));
    }, _this.onItemClick = function (item) {
      _this.setState({
        activeItem: item,
        showModal: true
      });
    }, _this.onModalClose = function () {
      _this.setState({
        showModal: false
      });
    }, _this.renderList = function (cards) {
      return _this.props.list.map(function (list, index) {
        return _react2.default.createElement(_list2.default, { cards: cards[list.id], list: list, onDrop: _this.onDrop,
          onDragOver: _this.onDragOver, key: index,
          onDragStart: _this.onDragStart, onItemClick: _this.onItemClick });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      console.log(_modal2.default);
      return _react2.default.createElement(
        _page2.default,
        { className: 'home-page', header: 'Trello' },
        _react2.default.createElement(
          'div',
          { className: 'board-container' },
          this.renderList(this.props.cards),
          _react2.default.createElement(_addList2.default, { hasActiveList: this.props.hasActiveList })
        ),
        _react2.default.createElement(
          _modal2.default,
          { show: this.state.showModal, title: 'View Card', onClose: this.onModalClose },
          _react2.default.createElement(_editItem2.default, { item: this.state.activeItem })
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

Home.displayName = 'Home';

function select(state) {
  var cards = {};
  state.board.tasks.cards.forEach(function (t) {
    cards[t.category] = cards[t.category] || [];
    cards[t.category].push(t);
  });

  return {
    list: state.board.panels.list,
    cards: cards,
    hasActiveList: state.board.panels.list.length > 0
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(8);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tiny_warning__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_extends__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_tiny_invariant__ = __webpack_require__(17);











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

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchingPageData = fetchingPageData;
exports.fetchPageData = fetchPageData;
exports.createList = createList;
exports.deleteList = deleteList;
exports.addCard = addCard;
exports.moveCard = moveCard;
exports.deleteCard = deleteCard;
exports.addComments = addComments;
exports.addDescription = addDescription;
/** This provides the various redux actions to trigger app state changes by the redux reducer
 * @module Redux actions
 */

var LOCATION_CHANGE = exports.LOCATION_CHANGE = '@@router/LOCATION_CHANGE';
var FETCHING_PAGEDATA = exports.FETCHING_PAGEDATA = 'FETCHING_PAGEDATA';
var CREATE_LIST = exports.CREATE_LIST = 'CREATE_LIST';
var DELETE_LIST = exports.DELETE_LIST = 'DELETE_LIST';
var ADD_CARD = exports.ADD_CARD = 'ADD_CARD';
var ADD_COMMENTS = exports.ADD_COMMENTS = 'ADD_COMMENTS';
var ADD_DESCRIPTION = exports.ADD_DESCRIPTION = 'ADD_DESCRIPTION';
var MOVE_CARD = exports.MOVE_CARD = 'MOVE_CARD';
var DELETE_CARD = exports.DELETE_CARD = 'DELETE_CARD';

function fetchingPageData() {
  return {
    type: FETCHING_PAGEDATA
  };
}

function fetchPageData() {
  return function (dispatch) {
    dispatch(fetchingPageData());
    dispatch({
      type: SET_PAGEDATA,
      payload: "message"
    });
  };
}

function createList(data) {
  return function (dispatch) {
    dispatch(fetchingPageData());
    dispatch({
      type: CREATE_LIST,
      payload: data
    });
  };
}

function deleteList(data) {
  return function (dispatch) {
    dispatch(fetchingPageData());
    dispatch({
      type: DELETE_LIST,
      payload: data
    });
  };
}

function addCard(data) {
  return function (dispatch) {
    dispatch(fetchingPageData());
    dispatch({
      type: ADD_CARD,
      payload: data
    });
  };
}

function moveCard(data) {
  return function (dispatch) {
    dispatch(fetchingPageData());
    dispatch({
      type: MOVE_CARD,
      payload: data
    });
  };
}

function deleteCard(data) {
  return function (dispatch) {
    dispatch(fetchingPageData());
    dispatch({
      type: DELETE_CARD,
      payload: data
    });
  };
}

function addComments(data) {
  return function (dispatch) {
    dispatch(fetchingPageData());
    dispatch({
      type: ADD_COMMENTS,
      payload: data
    });
  };
}

function addDescription(data) {
  return function (dispatch) {
    dispatch(fetchingPageData());
    dispatch({
      type: ADD_DESCRIPTION,
      payload: data
    });
  };
}

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appState = appState;
exports.listReducer = listReducer;
exports.tasksReducer = tasksReducer;
exports.dataRequests = dataRequests;

var _index = __webpack_require__(5);

var actionEvents = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function appState(state, action) {
  var actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.LOCATION_CHANGE) {
    newState.current.path = action.payload.pathname;
  }

  return newState;
}

function listReducer(state, action) {
  var actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.CREATE_LIST) {
    newState.list.push({
      id: newState.counter + 1,
      name: action.payload
    });
    newState.counter += 1;
  } else if (actionType === actionEvents.DELETE_LIST) {
    newState.list = state.list.filter(function (list) {
      return list.id !== action.payload.id;
    });
  }

  return newState;
}

function tasksReducer(state, action) {
  var actionType = action.type,
      newState = Object.assign({}, state);

  if (actionType === actionEvents.ADD_CARD) {
    newState.cards.push({
      id: newState.counter + 1,
      name: action.payload.item,
      category: action.payload.category,
      description: '',
      comments: []
    });
    newState.counter += 1;
  } else if (actionType === actionEvents.MOVE_CARD) {
    newState.cards = state.cards.map(function (card) {
      if (card.id == action.payload.id) {
        card.category = action.payload.category;
      }
      return card;
    });
  } else if (actionType === actionEvents.DELETE_LIST) {
    newState.cards = state.cards.filter(function (card) {
      return card.category !== action.payload.id;
    });
  } else if (actionType === actionEvents.ADD_COMMENTS) {
    newState.cards[newState.cards.findIndex(function (item) {
      return item.id === action.payload.id;
    })].comments.push(action.payload.comment);
  } else if (actionType === actionEvents.ADD_DESCRIPTION) {
    newState.cards[newState.cards.findIndex(function (item) {
      return item.id === action.payload.id;
    })].description = action.payload.description;
  } else if (actionType === actionEvents.DELETE_CARD) {
    newState.cards.splice(newState.cards.findIndex(function (item) {
      return item.id === action.payload.id;
    }), 1);
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
      path: '/',
      pageTitle: 'Trello'
    }
  },
  board: {
    panels: {
      list: [{
        id: 1,
        name: 'todo'
      }, {
        id: 2,
        name: 'working'
      }, {
        id: 3,
        name: 'complete'
      }],
      counter: 3
    },
    tasks: {
      cards: [{
        id: 1,
        name: "Add More Tasks",
        category: 1,
        description: "",
        comments: ["Test Comment 1", "Test Comment 2"]
      }],
      counter: 1
    }
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

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(5);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddItem = function (_React$Component) {
  _inherits(AddItem, _React$Component);

  function AddItem() {
    _classCallCheck(this, AddItem);

    var _this = _possibleConstructorReturn(this, (AddItem.__proto__ || Object.getPrototypeOf(AddItem)).call(this));

    _this.showAddLink = function () {
      _this.setState({
        showAddBox: true
      });
    };

    _this.hideAddLink = function () {
      _this.setState({
        showAddBox: false
      });
    };

    _this.onSaveClick = function () {
      if (_this.state.inputValue !== '') {
        _this.props.onItemAdd(_this.state.inputValue);
        _this.setState({
          inputValue: '',
          showAddBox: false
        });
      }
    };

    _this.onInputChange = function (ev) {
      _this.setState({
        inputValue: ev.target.value
      });
    };

    _this.state = {
      showAddBox: false,
      inputValue: ''
    };
    return _this;
  }

  _createClass(AddItem, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'add-item' },
        this.state.showAddBox ? _react2.default.createElement(
          'div',
          { className: 'add-list-section' },
          _react2.default.createElement('textarea', { autoFocus: true, className: 'list-input', onChange: this.onInputChange, placeholder: 'Enter a title for this card...', value: this.state.value }),
          _react2.default.createElement(
            'button',
            { className: 'btn btn-save', onClick: this.onSaveClick },
            'Add Card'
          ),
          _react2.default.createElement('span', { className: 'reset-link fa fa-times', onClick: this.hideAddLink })
        ) : _react2.default.createElement(
          'a',
          { className: 'add-card-link', onClick: this.showAddLink },
          this.props.hasActiveList ? '+ Add Another Card' : '+ Add Card'
        )
      );
    }
  }]);

  return AddItem;
}(_react2.default.Component);

;

AddItem.displayName = 'AddItem';

exports.default = AddItem;

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(5);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddList = function (_React$Component) {
  _inherits(AddList, _React$Component);

  function AddList() {
    _classCallCheck(this, AddList);

    var _this = _possibleConstructorReturn(this, (AddList.__proto__ || Object.getPrototypeOf(AddList)).call(this));

    _this.showAddLink = function () {
      _this.setState({
        showAddBox: true
      });
    };

    _this.hideAddLink = function () {
      _this.setState({
        showAddBox: false
      });
    };

    _this.onSaveClick = function () {
      if (_this.state.inputValue !== '') {
        _this.props.dispatch(actions.createList(_this.state.inputValue));
        _this.setState({
          inputValue: '',
          showAddBox: false
        });
      }
    };

    _this.onInputChange = function (ev) {
      _this.setState({
        inputValue: ev.target.value
      });
    };

    _this.state = {
      showAddBox: false,
      inputValue: ''
    };
    return _this;
  }

  _createClass(AddList, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'add-list' },
        this.state.showAddBox ? _react2.default.createElement(
          'div',
          { className: 'list-container' },
          _react2.default.createElement('input', { autoFocus: true, className: 'list-input', placeholder: 'Add a list...', onChange: this.onInputChange, value: this.state.value }),
          _react2.default.createElement(
            'button',
            { className: 'btn btn-save', onClick: this.onSaveClick },
            'Add List'
          ),
          _react2.default.createElement('span', { className: 'reset-link fa fa-times', onClick: this.hideAddLink })
        ) : _react2.default.createElement(
          'div',
          { className: 'add-list-link', onClick: this.showAddLink },
          this.props.hasActiveList ? '+ Add Another List' : '+ Add A List'
        )
      );
    }
  }]);

  return AddList;
}(_react2.default.Component);

;

AddList.displayName = 'AddList';

exports.default = (0, _reactRedux.connect)()(AddList);

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(5);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditItem = function (_React$Component) {
  _inherits(EditItem, _React$Component);

  function EditItem(props) {
    _classCallCheck(this, EditItem);

    var _this = _possibleConstructorReturn(this, (EditItem.__proto__ || Object.getPrototypeOf(EditItem)).call(this, props));

    _this.changeHandler = function (value, key) {
      var state = {};
      state[key] = value;
      _this.setState(state);
    };

    _this.addComment = function () {
      _this.props.dispatch(actions.addComments({
        comment: _this.state.comment,
        id: _this.props.item.id
      }));

      _this.setState({
        comment: ''
      });
    };

    _this.addDescription = function () {
      _this.props.dispatch(actions.addDescription({
        description: _this.state.description,
        id: _this.props.item.id
      }));

      _this.setState({
        allowEdit: false
      });
    };

    _this.toggleEdit = function () {
      _this.setState({
        allowEdit: !_this.state.allowEdit
      });
    };

    _this.state = {
      comment: '',
      description: props.item.description,
      allowEdit: false
    };

    _this.commentHandler = function (ev) {
      return _this.changeHandler(ev.target.value, 'comment');
    };
    _this.descriptionHandler = function (ev) {
      return _this.changeHandler(ev.target.value, 'description');
    };
    return _this;
  }

  _createClass(EditItem, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'edit-item-container' },
        _react2.default.createElement(
          'div',
          { 'class': 'left-section' },
          _react2.default.createElement(
            'div',
            { className: 'section description' },
            _react2.default.createElement(
              'div',
              { 'class': 'icon-box' },
              _react2.default.createElement('i', { className: 'fa fa-bars' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'content-box' },
              _react2.default.createElement(
                'label',
                { className: 'input-label' },
                'Description'
              ),
              this.props.item.description && !this.state.allowEdit ? _react2.default.createElement(
                'div',
                { className: 'description-content', onClick: this.toggleEdit },
                this.props.item.description
              ) : _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement('textarea', { className: 'list-input', onChange: this.descriptionHandler, placeholder: 'Enter description... ', value: this.state.description }),
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-save', onClick: this.addDescription },
                  'Save'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'section comments-input' },
            _react2.default.createElement(
              'div',
              { className: 'icon-box' },
              _react2.default.createElement('i', { className: 'fa fa-comments-o' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'content-box' },
              _react2.default.createElement(
                'label',
                { className: 'input-label' },
                'Comments'
              ),
              _react2.default.createElement('textarea', { className: 'list-input', placeholder: 'Enter comment ', onChange: this.commentHandler, value: this.state.comment }),
              _react2.default.createElement(
                'button',
                { className: 'btn btn-save', onClick: this.addComment },
                'Save'
              )
            )
          )
        ),
        this.props.item.comments.length ? _react2.default.createElement(
          'div',
          { className: 'section comments-render' },
          _react2.default.createElement(
            'div',
            { className: 'icon-box' },
            _react2.default.createElement('i', { className: 'fa fa-trello' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'content-box' },
            _react2.default.createElement(
              'label',
              { className: 'input-label' },
              'Activity'
            ),
            _react2.default.createElement(
              'div',
              { className: 'comments-list' },
              ' ',
              this.props.item.comments.map(function (comment) {
                return _react2.default.createElement(
                  'div',
                  { className: 'comment-item' },
                  comment
                );
              })
            )
          )
        ) : null
      );
    }
  }]);

  return EditItem;
}(_react2.default.Component);

EditItem.displayName = 'EditItem';

exports.default = (0, _reactRedux.connect)()(EditItem);

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _addItem = __webpack_require__(64);

var _addItem2 = _interopRequireDefault(_addItem);

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(5);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItem = function ListItem(props) {
  var deleteCard = function deleteCard(ev, card) {
    ev.stopPropagation();
    props.dispatch(actions.deleteCard(card));
  };

  return _react2.default.createElement(
    'div',
    { className: 'list-container', onDragOver: function onDragOver(e) {
        return props.onDragOver(e);
      },
      onDrop: function onDrop(e) {
        return props.onDrop(e, props.list.id);
      } },
    _react2.default.createElement(
      'div',
      { className: 'list-head' },
      _react2.default.createElement(
        'div',
        { className: 'list-title', contentEditable: true, onInput: function onInput(e) {
            return console.log('list', e);
          } },
        props.list.name
      ),
      _react2.default.createElement('span', { className: 'fa fa-trash-o delete-link', 'aria-hidden': 'true',
        onClick: function onClick(e) {
          return props.dispatch(actions.deleteList(props.list));
        } })
    ),
    props.cards && props.cards.map(function (item) {
      return _react2.default.createElement(
        'div',
        { className: 'item-container', key: item.id,
          draggable: true, onDragStart: function onDragStart(e) {
            return props.onDragStart(e, item.id);
          }, onClick: function onClick(e) {
            return props.onItemClick(item);
          } },
        item.name,
        ' ',
        _react2.default.createElement('span', { className: 'fa fa-trash-o delete-link', 'aria-hidden': 'true',
          onClick: function onClick(e) {
            return deleteCard(e, item);
          } })
      );
    }),
    _react2.default.createElement(
      'div',
      { className: 'add-item' },
      _react2.default.createElement(_addItem2.default, { onItemAdd: function onItemAdd(item) {
          return props.dispatch(actions.addCard({ item: item, category: props.list.id }));
        },
        hasActiveList: props.cards && props.cards.length })
    )
  );
};

ListItem.displayName = 'ListItem';

function select(state) {
  return {};
}

exports.default = (0, _reactRedux.connect)(select)(ListItem);

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ViewModal = function ViewModal(props) {
  if (props.show) {
    return _react2.default.createElement(
      "div",
      { className: "modal-overlay" },
      _react2.default.createElement(
        "div",
        { className: "modal-dialog" },
        _react2.default.createElement(
          "div",
          { className: "modal-header" },
          _react2.default.createElement(
            "span",
            { className: "title" },
            _react2.default.createElement("i", { className: "fa fa-trello" }),
            props.title
          ),
          _react2.default.createElement("span", { className: "fa fa-times reset-link", onClick: props.onClose })
        ),
        _react2.default.createElement(
          "div",
          { className: "modal-content" },
          props.children
        )
      )
    );
  } else {
    return _react2.default.createElement("div", null);
  }
};

ViewModal.displayName = 'ViewModal';

exports.default = ViewModal;

/***/ }),

/***/ 69:
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
    key: 'updateThemeColor',
    value: function updateThemeColor(event) {
      console.log(event.target.value);
      document.documentElement.style.setProperty('--themeColor', event.target.value);
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
              { className: 'change-theme' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'colorPicker' },
                'Change Theme'
              ),
              _react2.default.createElement('input', { id: 'colorPicker', className: 'color-picker', type: 'color', onChange: this.updateThemeColor })
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

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global location */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(13);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(3);

var _index = __webpack_require__(38);

var _index2 = _interopRequireDefault(_index);

var _reactRouterDom = __webpack_require__(44);

var _reactRouterRedux = __webpack_require__(9);

var _home = __webpack_require__(40);

var _home2 = _interopRequireDefault(_home);

var _error = __webpack_require__(39);

var _error2 = _interopRequireDefault(_error);

var _history = __webpack_require__(11);

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

},[70]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvc3RvcmVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi92aWV3cy9wYWdlcy9lcnJvcjQwNC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdmlld3MvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci1kb20vZXNtL3JlYWN0LXJvdXRlci1kb20uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9zdG9yZXMvZGVmYXVsdFN0YXRlLmpzIiwid2VicGFjazovLy8uL2xpYi92aWV3cy9jb21wb25lbnRzL2FkZEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3ZpZXdzL2NvbXBvbmVudHMvYWRkTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdmlld3MvY29tcG9uZW50cy9lZGl0SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdmlld3MvY29tcG9uZW50cy9saXN0LmpzIiwid2VicGFjazovLy8uL2xpYi92aWV3cy9jb21wb25lbnRzL21vZGFsLmpzIiwid2VicGFjazovLy8uL2xpYi92aWV3cy9jb21wb25lbnRzL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3ZpZXdzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlZHVjZXJzIiwicmVkdWNlciIsImFwcCIsImFwcFN0YXRlIiwiZGF0YVJlcXVlc3RzIiwicm91dGluZyIsInJvdXRlclJlZHVjZXIiLCJib2FyZCIsInBhbmVscyIsImxpc3RSZWR1Y2VyIiwidGFza3MiLCJ0YXNrc1JlZHVjZXIiLCJyb3V0aW5nTWlkZGxld2FyZSIsImJyb3dzZXJIaXN0b3J5Iiwic3RvcmUiLCJkZWZhdWx0U3RhdGUiLCJ0aHVuayIsIndpbmRvdyIsImRldlRvb2xzRXh0ZW5zaW9uIiwiZiIsIkVycm9yNDA0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJkaXNwbGF5TmFtZSIsImFjdGlvbnMiLCJIb21lIiwic3RhdGUiLCJhY3RpdmVJdGVtIiwic2hvd01vZGFsIiwib25EcmFnT3ZlciIsImV2IiwicHJldmVudERlZmF1bHQiLCJvbkRyYWdTdGFydCIsIm5hbWUiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwib25Ecm9wIiwiY2F0ZWdvcnkiLCJpZCIsImdldERhdGEiLCJwcm9wcyIsImRpc3BhdGNoIiwibW92ZUNhcmQiLCJvbkl0ZW1DbGljayIsIml0ZW0iLCJzZXRTdGF0ZSIsIm9uTW9kYWxDbG9zZSIsInJlbmRlckxpc3QiLCJjYXJkcyIsImxpc3QiLCJtYXAiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJWaWV3TW9kYWwiLCJoYXNBY3RpdmVMaXN0Iiwic2VsZWN0IiwiZm9yRWFjaCIsInQiLCJwdXNoIiwibGVuZ3RoIiwiZmV0Y2hpbmdQYWdlRGF0YSIsImZldGNoUGFnZURhdGEiLCJjcmVhdGVMaXN0IiwiZGVsZXRlTGlzdCIsImFkZENhcmQiLCJkZWxldGVDYXJkIiwiYWRkQ29tbWVudHMiLCJhZGREZXNjcmlwdGlvbiIsIkxPQ0FUSU9OX0NIQU5HRSIsIkZFVENISU5HX1BBR0VEQVRBIiwiQ1JFQVRFX0xJU1QiLCJERUxFVEVfTElTVCIsIkFERF9DQVJEIiwiQUREX0NPTU1FTlRTIiwiQUREX0RFU0NSSVBUSU9OIiwiTU9WRV9DQVJEIiwiREVMRVRFX0NBUkQiLCJ0eXBlIiwiU0VUX1BBR0VEQVRBIiwicGF5bG9hZCIsImRhdGEiLCJhY3Rpb25FdmVudHMiLCJhY3Rpb24iLCJhY3Rpb25UeXBlIiwibmV3U3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJjdXJyZW50IiwicGF0aCIsInBhdGhuYW1lIiwiY291bnRlciIsImZpbHRlciIsImRlc2NyaXB0aW9uIiwiY29tbWVudHMiLCJjYXJkIiwiZmluZEluZGV4IiwiY29tbWVudCIsInNwbGljZSIsIlNFVFRJTkdfUEFHRURBVEEiLCJzZXR0aW5ncyIsInBhZ2VUaXRsZSIsIkFkZEl0ZW0iLCJzaG93QWRkTGluayIsInNob3dBZGRCb3giLCJoaWRlQWRkTGluayIsIm9uU2F2ZUNsaWNrIiwiaW5wdXRWYWx1ZSIsIm9uSXRlbUFkZCIsIm9uSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkFkZExpc3QiLCJFZGl0SXRlbSIsImNoYW5nZUhhbmRsZXIiLCJrZXkiLCJhZGRDb21tZW50IiwiYWxsb3dFZGl0IiwidG9nZ2xlRWRpdCIsImNvbW1lbnRIYW5kbGVyIiwiZGVzY3JpcHRpb25IYW5kbGVyIiwiTGlzdEl0ZW0iLCJzdG9wUHJvcGFnYXRpb24iLCJlIiwic2hvdyIsInRpdGxlIiwib25DbG9zZSIsImNoaWxkcmVuIiwiUGFnZSIsImVycm9yIiwiZXZlbnQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJjbGFzc05hbWUiLCJ1cGRhdGVUaGVtZUNvbG9yIiwiZ2V0RXJyb3JDb250ZW50IiwiaGlzdG9yeSIsIkFwcCIsIm9ubG9hZCIsImxvY2F0aW9uIiwiUmVhY3RET00iLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBQVlBLFE7O0FBQ1o7Ozs7Ozs7O0FBRUEsSUFBTUMsVUFBVSw0QkFBZ0I7QUFDOUJDLE9BQUtGLFNBQVNHLFFBRGdCO0FBRTlCQyxnQkFBY0osU0FBU0ksWUFGTztBQUc5QkMsV0FBU0MsK0JBSHFCO0FBSTlCQyxTQUFPLDRCQUFnQjtBQUNyQkMsWUFBUVIsU0FBU1MsV0FESTtBQUVyQkMsV0FBT1YsU0FBU1c7QUFGSyxHQUFoQjtBQUp1QixDQUFoQixDQUFoQjs7QUFVQSxJQUFNQyxvQkFBb0Isd0NBQWlCQywyQkFBakIsQ0FBMUI7O0FBRUEsSUFBTUMsUUFBUSx3QkFBWWIsT0FBWixFQUFxQmMsc0JBQXJCLEVBQW1DLG9CQUMvQyw0QkFBZ0JDLG9CQUFoQixFQUF1QkosaUJBQXZCLENBRCtDLEVBRS9DSyxPQUFPQyxpQkFBUCxHQUEyQkQsT0FBT0MsaUJBQVAsRUFBM0IsR0FBd0Q7QUFBQSxTQUFLQyxDQUFMO0FBQUEsQ0FGVCxDQUFuQyxDQUFkOztrQkFLZUwsSzs7Ozs7Ozs7QUN4QkY7O0FBRWI7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNTSxROzs7Ozs7Ozs7Ozs2QkFFTTtBQUNSLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxnQkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFJLFdBQVUsZUFBZDtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixPQURGO0FBTUQ7Ozs7RUFUb0JDLGdCQUFNQyxTOztBQVk3QkYsU0FBU0csV0FBVCxHQUF1QixVQUF2Qjs7a0JBRWVILFE7Ozs7Ozs7O0FDbkJGOzs7Ozs7OztBQUViOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFZSSxPOzs7Ozs7Ozs7Ozs7SUFFTkMsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ0pDLEssR0FBUTtBQUNOQyxrQkFBWSxFQUROO0FBRU5DLGlCQUFXO0FBRkwsSyxRQUtSQyxVLEdBQWEsY0FBTTtBQUNqQkMsU0FBR0MsY0FBSDtBQUNELEssUUFFREMsVyxHQUFjLFVBQUNGLEVBQUQsRUFBS0csSUFBTCxFQUFjO0FBQzFCSCxTQUFHSSxZQUFILENBQWdCQyxPQUFoQixDQUF3QixJQUF4QixFQUE4QkYsSUFBOUI7QUFDRCxLLFFBRURHLE0sR0FBUyxVQUFDTixFQUFELEVBQUtPLFFBQUwsRUFBa0I7QUFDekIsVUFBTUMsS0FBS1IsR0FBR0ksWUFBSCxDQUFnQkssT0FBaEIsQ0FBd0IsSUFBeEIsQ0FBWDtBQUNBLFlBQUtDLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQmpCLFFBQVFrQixRQUFSLENBQWlCLEVBQUNKLE1BQUQsRUFBS0Qsa0JBQUwsRUFBakIsQ0FBcEI7QUFDRCxLLFFBRURNLFcsR0FBYyxVQUFDQyxJQUFELEVBQVU7QUFDdEIsWUFBS0MsUUFBTCxDQUFjO0FBQ1psQixvQkFBWWlCLElBREE7QUFFWmhCLG1CQUFXO0FBRkMsT0FBZDtBQUlELEssUUFFRGtCLFksR0FBZSxZQUFNO0FBQ25CLFlBQUtELFFBQUwsQ0FBYztBQUNaakIsbUJBQVc7QUFEQyxPQUFkO0FBR0QsSyxRQUVEbUIsVSxHQUFhLFVBQUNDLEtBQUQsRUFBVztBQUN0QixhQUFPLE1BQUtSLEtBQUwsQ0FBV1MsSUFBWCxDQUFnQkMsR0FBaEIsQ0FBb0IsVUFBQ0QsSUFBRCxFQUFPRSxLQUFQO0FBQUEsZUFDekIsOEJBQUMsY0FBRCxJQUFNLE9BQU9ILE1BQU1DLEtBQUtYLEVBQVgsQ0FBYixFQUE2QixNQUFNVyxJQUFuQyxFQUF5QyxRQUFRLE1BQUtiLE1BQXREO0FBQ00sc0JBQVksTUFBS1AsVUFEdkIsRUFDbUMsS0FBS3NCLEtBRHhDO0FBRU0sdUJBQWEsTUFBS25CLFdBRnhCLEVBRXFDLGFBQWEsTUFBS1csV0FGdkQsR0FEeUI7QUFBQSxPQUFwQixDQUFQO0FBS0QsSzs7Ozs7NkJBRVM7QUFDUlMsY0FBUUMsR0FBUixDQUFZQyxlQUFaO0FBQ0EsYUFDRTtBQUFDLHNCQUFEO0FBQUEsVUFBTSxXQUFVLFdBQWhCLEVBQTRCLFFBQU8sUUFBbkM7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGlCQUFmO0FBQ0csZUFBS1AsVUFBTCxDQUFnQixLQUFLUCxLQUFMLENBQVdRLEtBQTNCLENBREg7QUFFRSx3Q0FBQyxpQkFBRCxJQUFTLGVBQWUsS0FBS1IsS0FBTCxDQUFXZSxhQUFuQztBQUZGLFNBREY7QUFLRTtBQUFDLHlCQUFEO0FBQUEsWUFBVyxNQUFNLEtBQUs3QixLQUFMLENBQVdFLFNBQTVCLEVBQXVDLE9BQU0sV0FBN0MsRUFBeUQsU0FBUyxLQUFLa0IsWUFBdkU7QUFDRSx3Q0FBQyxrQkFBRCxJQUFVLE1BQU0sS0FBS3BCLEtBQUwsQ0FBV0MsVUFBM0I7QUFERjtBQUxGLE9BREY7QUFXRDs7OztFQXJEZ0JOLGdCQUFNQyxTOztBQXdEekJHLEtBQUtGLFdBQUwsR0FBbUIsTUFBbkI7O0FBRUEsU0FBU2lDLE1BQVQsQ0FBaUI5QixLQUFqQixFQUF3QjtBQUN0QixNQUFJc0IsUUFBUSxFQUFaO0FBQ0F0QixRQUFNbkIsS0FBTixDQUFZRyxLQUFaLENBQWtCc0MsS0FBbEIsQ0FBd0JTLE9BQXhCLENBQWdDLGFBQUs7QUFDbkNULFVBQU1VLEVBQUVyQixRQUFSLElBQW9CVyxNQUFNVSxFQUFFckIsUUFBUixLQUFxQixFQUF6QztBQUNBVyxVQUFNVSxFQUFFckIsUUFBUixFQUFrQnNCLElBQWxCLENBQXVCRCxDQUF2QjtBQUNELEdBSEQ7O0FBS0EsU0FBTztBQUNMVCxVQUFNdkIsTUFBTW5CLEtBQU4sQ0FBWUMsTUFBWixDQUFtQnlDLElBRHBCO0FBRUxELFdBQU9BLEtBRkY7QUFHTE8sbUJBQWU3QixNQUFNbkIsS0FBTixDQUFZQyxNQUFaLENBQW1CeUMsSUFBbkIsQ0FBd0JXLE1BQXhCLEdBQWlDO0FBSDNDLEdBQVA7QUFLRDs7a0JBRWMseUJBQVFKLE1BQVIsRUFBZ0IvQixJQUFoQixDOzs7Ozs7OztBQ25GZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0U7QUFDNUM7QUFDb0M7QUFDakM7QUFDcUQ7QUFDL0M7QUFDQTtBQUN1QjtBQUMwQztBQUM3RDs7QUFFdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0hBQWM7O0FBRWhCO0FBQ0E7O0FBRUEsdUVBQXVFLGFBQWE7QUFDcEY7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixvRkFBb0I7QUFDeEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFdBQVcsNkNBQUssZUFBZSxvREFBTTtBQUNyQztBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQyxDQUFDLDZDQUFLOztBQUVQO0FBQ0E7QUFDQSxjQUFjLGtEQUFTO0FBQ3ZCLGNBQWMsa0RBQVM7QUFDdkIsa0JBQWtCLGtEQUFTO0FBQzNCLHlCQUF5QixrREFBUztBQUNsQyxlQUFlLGtEQUFTO0FBQ3hCOztBQUVBO0FBQ0EsNENBQTRDLG9GQUFPLDRHQUE0RyxTQUFTLHNCQUFzQiwwQkFBMEI7QUFDeE47QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnSEFBYzs7QUFFaEI7QUFDQTs7QUFFQSx1RUFBdUUsYUFBYTtBQUNwRjtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGlGQUFpQjtBQUNyQztBQUNBOztBQUVBOztBQUVBO0FBQ0EsV0FBVyw2Q0FBSyxlQUFlLG9EQUFNO0FBQ3JDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDLENBQUMsNkNBQUs7O0FBRVA7QUFDQTtBQUNBLGNBQWMsa0RBQVM7QUFDdkIsY0FBYyxrREFBUztBQUN2Qix5QkFBeUIsa0RBQVM7QUFDbEMsY0FBYyxrREFBUztBQUN2Qjs7QUFFQTtBQUNBLDRDQUE0QyxvRkFBTyx5R0FBeUcsU0FBUyxzQkFBc0IsdUJBQXVCO0FBQ2xOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdIQUFjOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrSEFBNkIsNkNBQTZDOzs7QUFHekYsV0FBVyw2Q0FBSyxlQUFlLDZEQUFlO0FBQzlDLHlEQUF5RCxzRkFBUywwREFBMEQsc0ZBQVM7QUFDckksOENBQThDLDhFQUFjO0FBQzVEO0FBQ0EsYUFBYSw2Q0FBSyxvQkFBb0IsMEdBQVEsR0FBRztBQUNqRDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQyxDQUFDLDZDQUFLOztBQUVQO0FBQ0EsZUFBZSxrREFBUyxZQUFZLGtEQUFTLFNBQVMsa0RBQVM7QUFDL0QscUJBQXFCLGtEQUFTLFlBQVksa0RBQVMsU0FBUyxrREFBUyxPQUFPLGtEQUFTO0FBQ3JGLGFBQWEsa0RBQVM7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxhQUFhLGtEQUFTO0FBQ3RCLGFBQWEsa0RBQVM7QUFDdEIsWUFBWSxrREFBUztBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyRUFBMkUsYUFBYTtBQUN4RjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwrSEFBNkI7O0FBRTFDLHVEQUF1RDs7QUFFdkQsdURBQXVEO0FBQ3ZELFNBQVMsNkNBQUssZUFBZSxtREFBSztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsMEdBQVEsR0FBRztBQUN4QyxhQUFhLDZDQUFLLHFCQUFxQiwwR0FBUTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLHdCQUF3QixrREFBUztBQUNqQyxzQkFBc0IsMEdBQVEsR0FBRztBQUNqQztBQUNBLHFCQUFxQixrREFBUztBQUM5QixpQkFBaUIsa0RBQVM7QUFDMUIsZUFBZSxrREFBUztBQUN4QixXQUFXLG1EQUFLO0FBQ2hCLGNBQWMsa0RBQVM7QUFDdkIsY0FBYyxrREFBUztBQUN2QixZQUFZLG1EQUFLO0FBQ2pCLFdBQVcsa0RBQVM7QUFDcEIsR0FBRztBQUNIOztBQUVvRDs7Ozs7Ozs7Ozs7Ozs7O1FDeE9wQ29DLGdCLEdBQUFBLGdCO1FBTUFDLGEsR0FBQUEsYTtRQVVBQyxVLEdBQUFBLFU7UUFVQUMsVSxHQUFBQSxVO1FBVUFDLE8sR0FBQUEsTztRQVVBdkIsUSxHQUFBQSxRO1FBVUF3QixVLEdBQUFBLFU7UUFVQUMsVyxHQUFBQSxXO1FBVUFDLGMsR0FBQUEsYztBQTFGaEI7Ozs7QUFJTyxJQUFNQyw0Q0FBa0IsMEJBQXhCO0FBQ0EsSUFBTUMsZ0RBQW9CLG1CQUExQjtBQUNBLElBQU1DLG9DQUFjLGFBQXBCO0FBQ0EsSUFBTUMsb0NBQWMsYUFBcEI7QUFDQSxJQUFNQyw4QkFBVyxVQUFqQjtBQUNBLElBQU1DLHNDQUFlLGNBQXJCO0FBQ0EsSUFBTUMsNENBQWtCLGlCQUF4QjtBQUNBLElBQU1DLGdDQUFZLFdBQWxCO0FBQ0EsSUFBTUMsb0NBQWMsYUFBcEI7O0FBRUEsU0FBU2hCLGdCQUFULEdBQTZCO0FBQ2xDLFNBQU87QUFDTGlCLFVBQU1SO0FBREQsR0FBUDtBQUdEOztBQUVNLFNBQVNSLGFBQVQsR0FBMEI7QUFDL0IsU0FBTyxVQUFVckIsUUFBVixFQUFvQjtBQUN6QkEsYUFBU29CLGtCQUFUO0FBQ0FwQixhQUFTO0FBQ1BxQyxZQUFNQyxZQURDO0FBRVBDLGVBQVM7QUFGRixLQUFUO0FBSUQsR0FORDtBQU9EOztBQUVNLFNBQVNqQixVQUFULENBQXFCa0IsSUFBckIsRUFBMkI7QUFDaEMsU0FBTyxVQUFVeEMsUUFBVixFQUFvQjtBQUN6QkEsYUFBU29CLGtCQUFUO0FBQ0FwQixhQUFTO0FBQ1BxQyxZQUFNUCxXQURDO0FBRVBTLGVBQVNDO0FBRkYsS0FBVDtBQUlELEdBTkQ7QUFPRDs7QUFFTSxTQUFTakIsVUFBVCxDQUFxQmlCLElBQXJCLEVBQTJCO0FBQ2hDLFNBQU8sVUFBVXhDLFFBQVYsRUFBb0I7QUFDekJBLGFBQVNvQixrQkFBVDtBQUNBcEIsYUFBUztBQUNQcUMsWUFBTU4sV0FEQztBQUVQUSxlQUFTQztBQUZGLEtBQVQ7QUFJRCxHQU5EO0FBT0Q7O0FBRU0sU0FBU2hCLE9BQVQsQ0FBa0JnQixJQUFsQixFQUF3QjtBQUM3QixTQUFPLFVBQVV4QyxRQUFWLEVBQW9CO0FBQ3pCQSxhQUFTb0Isa0JBQVQ7QUFDQXBCLGFBQVM7QUFDUHFDLFlBQU1MLFFBREM7QUFFUE8sZUFBU0M7QUFGRixLQUFUO0FBSUQsR0FORDtBQU9EOztBQUVNLFNBQVN2QyxRQUFULENBQW1CdUMsSUFBbkIsRUFBeUI7QUFDOUIsU0FBTyxVQUFVeEMsUUFBVixFQUFvQjtBQUN6QkEsYUFBU29CLGtCQUFUO0FBQ0FwQixhQUFTO0FBQ1BxQyxZQUFNRixTQURDO0FBRVBJLGVBQVNDO0FBRkYsS0FBVDtBQUlELEdBTkQ7QUFPRDs7QUFFTSxTQUFTZixVQUFULENBQXFCZSxJQUFyQixFQUEyQjtBQUNoQyxTQUFPLFVBQVV4QyxRQUFWLEVBQW9CO0FBQ3pCQSxhQUFTb0Isa0JBQVQ7QUFDQXBCLGFBQVM7QUFDUHFDLFlBQU1ELFdBREM7QUFFUEcsZUFBU0M7QUFGRixLQUFUO0FBSUQsR0FORDtBQU9EOztBQUVNLFNBQVNkLFdBQVQsQ0FBc0JjLElBQXRCLEVBQTRCO0FBQ2pDLFNBQU8sVUFBVXhDLFFBQVYsRUFBb0I7QUFDekJBLGFBQVNvQixrQkFBVDtBQUNBcEIsYUFBUztBQUNQcUMsWUFBTUosWUFEQztBQUVQTSxlQUFTQztBQUZGLEtBQVQ7QUFJRCxHQU5EO0FBT0Q7O0FBRU0sU0FBU2IsY0FBVCxDQUF5QmEsSUFBekIsRUFBK0I7QUFDcEMsU0FBTyxVQUFVeEMsUUFBVixFQUFvQjtBQUN6QkEsYUFBU29CLGtCQUFUO0FBQ0FwQixhQUFTO0FBQ1BxQyxZQUFNSCxlQURDO0FBRVBLLGVBQVNDO0FBRkYsS0FBVDtBQUlELEdBTkQ7QUFPRCxDOzs7Ozs7Ozs7Ozs7O1FDaEdlOUUsUSxHQUFBQSxRO1FBV0FNLFcsR0FBQUEsVztRQWlCQUUsWSxHQUFBQSxZO1FBaUNBUCxZLEdBQUFBLFk7O0FBL0RoQjs7SUFBWThFLFk7Ozs7QUFFTCxTQUFTL0UsUUFBVCxDQUFtQnVCLEtBQW5CLEVBQTBCeUQsTUFBMUIsRUFBa0M7QUFDdkMsTUFBSUMsYUFBYUQsT0FBT0wsSUFBeEI7QUFBQSxNQUNJTyxXQUFXQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQjdELEtBQWxCLENBRGY7O0FBR0EsTUFBSTBELGVBQWVGLGFBQWFiLGVBQWhDLEVBQWlEO0FBQy9DZ0IsYUFBU0csT0FBVCxDQUFpQkMsSUFBakIsR0FBd0JOLE9BQU9ILE9BQVAsQ0FBZVUsUUFBdkM7QUFDRDs7QUFFRCxTQUFPTCxRQUFQO0FBQ0Q7O0FBRU0sU0FBUzVFLFdBQVQsQ0FBc0JpQixLQUF0QixFQUE2QnlELE1BQTdCLEVBQXFDO0FBQzFDLE1BQUlDLGFBQWFELE9BQU9MLElBQXhCO0FBQUEsTUFDSU8sV0FBV0MsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0I3RCxLQUFsQixDQURmOztBQUdBLE1BQUkwRCxlQUFlRixhQUFhWCxXQUFoQyxFQUE2QztBQUMzQ2MsYUFBU3BDLElBQVQsQ0FBY1UsSUFBZCxDQUFtQjtBQUNqQnJCLFVBQUkrQyxTQUFTTSxPQUFULEdBQW1CLENBRE47QUFFakIxRCxZQUFNa0QsT0FBT0g7QUFGSSxLQUFuQjtBQUlBSyxhQUFTTSxPQUFULElBQW9CLENBQXBCO0FBQ0QsR0FORCxNQU1PLElBQUlQLGVBQWVGLGFBQWFWLFdBQWhDLEVBQTZDO0FBQ2xEYSxhQUFTcEMsSUFBVCxHQUFnQnZCLE1BQU11QixJQUFOLENBQVcyQyxNQUFYLENBQWtCO0FBQUEsYUFBUTNDLEtBQUtYLEVBQUwsS0FBWTZDLE9BQU9ILE9BQVAsQ0FBZTFDLEVBQW5DO0FBQUEsS0FBbEIsQ0FBaEI7QUFDRDs7QUFFRCxTQUFPK0MsUUFBUDtBQUNEOztBQUVNLFNBQVMxRSxZQUFULENBQXVCZSxLQUF2QixFQUE4QnlELE1BQTlCLEVBQXNDO0FBQzNDLE1BQUlDLGFBQWFELE9BQU9MLElBQXhCO0FBQUEsTUFDSU8sV0FBV0MsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0I3RCxLQUFsQixDQURmOztBQUdBLE1BQUkwRCxlQUFlRixhQUFhVCxRQUFoQyxFQUEwQztBQUN4Q1ksYUFBU3JDLEtBQVQsQ0FBZVcsSUFBZixDQUFvQjtBQUNsQnJCLFVBQUkrQyxTQUFTTSxPQUFULEdBQW1CLENBREw7QUFFbEIxRCxZQUFNa0QsT0FBT0gsT0FBUCxDQUFlcEMsSUFGSDtBQUdsQlAsZ0JBQVU4QyxPQUFPSCxPQUFQLENBQWUzQyxRQUhQO0FBSWxCd0QsbUJBQWEsRUFKSztBQUtsQkMsZ0JBQVU7QUFMUSxLQUFwQjtBQU9BVCxhQUFTTSxPQUFULElBQW9CLENBQXBCO0FBQ0QsR0FURCxNQVNPLElBQUlQLGVBQWVGLGFBQWFOLFNBQWhDLEVBQTJDO0FBQ2hEUyxhQUFTckMsS0FBVCxHQUFpQnRCLE1BQU1zQixLQUFOLENBQVlFLEdBQVosQ0FBZ0IsZ0JBQVE7QUFDdkMsVUFBSTZDLEtBQUt6RCxFQUFMLElBQVc2QyxPQUFPSCxPQUFQLENBQWUxQyxFQUE5QixFQUFrQztBQUNoQ3lELGFBQUsxRCxRQUFMLEdBQWdCOEMsT0FBT0gsT0FBUCxDQUFlM0MsUUFBL0I7QUFDRDtBQUNELGFBQU8wRCxJQUFQO0FBQ0QsS0FMZ0IsQ0FBakI7QUFNRCxHQVBNLE1BT0EsSUFBSVgsZUFBZUYsYUFBYVYsV0FBaEMsRUFBNkM7QUFDbERhLGFBQVNyQyxLQUFULEdBQWlCdEIsTUFBTXNCLEtBQU4sQ0FBWTRDLE1BQVosQ0FBbUI7QUFBQSxhQUFRRyxLQUFLMUQsUUFBTCxLQUFrQjhDLE9BQU9ILE9BQVAsQ0FBZTFDLEVBQXpDO0FBQUEsS0FBbkIsQ0FBakI7QUFDRCxHQUZNLE1BRUEsSUFBSThDLGVBQWVGLGFBQWFSLFlBQWhDLEVBQThDO0FBQ25EVyxhQUFTckMsS0FBVCxDQUFlcUMsU0FBU3JDLEtBQVQsQ0FBZWdELFNBQWYsQ0FBeUI7QUFBQSxhQUFRcEQsS0FBS04sRUFBTCxLQUFZNkMsT0FBT0gsT0FBUCxDQUFlMUMsRUFBbkM7QUFBQSxLQUF6QixDQUFmLEVBQWdGd0QsUUFBaEYsQ0FBeUZuQyxJQUF6RixDQUE4RndCLE9BQU9ILE9BQVAsQ0FBZWlCLE9BQTdHO0FBQ0QsR0FGTSxNQUVBLElBQUliLGVBQWVGLGFBQWFQLGVBQWhDLEVBQWlEO0FBQ3REVSxhQUFTckMsS0FBVCxDQUFlcUMsU0FBU3JDLEtBQVQsQ0FBZWdELFNBQWYsQ0FBeUI7QUFBQSxhQUFRcEQsS0FBS04sRUFBTCxLQUFZNkMsT0FBT0gsT0FBUCxDQUFlMUMsRUFBbkM7QUFBQSxLQUF6QixDQUFmLEVBQWdGdUQsV0FBaEYsR0FBOEZWLE9BQU9ILE9BQVAsQ0FBZWEsV0FBN0c7QUFDRCxHQUZNLE1BRUEsSUFBSVQsZUFBZUYsYUFBYUwsV0FBaEMsRUFBNkM7QUFDbERRLGFBQVNyQyxLQUFULENBQWVrRCxNQUFmLENBQXNCYixTQUFTckMsS0FBVCxDQUFlZ0QsU0FBZixDQUF5QjtBQUFBLGFBQVFwRCxLQUFLTixFQUFMLEtBQVk2QyxPQUFPSCxPQUFQLENBQWUxQyxFQUFuQztBQUFBLEtBQXpCLENBQXRCLEVBQXVGLENBQXZGO0FBQ0Q7O0FBRUQsU0FBTytDLFFBQVA7QUFDRDs7QUFFTSxTQUFTakYsWUFBVCxDQUF1QnNCLEtBQXZCLEVBQThCeUQsTUFBOUIsRUFBc0M7QUFDM0MsTUFBSUMsYUFBYUQsT0FBT0wsSUFBeEI7QUFBQSxNQUNJTyxXQUFXQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQjdELEtBQWxCLENBRGY7O0FBR0EsTUFBSTBELGVBQWVGLGFBQWFpQixnQkFBaEMsRUFBa0Q7QUFDaERkLGFBQVNlLFFBQVQsR0FBb0IsSUFBcEI7QUFDRCxHQUZELE1BRU8sSUFBSWhCLGVBQWVGLGFBQWFILFlBQWhDLEVBQThDO0FBQ25ETSxhQUFTZSxRQUFULEdBQW9CLEtBQXBCO0FBQ0Q7O0FBRUQsU0FBT2YsUUFBUDtBQUNELEM7Ozs7Ozs7O0FDMUVZOzs7OztBQUViLElBQUkzRCxRQUFRO0FBQ1Z4QixPQUFLO0FBQ0hzRixhQUFTO0FBQ1BDLFlBQU0sR0FEQztBQUVQWSxpQkFBVztBQUZKO0FBRE4sR0FESztBQU9WOUYsU0FBTztBQUNMQyxZQUFRO0FBQ055QyxZQUFNLENBQUM7QUFDTFgsWUFBSSxDQURDO0FBRUhMLGNBQU07QUFGSCxPQUFELEVBR0Q7QUFDREssWUFBSSxDQURIO0FBRURMLGNBQU07QUFGTCxPQUhDLEVBTUQ7QUFDSEssWUFBSSxDQUREO0FBRUhMLGNBQU07QUFGSCxPQU5DLENBREE7QUFXTjBELGVBQVM7QUFYSCxLQURIO0FBY0xqRixXQUFPO0FBQ0xzQyxhQUFPLENBQ0w7QUFDRVYsWUFBSSxDQUROO0FBRUVMLGNBQU0sZ0JBRlI7QUFHRUksa0JBQVUsQ0FIWjtBQUlFd0QscUJBQWEsRUFKZjtBQUtFQyxrQkFBVSxDQUNSLGdCQURRLEVBRVIsZ0JBRlE7QUFMWixPQURLLENBREY7QUFhTEgsZUFBUztBQWJKO0FBZEY7QUFQRyxDQUFaOztrQkF1Q2VqRSxLOzs7Ozs7Ozs7Ozs7Ozs7O0FDekNmOzs7O0FBQ0E7O0FBQ0E7O0lBQVlGLE87Ozs7Ozs7Ozs7OztJQUVOOEUsTzs7O0FBQ0wscUJBQWU7QUFBQTs7QUFBQTs7QUFBQSxVQVFmQyxXQVJlLEdBUUQsWUFBTTtBQUNuQixZQUFLMUQsUUFBTCxDQUFjO0FBQ1YyRCxvQkFBWTtBQURGLE9BQWQ7QUFHQyxLQVphOztBQUFBLFVBY2ZDLFdBZGUsR0FjRCxZQUFNO0FBQ25CLFlBQUs1RCxRQUFMLENBQWM7QUFDVjJELG9CQUFZO0FBREYsT0FBZDtBQUdDLEtBbEJhOztBQUFBLFVBb0JkRSxXQXBCYyxHQW9CQSxZQUFNO0FBQ2xCLFVBQUksTUFBS2hGLEtBQUwsQ0FBV2lGLFVBQVgsS0FBMEIsRUFBOUIsRUFBa0M7QUFDaEMsY0FBS25FLEtBQUwsQ0FBV29FLFNBQVgsQ0FBcUIsTUFBS2xGLEtBQUwsQ0FBV2lGLFVBQWhDO0FBQ0EsY0FBSzlELFFBQUwsQ0FBYztBQUNaOEQsc0JBQVksRUFEQTtBQUVaSCxzQkFBWTtBQUZBLFNBQWQ7QUFJRDtBQUNGLEtBNUJhOztBQUFBLFVBOEJkSyxhQTlCYyxHQThCRSxjQUFNO0FBQ3BCLFlBQUtoRSxRQUFMLENBQWM7QUFDWjhELG9CQUFZN0UsR0FBR2dGLE1BQUgsQ0FBVUM7QUFEVixPQUFkO0FBR0QsS0FsQ2E7O0FBRWQsVUFBS3JGLEtBQUwsR0FBYTtBQUNaOEUsa0JBQVksS0FEQTtBQUVaRyxrQkFBWTtBQUZBLEtBQWI7QUFGYztBQU1kOzs7OzZCQThCUztBQUNULGFBQ0M7QUFBQTtBQUFBLFVBQUssV0FBVSxVQUFmO0FBRUUsYUFBS2pGLEtBQUwsQ0FBVzhFLFVBQVgsR0FDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGtCQUFmO0FBQ0Msc0RBQVUsZUFBVixFQUFvQixXQUFVLFlBQTlCLEVBQTJDLFVBQVUsS0FBS0ssYUFBMUQsRUFBeUUsYUFBWSxnQ0FBckYsRUFBc0gsT0FBTyxLQUFLbkYsS0FBTCxDQUFXcUYsS0FBeEksR0FERDtBQUVPO0FBQUE7QUFBQSxjQUFRLFdBQVUsY0FBbEIsRUFBaUMsU0FBUyxLQUFLTCxXQUEvQztBQUFBO0FBQUEsV0FGUDtBQUdPLGtEQUFNLFdBQVUsd0JBQWhCLEVBQXlDLFNBQVMsS0FBS0QsV0FBdkQ7QUFIUCxTQURGLEdBTU87QUFBQTtBQUFBLFlBQUcsV0FBVSxlQUFiLEVBQTZCLFNBQVMsS0FBS0YsV0FBM0M7QUFDSSxlQUFLL0QsS0FBTCxDQUFXZSxhQUFYLEdBQTJCLG9CQUEzQixHQUFrRDtBQUR0RDtBQVJULE9BREQ7QUFjQTs7OztFQXBEb0JsQyxnQkFBTUMsUzs7QUFxRDNCOztBQUVEZ0YsUUFBUS9FLFdBQVIsR0FBc0IsU0FBdEI7O2tCQUVlK0UsTzs7Ozs7Ozs7Ozs7Ozs7OztBQzdEZjs7OztBQUNBOztBQUNBOztJQUFZOUUsTzs7Ozs7Ozs7Ozs7O0lBRU53RixPOzs7QUFDTCxxQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBUWZULFdBUmUsR0FRRCxZQUFNO0FBQ25CLFlBQUsxRCxRQUFMLENBQWM7QUFDVjJELG9CQUFZO0FBREYsT0FBZDtBQUdDLEtBWmE7O0FBQUEsVUFjZkMsV0FkZSxHQWNELFlBQU07QUFDbkIsWUFBSzVELFFBQUwsQ0FBYztBQUNWMkQsb0JBQVk7QUFERixPQUFkO0FBR0MsS0FsQmE7O0FBQUEsVUFvQmRFLFdBcEJjLEdBb0JBLFlBQU07QUFDbEIsVUFBSSxNQUFLaEYsS0FBTCxDQUFXaUYsVUFBWCxLQUEwQixFQUE5QixFQUFrQztBQUNoQyxjQUFLbkUsS0FBTCxDQUFXQyxRQUFYLENBQW9CakIsUUFBUXVDLFVBQVIsQ0FBbUIsTUFBS3JDLEtBQUwsQ0FBV2lGLFVBQTlCLENBQXBCO0FBQ0EsY0FBSzlELFFBQUwsQ0FBYztBQUNaOEQsc0JBQVksRUFEQTtBQUVaSCxzQkFBWTtBQUZBLFNBQWQ7QUFJRDtBQUNGLEtBNUJhOztBQUFBLFVBOEJkSyxhQTlCYyxHQThCRSxjQUFNO0FBQ3BCLFlBQUtoRSxRQUFMLENBQWM7QUFDWjhELG9CQUFZN0UsR0FBR2dGLE1BQUgsQ0FBVUM7QUFEVixPQUFkO0FBR0QsS0FsQ2E7O0FBRWQsVUFBS3JGLEtBQUwsR0FBYTtBQUNaOEUsa0JBQVksS0FEQTtBQUVaRyxrQkFBWTtBQUZBLEtBQWI7QUFGYztBQU1kOzs7OzZCQThCUztBQUNULGFBQ0M7QUFBQTtBQUFBLFVBQUssV0FBVSxVQUFmO0FBRUUsYUFBS2pGLEtBQUwsQ0FBVzhFLFVBQVgsR0FDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGdCQUFmO0FBQ0MsbURBQU8sZUFBUCxFQUFpQixXQUFVLFlBQTNCLEVBQXdDLGFBQVksZUFBcEQsRUFBb0UsVUFBVSxLQUFLSyxhQUFuRixFQUFrRyxPQUFPLEtBQUtuRixLQUFMLENBQVdxRixLQUFwSCxHQUREO0FBRU87QUFBQTtBQUFBLGNBQVEsV0FBVSxjQUFsQixFQUFpQyxTQUFTLEtBQUtMLFdBQS9DO0FBQUE7QUFBQSxXQUZQO0FBR08sa0RBQU0sV0FBVSx3QkFBaEIsRUFBeUMsU0FBUyxLQUFLRCxXQUF2RDtBQUhQLFNBREYsR0FNTztBQUFBO0FBQUEsWUFBSyxXQUFVLGVBQWYsRUFBK0IsU0FBUyxLQUFLRixXQUE3QztBQUNJLGVBQUsvRCxLQUFMLENBQVdlLGFBQVgsR0FBMkIsb0JBQTNCLEdBQWtEO0FBRHREO0FBUlQsT0FERDtBQWNBOzs7O0VBcERvQmxDLGdCQUFNQyxTOztBQXFEM0I7O0FBRUQwRixRQUFRekYsV0FBUixHQUFzQixTQUF0Qjs7a0JBRWUsMkJBQVV5RixPQUFWLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RGY7Ozs7QUFDQTs7QUFDQTs7SUFBWXhGLE87Ozs7Ozs7Ozs7OztJQUVOeUYsUTs7O0FBQ0osb0JBQVl6RSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1hBLEtBRFc7O0FBQUEsVUFhbkIwRSxhQWJtQixHQWFILFVBQUNILEtBQUQsRUFBUUksR0FBUixFQUFnQjtBQUM5QixVQUFJekYsUUFBUSxFQUFaO0FBQ0FBLFlBQU15RixHQUFOLElBQWFKLEtBQWI7QUFDQSxZQUFLbEUsUUFBTCxDQUFjbkIsS0FBZDtBQUNELEtBakJrQjs7QUFBQSxVQW1CbkIwRixVQW5CbUIsR0FtQk4sWUFBTTtBQUNqQixZQUFLNUUsS0FBTCxDQUFXQyxRQUFYLENBQW9CakIsUUFBUTJDLFdBQVIsQ0FBb0I7QUFDdEM4QixpQkFBUyxNQUFLdkUsS0FBTCxDQUFXdUUsT0FEa0I7QUFFdEMzRCxZQUFJLE1BQUtFLEtBQUwsQ0FBV0ksSUFBWCxDQUFnQk47QUFGa0IsT0FBcEIsQ0FBcEI7O0FBS0EsWUFBS08sUUFBTCxDQUFjO0FBQ1pvRCxpQkFBUztBQURHLE9BQWQ7QUFHRCxLQTVCa0I7O0FBQUEsVUE4Qm5CN0IsY0E5Qm1CLEdBOEJGLFlBQU07QUFDckIsWUFBSzVCLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQmpCLFFBQVE0QyxjQUFSLENBQXVCO0FBQ3pDeUIscUJBQWEsTUFBS25FLEtBQUwsQ0FBV21FLFdBRGlCO0FBRXpDdkQsWUFBSSxNQUFLRSxLQUFMLENBQVdJLElBQVgsQ0FBZ0JOO0FBRnFCLE9BQXZCLENBQXBCOztBQUtBLFlBQUtPLFFBQUwsQ0FBYztBQUNad0UsbUJBQVc7QUFEQyxPQUFkO0FBR0QsS0F2Q2tCOztBQUFBLFVBeUNuQkMsVUF6Q21CLEdBeUNOLFlBQU07QUFDakIsWUFBS3pFLFFBQUwsQ0FBYztBQUNad0UsbUJBQVcsQ0FBQyxNQUFLM0YsS0FBTCxDQUFXMkY7QUFEWCxPQUFkO0FBR0QsS0E3Q2tCOztBQUdqQixVQUFLM0YsS0FBTCxHQUFhO0FBQ1h1RSxlQUFTLEVBREU7QUFFWEosbUJBQWFyRCxNQUFNSSxJQUFOLENBQVdpRCxXQUZiO0FBR1h3QixpQkFBVztBQUhBLEtBQWI7O0FBTUEsVUFBS0UsY0FBTCxHQUFzQjtBQUFBLGFBQU0sTUFBS0wsYUFBTCxDQUFtQnBGLEdBQUdnRixNQUFILENBQVVDLEtBQTdCLEVBQW9DLFNBQXBDLENBQU47QUFBQSxLQUF0QjtBQUNBLFVBQUtTLGtCQUFMLEdBQTBCO0FBQUEsYUFBTSxNQUFLTixhQUFMLENBQW1CcEYsR0FBR2dGLE1BQUgsQ0FBVUMsS0FBN0IsRUFBb0MsYUFBcEMsQ0FBTjtBQUFBLEtBQTFCO0FBVmlCO0FBV2xCOzs7OzZCQW9DUztBQUNSLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxxQkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFNBQU0sY0FBWDtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUscUJBQWY7QUFDQTtBQUFBO0FBQUEsZ0JBQUssU0FBTSxVQUFYO0FBQXNCLG1EQUFHLFdBQVUsWUFBYjtBQUF0QixhQURBO0FBRUU7QUFBQTtBQUFBLGdCQUFLLFdBQVUsYUFBZjtBQUNFO0FBQUE7QUFBQSxrQkFBTyxXQUFVLGFBQWpCO0FBQUE7QUFBQSxlQURGO0FBR0ksbUJBQUt2RSxLQUFMLENBQVdJLElBQVgsQ0FBZ0JpRCxXQUFoQixJQUErQixDQUFDLEtBQUtuRSxLQUFMLENBQVcyRixTQUEzQyxHQUNFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLHFCQUFmLEVBQXFDLFNBQVMsS0FBS0MsVUFBbkQ7QUFBZ0UscUJBQUs5RSxLQUFMLENBQVdJLElBQVgsQ0FBZ0JpRDtBQUFoRixlQURGLEdBRUU7QUFBQywrQkFBRDtBQUFBO0FBQVUsNERBQVUsV0FBVSxZQUFwQixFQUFpQyxVQUFVLEtBQUsyQixrQkFBaEQsRUFBb0UsYUFBWSx1QkFBaEYsRUFBd0csT0FBTyxLQUFLOUYsS0FBTCxDQUFXbUUsV0FBMUgsR0FBVjtBQUNBO0FBQUE7QUFBQSxvQkFBUSxXQUFVLGNBQWxCLEVBQWlDLFNBQVMsS0FBS3pCLGNBQS9DO0FBQUE7QUFBQTtBQURBO0FBTE47QUFGRixXQURGO0FBYUU7QUFBQTtBQUFBLGNBQUssV0FBVSx3QkFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFVBQWY7QUFBMEIsbURBQUcsV0FBVSxrQkFBYjtBQUExQixhQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFLLFdBQVUsYUFBZjtBQUNFO0FBQUE7QUFBQSxrQkFBTyxXQUFVLGFBQWpCO0FBQUE7QUFBQSxlQURGO0FBRUUsMERBQVUsV0FBVSxZQUFwQixFQUFpQyxhQUFZLGdCQUE3QyxFQUE4RCxVQUFVLEtBQUttRCxjQUE3RSxFQUE2RixPQUFPLEtBQUs3RixLQUFMLENBQVd1RSxPQUEvRyxHQUZGO0FBR0U7QUFBQTtBQUFBLGtCQUFRLFdBQVUsY0FBbEIsRUFBaUMsU0FBUyxLQUFLbUIsVUFBL0M7QUFBQTtBQUFBO0FBSEY7QUFGRjtBQWJGLFNBREY7QUF1QkksYUFBSzVFLEtBQUwsQ0FBV0ksSUFBWCxDQUFnQmtELFFBQWhCLENBQXlCbEMsTUFBekIsR0FDQTtBQUFBO0FBQUEsWUFBSyxXQUFVLHlCQUFmO0FBQ0E7QUFBQTtBQUFBLGNBQUssV0FBVSxVQUFmO0FBQTBCLGlEQUFHLFdBQVUsY0FBYjtBQUExQixXQURBO0FBRUU7QUFBQTtBQUFBLGNBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFPLFdBQVUsYUFBakI7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxlQUFmO0FBQUE7QUFBaUMsbUJBQUtwQixLQUFMLENBQVdJLElBQVgsQ0FBZ0JrRCxRQUFoQixDQUF5QjVDLEdBQXpCLENBQTZCO0FBQUEsdUJBQVc7QUFBQTtBQUFBLG9CQUFLLFdBQVUsY0FBZjtBQUErQitDO0FBQS9CLGlCQUFYO0FBQUEsZUFBN0I7QUFBakM7QUFGRjtBQUZGLFNBREEsR0FPUztBQTlCYixPQURGO0FBa0NEOzs7O0VBbkZvQjVFLGdCQUFNQyxTOztBQXNGN0IyRixTQUFTMUYsV0FBVCxHQUF1QixVQUF2Qjs7a0JBRWUsMkJBQVUwRixRQUFWLEM7Ozs7Ozs7Ozs7Ozs7O0FDNUZmOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7SUFBWXpGLE87Ozs7OztBQUVaLElBQU1pRyxXQUFZLFNBQVpBLFFBQVksQ0FBQ2pGLEtBQUQsRUFBVztBQUN6QixNQUFNMEIsYUFBYSxTQUFiQSxVQUFhLENBQUNwQyxFQUFELEVBQUtpRSxJQUFMLEVBQWM7QUFDL0JqRSxPQUFHNEYsZUFBSDtBQUNBbEYsVUFBTUMsUUFBTixDQUFlakIsUUFBUTBDLFVBQVIsQ0FBbUI2QixJQUFuQixDQUFmO0FBQ0QsR0FIRDs7QUFLQSxTQUFPO0FBQUE7QUFBQSxNQUFLLFdBQVUsZ0JBQWYsRUFBZ0MsWUFBWTtBQUFBLGVBQUt2RCxNQUFNWCxVQUFOLENBQWlCOEYsQ0FBakIsQ0FBTDtBQUFBLE9BQTVDO0FBQ0ssY0FBUTtBQUFBLGVBQUtuRixNQUFNSixNQUFOLENBQWF1RixDQUFiLEVBQWdCbkYsTUFBTVMsSUFBTixDQUFXWCxFQUEzQixDQUFMO0FBQUEsT0FEYjtBQUVQO0FBQUE7QUFBQSxRQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsWUFBZixFQUE0QixxQkFBNUIsRUFBNEMsU0FBUztBQUFBLG1CQUFLYyxRQUFRQyxHQUFSLENBQVksTUFBWixFQUFvQnNFLENBQXBCLENBQUw7QUFBQSxXQUFyRDtBQUNHbkYsY0FBTVMsSUFBTixDQUFXaEI7QUFEZCxPQURGO0FBSUUsOENBQU0sV0FBVSwyQkFBaEIsRUFBNEMsZUFBWSxNQUF4RDtBQUNNLGlCQUFTO0FBQUEsaUJBQUtPLE1BQU1DLFFBQU4sQ0FBZWpCLFFBQVF3QyxVQUFSLENBQW1CeEIsTUFBTVMsSUFBekIsQ0FBZixDQUFMO0FBQUEsU0FEZjtBQUpGLEtBRk87QUFVTFQsVUFBTVEsS0FBTixJQUFlUixNQUFNUSxLQUFOLENBQVlFLEdBQVosQ0FBZ0IsVUFBQ04sSUFBRDtBQUFBLGFBQVU7QUFBQTtBQUFBLFVBQUssV0FBVSxnQkFBZixFQUFnQyxLQUFLQSxLQUFLTixFQUExQztBQUN2Qyx5QkFEdUMsRUFDN0IsYUFBYTtBQUFBLG1CQUFLRSxNQUFNUixXQUFOLENBQWtCMkYsQ0FBbEIsRUFBcUIvRSxLQUFLTixFQUExQixDQUFMO0FBQUEsV0FEZ0IsRUFDb0IsU0FBUztBQUFBLG1CQUFLRSxNQUFNRyxXQUFOLENBQWtCQyxJQUFsQixDQUFMO0FBQUEsV0FEN0I7QUFFdENBLGFBQUtYLElBRmlDO0FBQUE7QUFFM0IsZ0RBQU0sV0FBVSwyQkFBaEIsRUFBNEMsZUFBWSxNQUF4RDtBQUNSLG1CQUFTO0FBQUEsbUJBQUtpQyxXQUFXeUQsQ0FBWCxFQUFjL0UsSUFBZCxDQUFMO0FBQUEsV0FERDtBQUYyQixPQUFWO0FBQUEsS0FBaEIsQ0FWVjtBQWdCUDtBQUFBO0FBQUEsUUFBSyxXQUFVLFVBQWY7QUFDRSxvQ0FBQyxpQkFBRCxJQUFTLFdBQVc7QUFBQSxpQkFBUUosTUFBTUMsUUFBTixDQUFlakIsUUFBUXlDLE9BQVIsQ0FBZ0IsRUFBQ3JCLFVBQUQsRUFBT1AsVUFBVUcsTUFBTVMsSUFBTixDQUFXWCxFQUE1QixFQUFoQixDQUFmLENBQVI7QUFBQSxTQUFwQjtBQUNRLHVCQUFlRSxNQUFNUSxLQUFOLElBQWVSLE1BQU1RLEtBQU4sQ0FBWVksTUFEbEQ7QUFERjtBQWhCTyxHQUFQO0FBcUJILENBM0JEOztBQTZCQTZELFNBQVNsRyxXQUFULEdBQXVCLFVBQXZCOztBQUVBLFNBQVNpQyxNQUFULENBQWlCOUIsS0FBakIsRUFBd0I7QUFDdEIsU0FBTyxFQUFQO0FBR0Q7O2tCQUVjLHlCQUFROEIsTUFBUixFQUFnQmlFLFFBQWhCLEM7Ozs7Ozs7Ozs7Ozs7O0FDMUNmOzs7Ozs7QUFFQSxJQUFNbkUsWUFBYSxTQUFiQSxTQUFhLENBQUNkLEtBQUQsRUFBVztBQUM1QixNQUFJQSxNQUFNb0YsSUFBVixFQUFnQjtBQUNkLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxlQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQU0sV0FBVSxPQUFoQjtBQUF3QixpREFBRyxXQUFVLGNBQWIsR0FBeEI7QUFBdURwRixrQkFBTXFGO0FBQTdELFdBREY7QUFFRSxrREFBTSxXQUFVLHdCQUFoQixFQUF5QyxTQUFTckYsTUFBTXNGLE9BQXhEO0FBRkYsU0FERjtBQUlFO0FBQUE7QUFBQSxZQUFLLFdBQVUsZUFBZjtBQUNHdEYsZ0JBQU11RjtBQURUO0FBSkY7QUFERixLQURGO0FBWUQsR0FiRCxNQWFPO0FBQ0wsV0FBTywwQ0FBUDtBQUNEO0FBQ0YsQ0FqQkQ7O0FBbUJBekUsVUFBVS9CLFdBQVYsR0FBd0IsV0FBeEI7O2tCQUVlK0IsUzs7Ozs7Ozs7QUN2QkY7Ozs7Ozs7O0FBRWI7Ozs7Ozs7Ozs7OztJQUVNMEUsSTs7O0FBQ0osa0JBQWU7QUFBQTs7QUFBQTs7QUFHYixVQUFLdEcsS0FBTCxHQUFhO0FBQ1h1RyxhQUFPO0FBREksS0FBYjtBQUhhO0FBTWQ7Ozs7c0NBRWtCQSxLLEVBQU87QUFDeEI3RSxjQUFRQyxHQUFSLENBQVk0RSxLQUFaO0FBQ0EsV0FBS3BGLFFBQUwsQ0FBYztBQUNab0YsZUFBTztBQURLLE9BQWQ7QUFHRDs7O3NDQUVrQjtBQUNqQixhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsb0JBQWY7QUFBQTtBQUFBLE9BREY7QUFLRDs7O3FDQUVpQkMsSyxFQUFPO0FBQ3ZCOUUsY0FBUUMsR0FBUixDQUFZNkUsTUFBTXBCLE1BQU4sQ0FBYUMsS0FBekI7QUFDQW9CLGVBQVNDLGVBQVQsQ0FBeUJDLEtBQXpCLENBQStCQyxXQUEvQixDQUEyQyxjQUEzQyxFQUEyREosTUFBTXBCLE1BQU4sQ0FBYUMsS0FBeEU7QUFDRDs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXLEtBQUt2RSxLQUFMLENBQVcrRixTQUEzQjtBQUNFO0FBQUE7QUFBQSxZQUFRLElBQUcsUUFBWDtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsS0FBZjtBQUNFLG1EQUFLLFdBQVUsV0FBZixHQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQSxrQkFBTyxTQUFRLGFBQWY7QUFBQTtBQUFBLGVBREY7QUFFRSx1REFBTyxJQUFHLGFBQVYsRUFBd0IsV0FBVSxjQUFsQyxFQUFpRCxNQUFLLE9BQXRELEVBQThELFVBQVUsS0FBS0MsZ0JBQTdFO0FBRkY7QUFGRjtBQURGLFNBREY7QUFVRTtBQUFBO0FBQUEsWUFBTSxJQUFHLE1BQVQ7QUFDRTtBQUFBO0FBQUEsY0FBSyxJQUFHLFdBQVIsRUFBb0IsV0FBVSxnQkFBOUI7QUFDRyxpQkFBSzlHLEtBQUwsQ0FBV3VHLEtBQVgsR0FDSSxLQUFLUSxlQUFMLEVBREosR0FFRyxLQUFLakcsS0FBTCxDQUFXdUY7QUFIakI7QUFERixTQVZGO0FBaUJFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsUUFBZjtBQUFBO0FBQ2U7QUFBQTtBQUFBLGdCQUFHLE1BQUsscURBQVI7QUFBQTtBQUFBLGFBRGY7QUFBQTtBQUFBO0FBREY7QUFqQkYsT0FERjtBQXlCRDs7OztFQXZEZ0IxRyxnQkFBTUMsUzs7QUEwRHpCMEcsS0FBS3pHLFdBQUwsR0FBbUIsTUFBbkI7O2tCQUVleUcsSTs7Ozs7Ozs7QUNoRWY7O0FBRWE7Ozs7Ozs7O0FBRWI7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTVUsVUFBVSw0Q0FBcUIsb0NBQXJCLEVBQTZDNUgsZUFBN0MsQ0FBaEI7QUFDQXNDLFFBQVFDLEdBQVIsQ0FBWXFGLE9BQVo7O0lBRU1DLEc7OztBQUNKLGlCQUFlO0FBQUE7O0FBQUE7QUFFZDs7Ozs2QkFFUztBQUNSLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxnQkFBZjtBQUNFO0FBQUMsOEJBQUQ7QUFBQSxZQUFVLE9BQU83SCxlQUFqQjtBQUNFO0FBQUMsa0NBQUQ7QUFBQSxjQUFRLFNBQVM0SCxPQUFqQjtBQUNFO0FBQUMsb0NBQUQ7QUFBQTtBQUNFLDRDQUFDLHFCQUFELElBQU8sV0FBUCxFQUFhLE1BQUssR0FBbEIsRUFBc0IsV0FBV2pILGNBQWpDLEdBREY7QUFFRSw0Q0FBQyxxQkFBRCxJQUFPLE1BQUssTUFBWixFQUFtQixXQUFXTCxlQUE5QixHQUZGO0FBR0UsNENBQUMscUJBQUQsSUFBTyxhQUFQLEVBQWUsV0FBV0EsZUFBMUI7QUFIRjtBQURGO0FBREY7QUFERixPQURGO0FBYUQ7Ozs7RUFuQmVDLGdCQUFNQyxTOztBQXNCeEJxSCxJQUFJcEgsV0FBSixHQUFrQixLQUFsQjs7QUFFQTtBQUNBLElBQUksT0FBT04sTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUNqQ0EsU0FBTzJILE1BQVAsR0FBZ0IsWUFBTTtBQUNwQixRQUFJcEcsUUFBUTtBQUNWaUQsWUFBTW9ELFNBQVNuRDtBQURMLEtBQVo7QUFHQW9ELHVCQUFTQyxNQUFULENBQWdCMUgsZ0JBQU0ySCxhQUFOLENBQW9CTCxHQUFwQixFQUF5Qm5HLEtBQXpCLENBQWhCLEVBQWlEMkYsU0FBU2MsY0FBVCxDQUF3QixXQUF4QixDQUFqRDtBQUNELEdBTEQ7QUFNRDs7a0JBRWNOLEciLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2VycywgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgeyByb3V0ZXJNaWRkbGV3YXJlLCByb3V0ZXJSZWR1Y2VyIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcclxuaW1wb3J0ICogYXMgcmVkdWNlcnMgZnJvbSAnLi4vcmVkdWNlcnMvaW5kZXgnO1xyXG5pbXBvcnQgZGVmYXVsdFN0YXRlIGZyb20gJy4vZGVmYXVsdFN0YXRlJztcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGFwcDogcmVkdWNlcnMuYXBwU3RhdGUsXHJcbiAgZGF0YVJlcXVlc3RzOiByZWR1Y2Vycy5kYXRhUmVxdWVzdHMsXHJcbiAgcm91dGluZzogcm91dGVyUmVkdWNlcixcclxuICBib2FyZDogY29tYmluZVJlZHVjZXJzKHtcclxuICAgIHBhbmVsczogcmVkdWNlcnMubGlzdFJlZHVjZXIsXHJcbiAgICB0YXNrczogcmVkdWNlcnMudGFza3NSZWR1Y2VyXHJcbiAgfSlcclxufSk7XHJcblxyXG5jb25zdCByb3V0aW5nTWlkZGxld2FyZSA9IHJvdXRlck1pZGRsZXdhcmUoYnJvd3Nlckhpc3RvcnkpO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBkZWZhdWx0U3RhdGUsIGNvbXBvc2UoXHJcbiAgYXBwbHlNaWRkbGV3YXJlKHRodW5rLCByb3V0aW5nTWlkZGxld2FyZSksXHJcbiAgd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uID8gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uKCkgOiBmID0+IGZcclxuKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3N0b3Jlcy9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBFcnJvcjQwNCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImVycm9yLWhlYWRpbmdcIj40MDQgLSBNaXNzaW5nIFJlc291cmNlIDwvaDI+XHJcbiAgICAgICAgPHA+UGxlYXNlIHRyeSBhZ2FpbiwgYnV0IGlmIHRoZSBwcm9ibGVtIHBlcnNpc3QsIGNvbnRhY3QgYW4gYWRtaW5pc3RyYXRvci48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkVycm9yNDA0LmRpc3BsYXlOYW1lID0gJ0Vycm9yNDA0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yNDA0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdmlld3MvcGFnZXMvZXJyb3I0MDQuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2UnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2xpc3QnO1xyXG5pbXBvcnQgQWRkTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2FkZExpc3QnO1xyXG5pbXBvcnQgVmlld01vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwnO1xyXG5pbXBvcnQgRWRpdEl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9lZGl0SXRlbSc7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGFjdGl2ZUl0ZW06IHt9LFxyXG4gICAgc2hvd01vZGFsOiBmYWxzZVxyXG4gIH07XHJcblxyXG4gIG9uRHJhZ092ZXIgPSBldiA9PiB7XHJcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH07XHJcblxyXG4gIG9uRHJhZ1N0YXJ0ID0gKGV2LCBuYW1lKSA9PiB7XHJcbiAgICBldi5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImlkXCIsIG5hbWUpO1xyXG4gIH07XHJcblxyXG4gIG9uRHJvcCA9IChldiwgY2F0ZWdvcnkpID0+IHtcclxuICAgIGNvbnN0IGlkID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJpZFwiKTtcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9ucy5tb3ZlQ2FyZCh7aWQsIGNhdGVnb3J5fSkpO1xyXG4gIH07XHJcblxyXG4gIG9uSXRlbUNsaWNrID0gKGl0ZW0pID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBhY3RpdmVJdGVtOiBpdGVtLFxyXG4gICAgICBzaG93TW9kYWw6IHRydWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Nb2RhbENsb3NlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3dNb2RhbDogZmFsc2VcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyTGlzdCA9IChjYXJkcykgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMubGlzdC5tYXAoKGxpc3QsIGluZGV4KSA9PiBcclxuICAgICAgPExpc3QgY2FyZHM9e2NhcmRzW2xpc3QuaWRdfSBsaXN0PXtsaXN0fSBvbkRyb3A9e3RoaXMub25Ecm9wfSBcclxuICAgICAgICAgICAgb25EcmFnT3Zlcj17dGhpcy5vbkRyYWdPdmVyfSBrZXk9e2luZGV4fSBcclxuICAgICAgICAgICAgb25EcmFnU3RhcnQ9e3RoaXMub25EcmFnU3RhcnR9IG9uSXRlbUNsaWNrPXt0aGlzLm9uSXRlbUNsaWNrfS8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnNvbGUubG9nKFZpZXdNb2RhbCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UGFnZSBjbGFzc05hbWU9XCJob21lLXBhZ2VcIiBoZWFkZXI9XCJUcmVsbG9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAge3RoaXMucmVuZGVyTGlzdCh0aGlzLnByb3BzLmNhcmRzKX1cclxuICAgICAgICAgIDxBZGRMaXN0IGhhc0FjdGl2ZUxpc3Q9e3RoaXMucHJvcHMuaGFzQWN0aXZlTGlzdH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Vmlld01vZGFsIHNob3c9e3RoaXMuc3RhdGUuc2hvd01vZGFsfSB0aXRsZT1cIlZpZXcgQ2FyZFwiIG9uQ2xvc2U9e3RoaXMub25Nb2RhbENsb3NlfT5cclxuICAgICAgICAgIDxFZGl0SXRlbSBpdGVtPXt0aGlzLnN0YXRlLmFjdGl2ZUl0ZW19IC8+XHJcbiAgICAgICAgPC9WaWV3TW9kYWw+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5Ib21lLmRpc3BsYXlOYW1lID0gJ0hvbWUnO1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0IChzdGF0ZSkge1xyXG4gIGxldCBjYXJkcyA9IHt9O1xyXG4gIHN0YXRlLmJvYXJkLnRhc2tzLmNhcmRzLmZvckVhY2godCA9PiB7XHJcbiAgICBjYXJkc1t0LmNhdGVnb3J5XSA9IGNhcmRzW3QuY2F0ZWdvcnldIHx8IFtdOyBcclxuICAgIGNhcmRzW3QuY2F0ZWdvcnldLnB1c2godCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBsaXN0OiBzdGF0ZS5ib2FyZC5wYW5lbHMubGlzdCxcclxuICAgIGNhcmRzOiBjYXJkcyxcclxuICAgIGhhc0FjdGl2ZUxpc3Q6IHN0YXRlLmJvYXJkLnBhbmVscy5saXN0Lmxlbmd0aCA+IDBcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHNlbGVjdCkoSG9tZSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi92aWV3cy9wYWdlcy9ob21lLmpzIiwiaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlciwgX19Sb3V0ZXJDb250ZXh0LCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5leHBvcnQgKiBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnksIGNyZWF0ZUhhc2hIaXN0b3J5LCBjcmVhdGVMb2NhdGlvbiB9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3Rpbnktd2FybmluZyc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSc7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ3RpbnktaW52YXJpYW50JztcblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgYSA8Um91dGVyPiB0aGF0IHVzZXMgSFRNTDUgaGlzdG9yeS5cbiAqL1xuXG52YXIgQnJvd3NlclJvdXRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShCcm93c2VyUm91dGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBCcm93c2VyUm91dGVyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgIF90aGlzLmhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeShfdGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEJyb3dzZXJSb3V0ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgICBoaXN0b3J5OiB0aGlzLmhpc3RvcnksXG4gICAgICBjaGlsZHJlbjogdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBCcm93c2VyUm91dGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEJyb3dzZXJSb3V0ZXIucHJvcFR5cGVzID0ge1xuICAgIGJhc2VuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBmb3JjZVJlZnJlc2g6IFByb3BUeXBlcy5ib29sLFxuICAgIGdldFVzZXJDb25maXJtYXRpb246IFByb3BUeXBlcy5mdW5jLFxuICAgIGtleUxlbmd0aDogUHJvcFR5cGVzLm51bWJlclxuICB9O1xuXG4gIEJyb3dzZXJSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoIXRoaXMucHJvcHMuaGlzdG9yeSwgXCI8QnJvd3NlclJvdXRlcj4gaWdub3JlcyB0aGUgaGlzdG9yeSBwcm9wLiBUbyB1c2UgYSBjdXN0b20gaGlzdG9yeSwgXCIgKyBcInVzZSBgaW1wb3J0IHsgUm91dGVyIH1gIGluc3RlYWQgb2YgYGltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH1gLlwiKSA6IHZvaWQgMDtcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgYSA8Um91dGVyPiB0aGF0IHVzZXMgd2luZG93LmxvY2F0aW9uLmhhc2guXG4gKi9cblxudmFyIEhhc2hSb3V0ZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoSGFzaFJvdXRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSGFzaFJvdXRlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcbiAgICBfdGhpcy5oaXN0b3J5ID0gY3JlYXRlSGFzaEhpc3RvcnkoX3RoaXMucHJvcHMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBIYXNoUm91dGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgICAgaGlzdG9yeTogdGhpcy5oaXN0b3J5LFxuICAgICAgY2hpbGRyZW46IHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gSGFzaFJvdXRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBIYXNoUm91dGVyLnByb3BUeXBlcyA9IHtcbiAgICBiYXNlbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgZ2V0VXNlckNvbmZpcm1hdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaGFzaFR5cGU6IFByb3BUeXBlcy5vbmVPZihbXCJoYXNoYmFuZ1wiLCBcIm5vc2xhc2hcIiwgXCJzbGFzaFwiXSlcbiAgfTtcblxuICBIYXNoUm91dGVyLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCF0aGlzLnByb3BzLmhpc3RvcnksIFwiPEhhc2hSb3V0ZXI+IGlnbm9yZXMgdGhlIGhpc3RvcnkgcHJvcC4gVG8gdXNlIGEgY3VzdG9tIGhpc3RvcnksIFwiICsgXCJ1c2UgYGltcG9ydCB7IFJvdXRlciB9YCBpbnN0ZWFkIG9mIGBpbXBvcnQgeyBIYXNoUm91dGVyIGFzIFJvdXRlciB9YC5cIikgOiB2b2lkIDA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICByZXR1cm4gISEoZXZlbnQubWV0YUtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSk7XG59XG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciByZW5kZXJpbmcgYSBoaXN0b3J5LWF3YXJlIDxhPi5cbiAqL1xuXG5cbnZhciBMaW5rID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKExpbmssIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIExpbmsoKSB7XG4gICAgcmV0dXJuIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IExpbmsucHJvdG90eXBlO1xuXG4gIF9wcm90by5oYW5kbGVDbGljayA9IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50LCBoaXN0b3J5KSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljaykgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcblxuICAgIGlmICghZXZlbnQuZGVmYXVsdFByZXZlbnRlZCAmJiAvLyBvbkNsaWNrIHByZXZlbnRlZCBkZWZhdWx0XG4gICAgZXZlbnQuYnV0dG9uID09PSAwICYmICggLy8gaWdub3JlIGV2ZXJ5dGhpbmcgYnV0IGxlZnQgY2xpY2tzXG4gICAgIXRoaXMucHJvcHMudGFyZ2V0IHx8IHRoaXMucHJvcHMudGFyZ2V0ID09PSBcIl9zZWxmXCIpICYmIC8vIGxldCBicm93c2VyIGhhbmRsZSBcInRhcmdldD1fYmxhbmtcIiBldGMuXG4gICAgIWlzTW9kaWZpZWRFdmVudChldmVudCkgLy8gaWdub3JlIGNsaWNrcyB3aXRoIG1vZGlmaWVyIGtleXNcbiAgICApIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIG1ldGhvZCA9IHRoaXMucHJvcHMucmVwbGFjZSA/IGhpc3RvcnkucmVwbGFjZSA6IGhpc3RvcnkucHVzaDtcbiAgICAgICAgbWV0aG9kKHRoaXMucHJvcHMudG8pO1xuICAgICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGlubmVyUmVmID0gX3RoaXMkcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgIHJlcGxhY2UgPSBfdGhpcyRwcm9wcy5yZXBsYWNlLFxuICAgICAgICB0byA9IF90aGlzJHByb3BzLnRvLFxuICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImlubmVyUmVmXCIsIFwicmVwbGFjZVwiLCBcInRvXCJdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfX1JvdXRlckNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAhY29udGV4dCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJZb3Ugc2hvdWxkIG5vdCB1c2UgPExpbms+IG91dHNpZGUgYSA8Um91dGVyPlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICB2YXIgbG9jYXRpb24gPSB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyBjcmVhdGVMb2NhdGlvbih0bywgbnVsbCwgbnVsbCwgY29udGV4dC5sb2NhdGlvbikgOiB0bztcbiAgICAgIHZhciBocmVmID0gbG9jYXRpb24gPyBjb250ZXh0Lmhpc3RvcnkuY3JlYXRlSHJlZihsb2NhdGlvbikgOiBcIlwiO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuaGFuZGxlQ2xpY2soZXZlbnQsIGNvbnRleHQuaGlzdG9yeSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgIHJlZjogaW5uZXJSZWZcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gTGluaztcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICB2YXIgdG9UeXBlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pO1xuICB2YXIgaW5uZXJSZWZUeXBlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY3VycmVudDogUHJvcFR5cGVzLmFueVxuICB9KV0pO1xuICBMaW5rLnByb3BUeXBlcyA9IHtcbiAgICBpbm5lclJlZjogaW5uZXJSZWZUeXBlLFxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHRhcmdldDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0bzogdG9UeXBlLmlzUmVxdWlyZWRcbiAgfTtcbn1cblxuZnVuY3Rpb24gam9pbkNsYXNzbmFtZXMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBjbGFzc25hbWVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGNsYXNzbmFtZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gY2xhc3NuYW1lcy5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gaTtcbiAgfSkuam9pbihcIiBcIik7XG59XG4vKipcbiAqIEEgPExpbms+IHdyYXBwZXIgdGhhdCBrbm93cyBpZiBpdCdzIFwiYWN0aXZlXCIgb3Igbm90LlxuICovXG5cblxuZnVuY3Rpb24gTmF2TGluayhfcmVmKSB7XG4gIHZhciBfcmVmJGFyaWFDdXJyZW50ID0gX3JlZltcImFyaWEtY3VycmVudFwiXSxcbiAgICAgIGFyaWFDdXJyZW50ID0gX3JlZiRhcmlhQ3VycmVudCA9PT0gdm9pZCAwID8gXCJwYWdlXCIgOiBfcmVmJGFyaWFDdXJyZW50LFxuICAgICAgX3JlZiRhY3RpdmVDbGFzc05hbWUgPSBfcmVmLmFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF9yZWYkYWN0aXZlQ2xhc3NOYW1lID09PSB2b2lkIDAgPyBcImFjdGl2ZVwiIDogX3JlZiRhY3RpdmVDbGFzc05hbWUsXG4gICAgICBhY3RpdmVTdHlsZSA9IF9yZWYuYWN0aXZlU3R5bGUsXG4gICAgICBjbGFzc05hbWVQcm9wID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBleGFjdCA9IF9yZWYuZXhhY3QsXG4gICAgICBpc0FjdGl2ZVByb3AgPSBfcmVmLmlzQWN0aXZlLFxuICAgICAgbG9jYXRpb24gPSBfcmVmLmxvY2F0aW9uLFxuICAgICAgc3RyaWN0ID0gX3JlZi5zdHJpY3QsXG4gICAgICBzdHlsZVByb3AgPSBfcmVmLnN0eWxlLFxuICAgICAgdG8gPSBfcmVmLnRvLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcImFyaWEtY3VycmVudFwiLCBcImFjdGl2ZUNsYXNzTmFtZVwiLCBcImFjdGl2ZVN0eWxlXCIsIFwiY2xhc3NOYW1lXCIsIFwiZXhhY3RcIiwgXCJpc0FjdGl2ZVwiLCBcImxvY2F0aW9uXCIsIFwic3RyaWN0XCIsIFwic3R5bGVcIiwgXCJ0b1wiXSk7XG5cbiAgdmFyIHBhdGggPSB0eXBlb2YgdG8gPT09IFwib2JqZWN0XCIgPyB0by5wYXRobmFtZSA6IHRvOyAvLyBSZWdleCB0YWtlbiBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vcGlsbGFyanMvcGF0aC10by1yZWdleHAvYmxvYi9tYXN0ZXIvaW5kZXguanMjTDIwMlxuXG4gIHZhciBlc2NhcGVkUGF0aCA9IHBhdGggJiYgcGF0aC5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7XG4gICAgcGF0aDogZXNjYXBlZFBhdGgsXG4gICAgZXhhY3Q6IGV4YWN0LFxuICAgIHN0cmljdDogc3RyaWN0LFxuICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICBjaGlsZHJlbjogZnVuY3Rpb24gY2hpbGRyZW4oX3JlZjIpIHtcbiAgICAgIHZhciBsb2NhdGlvbiA9IF9yZWYyLmxvY2F0aW9uLFxuICAgICAgICAgIG1hdGNoID0gX3JlZjIubWF0Y2g7XG4gICAgICB2YXIgaXNBY3RpdmUgPSAhIShpc0FjdGl2ZVByb3AgPyBpc0FjdGl2ZVByb3AobWF0Y2gsIGxvY2F0aW9uKSA6IG1hdGNoKTtcbiAgICAgIHZhciBjbGFzc05hbWUgPSBpc0FjdGl2ZSA/IGpvaW5DbGFzc25hbWVzKGNsYXNzTmFtZVByb3AsIGFjdGl2ZUNsYXNzTmFtZSkgOiBjbGFzc05hbWVQcm9wO1xuICAgICAgdmFyIHN0eWxlID0gaXNBY3RpdmUgPyBfZXh0ZW5kcyh7fSwgc3R5bGVQcm9wLCBhY3RpdmVTdHlsZSkgOiBzdHlsZVByb3A7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCBfZXh0ZW5kcyh7XG4gICAgICAgIFwiYXJpYS1jdXJyZW50XCI6IGlzQWN0aXZlICYmIGFyaWFDdXJyZW50IHx8IG51bGwsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIHRvOiB0b1xuICAgICAgfSwgcmVzdCkpO1xuICAgIH1cbiAgfSk7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgdmFyIGFyaWFDdXJyZW50VHlwZSA9IFByb3BUeXBlcy5vbmVPZihbXCJwYWdlXCIsIFwic3RlcFwiLCBcImxvY2F0aW9uXCIsIFwiZGF0ZVwiLCBcInRpbWVcIiwgXCJ0cnVlXCJdKTtcbiAgTmF2TGluay5wcm9wVHlwZXMgPSBfZXh0ZW5kcyh7fSwgTGluay5wcm9wVHlwZXMsIHtcbiAgICBcImFyaWEtY3VycmVudFwiOiBhcmlhQ3VycmVudFR5cGUsXG4gICAgYWN0aXZlQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjdGl2ZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBleGFjdDogUm91dGUucHJvcFR5cGVzLmV4YWN0LFxuICAgIGlzQWN0aXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzdHJpY3Q6IFJvdXRlLnByb3BUeXBlcy5zdHJpY3QsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3RcbiAgfSk7XG59XG5cbmV4cG9ydCB7IEJyb3dzZXJSb3V0ZXIsIEhhc2hSb3V0ZXIsIExpbmssIE5hdkxpbmsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1yb3V0ZXItZG9tL2VzbS9yZWFjdC1yb3V0ZXItZG9tLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVGhpcyBwcm92aWRlcyB0aGUgdmFyaW91cyByZWR1eCBhY3Rpb25zIHRvIHRyaWdnZXIgYXBwIHN0YXRlIGNoYW5nZXMgYnkgdGhlIHJlZHV4IHJlZHVjZXJcclxuICogQG1vZHVsZSBSZWR1eCBhY3Rpb25zXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQ0FUSU9OX0NIQU5HRSA9ICdAQHJvdXRlci9MT0NBVElPTl9DSEFOR0UnO1xyXG5leHBvcnQgY29uc3QgRkVUQ0hJTkdfUEFHRURBVEEgPSAnRkVUQ0hJTkdfUEFHRURBVEEnO1xyXG5leHBvcnQgY29uc3QgQ1JFQVRFX0xJU1QgPSAnQ1JFQVRFX0xJU1QnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX0xJU1QgPSAnREVMRVRFX0xJU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NBUkQgPSAnQUREX0NBUkQnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRTID0gJ0FERF9DT01NRU5UUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfREVTQ1JJUFRJT04gPSAnQUREX0RFU0NSSVBUSU9OJztcclxuZXhwb3J0IGNvbnN0IE1PVkVfQ0FSRCA9ICdNT1ZFX0NBUkQnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX0NBUkQgPSAnREVMRVRFX0NBUkQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoaW5nUGFnZURhdGEgKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBGRVRDSElOR19QQUdFREFUQVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBhZ2VEYXRhICgpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XHJcbiAgICBkaXNwYXRjaChmZXRjaGluZ1BhZ2VEYXRhKCkpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBTRVRfUEFHRURBVEEsXHJcbiAgICAgIHBheWxvYWQ6IFwibWVzc2FnZVwiXHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGlzdCAoZGF0YSkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcclxuICAgIGRpc3BhdGNoKGZldGNoaW5nUGFnZURhdGEoKSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IENSRUFURV9MSVNULFxyXG4gICAgICBwYXlsb2FkOiBkYXRhXHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlTGlzdCAoZGF0YSkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcclxuICAgIGRpc3BhdGNoKGZldGNoaW5nUGFnZURhdGEoKSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IERFTEVURV9MSVNULFxyXG4gICAgICBwYXlsb2FkOiBkYXRhXHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2FyZCAoZGF0YSkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcclxuICAgIGRpc3BhdGNoKGZldGNoaW5nUGFnZURhdGEoKSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFERF9DQVJELFxyXG4gICAgICBwYXlsb2FkOiBkYXRhXHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW92ZUNhcmQgKGRhdGEpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XHJcbiAgICBkaXNwYXRjaChmZXRjaGluZ1BhZ2VEYXRhKCkpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBNT1ZFX0NBUkQsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGFcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVDYXJkIChkYXRhKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hpbmdQYWdlRGF0YSgpKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogREVMRVRFX0NBUkQsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGFcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDb21tZW50cyAoZGF0YSkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcclxuICAgIGRpc3BhdGNoKGZldGNoaW5nUGFnZURhdGEoKSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UUyxcclxuICAgICAgcGF5bG9hZDogZGF0YVxyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZERlc2NyaXB0aW9uIChkYXRhKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hpbmdQYWdlRGF0YSgpKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQUREX0RFU0NSSVBUSU9OLFxyXG4gICAgICBwYXlsb2FkOiBkYXRhXHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvYWN0aW9ucy9pbmRleC5qcyIsImltcG9ydCAqIGFzIGFjdGlvbkV2ZW50cyBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBTdGF0ZSAoc3RhdGUsIGFjdGlvbikge1xyXG4gIGxldCBhY3Rpb25UeXBlID0gYWN0aW9uLnR5cGUsXHJcbiAgICAgIG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xyXG5cclxuICBpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9uRXZlbnRzLkxPQ0FUSU9OX0NIQU5HRSkge1xyXG4gICAgbmV3U3RhdGUuY3VycmVudC5wYXRoID0gYWN0aW9uLnBheWxvYWQucGF0aG5hbWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3U3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaXN0UmVkdWNlciAoc3RhdGUsIGFjdGlvbikge1xyXG4gIGxldCBhY3Rpb25UeXBlID0gYWN0aW9uLnR5cGUsXHJcbiAgICAgIG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xyXG5cclxuICBpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9uRXZlbnRzLkNSRUFURV9MSVNUKSB7XHJcbiAgICBuZXdTdGF0ZS5saXN0LnB1c2goe1xyXG4gICAgICBpZDogbmV3U3RhdGUuY291bnRlciArIDEsXHJcbiAgICAgIG5hbWU6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICB9KTtcclxuICAgIG5ld1N0YXRlLmNvdW50ZXIgKz0gMTtcclxuICB9IGVsc2UgaWYgKGFjdGlvblR5cGUgPT09IGFjdGlvbkV2ZW50cy5ERUxFVEVfTElTVCkge1xyXG4gICAgbmV3U3RhdGUubGlzdCA9IHN0YXRlLmxpc3QuZmlsdGVyKGxpc3QgPT4gbGlzdC5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ld1N0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGFza3NSZWR1Y2VyIChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgbGV0IGFjdGlvblR5cGUgPSBhY3Rpb24udHlwZSxcclxuICAgICAgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XHJcblxyXG4gIGlmIChhY3Rpb25UeXBlID09PSBhY3Rpb25FdmVudHMuQUREX0NBUkQpIHtcclxuICAgIG5ld1N0YXRlLmNhcmRzLnB1c2goe1xyXG4gICAgICBpZDogbmV3U3RhdGUuY291bnRlciArIDEsXHJcbiAgICAgIG5hbWU6IGFjdGlvbi5wYXlsb2FkLml0ZW0sXHJcbiAgICAgIGNhdGVnb3J5OiBhY3Rpb24ucGF5bG9hZC5jYXRlZ29yeSxcclxuICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICBjb21tZW50czogW11cclxuICAgIH0pO1xyXG4gICAgbmV3U3RhdGUuY291bnRlciArPSAxO1xyXG4gIH0gZWxzZSBpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9uRXZlbnRzLk1PVkVfQ0FSRCkge1xyXG4gICAgbmV3U3RhdGUuY2FyZHMgPSBzdGF0ZS5jYXJkcy5tYXAoY2FyZCA9PiB7XHJcbiAgICAgIGlmIChjYXJkLmlkID09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XHJcbiAgICAgICAgY2FyZC5jYXRlZ29yeSA9IGFjdGlvbi5wYXlsb2FkLmNhdGVnb3J5O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjYXJkO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmIChhY3Rpb25UeXBlID09PSBhY3Rpb25FdmVudHMuREVMRVRFX0xJU1QpIHtcclxuICAgIG5ld1N0YXRlLmNhcmRzID0gc3RhdGUuY2FyZHMuZmlsdGVyKGNhcmQgPT4gY2FyZC5jYXRlZ29yeSAhPT0gYWN0aW9uLnBheWxvYWQuaWQpO1xyXG4gIH0gZWxzZSBpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9uRXZlbnRzLkFERF9DT01NRU5UUykge1xyXG4gICAgbmV3U3RhdGUuY2FyZHNbbmV3U3RhdGUuY2FyZHMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpXS5jb21tZW50cy5wdXNoKGFjdGlvbi5wYXlsb2FkLmNvbW1lbnQpXHJcbiAgfSBlbHNlIGlmIChhY3Rpb25UeXBlID09PSBhY3Rpb25FdmVudHMuQUREX0RFU0NSSVBUSU9OKSB7XHJcbiAgICBuZXdTdGF0ZS5jYXJkc1tuZXdTdGF0ZS5jYXJkcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCldLmRlc2NyaXB0aW9uID0gYWN0aW9uLnBheWxvYWQuZGVzY3JpcHRpb247XHJcbiAgfSBlbHNlIGlmIChhY3Rpb25UeXBlID09PSBhY3Rpb25FdmVudHMuREVMRVRFX0NBUkQpIHtcclxuICAgIG5ld1N0YXRlLmNhcmRzLnNwbGljZShuZXdTdGF0ZS5jYXJkcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCksIDEpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3U3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXRhUmVxdWVzdHMgKHN0YXRlLCBhY3Rpb24pIHtcclxuICBsZXQgYWN0aW9uVHlwZSA9IGFjdGlvbi50eXBlLFxyXG4gICAgICBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcclxuXHJcbiAgaWYgKGFjdGlvblR5cGUgPT09IGFjdGlvbkV2ZW50cy5TRVRUSU5HX1BBR0VEQVRBKSB7XHJcbiAgICBuZXdTdGF0ZS5zZXR0aW5ncyA9IHRydWU7XHJcbiAgfSBlbHNlIGlmIChhY3Rpb25UeXBlID09PSBhY3Rpb25FdmVudHMuU0VUX1BBR0VEQVRBKSB7XHJcbiAgICBuZXdTdGF0ZS5zZXR0aW5ncyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ld1N0YXRlO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9yZWR1Y2Vycy9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBzdGF0ZSA9IHtcclxuICBhcHA6IHtcclxuICAgIGN1cnJlbnQ6IHtcclxuICAgICAgcGF0aDogJy8nLFxyXG4gICAgICBwYWdlVGl0bGU6ICdUcmVsbG8nXHJcbiAgICB9XHJcbiAgfSxcclxuICBib2FyZDoge1xyXG4gICAgcGFuZWxzOiB7XHJcbiAgICAgIGxpc3Q6IFt7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICBuYW1lOiAndG9kbydcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBpZDogMixcclxuICAgICAgICAgIG5hbWU6ICd3b3JraW5nJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBuYW1lOiAnY29tcGxldGUnXHJcbiAgICAgIH1dLFxyXG4gICAgICBjb3VudGVyOiAzXHJcbiAgICB9LFxyXG4gICAgdGFza3M6IHtcclxuICAgICAgY2FyZHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgIG5hbWU6IFwiQWRkIE1vcmUgVGFza3NcIixcclxuICAgICAgICAgIGNhdGVnb3J5OiAxLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgICBjb21tZW50czogW1xyXG4gICAgICAgICAgICBcIlRlc3QgQ29tbWVudCAxXCIsXHJcbiAgICAgICAgICAgIFwiVGVzdCBDb21tZW50IDJcIlxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgY291bnRlcjogMVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0YXRlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvc3RvcmVzL2RlZmF1bHRTdGF0ZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcblxyXG5jbGFzcyBBZGRJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0c2hvd0FkZEJveDogZmFsc2UsXHJcblx0XHRcdGlucHV0VmFsdWU6ICcnXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzaG93QWRkTGluayA9ICgpID0+IHtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaG93QWRkQm94OiB0cnVlXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIFxyXG5cdGhpZGVBZGRMaW5rID0gKCkgPT4ge1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3dBZGRCb3g6IGZhbHNlXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIFxyXG4gIG9uU2F2ZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSAhPT0gJycpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkl0ZW1BZGQodGhpcy5zdGF0ZS5pbnB1dFZhbHVlKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaW5wdXRWYWx1ZTogJycsXHJcbiAgICAgICAgc2hvd0FkZEJveDogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbklucHV0Q2hhbmdlID0gZXYgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlucHV0VmFsdWU6IGV2LnRhcmdldC52YWx1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHRyZW5kZXIgKCkge1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFkZC1pdGVtXCIgPlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuc3RhdGUuc2hvd0FkZEJveFxyXG5cdFx0XHRcdFx0PyA8ZGl2IGNsYXNzTmFtZT1cImFkZC1saXN0LXNlY3Rpb25cIj5cclxuXHRcdFx0XHRcdFx0ICA8dGV4dGFyZWEgYXV0b0ZvY3VzIGNsYXNzTmFtZT1cImxpc3QtaW5wdXRcIiBvbkNoYW5nZT17dGhpcy5vbklucHV0Q2hhbmdlfSBwbGFjZWhvbGRlcj1cIkVudGVyIGEgdGl0bGUgZm9yIHRoaXMgY2FyZC4uLlwiIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfS8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNhdmVcIiBvbkNsaWNrPXt0aGlzLm9uU2F2ZUNsaWNrfT5BZGQgQ2FyZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlc2V0LWxpbmsgZmEgZmEtdGltZXNcIiBvbkNsaWNrPXt0aGlzLmhpZGVBZGRMaW5rfT48L3NwYW4+XHJcblx0XHRcdFx0XHQgIDwvZGl2PlxyXG4gICAgICAgICAgOiA8YSBjbGFzc05hbWU9XCJhZGQtY2FyZC1saW5rXCIgb25DbGljaz17dGhpcy5zaG93QWRkTGlua30+IFxyXG4gICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5oYXNBY3RpdmVMaXN0ID8gJysgQWRkIEFub3RoZXIgQ2FyZCcgOiAnKyBBZGQgQ2FyZCcgfVxyXG4gICAgICAgICAgICA8L2E+XHJcblx0XHRcdFx0fVxyXG5cdFx0PC9kaXY+KTtcclxuXHR9XHJcbn07XHJcblxyXG5BZGRJdGVtLmRpc3BsYXlOYW1lID0gJ0FkZEl0ZW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkSXRlbTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdmlld3MvY29tcG9uZW50cy9hZGRJdGVtLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuXHJcbmNsYXNzIEFkZExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKCk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRzaG93QWRkQm94OiBmYWxzZSxcclxuXHRcdFx0aW5wdXRWYWx1ZTogJydcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNob3dBZGRMaW5rID0gKCkgPT4ge1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3dBZGRCb3g6IHRydWVcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgXHJcblx0aGlkZUFkZExpbmsgPSAoKSA9PiB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd0FkZEJveDogZmFsc2VcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgXHJcbiAgb25TYXZlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5pbnB1dFZhbHVlICE9PSAnJykge1xyXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbnMuY3JlYXRlTGlzdCh0aGlzLnN0YXRlLmlucHV0VmFsdWUpKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaW5wdXRWYWx1ZTogJycsXHJcbiAgICAgICAgc2hvd0FkZEJveDogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbklucHV0Q2hhbmdlID0gZXYgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlucHV0VmFsdWU6IGV2LnRhcmdldC52YWx1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHRyZW5kZXIgKCkge1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFkZC1saXN0XCIgPlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuc3RhdGUuc2hvd0FkZEJveFxyXG5cdFx0XHRcdFx0PyA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdCAgPGlucHV0IGF1dG9Gb2N1cyBjbGFzc05hbWU9XCJsaXN0LWlucHV0XCIgcGxhY2Vob2xkZXI9XCJBZGQgYSBsaXN0Li4uXCIgb25DaGFuZ2U9e3RoaXMub25JbnB1dENoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9Lz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2F2ZVwiIG9uQ2xpY2s9e3RoaXMub25TYXZlQ2xpY2t9PkFkZCBMaXN0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVzZXQtbGluayBmYSBmYS10aW1lc1wiIG9uQ2xpY2s9e3RoaXMuaGlkZUFkZExpbmt9Pjwvc3Bhbj5cclxuXHRcdFx0XHRcdCAgPC9kaXY+XHJcbiAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPVwiYWRkLWxpc3QtbGlua1wiIG9uQ2xpY2s9e3RoaXMuc2hvd0FkZExpbmt9PiBcclxuICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuaGFzQWN0aXZlTGlzdCA/ICcrIEFkZCBBbm90aGVyIExpc3QnIDogJysgQWRkIEEgTGlzdCcgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHR9XHJcblx0XHQ8L2Rpdj4pO1xyXG5cdH1cclxufTtcclxuXHJcbkFkZExpc3QuZGlzcGxheU5hbWUgPSAnQWRkTGlzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoQWRkTGlzdCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3ZpZXdzL2NvbXBvbmVudHMvYWRkTGlzdC5qcyIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuXHJcbmNsYXNzIEVkaXRJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNvbW1lbnQ6ICcnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcHJvcHMuaXRlbS5kZXNjcmlwdGlvbixcclxuICAgICAgYWxsb3dFZGl0OiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29tbWVudEhhbmRsZXIgPSBldiA9PiB0aGlzLmNoYW5nZUhhbmRsZXIoZXYudGFyZ2V0LnZhbHVlLCAnY29tbWVudCcpO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbkhhbmRsZXIgPSBldiA9PiB0aGlzLmNoYW5nZUhhbmRsZXIoZXYudGFyZ2V0LnZhbHVlLCAnZGVzY3JpcHRpb24nKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUhhbmRsZXIgPSAodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgbGV0IHN0YXRlID0ge307XHJcbiAgICBzdGF0ZVtrZXldID0gdmFsdWU7XHJcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcclxuICB9XHJcblxyXG4gIGFkZENvbW1lbnQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbnMuYWRkQ29tbWVudHMoe1xyXG4gICAgICBjb21tZW50OiB0aGlzLnN0YXRlLmNvbW1lbnQsXHJcbiAgICAgIGlkOiB0aGlzLnByb3BzLml0ZW0uaWRcclxuICAgIH0pKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY29tbWVudDogJydcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkRGVzY3JpcHRpb24gPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbnMuYWRkRGVzY3JpcHRpb24oe1xyXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5zdGF0ZS5kZXNjcmlwdGlvbixcclxuICAgICAgaWQ6IHRoaXMucHJvcHMuaXRlbS5pZFxyXG4gICAgfSkpO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBhbGxvd0VkaXQ6IGZhbHNlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUVkaXQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgYWxsb3dFZGl0OiAhdGhpcy5zdGF0ZS5hbGxvd0VkaXRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdC1pdGVtLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LXNlY3Rpb25cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImljb24tYm94XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJveFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpbnB1dC1sYWJlbFwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLml0ZW0uZGVzY3JpcHRpb24gJiYgIXRoaXMuc3RhdGUuYWxsb3dFZGl0XHJcbiAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tY29udGVudFwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRWRpdH0+e3RoaXMucHJvcHMuaXRlbS5kZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDogPEZyYWdtZW50Pjx0ZXh0YXJlYSBjbGFzc05hbWU9XCJsaXN0LWlucHV0XCIgb25DaGFuZ2U9e3RoaXMuZGVzY3JpcHRpb25IYW5kbGVyfSBwbGFjZWhvbGRlcj1cIkVudGVyIGRlc2NyaXB0aW9uLi4uIFwiIHZhbHVlPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufSA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNhdmVcIiBvbkNsaWNrPXt0aGlzLmFkZERlc2NyaXB0aW9ufT5TYXZlPC9idXR0b24+PC9GcmFnbWVudD5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gY29tbWVudHMtaW5wdXRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWJveFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNvbW1lbnRzLW9cIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ib3hcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaW5wdXQtbGFiZWxcIj5Db21tZW50czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImxpc3QtaW5wdXRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGNvbW1lbnQgXCIgb25DaGFuZ2U9e3RoaXMuY29tbWVudEhhbmRsZXJ9IHZhbHVlPXt0aGlzLnN0YXRlLmNvbW1lbnR9PjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNhdmVcIiBvbkNsaWNrPXt0aGlzLmFkZENvbW1lbnR9PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7IHRoaXMucHJvcHMuaXRlbS5jb21tZW50cy5sZW5ndGggPyBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBjb21tZW50cy1yZW5kZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ib3hcIj48aSBjbGFzc05hbWU9XCJmYSBmYS10cmVsbG9cIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ib3hcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaW5wdXQtbGFiZWxcIj5BY3Rpdml0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50cy1saXN0XCI+IHt0aGlzLnByb3BzLml0ZW0uY29tbWVudHMubWFwKGNvbW1lbnQgPT4gPGRpdiBjbGFzc05hbWU9XCJjb21tZW50LWl0ZW1cIj57Y29tbWVudH08L2Rpdj4pfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PiA6IG51bGwgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbkVkaXRJdGVtLmRpc3BsYXlOYW1lID0gJ0VkaXRJdGVtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShFZGl0SXRlbSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi92aWV3cy9jb21wb25lbnRzL2VkaXRJdGVtLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFkZEl0ZW0gZnJvbSAnLi9hZGRJdGVtJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuXHJcbmNvbnN0IExpc3RJdGVtID0gKChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgZGVsZXRlQ2FyZCA9IChldiwgY2FyZCkgPT4ge1xyXG4gICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgcHJvcHMuZGlzcGF0Y2goYWN0aW9ucy5kZWxldGVDYXJkKGNhcmQpKVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1jb250YWluZXJcIiBvbkRyYWdPdmVyPXtlID0+IHByb3BzLm9uRHJhZ092ZXIoZSl9XHJcbiAgICAgICAgICAgICAgICBvbkRyb3A9e2UgPT4gcHJvcHMub25Ecm9wKGUsIHByb3BzLmxpc3QuaWQpfSA+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaGVhZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtdGl0bGVcIiBjb250ZW50RWRpdGFibGUgb25JbnB1dD17ZSA9PiBjb25zb2xlLmxvZygnbGlzdCcsIGUpfT5cclxuICAgICAgICB7cHJvcHMubGlzdC5uYW1lfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2gtbyBkZWxldGUtbGlua1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gcHJvcHMuZGlzcGF0Y2goYWN0aW9ucy5kZWxldGVMaXN0KHByb3BzLmxpc3QpKX0+PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICB7IFxyXG4gICAgICBwcm9wcy5jYXJkcyAmJiBwcm9wcy5jYXJkcy5tYXAoKGl0ZW0pID0+IDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1jb250YWluZXJcIiBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgZHJhZ2dhYmxlIG9uRHJhZ1N0YXJ0PXtlID0+IHByb3BzLm9uRHJhZ1N0YXJ0KGUsIGl0ZW0uaWQpfSBvbkNsaWNrPXtlID0+IHByb3BzLm9uSXRlbUNsaWNrKGl0ZW0pfT5cclxuICAgICAgICB7aXRlbS5uYW1lfSA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS10cmFzaC1vIGRlbGV0ZS1saW5rXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBkZWxldGVDYXJkKGUsIGl0ZW0pfSAvPlxyXG4gICAgICA8L2Rpdj4pXHJcbiAgICB9XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC1pdGVtXCI+XHJcbiAgICAgIDxBZGRJdGVtIG9uSXRlbUFkZD17aXRlbSA9PiBwcm9wcy5kaXNwYXRjaChhY3Rpb25zLmFkZENhcmQoe2l0ZW0sIGNhdGVnb3J5OiBwcm9wcy5saXN0LmlkfSkpfSBcclxuICAgICAgICAgICAgICBoYXNBY3RpdmVMaXN0PXtwcm9wcy5jYXJkcyAmJiBwcm9wcy5jYXJkcy5sZW5ndGh9IC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxufSk7XHJcblxyXG5MaXN0SXRlbS5kaXNwbGF5TmFtZSA9ICdMaXN0SXRlbSc7XHJcblxyXG5mdW5jdGlvbiBzZWxlY3QgKHN0YXRlKSB7XHJcbiAgcmV0dXJuIHtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHNlbGVjdCkoTGlzdEl0ZW0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdmlld3MvY29tcG9uZW50cy9saXN0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFZpZXdNb2RhbCA9ICgocHJvcHMpID0+IHtcclxuICBpZiAocHJvcHMuc2hvdykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1vdmVybGF5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJlbGxvXCIgLz57cHJvcHMudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS10aW1lcyByZXNldC1saW5rXCIgb25DbGljaz17cHJvcHMub25DbG9zZX0+PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiA8ZGl2IC8+O1xyXG4gIH1cclxufSk7XHJcblxyXG5WaWV3TW9kYWwuZGlzcGxheU5hbWUgPSAnVmlld01vZGFsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZXdNb2RhbDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3ZpZXdzL2NvbXBvbmVudHMvbW9kYWwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBlcnJvcjogZmFsc2VcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRDYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBlcnJvcjogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRFcnJvckNvbnRlbnQgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWVycm9yLWNvbnRlbnRcIj5cclxuICAgICAgICBTb21lIEVycm9yIG9jY3VyZWQuIFdlIHJlZ3JldCBmb3IgaW5jb252aW5pZW5jZS5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVGhlbWVDb2xvciAoZXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdGhlbWVDb2xvcicsIGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cclxuICAgICAgICA8aGVhZGVyIGlkPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28taWNvblwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYW5nZS10aGVtZVwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29sb3JQaWNrZXJcIj5DaGFuZ2UgVGhlbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNvbG9yUGlja2VyXCIgY2xhc3NOYW1lPVwiY29sb3ItcGlja2VyXCIgdHlwZT1cImNvbG9yXCIgb25DaGFuZ2U9e3RoaXMudXBkYXRlVGhlbWVDb2xvcn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8bWFpbiBpZD1cImJvZHlcIj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvclxyXG4gICAgICAgICAgICAgID8gIHRoaXMuZ2V0RXJyb3JDb250ZW50KClcclxuICAgICAgICAgICAgICA6IHRoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIEdlbmVyYXRlZCBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2plZnJlZXN1aml0L2dlbmVyYXRvci1yZWFjdC1ub2RlXCI+Z2VuZXJhdG9yLXJlYWN0LW5vZGU8L2E+LlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblBhZ2UuZGlzcGxheU5hbWUgPSAnUGFnZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdmlld3MvY29tcG9uZW50cy9wYWdlLmpzIiwiLyogZ2xvYmFsIGxvY2F0aW9uICovXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgc3luY0hpc3RvcnlXaXRoU3RvcmUgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL3BhZ2VzL2hvbWUnO1xyXG5pbXBvcnQgRXJyb3I0MDQgZnJvbSAnLi9wYWdlcy9lcnJvcjQwNCc7XHJcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcblxyXG5jb25zdCBoaXN0b3J5ID0gc3luY0hpc3RvcnlXaXRoU3RvcmUoY3JlYXRlQnJvd3Nlckhpc3RvcnkoKSwgc3RvcmUpO1xyXG5jb25zb2xlLmxvZyhoaXN0b3J5KTtcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXctY29udGFpbmVyXCI+XHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICA8Um91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxyXG4gICAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17SG9tZX0gLz5cclxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi80MDRcIiBjb21wb25lbnQ9e0Vycm9yNDA0fSAvPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBub21hdGNoIGNvbXBvbmVudD17RXJyb3I0MDR9IC8+XHJcbiAgICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgICAgPC9Sb3V0ZXI+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuQXBwLmRpc3BsYXlOYW1lID0gJ0FwcCc7XHJcblxyXG4vLyBCb290c3RyYXAgY2xpZW50XHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICB2YXIgcHJvcHMgPSB7XHJcbiAgICAgIHBhdGg6IGxvY2F0aW9uLnBhdGhuYW1lXHJcbiAgICB9O1xyXG4gICAgUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwLCBwcm9wcyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdFZpZXcnKSk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdmlld3MvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9