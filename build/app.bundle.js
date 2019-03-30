webpackJsonp([0],{

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _addItem = __webpack_require__(124);

var _addItem2 = _interopRequireDefault(_addItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItem = function ListItem(props) {
  return _react2.default.createElement(
    'div',
    {
      className: 'drop-area',
      onDragOver: function onDragOver(e) {
        return props.onDragOver(e);
      },
      onDrop: function onDrop(e) {
        return props.onDrop(e, props.name);
      }
    },
    _react2.default.createElement(
      'h1',
      null,
      props.name
    ),
    props.tasks && props.tasks.map(function (item) {
      return _react2.default.createElement(
        'div',
        { className: 'item-container', key: item.name,
          draggable: true, onDragStart: function onDragStart(e) {
            return props.onDragStart(e, item.name);
          } },
        item.name
      );
    }),
    _react2.default.createElement(
      'div',
      { className: 'add-item' },
      _react2.default.createElement(_addItem2.default, { onItemAdd: function onItemAdd(val) {
          return props.onItemAdd(val, props.name);
        } })
    )
  );
};

ListItem.displayName = 'ListItem';

exports.default = ListItem;

/***/ }),

/***/ 123:
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
      _this.props.onListAdd(_this.state.inputValue);
      _this.setState({
        inputValue: '',
        showAddBox: false
      });
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
        { className: 'add-list drop-area' },
        this.state.showAddBox ? _react2.default.createElement(
          'div',
          { className: 'add-list-section' },
          _react2.default.createElement('input', { autoFocus: true, className: 'list-input', onChange: this.onInputChange, value: this.state.value }),
          _react2.default.createElement(
            'button',
            { className: 'btn btn-addlist', onClick: this.onSaveClick },
            'Add List'
          ),
          _react2.default.createElement(
            'span',
            { className: 'reset-link', onClick: this.hideAddLink },
            'X'
          )
        ) : _react2.default.createElement(
          'div',
          { className: 'addListLink', onClick: this.showAddLink },
          ' + Add Another List '
        )
      );
    }
  }]);

  return AddList;
}(_react2.default.Component);

;

AddList.displayName = 'AddList';

exports.default = AddList;

/***/ }),

