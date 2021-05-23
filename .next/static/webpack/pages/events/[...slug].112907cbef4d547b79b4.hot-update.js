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
/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/events/event-list */ "./components/events/event-list.js");
/* harmony import */ var _components_results_title_results_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/results-title/results-title */ "./components/results-title/results-title.js");
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ui/button */ "./components/ui/button.js");
/* harmony import */ var _components_error_alert_error_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/error-alert/error-alert */ "./components/error-alert/error-alert.js");


var _jsxFileName = "C:\\Users\\vuong\\OneDrive\\M\xE1y t\xEDnh\\Courses\\NextJS-Course\\pages\\events\\[...slug].js",
    _s = $RefreshSig$();








function FilteredEventsPage(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var filterData = router.query.slug;
  var filteredYear = filterData[0];
  var filteredMonth = filterData[1];
  var numYear = +filteredYear;
  var numMonth = +filteredMonth;

  if (props.hasError) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_error_alert_error_alert__WEBPACK_IMPORTED_MODULE_6__["default"], {
        children: "Invalid filter. ErrorAlertlease adjust your values!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          link: "/events",
          children: "Show All Events"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this);
  }

  var filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_error_alert_error_alert__WEBPACK_IMPORTED_MODULE_6__["default"], {
        children: "No events found for the chosen filter!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this);
  }

  var date = new Date(props.date.year, props.date.month - 1);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_results_title_results_title__WEBPACK_IMPORTED_MODULE_4__["default"], {
      date: date
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_events_event_list__WEBPACK_IMPORTED_MODULE_3__["default"], {
      items: filteredEvents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

_s(FilteredEventsPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qcyJdLCJuYW1lcyI6WyJGaWx0ZXJlZEV2ZW50c1BhZ2UiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsImZpbHRlckRhdGEiLCJxdWVyeSIsInNsdWciLCJmaWx0ZXJlZFllYXIiLCJmaWx0ZXJlZE1vbnRoIiwibnVtWWVhciIsIm51bU1vbnRoIiwiaGFzRXJyb3IiLCJmaWx0ZXJlZEV2ZW50cyIsImV2ZW50cyIsImxlbmd0aCIsImRhdGUiLCJEYXRlIiwieWVhciIsIm1vbnRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0Esa0JBQVQsQ0FBNEJDLEtBQTVCLEVBQW1DO0FBQUE7O0FBQ2pDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxNQUFNQyxVQUFVLEdBQUdGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxJQUFoQztBQUVBLE1BQU1DLFlBQVksR0FBR0gsVUFBVSxDQUFDLENBQUQsQ0FBL0I7QUFDQSxNQUFNSSxhQUFhLEdBQUdKLFVBQVUsQ0FBQyxDQUFELENBQWhDO0FBRUEsTUFBTUssT0FBTyxHQUFHLENBQUNGLFlBQWpCO0FBQ0EsTUFBTUcsUUFBUSxHQUFHLENBQUNGLGFBQWxCOztBQUVBLE1BQUlQLEtBQUssQ0FBQ1UsUUFBVixFQUFvQjtBQUNsQix3QkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDhCQUNFLHFFQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBLCtCQUNFLHFFQUFDLDZEQUFEO0FBQVEsY0FBSSxFQUFDLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFVRDs7QUFFRCxNQUFNQyxjQUFjLEdBQUdYLEtBQUssQ0FBQ1ksTUFBN0I7O0FBRUEsTUFBSSxDQUFDRCxjQUFELElBQW1CQSxjQUFjLENBQUNFLE1BQWYsS0FBMEIsQ0FBakQsRUFBb0Q7QUFDbEQsd0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw2QkFDRSxxRUFBQywyRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUtEOztBQUVELE1BQU1DLElBQUksR0FBRyxJQUFJQyxJQUFKLENBQVNmLEtBQUssQ0FBQ2MsSUFBTixDQUFXRSxJQUFwQixFQUEwQmhCLEtBQUssQ0FBQ2MsSUFBTixDQUFXRyxLQUFYLEdBQW1CLENBQTdDLENBQWI7QUFFQSxzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLCtFQUFEO0FBQWMsVUFBSSxFQUFFSDtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyxxRUFBRDtBQUFXLFdBQUssRUFBRUg7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7O0dBMUNRWixrQjtVQUNRRyxxRDs7O0tBRFJILGtCOztBQW1GTUEsaUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXZlbnRzL1suLi5zbHVnXS4xMTI5MDdjYmVmNGQ1NDdiNzliNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgeyBnZXRGaWx0ZXJlZEV2ZW50cyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvYXBpLXV0aWxzJ1xyXG5pbXBvcnQgRXZlbnRMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50LWxpc3QnXHJcbmltcG9ydCBSZXN1bHRzVGl0bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9yZXN1bHRzLXRpdGxlL3Jlc3VsdHMtdGl0bGUnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy91aS9idXR0b24nXHJcbmltcG9ydCBFcnJvckFsZXJ0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZXJyb3ItYWxlcnQvZXJyb3ItYWxlcnQnXHJcblxyXG5mdW5jdGlvbiBGaWx0ZXJlZEV2ZW50c1BhZ2UocHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBmaWx0ZXJEYXRhID0gcm91dGVyLnF1ZXJ5LnNsdWdcclxuXHJcbiAgY29uc3QgZmlsdGVyZWRZZWFyID0gZmlsdGVyRGF0YVswXVxyXG4gIGNvbnN0IGZpbHRlcmVkTW9udGggPSBmaWx0ZXJEYXRhWzFdXHJcblxyXG4gIGNvbnN0IG51bVllYXIgPSArZmlsdGVyZWRZZWFyXHJcbiAgY29uc3QgbnVtTW9udGggPSArZmlsdGVyZWRNb250aFxyXG5cclxuICBpZiAocHJvcHMuaGFzRXJyb3IpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICA8RXJyb3JBbGVydD5cclxuICAgICAgICAgIEludmFsaWQgZmlsdGVyLiBFcnJvckFsZXJ0bGVhc2UgYWRqdXN0IHlvdXIgdmFsdWVzIVxyXG4gICAgICAgIDwvRXJyb3JBbGVydD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2VudGVyJz5cclxuICAgICAgICAgIDxCdXR0b24gbGluaz0nL2V2ZW50cyc+U2hvdyBBbGwgRXZlbnRzPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCBmaWx0ZXJlZEV2ZW50cyA9IHByb3BzLmV2ZW50c1xyXG5cclxuICBpZiAoIWZpbHRlcmVkRXZlbnRzIHx8IGZpbHRlcmVkRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgIDxFcnJvckFsZXJ0Pk5vIGV2ZW50cyBmb3VuZCBmb3IgdGhlIGNob3NlbiBmaWx0ZXIhPC9FcnJvckFsZXJ0PlxyXG4gICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHByb3BzLmRhdGUueWVhciwgcHJvcHMuZGF0ZS5tb250aCAtIDEpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxSZXN1bHRzVGl0bGUgZGF0ZT17ZGF0ZX0gLz5cclxuICAgICAgPEV2ZW50TGlzdCBpdGVtcz17ZmlsdGVyZWRFdmVudHN9IC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyBwYXJhbXMgfSA9IGNvbnRleHRcclxuXHJcbiAgY29uc3QgZmlsdGVyRGF0YSA9IHBhcmFtcy5zbHVnXHJcblxyXG4gIGNvbnN0IGZpbHRlcmVkWWVhciA9IGZpbHRlckRhdGFbMF1cclxuICBjb25zdCBmaWx0ZXJlZE1vbnRoID0gZmlsdGVyRGF0YVsxXVxyXG5cclxuICBjb25zdCBudW1ZZWFyID0gK2ZpbHRlcmVkWWVhclxyXG4gIGNvbnN0IG51bU1vbnRoID0gK2ZpbHRlcmVkTW9udGhcclxuXHJcbiAgaWYgKFxyXG4gICAgaXNOYU4obnVtWWVhcikgfHxcclxuICAgIGlzTmFOKG51bU1vbnRoKSB8fFxyXG4gICAgbnVtWWVhciA+IDIwMzAgfHxcclxuICAgIG51bVllYXIgPCAyMDIxIHx8XHJcbiAgICBudW1Nb250aCA8IDEgfHxcclxuICAgIG51bU1vbnRoID4gMTJcclxuICApIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7IGhhc0Vycm9yOiB0cnVlIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbHRlcmVkRXZlbnRzID0gYXdhaXQgZ2V0RmlsdGVyZWRFdmVudHMoe1xyXG4gICAgeWVhcjogbnVtWWVhcixcclxuICAgIG1vbnRoOiBudW1Nb250aFxyXG4gIH0pXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBldmVudHM6IGZpbHRlcmVkRXZlbnRzLFxyXG4gICAgICBkYXRlOiB7XHJcbiAgICAgICAgeWVhcjogbnVtWWVhcixcclxuICAgICAgICBtb250aDogbnVtTW9udGhcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJlZEV2ZW50c1BhZ2VcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==