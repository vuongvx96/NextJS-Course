webpackHotUpdate_N_E("pages/events/[...slug]",{

/***/ "./pages/events/[...slug].js":
/*!***********************************!*\
  !*** ./pages/events/[...slug].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_vuong_OneDrive_M_y_t_nh_Courses_NextJS_Course_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _helpers_api_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/api-utils */ "./helpers/api-utils.js");
/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/events/event-list */ "./components/events/event-list.js");
/* harmony import */ var _components_results_title_results_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/results-title/results-title */ "./components/results-title/results-title.js");
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ui/button */ "./components/ui/button.js");
/* harmony import */ var _components_error_alert_error_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/error-alert/error-alert */ "./components/error-alert/error-alert.js");



var _jsxFileName = "C:\\Users\\vuong\\OneDrive\\M\xE1y t\xEDnh\\Courses\\NextJS-Course\\pages\\events\\[...slug].js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_vuong_OneDrive_M_y_t_nh_Courses_NextJS_Course_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function FilteredEventsPage(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      loadedEvents = _useState[0],
      setLoadedEvents = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var filterData = router.query.slug;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_4__["default"])('https://nextjs-course-e5902-default-rtdb.firebaseio.com/events.json'),
      data = _useSWR.data,
      error = _useSWR.error;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (data) {
      var events = [];

      for (var key in data) {
        events.push(_objectSpread({
          id: key
        }, data[key]));
      }

      setLoadedEvents(events);
    }
  }, [data]);

  if (!loadedEvents) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "center",
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 12
    }, this);
  }

  var filteredYear = filterData[0];
  var filteredMonth = filterData[1];
  var numYear = +filteredYear;
  var numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_error_alert_error_alert__WEBPACK_IMPORTED_MODULE_9__["default"], {
        children: "Invalid filter. ErrorAlertlease adjust your values!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
          link: "/events",
          children: "Show All Events"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this);
  }

  var filteredEvents = loadedEvents.filter(function (event) {
    var eventDate = new Date(event.date);
    return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_error_alert_error_alert__WEBPACK_IMPORTED_MODULE_9__["default"], {
        children: "No events found for the chosen filter!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this);
  }

  var date = new Date(numYear, numMonth - 1);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_results_title_results_title__WEBPACK_IMPORTED_MODULE_7__["default"], {
      date: date
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_event_list__WEBPACK_IMPORTED_MODULE_6__["default"], {
      items: filteredEvents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 5
  }, this);
}

_s(FilteredEventsPage, "hwq1TvVTLkFaW19sxuD351Wc1/s=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], swr__WEBPACK_IMPORTED_MODULE_4__["default"]];
});

_c = FilteredEventsPage;
/* harmony default export */ __webpack_exports__["default"] = (FilteredEventsPage);

var _c;