/***/ 124:
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
      _this.props.onItemAdd(_this.state.inputValue);
      _this.setState({
        inputValue: '',
        showAddBox: false
      });
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
          _react2.default.createElement('input', { autoFocus: true, className: 'list-input', onChange: this.onInputChange, value: this.state.value }),
          _react2.default.createElement(
            'button',
            { className: 'btn btn-additem', onClick: this.onSaveClick },
            'Add Card'
          ),
          _react2.default.createElement(
            'span',
            { className: 'reset-link', onClick: this.hideAddLink },
            'X'
          )
        ) : _react2.default.createElement(
          'div',
          { className: 'addListLink', onClick: this.showAddLink },
          ' + Add Card '
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
  board: reducers.boardReducer
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _page = __webpack_require__(65);

var _page2 = _interopRequireDefault(_page);

var _reactRedux = __webpack_require__(7);

var _list = __webpack_require__(122);

var _list2 = _interopRequireDefault(_list);

var _addList = __webpack_require__(123);

var _addList2 = _interopRequireDefault(_addList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
      tasks: [{
        name: "Add More Tasks",
        category: "todo"
      }],
      list: ['todo', 'working', 'complete']
    }, _this.onDragOver = function (ev) {
      ev.preventDefault();
    }, _this.onDragStart = function (ev, name) {
      ev.dataTransfer.setData("id", name);
    }, _this.onDrop = function (ev, cat) {
      var id = ev.dataTransfer.getData("id");

      var tasks = _this.state.tasks.filter(function (task) {
        if (task.name == id) {
          task.category = cat;
        }
        return task;
      });
      _this.setState(_extends({}, _this.state, {
        tasks: tasks
      }));
    }, _this.onListAdd = function (list) {
      _this.setState({
        list: [].concat(_toConsumableArray(_this.state.list), [list])
      });
    }, _this.onItemAdd = function (item, category) {
      _this.setState({
        tasks: [].concat(_toConsumableArray(_this.state.tasks), [{ name: item, category: category }])
      });
    }, _this.handleKeyPress = function (ev) {
      if (ev.key == "Enter" && ev.target.value != "") {
        _this.setState({
          tasks: [].concat(_toConsumableArray(_this.state.tasks), [{ name: ev.target.value, category: "todo" }])
        });
        ev.target.value = " ";
      }
    }, _this.renderList = function (tasks) {
      return _this.state.list.map(function (item, index) {
        return _react2.default.createElement(_list2.default, { tasks: tasks[item], name: item, onDrop: _this.onDrop, key: index,
          onDragOver: _this.onDragOver, onItemAdd: _this.onItemAdd, onDragStart: _this.onDragStart });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var tasks = {};
      this.state.tasks.forEach(function (t) {
        tasks[t.category] = tasks[t.category] || [];
        tasks[t.category].push(t);
      });

      return _react2.default.createElement(
        _page2.default,
        { className: 'home-page', header: 'Trello' },
        _react2.default.createElement('div', { id: 'background-image' }),
        _react2.default.createElement(
          'div',
          { 'class': 'container' },
          this.renderList(tasks),
          _react2.default.createElement(_addList2.default, { onListAdd: this.onListAdd })
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

Home.displayName = 'Home';

function select(state) {
  return {
    list: state.board.list
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

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boardReducer = boardReducer;
exports.appState = appState;
exports.dataRequests = dataRequests;

var _index = __webpack_require__(61);

var actionEvents = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function boardReducer(state, action) {
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
  board: {
    list: []
  }
};

exports.default = state;

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

/***/ 66:
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

},[66]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvdmlld3MvY29tcG9uZW50cy9saXN0LmpzIiwid2VicGFjazovLy8uL2xpYi92aWV3cy9jb21wb25lbnRzL2FkZExpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3ZpZXdzL2NvbXBvbmVudHMvYWRkSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvc3RvcmVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi92aWV3cy9wYWdlcy9lcnJvcjQwNC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdmlld3MvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci1kb20vZXNtL3JlYWN0LXJvdXRlci1kb20uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9zdG9yZXMvZGVmYXVsdFN0YXRlLmpzIiwid2VicGFjazovLy8uL2xpYi92aWV3cy9jb21wb25lbnRzL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3ZpZXdzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpc3RJdGVtIiwicHJvcHMiLCJvbkRyYWdPdmVyIiwiZSIsIm9uRHJvcCIsIm5hbWUiLCJ0YXNrcyIsIm1hcCIsIml0ZW0iLCJvbkRyYWdTdGFydCIsIm9uSXRlbUFkZCIsInZhbCIsImRpc3BsYXlOYW1lIiwiQWRkTGlzdCIsInNob3dBZGRMaW5rIiwic2V0U3RhdGUiLCJzaG93QWRkQm94IiwiaGlkZUFkZExpbmsiLCJvblNhdmVDbGljayIsIm9uTGlzdEFkZCIsInN0YXRlIiwiaW5wdXRWYWx1ZSIsIm9uSW5wdXRDaGFuZ2UiLCJldiIsInRhcmdldCIsInZhbHVlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJBZGRJdGVtIiwicmVkdWNlcnMiLCJyZWR1Y2VyIiwiYXBwIiwiYXBwU3RhdGUiLCJkYXRhUmVxdWVzdHMiLCJyb3V0aW5nIiwicm91dGVyUmVkdWNlciIsImJvYXJkIiwiYm9hcmRSZWR1Y2VyIiwicm91dGluZ01pZGRsZXdhcmUiLCJicm93c2VySGlzdG9yeSIsInN0b3JlIiwiZGVmYXVsdFN0YXRlIiwidGh1bmsiLCJ3aW5kb3ciLCJkZXZUb29sc0V4dGVuc2lvbiIsImYiLCJFcnJvcjQwNCIsIkhvbWUiLCJjYXRlZ29yeSIsImxpc3QiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJjYXQiLCJpZCIsImdldERhdGEiLCJmaWx0ZXIiLCJ0YXNrIiwiaGFuZGxlS2V5UHJlc3MiLCJrZXkiLCJyZW5kZXJMaXN0IiwiaW5kZXgiLCJmb3JFYWNoIiwidCIsInB1c2giLCJzZWxlY3QiLCJmZXRjaGluZ1BhZ2VEYXRhIiwic2V0UGFnZURhdGEiLCJmZXRjaFBhZ2VEYXRhIiwiRkVUQ0hJTkdfUEFHRURBVEEiLCJTRVRfUEFHRURBVEEiLCJMT0NBVElPTl9DSEFOR0UiLCJ0eXBlIiwiZGF0YSIsInBheWxvYWQiLCJkaXNwYXRjaCIsIm1lc3NhZ2UiLCJhY3Rpb25FdmVudHMiLCJhY3Rpb24iLCJhY3Rpb25UeXBlIiwibmV3U3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJjdXJyZW50IiwicGF0aCIsInBhdGhuYW1lIiwiU0VUVElOR19QQUdFREFUQSIsInNldHRpbmdzIiwicGFnZVRpdGxlIiwiUGFnZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsYXNzTmFtZSIsImhlYWRlciIsImdldEVycm9yQ29udGVudCIsImNoaWxkcmVuIiwiaGlzdG9yeSIsIkFwcCIsIm9ubG9hZCIsImxvY2F0aW9uIiwiUmVhY3RET00iLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsV0FBWSxTQUFaQSxRQUFZLENBQUNDLEtBQUQsRUFBVztBQUN6QixTQUFRO0FBQUE7QUFBQTtB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Q1ZtRixZQUFNZ0IsU0FBU2Y7QUFETCxLQUFaO0FBR0FnQix1QkFBU0MsTUFBVCxDQUFnQjVFLGdCQUFNNkUsYUFBTixDQUFvQkwsR0FBcEIsRUFBeUJqRyxLQUF6QixDQUFoQixFQUFpRHVHLFNBQVNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBakQ7QUFDRCxHQUxEO0FBTUQ7O2tCQUVjUCxHIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQWRkSXRlbSBmcm9tICcuL2FkZEl0ZW0nO1xyXG5cclxuY29uc3QgTGlzdEl0ZW0gPSAoKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gIDxkaXZcclxuICAgIGNsYXNzTmFtZT1cImRyb3AtYXJlYVwiXHJcbiAgICBvbkRyYWdPdmVyPXtlID0+IHByb3BzLm9uRHJhZ092ZXIoZSl9XHJcbiAgICBvbkRyb3A9e2UgPT4gcHJvcHMub25Ecm9wKGUsIHByb3BzLm5hbWUpfVxyXG4gID5cclxuICAgIDxoMT57cHJvcHMubmFtZX08L2gxPlxyXG4gICAgeyBcclxuICAgICAgcHJvcHMudGFza3MgJiYgcHJvcHMudGFza3MubWFwKChpdGVtKSA9PiA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tY29udGFpbmVyXCIga2V5PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgZHJhZ2dhYmxlIG9uRHJhZ1N0YXJ0PXtlID0+IHByb3BzLm9uRHJhZ1N0YXJ0KGUsIGl0ZW0ubmFtZSl9PlxyXG4gICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgIDwvZGl2PilcclxuICAgIH1cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLWl0ZW1cIj5cclxuICAgICAgPEFkZEl0ZW0gb25JdGVtQWRkPXt2YWwgPT4gcHJvcHMub25JdGVtQWRkKHZhbCwgcHJvcHMubmFtZSl9Lz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG59KTtcclxuXHJcbkxpc3RJdGVtLmRpc3BsYXlOYW1lID0gJ0xpc3RJdGVtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi92aWV3cy9jb21wb25lbnRzL2xpc3QuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQWRkTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHNob3dBZGRCb3g6IGZhbHNlLFxyXG5cdFx0XHRpbnB1dFZhbHVlOiAnJ1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2hvd0FkZExpbmsgPSAoKSA9PiB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd0FkZEJveDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBcclxuXHRoaWRlQWRkTGluayA9ICgpID0+IHtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaG93QWRkQm94OiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBcclxuICBvblNhdmVDbGljayA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25MaXN0QWRkKHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaW5wdXRWYWx1ZTogJycsXHJcbiAgICAgIHNob3dBZGRCb3g6IGZhbHNlXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25JbnB1dENoYW5nZSA9IGV2ID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpbnB1dFZhbHVlOiBldi50YXJnZXQudmFsdWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblx0cmVuZGVyICgpIHtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhZGQtbGlzdCBkcm9wLWFyZWFcIiA+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5zaG93QWRkQm94XHJcblx0XHRcdFx0XHQ/IDxkaXYgY2xhc3NOYW1lPVwiYWRkLWxpc3Qtc2VjdGlvblwiPlxyXG5cdFx0XHRcdFx0XHQgIDxpbnB1dCBhdXRvRm9jdXMgY2xhc3NOYW1lPVwibGlzdC1pbnB1dFwiIG9uQ2hhbmdlPXt0aGlzLm9uSW5wdXRDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfS8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWFkZGxpc3RcIiBvbkNsaWNrPXt0aGlzLm9uU2F2ZUNsaWNrfT5BZGQgTGlzdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlc2V0LWxpbmtcIiBvbkNsaWNrPXt0aGlzLmhpZGVBZGRMaW5rfT5YPC9zcGFuPlxyXG5cdFx0XHRcdFx0ICA8L2Rpdj5cclxuICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9XCJhZGRMaXN0TGlua1wiIG9uQ2xpY2s9e3RoaXMuc2hvd0FkZExpbmt9PiArIEFkZCBBbm90aGVyIExpc3QgPC9kaXY+XHJcblx0XHRcdFx0fVxyXG5cdFx0PC9kaXY+KTtcclxuXHR9XHJcbn07XHJcblxyXG5BZGRMaXN0LmRpc3BsYXlOYW1lID0gJ0FkZExpc3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkTGlzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdmlld3MvY29tcG9uZW50cy9hZGRMaXN0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEFkZEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKCk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRzaG93QWRkQm94OiBmYWxzZSxcclxuXHRcdFx0aW5wdXRWYWx1ZTogJydcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNob3dBZGRMaW5rID0gKCkgPT4ge1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3dBZGRCb3g6IHRydWVcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgXHJcblx0aGlkZUFkZExpbmsgPSAoKSA9PiB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd0FkZEJveDogZmFsc2VcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgXHJcbiAgb25TYXZlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uSXRlbUFkZCh0aGlzLnN0YXRlLmlucHV0VmFsdWUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlucHV0VmFsdWU6ICcnLFxyXG4gICAgICBzaG93QWRkQm94OiBmYWxzZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uSW5wdXRDaGFuZ2UgPSBldiA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaW5wdXRWYWx1ZTogZXYudGFyZ2V0LnZhbHVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cdHJlbmRlciAoKSB7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWRkLWl0ZW1cIiA+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5zaG93QWRkQm94XHJcblx0XHRcdFx0XHQ/IDxkaXYgY2xhc3NOYW1lPVwiYWRkLWxpc3Qtc2VjdGlvblwiPlxyXG5cdFx0XHRcdFx0XHQgIDxpbnB1dCBhdXRvRm9jdXMgY2xhc3NOYW1lPVwibGlzdC1pbnB1dFwiIG9uQ2hhbmdlPXt0aGlzLm9uSW5wdXRDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfS8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWFkZGl0ZW1cIiBvbkNsaWNrPXt0aGlzLm9uU2F2ZUNsaWNrfT5BZGQgQ2FyZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlc2V0LWxpbmtcIiBvbkNsaWNrPXt0aGlzLmhpZGVBZGRMaW5rfT5YPC9zcGFuPlxyXG5cdFx0XHRcdFx0ICA8L2Rpdj5cclxuICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9XCJhZGRMaXN0TGlua1wiIG9uQ2xpY2s9e3RoaXMuc2hvd0FkZExpbmt9PiArIEFkZCBDYXJkIDwvZGl2PlxyXG5cdFx0XHRcdH1cclxuXHRcdDwvZGl2Pik7XHJcblx0fVxyXG59O1xyXG5cclxuQWRkSXRlbS5kaXNwbGF5TmFtZSA9ICdBZGRJdGVtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZEl0ZW07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3ZpZXdzL2NvbXBvbmVudHMvYWRkSXRlbS5qcyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2VycywgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgeyByb3V0ZXJNaWRkbGV3YXJlLCByb3V0ZXJSZWR1Y2VyIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcclxuaW1wb3J0ICogYXMgcmVkdWNlcnMgZnJvbSAnLi4vcmVkdWNlcnMvaW5kZXgnO1xyXG5pbXBvcnQgZGVmYXVsdFN0YXRlIGZyb20gJy4vZGVmYXVsdFN0YXRlJztcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGFwcDogcmVkdWNlcnMuYXBwU3RhdGUsXHJcbiAgZGF0YVJlcXVlc3RzOiByZWR1Y2Vycy5kYXRhUmVxdWVzdHMsXHJcbiAgcm91dGluZzogcm91dGVyUmVkdWNlcixcclxuICBib2FyZDogcmVkdWNlcnMuYm9hcmRSZWR1Y2VyXHJcbn0pO1xyXG5cclxuY29uc3Qgcm91dGluZ01pZGRsZXdhcmUgPSByb3V0ZXJNaWRkbGV3YXJlKGJyb3dzZXJIaXN0b3J5KTtcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZGVmYXVsdFN0YXRlLCBjb21wb3NlKFxyXG4gIGFwcGx5TWlkZGxld2FyZSh0aHVuaywgcm91dGluZ01pZGRsZXdhcmUpLFxyXG4gIHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbiA/IHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbigpIDogZiA9PiBmXHJcbikpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9zdG9yZXMvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgRXJyb3I0MDQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJlcnJvci1oZWFkaW5nXCI+NDA0IC0gTWlzc2luZyBSZXNvdXJjZSA8L2gyPlxyXG4gICAgICAgIDxwPlBsZWFzZSB0cnkgYWdhaW4sIGJ1dCBpZiB0aGUgcHJvYmxlbSBwZXJzaXN0LCBjb250YWN0IGFuIGFkbWluaXN0cmF0b3IuPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5FcnJvcjQwNC5kaXNwbGF5TmFtZSA9ICdFcnJvcjQwNCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvcjQwNDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3ZpZXdzL3BhZ2VzL2Vycm9yNDA0LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0JztcclxuaW1wb3J0IEFkZExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9hZGRMaXN0JztcclxuXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgdGFza3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiQWRkIE1vcmUgVGFza3NcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJ0b2RvXCJcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIGxpc3Q6IFsndG9kbycsICd3b3JraW5nJywgJ2NvbXBsZXRlJ11cclxuICB9O1xyXG5cclxuICBvbkRyYWdPdmVyID0gZXYgPT4ge1xyXG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG5cclxuICBvbkRyYWdTdGFydCA9IChldiwgbmFtZSkgPT4ge1xyXG4gICAgZXYuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJpZFwiLCBuYW1lKTtcclxuICB9O1xyXG5cclxuICBvbkRyb3AgPSAoZXYsIGNhdCkgPT4ge1xyXG4gICAgY29uc3QgaWQgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImlkXCIpO1xyXG5cclxuICAgIGxldCB0YXNrcyA9IHRoaXMuc3RhdGUudGFza3MuZmlsdGVyKHRhc2sgPT4ge1xyXG4gICAgICBpZiAodGFzay5uYW1lID09IGlkKSB7XHJcbiAgICAgICAgdGFzay5jYXRlZ29yeSA9IGNhdDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGFzaztcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgIHRhc2tzXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBvbkxpc3RBZGQgPSBsaXN0ID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsaXN0OiBbXHJcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5saXN0LFxyXG4gICAgICAgIGxpc3RcclxuICAgICAgXVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgb25JdGVtQWRkID0gKGl0ZW0sIGNhdGVnb3J5KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdGFza3M6IFtcclxuICAgICAgICAuLi50aGlzLnN0YXRlLnRhc2tzLFxyXG4gICAgICAgIHsgbmFtZTogaXRlbSwgY2F0ZWdvcnk6IGNhdGVnb3J5IH1cclxuICAgICAgXVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlS2V5UHJlc3MgPSBldiA9PiB7XHJcbiAgICBpZiAoKGV2LmtleSA9PSBcIkVudGVyXCIpICYmIChldi50YXJnZXQudmFsdWUgIT0gXCJcIikpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgdGFza3M6IFtcclxuICAgICAgICAgIC4uLnRoaXMuc3RhdGUudGFza3MsXHJcbiAgICAgICAgICB7IG5hbWU6IGV2LnRhcmdldC52YWx1ZSwgY2F0ZWdvcnk6IFwidG9kb1wiIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0pO1xyXG4gICAgICBldi50YXJnZXQudmFsdWUgPSBcIiBcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZW5kZXJMaXN0ID0gKHRhc2tzKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5saXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IFxyXG4gICAgICA8TGlzdCB0YXNrcz17dGFza3NbaXRlbV19IG5hbWU9e2l0ZW19IG9uRHJvcD17dGhpcy5vbkRyb3B9IGtleT17aW5kZXh9XHJcbiAgICAgIG9uRHJhZ092ZXI9e3RoaXMub25EcmFnT3Zlcn0gb25JdGVtQWRkPXt0aGlzLm9uSXRlbUFkZH0gb25EcmFnU3RhcnQ9e3RoaXMub25EcmFnU3RhcnR9IC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGxldCB0YXNrcyA9IHt9O1xyXG4gICAgdGhpcy5zdGF0ZS50YXNrcy5mb3JFYWNoKHQgPT4ge1xyXG4gICAgICB0YXNrc1t0LmNhdGVnb3J5XSA9IHRhc2tzW3QuY2F0ZWdvcnldIHx8IFtdOyBcclxuICAgICAgdGFza3NbdC5jYXRlZ29yeV0ucHVzaCh0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxQYWdlIGNsYXNzTmFtZT1cImhvbWUtcGFnZVwiIGhlYWRlcj1cIlRyZWxsb1wiPlxyXG4gICAgICAgIDxkaXYgaWQ9J2JhY2tncm91bmQtaW1hZ2UnPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIHt0aGlzLnJlbmRlckxpc3QodGFza3MpfVxyXG4gICAgICAgICAgPEFkZExpc3Qgb25MaXN0QWRkPXt0aGlzLm9uTGlzdEFkZH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9QYWdlPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkhvbWUuZGlzcGxheU5hbWUgPSAnSG9tZSc7XHJcblxyXG5mdW5jdGlvbiBzZWxlY3QgKHN0YXRlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGxpc3Q6IHN0YXRlLmJvYXJkLmxpc3RcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHNlbGVjdCkoSG9tZSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi92aWV3cy9wYWdlcy9ob21lLmpzIiwiaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlciwgX19Sb3V0ZXJDb250ZXh0LCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5leHBvcnQgKiBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnksIGNyZWF0ZUhhc2hIaXN0b3J5LCBjcmVhdGVMb2NhdGlvbiB9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3Rpbnktd2FybmluZyc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSc7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ3RpbnktaW52YXJpYW50JztcblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgYSA8Um91dGVyPiB0aGF0IHVzZXMgSFRNTDUgaGlzdG9yeS5cbiAqL1xuXG52YXIgQnJvd3NlclJvdXRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShCcm93c2VyUm91dGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBCcm93c2VyUm91dGVyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgIF90aGlzLmhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeShfdGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEJyb3dzZXJSb3V0ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgICBoaXN0b3J5OiB0aGlzLmhpc3RvcnksXG4gICAgICBjaGlsZHJlbjogdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBCcm93c2VyUm91dGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEJyb3dzZXJSb3V0ZXIucHJvcFR5cGVzID0ge1xuICAgIGJhc2VuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBmb3JjZVJlZnJlc2g6IFByb3BUeXBlcy5ib29sLFxuICAgIGdldFVzZXJDb25maXJtYXRpb246IFByb3BUeXBlcy5mdW5jLFxuICAgIGtleUxlbmd0aDogUHJvcFR5cGVzLm51bWJlclxuICB9O1xuXG4gIEJyb3dzZXJSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoIXRoaXMucHJvcHMuaGlzdG9yeSwgXCI8QnJvd3NlclJvdXRlcj4gaWdub3JlcyB0aGUgaGlzdG9yeSBwcm9wLiBUbyB1c2UgYSBjdXN0b20gaGlzdG9yeSwgXCIgKyBcInVzZSBgaW1wb3J0IHsgUm91dGVyIH1gIGluc3RlYWQgb2YgYGltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH1gLlwiKSA6IHZvaWQgMDtcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgYSA8Um91dGVyPiB0aGF0IHVzZXMgd2luZG93LmxvY2F0aW9uLmhhc2guXG4gKi9cblxudmFyIEhhc2hSb3V0ZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoSGFzaFJvdXRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSGFzaFJvdXRlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcbiAgICBfdGhpcy5oaXN0b3J5ID0gY3JlYXRlSGFzaEhpc3RvcnkoX3RoaXMucHJvcHMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBIYXNoUm91dGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgICAgaGlzdG9yeTogdGhpcy5oaXN0b3J5LFxuICAgICAgY2hpbGRyZW46IHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gSGFzaFJvdXRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBIYXNoUm91dGVyLnByb3BUeXBlcyA9IHtcbiAgICBiYXNlbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgZ2V0VXNlckNvbmZpcm1hdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaGFzaFR5cGU6IFByb3BUeXBlcy5vbmVPZihbXCJoYXNoYmFuZ1wiLCBcIm5vc2xhc2hcIiwgXCJzbGFzaFwiXSlcbiAgfTtcblxuICBIYXNoUm91dGVyLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCF0aGlzLnByb3BzLmhpc3RvcnksIFwiPEhhc2hSb3V0ZXI+IGlnbm9yZXMgdGhlIGhpc3RvcnkgcHJvcC4gVG8gdXNlIGEgY3VzdG9tIGhpc3RvcnksIFwiICsgXCJ1c2UgYGltcG9ydCB7IFJvdXRlciB9YCBpbnN0ZWFkIG9mIGBpbXBvcnQgeyBIYXNoUm91dGVyIGFzIFJvdXRlciB9YC5cIikgOiB2b2lkIDA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICByZXR1cm4gISEoZXZlbnQubWV0YUtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSk7XG59XG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciByZW5kZXJpbmcgYSBoaXN0b3J5LWF3YXJlIDxhPi5cbiAqL1xuXG5cbnZhciBMaW5rID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKExpbmssIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIExpbmsoKSB7XG4gICAgcmV0dXJuIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IExpbmsucHJvdG90eXBlO1xuXG4gIF9wcm90by5oYW5kbGVDbGljayA9IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50LCBoaXN0b3J5KSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljaykgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcblxuICAgIGlmICghZXZlbnQuZGVmYXVsdFByZXZlbnRlZCAmJiAvLyBvbkNsaWNrIHByZXZlbnRlZCBkZWZhdWx0XG4gICAgZXZlbnQuYnV0dG9uID09PSAwICYmICggLy8gaWdub3JlIGV2ZXJ5dGhpbmcgYnV0IGxlZnQgY2xpY2tzXG4gICAgIXRoaXMucHJvcHMudGFyZ2V0IHx8IHRoaXMucHJvcHMudGFyZ2V0ID09PSBcIl9zZWxmXCIpICYmIC8vIGxldCBicm93c2VyIGhhbmRsZSBcInRhcmdldD1fYmxhbmtcIiBldGMuXG4gICAgIWlzTW9kaWZpZWRFdmVudChldmVudCkgLy8gaWdub3JlIGNsaWNrcyB3aXRoIG1vZGlmaWVyIGtleXNcbiAgICApIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIG1ldGhvZCA9IHRoaXMucHJvcHMucmVwbGFjZSA/IGhpc3RvcnkucmVwbGFjZSA6IGhpc3RvcnkucHVzaDtcbiAgICAgICAgbWV0aG9kKHRoaXMucHJvcHMudG8pO1xuICAgICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGlubmVyUmVmID0gX3RoaXMkcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgIHJlcGxhY2UgPSBfdGhpcyRwcm9wcy5yZXBsYWNlLFxuICAgICAgICB0byA9IF90aGlzJHByb3BzLnRvLFxuICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImlubmVyUmVmXCIsIFwicmVwbGFjZVwiLCBcInRvXCJdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfX1JvdXRlckNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAhY29udGV4dCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJZb3Ugc2hvdWxkIG5vdCB1c2UgPExpbms+IG91dHNpZGUgYSA8Um91dGVyPlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICB2YXIgbG9jYXRpb24gPSB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyBjcmVhdGVMb2NhdGlvbih0bywgbnVsbCwgbnVsbCwgY29udGV4dC5sb2NhdGlvbikgOiB0bztcbiAgICAgIHZhciBocmVmID0gbG9jYXRpb24gPyBjb250ZXh0Lmhpc3RvcnkuY3JlYXRlSHJlZihsb2NhdGlvbikgOiBcIlwiO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuaGFuZGxlQ2xpY2soZXZlbnQsIGNvbnRleHQuaGlzdG9yeSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgIHJlZjogaW5uZXJSZWZcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gTGluaztcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICB2YXIgdG9UeXBlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pO1xuICB2YXIgaW5uZXJSZWZUeXBlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY3VycmVudDogUHJvcFR5cGVzLmFueVxuICB9KV0pO1xuICBMaW5rLnByb3BUeXBlcyA9IHtcbiAgICBpbm5lclJlZjogaW5uZXJSZWZUeXBlLFxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHRhcmdldDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0bzogdG9UeXBlLmlzUmVxdWlyZWRcbiAgfTtcbn1cblxuZnVuY3Rpb24gam9pbkNsYXNzbmFtZXMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBjbGFzc25hbWVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGNsYXNzbmFtZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gY2xhc3NuYW1lcy5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gaTtcbiAgfSkuam9pbihcIiBcIik7XG59XG4vKipcbiAqIEEgPExpbms+IHdyYXBwZXIgdGhhdCBrbm93cyBpZiBpdCdzIFwiYWN0aXZlXCIgb3Igbm90LlxuICovXG5cblxuZnVuY3Rpb24gTmF2TGluayhfcmVmKSB7XG4gIHZhciBfcmVmJGFyaWFDdXJyZW50ID0gX3JlZltcImFyaWEtY3VycmVudFwiXSxcbiAgICAgIGFyaWFDdXJyZW50ID0gX3JlZiRhcmlhQ3VycmVudCA9PT0gdm9pZCAwID8gXCJwYWdlXCIgOiBfcmVmJGFyaWFDdXJyZW50LFxuICAgICAgX3JlZiRhY3RpdmVDbGFzc05hbWUgPSBfcmVmLmFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF9yZWYkYWN0aXZlQ2xhc3NOYW1lID09PSB2b2lkIDAgPyBcImFjdGl2ZVwiIDogX3JlZiRhY3RpdmVDbGFzc05hbWUsXG4gICAgICBhY3RpdmVTdHlsZSA9IF9yZWYuYWN0aXZlU3R5bGUsXG4gICAgICBjbGFzc05hbWVQcm9wID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBleGFjdCA9IF9yZWYuZXhhY3QsXG4gICAgICBpc0FjdGl2ZVByb3AgPSBfcmVmLmlzQWN0aXZlLFxuICAgICAgbG9jYXRpb24gPSBfcmVmLmxvY2F0aW9uLFxuICAgICAgc3RyaWN0ID0gX3JlZi5zdHJpY3QsXG4gICAgICBzdHlsZVByb3AgPSBfcmVmLnN0eWxlLFxuICAgICAgdG8gPSBfcmVmLnRvLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcImFyaWEtY3VycmVudFwiLCBcImFjdGl2ZUNsYXNzTmFtZVwiLCBcImFjdGl2ZVN0eWxlXCIsIFwiY2xhc3NOYW1lXCIsIFwiZXhhY3RcIiwgXCJpc0FjdGl2ZVwiLCBcImxvY2F0aW9uXCIsIFwic3RyaWN0XCIsIFwic3R5bGVcIiwgXCJ0b1wiXSk7XG5cbiAgdmFyIHBhdGggPSB0eXBlb2YgdG8gPT09IFwib2JqZWN0XCIgPyB0by5wYXRobmFtZSA6IHRvOyAvLyBSZWdleCB0YWtlbiBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vcGlsbGFyanMvcGF0aC10by1yZWdleHAvYmxvYi9tYXN0ZXIvaW5kZXguanMjTDIwMlxuXG4gIHZhciBlc2NhcGVkUGF0aCA9IHBhdGggJiYgcGF0aC5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7XG4gICAgcGF0aDogZXNjYXBlZFBhdGgsXG4gICAgZXhhY3Q6IGV4YWN0LFxuICAgIHN0cmljdDogc3RyaWN0LFxuICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICBjaGlsZHJlbjogZnVuY3Rpb24gY2hpbGRyZW4oX3JlZjIpIHtcbiAgICAgIHZhciBsb2NhdGlvbiA9IF9yZWYyLmxvY2F0aW9uLFxuICAgICAgICAgIG1hdGNoID0gX3JlZjIubWF0Y2g7XG4gICAgICB2YXIgaXNBY3RpdmUgPSAhIShpc0FjdGl2ZVByb3AgPyBpc0FjdGl2ZVByb3AobWF0Y2gsIGxvY2F0aW9uKSA6IG1hdGNoKTtcbiAgICAgIHZhciBjbGFzc05hbWUgPSBpc0FjdGl2ZSA/IGpvaW5DbGFzc25hbWVzKGNsYXNzTmFtZVByb3AsIGFjdGl2ZUNsYXNzTmFtZSkgOiBjbGFzc05hbWVQcm9wO1xuICAgICAgdmFyIHN0eWxlID0gaXNBY3RpdmUgPyBfZXh0ZW5kcyh7fSwgc3R5bGVQcm9wLCBhY3RpdmVTdHlsZSkgOiBzdHlsZVByb3A7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCBfZXh0ZW5kcyh7XG4gICAgICAgIFwiYXJpYS1jdXJyZW50XCI6IGlzQWN0aXZlICYmIGFyaWFDdXJyZW50IHx8IG51bGwsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIHRvOiB0b1xuICAgICAgfSwgcmVzdCkpO1xuICAgIH1cbiAgfSk7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgdmFyIGFyaWFDdXJyZW50VHlwZSA9IFByb3BUeXBlcy5vbmVPZihbXCJwYWdlXCIsIFwic3RlcFwiLCBcImxvY2F0aW9uXCIsIFwiZGF0ZVwiLCBcInRpbWVcIiwgXCJ0cnVlXCJdKTtcbiAgTmF2TGluay5wcm9wVHlwZXMgPSBfZXh0ZW5kcyh7fSwgTGluay5wcm9wVHlwZXMsIHtcbiAgICBcImFyaWEtY3VycmVudFwiOiBhcmlhQ3VycmVudFR5cGUsXG4gICAgYWN0aXZlQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjdGl2ZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBleGFjdDogUm91dGUucHJvcFR5cGVzLmV4YWN0LFxuICAgIGlzQWN0aXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzdHJpY3Q6IFJvdXRlLnByb3BUeXBlcy5zdHJpY3QsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3RcbiAgfSk7XG59XG5cbmV4cG9ydCB7IEJyb3dzZXJSb3V0ZXIsIEhhc2hSb3V0ZXIsIExpbmssIE5hdkxpbmsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1yb3V0ZXItZG9tL2VzbS9yZWFjdC1yb3V0ZXItZG9tLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVGhpcyBwcm92aWRlcyB0aGUgdmFyaW91cyByZWR1eCBhY3Rpb25zIHRvIHRyaWdnZXIgYXBwIHN0YXRlIGNoYW5nZXMgYnkgdGhlIHJlZHV4IHJlZHVjZXJcclxuICogQG1vZHVsZSBSZWR1eCBhY3Rpb25zXHJcbiAqL1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBjb25zdCBGRVRDSElOR19QQUdFREFUQSA9ICdGRVRDSElOR19QQUdFREFUQSc7XHJcbmV4cG9ydCBjb25zdCBTRVRfUEFHRURBVEEgPSAnU0VUX1BBR0VEQVRBJztcclxuZXhwb3J0IGNvbnN0IExPQ0FUSU9OX0NIQU5HRSA9ICdAQHJvdXRlci9MT0NBVElPTl9DSEFOR0UnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoaW5nUGFnZURhdGEgKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBGRVRDSElOR19QQUdFREFUQVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRQYWdlRGF0YSAoZGF0YSkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTRVRfUEFHRURBVEEsXHJcbiAgICBwYXlsb2FkOiBkYXRhXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUGFnZURhdGEgKCkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcclxuICAgIGRpc3BhdGNoKGZldGNoaW5nUGFnZURhdGEoKSk7XHJcbiAgICBkaXNwYXRjaChzZXRQYWdlRGF0YSh7XHJcbiAgICAgIG1lc3NhZ2U6IFwiVGVtcGxhdGUgTWVzc2FnZVwiXHJcbiAgICB9KSk7XHJcbiAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvYWN0aW9ucy9pbmRleC5qcyIsImltcG9ydCAqIGFzIGFjdGlvbkV2ZW50cyBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBib2FyZFJlZHVjZXIgKHN0YXRlLCBhY3Rpb24pIHtcclxuICBsZXQgYWN0aW9uVHlwZSA9IGFjdGlvbi50eXBlLFxyXG4gICAgICBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcclxuXHJcbiAgaWYgKGFjdGlvblR5cGUgPT09IGFjdGlvbkV2ZW50cy5TRVRfUEFHRURBVEEpIHtcclxuICAgIG5ld1N0YXRlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3U3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBTdGF0ZSAoc3RhdGUsIGFjdGlvbikge1xyXG4gIGxldCBhY3Rpb25UeXBlID0gYWN0aW9uLnR5cGUsXHJcbiAgICAgIG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xyXG5cclxuICBpZiAoYWN0aW9uVHlwZSA9PT0gYWN0aW9uRXZlbnRzLkxPQ0FUSU9OX0NIQU5HRSkge1xyXG4gICAgbmV3U3RhdGUuY3VycmVudC5wYXRoID0gYWN0aW9uLnBheWxvYWQucGF0aG5hbWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3U3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXRhUmVxdWVzdHMgKHN0YXRlLCBhY3Rpb24pIHtcclxuICBsZXQgYWN0aW9uVHlwZSA9IGFjdGlvbi50eXBlLFxyXG4gICAgICBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcclxuXHJcbiAgaWYgKGFjdGlvblR5cGUgPT09IGFjdGlvbkV2ZW50cy5TRVRUSU5HX1BBR0VEQVRBKSB7XHJcbiAgICBuZXdTdGF0ZS5zZXR0aW5ncyA9IHRydWU7XHJcbiAgfSBlbHNlIGlmIChhY3Rpb25UeXBlID09PSBhY3Rpb25FdmVudHMuU0VUX1BBR0VEQVRBKSB7XHJcbiAgICBuZXdTdGF0ZS5zZXR0aW5ncyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ld1N0YXRlO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9yZWR1Y2Vycy9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBzdGF0ZSA9IHtcclxuICBhcHA6IHtcclxuICAgIGN1cnJlbnQ6IHtcclxuICAgICAgcGF0aDogJycsXHJcbiAgICAgIHBhZ2VUaXRsZTogJydcclxuICAgIH1cclxuICB9LFxyXG4gIGJvYXJkOiB7XHJcbiAgICBsaXN0OiBbXVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0YXRlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvc3RvcmVzL2RlZmF1bHRTdGF0ZS5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGVycm9yOiBmYWxzZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZENhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGVycm9yOiB0cnVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEVycm9yQ29udGVudCAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtZXJyb3ItY29udGVudFwiPlxyXG4gICAgICAgIFNvbWUgRXJyb3Igb2NjdXJlZC4gV2UgcmVncmV0IGZvciBpbmNvbnZpbmllbmNlLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cclxuICAgICAgICA8aGVhZGVyIGlkPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28taWNvblwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+e3RoaXMucHJvcHMuaGVhZGVyfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPG1haW4gaWQ9XCJib2R5XCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JcclxuICAgICAgICAgICAgICA/ICB0aGlzLmdldEVycm9yQ29udGVudCgpXHJcbiAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICBHZW5lcmF0ZWQgYnkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9qZWZyZWVzdWppdC9nZW5lcmF0b3ItcmVhY3Qtbm9kZVwiPmdlbmVyYXRvci1yZWFjdC1ub2RlPC9hPi5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5QYWdlLmRpc3BsYXlOYW1lID0gJ1BhZ2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3ZpZXdzL2NvbXBvbmVudHMvcGFnZS5qcyIsIi8qIGdsb2JhbCBsb2NhdGlvbiAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmVzL2luZGV4JztcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHN5bmNIaXN0b3J5V2l0aFN0b3JlIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9wYWdlcy9ob21lJztcclxuaW1wb3J0IEVycm9yNDA0IGZyb20gJy4vcGFnZXMvZXJyb3I0MDQnO1xyXG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5cclxuY29uc3QgaGlzdG9yeSA9IHN5bmNIaXN0b3J5V2l0aFN0b3JlKGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCksIHN0b3JlKTtcclxuY29uc29sZS5sb2coaGlzdG9yeSk7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgPFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cclxuICAgICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0hvbWV9IC8+XHJcbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvNDA0XCIgY29tcG9uZW50PXtFcnJvcjQwNH0gLz5cclxuICAgICAgICAgICAgICA8Um91dGUgbm9tYXRjaCBjb21wb25lbnQ9e0Vycm9yNDA0fSAvPlxyXG4gICAgICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgICAgIDwvUm91dGVyPlxyXG4gICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkFwcC5kaXNwbGF5TmFtZSA9ICdBcHAnO1xyXG5cclxuLy8gQm9vdHN0cmFwIGNsaWVudFxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICB3aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgdmFyIHByb3BzID0ge1xyXG4gICAgICBwYXRoOiBsb2NhdGlvbi5wYXRobmFtZVxyXG4gICAgfTtcclxuICAgIFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEFwcCwgcHJvcHMpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3RWaWV3JykpO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3ZpZXdzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==