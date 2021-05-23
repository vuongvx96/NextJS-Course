webpackHotUpdate_N_E("pages/events/[...slug]",{

/***/ "./pages/events/[...slug].js":
/*!***********************************!*\
  !*** ./pages/events/[...slug].js ***!
  \***********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_vuong_OneDrive_M_y_t_nh_Courses_NextJS_Course_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/events/event-list */ "./components/events/event-list.js");
/* harmony import */ var _components_results_title_results_title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/results-title/results-title */ "./components/results-title/results-title.js");
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ui/button */ "./components/ui/button.js");
/* harmony import */ var _components_error_alert_error_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/error-alert/error-alert */ "./components/error-alert/error-alert.js");



var _jsxFileName = "C:\\Users\\vuong\\OneDrive\\M\xE1y t\xEDnh\\Courses\\NextJS-Course\\pages\\events\\[...slug].js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_vuong_OneDrive_M_y_t_nh_Courses_NextJS_Course_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function FilteredEventsPage(props) {
  _s();

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
    }
  }, [data]);

  if (!filterData) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "center",
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 12
    }, this);
  }

  var filteredYear = filterData[0];
  var filteredMonth = filterData[1];

  if (props.hasError) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_error_alert_error_alert__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: "Invalid filter. ErrorAlertlease adjust your values!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
          link: "/events",
          children: "Show All Events"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this);
  }

  var filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_error_alert_error_alert__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: "No events found for the chosen filter!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this);
  }

  var date = new Date(props.date.year, props.date.month - 1);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_results_title_results_title__WEBPACK_IMPORTED_MODULE_6__["default"], {
      date: date
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_event_list__WEBPACK_IMPORTED_MODULE_5__["default"], {
      items: filteredEvents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, this);
}

_s(FilteredEventsPage, "17an/7AORVZxd5HgJtVAPP8dCpM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], swr__WEBPACK_IMPORTED_MODULE_4__["default"]];
});

