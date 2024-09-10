/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/registerView.ts":
/*!*****************************!*\
  !*** ./src/registerView.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerView: () => (/* binding */ registerView)
/* harmony export */ });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node:path */ "node:path");
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_path__WEBPACK_IMPORTED_MODULE_2__);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}



var DEV_SERVER_HOST = "http://localhost:18080";
var template = function(params) {
    return '\n<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>'.concat(params.title, '</title>\n    <meta http-equiv="Content-Security-Policy" content="').concat(params.csp, '" />\n  </head>\n\n  <body>\n    <div id="root"></div>\n    <script type="module" nonce="').concat(params.nonce, '">\n      import { render } from "').concat(params.srcUri, '";\n      render("').concat(params.view, '", acquireVsCodeApi(), "').concat(params.publicPath, '");\n    </script>\n  </body>\n</html>\n');
};
var createView = function() {
    var _ref = _async_to_generator(function(ctx, viewId, options) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        new Promise(function(resolve, reject) {
                            var dispose;
                            try {
                                var provider = {
                                    resolveWebviewView: function(view, _viewCtx, _token) {
                                        try {
                                            view.onDidDispose(function() {
                                                dispose.dispose();
                                            });
                                            view.webview.options = _object_spread({}, options);
                                            resolve(view);
                                        } catch (err) {
                                            reject(err);
                                        }
                                    }
                                };
                                dispose = vscode__WEBPACK_IMPORTED_MODULE_0__.window.registerWebviewViewProvider(viewId, provider);
                                ctx.subscriptions.push(dispose);
                            } catch (err) {
                                reject(err);
                            }
                        })
                    ];
                case 1:
                    return [
                        2,
                        _state.sent()
                    ];
            }
        });
    });
    return function createView(ctx, viewId, options) {
        return _ref.apply(this, arguments);
    };
}();
var setViewHtml = function(ctx, viewId, webview) {
    var _path;
    var isProduction = ctx.extensionMode === vscode__WEBPACK_IMPORTED_MODULE_0__.ExtensionMode.Production;
    var nonce = (0,crypto__WEBPACK_IMPORTED_MODULE_1__.randomBytes)(16).toString("base64");
    var uri = function() {
        for(var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++){
            parts[_key] = arguments[_key];
        }
        return webview.asWebviewUri(vscode__WEBPACK_IMPORTED_MODULE_0__.Uri.file((_path = (node_path__WEBPACK_IMPORTED_MODULE_2___default())).join.apply(_path, [
            ctx.extensionPath
        ].concat(_to_consumable_array(parts))))).toString(true);
    };
    var publicPath = isProduction ? uri() : "".concat(DEV_SERVER_HOST, "/");
    var srcUri = isProduction ? uri("views.js") : "".concat(DEV_SERVER_HOST, "/views.js");
    var csp = (isProduction ? [
        "form-action 'none';",
        "default-src ".concat(webview.cspSource, ";"),
        "script-src ".concat(webview.cspSource, " 'nonce-").concat(nonce, "';"),
        "style-src ".concat(webview.cspSource, " ").concat(DEV_SERVER_HOST, " 'unsafe-inline';")
    ] : [
        "form-action 'none';",
        "default-src ".concat(webview.cspSource, " ").concat(DEV_SERVER_HOST, ";"),
        "style-src ".concat(webview.cspSource, " ").concat(DEV_SERVER_HOST, " 'unsafe-inline';"),
        "script-src ".concat(webview.cspSource, " ").concat(DEV_SERVER_HOST, " 'nonce-").concat(nonce, "';"),
        "connect-src 'self' ".concat(webview.cspSource, " ").concat(DEV_SERVER_HOST, " ws:;")
    ]).join(" ");
    webview.html = template({
        title: "Example",
        csp: csp,
        srcUri: srcUri,
        publicPath: publicPath,
        view: viewId,
        nonce: nonce
    });
    return webview;
};
var registerView = function() {
    var _ref = _async_to_generator(function(ctx, viewId) {
        var view;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        createView(ctx, viewId, {
                            enableScripts: true
                        })
                    ];
                case 1:
                    view = _state.sent();
                    setViewHtml(ctx, viewId, view.webview);
                    return [
                        2,
                        view
                    ];
            }
        });
    });
    return function registerView(ctx, viewId) {
        return _ref.apply(this, arguments);
    };
}();


