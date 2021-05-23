webpackHotUpdate_N_E("pages/events",{

/***/ "./dummy-data.js":
false,

/***/ "./helpers/api-utils.js":
/*!******************************!*\
  !*** ./helpers/api-utils.js ***!
  \******************************/
/*! exports provided: getAllEvents, getFeaturedEvents, getEventById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllEvents", function() { return getAllEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeaturedEvents", function() { return getFeaturedEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventById", function() { return getEventById; });
/* harmony import */ var C_Users_vuong_OneDrive_M_y_t_nh_Courses_NextJS_Course_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_vuong_OneDrive_M_y_t_nh_Courses_NextJS_Course_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_vuong_OneDrive_M_y_t_nh_Courses_NextJS_Course_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_vuong_OneDrive_M_y_t_nh_Courses_NextJS_Course_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_vuong_OneDrive_M_y_t_nh_Courses_NextJS_Course_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_vuong_OneDrive_M_y_t_nh_Courses_NextJS_Course_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getAllEvents() {
  return _getAllEvents.apply(this, arguments);
}

function _getAllEvents() {
  _getAllEvents = Object(C_Users_vuong_OneDrive_M_y_t_nh_Courses_NextJS_Course_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_vuong_OneDrive_M_y_t_nh_Courses_NextJS_Course_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var response, data, events, key;
    return C_Users_vuong_OneDrive_M_y_t_nh_Courses_NextJS_Course_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://nextjs-course-e5902-default-rtdb.firebaseio.com/events.json');

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            data = _context.sent;
            events = [];

            for (key in data) {
              events.push(_objectSpread({
                id: key
              }, data[key]));
            }

            return _context.abrupt("return", events);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getAllEvents.apply(this, arguments);
}

function getFeaturedEvents() {
  return _getFeaturedEvents.apply(this, arguments);
}

function _getFeaturedEvents() {
  _getFeaturedEvents = Object(C_Users_vuong_OneDrive_M_y_t_nh_Courses_NextJS_Course_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_vuong_OneDrive_M_y_t_nh_Courses_NextJS_Course_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var allEvents;
    return C_Users_vuong_OneDrive_M_y_t_nh_Courses_NextJS_Course_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getAllEvents();

          case 2:
            allEvents = _context2.sent;
            return _context2.abrupt("return", allEvents.filter(function (event) {
              return event.isFeatured;
            }));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getFeaturedEvents.apply(this, arguments);
}

function getEventById(_x) {
  return _getEventById.apply(this, arguments);
}

function _getEventById() {
  _getEventById = Object(C_Users_vuong_OneDrive_M_y_t_nh_Courses_NextJS_Course_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_vuong_OneDrive_M_y_t_nh_Courses_NextJS_Course_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {
    var allEvents;
    return C_Users_vuong_OneDrive_M_y_t_nh_Courses_NextJS_Course_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getAllEvents();

          case 2:
            allEvents = _context3.sent;
            return _context3.abrupt("return", allEvents.find(function (event) {
              return event.id === id;
            }));

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getEventById.apply(this, arguments);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./pages/events/index.js":
/*!*******************************!*\
  !*** ./pages/events/index.js ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_api_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/api-utils */ "./helpers/api-utils.js");
/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/events/event-list */ "./components/events/event-list.js");
/* harmony import */ var _components_events_events_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/events/events-search */ "./components/events/events-search.js");


var _jsxFileName = "C:\\Users\\vuong\\OneDrive\\M\xE1y t\xEDnh\\Courses\\NextJS-Course\\pages\\events\\index.js",
    _s = $RefreshSig$();







function AllEventsPage() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var events = Object(_helpers_api_utils__WEBPACK_IMPORTED_MODULE_3__["getAllEvents"])();

  function findEventsHandler(year, month) {
    var fullPath = "/events/".concat(year, "/").concat(month);
    router.push(fullPath);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_events_search__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onSearch: findEventsHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_event_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
      items: events
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

_s(AllEventsPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = AllEventsPage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (AllEventsPage);

var _c;

$RefreshReg$(_c, "AllEventsPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9hcGktdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9ldmVudHMvaW5kZXguanMiXSwibmFtZXMiOlsiZ2V0QWxsRXZlbnRzIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZXZlbnRzIiwia2V5IiwicHVzaCIsImlkIiwiZ2V0RmVhdHVyZWRFdmVudHMiLCJhbGxFdmVudHMiLCJmaWx0ZXIiLCJldmVudCIsImlzRmVhdHVyZWQiLCJnZXRFdmVudEJ5SWQiLCJmaW5kIiwiQWxsRXZlbnRzUGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsImZpbmRFdmVudHNIYW5kbGVyIiwieWVhciIsIm1vbnRoIiwiZnVsbFBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sU0FBZUEsWUFBdEI7QUFBQTtBQUFBOzs7dVVBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDa0JDLEtBQUssQ0FDMUIscUVBRDBCLENBRHZCOztBQUFBO0FBQ0NDLG9CQUREO0FBQUE7QUFBQSxtQkFJY0EsUUFBUSxDQUFDQyxJQUFULEVBSmQ7O0FBQUE7QUFJQ0MsZ0JBSkQ7QUFNQ0Msa0JBTkQsR0FNVSxFQU5WOztBQVFMLGlCQUFXQyxHQUFYLElBQWtCRixJQUFsQixFQUF3QjtBQUN0QkMsb0JBQU0sQ0FBQ0UsSUFBUDtBQUNFQyxrQkFBRSxFQUFFRjtBQUROLGlCQUVLRixJQUFJLENBQUNFLEdBQUQsQ0FGVDtBQUlEOztBQWJJLDZDQWVFRCxNQWZGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFrQkEsU0FBZUksaUJBQXRCO0FBQUE7QUFBQTs7OzRVQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ21CVCxZQUFZLEVBRC9COztBQUFBO0FBQ0NVLHFCQUREO0FBQUEsOENBRUVBLFNBQVMsQ0FBQ0MsTUFBVixDQUFpQixVQUFDQyxLQUFEO0FBQUEscUJBQVdBLEtBQUssQ0FBQ0MsVUFBakI7QUFBQSxhQUFqQixDQUZGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFLQSxTQUFlQyxZQUF0QjtBQUFBO0FBQUE7Ozt1VUFBTyxrQkFBNEJOLEVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ21CUixZQUFZLEVBRC9COztBQUFBO0FBQ0NVLHFCQUREO0FBQUEsOENBRUVBLFNBQVMsQ0FBQ0ssSUFBVixDQUFlLFVBQUFILEtBQUs7QUFBQSxxQkFBSUEsS0FBSyxDQUFDSixFQUFOLEtBQWFBLEVBQWpCO0FBQUEsYUFBcEIsQ0FGRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCUDtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNRLGFBQVQsR0FBeUI7QUFBQTs7QUFDdkIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1iLE1BQU0sR0FBR0wsdUVBQVksRUFBM0I7O0FBRUEsV0FBU21CLGlCQUFULENBQTJCQyxJQUEzQixFQUFpQ0MsS0FBakMsRUFBd0M7QUFDdEMsUUFBTUMsUUFBUSxxQkFBY0YsSUFBZCxjQUFzQkMsS0FBdEIsQ0FBZDtBQUVBSixVQUFNLENBQUNWLElBQVAsQ0FBWWUsUUFBWjtBQUNEOztBQUVELHNCQUNFLHFFQUFDLDhDQUFEO0FBQUEsNEJBQ0UscUVBQUMsd0VBQUQ7QUFBYyxjQUFRLEVBQUVIO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLHFFQUFEO0FBQVcsV0FBSyxFQUFFZDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRDs7R0FoQlFXLGE7VUFDUUUscUQ7OztLQURSRixhOztBQTRCTUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzLjgzZWY5ZGIxNzRjNDY3MTViMWE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsRXZlbnRzKCkge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAnaHR0cHM6Ly9uZXh0anMtY291cnNlLWU1OTAyLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9ldmVudHMuanNvbidcclxuICApXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG5cclxuICBjb25zdCBldmVudHMgPSBbXVxyXG5cclxuICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XHJcbiAgICBldmVudHMucHVzaCh7XHJcbiAgICAgIGlkOiBrZXksXHJcbiAgICAgIC4uLmRhdGFba2V5XVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiBldmVudHNcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZlYXR1cmVkRXZlbnRzKCkge1xyXG4gIGNvbnN0IGFsbEV2ZW50cyA9IGF3YWl0IGdldEFsbEV2ZW50cygpXHJcbiAgcmV0dXJuIGFsbEV2ZW50cy5maWx0ZXIoKGV2ZW50KSA9PiBldmVudC5pc0ZlYXR1cmVkKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXZlbnRCeUlkKGlkKSB7XHJcbiAgY29uc3QgYWxsRXZlbnRzID0gYXdhaXQgZ2V0QWxsRXZlbnRzKClcclxuICByZXR1cm4gYWxsRXZlbnRzLmZpbmQoZXZlbnQgPT4gZXZlbnQuaWQgPT09IGlkKVxyXG59IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgeyBnZXRBbGxFdmVudHMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL2FwaS11dGlscydcclxuaW1wb3J0IEV2ZW50TGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2V2ZW50cy9ldmVudC1saXN0J1xyXG5pbXBvcnQgRXZlbnRzU2VhcmNoIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50cy1zZWFyY2gnXHJcblxyXG5mdW5jdGlvbiBBbGxFdmVudHNQYWdlKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgZXZlbnRzID0gZ2V0QWxsRXZlbnRzKClcclxuXHJcbiAgZnVuY3Rpb24gZmluZEV2ZW50c0hhbmRsZXIoeWVhciwgbW9udGgpIHtcclxuICAgIGNvbnN0IGZ1bGxQYXRoID0gYC9ldmVudHMvJHt5ZWFyfS8ke21vbnRofWBcclxuXHJcbiAgICByb3V0ZXIucHVzaChmdWxsUGF0aClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxFdmVudHNTZWFyY2ggb25TZWFyY2g9e2ZpbmRFdmVudHNIYW5kbGVyfSAvPlxyXG4gICAgICA8RXZlbnRMaXN0IGl0ZW1zPXtldmVudHN9IC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IGV2ZW50cyA9IGF3YWl0IGdldEFsbEV2ZW50cygpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBldmVudHM6IGV2ZW50c1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxsRXZlbnRzUGFnZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9