_c = FilteredEventsPage;
var __N_SSP = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qcyJdLCJuYW1lcyI6WyJGaWx0ZXJlZEV2ZW50c1BhZ2UiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsImZpbHRlckRhdGEiLCJxdWVyeSIsInNsdWciLCJ1c2VTV1IiLCJkYXRhIiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJldmVudHMiLCJrZXkiLCJwdXNoIiwiaWQiLCJmaWx0ZXJlZFllYXIiLCJmaWx0ZXJlZE1vbnRoIiwiaGFzRXJyb3IiLCJmaWx0ZXJlZEV2ZW50cyIsImxlbmd0aCIsImRhdGUiLCJEYXRlIiwieWVhciIsIm1vbnRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0Esa0JBQVQsQ0FBNEJDLEtBQTVCLEVBQW1DO0FBQUE7O0FBQ2pDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxNQUFNQyxVQUFVLEdBQUdGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxJQUFoQzs7QUFIaUMsZ0JBS1hDLG1EQUFNLENBQUMscUVBQUQsQ0FMSztBQUFBLE1BSzFCQyxJQUwwQixXQUsxQkEsSUFMMEI7QUFBQSxNQUtwQkMsS0FMb0IsV0FLcEJBLEtBTG9COztBQU9qQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUYsSUFBSixFQUFVO0FBQ1IsVUFBTUcsTUFBTSxHQUFHLEVBQWY7O0FBRUEsV0FBSyxJQUFNQyxHQUFYLElBQWtCSixJQUFsQixFQUF3QjtBQUN0QkcsY0FBTSxDQUFDRSxJQUFQO0FBQ0VDLFlBQUUsRUFBRUY7QUFETixXQUVLSixJQUFJLENBQUNJLEdBQUQsQ0FGVDtBQUlEO0FBQ0Y7QUFDRixHQVhRLEVBV04sQ0FBQ0osSUFBRCxDQVhNLENBQVQ7O0FBWUEsTUFBSSxDQUFDSixVQUFMLEVBQWlCO0FBQ2Ysd0JBQU87QUFBRyxlQUFTLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBRUQsTUFBTVcsWUFBWSxHQUFHWCxVQUFVLENBQUMsQ0FBRCxDQUEvQjtBQUNBLE1BQU1ZLGFBQWEsR0FBR1osVUFBVSxDQUFDLENBQUQsQ0FBaEM7O0FBRUEsTUFBSUgsS0FBSyxDQUFDZ0IsUUFBVixFQUFvQjtBQUNsQix3QkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDhCQUNFLHFFQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBLCtCQUNFLHFFQUFDLDZEQUFEO0FBQVEsY0FBSSxFQUFDLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFVRDs7QUFFRCxNQUFNQyxjQUFjLEdBQUdqQixLQUFLLENBQUNVLE1BQTdCOztBQUVBLE1BQUksQ0FBQ08sY0FBRCxJQUFtQkEsY0FBYyxDQUFDQyxNQUFmLEtBQTBCLENBQWpELEVBQW9EO0FBQ2xELHdCQUNFLHFFQUFDLDhDQUFEO0FBQUEsNkJBQ0UscUVBQUMsMkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFLRDs7QUFFRCxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixDQUFTcEIsS0FBSyxDQUFDbUIsSUFBTixDQUFXRSxJQUFwQixFQUEwQnJCLEtBQUssQ0FBQ21CLElBQU4sQ0FBV0csS0FBWCxHQUFtQixDQUE3QyxDQUFiO0FBRUEsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFDRSxxRUFBQywrRUFBRDtBQUFjLFVBQUksRUFBRUg7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMscUVBQUQ7QUFBVyxXQUFLLEVBQUVGO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EOztHQXpEUWxCLGtCO1VBQ1FHLHFELEVBSU9JLDJDOzs7S0FMZlAsa0I7O0FBa0dNQSxpRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ldmVudHMvWy4uLnNsdWddLjAyYWMzYjMwMTQ2YWMyZTg2Njk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcblxyXG5pbXBvcnQgeyBnZXRGaWx0ZXJlZEV2ZW50cyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvYXBpLXV0aWxzJ1xyXG5pbXBvcnQgRXZlbnRMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50LWxpc3QnXHJcbmltcG9ydCBSZXN1bHRzVGl0bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9yZXN1bHRzLXRpdGxlL3Jlc3VsdHMtdGl0bGUnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy91aS9idXR0b24nXHJcbmltcG9ydCBFcnJvckFsZXJ0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZXJyb3ItYWxlcnQvZXJyb3ItYWxlcnQnXHJcblxyXG5mdW5jdGlvbiBGaWx0ZXJlZEV2ZW50c1BhZ2UocHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBmaWx0ZXJEYXRhID0gcm91dGVyLnF1ZXJ5LnNsdWdcclxuXHJcbiAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUignaHR0cHM6Ly9uZXh0anMtY291cnNlLWU1OTAyLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9ldmVudHMuanNvbicpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBjb25zdCBldmVudHMgPSBbXVxyXG4gICAgICBcclxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgIGlkOiBrZXksXHJcbiAgICAgICAgICAuLi5kYXRhW2tleV1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2RhdGFdKVxyXG4gIGlmICghZmlsdGVyRGF0YSkge1xyXG4gICAgcmV0dXJuIDxwIGNsYXNzTmFtZT0nY2VudGVyJz5Mb2FkaW5nLi4uPC9wPlxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlsdGVyZWRZZWFyID0gZmlsdGVyRGF0YVswXVxyXG4gIGNvbnN0IGZpbHRlcmVkTW9udGggPSBmaWx0ZXJEYXRhWzFdXHJcblxyXG4gIGlmIChwcm9wcy5oYXNFcnJvcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgIDxFcnJvckFsZXJ0PlxyXG4gICAgICAgICAgSW52YWxpZCBmaWx0ZXIuIEVycm9yQWxlcnRsZWFzZSBhZGp1c3QgeW91ciB2YWx1ZXMhXHJcbiAgICAgICAgPC9FcnJvckFsZXJ0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZW50ZXInPlxyXG4gICAgICAgICAgPEJ1dHRvbiBsaW5rPScvZXZlbnRzJz5TaG93IEFsbCBFdmVudHM8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9GcmFnbWVudD5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbHRlcmVkRXZlbnRzID0gcHJvcHMuZXZlbnRzXHJcblxyXG4gIGlmICghZmlsdGVyZWRFdmVudHMgfHwgZmlsdGVyZWRFdmVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgPEVycm9yQWxlcnQ+Tm8gZXZlbnRzIGZvdW5kIGZvciB0aGUgY2hvc2VuIGZpbHRlciE8L0Vycm9yQWxlcnQ+XHJcbiAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUocHJvcHMuZGF0ZS55ZWFyLCBwcm9wcy5kYXRlLm1vbnRoIC0gMSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPFJlc3VsdHNUaXRsZSBkYXRlPXtkYXRlfSAvPlxyXG4gICAgICA8RXZlbnRMaXN0IGl0ZW1zPXtmaWx0ZXJlZEV2ZW50c30gLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHBhcmFtcyB9ID0gY29udGV4dFxyXG5cclxuICBjb25zdCBmaWx0ZXJEYXRhID0gcGFyYW1zLnNsdWdcclxuXHJcbiAgY29uc3QgZmlsdGVyZWRZZWFyID0gZmlsdGVyRGF0YVswXVxyXG4gIGNvbnN0IGZpbHRlcmVkTW9udGggPSBmaWx0ZXJEYXRhWzFdXHJcblxyXG4gIGNvbnN0IG51bVllYXIgPSArZmlsdGVyZWRZZWFyXHJcbiAgY29uc3QgbnVtTW9udGggPSArZmlsdGVyZWRNb250aFxyXG5cclxuICBpZiAoXHJcbiAgICBpc05hTihudW1ZZWFyKSB8fFxyXG4gICAgaXNOYU4obnVtTW9udGgpIHx8XHJcbiAgICBudW1ZZWFyID4gMjAzMCB8fFxyXG4gICAgbnVtWWVhciA8IDIwMjEgfHxcclxuICAgIG51bU1vbnRoIDwgMSB8fFxyXG4gICAgbnVtTW9udGggPiAxMlxyXG4gICkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHsgaGFzRXJyb3I6IHRydWUgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlsdGVyZWRFdmVudHMgPSBhd2FpdCBnZXRGaWx0ZXJlZEV2ZW50cyh7XHJcbiAgICB5ZWFyOiBudW1ZZWFyLFxyXG4gICAgbW9udGg6IG51bU1vbnRoXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGV2ZW50czogZmlsdGVyZWRFdmVudHMsXHJcbiAgICAgIGRhdGU6IHtcclxuICAgICAgICB5ZWFyOiBudW1ZZWFyLFxyXG4gICAgICAgIG1vbnRoOiBudW1Nb250aFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcmVkRXZlbnRzUGFnZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9