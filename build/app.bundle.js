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
          { show: this.state.showModal, title: 'Add Item', onClose: this.onModalClose },
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
    hasActiveList: Object.keys(cards).length > 0
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
exports.addComments = addComments;
/** This provides the various redux actions to trigger app state changes by the redux reducer
 * @module Redux actions
 */

var LOCATION_CHANGE = exports.LOCATION_CHANGE = '@@router/LOCATION_CHANGE';
var FETCHING_PAGEDATA = exports.FETCHING_PAGEDATA = 'FETCHING_PAGEDATA';
var CREATE_LIST = exports.CREATE_LIST = 'CREATE_LIST';
var DELETE_LIST = exports.DELETE_LIST = 'DELETE_LIST';
var ADD_CARD = exports.ADD_CARD = 'ADD_CARD';
var ADD_COMMENTS = exports.ADD_COMMENTS = 'ADD_COMMENTS';
var MOVE_CARD = exports.MOVE_CARD = 'MOVE_CARD';

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

function addComments(data) {
  return function (dispatch) {
    dispatch(fetchingPageData());
    dispatch({
      type: ADD_COMMENTS,
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditItem = function (_React$Component) {
  _inherits(EditItem, _React$Component);

  function EditItem() {
    _classCallCheck(this, EditItem);

    var _this = _possibleConstructorReturn(this, (EditItem.__proto__ || Object.getPrototypeOf(EditItem)).call(this));

    _this.changeHandler = function (value, key) {
      var state = {};
      state[key] = value;
      _this.setState(state);
    };

    _this.addComment = function () {
      _this.props.dispatch(actions.addComment({
        comment: _this.state.comment,
        card: _this.props.item.id
      }));

      _this.setState({
        comment: ''
      });
    };

    _this.addDescription = function () {
      _this.props.dispatch(actions.addDescription({
        comment: _this.state.description,
        card: _this.props.item.id
      }));

      _this.setState({
        description: '',
        allowEdit: false
      });
    };

    _this.toggleEdit = function () {
      _this.setState({
        toggleEdit: !_this.state.toggleEdit
      });
    };

    _this.state = {
      comment: '',
      description: '',
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
              _react2.default.createElement('textarea', { className: 'list-input', onChange: this.descriptionHandler, placeholder: 'Enter description... ' }),
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
            _react2.default.createElement('textarea', { className: 'list-input', placeholder: 'Enter comment ', onChange: this.commentHandler }),
            _react2.default.createElement(
              'button',
              { className: 'btn btn-save', onClick: this.addComment },
              'Save'
            )
          )
        ),
        _react2.default.createElement(
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
              'Comments'
            ),
            this.props.item.comments && this.props.item.comments.map(function (comment) {
              return _react2.default.createElement(
                'div',
                { className: 'comment-item' },
                comment
              );
            })
          )
        )
      );
    }
  }]);

  return EditItem;
}(_react2.default.Component);

EditItem.displayName = 'EditItem';

exports.default = EditItem;

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
        item.name
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