/***/ }),

/***/ "vscode":
/*!*************************!*\
  !*** external "vscode" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "node:fs/promises":
/*!***********************************!*\
  !*** external "node:fs/promises" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("node:fs/promises");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/extension.ts ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activate: () => (/* binding */ activate),
/* harmony export */   deactivate: () => (/* binding */ deactivate)
/* harmony export */ });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _registerView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registerView */ "./src/registerView.ts");
/* harmony import */ var node_fs_promises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node:fs/promises */ "node:fs/promises");
/* harmony import */ var node_fs_promises__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fs_promises__WEBPACK_IMPORTED_MODULE_2__);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}



var activate = function() {
    var _ref = _async_to_generator(function(ctx) {
        var connectedViews, triggerEvent, api, isViewApiRequest, registerAndConnectView;
        return _ts_generator(this, function(_state) {
            connectedViews = {};
            triggerEvent = function(key) {
                for(var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    params[_key - 1] = arguments[_key];
                }
                Object.values(connectedViews).forEach(function(view) {
                    view.webview.postMessage({
                        type: "event",
                        key: key,
                        value: params
                    });
                });
            };
            api = {
                getFileContents: /*#__PURE__*/ _async_to_generator(function() {
                    var uris, contents;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    vscode__WEBPACK_IMPORTED_MODULE_0__.window.showOpenDialog({
                                        canSelectFiles: true,
                                        canSelectFolders: false,
                                        canSelectMany: false,
                                        openLabel: "Select file",
                                        title: "Select file to read"
                                    })
                                ];
                            case 1:
                                uris = _state.sent();
                                if (!(uris === null || uris === void 0 ? void 0 : uris.length)) {
                                    return [
                                        2,
                                        ""
                                    ];
                                }
                                return [
                                    4,
                                    node_fs_promises__WEBPACK_IMPORTED_MODULE_2___default().readFile(uris[0].fsPath, "utf-8")
                                ];
                            case 2:
                                contents = _state.sent();
                                return [
                                    2,
                                    contents
                                ];
                        }
                    });
                }),
                showExampleViewB: function() {
                    var _connectedViews_exampleViewB_show, _connectedViews_exampleViewB;
                    connectedViews === null || connectedViews === void 0 ? void 0 : (_connectedViews_exampleViewB = connectedViews.exampleViewB) === null || _connectedViews_exampleViewB === void 0 ? void 0 : (_connectedViews_exampleViewB_show = _connectedViews_exampleViewB.show) === null || _connectedViews_exampleViewB_show === void 0 ? void 0 : _connectedViews_exampleViewB_show.call(_connectedViews_exampleViewB, true);
                    vscode__WEBPACK_IMPORTED_MODULE_0__.commands.executeCommand("exampleViewB.focus");
                },
                sendMessageToExampleB: function(msg) {
                    triggerEvent("exampleBMessage", msg);
                }
            };
            isViewApiRequest = function(msg) {
                return msg != null && typeof msg === "object" && "type" in msg && msg.type === "request";
            };
            registerAndConnectView = function() {
                var _ref = _async_to_generator(function(key) {
                    var view, onMessage;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    (0,_registerView__WEBPACK_IMPORTED_MODULE_1__.registerView)(ctx, key)
                                ];
                            case 1:
                                view = _state.sent();
                                connectedViews[key] = view;
                                onMessage = function() {
                                    var _ref = _async_to_generator(function(msg) {
                                        var _api, val, res, e, err;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    if (!isViewApiRequest(msg)) {
                                                        return [
                                                            2
                                                        ];
                                                    }
                                                    _state.label = 1;
                                                case 1:
                                                    _state.trys.push([
                                                        1,
                                                        3,
                                                        ,
                                                        4
                                                    ]);
                                                    return [
                                                        4,
                                                        Promise.resolve((_api = api)[msg.key].apply(_api, _to_consumable_array(msg.params)))
                                                    ];
                                                case 2:
                                                    val = _state.sent();
                                                    res = {
                                                        type: "response",
                                                        id: msg.id,
                                                        value: val
                                                    };
                                                    view.webview.postMessage(res);
                                                    return [
                                                        3,
                                                        4
                                                    ];
                                                case 3:
                                                    e = _state.sent();
                                                    err = {
                                                        type: "error",
                                                        id: msg.id,
                                                        value: _instanceof(e, Error) ? e.message : "An unexpected error occurred"
                                                    };
                                                    view.webview.postMessage(err);
                                                    return [
                                                        3,
                                                        4
                                                    ];
                                                case 4:
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    });
                                    return function onMessage(msg) {
                                        return _ref.apply(this, arguments);
                                    };
                                }();
                                view.webview.onDidReceiveMessage(onMessage);
                                return [
                                    2
                                ];
                        }
                    });
                });
                return function registerAndConnectView(key) {
                    return _ref.apply(this, arguments);
                };
            }();
            registerAndConnectView("exampleViewA");
            registerAndConnectView("exampleViewB");
            return [
                2
            ];
        });
    });
    return function activate(ctx) {
        return _ref.apply(this, arguments);
    };
}();
var deactivate = function() {
    return;
};

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQU9BOztBQW9CQTtBQUFBOzs7O0FBS0E7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQXJCQTs7QUFBQTs7OztBQXNCQTtBQTNCQTs7OztBQTZCQTtBQVVBO0FBTEE7QUFDQTtBQUVBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQUE7O0FBR0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUlBOzs7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOzs7QUFBQTtBQUNBO0FBQ0E7O0FBQUE7Ozs7QUFDQTtBQVBBOzs7QUFPQTs7Ozs7Ozs7Ozs7QUNsSEE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQTtBQVNBO0FBRUE7QUFBQTtBQUNBOztBQUFBO0FBRUE7QUFFQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFBQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTkE7QUFRQTtBQUNBOztBQUFBOztBQUNBO0FBRUE7O0FBQUE7OztBQUFBO0FBQ0E7O0FBQUE7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7O0FBS0E7QUFBQTtBQUNBOzs7O0FBQUE7O0FBQUE7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7Ozs7QUFMQTtBQUNBOzs7QUFDQTs7Ozs7Ozs7O0FBR0E7O0FBQUE7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUFFQTtBQXRCQTs7OztBQXdCQTs7Ozs7O0FBQ0E7QUE1QkE7Ozs7QUE4QkE7QUFDQTs7Ozs7QUFDQTtBQWxGQTs7O0FBa0ZBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyIuL3NyYy9yZWdpc3RlclZpZXcudHMiLCJleHRlcm5hbCBjb21tb25qcyBcInZzY29kZVwiIiwiZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImNyeXB0b1wiIiwiZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcIm5vZGU6ZnMvcHJvbWlzZXNcIiIsImV4dGVybmFsIG5vZGUtY29tbW9uanMgXCJub2RlOnBhdGhcIiIsIndlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIi4vc3JjL2V4dGVuc2lvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB2c2NvZGUgZnJvbSBcInZzY29kZVwiO1xuaW1wb3J0IHsgcmFuZG9tQnl0ZXMgfSBmcm9tIFwiY3J5cHRvXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwibm9kZTpwYXRoXCI7XG5pbXBvcnQgeyBWaWV3S2V5IH0gZnJvbSBcIi4vdmlld3NcIjtcblxuY29uc3QgREVWX1NFUlZFUl9IT1NUID0gXCJodHRwOi8vbG9jYWxob3N0OjE4MDgwXCI7XG5cbmNvbnN0IHRlbXBsYXRlID0gKHBhcmFtczoge1xuICBjc3A6IHN0cmluZztcbiAgdmlldzogVmlld0tleTtcbiAgc3JjVXJpOiBzdHJpbmc7XG4gIHB1YmxpY1BhdGg6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgbm9uY2U6IHN0cmluZztcbn0pID0+IGBcbjwhRE9DVFlQRSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI+XG4gIDxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiIC8+XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgIDx0aXRsZT4ke3BhcmFtcy50aXRsZX08L3RpdGxlPlxuICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJDb250ZW50LVNlY3VyaXR5LVBvbGljeVwiIGNvbnRlbnQ9XCIke3BhcmFtcy5jc3B9XCIgLz5cbiAgPC9oZWFkPlxuXG4gIDxib2R5PlxuICAgIDxkaXYgaWQ9XCJyb290XCI+PC9kaXY+XG4gICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCIgbm9uY2U9XCIke3BhcmFtcy5ub25jZX1cIj5cbiAgICAgIGltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIke3BhcmFtcy5zcmNVcml9XCI7XG4gICAgICByZW5kZXIoXCIke3BhcmFtcy52aWV3fVwiLCBhY3F1aXJlVnNDb2RlQXBpKCksIFwiJHtwYXJhbXMucHVibGljUGF0aH1cIik7XG4gICAgPC9zY3JpcHQ+XG4gIDwvYm9keT5cbjwvaHRtbD5cbmA7XG5cbmNvbnN0IGNyZWF0ZVZpZXcgPSBhc3luYyA8ViBleHRlbmRzIFZpZXdLZXk+KFxuICBjdHg6IHZzY29kZS5FeHRlbnNpb25Db250ZXh0LFxuICB2aWV3SWQ6IFYsXG4gIG9wdGlvbnM/OiB2c2NvZGUuV2Vidmlld09wdGlvbnNcbik6IFByb21pc2U8dnNjb2RlLldlYnZpZXdWaWV3PiA9PiB7XG4gIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IGRpc3Bvc2U6IHZzY29kZS5EaXNwb3NhYmxlO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcm92aWRlcjogdnNjb2RlLldlYnZpZXdWaWV3UHJvdmlkZXIgPSB7XG4gICAgICAgIHJlc29sdmVXZWJ2aWV3VmlldzogKHZpZXcsIF92aWV3Q3R4LCBfdG9rZW4pID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmlldy5vbkRpZERpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgICBkaXNwb3NlLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmlldy53ZWJ2aWV3Lm9wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcbiAgICAgICAgICAgIHJlc29sdmUodmlldyk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyOiB1bmtub3duKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgZGlzcG9zZSA9IHZzY29kZS53aW5kb3cucmVnaXN0ZXJXZWJ2aWV3Vmlld1Byb3ZpZGVyKHZpZXdJZCwgcHJvdmlkZXIpO1xuICAgICAgY3R4LnN1YnNjcmlwdGlvbnMucHVzaChkaXNwb3NlKTtcbiAgICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBzZXRWaWV3SHRtbCA9IDxWIGV4dGVuZHMgVmlld0tleT4oXG4gIGN0eDogdnNjb2RlLkV4dGVuc2lvbkNvbnRleHQsXG4gIHZpZXdJZDogVixcbiAgd2VidmlldzogdnNjb2RlLldlYnZpZXdcbikgPT4ge1xuICBjb25zdCBpc1Byb2R1Y3Rpb24gPSBjdHguZXh0ZW5zaW9uTW9kZSA9PT0gdnNjb2RlLkV4dGVuc2lvbk1vZGUuUHJvZHVjdGlvbjtcbiAgY29uc3Qgbm9uY2UgPSByYW5kb21CeXRlcygxNikudG9TdHJpbmcoXCJiYXNlNjRcIik7XG5cbiAgY29uc3QgdXJpID0gKC4uLnBhcnRzOiBzdHJpbmdbXSkgPT5cbiAgICB3ZWJ2aWV3XG4gICAgICAuYXNXZWJ2aWV3VXJpKHZzY29kZS5VcmkuZmlsZShwYXRoLmpvaW4oY3R4LmV4dGVuc2lvblBhdGgsIC4uLnBhcnRzKSkpXG4gICAgICAudG9TdHJpbmcodHJ1ZSk7XG5cbiAgY29uc3QgcHVibGljUGF0aCA9IGlzUHJvZHVjdGlvbiA/IHVyaSgpIDogYCR7REVWX1NFUlZFUl9IT1NUfS9gO1xuICBjb25zdCBzcmNVcmkgPSBpc1Byb2R1Y3Rpb24gPyB1cmkoXCJ2aWV3cy5qc1wiKSA6IGAke0RFVl9TRVJWRVJfSE9TVH0vdmlld3MuanNgO1xuXG4gIGNvbnN0IGNzcCA9IChcbiAgICBpc1Byb2R1Y3Rpb25cbiAgICAgID8gW1xuICAgICAgICAgIGBmb3JtLWFjdGlvbiAnbm9uZSc7YCxcbiAgICAgICAgICBgZGVmYXVsdC1zcmMgJHt3ZWJ2aWV3LmNzcFNvdXJjZX07YCxcbiAgICAgICAgICBgc2NyaXB0LXNyYyAke3dlYnZpZXcuY3NwU291cmNlfSAnbm9uY2UtJHtub25jZX0nO2AsXG4gICAgICAgICAgYHN0eWxlLXNyYyAke3dlYnZpZXcuY3NwU291cmNlfSAke0RFVl9TRVJWRVJfSE9TVH0gJ3Vuc2FmZS1pbmxpbmUnO2AsXG4gICAgICAgIF1cbiAgICAgIDogW1xuICAgICAgICAgIGBmb3JtLWFjdGlvbiAnbm9uZSc7YCxcbiAgICAgICAgICBgZGVmYXVsdC1zcmMgJHt3ZWJ2aWV3LmNzcFNvdXJjZX0gJHtERVZfU0VSVkVSX0hPU1R9O2AsXG4gICAgICAgICAgYHN0eWxlLXNyYyAke3dlYnZpZXcuY3NwU291cmNlfSAke0RFVl9TRVJWRVJfSE9TVH0gJ3Vuc2FmZS1pbmxpbmUnO2AsXG4gICAgICAgICAgYHNjcmlwdC1zcmMgJHt3ZWJ2aWV3LmNzcFNvdXJjZX0gJHtERVZfU0VSVkVSX0hPU1R9ICdub25jZS0ke25vbmNlfSc7YCxcbiAgICAgICAgICBgY29ubmVjdC1zcmMgJ3NlbGYnICR7d2Vidmlldy5jc3BTb3VyY2V9ICR7REVWX1NFUlZFUl9IT1NUfSB3czo7YCxcbiAgICAgICAgXVxuICApLmpvaW4oXCIgXCIpO1xuXG4gIHdlYnZpZXcuaHRtbCA9IHRlbXBsYXRlKHtcbiAgICB0aXRsZTogXCJFeGFtcGxlXCIsXG4gICAgY3NwLFxuICAgIHNyY1VyaSxcbiAgICBwdWJsaWNQYXRoLFxuICAgIHZpZXc6IHZpZXdJZCxcbiAgICBub25jZSxcbiAgfSk7XG4gIHJldHVybiB3ZWJ2aWV3O1xufTtcblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVmlldyA9IGFzeW5jIDxWIGV4dGVuZHMgVmlld0tleT4oXG4gIGN0eDogdnNjb2RlLkV4dGVuc2lvbkNvbnRleHQsXG4gIHZpZXdJZDogVlxuKSA9PiB7XG4gIGNvbnN0IHZpZXcgPSBhd2FpdCBjcmVhdGVWaWV3KGN0eCwgdmlld0lkLCB7IGVuYWJsZVNjcmlwdHM6IHRydWUgfSk7XG4gIHNldFZpZXdIdG1sKGN0eCwgdmlld0lkLCB2aWV3LndlYnZpZXcpO1xuICByZXR1cm4gdmlldztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnNjb2RlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlOmZzL3Byb21pc2VzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGU6cGF0aFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgdnNjb2RlIGZyb20gXCJ2c2NvZGVcIjtcbmltcG9ydCB7IFZpZXdLZXkgfSBmcm9tIFwiLi92aWV3c1wiO1xuaW1wb3J0IHsgcmVnaXN0ZXJWaWV3IH0gZnJvbSBcIi4vcmVnaXN0ZXJWaWV3XCI7XG5pbXBvcnQge1xuICBWaWV3QXBpLFxuICBWaWV3QXBpRXJyb3IsXG4gIFZpZXdBcGlFdmVudCxcbiAgVmlld0FwaVJlcXVlc3QsXG4gIFZpZXdBcGlSZXNwb25zZSxcbiAgVmlld0V2ZW50cyxcbn0gZnJvbSBcIi4vdmlld0FwaVwiO1xuaW1wb3J0IGZzIGZyb20gXCJub2RlOmZzL3Byb21pc2VzXCI7XG5cbmV4cG9ydCBjb25zdCBhY3RpdmF0ZSA9IGFzeW5jIChjdHg6IHZzY29kZS5FeHRlbnNpb25Db250ZXh0KSA9PiB7XG4gIGNvbnN0IGNvbm5lY3RlZFZpZXdzOiBQYXJ0aWFsPFJlY29yZDxWaWV3S2V5LCB2c2NvZGUuV2Vidmlld1ZpZXc+PiA9IHt9O1xuXG4gIGNvbnN0IHRyaWdnZXJFdmVudCA9IDxFIGV4dGVuZHMga2V5b2YgVmlld0V2ZW50cz4oXG4gICAga2V5OiBFLFxuICAgIC4uLnBhcmFtczogUGFyYW1ldGVyczxWaWV3RXZlbnRzW0VdPlxuICApID0+IHtcbiAgICBPYmplY3QudmFsdWVzKGNvbm5lY3RlZFZpZXdzKS5mb3JFYWNoKCh2aWV3KSA9PiB7XG4gICAgICB2aWV3LndlYnZpZXcucG9zdE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiBcImV2ZW50XCIsXG4gICAgICAgIGtleSxcbiAgICAgICAgdmFsdWU6IHBhcmFtcyxcbiAgICAgIH0gYXMgVmlld0FwaUV2ZW50PEU+KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBhcGk6IFZpZXdBcGkgPSB7XG4gICAgZ2V0RmlsZUNvbnRlbnRzOiBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB1cmlzID0gYXdhaXQgdnNjb2RlLndpbmRvdy5zaG93T3BlbkRpYWxvZyh7XG4gICAgICAgIGNhblNlbGVjdEZpbGVzOiB0cnVlLFxuICAgICAgICBjYW5TZWxlY3RGb2xkZXJzOiBmYWxzZSxcbiAgICAgICAgY2FuU2VsZWN0TWFueTogZmFsc2UsXG4gICAgICAgIG9wZW5MYWJlbDogXCJTZWxlY3QgZmlsZVwiLFxuICAgICAgICB0aXRsZTogXCJTZWxlY3QgZmlsZSB0byByZWFkXCIsXG4gICAgICB9KTtcblxuICAgICAgaWYgKCF1cmlzPy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbnRlbnRzID0gYXdhaXQgZnMucmVhZEZpbGUodXJpc1swXS5mc1BhdGgsIFwidXRmLThcIik7XG4gICAgICByZXR1cm4gY29udGVudHM7XG4gICAgfSxcbiAgICBzaG93RXhhbXBsZVZpZXdCOiAoKSA9PiB7XG4gICAgICBjb25uZWN0ZWRWaWV3cz8uZXhhbXBsZVZpZXdCPy5zaG93Py4odHJ1ZSk7XG4gICAgICB2c2NvZGUuY29tbWFuZHMuZXhlY3V0ZUNvbW1hbmQoYGV4YW1wbGVWaWV3Qi5mb2N1c2ApO1xuICAgIH0sXG4gICAgc2VuZE1lc3NhZ2VUb0V4YW1wbGVCOiAobXNnOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyaWdnZXJFdmVudChcImV4YW1wbGVCTWVzc2FnZVwiLCBtc2cpO1xuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgaXNWaWV3QXBpUmVxdWVzdCA9IDxLIGV4dGVuZHMga2V5b2YgVmlld0FwaT4oXG4gICAgbXNnOiB1bmtub3duXG4gICk6IG1zZyBpcyBWaWV3QXBpUmVxdWVzdDxLPiA9PlxuICAgIG1zZyAhPSBudWxsICYmXG4gICAgdHlwZW9mIG1zZyA9PT0gXCJvYmplY3RcIiAmJlxuICAgIFwidHlwZVwiIGluIG1zZyAmJlxuICAgIG1zZy50eXBlID09PSBcInJlcXVlc3RcIjtcblxuICBjb25zdCByZWdpc3RlckFuZENvbm5lY3RWaWV3ID0gYXN5bmMgPFYgZXh0ZW5kcyBWaWV3S2V5PihrZXk6IFYpID0+IHtcbiAgICBjb25zdCB2aWV3ID0gYXdhaXQgcmVnaXN0ZXJWaWV3KGN0eCwga2V5KTtcbiAgICBjb25uZWN0ZWRWaWV3c1trZXldID0gdmlldztcbiAgICBjb25zdCBvbk1lc3NhZ2UgPSBhc3luYyAobXNnOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPT4ge1xuICAgICAgaWYgKCFpc1ZpZXdBcGlSZXF1ZXN0KG1zZykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICBjb25zdCB2YWwgPSBhd2FpdCBQcm9taXNlLnJlc29sdmUoYXBpW21zZy5rZXldKC4uLm1zZy5wYXJhbXMpKTtcbiAgICAgICAgY29uc3QgcmVzOiBWaWV3QXBpUmVzcG9uc2UgPSB7XG4gICAgICAgICAgdHlwZTogXCJyZXNwb25zZVwiLFxuICAgICAgICAgIGlkOiBtc2cuaWQsXG4gICAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgfTtcbiAgICAgICAgdmlldy53ZWJ2aWV3LnBvc3RNZXNzYWdlKHJlcyk7XG4gICAgICB9IGNhdGNoIChlOiB1bmtub3duKSB7XG4gICAgICAgIGNvbnN0IGVycjogVmlld0FwaUVycm9yID0ge1xuICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcbiAgICAgICAgICBpZDogbXNnLmlkLFxuICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCIsXG4gICAgICAgIH07XG4gICAgICAgIHZpZXcud2Vidmlldy5wb3N0TWVzc2FnZShlcnIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2aWV3LndlYnZpZXcub25EaWRSZWNlaXZlTWVzc2FnZShvbk1lc3NhZ2UpO1xuICB9O1xuXG4gIHJlZ2lzdGVyQW5kQ29ubmVjdFZpZXcoXCJleGFtcGxlVmlld0FcIik7XG4gIHJlZ2lzdGVyQW5kQ29ubmVjdFZpZXcoXCJleGFtcGxlVmlld0JcIik7XG59O1xuXG5leHBvcnQgY29uc3QgZGVhY3RpdmF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==