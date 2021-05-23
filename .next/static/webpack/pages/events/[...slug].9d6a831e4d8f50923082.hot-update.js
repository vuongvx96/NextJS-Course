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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/events/event-list */ "./components/events/event-list.js");
/* harmony import */ var _components_results_title_results_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/results-title/results-title */ "./components/results-title/results-title.js");
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ui/button */ "./components/ui/button.js");
/* harmony import */ var _components_error_alert_error_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/error-alert/error-alert */ "./components/error-alert/error-alert.js");


var _jsxFileName = "C:\\Users\\vuong\\OneDrive\\M\xE1y t\xEDnh\\Courses\\NextJS-Course\\pages\\events\\[...slug].js",
    _s = $RefreshSig$();









function FilteredEventsPage(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var filterData = router.query.slug;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_3__["default"])('https://nextjs-course-e5902-default-rtdb.firebaseio.com/events.json'),
      data = _useSWR.data,
      error = _useSWR.error;

  if (!filterData) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "center",
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 12
    }, this);
  }

  var filteredYear = filterData[0];
  var filteredMonth = filterData[1];

  if (props.hasError) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_error_alert_error_alert__WEBPACK_IMPORTED_MODULE_7__["default"], {
        children: "Invalid filter. ErrorAlertlease adjust your values!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
          link: "/events",
          children: "Show All Events"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this);
  }

  var filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_error_alert_error_alert__WEBPACK_IMPORTED_MODULE_7__["default"], {
        children: "No events found for the chosen filter!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this);
  }

  var date = new Date(props.date.year, props.date.month - 1);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_results_title_results_title__WEBPACK_IMPORTED_MODULE_5__["default"], {
      date: date
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_event_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
      items: filteredEvents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

_s(FilteredEventsPage, "mZuyhWoEayG5q+fyCgnn11lj9Sg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"], swr__WEBPACK_IMPORTED_MODULE_3__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qcyJdLCJuYW1lcyI6WyJGaWx0ZXJlZEV2ZW50c1BhZ2UiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsImZpbHRlckRhdGEiLCJxdWVyeSIsInNsdWciLCJ1c2VTV1IiLCJkYXRhIiwiZXJyb3IiLCJmaWx0ZXJlZFllYXIiLCJmaWx0ZXJlZE1vbnRoIiwiaGFzRXJyb3IiLCJmaWx0ZXJlZEV2ZW50cyIsImV2ZW50cyIsImxlbmd0aCIsImRhdGUiLCJEYXRlIiwieWVhciIsIm1vbnRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0Esa0JBQVQsQ0FBNEJDLEtBQTVCLEVBQW1DO0FBQUE7O0FBQ2pDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxNQUFNQyxVQUFVLEdBQUdGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxJQUFoQzs7QUFIaUMsZ0JBS1hDLG1EQUFNLENBQUMscUVBQUQsQ0FMSztBQUFBLE1BSzFCQyxJQUwwQixXQUsxQkEsSUFMMEI7QUFBQSxNQUtwQkMsS0FMb0IsV0FLcEJBLEtBTG9COztBQU9qQyxNQUFJLENBQUNMLFVBQUwsRUFBaUI7QUFDZix3QkFBTztBQUFHLGVBQVMsRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFFRCxNQUFNTSxZQUFZLEdBQUdOLFVBQVUsQ0FBQyxDQUFELENBQS9CO0FBQ0EsTUFBTU8sYUFBYSxHQUFHUCxVQUFVLENBQUMsQ0FBRCxDQUFoQzs7QUFFQSxNQUFJSCxLQUFLLENBQUNXLFFBQVYsRUFBb0I7QUFDbEIsd0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw4QkFDRSxxRUFBQywyRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQSwrQkFDRSxxRUFBQyw2REFBRDtBQUFRLGNBQUksRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBVUQ7O0FBRUQsTUFBTUMsY0FBYyxHQUFHWixLQUFLLENBQUNhLE1BQTdCOztBQUVBLE1BQUksQ0FBQ0QsY0FBRCxJQUFtQkEsY0FBYyxDQUFDRSxNQUFmLEtBQTBCLENBQWpELEVBQW9EO0FBQ2xELHdCQUNFLHFFQUFDLDhDQUFEO0FBQUEsNkJBQ0UscUVBQUMsMkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFLRDs7QUFFRCxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixDQUFTaEIsS0FBSyxDQUFDZSxJQUFOLENBQVdFLElBQXBCLEVBQTBCakIsS0FBSyxDQUFDZSxJQUFOLENBQVdHLEtBQVgsR0FBbUIsQ0FBN0MsQ0FBYjtBQUVBLHNCQUNFLHFFQUFDLDhDQUFEO0FBQUEsNEJBQ0UscUVBQUMsK0VBQUQ7QUFBYyxVQUFJLEVBQUVIO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLHFFQUFEO0FBQVcsV0FBSyxFQUFFSDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRDs7R0E3Q1FiLGtCO1VBQ1FHLHFELEVBSU9JLDJDOzs7S0FMZlAsa0I7O0FBc0ZNQSxpRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ldmVudHMvWy4uLnNsdWddLjlkNmE4MzFlNGQ4ZjUwOTIzMDgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuXHJcbmltcG9ydCB7IGdldEZpbHRlcmVkRXZlbnRzIH0gZnJvbSAnLi4vLi4vaGVscGVycy9hcGktdXRpbHMnXHJcbmltcG9ydCBFdmVudExpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtbGlzdCdcclxuaW1wb3J0IFJlc3VsdHNUaXRsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Jlc3VsdHMtdGl0bGUvcmVzdWx0cy10aXRsZSdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VpL2J1dHRvbidcclxuaW1wb3J0IEVycm9yQWxlcnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9lcnJvci1hbGVydC9lcnJvci1hbGVydCdcclxuXHJcbmZ1bmN0aW9uIEZpbHRlcmVkRXZlbnRzUGFnZShwcm9wcykge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IGZpbHRlckRhdGEgPSByb3V0ZXIucXVlcnkuc2x1Z1xyXG5cclxuICBjb25zdCB7ZGF0YSwgZXJyb3J9ID0gdXNlU1dSKCdodHRwczovL25leHRqcy1jb3Vyc2UtZTU5MDItZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL2V2ZW50cy5qc29uJylcclxuXHJcbiAgaWYgKCFmaWx0ZXJEYXRhKSB7XHJcbiAgICByZXR1cm4gPHAgY2xhc3NOYW1lPSdjZW50ZXInPkxvYWRpbmcuLi48L3A+XHJcbiAgfVxyXG5cclxuICBjb25zdCBmaWx0ZXJlZFllYXIgPSBmaWx0ZXJEYXRhWzBdXHJcbiAgY29uc3QgZmlsdGVyZWRNb250aCA9IGZpbHRlckRhdGFbMV1cclxuXHJcbiAgaWYgKHByb3BzLmhhc0Vycm9yKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgPEVycm9yQWxlcnQ+XHJcbiAgICAgICAgICBJbnZhbGlkIGZpbHRlci4gRXJyb3JBbGVydGxlYXNlIGFkanVzdCB5b3VyIHZhbHVlcyFcclxuICAgICAgICA8L0Vycm9yQWxlcnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NlbnRlcic+XHJcbiAgICAgICAgICA8QnV0dG9uIGxpbms9Jy9ldmVudHMnPlNob3cgQWxsIEV2ZW50czwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlsdGVyZWRFdmVudHMgPSBwcm9wcy5ldmVudHNcclxuXHJcbiAgaWYgKCFmaWx0ZXJlZEV2ZW50cyB8fCBmaWx0ZXJlZEV2ZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICA8RXJyb3JBbGVydD5ObyBldmVudHMgZm91bmQgZm9yIHRoZSBjaG9zZW4gZmlsdGVyITwvRXJyb3JBbGVydD5cclxuICAgICAgPC9GcmFnbWVudD5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShwcm9wcy5kYXRlLnllYXIsIHByb3BzLmRhdGUubW9udGggLSAxKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8UmVzdWx0c1RpdGxlIGRhdGU9e2RhdGV9IC8+XHJcbiAgICAgIDxFdmVudExpc3QgaXRlbXM9e2ZpbHRlcmVkRXZlbnRzfSAvPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgcGFyYW1zIH0gPSBjb250ZXh0XHJcblxyXG4gIGNvbnN0IGZpbHRlckRhdGEgPSBwYXJhbXMuc2x1Z1xyXG5cclxuICBjb25zdCBmaWx0ZXJlZFllYXIgPSBmaWx0ZXJEYXRhWzBdXHJcbiAgY29uc3QgZmlsdGVyZWRNb250aCA9IGZpbHRlckRhdGFbMV1cclxuXHJcbiAgY29uc3QgbnVtWWVhciA9ICtmaWx0ZXJlZFllYXJcclxuICBjb25zdCBudW1Nb250aCA9ICtmaWx0ZXJlZE1vbnRoXHJcblxyXG4gIGlmIChcclxuICAgIGlzTmFOKG51bVllYXIpIHx8XHJcbiAgICBpc05hTihudW1Nb250aCkgfHxcclxuICAgIG51bVllYXIgPiAyMDMwIHx8XHJcbiAgICBudW1ZZWFyIDwgMjAyMSB8fFxyXG4gICAgbnVtTW9udGggPCAxIHx8XHJcbiAgICBudW1Nb250aCA+IDEyXHJcbiAgKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczogeyBoYXNFcnJvcjogdHJ1ZSB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBmaWx0ZXJlZEV2ZW50cyA9IGF3YWl0IGdldEZpbHRlcmVkRXZlbnRzKHtcclxuICAgIHllYXI6IG51bVllYXIsXHJcbiAgICBtb250aDogbnVtTW9udGhcclxuICB9KVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZXZlbnRzOiBmaWx0ZXJlZEV2ZW50cyxcclxuICAgICAgZGF0ZToge1xyXG4gICAgICAgIHllYXI6IG51bVllYXIsXHJcbiAgICAgICAgbW9udGg6IG51bU1vbnRoXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyZWRFdmVudHNQYWdlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=