$RefreshReg$(_c, "FilteredEventsPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qcyJdLCJuYW1lcyI6WyJGaWx0ZXJlZEV2ZW50c1BhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwibG9hZGVkRXZlbnRzIiwic2V0TG9hZGVkRXZlbnRzIiwicm91dGVyIiwidXNlUm91dGVyIiwiZmlsdGVyRGF0YSIsInF1ZXJ5Iiwic2x1ZyIsInVzZVNXUiIsImRhdGEiLCJlcnJvciIsInVzZUVmZmVjdCIsImV2ZW50cyIsImtleSIsInB1c2giLCJpZCIsImZpbHRlcmVkWWVhciIsImZpbHRlcmVkTW9udGgiLCJudW1ZZWFyIiwibnVtTW9udGgiLCJpc05hTiIsImZpbHRlcmVkRXZlbnRzIiwiZmlsdGVyIiwiZXZlbnQiLCJldmVudERhdGUiLCJEYXRlIiwiZGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGtCQUFULENBQTRCQyxLQUE1QixFQUFtQztBQUFBOztBQUFBLGtCQUNPQyxzREFBUSxDQUFDLEVBQUQsQ0FEZjtBQUFBLE1BQzFCQyxZQUQwQjtBQUFBLE1BQ1pDLGVBRFk7O0FBRWpDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxNQUFNQyxVQUFVLEdBQUdGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxJQUFoQzs7QUFKaUMsZ0JBTVRDLG1EQUFNLENBQzVCLHFFQUQ0QixDQU5HO0FBQUEsTUFNekJDLElBTnlCLFdBTXpCQSxJQU55QjtBQUFBLE1BTW5CQyxLQU5tQixXQU1uQkEsS0FObUI7O0FBVWpDQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJRixJQUFKLEVBQVU7QUFDUixVQUFNRyxNQUFNLEdBQUcsRUFBZjs7QUFFQSxXQUFLLElBQU1DLEdBQVgsSUFBa0JKLElBQWxCLEVBQXdCO0FBQ3RCRyxjQUFNLENBQUNFLElBQVA7QUFDRUMsWUFBRSxFQUFFRjtBQUROLFdBRUtKLElBQUksQ0FBQ0ksR0FBRCxDQUZUO0FBSUQ7O0FBRURYLHFCQUFlLENBQUNVLE1BQUQsQ0FBZjtBQUNEO0FBQ0YsR0FiUSxFQWFOLENBQUNILElBQUQsQ0FiTSxDQUFUOztBQWVBLE1BQUksQ0FBQ1IsWUFBTCxFQUFtQjtBQUNqQix3QkFBTztBQUFHLGVBQVMsRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFFRCxNQUFNZSxZQUFZLEdBQUdYLFVBQVUsQ0FBQyxDQUFELENBQS9CO0FBQ0EsTUFBTVksYUFBYSxHQUFHWixVQUFVLENBQUMsQ0FBRCxDQUFoQztBQUVBLE1BQU1hLE9BQU8sR0FBRyxDQUFDRixZQUFqQjtBQUNBLE1BQU1HLFFBQVEsR0FBRyxDQUFDRixhQUFsQjs7QUFFQSxNQUNFRyxLQUFLLENBQUNGLE9BQUQsQ0FBTCxJQUNBRSxLQUFLLENBQUNELFFBQUQsQ0FETCxJQUVBRCxPQUFPLEdBQUcsSUFGVixJQUdBQSxPQUFPLEdBQUcsSUFIVixJQUlBQyxRQUFRLEdBQUcsQ0FKWCxJQUtBQSxRQUFRLEdBQUcsRUFOYixFQU9FO0FBQ0Esd0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw4QkFDRSxxRUFBQywyRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQSwrQkFDRSxxRUFBQyw2REFBRDtBQUFRLGNBQUksRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBVUQ7O0FBRUQsTUFBTUUsY0FBYyxHQUFHcEIsWUFBWSxDQUFDcUIsTUFBYixDQUFvQixVQUFBQyxLQUFLLEVBQUk7QUFDbEQsUUFBTUMsU0FBUyxHQUFHLElBQUlDLElBQUosQ0FBU0YsS0FBSyxDQUFDRyxJQUFmLENBQWxCO0FBQ0EsV0FBT0YsU0FBUyxDQUFDRyxXQUFWLE9BQTRCVCxPQUE1QixJQUF1Q00sU0FBUyxDQUFDSSxRQUFWLE9BQXlCVCxRQUFRLEdBQUcsQ0FBbEY7QUFDRCxHQUhzQixDQUF2Qjs7QUFLQSxNQUFJLENBQUNFLGNBQUQsSUFBbUJBLGNBQWMsQ0FBQ1EsTUFBZixLQUEwQixDQUFqRCxFQUFvRDtBQUNsRCx3QkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDZCQUNFLHFFQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBS0Q7O0FBRUQsTUFBTUgsSUFBSSxHQUFHLElBQUlELElBQUosQ0FBU1AsT0FBVCxFQUFrQkMsUUFBUSxHQUFHLENBQTdCLENBQWI7QUFFQSxzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLCtFQUFEO0FBQWMsVUFBSSxFQUFFTztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyxxRUFBRDtBQUFXLFdBQUssRUFBRUw7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7O0dBNUVRdkIsa0I7VUFFUU0scUQsRUFJU0ksMkM7OztLQU5qQlYsa0I7QUE4RU1BLGlGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V2ZW50cy9bLi4uc2x1Z10uOWQxN2Y2ODkxOGYzM2U1MWYyMzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuXHJcbmltcG9ydCB7IGdldEZpbHRlcmVkRXZlbnRzIH0gZnJvbSAnLi4vLi4vaGVscGVycy9hcGktdXRpbHMnXHJcbmltcG9ydCBFdmVudExpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtbGlzdCdcclxuaW1wb3J0IFJlc3VsdHNUaXRsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Jlc3VsdHMtdGl0bGUvcmVzdWx0cy10aXRsZSdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VpL2J1dHRvbidcclxuaW1wb3J0IEVycm9yQWxlcnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9lcnJvci1hbGVydC9lcnJvci1hbGVydCdcclxuXHJcbmZ1bmN0aW9uIEZpbHRlcmVkRXZlbnRzUGFnZShwcm9wcykge1xyXG4gIGNvbnN0IFtsb2FkZWRFdmVudHMsIHNldExvYWRlZEV2ZW50c10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBmaWx0ZXJEYXRhID0gcm91dGVyLnF1ZXJ5LnNsdWdcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgJ2h0dHBzOi8vbmV4dGpzLWNvdXJzZS1lNTkwMi1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vZXZlbnRzLmpzb24nXHJcbiAgKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgY29uc3QgZXZlbnRzID0gW11cclxuXHJcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICBpZDoga2V5LFxyXG4gICAgICAgICAgLi4uZGF0YVtrZXldXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0TG9hZGVkRXZlbnRzKGV2ZW50cylcclxuICAgIH1cclxuICB9LCBbZGF0YV0pXHJcblxyXG4gIGlmICghbG9hZGVkRXZlbnRzKSB7XHJcbiAgICByZXR1cm4gPHAgY2xhc3NOYW1lPSdjZW50ZXInPkxvYWRpbmcuLi48L3A+XHJcbiAgfVxyXG5cclxuICBjb25zdCBmaWx0ZXJlZFllYXIgPSBmaWx0ZXJEYXRhWzBdXHJcbiAgY29uc3QgZmlsdGVyZWRNb250aCA9IGZpbHRlckRhdGFbMV1cclxuXHJcbiAgY29uc3QgbnVtWWVhciA9ICtmaWx0ZXJlZFllYXJcclxuICBjb25zdCBudW1Nb250aCA9ICtmaWx0ZXJlZE1vbnRoXHJcblxyXG4gIGlmIChcclxuICAgIGlzTmFOKG51bVllYXIpIHx8XHJcbiAgICBpc05hTihudW1Nb250aCkgfHxcclxuICAgIG51bVllYXIgPiAyMDMwIHx8XHJcbiAgICBudW1ZZWFyIDwgMjAyMSB8fFxyXG4gICAgbnVtTW9udGggPCAxIHx8XHJcbiAgICBudW1Nb250aCA+IDEyXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgPEVycm9yQWxlcnQ+XHJcbiAgICAgICAgICBJbnZhbGlkIGZpbHRlci4gRXJyb3JBbGVydGxlYXNlIGFkanVzdCB5b3VyIHZhbHVlcyFcclxuICAgICAgICA8L0Vycm9yQWxlcnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NlbnRlcic+XHJcbiAgICAgICAgICA8QnV0dG9uIGxpbms9Jy9ldmVudHMnPlNob3cgQWxsIEV2ZW50czwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlsdGVyZWRFdmVudHMgPSBsb2FkZWRFdmVudHMuZmlsdGVyKGV2ZW50ID0+IHtcclxuICAgIGNvbnN0IGV2ZW50RGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmRhdGUpXHJcbiAgICByZXR1cm4gZXZlbnREYXRlLmdldEZ1bGxZZWFyKCkgPT09IG51bVllYXIgJiYgZXZlbnREYXRlLmdldE1vbnRoKCkgPT09IG51bU1vbnRoIC0gMVxyXG4gIH0pXHJcblxyXG4gIGlmICghZmlsdGVyZWRFdmVudHMgfHwgZmlsdGVyZWRFdmVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgPEVycm9yQWxlcnQ+Tm8gZXZlbnRzIGZvdW5kIGZvciB0aGUgY2hvc2VuIGZpbHRlciE8L0Vycm9yQWxlcnQ+XHJcbiAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUobnVtWWVhciwgbnVtTW9udGggLSAxKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8UmVzdWx0c1RpdGxlIGRhdGU9e2RhdGV9IC8+XHJcbiAgICAgIDxFdmVudExpc3QgaXRlbXM9e2ZpbHRlcmVkRXZlbnRzfSAvPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcmVkRXZlbnRzUGFnZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9