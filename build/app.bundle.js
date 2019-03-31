webpackJsonp([0],{

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal(props) {
  if (props.showModal) {
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
            props.title
          ),
          _react2.default.createElement("span", { className: "fa fa-times reset-link" })
        ),
        _react2.default.createElement(
          "div",
          { className: "modal-content" },
          undefined.props.content
        )
      )
    );
  } else {
    return null;
  }
};

exports.default = Modal;

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditItem = function (_React$Component) {
  _inherits(EditItem, _React$Component);

  function EditItem() {
    _classCallCheck(this, EditItem);

    return _possibleConstructorReturn(this, (EditItem.__proto__ || Object.getPrototypeOf(EditItem)).call(this));
  }

  _createClass(EditItem, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "edit-item-container" },
        _react2.default.createElement(
          "div",
          { className: "description-section" },
          _react2.default.createElement(
            "label",
            null,
            "Description"
          ),
          _react2.default.createElement("textarea", _defineProperty({ className: "list-input" }, "className", "Enter description... ")),
          _react2.default.createElement(
            "button",
            { className: "btn btn-save" },
            "Save"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "comments-input-section" },
          _react2.default.createElement(
            "label",
            null,
            "Comments"
          ),
          _react2.default.createElement("textarea", _defineProperty({ className: "list-input" }, "className", "Enter comment ")),
          _react2.default.createElement(
            "button",
            { className: "btn btn-save" },
            "Save"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "comments-render-section" },
          this.props.item.comments && this.props.item.comments.map(function (comment) {
            return _react2.default.createElement(
              "div",
              { className: "comment-item" },
              comment
            );
          })
        )
      );
    }
  }]);

  return EditItem;
}(_react2.default.Component);

EditItem.displayName = 'EditItem';

exports.default = EditItem;

/***/ }),

/***/ 37:
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

/***/ 38:
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

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _page = __webpack_require__(67);

var _page2 = _interopRequireDefault(_page);

var _reactRedux = __webpack_require__(7);

var _list = __webpack_require__(66);

var _list2 = _interopRequireDefault(_list);

var _addList = __webpack_require__(65);

var _addList2 = _interopRequireDefault(_addList);

var _modal = __webpack_require__(124);

var _modal2 = _interopRequireDefault(_modal);

var _editItem = __webpack_require__(125);

var _editItem2 = _interopRequireDefault(_editItem);