exports.default = (0, _reactRedux.connect)()(ListItem);

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
            _react2.default.createElement('div', { className: 'logo-icon' })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvc3RvcmVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi92aWV3cy9wYWdlcy9lcnJvcjQwNC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdmlld3MvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci1kb20vZXNtL3JlYWN0LXJvdXRlci1kb20uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9zdG9yZXMvZGVmYXVsdFN0YXRlLmpzIiwid2VicGFjazovLy8uL2xpYi92aWV3cy9jb21wb25lbnRzL2FkZEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3ZpZXdzL2NvbXBvbmVudHMvYWRkTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdmlld3MvY29tcG9uZW50cy9lZGl0SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdmlld3MvY29tcG9uZW50cy9saXN0LmpzIiwid2VicGFjazovLy8uL2xpYi92aWV3cy9jb21wb25lbnRzL21vZGFsLmpzIiwid2VicGFjazovLy8uL2xpYi92aWV3cy9jb21wb25lbnRzL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3ZpZXdzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlZHVjZXJzIiwicmVkdWNlciIsImFwcCIsImFwcFN0YXRlIiwiZGF0YVJlcXVlc3RzIiwicm91dGluZyIsInJvdXRlclJlZHVjZXIiLCJib2FyZCIsInBhbmVscyIsImxpc3RSZWR1Y2VyIiwidGFza3MiLCJ0YXNrc1JlZHVjZXIiLCJyb3V0aW5nTWlkZGxld2FyZSIsImJyb3dzZXJIaXN0b3J5Iiwic3RvcmUiLCJkZWZhdWx0U3RhdGUiLCJ0aHVuayIsIndpbmRvdyIsImRldlRvb2xzRXh0ZW5zaW9uIiwiZiIsIkVycm9yNDA0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJkaXNwbGF5TmFtZSIsImFjdGlvbnMiLCJIb21lIiwic3RhdGUiLCJhY3RpdmVJdGVtIiwic2hvd01vZGFsIiwib25EcmFnT3ZlciIsImV2IiwicHJldmVudERlZmF1bHQiLCJvbkRyYWdTdGFydCIsIm5hbWUiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwib25Ecm9wIiwiY2F0ZWdvcnkiLCJpZCIsImdldERhdGEiLCJwcm9wcyIsImRpc3BhdGNoIiwibW92ZUNhcmQiLCJvbkl0ZW1DbGljayIsIml0ZW0iLCJzZXRTdGF0ZSIsIm9uTW9kYWxDbG9zZSIsInJlbmRlckxpc3QiLCJjYXJkcyIsImxpc3QiLCJtYXAiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJWaWV3TW9kYWwiLCJoYXNBY3RpdmVMaXN0Iiwic2VsZWN0IiwiZm9yRWFjaCIsInQiLCJwdXNoIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImZldGNoaW5nUGFnZURhdGEiLCJmZXRjaFBhZ2VEYXRhIiwiY3JlYXRlTGlzdCIsImRlbGV0ZUxpc3QiLCJhZGRDYXJkIiwiYWRkQ29tbWVudHMiLCJMT0NBVElPTl9DSEFOR0UiLCJGRVRDSElOR19QQUdFREFUQSIsIkNSRUFURV9MSVNUIiwiREVMRVRFX0xJU1QiLCJBRERfQ0FSRCIsIkFERF9DT01NRU5UUyIsIk1PVkVfQ0FSRCIsInR5cGUiLCJTRVRfUEFHRURBVEEiLCJwYXlsb2FkIiwiZGF0YSIsImFjdGlvbkV2ZW50cyIsImFjdGlvbiIsImFjdGlvblR5cGUiLCJuZXdTdGF0ZSIsImFzc2lnbiIsImN1cnJlbnQiLCJwYXRoIiwicGF0aG5hbWUiLCJjb3VudGVyIiwiZmlsdGVyIiwiZGVzY3JpcHRpb24iLCJjb21tZW50cyIsImNhcmQiLCJTRVRUSU5HX1BBR0VEQVRBIiwic2V0dGluZ3MiLCJwYWdlVGl0bGUiLCJBZGRJdGVtIiwic2hvd0FkZExpbmsiLCJzaG93QWRkQm94IiwiaGlkZUFkZExpbmsiLCJvblNhdmVDbGljayIsImlucHV0VmFsdWUiLCJvbkl0ZW1BZGQiLCJvbklucHV0Q2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJBZGRMaXN0IiwiRWRpdEl0ZW0iLCJjaGFuZ2VIYW5kbGVyIiwia2V5IiwiYWRkQ29tbWVudCIsImNvbW1lbnQiLCJhZGREZXNjcmlwdGlvbiIsImFsbG93RWRpdCIsInRvZ2dsZUVkaXQiLCJjb21tZW50SGFuZGxlciIsImRlc2NyaXB0aW9uSGFuZGxlciIsIkxpc3RJdGVtIiwiZSIsInNob3ciLCJ0aXRsZSIsIm9uQ2xvc2UiLCJjaGlsZHJlbiIsIlBhZ2UiLCJlcnJvciIsImNsYXNzTmFtZSIsImdldEVycm9yQ29udGVudCIsImhpc3RvcnkiLCJBcHAiLCJvbmxvYWQiLCJsb2NhdGlvbiIsIlJlYWN0RE9NIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBQVlBLFE7O0FBQ1o7Ozs7Ozs7O0FBRUEsSUFBTUMsVUFBVSw0QkFBZ0I7QUFDOUJDLE9BQUtGLFNBQVNHLFFBRGdCO0FBRTlCQyxnQkFBY0osU0FBU0ksWUFGTztBQUc5QkMsV0FBU0MsK0JBSHFCO0FBSTlCQyxTQUFPLDRCQUFnQjtBQUNyQkMsWUFBUVIsU0FBU1MsV0FESTtBQUVyQkMsV0FBT1YsU0FBU1c7QUFGSyxHQUFoQjtBQUp1QixDQUFoQixDQUFoQjs7QUFVQSxJQUFNQyxvQkFBb0Isd0NBQWlCQywyQkFBakIsQ0FBMUI7O0FBRUEsSUFBTUMsUUFBUSx3QkFBWWIsT0FBWixFQUFxQmMsc0JBQXJCLEVBQW1DLG9CQUMvQyw0QkFBZ0JDLG9CQUFoQixFQUF1QkosaUJBQXZCLENBRCtDLEVBRS9DSyxPQUFPQyxpQkFBUCxHQUEyQkQsT0FBT0MsaUJBQVAsRUFBM0IsR0FBd0Q7QUFBQSxTQUFLQyxDQUFMO0FBQUEsQ0FGVCxDQUFuQyxDQUFkOztrQkFLZUwsSzs7Ozs7Ozs7QUN4QkY7O0FBRWI7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJ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WjtBQUdBNEMsdUJBQVNDLE1BQVQsQ0FBZ0IvRyxnQkFBTWdILGFBQU4sQ0FBb0JMLEdBQXBCLEVBQXlCeEYsS0FBekIsQ0FBaEIsRUFBaUQ4RixTQUFTQyxjQUFULENBQXdCLFdBQXhCLENBQWpEO0FBQ0QsR0FMRDtBQU1EOztrQkFFY1AsRyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCB7IHJvdXRlck1pZGRsZXdhcmUsIHJvdXRlclJlZHVjZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyByZWR1Y2VycyBmcm9tICcuLi9yZWR1Y2Vycy9pbmRleCc7XHJcbmltcG9ydCBkZWZhdWx0U3RhdGUgZnJvbSAnLi9kZWZhdWx0U3RhdGUnO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgYXBwOiByZWR1Y2Vycy5hcHBTdGF0ZSxcclxuICBkYXRhUmVxdWVzdHM6IHJlZHVjZXJzLmRhdGFSZXF1ZXN0cyxcclxuICByb3V0aW5nOiByb3V0ZXJSZWR1Y2VyLFxyXG4gIGJvYXJkOiBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgcGFuZWxzOiByZWR1Y2Vycy5saXN0UmVkdWNlcixcclxuICAgIHRhc2tzOiByZWR1Y2Vycy50YXNrc1JlZHVjZXJcclxuICB9KVxyXG59KTtcclxuXHJcbmNvbnN0IHJvdXRpbmdNaWRkbGV3YXJlID0gcm91dGVyTWlkZGxld2FyZShicm93c2VySGlzdG9yeSk7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGRlZmF1bHRTdGF0ZSwgY29tcG9zZShcclxuICBhcHBseU1pZGRsZXdhcmUodGh1bmssIHJvdXRpbmdNaWRkbGV3YXJlKSxcclxuICB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24gPyB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24oKSA6IGYgPT4gZlxyXG4pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvc3RvcmVzL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEVycm9yNDA0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXJcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZXJyb3ItaGVhZGluZ1wiPjQwNCAtIE1pc3NpbmcgUmVzb3VyY2UgPC9oMj5cclxuICAgICAgICA8cD5QbGVhc2UgdHJ5IGFnYWluLCBidXQgaWYgdGhlIHByb2JsZW0gcGVyc2lzdCwgY29udGFjdCBhbiBhZG1pbmlzdHJhdG9yLjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuRXJyb3I0MDQuZGlzcGxheU5hbWUgPSAnRXJyb3I0MDQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3I0MDQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi92aWV3cy9wYWdlcy9lcnJvcjQwNC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdCc7XHJcbmltcG9ydCBBZGRMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvYWRkTGlzdCc7XHJcbmltcG9ydCBWaWV3TW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9tb2RhbCc7XHJcbmltcG9ydCBFZGl0SXRlbSBmcm9tICcuLi9jb21wb25lbnRzL2VkaXRJdGVtJztcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgYWN0aXZlSXRlbToge30sXHJcbiAgICBzaG93TW9kYWw6IGZhbHNlXHJcbiAgfTtcclxuXHJcbiAgb25EcmFnT3ZlciA9IGV2ID0+IHtcclxuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfTtcclxuXHJcbiAgb25EcmFnU3RhcnQgPSAoZXYsIG5hbWUpID0+IHtcclxuICAgIGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiaWRcIiwgbmFtZSk7XHJcbiAgfTtcclxuXHJcbiAgb25Ecm9wID0gKGV2LCBjYXRlZ29yeSkgPT4ge1xyXG4gICAgY29uc3QgaWQgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImlkXCIpO1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb25zLm1vdmVDYXJkKHtpZCwgY2F0ZWdvcnl9KSk7XHJcbiAgfTtcclxuXHJcbiAgb25JdGVtQ2xpY2sgPSAoaXRlbSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGFjdGl2ZUl0ZW06IGl0ZW0sXHJcbiAgICAgIHNob3dNb2RhbDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbk1vZGFsQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd01vZGFsOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJMaXN0ID0gKGNhcmRzKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5saXN0Lm1hcCgobGlzdCwgaW5kZXgpID0+IFxyXG4gICAgICA8TGlzdCBjYXJkcz17Y2FyZHNbbGlzdC5pZF19IGxpc3Q9e2xpc3R9IG9uRHJvcD17dGhpcy5vbkRyb3B9IFxyXG4gICAgICAgICAgICBvbkRyYWdPdmVyPXt0aGlzLm9uRHJhZ092ZXJ9IGtleT17aW5kZXh9IFxyXG4gICAgICAgICAgICBvbkRyYWdTdGFydD17dGhpcy5vbkRyYWdTdGFydH0gb25JdGVtQ2xpY2s9e3RoaXMub25JdGVtQ2xpY2t9Lz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc29sZS5sb2coVmlld01vZGFsKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxQYWdlIGNsYXNzTmFtZT1cImhvbWUtcGFnZVwiIGhlYWRlcj1cIlRyZWxsb1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICB7dGhpcy5yZW5kZXJMaXN0KHRoaXMucHJvcHMuY2FyZHMpfVxyXG4gICAgICAgICAgPEFkZExpc3QgaGFzQWN0aXZlTGlzdD17dGhpcy5wcm9wcy5oYXNBY3RpdmVMaXN0fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxWaWV3TW9kYWwgc2hvdz17dGhpcy5zdGF0ZS5zaG93TW9kYWx9IHRpdGxlPVwiQWRkIEl0ZW1cIiBvbkNsb3NlPXt0aGlzLm9uTW9kYWxDbG9zZX0+XHJcbiAgICAgICAgICA8RWRpdEl0ZW0gaXRlbT17dGhpcy5zdGF0ZS5hY3RpdmVJdGVtfSAvPlxyXG4gICAgICAgIDwvVmlld01vZGFsPlxyXG4gICAgICA8L1BhZ2U+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuSG9tZS5kaXNwbGF5TmFtZSA9ICdIb21lJztcclxuXHJcbmZ1bmN0aW9uIHNlbGVjdCAoc3RhdGUpIHtcclxuICBsZXQgY2FyZHMgPSB7fTtcclxuICBzdGF0ZS5ib2FyZC50YXNrcy5jYXJkcy5mb3JFYWNoKHQgPT4ge1xyXG4gICAgY2FyZHNbdC5jYXRlZ29yeV0gPSBjYXJkc1t0LmNhdGVnb3J5XSB8fCBbXTsgXHJcbiAgICBjYXJkc1t0LmNhdGVnb3J5XS5wdXNoKHQpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbGlzdDogc3RhdGUuYm9hcmQucGFuZWxzLmxpc3QsXHJcbiAgICBjYXJkczogY2FyZHMsXHJcbiAgICBoYXNBY3RpdmVMaXN0OiBPYmplY3Qua2V5cyhjYXJkcykubGVuZ3RoID4gMFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc2VsZWN0KShIb21lKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3ZpZXdzL3BhZ2VzL2hvbWUuanMiLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGVyLCBfX1JvdXRlckNvbnRleHQsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmV4cG9ydCAqIGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSwgY3JlYXRlSGFzaEhpc3RvcnksIGNyZWF0ZUxvY2F0aW9uIH0gZnJvbSAnaGlzdG9yeSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAndGlueS13YXJuaW5nJztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlJztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnO1xuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBhIDxSb3V0ZXI+IHRoYXQgdXNlcyBIVE1MNSBoaXN0b3J5LlxuICovXG5cbnZhciBCcm93c2VyUm91dGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEJyb3dzZXJSb3V0ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEJyb3dzZXJSb3V0ZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgX3RoaXMuaGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KF90aGlzLnByb3BzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQnJvd3NlclJvdXRlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICAgIGhpc3Rvcnk6IHRoaXMuaGlzdG9yeSxcbiAgICAgIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEJyb3dzZXJSb3V0ZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgQnJvd3NlclJvdXRlci5wcm9wVHlwZXMgPSB7XG4gICAgYmFzZW5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGZvcmNlUmVmcmVzaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZ2V0VXNlckNvbmZpcm1hdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAga2V5TGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyXG4gIH07XG5cbiAgQnJvd3NlclJvdXRlci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghdGhpcy5wcm9wcy5oaXN0b3J5LCBcIjxCcm93c2VyUm91dGVyPiBpZ25vcmVzIHRoZSBoaXN0b3J5IHByb3AuIFRvIHVzZSBhIGN1c3RvbSBoaXN0b3J5LCBcIiArIFwidXNlIGBpbXBvcnQgeyBSb3V0ZXIgfWAgaW5zdGVhZCBvZiBgaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfWAuXCIpIDogdm9pZCAwO1xuICB9O1xufVxuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBhIDxSb3V0ZXI+IHRoYXQgdXNlcyB3aW5kb3cubG9jYXRpb24uaGFzaC5cbiAqL1xuXG52YXIgSGFzaFJvdXRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShIYXNoUm91dGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBIYXNoUm91dGVyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgIF90aGlzLmhpc3RvcnkgPSBjcmVhdGVIYXNoSGlzdG9yeShfdGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEhhc2hSb3V0ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgICBoaXN0b3J5OiB0aGlzLmhpc3RvcnksXG4gICAgICBjaGlsZHJlbjogdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBIYXNoUm91dGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEhhc2hSb3V0ZXIucHJvcFR5cGVzID0ge1xuICAgIGJhc2VuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBnZXRVc2VyQ29uZmlybWF0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBoYXNoVHlwZTogUHJvcFR5cGVzLm9uZU9mKFtcImhhc2hiYW5nXCIsIFwibm9zbGFzaFwiLCBcInNsYXNoXCJdKVxuICB9O1xuXG4gIEhhc2hSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoIXRoaXMucHJvcHMuaGlzdG9yeSwgXCI8SGFzaFJvdXRlcj4gaWdub3JlcyB0aGUgaGlzdG9yeSBwcm9wLiBUbyB1c2UgYSBjdXN0b20gaGlzdG9yeSwgXCIgKyBcInVzZSBgaW1wb3J0IHsgUm91dGVyIH1gIGluc3RlYWQgb2YgYGltcG9ydCB7IEhhc2hSb3V0ZXIgYXMgUm91dGVyIH1gLlwiKSA6IHZvaWQgMDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiAhIShldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcbn1cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHJlbmRlcmluZyBhIGhpc3RvcnktYXdhcmUgPGE+LlxuICovXG5cblxudmFyIExpbmsgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoTGluaywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGluaygpIHtcbiAgICByZXR1cm4gX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTGluay5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQsIGhpc3RvcnkpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuXG4gICAgaWYgKCFldmVudC5kZWZhdWx0UHJldmVudGVkICYmIC8vIG9uQ2xpY2sgcHJldmVudGVkIGRlZmF1bHRcbiAgICBldmVudC5idXR0b24gPT09IDAgJiYgKCAvLyBpZ25vcmUgZXZlcnl0aGluZyBidXQgbGVmdCBjbGlja3NcbiAgICAhdGhpcy5wcm9wcy50YXJnZXQgfHwgdGhpcy5wcm9wcy50YXJnZXQgPT09IFwiX3NlbGZcIikgJiYgLy8gbGV0IGJyb3dzZXIgaGFuZGxlIFwidGFyZ2V0PV9ibGFua1wiIGV0Yy5cbiAgICAhaXNNb2RpZmllZEV2ZW50KGV2ZW50KSAvLyBpZ25vcmUgY2xpY2tzIHdpdGggbW9kaWZpZXIga2V5c1xuICAgICkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgbWV0aG9kID0gdGhpcy5wcm9wcy5yZXBsYWNlID8gaGlzdG9yeS5yZXBsYWNlIDogaGlzdG9yeS5wdXNoO1xuICAgICAgICBtZXRob2QodGhpcy5wcm9wcy50byk7XG4gICAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaW5uZXJSZWYgPSBfdGhpcyRwcm9wcy5pbm5lclJlZixcbiAgICAgICAgcmVwbGFjZSA9IF90aGlzJHByb3BzLnJlcGxhY2UsXG4gICAgICAgIHRvID0gX3RoaXMkcHJvcHMudG8sXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiaW5uZXJSZWZcIiwgXCJyZXBsYWNlXCIsIFwidG9cIl0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9fUm91dGVyQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICFjb250ZXh0ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIllvdSBzaG91bGQgbm90IHVzZSA8TGluaz4gb3V0c2lkZSBhIDxSb3V0ZXI+XCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAgIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IGNyZWF0ZUxvY2F0aW9uKHRvLCBudWxsLCBudWxsLCBjb250ZXh0LmxvY2F0aW9uKSA6IHRvO1xuICAgICAgdmFyIGhyZWYgPSBsb2NhdGlvbiA/IGNvbnRleHQuaGlzdG9yeS5jcmVhdGVIcmVmKGxvY2F0aW9uKSA6IFwiXCI7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhldmVudCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVDbGljayhldmVudCwgY29udGV4dC5oaXN0b3J5KTtcbiAgICAgICAgfSxcbiAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgcmVmOiBpbm5lclJlZlxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBMaW5rO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHZhciB0b1R5cGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSk7XG4gIHZhciBpbm5lclJlZlR5cGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjdXJyZW50OiBQcm9wVHlwZXMuYW55XG4gIH0pXSk7XG4gIExpbmsucHJvcFR5cGVzID0ge1xuICAgIGlubmVyUmVmOiBpbm5lclJlZlR5cGUsXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgdGFyZ2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRvOiB0b1R5cGUuaXNSZXF1aXJlZFxuICB9O1xufVxuXG5mdW5jdGlvbiBqb2luQ2xhc3NuYW1lcygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGNsYXNzbmFtZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgY2xhc3NuYW1lc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBjbGFzc25hbWVzLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBpO1xuICB9KS5qb2luKFwiIFwiKTtcbn1cbi8qKlxuICogQSA8TGluaz4gd3JhcHBlciB0aGF0IGtub3dzIGlmIGl0J3MgXCJhY3RpdmVcIiBvciBub3QuXG4gKi9cblxuXG5mdW5jdGlvbiBOYXZMaW5rKF9yZWYpIHtcbiAgdmFyIF9yZWYkYXJpYUN1cnJlbnQgPSBfcmVmW1wiYXJpYS1jdXJyZW50XCJdLFxuICAgICAgYXJpYUN1cnJlbnQgPSBfcmVmJGFyaWFDdXJyZW50ID09PSB2b2lkIDAgPyBcInBhZ2VcIiA6IF9yZWYkYXJpYUN1cnJlbnQsXG4gICAgICBfcmVmJGFjdGl2ZUNsYXNzTmFtZSA9IF9yZWYuYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3JlZiRhY3RpdmVDbGFzc05hbWUgPT09IHZvaWQgMCA/IFwiYWN0aXZlXCIgOiBfcmVmJGFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgIGFjdGl2ZVN0eWxlID0gX3JlZi5hY3RpdmVTdHlsZSxcbiAgICAgIGNsYXNzTmFtZVByb3AgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGV4YWN0ID0gX3JlZi5leGFjdCxcbiAgICAgIGlzQWN0aXZlUHJvcCA9IF9yZWYuaXNBY3RpdmUsXG4gICAgICBsb2NhdGlvbiA9IF9yZWYubG9jYXRpb24sXG4gICAgICBzdHJpY3QgPSBfcmVmLnN0cmljdCxcbiAgICAgIHN0eWxlUHJvcCA9IF9yZWYuc3R5bGUsXG4gICAgICB0byA9IF9yZWYudG8sXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiYXJpYS1jdXJyZW50XCIsIFwiYWN0aXZlQ2xhc3NOYW1lXCIsIFwiYWN0aXZlU3R5bGVcIiwgXCJjbGFzc05hbWVcIiwgXCJleGFjdFwiLCBcImlzQWN0aXZlXCIsIFwibG9jYXRpb25cIiwgXCJzdHJpY3RcIiwgXCJzdHlsZVwiLCBcInRvXCJdKTtcblxuICB2YXIgcGF0aCA9IHR5cGVvZiB0byA9PT0gXCJvYmplY3RcIiA/IHRvLnBhdGhuYW1lIDogdG87IC8vIFJlZ2V4IHRha2VuIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9waWxsYXJqcy9wYXRoLXRvLXJlZ2V4cC9ibG9iL21hc3Rlci9pbmRleC5qcyNMMjAyXG5cbiAgdmFyIGVzY2FwZWRQYXRoID0gcGF0aCAmJiBwYXRoLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtcbiAgICBwYXRoOiBlc2NhcGVkUGF0aCxcbiAgICBleGFjdDogZXhhY3QsXG4gICAgc3RyaWN0OiBzdHJpY3QsXG4gICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgIGNoaWxkcmVuOiBmdW5jdGlvbiBjaGlsZHJlbihfcmVmMikge1xuICAgICAgdmFyIGxvY2F0aW9uID0gX3JlZjIubG9jYXRpb24sXG4gICAgICAgICAgbWF0Y2ggPSBfcmVmMi5tYXRjaDtcbiAgICAgIHZhciBpc0FjdGl2ZSA9ICEhKGlzQWN0aXZlUHJvcCA/IGlzQWN0aXZlUHJvcChtYXRjaCwgbG9jYXRpb24pIDogbWF0Y2gpO1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IGlzQWN0aXZlID8gam9pbkNsYXNzbmFtZXMoY2xhc3NOYW1lUHJvcCwgYWN0aXZlQ2xhc3NOYW1lKSA6IGNsYXNzTmFtZVByb3A7XG4gICAgICB2YXIgc3R5bGUgPSBpc0FjdGl2ZSA/IF9leHRlbmRzKHt9LCBzdHlsZVByb3AsIGFjdGl2ZVN0eWxlKSA6IHN0eWxlUHJvcDtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIF9leHRlbmRzKHtcbiAgICAgICAgXCJhcmlhLWN1cnJlbnRcIjogaXNBY3RpdmUgJiYgYXJpYUN1cnJlbnQgfHwgbnVsbCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgdG86IHRvXG4gICAgICB9LCByZXN0KSk7XG4gICAgfVxuICB9KTtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICB2YXIgYXJpYUN1cnJlbnRUeXBlID0gUHJvcFR5cGVzLm9uZU9mKFtcInBhZ2VcIiwgXCJzdGVwXCIsIFwibG9jYXRpb25cIiwgXCJkYXRlXCIsIFwidGltZVwiLCBcInRydWVcIl0pO1xuICBOYXZMaW5rLnByb3BUeXBlcyA9IF9leHRlbmRzKHt9LCBMaW5rLnByb3BUeXBlcywge1xuICAgIFwiYXJpYS1jdXJyZW50XCI6IGFyaWFDdXJyZW50VHlwZSxcbiAgICBhY3RpdmVDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWN0aXZlU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGV4YWN0OiBSb3V0ZS5wcm9wVHlwZXMuZXhhY3QsXG4gICAgaXNBY3RpdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHN0cmljdDogUm91dGUucHJvcFR5cGVzLnN0cmljdCxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdFxuICB9KTtcbn1cblxuZXhwb3J0IHsgQnJvd3NlclJvdXRlciwgSGFzaFJvdXRlciwgTGluaywgTmF2TGluayB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJvdXRlci1kb20vZXNtL3JlYWN0LXJvdXRlci1kb20uanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBUaGlzIHByb3ZpZGVzIHRoZSB2YXJpb3VzIHJlZHV4IGFjdGlvbnMgdG8gdHJpZ2dlciBhcHAgc3RhdGUgY2hhbmdlcyBieSB0aGUgcmVkdXggcmVkdWNlclxyXG4gKiBAbW9kdWxlIFJlZHV4IGFjdGlvbnNcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgTE9DQVRJT05fQ0hBTkdFID0gJ0BAcm91dGVyL0xPQ0FUSU9OX0NIQU5HRSc7XHJcbmV4cG9ydCBjb25zdCBGRVRDSElOR19QQUdFREFUQSA9ICdGRVRDSElOR19QQUdFREFUQSc7XHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfTElTVCA9ICdDUkVBVEVfTElTVCc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfTElTVCA9ICdERUxFVEVfTElTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ0FSRCA9ICdBRERfQ0FSRCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVFMgPSAnQUREX0NPTU1FTlRTJztcclxuZXhwb3J0IGNvbnN0IE1PVkVfQ0FSRCA9ICdNT1ZFX0NBUkQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoaW5nUGFnZURhdGEgKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBGRVRDSElOR19QQUdFREFUQVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBhZ2VEYXRhICgpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XHJcbiAgICBkaXNwYXRjaChmZXRjaGluZ1BhZ2VEYXRhKCkpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBTRVRfUEFHRURBVEEsXHJcbiAgICAgIHBheWxvYWQ6IFwibWVzc2FnZVwiXHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGlzdCAoZGF0YSkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcclxuICAgIGRpc3BhdGNoKGZldGNoaW5nUGFnZURhdGEoKSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IENSRUFURV9MSVNULFxyXG4gICAgICBwYXlsb2FkOiBkYXRhXHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlTGlzdCAoZGF0YSkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcclxuICAgIGRpc3BhdGNoKGZldGNoaW5nUGFnZURhdGEoKSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IERFTEVURV9MSVNULFxyXG4gICAgICBwYXlsb2FkOiBkYXRhXHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2FyZCAoZGF0YSkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcclxuICAgIGRpc3BhdGNoKGZldGNoaW5nUGFnZURhdGEoKSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFERF9DQVJELFxyXG4gICAgICBwYXlsb2FkOiBkYXRhXHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW92ZUNhcmQgKGRhdGEpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XHJcbiAgICBkaXNwYXRjaChmZXRjaGluZ1BhZ2VEYXRhKCkpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBNT1ZFX0NBUkQsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGFcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDb21tZW50cyAoZGF0YSkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcclxuICAgIGRpc3BhdGNoKGZldGNoaW5nUGFnZURhdGEoKSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UUyxcclxuICAgICAgcGF5bG9hZDogZGF0YVxyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2FjdGlvbnMvaW5kZXguanMiLCJpbXBvcnQgKiBhcyBhY3Rpb25FdmVudHMgZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXBwU3RhdGUgKHN0YXRlLCBhY3Rpb24pIHtcclxuICBsZXQgYWN0aW9uVHlwZSA9IGFjdGlvbi50eXBlLFxyXG4gICAgICBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcclxuXHJcbiAgaWYgKGFjdGlvblR5cGUgPT09IGFjdGlvbkV2ZW50cy5MT0NBVElPTl9DSEFOR0UpIHtcclxuICAgIG5ld1N0YXRlLmN1cnJlbnQucGF0aCA9IGFjdGlvbi5wYXlsb2FkLnBhdGhuYW1lO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ld1N0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlzdFJlZHVjZXIgKHN0YXRlLCBhY3Rpb24pIHtcclxuICBsZXQgYWN0aW9uVHlwZSA9IGFjdGlvbi50eXBlLFxyXG4gICAgICBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcclxuXHJcbiAgaWYgKGFjdGlvblR5cGUgPT09IGFjdGlvbkV2ZW50cy5DUkVBVEVfTElTVCkge1xyXG4gICAgbmV3U3RhdGUubGlzdC5wdXNoKHtcclxuICAgICAgaWQ6IG5ld1N0YXRlLmNvdW50ZXIgKyAxLFxyXG4gICAgICBuYW1lOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgfSk7XHJcbiAgICBuZXdTdGF0ZS5jb3VudGVyICs9IDE7XHJcbiAgfSBlbHNlIGlmIChhY3Rpb25UeXBlID09PSBhY3Rpb25FdmVudHMuREVMRVRFX0xJU1QpIHtcclxuICAgIG5ld1N0YXRlLmxpc3QgPSBzdGF0ZS5saXN0LmZpbHRlcihsaXN0ID0+IGxpc3QuaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXdTdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRhc2tzUmVkdWNlciAoc3RhdGUsIGFjdGlvbikge1xyXG4gIGxldCBhY3Rpb25UeXBlID0gYWN0aW9uLnR5cGUsXHJcbiAgICAgIG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xyXG5cclxuICBpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9uRXZlbnRzLkFERF9DQVJEKSB7XHJcbiAgICBuZXdTdGF0ZS5jYXJkcy5wdXNoKHtcclxuICAgICAgaWQ6IG5ld1N0YXRlLmNvdW50ZXIgKyAxLFxyXG4gICAgICBuYW1lOiBhY3Rpb24ucGF5bG9hZC5pdGVtLFxyXG4gICAgICBjYXRlZ29yeTogYWN0aW9uLnBheWxvYWQuY2F0ZWdvcnksXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgY29tbWVudHM6IFtdXHJcbiAgICB9KTtcclxuICAgIG5ld1N0YXRlLmNvdW50ZXIgKz0gMTtcclxuICB9IGVsc2UgaWYgKGFjdGlvblR5cGUgPT09IGFjdGlvbkV2ZW50cy5NT1ZFX0NBUkQpIHtcclxuICAgIG5ld1N0YXRlLmNhcmRzID0gc3RhdGUuY2FyZHMubWFwKGNhcmQgPT4ge1xyXG4gICAgICBpZiAoY2FyZC5pZCA9PSBhY3Rpb24ucGF5bG9hZC5pZCkge1xyXG4gICAgICAgIGNhcmQuY2F0ZWdvcnkgPSBhY3Rpb24ucGF5bG9hZC5jYXRlZ29yeTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY2FyZDtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9uRXZlbnRzLkRFTEVURV9MSVNUKSB7XHJcbiAgICBuZXdTdGF0ZS5jYXJkcyA9IHN0YXRlLmNhcmRzLmZpbHRlcihjYXJkID0+IGNhcmQuY2F0ZWdvcnkgIT09IGFjdGlvbi5wYXlsb2FkLmlkKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXdTdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRhdGFSZXF1ZXN0cyAoc3RhdGUsIGFjdGlvbikge1xyXG4gIGxldCBhY3Rpb25UeXBlID0gYWN0aW9uLnR5cGUsXHJcbiAgICAgIG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xyXG5cclxuICBpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9uRXZlbnRzLlNFVFRJTkdfUEFHRURBVEEpIHtcclxuICAgIG5ld1N0YXRlLnNldHRpbmdzID0gdHJ1ZTtcclxuICB9IGVsc2UgaWYgKGFjdGlvblR5cGUgPT09IGFjdGlvbkV2ZW50cy5TRVRfUEFHRURBVEEpIHtcclxuICAgIG5ld1N0YXRlLnNldHRpbmdzID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3U3RhdGU7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3JlZHVjZXJzL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IHN0YXRlID0ge1xyXG4gIGFwcDoge1xyXG4gICAgY3VycmVudDoge1xyXG4gICAgICBwYXRoOiAnLycsXHJcbiAgICAgIHBhZ2VUaXRsZTogJ1RyZWxsbydcclxuICAgIH1cclxuICB9LFxyXG4gIGJvYXJkOiB7XHJcbiAgICBwYW5lbHM6IHtcclxuICAgICAgbGlzdDogW3tcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICAgIG5hbWU6ICd0b2RvJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgbmFtZTogJ3dvcmtpbmcnXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5hbWU6ICdjb21wbGV0ZSdcclxuICAgICAgfV0sXHJcbiAgICAgIGNvdW50ZXI6IDNcclxuICAgIH0sXHJcbiAgICB0YXNrczoge1xyXG4gICAgICBjYXJkczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgbmFtZTogXCJBZGQgTW9yZSBUYXNrc1wiLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IDEsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICAgIGNvbW1lbnRzOiBbXHJcbiAgICAgICAgICAgIFwiVGVzdCBDb21tZW50IDFcIixcclxuICAgICAgICAgICAgXCJUZXN0IENvbW1lbnQgMlwiXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBjb3VudGVyOiAxXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RhdGU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9zdG9yZXMvZGVmYXVsdFN0YXRlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuXHJcbmNsYXNzIEFkZEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKCk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRzaG93QWRkQm94OiBmYWxzZSxcclxuXHRcdFx0aW5wdXRWYWx1ZTogJydcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNob3dBZGRMaW5rID0gKCkgPT4ge1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3dBZGRCb3g6IHRydWVcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgXHJcblx0aGlkZUFkZExpbmsgPSAoKSA9PiB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd0FkZEJveDogZmFsc2VcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgXHJcbiAgb25TYXZlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5pbnB1dFZhbHVlICE9PSAnJykge1xyXG4gICAgICB0aGlzLnByb3BzLm9uSXRlbUFkZCh0aGlzLnN0YXRlLmlucHV0VmFsdWUpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpbnB1dFZhbHVlOiAnJyxcclxuICAgICAgICBzaG93QWRkQm94OiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uSW5wdXRDaGFuZ2UgPSBldiA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaW5wdXRWYWx1ZTogZXYudGFyZ2V0LnZhbHVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cdHJlbmRlciAoKSB7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWRkLWl0ZW1cIiA+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5zaG93QWRkQm94XHJcblx0XHRcdFx0XHQ/IDxkaXYgY2xhc3NOYW1lPVwiYWRkLWxpc3Qtc2VjdGlvblwiPlxyXG5cdFx0XHRcdFx0XHQgIDx0ZXh0YXJlYSBhdXRvRm9jdXMgY2xhc3NOYW1lPVwibGlzdC1pbnB1dFwiIG9uQ2hhbmdlPXt0aGlzLm9uSW5wdXRDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiRW50ZXIgYSB0aXRsZSBmb3IgdGhpcyBjYXJkLi4uXCIgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9Lz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2F2ZVwiIG9uQ2xpY2s9e3RoaXMub25TYXZlQ2xpY2t9PkFkZCBDYXJkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVzZXQtbGluayBmYSBmYS10aW1lc1wiIG9uQ2xpY2s9e3RoaXMuaGlkZUFkZExpbmt9Pjwvc3Bhbj5cclxuXHRcdFx0XHRcdCAgPC9kaXY+XHJcbiAgICAgICAgICA6IDxhIGNsYXNzTmFtZT1cImFkZC1jYXJkLWxpbmtcIiBvbkNsaWNrPXt0aGlzLnNob3dBZGRMaW5rfT4gXHJcbiAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmhhc0FjdGl2ZUxpc3QgPyAnKyBBZGQgQW5vdGhlciBDYXJkJyA6ICcrIEFkZCBDYXJkJyB9XHJcbiAgICAgICAgICAgIDwvYT5cclxuXHRcdFx0XHR9XHJcblx0XHQ8L2Rpdj4pO1xyXG5cdH1cclxufTtcclxuXHJcbkFkZEl0ZW0uZGlzcGxheU5hbWUgPSAnQWRkSXRlbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRJdGVtO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi92aWV3cy9jb21wb25lbnRzL2FkZEl0ZW0uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5cclxuY2xhc3MgQWRkTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHNob3dBZGRCb3g6IGZhbHNlLFxyXG5cdFx0XHRpbnB1dFZhbHVlOiAnJ1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2hvd0FkZExpbmsgPSAoKSA9PiB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd0FkZEJveDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBcclxuXHRoaWRlQWRkTGluayA9ICgpID0+IHtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaG93QWRkQm94OiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBcclxuICBvblNhdmVDbGljayA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmlucHV0VmFsdWUgIT09ICcnKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9ucy5jcmVhdGVMaXN0KHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSkpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpbnB1dFZhbHVlOiAnJyxcclxuICAgICAgICBzaG93QWRkQm94OiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uSW5wdXRDaGFuZ2UgPSBldiA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaW5wdXRWYWx1ZTogZXYudGFyZ2V0LnZhbHVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cdHJlbmRlciAoKSB7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWRkLWxpc3RcIiA+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5zaG93QWRkQm94XHJcblx0XHRcdFx0XHQ/IDxkaXYgY2xhc3NOYW1lPVwibGlzdC1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0ICA8aW5wdXQgYXV0b0ZvY3VzIGNsYXNzTmFtZT1cImxpc3QtaW5wdXRcIiBwbGFjZWhvbGRlcj1cIkFkZCBhIGxpc3QuLi5cIiBvbkNoYW5nZT17dGhpcy5vbklucHV0Q2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0vPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zYXZlXCIgb25DbGljaz17dGhpcy5vblNhdmVDbGlja30+QWRkIExpc3Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZXNldC1saW5rIGZhIGZhLXRpbWVzXCIgb25DbGljaz17dGhpcy5oaWRlQWRkTGlua30+PC9zcGFuPlxyXG5cdFx0XHRcdFx0ICA8L2Rpdj5cclxuICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9XCJhZGQtbGlzdC1saW5rXCIgb25DbGljaz17dGhpcy5zaG93QWRkTGlua30+IFxyXG4gICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5oYXNBY3RpdmVMaXN0ID8gJysgQWRkIEFub3RoZXIgTGlzdCcgOiAnKyBBZGQgQSBMaXN0JyB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdH1cclxuXHRcdDwvZGl2Pik7XHJcblx0fVxyXG59O1xyXG5cclxuQWRkTGlzdC5kaXNwbGF5TmFtZSA9ICdBZGRMaXN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShBZGRMaXN0KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdmlld3MvY29tcG9uZW50cy9hZGRMaXN0LmpzIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgRWRpdEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjb21tZW50OiAnJyxcclxuICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICBhbGxvd0VkaXQ6IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb21tZW50SGFuZGxlciA9IGV2ID0+IHRoaXMuY2hhbmdlSGFuZGxlcihldi50YXJnZXQudmFsdWUsICdjb21tZW50Jyk7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uSGFuZGxlciA9IGV2ID0+IHRoaXMuY2hhbmdlSGFuZGxlcihldi50YXJnZXQudmFsdWUsICdkZXNjcmlwdGlvbicpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlSGFuZGxlciA9ICh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICBsZXQgc3RhdGUgPSB7fTtcclxuICAgIHN0YXRlW2tleV0gPSB2YWx1ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ29tbWVudCA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9ucy5hZGRDb21tZW50KHtcclxuICAgICAgY29tbWVudDogdGhpcy5zdGF0ZS5jb21tZW50LFxyXG4gICAgICBjYXJkOiB0aGlzLnByb3BzLml0ZW0uaWRcclxuICAgIH0pKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY29tbWVudDogJydcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkRGVzY3JpcHRpb24gPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbnMuYWRkRGVzY3JpcHRpb24oe1xyXG4gICAgICBjb21tZW50OiB0aGlzLnN0YXRlLmRlc2NyaXB0aW9uLFxyXG4gICAgICBjYXJkOiB0aGlzLnByb3BzLml0ZW0uaWRcclxuICAgIH0pKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICBhbGxvd0VkaXQ6IGZhbHNlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUVkaXQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdG9nZ2xlRWRpdDogIXRoaXMuc3RhdGUudG9nZ2xlRWRpdFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0LWl0ZW0tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIGRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImljb24tYm94XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiPjwvaT48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ib3hcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImlucHV0LWxhYmVsXCI+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pdGVtLmRlc2NyaXB0aW9uICYmICF0aGlzLnN0YXRlLmFsbG93RWRpdFxyXG4gICAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1jb250ZW50XCIgb25DbGljaz17dGhpcy50b2dnbGVFZGl0fT57dGhpcy5wcm9wcy5pdGVtLmRlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgICAgICAgIDogPEZyYWdtZW50Pjx0ZXh0YXJlYSBjbGFzc05hbWU9XCJsaXN0LWlucHV0XCIgb25DaGFuZ2U9e3RoaXMuZGVzY3JpcHRpb25IYW5kbGVyfSBwbGFjZWhvbGRlcj1cIkVudGVyIGRlc2NyaXB0aW9uLi4uIFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2F2ZVwiIG9uQ2xpY2s9e3RoaXMuYWRkRGVzY3JpcHRpb259PlNhdmU8L2J1dHRvbj48L0ZyYWdtZW50PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gY29tbWVudHMtaW5wdXRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ib3hcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jb21tZW50cy1vXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJveFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaW5wdXQtbGFiZWxcIj5Db21tZW50czwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJsaXN0LWlucHV0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBjb21tZW50IFwiIG9uQ2hhbmdlPXt0aGlzLmNvbW1lbnRIYW5kbGVyfT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2F2ZVwiIG9uQ2xpY2s9e3RoaXMuYWRkQ29tbWVudH0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIGNvbW1lbnRzLXJlbmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ib3hcIj48aSBjbGFzc05hbWU9XCJmYSBmYS10cmVsbG9cIj48L2k+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYm94XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpbnB1dC1sYWJlbFwiPkNvbW1lbnRzPC9sYWJlbD5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuaXRlbS5jb21tZW50cyAmJiB0aGlzLnByb3BzLml0ZW0uY29tbWVudHMubWFwKGNvbW1lbnQgPT4gPGRpdiBjbGFzc05hbWU9XCJjb21tZW50LWl0ZW1cIj57Y29tbWVudH08L2Rpdj4pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuRWRpdEl0ZW0uZGlzcGxheU5hbWUgPSAnRWRpdEl0ZW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdEl0ZW07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi92aWV3cy9jb21wb25lbnRzL2VkaXRJdGVtLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFkZEl0ZW0gZnJvbSAnLi9hZGRJdGVtJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuXHJcbmNvbnN0IExpc3RJdGVtID0gKChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1jb250YWluZXJcIiBvbkRyYWdPdmVyPXtlID0+IHByb3BzLm9uRHJhZ092ZXIoZSl9XHJcbiAgICAgICAgICAgICAgICBvbkRyb3A9e2UgPT4gcHJvcHMub25Ecm9wKGUsIHByb3BzLmxpc3QuaWQpfSA+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaGVhZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtdGl0bGVcIiBjb250ZW50RWRpdGFibGUgb25JbnB1dD17ZSA9PiBjb25zb2xlLmxvZygnbGlzdCcsIGUpfT5cclxuICAgICAgICB7cHJvcHMubGlzdC5uYW1lfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2gtbyBkZWxldGUtbGlua1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gcHJvcHMuZGlzcGF0Y2goYWN0aW9ucy5kZWxldGVMaXN0KHByb3BzLmxpc3QpKX0+PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICB7IFxyXG4gICAgICBwcm9wcy5jYXJkcyAmJiBwcm9wcy5jYXJkcy5tYXAoKGl0ZW0pID0+IDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1jb250YWluZXJcIiBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgZHJhZ2dhYmxlIG9uRHJhZ1N0YXJ0PXtlID0+IHByb3BzLm9uRHJhZ1N0YXJ0KGUsIGl0ZW0uaWQpfSBvbkNsaWNrPXtlID0+IHByb3BzLm9uSXRlbUNsaWNrKGl0ZW0pfT5cclxuICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICA8L2Rpdj4pXHJcbiAgICB9XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC1pdGVtXCI+XHJcbiAgICAgIDxBZGRJdGVtIG9uSXRlbUFkZD17aXRlbSA9PiBwcm9wcy5kaXNwYXRjaChhY3Rpb25zLmFkZENhcmQoe2l0ZW0sIGNhdGVnb3J5OiBwcm9wcy5saXN0LmlkfSkpfSBcclxuICAgICAgICAgICAgICBoYXNBY3RpdmVMaXN0PXtwcm9wcy5jYXJkcyAmJiBwcm9wcy5jYXJkcy5sZW5ndGh9IC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxufSk7XHJcblxyXG5MaXN0SXRlbS5kaXNwbGF5TmFtZSA9ICdMaXN0SXRlbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoTGlzdEl0ZW0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdmlld3MvY29tcG9uZW50cy9saXN0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFZpZXdNb2RhbCA9ICgocHJvcHMpID0+IHtcclxuICBpZiAocHJvcHMuc2hvdykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1vdmVybGF5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJlbGxvXCIgLz57cHJvcHMudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS10aW1lcyByZXNldC1saW5rXCIgb25DbGljaz17cHJvcHMub25DbG9zZX0+PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiA8ZGl2IC8+O1xyXG4gIH1cclxufSk7XHJcblxyXG5WaWV3TW9kYWwuZGlzcGxheU5hbWUgPSAnVmlld01vZGFsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZXdNb2RhbDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3ZpZXdzL2NvbXBvbmVudHMvbW9kYWwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBlcnJvcjogZmFsc2VcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRDYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBlcnJvcjogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRFcnJvckNvbnRlbnQgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWVycm9yLWNvbnRlbnRcIj5cclxuICAgICAgICBTb21lIEVycm9yIG9jY3VyZWQuIFdlIHJlZ3JldCBmb3IgaW5jb252aW5pZW5jZS5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XHJcbiAgICAgICAgPGhlYWRlciBpZD1cImhlYWRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLWljb25cIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDxtYWluIGlkPVwiYm9keVwiPlxyXG4gICAgICAgICAgPGRpdiBpZD1cImNvbnRhaW5lclwiIGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yXHJcbiAgICAgICAgICAgICAgPyAgdGhpcy5nZXRFcnJvckNvbnRlbnQoKVxyXG4gICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICAgICAgR2VuZXJhdGVkIGJ5IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vamVmcmVlc3VqaXQvZ2VuZXJhdG9yLXJlYWN0LW5vZGVcIj5nZW5lcmF0b3ItcmVhY3Qtbm9kZTwvYT4uXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuUGFnZS5kaXNwbGF5TmFtZSA9ICdQYWdlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi92aWV3cy9jb21wb25lbnRzL3BhZ2UuanMiLCIvKiBnbG9iYWwgbG9jYXRpb24gKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3Jlcy9pbmRleCc7XHJcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBzeW5jSGlzdG9yeVdpdGhTdG9yZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vcGFnZXMvaG9tZSc7XHJcbmltcG9ydCBFcnJvcjQwNCBmcm9tICcuL3BhZ2VzL2Vycm9yNDA0JztcclxuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcclxuXHJcbmNvbnN0IGhpc3RvcnkgPSBzeW5jSGlzdG9yeVdpdGhTdG9yZShjcmVhdGVCcm93c2VySGlzdG9yeSgpLCBzdG9yZSk7XHJcbmNvbnNvbGUubG9nKGhpc3RvcnkpO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlldy1jb250YWluZXJcIj5cclxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgIDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+XHJcbiAgICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lfSAvPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiLzQwNFwiIGNvbXBvbmVudD17RXJyb3I0MDR9IC8+XHJcbiAgICAgICAgICAgICAgPFJvdXRlIG5vbWF0Y2ggY29tcG9uZW50PXtFcnJvcjQwNH0gLz5cclxuICAgICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgICA8L1JvdXRlcj5cclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5BcHAuZGlzcGxheU5hbWUgPSAnQXBwJztcclxuXHJcbi8vIEJvb3RzdHJhcCBjbGllbnRcclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgd2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIHZhciBwcm9wcyA9IHtcclxuICAgICAgcGF0aDogbG9jYXRpb24ucGF0aG5hbWVcclxuICAgIH07XHJcbiAgICBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChBcHAsIHByb3BzKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0VmlldycpKTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi92aWV3cy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=