var _actions = __webpack_require__(61);

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
    }, _this.renderList = function (cards) {
      return _this.props.list.map(function (list, index) {
        return _react2.default.createElement(_list2.default, { cards: cards[list.id], list: list, onDrop: _this.onDrop, showModal: _this.showModal,
          onDragOver: _this.onDragOver, key: index, onDragStart: _this.onDragStart });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
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
          { show: this.state.showModal, title: 'Edit Item' },
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

/***/ 43:
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

/***/ 61:
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

var _index = __webpack_require__(61);

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
        comments: []
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

var _reactRedux = __webpack_require__(7);

var _actions = __webpack_require__(61);

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

var _reactRedux = __webpack_require__(7);

var _actions = __webpack_require__(61);

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

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _addItem = __webpack_require__(64);

var _addItem2 = _interopRequireDefault(_addItem);

var _reactRedux = __webpack_require__(7);

var _actions = __webpack_require__(61);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItem = function ListItem(props) {
  return _react2.default.createElement(
    'div',
    { className: 'list-container', onDragOver: function onDragOver(e) {
        return props.onDragOver(e);
      }, onDrop: function onDrop(e) {
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
      _react2.default.createElement('span', { className: 'fa fa-trash-o delete-link', 'aria-hidden': 'true', onClick: function onClick(e) {
          return props.dispatch(actions.deleteList(props.list));
        } })
    ),
    props.cards && props.cards.map(function (item) {
      return _react2.default.createElement(
        'div',
        { className: 'item-container', key: item.id,
          draggable: true, onDragStart: function onDragStart(e) {
            return props.onDragStart(e, item.id);
          }, onItemClick: function onItemClick(e) {
            return props.showModal(item);
          } },
        item.name
      );
    }),
    _react2.default.createElement(
      'div',
      { className: 'add-item' },
      _react2.default.createElement(_addItem2.default, { onItemAdd: function onItemAdd(item) {
          return props.dispatch(actions.addCard({ item: item, category: props.list.id }));
        }, hasActiveList: props.cards && props.cards.length })
    )
  );
};

ListItem.displayName = 'ListItem';

exports.default = (0, _reactRedux.connect)()(ListItem);

/***/ }),

/***/ 67:
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

/***/ 68:
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

var _index = __webpack_require__(37);

var _index2 = _interopRequireDefault(_index);

var _reactRouterDom = __webpack_require__(43);

var _reactRouterRedux = __webpack_require__(8);

var _home = __webpack_require__(39);

var _home2 = _interopRequireDefault(_home);

var _error = __webpack_require__(38);

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

},[68]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvdmlld3MvY29tcG9uZW50cy9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdmlld3MvY29tcG9uZW50cy9lZGl0SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvc3RvcmVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi92aWV3cy9wYWdlcy9lcnJvcjQwNC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdmlld3MvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci1kb20vZXNtL3JlYWN0LXJvdXRlci1kb20uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9zdG9yZXMvZGVmYXVsdFN0YXRlLmpzIiwid2VicGFjazovLy8uL2xpYi92aWV3cy9jb21wb25lbnRzL2FkZEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3ZpZXdzL2NvbXBvbmVudHMvYWRkTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdmlld3MvY29tcG9uZW50cy9saXN0LmpzIiwid2VicGFjazovLy8uL2xpYi92aWV3cy9jb21wb25lbnRzL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3ZpZXdzL2luZGV4LmpzIl0sIm5hbWVzIjpbIk1vZGFsIiwicHJvcHMiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJFZGl0SXRlbSIsIml0ZW0iLCJjb21tZW50cyIsIm1hcCIsImNvbW1lbnQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwicmVkdWNlcnMiLCJyZWR1Y2VyIiwiYXBwIiwiYXBwU3RhdGUiLCJkYXRhUmVxdWVzdHMiLCJyb3V0aW5nIiwicm91dGVyUmVkdWNlciIsImJvYXJkIiwicGFuZWxzIiwibGlzdFJlZHVjZXIiLCJ0YXNrcyIsInRhc2tzUmVkdWNlciIsInJvdXRpbmdNaWRkbGV3YXJlIiwiYnJvd3Nlckhpc3RvcnkiLCJzdG9yZSIsImRlZmF1bHRTdGF0ZSIsInRodW5rIiwid2luZG93IiwiZGV2VG9vbHNFeHRlbnNpb24iLCJmIiwiRXJyb3I0MDQiLCJhY3Rpb25zIiwiSG9tZSIsInN0YXRlIiwiYWN0aXZlSXRlbSIsIm9uRHJhZ092ZXIiLCJldiIsInByZXZlbnREZWZhdWx0Iiwib25EcmFnU3RhcnQiLCJuYW1lIiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsIm9uRHJvcCIsImNhdGVnb3J5IiwiaWQiLCJnZXREYXRhIiwiZGlzcGF0Y2giLCJtb3ZlQ2FyZCIsIm9uSXRlbUNsaWNrIiwic2V0U3RhdGUiLCJyZW5kZXJMaXN0IiwiY2FyZHMiLCJsaXN0IiwiaW5kZXgiLCJoYXNBY3RpdmVMaXN0Iiwic2VsZWN0IiwiZm9yRWFjaCIsInQiLCJwdXNoIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImZldGNoaW5nUGFnZURhdGEiLCJmZXRjaFBhZ2VEYXRhIiwiY3JlYXRlTGlzdCIsImRlbGV0ZUxpc3QiLCJhZGRDYXJkIiwiYWRkQ29tbWVudHMiLCJMT0NBVElPTl9DSEFOR0UiLCJGRVRDSElOR19QQUdFREFUQSIsIkNSRUFURV9MSVNUIiwiREVMRVRFX0xJU1QiLCJBRERfQ0FSRCIsIkFERF9DT01NRU5UUyIsIk1PVkVfQ0FSRCIsInR5cGUiLCJTRVRfUEFHRURBVEEiLCJwYXlsb2FkIiwiZGF0YSIsImFjdGlvbkV2ZW50cyIsImFjdGlvbiIsImFjdGlvblR5cGUiLCJuZXdTdGF0ZSIsImFzc2lnbiIsImN1cnJlbnQiLCJwYXRoIiwicGF0aG5hbWUiLCJjb3VudGVyIiwiZmlsdGVyIiwiZGVzY3JpcHRpb24iLCJjYXJkIiwiU0VUVElOR19QQUdFREFUQSIsInNldHRpbmdzIiwicGFnZVRpdGxlIiwiQWRkSXRlbSIsInNob3dBZGRMaW5rIiwic2hvd0FkZEJveCIsImhpZGVBZGRMaW5rIiwib25TYXZlQ2xpY2siLCJpbnB1dFZhbHVlIiwib25JdGVtQWRkIiwib25JbnB1dENoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiQWRkTGlzdCIsIkxpc3RJdGVtIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJQYWdlIiwiZXJyb3IiLCJjbGFzc05hbWUiLCJnZXRFcnJvckNvbnRlbnQiLCJjaGlsZHJlbiIsImhpc3RvcnkiLCJBcHAiLCJvbmxvYWQiLCJsb2NhdGlvbiIsIlJlYWN0RE9NIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxRQUFTLFNBQVRBLEtBQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3hCLE1BQUlBLE1BQU1DLFNBQVYsRUFBcUI7QUFDbkIsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLGVBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUEsY0FBTSxXQUFVLE9BQWhCO0FBQXlCRCxrQkFBTUU7QUFBL0IsV0FERjtBQUM4QyxrREFBTSxXQUFVLHdCQUFoQjtBQUQ5QyxTQURGO0FBR0U7QUFBQTtBQUFBLFlBQUssV0FBVSxlQUFmO0FBQ0csb0JBQUtGLEtBQUwsQ0FBV0c7QUFEZDtBQUhGO0FBREYsS0FERjtBQVdELEdBWkQsTUFZTztBQUNMLFdBQU8sSUFBUDtBQUNEO0FBQ0YsQ0FoQkQ7O2tCQWtCZUosSzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCZjs7Ozs7Ozs7Ozs7Ozs7SUFFTUssUTs7O0FBQ0osc0JBQWM7QUFBQTs7QUFBQTtBQUViOzs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHFCQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxxQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFLHNFQUFVLFdBQVUsWUFBcEIsaUJBQTJDLHVCQUEzQyxFQUZGO0FBR0U7QUFBQTtBQUFBLGNBQVEsV0FBVSxjQUFsQjtB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O0FBRUEsSUFBTUssVUFBVSw0Q0FBcUIsb0NBQXJCLEVBQTZDMUYsZUFBN0MsQ0FBaEI7QUFDQW1GLFFBQVFDLEdBQVIsQ0FBWU0sT0FBWjs7SUFFTUMsRzs7O0FBQ0osaUJBQWU7QUFBQTs7QUFBQTtBQUVkOzs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGdCQUFmO0FBQ0U7QUFBQyw4QkFBRDtBQUFBLFlBQVUsT0FBTzNGLGVBQWpCO0FBQ0U7QUFBQyxrQ0FBRDtBQUFBLGNBQVEsU0FBUzBGLE9BQWpCO0FBQ0U7QUFBQyxvQ0FBRDtBQUFBO0FBQ0UsNENBQUMscUJBQUQsSUFBTyxXQUFQLEVBQWEsTUFBSyxHQUFsQixFQUFzQixXQUFXbEYsY0FBakMsR0FERjtBQUVFLDRDQUFDLHFCQUFELElBQU8sTUFBSyxNQUFaLEVBQW1CLFdBQVdGLGVBQTlCLEdBRkY7QUFHRSw0Q0FBQyxxQkFBRCxJQUFPLGFBQVAsRUFBZSxXQUFXQSxlQUExQjtBQUhGO0FBREY7QUFERjtBQURGLE9BREY7QUFhRDs7OztFQW5CZXZCLGdCQUFNQyxTOztBQXNCeEIyRyxJQUFJMUcsV0FBSixHQUFrQixLQUFsQjs7QUFFQTtBQUNBLElBQUksT0FBT2tCLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDakNBLFNBQU95RixNQUFQLEdBQWdCLFlBQU07QUFDcEIsUUFBSXRILFFBQVE7QUFDVnVGLFlBQU1nQyxTQUFTL0I7QUFETCxLQUFaO0FBR0FnQyx1QkFBU0MsTUFBVCxDQUFnQmhILGdCQUFNaUgsYUFBTixDQUFvQkwsR0FBcEIsRUFBeUJySCxLQUF6QixDQUFoQixFQUFpRDJILFNBQVNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBakQ7QUFDRCxHQUxEO0FBTUQ7O2tCQUVjUCxHIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTW9kYWwgPSAoKHByb3BzKSA9PiB7XHJcbiAgaWYgKHByb3BzLnNob3dNb2RhbCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1vdmVybGF5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+e3Byb3BzLnRpdGxlfTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJmYSBmYS10aW1lcyByZXNldC1saW5rXCI+PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbnRlbnR9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi92aWV3cy9jb21wb25lbnRzL21vZGFsLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEVkaXRJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0LWl0ZW0tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1zZWN0aW9uXCI+XHJcbiAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImxpc3QtaW5wdXRcIiBjbGFzc05hbWU9XCJFbnRlciBkZXNjcmlwdGlvbi4uLiBcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNhdmVcIj5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50cy1pbnB1dC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICA8bGFiZWw+Q29tbWVudHM8L2xhYmVsPlxyXG4gICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImxpc3QtaW5wdXRcIiBjbGFzc05hbWU9XCJFbnRlciBjb21tZW50IFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2F2ZVwiPlNhdmU8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzLXJlbmRlci1zZWN0aW9uXCI+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5pdGVtLmNvbW1lbnRzICYmIHRoaXMucHJvcHMuaXRlbS5jb21tZW50cy5tYXAoY29tbWVudCA9PiA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnQtaXRlbVwiPntjb21tZW50fTwvZGl2Pil9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuRWRpdEl0ZW0uZGlzcGxheU5hbWUgPSAnRWRpdEl0ZW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdEl0ZW07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3ZpZXdzL2NvbXBvbmVudHMvZWRpdEl0ZW0uanMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IHsgcm91dGVyTWlkZGxld2FyZSwgcm91dGVyUmVkdWNlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XHJcbmltcG9ydCAqIGFzIHJlZHVjZXJzIGZyb20gJy4uL3JlZHVjZXJzL2luZGV4JztcclxuaW1wb3J0IGRlZmF1bHRTdGF0ZSBmcm9tICcuL2RlZmF1bHRTdGF0ZSc7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBhcHA6IHJlZHVjZXJzLmFwcFN0YXRlLFxyXG4gIGRhdGFSZXF1ZXN0czogcmVkdWNlcnMuZGF0YVJlcXVlc3RzLFxyXG4gIHJvdXRpbmc6IHJvdXRlclJlZHVjZXIsXHJcbiAgYm9hcmQ6IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBwYW5lbHM6IHJlZHVjZXJzLmxpc3RSZWR1Y2VyLFxyXG4gICAgdGFza3M6IHJlZHVjZXJzLnRhc2tzUmVkdWNlclxyXG4gIH0pXHJcbn0pO1xyXG5cclxuY29uc3Qgcm91dGluZ01pZGRsZXdhcmUgPSByb3V0ZXJNaWRkbGV3YXJlKGJyb3dzZXJIaXN0b3J5KTtcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZGVmYXVsdFN0YXRlLCBjb21wb3NlKFxyXG4gIGFwcGx5TWlkZGxld2FyZSh0aHVuaywgcm91dGluZ01pZGRsZXdhcmUpLFxyXG4gIHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbiA/IHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbigpIDogZiA9PiBmXHJcbikpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9zdG9yZXMvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgRXJyb3I0MDQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJlcnJvci1oZWFkaW5nXCI+NDA0IC0gTWlzc2luZyBSZXNvdXJjZSA8L2gyPlxyXG4gICAgICAgIDxwPlBsZWFzZSB0cnkgYWdhaW4sIGJ1dCBpZiB0aGUgcHJvYmxlbSBwZXJzaXN0LCBjb250YWN0IGFuIGFkbWluaXN0cmF0b3IuPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5FcnJvcjQwNC5kaXNwbGF5TmFtZSA9ICdFcnJvcjQwNCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvcjQwNDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3ZpZXdzL3BhZ2VzL2Vycm9yNDA0LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0JztcclxuaW1wb3J0IEFkZExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9hZGRMaXN0JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwnO1xyXG5pbXBvcnQgRWRpdEl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9lZGl0SXRlbSc7XHJcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGFjdGl2ZUl0ZW06IHt9LFxyXG4gICAgc2hvd01vZGFsOiBmYWxzZVxyXG4gIH07XHJcblxyXG4gIG9uRHJhZ092ZXIgPSBldiA9PiB7XHJcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH07XHJcblxyXG4gIG9uRHJhZ1N0YXJ0ID0gKGV2LCBuYW1lKSA9PiB7XHJcbiAgICBldi5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImlkXCIsIG5hbWUpO1xyXG4gIH07XHJcblxyXG4gIG9uRHJvcCA9IChldiwgY2F0ZWdvcnkpID0+IHtcclxuICAgIGNvbnN0IGlkID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJpZFwiKTtcclxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9ucy5tb3ZlQ2FyZCh7aWQsIGNhdGVnb3J5fSkpO1xyXG4gIH07XHJcblxyXG4gIG9uSXRlbUNsaWNrID0gKGl0ZW0pID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBhY3RpdmVJdGVtOiBpdGVtLFxyXG4gICAgICBzaG93TW9kYWw6IHRydWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyTGlzdCA9IChjYXJkcykgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMubGlzdC5tYXAoKGxpc3QsIGluZGV4KSA9PiBcclxuICAgICAgPExpc3QgY2FyZHM9e2NhcmRzW2xpc3QuaWRdfSBsaXN0PXtsaXN0fSBvbkRyb3A9e3RoaXMub25Ecm9wfSBzaG93TW9kYWw9e3RoaXMuc2hvd01vZGFsfVxyXG4gICAgICAgICAgICBvbkRyYWdPdmVyPXt0aGlzLm9uRHJhZ092ZXJ9IGtleT17aW5kZXh9IG9uRHJhZ1N0YXJ0PXt0aGlzLm9uRHJhZ1N0YXJ0fSAvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UGFnZSBjbGFzc05hbWU9XCJob21lLXBhZ2VcIiBoZWFkZXI9XCJUcmVsbG9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAge3RoaXMucmVuZGVyTGlzdCh0aGlzLnByb3BzLmNhcmRzKX1cclxuICAgICAgICAgIDxBZGRMaXN0IGhhc0FjdGl2ZUxpc3Q9e3RoaXMucHJvcHMuaGFzQWN0aXZlTGlzdH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TW9kYWwgc2hvdz17dGhpcy5zdGF0ZS5zaG93TW9kYWx9IHRpdGxlPVwiRWRpdCBJdGVtXCI+XHJcbiAgICAgICAgICA8RWRpdEl0ZW0gaXRlbT17dGhpcy5zdGF0ZS5hY3RpdmVJdGVtfSAvPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5Ib21lLmRpc3BsYXlOYW1lID0gJ0hvbWUnO1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0IChzdGF0ZSkge1xyXG4gIGxldCBjYXJkcyA9IHt9O1xyXG4gIHN0YXRlLmJvYXJkLnRhc2tzLmNhcmRzLmZvckVhY2godCA9PiB7XHJcbiAgICBjYXJkc1t0LmNhdGVnb3J5XSA9IGNhcmRzW3QuY2F0ZWdvcnldIHx8IFtdOyBcclxuICAgIGNhcmRzW3QuY2F0ZWdvcnldLnB1c2godCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBsaXN0OiBzdGF0ZS5ib2FyZC5wYW5lbHMubGlzdCxcclxuICAgIGNhcmRzOiBjYXJkcyxcclxuICAgIGhhc0FjdGl2ZUxpc3Q6IE9iamVjdC5rZXlzKGNhcmRzKS5sZW5ndGggPiAwXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzZWxlY3QpKEhvbWUpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdmlld3MvcGFnZXMvaG9tZS5qcyIsImltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZXIsIF9fUm91dGVyQ29udGV4dCwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuZXhwb3J0ICogZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5LCBjcmVhdGVIYXNoSGlzdG9yeSwgY3JlYXRlTG9jYXRpb24gfSBmcm9tICdoaXN0b3J5JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd0aW55LXdhcm5pbmcnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UnO1xuaW1wb3J0IGludmFyaWFudCBmcm9tICd0aW55LWludmFyaWFudCc7XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIGEgPFJvdXRlcj4gdGhhdCB1c2VzIEhUTUw1IGhpc3RvcnkuXG4gKi9cblxudmFyIEJyb3dzZXJSb3V0ZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoQnJvd3NlclJvdXRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQnJvd3NlclJvdXRlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcbiAgICBfdGhpcy5oaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoX3RoaXMucHJvcHMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBCcm93c2VyUm91dGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgICAgaGlzdG9yeTogdGhpcy5oaXN0b3J5LFxuICAgICAgY2hpbGRyZW46IHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gQnJvd3NlclJvdXRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBCcm93c2VyUm91dGVyLnByb3BUeXBlcyA9IHtcbiAgICBiYXNlbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgZm9yY2VSZWZyZXNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBnZXRVc2VyQ29uZmlybWF0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBrZXlMZW5ndGg6IFByb3BUeXBlcy5udW1iZXJcbiAgfTtcblxuICBCcm93c2VyUm91dGVyLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCF0aGlzLnByb3BzLmhpc3RvcnksIFwiPEJyb3dzZXJSb3V0ZXI+IGlnbm9yZXMgdGhlIGhpc3RvcnkgcHJvcC4gVG8gdXNlIGEgY3VzdG9tIGhpc3RvcnksIFwiICsgXCJ1c2UgYGltcG9ydCB7IFJvdXRlciB9YCBpbnN0ZWFkIG9mIGBpbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9YC5cIikgOiB2b2lkIDA7XG4gIH07XG59XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIGEgPFJvdXRlcj4gdGhhdCB1c2VzIHdpbmRvdy5sb2NhdGlvbi5oYXNoLlxuICovXG5cbnZhciBIYXNoUm91dGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEhhc2hSb3V0ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEhhc2hSb3V0ZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgX3RoaXMuaGlzdG9yeSA9IGNyZWF0ZUhhc2hIaXN0b3J5KF90aGlzLnByb3BzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gSGFzaFJvdXRlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICAgIGhpc3Rvcnk6IHRoaXMuaGlzdG9yeSxcbiAgICAgIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEhhc2hSb3V0ZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgSGFzaFJvdXRlci5wcm9wVHlwZXMgPSB7XG4gICAgYmFzZW5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGdldFVzZXJDb25maXJtYXRpb246IFByb3BUeXBlcy5mdW5jLFxuICAgIGhhc2hUeXBlOiBQcm9wVHlwZXMub25lT2YoW1wiaGFzaGJhbmdcIiwgXCJub3NsYXNoXCIsIFwic2xhc2hcIl0pXG4gIH07XG5cbiAgSGFzaFJvdXRlci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghdGhpcy5wcm9wcy5oaXN0b3J5LCBcIjxIYXNoUm91dGVyPiBpZ25vcmVzIHRoZSBoaXN0b3J5IHByb3AuIFRvIHVzZSBhIGN1c3RvbSBoaXN0b3J5LCBcIiArIFwidXNlIGBpbXBvcnQgeyBSb3V0ZXIgfWAgaW5zdGVhZCBvZiBgaW1wb3J0IHsgSGFzaFJvdXRlciBhcyBSb3V0ZXIgfWAuXCIpIDogdm9pZCAwO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufVxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgcmVuZGVyaW5nIGEgaGlzdG9yeS1hd2FyZSA8YT4uXG4gKi9cblxuXG52YXIgTGluayA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShMaW5rLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBMaW5rKCkge1xuICAgIHJldHVybiBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBMaW5rLnByb3RvdHlwZTtcblxuICBfcHJvdG8uaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCwgaGlzdG9yeSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHRoaXMucHJvcHMub25DbGljayhldmVudCk7XG5cbiAgICBpZiAoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgJiYgLy8gb25DbGljayBwcmV2ZW50ZWQgZGVmYXVsdFxuICAgIGV2ZW50LmJ1dHRvbiA9PT0gMCAmJiAoIC8vIGlnbm9yZSBldmVyeXRoaW5nIGJ1dCBsZWZ0IGNsaWNrc1xuICAgICF0aGlzLnByb3BzLnRhcmdldCB8fCB0aGlzLnByb3BzLnRhcmdldCA9PT0gXCJfc2VsZlwiKSAmJiAvLyBsZXQgYnJvd3NlciBoYW5kbGUgXCJ0YXJnZXQ9X2JsYW5rXCIgZXRjLlxuICAgICFpc01vZGlmaWVkRXZlbnQoZXZlbnQpIC8vIGlnbm9yZSBjbGlja3Mgd2l0aCBtb2RpZmllciBrZXlzXG4gICAgKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBtZXRob2QgPSB0aGlzLnByb3BzLnJlcGxhY2UgPyBoaXN0b3J5LnJlcGxhY2UgOiBoaXN0b3J5LnB1c2g7XG4gICAgICAgIG1ldGhvZCh0aGlzLnByb3BzLnRvKTtcbiAgICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBpbm5lclJlZiA9IF90aGlzJHByb3BzLmlubmVyUmVmLFxuICAgICAgICByZXBsYWNlID0gX3RoaXMkcHJvcHMucmVwbGFjZSxcbiAgICAgICAgdG8gPSBfdGhpcyRwcm9wcy50byxcbiAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJpbm5lclJlZlwiLCBcInJlcGxhY2VcIiwgXCJ0b1wiXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX19Sb3V0ZXJDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgIWNvbnRleHQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiWW91IHNob3VsZCBub3QgdXNlIDxMaW5rPiBvdXRzaWRlIGEgPFJvdXRlcj5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gY3JlYXRlTG9jYXRpb24odG8sIG51bGwsIG51bGwsIGNvbnRleHQubG9jYXRpb24pIDogdG87XG4gICAgICB2YXIgaHJlZiA9IGxvY2F0aW9uID8gY29udGV4dC5oaXN0b3J5LmNyZWF0ZUhyZWYobG9jYXRpb24pIDogXCJcIjtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUNsaWNrKGV2ZW50LCBjb250ZXh0Lmhpc3RvcnkpO1xuICAgICAgICB9LFxuICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICByZWY6IGlubmVyUmVmXG4gICAgICB9KSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIExpbms7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgdmFyIHRvVHlwZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKTtcbiAgdmFyIGlubmVyUmVmVHlwZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGN1cnJlbnQ6IFByb3BUeXBlcy5hbnlcbiAgfSldKTtcbiAgTGluay5wcm9wVHlwZXMgPSB7XG4gICAgaW5uZXJSZWY6IGlubmVyUmVmVHlwZSxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0YXJnZXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdG86IHRvVHlwZS5pc1JlcXVpcmVkXG4gIH07XG59XG5cbmZ1bmN0aW9uIGpvaW5DbGFzc25hbWVzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgY2xhc3NuYW1lcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBjbGFzc25hbWVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGNsYXNzbmFtZXMuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuIGk7XG4gIH0pLmpvaW4oXCIgXCIpO1xufVxuLyoqXG4gKiBBIDxMaW5rPiB3cmFwcGVyIHRoYXQga25vd3MgaWYgaXQncyBcImFjdGl2ZVwiIG9yIG5vdC5cbiAqL1xuXG5cbmZ1bmN0aW9uIE5hdkxpbmsoX3JlZikge1xuICB2YXIgX3JlZiRhcmlhQ3VycmVudCA9IF9yZWZbXCJhcmlhLWN1cnJlbnRcIl0sXG4gICAgICBhcmlhQ3VycmVudCA9IF9yZWYkYXJpYUN1cnJlbnQgPT09IHZvaWQgMCA/IFwicGFnZVwiIDogX3JlZiRhcmlhQ3VycmVudCxcbiAgICAgIF9yZWYkYWN0aXZlQ2xhc3NOYW1lID0gX3JlZi5hY3RpdmVDbGFzc05hbWUsXG4gICAgICBhY3RpdmVDbGFzc05hbWUgPSBfcmVmJGFjdGl2ZUNsYXNzTmFtZSA9PT0gdm9pZCAwID8gXCJhY3RpdmVcIiA6IF9yZWYkYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgYWN0aXZlU3R5bGUgPSBfcmVmLmFjdGl2ZVN0eWxlLFxuICAgICAgY2xhc3NOYW1lUHJvcCA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgZXhhY3QgPSBfcmVmLmV4YWN0LFxuICAgICAgaXNBY3RpdmVQcm9wID0gX3JlZi5pc0FjdGl2ZSxcbiAgICAgIGxvY2F0aW9uID0gX3JlZi5sb2NhdGlvbixcbiAgICAgIHN0cmljdCA9IF9yZWYuc3RyaWN0LFxuICAgICAgc3R5bGVQcm9wID0gX3JlZi5zdHlsZSxcbiAgICAgIHRvID0gX3JlZi50byxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJhcmlhLWN1cnJlbnRcIiwgXCJhY3RpdmVDbGFzc05hbWVcIiwgXCJhY3RpdmVTdHlsZVwiLCBcImNsYXNzTmFtZVwiLCBcImV4YWN0XCIsIFwiaXNBY3RpdmVcIiwgXCJsb2NhdGlvblwiLCBcInN0cmljdFwiLCBcInN0eWxlXCIsIFwidG9cIl0pO1xuXG4gIHZhciBwYXRoID0gdHlwZW9mIHRvID09PSBcIm9iamVjdFwiID8gdG8ucGF0aG5hbWUgOiB0bzsgLy8gUmVnZXggdGFrZW4gZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL3BpbGxhcmpzL3BhdGgtdG8tcmVnZXhwL2Jsb2IvbWFzdGVyL2luZGV4LmpzI0wyMDJcblxuICB2YXIgZXNjYXBlZFBhdGggPSBwYXRoICYmIHBhdGgucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZSwge1xuICAgIHBhdGg6IGVzY2FwZWRQYXRoLFxuICAgIGV4YWN0OiBleGFjdCxcbiAgICBzdHJpY3Q6IHN0cmljdCxcbiAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgY2hpbGRyZW46IGZ1bmN0aW9uIGNoaWxkcmVuKF9yZWYyKSB7XG4gICAgICB2YXIgbG9jYXRpb24gPSBfcmVmMi5sb2NhdGlvbixcbiAgICAgICAgICBtYXRjaCA9IF9yZWYyLm1hdGNoO1xuICAgICAgdmFyIGlzQWN0aXZlID0gISEoaXNBY3RpdmVQcm9wID8gaXNBY3RpdmVQcm9wKG1hdGNoLCBsb2NhdGlvbikgOiBtYXRjaCk7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gaXNBY3RpdmUgPyBqb2luQ2xhc3NuYW1lcyhjbGFzc05hbWVQcm9wLCBhY3RpdmVDbGFzc05hbWUpIDogY2xhc3NOYW1lUHJvcDtcbiAgICAgIHZhciBzdHlsZSA9IGlzQWN0aXZlID8gX2V4dGVuZHMoe30sIHN0eWxlUHJvcCwgYWN0aXZlU3R5bGUpIDogc3R5bGVQcm9wO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywgX2V4dGVuZHMoe1xuICAgICAgICBcImFyaWEtY3VycmVudFwiOiBpc0FjdGl2ZSAmJiBhcmlhQ3VycmVudCB8fCBudWxsLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICB0bzogdG9cbiAgICAgIH0sIHJlc3QpKTtcbiAgICB9XG4gIH0pO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHZhciBhcmlhQ3VycmVudFR5cGUgPSBQcm9wVHlwZXMub25lT2YoW1wicGFnZVwiLCBcInN0ZXBcIiwgXCJsb2NhdGlvblwiLCBcImRhdGVcIiwgXCJ0aW1lXCIsIFwidHJ1ZVwiXSk7XG4gIE5hdkxpbmsucHJvcFR5cGVzID0gX2V4dGVuZHMoe30sIExpbmsucHJvcFR5cGVzLCB7XG4gICAgXCJhcmlhLWN1cnJlbnRcIjogYXJpYUN1cnJlbnRUeXBlLFxuICAgIGFjdGl2ZUNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhY3RpdmVTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZXhhY3Q6IFJvdXRlLnByb3BUeXBlcy5leGFjdCxcbiAgICBpc0FjdGl2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc3RyaWN0OiBSb3V0ZS5wcm9wVHlwZXMuc3RyaWN0LFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG4gIH0pO1xufVxuXG5leHBvcnQgeyBCcm93c2VyUm91dGVyLCBIYXNoUm91dGVyLCBMaW5rLCBOYXZMaW5rIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3Qtcm91dGVyLWRvbS9lc20vcmVhY3Qtcm91dGVyLWRvbS5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFRoaXMgcHJvdmlkZXMgdGhlIHZhcmlvdXMgcmVkdXggYWN0aW9ucyB0byB0cmlnZ2VyIGFwcCBzdGF0ZSBjaGFuZ2VzIGJ5IHRoZSByZWR1eCByZWR1Y2VyXHJcbiAqIEBtb2R1bGUgUmVkdXggYWN0aW9uc1xyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBMT0NBVElPTl9DSEFOR0UgPSAnQEByb3V0ZXIvTE9DQVRJT05fQ0hBTkdFJztcclxuZXhwb3J0IGNvbnN0IEZFVENISU5HX1BBR0VEQVRBID0gJ0ZFVENISU5HX1BBR0VEQVRBJztcclxuZXhwb3J0IGNvbnN0IENSRUFURV9MSVNUID0gJ0NSRUFURV9MSVNUJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9MSVNUID0gJ0RFTEVURV9MSVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DQVJEID0gJ0FERF9DQVJEJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UUyA9ICdBRERfQ09NTUVOVFMnO1xyXG5leHBvcnQgY29uc3QgTU9WRV9DQVJEID0gJ01PVkVfQ0FSRCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hpbmdQYWdlRGF0YSAoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEZFVENISU5HX1BBR0VEQVRBXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUGFnZURhdGEgKCkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcclxuICAgIGRpc3BhdGNoKGZldGNoaW5nUGFnZURhdGEoKSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFNFVF9QQUdFREFUQSxcclxuICAgICAgcGF5bG9hZDogXCJtZXNzYWdlXCJcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0IChkYXRhKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hpbmdQYWdlRGF0YSgpKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQ1JFQVRFX0xJU1QsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGFcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVMaXN0IChkYXRhKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hpbmdQYWdlRGF0YSgpKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogREVMRVRFX0xJU1QsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGFcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDYXJkIChkYXRhKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hpbmdQYWdlRGF0YSgpKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQUREX0NBUkQsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGFcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3ZlQ2FyZCAoZGF0YSkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcclxuICAgIGRpc3BhdGNoKGZldGNoaW5nUGFnZURhdGEoKSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IE1PVkVfQ0FSRCxcclxuICAgICAgcGF5bG9hZDogZGF0YVxyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENvbW1lbnRzIChkYXRhKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hpbmdQYWdlRGF0YSgpKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRTLFxyXG4gICAgICBwYXlsb2FkOiBkYXRhXHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvYWN0aW9ucy9pbmRleC5qcyIsImltcG9ydCAqIGFzIGFjdGlvbkV2ZW50cyBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBTdGF0ZSAoc3RhdGUsIGFjdGlvbikge1xyXG4gIGxldCBhY3Rpb25UeXBlID0gYWN0aW9uLnR5cGUsXHJcbiAgICAgIG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xyXG5cclxuICBpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9uRXZlbnRzLkxPQ0FUSU9OX0NIQU5HRSkge1xyXG4gICAgbmV3U3RhdGUuY3VycmVudC5wYXRoID0gYWN0aW9uLnBheWxvYWQucGF0aG5hbWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3U3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaXN0UmVkdWNlciAoc3RhdGUsIGFjdGlvbikge1xyXG4gIGxldCBhY3Rpb25UeXBlID0gYWN0aW9uLnR5cGUsXHJcbiAgICAgIG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xyXG5cclxuICBpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9uRXZlbnRzLkNSRUFURV9MSVNUKSB7XHJcbiAgICBuZXdTdGF0ZS5saXN0LnB1c2goe1xyXG4gICAgICBpZDogbmV3U3RhdGUuY291bnRlciArIDEsXHJcbiAgICAgIG5hbWU6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICB9KTtcclxuICAgIG5ld1N0YXRlLmNvdW50ZXIgKz0gMTtcclxuICB9IGVsc2UgaWYgKGFjdGlvblR5cGUgPT09IGFjdGlvbkV2ZW50cy5ERUxFVEVfTElTVCkge1xyXG4gICAgbmV3U3RhdGUubGlzdCA9IHN0YXRlLmxpc3QuZmlsdGVyKGxpc3QgPT4gbGlzdC5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ld1N0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGFza3NSZWR1Y2VyIChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgbGV0IGFjdGlvblR5cGUgPSBhY3Rpb24udHlwZSxcclxuICAgICAgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XHJcblxyXG4gIGlmIChhY3Rpb25UeXBlID09PSBhY3Rpb25FdmVudHMuQUREX0NBUkQpIHtcclxuICAgIG5ld1N0YXRlLmNhcmRzLnB1c2goe1xyXG4gICAgICBpZDogbmV3U3RhdGUuY291bnRlciArIDEsXHJcbiAgICAgIG5hbWU6IGFjdGlvbi5wYXlsb2FkLml0ZW0sXHJcbiAgICAgIGNhdGVnb3J5OiBhY3Rpb24ucGF5bG9hZC5jYXRlZ29yeSxcclxuICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICBjb21tZW50czogW11cclxuICAgIH0pO1xyXG4gICAgbmV3U3RhdGUuY291bnRlciArPSAxO1xyXG4gIH0gZWxzZSBpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9uRXZlbnRzLk1PVkVfQ0FSRCkge1xyXG4gICAgbmV3U3RhdGUuY2FyZHMgPSBzdGF0ZS5jYXJkcy5tYXAoY2FyZCA9PiB7XHJcbiAgICAgIGlmIChjYXJkLmlkID09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XHJcbiAgICAgICAgY2FyZC5jYXRlZ29yeSA9IGFjdGlvbi5wYXlsb2FkLmNhdGVnb3J5O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjYXJkO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmIChhY3Rpb25UeXBlID09PSBhY3Rpb25FdmVudHMuREVMRVRFX0xJU1QpIHtcclxuICAgIG5ld1N0YXRlLmNhcmRzID0gc3RhdGUuY2FyZHMuZmlsdGVyKGNhcmQgPT4gY2FyZC5jYXRlZ29yeSAhPT0gYWN0aW9uLnBheWxvYWQuaWQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ld1N0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGF0YVJlcXVlc3RzIChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgbGV0IGFjdGlvblR5cGUgPSBhY3Rpb24udHlwZSxcclxuICAgICAgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XHJcblxyXG4gIGlmIChhY3Rpb25UeXBlID09PSBhY3Rpb25FdmVudHMuU0VUVElOR19QQUdFREFUQSkge1xyXG4gICAgbmV3U3RhdGUuc2V0dGluZ3MgPSB0cnVlO1xyXG4gIH0gZWxzZSBpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9uRXZlbnRzLlNFVF9QQUdFREFUQSkge1xyXG4gICAgbmV3U3RhdGUuc2V0dGluZ3MgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXdTdGF0ZTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvcmVkdWNlcnMvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgc3RhdGUgPSB7XHJcbiAgYXBwOiB7XHJcbiAgICBjdXJyZW50OiB7XHJcbiAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgcGFnZVRpdGxlOiAnVHJlbGxvJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYm9hcmQ6IHtcclxuICAgIHBhbmVsczoge1xyXG4gICAgICBsaXN0OiBbe1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgbmFtZTogJ3RvZG8nXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICBuYW1lOiAnd29ya2luZydcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgbmFtZTogJ2NvbXBsZXRlJ1xyXG4gICAgICB9XSxcclxuICAgICAgY291bnRlcjogM1xyXG4gICAgfSxcclxuICAgIHRhc2tzOiB7XHJcbiAgICAgIGNhcmRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICBuYW1lOiBcIkFkZCBNb3JlIFRhc2tzXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeTogMSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgY29tbWVudHM6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBjb3VudGVyOiAxXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RhdGU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9zdG9yZXMvZGVmYXVsdFN0YXRlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuXHJcbmNsYXNzIEFkZEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKCk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRzaG93QWRkQm94OiBmYWxzZSxcclxuXHRcdFx0aW5wdXRWYWx1ZTogJydcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNob3dBZGRMaW5rID0gKCkgPT4ge1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3dBZGRCb3g6IHRydWVcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgXHJcblx0aGlkZUFkZExpbmsgPSAoKSA9PiB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd0FkZEJveDogZmFsc2VcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgXHJcbiAgb25TYXZlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5pbnB1dFZhbHVlICE9PSAnJykge1xyXG4gICAgICB0aGlzLnByb3BzLm9uSXRlbUFkZCh0aGlzLnN0YXRlLmlucHV0VmFsdWUpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpbnB1dFZhbHVlOiAnJyxcclxuICAgICAgICBzaG93QWRkQm94OiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uSW5wdXRDaGFuZ2UgPSBldiA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaW5wdXRWYWx1ZTogZXYudGFyZ2V0LnZhbHVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cdHJlbmRlciAoKSB7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWRkLWl0ZW1cIiA+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5zaG93QWRkQm94XHJcblx0XHRcdFx0XHQ/IDxkaXYgY2xhc3NOYW1lPVwiYWRkLWxpc3Qtc2VjdGlvblwiPlxyXG5cdFx0XHRcdFx0XHQgIDx0ZXh0YXJlYSBhdXRvRm9jdXMgY2xhc3NOYW1lPVwibGlzdC1pbnB1dFwiIG9uQ2hhbmdlPXt0aGlzLm9uSW5wdXRDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiRW50ZXIgYSB0aXRsZSBmb3IgdGhpcyBjYXJkLi4uXCIgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9Lz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2F2ZVwiIG9uQ2xpY2s9e3RoaXMub25TYXZlQ2xpY2t9PkFkZCBDYXJkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVzZXQtbGluayBmYSBmYS10aW1lc1wiIG9uQ2xpY2s9e3RoaXMuaGlkZUFkZExpbmt9Pjwvc3Bhbj5cclxuXHRcdFx0XHRcdCAgPC9kaXY+XHJcbiAgICAgICAgICA6IDxhIGNsYXNzTmFtZT1cImFkZC1jYXJkLWxpbmtcIiBvbkNsaWNrPXt0aGlzLnNob3dBZGRMaW5rfT4gXHJcbiAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmhhc0FjdGl2ZUxpc3QgPyAnKyBBZGQgQW5vdGhlciBDYXJkJyA6ICcrIEFkZCBDYXJkJyB9XHJcbiAgICAgICAgICAgIDwvYT5cclxuXHRcdFx0XHR9XHJcblx0XHQ8L2Rpdj4pO1xyXG5cdH1cclxufTtcclxuXHJcbkFkZEl0ZW0uZGlzcGxheU5hbWUgPSAnQWRkSXRlbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRJdGVtO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi92aWV3cy9jb21wb25lbnRzL2FkZEl0ZW0uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5cclxuY2xhc3MgQWRkTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHNob3dBZGRCb3g6IGZhbHNlLFxyXG5cdFx0XHRpbnB1dFZhbHVlOiAnJ1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2hvd0FkZExpbmsgPSAoKSA9PiB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd0FkZEJveDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBcclxuXHRoaWRlQWRkTGluayA9ICgpID0+IHtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaG93QWRkQm94OiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBcclxuICBvblNhdmVDbGljayA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmlucHV0VmFsdWUgIT09ICcnKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9ucy5jcmVhdGVMaXN0KHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSkpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpbnB1dFZhbHVlOiAnJyxcclxuICAgICAgICBzaG93QWRkQm94OiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uSW5wdXRDaGFuZ2UgPSBldiA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaW5wdXRWYWx1ZTogZXYudGFyZ2V0LnZhbHVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cdHJlbmRlciAoKSB7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWRkLWxpc3RcIiA+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5zaG93QWRkQm94XHJcblx0XHRcdFx0XHQ/IDxkaXYgY2xhc3NOYW1lPVwibGlzdC1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0ICA8aW5wdXQgYXV0b0ZvY3VzIGNsYXNzTmFtZT1cImxpc3QtaW5wdXRcIiBwbGFjZWhvbGRlcj1cIkFkZCBhIGxpc3QuLi5cIiBvbkNoYW5nZT17dGhpcy5vbklucHV0Q2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0vPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zYXZlXCIgb25DbGljaz17dGhpcy5vblNhdmVDbGlja30+QWRkIExpc3Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZXNldC1saW5rIGZhIGZhLXRpbWVzXCIgb25DbGljaz17dGhpcy5oaWRlQWRkTGlua30+PC9zcGFuPlxyXG5cdFx0XHRcdFx0ICA8L2Rpdj5cclxuICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9XCJhZGQtbGlzdC1saW5rXCIgb25DbGljaz17dGhpcy5zaG93QWRkTGlua30+IFxyXG4gICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5oYXNBY3RpdmVMaXN0ID8gJysgQWRkIEFub3RoZXIgTGlzdCcgOiAnKyBBZGQgQSBMaXN0JyB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdH1cclxuXHRcdDwvZGl2Pik7XHJcblx0fVxyXG59O1xyXG5cclxuQWRkTGlzdC5kaXNwbGF5TmFtZSA9ICdBZGRMaXN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShBZGRMaXN0KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdmlld3MvY29tcG9uZW50cy9hZGRMaXN0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFkZEl0ZW0gZnJvbSAnLi9hZGRJdGVtJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuXHJcbmNvbnN0IExpc3RJdGVtID0gKChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1jb250YWluZXJcIiBvbkRyYWdPdmVyPXtlID0+IHByb3BzLm9uRHJhZ092ZXIoZSl9IG9uRHJvcD17ZSA9PiBwcm9wcy5vbkRyb3AoZSwgcHJvcHMubGlzdC5pZCl9ID5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1oZWFkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC10aXRsZVwiIGNvbnRlbnRFZGl0YWJsZSBvbklucHV0PXtlID0+IGNvbnNvbGUubG9nKCdsaXN0JywgZSl9Pntwcm9wcy5saXN0Lm5hbWV9PC9kaXY+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoLW8gZGVsZXRlLWxpbmtcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBvbkNsaWNrPXtlID0+IHByb3BzLmRpc3BhdGNoKGFjdGlvbnMuZGVsZXRlTGlzdChwcm9wcy5saXN0KSl9Pjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgeyBcclxuICAgICAgcHJvcHMuY2FyZHMgJiYgcHJvcHMuY2FyZHMubWFwKChpdGVtKSA9PiA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tY29udGFpbmVyXCIga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgIGRyYWdnYWJsZSBvbkRyYWdTdGFydD17ZSA9PiBwcm9wcy5vbkRyYWdTdGFydChlLCBpdGVtLmlkKX0gb25JdGVtQ2xpY2s9e2UgPT4gcHJvcHMuc2hvd01vZGFsKGl0ZW0pfT5cclxuICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICA8L2Rpdj4pXHJcbiAgICB9XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC1pdGVtXCI+XHJcbiAgICAgIDxBZGRJdGVtIG9uSXRlbUFkZD17aXRlbSA9PiBwcm9wcy5kaXNwYXRjaChhY3Rpb25zLmFkZENhcmQoe2l0ZW0sIGNhdGVnb3J5OiBwcm9wcy5saXN0LmlkfSkpfSBoYXNBY3RpdmVMaXN0PXtwcm9wcy5jYXJkcyAmJiBwcm9wcy5jYXJkcy5sZW5ndGh9IC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxufSk7XHJcblxyXG5MaXN0SXRlbS5kaXNwbGF5TmFtZSA9ICdMaXN0SXRlbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoTGlzdEl0ZW0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdmlld3MvY29tcG9uZW50cy9saXN0LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZXJyb3I6IGZhbHNlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkQ2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZXJyb3I6IHRydWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RXJyb3JDb250ZW50ICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1lcnJvci1jb250ZW50XCI+XHJcbiAgICAgICAgU29tZSBFcnJvciBvY2N1cmVkLiBXZSByZWdyZXQgZm9yIGluY29udmluaWVuY2UuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxyXG4gICAgICAgIDxoZWFkZXIgaWQ9XCJoZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1pY29uXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8bWFpbiBpZD1cImJvZHlcIj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvclxyXG4gICAgICAgICAgICAgID8gIHRoaXMuZ2V0RXJyb3JDb250ZW50KClcclxuICAgICAgICAgICAgICA6IHRoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIEdlbmVyYXRlZCBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2plZnJlZXN1aml0L2dlbmVyYXRvci1yZWFjdC1ub2RlXCI+Z2VuZXJhdG9yLXJlYWN0LW5vZGU8L2E+LlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblBhZ2UuZGlzcGxheU5hbWUgPSAnUGFnZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdmlld3MvY29tcG9uZW50cy9wYWdlLmpzIiwiLyogZ2xvYmFsIGxvY2F0aW9uICovXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgc3luY0hpc3RvcnlXaXRoU3RvcmUgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL3BhZ2VzL2hvbWUnO1xyXG5pbXBvcnQgRXJyb3I0MDQgZnJvbSAnLi9wYWdlcy9lcnJvcjQwNCc7XHJcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcblxyXG5jb25zdCBoaXN0b3J5ID0gc3luY0hpc3RvcnlXaXRoU3RvcmUoY3JlYXRlQnJvd3Nlckhpc3RvcnkoKSwgc3RvcmUpO1xyXG5jb25zb2xlLmxvZyhoaXN0b3J5KTtcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXctY29udGFpbmVyXCI+XHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICA8Um91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxyXG4gICAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17SG9tZX0gLz5cclxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi80MDRcIiBjb21wb25lbnQ9e0Vycm9yNDA0fSAvPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBub21hdGNoIGNvbXBvbmVudD17RXJyb3I0MDR9IC8+XHJcbiAgICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgICAgPC9Sb3V0ZXI+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuQXBwLmRpc3BsYXlOYW1lID0gJ0FwcCc7XHJcblxyXG4vLyBCb290c3RyYXAgY2xpZW50XHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICB2YXIgcHJvcHMgPSB7XHJcbiAgICAgIHBhdGg6IGxvY2F0aW9uLnBhdGhuYW1lXHJcbiAgICB9O1xyXG4gICAgUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwLCBwcm9wcyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdFZpZXcnKSk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdmlld3MvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9