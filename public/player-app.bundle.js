(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn2, res) => function __init() {
    return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to2, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to2, key) && key !== except)
          __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to2;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS({
    "node_modules/react/cjs/react.production.min.js"(exports) {
      "use strict";
      var l = /* @__PURE__ */ Symbol.for("react.element");
      var n = /* @__PURE__ */ Symbol.for("react.portal");
      var p = /* @__PURE__ */ Symbol.for("react.fragment");
      var q5 = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var r = /* @__PURE__ */ Symbol.for("react.profiler");
      var t = /* @__PURE__ */ Symbol.for("react.provider");
      var u = /* @__PURE__ */ Symbol.for("react.context");
      var v5 = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var w2 = /* @__PURE__ */ Symbol.for("react.suspense");
      var x5 = /* @__PURE__ */ Symbol.for("react.memo");
      var y2 = /* @__PURE__ */ Symbol.for("react.lazy");
      var z4 = Symbol.iterator;
      function A7(a) {
        if (null === a || "object" !== typeof a) return null;
        a = z4 && a[z4] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var B6 = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var C4 = Object.assign;
      var D3 = {};
      function E3(a, b3, e2) {
        this.props = a;
        this.context = b3;
        this.refs = D3;
        this.updater = e2 || B6;
      }
      E3.prototype.isReactComponent = {};
      E3.prototype.setState = function(a, b3) {
        if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a, b3, "setState");
      };
      E3.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
      };
      function F2() {
      }
      F2.prototype = E3.prototype;
      function G2(a, b3, e2) {
        this.props = a;
        this.context = b3;
        this.refs = D3;
        this.updater = e2 || B6;
      }
      var H = G2.prototype = new F2();
      H.constructor = G2;
      C4(H, E3.prototype);
      H.isPureReactComponent = true;
      var I4 = Array.isArray;
      var J3 = Object.prototype.hasOwnProperty;
      var K3 = { current: null };
      var L5 = { key: true, ref: true, __self: true, __source: true };
      function M3(a, b3, e2) {
        var d3, c = {}, k4 = null, h3 = null;
        if (null != b3) for (d3 in void 0 !== b3.ref && (h3 = b3.ref), void 0 !== b3.key && (k4 = "" + b3.key), b3) J3.call(b3, d3) && !L5.hasOwnProperty(d3) && (c[d3] = b3[d3]);
        var g5 = arguments.length - 2;
        if (1 === g5) c.children = e2;
        else if (1 < g5) {
          for (var f5 = Array(g5), m = 0; m < g5; m++) f5[m] = arguments[m + 2];
          c.children = f5;
        }
        if (a && a.defaultProps) for (d3 in g5 = a.defaultProps, g5) void 0 === c[d3] && (c[d3] = g5[d3]);
        return { $$typeof: l, type: a, key: k4, ref: h3, props: c, _owner: K3.current };
      }
      function N4(a, b3) {
        return { $$typeof: l, type: a.type, key: b3, ref: a.ref, props: a.props, _owner: a._owner };
      }
      function O6(a) {
        return "object" === typeof a && null !== a && a.$$typeof === l;
      }
      function escape(a) {
        var b3 = { "=": "=0", ":": "=2" };
        return "$" + a.replace(/[=:]/g, function(a2) {
          return b3[a2];
        });
      }
      var P6 = /\/+/g;
      function Q2(a, b3) {
        return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b3.toString(36);
      }
      function R8(a, b3, e2, d3, c) {
        var k4 = typeof a;
        if ("undefined" === k4 || "boolean" === k4) a = null;
        var h3 = false;
        if (null === a) h3 = true;
        else switch (k4) {
          case "string":
          case "number":
            h3 = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l:
              case n:
                h3 = true;
            }
        }
        if (h3) return h3 = a, c = c(h3), a = "" === d3 ? "." + Q2(h3, 0) : d3, I4(c) ? (e2 = "", null != a && (e2 = a.replace(P6, "$&/") + "/"), R8(c, b3, e2, "", function(a2) {
          return a2;
        })) : null != c && (O6(c) && (c = N4(c, e2 + (!c.key || h3 && h3.key === c.key ? "" : ("" + c.key).replace(P6, "$&/") + "/") + a)), b3.push(c)), 1;
        h3 = 0;
        d3 = "" === d3 ? "." : d3 + ":";
        if (I4(a)) for (var g5 = 0; g5 < a.length; g5++) {
          k4 = a[g5];
          var f5 = d3 + Q2(k4, g5);
          h3 += R8(k4, b3, e2, f5, c);
        }
        else if (f5 = A7(a), "function" === typeof f5) for (a = f5.call(a), g5 = 0; !(k4 = a.next()).done; ) k4 = k4.value, f5 = d3 + Q2(k4, g5++), h3 += R8(k4, b3, e2, f5, c);
        else if ("object" === k4) throw b3 = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b3 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b3) + "). If you meant to render a collection of children, use an array instead.");
        return h3;
      }
      function S3(a, b3, e2) {
        if (null == a) return a;
        var d3 = [], c = 0;
        R8(a, d3, "", "", function(a2) {
          return b3.call(e2, a2, c++);
        });
        return d3;
      }
      function T7(a) {
        if (-1 === a._status) {
          var b3 = a._result;
          b3 = b3();
          b3.then(function(b4) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b4;
          }, function(b4) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b4;
          });
          -1 === a._status && (a._status = 0, a._result = b3);
        }
        if (1 === a._status) return a._result.default;
        throw a._result;
      }
      var U3 = { current: null };
      var V5 = { transition: null };
      var W4 = { ReactCurrentDispatcher: U3, ReactCurrentBatchConfig: V5, ReactCurrentOwner: K3 };
      function X() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      exports.Children = { map: S3, forEach: function(a, b3, e2) {
        S3(a, function() {
          b3.apply(this, arguments);
        }, e2);
      }, count: function(a) {
        var b3 = 0;
        S3(a, function() {
          b3++;
        });
        return b3;
      }, toArray: function(a) {
        return S3(a, function(a2) {
          return a2;
        }) || [];
      }, only: function(a) {
        if (!O6(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
      } };
      exports.Component = E3;
      exports.Fragment = p;
      exports.Profiler = r;
      exports.PureComponent = G2;
      exports.StrictMode = q5;
      exports.Suspense = w2;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W4;
      exports.act = X;
      exports.cloneElement = function(a, b3, e2) {
        if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
        var d3 = C4({}, a.props), c = a.key, k4 = a.ref, h3 = a._owner;
        if (null != b3) {
          void 0 !== b3.ref && (k4 = b3.ref, h3 = K3.current);
          void 0 !== b3.key && (c = "" + b3.key);
          if (a.type && a.type.defaultProps) var g5 = a.type.defaultProps;
          for (f5 in b3) J3.call(b3, f5) && !L5.hasOwnProperty(f5) && (d3[f5] = void 0 === b3[f5] && void 0 !== g5 ? g5[f5] : b3[f5]);
        }
        var f5 = arguments.length - 2;
        if (1 === f5) d3.children = e2;
        else if (1 < f5) {
          g5 = Array(f5);
          for (var m = 0; m < f5; m++) g5[m] = arguments[m + 2];
          d3.children = g5;
        }
        return { $$typeof: l, type: a.type, key: c, ref: k4, props: d3, _owner: h3 };
      };
      exports.createContext = function(a) {
        a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
        a.Provider = { $$typeof: t, _context: a };
        return a.Consumer = a;
      };
      exports.createElement = M3;
      exports.createFactory = function(a) {
        var b3 = M3.bind(null, a);
        b3.type = a;
        return b3;
      };
      exports.createRef = function() {
        return { current: null };
      };
      exports.forwardRef = function(a) {
        return { $$typeof: v5, render: a };
      };
      exports.isValidElement = O6;
      exports.lazy = function(a) {
        return { $$typeof: y2, _payload: { _status: -1, _result: a }, _init: T7 };
      };
      exports.memo = function(a, b3) {
        return { $$typeof: x5, type: a, compare: void 0 === b3 ? null : b3 };
      };
      exports.startTransition = function(a) {
        var b3 = V5.transition;
        V5.transition = {};
        try {
          a();
        } finally {
          V5.transition = b3;
        }
      };
      exports.unstable_act = X;
      exports.useCallback = function(a, b3) {
        return U3.current.useCallback(a, b3);
      };
      exports.useContext = function(a) {
        return U3.current.useContext(a);
      };
      exports.useDebugValue = function() {
      };
      exports.useDeferredValue = function(a) {
        return U3.current.useDeferredValue(a);
      };
      exports.useEffect = function(a, b3) {
        return U3.current.useEffect(a, b3);
      };
      exports.useId = function() {
        return U3.current.useId();
      };
      exports.useImperativeHandle = function(a, b3, e2) {
        return U3.current.useImperativeHandle(a, b3, e2);
      };
      exports.useInsertionEffect = function(a, b3) {
        return U3.current.useInsertionEffect(a, b3);
      };
      exports.useLayoutEffect = function(a, b3) {
        return U3.current.useLayoutEffect(a, b3);
      };
      exports.useMemo = function(a, b3) {
        return U3.current.useMemo(a, b3);
      };
      exports.useReducer = function(a, b3, e2) {
        return U3.current.useReducer(a, b3, e2);
      };
      exports.useRef = function(a) {
        return U3.current.useRef(a);
      };
      exports.useState = function(a) {
        return U3.current.useState(a);
      };
      exports.useSyncExternalStore = function(a, b3, e2) {
        return U3.current.useSyncExternalStore(a, b3, e2);
      };
      exports.useTransition = function() {
        return U3.current.useTransition();
      };
      exports.version = "18.3.1";
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/scheduler/cjs/scheduler.production.min.js
  var require_scheduler_production_min = __commonJS({
    "node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
      "use strict";
      function f5(a, b3) {
        var c = a.length;
        a.push(b3);
        a: for (; 0 < c; ) {
          var d3 = c - 1 >>> 1, e2 = a[d3];
          if (0 < g5(e2, b3)) a[d3] = b3, a[c] = e2, c = d3;
          else break a;
        }
      }
      function h3(a) {
        return 0 === a.length ? null : a[0];
      }
      function k4(a) {
        if (0 === a.length) return null;
        var b3 = a[0], c = a.pop();
        if (c !== b3) {
          a[0] = c;
          a: for (var d3 = 0, e2 = a.length, w2 = e2 >>> 1; d3 < w2; ) {
            var m = 2 * (d3 + 1) - 1, C4 = a[m], n = m + 1, x5 = a[n];
            if (0 > g5(C4, c)) n < e2 && 0 > g5(x5, C4) ? (a[d3] = x5, a[n] = c, d3 = n) : (a[d3] = C4, a[m] = c, d3 = m);
            else if (n < e2 && 0 > g5(x5, c)) a[d3] = x5, a[n] = c, d3 = n;
            else break a;
          }
        }
        return b3;
      }
      function g5(a, b3) {
        var c = a.sortIndex - b3.sortIndex;
        return 0 !== c ? c : a.id - b3.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        l = performance;
        exports.unstable_now = function() {
          return l.now();
        };
      } else {
        p = Date, q5 = p.now();
        exports.unstable_now = function() {
          return p.now() - q5;
        };
      }
      var l;
      var p;
      var q5;
      var r = [];
      var t = [];
      var u = 1;
      var v5 = null;
      var y2 = 3;
      var z4 = false;
      var A7 = false;
      var B6 = false;
      var D3 = "function" === typeof setTimeout ? setTimeout : null;
      var E3 = "function" === typeof clearTimeout ? clearTimeout : null;
      var F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G2(a) {
        for (var b3 = h3(t); null !== b3; ) {
          if (null === b3.callback) k4(t);
          else if (b3.startTime <= a) k4(t), b3.sortIndex = b3.expirationTime, f5(r, b3);
          else break;
          b3 = h3(t);
        }
      }
      function H(a) {
        B6 = false;
        G2(a);
        if (!A7) if (null !== h3(r)) A7 = true, I4(J3);
        else {
          var b3 = h3(t);
          null !== b3 && K3(H, b3.startTime - a);
        }
      }
      function J3(a, b3) {
        A7 = false;
        B6 && (B6 = false, E3(L5), L5 = -1);
        z4 = true;
        var c = y2;
        try {
          G2(b3);
          for (v5 = h3(r); null !== v5 && (!(v5.expirationTime > b3) || a && !M3()); ) {
            var d3 = v5.callback;
            if ("function" === typeof d3) {
              v5.callback = null;
              y2 = v5.priorityLevel;
              var e2 = d3(v5.expirationTime <= b3);
              b3 = exports.unstable_now();
              "function" === typeof e2 ? v5.callback = e2 : v5 === h3(r) && k4(r);
              G2(b3);
            } else k4(r);
            v5 = h3(r);
          }
          if (null !== v5) var w2 = true;
          else {
            var m = h3(t);
            null !== m && K3(H, m.startTime - b3);
            w2 = false;
          }
          return w2;
        } finally {
          v5 = null, y2 = c, z4 = false;
        }
      }
      var N4 = false;
      var O6 = null;
      var L5 = -1;
      var P6 = 5;
      var Q2 = -1;
      function M3() {
        return exports.unstable_now() - Q2 < P6 ? false : true;
      }
      function R8() {
        if (null !== O6) {
          var a = exports.unstable_now();
          Q2 = a;
          var b3 = true;
          try {
            b3 = O6(true, a);
          } finally {
            b3 ? S3() : (N4 = false, O6 = null);
          }
        } else N4 = false;
      }
      var S3;
      if ("function" === typeof F2) S3 = function() {
        F2(R8);
      };
      else if ("undefined" !== typeof MessageChannel) {
        T7 = new MessageChannel(), U3 = T7.port2;
        T7.port1.onmessage = R8;
        S3 = function() {
          U3.postMessage(null);
        };
      } else S3 = function() {
        D3(R8, 0);
      };
      var T7;
      var U3;
      function I4(a) {
        O6 = a;
        N4 || (N4 = true, S3());
      }
      function K3(a, b3) {
        L5 = D3(function() {
          a(exports.unstable_now());
        }, b3);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports.unstable_continueExecution = function() {
        A7 || z4 || (A7 = true, I4(J3));
      };
      exports.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P6 = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return y2;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return h3(r);
      };
      exports.unstable_next = function(a) {
        switch (y2) {
          case 1:
          case 2:
          case 3:
            var b3 = 3;
            break;
          default:
            b3 = y2;
        }
        var c = y2;
        y2 = b3;
        try {
          return a();
        } finally {
          y2 = c;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(a, b3) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c = y2;
        y2 = a;
        try {
          return b3();
        } finally {
          y2 = c;
        }
      };
      exports.unstable_scheduleCallback = function(a, b3, c) {
        var d3 = exports.unstable_now();
        "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d3 + c : d3) : c = d3;
        switch (a) {
          case 1:
            var e2 = -1;
            break;
          case 2:
            e2 = 250;
            break;
          case 5:
            e2 = 1073741823;
            break;
          case 4:
            e2 = 1e4;
            break;
          default:
            e2 = 5e3;
        }
        e2 = c + e2;
        a = { id: u++, callback: b3, priorityLevel: a, startTime: c, expirationTime: e2, sortIndex: -1 };
        c > d3 ? (a.sortIndex = c, f5(t, a), null === h3(r) && a === h3(t) && (B6 ? (E3(L5), L5 = -1) : B6 = true, K3(H, c - d3))) : (a.sortIndex = e2, f5(r, a), A7 || z4 || (A7 = true, I4(J3)));
        return a;
      };
      exports.unstable_shouldYield = M3;
      exports.unstable_wrapCallback = function(a) {
        var b3 = y2;
        return function() {
          var c = y2;
          y2 = b3;
          try {
            return a.apply(this, arguments);
          } finally {
            y2 = c;
          }
        };
      };
    }
  });

  // node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_scheduler_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/cjs/react-dom.production.min.js
  var require_react_dom_production_min = __commonJS({
    "node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
      "use strict";
      var aa2 = require_react();
      var ca2 = require_scheduler();
      function p(a) {
        for (var b3 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b3 += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b3 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da2 = /* @__PURE__ */ new Set();
      var ea2 = {};
      function fa2(a, b3) {
        ha2(a, b3);
        ha2(a + "Capture", b3);
      }
      function ha2(a, b3) {
        ea2[a] = b3;
        for (a = 0; a < b3.length; a++) da2.add(b3[a]);
      }
      var ia2 = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
      var ja2 = Object.prototype.hasOwnProperty;
      var ka2 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var la2 = {};
      var ma2 = {};
      function oa2(a) {
        if (ja2.call(ma2, a)) return true;
        if (ja2.call(la2, a)) return false;
        if (ka2.test(a)) return ma2[a] = true;
        la2[a] = true;
        return false;
      }
      function pa2(a, b3, c, d3) {
        if (null !== c && 0 === c.type) return false;
        switch (typeof b3) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d3) return false;
            if (null !== c) return !c.acceptsBooleans;
            a = a.toLowerCase().slice(0, 5);
            return "data-" !== a && "aria-" !== a;
          default:
            return false;
        }
      }
      function qa2(a, b3, c, d3) {
        if (null === b3 || "undefined" === typeof b3 || pa2(a, b3, c, d3)) return true;
        if (d3) return false;
        if (null !== c) switch (c.type) {
          case 3:
            return !b3;
          case 4:
            return false === b3;
          case 5:
            return isNaN(b3);
          case 6:
            return isNaN(b3) || 1 > b3;
        }
        return false;
      }
      function v5(a, b3, c, d3, e2, f5, g5) {
        this.acceptsBooleans = 2 === b3 || 3 === b3 || 4 === b3;
        this.attributeName = d3;
        this.attributeNamespace = e2;
        this.mustUseProperty = c;
        this.propertyName = a;
        this.type = b3;
        this.sanitizeURL = f5;
        this.removeEmptyString = g5;
      }
      var z4 = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
        z4[a] = new v5(a, 0, false, a, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
        var b3 = a[0];
        z4[b3] = new v5(b3, 1, false, a[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
        z4[a] = new v5(a, 2, false, a.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
        z4[a] = new v5(a, 2, false, a, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
        z4[a] = new v5(a, 3, false, a.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(a) {
        z4[a] = new v5(a, 3, true, a, null, false, false);
      });
      ["capture", "download"].forEach(function(a) {
        z4[a] = new v5(a, 4, false, a, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(a) {
        z4[a] = new v5(a, 6, false, a, null, false, false);
      });
      ["rowSpan", "start"].forEach(function(a) {
        z4[a] = new v5(a, 5, false, a.toLowerCase(), null, false, false);
      });
      var ra2 = /[\-:]([a-z])/g;
      function sa2(a) {
        return a[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
        var b3 = a.replace(
          ra2,
          sa2
        );
        z4[b3] = new v5(b3, 1, false, a, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
        var b3 = a.replace(ra2, sa2);
        z4[b3] = new v5(b3, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
        var b3 = a.replace(ra2, sa2);
        z4[b3] = new v5(b3, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(a) {
        z4[a] = new v5(a, 1, false, a.toLowerCase(), null, false, false);
      });
      z4.xlinkHref = new v5("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function(a) {
        z4[a] = new v5(a, 1, false, a.toLowerCase(), null, true, true);
      });
      function ta2(a, b3, c, d3) {
        var e2 = z4.hasOwnProperty(b3) ? z4[b3] : null;
        if (null !== e2 ? 0 !== e2.type : d3 || !(2 < b3.length) || "o" !== b3[0] && "O" !== b3[0] || "n" !== b3[1] && "N" !== b3[1]) qa2(b3, c, e2, d3) && (c = null), d3 || null === e2 ? oa2(b3) && (null === c ? a.removeAttribute(b3) : a.setAttribute(b3, "" + c)) : e2.mustUseProperty ? a[e2.propertyName] = null === c ? 3 === e2.type ? false : "" : c : (b3 = e2.attributeName, d3 = e2.attributeNamespace, null === c ? a.removeAttribute(b3) : (e2 = e2.type, c = 3 === e2 || 4 === e2 && true === c ? "" : "" + c, d3 ? a.setAttributeNS(d3, b3, c) : a.setAttribute(b3, c)));
      }
      var ua2 = aa2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      var va2 = /* @__PURE__ */ Symbol.for("react.element");
      var wa2 = /* @__PURE__ */ Symbol.for("react.portal");
      var ya2 = /* @__PURE__ */ Symbol.for("react.fragment");
      var za2 = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var Aa2 = /* @__PURE__ */ Symbol.for("react.profiler");
      var Ba2 = /* @__PURE__ */ Symbol.for("react.provider");
      var Ca2 = /* @__PURE__ */ Symbol.for("react.context");
      var Da2 = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var Ea2 = /* @__PURE__ */ Symbol.for("react.suspense");
      var Fa2 = /* @__PURE__ */ Symbol.for("react.suspense_list");
      var Ga2 = /* @__PURE__ */ Symbol.for("react.memo");
      var Ha2 = /* @__PURE__ */ Symbol.for("react.lazy");
      var Ia2 = /* @__PURE__ */ Symbol.for("react.offscreen");
      var Ja2 = Symbol.iterator;
      function Ka2(a) {
        if (null === a || "object" !== typeof a) return null;
        a = Ja2 && a[Ja2] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var A7 = Object.assign;
      var La2;
      function Ma2(a) {
        if (void 0 === La2) try {
          throw Error();
        } catch (c) {
          var b3 = c.stack.trim().match(/\n( *(at )?)/);
          La2 = b3 && b3[1] || "";
        }
        return "\n" + La2 + a;
      }
      var Na2 = false;
      function Oa2(a, b3) {
        if (!a || Na2) return "";
        Na2 = true;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b3) if (b3 = function() {
            throw Error();
          }, Object.defineProperty(b3.prototype, "props", { set: function() {
            throw Error();
          } }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(b3, []);
            } catch (l) {
              var d3 = l;
            }
            Reflect.construct(a, [], b3);
          } else {
            try {
              b3.call();
            } catch (l) {
              d3 = l;
            }
            a.call(b3.prototype);
          }
          else {
            try {
              throw Error();
            } catch (l) {
              d3 = l;
            }
            a();
          }
        } catch (l) {
          if (l && d3 && "string" === typeof l.stack) {
            for (var e2 = l.stack.split("\n"), f5 = d3.stack.split("\n"), g5 = e2.length - 1, h3 = f5.length - 1; 1 <= g5 && 0 <= h3 && e2[g5] !== f5[h3]; ) h3--;
            for (; 1 <= g5 && 0 <= h3; g5--, h3--) if (e2[g5] !== f5[h3]) {
              if (1 !== g5 || 1 !== h3) {
                do
                  if (g5--, h3--, 0 > h3 || e2[g5] !== f5[h3]) {
                    var k4 = "\n" + e2[g5].replace(" at new ", " at ");
                    a.displayName && k4.includes("<anonymous>") && (k4 = k4.replace("<anonymous>", a.displayName));
                    return k4;
                  }
                while (1 <= g5 && 0 <= h3);
              }
              break;
            }
          }
        } finally {
          Na2 = false, Error.prepareStackTrace = c;
        }
        return (a = a ? a.displayName || a.name : "") ? Ma2(a) : "";
      }
      function Pa2(a) {
        switch (a.tag) {
          case 5:
            return Ma2(a.type);
          case 16:
            return Ma2("Lazy");
          case 13:
            return Ma2("Suspense");
          case 19:
            return Ma2("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a = Oa2(a.type, false), a;
          case 11:
            return a = Oa2(a.type.render, false), a;
          case 1:
            return a = Oa2(a.type, true), a;
          default:
            return "";
        }
      }
      function Qa2(a) {
        if (null == a) return null;
        if ("function" === typeof a) return a.displayName || a.name || null;
        if ("string" === typeof a) return a;
        switch (a) {
          case ya2:
            return "Fragment";
          case wa2:
            return "Portal";
          case Aa2:
            return "Profiler";
          case za2:
            return "StrictMode";
          case Ea2:
            return "Suspense";
          case Fa2:
            return "SuspenseList";
        }
        if ("object" === typeof a) switch (a.$$typeof) {
          case Ca2:
            return (a.displayName || "Context") + ".Consumer";
          case Ba2:
            return (a._context.displayName || "Context") + ".Provider";
          case Da2:
            var b3 = a.render;
            a = a.displayName;
            a || (a = b3.displayName || b3.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
          case Ga2:
            return b3 = a.displayName || null, null !== b3 ? b3 : Qa2(a.type) || "Memo";
          case Ha2:
            b3 = a._payload;
            a = a._init;
            try {
              return Qa2(a(b3));
            } catch (c) {
            }
        }
        return null;
      }
      function Ra2(a) {
        var b3 = a.type;
        switch (a.tag) {
          case 24:
            return "Cache";
          case 9:
            return (b3.displayName || "Context") + ".Consumer";
          case 10:
            return (b3._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return a = b3.render, a = a.displayName || a.name || "", b3.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return b3;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Qa2(b3);
          case 8:
            return b3 === za2 ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" === typeof b3) return b3.displayName || b3.name || null;
            if ("string" === typeof b3) return b3;
        }
        return null;
      }
      function Sa2(a) {
        switch (typeof a) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return a;
          case "object":
            return a;
          default:
            return "";
        }
      }
      function Ta2(a) {
        var b3 = a.type;
        return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b3 || "radio" === b3);
      }
      function Ua2(a) {
        var b3 = Ta2(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b3), d3 = "" + a[b3];
        if (!a.hasOwnProperty(b3) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
          var e2 = c.get, f5 = c.set;
          Object.defineProperty(a, b3, { configurable: true, get: function() {
            return e2.call(this);
          }, set: function(a2) {
            d3 = "" + a2;
            f5.call(this, a2);
          } });
          Object.defineProperty(a, b3, { enumerable: c.enumerable });
          return { getValue: function() {
            return d3;
          }, setValue: function(a2) {
            d3 = "" + a2;
          }, stopTracking: function() {
            a._valueTracker = null;
            delete a[b3];
          } };
        }
      }
      function Va2(a) {
        a._valueTracker || (a._valueTracker = Ua2(a));
      }
      function Wa2(a) {
        if (!a) return false;
        var b3 = a._valueTracker;
        if (!b3) return true;
        var c = b3.getValue();
        var d3 = "";
        a && (d3 = Ta2(a) ? a.checked ? "true" : "false" : a.value);
        a = d3;
        return a !== c ? (b3.setValue(a), true) : false;
      }
      function Xa2(a) {
        a = a || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof a) return null;
        try {
          return a.activeElement || a.body;
        } catch (b3) {
          return a.body;
        }
      }
      function Ya2(a, b3) {
        var c = b3.checked;
        return A7({}, b3, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
      }
      function Za2(a, b3) {
        var c = null == b3.defaultValue ? "" : b3.defaultValue, d3 = null != b3.checked ? b3.checked : b3.defaultChecked;
        c = Sa2(null != b3.value ? b3.value : c);
        a._wrapperState = { initialChecked: d3, initialValue: c, controlled: "checkbox" === b3.type || "radio" === b3.type ? null != b3.checked : null != b3.value };
      }
      function ab(a, b3) {
        b3 = b3.checked;
        null != b3 && ta2(a, "checked", b3, false);
      }
      function bb(a, b3) {
        ab(a, b3);
        var c = Sa2(b3.value), d3 = b3.type;
        if (null != c) if ("number" === d3) {
          if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
        } else a.value !== "" + c && (a.value = "" + c);
        else if ("submit" === d3 || "reset" === d3) {
          a.removeAttribute("value");
          return;
        }
        b3.hasOwnProperty("value") ? cb(a, b3.type, c) : b3.hasOwnProperty("defaultValue") && cb(a, b3.type, Sa2(b3.defaultValue));
        null == b3.checked && null != b3.defaultChecked && (a.defaultChecked = !!b3.defaultChecked);
      }
      function db(a, b3, c) {
        if (b3.hasOwnProperty("value") || b3.hasOwnProperty("defaultValue")) {
          var d3 = b3.type;
          if (!("submit" !== d3 && "reset" !== d3 || void 0 !== b3.value && null !== b3.value)) return;
          b3 = "" + a._wrapperState.initialValue;
          c || b3 === a.value || (a.value = b3);
          a.defaultValue = b3;
        }
        c = a.name;
        "" !== c && (a.name = "");
        a.defaultChecked = !!a._wrapperState.initialChecked;
        "" !== c && (a.name = c);
      }
      function cb(a, b3, c) {
        if ("number" !== b3 || Xa2(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
      }
      var eb = Array.isArray;
      function fb(a, b3, c, d3) {
        a = a.options;
        if (b3) {
          b3 = {};
          for (var e2 = 0; e2 < c.length; e2++) b3["$" + c[e2]] = true;
          for (c = 0; c < a.length; c++) e2 = b3.hasOwnProperty("$" + a[c].value), a[c].selected !== e2 && (a[c].selected = e2), e2 && d3 && (a[c].defaultSelected = true);
        } else {
          c = "" + Sa2(c);
          b3 = null;
          for (e2 = 0; e2 < a.length; e2++) {
            if (a[e2].value === c) {
              a[e2].selected = true;
              d3 && (a[e2].defaultSelected = true);
              return;
            }
            null !== b3 || a[e2].disabled || (b3 = a[e2]);
          }
          null !== b3 && (b3.selected = true);
        }
      }
      function gb(a, b3) {
        if (null != b3.dangerouslySetInnerHTML) throw Error(p(91));
        return A7({}, b3, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
      }
      function hb(a, b3) {
        var c = b3.value;
        if (null == c) {
          c = b3.children;
          b3 = b3.defaultValue;
          if (null != c) {
            if (null != b3) throw Error(p(92));
            if (eb(c)) {
              if (1 < c.length) throw Error(p(93));
              c = c[0];
            }
            b3 = c;
          }
          null == b3 && (b3 = "");
          c = b3;
        }
        a._wrapperState = { initialValue: Sa2(c) };
      }
      function ib(a, b3) {
        var c = Sa2(b3.value), d3 = Sa2(b3.defaultValue);
        null != c && (c = "" + c, c !== a.value && (a.value = c), null == b3.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
        null != d3 && (a.defaultValue = "" + d3);
      }
      function jb(a) {
        var b3 = a.textContent;
        b3 === a._wrapperState.initialValue && "" !== b3 && null !== b3 && (a.value = b3);
      }
      function kb(a) {
        switch (a) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function lb(a, b3) {
        return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b3) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b3 ? "http://www.w3.org/1999/xhtml" : a;
      }
      var mb;
      var nb = (function(a) {
        return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b3, c, d3, e2) {
          MSApp.execUnsafeLocalFunction(function() {
            return a(b3, c, d3, e2);
          });
        } : a;
      })(function(a, b3) {
        if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b3;
        else {
          mb = mb || document.createElement("div");
          mb.innerHTML = "<svg>" + b3.valueOf().toString() + "</svg>";
          for (b3 = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
          for (; b3.firstChild; ) a.appendChild(b3.firstChild);
        }
      });
      function ob(a, b3) {
        if (b3) {
          var c = a.firstChild;
          if (c && c === a.lastChild && 3 === c.nodeType) {
            c.nodeValue = b3;
            return;
          }
        }
        a.textContent = b3;
      }
      var pb = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var qb = ["Webkit", "ms", "Moz", "O"];
      Object.keys(pb).forEach(function(a) {
        qb.forEach(function(b3) {
          b3 = b3 + a.charAt(0).toUpperCase() + a.substring(1);
          pb[b3] = pb[a];
        });
      });
      function rb(a, b3, c) {
        return null == b3 || "boolean" === typeof b3 || "" === b3 ? "" : c || "number" !== typeof b3 || 0 === b3 || pb.hasOwnProperty(a) && pb[a] ? ("" + b3).trim() : b3 + "px";
      }
      function sb(a, b3) {
        a = a.style;
        for (var c in b3) if (b3.hasOwnProperty(c)) {
          var d3 = 0 === c.indexOf("--"), e2 = rb(c, b3[c], d3);
          "float" === c && (c = "cssFloat");
          d3 ? a.setProperty(c, e2) : a[c] = e2;
        }
      }
      var tb = A7({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      function ub(a, b3) {
        if (b3) {
          if (tb[a] && (null != b3.children || null != b3.dangerouslySetInnerHTML)) throw Error(p(137, a));
          if (null != b3.dangerouslySetInnerHTML) {
            if (null != b3.children) throw Error(p(60));
            if ("object" !== typeof b3.dangerouslySetInnerHTML || !("__html" in b3.dangerouslySetInnerHTML)) throw Error(p(61));
          }
          if (null != b3.style && "object" !== typeof b3.style) throw Error(p(62));
        }
      }
      function vb(a, b3) {
        if (-1 === a.indexOf("-")) return "string" === typeof b3.is;
        switch (a) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var wb = null;
      function xb(a) {
        a = a.target || a.srcElement || window;
        a.correspondingUseElement && (a = a.correspondingUseElement);
        return 3 === a.nodeType ? a.parentNode : a;
      }
      var yb = null;
      var zb = null;
      var Ab = null;
      function Bb(a) {
        if (a = Cb(a)) {
          if ("function" !== typeof yb) throw Error(p(280));
          var b3 = a.stateNode;
          b3 && (b3 = Db(b3), yb(a.stateNode, a.type, b3));
        }
      }
      function Eb(a) {
        zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
      }
      function Fb() {
        if (zb) {
          var a = zb, b3 = Ab;
          Ab = zb = null;
          Bb(a);
          if (b3) for (a = 0; a < b3.length; a++) Bb(b3[a]);
        }
      }
      function Gb(a, b3) {
        return a(b3);
      }
      function Hb() {
      }
      var Ib = false;
      function Jb(a, b3, c) {
        if (Ib) return a(b3, c);
        Ib = true;
        try {
          return Gb(a, b3, c);
        } finally {
          if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
        }
      }
      function Kb(a, b3) {
        var c = a.stateNode;
        if (null === c) return null;
        var d3 = Db(c);
        if (null === d3) return null;
        c = d3[b3];
        a: switch (b3) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (d3 = !d3.disabled) || (a = a.type, d3 = !("button" === a || "input" === a || "select" === a || "textarea" === a));
            a = !d3;
            break a;
          default:
            a = false;
        }
        if (a) return null;
        if (c && "function" !== typeof c) throw Error(p(231, b3, typeof c));
        return c;
      }
      var Lb = false;
      if (ia2) try {
        Mb = {};
        Object.defineProperty(Mb, "passive", { get: function() {
          Lb = true;
        } });
        window.addEventListener("test", Mb, Mb);
        window.removeEventListener("test", Mb, Mb);
      } catch (a) {
        Lb = false;
      }
      var Mb;
      function Nb(a, b3, c, d3, e2, f5, g5, h3, k4) {
        var l = Array.prototype.slice.call(arguments, 3);
        try {
          b3.apply(c, l);
        } catch (m) {
          this.onError(m);
        }
      }
      var Ob = false;
      var Pb = null;
      var Qb = false;
      var Rb = null;
      var Sb = { onError: function(a) {
        Ob = true;
        Pb = a;
      } };
      function Tb(a, b3, c, d3, e2, f5, g5, h3, k4) {
        Ob = false;
        Pb = null;
        Nb.apply(Sb, arguments);
      }
      function Ub(a, b3, c, d3, e2, f5, g5, h3, k4) {
        Tb.apply(this, arguments);
        if (Ob) {
          if (Ob) {
            var l = Pb;
            Ob = false;
            Pb = null;
          } else throw Error(p(198));
          Qb || (Qb = true, Rb = l);
        }
      }
      function Vb(a) {
        var b3 = a, c = a;
        if (a.alternate) for (; b3.return; ) b3 = b3.return;
        else {
          a = b3;
          do
            b3 = a, 0 !== (b3.flags & 4098) && (c = b3.return), a = b3.return;
          while (a);
        }
        return 3 === b3.tag ? c : null;
      }
      function Wb(a) {
        if (13 === a.tag) {
          var b3 = a.memoizedState;
          null === b3 && (a = a.alternate, null !== a && (b3 = a.memoizedState));
          if (null !== b3) return b3.dehydrated;
        }
        return null;
      }
      function Xb(a) {
        if (Vb(a) !== a) throw Error(p(188));
      }
      function Yb(a) {
        var b3 = a.alternate;
        if (!b3) {
          b3 = Vb(a);
          if (null === b3) throw Error(p(188));
          return b3 !== a ? null : a;
        }
        for (var c = a, d3 = b3; ; ) {
          var e2 = c.return;
          if (null === e2) break;
          var f5 = e2.alternate;
          if (null === f5) {
            d3 = e2.return;
            if (null !== d3) {
              c = d3;
              continue;
            }
            break;
          }
          if (e2.child === f5.child) {
            for (f5 = e2.child; f5; ) {
              if (f5 === c) return Xb(e2), a;
              if (f5 === d3) return Xb(e2), b3;
              f5 = f5.sibling;
            }
            throw Error(p(188));
          }
          if (c.return !== d3.return) c = e2, d3 = f5;
          else {
            for (var g5 = false, h3 = e2.child; h3; ) {
              if (h3 === c) {
                g5 = true;
                c = e2;
                d3 = f5;
                break;
              }
              if (h3 === d3) {
                g5 = true;
                d3 = e2;
                c = f5;
                break;
              }
              h3 = h3.sibling;
            }
            if (!g5) {
              for (h3 = f5.child; h3; ) {
                if (h3 === c) {
                  g5 = true;
                  c = f5;
                  d3 = e2;
                  break;
                }
                if (h3 === d3) {
                  g5 = true;
                  d3 = f5;
                  c = e2;
                  break;
                }
                h3 = h3.sibling;
              }
              if (!g5) throw Error(p(189));
            }
          }
          if (c.alternate !== d3) throw Error(p(190));
        }
        if (3 !== c.tag) throw Error(p(188));
        return c.stateNode.current === c ? a : b3;
      }
      function Zb(a) {
        a = Yb(a);
        return null !== a ? $b(a) : null;
      }
      function $b(a) {
        if (5 === a.tag || 6 === a.tag) return a;
        for (a = a.child; null !== a; ) {
          var b3 = $b(a);
          if (null !== b3) return b3;
          a = a.sibling;
        }
        return null;
      }
      var ac2 = ca2.unstable_scheduleCallback;
      var bc2 = ca2.unstable_cancelCallback;
      var cc2 = ca2.unstable_shouldYield;
      var dc2 = ca2.unstable_requestPaint;
      var B6 = ca2.unstable_now;
      var ec2 = ca2.unstable_getCurrentPriorityLevel;
      var fc2 = ca2.unstable_ImmediatePriority;
      var gc2 = ca2.unstable_UserBlockingPriority;
      var hc2 = ca2.unstable_NormalPriority;
      var ic2 = ca2.unstable_LowPriority;
      var jc2 = ca2.unstable_IdlePriority;
      var kc2 = null;
      var lc2 = null;
      function mc2(a) {
        if (lc2 && "function" === typeof lc2.onCommitFiberRoot) try {
          lc2.onCommitFiberRoot(kc2, a, void 0, 128 === (a.current.flags & 128));
        } catch (b3) {
        }
      }
      var oc2 = Math.clz32 ? Math.clz32 : nc2;
      var pc2 = Math.log;
      var qc2 = Math.LN2;
      function nc2(a) {
        a >>>= 0;
        return 0 === a ? 32 : 31 - (pc2(a) / qc2 | 0) | 0;
      }
      var rc2 = 64;
      var sc2 = 4194304;
      function tc2(a) {
        switch (a & -a) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return a & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return a & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return a;
        }
      }
      function uc2(a, b3) {
        var c = a.pendingLanes;
        if (0 === c) return 0;
        var d3 = 0, e2 = a.suspendedLanes, f5 = a.pingedLanes, g5 = c & 268435455;
        if (0 !== g5) {
          var h3 = g5 & ~e2;
          0 !== h3 ? d3 = tc2(h3) : (f5 &= g5, 0 !== f5 && (d3 = tc2(f5)));
        } else g5 = c & ~e2, 0 !== g5 ? d3 = tc2(g5) : 0 !== f5 && (d3 = tc2(f5));
        if (0 === d3) return 0;
        if (0 !== b3 && b3 !== d3 && 0 === (b3 & e2) && (e2 = d3 & -d3, f5 = b3 & -b3, e2 >= f5 || 16 === e2 && 0 !== (f5 & 4194240))) return b3;
        0 !== (d3 & 4) && (d3 |= c & 16);
        b3 = a.entangledLanes;
        if (0 !== b3) for (a = a.entanglements, b3 &= d3; 0 < b3; ) c = 31 - oc2(b3), e2 = 1 << c, d3 |= a[c], b3 &= ~e2;
        return d3;
      }
      function vc2(a, b3) {
        switch (a) {
          case 1:
          case 2:
          case 4:
            return b3 + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return b3 + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function wc2(a, b3) {
        for (var c = a.suspendedLanes, d3 = a.pingedLanes, e2 = a.expirationTimes, f5 = a.pendingLanes; 0 < f5; ) {
          var g5 = 31 - oc2(f5), h3 = 1 << g5, k4 = e2[g5];
          if (-1 === k4) {
            if (0 === (h3 & c) || 0 !== (h3 & d3)) e2[g5] = vc2(h3, b3);
          } else k4 <= b3 && (a.expiredLanes |= h3);
          f5 &= ~h3;
        }
      }
      function xc2(a) {
        a = a.pendingLanes & -1073741825;
        return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
      }
      function yc2() {
        var a = rc2;
        rc2 <<= 1;
        0 === (rc2 & 4194240) && (rc2 = 64);
        return a;
      }
      function zc2(a) {
        for (var b3 = [], c = 0; 31 > c; c++) b3.push(a);
        return b3;
      }
      function Ac2(a, b3, c) {
        a.pendingLanes |= b3;
        536870912 !== b3 && (a.suspendedLanes = 0, a.pingedLanes = 0);
        a = a.eventTimes;
        b3 = 31 - oc2(b3);
        a[b3] = c;
      }
      function Bc2(a, b3) {
        var c = a.pendingLanes & ~b3;
        a.pendingLanes = b3;
        a.suspendedLanes = 0;
        a.pingedLanes = 0;
        a.expiredLanes &= b3;
        a.mutableReadLanes &= b3;
        a.entangledLanes &= b3;
        b3 = a.entanglements;
        var d3 = a.eventTimes;
        for (a = a.expirationTimes; 0 < c; ) {
          var e2 = 31 - oc2(c), f5 = 1 << e2;
          b3[e2] = 0;
          d3[e2] = -1;
          a[e2] = -1;
          c &= ~f5;
        }
      }
      function Cc2(a, b3) {
        var c = a.entangledLanes |= b3;
        for (a = a.entanglements; c; ) {
          var d3 = 31 - oc2(c), e2 = 1 << d3;
          e2 & b3 | a[d3] & b3 && (a[d3] |= b3);
          c &= ~e2;
        }
      }
      var C4 = 0;
      function Dc2(a) {
        a &= -a;
        return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
      }
      var Ec2;
      var Fc2;
      var Gc2;
      var Hc2;
      var Ic2;
      var Jc2 = false;
      var Kc2 = [];
      var Lc2 = null;
      var Mc2 = null;
      var Nc2 = null;
      var Oc2 = /* @__PURE__ */ new Map();
      var Pc2 = /* @__PURE__ */ new Map();
      var Qc2 = [];
      var Rc2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Sc2(a, b3) {
        switch (a) {
          case "focusin":
          case "focusout":
            Lc2 = null;
            break;
          case "dragenter":
          case "dragleave":
            Mc2 = null;
            break;
          case "mouseover":
          case "mouseout":
            Nc2 = null;
            break;
          case "pointerover":
          case "pointerout":
            Oc2.delete(b3.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Pc2.delete(b3.pointerId);
        }
      }
      function Tc2(a, b3, c, d3, e2, f5) {
        if (null === a || a.nativeEvent !== f5) return a = { blockedOn: b3, domEventName: c, eventSystemFlags: d3, nativeEvent: f5, targetContainers: [e2] }, null !== b3 && (b3 = Cb(b3), null !== b3 && Fc2(b3)), a;
        a.eventSystemFlags |= d3;
        b3 = a.targetContainers;
        null !== e2 && -1 === b3.indexOf(e2) && b3.push(e2);
        return a;
      }
      function Uc2(a, b3, c, d3, e2) {
        switch (b3) {
          case "focusin":
            return Lc2 = Tc2(Lc2, a, b3, c, d3, e2), true;
          case "dragenter":
            return Mc2 = Tc2(Mc2, a, b3, c, d3, e2), true;
          case "mouseover":
            return Nc2 = Tc2(Nc2, a, b3, c, d3, e2), true;
          case "pointerover":
            var f5 = e2.pointerId;
            Oc2.set(f5, Tc2(Oc2.get(f5) || null, a, b3, c, d3, e2));
            return true;
          case "gotpointercapture":
            return f5 = e2.pointerId, Pc2.set(f5, Tc2(Pc2.get(f5) || null, a, b3, c, d3, e2)), true;
        }
        return false;
      }
      function Vc2(a) {
        var b3 = Wc2(a.target);
        if (null !== b3) {
          var c = Vb(b3);
          if (null !== c) {
            if (b3 = c.tag, 13 === b3) {
              if (b3 = Wb(c), null !== b3) {
                a.blockedOn = b3;
                Ic2(a.priority, function() {
                  Gc2(c);
                });
                return;
              }
            } else if (3 === b3 && c.stateNode.current.memoizedState.isDehydrated) {
              a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
              return;
            }
          }
        }
        a.blockedOn = null;
      }
      function Xc2(a) {
        if (null !== a.blockedOn) return false;
        for (var b3 = a.targetContainers; 0 < b3.length; ) {
          var c = Yc2(a.domEventName, a.eventSystemFlags, b3[0], a.nativeEvent);
          if (null === c) {
            c = a.nativeEvent;
            var d3 = new c.constructor(c.type, c);
            wb = d3;
            c.target.dispatchEvent(d3);
            wb = null;
          } else return b3 = Cb(c), null !== b3 && Fc2(b3), a.blockedOn = c, false;
          b3.shift();
        }
        return true;
      }
      function Zc2(a, b3, c) {
        Xc2(a) && c.delete(b3);
      }
      function $c2() {
        Jc2 = false;
        null !== Lc2 && Xc2(Lc2) && (Lc2 = null);
        null !== Mc2 && Xc2(Mc2) && (Mc2 = null);
        null !== Nc2 && Xc2(Nc2) && (Nc2 = null);
        Oc2.forEach(Zc2);
        Pc2.forEach(Zc2);
      }
      function ad(a, b3) {
        a.blockedOn === b3 && (a.blockedOn = null, Jc2 || (Jc2 = true, ca2.unstable_scheduleCallback(ca2.unstable_NormalPriority, $c2)));
      }
      function bd2(a) {
        function b3(b4) {
          return ad(b4, a);
        }
        if (0 < Kc2.length) {
          ad(Kc2[0], a);
          for (var c = 1; c < Kc2.length; c++) {
            var d3 = Kc2[c];
            d3.blockedOn === a && (d3.blockedOn = null);
          }
        }
        null !== Lc2 && ad(Lc2, a);
        null !== Mc2 && ad(Mc2, a);
        null !== Nc2 && ad(Nc2, a);
        Oc2.forEach(b3);
        Pc2.forEach(b3);
        for (c = 0; c < Qc2.length; c++) d3 = Qc2[c], d3.blockedOn === a && (d3.blockedOn = null);
        for (; 0 < Qc2.length && (c = Qc2[0], null === c.blockedOn); ) Vc2(c), null === c.blockedOn && Qc2.shift();
      }
      var cd2 = ua2.ReactCurrentBatchConfig;
      var dd2 = true;
      function ed2(a, b3, c, d3) {
        var e2 = C4, f5 = cd2.transition;
        cd2.transition = null;
        try {
          C4 = 1, fd2(a, b3, c, d3);
        } finally {
          C4 = e2, cd2.transition = f5;
        }
      }
      function gd2(a, b3, c, d3) {
        var e2 = C4, f5 = cd2.transition;
        cd2.transition = null;
        try {
          C4 = 4, fd2(a, b3, c, d3);
        } finally {
          C4 = e2, cd2.transition = f5;
        }
      }
      function fd2(a, b3, c, d3) {
        if (dd2) {
          var e2 = Yc2(a, b3, c, d3);
          if (null === e2) hd2(a, b3, d3, id, c), Sc2(a, d3);
          else if (Uc2(e2, a, b3, c, d3)) d3.stopPropagation();
          else if (Sc2(a, d3), b3 & 4 && -1 < Rc2.indexOf(a)) {
            for (; null !== e2; ) {
              var f5 = Cb(e2);
              null !== f5 && Ec2(f5);
              f5 = Yc2(a, b3, c, d3);
              null === f5 && hd2(a, b3, d3, id, c);
              if (f5 === e2) break;
              e2 = f5;
            }
            null !== e2 && d3.stopPropagation();
          } else hd2(a, b3, d3, null, c);
        }
      }
      var id = null;
      function Yc2(a, b3, c, d3) {
        id = null;
        a = xb(d3);
        a = Wc2(a);
        if (null !== a) if (b3 = Vb(a), null === b3) a = null;
        else if (c = b3.tag, 13 === c) {
          a = Wb(b3);
          if (null !== a) return a;
          a = null;
        } else if (3 === c) {
          if (b3.stateNode.current.memoizedState.isDehydrated) return 3 === b3.tag ? b3.stateNode.containerInfo : null;
          a = null;
        } else b3 !== a && (a = null);
        id = a;
        return null;
      }
      function jd2(a) {
        switch (a) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (ec2()) {
              case fc2:
                return 1;
              case gc2:
                return 4;
              case hc2:
              case ic2:
                return 16;
              case jc2:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var kd2 = null;
      var ld2 = null;
      var md2 = null;
      function nd() {
        if (md2) return md2;
        var a, b3 = ld2, c = b3.length, d3, e2 = "value" in kd2 ? kd2.value : kd2.textContent, f5 = e2.length;
        for (a = 0; a < c && b3[a] === e2[a]; a++) ;
        var g5 = c - a;
        for (d3 = 1; d3 <= g5 && b3[c - d3] === e2[f5 - d3]; d3++) ;
        return md2 = e2.slice(a, 1 < d3 ? 1 - d3 : void 0);
      }
      function od(a) {
        var b3 = a.keyCode;
        "charCode" in a ? (a = a.charCode, 0 === a && 13 === b3 && (a = 13)) : a = b3;
        10 === a && (a = 13);
        return 32 <= a || 13 === a ? a : 0;
      }
      function pd2() {
        return true;
      }
      function qd2() {
        return false;
      }
      function rd2(a) {
        function b3(b4, d3, e2, f5, g5) {
          this._reactName = b4;
          this._targetInst = e2;
          this.type = d3;
          this.nativeEvent = f5;
          this.target = g5;
          this.currentTarget = null;
          for (var c in a) a.hasOwnProperty(c) && (b4 = a[c], this[c] = b4 ? b4(f5) : f5[c]);
          this.isDefaultPrevented = (null != f5.defaultPrevented ? f5.defaultPrevented : false === f5.returnValue) ? pd2 : qd2;
          this.isPropagationStopped = qd2;
          return this;
        }
        A7(b3.prototype, { preventDefault: function() {
          this.defaultPrevented = true;
          var a2 = this.nativeEvent;
          a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd2);
        }, stopPropagation: function() {
          var a2 = this.nativeEvent;
          a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd2);
        }, persist: function() {
        }, isPersistent: pd2 });
        return b3;
      }
      var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
        return a.timeStamp || Date.now();
      }, defaultPrevented: 0, isTrusted: 0 };
      var td2 = rd2(sd);
      var ud2 = A7({}, sd, { view: 0, detail: 0 });
      var vd2 = rd2(ud2);
      var wd2;
      var xd2;
      var yd2;
      var Ad2 = A7({}, ud2, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd2, button: 0, buttons: 0, relatedTarget: function(a) {
        return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
      }, movementX: function(a) {
        if ("movementX" in a) return a.movementX;
        a !== yd2 && (yd2 && "mousemove" === a.type ? (wd2 = a.screenX - yd2.screenX, xd2 = a.screenY - yd2.screenY) : xd2 = wd2 = 0, yd2 = a);
        return wd2;
      }, movementY: function(a) {
        return "movementY" in a ? a.movementY : xd2;
      } });
      var Bd2 = rd2(Ad2);
      var Cd2 = A7({}, Ad2, { dataTransfer: 0 });
      var Dd2 = rd2(Cd2);
      var Ed2 = A7({}, ud2, { relatedTarget: 0 });
      var Fd2 = rd2(Ed2);
      var Gd2 = A7({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Hd2 = rd2(Gd2);
      var Id2 = A7({}, sd, { clipboardData: function(a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
      } });
      var Jd2 = rd2(Id2);
      var Kd2 = A7({}, sd, { data: 0 });
      var Ld2 = rd2(Kd2);
      var Md2 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      };
      var Nd2 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      };
      var Od2 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function Pd2(a) {
        var b3 = this.nativeEvent;
        return b3.getModifierState ? b3.getModifierState(a) : (a = Od2[a]) ? !!b3[a] : false;
      }
      function zd2() {
        return Pd2;
      }
      var Qd2 = A7({}, ud2, { key: function(a) {
        if (a.key) {
          var b3 = Md2[a.key] || a.key;
          if ("Unidentified" !== b3) return b3;
        }
        return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd2[a.keyCode] || "Unidentified" : "";
      }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd2, charCode: function(a) {
        return "keypress" === a.type ? od(a) : 0;
      }, keyCode: function(a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      }, which: function(a) {
        return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      } });
      var Rd2 = rd2(Qd2);
      var Sd2 = A7({}, Ad2, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
      var Td2 = rd2(Sd2);
      var Ud2 = A7({}, ud2, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd2 });
      var Vd2 = rd2(Ud2);
      var Wd2 = A7({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Xd2 = rd2(Wd2);
      var Yd2 = A7({}, Ad2, {
        deltaX: function(a) {
          return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
        },
        deltaY: function(a) {
          return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var Zd2 = rd2(Yd2);
      var $d2 = [9, 13, 27, 32];
      var ae = ia2 && "CompositionEvent" in window;
      var be = null;
      ia2 && "documentMode" in document && (be = document.documentMode);
      var ce = ia2 && "TextEvent" in window && !be;
      var de2 = ia2 && (!ae || be && 8 < be && 11 >= be);
      var ee2 = String.fromCharCode(32);
      var fe = false;
      function ge(a, b3) {
        switch (a) {
          case "keyup":
            return -1 !== $d2.indexOf(b3.keyCode);
          case "keydown":
            return 229 !== b3.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function he(a) {
        a = a.detail;
        return "object" === typeof a && "data" in a ? a.data : null;
      }
      var ie2 = false;
      function je(a, b3) {
        switch (a) {
          case "compositionend":
            return he(b3);
          case "keypress":
            if (32 !== b3.which) return null;
            fe = true;
            return ee2;
          case "textInput":
            return a = b3.data, a === ee2 && fe ? null : a;
          default:
            return null;
        }
      }
      function ke(a, b3) {
        if (ie2) return "compositionend" === a || !ae && ge(a, b3) ? (a = nd(), md2 = ld2 = kd2 = null, ie2 = false, a) : null;
        switch (a) {
          case "paste":
            return null;
          case "keypress":
            if (!(b3.ctrlKey || b3.altKey || b3.metaKey) || b3.ctrlKey && b3.altKey) {
              if (b3.char && 1 < b3.char.length) return b3.char;
              if (b3.which) return String.fromCharCode(b3.which);
            }
            return null;
          case "compositionend":
            return de2 && "ko" !== b3.locale ? null : b3.data;
          default:
            return null;
        }
      }
      var le2 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function me2(a) {
        var b3 = a && a.nodeName && a.nodeName.toLowerCase();
        return "input" === b3 ? !!le2[a.type] : "textarea" === b3 ? true : false;
      }
      function ne(a, b3, c, d3) {
        Eb(d3);
        b3 = oe(b3, "onChange");
        0 < b3.length && (c = new td2("onChange", "change", null, c, d3), a.push({ event: c, listeners: b3 }));
      }
      var pe = null;
      var qe2 = null;
      function re(a) {
        se(a, 0);
      }
      function te2(a) {
        var b3 = ue(a);
        if (Wa2(b3)) return a;
      }
      function ve2(a, b3) {
        if ("change" === a) return b3;
      }
      var we2 = false;
      if (ia2) {
        if (ia2) {
          ye2 = "oninput" in document;
          if (!ye2) {
            ze2 = document.createElement("div");
            ze2.setAttribute("oninput", "return;");
            ye2 = "function" === typeof ze2.oninput;
          }
          xe = ye2;
        } else xe = false;
        we2 = xe && (!document.documentMode || 9 < document.documentMode);
      }
      var xe;
      var ye2;
      var ze2;
      function Ae2() {
        pe && (pe.detachEvent("onpropertychange", Be2), qe2 = pe = null);
      }
      function Be2(a) {
        if ("value" === a.propertyName && te2(qe2)) {
          var b3 = [];
          ne(b3, qe2, a, xb(a));
          Jb(re, b3);
        }
      }
      function Ce2(a, b3, c) {
        "focusin" === a ? (Ae2(), pe = b3, qe2 = c, pe.attachEvent("onpropertychange", Be2)) : "focusout" === a && Ae2();
      }
      function De2(a) {
        if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te2(qe2);
      }
      function Ee(a, b3) {
        if ("click" === a) return te2(b3);
      }
      function Fe(a, b3) {
        if ("input" === a || "change" === a) return te2(b3);
      }
      function Ge2(a, b3) {
        return a === b3 && (0 !== a || 1 / a === 1 / b3) || a !== a && b3 !== b3;
      }
      var He2 = "function" === typeof Object.is ? Object.is : Ge2;
      function Ie2(a, b3) {
        if (He2(a, b3)) return true;
        if ("object" !== typeof a || null === a || "object" !== typeof b3 || null === b3) return false;
        var c = Object.keys(a), d3 = Object.keys(b3);
        if (c.length !== d3.length) return false;
        for (d3 = 0; d3 < c.length; d3++) {
          var e2 = c[d3];
          if (!ja2.call(b3, e2) || !He2(a[e2], b3[e2])) return false;
        }
        return true;
      }
      function Je2(a) {
        for (; a && a.firstChild; ) a = a.firstChild;
        return a;
      }
      function Ke2(a, b3) {
        var c = Je2(a);
        a = 0;
        for (var d3; c; ) {
          if (3 === c.nodeType) {
            d3 = a + c.textContent.length;
            if (a <= b3 && d3 >= b3) return { node: c, offset: b3 - a };
            a = d3;
          }
          a: {
            for (; c; ) {
              if (c.nextSibling) {
                c = c.nextSibling;
                break a;
              }
              c = c.parentNode;
            }
            c = void 0;
          }
          c = Je2(c);
        }
      }
      function Le2(a, b3) {
        return a && b3 ? a === b3 ? true : a && 3 === a.nodeType ? false : b3 && 3 === b3.nodeType ? Le2(a, b3.parentNode) : "contains" in a ? a.contains(b3) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b3) & 16) : false : false;
      }
      function Me2() {
        for (var a = window, b3 = Xa2(); b3 instanceof a.HTMLIFrameElement; ) {
          try {
            var c = "string" === typeof b3.contentWindow.location.href;
          } catch (d3) {
            c = false;
          }
          if (c) a = b3.contentWindow;
          else break;
          b3 = Xa2(a.document);
        }
        return b3;
      }
      function Ne2(a) {
        var b3 = a && a.nodeName && a.nodeName.toLowerCase();
        return b3 && ("input" === b3 && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b3 || "true" === a.contentEditable);
      }
      function Oe(a) {
        var b3 = Me2(), c = a.focusedElem, d3 = a.selectionRange;
        if (b3 !== c && c && c.ownerDocument && Le2(c.ownerDocument.documentElement, c)) {
          if (null !== d3 && Ne2(c)) {
            if (b3 = d3.start, a = d3.end, void 0 === a && (a = b3), "selectionStart" in c) c.selectionStart = b3, c.selectionEnd = Math.min(a, c.value.length);
            else if (a = (b3 = c.ownerDocument || document) && b3.defaultView || window, a.getSelection) {
              a = a.getSelection();
              var e2 = c.textContent.length, f5 = Math.min(d3.start, e2);
              d3 = void 0 === d3.end ? f5 : Math.min(d3.end, e2);
              !a.extend && f5 > d3 && (e2 = d3, d3 = f5, f5 = e2);
              e2 = Ke2(c, f5);
              var g5 = Ke2(
                c,
                d3
              );
              e2 && g5 && (1 !== a.rangeCount || a.anchorNode !== e2.node || a.anchorOffset !== e2.offset || a.focusNode !== g5.node || a.focusOffset !== g5.offset) && (b3 = b3.createRange(), b3.setStart(e2.node, e2.offset), a.removeAllRanges(), f5 > d3 ? (a.addRange(b3), a.extend(g5.node, g5.offset)) : (b3.setEnd(g5.node, g5.offset), a.addRange(b3)));
            }
          }
          b3 = [];
          for (a = c; a = a.parentNode; ) 1 === a.nodeType && b3.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
          "function" === typeof c.focus && c.focus();
          for (c = 0; c < b3.length; c++) a = b3[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
        }
      }
      var Pe = ia2 && "documentMode" in document && 11 >= document.documentMode;
      var Qe2 = null;
      var Re2 = null;
      var Se2 = null;
      var Te2 = false;
      function Ue2(a, b3, c) {
        var d3 = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
        Te2 || null == Qe2 || Qe2 !== Xa2(d3) || (d3 = Qe2, "selectionStart" in d3 && Ne2(d3) ? d3 = { start: d3.selectionStart, end: d3.selectionEnd } : (d3 = (d3.ownerDocument && d3.ownerDocument.defaultView || window).getSelection(), d3 = { anchorNode: d3.anchorNode, anchorOffset: d3.anchorOffset, focusNode: d3.focusNode, focusOffset: d3.focusOffset }), Se2 && Ie2(Se2, d3) || (Se2 = d3, d3 = oe(Re2, "onSelect"), 0 < d3.length && (b3 = new td2("onSelect", "select", null, b3, c), a.push({ event: b3, listeners: d3 }), b3.target = Qe2)));
      }
      function Ve2(a, b3) {
        var c = {};
        c[a.toLowerCase()] = b3.toLowerCase();
        c["Webkit" + a] = "webkit" + b3;
        c["Moz" + a] = "moz" + b3;
        return c;
      }
      var We2 = { animationend: Ve2("Animation", "AnimationEnd"), animationiteration: Ve2("Animation", "AnimationIteration"), animationstart: Ve2("Animation", "AnimationStart"), transitionend: Ve2("Transition", "TransitionEnd") };
      var Xe2 = {};
      var Ye2 = {};
      ia2 && (Ye2 = document.createElement("div").style, "AnimationEvent" in window || (delete We2.animationend.animation, delete We2.animationiteration.animation, delete We2.animationstart.animation), "TransitionEvent" in window || delete We2.transitionend.transition);
      function Ze2(a) {
        if (Xe2[a]) return Xe2[a];
        if (!We2[a]) return a;
        var b3 = We2[a], c;
        for (c in b3) if (b3.hasOwnProperty(c) && c in Ye2) return Xe2[a] = b3[c];
        return a;
      }
      var $e2 = Ze2("animationend");
      var af2 = Ze2("animationiteration");
      var bf2 = Ze2("animationstart");
      var cf2 = Ze2("transitionend");
      var df2 = /* @__PURE__ */ new Map();
      var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function ff2(a, b3) {
        df2.set(a, b3);
        fa2(b3, [a]);
      }
      for (gf2 = 0; gf2 < ef.length; gf2++) {
        hf2 = ef[gf2], jf = hf2.toLowerCase(), kf2 = hf2[0].toUpperCase() + hf2.slice(1);
        ff2(jf, "on" + kf2);
      }
      var hf2;
      var jf;
      var kf2;
      var gf2;
      ff2($e2, "onAnimationEnd");
      ff2(af2, "onAnimationIteration");
      ff2(bf2, "onAnimationStart");
      ff2("dblclick", "onDoubleClick");
      ff2("focusin", "onFocus");
      ff2("focusout", "onBlur");
      ff2(cf2, "onTransitionEnd");
      ha2("onMouseEnter", ["mouseout", "mouseover"]);
      ha2("onMouseLeave", ["mouseout", "mouseover"]);
      ha2("onPointerEnter", ["pointerout", "pointerover"]);
      ha2("onPointerLeave", ["pointerout", "pointerover"]);
      fa2("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      fa2("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      fa2("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      fa2("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      fa2("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      fa2("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var lf2 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var mf2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf2));
      function nf(a, b3, c) {
        var d3 = a.type || "unknown-event";
        a.currentTarget = c;
        Ub(d3, b3, void 0, a);
        a.currentTarget = null;
      }
      function se(a, b3) {
        b3 = 0 !== (b3 & 4);
        for (var c = 0; c < a.length; c++) {
          var d3 = a[c], e2 = d3.event;
          d3 = d3.listeners;
          a: {
            var f5 = void 0;
            if (b3) for (var g5 = d3.length - 1; 0 <= g5; g5--) {
              var h3 = d3[g5], k4 = h3.instance, l = h3.currentTarget;
              h3 = h3.listener;
              if (k4 !== f5 && e2.isPropagationStopped()) break a;
              nf(e2, h3, l);
              f5 = k4;
            }
            else for (g5 = 0; g5 < d3.length; g5++) {
              h3 = d3[g5];
              k4 = h3.instance;
              l = h3.currentTarget;
              h3 = h3.listener;
              if (k4 !== f5 && e2.isPropagationStopped()) break a;
              nf(e2, h3, l);
              f5 = k4;
            }
          }
        }
        if (Qb) throw a = Rb, Qb = false, Rb = null, a;
      }
      function D3(a, b3) {
        var c = b3[of2];
        void 0 === c && (c = b3[of2] = /* @__PURE__ */ new Set());
        var d3 = a + "__bubble";
        c.has(d3) || (pf2(b3, a, 2, false), c.add(d3));
      }
      function qf2(a, b3, c) {
        var d3 = 0;
        b3 && (d3 |= 4);
        pf2(c, a, d3, b3);
      }
      var rf2 = "_reactListening" + Math.random().toString(36).slice(2);
      function sf2(a) {
        if (!a[rf2]) {
          a[rf2] = true;
          da2.forEach(function(b4) {
            "selectionchange" !== b4 && (mf2.has(b4) || qf2(b4, false, a), qf2(b4, true, a));
          });
          var b3 = 9 === a.nodeType ? a : a.ownerDocument;
          null === b3 || b3[rf2] || (b3[rf2] = true, qf2("selectionchange", false, b3));
        }
      }
      function pf2(a, b3, c, d3) {
        switch (jd2(b3)) {
          case 1:
            var e2 = ed2;
            break;
          case 4:
            e2 = gd2;
            break;
          default:
            e2 = fd2;
        }
        c = e2.bind(null, b3, c, a);
        e2 = void 0;
        !Lb || "touchstart" !== b3 && "touchmove" !== b3 && "wheel" !== b3 || (e2 = true);
        d3 ? void 0 !== e2 ? a.addEventListener(b3, c, { capture: true, passive: e2 }) : a.addEventListener(b3, c, true) : void 0 !== e2 ? a.addEventListener(b3, c, { passive: e2 }) : a.addEventListener(b3, c, false);
      }
      function hd2(a, b3, c, d3, e2) {
        var f5 = d3;
        if (0 === (b3 & 1) && 0 === (b3 & 2) && null !== d3) a: for (; ; ) {
          if (null === d3) return;
          var g5 = d3.tag;
          if (3 === g5 || 4 === g5) {
            var h3 = d3.stateNode.containerInfo;
            if (h3 === e2 || 8 === h3.nodeType && h3.parentNode === e2) break;
            if (4 === g5) for (g5 = d3.return; null !== g5; ) {
              var k4 = g5.tag;
              if (3 === k4 || 4 === k4) {
                if (k4 = g5.stateNode.containerInfo, k4 === e2 || 8 === k4.nodeType && k4.parentNode === e2) return;
              }
              g5 = g5.return;
            }
            for (; null !== h3; ) {
              g5 = Wc2(h3);
              if (null === g5) return;
              k4 = g5.tag;
              if (5 === k4 || 6 === k4) {
                d3 = f5 = g5;
                continue a;
              }
              h3 = h3.parentNode;
            }
          }
          d3 = d3.return;
        }
        Jb(function() {
          var d4 = f5, e3 = xb(c), g6 = [];
          a: {
            var h4 = df2.get(a);
            if (void 0 !== h4) {
              var k5 = td2, n = a;
              switch (a) {
                case "keypress":
                  if (0 === od(c)) break a;
                case "keydown":
                case "keyup":
                  k5 = Rd2;
                  break;
                case "focusin":
                  n = "focus";
                  k5 = Fd2;
                  break;
                case "focusout":
                  n = "blur";
                  k5 = Fd2;
                  break;
                case "beforeblur":
                case "afterblur":
                  k5 = Fd2;
                  break;
                case "click":
                  if (2 === c.button) break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k5 = Bd2;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k5 = Dd2;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k5 = Vd2;
                  break;
                case $e2:
                case af2:
                case bf2:
                  k5 = Hd2;
                  break;
                case cf2:
                  k5 = Xd2;
                  break;
                case "scroll":
                  k5 = vd2;
                  break;
                case "wheel":
                  k5 = Zd2;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k5 = Jd2;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k5 = Td2;
              }
              var t = 0 !== (b3 & 4), J3 = !t && "scroll" === a, x5 = t ? null !== h4 ? h4 + "Capture" : null : h4;
              t = [];
              for (var w2 = d4, u; null !== w2; ) {
                u = w2;
                var F2 = u.stateNode;
                5 === u.tag && null !== F2 && (u = F2, null !== x5 && (F2 = Kb(w2, x5), null != F2 && t.push(tf2(w2, F2, u))));
                if (J3) break;
                w2 = w2.return;
              }
              0 < t.length && (h4 = new k5(h4, n, null, c, e3), g6.push({ event: h4, listeners: t }));
            }
          }
          if (0 === (b3 & 7)) {
            a: {
              h4 = "mouseover" === a || "pointerover" === a;
              k5 = "mouseout" === a || "pointerout" === a;
              if (h4 && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc2(n) || n[uf2])) break a;
              if (k5 || h4) {
                h4 = e3.window === e3 ? e3 : (h4 = e3.ownerDocument) ? h4.defaultView || h4.parentWindow : window;
                if (k5) {
                  if (n = c.relatedTarget || c.toElement, k5 = d4, n = n ? Wc2(n) : null, null !== n && (J3 = Vb(n), n !== J3 || 5 !== n.tag && 6 !== n.tag)) n = null;
                } else k5 = null, n = d4;
                if (k5 !== n) {
                  t = Bd2;
                  F2 = "onMouseLeave";
                  x5 = "onMouseEnter";
                  w2 = "mouse";
                  if ("pointerout" === a || "pointerover" === a) t = Td2, F2 = "onPointerLeave", x5 = "onPointerEnter", w2 = "pointer";
                  J3 = null == k5 ? h4 : ue(k5);
                  u = null == n ? h4 : ue(n);
                  h4 = new t(F2, w2 + "leave", k5, c, e3);
                  h4.target = J3;
                  h4.relatedTarget = u;
                  F2 = null;
                  Wc2(e3) === d4 && (t = new t(x5, w2 + "enter", n, c, e3), t.target = u, t.relatedTarget = J3, F2 = t);
                  J3 = F2;
                  if (k5 && n) b: {
                    t = k5;
                    x5 = n;
                    w2 = 0;
                    for (u = t; u; u = vf2(u)) w2++;
                    u = 0;
                    for (F2 = x5; F2; F2 = vf2(F2)) u++;
                    for (; 0 < w2 - u; ) t = vf2(t), w2--;
                    for (; 0 < u - w2; ) x5 = vf2(x5), u--;
                    for (; w2--; ) {
                      if (t === x5 || null !== x5 && t === x5.alternate) break b;
                      t = vf2(t);
                      x5 = vf2(x5);
                    }
                    t = null;
                  }
                  else t = null;
                  null !== k5 && wf2(g6, h4, k5, t, false);
                  null !== n && null !== J3 && wf2(g6, J3, n, t, true);
                }
              }
            }
            a: {
              h4 = d4 ? ue(d4) : window;
              k5 = h4.nodeName && h4.nodeName.toLowerCase();
              if ("select" === k5 || "input" === k5 && "file" === h4.type) var na2 = ve2;
              else if (me2(h4)) if (we2) na2 = Fe;
              else {
                na2 = De2;
                var xa2 = Ce2;
              }
              else (k5 = h4.nodeName) && "input" === k5.toLowerCase() && ("checkbox" === h4.type || "radio" === h4.type) && (na2 = Ee);
              if (na2 && (na2 = na2(a, d4))) {
                ne(g6, na2, c, e3);
                break a;
              }
              xa2 && xa2(a, h4, d4);
              "focusout" === a && (xa2 = h4._wrapperState) && xa2.controlled && "number" === h4.type && cb(h4, "number", h4.value);
            }
            xa2 = d4 ? ue(d4) : window;
            switch (a) {
              case "focusin":
                if (me2(xa2) || "true" === xa2.contentEditable) Qe2 = xa2, Re2 = d4, Se2 = null;
                break;
              case "focusout":
                Se2 = Re2 = Qe2 = null;
                break;
              case "mousedown":
                Te2 = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Te2 = false;
                Ue2(g6, c, e3);
                break;
              case "selectionchange":
                if (Pe) break;
              case "keydown":
              case "keyup":
                Ue2(g6, c, e3);
            }
            var $a2;
            if (ae) b: {
              switch (a) {
                case "compositionstart":
                  var ba2 = "onCompositionStart";
                  break b;
                case "compositionend":
                  ba2 = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  ba2 = "onCompositionUpdate";
                  break b;
              }
              ba2 = void 0;
            }
            else ie2 ? ge(a, c) && (ba2 = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba2 = "onCompositionStart");
            ba2 && (de2 && "ko" !== c.locale && (ie2 || "onCompositionStart" !== ba2 ? "onCompositionEnd" === ba2 && ie2 && ($a2 = nd()) : (kd2 = e3, ld2 = "value" in kd2 ? kd2.value : kd2.textContent, ie2 = true)), xa2 = oe(d4, ba2), 0 < xa2.length && (ba2 = new Ld2(ba2, a, null, c, e3), g6.push({ event: ba2, listeners: xa2 }), $a2 ? ba2.data = $a2 : ($a2 = he(c), null !== $a2 && (ba2.data = $a2))));
            if ($a2 = ce ? je(a, c) : ke(a, c)) d4 = oe(d4, "onBeforeInput"), 0 < d4.length && (e3 = new Ld2("onBeforeInput", "beforeinput", null, c, e3), g6.push({ event: e3, listeners: d4 }), e3.data = $a2);
          }
          se(g6, b3);
        });
      }
      function tf2(a, b3, c) {
        return { instance: a, listener: b3, currentTarget: c };
      }
      function oe(a, b3) {
        for (var c = b3 + "Capture", d3 = []; null !== a; ) {
          var e2 = a, f5 = e2.stateNode;
          5 === e2.tag && null !== f5 && (e2 = f5, f5 = Kb(a, c), null != f5 && d3.unshift(tf2(a, f5, e2)), f5 = Kb(a, b3), null != f5 && d3.push(tf2(a, f5, e2)));
          a = a.return;
        }
        return d3;
      }
      function vf2(a) {
        if (null === a) return null;
        do
          a = a.return;
        while (a && 5 !== a.tag);
        return a ? a : null;
      }
      function wf2(a, b3, c, d3, e2) {
        for (var f5 = b3._reactName, g5 = []; null !== c && c !== d3; ) {
          var h3 = c, k4 = h3.alternate, l = h3.stateNode;
          if (null !== k4 && k4 === d3) break;
          5 === h3.tag && null !== l && (h3 = l, e2 ? (k4 = Kb(c, f5), null != k4 && g5.unshift(tf2(c, k4, h3))) : e2 || (k4 = Kb(c, f5), null != k4 && g5.push(tf2(c, k4, h3))));
          c = c.return;
        }
        0 !== g5.length && a.push({ event: b3, listeners: g5 });
      }
      var xf2 = /\r\n?/g;
      var yf2 = /\u0000|\uFFFD/g;
      function zf2(a) {
        return ("string" === typeof a ? a : "" + a).replace(xf2, "\n").replace(yf2, "");
      }
      function Af2(a, b3, c) {
        b3 = zf2(b3);
        if (zf2(a) !== b3 && c) throw Error(p(425));
      }
      function Bf2() {
      }
      var Cf2 = null;
      var Df = null;
      function Ef2(a, b3) {
        return "textarea" === a || "noscript" === a || "string" === typeof b3.children || "number" === typeof b3.children || "object" === typeof b3.dangerouslySetInnerHTML && null !== b3.dangerouslySetInnerHTML && null != b3.dangerouslySetInnerHTML.__html;
      }
      var Ff2 = "function" === typeof setTimeout ? setTimeout : void 0;
      var Gf2 = "function" === typeof clearTimeout ? clearTimeout : void 0;
      var Hf2 = "function" === typeof Promise ? Promise : void 0;
      var Jf2 = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf2 ? function(a) {
        return Hf2.resolve(null).then(a).catch(If2);
      } : Ff2;
      function If2(a) {
        setTimeout(function() {
          throw a;
        });
      }
      function Kf2(a, b3) {
        var c = b3, d3 = 0;
        do {
          var e2 = c.nextSibling;
          a.removeChild(c);
          if (e2 && 8 === e2.nodeType) if (c = e2.data, "/$" === c) {
            if (0 === d3) {
              a.removeChild(e2);
              bd2(b3);
              return;
            }
            d3--;
          } else "$" !== c && "$?" !== c && "$!" !== c || d3++;
          c = e2;
        } while (c);
        bd2(b3);
      }
      function Lf2(a) {
        for (; null != a; a = a.nextSibling) {
          var b3 = a.nodeType;
          if (1 === b3 || 3 === b3) break;
          if (8 === b3) {
            b3 = a.data;
            if ("$" === b3 || "$!" === b3 || "$?" === b3) break;
            if ("/$" === b3) return null;
          }
        }
        return a;
      }
      function Mf2(a) {
        a = a.previousSibling;
        for (var b3 = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if ("$" === c || "$!" === c || "$?" === c) {
              if (0 === b3) return a;
              b3--;
            } else "/$" === c && b3++;
          }
          a = a.previousSibling;
        }
        return null;
      }
      var Nf2 = Math.random().toString(36).slice(2);
      var Of2 = "__reactFiber$" + Nf2;
      var Pf2 = "__reactProps$" + Nf2;
      var uf2 = "__reactContainer$" + Nf2;
      var of2 = "__reactEvents$" + Nf2;
      var Qf2 = "__reactListeners$" + Nf2;
      var Rf2 = "__reactHandles$" + Nf2;
      function Wc2(a) {
        var b3 = a[Of2];
        if (b3) return b3;
        for (var c = a.parentNode; c; ) {
          if (b3 = c[uf2] || c[Of2]) {
            c = b3.alternate;
            if (null !== b3.child || null !== c && null !== c.child) for (a = Mf2(a); null !== a; ) {
              if (c = a[Of2]) return c;
              a = Mf2(a);
            }
            return b3;
          }
          a = c;
          c = a.parentNode;
        }
        return null;
      }
      function Cb(a) {
        a = a[Of2] || a[uf2];
        return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
      }
      function ue(a) {
        if (5 === a.tag || 6 === a.tag) return a.stateNode;
        throw Error(p(33));
      }
      function Db(a) {
        return a[Pf2] || null;
      }
      var Sf2 = [];
      var Tf2 = -1;
      function Uf2(a) {
        return { current: a };
      }
      function E3(a) {
        0 > Tf2 || (a.current = Sf2[Tf2], Sf2[Tf2] = null, Tf2--);
      }
      function G2(a, b3) {
        Tf2++;
        Sf2[Tf2] = a.current;
        a.current = b3;
      }
      var Vf2 = {};
      var H = Uf2(Vf2);
      var Wf2 = Uf2(false);
      var Xf2 = Vf2;
      function Yf2(a, b3) {
        var c = a.type.contextTypes;
        if (!c) return Vf2;
        var d3 = a.stateNode;
        if (d3 && d3.__reactInternalMemoizedUnmaskedChildContext === b3) return d3.__reactInternalMemoizedMaskedChildContext;
        var e2 = {}, f5;
        for (f5 in c) e2[f5] = b3[f5];
        d3 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b3, a.__reactInternalMemoizedMaskedChildContext = e2);
        return e2;
      }
      function Zf2(a) {
        a = a.childContextTypes;
        return null !== a && void 0 !== a;
      }
      function $f2() {
        E3(Wf2);
        E3(H);
      }
      function ag(a, b3, c) {
        if (H.current !== Vf2) throw Error(p(168));
        G2(H, b3);
        G2(Wf2, c);
      }
      function bg(a, b3, c) {
        var d3 = a.stateNode;
        b3 = b3.childContextTypes;
        if ("function" !== typeof d3.getChildContext) return c;
        d3 = d3.getChildContext();
        for (var e2 in d3) if (!(e2 in b3)) throw Error(p(108, Ra2(a) || "Unknown", e2));
        return A7({}, c, d3);
      }
      function cg(a) {
        a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf2;
        Xf2 = H.current;
        G2(H, a);
        G2(Wf2, Wf2.current);
        return true;
      }
      function dg(a, b3, c) {
        var d3 = a.stateNode;
        if (!d3) throw Error(p(169));
        c ? (a = bg(a, b3, Xf2), d3.__reactInternalMemoizedMergedChildContext = a, E3(Wf2), E3(H), G2(H, a)) : E3(Wf2);
        G2(Wf2, c);
      }
      var eg = null;
      var fg = false;
      var gg = false;
      function hg(a) {
        null === eg ? eg = [a] : eg.push(a);
      }
      function ig(a) {
        fg = true;
        hg(a);
      }
      function jg() {
        if (!gg && null !== eg) {
          gg = true;
          var a = 0, b3 = C4;
          try {
            var c = eg;
            for (C4 = 1; a < c.length; a++) {
              var d3 = c[a];
              do
                d3 = d3(true);
              while (null !== d3);
            }
            eg = null;
            fg = false;
          } catch (e2) {
            throw null !== eg && (eg = eg.slice(a + 1)), ac2(fc2, jg), e2;
          } finally {
            C4 = b3, gg = false;
          }
        }
        return null;
      }
      var kg = [];
      var lg = 0;
      var mg = null;
      var ng = 0;
      var og = [];
      var pg = 0;
      var qg = null;
      var rg = 1;
      var sg = "";
      function tg(a, b3) {
        kg[lg++] = ng;
        kg[lg++] = mg;
        mg = a;
        ng = b3;
      }
      function ug(a, b3, c) {
        og[pg++] = rg;
        og[pg++] = sg;
        og[pg++] = qg;
        qg = a;
        var d3 = rg;
        a = sg;
        var e2 = 32 - oc2(d3) - 1;
        d3 &= ~(1 << e2);
        c += 1;
        var f5 = 32 - oc2(b3) + e2;
        if (30 < f5) {
          var g5 = e2 - e2 % 5;
          f5 = (d3 & (1 << g5) - 1).toString(32);
          d3 >>= g5;
          e2 -= g5;
          rg = 1 << 32 - oc2(b3) + e2 | c << e2 | d3;
          sg = f5 + a;
        } else rg = 1 << f5 | c << e2 | d3, sg = a;
      }
      function vg(a) {
        null !== a.return && (tg(a, 1), ug(a, 1, 0));
      }
      function wg(a) {
        for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
        for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
      }
      var xg = null;
      var yg = null;
      var I4 = false;
      var zg = null;
      function Ag(a, b3) {
        var c = Bg(5, null, null, 0);
        c.elementType = "DELETED";
        c.stateNode = b3;
        c.return = a;
        b3 = a.deletions;
        null === b3 ? (a.deletions = [c], a.flags |= 16) : b3.push(c);
      }
      function Cg(a, b3) {
        switch (a.tag) {
          case 5:
            var c = a.type;
            b3 = 1 !== b3.nodeType || c.toLowerCase() !== b3.nodeName.toLowerCase() ? null : b3;
            return null !== b3 ? (a.stateNode = b3, xg = a, yg = Lf2(b3.firstChild), true) : false;
          case 6:
            return b3 = "" === a.pendingProps || 3 !== b3.nodeType ? null : b3, null !== b3 ? (a.stateNode = b3, xg = a, yg = null, true) : false;
          case 13:
            return b3 = 8 !== b3.nodeType ? null : b3, null !== b3 ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b3, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b3, c.return = a, a.child = c, xg = a, yg = null, true) : false;
          default:
            return false;
        }
      }
      function Dg(a) {
        return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
      }
      function Eg(a) {
        if (I4) {
          var b3 = yg;
          if (b3) {
            var c = b3;
            if (!Cg(a, b3)) {
              if (Dg(a)) throw Error(p(418));
              b3 = Lf2(c.nextSibling);
              var d3 = xg;
              b3 && Cg(a, b3) ? Ag(d3, c) : (a.flags = a.flags & -4097 | 2, I4 = false, xg = a);
            }
          } else {
            if (Dg(a)) throw Error(p(418));
            a.flags = a.flags & -4097 | 2;
            I4 = false;
            xg = a;
          }
        }
      }
      function Fg(a) {
        for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
        xg = a;
      }
      function Gg(a) {
        if (a !== xg) return false;
        if (!I4) return Fg(a), I4 = true, false;
        var b3;
        (b3 = 3 !== a.tag) && !(b3 = 5 !== a.tag) && (b3 = a.type, b3 = "head" !== b3 && "body" !== b3 && !Ef2(a.type, a.memoizedProps));
        if (b3 && (b3 = yg)) {
          if (Dg(a)) throw Hg(), Error(p(418));
          for (; b3; ) Ag(a, b3), b3 = Lf2(b3.nextSibling);
        }
        Fg(a);
        if (13 === a.tag) {
          a = a.memoizedState;
          a = null !== a ? a.dehydrated : null;
          if (!a) throw Error(p(317));
          a: {
            a = a.nextSibling;
            for (b3 = 0; a; ) {
              if (8 === a.nodeType) {
                var c = a.data;
                if ("/$" === c) {
                  if (0 === b3) {
                    yg = Lf2(a.nextSibling);
                    break a;
                  }
                  b3--;
                } else "$" !== c && "$!" !== c && "$?" !== c || b3++;
              }
              a = a.nextSibling;
            }
            yg = null;
          }
        } else yg = xg ? Lf2(a.stateNode.nextSibling) : null;
        return true;
      }
      function Hg() {
        for (var a = yg; a; ) a = Lf2(a.nextSibling);
      }
      function Ig() {
        yg = xg = null;
        I4 = false;
      }
      function Jg(a) {
        null === zg ? zg = [a] : zg.push(a);
      }
      var Kg = ua2.ReactCurrentBatchConfig;
      function Lg(a, b3, c) {
        a = c.ref;
        if (null !== a && "function" !== typeof a && "object" !== typeof a) {
          if (c._owner) {
            c = c._owner;
            if (c) {
              if (1 !== c.tag) throw Error(p(309));
              var d3 = c.stateNode;
            }
            if (!d3) throw Error(p(147, a));
            var e2 = d3, f5 = "" + a;
            if (null !== b3 && null !== b3.ref && "function" === typeof b3.ref && b3.ref._stringRef === f5) return b3.ref;
            b3 = function(a2) {
              var b4 = e2.refs;
              null === a2 ? delete b4[f5] : b4[f5] = a2;
            };
            b3._stringRef = f5;
            return b3;
          }
          if ("string" !== typeof a) throw Error(p(284));
          if (!c._owner) throw Error(p(290, a));
        }
        return a;
      }
      function Mg(a, b3) {
        a = Object.prototype.toString.call(b3);
        throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b3).join(", ") + "}" : a));
      }
      function Ng(a) {
        var b3 = a._init;
        return b3(a._payload);
      }
      function Og(a) {
        function b3(b4, c2) {
          if (a) {
            var d4 = b4.deletions;
            null === d4 ? (b4.deletions = [c2], b4.flags |= 16) : d4.push(c2);
          }
        }
        function c(c2, d4) {
          if (!a) return null;
          for (; null !== d4; ) b3(c2, d4), d4 = d4.sibling;
          return null;
        }
        function d3(a2, b4) {
          for (a2 = /* @__PURE__ */ new Map(); null !== b4; ) null !== b4.key ? a2.set(b4.key, b4) : a2.set(b4.index, b4), b4 = b4.sibling;
          return a2;
        }
        function e2(a2, b4) {
          a2 = Pg(a2, b4);
          a2.index = 0;
          a2.sibling = null;
          return a2;
        }
        function f5(b4, c2, d4) {
          b4.index = d4;
          if (!a) return b4.flags |= 1048576, c2;
          d4 = b4.alternate;
          if (null !== d4) return d4 = d4.index, d4 < c2 ? (b4.flags |= 2, c2) : d4;
          b4.flags |= 2;
          return c2;
        }
        function g5(b4) {
          a && null === b4.alternate && (b4.flags |= 2);
          return b4;
        }
        function h3(a2, b4, c2, d4) {
          if (null === b4 || 6 !== b4.tag) return b4 = Qg(c2, a2.mode, d4), b4.return = a2, b4;
          b4 = e2(b4, c2);
          b4.return = a2;
          return b4;
        }
        function k4(a2, b4, c2, d4) {
          var f6 = c2.type;
          if (f6 === ya2) return m(a2, b4, c2.props.children, d4, c2.key);
          if (null !== b4 && (b4.elementType === f6 || "object" === typeof f6 && null !== f6 && f6.$$typeof === Ha2 && Ng(f6) === b4.type)) return d4 = e2(b4, c2.props), d4.ref = Lg(a2, b4, c2), d4.return = a2, d4;
          d4 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d4);
          d4.ref = Lg(a2, b4, c2);
          d4.return = a2;
          return d4;
        }
        function l(a2, b4, c2, d4) {
          if (null === b4 || 4 !== b4.tag || b4.stateNode.containerInfo !== c2.containerInfo || b4.stateNode.implementation !== c2.implementation) return b4 = Sg(c2, a2.mode, d4), b4.return = a2, b4;
          b4 = e2(b4, c2.children || []);
          b4.return = a2;
          return b4;
        }
        function m(a2, b4, c2, d4, f6) {
          if (null === b4 || 7 !== b4.tag) return b4 = Tg(c2, a2.mode, d4, f6), b4.return = a2, b4;
          b4 = e2(b4, c2);
          b4.return = a2;
          return b4;
        }
        function q5(a2, b4, c2) {
          if ("string" === typeof b4 && "" !== b4 || "number" === typeof b4) return b4 = Qg("" + b4, a2.mode, c2), b4.return = a2, b4;
          if ("object" === typeof b4 && null !== b4) {
            switch (b4.$$typeof) {
              case va2:
                return c2 = Rg(b4.type, b4.key, b4.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b4), c2.return = a2, c2;
              case wa2:
                return b4 = Sg(b4, a2.mode, c2), b4.return = a2, b4;
              case Ha2:
                var d4 = b4._init;
                return q5(a2, d4(b4._payload), c2);
            }
            if (eb(b4) || Ka2(b4)) return b4 = Tg(b4, a2.mode, c2, null), b4.return = a2, b4;
            Mg(a2, b4);
          }
          return null;
        }
        function r(a2, b4, c2, d4) {
          var e3 = null !== b4 ? b4.key : null;
          if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e3 ? null : h3(a2, b4, "" + c2, d4);
          if ("object" === typeof c2 && null !== c2) {
            switch (c2.$$typeof) {
              case va2:
                return c2.key === e3 ? k4(a2, b4, c2, d4) : null;
              case wa2:
                return c2.key === e3 ? l(a2, b4, c2, d4) : null;
              case Ha2:
                return e3 = c2._init, r(
                  a2,
                  b4,
                  e3(c2._payload),
                  d4
                );
            }
            if (eb(c2) || Ka2(c2)) return null !== e3 ? null : m(a2, b4, c2, d4, null);
            Mg(a2, c2);
          }
          return null;
        }
        function y2(a2, b4, c2, d4, e3) {
          if ("string" === typeof d4 && "" !== d4 || "number" === typeof d4) return a2 = a2.get(c2) || null, h3(b4, a2, "" + d4, e3);
          if ("object" === typeof d4 && null !== d4) {
            switch (d4.$$typeof) {
              case va2:
                return a2 = a2.get(null === d4.key ? c2 : d4.key) || null, k4(b4, a2, d4, e3);
              case wa2:
                return a2 = a2.get(null === d4.key ? c2 : d4.key) || null, l(b4, a2, d4, e3);
              case Ha2:
                var f6 = d4._init;
                return y2(a2, b4, c2, f6(d4._payload), e3);
            }
            if (eb(d4) || Ka2(d4)) return a2 = a2.get(c2) || null, m(b4, a2, d4, e3, null);
            Mg(b4, d4);
          }
          return null;
        }
        function n(e3, g6, h4, k5) {
          for (var l2 = null, m2 = null, u = g6, w2 = g6 = 0, x5 = null; null !== u && w2 < h4.length; w2++) {
            u.index > w2 ? (x5 = u, u = null) : x5 = u.sibling;
            var n2 = r(e3, u, h4[w2], k5);
            if (null === n2) {
              null === u && (u = x5);
              break;
            }
            a && u && null === n2.alternate && b3(e3, u);
            g6 = f5(n2, g6, w2);
            null === m2 ? l2 = n2 : m2.sibling = n2;
            m2 = n2;
            u = x5;
          }
          if (w2 === h4.length) return c(e3, u), I4 && tg(e3, w2), l2;
          if (null === u) {
            for (; w2 < h4.length; w2++) u = q5(e3, h4[w2], k5), null !== u && (g6 = f5(u, g6, w2), null === m2 ? l2 = u : m2.sibling = u, m2 = u);
            I4 && tg(e3, w2);
            return l2;
          }
          for (u = d3(e3, u); w2 < h4.length; w2++) x5 = y2(u, e3, w2, h4[w2], k5), null !== x5 && (a && null !== x5.alternate && u.delete(null === x5.key ? w2 : x5.key), g6 = f5(x5, g6, w2), null === m2 ? l2 = x5 : m2.sibling = x5, m2 = x5);
          a && u.forEach(function(a2) {
            return b3(e3, a2);
          });
          I4 && tg(e3, w2);
          return l2;
        }
        function t(e3, g6, h4, k5) {
          var l2 = Ka2(h4);
          if ("function" !== typeof l2) throw Error(p(150));
          h4 = l2.call(h4);
          if (null == h4) throw Error(p(151));
          for (var u = l2 = null, m2 = g6, w2 = g6 = 0, x5 = null, n2 = h4.next(); null !== m2 && !n2.done; w2++, n2 = h4.next()) {
            m2.index > w2 ? (x5 = m2, m2 = null) : x5 = m2.sibling;
            var t2 = r(e3, m2, n2.value, k5);
            if (null === t2) {
              null === m2 && (m2 = x5);
              break;
            }
            a && m2 && null === t2.alternate && b3(e3, m2);
            g6 = f5(t2, g6, w2);
            null === u ? l2 = t2 : u.sibling = t2;
            u = t2;
            m2 = x5;
          }
          if (n2.done) return c(
            e3,
            m2
          ), I4 && tg(e3, w2), l2;
          if (null === m2) {
            for (; !n2.done; w2++, n2 = h4.next()) n2 = q5(e3, n2.value, k5), null !== n2 && (g6 = f5(n2, g6, w2), null === u ? l2 = n2 : u.sibling = n2, u = n2);
            I4 && tg(e3, w2);
            return l2;
          }
          for (m2 = d3(e3, m2); !n2.done; w2++, n2 = h4.next()) n2 = y2(m2, e3, w2, n2.value, k5), null !== n2 && (a && null !== n2.alternate && m2.delete(null === n2.key ? w2 : n2.key), g6 = f5(n2, g6, w2), null === u ? l2 = n2 : u.sibling = n2, u = n2);
          a && m2.forEach(function(a2) {
            return b3(e3, a2);
          });
          I4 && tg(e3, w2);
          return l2;
        }
        function J3(a2, d4, f6, h4) {
          "object" === typeof f6 && null !== f6 && f6.type === ya2 && null === f6.key && (f6 = f6.props.children);
          if ("object" === typeof f6 && null !== f6) {
            switch (f6.$$typeof) {
              case va2:
                a: {
                  for (var k5 = f6.key, l2 = d4; null !== l2; ) {
                    if (l2.key === k5) {
                      k5 = f6.type;
                      if (k5 === ya2) {
                        if (7 === l2.tag) {
                          c(a2, l2.sibling);
                          d4 = e2(l2, f6.props.children);
                          d4.return = a2;
                          a2 = d4;
                          break a;
                        }
                      } else if (l2.elementType === k5 || "object" === typeof k5 && null !== k5 && k5.$$typeof === Ha2 && Ng(k5) === l2.type) {
                        c(a2, l2.sibling);
                        d4 = e2(l2, f6.props);
                        d4.ref = Lg(a2, l2, f6);
                        d4.return = a2;
                        a2 = d4;
                        break a;
                      }
                      c(a2, l2);
                      break;
                    } else b3(a2, l2);
                    l2 = l2.sibling;
                  }
                  f6.type === ya2 ? (d4 = Tg(f6.props.children, a2.mode, h4, f6.key), d4.return = a2, a2 = d4) : (h4 = Rg(f6.type, f6.key, f6.props, null, a2.mode, h4), h4.ref = Lg(a2, d4, f6), h4.return = a2, a2 = h4);
                }
                return g5(a2);
              case wa2:
                a: {
                  for (l2 = f6.key; null !== d4; ) {
                    if (d4.key === l2) if (4 === d4.tag && d4.stateNode.containerInfo === f6.containerInfo && d4.stateNode.implementation === f6.implementation) {
                      c(a2, d4.sibling);
                      d4 = e2(d4, f6.children || []);
                      d4.return = a2;
                      a2 = d4;
                      break a;
                    } else {
                      c(a2, d4);
                      break;
                    }
                    else b3(a2, d4);
                    d4 = d4.sibling;
                  }
                  d4 = Sg(f6, a2.mode, h4);
                  d4.return = a2;
                  a2 = d4;
                }
                return g5(a2);
              case Ha2:
                return l2 = f6._init, J3(a2, d4, l2(f6._payload), h4);
            }
            if (eb(f6)) return n(a2, d4, f6, h4);
            if (Ka2(f6)) return t(a2, d4, f6, h4);
            Mg(a2, f6);
          }
          return "string" === typeof f6 && "" !== f6 || "number" === typeof f6 ? (f6 = "" + f6, null !== d4 && 6 === d4.tag ? (c(a2, d4.sibling), d4 = e2(d4, f6), d4.return = a2, a2 = d4) : (c(a2, d4), d4 = Qg(f6, a2.mode, h4), d4.return = a2, a2 = d4), g5(a2)) : c(a2, d4);
        }
        return J3;
      }
      var Ug = Og(true);
      var Vg = Og(false);
      var Wg = Uf2(null);
      var Xg = null;
      var Yg = null;
      var Zg = null;
      function $g() {
        Zg = Yg = Xg = null;
      }
      function ah2(a) {
        var b3 = Wg.current;
        E3(Wg);
        a._currentValue = b3;
      }
      function bh2(a, b3, c) {
        for (; null !== a; ) {
          var d3 = a.alternate;
          (a.childLanes & b3) !== b3 ? (a.childLanes |= b3, null !== d3 && (d3.childLanes |= b3)) : null !== d3 && (d3.childLanes & b3) !== b3 && (d3.childLanes |= b3);
          if (a === c) break;
          a = a.return;
        }
      }
      function ch(a, b3) {
        Xg = a;
        Zg = Yg = null;
        a = a.dependencies;
        null !== a && null !== a.firstContext && (0 !== (a.lanes & b3) && (dh2 = true), a.firstContext = null);
      }
      function eh2(a) {
        var b3 = a._currentValue;
        if (Zg !== a) if (a = { context: a, memoizedValue: b3, next: null }, null === Yg) {
          if (null === Xg) throw Error(p(308));
          Yg = a;
          Xg.dependencies = { lanes: 0, firstContext: a };
        } else Yg = Yg.next = a;
        return b3;
      }
      var fh2 = null;
      function gh2(a) {
        null === fh2 ? fh2 = [a] : fh2.push(a);
      }
      function hh2(a, b3, c, d3) {
        var e2 = b3.interleaved;
        null === e2 ? (c.next = c, gh2(b3)) : (c.next = e2.next, e2.next = c);
        b3.interleaved = c;
        return ih2(a, d3);
      }
      function ih2(a, b3) {
        a.lanes |= b3;
        var c = a.alternate;
        null !== c && (c.lanes |= b3);
        c = a;
        for (a = a.return; null !== a; ) a.childLanes |= b3, c = a.alternate, null !== c && (c.childLanes |= b3), c = a, a = a.return;
        return 3 === c.tag ? c.stateNode : null;
      }
      var jh2 = false;
      function kh2(a) {
        a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
      }
      function lh2(a, b3) {
        a = a.updateQueue;
        b3.updateQueue === a && (b3.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
      }
      function mh2(a, b3) {
        return { eventTime: a, lane: b3, tag: 0, payload: null, callback: null, next: null };
      }
      function nh2(a, b3, c) {
        var d3 = a.updateQueue;
        if (null === d3) return null;
        d3 = d3.shared;
        if (0 !== (K3 & 2)) {
          var e2 = d3.pending;
          null === e2 ? b3.next = b3 : (b3.next = e2.next, e2.next = b3);
          d3.pending = b3;
          return ih2(a, c);
        }
        e2 = d3.interleaved;
        null === e2 ? (b3.next = b3, gh2(d3)) : (b3.next = e2.next, e2.next = b3);
        d3.interleaved = b3;
        return ih2(a, c);
      }
      function oh2(a, b3, c) {
        b3 = b3.updateQueue;
        if (null !== b3 && (b3 = b3.shared, 0 !== (c & 4194240))) {
          var d3 = b3.lanes;
          d3 &= a.pendingLanes;
          c |= d3;
          b3.lanes = c;
          Cc2(a, c);
        }
      }
      function ph2(a, b3) {
        var c = a.updateQueue, d3 = a.alternate;
        if (null !== d3 && (d3 = d3.updateQueue, c === d3)) {
          var e2 = null, f5 = null;
          c = c.firstBaseUpdate;
          if (null !== c) {
            do {
              var g5 = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
              null === f5 ? e2 = f5 = g5 : f5 = f5.next = g5;
              c = c.next;
            } while (null !== c);
            null === f5 ? e2 = f5 = b3 : f5 = f5.next = b3;
          } else e2 = f5 = b3;
          c = { baseState: d3.baseState, firstBaseUpdate: e2, lastBaseUpdate: f5, shared: d3.shared, effects: d3.effects };
          a.updateQueue = c;
          return;
        }
        a = c.lastBaseUpdate;
        null === a ? c.firstBaseUpdate = b3 : a.next = b3;
        c.lastBaseUpdate = b3;
      }
      function qh2(a, b3, c, d3) {
        var e2 = a.updateQueue;
        jh2 = false;
        var f5 = e2.firstBaseUpdate, g5 = e2.lastBaseUpdate, h3 = e2.shared.pending;
        if (null !== h3) {
          e2.shared.pending = null;
          var k4 = h3, l = k4.next;
          k4.next = null;
          null === g5 ? f5 = l : g5.next = l;
          g5 = k4;
          var m = a.alternate;
          null !== m && (m = m.updateQueue, h3 = m.lastBaseUpdate, h3 !== g5 && (null === h3 ? m.firstBaseUpdate = l : h3.next = l, m.lastBaseUpdate = k4));
        }
        if (null !== f5) {
          var q5 = e2.baseState;
          g5 = 0;
          m = l = k4 = null;
          h3 = f5;
          do {
            var r = h3.lane, y2 = h3.eventTime;
            if ((d3 & r) === r) {
              null !== m && (m = m.next = {
                eventTime: y2,
                lane: 0,
                tag: h3.tag,
                payload: h3.payload,
                callback: h3.callback,
                next: null
              });
              a: {
                var n = a, t = h3;
                r = b3;
                y2 = c;
                switch (t.tag) {
                  case 1:
                    n = t.payload;
                    if ("function" === typeof n) {
                      q5 = n.call(y2, q5, r);
                      break a;
                    }
                    q5 = n;
                    break a;
                  case 3:
                    n.flags = n.flags & -65537 | 128;
                  case 0:
                    n = t.payload;
                    r = "function" === typeof n ? n.call(y2, q5, r) : n;
                    if (null === r || void 0 === r) break a;
                    q5 = A7({}, q5, r);
                    break a;
                  case 2:
                    jh2 = true;
                }
              }
              null !== h3.callback && 0 !== h3.lane && (a.flags |= 64, r = e2.effects, null === r ? e2.effects = [h3] : r.push(h3));
            } else y2 = { eventTime: y2, lane: r, tag: h3.tag, payload: h3.payload, callback: h3.callback, next: null }, null === m ? (l = m = y2, k4 = q5) : m = m.next = y2, g5 |= r;
            h3 = h3.next;
            if (null === h3) if (h3 = e2.shared.pending, null === h3) break;
            else r = h3, h3 = r.next, r.next = null, e2.lastBaseUpdate = r, e2.shared.pending = null;
          } while (1);
          null === m && (k4 = q5);
          e2.baseState = k4;
          e2.firstBaseUpdate = l;
          e2.lastBaseUpdate = m;
          b3 = e2.shared.interleaved;
          if (null !== b3) {
            e2 = b3;
            do
              g5 |= e2.lane, e2 = e2.next;
            while (e2 !== b3);
          } else null === f5 && (e2.shared.lanes = 0);
          rh2 |= g5;
          a.lanes = g5;
          a.memoizedState = q5;
        }
      }
      function sh2(a, b3, c) {
        a = b3.effects;
        b3.effects = null;
        if (null !== a) for (b3 = 0; b3 < a.length; b3++) {
          var d3 = a[b3], e2 = d3.callback;
          if (null !== e2) {
            d3.callback = null;
            d3 = c;
            if ("function" !== typeof e2) throw Error(p(191, e2));
            e2.call(d3);
          }
        }
      }
      var th2 = {};
      var uh2 = Uf2(th2);
      var vh2 = Uf2(th2);
      var wh2 = Uf2(th2);
      function xh2(a) {
        if (a === th2) throw Error(p(174));
        return a;
      }
      function yh2(a, b3) {
        G2(wh2, b3);
        G2(vh2, a);
        G2(uh2, th2);
        a = b3.nodeType;
        switch (a) {
          case 9:
          case 11:
            b3 = (b3 = b3.documentElement) ? b3.namespaceURI : lb(null, "");
            break;
          default:
            a = 8 === a ? b3.parentNode : b3, b3 = a.namespaceURI || null, a = a.tagName, b3 = lb(b3, a);
        }
        E3(uh2);
        G2(uh2, b3);
      }
      function zh2() {
        E3(uh2);
        E3(vh2);
        E3(wh2);
      }
      function Ah2(a) {
        xh2(wh2.current);
        var b3 = xh2(uh2.current);
        var c = lb(b3, a.type);
        b3 !== c && (G2(vh2, a), G2(uh2, c));
      }
      function Bh2(a) {
        vh2.current === a && (E3(uh2), E3(vh2));
      }
      var L5 = Uf2(0);
      function Ch2(a) {
        for (var b3 = a; null !== b3; ) {
          if (13 === b3.tag) {
            var c = b3.memoizedState;
            if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b3;
          } else if (19 === b3.tag && void 0 !== b3.memoizedProps.revealOrder) {
            if (0 !== (b3.flags & 128)) return b3;
          } else if (null !== b3.child) {
            b3.child.return = b3;
            b3 = b3.child;
            continue;
          }
          if (b3 === a) break;
          for (; null === b3.sibling; ) {
            if (null === b3.return || b3.return === a) return null;
            b3 = b3.return;
          }
          b3.sibling.return = b3.return;
          b3 = b3.sibling;
        }
        return null;
      }
      var Dh2 = [];
      function Eh2() {
        for (var a = 0; a < Dh2.length; a++) Dh2[a]._workInProgressVersionPrimary = null;
        Dh2.length = 0;
      }
      var Fh2 = ua2.ReactCurrentDispatcher;
      var Gh2 = ua2.ReactCurrentBatchConfig;
      var Hh2 = 0;
      var M3 = null;
      var N4 = null;
      var O6 = null;
      var Ih2 = false;
      var Jh2 = false;
      var Kh2 = 0;
      var Lh2 = 0;
      function P6() {
        throw Error(p(321));
      }
      function Mh2(a, b3) {
        if (null === b3) return false;
        for (var c = 0; c < b3.length && c < a.length; c++) if (!He2(a[c], b3[c])) return false;
        return true;
      }
      function Nh2(a, b3, c, d3, e2, f5) {
        Hh2 = f5;
        M3 = b3;
        b3.memoizedState = null;
        b3.updateQueue = null;
        b3.lanes = 0;
        Fh2.current = null === a || null === a.memoizedState ? Oh2 : Ph2;
        a = c(d3, e2);
        if (Jh2) {
          f5 = 0;
          do {
            Jh2 = false;
            Kh2 = 0;
            if (25 <= f5) throw Error(p(301));
            f5 += 1;
            O6 = N4 = null;
            b3.updateQueue = null;
            Fh2.current = Qh2;
            a = c(d3, e2);
          } while (Jh2);
        }
        Fh2.current = Rh2;
        b3 = null !== N4 && null !== N4.next;
        Hh2 = 0;
        O6 = N4 = M3 = null;
        Ih2 = false;
        if (b3) throw Error(p(300));
        return a;
      }
      function Sh2() {
        var a = 0 !== Kh2;
        Kh2 = 0;
        return a;
      }
      function Th2() {
        var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        null === O6 ? M3.memoizedState = O6 = a : O6 = O6.next = a;
        return O6;
      }
      function Uh2() {
        if (null === N4) {
          var a = M3.alternate;
          a = null !== a ? a.memoizedState : null;
        } else a = N4.next;
        var b3 = null === O6 ? M3.memoizedState : O6.next;
        if (null !== b3) O6 = b3, N4 = a;
        else {
          if (null === a) throw Error(p(310));
          N4 = a;
          a = { memoizedState: N4.memoizedState, baseState: N4.baseState, baseQueue: N4.baseQueue, queue: N4.queue, next: null };
          null === O6 ? M3.memoizedState = O6 = a : O6 = O6.next = a;
        }
        return O6;
      }
      function Vh2(a, b3) {
        return "function" === typeof b3 ? b3(a) : b3;
      }
      function Wh2(a) {
        var b3 = Uh2(), c = b3.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d3 = N4, e2 = d3.baseQueue, f5 = c.pending;
        if (null !== f5) {
          if (null !== e2) {
            var g5 = e2.next;
            e2.next = f5.next;
            f5.next = g5;
          }
          d3.baseQueue = e2 = f5;
          c.pending = null;
        }
        if (null !== e2) {
          f5 = e2.next;
          d3 = d3.baseState;
          var h3 = g5 = null, k4 = null, l = f5;
          do {
            var m = l.lane;
            if ((Hh2 & m) === m) null !== k4 && (k4 = k4.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), d3 = l.hasEagerState ? l.eagerState : a(d3, l.action);
            else {
              var q5 = {
                lane: m,
                action: l.action,
                hasEagerState: l.hasEagerState,
                eagerState: l.eagerState,
                next: null
              };
              null === k4 ? (h3 = k4 = q5, g5 = d3) : k4 = k4.next = q5;
              M3.lanes |= m;
              rh2 |= m;
            }
            l = l.next;
          } while (null !== l && l !== f5);
          null === k4 ? g5 = d3 : k4.next = h3;
          He2(d3, b3.memoizedState) || (dh2 = true);
          b3.memoizedState = d3;
          b3.baseState = g5;
          b3.baseQueue = k4;
          c.lastRenderedState = d3;
        }
        a = c.interleaved;
        if (null !== a) {
          e2 = a;
          do
            f5 = e2.lane, M3.lanes |= f5, rh2 |= f5, e2 = e2.next;
          while (e2 !== a);
        } else null === e2 && (c.lanes = 0);
        return [b3.memoizedState, c.dispatch];
      }
      function Xh2(a) {
        var b3 = Uh2(), c = b3.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d3 = c.dispatch, e2 = c.pending, f5 = b3.memoizedState;
        if (null !== e2) {
          c.pending = null;
          var g5 = e2 = e2.next;
          do
            f5 = a(f5, g5.action), g5 = g5.next;
          while (g5 !== e2);
          He2(f5, b3.memoizedState) || (dh2 = true);
          b3.memoizedState = f5;
          null === b3.baseQueue && (b3.baseState = f5);
          c.lastRenderedState = f5;
        }
        return [f5, d3];
      }
      function Yh2() {
      }
      function Zh2(a, b3) {
        var c = M3, d3 = Uh2(), e2 = b3(), f5 = !He2(d3.memoizedState, e2);
        f5 && (d3.memoizedState = e2, dh2 = true);
        d3 = d3.queue;
        $h2(ai2.bind(null, c, d3, a), [a]);
        if (d3.getSnapshot !== b3 || f5 || null !== O6 && O6.memoizedState.tag & 1) {
          c.flags |= 2048;
          bi2(9, ci2.bind(null, c, d3, e2, b3), void 0, null);
          if (null === Q2) throw Error(p(349));
          0 !== (Hh2 & 30) || di2(c, b3, e2);
        }
        return e2;
      }
      function di2(a, b3, c) {
        a.flags |= 16384;
        a = { getSnapshot: b3, value: c };
        b3 = M3.updateQueue;
        null === b3 ? (b3 = { lastEffect: null, stores: null }, M3.updateQueue = b3, b3.stores = [a]) : (c = b3.stores, null === c ? b3.stores = [a] : c.push(a));
      }
      function ci2(a, b3, c, d3) {
        b3.value = c;
        b3.getSnapshot = d3;
        ei2(b3) && fi2(a);
      }
      function ai2(a, b3, c) {
        return c(function() {
          ei2(b3) && fi2(a);
        });
      }
      function ei2(a) {
        var b3 = a.getSnapshot;
        a = a.value;
        try {
          var c = b3();
          return !He2(a, c);
        } catch (d3) {
          return true;
        }
      }
      function fi2(a) {
        var b3 = ih2(a, 1);
        null !== b3 && gi2(b3, a, 1, -1);
      }
      function hi2(a) {
        var b3 = Th2();
        "function" === typeof a && (a = a());
        b3.memoizedState = b3.baseState = a;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh2, lastRenderedState: a };
        b3.queue = a;
        a = a.dispatch = ii2.bind(null, M3, a);
        return [b3.memoizedState, a];
      }
      function bi2(a, b3, c, d3) {
        a = { tag: a, create: b3, destroy: c, deps: d3, next: null };
        b3 = M3.updateQueue;
        null === b3 ? (b3 = { lastEffect: null, stores: null }, M3.updateQueue = b3, b3.lastEffect = a.next = a) : (c = b3.lastEffect, null === c ? b3.lastEffect = a.next = a : (d3 = c.next, c.next = a, a.next = d3, b3.lastEffect = a));
        return a;
      }
      function ji2() {
        return Uh2().memoizedState;
      }
      function ki2(a, b3, c, d3) {
        var e2 = Th2();
        M3.flags |= a;
        e2.memoizedState = bi2(1 | b3, c, void 0, void 0 === d3 ? null : d3);
      }
      function li2(a, b3, c, d3) {
        var e2 = Uh2();
        d3 = void 0 === d3 ? null : d3;
        var f5 = void 0;
        if (null !== N4) {
          var g5 = N4.memoizedState;
          f5 = g5.destroy;
          if (null !== d3 && Mh2(d3, g5.deps)) {
            e2.memoizedState = bi2(b3, c, f5, d3);
            return;
          }
        }
        M3.flags |= a;
        e2.memoizedState = bi2(1 | b3, c, f5, d3);
      }
      function mi2(a, b3) {
        return ki2(8390656, 8, a, b3);
      }
      function $h2(a, b3) {
        return li2(2048, 8, a, b3);
      }
      function ni2(a, b3) {
        return li2(4, 2, a, b3);
      }
      function oi2(a, b3) {
        return li2(4, 4, a, b3);
      }
      function pi2(a, b3) {
        if ("function" === typeof b3) return a = a(), b3(a), function() {
          b3(null);
        };
        if (null !== b3 && void 0 !== b3) return a = a(), b3.current = a, function() {
          b3.current = null;
        };
      }
      function qi2(a, b3, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return li2(4, 4, pi2.bind(null, b3, a), c);
      }
      function ri2() {
      }
      function si2(a, b3) {
        var c = Uh2();
        b3 = void 0 === b3 ? null : b3;
        var d3 = c.memoizedState;
        if (null !== d3 && null !== b3 && Mh2(b3, d3[1])) return d3[0];
        c.memoizedState = [a, b3];
        return a;
      }
      function ti2(a, b3) {
        var c = Uh2();
        b3 = void 0 === b3 ? null : b3;
        var d3 = c.memoizedState;
        if (null !== d3 && null !== b3 && Mh2(b3, d3[1])) return d3[0];
        a = a();
        c.memoizedState = [a, b3];
        return a;
      }
      function ui2(a, b3, c) {
        if (0 === (Hh2 & 21)) return a.baseState && (a.baseState = false, dh2 = true), a.memoizedState = c;
        He2(c, b3) || (c = yc2(), M3.lanes |= c, rh2 |= c, a.baseState = true);
        return b3;
      }
      function vi2(a, b3) {
        var c = C4;
        C4 = 0 !== c && 4 > c ? c : 4;
        a(true);
        var d3 = Gh2.transition;
        Gh2.transition = {};
        try {
          a(false), b3();
        } finally {
          C4 = c, Gh2.transition = d3;
        }
      }
      function wi2() {
        return Uh2().memoizedState;
      }
      function xi(a, b3, c) {
        var d3 = yi2(a);
        c = { lane: d3, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi2(a)) Ai2(b3, c);
        else if (c = hh2(a, b3, c, d3), null !== c) {
          var e2 = R8();
          gi2(c, a, d3, e2);
          Bi2(c, b3, d3);
        }
      }
      function ii2(a, b3, c) {
        var d3 = yi2(a), e2 = { lane: d3, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi2(a)) Ai2(b3, e2);
        else {
          var f5 = a.alternate;
          if (0 === a.lanes && (null === f5 || 0 === f5.lanes) && (f5 = b3.lastRenderedReducer, null !== f5)) try {
            var g5 = b3.lastRenderedState, h3 = f5(g5, c);
            e2.hasEagerState = true;
            e2.eagerState = h3;
            if (He2(h3, g5)) {
              var k4 = b3.interleaved;
              null === k4 ? (e2.next = e2, gh2(b3)) : (e2.next = k4.next, k4.next = e2);
              b3.interleaved = e2;
              return;
            }
          } catch (l) {
          } finally {
          }
          c = hh2(a, b3, e2, d3);
          null !== c && (e2 = R8(), gi2(c, a, d3, e2), Bi2(c, b3, d3));
        }
      }
      function zi2(a) {
        var b3 = a.alternate;
        return a === M3 || null !== b3 && b3 === M3;
      }
      function Ai2(a, b3) {
        Jh2 = Ih2 = true;
        var c = a.pending;
        null === c ? b3.next = b3 : (b3.next = c.next, c.next = b3);
        a.pending = b3;
      }
      function Bi2(a, b3, c) {
        if (0 !== (c & 4194240)) {
          var d3 = b3.lanes;
          d3 &= a.pendingLanes;
          c |= d3;
          b3.lanes = c;
          Cc2(a, c);
        }
      }
      var Rh2 = { readContext: eh2, useCallback: P6, useContext: P6, useEffect: P6, useImperativeHandle: P6, useInsertionEffect: P6, useLayoutEffect: P6, useMemo: P6, useReducer: P6, useRef: P6, useState: P6, useDebugValue: P6, useDeferredValue: P6, useTransition: P6, useMutableSource: P6, useSyncExternalStore: P6, useId: P6, unstable_isNewReconciler: false };
      var Oh2 = { readContext: eh2, useCallback: function(a, b3) {
        Th2().memoizedState = [a, void 0 === b3 ? null : b3];
        return a;
      }, useContext: eh2, useEffect: mi2, useImperativeHandle: function(a, b3, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return ki2(
          4194308,
          4,
          pi2.bind(null, b3, a),
          c
        );
      }, useLayoutEffect: function(a, b3) {
        return ki2(4194308, 4, a, b3);
      }, useInsertionEffect: function(a, b3) {
        return ki2(4, 2, a, b3);
      }, useMemo: function(a, b3) {
        var c = Th2();
        b3 = void 0 === b3 ? null : b3;
        a = a();
        c.memoizedState = [a, b3];
        return a;
      }, useReducer: function(a, b3, c) {
        var d3 = Th2();
        b3 = void 0 !== c ? c(b3) : b3;
        d3.memoizedState = d3.baseState = b3;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b3 };
        d3.queue = a;
        a = a.dispatch = xi.bind(null, M3, a);
        return [d3.memoizedState, a];
      }, useRef: function(a) {
        var b3 = Th2();
        a = { current: a };
        return b3.memoizedState = a;
      }, useState: hi2, useDebugValue: ri2, useDeferredValue: function(a) {
        return Th2().memoizedState = a;
      }, useTransition: function() {
        var a = hi2(false), b3 = a[0];
        a = vi2.bind(null, a[1]);
        Th2().memoizedState = a;
        return [b3, a];
      }, useMutableSource: function() {
      }, useSyncExternalStore: function(a, b3, c) {
        var d3 = M3, e2 = Th2();
        if (I4) {
          if (void 0 === c) throw Error(p(407));
          c = c();
        } else {
          c = b3();
          if (null === Q2) throw Error(p(349));
          0 !== (Hh2 & 30) || di2(d3, b3, c);
        }
        e2.memoizedState = c;
        var f5 = { value: c, getSnapshot: b3 };
        e2.queue = f5;
        mi2(ai2.bind(
          null,
          d3,
          f5,
          a
        ), [a]);
        d3.flags |= 2048;
        bi2(9, ci2.bind(null, d3, f5, c, b3), void 0, null);
        return c;
      }, useId: function() {
        var a = Th2(), b3 = Q2.identifierPrefix;
        if (I4) {
          var c = sg;
          var d3 = rg;
          c = (d3 & ~(1 << 32 - oc2(d3) - 1)).toString(32) + c;
          b3 = ":" + b3 + "R" + c;
          c = Kh2++;
          0 < c && (b3 += "H" + c.toString(32));
          b3 += ":";
        } else c = Lh2++, b3 = ":" + b3 + "r" + c.toString(32) + ":";
        return a.memoizedState = b3;
      }, unstable_isNewReconciler: false };
      var Ph2 = {
        readContext: eh2,
        useCallback: si2,
        useContext: eh2,
        useEffect: $h2,
        useImperativeHandle: qi2,
        useInsertionEffect: ni2,
        useLayoutEffect: oi2,
        useMemo: ti2,
        useReducer: Wh2,
        useRef: ji2,
        useState: function() {
          return Wh2(Vh2);
        },
        useDebugValue: ri2,
        useDeferredValue: function(a) {
          var b3 = Uh2();
          return ui2(b3, N4.memoizedState, a);
        },
        useTransition: function() {
          var a = Wh2(Vh2)[0], b3 = Uh2().memoizedState;
          return [a, b3];
        },
        useMutableSource: Yh2,
        useSyncExternalStore: Zh2,
        useId: wi2,
        unstable_isNewReconciler: false
      };
      var Qh2 = { readContext: eh2, useCallback: si2, useContext: eh2, useEffect: $h2, useImperativeHandle: qi2, useInsertionEffect: ni2, useLayoutEffect: oi2, useMemo: ti2, useReducer: Xh2, useRef: ji2, useState: function() {
        return Xh2(Vh2);
      }, useDebugValue: ri2, useDeferredValue: function(a) {
        var b3 = Uh2();
        return null === N4 ? b3.memoizedState = a : ui2(b3, N4.memoizedState, a);
      }, useTransition: function() {
        var a = Xh2(Vh2)[0], b3 = Uh2().memoizedState;
        return [a, b3];
      }, useMutableSource: Yh2, useSyncExternalStore: Zh2, useId: wi2, unstable_isNewReconciler: false };
      function Ci2(a, b3) {
        if (a && a.defaultProps) {
          b3 = A7({}, b3);
          a = a.defaultProps;
          for (var c in a) void 0 === b3[c] && (b3[c] = a[c]);
          return b3;
        }
        return b3;
      }
      function Di2(a, b3, c, d3) {
        b3 = a.memoizedState;
        c = c(d3, b3);
        c = null === c || void 0 === c ? b3 : A7({}, b3, c);
        a.memoizedState = c;
        0 === a.lanes && (a.updateQueue.baseState = c);
      }
      var Ei = { isMounted: function(a) {
        return (a = a._reactInternals) ? Vb(a) === a : false;
      }, enqueueSetState: function(a, b3, c) {
        a = a._reactInternals;
        var d3 = R8(), e2 = yi2(a), f5 = mh2(d3, e2);
        f5.payload = b3;
        void 0 !== c && null !== c && (f5.callback = c);
        b3 = nh2(a, f5, e2);
        null !== b3 && (gi2(b3, a, e2, d3), oh2(b3, a, e2));
      }, enqueueReplaceState: function(a, b3, c) {
        a = a._reactInternals;
        var d3 = R8(), e2 = yi2(a), f5 = mh2(d3, e2);
        f5.tag = 1;
        f5.payload = b3;
        void 0 !== c && null !== c && (f5.callback = c);
        b3 = nh2(a, f5, e2);
        null !== b3 && (gi2(b3, a, e2, d3), oh2(b3, a, e2));
      }, enqueueForceUpdate: function(a, b3) {
        a = a._reactInternals;
        var c = R8(), d3 = yi2(a), e2 = mh2(c, d3);
        e2.tag = 2;
        void 0 !== b3 && null !== b3 && (e2.callback = b3);
        b3 = nh2(a, e2, d3);
        null !== b3 && (gi2(b3, a, d3, c), oh2(b3, a, d3));
      } };
      function Fi2(a, b3, c, d3, e2, f5, g5) {
        a = a.stateNode;
        return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d3, f5, g5) : b3.prototype && b3.prototype.isPureReactComponent ? !Ie2(c, d3) || !Ie2(e2, f5) : true;
      }
      function Gi2(a, b3, c) {
        var d3 = false, e2 = Vf2;
        var f5 = b3.contextType;
        "object" === typeof f5 && null !== f5 ? f5 = eh2(f5) : (e2 = Zf2(b3) ? Xf2 : H.current, d3 = b3.contextTypes, f5 = (d3 = null !== d3 && void 0 !== d3) ? Yf2(a, e2) : Vf2);
        b3 = new b3(c, f5);
        a.memoizedState = null !== b3.state && void 0 !== b3.state ? b3.state : null;
        b3.updater = Ei;
        a.stateNode = b3;
        b3._reactInternals = a;
        d3 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f5);
        return b3;
      }
      function Hi2(a, b3, c, d3) {
        a = b3.state;
        "function" === typeof b3.componentWillReceiveProps && b3.componentWillReceiveProps(c, d3);
        "function" === typeof b3.UNSAFE_componentWillReceiveProps && b3.UNSAFE_componentWillReceiveProps(c, d3);
        b3.state !== a && Ei.enqueueReplaceState(b3, b3.state, null);
      }
      function Ii2(a, b3, c, d3) {
        var e2 = a.stateNode;
        e2.props = c;
        e2.state = a.memoizedState;
        e2.refs = {};
        kh2(a);
        var f5 = b3.contextType;
        "object" === typeof f5 && null !== f5 ? e2.context = eh2(f5) : (f5 = Zf2(b3) ? Xf2 : H.current, e2.context = Yf2(a, f5));
        e2.state = a.memoizedState;
        f5 = b3.getDerivedStateFromProps;
        "function" === typeof f5 && (Di2(a, b3, f5, c), e2.state = a.memoizedState);
        "function" === typeof b3.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b3 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b3 !== e2.state && Ei.enqueueReplaceState(e2, e2.state, null), qh2(a, c, e2, d3), e2.state = a.memoizedState);
        "function" === typeof e2.componentDidMount && (a.flags |= 4194308);
      }
      function Ji2(a, b3) {
        try {
          var c = "", d3 = b3;
          do
            c += Pa2(d3), d3 = d3.return;
          while (d3);
          var e2 = c;
        } catch (f5) {
          e2 = "\nError generating stack: " + f5.message + "\n" + f5.stack;
        }
        return { value: a, source: b3, stack: e2, digest: null };
      }
      function Ki2(a, b3, c) {
        return { value: a, source: null, stack: null != c ? c : null, digest: null != b3 ? b3 : null };
      }
      function Li2(a, b3) {
        try {
          console.error(b3.value);
        } catch (c) {
          setTimeout(function() {
            throw c;
          });
        }
      }
      var Mi2 = "function" === typeof WeakMap ? WeakMap : Map;
      function Ni2(a, b3, c) {
        c = mh2(-1, c);
        c.tag = 3;
        c.payload = { element: null };
        var d3 = b3.value;
        c.callback = function() {
          Oi2 || (Oi2 = true, Pi2 = d3);
          Li2(a, b3);
        };
        return c;
      }
      function Qi2(a, b3, c) {
        c = mh2(-1, c);
        c.tag = 3;
        var d3 = a.type.getDerivedStateFromError;
        if ("function" === typeof d3) {
          var e2 = b3.value;
          c.payload = function() {
            return d3(e2);
          };
          c.callback = function() {
            Li2(a, b3);
          };
        }
        var f5 = a.stateNode;
        null !== f5 && "function" === typeof f5.componentDidCatch && (c.callback = function() {
          Li2(a, b3);
          "function" !== typeof d3 && (null === Ri2 ? Ri2 = /* @__PURE__ */ new Set([this]) : Ri2.add(this));
          var c2 = b3.stack;
          this.componentDidCatch(b3.value, { componentStack: null !== c2 ? c2 : "" });
        });
        return c;
      }
      function Si2(a, b3, c) {
        var d3 = a.pingCache;
        if (null === d3) {
          d3 = a.pingCache = new Mi2();
          var e2 = /* @__PURE__ */ new Set();
          d3.set(b3, e2);
        } else e2 = d3.get(b3), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d3.set(b3, e2));
        e2.has(c) || (e2.add(c), a = Ti2.bind(null, a, b3, c), b3.then(a, a));
      }
      function Ui2(a) {
        do {
          var b3;
          if (b3 = 13 === a.tag) b3 = a.memoizedState, b3 = null !== b3 ? null !== b3.dehydrated ? true : false : true;
          if (b3) return a;
          a = a.return;
        } while (null !== a);
        return null;
      }
      function Vi2(a, b3, c, d3, e2) {
        if (0 === (a.mode & 1)) return a === b3 ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b3 = mh2(-1, 1), b3.tag = 2, nh2(c, b3, 1))), c.lanes |= 1), a;
        a.flags |= 65536;
        a.lanes = e2;
        return a;
      }
      var Wi2 = ua2.ReactCurrentOwner;
      var dh2 = false;
      function Xi2(a, b3, c, d3) {
        b3.child = null === a ? Vg(b3, null, c, d3) : Ug(b3, a.child, c, d3);
      }
      function Yi2(a, b3, c, d3, e2) {
        c = c.render;
        var f5 = b3.ref;
        ch(b3, e2);
        d3 = Nh2(a, b3, c, d3, f5, e2);
        c = Sh2();
        if (null !== a && !dh2) return b3.updateQueue = a.updateQueue, b3.flags &= -2053, a.lanes &= ~e2, Zi2(a, b3, e2);
        I4 && c && vg(b3);
        b3.flags |= 1;
        Xi2(a, b3, d3, e2);
        return b3.child;
      }
      function $i2(a, b3, c, d3, e2) {
        if (null === a) {
          var f5 = c.type;
          if ("function" === typeof f5 && !aj(f5) && void 0 === f5.defaultProps && null === c.compare && void 0 === c.defaultProps) return b3.tag = 15, b3.type = f5, bj(a, b3, f5, d3, e2);
          a = Rg(c.type, null, d3, b3, b3.mode, e2);
          a.ref = b3.ref;
          a.return = b3;
          return b3.child = a;
        }
        f5 = a.child;
        if (0 === (a.lanes & e2)) {
          var g5 = f5.memoizedProps;
          c = c.compare;
          c = null !== c ? c : Ie2;
          if (c(g5, d3) && a.ref === b3.ref) return Zi2(a, b3, e2);
        }
        b3.flags |= 1;
        a = Pg(f5, d3);
        a.ref = b3.ref;
        a.return = b3;
        return b3.child = a;
      }
      function bj(a, b3, c, d3, e2) {
        if (null !== a) {
          var f5 = a.memoizedProps;
          if (Ie2(f5, d3) && a.ref === b3.ref) if (dh2 = false, b3.pendingProps = d3 = f5, 0 !== (a.lanes & e2)) 0 !== (a.flags & 131072) && (dh2 = true);
          else return b3.lanes = a.lanes, Zi2(a, b3, e2);
        }
        return cj(a, b3, c, d3, e2);
      }
      function dj(a, b3, c) {
        var d3 = b3.pendingProps, e2 = d3.children, f5 = null !== a ? a.memoizedState : null;
        if ("hidden" === d3.mode) if (0 === (b3.mode & 1)) b3.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G2(ej, fj), fj |= c;
        else {
          if (0 === (c & 1073741824)) return a = null !== f5 ? f5.baseLanes | c : c, b3.lanes = b3.childLanes = 1073741824, b3.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b3.updateQueue = null, G2(ej, fj), fj |= a, null;
          b3.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
          d3 = null !== f5 ? f5.baseLanes : c;
          G2(ej, fj);
          fj |= d3;
        }
        else null !== f5 ? (d3 = f5.baseLanes | c, b3.memoizedState = null) : d3 = c, G2(ej, fj), fj |= d3;
        Xi2(a, b3, e2, c);
        return b3.child;
      }
      function gj(a, b3) {
        var c = b3.ref;
        if (null === a && null !== c || null !== a && a.ref !== c) b3.flags |= 512, b3.flags |= 2097152;
      }
      function cj(a, b3, c, d3, e2) {
        var f5 = Zf2(c) ? Xf2 : H.current;
        f5 = Yf2(b3, f5);
        ch(b3, e2);
        c = Nh2(a, b3, c, d3, f5, e2);
        d3 = Sh2();
        if (null !== a && !dh2) return b3.updateQueue = a.updateQueue, b3.flags &= -2053, a.lanes &= ~e2, Zi2(a, b3, e2);
        I4 && d3 && vg(b3);
        b3.flags |= 1;
        Xi2(a, b3, c, e2);
        return b3.child;
      }
      function hj(a, b3, c, d3, e2) {
        if (Zf2(c)) {
          var f5 = true;
          cg(b3);
        } else f5 = false;
        ch(b3, e2);
        if (null === b3.stateNode) ij(a, b3), Gi2(b3, c, d3), Ii2(b3, c, d3, e2), d3 = true;
        else if (null === a) {
          var g5 = b3.stateNode, h3 = b3.memoizedProps;
          g5.props = h3;
          var k4 = g5.context, l = c.contextType;
          "object" === typeof l && null !== l ? l = eh2(l) : (l = Zf2(c) ? Xf2 : H.current, l = Yf2(b3, l));
          var m = c.getDerivedStateFromProps, q5 = "function" === typeof m || "function" === typeof g5.getSnapshotBeforeUpdate;
          q5 || "function" !== typeof g5.UNSAFE_componentWillReceiveProps && "function" !== typeof g5.componentWillReceiveProps || (h3 !== d3 || k4 !== l) && Hi2(b3, g5, d3, l);
          jh2 = false;
          var r = b3.memoizedState;
          g5.state = r;
          qh2(b3, d3, g5, e2);
          k4 = b3.memoizedState;
          h3 !== d3 || r !== k4 || Wf2.current || jh2 ? ("function" === typeof m && (Di2(b3, c, m, d3), k4 = b3.memoizedState), (h3 = jh2 || Fi2(b3, c, h3, d3, r, k4, l)) ? (q5 || "function" !== typeof g5.UNSAFE_componentWillMount && "function" !== typeof g5.componentWillMount || ("function" === typeof g5.componentWillMount && g5.componentWillMount(), "function" === typeof g5.UNSAFE_componentWillMount && g5.UNSAFE_componentWillMount()), "function" === typeof g5.componentDidMount && (b3.flags |= 4194308)) : ("function" === typeof g5.componentDidMount && (b3.flags |= 4194308), b3.memoizedProps = d3, b3.memoizedState = k4), g5.props = d3, g5.state = k4, g5.context = l, d3 = h3) : ("function" === typeof g5.componentDidMount && (b3.flags |= 4194308), d3 = false);
        } else {
          g5 = b3.stateNode;
          lh2(a, b3);
          h3 = b3.memoizedProps;
          l = b3.type === b3.elementType ? h3 : Ci2(b3.type, h3);
          g5.props = l;
          q5 = b3.pendingProps;
          r = g5.context;
          k4 = c.contextType;
          "object" === typeof k4 && null !== k4 ? k4 = eh2(k4) : (k4 = Zf2(c) ? Xf2 : H.current, k4 = Yf2(b3, k4));
          var y2 = c.getDerivedStateFromProps;
          (m = "function" === typeof y2 || "function" === typeof g5.getSnapshotBeforeUpdate) || "function" !== typeof g5.UNSAFE_componentWillReceiveProps && "function" !== typeof g5.componentWillReceiveProps || (h3 !== q5 || r !== k4) && Hi2(b3, g5, d3, k4);
          jh2 = false;
          r = b3.memoizedState;
          g5.state = r;
          qh2(b3, d3, g5, e2);
          var n = b3.memoizedState;
          h3 !== q5 || r !== n || Wf2.current || jh2 ? ("function" === typeof y2 && (Di2(b3, c, y2, d3), n = b3.memoizedState), (l = jh2 || Fi2(b3, c, l, d3, r, n, k4) || false) ? (m || "function" !== typeof g5.UNSAFE_componentWillUpdate && "function" !== typeof g5.componentWillUpdate || ("function" === typeof g5.componentWillUpdate && g5.componentWillUpdate(d3, n, k4), "function" === typeof g5.UNSAFE_componentWillUpdate && g5.UNSAFE_componentWillUpdate(d3, n, k4)), "function" === typeof g5.componentDidUpdate && (b3.flags |= 4), "function" === typeof g5.getSnapshotBeforeUpdate && (b3.flags |= 1024)) : ("function" !== typeof g5.componentDidUpdate || h3 === a.memoizedProps && r === a.memoizedState || (b3.flags |= 4), "function" !== typeof g5.getSnapshotBeforeUpdate || h3 === a.memoizedProps && r === a.memoizedState || (b3.flags |= 1024), b3.memoizedProps = d3, b3.memoizedState = n), g5.props = d3, g5.state = n, g5.context = k4, d3 = l) : ("function" !== typeof g5.componentDidUpdate || h3 === a.memoizedProps && r === a.memoizedState || (b3.flags |= 4), "function" !== typeof g5.getSnapshotBeforeUpdate || h3 === a.memoizedProps && r === a.memoizedState || (b3.flags |= 1024), d3 = false);
        }
        return jj(a, b3, c, d3, f5, e2);
      }
      function jj(a, b3, c, d3, e2, f5) {
        gj(a, b3);
        var g5 = 0 !== (b3.flags & 128);
        if (!d3 && !g5) return e2 && dg(b3, c, false), Zi2(a, b3, f5);
        d3 = b3.stateNode;
        Wi2.current = b3;
        var h3 = g5 && "function" !== typeof c.getDerivedStateFromError ? null : d3.render();
        b3.flags |= 1;
        null !== a && g5 ? (b3.child = Ug(b3, a.child, null, f5), b3.child = Ug(b3, null, h3, f5)) : Xi2(a, b3, h3, f5);
        b3.memoizedState = d3.state;
        e2 && dg(b3, c, true);
        return b3.child;
      }
      function kj(a) {
        var b3 = a.stateNode;
        b3.pendingContext ? ag(a, b3.pendingContext, b3.pendingContext !== b3.context) : b3.context && ag(a, b3.context, false);
        yh2(a, b3.containerInfo);
      }
      function lj(a, b3, c, d3, e2) {
        Ig();
        Jg(e2);
        b3.flags |= 256;
        Xi2(a, b3, c, d3);
        return b3.child;
      }
      var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
      function nj(a) {
        return { baseLanes: a, cachePool: null, transitions: null };
      }
      function oj(a, b3, c) {
        var d3 = b3.pendingProps, e2 = L5.current, f5 = false, g5 = 0 !== (b3.flags & 128), h3;
        (h3 = g5) || (h3 = null !== a && null === a.memoizedState ? false : 0 !== (e2 & 2));
        if (h3) f5 = true, b3.flags &= -129;
        else if (null === a || null !== a.memoizedState) e2 |= 1;
        G2(L5, e2 & 1);
        if (null === a) {
          Eg(b3);
          a = b3.memoizedState;
          if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b3.mode & 1) ? b3.lanes = 1 : "$!" === a.data ? b3.lanes = 8 : b3.lanes = 1073741824, null;
          g5 = d3.children;
          a = d3.fallback;
          return f5 ? (d3 = b3.mode, f5 = b3.child, g5 = { mode: "hidden", children: g5 }, 0 === (d3 & 1) && null !== f5 ? (f5.childLanes = 0, f5.pendingProps = g5) : f5 = pj(g5, d3, 0, null), a = Tg(a, d3, c, null), f5.return = b3, a.return = b3, f5.sibling = a, b3.child = f5, b3.child.memoizedState = nj(c), b3.memoizedState = mj, a) : qj(b3, g5);
        }
        e2 = a.memoizedState;
        if (null !== e2 && (h3 = e2.dehydrated, null !== h3)) return rj(a, b3, g5, d3, h3, e2, c);
        if (f5) {
          f5 = d3.fallback;
          g5 = b3.mode;
          e2 = a.child;
          h3 = e2.sibling;
          var k4 = { mode: "hidden", children: d3.children };
          0 === (g5 & 1) && b3.child !== e2 ? (d3 = b3.child, d3.childLanes = 0, d3.pendingProps = k4, b3.deletions = null) : (d3 = Pg(e2, k4), d3.subtreeFlags = e2.subtreeFlags & 14680064);
          null !== h3 ? f5 = Pg(h3, f5) : (f5 = Tg(f5, g5, c, null), f5.flags |= 2);
          f5.return = b3;
          d3.return = b3;
          d3.sibling = f5;
          b3.child = d3;
          d3 = f5;
          f5 = b3.child;
          g5 = a.child.memoizedState;
          g5 = null === g5 ? nj(c) : { baseLanes: g5.baseLanes | c, cachePool: null, transitions: g5.transitions };
          f5.memoizedState = g5;
          f5.childLanes = a.childLanes & ~c;
          b3.memoizedState = mj;
          return d3;
        }
        f5 = a.child;
        a = f5.sibling;
        d3 = Pg(f5, { mode: "visible", children: d3.children });
        0 === (b3.mode & 1) && (d3.lanes = c);
        d3.return = b3;
        d3.sibling = null;
        null !== a && (c = b3.deletions, null === c ? (b3.deletions = [a], b3.flags |= 16) : c.push(a));
        b3.child = d3;
        b3.memoizedState = null;
        return d3;
      }
      function qj(a, b3) {
        b3 = pj({ mode: "visible", children: b3 }, a.mode, 0, null);
        b3.return = a;
        return a.child = b3;
      }
      function sj(a, b3, c, d3) {
        null !== d3 && Jg(d3);
        Ug(b3, a.child, null, c);
        a = qj(b3, b3.pendingProps.children);
        a.flags |= 2;
        b3.memoizedState = null;
        return a;
      }
      function rj(a, b3, c, d3, e2, f5, g5) {
        if (c) {
          if (b3.flags & 256) return b3.flags &= -257, d3 = Ki2(Error(p(422))), sj(a, b3, g5, d3);
          if (null !== b3.memoizedState) return b3.child = a.child, b3.flags |= 128, null;
          f5 = d3.fallback;
          e2 = b3.mode;
          d3 = pj({ mode: "visible", children: d3.children }, e2, 0, null);
          f5 = Tg(f5, e2, g5, null);
          f5.flags |= 2;
          d3.return = b3;
          f5.return = b3;
          d3.sibling = f5;
          b3.child = d3;
          0 !== (b3.mode & 1) && Ug(b3, a.child, null, g5);
          b3.child.memoizedState = nj(g5);
          b3.memoizedState = mj;
          return f5;
        }
        if (0 === (b3.mode & 1)) return sj(a, b3, g5, null);
        if ("$!" === e2.data) {
          d3 = e2.nextSibling && e2.nextSibling.dataset;
          if (d3) var h3 = d3.dgst;
          d3 = h3;
          f5 = Error(p(419));
          d3 = Ki2(f5, d3, void 0);
          return sj(a, b3, g5, d3);
        }
        h3 = 0 !== (g5 & a.childLanes);
        if (dh2 || h3) {
          d3 = Q2;
          if (null !== d3) {
            switch (g5 & -g5) {
              case 4:
                e2 = 2;
                break;
              case 16:
                e2 = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                e2 = 32;
                break;
              case 536870912:
                e2 = 268435456;
                break;
              default:
                e2 = 0;
            }
            e2 = 0 !== (e2 & (d3.suspendedLanes | g5)) ? 0 : e2;
            0 !== e2 && e2 !== f5.retryLane && (f5.retryLane = e2, ih2(a, e2), gi2(d3, a, e2, -1));
          }
          tj();
          d3 = Ki2(Error(p(421)));
          return sj(a, b3, g5, d3);
        }
        if ("$?" === e2.data) return b3.flags |= 128, b3.child = a.child, b3 = uj.bind(null, a), e2._reactRetry = b3, null;
        a = f5.treeContext;
        yg = Lf2(e2.nextSibling);
        xg = b3;
        I4 = true;
        zg = null;
        null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b3);
        b3 = qj(b3, d3.children);
        b3.flags |= 4096;
        return b3;
      }
      function vj(a, b3, c) {
        a.lanes |= b3;
        var d3 = a.alternate;
        null !== d3 && (d3.lanes |= b3);
        bh2(a.return, b3, c);
      }
      function wj(a, b3, c, d3, e2) {
        var f5 = a.memoizedState;
        null === f5 ? a.memoizedState = { isBackwards: b3, rendering: null, renderingStartTime: 0, last: d3, tail: c, tailMode: e2 } : (f5.isBackwards = b3, f5.rendering = null, f5.renderingStartTime = 0, f5.last = d3, f5.tail = c, f5.tailMode = e2);
      }
      function xj(a, b3, c) {
        var d3 = b3.pendingProps, e2 = d3.revealOrder, f5 = d3.tail;
        Xi2(a, b3, d3.children, c);
        d3 = L5.current;
        if (0 !== (d3 & 2)) d3 = d3 & 1 | 2, b3.flags |= 128;
        else {
          if (null !== a && 0 !== (a.flags & 128)) a: for (a = b3.child; null !== a; ) {
            if (13 === a.tag) null !== a.memoizedState && vj(a, c, b3);
            else if (19 === a.tag) vj(a, c, b3);
            else if (null !== a.child) {
              a.child.return = a;
              a = a.child;
              continue;
            }
            if (a === b3) break a;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === b3) break a;
              a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
          }
          d3 &= 1;
        }
        G2(L5, d3);
        if (0 === (b3.mode & 1)) b3.memoizedState = null;
        else switch (e2) {
          case "forwards":
            c = b3.child;
            for (e2 = null; null !== c; ) a = c.alternate, null !== a && null === Ch2(a) && (e2 = c), c = c.sibling;
            c = e2;
            null === c ? (e2 = b3.child, b3.child = null) : (e2 = c.sibling, c.sibling = null);
            wj(b3, false, e2, c, f5);
            break;
          case "backwards":
            c = null;
            e2 = b3.child;
            for (b3.child = null; null !== e2; ) {
              a = e2.alternate;
              if (null !== a && null === Ch2(a)) {
                b3.child = e2;
                break;
              }
              a = e2.sibling;
              e2.sibling = c;
              c = e2;
              e2 = a;
            }
            wj(b3, true, c, null, f5);
            break;
          case "together":
            wj(b3, false, null, null, void 0);
            break;
          default:
            b3.memoizedState = null;
        }
        return b3.child;
      }
      function ij(a, b3) {
        0 === (b3.mode & 1) && null !== a && (a.alternate = null, b3.alternate = null, b3.flags |= 2);
      }
      function Zi2(a, b3, c) {
        null !== a && (b3.dependencies = a.dependencies);
        rh2 |= b3.lanes;
        if (0 === (c & b3.childLanes)) return null;
        if (null !== a && b3.child !== a.child) throw Error(p(153));
        if (null !== b3.child) {
          a = b3.child;
          c = Pg(a, a.pendingProps);
          b3.child = c;
          for (c.return = b3; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b3;
          c.sibling = null;
        }
        return b3.child;
      }
      function yj(a, b3, c) {
        switch (b3.tag) {
          case 3:
            kj(b3);
            Ig();
            break;
          case 5:
            Ah2(b3);
            break;
          case 1:
            Zf2(b3.type) && cg(b3);
            break;
          case 4:
            yh2(b3, b3.stateNode.containerInfo);
            break;
          case 10:
            var d3 = b3.type._context, e2 = b3.memoizedProps.value;
            G2(Wg, d3._currentValue);
            d3._currentValue = e2;
            break;
          case 13:
            d3 = b3.memoizedState;
            if (null !== d3) {
              if (null !== d3.dehydrated) return G2(L5, L5.current & 1), b3.flags |= 128, null;
              if (0 !== (c & b3.child.childLanes)) return oj(a, b3, c);
              G2(L5, L5.current & 1);
              a = Zi2(a, b3, c);
              return null !== a ? a.sibling : null;
            }
            G2(L5, L5.current & 1);
            break;
          case 19:
            d3 = 0 !== (c & b3.childLanes);
            if (0 !== (a.flags & 128)) {
              if (d3) return xj(a, b3, c);
              b3.flags |= 128;
            }
            e2 = b3.memoizedState;
            null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
            G2(L5, L5.current);
            if (d3) break;
            else return null;
          case 22:
          case 23:
            return b3.lanes = 0, dj(a, b3, c);
        }
        return Zi2(a, b3, c);
      }
      var zj;
      var Aj;
      var Bj;
      var Cj;
      zj = function(a, b3) {
        for (var c = b3.child; null !== c; ) {
          if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
          else if (4 !== c.tag && null !== c.child) {
            c.child.return = c;
            c = c.child;
            continue;
          }
          if (c === b3) break;
          for (; null === c.sibling; ) {
            if (null === c.return || c.return === b3) return;
            c = c.return;
          }
          c.sibling.return = c.return;
          c = c.sibling;
        }
      };
      Aj = function() {
      };
      Bj = function(a, b3, c, d3) {
        var e2 = a.memoizedProps;
        if (e2 !== d3) {
          a = b3.stateNode;
          xh2(uh2.current);
          var f5 = null;
          switch (c) {
            case "input":
              e2 = Ya2(a, e2);
              d3 = Ya2(a, d3);
              f5 = [];
              break;
            case "select":
              e2 = A7({}, e2, { value: void 0 });
              d3 = A7({}, d3, { value: void 0 });
              f5 = [];
              break;
            case "textarea":
              e2 = gb(a, e2);
              d3 = gb(a, d3);
              f5 = [];
              break;
            default:
              "function" !== typeof e2.onClick && "function" === typeof d3.onClick && (a.onclick = Bf2);
          }
          ub(c, d3);
          var g5;
          c = null;
          for (l in e2) if (!d3.hasOwnProperty(l) && e2.hasOwnProperty(l) && null != e2[l]) if ("style" === l) {
            var h3 = e2[l];
            for (g5 in h3) h3.hasOwnProperty(g5) && (c || (c = {}), c[g5] = "");
          } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea2.hasOwnProperty(l) ? f5 || (f5 = []) : (f5 = f5 || []).push(l, null));
          for (l in d3) {
            var k4 = d3[l];
            h3 = null != e2 ? e2[l] : void 0;
            if (d3.hasOwnProperty(l) && k4 !== h3 && (null != k4 || null != h3)) if ("style" === l) if (h3) {
              for (g5 in h3) !h3.hasOwnProperty(g5) || k4 && k4.hasOwnProperty(g5) || (c || (c = {}), c[g5] = "");
              for (g5 in k4) k4.hasOwnProperty(g5) && h3[g5] !== k4[g5] && (c || (c = {}), c[g5] = k4[g5]);
            } else c || (f5 || (f5 = []), f5.push(
              l,
              c
            )), c = k4;
            else "dangerouslySetInnerHTML" === l ? (k4 = k4 ? k4.__html : void 0, h3 = h3 ? h3.__html : void 0, null != k4 && h3 !== k4 && (f5 = f5 || []).push(l, k4)) : "children" === l ? "string" !== typeof k4 && "number" !== typeof k4 || (f5 = f5 || []).push(l, "" + k4) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea2.hasOwnProperty(l) ? (null != k4 && "onScroll" === l && D3("scroll", a), f5 || h3 === k4 || (f5 = [])) : (f5 = f5 || []).push(l, k4));
          }
          c && (f5 = f5 || []).push("style", c);
          var l = f5;
          if (b3.updateQueue = l) b3.flags |= 4;
        }
      };
      Cj = function(a, b3, c, d3) {
        c !== d3 && (b3.flags |= 4);
      };
      function Dj(a, b3) {
        if (!I4) switch (a.tailMode) {
          case "hidden":
            b3 = a.tail;
            for (var c = null; null !== b3; ) null !== b3.alternate && (c = b3), b3 = b3.sibling;
            null === c ? a.tail = null : c.sibling = null;
            break;
          case "collapsed":
            c = a.tail;
            for (var d3 = null; null !== c; ) null !== c.alternate && (d3 = c), c = c.sibling;
            null === d3 ? b3 || null === a.tail ? a.tail = null : a.tail.sibling = null : d3.sibling = null;
        }
      }
      function S3(a) {
        var b3 = null !== a.alternate && a.alternate.child === a.child, c = 0, d3 = 0;
        if (b3) for (var e2 = a.child; null !== e2; ) c |= e2.lanes | e2.childLanes, d3 |= e2.subtreeFlags & 14680064, d3 |= e2.flags & 14680064, e2.return = a, e2 = e2.sibling;
        else for (e2 = a.child; null !== e2; ) c |= e2.lanes | e2.childLanes, d3 |= e2.subtreeFlags, d3 |= e2.flags, e2.return = a, e2 = e2.sibling;
        a.subtreeFlags |= d3;
        a.childLanes = c;
        return b3;
      }
      function Ej(a, b3, c) {
        var d3 = b3.pendingProps;
        wg(b3);
        switch (b3.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return S3(b3), null;
          case 1:
            return Zf2(b3.type) && $f2(), S3(b3), null;
          case 3:
            d3 = b3.stateNode;
            zh2();
            E3(Wf2);
            E3(H);
            Eh2();
            d3.pendingContext && (d3.context = d3.pendingContext, d3.pendingContext = null);
            if (null === a || null === a.child) Gg(b3) ? b3.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b3.flags & 256) || (b3.flags |= 1024, null !== zg && (Fj(zg), zg = null));
            Aj(a, b3);
            S3(b3);
            return null;
          case 5:
            Bh2(b3);
            var e2 = xh2(wh2.current);
            c = b3.type;
            if (null !== a && null != b3.stateNode) Bj(a, b3, c, d3, e2), a.ref !== b3.ref && (b3.flags |= 512, b3.flags |= 2097152);
            else {
              if (!d3) {
                if (null === b3.stateNode) throw Error(p(166));
                S3(b3);
                return null;
              }
              a = xh2(uh2.current);
              if (Gg(b3)) {
                d3 = b3.stateNode;
                c = b3.type;
                var f5 = b3.memoizedProps;
                d3[Of2] = b3;
                d3[Pf2] = f5;
                a = 0 !== (b3.mode & 1);
                switch (c) {
                  case "dialog":
                    D3("cancel", d3);
                    D3("close", d3);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D3("load", d3);
                    break;
                  case "video":
                  case "audio":
                    for (e2 = 0; e2 < lf2.length; e2++) D3(lf2[e2], d3);
                    break;
                  case "source":
                    D3("error", d3);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D3(
                      "error",
                      d3
                    );
                    D3("load", d3);
                    break;
                  case "details":
                    D3("toggle", d3);
                    break;
                  case "input":
                    Za2(d3, f5);
                    D3("invalid", d3);
                    break;
                  case "select":
                    d3._wrapperState = { wasMultiple: !!f5.multiple };
                    D3("invalid", d3);
                    break;
                  case "textarea":
                    hb(d3, f5), D3("invalid", d3);
                }
                ub(c, f5);
                e2 = null;
                for (var g5 in f5) if (f5.hasOwnProperty(g5)) {
                  var h3 = f5[g5];
                  "children" === g5 ? "string" === typeof h3 ? d3.textContent !== h3 && (true !== f5.suppressHydrationWarning && Af2(d3.textContent, h3, a), e2 = ["children", h3]) : "number" === typeof h3 && d3.textContent !== "" + h3 && (true !== f5.suppressHydrationWarning && Af2(
                    d3.textContent,
                    h3,
                    a
                  ), e2 = ["children", "" + h3]) : ea2.hasOwnProperty(g5) && null != h3 && "onScroll" === g5 && D3("scroll", d3);
                }
                switch (c) {
                  case "input":
                    Va2(d3);
                    db(d3, f5, true);
                    break;
                  case "textarea":
                    Va2(d3);
                    jb(d3);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof f5.onClick && (d3.onclick = Bf2);
                }
                d3 = e2;
                b3.updateQueue = d3;
                null !== d3 && (b3.flags |= 4);
              } else {
                g5 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
                "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
                "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g5.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d3.is ? a = g5.createElement(c, { is: d3.is }) : (a = g5.createElement(c), "select" === c && (g5 = a, d3.multiple ? g5.multiple = true : d3.size && (g5.size = d3.size))) : a = g5.createElementNS(a, c);
                a[Of2] = b3;
                a[Pf2] = d3;
                zj(a, b3, false, false);
                b3.stateNode = a;
                a: {
                  g5 = vb(c, d3);
                  switch (c) {
                    case "dialog":
                      D3("cancel", a);
                      D3("close", a);
                      e2 = d3;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      D3("load", a);
                      e2 = d3;
                      break;
                    case "video":
                    case "audio":
                      for (e2 = 0; e2 < lf2.length; e2++) D3(lf2[e2], a);
                      e2 = d3;
                      break;
                    case "source":
                      D3("error", a);
                      e2 = d3;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      D3(
                        "error",
                        a
                      );
                      D3("load", a);
                      e2 = d3;
                      break;
                    case "details":
                      D3("toggle", a);
                      e2 = d3;
                      break;
                    case "input":
                      Za2(a, d3);
                      e2 = Ya2(a, d3);
                      D3("invalid", a);
                      break;
                    case "option":
                      e2 = d3;
                      break;
                    case "select":
                      a._wrapperState = { wasMultiple: !!d3.multiple };
                      e2 = A7({}, d3, { value: void 0 });
                      D3("invalid", a);
                      break;
                    case "textarea":
                      hb(a, d3);
                      e2 = gb(a, d3);
                      D3("invalid", a);
                      break;
                    default:
                      e2 = d3;
                  }
                  ub(c, e2);
                  h3 = e2;
                  for (f5 in h3) if (h3.hasOwnProperty(f5)) {
                    var k4 = h3[f5];
                    "style" === f5 ? sb(a, k4) : "dangerouslySetInnerHTML" === f5 ? (k4 = k4 ? k4.__html : void 0, null != k4 && nb(a, k4)) : "children" === f5 ? "string" === typeof k4 ? ("textarea" !== c || "" !== k4) && ob(a, k4) : "number" === typeof k4 && ob(a, "" + k4) : "suppressContentEditableWarning" !== f5 && "suppressHydrationWarning" !== f5 && "autoFocus" !== f5 && (ea2.hasOwnProperty(f5) ? null != k4 && "onScroll" === f5 && D3("scroll", a) : null != k4 && ta2(a, f5, k4, g5));
                  }
                  switch (c) {
                    case "input":
                      Va2(a);
                      db(a, d3, false);
                      break;
                    case "textarea":
                      Va2(a);
                      jb(a);
                      break;
                    case "option":
                      null != d3.value && a.setAttribute("value", "" + Sa2(d3.value));
                      break;
                    case "select":
                      a.multiple = !!d3.multiple;
                      f5 = d3.value;
                      null != f5 ? fb(a, !!d3.multiple, f5, false) : null != d3.defaultValue && fb(
                        a,
                        !!d3.multiple,
                        d3.defaultValue,
                        true
                      );
                      break;
                    default:
                      "function" === typeof e2.onClick && (a.onclick = Bf2);
                  }
                  switch (c) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d3 = !!d3.autoFocus;
                      break a;
                    case "img":
                      d3 = true;
                      break a;
                    default:
                      d3 = false;
                  }
                }
                d3 && (b3.flags |= 4);
              }
              null !== b3.ref && (b3.flags |= 512, b3.flags |= 2097152);
            }
            S3(b3);
            return null;
          case 6:
            if (a && null != b3.stateNode) Cj(a, b3, a.memoizedProps, d3);
            else {
              if ("string" !== typeof d3 && null === b3.stateNode) throw Error(p(166));
              c = xh2(wh2.current);
              xh2(uh2.current);
              if (Gg(b3)) {
                d3 = b3.stateNode;
                c = b3.memoizedProps;
                d3[Of2] = b3;
                if (f5 = d3.nodeValue !== c) {
                  if (a = xg, null !== a) switch (a.tag) {
                    case 3:
                      Af2(d3.nodeValue, c, 0 !== (a.mode & 1));
                      break;
                    case 5:
                      true !== a.memoizedProps.suppressHydrationWarning && Af2(d3.nodeValue, c, 0 !== (a.mode & 1));
                  }
                }
                f5 && (b3.flags |= 4);
              } else d3 = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d3), d3[Of2] = b3, b3.stateNode = d3;
            }
            S3(b3);
            return null;
          case 13:
            E3(L5);
            d3 = b3.memoizedState;
            if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
              if (I4 && null !== yg && 0 !== (b3.mode & 1) && 0 === (b3.flags & 128)) Hg(), Ig(), b3.flags |= 98560, f5 = false;
              else if (f5 = Gg(b3), null !== d3 && null !== d3.dehydrated) {
                if (null === a) {
                  if (!f5) throw Error(p(318));
                  f5 = b3.memoizedState;
                  f5 = null !== f5 ? f5.dehydrated : null;
                  if (!f5) throw Error(p(317));
                  f5[Of2] = b3;
                } else Ig(), 0 === (b3.flags & 128) && (b3.memoizedState = null), b3.flags |= 4;
                S3(b3);
                f5 = false;
              } else null !== zg && (Fj(zg), zg = null), f5 = true;
              if (!f5) return b3.flags & 65536 ? b3 : null;
            }
            if (0 !== (b3.flags & 128)) return b3.lanes = c, b3;
            d3 = null !== d3;
            d3 !== (null !== a && null !== a.memoizedState) && d3 && (b3.child.flags |= 8192, 0 !== (b3.mode & 1) && (null === a || 0 !== (L5.current & 1) ? 0 === T7 && (T7 = 3) : tj()));
            null !== b3.updateQueue && (b3.flags |= 4);
            S3(b3);
            return null;
          case 4:
            return zh2(), Aj(a, b3), null === a && sf2(b3.stateNode.containerInfo), S3(b3), null;
          case 10:
            return ah2(b3.type._context), S3(b3), null;
          case 17:
            return Zf2(b3.type) && $f2(), S3(b3), null;
          case 19:
            E3(L5);
            f5 = b3.memoizedState;
            if (null === f5) return S3(b3), null;
            d3 = 0 !== (b3.flags & 128);
            g5 = f5.rendering;
            if (null === g5) if (d3) Dj(f5, false);
            else {
              if (0 !== T7 || null !== a && 0 !== (a.flags & 128)) for (a = b3.child; null !== a; ) {
                g5 = Ch2(a);
                if (null !== g5) {
                  b3.flags |= 128;
                  Dj(f5, false);
                  d3 = g5.updateQueue;
                  null !== d3 && (b3.updateQueue = d3, b3.flags |= 4);
                  b3.subtreeFlags = 0;
                  d3 = c;
                  for (c = b3.child; null !== c; ) f5 = c, a = d3, f5.flags &= 14680066, g5 = f5.alternate, null === g5 ? (f5.childLanes = 0, f5.lanes = a, f5.child = null, f5.subtreeFlags = 0, f5.memoizedProps = null, f5.memoizedState = null, f5.updateQueue = null, f5.dependencies = null, f5.stateNode = null) : (f5.childLanes = g5.childLanes, f5.lanes = g5.lanes, f5.child = g5.child, f5.subtreeFlags = 0, f5.deletions = null, f5.memoizedProps = g5.memoizedProps, f5.memoizedState = g5.memoizedState, f5.updateQueue = g5.updateQueue, f5.type = g5.type, a = g5.dependencies, f5.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                  G2(L5, L5.current & 1 | 2);
                  return b3.child;
                }
                a = a.sibling;
              }
              null !== f5.tail && B6() > Gj && (b3.flags |= 128, d3 = true, Dj(f5, false), b3.lanes = 4194304);
            }
            else {
              if (!d3) if (a = Ch2(g5), null !== a) {
                if (b3.flags |= 128, d3 = true, c = a.updateQueue, null !== c && (b3.updateQueue = c, b3.flags |= 4), Dj(f5, true), null === f5.tail && "hidden" === f5.tailMode && !g5.alternate && !I4) return S3(b3), null;
              } else 2 * B6() - f5.renderingStartTime > Gj && 1073741824 !== c && (b3.flags |= 128, d3 = true, Dj(f5, false), b3.lanes = 4194304);
              f5.isBackwards ? (g5.sibling = b3.child, b3.child = g5) : (c = f5.last, null !== c ? c.sibling = g5 : b3.child = g5, f5.last = g5);
            }
            if (null !== f5.tail) return b3 = f5.tail, f5.rendering = b3, f5.tail = b3.sibling, f5.renderingStartTime = B6(), b3.sibling = null, c = L5.current, G2(L5, d3 ? c & 1 | 2 : c & 1), b3;
            S3(b3);
            return null;
          case 22:
          case 23:
            return Hj(), d3 = null !== b3.memoizedState, null !== a && null !== a.memoizedState !== d3 && (b3.flags |= 8192), d3 && 0 !== (b3.mode & 1) ? 0 !== (fj & 1073741824) && (S3(b3), b3.subtreeFlags & 6 && (b3.flags |= 8192)) : S3(b3), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(p(156, b3.tag));
      }
      function Ij(a, b3) {
        wg(b3);
        switch (b3.tag) {
          case 1:
            return Zf2(b3.type) && $f2(), a = b3.flags, a & 65536 ? (b3.flags = a & -65537 | 128, b3) : null;
          case 3:
            return zh2(), E3(Wf2), E3(H), Eh2(), a = b3.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b3.flags = a & -65537 | 128, b3) : null;
          case 5:
            return Bh2(b3), null;
          case 13:
            E3(L5);
            a = b3.memoizedState;
            if (null !== a && null !== a.dehydrated) {
              if (null === b3.alternate) throw Error(p(340));
              Ig();
            }
            a = b3.flags;
            return a & 65536 ? (b3.flags = a & -65537 | 128, b3) : null;
          case 19:
            return E3(L5), null;
          case 4:
            return zh2(), null;
          case 10:
            return ah2(b3.type._context), null;
          case 22:
          case 23:
            return Hj(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Jj = false;
      var U3 = false;
      var Kj = "function" === typeof WeakSet ? WeakSet : Set;
      var V5 = null;
      function Lj(a, b3) {
        var c = a.ref;
        if (null !== c) if ("function" === typeof c) try {
          c(null);
        } catch (d3) {
          W4(a, b3, d3);
        }
        else c.current = null;
      }
      function Mj(a, b3, c) {
        try {
          c();
        } catch (d3) {
          W4(a, b3, d3);
        }
      }
      var Nj = false;
      function Oj(a, b3) {
        Cf2 = dd2;
        a = Me2();
        if (Ne2(a)) {
          if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
          else a: {
            c = (c = a.ownerDocument) && c.defaultView || window;
            var d3 = c.getSelection && c.getSelection();
            if (d3 && 0 !== d3.rangeCount) {
              c = d3.anchorNode;
              var e2 = d3.anchorOffset, f5 = d3.focusNode;
              d3 = d3.focusOffset;
              try {
                c.nodeType, f5.nodeType;
              } catch (F2) {
                c = null;
                break a;
              }
              var g5 = 0, h3 = -1, k4 = -1, l = 0, m = 0, q5 = a, r = null;
              b: for (; ; ) {
                for (var y2; ; ) {
                  q5 !== c || 0 !== e2 && 3 !== q5.nodeType || (h3 = g5 + e2);
                  q5 !== f5 || 0 !== d3 && 3 !== q5.nodeType || (k4 = g5 + d3);
                  3 === q5.nodeType && (g5 += q5.nodeValue.length);
                  if (null === (y2 = q5.firstChild)) break;
                  r = q5;
                  q5 = y2;
                }
                for (; ; ) {
                  if (q5 === a) break b;
                  r === c && ++l === e2 && (h3 = g5);
                  r === f5 && ++m === d3 && (k4 = g5);
                  if (null !== (y2 = q5.nextSibling)) break;
                  q5 = r;
                  r = q5.parentNode;
                }
                q5 = y2;
              }
              c = -1 === h3 || -1 === k4 ? null : { start: h3, end: k4 };
            } else c = null;
          }
          c = c || { start: 0, end: 0 };
        } else c = null;
        Df = { focusedElem: a, selectionRange: c };
        dd2 = false;
        for (V5 = b3; null !== V5; ) if (b3 = V5, a = b3.child, 0 !== (b3.subtreeFlags & 1028) && null !== a) a.return = b3, V5 = a;
        else for (; null !== V5; ) {
          b3 = V5;
          try {
            var n = b3.alternate;
            if (0 !== (b3.flags & 1024)) switch (b3.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n) {
                  var t = n.memoizedProps, J3 = n.memoizedState, x5 = b3.stateNode, w2 = x5.getSnapshotBeforeUpdate(b3.elementType === b3.type ? t : Ci2(b3.type, t), J3);
                  x5.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u = b3.stateNode.containerInfo;
                1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
          } catch (F2) {
            W4(b3, b3.return, F2);
          }
          a = b3.sibling;
          if (null !== a) {
            a.return = b3.return;
            V5 = a;
            break;
          }
          V5 = b3.return;
        }
        n = Nj;
        Nj = false;
        return n;
      }
      function Pj(a, b3, c) {
        var d3 = b3.updateQueue;
        d3 = null !== d3 ? d3.lastEffect : null;
        if (null !== d3) {
          var e2 = d3 = d3.next;
          do {
            if ((e2.tag & a) === a) {
              var f5 = e2.destroy;
              e2.destroy = void 0;
              void 0 !== f5 && Mj(b3, c, f5);
            }
            e2 = e2.next;
          } while (e2 !== d3);
        }
      }
      function Qj(a, b3) {
        b3 = b3.updateQueue;
        b3 = null !== b3 ? b3.lastEffect : null;
        if (null !== b3) {
          var c = b3 = b3.next;
          do {
            if ((c.tag & a) === a) {
              var d3 = c.create;
              c.destroy = d3();
            }
            c = c.next;
          } while (c !== b3);
        }
      }
      function Rj(a) {
        var b3 = a.ref;
        if (null !== b3) {
          var c = a.stateNode;
          switch (a.tag) {
            case 5:
              a = c;
              break;
            default:
              a = c;
          }
          "function" === typeof b3 ? b3(a) : b3.current = a;
        }
      }
      function Sj(a) {
        var b3 = a.alternate;
        null !== b3 && (a.alternate = null, Sj(b3));
        a.child = null;
        a.deletions = null;
        a.sibling = null;
        5 === a.tag && (b3 = a.stateNode, null !== b3 && (delete b3[Of2], delete b3[Pf2], delete b3[of2], delete b3[Qf2], delete b3[Rf2]));
        a.stateNode = null;
        a.return = null;
        a.dependencies = null;
        a.memoizedProps = null;
        a.memoizedState = null;
        a.pendingProps = null;
        a.stateNode = null;
        a.updateQueue = null;
      }
      function Tj(a) {
        return 5 === a.tag || 3 === a.tag || 4 === a.tag;
      }
      function Uj(a) {
        a: for (; ; ) {
          for (; null === a.sibling; ) {
            if (null === a.return || Tj(a.return)) return null;
            a = a.return;
          }
          a.sibling.return = a.return;
          for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
            if (a.flags & 2) continue a;
            if (null === a.child || 4 === a.tag) continue a;
            else a.child.return = a, a = a.child;
          }
          if (!(a.flags & 2)) return a.stateNode;
        }
      }
      function Vj(a, b3, c) {
        var d3 = a.tag;
        if (5 === d3 || 6 === d3) a = a.stateNode, b3 ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b3) : c.insertBefore(a, b3) : (8 === c.nodeType ? (b3 = c.parentNode, b3.insertBefore(a, c)) : (b3 = c, b3.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b3.onclick || (b3.onclick = Bf2));
        else if (4 !== d3 && (a = a.child, null !== a)) for (Vj(a, b3, c), a = a.sibling; null !== a; ) Vj(a, b3, c), a = a.sibling;
      }
      function Wj(a, b3, c) {
        var d3 = a.tag;
        if (5 === d3 || 6 === d3) a = a.stateNode, b3 ? c.insertBefore(a, b3) : c.appendChild(a);
        else if (4 !== d3 && (a = a.child, null !== a)) for (Wj(a, b3, c), a = a.sibling; null !== a; ) Wj(a, b3, c), a = a.sibling;
      }
      var X = null;
      var Xj = false;
      function Yj(a, b3, c) {
        for (c = c.child; null !== c; ) Zj(a, b3, c), c = c.sibling;
      }
      function Zj(a, b3, c) {
        if (lc2 && "function" === typeof lc2.onCommitFiberUnmount) try {
          lc2.onCommitFiberUnmount(kc2, c);
        } catch (h3) {
        }
        switch (c.tag) {
          case 5:
            U3 || Lj(c, b3);
          case 6:
            var d3 = X, e2 = Xj;
            X = null;
            Yj(a, b3, c);
            X = d3;
            Xj = e2;
            null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
            break;
          case 18:
            null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf2(a.parentNode, c) : 1 === a.nodeType && Kf2(a, c), bd2(a)) : Kf2(X, c.stateNode));
            break;
          case 4:
            d3 = X;
            e2 = Xj;
            X = c.stateNode.containerInfo;
            Xj = true;
            Yj(a, b3, c);
            X = d3;
            Xj = e2;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!U3 && (d3 = c.updateQueue, null !== d3 && (d3 = d3.lastEffect, null !== d3))) {
              e2 = d3 = d3.next;
              do {
                var f5 = e2, g5 = f5.destroy;
                f5 = f5.tag;
                void 0 !== g5 && (0 !== (f5 & 2) ? Mj(c, b3, g5) : 0 !== (f5 & 4) && Mj(c, b3, g5));
                e2 = e2.next;
              } while (e2 !== d3);
            }
            Yj(a, b3, c);
            break;
          case 1:
            if (!U3 && (Lj(c, b3), d3 = c.stateNode, "function" === typeof d3.componentWillUnmount)) try {
              d3.props = c.memoizedProps, d3.state = c.memoizedState, d3.componentWillUnmount();
            } catch (h3) {
              W4(c, b3, h3);
            }
            Yj(a, b3, c);
            break;
          case 21:
            Yj(a, b3, c);
            break;
          case 22:
            c.mode & 1 ? (U3 = (d3 = U3) || null !== c.memoizedState, Yj(a, b3, c), U3 = d3) : Yj(a, b3, c);
            break;
          default:
            Yj(a, b3, c);
        }
      }
      function ak(a) {
        var b3 = a.updateQueue;
        if (null !== b3) {
          a.updateQueue = null;
          var c = a.stateNode;
          null === c && (c = a.stateNode = new Kj());
          b3.forEach(function(b4) {
            var d3 = bk.bind(null, a, b4);
            c.has(b4) || (c.add(b4), b4.then(d3, d3));
          });
        }
      }
      function ck(a, b3) {
        var c = b3.deletions;
        if (null !== c) for (var d3 = 0; d3 < c.length; d3++) {
          var e2 = c[d3];
          try {
            var f5 = a, g5 = b3, h3 = g5;
            a: for (; null !== h3; ) {
              switch (h3.tag) {
                case 5:
                  X = h3.stateNode;
                  Xj = false;
                  break a;
                case 3:
                  X = h3.stateNode.containerInfo;
                  Xj = true;
                  break a;
                case 4:
                  X = h3.stateNode.containerInfo;
                  Xj = true;
                  break a;
              }
              h3 = h3.return;
            }
            if (null === X) throw Error(p(160));
            Zj(f5, g5, e2);
            X = null;
            Xj = false;
            var k4 = e2.alternate;
            null !== k4 && (k4.return = null);
            e2.return = null;
          } catch (l) {
            W4(e2, b3, l);
          }
        }
        if (b3.subtreeFlags & 12854) for (b3 = b3.child; null !== b3; ) dk(b3, a), b3 = b3.sibling;
      }
      function dk(a, b3) {
        var c = a.alternate, d3 = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ck(b3, a);
            ek(a);
            if (d3 & 4) {
              try {
                Pj(3, a, a.return), Qj(3, a);
              } catch (t) {
                W4(a, a.return, t);
              }
              try {
                Pj(5, a, a.return);
              } catch (t) {
                W4(a, a.return, t);
              }
            }
            break;
          case 1:
            ck(b3, a);
            ek(a);
            d3 & 512 && null !== c && Lj(c, c.return);
            break;
          case 5:
            ck(b3, a);
            ek(a);
            d3 & 512 && null !== c && Lj(c, c.return);
            if (a.flags & 32) {
              var e2 = a.stateNode;
              try {
                ob(e2, "");
              } catch (t) {
                W4(a, a.return, t);
              }
            }
            if (d3 & 4 && (e2 = a.stateNode, null != e2)) {
              var f5 = a.memoizedProps, g5 = null !== c ? c.memoizedProps : f5, h3 = a.type, k4 = a.updateQueue;
              a.updateQueue = null;
              if (null !== k4) try {
                "input" === h3 && "radio" === f5.type && null != f5.name && ab(e2, f5);
                vb(h3, g5);
                var l = vb(h3, f5);
                for (g5 = 0; g5 < k4.length; g5 += 2) {
                  var m = k4[g5], q5 = k4[g5 + 1];
                  "style" === m ? sb(e2, q5) : "dangerouslySetInnerHTML" === m ? nb(e2, q5) : "children" === m ? ob(e2, q5) : ta2(e2, m, q5, l);
                }
                switch (h3) {
                  case "input":
                    bb(e2, f5);
                    break;
                  case "textarea":
                    ib(e2, f5);
                    break;
                  case "select":
                    var r = e2._wrapperState.wasMultiple;
                    e2._wrapperState.wasMultiple = !!f5.multiple;
                    var y2 = f5.value;
                    null != y2 ? fb(e2, !!f5.multiple, y2, false) : r !== !!f5.multiple && (null != f5.defaultValue ? fb(
                      e2,
                      !!f5.multiple,
                      f5.defaultValue,
                      true
                    ) : fb(e2, !!f5.multiple, f5.multiple ? [] : "", false));
                }
                e2[Pf2] = f5;
              } catch (t) {
                W4(a, a.return, t);
              }
            }
            break;
          case 6:
            ck(b3, a);
            ek(a);
            if (d3 & 4) {
              if (null === a.stateNode) throw Error(p(162));
              e2 = a.stateNode;
              f5 = a.memoizedProps;
              try {
                e2.nodeValue = f5;
              } catch (t) {
                W4(a, a.return, t);
              }
            }
            break;
          case 3:
            ck(b3, a);
            ek(a);
            if (d3 & 4 && null !== c && c.memoizedState.isDehydrated) try {
              bd2(b3.containerInfo);
            } catch (t) {
              W4(a, a.return, t);
            }
            break;
          case 4:
            ck(b3, a);
            ek(a);
            break;
          case 13:
            ck(b3, a);
            ek(a);
            e2 = a.child;
            e2.flags & 8192 && (f5 = null !== e2.memoizedState, e2.stateNode.isHidden = f5, !f5 || null !== e2.alternate && null !== e2.alternate.memoizedState || (fk = B6()));
            d3 & 4 && ak(a);
            break;
          case 22:
            m = null !== c && null !== c.memoizedState;
            a.mode & 1 ? (U3 = (l = U3) || m, ck(b3, a), U3 = l) : ck(b3, a);
            ek(a);
            if (d3 & 8192) {
              l = null !== a.memoizedState;
              if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V5 = a, m = a.child; null !== m; ) {
                for (q5 = V5 = m; null !== V5; ) {
                  r = V5;
                  y2 = r.child;
                  switch (r.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Pj(4, r, r.return);
                      break;
                    case 1:
                      Lj(r, r.return);
                      var n = r.stateNode;
                      if ("function" === typeof n.componentWillUnmount) {
                        d3 = r;
                        c = r.return;
                        try {
                          b3 = d3, n.props = b3.memoizedProps, n.state = b3.memoizedState, n.componentWillUnmount();
                        } catch (t) {
                          W4(d3, c, t);
                        }
                      }
                      break;
                    case 5:
                      Lj(r, r.return);
                      break;
                    case 22:
                      if (null !== r.memoizedState) {
                        gk(q5);
                        continue;
                      }
                  }
                  null !== y2 ? (y2.return = r, V5 = y2) : gk(q5);
                }
                m = m.sibling;
              }
              a: for (m = null, q5 = a; ; ) {
                if (5 === q5.tag) {
                  if (null === m) {
                    m = q5;
                    try {
                      e2 = q5.stateNode, l ? (f5 = e2.style, "function" === typeof f5.setProperty ? f5.setProperty("display", "none", "important") : f5.display = "none") : (h3 = q5.stateNode, k4 = q5.memoizedProps.style, g5 = void 0 !== k4 && null !== k4 && k4.hasOwnProperty("display") ? k4.display : null, h3.style.display = rb("display", g5));
                    } catch (t) {
                      W4(a, a.return, t);
                    }
                  }
                } else if (6 === q5.tag) {
                  if (null === m) try {
                    q5.stateNode.nodeValue = l ? "" : q5.memoizedProps;
                  } catch (t) {
                    W4(a, a.return, t);
                  }
                } else if ((22 !== q5.tag && 23 !== q5.tag || null === q5.memoizedState || q5 === a) && null !== q5.child) {
                  q5.child.return = q5;
                  q5 = q5.child;
                  continue;
                }
                if (q5 === a) break a;
                for (; null === q5.sibling; ) {
                  if (null === q5.return || q5.return === a) break a;
                  m === q5 && (m = null);
                  q5 = q5.return;
                }
                m === q5 && (m = null);
                q5.sibling.return = q5.return;
                q5 = q5.sibling;
              }
            }
            break;
          case 19:
            ck(b3, a);
            ek(a);
            d3 & 4 && ak(a);
            break;
          case 21:
            break;
          default:
            ck(
              b3,
              a
            ), ek(a);
        }
      }
      function ek(a) {
        var b3 = a.flags;
        if (b3 & 2) {
          try {
            a: {
              for (var c = a.return; null !== c; ) {
                if (Tj(c)) {
                  var d3 = c;
                  break a;
                }
                c = c.return;
              }
              throw Error(p(160));
            }
            switch (d3.tag) {
              case 5:
                var e2 = d3.stateNode;
                d3.flags & 32 && (ob(e2, ""), d3.flags &= -33);
                var f5 = Uj(a);
                Wj(a, f5, e2);
                break;
              case 3:
              case 4:
                var g5 = d3.stateNode.containerInfo, h3 = Uj(a);
                Vj(a, h3, g5);
                break;
              default:
                throw Error(p(161));
            }
          } catch (k4) {
            W4(a, a.return, k4);
          }
          a.flags &= -3;
        }
        b3 & 4096 && (a.flags &= -4097);
      }
      function hk(a, b3, c) {
        V5 = a;
        ik(a, b3, c);
      }
      function ik(a, b3, c) {
        for (var d3 = 0 !== (a.mode & 1); null !== V5; ) {
          var e2 = V5, f5 = e2.child;
          if (22 === e2.tag && d3) {
            var g5 = null !== e2.memoizedState || Jj;
            if (!g5) {
              var h3 = e2.alternate, k4 = null !== h3 && null !== h3.memoizedState || U3;
              h3 = Jj;
              var l = U3;
              Jj = g5;
              if ((U3 = k4) && !l) for (V5 = e2; null !== V5; ) g5 = V5, k4 = g5.child, 22 === g5.tag && null !== g5.memoizedState ? jk(e2) : null !== k4 ? (k4.return = g5, V5 = k4) : jk(e2);
              for (; null !== f5; ) V5 = f5, ik(f5, b3, c), f5 = f5.sibling;
              V5 = e2;
              Jj = h3;
              U3 = l;
            }
            kk(a, b3, c);
          } else 0 !== (e2.subtreeFlags & 8772) && null !== f5 ? (f5.return = e2, V5 = f5) : kk(a, b3, c);
        }
      }
      function kk(a) {
        for (; null !== V5; ) {
          var b3 = V5;
          if (0 !== (b3.flags & 8772)) {
            var c = b3.alternate;
            try {
              if (0 !== (b3.flags & 8772)) switch (b3.tag) {
                case 0:
                case 11:
                case 15:
                  U3 || Qj(5, b3);
                  break;
                case 1:
                  var d3 = b3.stateNode;
                  if (b3.flags & 4 && !U3) if (null === c) d3.componentDidMount();
                  else {
                    var e2 = b3.elementType === b3.type ? c.memoizedProps : Ci2(b3.type, c.memoizedProps);
                    d3.componentDidUpdate(e2, c.memoizedState, d3.__reactInternalSnapshotBeforeUpdate);
                  }
                  var f5 = b3.updateQueue;
                  null !== f5 && sh2(b3, f5, d3);
                  break;
                case 3:
                  var g5 = b3.updateQueue;
                  if (null !== g5) {
                    c = null;
                    if (null !== b3.child) switch (b3.child.tag) {
                      case 5:
                        c = b3.child.stateNode;
                        break;
                      case 1:
                        c = b3.child.stateNode;
                    }
                    sh2(b3, g5, c);
                  }
                  break;
                case 5:
                  var h3 = b3.stateNode;
                  if (null === c && b3.flags & 4) {
                    c = h3;
                    var k4 = b3.memoizedProps;
                    switch (b3.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        k4.autoFocus && c.focus();
                        break;
                      case "img":
                        k4.src && (c.src = k4.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (null === b3.memoizedState) {
                    var l = b3.alternate;
                    if (null !== l) {
                      var m = l.memoizedState;
                      if (null !== m) {
                        var q5 = m.dehydrated;
                        null !== q5 && bd2(q5);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(p(163));
              }
              U3 || b3.flags & 512 && Rj(b3);
            } catch (r) {
              W4(b3, b3.return, r);
            }
          }
          if (b3 === a) {
            V5 = null;
            break;
          }
          c = b3.sibling;
          if (null !== c) {
            c.return = b3.return;
            V5 = c;
            break;
          }
          V5 = b3.return;
        }
      }
      function gk(a) {
        for (; null !== V5; ) {
          var b3 = V5;
          if (b3 === a) {
            V5 = null;
            break;
          }
          var c = b3.sibling;
          if (null !== c) {
            c.return = b3.return;
            V5 = c;
            break;
          }
          V5 = b3.return;
        }
      }
      function jk(a) {
        for (; null !== V5; ) {
          var b3 = V5;
          try {
            switch (b3.tag) {
              case 0:
              case 11:
              case 15:
                var c = b3.return;
                try {
                  Qj(4, b3);
                } catch (k4) {
                  W4(b3, c, k4);
                }
                break;
              case 1:
                var d3 = b3.stateNode;
                if ("function" === typeof d3.componentDidMount) {
                  var e2 = b3.return;
                  try {
                    d3.componentDidMount();
                  } catch (k4) {
                    W4(b3, e2, k4);
                  }
                }
                var f5 = b3.return;
                try {
                  Rj(b3);
                } catch (k4) {
                  W4(b3, f5, k4);
                }
                break;
              case 5:
                var g5 = b3.return;
                try {
                  Rj(b3);
                } catch (k4) {
                  W4(b3, g5, k4);
                }
            }
          } catch (k4) {
            W4(b3, b3.return, k4);
          }
          if (b3 === a) {
            V5 = null;
            break;
          }
          var h3 = b3.sibling;
          if (null !== h3) {
            h3.return = b3.return;
            V5 = h3;
            break;
          }
          V5 = b3.return;
        }
      }
      var lk = Math.ceil;
      var mk = ua2.ReactCurrentDispatcher;
      var nk = ua2.ReactCurrentOwner;
      var ok = ua2.ReactCurrentBatchConfig;
      var K3 = 0;
      var Q2 = null;
      var Y3 = null;
      var Z2 = 0;
      var fj = 0;
      var ej = Uf2(0);
      var T7 = 0;
      var pk = null;
      var rh2 = 0;
      var qk = 0;
      var rk = 0;
      var sk = null;
      var tk = null;
      var fk = 0;
      var Gj = Infinity;
      var uk = null;
      var Oi2 = false;
      var Pi2 = null;
      var Ri2 = null;
      var vk = false;
      var wk = null;
      var xk = 0;
      var yk = 0;
      var zk = null;
      var Ak = -1;
      var Bk = 0;
      function R8() {
        return 0 !== (K3 & 6) ? B6() : -1 !== Ak ? Ak : Ak = B6();
      }
      function yi2(a) {
        if (0 === (a.mode & 1)) return 1;
        if (0 !== (K3 & 2) && 0 !== Z2) return Z2 & -Z2;
        if (null !== Kg.transition) return 0 === Bk && (Bk = yc2()), Bk;
        a = C4;
        if (0 !== a) return a;
        a = window.event;
        a = void 0 === a ? 16 : jd2(a.type);
        return a;
      }
      function gi2(a, b3, c, d3) {
        if (50 < yk) throw yk = 0, zk = null, Error(p(185));
        Ac2(a, c, d3);
        if (0 === (K3 & 2) || a !== Q2) a === Q2 && (0 === (K3 & 2) && (qk |= c), 4 === T7 && Ck(a, Z2)), Dk(a, d3), 1 === c && 0 === K3 && 0 === (b3.mode & 1) && (Gj = B6() + 500, fg && jg());
      }
      function Dk(a, b3) {
        var c = a.callbackNode;
        wc2(a, b3);
        var d3 = uc2(a, a === Q2 ? Z2 : 0);
        if (0 === d3) null !== c && bc2(c), a.callbackNode = null, a.callbackPriority = 0;
        else if (b3 = d3 & -d3, a.callbackPriority !== b3) {
          null != c && bc2(c);
          if (1 === b3) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf2(function() {
            0 === (K3 & 6) && jg();
          }), c = null;
          else {
            switch (Dc2(d3)) {
              case 1:
                c = fc2;
                break;
              case 4:
                c = gc2;
                break;
              case 16:
                c = hc2;
                break;
              case 536870912:
                c = jc2;
                break;
              default:
                c = hc2;
            }
            c = Fk(c, Gk.bind(null, a));
          }
          a.callbackPriority = b3;
          a.callbackNode = c;
        }
      }
      function Gk(a, b3) {
        Ak = -1;
        Bk = 0;
        if (0 !== (K3 & 6)) throw Error(p(327));
        var c = a.callbackNode;
        if (Hk() && a.callbackNode !== c) return null;
        var d3 = uc2(a, a === Q2 ? Z2 : 0);
        if (0 === d3) return null;
        if (0 !== (d3 & 30) || 0 !== (d3 & a.expiredLanes) || b3) b3 = Ik(a, d3);
        else {
          b3 = d3;
          var e2 = K3;
          K3 |= 2;
          var f5 = Jk();
          if (Q2 !== a || Z2 !== b3) uk = null, Gj = B6() + 500, Kk(a, b3);
          do
            try {
              Lk();
              break;
            } catch (h3) {
              Mk(a, h3);
            }
          while (1);
          $g();
          mk.current = f5;
          K3 = e2;
          null !== Y3 ? b3 = 0 : (Q2 = null, Z2 = 0, b3 = T7);
        }
        if (0 !== b3) {
          2 === b3 && (e2 = xc2(a), 0 !== e2 && (d3 = e2, b3 = Nk(a, e2)));
          if (1 === b3) throw c = pk, Kk(a, 0), Ck(a, d3), Dk(a, B6()), c;
          if (6 === b3) Ck(a, d3);
          else {
            e2 = a.current.alternate;
            if (0 === (d3 & 30) && !Ok(e2) && (b3 = Ik(a, d3), 2 === b3 && (f5 = xc2(a), 0 !== f5 && (d3 = f5, b3 = Nk(a, f5))), 1 === b3)) throw c = pk, Kk(a, 0), Ck(a, d3), Dk(a, B6()), c;
            a.finishedWork = e2;
            a.finishedLanes = d3;
            switch (b3) {
              case 0:
              case 1:
                throw Error(p(345));
              case 2:
                Pk(a, tk, uk);
                break;
              case 3:
                Ck(a, d3);
                if ((d3 & 130023424) === d3 && (b3 = fk + 500 - B6(), 10 < b3)) {
                  if (0 !== uc2(a, 0)) break;
                  e2 = a.suspendedLanes;
                  if ((e2 & d3) !== d3) {
                    R8();
                    a.pingedLanes |= a.suspendedLanes & e2;
                    break;
                  }
                  a.timeoutHandle = Ff2(Pk.bind(null, a, tk, uk), b3);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 4:
                Ck(a, d3);
                if ((d3 & 4194240) === d3) break;
                b3 = a.eventTimes;
                for (e2 = -1; 0 < d3; ) {
                  var g5 = 31 - oc2(d3);
                  f5 = 1 << g5;
                  g5 = b3[g5];
                  g5 > e2 && (e2 = g5);
                  d3 &= ~f5;
                }
                d3 = e2;
                d3 = B6() - d3;
                d3 = (120 > d3 ? 120 : 480 > d3 ? 480 : 1080 > d3 ? 1080 : 1920 > d3 ? 1920 : 3e3 > d3 ? 3e3 : 4320 > d3 ? 4320 : 1960 * lk(d3 / 1960)) - d3;
                if (10 < d3) {
                  a.timeoutHandle = Ff2(Pk.bind(null, a, tk, uk), d3);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 5:
                Pk(a, tk, uk);
                break;
              default:
                throw Error(p(329));
            }
          }
        }
        Dk(a, B6());
        return a.callbackNode === c ? Gk.bind(null, a) : null;
      }
      function Nk(a, b3) {
        var c = sk;
        a.current.memoizedState.isDehydrated && (Kk(a, b3).flags |= 256);
        a = Ik(a, b3);
        2 !== a && (b3 = tk, tk = c, null !== b3 && Fj(b3));
        return a;
      }
      function Fj(a) {
        null === tk ? tk = a : tk.push.apply(tk, a);
      }
      function Ok(a) {
        for (var b3 = a; ; ) {
          if (b3.flags & 16384) {
            var c = b3.updateQueue;
            if (null !== c && (c = c.stores, null !== c)) for (var d3 = 0; d3 < c.length; d3++) {
              var e2 = c[d3], f5 = e2.getSnapshot;
              e2 = e2.value;
              try {
                if (!He2(f5(), e2)) return false;
              } catch (g5) {
                return false;
              }
            }
          }
          c = b3.child;
          if (b3.subtreeFlags & 16384 && null !== c) c.return = b3, b3 = c;
          else {
            if (b3 === a) break;
            for (; null === b3.sibling; ) {
              if (null === b3.return || b3.return === a) return true;
              b3 = b3.return;
            }
            b3.sibling.return = b3.return;
            b3 = b3.sibling;
          }
        }
        return true;
      }
      function Ck(a, b3) {
        b3 &= ~rk;
        b3 &= ~qk;
        a.suspendedLanes |= b3;
        a.pingedLanes &= ~b3;
        for (a = a.expirationTimes; 0 < b3; ) {
          var c = 31 - oc2(b3), d3 = 1 << c;
          a[c] = -1;
          b3 &= ~d3;
        }
      }
      function Ek(a) {
        if (0 !== (K3 & 6)) throw Error(p(327));
        Hk();
        var b3 = uc2(a, 0);
        if (0 === (b3 & 1)) return Dk(a, B6()), null;
        var c = Ik(a, b3);
        if (0 !== a.tag && 2 === c) {
          var d3 = xc2(a);
          0 !== d3 && (b3 = d3, c = Nk(a, d3));
        }
        if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b3), Dk(a, B6()), c;
        if (6 === c) throw Error(p(345));
        a.finishedWork = a.current.alternate;
        a.finishedLanes = b3;
        Pk(a, tk, uk);
        Dk(a, B6());
        return null;
      }
      function Qk(a, b3) {
        var c = K3;
        K3 |= 1;
        try {
          return a(b3);
        } finally {
          K3 = c, 0 === K3 && (Gj = B6() + 500, fg && jg());
        }
      }
      function Rk(a) {
        null !== wk && 0 === wk.tag && 0 === (K3 & 6) && Hk();
        var b3 = K3;
        K3 |= 1;
        var c = ok.transition, d3 = C4;
        try {
          if (ok.transition = null, C4 = 1, a) return a();
        } finally {
          C4 = d3, ok.transition = c, K3 = b3, 0 === (K3 & 6) && jg();
        }
      }
      function Hj() {
        fj = ej.current;
        E3(ej);
      }
      function Kk(a, b3) {
        a.finishedWork = null;
        a.finishedLanes = 0;
        var c = a.timeoutHandle;
        -1 !== c && (a.timeoutHandle = -1, Gf2(c));
        if (null !== Y3) for (c = Y3.return; null !== c; ) {
          var d3 = c;
          wg(d3);
          switch (d3.tag) {
            case 1:
              d3 = d3.type.childContextTypes;
              null !== d3 && void 0 !== d3 && $f2();
              break;
            case 3:
              zh2();
              E3(Wf2);
              E3(H);
              Eh2();
              break;
            case 5:
              Bh2(d3);
              break;
            case 4:
              zh2();
              break;
            case 13:
              E3(L5);
              break;
            case 19:
              E3(L5);
              break;
            case 10:
              ah2(d3.type._context);
              break;
            case 22:
            case 23:
              Hj();
          }
          c = c.return;
        }
        Q2 = a;
        Y3 = a = Pg(a.current, null);
        Z2 = fj = b3;
        T7 = 0;
        pk = null;
        rk = qk = rh2 = 0;
        tk = sk = null;
        if (null !== fh2) {
          for (b3 = 0; b3 < fh2.length; b3++) if (c = fh2[b3], d3 = c.interleaved, null !== d3) {
            c.interleaved = null;
            var e2 = d3.next, f5 = c.pending;
            if (null !== f5) {
              var g5 = f5.next;
              f5.next = e2;
              d3.next = g5;
            }
            c.pending = d3;
          }
          fh2 = null;
        }
        return a;
      }
      function Mk(a, b3) {
        do {
          var c = Y3;
          try {
            $g();
            Fh2.current = Rh2;
            if (Ih2) {
              for (var d3 = M3.memoizedState; null !== d3; ) {
                var e2 = d3.queue;
                null !== e2 && (e2.pending = null);
                d3 = d3.next;
              }
              Ih2 = false;
            }
            Hh2 = 0;
            O6 = N4 = M3 = null;
            Jh2 = false;
            Kh2 = 0;
            nk.current = null;
            if (null === c || null === c.return) {
              T7 = 1;
              pk = b3;
              Y3 = null;
              break;
            }
            a: {
              var f5 = a, g5 = c.return, h3 = c, k4 = b3;
              b3 = Z2;
              h3.flags |= 32768;
              if (null !== k4 && "object" === typeof k4 && "function" === typeof k4.then) {
                var l = k4, m = h3, q5 = m.tag;
                if (0 === (m.mode & 1) && (0 === q5 || 11 === q5 || 15 === q5)) {
                  var r = m.alternate;
                  r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
                }
                var y2 = Ui2(g5);
                if (null !== y2) {
                  y2.flags &= -257;
                  Vi2(y2, g5, h3, f5, b3);
                  y2.mode & 1 && Si2(f5, l, b3);
                  b3 = y2;
                  k4 = l;
                  var n = b3.updateQueue;
                  if (null === n) {
                    var t = /* @__PURE__ */ new Set();
                    t.add(k4);
                    b3.updateQueue = t;
                  } else n.add(k4);
                  break a;
                } else {
                  if (0 === (b3 & 1)) {
                    Si2(f5, l, b3);
                    tj();
                    break a;
                  }
                  k4 = Error(p(426));
                }
              } else if (I4 && h3.mode & 1) {
                var J3 = Ui2(g5);
                if (null !== J3) {
                  0 === (J3.flags & 65536) && (J3.flags |= 256);
                  Vi2(J3, g5, h3, f5, b3);
                  Jg(Ji2(k4, h3));
                  break a;
                }
              }
              f5 = k4 = Ji2(k4, h3);
              4 !== T7 && (T7 = 2);
              null === sk ? sk = [f5] : sk.push(f5);
              f5 = g5;
              do {
                switch (f5.tag) {
                  case 3:
                    f5.flags |= 65536;
                    b3 &= -b3;
                    f5.lanes |= b3;
                    var x5 = Ni2(f5, k4, b3);
                    ph2(f5, x5);
                    break a;
                  case 1:
                    h3 = k4;
                    var w2 = f5.type, u = f5.stateNode;
                    if (0 === (f5.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri2 || !Ri2.has(u)))) {
                      f5.flags |= 65536;
                      b3 &= -b3;
                      f5.lanes |= b3;
                      var F2 = Qi2(f5, h3, b3);
                      ph2(f5, F2);
                      break a;
                    }
                }
                f5 = f5.return;
              } while (null !== f5);
            }
            Sk(c);
          } catch (na2) {
            b3 = na2;
            Y3 === c && null !== c && (Y3 = c = c.return);
            continue;
          }
          break;
        } while (1);
      }
      function Jk() {
        var a = mk.current;
        mk.current = Rh2;
        return null === a ? Rh2 : a;
      }
      function tj() {
        if (0 === T7 || 3 === T7 || 2 === T7) T7 = 4;
        null === Q2 || 0 === (rh2 & 268435455) && 0 === (qk & 268435455) || Ck(Q2, Z2);
      }
      function Ik(a, b3) {
        var c = K3;
        K3 |= 2;
        var d3 = Jk();
        if (Q2 !== a || Z2 !== b3) uk = null, Kk(a, b3);
        do
          try {
            Tk();
            break;
          } catch (e2) {
            Mk(a, e2);
          }
        while (1);
        $g();
        K3 = c;
        mk.current = d3;
        if (null !== Y3) throw Error(p(261));
        Q2 = null;
        Z2 = 0;
        return T7;
      }
      function Tk() {
        for (; null !== Y3; ) Uk(Y3);
      }
      function Lk() {
        for (; null !== Y3 && !cc2(); ) Uk(Y3);
      }
      function Uk(a) {
        var b3 = Vk(a.alternate, a, fj);
        a.memoizedProps = a.pendingProps;
        null === b3 ? Sk(a) : Y3 = b3;
        nk.current = null;
      }
      function Sk(a) {
        var b3 = a;
        do {
          var c = b3.alternate;
          a = b3.return;
          if (0 === (b3.flags & 32768)) {
            if (c = Ej(c, b3, fj), null !== c) {
              Y3 = c;
              return;
            }
          } else {
            c = Ij(c, b3);
            if (null !== c) {
              c.flags &= 32767;
              Y3 = c;
              return;
            }
            if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
            else {
              T7 = 6;
              Y3 = null;
              return;
            }
          }
          b3 = b3.sibling;
          if (null !== b3) {
            Y3 = b3;
            return;
          }
          Y3 = b3 = a;
        } while (null !== b3);
        0 === T7 && (T7 = 5);
      }
      function Pk(a, b3, c) {
        var d3 = C4, e2 = ok.transition;
        try {
          ok.transition = null, C4 = 1, Wk(a, b3, c, d3);
        } finally {
          ok.transition = e2, C4 = d3;
        }
        return null;
      }
      function Wk(a, b3, c, d3) {
        do
          Hk();
        while (null !== wk);
        if (0 !== (K3 & 6)) throw Error(p(327));
        c = a.finishedWork;
        var e2 = a.finishedLanes;
        if (null === c) return null;
        a.finishedWork = null;
        a.finishedLanes = 0;
        if (c === a.current) throw Error(p(177));
        a.callbackNode = null;
        a.callbackPriority = 0;
        var f5 = c.lanes | c.childLanes;
        Bc2(a, f5);
        a === Q2 && (Y3 = Q2 = null, Z2 = 0);
        0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc2, function() {
          Hk();
          return null;
        }));
        f5 = 0 !== (c.flags & 15990);
        if (0 !== (c.subtreeFlags & 15990) || f5) {
          f5 = ok.transition;
          ok.transition = null;
          var g5 = C4;
          C4 = 1;
          var h3 = K3;
          K3 |= 4;
          nk.current = null;
          Oj(a, c);
          dk(c, a);
          Oe(Df);
          dd2 = !!Cf2;
          Df = Cf2 = null;
          a.current = c;
          hk(c, a, e2);
          dc2();
          K3 = h3;
          C4 = g5;
          ok.transition = f5;
        } else a.current = c;
        vk && (vk = false, wk = a, xk = e2);
        f5 = a.pendingLanes;
        0 === f5 && (Ri2 = null);
        mc2(c.stateNode, d3);
        Dk(a, B6());
        if (null !== b3) for (d3 = a.onRecoverableError, c = 0; c < b3.length; c++) e2 = b3[c], d3(e2.value, { componentStack: e2.stack, digest: e2.digest });
        if (Oi2) throw Oi2 = false, a = Pi2, Pi2 = null, a;
        0 !== (xk & 1) && 0 !== a.tag && Hk();
        f5 = a.pendingLanes;
        0 !== (f5 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
        jg();
        return null;
      }
      function Hk() {
        if (null !== wk) {
          var a = Dc2(xk), b3 = ok.transition, c = C4;
          try {
            ok.transition = null;
            C4 = 16 > a ? 16 : a;
            if (null === wk) var d3 = false;
            else {
              a = wk;
              wk = null;
              xk = 0;
              if (0 !== (K3 & 6)) throw Error(p(331));
              var e2 = K3;
              K3 |= 4;
              for (V5 = a.current; null !== V5; ) {
                var f5 = V5, g5 = f5.child;
                if (0 !== (V5.flags & 16)) {
                  var h3 = f5.deletions;
                  if (null !== h3) {
                    for (var k4 = 0; k4 < h3.length; k4++) {
                      var l = h3[k4];
                      for (V5 = l; null !== V5; ) {
                        var m = V5;
                        switch (m.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Pj(8, m, f5);
                        }
                        var q5 = m.child;
                        if (null !== q5) q5.return = m, V5 = q5;
                        else for (; null !== V5; ) {
                          m = V5;
                          var r = m.sibling, y2 = m.return;
                          Sj(m);
                          if (m === l) {
                            V5 = null;
                            break;
                          }
                          if (null !== r) {
                            r.return = y2;
                            V5 = r;
                            break;
                          }
                          V5 = y2;
                        }
                      }
                    }
                    var n = f5.alternate;
                    if (null !== n) {
                      var t = n.child;
                      if (null !== t) {
                        n.child = null;
                        do {
                          var J3 = t.sibling;
                          t.sibling = null;
                          t = J3;
                        } while (null !== t);
                      }
                    }
                    V5 = f5;
                  }
                }
                if (0 !== (f5.subtreeFlags & 2064) && null !== g5) g5.return = f5, V5 = g5;
                else b: for (; null !== V5; ) {
                  f5 = V5;
                  if (0 !== (f5.flags & 2048)) switch (f5.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(9, f5, f5.return);
                  }
                  var x5 = f5.sibling;
                  if (null !== x5) {
                    x5.return = f5.return;
                    V5 = x5;
                    break b;
                  }
                  V5 = f5.return;
                }
              }
              var w2 = a.current;
              for (V5 = w2; null !== V5; ) {
                g5 = V5;
                var u = g5.child;
                if (0 !== (g5.subtreeFlags & 2064) && null !== u) u.return = g5, V5 = u;
                else b: for (g5 = w2; null !== V5; ) {
                  h3 = V5;
                  if (0 !== (h3.flags & 2048)) try {
                    switch (h3.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(9, h3);
                    }
                  } catch (na2) {
                    W4(h3, h3.return, na2);
                  }
                  if (h3 === g5) {
                    V5 = null;
                    break b;
                  }
                  var F2 = h3.sibling;
                  if (null !== F2) {
                    F2.return = h3.return;
                    V5 = F2;
                    break b;
                  }
                  V5 = h3.return;
                }
              }
              K3 = e2;
              jg();
              if (lc2 && "function" === typeof lc2.onPostCommitFiberRoot) try {
                lc2.onPostCommitFiberRoot(kc2, a);
              } catch (na2) {
              }
              d3 = true;
            }
            return d3;
          } finally {
            C4 = c, ok.transition = b3;
          }
        }
        return false;
      }
      function Xk(a, b3, c) {
        b3 = Ji2(c, b3);
        b3 = Ni2(a, b3, 1);
        a = nh2(a, b3, 1);
        b3 = R8();
        null !== a && (Ac2(a, 1, b3), Dk(a, b3));
      }
      function W4(a, b3, c) {
        if (3 === a.tag) Xk(a, a, c);
        else for (; null !== b3; ) {
          if (3 === b3.tag) {
            Xk(b3, a, c);
            break;
          } else if (1 === b3.tag) {
            var d3 = b3.stateNode;
            if ("function" === typeof b3.type.getDerivedStateFromError || "function" === typeof d3.componentDidCatch && (null === Ri2 || !Ri2.has(d3))) {
              a = Ji2(c, a);
              a = Qi2(b3, a, 1);
              b3 = nh2(b3, a, 1);
              a = R8();
              null !== b3 && (Ac2(b3, 1, a), Dk(b3, a));
              break;
            }
          }
          b3 = b3.return;
        }
      }
      function Ti2(a, b3, c) {
        var d3 = a.pingCache;
        null !== d3 && d3.delete(b3);
        b3 = R8();
        a.pingedLanes |= a.suspendedLanes & c;
        Q2 === a && (Z2 & c) === c && (4 === T7 || 3 === T7 && (Z2 & 130023424) === Z2 && 500 > B6() - fk ? Kk(a, 0) : rk |= c);
        Dk(a, b3);
      }
      function Yk(a, b3) {
        0 === b3 && (0 === (a.mode & 1) ? b3 = 1 : (b3 = sc2, sc2 <<= 1, 0 === (sc2 & 130023424) && (sc2 = 4194304)));
        var c = R8();
        a = ih2(a, b3);
        null !== a && (Ac2(a, b3, c), Dk(a, c));
      }
      function uj(a) {
        var b3 = a.memoizedState, c = 0;
        null !== b3 && (c = b3.retryLane);
        Yk(a, c);
      }
      function bk(a, b3) {
        var c = 0;
        switch (a.tag) {
          case 13:
            var d3 = a.stateNode;
            var e2 = a.memoizedState;
            null !== e2 && (c = e2.retryLane);
            break;
          case 19:
            d3 = a.stateNode;
            break;
          default:
            throw Error(p(314));
        }
        null !== d3 && d3.delete(b3);
        Yk(a, c);
      }
      var Vk;
      Vk = function(a, b3, c) {
        if (null !== a) if (a.memoizedProps !== b3.pendingProps || Wf2.current) dh2 = true;
        else {
          if (0 === (a.lanes & c) && 0 === (b3.flags & 128)) return dh2 = false, yj(a, b3, c);
          dh2 = 0 !== (a.flags & 131072) ? true : false;
        }
        else dh2 = false, I4 && 0 !== (b3.flags & 1048576) && ug(b3, ng, b3.index);
        b3.lanes = 0;
        switch (b3.tag) {
          case 2:
            var d3 = b3.type;
            ij(a, b3);
            a = b3.pendingProps;
            var e2 = Yf2(b3, H.current);
            ch(b3, c);
            e2 = Nh2(null, b3, d3, a, e2, c);
            var f5 = Sh2();
            b3.flags |= 1;
            "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b3.tag = 1, b3.memoizedState = null, b3.updateQueue = null, Zf2(d3) ? (f5 = true, cg(b3)) : f5 = false, b3.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, kh2(b3), e2.updater = Ei, b3.stateNode = e2, e2._reactInternals = b3, Ii2(b3, d3, a, c), b3 = jj(null, b3, d3, true, f5, c)) : (b3.tag = 0, I4 && f5 && vg(b3), Xi2(null, b3, e2, c), b3 = b3.child);
            return b3;
          case 16:
            d3 = b3.elementType;
            a: {
              ij(a, b3);
              a = b3.pendingProps;
              e2 = d3._init;
              d3 = e2(d3._payload);
              b3.type = d3;
              e2 = b3.tag = Zk(d3);
              a = Ci2(d3, a);
              switch (e2) {
                case 0:
                  b3 = cj(null, b3, d3, a, c);
                  break a;
                case 1:
                  b3 = hj(null, b3, d3, a, c);
                  break a;
                case 11:
                  b3 = Yi2(null, b3, d3, a, c);
                  break a;
                case 14:
                  b3 = $i2(null, b3, d3, Ci2(d3.type, a), c);
                  break a;
              }
              throw Error(p(
                306,
                d3,
                ""
              ));
            }
            return b3;
          case 0:
            return d3 = b3.type, e2 = b3.pendingProps, e2 = b3.elementType === d3 ? e2 : Ci2(d3, e2), cj(a, b3, d3, e2, c);
          case 1:
            return d3 = b3.type, e2 = b3.pendingProps, e2 = b3.elementType === d3 ? e2 : Ci2(d3, e2), hj(a, b3, d3, e2, c);
          case 3:
            a: {
              kj(b3);
              if (null === a) throw Error(p(387));
              d3 = b3.pendingProps;
              f5 = b3.memoizedState;
              e2 = f5.element;
              lh2(a, b3);
              qh2(b3, d3, null, c);
              var g5 = b3.memoizedState;
              d3 = g5.element;
              if (f5.isDehydrated) if (f5 = { element: d3, isDehydrated: false, cache: g5.cache, pendingSuspenseBoundaries: g5.pendingSuspenseBoundaries, transitions: g5.transitions }, b3.updateQueue.baseState = f5, b3.memoizedState = f5, b3.flags & 256) {
                e2 = Ji2(Error(p(423)), b3);
                b3 = lj(a, b3, d3, c, e2);
                break a;
              } else if (d3 !== e2) {
                e2 = Ji2(Error(p(424)), b3);
                b3 = lj(a, b3, d3, c, e2);
                break a;
              } else for (yg = Lf2(b3.stateNode.containerInfo.firstChild), xg = b3, I4 = true, zg = null, c = Vg(b3, null, d3, c), b3.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
              else {
                Ig();
                if (d3 === e2) {
                  b3 = Zi2(a, b3, c);
                  break a;
                }
                Xi2(a, b3, d3, c);
              }
              b3 = b3.child;
            }
            return b3;
          case 5:
            return Ah2(b3), null === a && Eg(b3), d3 = b3.type, e2 = b3.pendingProps, f5 = null !== a ? a.memoizedProps : null, g5 = e2.children, Ef2(d3, e2) ? g5 = null : null !== f5 && Ef2(d3, f5) && (b3.flags |= 32), gj(a, b3), Xi2(a, b3, g5, c), b3.child;
          case 6:
            return null === a && Eg(b3), null;
          case 13:
            return oj(a, b3, c);
          case 4:
            return yh2(b3, b3.stateNode.containerInfo), d3 = b3.pendingProps, null === a ? b3.child = Ug(b3, null, d3, c) : Xi2(a, b3, d3, c), b3.child;
          case 11:
            return d3 = b3.type, e2 = b3.pendingProps, e2 = b3.elementType === d3 ? e2 : Ci2(d3, e2), Yi2(a, b3, d3, e2, c);
          case 7:
            return Xi2(a, b3, b3.pendingProps, c), b3.child;
          case 8:
            return Xi2(a, b3, b3.pendingProps.children, c), b3.child;
          case 12:
            return Xi2(a, b3, b3.pendingProps.children, c), b3.child;
          case 10:
            a: {
              d3 = b3.type._context;
              e2 = b3.pendingProps;
              f5 = b3.memoizedProps;
              g5 = e2.value;
              G2(Wg, d3._currentValue);
              d3._currentValue = g5;
              if (null !== f5) if (He2(f5.value, g5)) {
                if (f5.children === e2.children && !Wf2.current) {
                  b3 = Zi2(a, b3, c);
                  break a;
                }
              } else for (f5 = b3.child, null !== f5 && (f5.return = b3); null !== f5; ) {
                var h3 = f5.dependencies;
                if (null !== h3) {
                  g5 = f5.child;
                  for (var k4 = h3.firstContext; null !== k4; ) {
                    if (k4.context === d3) {
                      if (1 === f5.tag) {
                        k4 = mh2(-1, c & -c);
                        k4.tag = 2;
                        var l = f5.updateQueue;
                        if (null !== l) {
                          l = l.shared;
                          var m = l.pending;
                          null === m ? k4.next = k4 : (k4.next = m.next, m.next = k4);
                          l.pending = k4;
                        }
                      }
                      f5.lanes |= c;
                      k4 = f5.alternate;
                      null !== k4 && (k4.lanes |= c);
                      bh2(
                        f5.return,
                        c,
                        b3
                      );
                      h3.lanes |= c;
                      break;
                    }
                    k4 = k4.next;
                  }
                } else if (10 === f5.tag) g5 = f5.type === b3.type ? null : f5.child;
                else if (18 === f5.tag) {
                  g5 = f5.return;
                  if (null === g5) throw Error(p(341));
                  g5.lanes |= c;
                  h3 = g5.alternate;
                  null !== h3 && (h3.lanes |= c);
                  bh2(g5, c, b3);
                  g5 = f5.sibling;
                } else g5 = f5.child;
                if (null !== g5) g5.return = f5;
                else for (g5 = f5; null !== g5; ) {
                  if (g5 === b3) {
                    g5 = null;
                    break;
                  }
                  f5 = g5.sibling;
                  if (null !== f5) {
                    f5.return = g5.return;
                    g5 = f5;
                    break;
                  }
                  g5 = g5.return;
                }
                f5 = g5;
              }
              Xi2(a, b3, e2.children, c);
              b3 = b3.child;
            }
            return b3;
          case 9:
            return e2 = b3.type, d3 = b3.pendingProps.children, ch(b3, c), e2 = eh2(e2), d3 = d3(e2), b3.flags |= 1, Xi2(a, b3, d3, c), b3.child;
          case 14:
            return d3 = b3.type, e2 = Ci2(d3, b3.pendingProps), e2 = Ci2(d3.type, e2), $i2(a, b3, d3, e2, c);
          case 15:
            return bj(a, b3, b3.type, b3.pendingProps, c);
          case 17:
            return d3 = b3.type, e2 = b3.pendingProps, e2 = b3.elementType === d3 ? e2 : Ci2(d3, e2), ij(a, b3), b3.tag = 1, Zf2(d3) ? (a = true, cg(b3)) : a = false, ch(b3, c), Gi2(b3, d3, e2), Ii2(b3, d3, e2, c), jj(null, b3, d3, true, a, c);
          case 19:
            return xj(a, b3, c);
          case 22:
            return dj(a, b3, c);
        }
        throw Error(p(156, b3.tag));
      };
      function Fk(a, b3) {
        return ac2(a, b3);
      }
      function $k(a, b3, c, d3) {
        this.tag = a;
        this.key = c;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b3;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d3;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function Bg(a, b3, c, d3) {
        return new $k(a, b3, c, d3);
      }
      function aj(a) {
        a = a.prototype;
        return !(!a || !a.isReactComponent);
      }
      function Zk(a) {
        if ("function" === typeof a) return aj(a) ? 1 : 0;
        if (void 0 !== a && null !== a) {
          a = a.$$typeof;
          if (a === Da2) return 11;
          if (a === Ga2) return 14;
        }
        return 2;
      }
      function Pg(a, b3) {
        var c = a.alternate;
        null === c ? (c = Bg(a.tag, b3, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b3, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
        c.flags = a.flags & 14680064;
        c.childLanes = a.childLanes;
        c.lanes = a.lanes;
        c.child = a.child;
        c.memoizedProps = a.memoizedProps;
        c.memoizedState = a.memoizedState;
        c.updateQueue = a.updateQueue;
        b3 = a.dependencies;
        c.dependencies = null === b3 ? null : { lanes: b3.lanes, firstContext: b3.firstContext };
        c.sibling = a.sibling;
        c.index = a.index;
        c.ref = a.ref;
        return c;
      }
      function Rg(a, b3, c, d3, e2, f5) {
        var g5 = 2;
        d3 = a;
        if ("function" === typeof a) aj(a) && (g5 = 1);
        else if ("string" === typeof a) g5 = 5;
        else a: switch (a) {
          case ya2:
            return Tg(c.children, e2, f5, b3);
          case za2:
            g5 = 8;
            e2 |= 8;
            break;
          case Aa2:
            return a = Bg(12, c, b3, e2 | 2), a.elementType = Aa2, a.lanes = f5, a;
          case Ea2:
            return a = Bg(13, c, b3, e2), a.elementType = Ea2, a.lanes = f5, a;
          case Fa2:
            return a = Bg(19, c, b3, e2), a.elementType = Fa2, a.lanes = f5, a;
          case Ia2:
            return pj(c, e2, f5, b3);
          default:
            if ("object" === typeof a && null !== a) switch (a.$$typeof) {
              case Ba2:
                g5 = 10;
                break a;
              case Ca2:
                g5 = 9;
                break a;
              case Da2:
                g5 = 11;
                break a;
              case Ga2:
                g5 = 14;
                break a;
              case Ha2:
                g5 = 16;
                d3 = null;
                break a;
            }
            throw Error(p(130, null == a ? a : typeof a, ""));
        }
        b3 = Bg(g5, c, b3, e2);
        b3.elementType = a;
        b3.type = d3;
        b3.lanes = f5;
        return b3;
      }
      function Tg(a, b3, c, d3) {
        a = Bg(7, a, d3, b3);
        a.lanes = c;
        return a;
      }
      function pj(a, b3, c, d3) {
        a = Bg(22, a, d3, b3);
        a.elementType = Ia2;
        a.lanes = c;
        a.stateNode = { isHidden: false };
        return a;
      }
      function Qg(a, b3, c) {
        a = Bg(6, a, null, b3);
        a.lanes = c;
        return a;
      }
      function Sg(a, b3, c) {
        b3 = Bg(4, null !== a.children ? a.children : [], a.key, b3);
        b3.lanes = c;
        b3.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
        return b3;
      }
      function al2(a, b3, c, d3, e2) {
        this.tag = b3;
        this.containerInfo = a;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = zc2(0);
        this.expirationTimes = zc2(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = zc2(0);
        this.identifierPrefix = d3;
        this.onRecoverableError = e2;
        this.mutableSourceEagerHydrationData = null;
      }
      function bl2(a, b3, c, d3, e2, f5, g5, h3, k4) {
        a = new al2(a, b3, c, h3, k4);
        1 === b3 ? (b3 = 1, true === f5 && (b3 |= 8)) : b3 = 0;
        f5 = Bg(3, null, null, b3);
        a.current = f5;
        f5.stateNode = a;
        f5.memoizedState = { element: d3, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        kh2(f5);
        return a;
      }
      function cl2(a, b3, c) {
        var d3 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: wa2, key: null == d3 ? null : "" + d3, children: a, containerInfo: b3, implementation: c };
      }
      function dl2(a) {
        if (!a) return Vf2;
        a = a._reactInternals;
        a: {
          if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
          var b3 = a;
          do {
            switch (b3.tag) {
              case 3:
                b3 = b3.stateNode.context;
                break a;
              case 1:
                if (Zf2(b3.type)) {
                  b3 = b3.stateNode.__reactInternalMemoizedMergedChildContext;
                  break a;
                }
            }
            b3 = b3.return;
          } while (null !== b3);
          throw Error(p(171));
        }
        if (1 === a.tag) {
          var c = a.type;
          if (Zf2(c)) return bg(a, c, b3);
        }
        return b3;
      }
      function el2(a, b3, c, d3, e2, f5, g5, h3, k4) {
        a = bl2(c, d3, true, a, e2, f5, g5, h3, k4);
        a.context = dl2(null);
        c = a.current;
        d3 = R8();
        e2 = yi2(c);
        f5 = mh2(d3, e2);
        f5.callback = void 0 !== b3 && null !== b3 ? b3 : null;
        nh2(c, f5, e2);
        a.current.lanes = e2;
        Ac2(a, e2, d3);
        Dk(a, d3);
        return a;
      }
      function fl2(a, b3, c, d3) {
        var e2 = b3.current, f5 = R8(), g5 = yi2(e2);
        c = dl2(c);
        null === b3.context ? b3.context = c : b3.pendingContext = c;
        b3 = mh2(f5, g5);
        b3.payload = { element: a };
        d3 = void 0 === d3 ? null : d3;
        null !== d3 && (b3.callback = d3);
        a = nh2(e2, b3, g5);
        null !== a && (gi2(a, e2, g5, f5), oh2(a, e2, g5));
        return g5;
      }
      function gl2(a) {
        a = a.current;
        if (!a.child) return null;
        switch (a.child.tag) {
          case 5:
            return a.child.stateNode;
          default:
            return a.child.stateNode;
        }
      }
      function hl2(a, b3) {
        a = a.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          var c = a.retryLane;
          a.retryLane = 0 !== c && c < b3 ? c : b3;
        }
      }
      function il2(a, b3) {
        hl2(a, b3);
        (a = a.alternate) && hl2(a, b3);
      }
      function jl2() {
        return null;
      }
      var kl2 = "function" === typeof reportError ? reportError : function(a) {
        console.error(a);
      };
      function ll2(a) {
        this._internalRoot = a;
      }
      ml2.prototype.render = ll2.prototype.render = function(a) {
        var b3 = this._internalRoot;
        if (null === b3) throw Error(p(409));
        fl2(a, b3, null, null);
      };
      ml2.prototype.unmount = ll2.prototype.unmount = function() {
        var a = this._internalRoot;
        if (null !== a) {
          this._internalRoot = null;
          var b3 = a.containerInfo;
          Rk(function() {
            fl2(null, a, null, null);
          });
          b3[uf2] = null;
        }
      };
      function ml2(a) {
        this._internalRoot = a;
      }
      ml2.prototype.unstable_scheduleHydration = function(a) {
        if (a) {
          var b3 = Hc2();
          a = { blockedOn: null, target: a, priority: b3 };
          for (var c = 0; c < Qc2.length && 0 !== b3 && b3 < Qc2[c].priority; c++) ;
          Qc2.splice(c, 0, a);
          0 === c && Vc2(a);
        }
      };
      function nl2(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
      }
      function ol2(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
      }
      function pl2() {
      }
      function ql2(a, b3, c, d3, e2) {
        if (e2) {
          if ("function" === typeof d3) {
            var f5 = d3;
            d3 = function() {
              var a2 = gl2(g5);
              f5.call(a2);
            };
          }
          var g5 = el2(b3, d3, a, 0, null, false, false, "", pl2);
          a._reactRootContainer = g5;
          a[uf2] = g5.current;
          sf2(8 === a.nodeType ? a.parentNode : a);
          Rk();
          return g5;
        }
        for (; e2 = a.lastChild; ) a.removeChild(e2);
        if ("function" === typeof d3) {
          var h3 = d3;
          d3 = function() {
            var a2 = gl2(k4);
            h3.call(a2);
          };
        }
        var k4 = bl2(a, 0, false, null, null, false, false, "", pl2);
        a._reactRootContainer = k4;
        a[uf2] = k4.current;
        sf2(8 === a.nodeType ? a.parentNode : a);
        Rk(function() {
          fl2(b3, k4, c, d3);
        });
        return k4;
      }
      function rl2(a, b3, c, d3, e2) {
        var f5 = c._reactRootContainer;
        if (f5) {
          var g5 = f5;
          if ("function" === typeof e2) {
            var h3 = e2;
            e2 = function() {
              var a2 = gl2(g5);
              h3.call(a2);
            };
          }
          fl2(b3, g5, a, e2);
        } else g5 = ql2(c, b3, a, e2, d3);
        return gl2(g5);
      }
      Ec2 = function(a) {
        switch (a.tag) {
          case 3:
            var b3 = a.stateNode;
            if (b3.current.memoizedState.isDehydrated) {
              var c = tc2(b3.pendingLanes);
              0 !== c && (Cc2(b3, c | 1), Dk(b3, B6()), 0 === (K3 & 6) && (Gj = B6() + 500, jg()));
            }
            break;
          case 13:
            Rk(function() {
              var b4 = ih2(a, 1);
              if (null !== b4) {
                var c2 = R8();
                gi2(b4, a, 1, c2);
              }
            }), il2(a, 1);
        }
      };
      Fc2 = function(a) {
        if (13 === a.tag) {
          var b3 = ih2(a, 134217728);
          if (null !== b3) {
            var c = R8();
            gi2(b3, a, 134217728, c);
          }
          il2(a, 134217728);
        }
      };
      Gc2 = function(a) {
        if (13 === a.tag) {
          var b3 = yi2(a), c = ih2(a, b3);
          if (null !== c) {
            var d3 = R8();
            gi2(c, a, b3, d3);
          }
          il2(a, b3);
        }
      };
      Hc2 = function() {
        return C4;
      };
      Ic2 = function(a, b3) {
        var c = C4;
        try {
          return C4 = a, b3();
        } finally {
          C4 = c;
        }
      };
      yb = function(a, b3, c) {
        switch (b3) {
          case "input":
            bb(a, c);
            b3 = c.name;
            if ("radio" === c.type && null != b3) {
              for (c = a; c.parentNode; ) c = c.parentNode;
              c = c.querySelectorAll("input[name=" + JSON.stringify("" + b3) + '][type="radio"]');
              for (b3 = 0; b3 < c.length; b3++) {
                var d3 = c[b3];
                if (d3 !== a && d3.form === a.form) {
                  var e2 = Db(d3);
                  if (!e2) throw Error(p(90));
                  Wa2(d3);
                  bb(d3, e2);
                }
              }
            }
            break;
          case "textarea":
            ib(a, c);
            break;
          case "select":
            b3 = c.value, null != b3 && fb(a, !!c.multiple, b3, false);
        }
      };
      Gb = Qk;
      Hb = Rk;
      var sl2 = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] };
      var tl2 = { findFiberByHostInstance: Wc2, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
      var ul2 = { bundleType: tl2.bundleType, version: tl2.version, rendererPackageName: tl2.rendererPackageName, rendererConfig: tl2.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua2.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
        a = Zb(a);
        return null === a ? null : a.stateNode;
      }, findFiberByHostInstance: tl2.findFiberByHostInstance || jl2, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        vl2 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!vl2.isDisabled && vl2.supportsFiber) try {
          kc2 = vl2.inject(ul2), lc2 = vl2;
        } catch (a) {
        }
      }
      var vl2;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl2;
      exports.createPortal = function(a, b3) {
        var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!nl2(b3)) throw Error(p(200));
        return cl2(a, b3, null, c);
      };
      exports.createRoot = function(a, b3) {
        if (!nl2(a)) throw Error(p(299));
        var c = false, d3 = "", e2 = kl2;
        null !== b3 && void 0 !== b3 && (true === b3.unstable_strictMode && (c = true), void 0 !== b3.identifierPrefix && (d3 = b3.identifierPrefix), void 0 !== b3.onRecoverableError && (e2 = b3.onRecoverableError));
        b3 = bl2(a, 1, false, null, null, c, false, d3, e2);
        a[uf2] = b3.current;
        sf2(8 === a.nodeType ? a.parentNode : a);
        return new ll2(b3);
      };
      exports.findDOMNode = function(a) {
        if (null == a) return null;
        if (1 === a.nodeType) return a;
        var b3 = a._reactInternals;
        if (void 0 === b3) {
          if ("function" === typeof a.render) throw Error(p(188));
          a = Object.keys(a).join(",");
          throw Error(p(268, a));
        }
        a = Zb(b3);
        a = null === a ? null : a.stateNode;
        return a;
      };
      exports.flushSync = function(a) {
        return Rk(a);
      };
      exports.hydrate = function(a, b3, c) {
        if (!ol2(b3)) throw Error(p(200));
        return rl2(null, a, b3, true, c);
      };
      exports.hydrateRoot = function(a, b3, c) {
        if (!nl2(a)) throw Error(p(405));
        var d3 = null != c && c.hydratedSources || null, e2 = false, f5 = "", g5 = kl2;
        null !== c && void 0 !== c && (true === c.unstable_strictMode && (e2 = true), void 0 !== c.identifierPrefix && (f5 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g5 = c.onRecoverableError));
        b3 = el2(b3, null, a, 1, null != c ? c : null, e2, false, f5, g5);
        a[uf2] = b3.current;
        sf2(a);
        if (d3) for (a = 0; a < d3.length; a++) c = d3[a], e2 = c._getVersion, e2 = e2(c._source), null == b3.mutableSourceEagerHydrationData ? b3.mutableSourceEagerHydrationData = [c, e2] : b3.mutableSourceEagerHydrationData.push(
          c,
          e2
        );
        return new ml2(b3);
      };
      exports.render = function(a, b3, c) {
        if (!ol2(b3)) throw Error(p(200));
        return rl2(null, a, b3, false, c);
      };
      exports.unmountComponentAtNode = function(a) {
        if (!ol2(a)) throw Error(p(40));
        return a._reactRootContainer ? (Rk(function() {
          rl2(null, null, a, false, function() {
            a._reactRootContainer = null;
            a[uf2] = null;
          });
        }), true) : false;
      };
      exports.unstable_batchedUpdates = Qk;
      exports.unstable_renderSubtreeIntoContainer = function(a, b3, c, d3) {
        if (!ol2(c)) throw Error(p(200));
        if (null == a || void 0 === a._reactInternals) throw Error(p(38));
        return rl2(a, b3, c, false, d3);
      };
      exports.version = "18.3.1-next-f1338f8080-20240426";
    }
  });

  // node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/client.js
  var require_client = __commonJS({
    "node_modules/react-dom/client.js"(exports) {
      "use strict";
      var m = require_react_dom();
      if (true) {
        exports.createRoot = m.createRoot;
        exports.hydrateRoot = m.hydrateRoot;
      } else {
        i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        exports.createRoot = function(c, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.createRoot(c, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
        exports.hydrateRoot = function(c, h3, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.hydrateRoot(c, h3, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
      }
      var i;
    }
  });

  // node_modules/react/cjs/react-jsx-runtime.production.min.js
  var require_react_jsx_runtime_production_min = __commonJS({
    "node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports) {
      "use strict";
      var f5 = require_react();
      var k4 = /* @__PURE__ */ Symbol.for("react.element");
      var l = /* @__PURE__ */ Symbol.for("react.fragment");
      var m = Object.prototype.hasOwnProperty;
      var n = f5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
      var p = { key: true, ref: true, __self: true, __source: true };
      function q5(c, a, g5) {
        var b3, d3 = {}, e2 = null, h3 = null;
        void 0 !== g5 && (e2 = "" + g5);
        void 0 !== a.key && (e2 = "" + a.key);
        void 0 !== a.ref && (h3 = a.ref);
        for (b3 in a) m.call(a, b3) && !p.hasOwnProperty(b3) && (d3[b3] = a[b3]);
        if (c && c.defaultProps) for (b3 in a = c.defaultProps, a) void 0 === d3[b3] && (d3[b3] = a[b3]);
        return { $$typeof: k4, type: c, key: e2, ref: h3, props: d3, _owner: n.current };
      }
      exports.Fragment = l;
      exports.jsx = q5;
      exports.jsxs = q5;
    }
  });

  // node_modules/react/jsx-runtime.js
  var require_jsx_runtime = __commonJS({
    "node_modules/react/jsx-runtime.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_jsx_runtime_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-tv-player/dist/YouTube-DiqIX_pi.js
  var YouTube_DiqIX_pi_exports = {};
  __export(YouTube_DiqIX_pi_exports, {
    Y: () => te
  });
  function Z(y2, o) {
    for (var h3 = 0; h3 < o.length; h3++) {
      const n = o[h3];
      if (typeof n != "string" && !Array.isArray(n)) {
        for (const i in n)
          if (i !== "default" && !(i in y2)) {
            const d3 = Object.getOwnPropertyDescriptor(n, i);
            d3 && Object.defineProperty(y2, i, d3.get ? d3 : {
              enumerable: true,
              get: () => n[i]
            });
          }
      }
    }
    return Object.freeze(Object.defineProperty(y2, Symbol.toStringTag, { value: "Module" }));
  }
  function J() {
    if (Y) return E;
    Y = 1;
    var y2 = Object.create, o = Object.defineProperty, h3 = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, i = Object.getPrototypeOf, d3 = Object.prototype.hasOwnProperty, L5 = (a, e2, t) => e2 in a ? o(a, e2, { enumerable: true, configurable: true, writable: true, value: t }) : a[e2] = t, M3 = (a, e2) => {
      for (var t in e2)
        o(a, t, { get: e2[t], enumerable: true });
    }, A7 = (a, e2, t, p) => {
      if (e2 && typeof e2 == "object" || typeof e2 == "function")
        for (let r of n(e2))
          !d3.call(a, r) && r !== t && o(a, r, { get: () => e2[r], enumerable: !(p = h3(e2, r)) || p.enumerable });
      return a;
    }, k4 = (a, e2, t) => (t = a != null ? y2(i(a)) : {}, A7(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      !a || !a.__esModule ? o(t, "default", { value: a, enumerable: true }) : t,
      a
    )), N4 = (a) => A7(o({}, "__esModule", { value: true }), a), s = (a, e2, t) => (L5(a, typeof e2 != "symbol" ? e2 + "" : e2, t), t), C4 = {};
    M3(C4, {
      default: () => O6
    }), E = N4(C4);
    var m = k4(import_react.default), c = /* @__PURE__ */ Xt(), R8 = /* @__PURE__ */ Xl();
    const j2 = "https://www.youtube.com/iframe_api", U3 = "YT", V5 = "onYouTubeIframeAPIReady", P6 = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/, T7 = /user\/([a-zA-Z0-9_-]+)\/?/, B6 = /youtube-nocookie\.com/, x5 = "https://www.youtube-nocookie.com";
    class O6 extends m.Component {
      constructor() {
        super(...arguments), s(this, "callPlayer", c.callPlayer), s(this, "parsePlaylist", (e2) => {
          if (e2 instanceof Array)
            return {
              listType: "playlist",
              playlist: e2.map(this.getID).join(",")
            };
          if (P6.test(e2)) {
            const [, t] = e2.match(P6);
            return {
              listType: "playlist",
              list: t.replace(/^UC/, "UU")
            };
          }
          if (T7.test(e2)) {
            const [, t] = e2.match(T7);
            return {
              listType: "user_uploads",
              list: t
            };
          }
          return {};
        }), s(this, "onStateChange", (e2) => {
          const { data: t } = e2, { onPlay: p, onPause: r, onBuffer: v5, onBufferEnd: w2, onEnded: S3, onReady: D3, loop: _, config: { playerVars: u, onUnstarted: g5 } } = this.props, { UNSTARTED: b3, PLAYING: f5, PAUSED: l, BUFFERING: K3, ENDED: q5, CUED: F2 } = window[U3].PlayerState;
          if (t === b3 && g5(), t === f5 && (p(), w2()), t === l && r(), t === K3 && v5(), t === q5) {
            const H = !!this.callPlayer("getPlaylist");
            _ && !H && (u.start ? this.seekTo(u.start) : this.play()), S3();
          }
          t === F2 && D3();
        }), s(this, "mute", () => {
          this.callPlayer("mute");
        }), s(this, "unmute", () => {
          this.callPlayer("unMute");
        }), s(this, "ref", (e2) => {
          this.container = e2;
        });
      }
      componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
      getID(e2) {
        return !e2 || e2 instanceof Array || P6.test(e2) ? null : e2.match(R8.MATCH_URL_YOUTUBE)[1];
      }
      load(e2, t) {
        const { playing: p, muted: r, playsinline: v5, controls: w2, loop: S3, config: D3, onError: _ } = this.props, { playerVars: u, embedOptions: g5 } = D3, b3 = this.getID(e2);
        if (t) {
          if (P6.test(e2) || T7.test(e2) || e2 instanceof Array) {
            this.player.loadPlaylist(this.parsePlaylist(e2));
            return;
          }
          this.player.cueVideoById({
            videoId: b3,
            startSeconds: (0, c.parseStartTime)(e2) || u.start,
            endSeconds: (0, c.parseEndTime)(e2) || u.end
          });
          return;
        }
        (0, c.getSDK)(j2, U3, V5, (f5) => f5.loaded).then((f5) => {
          this.container && (this.player = new f5.Player(this.container, {
            width: "100%",
            height: "100%",
            videoId: b3,
            playerVars: {
              autoplay: p ? 1 : 0,
              mute: r ? 1 : 0,
              controls: w2 ? 1 : 0,
              start: (0, c.parseStartTime)(e2),
              end: (0, c.parseEndTime)(e2),
              origin: window.location.origin,
              playsinline: v5 ? 1 : 0,
              ...this.parsePlaylist(e2),
              ...u
            },
            events: {
              onReady: () => {
                S3 && this.player.setLoop(true), this.props.onReady();
              },
              onPlaybackRateChange: (l) => this.props.onPlaybackRateChange(l.data),
              onPlaybackQualityChange: (l) => this.props.onPlaybackQualityChange(l),
              onStateChange: this.onStateChange,
              onError: (l) => _(l.data)
            },
            host: B6.test(e2) ? x5 : void 0,
            ...g5
          }));
        }, _), g5.events && console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer\u2019s callback props instead, eg onReady, onPlay, onPause");
      }
      play() {
        this.callPlayer("playVideo");
      }
      pause() {
        this.callPlayer("pauseVideo");
      }
      stop() {
        document.body.contains(this.callPlayer("getIframe")) && this.callPlayer("stopVideo");
      }
      seekTo(e2, t = false) {
        this.callPlayer("seekTo", e2), !t && !this.props.playing && this.pause();
      }
      setVolume(e2) {
        this.callPlayer("setVolume", e2 * 100);
      }
      setPlaybackRate(e2) {
        this.callPlayer("setPlaybackRate", e2);
      }
      setLoop(e2) {
        this.callPlayer("setLoop", e2);
      }
      getDuration() {
        return this.callPlayer("getDuration");
      }
      getCurrentTime() {
        return this.callPlayer("getCurrentTime");
      }
      getSecondsLoaded() {
        return this.callPlayer("getVideoLoadedFraction") * this.getDuration();
      }
      render() {
        const { display: e2 } = this.props, t = {
          width: "100%",
          height: "100%",
          display: e2
        };
        return /* @__PURE__ */ m.default.createElement("div", { style: t }, /* @__PURE__ */ m.default.createElement("div", { ref: this.ref }));
      }
    }
    return s(O6, "displayName", "YouTube"), s(O6, "canPlay", R8.canPlay.youtube), E;
  }
  var import_react, E, Y, I, W, te;
  var init_YouTube_DiqIX_pi = __esm({
    "node_modules/react-tv-player/dist/YouTube-DiqIX_pi.js"() {
      init_index_r8XrYpcu();
      import_react = __toESM(require_react(), 1);
      I = /* @__PURE__ */ J();
      W = /* @__PURE__ */ Gt(I);
      te = /* @__PURE__ */ Z({
        __proto__: null,
        default: W
      }, [I]);
    }
  });

  // node_modules/react-tv-player/dist/SoundCloud--678uCdQ.js
  var SoundCloud_678uCdQ_exports = {};
  __export(SoundCloud_678uCdQ_exports, {
    S: () => I2
  });
  function q(l, s) {
    for (var p = 0; p < s.length; p++) {
      const i = s[p];
      if (typeof i != "string" && !Array.isArray(i)) {
        for (const n in i)
          if (n !== "default" && !(n in l)) {
            const d3 = Object.getOwnPropertyDescriptor(i, n);
            d3 && Object.defineProperty(l, n, d3.get ? d3 : {
              enumerable: true,
              get: () => i[n]
            });
          }
      }
    }
    return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }));
  }
  function U() {
    if (g) return f;
    g = 1;
    var l = Object.create, s = Object.defineProperty, p = Object.getOwnPropertyDescriptor, i = Object.getOwnPropertyNames, n = Object.getPrototypeOf, d3 = Object.prototype.hasOwnProperty, v5 = (t, e2, r) => e2 in t ? s(t, e2, { enumerable: true, configurable: true, writable: true, value: r }) : t[e2] = r, O6 = (t, e2) => {
      for (var r in e2)
        s(t, r, { get: e2[r], enumerable: true });
    }, y2 = (t, e2, r, c) => {
      if (e2 && typeof e2 == "object" || typeof e2 == "function")
        for (let a of i(e2))
          !d3.call(t, a) && a !== r && s(t, a, { get: () => e2[a], enumerable: !(c = p(e2, a)) || c.enumerable });
      return t;
    }, S3 = (t, e2, r) => (r = t != null ? l(n(t)) : {}, y2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      !t || !t.__esModule ? s(r, "default", { value: t, enumerable: true }) : r,
      t
    )), C4 = (t) => y2(s({}, "__esModule", { value: true }), t), o = (t, e2, r) => (v5(t, typeof e2 != "symbol" ? e2 + "" : e2, r), r), _ = {};
    O6(_, {
      default: () => h3
    }), f = C4(_);
    var m = S3(import_react2.default), P6 = /* @__PURE__ */ Xt(), w2 = /* @__PURE__ */ Xl();
    const j2 = "https://w.soundcloud.com/player/api.js", E3 = "SC";
    class h3 extends m.Component {
      constructor() {
        super(...arguments), o(this, "callPlayer", P6.callPlayer), o(this, "duration", null), o(this, "currentTime", null), o(this, "fractionLoaded", null), o(this, "mute", () => {
          this.setVolume(0);
        }), o(this, "unmute", () => {
          this.props.volume !== null && this.setVolume(this.props.volume);
        }), o(this, "ref", (e2) => {
          this.iframe = e2;
        });
      }
      componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
      load(e2, r) {
        (0, P6.getSDK)(j2, E3).then((c) => {
          if (!this.iframe)
            return;
          const { PLAY: a, PLAY_PROGRESS: D3, PAUSE: L5, FINISH: R8, ERROR: M3 } = c.Widget.Events;
          r || (this.player = c.Widget(this.iframe), this.player.bind(a, this.props.onPlay), this.player.bind(L5, () => {
            this.duration - this.currentTime < 0.05 || this.props.onPause();
          }), this.player.bind(D3, (u) => {
            this.currentTime = u.currentPosition / 1e3, this.fractionLoaded = u.loadedProgress;
          }), this.player.bind(R8, () => this.props.onEnded()), this.player.bind(M3, (u) => this.props.onError(u))), this.player.load(e2, {
            ...this.props.config.options,
            callback: () => {
              this.player.getDuration((u) => {
                this.duration = u / 1e3, this.props.onReady();
              });
            }
          });
        });
      }
      play() {
        this.callPlayer("play");
      }
      pause() {
        this.callPlayer("pause");
      }
      stop() {
      }
      seekTo(e2, r = true) {
        this.callPlayer("seekTo", e2 * 1e3), r || this.pause();
      }
      setVolume(e2) {
        this.callPlayer("setVolume", e2 * 100);
      }
      getDuration() {
        return this.duration;
      }
      getCurrentTime() {
        return this.currentTime;
      }
      getSecondsLoaded() {
        return this.fractionLoaded * this.duration;
      }
      render() {
        const { display: e2 } = this.props, r = {
          width: "100%",
          height: "100%",
          display: e2
        };
        return /* @__PURE__ */ m.default.createElement(
          "iframe",
          {
            ref: this.ref,
            src: `https://w.soundcloud.com/player/?url=${encodeURIComponent(this.props.url)}`,
            style: r,
            frameBorder: 0,
            allow: "autoplay"
          }
        );
      }
    }
    return o(h3, "displayName", "SoundCloud"), o(h3, "canPlay", w2.canPlay.soundcloud), o(h3, "loopOnEnded", true), f;
  }
  var import_react2, f, g, b, V, I2;
  var init_SoundCloud_678uCdQ = __esm({
    "node_modules/react-tv-player/dist/SoundCloud--678uCdQ.js"() {
      init_index_r8XrYpcu();
      import_react2 = __toESM(require_react(), 1);
      b = /* @__PURE__ */ U();
      V = /* @__PURE__ */ Gt(b);
      I2 = /* @__PURE__ */ q({
        __proto__: null,
        default: V
      }, [b]);
    }
  });

  // node_modules/react-tv-player/dist/Vimeo-Dwyd1QTJ.js
  var Vimeo_Dwyd1QTJ_exports = {};
  __export(Vimeo_Dwyd1QTJ_exports, {
    V: () => A2
  });
  function T(p, a) {
    for (var u = 0; u < a.length; u++) {
      const n = a[u];
      if (typeof n != "string" && !Array.isArray(n)) {
        for (const l in n)
          if (l !== "default" && !(l in p)) {
            const h3 = Object.getOwnPropertyDescriptor(n, l);
            h3 && Object.defineProperty(p, l, h3.get ? h3 : {
              enumerable: true,
              get: () => n[l]
            });
          }
      }
    }
    return Object.freeze(Object.defineProperty(p, Symbol.toStringTag, { value: "Module" }));
  }
  function q2() {
    if (g2) return d;
    g2 = 1;
    var p = Object.create, a = Object.defineProperty, u = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, l = Object.getPrototypeOf, h3 = Object.prototype.hasOwnProperty, v5 = (t, e2, r) => e2 in t ? a(t, e2, { enumerable: true, configurable: true, writable: true, value: r }) : t[e2] = r, O6 = (t, e2) => {
      for (var r in e2)
        a(t, r, { get: e2[r], enumerable: true });
    }, f5 = (t, e2, r, y2) => {
      if (e2 && typeof e2 == "object" || typeof e2 == "function")
        for (let i of n(e2))
          !h3.call(t, i) && i !== r && a(t, i, { get: () => e2[i], enumerable: !(y2 = u(e2, i)) || y2.enumerable });
      return t;
    }, D3 = (t, e2, r) => (r = t != null ? p(l(t)) : {}, f5(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      !t || !t.__esModule ? a(r, "default", { value: t, enumerable: true }) : r,
      t
    )), V5 = (t) => f5(a({}, "__esModule", { value: true }), t), s = (t, e2, r) => (v5(t, typeof e2 != "symbol" ? e2 + "" : e2, r), r), m = {};
    O6(m, {
      default: () => c
    }), d = V5(m);
    var _ = D3(import_react3.default), P6 = /* @__PURE__ */ Xt(), w2 = /* @__PURE__ */ Xl();
    const M3 = "https://player.vimeo.com/api/player.js", j2 = "Vimeo", E3 = (t) => t.replace("/manage/videos", "");
    class c extends _.Component {
      constructor() {
        super(...arguments), s(this, "callPlayer", P6.callPlayer), s(this, "duration", null), s(this, "currentTime", null), s(this, "secondsLoaded", null), s(this, "mute", () => {
          this.setMuted(true);
        }), s(this, "unmute", () => {
          this.setMuted(false);
        }), s(this, "ref", (e2) => {
          this.container = e2;
        });
      }
      componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
      load(e2) {
        this.duration = null, (0, P6.getSDK)(M3, j2).then((r) => {
          if (!this.container)
            return;
          const { playerOptions: y2, title: i } = this.props.config;
          this.player = new r.Player(this.container, {
            url: E3(e2),
            autoplay: this.props.playing,
            muted: this.props.muted,
            loop: this.props.loop,
            playsinline: this.props.playsinline,
            controls: this.props.controls,
            ...y2
          }), this.player.ready().then(() => {
            const o = this.container.querySelector("iframe");
            o.style.width = "100%", o.style.height = "100%", i && (o.title = i);
          }).catch(this.props.onError), this.player.on("loaded", () => {
            this.props.onReady(), this.refreshDuration();
          }), this.player.on("play", () => {
            this.props.onPlay(), this.refreshDuration();
          }), this.player.on("pause", this.props.onPause), this.player.on("seeked", (o) => this.props.onSeek(o.seconds)), this.player.on("ended", this.props.onEnded), this.player.on("error", this.props.onError), this.player.on("timeupdate", ({ seconds: o }) => {
            this.currentTime = o;
          }), this.player.on("progress", ({ seconds: o }) => {
            this.secondsLoaded = o;
          }), this.player.on("bufferstart", this.props.onBuffer), this.player.on("bufferend", this.props.onBufferEnd), this.player.on("playbackratechange", (o) => this.props.onPlaybackRateChange(o.playbackRate));
        }, this.props.onError);
      }
      refreshDuration() {
        this.player.getDuration().then((e2) => {
          this.duration = e2;
        });
      }
      play() {
        const e2 = this.callPlayer("play");
        e2 && e2.catch(this.props.onError);
      }
      pause() {
        this.callPlayer("pause");
      }
      stop() {
        this.callPlayer("unload");
      }
      seekTo(e2, r = true) {
        this.callPlayer("setCurrentTime", e2), r || this.pause();
      }
      setVolume(e2) {
        this.callPlayer("setVolume", e2);
      }
      setMuted(e2) {
        this.callPlayer("setMuted", e2);
      }
      setLoop(e2) {
        this.callPlayer("setLoop", e2);
      }
      setPlaybackRate(e2) {
        this.callPlayer("setPlaybackRate", e2);
      }
      getDuration() {
        return this.duration;
      }
      getCurrentTime() {
        return this.currentTime;
      }
      getSecondsLoaded() {
        return this.secondsLoaded;
      }
      render() {
        const { display: e2 } = this.props, r = {
          width: "100%",
          height: "100%",
          overflow: "hidden",
          display: e2
        };
        return /* @__PURE__ */ _.default.createElement(
          "div",
          {
            key: this.props.url,
            ref: this.ref,
            style: r
          }
        );
      }
    }
    return s(c, "displayName", "Vimeo"), s(c, "canPlay", w2.canPlay.vimeo), s(c, "forceLoad", true), d;
  }
  var import_react3, d, g2, b2, x, A2;
  var init_Vimeo_Dwyd1QTJ = __esm({
    "node_modules/react-tv-player/dist/Vimeo-Dwyd1QTJ.js"() {
      init_index_r8XrYpcu();
      import_react3 = __toESM(require_react(), 1);
      b2 = /* @__PURE__ */ q2();
      x = /* @__PURE__ */ Gt(b2);
      A2 = /* @__PURE__ */ T({
        __proto__: null,
        default: x
      }, [b2]);
    }
  });

  // node_modules/react-tv-player/dist/Mux-BDucjIaO.js
  var Mux_BDucjIaO_exports = {};
  __export(Mux_BDucjIaO_exports, {
    M: () => U2
  });
  function C(p, o) {
    for (var l = 0; l < o.length; l++) {
      const a = o[l];
      if (typeof a != "string" && !Array.isArray(a)) {
        for (const u in a)
          if (u !== "default" && !(u in p)) {
            const h3 = Object.getOwnPropertyDescriptor(a, u);
            h3 && Object.defineProperty(p, u, h3.get ? h3 : {
              enumerable: true,
              get: () => a[u]
            });
          }
      }
    }
    return Object.freeze(Object.defineProperty(p, Symbol.toStringTag, { value: "Module" }));
  }
  function S() {
    if (L) return y;
    L = 1;
    var p = Object.create, o = Object.defineProperty, l = Object.getOwnPropertyDescriptor, a = Object.getOwnPropertyNames, u = Object.getPrototypeOf, h3 = Object.prototype.hasOwnProperty, I4 = (r, e2, t) => e2 in r ? o(r, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r[e2] = t, x5 = (r, e2) => {
      for (var t in e2)
        o(r, t, { get: e2[t], enumerable: true });
    }, m = (r, e2, t, i) => {
      if (e2 && typeof e2 == "object" || typeof e2 == "function")
        for (let s of a(e2))
          !h3.call(r, s) && s !== t && o(r, s, { get: () => e2[s], enumerable: !(i = l(e2, s)) || i.enumerable });
      return r;
    }, M3 = (r, e2, t) => (t = r != null ? p(u(r)) : {}, m(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      !r || !r.__esModule ? o(t, "default", { value: r, enumerable: true }) : t,
      r
    )), O6 = (r) => m(o({}, "__esModule", { value: true }), r), n = (r, e2, t) => (I4(r, typeof e2 != "symbol" ? e2 + "" : e2, t), t), P6 = {};
    x5(P6, {
      default: () => f5
    }), y = O6(P6);
    var g5 = M3(import_react4.default), d3 = /* @__PURE__ */ Xl();
    const R8 = "https://cdn.jsdelivr.net/npm/@mux/mux-player@VERSION/dist/mux-player.mjs";
    class f5 extends g5.Component {
      constructor() {
        super(...arguments), n(this, "onReady", (...e2) => this.props.onReady(...e2)), n(this, "onPlay", (...e2) => this.props.onPlay(...e2)), n(this, "onBuffer", (...e2) => this.props.onBuffer(...e2)), n(this, "onBufferEnd", (...e2) => this.props.onBufferEnd(...e2)), n(this, "onPause", (...e2) => this.props.onPause(...e2)), n(this, "onEnded", (...e2) => this.props.onEnded(...e2)), n(this, "onError", (...e2) => this.props.onError(...e2)), n(this, "onPlayBackRateChange", (e2) => this.props.onPlaybackRateChange(e2.target.playbackRate)), n(this, "onEnablePIP", (...e2) => this.props.onEnablePIP(...e2)), n(this, "onSeek", (e2) => {
          this.props.onSeek(e2.target.currentTime);
        }), n(this, "onDurationChange", () => {
          const e2 = this.getDuration();
          this.props.onDuration(e2);
        }), n(this, "mute", () => {
          this.player.muted = true;
        }), n(this, "unmute", () => {
          this.player.muted = false;
        }), n(this, "ref", (e2) => {
          this.player = e2;
        });
      }
      componentDidMount() {
        this.props.onMount && this.props.onMount(this), this.addListeners(this.player);
        const e2 = this.getPlaybackId(this.props.url);
        e2 && (this.player.playbackId = e2);
      }
      componentWillUnmount() {
        this.player.playbackId = null, this.removeListeners(this.player);
      }
      addListeners(e2) {
        const { playsinline: t } = this.props;
        e2.addEventListener("play", this.onPlay), e2.addEventListener("waiting", this.onBuffer), e2.addEventListener("playing", this.onBufferEnd), e2.addEventListener("pause", this.onPause), e2.addEventListener("seeked", this.onSeek), e2.addEventListener("ended", this.onEnded), e2.addEventListener("error", this.onError), e2.addEventListener("ratechange", this.onPlayBackRateChange), e2.addEventListener("enterpictureinpicture", this.onEnablePIP), e2.addEventListener("leavepictureinpicture", this.onDisablePIP), e2.addEventListener("webkitpresentationmodechanged", this.onPresentationModeChange), e2.addEventListener("canplay", this.onReady), t && e2.setAttribute("playsinline", "");
      }
      removeListeners(e2) {
        e2.removeEventListener("canplay", this.onReady), e2.removeEventListener("play", this.onPlay), e2.removeEventListener("waiting", this.onBuffer), e2.removeEventListener("playing", this.onBufferEnd), e2.removeEventListener("pause", this.onPause), e2.removeEventListener("seeked", this.onSeek), e2.removeEventListener("ended", this.onEnded), e2.removeEventListener("error", this.onError), e2.removeEventListener("ratechange", this.onPlayBackRateChange), e2.removeEventListener("enterpictureinpicture", this.onEnablePIP), e2.removeEventListener("leavepictureinpicture", this.onDisablePIP), e2.removeEventListener("canplay", this.onReady);
      }
      async load(e2) {
        var t;
        const { onError: i, config: s } = this.props;
        if (!((t = globalThis.customElements) != null && t.get("mux-player")))
          try {
            await import(
              /* webpackIgnore: true */
              `${R8.replace("VERSION", s.version)}`
            ), this.props.onLoaded();
          } catch (c) {
            i(c);
          }
        const [, v5] = e2.match(d3.MATCH_URL_MUX);
        this.player.playbackId = v5;
      }
      play() {
        const e2 = this.player.play();
        e2 && e2.catch(this.props.onError);
      }
      pause() {
        this.player.pause();
      }
      stop() {
        this.player.playbackId = null;
      }
      seekTo(e2, t = true) {
        this.player.currentTime = e2, t || this.pause();
      }
      setVolume(e2) {
        this.player.volume = e2;
      }
      enablePIP() {
        this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player && this.player.requestPictureInPicture();
      }
      disablePIP() {
        document.exitPictureInPicture && document.pictureInPictureElement === this.player && document.exitPictureInPicture();
      }
      setPlaybackRate(e2) {
        try {
          this.player.playbackRate = e2;
        } catch (t) {
          this.props.onError(t);
        }
      }
      getDuration() {
        if (!this.player)
          return null;
        const { duration: e2, seekable: t } = this.player;
        return e2 === 1 / 0 && t.length > 0 ? t.end(t.length - 1) : e2;
      }
      getCurrentTime() {
        return this.player ? this.player.currentTime : null;
      }
      getSecondsLoaded() {
        if (!this.player)
          return null;
        const { buffered: e2 } = this.player;
        if (e2.length === 0)
          return 0;
        const t = e2.end(e2.length - 1), i = this.getDuration();
        return t > i ? i : t;
      }
      getPlaybackId(e2) {
        const [, t] = e2.match(d3.MATCH_URL_MUX);
        return t;
      }
      render() {
        const { url: e2, playing: t, loop: i, controls: s, muted: v5, config: c, width: E3, height: b3 } = this.props, _ = {
          width: E3 === "auto" ? E3 : "100%",
          height: b3 === "auto" ? b3 : "100%"
        };
        return s === false && (_["--controls"] = "none"), /* @__PURE__ */ g5.default.createElement(
          "mux-player",
          {
            ref: this.ref,
            "playback-id": this.getPlaybackId(e2),
            style: _,
            preload: "auto",
            autoPlay: t || void 0,
            muted: v5 ? "" : void 0,
            loop: i ? "" : void 0,
            ...c.attributes
          }
        );
      }
    }
    return n(f5, "displayName", "Mux"), n(f5, "canPlay", d3.canPlay.mux), y;
  }
  var import_react4, y, L, k, B, U2;
  var init_Mux_BDucjIaO = __esm({
    "node_modules/react-tv-player/dist/Mux-BDucjIaO.js"() {
      init_index_r8XrYpcu();
      import_react4 = __toESM(require_react(), 1);
      k = /* @__PURE__ */ S();
      B = /* @__PURE__ */ Gt(k);
      U2 = /* @__PURE__ */ C({
        __proto__: null,
        default: B
      }, [k]);
    }
  });

  // node_modules/react-tv-player/dist/Facebook-BY4VJbab.js
  var Facebook_BY4VJbab_exports = {};
  __export(Facebook_BY4VJbab_exports, {
    F: () => R2
  });
  function M(p, o) {
    for (var u = 0; u < o.length; u++) {
      const i = o[u];
      if (typeof i != "string" && !Array.isArray(i)) {
        for (const n in i)
          if (n !== "default" && !(n in p)) {
            const c = Object.getOwnPropertyDescriptor(i, n);
            c && Object.defineProperty(p, n, c.get ? c : {
              enumerable: true,
              get: () => i[n]
            });
          }
      }
    }
    return Object.freeze(Object.defineProperty(p, Symbol.toStringTag, { value: "Module" }));
  }
  function A3() {
    if (v) return h;
    v = 1;
    var p = Object.create, o = Object.defineProperty, u = Object.getOwnPropertyDescriptor, i = Object.getOwnPropertyNames, n = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty, D3 = (t, e2, r) => e2 in t ? o(t, e2, { enumerable: true, configurable: true, writable: true, value: r }) : t[e2] = r, E3 = (t, e2) => {
      for (var r in e2)
        o(t, r, { get: e2[r], enumerable: true });
    }, b3 = (t, e2, r, a) => {
      if (e2 && typeof e2 == "object" || typeof e2 == "function")
        for (let s of i(e2))
          !c.call(t, s) && s !== r && o(t, s, { get: () => e2[s], enumerable: !(a = u(e2, s)) || a.enumerable });
      return t;
    }, k4 = (t, e2, r) => (r = t != null ? p(n(t)) : {}, b3(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      !t || !t.__esModule ? o(r, "default", { value: t, enumerable: true }) : r,
      t
    )), F2 = (t) => b3(o({}, "__esModule", { value: true }), t), l = (t, e2, r) => (D3(t, typeof e2 != "symbol" ? e2 + "" : e2, r), r), d3 = {};
    E3(d3, {
      default: () => y2
    }), h = F2(d3);
    var _ = k4(import_react5.default), f5 = /* @__PURE__ */ Xt(), S3 = /* @__PURE__ */ Xl();
    const P6 = "https://connect.facebook.net/en_US/sdk.js", g5 = "FB", m = "fbAsyncInit", j2 = "facebook-player-";
    class y2 extends _.Component {
      constructor() {
        super(...arguments), l(this, "callPlayer", f5.callPlayer), l(this, "playerID", this.props.config.playerId || `${j2}${(0, f5.randomString)()}`), l(this, "mute", () => {
          this.callPlayer("mute");
        }), l(this, "unmute", () => {
          this.callPlayer("unmute");
        });
      }
      componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
      load(e2, r) {
        if (r) {
          (0, f5.getSDK)(P6, g5, m).then((a) => a.XFBML.parse());
          return;
        }
        (0, f5.getSDK)(P6, g5, m).then((a) => {
          a.init({
            appId: this.props.config.appId,
            xfbml: true,
            version: this.props.config.version
          }), a.Event.subscribe("xfbml.render", (s) => {
            this.props.onLoaded();
          }), a.Event.subscribe("xfbml.ready", (s) => {
            s.type === "video" && s.id === this.playerID && (this.player = s.instance, this.player.subscribe("startedPlaying", this.props.onPlay), this.player.subscribe("paused", this.props.onPause), this.player.subscribe("finishedPlaying", this.props.onEnded), this.player.subscribe("startedBuffering", this.props.onBuffer), this.player.subscribe("finishedBuffering", this.props.onBufferEnd), this.player.subscribe("error", this.props.onError), this.props.muted ? this.callPlayer("mute") : this.callPlayer("unmute"), this.props.onReady(), document.getElementById(this.playerID).querySelector("iframe").style.visibility = "visible");
          });
        });
      }
      play() {
        this.callPlayer("play");
      }
      pause() {
        this.callPlayer("pause");
      }
      stop() {
      }
      seekTo(e2, r = true) {
        this.callPlayer("seek", e2), r || this.pause();
      }
      setVolume(e2) {
        this.callPlayer("setVolume", e2);
      }
      getDuration() {
        return this.callPlayer("getDuration");
      }
      getCurrentTime() {
        return this.callPlayer("getCurrentPosition");
      }
      getSecondsLoaded() {
        return null;
      }
      render() {
        const { attributes: e2 } = this.props.config, r = {
          width: "100%",
          height: "100%"
        };
        return /* @__PURE__ */ _.default.createElement(
          "div",
          {
            style: r,
            id: this.playerID,
            className: "fb-video",
            "data-href": this.props.url,
            "data-autoplay": this.props.playing ? "true" : "false",
            "data-allowfullscreen": "true",
            "data-controls": this.props.controls ? "true" : "false",
            ...e2
          }
        );
      }
    }
    return l(y2, "displayName", "Facebook"), l(y2, "canPlay", S3.canPlay.facebook), l(y2, "loopOnEnded", true), h;
  }
  var import_react5, h, v, O, B2, R2;
  var init_Facebook_BY4VJbab = __esm({
    "node_modules/react-tv-player/dist/Facebook-BY4VJbab.js"() {
      init_index_r8XrYpcu();
      import_react5 = __toESM(require_react(), 1);
      O = /* @__PURE__ */ A3();
      B2 = /* @__PURE__ */ Gt(O);
      R2 = /* @__PURE__ */ M({
        __proto__: null,
        default: B2
      }, [O]);
    }
  });

  // node_modules/react-tv-player/dist/Streamable-BVF_Z7WI.js
  var Streamable_BVF_Z7WI_exports = {};
  __export(Streamable_BVF_Z7WI_exports, {
    S: () => R3
  });
  function x2(p, s) {
    for (var u = 0; u < s.length; u++) {
      const o = s[u];
      if (typeof o != "string" && !Array.isArray(o)) {
        for (const i in o)
          if (i !== "default" && !(i in p)) {
            const c = Object.getOwnPropertyDescriptor(o, i);
            c && Object.defineProperty(p, i, c.get ? c : {
              enumerable: true,
              get: () => o[i]
            });
          }
      }
    }
    return Object.freeze(Object.defineProperty(p, Symbol.toStringTag, { value: "Module" }));
  }
  function A4() {
    if (P) return d2;
    P = 1;
    var p = Object.create, s = Object.defineProperty, u = Object.getOwnPropertyDescriptor, o = Object.getOwnPropertyNames, i = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty, v5 = (r, e2, t) => e2 in r ? s(r, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r[e2] = t, O6 = (r, e2) => {
      for (var t in e2)
        s(r, t, { get: e2[t], enumerable: true });
    }, m = (r, e2, t, n) => {
      if (e2 && typeof e2 == "object" || typeof e2 == "function")
        for (let l of o(e2))
          !c.call(r, l) && l !== t && s(r, l, { get: () => e2[l], enumerable: !(n = u(e2, l)) || n.enumerable });
      return r;
    }, S3 = (r, e2, t) => (t = r != null ? p(i(r)) : {}, m(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      !r || !r.__esModule ? s(t, "default", { value: r, enumerable: true }) : t,
      r
    )), j2 = (r) => m(s({}, "__esModule", { value: true }), r), a = (r, e2, t) => (v5(r, typeof e2 != "symbol" ? e2 + "" : e2, t), t), y2 = {};
    O6(y2, {
      default: () => h3
    }), d2 = j2(y2);
    var f5 = S3(import_react6.default), _ = /* @__PURE__ */ Xt(), b3 = /* @__PURE__ */ Xl();
    const L5 = "https://cdn.embed.ly/player-0.1.0.min.js", w2 = "playerjs";
    class h3 extends f5.Component {
      constructor() {
        super(...arguments), a(this, "callPlayer", _.callPlayer), a(this, "duration", null), a(this, "currentTime", null), a(this, "secondsLoaded", null), a(this, "mute", () => {
          this.callPlayer("mute");
        }), a(this, "unmute", () => {
          this.callPlayer("unmute");
        }), a(this, "ref", (e2) => {
          this.iframe = e2;
        });
      }
      componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
      load(e2) {
        (0, _.getSDK)(L5, w2).then((t) => {
          this.iframe && (this.player = new t.Player(this.iframe), this.player.setLoop(this.props.loop), this.player.on("ready", this.props.onReady), this.player.on("play", this.props.onPlay), this.player.on("pause", this.props.onPause), this.player.on("seeked", this.props.onSeek), this.player.on("ended", this.props.onEnded), this.player.on("error", this.props.onError), this.player.on("timeupdate", ({ duration: n, seconds: l }) => {
            this.duration = n, this.currentTime = l;
          }), this.player.on("buffered", ({ percent: n }) => {
            this.duration && (this.secondsLoaded = this.duration * n);
          }), this.props.muted && this.player.mute());
        }, this.props.onError);
      }
      play() {
        this.callPlayer("play");
      }
      pause() {
        this.callPlayer("pause");
      }
      stop() {
      }
      seekTo(e2, t = true) {
        this.callPlayer("setCurrentTime", e2), t || this.pause();
      }
      setVolume(e2) {
        this.callPlayer("setVolume", e2 * 100);
      }
      setLoop(e2) {
        this.callPlayer("setLoop", e2);
      }
      getDuration() {
        return this.duration;
      }
      getCurrentTime() {
        return this.currentTime;
      }
      getSecondsLoaded() {
        return this.secondsLoaded;
      }
      render() {
        const e2 = this.props.url.match(b3.MATCH_URL_STREAMABLE)[1], t = {
          width: "100%",
          height: "100%"
        };
        return /* @__PURE__ */ f5.default.createElement(
          "iframe",
          {
            ref: this.ref,
            src: `https://streamable.com/o/${e2}`,
            frameBorder: "0",
            scrolling: "no",
            style: t,
            allow: "encrypted-media; autoplay; fullscreen;"
          }
        );
      }
    }
    return a(h3, "displayName", "Streamable"), a(h3, "canPlay", b3.canPlay.streamable), d2;
  }
  var import_react6, d2, P, g3, C2, R3;
  var init_Streamable_BVF_Z7WI = __esm({
    "node_modules/react-tv-player/dist/Streamable-BVF_Z7WI.js"() {
      init_index_r8XrYpcu();
      import_react6 = __toESM(require_react(), 1);
      g3 = /* @__PURE__ */ A4();
      C2 = /* @__PURE__ */ Gt(g3);
      R3 = /* @__PURE__ */ x2({
        __proto__: null,
        default: C2
      }, [g3]);
    }
  });

  // node_modules/react-tv-player/dist/Wistia-CRYFeWoP.js
  var Wistia_CRYFeWoP_exports = {};
  __export(Wistia_CRYFeWoP_exports, {
    W: () => F
  });
  function L3(p, i) {
    for (var u = 0; u < i.length; u++) {
      const n = i[u];
      if (typeof n != "string" && !Array.isArray(n)) {
        for (const o in n)
          if (o !== "default" && !(o in p)) {
            const c = Object.getOwnPropertyDescriptor(n, o);
            c && Object.defineProperty(p, o, c.get ? c : {
              enumerable: true,
              get: () => n[o]
            });
          }
      }
    }
    return Object.freeze(Object.defineProperty(p, Symbol.toStringTag, { value: "Module" }));
  }
  function N() {
    if (v2) return P2;
    v2 = 1;
    var p = Object.create, i = Object.defineProperty, u = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, o = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty, O6 = (t, e2, a) => e2 in t ? i(t, e2, { enumerable: true, configurable: true, writable: true, value: a }) : t[e2] = a, C4 = (t, e2) => {
      for (var a in e2)
        i(t, a, { get: e2[a], enumerable: true });
    }, b3 = (t, e2, a, l) => {
      if (e2 && typeof e2 == "object" || typeof e2 == "function")
        for (let r of n(e2))
          !c.call(t, r) && r !== a && i(t, r, { get: () => e2[r], enumerable: !(l = u(e2, r)) || l.enumerable });
      return t;
    }, k4 = (t, e2, a) => (a = t != null ? p(o(t)) : {}, b3(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      !t || !t.__esModule ? i(a, "default", { value: t, enumerable: true }) : a,
      t
    )), D3 = (t) => b3(i({}, "__esModule", { value: true }), t), s = (t, e2, a) => (O6(t, typeof e2 != "symbol" ? e2 + "" : e2, a), a), f5 = {};
    C4(f5, {
      default: () => h3
    }), P2 = D3(f5);
    var m = k4(import_react7.default), y2 = /* @__PURE__ */ Xt(), g5 = /* @__PURE__ */ Xl();
    const E3 = "https://fast.wistia.com/assets/external/E-v1.js", R8 = "Wistia", S3 = "wistia-player-";
    class h3 extends m.Component {
      constructor() {
        super(...arguments), s(this, "callPlayer", y2.callPlayer), s(this, "playerID", this.props.config.playerId || `${S3}${(0, y2.randomString)()}`), s(this, "onPlay", (...e2) => this.props.onPlay(...e2)), s(this, "onPause", (...e2) => this.props.onPause(...e2)), s(this, "onSeek", (...e2) => this.props.onSeek(...e2)), s(this, "onEnded", (...e2) => this.props.onEnded(...e2)), s(this, "onPlaybackRateChange", (...e2) => this.props.onPlaybackRateChange(...e2)), s(this, "mute", () => {
          this.callPlayer("mute");
        }), s(this, "unmute", () => {
          this.callPlayer("unmute");
        });
      }
      componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
      load(e2) {
        const { playing: a, muted: l, controls: r, onReady: W4, config: d3, onError: j2 } = this.props;
        (0, y2.getSDK)(E3, R8).then((q5) => {
          d3.customControls && d3.customControls.forEach((_) => q5.defineControl(_)), window._wq = window._wq || [], window._wq.push({
            id: this.playerID,
            options: {
              autoPlay: a,
              silentAutoPlay: "allow",
              muted: l,
              controlsVisibleOnLoad: r,
              fullscreenButton: r,
              playbar: r,
              playbackRateControl: r,
              qualityControl: r,
              volumeControl: r,
              settingsControl: r,
              smallPlayButton: r,
              ...d3.options
            },
            onReady: (_) => {
              this.player = _, this.unbind(), this.player.bind("play", this.onPlay), this.player.bind("pause", this.onPause), this.player.bind("seek", this.onSeek), this.player.bind("end", this.onEnded), this.player.bind("playbackratechange", this.onPlaybackRateChange), W4();
            }
          });
        }, j2);
      }
      unbind() {
        this.player.unbind("play", this.onPlay), this.player.unbind("pause", this.onPause), this.player.unbind("seek", this.onSeek), this.player.unbind("end", this.onEnded), this.player.unbind("playbackratechange", this.onPlaybackRateChange);
      }
      play() {
        this.callPlayer("play");
      }
      pause() {
        this.callPlayer("pause");
      }
      stop() {
        this.unbind(), this.callPlayer("remove");
      }
      seekTo(e2, a = true) {
        this.callPlayer("time", e2), a || this.pause();
      }
      setVolume(e2) {
        this.callPlayer("volume", e2);
      }
      setPlaybackRate(e2) {
        this.callPlayer("playbackRate", e2);
      }
      getDuration() {
        return this.callPlayer("duration");
      }
      getCurrentTime() {
        return this.callPlayer("time");
      }
      getSecondsLoaded() {
        return null;
      }
      render() {
        const { url: e2 } = this.props, a = e2 && e2.match(g5.MATCH_URL_WISTIA)[1], l = `wistia_embed wistia_async_${a}`, r = {
          width: "100%",
          height: "100%"
        };
        return /* @__PURE__ */ m.default.createElement("div", { id: this.playerID, key: a, className: l, style: r });
      }
    }
    return s(h3, "displayName", "Wistia"), s(h3, "canPlay", g5.canPlay.wistia), s(h3, "loopOnEnded", true), P2;
  }
  var import_react7, P2, v2, w, $, F;
  var init_Wistia_CRYFeWoP = __esm({
    "node_modules/react-tv-player/dist/Wistia-CRYFeWoP.js"() {
      init_index_r8XrYpcu();
      import_react7 = __toESM(require_react(), 1);
      w = /* @__PURE__ */ N();
      $ = /* @__PURE__ */ Gt(w);
      F = /* @__PURE__ */ L3({
        __proto__: null,
        default: $
      }, [w]);
    }
  });

  // node_modules/react-tv-player/dist/Twitch-d55t1eqk.js
  var Twitch_d55t1eqk_exports = {};
  __export(Twitch_d55t1eqk_exports, {
    T: () => B3
  });
  function W2(l, a) {
    for (var p = 0; p < a.length; p++) {
      const s = a[p];
      if (typeof s != "string" && !Array.isArray(s)) {
        for (const i in s)
          if (i !== "default" && !(i in l)) {
            const c = Object.getOwnPropertyDescriptor(s, i);
            c && Object.defineProperty(l, i, c.get ? c : {
              enumerable: true,
              get: () => s[i]
            });
          }
      }
    }
    return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }));
  }
  function Y2() {
    if (O2) return f2;
    O2 = 1;
    var l = Object.create, a = Object.defineProperty, p = Object.getOwnPropertyDescriptor, s = Object.getOwnPropertyNames, i = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty, w2 = (t, e2, r) => e2 in t ? a(t, e2, { enumerable: true, configurable: true, writable: true, value: r }) : t[e2] = r, L5 = (t, e2) => {
      for (var r in e2)
        a(t, r, { get: e2[r], enumerable: true });
    }, v5 = (t, e2, r, _) => {
      if (e2 && typeof e2 == "object" || typeof e2 == "function")
        for (let o of s(e2))
          !c.call(t, o) && o !== r && a(t, o, { get: () => e2[o], enumerable: !(_ = p(e2, o)) || _.enumerable });
      return t;
    }, b3 = (t, e2, r) => (r = t != null ? l(i(t)) : {}, v5(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      !t || !t.__esModule ? a(r, "default", { value: t, enumerable: true }) : r,
      t
    )), D3 = (t) => v5(a({}, "__esModule", { value: true }), t), n = (t, e2, r) => (w2(t, typeof e2 != "symbol" ? e2 + "" : e2, r), r), g5 = {};
    L5(g5, {
      default: () => y2
    }), f2 = D3(g5);
    var m = b3(import_react8.default), h3 = /* @__PURE__ */ Xt(), d3 = /* @__PURE__ */ Xl();
    const C4 = "https://player.twitch.tv/js/embed/v1.js", N4 = "Twitch", I4 = "twitch-player-";
    class y2 extends m.Component {
      constructor() {
        super(...arguments), n(this, "callPlayer", h3.callPlayer), n(this, "playerID", this.props.config.playerId || `${I4}${(0, h3.randomString)()}`), n(this, "mute", () => {
          this.callPlayer("setMuted", true);
        }), n(this, "unmute", () => {
          this.callPlayer("setMuted", false);
        });
      }
      componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
      load(e2, r) {
        const { playsinline: _, onError: o, config: M3, controls: S3 } = this.props, u = d3.MATCH_URL_TWITCH_CHANNEL.test(e2), P6 = u ? e2.match(d3.MATCH_URL_TWITCH_CHANNEL)[1] : e2.match(d3.MATCH_URL_TWITCH_VIDEO)[1];
        if (r) {
          u ? this.player.setChannel(P6) : this.player.setVideo("v" + P6);
          return;
        }
        (0, h3.getSDK)(C4, N4).then((E3) => {
          this.player = new E3.Player(this.playerID, {
            video: u ? "" : P6,
            channel: u ? P6 : "",
            height: "100%",
            width: "100%",
            playsinline: _,
            autoplay: this.props.playing,
            muted: this.props.muted,
            // https://github.com/CookPete/react-player/issues/733#issuecomment-549085859
            controls: u ? true : S3,
            time: (0, h3.parseStartTime)(e2),
            ...M3.options
          });
          const { READY: j2, PLAYING: A7, PAUSE: R8, ENDED: H, ONLINE: x5, OFFLINE: U3, SEEK: q5 } = E3.Player;
          this.player.addEventListener(j2, this.props.onReady), this.player.addEventListener(A7, this.props.onPlay), this.player.addEventListener(R8, this.props.onPause), this.player.addEventListener(H, this.props.onEnded), this.player.addEventListener(q5, this.props.onSeek), this.player.addEventListener(x5, this.props.onLoaded), this.player.addEventListener(U3, this.props.onLoaded);
        }, o);
      }
      play() {
        this.callPlayer("play");
      }
      pause() {
        this.callPlayer("pause");
      }
      stop() {
        this.callPlayer("pause");
      }
      seekTo(e2, r = true) {
        this.callPlayer("seek", e2), r || this.pause();
      }
      setVolume(e2) {
        this.callPlayer("setVolume", e2);
      }
      getDuration() {
        return this.callPlayer("getDuration");
      }
      getCurrentTime() {
        return this.callPlayer("getCurrentTime");
      }
      getSecondsLoaded() {
        return null;
      }
      render() {
        const e2 = {
          width: "100%",
          height: "100%"
        };
        return /* @__PURE__ */ m.default.createElement("div", { style: e2, id: this.playerID });
      }
    }
    return n(y2, "displayName", "Twitch"), n(y2, "canPlay", d3.canPlay.twitch), n(y2, "loopOnEnded", true), f2;
  }
  var import_react8, f2, O2, T3, G, B3;
  var init_Twitch_d55t1eqk = __esm({
    "node_modules/react-tv-player/dist/Twitch-d55t1eqk.js"() {
      init_index_r8XrYpcu();
      import_react8 = __toESM(require_react(), 1);
      T3 = /* @__PURE__ */ Y2();
      G = /* @__PURE__ */ Gt(T3);
      B3 = /* @__PURE__ */ W2({
        __proto__: null,
        default: G
      }, [T3]);
    }
  });

  // node_modules/react-tv-player/dist/DailyMotion-BxIESnj_.js
  var DailyMotion_BxIESnj_exports = {};
  __export(DailyMotion_BxIESnj_exports, {
    D: () => k2
  });
  function K(l, a) {
    for (var p = 0; p < a.length; p++) {
      const n = a[p];
      if (typeof n != "string" && !Array.isArray(n)) {
        for (const s in n)
          if (s !== "default" && !(s in l)) {
            const u = Object.getOwnPropertyDescriptor(n, s);
            u && Object.defineProperty(l, s, u.get ? u : {
              enumerable: true,
              get: () => n[s]
            });
          }
      }
    }
    return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }));
  }
  function B4() {
    if (D) return f3;
    D = 1;
    var l = Object.create, a = Object.defineProperty, p = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, s = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty, M3 = (t, e2, r) => e2 in t ? a(t, e2, { enumerable: true, configurable: true, writable: true, value: r }) : t[e2] = r, b3 = (t, e2) => {
      for (var r in e2)
        a(t, r, { get: e2[r], enumerable: true });
    }, g5 = (t, e2, r, h3) => {
      if (e2 && typeof e2 == "object" || typeof e2 == "function")
        for (let i of n(e2))
          !u.call(t, i) && i !== r && a(t, i, { get: () => e2[i], enumerable: !(h3 = p(e2, i)) || h3.enumerable });
      return t;
    }, w2 = (t, e2, r) => (r = t != null ? l(s(t)) : {}, g5(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      !t || !t.__esModule ? a(r, "default", { value: t, enumerable: true }) : r,
      t
    )), S3 = (t) => g5(a({}, "__esModule", { value: true }), t), o = (t, e2, r) => (M3(t, typeof e2 != "symbol" ? e2 + "" : e2, r), r), m = {};
    b3(m, {
      default: () => y2
    }), f3 = S3(m);
    var d3 = w2(import_react9.default), c = /* @__PURE__ */ Xt(), P6 = /* @__PURE__ */ Xl();
    const j2 = "https://api.dmcdn.net/all.js", T7 = "DM", E3 = "dmAsyncInit";
    class y2 extends d3.Component {
      constructor() {
        super(...arguments), o(this, "callPlayer", c.callPlayer), o(this, "onDurationChange", () => {
          const e2 = this.getDuration();
          this.props.onDuration(e2);
        }), o(this, "mute", () => {
          this.callPlayer("setMuted", true);
        }), o(this, "unmute", () => {
          this.callPlayer("setMuted", false);
        }), o(this, "ref", (e2) => {
          this.container = e2;
        });
      }
      componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
      load(e2) {
        const { controls: r, config: h3, onError: i, playing: A7 } = this.props, [, v5] = e2.match(P6.MATCH_URL_DAILYMOTION);
        if (this.player) {
          this.player.load(v5, {
            start: (0, c.parseStartTime)(e2),
            autoplay: A7
          });
          return;
        }
        (0, c.getSDK)(j2, T7, E3, (_) => _.player).then((_) => {
          if (!this.container)
            return;
          const L5 = _.player;
          this.player = new L5(this.container, {
            width: "100%",
            height: "100%",
            video: v5,
            params: {
              controls: r,
              autoplay: this.props.playing,
              mute: this.props.muted,
              start: (0, c.parseStartTime)(e2),
              origin: window.location.origin,
              ...h3.params
            },
            events: {
              apiready: this.props.onReady,
              seeked: () => this.props.onSeek(this.player.currentTime),
              video_end: this.props.onEnded,
              durationchange: this.onDurationChange,
              pause: this.props.onPause,
              playing: this.props.onPlay,
              waiting: this.props.onBuffer,
              error: (C4) => i(C4)
            }
          });
        }, i);
      }
      play() {
        this.callPlayer("play");
      }
      pause() {
        this.callPlayer("pause");
      }
      stop() {
      }
      seekTo(e2, r = true) {
        this.callPlayer("seek", e2), r || this.pause();
      }
      setVolume(e2) {
        this.callPlayer("setVolume", e2);
      }
      getDuration() {
        return this.player.duration || null;
      }
      getCurrentTime() {
        return this.player.currentTime;
      }
      getSecondsLoaded() {
        return this.player.bufferedTime;
      }
      render() {
        const { display: e2 } = this.props, r = {
          width: "100%",
          height: "100%",
          display: e2
        };
        return /* @__PURE__ */ d3.default.createElement("div", { style: r }, /* @__PURE__ */ d3.default.createElement("div", { ref: this.ref }));
      }
    }
    return o(y2, "displayName", "DailyMotion"), o(y2, "canPlay", P6.canPlay.dailymotion), o(y2, "loopOnEnded", true), f3;
  }
  var import_react9, f3, D, O3, I3, k2;
  var init_DailyMotion_BxIESnj = __esm({
    "node_modules/react-tv-player/dist/DailyMotion-BxIESnj_.js"() {
      init_index_r8XrYpcu();
      import_react9 = __toESM(require_react(), 1);
      O3 = /* @__PURE__ */ B4();
      I3 = /* @__PURE__ */ Gt(O3);
      k2 = /* @__PURE__ */ K({
        __proto__: null,
        default: I3
      }, [O3]);
    }
  });

  // node_modules/react-tv-player/dist/Mixcloud-Bqoho2jX.js
  var Mixcloud_Bqoho2jX_exports = {};
  __export(Mixcloud_Bqoho2jX_exports, {
    M: () => R5
  });
  function T4(u, i) {
    for (var p = 0; p < i.length; p++) {
      const a = i[p];
      if (typeof a != "string" && !Array.isArray(a)) {
        for (const n in a)
          if (n !== "default" && !(n in u)) {
            const c = Object.getOwnPropertyDescriptor(a, n);
            c && Object.defineProperty(u, n, c.get ? c : {
              enumerable: true,
              get: () => a[n]
            });
          }
      }
    }
    return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }));
  }
  function C3() {
    if (v3) return f4;
    v3 = 1;
    var u = Object.create, i = Object.defineProperty, p = Object.getOwnPropertyDescriptor, a = Object.getOwnPropertyNames, n = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty, O6 = (r, e2, t) => e2 in r ? i(r, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r[e2] = t, M3 = (r, e2) => {
      for (var t in e2)
        i(r, t, { get: e2[t], enumerable: true });
    }, y2 = (r, e2, t, l) => {
      if (e2 && typeof e2 == "object" || typeof e2 == "function")
        for (let s of a(e2))
          !c.call(r, s) && s !== t && i(r, s, { get: () => e2[s], enumerable: !(l = p(e2, s)) || l.enumerable });
      return r;
    }, b3 = (r, e2, t) => (t = r != null ? u(n(r)) : {}, y2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      !r || !r.__esModule ? i(t, "default", { value: r, enumerable: true }) : t,
      r
    )), x5 = (r) => y2(i({}, "__esModule", { value: true }), r), o = (r, e2, t) => (O6(r, typeof e2 != "symbol" ? e2 + "" : e2, t), t), _ = {};
    M3(_, {
      default: () => d3
    }), f4 = x5(_);
    var m = b3(import_react10.default), h3 = /* @__PURE__ */ Xt(), g5 = /* @__PURE__ */ Xl();
    const w2 = "https://widget.mixcloud.com/media/js/widgetApi.js", j2 = "Mixcloud";
    class d3 extends m.Component {
      constructor() {
        super(...arguments), o(this, "callPlayer", h3.callPlayer), o(this, "duration", null), o(this, "currentTime", null), o(this, "secondsLoaded", null), o(this, "mute", () => {
        }), o(this, "unmute", () => {
        }), o(this, "ref", (e2) => {
          this.iframe = e2;
        });
      }
      componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
      load(e2) {
        (0, h3.getSDK)(w2, j2).then((t) => {
          this.player = t.PlayerWidget(this.iframe), this.player.ready.then(() => {
            this.player.events.play.on(this.props.onPlay), this.player.events.pause.on(this.props.onPause), this.player.events.ended.on(this.props.onEnded), this.player.events.error.on(this.props.error), this.player.events.progress.on((l, s) => {
              this.currentTime = l, this.duration = s;
            }), this.props.onReady();
          });
        }, this.props.onError);
      }
      play() {
        this.callPlayer("play");
      }
      pause() {
        this.callPlayer("pause");
      }
      stop() {
      }
      seekTo(e2, t = true) {
        this.callPlayer("seek", e2), t || this.pause();
      }
      setVolume(e2) {
      }
      getDuration() {
        return this.duration;
      }
      getCurrentTime() {
        return this.currentTime;
      }
      getSecondsLoaded() {
        return null;
      }
      render() {
        const { url: e2, config: t } = this.props, l = e2.match(g5.MATCH_URL_MIXCLOUD)[1], s = {
          width: "100%",
          height: "100%"
        }, D3 = (0, h3.queryString)({
          ...t.options,
          feed: `/${l}/`
        });
        return /* @__PURE__ */ m.default.createElement(
          "iframe",
          {
            key: l,
            ref: this.ref,
            style: s,
            src: `https://www.mixcloud.com/widget/iframe/?${D3}`,
            frameBorder: "0",
            allow: "autoplay"
          }
        );
      }
    }
    return o(d3, "displayName", "Mixcloud"), o(d3, "canPlay", g5.canPlay.mixcloud), o(d3, "loopOnEnded", true), f4;
  }
  var import_react10, f4, v3, P3, N2, R5;
  var init_Mixcloud_Bqoho2jX = __esm({
    "node_modules/react-tv-player/dist/Mixcloud-Bqoho2jX.js"() {
      init_index_r8XrYpcu();
      import_react10 = __toESM(require_react(), 1);
      P3 = /* @__PURE__ */ C3();
      N2 = /* @__PURE__ */ Gt(P3);
      R5 = /* @__PURE__ */ T4({
        __proto__: null,
        default: N2
      }, [P3]);
    }
  });

  // node_modules/react-tv-player/dist/Vidyard-Dkn0MzvY.js
  var Vidyard_Dkn0MzvY_exports = {};
  __export(Vidyard_Dkn0MzvY_exports, {
    V: () => B5
  });
  function T5(l, a) {
    for (var p = 0; p < a.length; p++) {
      const o = a[p];
      if (typeof o != "string" && !Array.isArray(o)) {
        for (const s in o)
          if (s !== "default" && !(s in l)) {
            const u = Object.getOwnPropertyDescriptor(o, s);
            u && Object.defineProperty(l, s, u.get ? u : {
              enumerable: true,
              get: () => o[s]
            });
          }
      }
    }
    return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }));
  }
  function k3() {
    if (O4) return P4;
    O4 = 1;
    var l = Object.create, a = Object.defineProperty, p = Object.getOwnPropertyDescriptor, o = Object.getOwnPropertyNames, s = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty, D3 = (t, e2, r) => e2 in t ? a(t, e2, { enumerable: true, configurable: true, writable: true, value: r }) : t[e2] = r, j2 = (t, e2) => {
      for (var r in e2)
        a(t, r, { get: e2[r], enumerable: true });
    }, m = (t, e2, r, d3) => {
      if (e2 && typeof e2 == "object" || typeof e2 == "function")
        for (let i of o(e2))
          !u.call(t, i) && i !== r && a(t, i, { get: () => e2[i], enumerable: !(d3 = p(e2, i)) || d3.enumerable });
      return t;
    }, w2 = (t, e2, r) => (r = t != null ? l(s(t)) : {}, m(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      !t || !t.__esModule ? a(r, "default", { value: t, enumerable: true }) : r,
      t
    )), S3 = (t) => m(a({}, "__esModule", { value: true }), t), n = (t, e2, r) => (D3(t, typeof e2 != "symbol" ? e2 + "" : e2, r), r), v5 = {};
    j2(v5, {
      default: () => c
    }), P4 = S3(v5);
    var y2 = w2(import_react11.default), g5 = /* @__PURE__ */ Xt(), b3 = /* @__PURE__ */ Xl();
    const M3 = "https://play.vidyard.com/embed/v4.js", A7 = "VidyardV4", E3 = "onVidyardAPI";
    class c extends y2.Component {
      constructor() {
        super(...arguments), n(this, "callPlayer", g5.callPlayer), n(this, "mute", () => {
          this.setVolume(0);
        }), n(this, "unmute", () => {
          this.props.volume !== null && this.setVolume(this.props.volume);
        }), n(this, "ref", (e2) => {
          this.container = e2;
        });
      }
      componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
      load(e2) {
        const { playing: r, config: d3, onError: i, onDuration: L5 } = this.props, h3 = e2 && e2.match(b3.MATCH_URL_VIDYARD)[1];
        this.player && this.stop(), (0, g5.getSDK)(M3, A7, E3).then((_) => {
          this.container && (_.api.addReadyListener((f5, R8) => {
            this.player || (this.player = R8, this.player.on("ready", this.props.onReady), this.player.on("play", this.props.onPlay), this.player.on("pause", this.props.onPause), this.player.on("seek", this.props.onSeek), this.player.on("playerComplete", this.props.onEnded));
          }, h3), _.api.renderPlayer({
            uuid: h3,
            container: this.container,
            autoplay: r ? 1 : 0,
            ...d3.options
          }), _.api.getPlayerMetadata(h3).then((f5) => {
            this.duration = f5.length_in_seconds, L5(f5.length_in_seconds);
          }));
        }, i);
      }
      play() {
        this.callPlayer("play");
      }
      pause() {
        this.callPlayer("pause");
      }
      stop() {
        window.VidyardV4.api.destroyPlayer(this.player);
      }
      seekTo(e2, r = true) {
        this.callPlayer("seek", e2), r || this.pause();
      }
      setVolume(e2) {
        this.callPlayer("setVolume", e2);
      }
      setPlaybackRate(e2) {
        this.callPlayer("setPlaybackSpeed", e2);
      }
      getDuration() {
        return this.duration;
      }
      getCurrentTime() {
        return this.callPlayer("currentTime");
      }
      getSecondsLoaded() {
        return null;
      }
      render() {
        const { display: e2 } = this.props, r = {
          width: "100%",
          height: "100%",
          display: e2
        };
        return /* @__PURE__ */ y2.default.createElement("div", { style: r }, /* @__PURE__ */ y2.default.createElement("div", { ref: this.ref }));
      }
    }
    return n(c, "displayName", "Vidyard"), n(c, "canPlay", b3.canPlay.vidyard), P4;
  }
  var import_react11, P4, O4, V3, K2, B5;
  var init_Vidyard_Dkn0MzvY = __esm({
    "node_modules/react-tv-player/dist/Vidyard-Dkn0MzvY.js"() {
      init_index_r8XrYpcu();
      import_react11 = __toESM(require_react(), 1);
      V3 = /* @__PURE__ */ k3();
      K2 = /* @__PURE__ */ Gt(V3);
      B5 = /* @__PURE__ */ T5({
        __proto__: null,
        default: K2
      }, [V3]);
    }
  });

  // node_modules/react-tv-player/dist/Kaltura-irPHNR5Q.js
  var Kaltura_irPHNR5Q_exports = {};
  __export(Kaltura_irPHNR5Q_exports, {
    K: () => R6
  });
  function E2(l, o) {
    for (var u = 0; u < o.length; u++) {
      const s = o[u];
      if (typeof s != "string" && !Array.isArray(s)) {
        for (const n in s)
          if (n !== "default" && !(n in l)) {
            const p = Object.getOwnPropertyDescriptor(s, n);
            p && Object.defineProperty(l, n, p.get ? p : {
              enumerable: true,
              get: () => s[n]
            });
          }
      }
    }
    return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }));
  }
  function x3() {
    if (P5) return h2;
    P5 = 1;
    var l = Object.create, o = Object.defineProperty, u = Object.getOwnPropertyDescriptor, s = Object.getOwnPropertyNames, n = Object.getPrototypeOf, p = Object.prototype.hasOwnProperty, v5 = (t, e2, r) => e2 in t ? o(t, e2, { enumerable: true, configurable: true, writable: true, value: r }) : t[e2] = r, b3 = (t, e2) => {
      for (var r in e2)
        o(t, r, { get: e2[r], enumerable: true });
    }, f5 = (t, e2, r, c) => {
      if (e2 && typeof e2 == "object" || typeof e2 == "function")
        for (let i of s(e2))
          !p.call(t, i) && i !== r && o(t, i, { get: () => e2[i], enumerable: !(c = u(e2, i)) || c.enumerable });
      return t;
    }, O6 = (t, e2, r) => (r = t != null ? l(n(t)) : {}, f5(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      !t || !t.__esModule ? o(r, "default", { value: t, enumerable: true }) : r,
      t
    )), w2 = (t) => f5(o({}, "__esModule", { value: true }), t), a = (t, e2, r) => (v5(t, typeof e2 != "symbol" ? e2 + "" : e2, r), r), y2 = {};
    b3(y2, {
      default: () => d3
    }), h2 = w2(y2);
    var _ = O6(import_react12.default), m = /* @__PURE__ */ Xt(), K3 = /* @__PURE__ */ Xl();
    const j2 = "https://cdn.embed.ly/player-0.1.0.min.js", L5 = "playerjs";
    class d3 extends _.Component {
      constructor() {
        super(...arguments), a(this, "callPlayer", m.callPlayer), a(this, "duration", null), a(this, "currentTime", null), a(this, "secondsLoaded", null), a(this, "mute", () => {
          this.callPlayer("mute");
        }), a(this, "unmute", () => {
          this.callPlayer("unmute");
        }), a(this, "ref", (e2) => {
          this.iframe = e2;
        });
      }
      componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
      load(e2) {
        (0, m.getSDK)(j2, L5).then((r) => {
          this.iframe && (this.player = new r.Player(this.iframe), this.player.on("ready", () => {
            setTimeout(() => {
              this.player.isReady = true, this.player.setLoop(this.props.loop), this.props.muted && this.player.mute(), this.addListeners(this.player, this.props), this.props.onReady();
            }, 500);
          }));
        }, this.props.onError);
      }
      addListeners(e2, r) {
        e2.on("play", r.onPlay), e2.on("pause", r.onPause), e2.on("ended", r.onEnded), e2.on("error", r.onError), e2.on("timeupdate", ({ duration: c, seconds: i }) => {
          this.duration = c, this.currentTime = i;
        });
      }
      play() {
        this.callPlayer("play");
      }
      pause() {
        this.callPlayer("pause");
      }
      stop() {
      }
      seekTo(e2, r = true) {
        this.callPlayer("setCurrentTime", e2), r || this.pause();
      }
      setVolume(e2) {
        this.callPlayer("setVolume", e2);
      }
      setLoop(e2) {
        this.callPlayer("setLoop", e2);
      }
      getDuration() {
        return this.duration;
      }
      getCurrentTime() {
        return this.currentTime;
      }
      getSecondsLoaded() {
        return this.secondsLoaded;
      }
      render() {
        const e2 = {
          width: "100%",
          height: "100%"
        };
        return /* @__PURE__ */ _.default.createElement(
          "iframe",
          {
            ref: this.ref,
            src: this.props.url,
            frameBorder: "0",
            scrolling: "no",
            style: e2,
            allow: "encrypted-media; autoplay; fullscreen;",
            referrerPolicy: "no-referrer-when-downgrade"
          }
        );
      }
    }
    return a(d3, "displayName", "Kaltura"), a(d3, "canPlay", K3.canPlay.kaltura), h2;
  }
  var import_react12, h2, P5, g4, N3, R6;
  var init_Kaltura_irPHNR5Q = __esm({
    "node_modules/react-tv-player/dist/Kaltura-irPHNR5Q.js"() {
      init_index_r8XrYpcu();
      import_react12 = __toESM(require_react(), 1);
      g4 = /* @__PURE__ */ x3();
      N3 = /* @__PURE__ */ Gt(g4);
      R6 = /* @__PURE__ */ E2({
        __proto__: null,
        default: N3
      }, [g4]);
    }
  });

  // node_modules/react-tv-player/dist/FilePlayer-CCJCE4nb.js
  var FilePlayer_CCJCE4nb_exports = {};
  __export(FilePlayer_CCJCE4nb_exports, {
    F: () => ee
  });
  function z(u, h3) {
    for (var f5 = 0; f5 < h3.length; f5++) {
      const p = h3[f5];
      if (typeof p != "string" && !Array.isArray(p)) {
        for (const d3 in p)
          if (d3 !== "default" && !(d3 in u)) {
            const y2 = Object.getOwnPropertyDescriptor(p, d3);
            y2 && Object.defineProperty(u, d3, y2.get ? y2 : {
              enumerable: true,
              get: () => p[d3]
            });
          }
      }
    }
    return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }));
  }
  function $2() {
    if (A6) return S2;
    A6 = 1;
    var u = Object.create, h3 = Object.defineProperty, f5 = Object.getOwnPropertyDescriptor, p = Object.getOwnPropertyNames, d3 = Object.getPrototypeOf, y2 = Object.prototype.hasOwnProperty, I4 = (s, e2, t) => e2 in s ? h3(s, e2, { enumerable: true, configurable: true, writable: true, value: t }) : s[e2] = t, D3 = (s, e2) => {
      for (var t in e2)
        h3(s, t, { get: e2[t], enumerable: true });
    }, b3 = (s, e2, t, r) => {
      if (e2 && typeof e2 == "object" || typeof e2 == "function")
        for (let o of p(e2))
          !y2.call(s, o) && o !== t && h3(s, o, { get: () => e2[o], enumerable: !(r = f5(e2, o)) || r.enumerable });
      return s;
    }, w2 = (s, e2, t) => (t = s != null ? u(d3(s)) : {}, b3(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      !s || !s.__esModule ? h3(t, "default", { value: s, enumerable: true }) : t,
      s
    )), M3 = (s) => b3(h3({}, "__esModule", { value: true }), s), i = (s, e2, t) => (I4(s, typeof e2 != "symbol" ? e2 + "" : e2, t), t), _ = {};
    D3(_, {
      default: () => g5
    }), S2 = M3(_);
    var P6 = w2(import_react13.default), a = /* @__PURE__ */ Xt(), v5 = /* @__PURE__ */ Xl();
    const E3 = typeof navigator < "u", k4 = E3 && navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1, O6 = E3 && (/iPad|iPhone|iPod/.test(navigator.userAgent) || k4) && !window.MSStream, U3 = E3 && /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !window.MSStream, F2 = "https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js", N4 = "Hls", j2 = "https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js", H = "dashjs", V5 = "https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js", T7 = "flvjs", C4 = /www\.dropbox\.com\/.+/, m = /https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/, B6 = "https://videodelivery.net/{id}/manifest/video.m3u8";
    class g5 extends P6.Component {
      constructor() {
        super(...arguments), i(this, "onReady", (...e2) => this.props.onReady(...e2)), i(this, "onPlay", (...e2) => this.props.onPlay(...e2)), i(this, "onBuffer", (...e2) => this.props.onBuffer(...e2)), i(this, "onBufferEnd", (...e2) => this.props.onBufferEnd(...e2)), i(this, "onPause", (...e2) => this.props.onPause(...e2)), i(this, "onEnded", (...e2) => this.props.onEnded(...e2)), i(this, "onError", (...e2) => this.props.onError(...e2)), i(this, "onPlayBackRateChange", (e2) => this.props.onPlaybackRateChange(e2.target.playbackRate)), i(this, "onEnablePIP", (...e2) => this.props.onEnablePIP(...e2)), i(this, "onDisablePIP", (e2) => {
          const { onDisablePIP: t, playing: r } = this.props;
          t(e2), r && this.play();
        }), i(this, "onPresentationModeChange", (e2) => {
          if (this.player && (0, a.supportsWebKitPresentationMode)(this.player)) {
            const { webkitPresentationMode: t } = this.player;
            t === "picture-in-picture" ? this.onEnablePIP(e2) : t === "inline" && this.onDisablePIP(e2);
          }
        }), i(this, "onSeek", (e2) => {
          this.props.onSeek(e2.target.currentTime);
        }), i(this, "mute", () => {
          this.player.muted = true;
        }), i(this, "unmute", () => {
          this.player.muted = false;
        }), i(this, "renderSourceElement", (e2, t) => typeof e2 == "string" ? /* @__PURE__ */ P6.default.createElement("source", { key: t, src: e2 }) : /* @__PURE__ */ P6.default.createElement("source", { key: t, ...e2 })), i(this, "renderTrack", (e2, t) => /* @__PURE__ */ P6.default.createElement("track", { key: t, ...e2 })), i(this, "ref", (e2) => {
          this.player && (this.prevPlayer = this.player), this.player = e2;
        });
      }
      componentDidMount() {
        this.props.onMount && this.props.onMount(this), this.addListeners(this.player);
        const e2 = this.getSource(this.props.url);
        e2 && (this.player.src = e2), (O6 || this.props.config.forceDisableHls) && this.player.load();
      }
      componentDidUpdate(e2) {
        this.shouldUseAudio(this.props) !== this.shouldUseAudio(e2) && (this.removeListeners(this.prevPlayer, e2.url), this.addListeners(this.player)), this.props.url !== e2.url && !(0, a.isMediaStream)(this.props.url) && !(this.props.url instanceof Array) && (this.player.srcObject = null);
      }
      componentWillUnmount() {
        this.player.removeAttribute("src"), this.removeListeners(this.player), this.hls && this.hls.destroy();
      }
      addListeners(e2) {
        const { url: t, playsinline: r } = this.props;
        e2.addEventListener("play", this.onPlay), e2.addEventListener("waiting", this.onBuffer), e2.addEventListener("playing", this.onBufferEnd), e2.addEventListener("pause", this.onPause), e2.addEventListener("seeked", this.onSeek), e2.addEventListener("ended", this.onEnded), e2.addEventListener("error", this.onError), e2.addEventListener("ratechange", this.onPlayBackRateChange), e2.addEventListener("enterpictureinpicture", this.onEnablePIP), e2.addEventListener("leavepictureinpicture", this.onDisablePIP), e2.addEventListener("webkitpresentationmodechanged", this.onPresentationModeChange), this.shouldUseHLS(t) || e2.addEventListener("canplay", this.onReady), r && (e2.setAttribute("playsinline", ""), e2.setAttribute("webkit-playsinline", ""), e2.setAttribute("x5-playsinline", ""));
      }
      removeListeners(e2, t) {
        e2.removeEventListener("canplay", this.onReady), e2.removeEventListener("play", this.onPlay), e2.removeEventListener("waiting", this.onBuffer), e2.removeEventListener("playing", this.onBufferEnd), e2.removeEventListener("pause", this.onPause), e2.removeEventListener("seeked", this.onSeek), e2.removeEventListener("ended", this.onEnded), e2.removeEventListener("error", this.onError), e2.removeEventListener("ratechange", this.onPlayBackRateChange), e2.removeEventListener("enterpictureinpicture", this.onEnablePIP), e2.removeEventListener("leavepictureinpicture", this.onDisablePIP), e2.removeEventListener("webkitpresentationmodechanged", this.onPresentationModeChange), this.shouldUseHLS(t) || e2.removeEventListener("canplay", this.onReady);
      }
      shouldUseAudio(e2) {
        return e2.config.forceVideo || e2.config.attributes.poster ? false : v5.AUDIO_EXTENSIONS.test(e2.url) || e2.config.forceAudio;
      }
      shouldUseHLS(e2) {
        return U3 && this.props.config.forceSafariHLS || this.props.config.forceHLS ? true : O6 || this.props.config.forceDisableHls ? false : v5.HLS_EXTENSIONS.test(e2) || m.test(e2);
      }
      shouldUseDASH(e2) {
        return v5.DASH_EXTENSIONS.test(e2) || this.props.config.forceDASH;
      }
      shouldUseFLV(e2) {
        return v5.FLV_EXTENSIONS.test(e2) || this.props.config.forceFLV;
      }
      load(e2) {
        const { hlsVersion: t, hlsOptions: r, dashVersion: o, flvVersion: L5 } = this.props.config;
        if (this.hls && this.hls.destroy(), this.dash && this.dash.reset(), this.shouldUseHLS(e2) && (0, a.getSDK)(F2.replace("VERSION", t), N4).then((n) => {
          if (this.hls = new n(r), this.hls.on(n.Events.MANIFEST_PARSED, () => {
            this.props.onReady();
          }), this.hls.on(n.Events.ERROR, (l, c) => {
            this.props.onError(l, c, this.hls, n);
          }), m.test(e2)) {
            const l = e2.match(m)[1];
            this.hls.loadSource(B6.replace("{id}", l));
          } else
            this.hls.loadSource(e2);
          this.hls.attachMedia(this.player), this.props.onLoaded();
        }), this.shouldUseDASH(e2) && (0, a.getSDK)(j2.replace("VERSION", o), H).then((n) => {
          this.dash = n.MediaPlayer().create(), this.dash.initialize(this.player, e2, this.props.playing), this.dash.on("error", this.props.onError), parseInt(o) < 3 ? this.dash.getDebug().setLogToBrowserConsole(false) : this.dash.updateSettings({ debug: { logLevel: n.Debug.LOG_LEVEL_NONE } }), this.props.onLoaded();
        }), this.shouldUseFLV(e2) && (0, a.getSDK)(V5.replace("VERSION", L5), T7).then((n) => {
          this.flv = n.createPlayer({ type: "flv", url: e2 }), this.flv.attachMediaElement(this.player), this.flv.on(n.Events.ERROR, (l, c) => {
            this.props.onError(l, c, this.flv, n);
          }), this.flv.load(), this.props.onLoaded();
        }), e2 instanceof Array)
          this.player.load();
        else if ((0, a.isMediaStream)(e2))
          try {
            this.player.srcObject = e2;
          } catch {
            this.player.src = window.URL.createObjectURL(e2);
          }
      }
      play() {
        const e2 = this.player.play();
        e2 && e2.catch(this.props.onError);
      }
      pause() {
        this.player.pause();
      }
      stop() {
        this.player.removeAttribute("src"), this.dash && this.dash.reset();
      }
      seekTo(e2, t = true) {
        this.player.currentTime = e2, t || this.pause();
      }
      setVolume(e2) {
        this.player.volume = e2;
      }
      enablePIP() {
        this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player ? this.player.requestPictureInPicture() : (0, a.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== "picture-in-picture" && this.player.webkitSetPresentationMode("picture-in-picture");
      }
      disablePIP() {
        document.exitPictureInPicture && document.pictureInPictureElement === this.player ? document.exitPictureInPicture() : (0, a.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== "inline" && this.player.webkitSetPresentationMode("inline");
      }
      setPlaybackRate(e2) {
        try {
          this.player.playbackRate = e2;
        } catch (t) {
          this.props.onError(t);
        }
      }
      getDuration() {
        if (!this.player)
          return null;
        const { duration: e2, seekable: t } = this.player;
        return e2 === 1 / 0 && t.length > 0 ? t.end(t.length - 1) : e2;
      }
      getCurrentTime() {
        return this.player ? this.player.currentTime : null;
      }
      getSecondsLoaded() {
        if (!this.player)
          return null;
        const { buffered: e2 } = this.player;
        if (e2.length === 0)
          return 0;
        const t = e2.end(e2.length - 1), r = this.getDuration();
        return t > r ? r : t;
      }
      getSource(e2) {
        const t = this.shouldUseHLS(e2), r = this.shouldUseDASH(e2), o = this.shouldUseFLV(e2);
        if (!(e2 instanceof Array || (0, a.isMediaStream)(e2) || t || r || o))
          return C4.test(e2) ? e2.replace("www.dropbox.com", "dl.dropboxusercontent.com") : e2;
      }
      render() {
        const { url: e2, playing: t, loop: r, controls: o, muted: L5, config: n, width: l, height: c } = this.props, x5 = this.shouldUseAudio(this.props) ? "audio" : "video", K3 = {
          width: l === "auto" ? l : "100%",
          height: c === "auto" ? c : "100%"
        };
        return /* @__PURE__ */ P6.default.createElement(
          x5,
          {
            ref: this.ref,
            src: this.getSource(e2),
            style: K3,
            preload: "auto",
            autoPlay: t || void 0,
            controls: o,
            muted: L5,
            loop: r,
            ...n.attributes
          },
          e2 instanceof Array && e2.map(this.renderSourceElement),
          n.tracks.map(this.renderTrack)
        );
      }
    }
    return i(g5, "displayName", "FilePlayer"), i(g5, "canPlay", v5.canPlay.file), S2;
  }
  var import_react13, S2, A6, R7, J2, ee;
  var init_FilePlayer_CCJCE4nb = __esm({
    "node_modules/react-tv-player/dist/FilePlayer-CCJCE4nb.js"() {
      init_index_r8XrYpcu();
      import_react13 = __toESM(require_react(), 1);
      R7 = /* @__PURE__ */ $2();
      J2 = /* @__PURE__ */ Gt(R7);
      ee = /* @__PURE__ */ z({
        __proto__: null,
        default: J2
      }, [R7]);
    }
  });

  // node_modules/react-tv-player/dist/Preview-DbqEJNSc.js
  var Preview_DbqEJNSc_exports = {};
  __export(Preview_DbqEJNSc_exports, {
    P: () => z2
  });
  function M2(c, n) {
    for (var p = 0; p < n.length; p++) {
      const o = n[p];
      if (typeof o != "string" && !Array.isArray(o)) {
        for (const s in o)
          if (s !== "default" && !(s in c)) {
            const u = Object.getOwnPropertyDescriptor(o, s);
            u && Object.defineProperty(c, s, u.get ? u : {
              enumerable: true,
              get: () => o[s]
            });
          }
      }
    }
    return Object.freeze(Object.defineProperty(c, Symbol.toStringTag, { value: "Module" }));
  }
  function $3() {
    if (O5) return v4;
    O5 = 1;
    var c = Object.create, n = Object.defineProperty, p = Object.getOwnPropertyDescriptor, o = Object.getOwnPropertyNames, s = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty, I4 = (r, e2, t) => e2 in r ? n(r, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r[e2] = t, j2 = (r, e2) => {
      for (var t in e2)
        n(r, t, { get: e2[t], enumerable: true });
    }, b3 = (r, e2, t, i) => {
      if (e2 && typeof e2 == "object" || typeof e2 == "function")
        for (let a of o(e2))
          !u.call(r, a) && a !== t && n(r, a, { get: () => e2[a], enumerable: !(i = p(e2, a)) || i.enumerable });
      return r;
    }, E3 = (r, e2, t) => (t = r != null ? c(s(r)) : {}, b3(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      !r || !r.__esModule ? n(t, "default", { value: r, enumerable: true }) : t,
      r
    )), S3 = (r) => b3(n({}, "__esModule", { value: true }), r), f5 = (r, e2, t) => (I4(r, typeof e2 != "symbol" ? e2 + "" : e2, t), t), y2 = {};
    j2(y2, {
      default: () => C4
    }), v4 = S3(y2);
    var l = E3(import_react14.default);
    const h3 = "64px", _ = {};
    class C4 extends l.Component {
      constructor() {
        super(...arguments), f5(this, "mounted", false), f5(this, "state", {
          image: null
        }), f5(this, "handleKeyPress", (e2) => {
          (e2.key === "Enter" || e2.key === " ") && this.props.onClick();
        });
      }
      componentDidMount() {
        this.mounted = true, this.fetchImage(this.props);
      }
      componentDidUpdate(e2) {
        const { url: t, light: i } = this.props;
        (e2.url !== t || e2.light !== i) && this.fetchImage(this.props);
      }
      componentWillUnmount() {
        this.mounted = false;
      }
      fetchImage({ url: e2, light: t, oEmbedUrl: i }) {
        if (!l.default.isValidElement(t)) {
          if (typeof t == "string") {
            this.setState({ image: t });
            return;
          }
          if (_[e2]) {
            this.setState({ image: _[e2] });
            return;
          }
          return this.setState({ image: null }), window.fetch(i.replace("{url}", e2)).then((a) => a.json()).then((a) => {
            if (a.thumbnail_url && this.mounted) {
              const d3 = a.thumbnail_url.replace("height=100", "height=480").replace("-d_295x166", "-d_640");
              this.setState({ image: d3 }), _[e2] = d3;
            }
          });
        }
      }
      render() {
        const { light: e2, onClick: t, playIcon: i, previewTabIndex: a, previewAriaLabel: d3 } = this.props, { image: w2 } = this.state, g5 = l.default.isValidElement(e2), P6 = {
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }, m = {
          preview: {
            width: "100%",
            height: "100%",
            backgroundImage: w2 && !g5 ? `url(${w2})` : void 0,
            backgroundSize: "cover",
            backgroundPosition: "center",
            cursor: "pointer",
            ...P6
          },
          shadow: {
            background: "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",
            borderRadius: h3,
            width: h3,
            height: h3,
            position: g5 ? "absolute" : void 0,
            ...P6
          },
          playIcon: {
            borderStyle: "solid",
            borderWidth: "16px 0 16px 26px",
            borderColor: "transparent transparent transparent white",
            marginLeft: "7px"
          }
        }, N4 = /* @__PURE__ */ l.default.createElement("div", { style: m.shadow, className: "react-player__shadow" }, /* @__PURE__ */ l.default.createElement("div", { style: m.playIcon, className: "react-player__play-icon" }));
        return /* @__PURE__ */ l.default.createElement(
          "div",
          {
            style: m.preview,
            className: "react-player__preview",
            onClick: t,
            tabIndex: a,
            onKeyPress: this.handleKeyPress,
            ...d3 ? { "aria-label": d3 } : {}
          },
          g5 ? e2 : null,
          i || N4
        );
      }
    }
    return v4;
  }
  var import_react14, v4, O5, x4, q4, z2;
  var init_Preview_DbqEJNSc = __esm({
    "node_modules/react-tv-player/dist/Preview-DbqEJNSc.js"() {
      init_index_r8XrYpcu();
      import_react14 = __toESM(require_react(), 1);
      x4 = /* @__PURE__ */ $3();
      q4 = /* @__PURE__ */ Gt(x4);
      z2 = /* @__PURE__ */ M2({
        __proto__: null,
        default: q4
      }, [x4]);
    }
  });

  // node_modules/react-tv-player/dist/index-r8XrYpcu.js
  function Gt(e2) {
    return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
  }
  function Vl(e2) {
    if (Object.prototype.hasOwnProperty.call(e2, "__esModule")) return e2;
    var t = e2.default;
    if (typeof t == "function") {
      var r = function n() {
        return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
      };
      r.prototype = t.prototype;
    } else r = {};
    return Object.defineProperty(r, "__esModule", { value: true }), Object.keys(e2).forEach(function(n) {
      var a = Object.getOwnPropertyDescriptor(e2, n);
      Object.defineProperty(r, n, a.get ? a : {
        enumerable: true,
        get: function() {
          return e2[n];
        }
      });
    }), r;
  }
  function Wl() {
    return Ao || (Ao = 1, (function(e2) {
      (function() {
        var t = {}.hasOwnProperty;
        function r() {
          for (var i = "", o = 0; o < arguments.length; o++) {
            var s = arguments[o];
            s && (i = a(i, n(s)));
          }
          return i;
        }
        function n(i) {
          if (typeof i == "string" || typeof i == "number")
            return i;
          if (typeof i != "object")
            return "";
          if (Array.isArray(i))
            return r.apply(null, i);
          if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
            return i.toString();
          var o = "";
          for (var s in i)
            t.call(i, s) && i[s] && (o = a(o, s));
          return o;
        }
        function a(i, o) {
          return o ? i ? i + " " + o : i + o : i;
        }
        e2.exports ? (r.default = r, e2.exports = r) : window.classNames = r;
      })();
    })(sr)), sr.exports;
  }
  function Gl() {
    if (To) return ur;
    To = 1, ur = function(a, i, o) {
      var s = document.head || document.getElementsByTagName("head")[0], u = document.createElement("script");
      typeof i == "function" && (o = i, i = {}), i = i || {}, o = o || function() {
      }, u.type = i.type || "text/javascript", u.charset = i.charset || "utf8", u.async = "async" in i ? !!i.async : true, u.src = a, i.attrs && e2(u, i.attrs), i.text && (u.text = "" + i.text);
      var f5 = "onload" in u ? t : r;
      f5(u, o), u.onload || t(u, o), s.appendChild(u);
    };
    function e2(n, a) {
      for (var i in a)
        n.setAttribute(i, a[i]);
    }
    function t(n, a) {
      n.onload = function() {
        this.onerror = this.onload = null, a(null, n);
      }, n.onerror = function() {
        this.onerror = this.onload = null, a(new Error("Failed to load " + this.src), n);
      };
    }
    function r(n, a) {
      n.onreadystatechange = function() {
        this.readyState != "complete" && this.readyState != "loaded" || (this.onreadystatechange = null, a(null, n));
      };
    }
    return ur;
  }
  function qf() {
    if (Ro) return cr;
    Ro = 1;
    var e2 = function(g5) {
      return t(g5) && !r(g5);
    };
    function t(v5) {
      return !!v5 && typeof v5 == "object";
    }
    function r(v5) {
      var g5 = Object.prototype.toString.call(v5);
      return g5 === "[object RegExp]" || g5 === "[object Date]" || i(v5);
    }
    var n = typeof Symbol == "function" && Symbol.for, a = n ? /* @__PURE__ */ Symbol.for("react.element") : 60103;
    function i(v5) {
      return v5.$$typeof === a;
    }
    function o(v5) {
      return Array.isArray(v5) ? [] : {};
    }
    function s(v5, g5) {
      return g5.clone !== false && g5.isMergeableObject(v5) ? w2(o(v5), v5, g5) : v5;
    }
    function u(v5, g5, h3) {
      return v5.concat(g5).map(function(p) {
        return s(p, h3);
      });
    }
    function f5(v5, g5) {
      if (!g5.customMerge)
        return w2;
      var h3 = g5.customMerge(v5);
      return typeof h3 == "function" ? h3 : w2;
    }
    function d3(v5) {
      return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(v5).filter(function(g5) {
        return Object.propertyIsEnumerable.call(v5, g5);
      }) : [];
    }
    function c(v5) {
      return Object.keys(v5).concat(d3(v5));
    }
    function m(v5, g5) {
      try {
        return g5 in v5;
      } catch {
        return false;
      }
    }
    function b3(v5, g5) {
      return m(v5, g5) && !(Object.hasOwnProperty.call(v5, g5) && Object.propertyIsEnumerable.call(v5, g5));
    }
    function T7(v5, g5, h3) {
      var p = {};
      return h3.isMergeableObject(v5) && c(v5).forEach(function(y2) {
        p[y2] = s(v5[y2], h3);
      }), c(g5).forEach(function(y2) {
        b3(v5, y2) || (m(v5, y2) && h3.isMergeableObject(g5[y2]) ? p[y2] = f5(y2, h3)(v5[y2], g5[y2], h3) : p[y2] = s(g5[y2], h3));
      }), p;
    }
    function w2(v5, g5, h3) {
      h3 = h3 || {}, h3.arrayMerge = h3.arrayMerge || u, h3.isMergeableObject = h3.isMergeableObject || e2, h3.cloneUnlessOtherwiseSpecified = s;
      var p = Array.isArray(g5), y2 = Array.isArray(v5), O6 = p === y2;
      return O6 ? p ? h3.arrayMerge(v5, g5, h3) : T7(v5, g5, h3) : s(g5, h3);
    }
    w2.all = function(g5, h3) {
      if (!Array.isArray(g5))
        throw new Error("first argument should be an array");
      return g5.reduce(function(p, y2) {
        return w2(p, y2, h3);
      }, {});
    };
    var _ = w2;
    return cr = _, cr;
  }
  function Xt() {
    if (ko) return fr;
    ko = 1;
    var e2 = Object.create, t = Object.defineProperty, r = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, a = Object.getPrototypeOf, i = Object.prototype.hasOwnProperty, o = (K3, S3) => {
      for (var q5 in S3)
        t(K3, q5, { get: S3[q5], enumerable: true });
    }, s = (K3, S3, q5, U3) => {
      if (S3 && typeof S3 == "object" || typeof S3 == "function")
        for (let B6 of n(S3))
          !i.call(K3, B6) && B6 !== q5 && t(K3, B6, { get: () => S3[B6], enumerable: !(U3 = r(S3, B6)) || U3.enumerable });
      return K3;
    }, u = (K3, S3, q5) => (q5 = K3 != null ? e2(a(K3)) : {}, s(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      !K3 || !K3.__esModule ? t(q5, "default", { value: K3, enumerable: true }) : q5,
      K3
    )), f5 = (K3) => s(t({}, "__esModule", { value: true }), K3), d3 = {};
    o(d3, {
      callPlayer: () => E3,
      getConfig: () => D3,
      getSDK: () => I4,
      isBlobUrl: () => X,
      isMediaStream: () => F2,
      lazy: () => T7,
      omit: () => M3,
      parseEndTime: () => O6,
      parseStartTime: () => y2,
      queryString: () => L5,
      randomString: () => x5,
      supportsWebKitPresentationMode: () => ae
    }), fr = f5(d3);
    var c = u(import_react15.default), m = u(Gl()), b3 = u(qf());
    const T7 = (K3) => c.default.lazy(async () => {
      const S3 = await K3();
      return typeof S3.default == "function" ? S3 : S3.default;
    }), w2 = /[?&#](?:start|t)=([0-9hms]+)/, _ = /[?&#]end=([0-9hms]+)/, v5 = /(\d+)(h|m|s)/g, g5 = /^\d+$/;
    function h3(K3, S3) {
      if (K3 instanceof Array)
        return;
      const q5 = K3.match(S3);
      if (q5) {
        const U3 = q5[1];
        if (U3.match(v5))
          return p(U3);
        if (g5.test(U3))
          return parseInt(U3);
      }
    }
    function p(K3) {
      let S3 = 0, q5 = v5.exec(K3);
      for (; q5 !== null; ) {
        const [, U3, B6] = q5;
        B6 === "h" && (S3 += parseInt(U3, 10) * 60 * 60), B6 === "m" && (S3 += parseInt(U3, 10) * 60), B6 === "s" && (S3 += parseInt(U3, 10)), q5 = v5.exec(K3);
      }
      return S3;
    }
    function y2(K3) {
      return h3(K3, w2);
    }
    function O6(K3) {
      return h3(K3, _);
    }
    function x5() {
      return Math.random().toString(36).substr(2, 5);
    }
    function L5(K3) {
      return Object.keys(K3).map((S3) => `${S3}=${K3[S3]}`).join("&");
    }
    function A7(K3) {
      return window[K3] ? window[K3] : window.exports && window.exports[K3] ? window.exports[K3] : window.module && window.module.exports && window.module.exports[K3] ? window.module.exports[K3] : null;
    }
    const N4 = {}, I4 = function(S3, q5, U3 = null, B6 = () => true, W4 = m.default) {
      const G2 = A7(q5);
      return G2 && B6(G2) ? Promise.resolve(G2) : new Promise((J3, Z2) => {
        if (N4[S3]) {
          N4[S3].push({ resolve: J3, reject: Z2 });
          return;
        }
        N4[S3] = [{ resolve: J3, reject: Z2 }];
        const Q2 = (ee2) => {
          N4[S3].forEach((j2) => j2.resolve(ee2));
        };
        if (U3) {
          const ee2 = window[U3];
          window[U3] = function() {
            ee2 && ee2(), Q2(A7(q5));
          };
        }
        W4(S3, (ee2) => {
          ee2 ? (N4[S3].forEach((j2) => j2.reject(ee2)), N4[S3] = null) : U3 || Q2(A7(q5));
        });
      });
    };
    function D3(K3, S3) {
      return (0, b3.default)(S3.config, K3.config);
    }
    function M3(K3, ...S3) {
      const q5 = [].concat(...S3), U3 = {}, B6 = Object.keys(K3);
      for (const W4 of B6)
        q5.indexOf(W4) === -1 && (U3[W4] = K3[W4]);
      return U3;
    }
    function E3(K3, ...S3) {
      if (!this.player || !this.player[K3]) {
        let q5 = `ReactPlayer: ${this.constructor.displayName} player could not call %c${K3}%c \u2013 `;
        return this.player ? this.player[K3] || (q5 += "The method was not available") : q5 += "The player was not available", console.warn(q5, "font-weight: bold", ""), null;
      }
      return this.player[K3](...S3);
    }
    function F2(K3) {
      return typeof window < "u" && typeof window.MediaStream < "u" && K3 instanceof window.MediaStream;
    }
    function X(K3) {
      return /^blob:/.test(K3);
    }
    function ae(K3 = document.createElement("video")) {
      const S3 = /iPhone|iPod/.test(navigator.userAgent) === false;
      return K3.webkitSupportsPresentationMode && typeof K3.webkitSetPresentationMode == "function" && S3;
    }
    function pe(K3) {
      return K3;
    }
    return fr;
  }
  function Xl() {
    if (Io) return lr;
    Io = 1;
    var e2 = Object.defineProperty, t = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, n = Object.prototype.hasOwnProperty, a = (E3, F2) => {
      for (var X in F2)
        e2(E3, X, { get: F2[X], enumerable: true });
    }, i = (E3, F2, X, ae) => {
      if (F2 && typeof F2 == "object" || typeof F2 == "function")
        for (let pe of r(F2))
          !n.call(E3, pe) && pe !== X && e2(E3, pe, { get: () => F2[pe], enumerable: !(ae = t(F2, pe)) || ae.enumerable });
      return E3;
    }, o = (E3) => i(e2({}, "__esModule", { value: true }), E3), s = {};
    a(s, {
      AUDIO_EXTENSIONS: () => x5,
      DASH_EXTENSIONS: () => N4,
      FLV_EXTENSIONS: () => I4,
      HLS_EXTENSIONS: () => A7,
      MATCH_URL_DAILYMOTION: () => h3,
      MATCH_URL_FACEBOOK: () => b3,
      MATCH_URL_FACEBOOK_WATCH: () => T7,
      MATCH_URL_KALTURA: () => O6,
      MATCH_URL_MIXCLOUD: () => p,
      MATCH_URL_MUX: () => m,
      MATCH_URL_SOUNDCLOUD: () => d3,
      MATCH_URL_STREAMABLE: () => w2,
      MATCH_URL_TWITCH_CHANNEL: () => g5,
      MATCH_URL_TWITCH_VIDEO: () => v5,
      MATCH_URL_VIDYARD: () => y2,
      MATCH_URL_VIMEO: () => c,
      MATCH_URL_WISTIA: () => _,
      MATCH_URL_YOUTUBE: () => f5,
      VIDEO_EXTENSIONS: () => L5,
      canPlay: () => M3
    }), lr = o(s);
    var u = /* @__PURE__ */ Xt();
    const f5 = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//, d3 = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/, c = /vimeo\.com\/(?!progressive_redirect).+/, m = /stream\.mux\.com\/(\w+)/, b3 = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/, T7 = /^https?:\/\/fb\.watch\/.+$/, w2 = /streamable\.com\/([a-z0-9]+)$/, _ = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/, v5 = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/, g5 = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/, h3 = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/, p = /mixcloud\.com\/([^/]+\/[^/]+)/, y2 = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/, O6 = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/, x5 = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i, L5 = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i, A7 = /\.(m3u8)($|\?)/i, N4 = /\.(mpd)($|\?)/i, I4 = /\.(flv)($|\?)/i, D3 = (E3) => {
      if (E3 instanceof Array) {
        for (const F2 of E3)
          if (typeof F2 == "string" && D3(F2) || D3(F2.src))
            return true;
        return false;
      }
      return (0, u.isMediaStream)(E3) || (0, u.isBlobUrl)(E3) ? true : x5.test(E3) || L5.test(E3) || A7.test(E3) || N4.test(E3) || I4.test(E3);
    }, M3 = {
      youtube: (E3) => E3 instanceof Array ? E3.every((F2) => f5.test(F2)) : f5.test(E3),
      soundcloud: (E3) => d3.test(E3) && !x5.test(E3),
      vimeo: (E3) => c.test(E3) && !L5.test(E3) && !A7.test(E3),
      mux: (E3) => m.test(E3),
      facebook: (E3) => b3.test(E3) || T7.test(E3),
      streamable: (E3) => w2.test(E3),
      wistia: (E3) => _.test(E3),
      twitch: (E3) => v5.test(E3) || g5.test(E3),
      dailymotion: (E3) => h3.test(E3),
      mixcloud: (E3) => p.test(E3),
      vidyard: (E3) => y2.test(E3),
      kaltura: (E3) => O6.test(E3),
      file: D3
    };
    return lr;
  }
  function Jl() {
    if (Mo) return dr;
    Mo = 1;
    var e2 = Object.defineProperty, t = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, n = Object.prototype.hasOwnProperty, a = (c, m) => {
      for (var b3 in m)
        e2(c, b3, { get: m[b3], enumerable: true });
    }, i = (c, m, b3, T7) => {
      if (m && typeof m == "object" || typeof m == "function")
        for (let w2 of r(m))
          !n.call(c, w2) && w2 !== b3 && e2(c, w2, { get: () => m[w2], enumerable: !(T7 = t(m, w2)) || T7.enumerable });
      return c;
    }, o = (c) => i(e2({}, "__esModule", { value: true }), c), s = {};
    a(s, {
      default: () => d3
    }), dr = o(s);
    var u = /* @__PURE__ */ Xt(), f5 = /* @__PURE__ */ Xl(), d3 = [
      {
        key: "youtube",
        name: "YouTube",
        canPlay: f5.canPlay.youtube,
        lazyPlayer: (0, u.lazy)(() => Promise.resolve().then(() => (init_YouTube_DiqIX_pi(), YouTube_DiqIX_pi_exports)).then((c) => c.Y))
      },
      {
        key: "soundcloud",
        name: "SoundCloud",
        canPlay: f5.canPlay.soundcloud,
        lazyPlayer: (0, u.lazy)(() => Promise.resolve().then(() => (init_SoundCloud_678uCdQ(), SoundCloud_678uCdQ_exports)).then((c) => c.S))
      },
      {
        key: "vimeo",
        name: "Vimeo",
        canPlay: f5.canPlay.vimeo,
        lazyPlayer: (0, u.lazy)(() => Promise.resolve().then(() => (init_Vimeo_Dwyd1QTJ(), Vimeo_Dwyd1QTJ_exports)).then((c) => c.V))
      },
      {
        key: "mux",
        name: "Mux",
        canPlay: f5.canPlay.mux,
        lazyPlayer: (0, u.lazy)(() => Promise.resolve().then(() => (init_Mux_BDucjIaO(), Mux_BDucjIaO_exports)).then((c) => c.M))
      },
      {
        key: "facebook",
        name: "Facebook",
        canPlay: f5.canPlay.facebook,
        lazyPlayer: (0, u.lazy)(() => Promise.resolve().then(() => (init_Facebook_BY4VJbab(), Facebook_BY4VJbab_exports)).then((c) => c.F))
      },
      {
        key: "streamable",
        name: "Streamable",
        canPlay: f5.canPlay.streamable,
        lazyPlayer: (0, u.lazy)(() => Promise.resolve().then(() => (init_Streamable_BVF_Z7WI(), Streamable_BVF_Z7WI_exports)).then((c) => c.S))
      },
      {
        key: "wistia",
        name: "Wistia",
        canPlay: f5.canPlay.wistia,
        lazyPlayer: (0, u.lazy)(() => Promise.resolve().then(() => (init_Wistia_CRYFeWoP(), Wistia_CRYFeWoP_exports)).then((c) => c.W))
      },
      {
        key: "twitch",
        name: "Twitch",
        canPlay: f5.canPlay.twitch,
        lazyPlayer: (0, u.lazy)(() => Promise.resolve().then(() => (init_Twitch_d55t1eqk(), Twitch_d55t1eqk_exports)).then((c) => c.T))
      },
      {
        key: "dailymotion",
        name: "DailyMotion",
        canPlay: f5.canPlay.dailymotion,
        lazyPlayer: (0, u.lazy)(() => Promise.resolve().then(() => (init_DailyMotion_BxIESnj(), DailyMotion_BxIESnj_exports)).then((c) => c.D))
      },
      {
        key: "mixcloud",
        name: "Mixcloud",
        canPlay: f5.canPlay.mixcloud,
        lazyPlayer: (0, u.lazy)(() => Promise.resolve().then(() => (init_Mixcloud_Bqoho2jX(), Mixcloud_Bqoho2jX_exports)).then((c) => c.M))
      },
      {
        key: "vidyard",
        name: "Vidyard",
        canPlay: f5.canPlay.vidyard,
        lazyPlayer: (0, u.lazy)(() => Promise.resolve().then(() => (init_Vidyard_Dkn0MzvY(), Vidyard_Dkn0MzvY_exports)).then((c) => c.V))
      },
      {
        key: "kaltura",
        name: "Kaltura",
        canPlay: f5.canPlay.kaltura,
        lazyPlayer: (0, u.lazy)(() => Promise.resolve().then(() => (init_Kaltura_irPHNR5Q(), Kaltura_irPHNR5Q_exports)).then((c) => c.K))
      },
      {
        key: "file",
        name: "FilePlayer",
        canPlay: f5.canPlay.file,
        canEnablePIP: (c) => f5.canPlay.file(c) && (document.pictureInPictureEnabled || (0, u.supportsWebKitPresentationMode)()) && !f5.AUDIO_EXTENSIONS.test(c),
        lazyPlayer: (0, u.lazy)(() => Promise.resolve().then(() => (init_FilePlayer_CCJCE4nb(), FilePlayer_CCJCE4nb_exports)).then((c) => c.F))
      }
    ];
    return dr;
  }
  function Zl(e2, t) {
    return !!(e2 === t || Fo(e2) && Fo(t));
  }
  function Ql(e2, t) {
    if (e2.length !== t.length)
      return false;
    for (var r = 0; r < e2.length; r++)
      if (!Zl(e2[r], t[r]))
        return false;
    return true;
  }
  function ed(e2, t) {
    t === void 0 && (t = Ql);
    var r, n = [], a, i = false;
    function o() {
      for (var s = [], u = 0; u < arguments.length; u++)
        s[u] = arguments[u];
      return i && r === this && t(s, n) || (a = e2.apply(this, s), i = true, r = this, n = s), a;
    }
    return o;
  }
  function Nf() {
    if (Lo) return vr;
    Lo = 1;
    var e2 = typeof Element < "u", t = typeof Map == "function", r = typeof Set == "function", n = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
    function a(i, o) {
      if (i === o) return true;
      if (i && o && typeof i == "object" && typeof o == "object") {
        if (i.constructor !== o.constructor) return false;
        var s, u, f5;
        if (Array.isArray(i)) {
          if (s = i.length, s != o.length) return false;
          for (u = s; u-- !== 0; )
            if (!a(i[u], o[u])) return false;
          return true;
        }
        var d3;
        if (t && i instanceof Map && o instanceof Map) {
          if (i.size !== o.size) return false;
          for (d3 = i.entries(); !(u = d3.next()).done; )
            if (!o.has(u.value[0])) return false;
          for (d3 = i.entries(); !(u = d3.next()).done; )
            if (!a(u.value[1], o.get(u.value[0]))) return false;
          return true;
        }
        if (r && i instanceof Set && o instanceof Set) {
          if (i.size !== o.size) return false;
          for (d3 = i.entries(); !(u = d3.next()).done; )
            if (!o.has(u.value[0])) return false;
          return true;
        }
        if (n && ArrayBuffer.isView(i) && ArrayBuffer.isView(o)) {
          if (s = i.length, s != o.length) return false;
          for (u = s; u-- !== 0; )
            if (i[u] !== o[u]) return false;
          return true;
        }
        if (i.constructor === RegExp) return i.source === o.source && i.flags === o.flags;
        if (i.valueOf !== Object.prototype.valueOf && typeof i.valueOf == "function" && typeof o.valueOf == "function") return i.valueOf() === o.valueOf();
        if (i.toString !== Object.prototype.toString && typeof i.toString == "function" && typeof o.toString == "function") return i.toString() === o.toString();
        if (f5 = Object.keys(i), s = f5.length, s !== Object.keys(o).length) return false;
        for (u = s; u-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(o, f5[u])) return false;
        if (e2 && i instanceof Element) return false;
        for (u = s; u-- !== 0; )
          if (!((f5[u] === "_owner" || f5[u] === "__v" || f5[u] === "__o") && i.$$typeof) && !a(i[f5[u]], o[f5[u]]))
            return false;
        return true;
      }
      return i !== i && o !== o;
    }
    return vr = function(o, s) {
      try {
        return a(o, s);
      } catch (u) {
        if ((u.message || "").match(/stack|recursion/i))
          return console.warn("react-fast-compare cannot handle circular refs"), false;
        throw u;
      }
    }, vr;
  }
  function Xi() {
    if (Ko) return hr;
    Ko = 1;
    var e2 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    return hr = e2, hr;
  }
  function ud() {
    if (Bo) return br;
    Bo = 1;
    var e2 = /* @__PURE__ */ Xi();
    function t() {
    }
    function r() {
    }
    return r.resetWarningCache = t, br = function() {
      function n(o, s, u, f5, d3, c) {
        if (c !== e2) {
          var m = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw m.name = "Invariant Violation", m;
        }
      }
      n.isRequired = n;
      function a() {
        return n;
      }
      var i = {
        array: n,
        bigint: n,
        bool: n,
        func: n,
        number: n,
        object: n,
        string: n,
        symbol: n,
        any: n,
        arrayOf: a,
        element: n,
        elementType: n,
        instanceOf: a,
        node: n,
        objectOf: a,
        oneOf: a,
        oneOfType: a,
        shape: a,
        exact: a,
        checkPropTypes: r,
        resetWarningCache: t
      };
      return i.PropTypes = i, i;
    }, br;
  }
  function Kf() {
    if ($o) return Tt.exports;
    if ($o = 1, false) {
      var e2 = Df(), t = true;
      Tt.exports = /* @__PURE__ */ sd()(e2.isElement, t);
    } else
      Tt.exports = /* @__PURE__ */ ud()();
    return Tt.exports;
  }
  function Uf() {
    if (Vo) return _r;
    Vo = 1;
    var e2 = Object.create, t = Object.defineProperty, r = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, a = Object.getPrototypeOf, i = Object.prototype.hasOwnProperty, o = (L5, A7) => {
      for (var N4 in A7)
        t(L5, N4, { get: A7[N4], enumerable: true });
    }, s = (L5, A7, N4, I4) => {
      if (A7 && typeof A7 == "object" || typeof A7 == "function")
        for (let D3 of n(A7))
          !i.call(L5, D3) && D3 !== N4 && t(L5, D3, { get: () => A7[D3], enumerable: !(I4 = r(A7, D3)) || I4.enumerable });
      return L5;
    }, u = (L5, A7, N4) => (N4 = L5 != null ? e2(a(L5)) : {}, s(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      !L5 || !L5.__esModule ? t(N4, "default", { value: L5, enumerable: true }) : N4,
      L5
    )), f5 = (L5) => s(t({}, "__esModule", { value: true }), L5), d3 = {};
    o(d3, {
      defaultProps: () => x5,
      propTypes: () => y2
    }), _r = f5(d3);
    var c = u(/* @__PURE__ */ Kf());
    const { string: m, bool: b3, number: T7, array: w2, oneOfType: _, shape: v5, object: g5, func: h3, node: p } = c.default, y2 = {
      url: _([m, w2, g5]),
      playing: b3,
      loop: b3,
      controls: b3,
      volume: T7,
      muted: b3,
      playbackRate: T7,
      width: _([m, T7]),
      height: _([m, T7]),
      style: g5,
      progressInterval: T7,
      playsinline: b3,
      pip: b3,
      stopOnUnmount: b3,
      light: _([b3, m, g5]),
      playIcon: p,
      previewTabIndex: T7,
      previewAriaLabel: m,
      fallback: p,
      oEmbedUrl: m,
      wrapper: _([
        m,
        h3,
        v5({ render: h3.isRequired })
      ]),
      config: v5({
        soundcloud: v5({
          options: g5
        }),
        youtube: v5({
          playerVars: g5,
          embedOptions: g5,
          onUnstarted: h3
        }),
        facebook: v5({
          appId: m,
          version: m,
          playerId: m,
          attributes: g5
        }),
        dailymotion: v5({
          params: g5
        }),
        vimeo: v5({
          playerOptions: g5,
          title: m
        }),
        mux: v5({
          attributes: g5,
          version: m
        }),
        file: v5({
          attributes: g5,
          tracks: w2,
          forceVideo: b3,
          forceAudio: b3,
          forceHLS: b3,
          forceSafariHLS: b3,
          forceDisableHls: b3,
          forceDASH: b3,
          forceFLV: b3,
          hlsOptions: g5,
          hlsVersion: m,
          dashVersion: m,
          flvVersion: m
        }),
        wistia: v5({
          options: g5,
          playerId: m,
          customControls: w2
        }),
        mixcloud: v5({
          options: g5
        }),
        twitch: v5({
          options: g5,
          playerId: m
        }),
        vidyard: v5({
          options: g5
        })
      }),
      onReady: h3,
      onStart: h3,
      onPlay: h3,
      onPause: h3,
      onBuffer: h3,
      onBufferEnd: h3,
      onEnded: h3,
      onError: h3,
      onDuration: h3,
      onSeek: h3,
      onPlaybackRateChange: h3,
      onPlaybackQualityChange: h3,
      onProgress: h3,
      onClickPreview: h3,
      onEnablePIP: h3,
      onDisablePIP: h3
    }, O6 = () => {
    }, x5 = {
      playing: false,
      loop: false,
      controls: false,
      volume: null,
      muted: false,
      playbackRate: 1,
      width: "640px",
      height: "360px",
      style: {},
      progressInterval: 1e3,
      playsinline: false,
      pip: false,
      stopOnUnmount: true,
      light: false,
      fallback: null,
      wrapper: "div",
      previewTabIndex: 0,
      previewAriaLabel: "",
      oEmbedUrl: "https://noembed.com/embed?url={url}",
      config: {
        soundcloud: {
          options: {
            visual: true,
            // Undocumented, but makes player fill container and look better
            buying: false,
            liking: false,
            download: false,
            sharing: false,
            show_comments: false,
            show_playcount: false
          }
        },
        youtube: {
          playerVars: {
            playsinline: 1,
            showinfo: 0,
            rel: 0,
            iv_load_policy: 3,
            modestbranding: 1
          },
          embedOptions: {},
          onUnstarted: O6
        },
        facebook: {
          appId: "1309697205772819",
          version: "v3.3",
          playerId: null,
          attributes: {}
        },
        dailymotion: {
          params: {
            api: 1,
            "endscreen-enable": false
          }
        },
        vimeo: {
          playerOptions: {
            autopause: false,
            byline: false,
            portrait: false,
            title: false
          },
          title: null
        },
        mux: {
          attributes: {},
          version: "2"
        },
        file: {
          attributes: {},
          tracks: [],
          forceVideo: false,
          forceAudio: false,
          forceHLS: false,
          forceDASH: false,
          forceFLV: false,
          hlsOptions: {},
          hlsVersion: "1.1.4",
          dashVersion: "3.1.3",
          flvVersion: "1.5.0",
          forceDisableHls: false
        },
        wistia: {
          options: {},
          playerId: null,
          customControls: null
        },
        mixcloud: {
          options: {
            hide_cover: 1
          }
        },
        twitch: {
          options: {},
          playerId: null
        },
        vidyard: {
          options: {}
        }
      },
      onReady: O6,
      onStart: O6,
      onPlay: O6,
      onPause: O6,
      onBuffer: O6,
      onBufferEnd: O6,
      onEnded: O6,
      onError: O6,
      onDuration: O6,
      onSeek: O6,
      onPlaybackRateChange: O6,
      onPlaybackQualityChange: O6,
      onProgress: O6,
      onClickPreview: O6,
      onEnablePIP: O6,
      onDisablePIP: O6
    };
    return _r;
  }
  function cd() {
    if (Wo) return wr;
    Wo = 1;
    var e2 = Object.create, t = Object.defineProperty, r = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, a = Object.getPrototypeOf, i = Object.prototype.hasOwnProperty, o = (h3, p, y2) => p in h3 ? t(h3, p, { enumerable: true, configurable: true, writable: true, value: y2 }) : h3[p] = y2, s = (h3, p) => {
      for (var y2 in p)
        t(h3, y2, { get: p[y2], enumerable: true });
    }, u = (h3, p, y2, O6) => {
      if (p && typeof p == "object" || typeof p == "function")
        for (let x5 of n(p))
          !i.call(h3, x5) && x5 !== y2 && t(h3, x5, { get: () => p[x5], enumerable: !(O6 = r(p, x5)) || O6.enumerable });
      return h3;
    }, f5 = (h3, p, y2) => (y2 = h3 != null ? e2(a(h3)) : {}, u(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      !h3 || !h3.__esModule ? t(y2, "default", { value: h3, enumerable: true }) : y2,
      h3
    )), d3 = (h3) => u(t({}, "__esModule", { value: true }), h3), c = (h3, p, y2) => (o(h3, typeof p != "symbol" ? p + "" : p, y2), y2), m = {};
    s(m, {
      default: () => g5
    }), wr = d3(m);
    var b3 = f5(import_react15.default), T7 = f5(Nf()), w2 = /* @__PURE__ */ Uf(), _ = /* @__PURE__ */ Xt();
    const v5 = 5e3;
    class g5 extends b3.Component {
      constructor() {
        super(...arguments), c(this, "mounted", false), c(this, "isReady", false), c(this, "isPlaying", false), c(this, "isLoading", true), c(this, "loadOnReady", null), c(this, "startOnPlay", true), c(this, "seekOnPlay", null), c(this, "onDurationCalled", false), c(this, "handlePlayerMount", (p) => {
          if (this.player) {
            this.progress();
            return;
          }
          this.player = p, this.player.load(this.props.url), this.progress();
        }), c(this, "getInternalPlayer", (p) => this.player ? this.player[p] : null), c(this, "progress", () => {
          if (this.props.url && this.player && this.isReady) {
            const p = this.getCurrentTime() || 0, y2 = this.getSecondsLoaded(), O6 = this.getDuration();
            if (O6) {
              const x5 = {
                playedSeconds: p,
                played: p / O6
              };
              y2 !== null && (x5.loadedSeconds = y2, x5.loaded = y2 / O6), (x5.playedSeconds !== this.prevPlayed || x5.loadedSeconds !== this.prevLoaded) && this.props.onProgress(x5), this.prevPlayed = x5.playedSeconds, this.prevLoaded = x5.loadedSeconds;
            }
          }
          this.progressTimeout = setTimeout(this.progress, this.props.progressFrequency || this.props.progressInterval);
        }), c(this, "handleReady", () => {
          if (!this.mounted)
            return;
          this.isReady = true, this.isLoading = false;
          const { onReady: p, playing: y2, volume: O6, muted: x5 } = this.props;
          p(), !x5 && O6 !== null && this.player.setVolume(O6), this.loadOnReady ? (this.player.load(this.loadOnReady, true), this.loadOnReady = null) : y2 && this.player.play(), this.handleDurationCheck();
        }), c(this, "handlePlay", () => {
          this.isPlaying = true, this.isLoading = false;
          const { onStart: p, onPlay: y2, playbackRate: O6 } = this.props;
          this.startOnPlay && (this.player.setPlaybackRate && O6 !== 1 && this.player.setPlaybackRate(O6), p(), this.startOnPlay = false), y2(), this.seekOnPlay && (this.seekTo(this.seekOnPlay), this.seekOnPlay = null), this.handleDurationCheck();
        }), c(this, "handlePause", (p) => {
          this.isPlaying = false, this.isLoading || this.props.onPause(p);
        }), c(this, "handleEnded", () => {
          const { activePlayer: p, loop: y2, onEnded: O6 } = this.props;
          p.loopOnEnded && y2 && this.seekTo(0), y2 || (this.isPlaying = false, O6());
        }), c(this, "handleError", (...p) => {
          this.isLoading = false, this.props.onError(...p);
        }), c(this, "handleDurationCheck", () => {
          clearTimeout(this.durationCheckTimeout);
          const p = this.getDuration();
          p ? this.onDurationCalled || (this.props.onDuration(p), this.onDurationCalled = true) : this.durationCheckTimeout = setTimeout(this.handleDurationCheck, 100);
        }), c(this, "handleLoaded", () => {
          this.isLoading = false;
        });
      }
      componentDidMount() {
        this.mounted = true;
      }
      componentWillUnmount() {
        clearTimeout(this.progressTimeout), clearTimeout(this.durationCheckTimeout), this.isReady && this.props.stopOnUnmount && (this.player.stop(), this.player.disablePIP && this.player.disablePIP()), this.mounted = false;
      }
      componentDidUpdate(p) {
        if (!this.player)
          return;
        const { url: y2, playing: O6, volume: x5, muted: L5, playbackRate: A7, pip: N4, loop: I4, activePlayer: D3, disableDeferredLoading: M3 } = this.props;
        if (!(0, T7.default)(p.url, y2)) {
          if (this.isLoading && !D3.forceLoad && !M3 && !(0, _.isMediaStream)(y2)) {
            console.warn(`ReactPlayer: the attempt to load ${y2} is being deferred until the player has loaded`), this.loadOnReady = y2;
            return;
          }
          this.isLoading = true, this.startOnPlay = true, this.onDurationCalled = false, this.player.load(y2, this.isReady);
        }
        !p.playing && O6 && !this.isPlaying && this.player.play(), p.playing && !O6 && this.isPlaying && this.player.pause(), !p.pip && N4 && this.player.enablePIP && this.player.enablePIP(), p.pip && !N4 && this.player.disablePIP && this.player.disablePIP(), p.volume !== x5 && x5 !== null && this.player.setVolume(x5), p.muted !== L5 && (L5 ? this.player.mute() : (this.player.unmute(), x5 !== null && setTimeout(() => this.player.setVolume(x5)))), p.playbackRate !== A7 && this.player.setPlaybackRate && this.player.setPlaybackRate(A7), p.loop !== I4 && this.player.setLoop && this.player.setLoop(I4);
      }
      getDuration() {
        return this.isReady ? this.player.getDuration() : null;
      }
      getCurrentTime() {
        return this.isReady ? this.player.getCurrentTime() : null;
      }
      getSecondsLoaded() {
        return this.isReady ? this.player.getSecondsLoaded() : null;
      }
      seekTo(p, y2, O6) {
        if (!this.isReady) {
          p !== 0 && (this.seekOnPlay = p, setTimeout(() => {
            this.seekOnPlay = null;
          }, v5));
          return;
        }
        if (y2 ? y2 === "fraction" : p > 0 && p < 1) {
          const L5 = this.player.getDuration();
          if (!L5) {
            console.warn("ReactPlayer: could not seek using fraction \u2013\xA0duration not yet available");
            return;
          }
          this.player.seekTo(L5 * p, O6);
          return;
        }
        this.player.seekTo(p, O6);
      }
      render() {
        const p = this.props.activePlayer;
        return p ? /* @__PURE__ */ b3.default.createElement(
          p,
          {
            ...this.props,
            onMount: this.handlePlayerMount,
            onReady: this.handleReady,
            onPlay: this.handlePlay,
            onPause: this.handlePause,
            onEnded: this.handleEnded,
            onLoaded: this.handleLoaded,
            onError: this.handleError
          }
        ) : null;
      }
    }
    return c(g5, "displayName", "Player"), c(g5, "propTypes", w2.propTypes), c(g5, "defaultProps", w2.defaultProps), wr;
  }
  function fd() {
    if (Yo) return Or;
    Yo = 1;
    var e2 = Object.create, t = Object.defineProperty, r = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, a = Object.getPrototypeOf, i = Object.prototype.hasOwnProperty, o = (I4, D3, M3) => D3 in I4 ? t(I4, D3, { enumerable: true, configurable: true, writable: true, value: M3 }) : I4[D3] = M3, s = (I4, D3) => {
      for (var M3 in D3)
        t(I4, M3, { get: D3[M3], enumerable: true });
    }, u = (I4, D3, M3, E3) => {
      if (D3 && typeof D3 == "object" || typeof D3 == "function")
        for (let F2 of n(D3))
          !i.call(I4, F2) && F2 !== M3 && t(I4, F2, { get: () => D3[F2], enumerable: !(E3 = r(D3, F2)) || E3.enumerable });
      return I4;
    }, f5 = (I4, D3, M3) => (M3 = I4 != null ? e2(a(I4)) : {}, u(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      !I4 || !I4.__esModule ? t(M3, "default", { value: I4, enumerable: true }) : M3,
      I4
    )), d3 = (I4) => u(t({}, "__esModule", { value: true }), I4), c = (I4, D3, M3) => (o(I4, typeof D3 != "symbol" ? D3 + "" : D3, M3), M3), m = {};
    s(m, {
      createReactPlayer: () => N4
    }), Or = d3(m);
    var b3 = f5(import_react15.default), T7 = f5(qf()), w2 = f5(rd), _ = f5(Nf()), v5 = /* @__PURE__ */ Uf(), g5 = /* @__PURE__ */ Xt(), h3 = f5(/* @__PURE__ */ cd());
    const p = (0, g5.lazy)(() => Promise.resolve().then(() => (init_Preview_DbqEJNSc(), Preview_DbqEJNSc_exports)).then((I4) => I4.P)), y2 = typeof window < "u" && window.document && typeof document < "u", O6 = typeof $e < "u" && $e.window && $e.window.document, x5 = Object.keys(v5.propTypes), L5 = y2 || O6 ? b3.Suspense : () => null, A7 = [], N4 = (I4, D3) => {
      var M3;
      return M3 = class extends b3.Component {
        constructor() {
          super(...arguments), c(this, "state", {
            showPreview: !!this.props.light
          }), c(this, "references", {
            wrapper: (E3) => {
              this.wrapper = E3;
            },
            player: (E3) => {
              this.player = E3;
            }
          }), c(this, "handleClickPreview", (E3) => {
            this.setState({ showPreview: false }), this.props.onClickPreview(E3);
          }), c(this, "showPreview", () => {
            this.setState({ showPreview: true });
          }), c(this, "getDuration", () => this.player ? this.player.getDuration() : null), c(this, "getCurrentTime", () => this.player ? this.player.getCurrentTime() : null), c(this, "getSecondsLoaded", () => this.player ? this.player.getSecondsLoaded() : null), c(this, "getInternalPlayer", (E3 = "player") => this.player ? this.player.getInternalPlayer(E3) : null), c(this, "seekTo", (E3, F2, X) => {
            if (!this.player)
              return null;
            this.player.seekTo(E3, F2, X);
          }), c(this, "handleReady", () => {
            this.props.onReady(this);
          }), c(this, "getActivePlayer", (0, w2.default)((E3) => {
            for (const F2 of [...A7, ...I4])
              if (F2.canPlay(E3))
                return F2;
            return D3 || null;
          })), c(this, "getConfig", (0, w2.default)((E3, F2) => {
            const { config: X } = this.props;
            return T7.default.all([
              v5.defaultProps.config,
              v5.defaultProps.config[F2] || {},
              X,
              X[F2] || {}
            ]);
          })), c(this, "getAttributes", (0, w2.default)((E3) => (0, g5.omit)(this.props, x5))), c(this, "renderActivePlayer", (E3) => {
            if (!E3)
              return null;
            const F2 = this.getActivePlayer(E3);
            if (!F2)
              return null;
            const X = this.getConfig(E3, F2.key);
            return /* @__PURE__ */ b3.default.createElement(
              h3.default,
              {
                ...this.props,
                key: F2.key,
                ref: this.references.player,
                config: X,
                activePlayer: F2.lazyPlayer || F2,
                onReady: this.handleReady
              }
            );
          });
        }
        shouldComponentUpdate(E3, F2) {
          return !(0, _.default)(this.props, E3) || !(0, _.default)(this.state, F2);
        }
        componentDidUpdate(E3) {
          const { light: F2 } = this.props;
          !E3.light && F2 && this.setState({ showPreview: true }), E3.light && !F2 && this.setState({ showPreview: false });
        }
        renderPreview(E3) {
          if (!E3)
            return null;
          const { light: F2, playIcon: X, previewTabIndex: ae, oEmbedUrl: pe, previewAriaLabel: K3 } = this.props;
          return /* @__PURE__ */ b3.default.createElement(
            p,
            {
              url: E3,
              light: F2,
              playIcon: X,
              previewTabIndex: ae,
              previewAriaLabel: K3,
              oEmbedUrl: pe,
              onClick: this.handleClickPreview
            }
          );
        }
        render() {
          const { url: E3, style: F2, width: X, height: ae, fallback: pe, wrapper: K3 } = this.props, { showPreview: S3 } = this.state, q5 = this.getAttributes(E3), U3 = typeof K3 == "string" ? this.references.wrapper : void 0;
          return /* @__PURE__ */ b3.default.createElement(K3, { ref: U3, style: { ...F2, width: X, height: ae }, ...q5 }, /* @__PURE__ */ b3.default.createElement(L5, { fallback: pe }, S3 ? this.renderPreview(E3) : this.renderActivePlayer(E3)));
        }
      }, c(M3, "displayName", "ReactPlayer"), c(M3, "propTypes", v5.propTypes), c(M3, "defaultProps", v5.defaultProps), c(M3, "addCustomPlayer", (E3) => {
        A7.push(E3);
      }), c(M3, "removeCustomPlayers", () => {
        A7.length = 0;
      }), c(M3, "canPlay", (E3) => {
        for (const F2 of [...A7, ...I4])
          if (F2.canPlay(E3))
            return true;
        return false;
      }), c(M3, "canEnablePIP", (E3) => {
        for (const F2 of [...A7, ...I4])
          if (F2.canEnablePIP && F2.canEnablePIP(E3))
            return true;
        return false;
      }), M3;
    };
    return Or;
  }
  function ld() {
    if (Go) return Pr;
    Go = 1;
    var e2 = Object.create, t = Object.defineProperty, r = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, a = Object.getPrototypeOf, i = Object.prototype.hasOwnProperty, o = (w2, _) => {
      for (var v5 in _)
        t(w2, v5, { get: _[v5], enumerable: true });
    }, s = (w2, _, v5, g5) => {
      if (_ && typeof _ == "object" || typeof _ == "function")
        for (let h3 of n(_))
          !i.call(w2, h3) && h3 !== v5 && t(w2, h3, { get: () => _[h3], enumerable: !(g5 = r(_, h3)) || g5.enumerable });
      return w2;
    }, u = (w2, _, v5) => (v5 = w2 != null ? e2(a(w2)) : {}, s(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      !w2 || !w2.__esModule ? t(v5, "default", { value: w2, enumerable: true }) : v5,
      w2
    )), f5 = (w2) => s(t({}, "__esModule", { value: true }), w2), d3 = {};
    o(d3, {
      default: () => T7
    }), Pr = f5(d3);
    var c = u(/* @__PURE__ */ Jl()), m = /* @__PURE__ */ fd();
    const b3 = c.default[c.default.length - 1];
    var T7 = (0, m.createReactPlayer)(c.default, b3);
    return Pr;
  }
  function Je() {
    if (Xo) return Sr;
    Xo = 1;
    function e2(t) {
      var r = typeof t;
      return t != null && (r == "object" || r == "function");
    }
    return Sr = e2, Sr;
  }
  function zf() {
    if (Jo) return Cr;
    Jo = 1;
    var e2 = typeof $e == "object" && $e && $e.Object === Object && $e;
    return Cr = e2, Cr;
  }
  function Me() {
    if (Zo) return xr;
    Zo = 1;
    var e2 = zf(), t = typeof self == "object" && self && self.Object === Object && self, r = e2 || t || Function("return this")();
    return xr = r, xr;
  }
  function pd() {
    if (Qo) return Er;
    Qo = 1;
    var e2 = Me(), t = function() {
      return e2.Date.now();
    };
    return Er = t, Er;
  }
  function hd() {
    if (es) return Ar;
    es = 1;
    var e2 = /\s/;
    function t(r) {
      for (var n = r.length; n-- && e2.test(r.charAt(n)); )
        ;
      return n;
    }
    return Ar = t, Ar;
  }
  function yd() {
    if (ts) return Tr;
    ts = 1;
    var e2 = hd(), t = /^\s+/;
    function r(n) {
      return n && n.slice(0, e2(n) + 1).replace(t, "");
    }
    return Tr = r, Tr;
  }
  function _t() {
    if (rs) return Rr;
    rs = 1;
    var e2 = Me(), t = e2.Symbol;
    return Rr = t, Rr;
  }
  function md() {
    if (ns) return kr;
    ns = 1;
    var e2 = _t(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, a = e2 ? e2.toStringTag : void 0;
    function i(o) {
      var s = r.call(o, a), u = o[a];
      try {
        o[a] = void 0;
        var f5 = true;
      } catch {
      }
      var d3 = n.call(o);
      return f5 && (s ? o[a] = u : delete o[a]), d3;
    }
    return kr = i, kr;
  }
  function gd() {
    if (as) return Ir;
    as = 1;
    var e2 = Object.prototype, t = e2.toString;
    function r(n) {
      return t.call(n);
    }
    return Ir = r, Ir;
  }
  function wt() {
    if (is) return Mr;
    is = 1;
    var e2 = _t(), t = md(), r = gd(), n = "[object Null]", a = "[object Undefined]", i = e2 ? e2.toStringTag : void 0;
    function o(s) {
      return s == null ? s === void 0 ? a : n : i && i in Object(s) ? t(s) : r(s);
    }
    return Mr = o, Mr;
  }
  function it() {
    if (os) return Fr;
    os = 1;
    function e2(t) {
      return t != null && typeof t == "object";
    }
    return Fr = e2, Fr;
  }
  function Ot() {
    if (ss) return Lr;
    ss = 1;
    var e2 = wt(), t = it(), r = "[object Symbol]";
    function n(a) {
      return typeof a == "symbol" || t(a) && e2(a) == r;
    }
    return Lr = n, Lr;
  }
  function bd() {
    if (us) return qr;
    us = 1;
    var e2 = yd(), t = Je(), r = Ot(), n = NaN, a = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, o = /^0o[0-7]+$/i, s = parseInt;
    function u(f5) {
      if (typeof f5 == "number")
        return f5;
      if (r(f5))
        return n;
      if (t(f5)) {
        var d3 = typeof f5.valueOf == "function" ? f5.valueOf() : f5;
        f5 = t(d3) ? d3 + "" : d3;
      }
      if (typeof f5 != "string")
        return f5 === 0 ? f5 : +f5;
      f5 = e2(f5);
      var c = i.test(f5);
      return c || o.test(f5) ? s(f5.slice(2), c ? 2 : 8) : a.test(f5) ? n : +f5;
    }
    return qr = u, qr;
  }
  function Hf() {
    if (cs) return Nr;
    cs = 1;
    var e2 = Je(), t = pd(), r = bd(), n = "Expected a function", a = Math.max, i = Math.min;
    function o(s, u, f5) {
      var d3, c, m, b3, T7, w2, _ = 0, v5 = false, g5 = false, h3 = true;
      if (typeof s != "function")
        throw new TypeError(n);
      u = r(u) || 0, e2(f5) && (v5 = !!f5.leading, g5 = "maxWait" in f5, m = g5 ? a(r(f5.maxWait) || 0, u) : m, h3 = "trailing" in f5 ? !!f5.trailing : h3);
      function p(M3) {
        var E3 = d3, F2 = c;
        return d3 = c = void 0, _ = M3, b3 = s.apply(F2, E3), b3;
      }
      function y2(M3) {
        return _ = M3, T7 = setTimeout(L5, u), v5 ? p(M3) : b3;
      }
      function O6(M3) {
        var E3 = M3 - w2, F2 = M3 - _, X = u - E3;
        return g5 ? i(X, m - F2) : X;
      }
      function x5(M3) {
        var E3 = M3 - w2, F2 = M3 - _;
        return w2 === void 0 || E3 >= u || E3 < 0 || g5 && F2 >= m;
      }
      function L5() {
        var M3 = t();
        if (x5(M3))
          return A7(M3);
        T7 = setTimeout(L5, O6(M3));
      }
      function A7(M3) {
        return T7 = void 0, h3 && d3 ? p(M3) : (d3 = c = void 0, b3);
      }
      function N4() {
        T7 !== void 0 && clearTimeout(T7), _ = 0, d3 = w2 = c = T7 = void 0;
      }
      function I4() {
        return T7 === void 0 ? b3 : A7(t());
      }
      function D3() {
        var M3 = t(), E3 = x5(M3);
        if (d3 = arguments, c = this, w2 = M3, E3) {
          if (T7 === void 0)
            return y2(w2);
          if (g5)
            return clearTimeout(T7), T7 = setTimeout(L5, u), p(w2);
        }
        return T7 === void 0 && (T7 = setTimeout(L5, u)), b3;
      }
      return D3.cancel = N4, D3.flush = I4, D3;
    }
    return Nr = o, Nr;
  }
  function Bf() {
    if (fs) return Dr;
    fs = 1;
    var e2 = wt(), t = Je(), r = "[object AsyncFunction]", n = "[object Function]", a = "[object GeneratorFunction]", i = "[object Proxy]";
    function o(s) {
      if (!t(s))
        return false;
      var u = e2(s);
      return u == n || u == a || u == r || u == i;
    }
    return Dr = o, Dr;
  }
  function _d() {
    if (ls) return jr;
    ls = 1;
    var e2 = Me(), t = e2["__core-js_shared__"];
    return jr = t, jr;
  }
  function wd() {
    if (ds) return Kr;
    ds = 1;
    var e2 = _d(), t = (function() {
      var n = /[^.]+$/.exec(e2 && e2.keys && e2.keys.IE_PROTO || "");
      return n ? "Symbol(src)_1." + n : "";
    })();
    function r(n) {
      return !!t && t in n;
    }
    return Kr = r, Kr;
  }
  function $f() {
    if (vs) return Ur;
    vs = 1;
    var e2 = Function.prototype, t = e2.toString;
    function r(n) {
      if (n != null) {
        try {
          return t.call(n);
        } catch {
        }
        try {
          return n + "";
        } catch {
        }
      }
      return "";
    }
    return Ur = r, Ur;
  }
  function Od() {
    if (ps) return zr;
    ps = 1;
    var e2 = Bf(), t = wd(), r = Je(), n = $f(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, o = Function.prototype, s = Object.prototype, u = o.toString, f5 = s.hasOwnProperty, d3 = RegExp(
      "^" + u.call(f5).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function c(m) {
      if (!r(m) || t(m))
        return false;
      var b3 = e2(m) ? d3 : i;
      return b3.test(n(m));
    }
    return zr = c, zr;
  }
  function Pd() {
    if (hs) return Hr;
    hs = 1;
    function e2(t, r) {
      return t == null ? void 0 : t[r];
    }
    return Hr = e2, Hr;
  }
  function Ze() {
    if (ys) return Br;
    ys = 1;
    var e2 = Od(), t = Pd();
    function r(n, a) {
      var i = t(n, a);
      return e2(i) ? i : void 0;
    }
    return Br = r, Br;
  }
  function Jt() {
    if (ms) return $r;
    ms = 1;
    var e2 = Ze(), t = e2(Object, "create");
    return $r = t, $r;
  }
  function Sd() {
    if (gs) return Vr;
    gs = 1;
    var e2 = Jt();
    function t() {
      this.__data__ = e2 ? e2(null) : {}, this.size = 0;
    }
    return Vr = t, Vr;
  }
  function Cd() {
    if (bs) return Wr;
    bs = 1;
    function e2(t) {
      var r = this.has(t) && delete this.__data__[t];
      return this.size -= r ? 1 : 0, r;
    }
    return Wr = e2, Wr;
  }
  function xd() {
    if (_s) return Yr;
    _s = 1;
    var e2 = Jt(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
    function a(i) {
      var o = this.__data__;
      if (e2) {
        var s = o[i];
        return s === t ? void 0 : s;
      }
      return n.call(o, i) ? o[i] : void 0;
    }
    return Yr = a, Yr;
  }
  function Ed() {
    if (ws) return Gr;
    ws = 1;
    var e2 = Jt(), t = Object.prototype, r = t.hasOwnProperty;
    function n(a) {
      var i = this.__data__;
      return e2 ? i[a] !== void 0 : r.call(i, a);
    }
    return Gr = n, Gr;
  }
  function Ad() {
    if (Os) return Xr;
    Os = 1;
    var e2 = Jt(), t = "__lodash_hash_undefined__";
    function r(n, a) {
      var i = this.__data__;
      return this.size += this.has(n) ? 0 : 1, i[n] = e2 && a === void 0 ? t : a, this;
    }
    return Xr = r, Xr;
  }
  function Td() {
    if (Ps) return Jr;
    Ps = 1;
    var e2 = Sd(), t = Cd(), r = xd(), n = Ed(), a = Ad();
    function i(o) {
      var s = -1, u = o == null ? 0 : o.length;
      for (this.clear(); ++s < u; ) {
        var f5 = o[s];
        this.set(f5[0], f5[1]);
      }
    }
    return i.prototype.clear = e2, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, Jr = i, Jr;
  }
  function Rd() {
    if (Ss) return Zr;
    Ss = 1;
    function e2() {
      this.__data__ = [], this.size = 0;
    }
    return Zr = e2, Zr;
  }
  function Ji() {
    if (Cs) return Qr;
    Cs = 1;
    function e2(t, r) {
      return t === r || t !== t && r !== r;
    }
    return Qr = e2, Qr;
  }
  function Zt() {
    if (xs) return en;
    xs = 1;
    var e2 = Ji();
    function t(r, n) {
      for (var a = r.length; a--; )
        if (e2(r[a][0], n))
          return a;
      return -1;
    }
    return en = t, en;
  }
  function kd() {
    if (Es) return tn;
    Es = 1;
    var e2 = Zt(), t = Array.prototype, r = t.splice;
    function n(a) {
      var i = this.__data__, o = e2(i, a);
      if (o < 0)
        return false;
      var s = i.length - 1;
      return o == s ? i.pop() : r.call(i, o, 1), --this.size, true;
    }
    return tn = n, tn;
  }
  function Id() {
    if (As) return rn;
    As = 1;
    var e2 = Zt();
    function t(r) {
      var n = this.__data__, a = e2(n, r);
      return a < 0 ? void 0 : n[a][1];
    }
    return rn = t, rn;
  }
  function Md() {
    if (Ts) return nn;
    Ts = 1;
    var e2 = Zt();
    function t(r) {
      return e2(this.__data__, r) > -1;
    }
    return nn = t, nn;
  }
  function Fd() {
    if (Rs) return an;
    Rs = 1;
    var e2 = Zt();
    function t(r, n) {
      var a = this.__data__, i = e2(a, r);
      return i < 0 ? (++this.size, a.push([r, n])) : a[i][1] = n, this;
    }
    return an = t, an;
  }
  function Qt() {
    if (ks) return on;
    ks = 1;
    var e2 = Rd(), t = kd(), r = Id(), n = Md(), a = Fd();
    function i(o) {
      var s = -1, u = o == null ? 0 : o.length;
      for (this.clear(); ++s < u; ) {
        var f5 = o[s];
        this.set(f5[0], f5[1]);
      }
    }
    return i.prototype.clear = e2, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, on = i, on;
  }
  function Zi() {
    if (Is) return sn;
    Is = 1;
    var e2 = Ze(), t = Me(), r = e2(t, "Map");
    return sn = r, sn;
  }
  function Ld() {
    if (Ms) return un;
    Ms = 1;
    var e2 = Td(), t = Qt(), r = Zi();
    function n() {
      this.size = 0, this.__data__ = {
        hash: new e2(),
        map: new (r || t)(),
        string: new e2()
      };
    }
    return un = n, un;
  }
  function qd() {
    if (Fs) return cn;
    Fs = 1;
    function e2(t) {
      var r = typeof t;
      return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
    }
    return cn = e2, cn;
  }
  function er() {
    if (Ls) return fn;
    Ls = 1;
    var e2 = qd();
    function t(r, n) {
      var a = r.__data__;
      return e2(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
    }
    return fn = t, fn;
  }
  function Nd() {
    if (qs) return ln;
    qs = 1;
    var e2 = er();
    function t(r) {
      var n = e2(this, r).delete(r);
      return this.size -= n ? 1 : 0, n;
    }
    return ln = t, ln;
  }
  function Dd() {
    if (Ns) return dn;
    Ns = 1;
    var e2 = er();
    function t(r) {
      return e2(this, r).get(r);
    }
    return dn = t, dn;
  }
  function jd() {
    if (Ds) return vn;
    Ds = 1;
    var e2 = er();
    function t(r) {
      return e2(this, r).has(r);
    }
    return vn = t, vn;
  }
  function Kd() {
    if (js) return pn;
    js = 1;
    var e2 = er();
    function t(r, n) {
      var a = e2(this, r), i = a.size;
      return a.set(r, n), this.size += a.size == i ? 0 : 1, this;
    }
    return pn = t, pn;
  }
  function Qi() {
    if (Ks) return hn;
    Ks = 1;
    var e2 = Ld(), t = Nd(), r = Dd(), n = jd(), a = Kd();
    function i(o) {
      var s = -1, u = o == null ? 0 : o.length;
      for (this.clear(); ++s < u; ) {
        var f5 = o[s];
        this.set(f5[0], f5[1]);
      }
    }
    return i.prototype.clear = e2, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, hn = i, hn;
  }
  function Ud() {
    if (Us) return yn;
    Us = 1;
    var e2 = "__lodash_hash_undefined__";
    function t(r) {
      return this.__data__.set(r, e2), this;
    }
    return yn = t, yn;
  }
  function zd() {
    if (zs) return mn;
    zs = 1;
    function e2(t) {
      return this.__data__.has(t);
    }
    return mn = e2, mn;
  }
  function Vf() {
    if (Hs) return gn;
    Hs = 1;
    var e2 = Qi(), t = Ud(), r = zd();
    function n(a) {
      var i = -1, o = a == null ? 0 : a.length;
      for (this.__data__ = new e2(); ++i < o; )
        this.add(a[i]);
    }
    return n.prototype.add = n.prototype.push = t, n.prototype.has = r, gn = n, gn;
  }
  function Hd() {
    if (Bs) return bn;
    Bs = 1;
    function e2(t, r, n, a) {
      for (var i = t.length, o = n + (a ? 1 : -1); a ? o-- : ++o < i; )
        if (r(t[o], o, t))
          return o;
      return -1;
    }
    return bn = e2, bn;
  }
  function Bd() {
    if ($s) return _n;
    $s = 1;
    function e2(t) {
      return t !== t;
    }
    return _n = e2, _n;
  }
  function $d() {
    if (Vs) return wn;
    Vs = 1;
    function e2(t, r, n) {
      for (var a = n - 1, i = t.length; ++a < i; )
        if (t[a] === r)
          return a;
      return -1;
    }
    return wn = e2, wn;
  }
  function Vd() {
    if (Ws) return On;
    Ws = 1;
    var e2 = Hd(), t = Bd(), r = $d();
    function n(a, i, o) {
      return i === i ? r(a, i, o) : e2(a, t, o);
    }
    return On = n, On;
  }
  function Wd() {
    if (Ys) return Pn;
    Ys = 1;
    var e2 = Vd();
    function t(r, n) {
      var a = r == null ? 0 : r.length;
      return !!a && e2(r, n, 0) > -1;
    }
    return Pn = t, Pn;
  }
  function Yd() {
    if (Gs) return Sn;
    Gs = 1;
    function e2(t, r, n) {
      for (var a = -1, i = t == null ? 0 : t.length; ++a < i; )
        if (n(r, t[a]))
          return true;
      return false;
    }
    return Sn = e2, Sn;
  }
  function eo() {
    if (Xs) return Cn;
    Xs = 1;
    function e2(t, r) {
      for (var n = -1, a = t == null ? 0 : t.length, i = Array(a); ++n < a; )
        i[n] = r(t[n], n, t);
      return i;
    }
    return Cn = e2, Cn;
  }
  function to() {
    if (Js) return xn;
    Js = 1;
    function e2(t) {
      return function(r) {
        return t(r);
      };
    }
    return xn = e2, xn;
  }
  function Wf() {
    if (Zs) return En;
    Zs = 1;
    function e2(t, r) {
      return t.has(r);
    }
    return En = e2, En;
  }
  function Gd() {
    if (Qs) return An;
    Qs = 1;
    var e2 = Vf(), t = Wd(), r = Yd(), n = eo(), a = to(), i = Wf(), o = 200;
    function s(u, f5, d3, c) {
      var m = -1, b3 = t, T7 = true, w2 = u.length, _ = [], v5 = f5.length;
      if (!w2)
        return _;
      d3 && (f5 = n(f5, a(d3))), c ? (b3 = r, T7 = false) : f5.length >= o && (b3 = i, T7 = false, f5 = new e2(f5));
      e:
        for (; ++m < w2; ) {
          var g5 = u[m], h3 = d3 == null ? g5 : d3(g5);
          if (g5 = c || g5 !== 0 ? g5 : 0, T7 && h3 === h3) {
            for (var p = v5; p--; )
              if (f5[p] === h3)
                continue e;
            _.push(g5);
          } else b3(f5, h3, c) || _.push(g5);
        }
      return _;
    }
    return An = s, An;
  }
  function Yf() {
    if (eu) return Tn;
    eu = 1;
    function e2(t, r) {
      for (var n = -1, a = r.length, i = t.length; ++n < a; )
        t[i + n] = r[n];
      return t;
    }
    return Tn = e2, Tn;
  }
  function Xd() {
    if (tu) return Rn;
    tu = 1;
    var e2 = wt(), t = it(), r = "[object Arguments]";
    function n(a) {
      return t(a) && e2(a) == r;
    }
    return Rn = n, Rn;
  }
  function ro() {
    if (ru) return kn;
    ru = 1;
    var e2 = Xd(), t = it(), r = Object.prototype, n = r.hasOwnProperty, a = r.propertyIsEnumerable, i = e2(/* @__PURE__ */ (function() {
      return arguments;
    })()) ? e2 : function(o) {
      return t(o) && n.call(o, "callee") && !a.call(o, "callee");
    };
    return kn = i, kn;
  }
  function Te() {
    if (nu) return In;
    nu = 1;
    var e2 = Array.isArray;
    return In = e2, In;
  }
  function Jd() {
    if (au) return Mn;
    au = 1;
    var e2 = _t(), t = ro(), r = Te(), n = e2 ? e2.isConcatSpreadable : void 0;
    function a(i) {
      return r(i) || t(i) || !!(n && i && i[n]);
    }
    return Mn = a, Mn;
  }
  function Gf() {
    if (iu) return Fn;
    iu = 1;
    var e2 = Yf(), t = Jd();
    function r(n, a, i, o, s) {
      var u = -1, f5 = n.length;
      for (i || (i = t), s || (s = []); ++u < f5; ) {
        var d3 = n[u];
        a > 0 && i(d3) ? a > 1 ? r(d3, a - 1, i, o, s) : e2(s, d3) : o || (s[s.length] = d3);
      }
      return s;
    }
    return Fn = r, Fn;
  }
  function Pt() {
    if (ou) return Ln;
    ou = 1;
    function e2(t) {
      return t;
    }
    return Ln = e2, Ln;
  }
  function Zd() {
    if (su) return qn;
    su = 1;
    function e2(t, r, n) {
      switch (n.length) {
        case 0:
          return t.call(r);
        case 1:
          return t.call(r, n[0]);
        case 2:
          return t.call(r, n[0], n[1]);
        case 3:
          return t.call(r, n[0], n[1], n[2]);
      }
      return t.apply(r, n);
    }
    return qn = e2, qn;
  }
  function Qd() {
    if (uu) return Nn;
    uu = 1;
    var e2 = Zd(), t = Math.max;
    function r(n, a, i) {
      return a = t(a === void 0 ? n.length - 1 : a, 0), function() {
        for (var o = arguments, s = -1, u = t(o.length - a, 0), f5 = Array(u); ++s < u; )
          f5[s] = o[a + s];
        s = -1;
        for (var d3 = Array(a + 1); ++s < a; )
          d3[s] = o[s];
        return d3[a] = i(f5), e2(n, this, d3);
      };
    }
    return Nn = r, Nn;
  }
  function ev() {
    if (cu) return Dn;
    cu = 1;
    function e2(t) {
      return function() {
        return t;
      };
    }
    return Dn = e2, Dn;
  }
  function tv() {
    if (fu) return jn;
    fu = 1;
    var e2 = Ze(), t = (function() {
      try {
        var r = e2(Object, "defineProperty");
        return r({}, "", {}), r;
      } catch {
      }
    })();
    return jn = t, jn;
  }
  function rv() {
    if (lu) return Kn;
    lu = 1;
    var e2 = ev(), t = tv(), r = Pt(), n = t ? function(a, i) {
      return t(a, "toString", {
        configurable: true,
        enumerable: false,
        value: e2(i),
        writable: true
      });
    } : r;
    return Kn = n, Kn;
  }
  function nv() {
    if (du) return Un;
    du = 1;
    var e2 = 800, t = 16, r = Date.now;
    function n(a) {
      var i = 0, o = 0;
      return function() {
        var s = r(), u = t - (s - o);
        if (o = s, u > 0) {
          if (++i >= e2)
            return arguments[0];
        } else
          i = 0;
        return a.apply(void 0, arguments);
      };
    }
    return Un = n, Un;
  }
  function av() {
    if (vu) return zn;
    vu = 1;
    var e2 = rv(), t = nv(), r = t(e2);
    return zn = r, zn;
  }
  function Xf() {
    if (pu) return Hn;
    pu = 1;
    var e2 = Pt(), t = Qd(), r = av();
    function n(a, i) {
      return r(t(a, i, e2), a + "");
    }
    return Hn = n, Hn;
  }
  function no() {
    if (hu) return Bn;
    hu = 1;
    var e2 = 9007199254740991;
    function t(r) {
      return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e2;
    }
    return Bn = t, Bn;
  }
  function St() {
    if (yu) return $n;
    yu = 1;
    var e2 = Bf(), t = no();
    function r(n) {
      return n != null && t(n.length) && !e2(n);
    }
    return $n = r, $n;
  }
  function iv() {
    if (mu) return Vn;
    mu = 1;
    var e2 = St(), t = it();
    function r(n) {
      return t(n) && e2(n);
    }
    return Vn = r, Vn;
  }
  function ov() {
    if (gu) return Wn;
    gu = 1;
    var e2 = Gd(), t = Gf(), r = Xf(), n = iv(), a = r(function(i, o) {
      return n(i) ? e2(i, t(o, 1, n, true)) : [];
    });
    return Wn = a, Wn;
  }
  function Jf() {
    if (bu) return Yn;
    bu = 1;
    function e2(t, r) {
      for (var n = -1, a = t == null ? 0 : t.length, i = 0, o = []; ++n < a; ) {
        var s = t[n];
        r(s, n, t) && (o[i++] = s);
      }
      return o;
    }
    return Yn = e2, Yn;
  }
  function sv() {
    if (_u) return Gn;
    _u = 1;
    function e2(t) {
      return function(r, n, a) {
        for (var i = -1, o = Object(r), s = a(r), u = s.length; u--; ) {
          var f5 = s[t ? u : ++i];
          if (n(o[f5], f5, o) === false)
            break;
        }
        return r;
      };
    }
    return Gn = e2, Gn;
  }
  function uv() {
    if (wu) return Xn;
    wu = 1;
    var e2 = sv(), t = e2();
    return Xn = t, Xn;
  }
  function cv() {
    if (Ou) return Jn;
    Ou = 1;
    function e2(t, r) {
      for (var n = -1, a = Array(t); ++n < t; )
        a[n] = r(n);
      return a;
    }
    return Jn = e2, Jn;
  }
  function fv() {
    if (Pu) return Zn;
    Pu = 1;
    function e2() {
      return false;
    }
    return Zn = e2, Zn;
  }
  function Zf() {
    return Su || (Su = 1, (function(e2, t) {
      var r = Me(), n = fv(), a = t && !t.nodeType && t, i = a && true && e2 && !e2.nodeType && e2, o = i && i.exports === a, s = o ? r.Buffer : void 0, u = s ? s.isBuffer : void 0, f5 = u || n;
      e2.exports = f5;
    })(ut, ut.exports)), ut.exports;
  }
  function ao() {
    if (Cu) return Qn;
    Cu = 1;
    var e2 = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
    function r(n, a) {
      var i = typeof n;
      return a = a ?? e2, !!a && (i == "number" || i != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < a;
    }
    return Qn = r, Qn;
  }
  function lv() {
    if (xu) return ea;
    xu = 1;
    var e2 = wt(), t = no(), r = it(), n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", o = "[object Date]", s = "[object Error]", u = "[object Function]", f5 = "[object Map]", d3 = "[object Number]", c = "[object Object]", m = "[object RegExp]", b3 = "[object Set]", T7 = "[object String]", w2 = "[object WeakMap]", _ = "[object ArrayBuffer]", v5 = "[object DataView]", g5 = "[object Float32Array]", h3 = "[object Float64Array]", p = "[object Int8Array]", y2 = "[object Int16Array]", O6 = "[object Int32Array]", x5 = "[object Uint8Array]", L5 = "[object Uint8ClampedArray]", A7 = "[object Uint16Array]", N4 = "[object Uint32Array]", I4 = {};
    I4[g5] = I4[h3] = I4[p] = I4[y2] = I4[O6] = I4[x5] = I4[L5] = I4[A7] = I4[N4] = true, I4[n] = I4[a] = I4[_] = I4[i] = I4[v5] = I4[o] = I4[s] = I4[u] = I4[f5] = I4[d3] = I4[c] = I4[m] = I4[b3] = I4[T7] = I4[w2] = false;
    function D3(M3) {
      return r(M3) && t(M3.length) && !!I4[e2(M3)];
    }
    return ea = D3, ea;
  }
  function dv() {
    return Eu || (Eu = 1, (function(e2, t) {
      var r = zf(), n = t && !t.nodeType && t, a = n && true && e2 && !e2.nodeType && e2, i = a && a.exports === n, o = i && r.process, s = (function() {
        try {
          var u = a && a.require && a.require("util").types;
          return u || o && o.binding && o.binding("util");
        } catch {
        }
      })();
      e2.exports = s;
    })(ct, ct.exports)), ct.exports;
  }
  function Qf() {
    if (Au) return ta;
    Au = 1;
    var e2 = lv(), t = to(), r = dv(), n = r && r.isTypedArray, a = n ? t(n) : e2;
    return ta = a, ta;
  }
  function vv() {
    if (Tu) return ra;
    Tu = 1;
    var e2 = cv(), t = ro(), r = Te(), n = Zf(), a = ao(), i = Qf(), o = Object.prototype, s = o.hasOwnProperty;
    function u(f5, d3) {
      var c = r(f5), m = !c && t(f5), b3 = !c && !m && n(f5), T7 = !c && !m && !b3 && i(f5), w2 = c || m || b3 || T7, _ = w2 ? e2(f5.length, String) : [], v5 = _.length;
      for (var g5 in f5)
        (d3 || s.call(f5, g5)) && !(w2 && // Safari 9 has enumerable `arguments.length` in strict mode.
        (g5 == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        b3 && (g5 == "offset" || g5 == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        T7 && (g5 == "buffer" || g5 == "byteLength" || g5 == "byteOffset") || // Skip index properties.
        a(g5, v5))) && _.push(g5);
      return _;
    }
    return ra = u, ra;
  }
  function pv() {
    if (Ru) return na;
    Ru = 1;
    var e2 = Object.prototype;
    function t(r) {
      var n = r && r.constructor, a = typeof n == "function" && n.prototype || e2;
      return r === a;
    }
    return na = t, na;
  }
  function hv() {
    if (ku) return aa;
    ku = 1;
    function e2(t, r) {
      return function(n) {
        return t(r(n));
      };
    }
    return aa = e2, aa;
  }
  function yv() {
    if (Iu) return ia;
    Iu = 1;
    var e2 = hv(), t = e2(Object.keys, Object);
    return ia = t, ia;
  }
  function mv() {
    if (Mu) return oa;
    Mu = 1;
    var e2 = pv(), t = yv(), r = Object.prototype, n = r.hasOwnProperty;
    function a(i) {
      if (!e2(i))
        return t(i);
      var o = [];
      for (var s in Object(i))
        n.call(i, s) && s != "constructor" && o.push(s);
      return o;
    }
    return oa = a, oa;
  }
  function io() {
    if (Fu) return sa;
    Fu = 1;
    var e2 = vv(), t = mv(), r = St();
    function n(a) {
      return r(a) ? e2(a) : t(a);
    }
    return sa = n, sa;
  }
  function oo() {
    if (Lu) return ua;
    Lu = 1;
    var e2 = uv(), t = io();
    function r(n, a) {
      return n && e2(n, a, t);
    }
    return ua = r, ua;
  }
  function gv() {
    if (qu) return ca;
    qu = 1;
    var e2 = St();
    function t(r, n) {
      return function(a, i) {
        if (a == null)
          return a;
        if (!e2(a))
          return r(a, i);
        for (var o = a.length, s = n ? o : -1, u = Object(a); (n ? s-- : ++s < o) && i(u[s], s, u) !== false; )
          ;
        return a;
      };
    }
    return ca = t, ca;
  }
  function so() {
    if (Nu) return fa;
    Nu = 1;
    var e2 = oo(), t = gv(), r = t(e2);
    return fa = r, fa;
  }
  function bv() {
    if (Du) return la;
    Du = 1;
    var e2 = so();
    function t(r, n) {
      var a = [];
      return e2(r, function(i, o, s) {
        n(i, o, s) && a.push(i);
      }), a;
    }
    return la = t, la;
  }
  function _v() {
    if (ju) return da;
    ju = 1;
    var e2 = Qt();
    function t() {
      this.__data__ = new e2(), this.size = 0;
    }
    return da = t, da;
  }
  function wv() {
    if (Ku) return va;
    Ku = 1;
    function e2(t) {
      var r = this.__data__, n = r.delete(t);
      return this.size = r.size, n;
    }
    return va = e2, va;
  }
  function Ov() {
    if (Uu) return pa;
    Uu = 1;
    function e2(t) {
      return this.__data__.get(t);
    }
    return pa = e2, pa;
  }
  function Pv() {
    if (zu) return ha;
    zu = 1;
    function e2(t) {
      return this.__data__.has(t);
    }
    return ha = e2, ha;
  }
  function Sv() {
    if (Hu) return ya;
    Hu = 1;
    var e2 = Qt(), t = Zi(), r = Qi(), n = 200;
    function a(i, o) {
      var s = this.__data__;
      if (s instanceof e2) {
        var u = s.__data__;
        if (!t || u.length < n - 1)
          return u.push([i, o]), this.size = ++s.size, this;
        s = this.__data__ = new r(u);
      }
      return s.set(i, o), this.size = s.size, this;
    }
    return ya = a, ya;
  }
  function el() {
    if (Bu) return ma;
    Bu = 1;
    var e2 = Qt(), t = _v(), r = wv(), n = Ov(), a = Pv(), i = Sv();
    function o(s) {
      var u = this.__data__ = new e2(s);
      this.size = u.size;
    }
    return o.prototype.clear = t, o.prototype.delete = r, o.prototype.get = n, o.prototype.has = a, o.prototype.set = i, ma = o, ma;
  }
  function Cv() {
    if ($u) return ga;
    $u = 1;
    function e2(t, r) {
      for (var n = -1, a = t == null ? 0 : t.length; ++n < a; )
        if (r(t[n], n, t))
          return true;
      return false;
    }
    return ga = e2, ga;
  }
  function tl() {
    if (Vu) return ba;
    Vu = 1;
    var e2 = Vf(), t = Cv(), r = Wf(), n = 1, a = 2;
    function i(o, s, u, f5, d3, c) {
      var m = u & n, b3 = o.length, T7 = s.length;
      if (b3 != T7 && !(m && T7 > b3))
        return false;
      var w2 = c.get(o), _ = c.get(s);
      if (w2 && _)
        return w2 == s && _ == o;
      var v5 = -1, g5 = true, h3 = u & a ? new e2() : void 0;
      for (c.set(o, s), c.set(s, o); ++v5 < b3; ) {
        var p = o[v5], y2 = s[v5];
        if (f5)
          var O6 = m ? f5(y2, p, v5, s, o, c) : f5(p, y2, v5, o, s, c);
        if (O6 !== void 0) {
          if (O6)
            continue;
          g5 = false;
          break;
        }
        if (h3) {
          if (!t(s, function(x5, L5) {
            if (!r(h3, L5) && (p === x5 || d3(p, x5, u, f5, c)))
              return h3.push(L5);
          })) {
            g5 = false;
            break;
          }
        } else if (!(p === y2 || d3(p, y2, u, f5, c))) {
          g5 = false;
          break;
        }
      }
      return c.delete(o), c.delete(s), g5;
    }
    return ba = i, ba;
  }
  function xv() {
    if (Wu) return _a;
    Wu = 1;
    var e2 = Me(), t = e2.Uint8Array;
    return _a = t, _a;
  }
  function Ev() {
    if (Yu) return wa;
    Yu = 1;
    function e2(t) {
      var r = -1, n = Array(t.size);
      return t.forEach(function(a, i) {
        n[++r] = [i, a];
      }), n;
    }
    return wa = e2, wa;
  }
  function Av() {
    if (Gu) return Oa;
    Gu = 1;
    function e2(t) {
      var r = -1, n = Array(t.size);
      return t.forEach(function(a) {
        n[++r] = a;
      }), n;
    }
    return Oa = e2, Oa;
  }
  function Tv() {
    if (Xu) return Pa;
    Xu = 1;
    var e2 = _t(), t = xv(), r = Ji(), n = tl(), a = Ev(), i = Av(), o = 1, s = 2, u = "[object Boolean]", f5 = "[object Date]", d3 = "[object Error]", c = "[object Map]", m = "[object Number]", b3 = "[object RegExp]", T7 = "[object Set]", w2 = "[object String]", _ = "[object Symbol]", v5 = "[object ArrayBuffer]", g5 = "[object DataView]", h3 = e2 ? e2.prototype : void 0, p = h3 ? h3.valueOf : void 0;
    function y2(O6, x5, L5, A7, N4, I4, D3) {
      switch (L5) {
        case g5:
          if (O6.byteLength != x5.byteLength || O6.byteOffset != x5.byteOffset)
            return false;
          O6 = O6.buffer, x5 = x5.buffer;
        case v5:
          return !(O6.byteLength != x5.byteLength || !I4(new t(O6), new t(x5)));
        case u:
        case f5:
        case m:
          return r(+O6, +x5);
        case d3:
          return O6.name == x5.name && O6.message == x5.message;
        case b3:
        case w2:
          return O6 == x5 + "";
        case c:
          var M3 = a;
        case T7:
          var E3 = A7 & o;
          if (M3 || (M3 = i), O6.size != x5.size && !E3)
            return false;
          var F2 = D3.get(O6);
          if (F2)
            return F2 == x5;
          A7 |= s, D3.set(O6, x5);
          var X = n(M3(O6), M3(x5), A7, N4, I4, D3);
          return D3.delete(O6), X;
        case _:
          if (p)
            return p.call(O6) == p.call(x5);
      }
      return false;
    }
    return Pa = y2, Pa;
  }
  function Rv() {
    if (Ju) return Sa;
    Ju = 1;
    var e2 = Yf(), t = Te();
    function r(n, a, i) {
      var o = a(n);
      return t(n) ? o : e2(o, i(n));
    }
    return Sa = r, Sa;
  }
  function kv() {
    if (Zu) return Ca;
    Zu = 1;
    function e2() {
      return [];
    }
    return Ca = e2, Ca;
  }
  function Iv() {
    if (Qu) return xa;
    Qu = 1;
    var e2 = Jf(), t = kv(), r = Object.prototype, n = r.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(o) {
      return o == null ? [] : (o = Object(o), e2(a(o), function(s) {
        return n.call(o, s);
      }));
    } : t;
    return xa = i, xa;
  }
  function Mv() {
    if (ec) return Ea;
    ec = 1;
    var e2 = Rv(), t = Iv(), r = io();
    function n(a) {
      return e2(a, r, t);
    }
    return Ea = n, Ea;
  }
  function Fv() {
    if (tc) return Aa;
    tc = 1;
    var e2 = Mv(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
    function a(i, o, s, u, f5, d3) {
      var c = s & t, m = e2(i), b3 = m.length, T7 = e2(o), w2 = T7.length;
      if (b3 != w2 && !c)
        return false;
      for (var _ = b3; _--; ) {
        var v5 = m[_];
        if (!(c ? v5 in o : n.call(o, v5)))
          return false;
      }
      var g5 = d3.get(i), h3 = d3.get(o);
      if (g5 && h3)
        return g5 == o && h3 == i;
      var p = true;
      d3.set(i, o), d3.set(o, i);
      for (var y2 = c; ++_ < b3; ) {
        v5 = m[_];
        var O6 = i[v5], x5 = o[v5];
        if (u)
          var L5 = c ? u(x5, O6, v5, o, i, d3) : u(O6, x5, v5, i, o, d3);
        if (!(L5 === void 0 ? O6 === x5 || f5(O6, x5, s, u, d3) : L5)) {
          p = false;
          break;
        }
        y2 || (y2 = v5 == "constructor");
      }
      if (p && !y2) {
        var A7 = i.constructor, N4 = o.constructor;
        A7 != N4 && "constructor" in i && "constructor" in o && !(typeof A7 == "function" && A7 instanceof A7 && typeof N4 == "function" && N4 instanceof N4) && (p = false);
      }
      return d3.delete(i), d3.delete(o), p;
    }
    return Aa = a, Aa;
  }
  function Lv() {
    if (rc) return Ta;
    rc = 1;
    var e2 = Ze(), t = Me(), r = e2(t, "DataView");
    return Ta = r, Ta;
  }
  function qv() {
    if (nc) return Ra;
    nc = 1;
    var e2 = Ze(), t = Me(), r = e2(t, "Promise");
    return Ra = r, Ra;
  }
  function Nv() {
    if (ac) return ka;
    ac = 1;
    var e2 = Ze(), t = Me(), r = e2(t, "Set");
    return ka = r, ka;
  }
  function Dv() {
    if (ic) return Ia;
    ic = 1;
    var e2 = Ze(), t = Me(), r = e2(t, "WeakMap");
    return Ia = r, Ia;
  }
  function jv() {
    if (oc) return Ma;
    oc = 1;
    var e2 = Lv(), t = Zi(), r = qv(), n = Nv(), a = Dv(), i = wt(), o = $f(), s = "[object Map]", u = "[object Object]", f5 = "[object Promise]", d3 = "[object Set]", c = "[object WeakMap]", m = "[object DataView]", b3 = o(e2), T7 = o(t), w2 = o(r), _ = o(n), v5 = o(a), g5 = i;
    return (e2 && g5(new e2(new ArrayBuffer(1))) != m || t && g5(new t()) != s || r && g5(r.resolve()) != f5 || n && g5(new n()) != d3 || a && g5(new a()) != c) && (g5 = function(h3) {
      var p = i(h3), y2 = p == u ? h3.constructor : void 0, O6 = y2 ? o(y2) : "";
      if (O6)
        switch (O6) {
          case b3:
            return m;
          case T7:
            return s;
          case w2:
            return f5;
          case _:
            return d3;
          case v5:
            return c;
        }
      return p;
    }), Ma = g5, Ma;
  }
  function Kv() {
    if (sc) return Fa;
    sc = 1;
    var e2 = el(), t = tl(), r = Tv(), n = Fv(), a = jv(), i = Te(), o = Zf(), s = Qf(), u = 1, f5 = "[object Arguments]", d3 = "[object Array]", c = "[object Object]", m = Object.prototype, b3 = m.hasOwnProperty;
    function T7(w2, _, v5, g5, h3, p) {
      var y2 = i(w2), O6 = i(_), x5 = y2 ? d3 : a(w2), L5 = O6 ? d3 : a(_);
      x5 = x5 == f5 ? c : x5, L5 = L5 == f5 ? c : L5;
      var A7 = x5 == c, N4 = L5 == c, I4 = x5 == L5;
      if (I4 && o(w2)) {
        if (!o(_))
          return false;
        y2 = true, A7 = false;
      }
      if (I4 && !A7)
        return p || (p = new e2()), y2 || s(w2) ? t(w2, _, v5, g5, h3, p) : r(w2, _, x5, v5, g5, h3, p);
      if (!(v5 & u)) {
        var D3 = A7 && b3.call(w2, "__wrapped__"), M3 = N4 && b3.call(_, "__wrapped__");
        if (D3 || M3) {
          var E3 = D3 ? w2.value() : w2, F2 = M3 ? _.value() : _;
          return p || (p = new e2()), h3(E3, F2, v5, g5, p);
        }
      }
      return I4 ? (p || (p = new e2()), n(w2, _, v5, g5, h3, p)) : false;
    }
    return Fa = T7, Fa;
  }
  function rl() {
    if (uc) return La;
    uc = 1;
    var e2 = Kv(), t = it();
    function r(n, a, i, o, s) {
      return n === a ? true : n == null || a == null || !t(n) && !t(a) ? n !== n && a !== a : e2(n, a, i, o, r, s);
    }
    return La = r, La;
  }
  function Uv() {
    if (cc) return qa;
    cc = 1;
    var e2 = el(), t = rl(), r = 1, n = 2;
    function a(i, o, s, u) {
      var f5 = s.length, d3 = f5, c = !u;
      if (i == null)
        return !d3;
      for (i = Object(i); f5--; ) {
        var m = s[f5];
        if (c && m[2] ? m[1] !== i[m[0]] : !(m[0] in i))
          return false;
      }
      for (; ++f5 < d3; ) {
        m = s[f5];
        var b3 = m[0], T7 = i[b3], w2 = m[1];
        if (c && m[2]) {
          if (T7 === void 0 && !(b3 in i))
            return false;
        } else {
          var _ = new e2();
          if (u)
            var v5 = u(T7, w2, b3, i, o, _);
          if (!(v5 === void 0 ? t(w2, T7, r | n, u, _) : v5))
            return false;
        }
      }
      return true;
    }
    return qa = a, qa;
  }
  function nl() {
    if (fc) return Na;
    fc = 1;
    var e2 = Je();
    function t(r) {
      return r === r && !e2(r);
    }
    return Na = t, Na;
  }
  function zv() {
    if (lc) return Da;
    lc = 1;
    var e2 = nl(), t = io();
    function r(n) {
      for (var a = t(n), i = a.length; i--; ) {
        var o = a[i], s = n[o];
        a[i] = [o, s, e2(s)];
      }
      return a;
    }
    return Da = r, Da;
  }
  function al() {
    if (dc) return ja;
    dc = 1;
    function e2(t, r) {
      return function(n) {
        return n == null ? false : n[t] === r && (r !== void 0 || t in Object(n));
      };
    }
    return ja = e2, ja;
  }
  function Hv() {
    if (vc) return Ka;
    vc = 1;
    var e2 = Uv(), t = zv(), r = al();
    function n(a) {
      var i = t(a);
      return i.length == 1 && i[0][2] ? r(i[0][0], i[0][1]) : function(o) {
        return o === a || e2(o, a, i);
      };
    }
    return Ka = n, Ka;
  }
  function uo() {
    if (pc) return Ua;
    pc = 1;
    var e2 = Te(), t = Ot(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
    function a(i, o) {
      if (e2(i))
        return false;
      var s = typeof i;
      return s == "number" || s == "symbol" || s == "boolean" || i == null || t(i) ? true : n.test(i) || !r.test(i) || o != null && i in Object(o);
    }
    return Ua = a, Ua;
  }
  function Bv() {
    if (hc) return za;
    hc = 1;
    var e2 = Qi(), t = "Expected a function";
    function r(n, a) {
      if (typeof n != "function" || a != null && typeof a != "function")
        throw new TypeError(t);
      var i = function() {
        var o = arguments, s = a ? a.apply(this, o) : o[0], u = i.cache;
        if (u.has(s))
          return u.get(s);
        var f5 = n.apply(this, o);
        return i.cache = u.set(s, f5) || u, f5;
      };
      return i.cache = new (r.Cache || e2)(), i;
    }
    return r.Cache = e2, za = r, za;
  }
  function $v() {
    if (yc) return Ha;
    yc = 1;
    var e2 = Bv(), t = 500;
    function r(n) {
      var a = e2(n, function(o) {
        return i.size === t && i.clear(), o;
      }), i = a.cache;
      return a;
    }
    return Ha = r, Ha;
  }
  function Vv() {
    if (mc) return Ba;
    mc = 1;
    var e2 = $v(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = e2(function(a) {
      var i = [];
      return a.charCodeAt(0) === 46 && i.push(""), a.replace(t, function(o, s, u, f5) {
        i.push(u ? f5.replace(r, "$1") : s || o);
      }), i;
    });
    return Ba = n, Ba;
  }
  function Wv() {
    if (gc) return $a;
    gc = 1;
    var e2 = _t(), t = eo(), r = Te(), n = Ot(), a = e2 ? e2.prototype : void 0, i = a ? a.toString : void 0;
    function o(s) {
      if (typeof s == "string")
        return s;
      if (r(s))
        return t(s, o) + "";
      if (n(s))
        return i ? i.call(s) : "";
      var u = s + "";
      return u == "0" && 1 / s == -1 / 0 ? "-0" : u;
    }
    return $a = o, $a;
  }
  function il() {
    if (bc) return Va;
    bc = 1;
    var e2 = Wv();
    function t(r) {
      return r == null ? "" : e2(r);
    }
    return Va = t, Va;
  }
  function ol() {
    if (_c) return Wa;
    _c = 1;
    var e2 = Te(), t = uo(), r = Vv(), n = il();
    function a(i, o) {
      return e2(i) ? i : t(i, o) ? [i] : r(n(i));
    }
    return Wa = a, Wa;
  }
  function tr() {
    if (wc) return Ya;
    wc = 1;
    var e2 = Ot();
    function t(r) {
      if (typeof r == "string" || e2(r))
        return r;
      var n = r + "";
      return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
    }
    return Ya = t, Ya;
  }
  function co() {
    if (Oc) return Ga;
    Oc = 1;
    var e2 = ol(), t = tr();
    function r(n, a) {
      a = e2(a, n);
      for (var i = 0, o = a.length; n != null && i < o; )
        n = n[t(a[i++])];
      return i && i == o ? n : void 0;
    }
    return Ga = r, Ga;
  }
  function Yv() {
    if (Pc) return Xa;
    Pc = 1;
    var e2 = co();
    function t(r, n, a) {
      var i = r == null ? void 0 : e2(r, n);
      return i === void 0 ? a : i;
    }
    return Xa = t, Xa;
  }
  function Gv() {
    if (Sc) return Ja;
    Sc = 1;
    function e2(t, r) {
      return t != null && r in Object(t);
    }
    return Ja = e2, Ja;
  }
  function Xv() {
    if (Cc) return Za;
    Cc = 1;
    var e2 = ol(), t = ro(), r = Te(), n = ao(), a = no(), i = tr();
    function o(s, u, f5) {
      u = e2(u, s);
      for (var d3 = -1, c = u.length, m = false; ++d3 < c; ) {
        var b3 = i(u[d3]);
        if (!(m = s != null && f5(s, b3)))
          break;
        s = s[b3];
      }
      return m || ++d3 != c ? m : (c = s == null ? 0 : s.length, !!c && a(c) && n(b3, c) && (r(s) || t(s)));
    }
    return Za = o, Za;
  }
  function Jv() {
    if (xc) return Qa;
    xc = 1;
    var e2 = Gv(), t = Xv();
    function r(n, a) {
      return n != null && t(n, a, e2);
    }
    return Qa = r, Qa;
  }
  function Zv() {
    if (Ec) return ei;
    Ec = 1;
    var e2 = rl(), t = Yv(), r = Jv(), n = uo(), a = nl(), i = al(), o = tr(), s = 1, u = 2;
    function f5(d3, c) {
      return n(d3) && a(c) ? i(o(d3), c) : function(m) {
        var b3 = t(m, d3);
        return b3 === void 0 && b3 === c ? r(m, d3) : e2(c, b3, s | u);
      };
    }
    return ei = f5, ei;
  }
  function Qv() {
    if (Ac) return ti;
    Ac = 1;
    function e2(t) {
      return function(r) {
        return r == null ? void 0 : r[t];
      };
    }
    return ti = e2, ti;
  }
  function ep() {
    if (Tc) return ri;
    Tc = 1;
    var e2 = co();
    function t(r) {
      return function(n) {
        return e2(n, r);
      };
    }
    return ri = t, ri;
  }
  function tp() {
    if (Rc) return ni;
    Rc = 1;
    var e2 = Qv(), t = ep(), r = uo(), n = tr();
    function a(i) {
      return r(i) ? e2(n(i)) : t(i);
    }
    return ni = a, ni;
  }
  function fo() {
    if (kc) return ai;
    kc = 1;
    var e2 = Hv(), t = Zv(), r = Pt(), n = Te(), a = tp();
    function i(o) {
      return typeof o == "function" ? o : o == null ? r : typeof o == "object" ? n(o) ? t(o[0], o[1]) : e2(o) : a(o);
    }
    return ai = i, ai;
  }
  function rp() {
    if (Ic) return ii;
    Ic = 1;
    var e2 = Jf(), t = bv(), r = fo(), n = Te();
    function a(i, o) {
      var s = n(i) ? e2 : t;
      return s(i, r(o, 3));
    }
    return ii = a, ii;
  }
  function np() {
    if (Mc) return oi;
    Mc = 1;
    function e2(t, r, n) {
      var a;
      return n(t, function(i, o, s) {
        if (r(i, o, s))
          return a = o, false;
      }), a;
    }
    return oi = e2, oi;
  }
  function ap() {
    if (Fc) return si;
    Fc = 1;
    var e2 = np(), t = oo(), r = fo();
    function n(a, i) {
      return e2(a, r(i, 3), t);
    }
    return si = n, si;
  }
  function ip() {
    if (Lc) return ui;
    Lc = 1;
    function e2(t) {
      return t && t.length ? t[0] : void 0;
    }
    return ui = e2, ui;
  }
  function op() {
    return qc || (qc = 1, ci = ip()), ci;
  }
  function sp() {
    if (Nc) return fi;
    Nc = 1;
    function e2(t, r) {
      for (var n = -1, a = t == null ? 0 : t.length; ++n < a && r(t[n], n, t) !== false; )
        ;
      return t;
    }
    return fi = e2, fi;
  }
  function sl() {
    if (Dc) return li;
    Dc = 1;
    var e2 = Pt();
    function t(r) {
      return typeof r == "function" ? r : e2;
    }
    return li = t, li;
  }
  function up() {
    if (jc) return di;
    jc = 1;
    var e2 = sp(), t = so(), r = sl(), n = Te();
    function a(i, o) {
      var s = n(i) ? e2 : t;
      return s(i, r(o));
    }
    return di = a, di;
  }
  function cp() {
    if (Kc) return vi;
    Kc = 1;
    var e2 = oo(), t = sl();
    function r(n, a) {
      return n && e2(n, t(a));
    }
    return vi = r, vi;
  }
  function fp() {
    if (Uc) return pi;
    Uc = 1;
    function e2() {
    }
    return pi = e2, pi;
  }
  function lp() {
    if (zc) return hi;
    zc = 1;
    var e2 = so(), t = St();
    function r(n, a) {
      var i = -1, o = t(n) ? Array(n.length) : [];
      return e2(n, function(s, u, f5) {
        o[++i] = a(s, u, f5);
      }), o;
    }
    return hi = r, hi;
  }
  function dp() {
    if (Hc) return yi;
    Hc = 1;
    function e2(t, r) {
      var n = t.length;
      for (t.sort(r); n--; )
        t[n] = t[n].value;
      return t;
    }
    return yi = e2, yi;
  }
  function vp() {
    if (Bc) return mi;
    Bc = 1;
    var e2 = Ot();
    function t(r, n) {
      if (r !== n) {
        var a = r !== void 0, i = r === null, o = r === r, s = e2(r), u = n !== void 0, f5 = n === null, d3 = n === n, c = e2(n);
        if (!f5 && !c && !s && r > n || s && u && d3 && !f5 && !c || i && u && d3 || !a && d3 || !o)
          return 1;
        if (!i && !s && !c && r < n || c && a && o && !i && !s || f5 && a && o || !u && o || !d3)
          return -1;
      }
      return 0;
    }
    return mi = t, mi;
  }
  function pp() {
    if ($c) return gi;
    $c = 1;
    var e2 = vp();
    function t(r, n, a) {
      for (var i = -1, o = r.criteria, s = n.criteria, u = o.length, f5 = a.length; ++i < u; ) {
        var d3 = e2(o[i], s[i]);
        if (d3) {
          if (i >= f5)
            return d3;
          var c = a[i];
          return d3 * (c == "desc" ? -1 : 1);
        }
      }
      return r.index - n.index;
    }
    return gi = t, gi;
  }
  function hp() {
    if (Vc) return bi;
    Vc = 1;
    var e2 = eo(), t = co(), r = fo(), n = lp(), a = dp(), i = to(), o = pp(), s = Pt(), u = Te();
    function f5(d3, c, m) {
      c.length ? c = e2(c, function(w2) {
        return u(w2) ? function(_) {
          return t(_, w2.length === 1 ? w2[0] : w2);
        } : w2;
      }) : c = [s];
      var b3 = -1;
      c = e2(c, i(r));
      var T7 = n(d3, function(w2, _, v5) {
        var g5 = e2(c, function(h3) {
          return h3(w2);
        });
        return { criteria: g5, index: ++b3, value: w2 };
      });
      return a(T7, function(w2, _) {
        return o(w2, _, m);
      });
    }
    return bi = f5, bi;
  }
  function yp() {
    if (Wc) return _i;
    Wc = 1;
    var e2 = Ji(), t = St(), r = ao(), n = Je();
    function a(i, o, s) {
      if (!n(s))
        return false;
      var u = typeof o;
      return (u == "number" ? t(s) && r(o, s.length) : u == "string" && o in s) ? e2(s[o], i) : false;
    }
    return _i = a, _i;
  }
  function mp() {
    if (Yc) return wi;
    Yc = 1;
    var e2 = Gf(), t = hp(), r = Xf(), n = yp(), a = r(function(i, o) {
      if (i == null)
        return [];
      var s = o.length;
      return s > 1 && n(i, o[0], o[1]) ? o = [] : s > 2 && n(o[0], o[1], o[2]) && (o = [o[0]]), t(i, e2(o, 1), []);
    });
    return wi = a, wi;
  }
  function gp() {
    if (Gc) return Oi;
    Gc = 1;
    var e2 = Hf(), t = Je(), r = "Expected a function";
    function n(a, i, o) {
      var s = true, u = true;
      if (typeof a != "function")
        throw new TypeError(r);
      return t(o) && (s = "leading" in o ? !!o.leading : s, u = "trailing" in o ? !!o.trailing : u), e2(a, i, {
        leading: s,
        maxWait: i,
        trailing: u
      });
    }
    return Oi = n, Oi;
  }
  function bp() {
    if (Xc) return Pi;
    Xc = 1;
    var e2 = il(), t = 0;
    function r(n) {
      var a = ++t;
      return e2(n) + a;
    }
    return Pi = r, Pi;
  }
  function wp() {
    return Jc || (Jc = 1, (function(e2, t) {
      (function(r, n) {
        e2.exports = n(Hf(), ov(), rp(), ap(), op(), up(), cp(), fp(), mp(), gp(), bp(), import_react15.default);
      })(_p, function(r, n, a, i, o, s, u, f5, d3, c, m, b3) {
        return (function() {
          var T7 = { 654: function(_, v5, g5) {
            var h3, p = this && this.__assign || function() {
              return p = Object.assign || function(R8) {
                for (var l, P6 = 1, C4 = arguments.length; P6 < C4; P6++) for (var k4 in l = arguments[P6]) Object.prototype.hasOwnProperty.call(l, k4) && (R8[k4] = l[k4]);
                return R8;
              }, p.apply(this, arguments);
            }, y2 = this && this.__createBinding || (Object.create ? function(R8, l, P6, C4) {
              C4 === void 0 && (C4 = P6);
              var k4 = Object.getOwnPropertyDescriptor(l, P6);
              k4 && !("get" in k4 ? !l.__esModule : k4.writable || k4.configurable) || (k4 = { enumerable: true, get: function() {
                return l[P6];
              } }), Object.defineProperty(R8, C4, k4);
            } : function(R8, l, P6, C4) {
              C4 === void 0 && (C4 = P6), R8[C4] = l[P6];
            }), O6 = this && this.__setModuleDefault || (Object.create ? function(R8, l) {
              Object.defineProperty(R8, "default", { enumerable: true, value: l });
            } : function(R8, l) {
              R8.default = l;
            }), x5 = this && this.__importStar || function(R8) {
              if (R8 && R8.__esModule) return R8;
              var l = {};
              if (R8 != null) for (var P6 in R8) P6 !== "default" && Object.prototype.hasOwnProperty.call(R8, P6) && y2(l, R8, P6);
              return O6(l, R8), l;
            }, L5 = this && this.__spreadArray || function(R8, l, P6) {
              if (P6 || arguments.length === 2) for (var C4, k4 = 0, H = l.length; k4 < H; k4++) !C4 && k4 in l || (C4 || (C4 = Array.prototype.slice.call(l, 0, k4)), C4[k4] = l[k4]);
              return R8.concat(C4 || Array.prototype.slice.call(l));
            }, A7 = this && this.__importDefault || function(R8) {
              return R8 && R8.__esModule ? R8 : { default: R8 };
            };
            Object.defineProperty(v5, "__esModule", { value: true }), v5.updateRtl = v5.doesFocusableExist = v5.getCurrentFocusKey = v5.updateAllLayouts = v5.resume = v5.pause = v5.navigateByDirection = v5.setFocus = v5.setKeyMap = v5.destroy = v5.setThrottle = v5.init = v5.SpatialNavigation = v5.ROOT_FOCUS_KEY = void 0;
            var N4 = A7(g5(150)), I4 = A7(g5(117)), D3 = A7(g5(747)), M3 = A7(g5(23)), E3 = A7(g5(842)), F2 = A7(g5(682)), X = A7(g5(784)), ae = A7(g5(432)), pe = A7(g5(67)), K3 = A7(g5(35)), S3 = A7(g5(119)), q5 = x5(g5(964)), U3 = "left", B6 = "right", W4 = "up", G2 = "down", J3 = "enter", Z2 = ((h3 = {}).left = [37, "ArrowLeft"], h3.up = [38, "ArrowUp"], h3.right = [39, "ArrowRight"], h3.down = [40, "ArrowDown"], h3.enter = [13, "Enter"], h3);
            v5.ROOT_FOCUS_KEY = "SN:ROOT";
            var Q2 = ["#0FF", "#FF0", "#F0F"], ee2 = { leading: true, trailing: false }, j2 = (function() {
              function R8() {
                this.focusableComponents = {}, this.focusKey = null, this.parentsHavingFocusedChild = [], this.domNodeFocusOptions = {}, this.enabled = false, this.nativeMode = false, this.throttle = 0, this.throttleKeypresses = false, this.useGetBoundingClientRect = false, this.shouldFocusDOMNode = false, this.shouldUseNativeEvents = false, this.writingDirection = S3.default.LTR, this.pressedKeys = {}, this.paused = false, this.keyDownEventListener = null, this.keyUpEventListener = null, this.keyMap = Z2, this.pause = this.pause.bind(this), this.resume = this.resume.bind(this), this.setFocus = this.setFocus.bind(this), this.updateAllLayouts = this.updateAllLayouts.bind(this), this.navigateByDirection = this.navigateByDirection.bind(this), this.init = this.init.bind(this), this.setThrottle = this.setThrottle.bind(this), this.destroy = this.destroy.bind(this), this.setKeyMap = this.setKeyMap.bind(this), this.getCurrentFocusKey = this.getCurrentFocusKey.bind(this), this.doesFocusableExist = this.doesFocusableExist.bind(this), this.updateRtl = this.updateRtl.bind(this), this.setFocusDebounced = (0, N4.default)(this.setFocus, 300, { leading: false, trailing: true }), this.debug = false, this.visualDebugger = null, this.logIndex = 0, this.distanceCalculationMethod = "corners";
              }
              return R8.getCutoffCoordinate = function(l, P6, C4, k4, H) {
                var $4 = l ? k4.top : H === S3.default.LTR ? k4.left : k4.right, Y3 = l ? k4.bottom : H === S3.default.LTR ? k4.right : k4.left;
                return P6 ? C4 ? $4 : Y3 : C4 ? Y3 : $4;
              }, R8.getRefCorners = function(l, P6, C4) {
                var k4 = { a: { x: 0, y: 0 }, b: { x: 0, y: 0 } };
                switch (l) {
                  case W4:
                    var H = P6 ? C4.bottom : C4.top;
                    k4.a = { x: C4.left, y: H }, k4.b = { x: C4.right, y: H };
                    break;
                  case G2:
                    H = P6 ? C4.top : C4.bottom, k4.a = { x: C4.left, y: H }, k4.b = { x: C4.right, y: H };
                    break;
                  case U3:
                    var $4 = P6 ? C4.right : C4.left;
                    k4.a = { x: $4, y: C4.top }, k4.b = { x: $4, y: C4.bottom };
                    break;
                  case B6:
                    $4 = P6 ? C4.left : C4.right, k4.a = { x: $4, y: C4.top }, k4.b = { x: $4, y: C4.bottom };
                }
                return k4;
              }, R8.isAdjacentSlice = function(l, P6, C4) {
                var k4 = l.a, H = l.b, $4 = P6.a, Y3 = P6.b, te2 = C4 ? "x" : "y", fe = k4[te2], se = H[te2], oe = $4[te2], ne = Y3[te2], re = 0.2 * (se - fe);
                return Math.max(0, Math.min(se, ne) - Math.max(fe, oe)) >= re;
              }, R8.getPrimaryAxisDistance = function(l, P6, C4) {
                var k4 = l.a, H = P6.a, $4 = C4 ? "y" : "x";
                return Math.abs(H[$4] - k4[$4]);
              }, R8.getSecondaryAxisDistance = function(l, P6, C4, k4, H) {
                if (H) return H(l, P6, C4, k4);
                var $4 = l.a, Y3 = l.b, te2 = P6.a, fe = P6.b, se = C4 ? "x" : "y", oe = $4[se], ne = Y3[se], re = te2[se], _e = fe[se];
                if (k4 === "center") {
                  var ge = (oe + ne) / 2, Oe = (re + _e) / 2;
                  return Math.abs(ge - Oe);
                }
                if (k4 === "edges") {
                  var Fe = Math.min(oe, ne), he = Math.min(re, _e), xe = Math.max(oe, ne), je = Math.max(re, _e), ke = Math.abs(Fe - he), Ee = Math.abs(xe - je);
                  return Math.min(ke, Ee);
                }
                var st = [Math.abs(re - oe), Math.abs(re - ne), Math.abs(_e - oe), Math.abs(_e - ne)];
                return Math.min.apply(Math, st);
              }, R8.prototype.sortSiblingsByPriority = function(l, P6, C4, k4) {
                var H = this, $4 = C4 === G2 || C4 === W4, Y3 = R8.getRefCorners(C4, false, P6);
                return (0, ae.default)(l, function(te2) {
                  var fe = R8.getRefCorners(C4, true, te2.layout), se = R8.isAdjacentSlice(Y3, fe, $4), oe = se ? R8.getPrimaryAxisDistance : R8.getSecondaryAxisDistance, ne = se ? R8.getSecondaryAxisDistance : R8.getPrimaryAxisDistance, re = oe(Y3, fe, $4, H.distanceCalculationMethod, H.customDistanceCalculationFunction), _e = ne(Y3, fe, $4, H.distanceCalculationMethod, H.customDistanceCalculationFunction), ge = 5 * re + _e, Oe = (ge + 1) / (se ? 5 : 1);
                  return H.log("smartNavigate", "distance (primary, secondary, total weighted) for ".concat(te2.focusKey, " relative to ").concat(k4, " is"), re, _e, ge), H.log("smartNavigate", "priority for ".concat(te2.focusKey, " relative to ").concat(k4, " is"), Oe), H.visualDebugger && (H.visualDebugger.drawPoint(fe.a.x, fe.a.y, "yellow", 6), H.visualDebugger.drawPoint(fe.b.x, fe.b.y, "yellow", 6)), Oe;
                });
              }, R8.prototype.init = function(l) {
                var P6 = this, C4 = l === void 0 ? {} : l, k4 = C4.debug, H = k4 !== void 0 && k4, $4 = C4.visualDebug, Y3 = $4 !== void 0 && $4, te2 = C4.nativeMode, fe = te2 !== void 0 && te2, se = C4.throttle, oe = se === void 0 ? 0 : se, ne = C4.throttleKeypresses, re = ne !== void 0 && ne, _e = C4.useGetBoundingClientRect, ge = _e !== void 0 && _e, Oe = C4.shouldFocusDOMNode, Fe = Oe !== void 0 && Oe, he = C4.domNodeFocusOptions, xe = he === void 0 ? {} : he, je = C4.shouldUseNativeEvents, ke = je !== void 0 && je, Ee = C4.rtl, st = Ee !== void 0 && Ee, be = C4.distanceCalculationMethod, Pe = be === void 0 ? "corners" : be, Co = C4.customDistanceCalculationFunction, Hl = Co === void 0 ? void 0 : Co;
                if (!this.enabled && (this.domNodeFocusOptions = xe, this.enabled = true, this.nativeMode = fe, this.throttleKeypresses = re, this.useGetBoundingClientRect = ge, this.shouldFocusDOMNode = Fe && !fe, this.shouldUseNativeEvents = ke, this.writingDirection = st ? S3.default.RTL : S3.default.LTR, this.distanceCalculationMethod = Pe, this.customDistanceCalculationFunction = Hl, this.debug = H, !this.nativeMode && (Number.isInteger(oe) && oe > 0 && (this.throttle = oe), this.bindEventHandlers(), Y3))) {
                  this.visualDebugger = new K3.default(this.writingDirection);
                  var xo = function() {
                    requestAnimationFrame(function() {
                      P6.visualDebugger.clearLayouts(), (0, X.default)(P6.focusableComponents, function(Eo, Bl) {
                        P6.visualDebugger.drawLayout(Eo.layout, Bl, Eo.parentFocusKey);
                      }), xo();
                    });
                  };
                  xo();
                }
              }, R8.prototype.setThrottle = function(l) {
                var P6 = l === void 0 ? {} : l, C4 = P6.throttle, k4 = C4 === void 0 ? 0 : C4, H = P6.throttleKeypresses, $4 = H !== void 0 && H;
                this.throttleKeypresses = $4, this.nativeMode || (this.unbindEventHandlers(), Number.isInteger(k4) && (this.throttle = k4), this.bindEventHandlers());
              }, R8.prototype.destroy = function() {
                this.enabled && (this.enabled = false, this.nativeMode = false, this.throttle = 0, this.throttleKeypresses = false, this.focusKey = null, this.parentsHavingFocusedChild = [], this.focusableComponents = {}, this.paused = false, this.keyMap = Z2, this.unbindEventHandlers());
              }, R8.prototype.getEventType = function(l) {
                return (0, M3.default)(this.getKeyMap(), function(P6) {
                  return P6.includes(l);
                });
              }, R8.getKeyCode = function(l) {
                return l.keyCode || l.code || l.key;
              }, R8.prototype.bindEventHandlers = function() {
                var l = this;
                typeof window < "u" && window.addEventListener && (this.keyDownEventListener = function(P6) {
                  if (l.paused !== true) {
                    l.debug && (l.logIndex += 1);
                    var C4 = R8.getKeyCode(P6), k4 = l.getEventType(C4);
                    if (k4) {
                      l.pressedKeys[k4] = l.pressedKeys[k4] ? l.pressedKeys[k4] + 1 : 1, l.shouldUseNativeEvents || (P6.preventDefault(), P6.stopPropagation());
                      var H = { pressedKeys: l.pressedKeys };
                      if (k4 === J3 && l.focusKey) l.onEnterPress(H);
                      else {
                        var $4 = l.onArrowPress(k4, H) === false;
                        if (l.visualDebugger && l.visualDebugger.clear(), $4) l.log("keyDownEventListener", "default navigation prevented");
                        else {
                          var Y3 = (0, M3.default)(l.getKeyMap(), function(te2) {
                            return te2.includes(C4);
                          });
                          l.smartNavigate(Y3, null, { event: P6 });
                        }
                      }
                    }
                  }
                }, this.throttle && (this.keyDownEventListenerThrottled = (0, pe.default)(this.keyDownEventListener.bind(this), this.throttle, ee2)), this.keyUpEventListener = function(P6) {
                  var C4 = R8.getKeyCode(P6), k4 = l.getEventType(C4);
                  delete l.pressedKeys[k4], l.throttle && !l.throttleKeypresses && l.keyDownEventListenerThrottled.cancel(), k4 === J3 && l.focusKey && l.onEnterRelease(), !l.focusKey || k4 !== U3 && k4 !== B6 && k4 !== W4 && k4 !== G2 || l.onArrowRelease(k4);
                }, window.addEventListener("keyup", this.keyUpEventListener), window.addEventListener("keydown", this.throttle ? this.keyDownEventListenerThrottled : this.keyDownEventListener));
              }, R8.prototype.unbindEventHandlers = function() {
                if (typeof window < "u" && window.removeEventListener) {
                  window.removeEventListener("keyup", this.keyUpEventListener), this.keyUpEventListener = null;
                  var l = this.throttle ? this.keyDownEventListenerThrottled : this.keyDownEventListener;
                  window.removeEventListener("keydown", l), this.keyDownEventListener = null;
                }
              }, R8.prototype.onEnterPress = function(l) {
                var P6 = this.focusableComponents[this.focusKey];
                P6 ? P6.focusable ? P6.onEnterPress && P6.onEnterPress(l) : this.log("onEnterPress", "componentNotFocusable") : this.log("onEnterPress", "noComponent");
              }, R8.prototype.onEnterRelease = function() {
                var l = this.focusableComponents[this.focusKey];
                l ? l.focusable ? l.onEnterRelease && l.onEnterRelease() : this.log("onEnterRelease", "componentNotFocusable") : this.log("onEnterRelease", "noComponent");
              }, R8.prototype.onArrowPress = function(l, P6) {
                var C4 = this.focusableComponents[this.focusKey];
                if (C4) return C4 && C4.onArrowPress && C4.onArrowPress(l, P6);
                this.log("onArrowPress", "noComponent");
              }, R8.prototype.onArrowRelease = function(l) {
                var P6 = this.focusableComponents[this.focusKey];
                P6 ? P6.focusable ? P6.onArrowRelease && P6.onArrowRelease(l) : this.log("onArrowRelease", "componentNotFocusable") : this.log("onArrowRelease", "noComponent");
              }, R8.prototype.navigateByDirection = function(l, P6) {
                if (this.paused !== true && this.enabled && !this.nativeMode) {
                  var C4 = [G2, W4, U3, B6];
                  C4.includes(l) ? (this.log("navigateByDirection", "direction", l), this.smartNavigate(l, null, P6)) : this.log("navigateByDirection", "Invalid direction. You passed: `".concat(l, "`, but you can use only these: "), C4);
                }
              }, R8.prototype.smartNavigate = function(l, P6, C4) {
                var k4 = this;
                if (!this.nativeMode) {
                  var H = l === G2 || l === W4, $4 = l === G2 || (this.writingDirection === S3.default.LTR ? l === B6 : l === U3);
                  this.log("smartNavigate", "direction", l), this.log("smartNavigate", "fromParentFocusKey", P6), this.log("smartNavigate", "this.focusKey", this.focusKey), P6 || (0, X.default)(this.focusableComponents, function(he) {
                    he.layoutUpdated = false;
                  });
                  var Y3 = this.focusableComponents[P6 || this.focusKey];
                  if (P6 || Y3) {
                    if (this.log("smartNavigate", "currentComponent", Y3 ? Y3.focusKey : void 0, Y3 ? Y3.node : void 0, Y3), Y3) {
                      this.updateLayout(Y3.focusKey);
                      var te2 = Y3.parentFocusKey, fe = Y3.focusKey, se = Y3.layout, oe = R8.getCutoffCoordinate(H, $4, false, se, this.writingDirection), ne = (0, D3.default)(this.focusableComponents, function(he) {
                        if (he.parentFocusKey === te2 && he.focusable) {
                          k4.updateLayout(he.focusKey);
                          var xe = R8.getCutoffCoordinate(H, $4, true, he.layout, k4.writingDirection);
                          return H || k4.writingDirection === S3.default.LTR ? $4 ? xe >= oe : xe <= oe : $4 ? xe <= oe : xe >= oe;
                        }
                        return false;
                      });
                      if (this.debug && (this.log("smartNavigate", "currentCutoffCoordinate", oe), this.log("smartNavigate", "siblings", "".concat(ne.length, " elements:"), ne.map(function(he) {
                        return he.focusKey;
                      }).join(", "), ne.map(function(he) {
                        return he.node;
                      }), ne.map(function(he) {
                        return he;
                      }))), this.visualDebugger) {
                        var re = R8.getRefCorners(l, false, se);
                        this.visualDebugger.drawPoint(re.a.x, re.a.y), this.visualDebugger.drawPoint(re.b.x, re.b.y);
                      }
                      var _e = this.sortSiblingsByPriority(ne, se, l, fe), ge = (0, E3.default)(_e);
                      if (this.log("smartNavigate", "nextComponent", ge ? ge.focusKey : void 0, ge ? ge.node : void 0, ge), ge) this.setFocus(ge.focusKey, C4);
                      else {
                        var Oe = this.focusableComponents[te2], Fe = Oe != null && Oe.isFocusBoundary ? Oe.focusBoundaryDirections || [l] : [];
                        Oe && Fe.includes(l) || this.smartNavigate(l, te2, C4);
                      }
                    }
                  } else this.setFocus(this.getForcedFocusKey());
                }
              }, R8.prototype.saveLastFocusedChildKey = function(l, P6) {
                l && (this.log("saveLastFocusedChildKey", "".concat(l.focusKey, " lastFocusedChildKey set"), P6), l.lastFocusedChildKey = P6);
              }, R8.prototype.log = function(l, P6) {
                for (var C4 = [], k4 = 2; k4 < arguments.length; k4++) C4[k4 - 2] = arguments[k4];
                this.debug && console.log.apply(console, L5(["%c".concat(l, "%c").concat(P6), "background: ".concat(Q2[this.logIndex % Q2.length], "; color: black; padding: 1px 5px;"), "background: #333; color: #BADA55; padding: 1px 5px;"], C4, false));
              }, R8.prototype.getCurrentFocusKey = function() {
                return this.focusKey;
              }, R8.prototype.getForcedFocusKey = function() {
                var l, P6 = (0, D3.default)(this.focusableComponents, function(k4) {
                  return k4.focusable && k4.forceFocus;
                }), C4 = this.sortSiblingsByPriority(P6, { x: 0, y: 0, width: 0, height: 0, left: 0, top: 0, right: 0, bottom: 0, node: null }, "down", v5.ROOT_FOCUS_KEY);
                return (l = (0, E3.default)(C4)) === null || l === void 0 ? void 0 : l.focusKey;
              }, R8.prototype.getNextFocusKey = function(l) {
                var P6 = this, C4 = this.focusableComponents[l];
                if (!C4 || this.nativeMode) return l;
                var k4 = (0, D3.default)(this.focusableComponents, function(te2) {
                  return te2.parentFocusKey === l && te2.focusable;
                });
                if (k4.length > 0) {
                  var H = C4.lastFocusedChildKey, $4 = C4.preferredChildFocusKey;
                  if (this.log("getNextFocusKey", "lastFocusedChildKey is", H), this.log("getNextFocusKey", "preferredChildFocusKey is", $4), H && C4.saveLastFocusedChild && this.isParticipatingFocusableComponent(H)) return this.log("getNextFocusKey", "lastFocusedChildKey will be focused", H), this.getNextFocusKey(H);
                  if ($4 && this.isParticipatingFocusableComponent($4)) return this.log("getNextFocusKey", "preferredChildFocusKey will be focused", $4), this.getNextFocusKey($4);
                  k4.forEach(function(te2) {
                    return P6.updateLayout(te2.focusKey);
                  });
                  var Y3 = (function(te2, fe) {
                    var se = fe === S3.default.LTR ? function(ne) {
                      var re = ne.layout;
                      return Math.abs(re.left) + Math.abs(re.top);
                    } : function(ne) {
                      var re = ne.layout;
                      return Math.abs(window.innerWidth - re.right) + Math.abs(re.top);
                    }, oe = (0, ae.default)(te2, se);
                    return (0, E3.default)(oe);
                  })(k4, this.writingDirection).focusKey;
                  return this.log("getNextFocusKey", "childKey will be focused", Y3), this.getNextFocusKey(Y3);
                }
                return this.log("getNextFocusKey", "targetFocusKey", l), l;
              }, R8.prototype.addFocusable = function(l) {
                var P6 = l.focusKey, C4 = l.node, k4 = l.parentFocusKey, H = l.onEnterPress, $4 = l.onEnterRelease, Y3 = l.onArrowPress, te2 = l.onArrowRelease, fe = l.onFocus, se = l.onBlur, oe = l.saveLastFocusedChild, ne = l.trackChildren, re = l.onUpdateFocus, _e = l.onUpdateHasFocusedChild, ge = l.preferredChildFocusKey, Oe = l.autoRestoreFocus, Fe = l.forceFocus, he = l.focusable, xe = l.isFocusBoundary, je = l.focusBoundaryDirections;
                if (this.focusableComponents[P6] = { focusKey: P6, node: C4, parentFocusKey: k4, onEnterPress: H, onEnterRelease: $4, onArrowPress: Y3, onArrowRelease: te2, onFocus: fe, onBlur: se, onUpdateFocus: re, onUpdateHasFocusedChild: _e, saveLastFocusedChild: oe, trackChildren: ne, preferredChildFocusKey: ge, focusable: he, isFocusBoundary: xe, focusBoundaryDirections: je, autoRestoreFocus: Oe, forceFocus: Fe, lastFocusedChildKey: null, layout: { x: 0, y: 0, width: 0, height: 0, left: 0, top: 0, right: 0, bottom: 0, node: C4 }, layoutUpdated: false }, C4 || console.warn('Component added without a node reference. This will result in its coordinates being empty and may cause lost focus. Check the "ref" passed to "useFocusable": ', this.focusableComponents[P6]), !this.nativeMode) {
                  this.updateLayout(P6), this.log("addFocusable", "Component added: ", this.focusableComponents[P6]), P6 === this.focusKey && this.setFocus(ge || P6);
                  for (var ke = this.focusableComponents[this.focusKey]; ke; ) {
                    if (ke.parentFocusKey === P6) {
                      this.updateParentsHasFocusedChild(this.focusKey, {}), this.updateParentsLastFocusedChild(this.focusKey);
                      break;
                    }
                    ke = this.focusableComponents[ke.parentFocusKey];
                  }
                }
              }, R8.prototype.removeFocusable = function(l) {
                var P6 = l.focusKey, C4 = this.focusableComponents[P6];
                if (C4) {
                  var k4 = C4.parentFocusKey;
                  (0, C4.onUpdateFocus)(false), this.log("removeFocusable", "Component removed: ", C4), delete this.focusableComponents[P6];
                  var H = this.parentsHavingFocusedChild.includes(P6);
                  this.parentsHavingFocusedChild = this.parentsHavingFocusedChild.filter(function(te2) {
                    return te2 !== P6;
                  });
                  var $4 = this.focusableComponents[k4], Y3 = P6 === this.focusKey;
                  if ($4 && $4.lastFocusedChildKey === P6 && ($4.lastFocusedChildKey = null), this.nativeMode) return;
                  (Y3 || H) && $4 && $4.autoRestoreFocus && (this.log("removeFocusable", "Component removed: ", Y3 ? "Leaf component" : "Container component", "Auto restoring focus to: ", k4), this.setFocusDebounced(k4));
                }
              }, R8.prototype.getNodeLayoutByFocusKey = function(l) {
                var P6 = this.focusableComponents[l];
                return P6 ? (this.updateLayout(P6.focusKey), P6.layout) : null;
              }, R8.prototype.setCurrentFocusedKey = function(l, P6) {
                var C4, k4, H, $4;
                if (this.isFocusableComponent(this.focusKey) && l !== this.focusKey) {
                  var Y3 = this.focusableComponents[this.focusKey];
                  Y3.onUpdateFocus(false), Y3.onBlur(this.getNodeLayoutByFocusKey(this.focusKey), P6), (k4 = (C4 = Y3.node) === null || C4 === void 0 ? void 0 : C4.removeAttribute) === null || k4 === void 0 || k4.call(C4, "data-focused"), this.log("setCurrentFocusedKey", "onBlur", Y3);
                }
                if (this.focusKey = l, this.isFocusableComponent(this.focusKey)) {
                  var te2 = this.focusableComponents[this.focusKey];
                  this.shouldFocusDOMNode && te2.node && te2.node.focus(this.domNodeFocusOptions), ($4 = (H = te2.node) === null || H === void 0 ? void 0 : H.setAttribute) === null || $4 === void 0 || $4.call(H, "data-focused", "true"), te2.onUpdateFocus(true), te2.onFocus(this.getNodeLayoutByFocusKey(this.focusKey), P6), this.log("setCurrentFocusedKey", "onFocus", te2);
                }
              }, R8.prototype.updateParentsHasFocusedChild = function(l, P6) {
                for (var C4 = this, k4 = [], H = this.focusableComponents[l]; H; ) {
                  var $4 = H.parentFocusKey, Y3 = this.focusableComponents[$4];
                  if (Y3) {
                    var te2 = Y3.focusKey;
                    k4.push(te2);
                  }
                  H = Y3;
                }
                var fe = (0, I4.default)(this.parentsHavingFocusedChild, k4), se = (0, I4.default)(k4, this.parentsHavingFocusedChild);
                (0, F2.default)(fe, function(oe) {
                  var ne = C4.focusableComponents[oe];
                  ne && ne.trackChildren && ne.onUpdateHasFocusedChild(false), C4.onIntermediateNodeBecameBlurred(oe, P6);
                }), (0, F2.default)(se, function(oe) {
                  var ne = C4.focusableComponents[oe];
                  ne && ne.trackChildren && ne.onUpdateHasFocusedChild(true), C4.onIntermediateNodeBecameFocused(oe, P6);
                }), this.parentsHavingFocusedChild = k4;
              }, R8.prototype.updateParentsLastFocusedChild = function(l) {
                for (var P6 = this.focusableComponents[l]; P6; ) {
                  var C4 = P6.parentFocusKey, k4 = this.focusableComponents[C4];
                  k4 && this.saveLastFocusedChildKey(k4, P6.focusKey), P6 = k4;
                }
              }, R8.prototype.getKeyMap = function() {
                return this.keyMap;
              }, R8.prototype.setKeyMap = function(l) {
                this.keyMap = p(p({}, this.getKeyMap()), (function(P6) {
                  var C4 = {};
                  return Object.entries(P6).forEach(function(k4) {
                    var H = k4[0], $4 = k4[1];
                    C4[H] = Array.isArray($4) ? $4 : [$4];
                  }), C4;
                })(l));
              }, R8.prototype.isFocusableComponent = function(l) {
                return !!this.focusableComponents[l];
              }, R8.prototype.isParticipatingFocusableComponent = function(l) {
                return this.isFocusableComponent(l) && this.focusableComponents[l].focusable;
              }, R8.prototype.onIntermediateNodeBecameFocused = function(l, P6) {
                this.isParticipatingFocusableComponent(l) && this.focusableComponents[l].onFocus(this.getNodeLayoutByFocusKey(l), P6);
              }, R8.prototype.onIntermediateNodeBecameBlurred = function(l, P6) {
                this.isParticipatingFocusableComponent(l) && this.focusableComponents[l].onBlur(this.getNodeLayoutByFocusKey(l), P6);
              }, R8.prototype.pause = function() {
                this.paused = true;
              }, R8.prototype.resume = function() {
                this.paused = false;
              }, R8.prototype.setFocus = function(l, P6) {
                if (P6 === void 0 && (P6 = {}), this.setFocusDebounced.cancel(), this.enabled) {
                  this.log("setFocus", "focusKey", l), l && l !== v5.ROOT_FOCUS_KEY || (l = this.getForcedFocusKey());
                  var C4 = this.getNextFocusKey(l);
                  this.log("setFocus", "newFocusKey", C4), this.setCurrentFocusedKey(C4, P6), this.updateParentsHasFocusedChild(C4, P6), this.updateParentsLastFocusedChild(C4);
                }
              }, R8.prototype.updateAllLayouts = function() {
                var l = this;
                this.enabled && !this.nativeMode && (0, X.default)(this.focusableComponents, function(P6, C4) {
                  l.updateLayout(C4);
                });
              }, R8.prototype.updateLayout = function(l) {
                var P6 = this.focusableComponents[l];
                if (P6 && !this.nativeMode && !P6.layoutUpdated) {
                  var C4 = P6.node, k4 = this.useGetBoundingClientRect ? (0, q5.getBoundingClientRect)(C4) : (0, q5.default)(C4);
                  P6.layout = p(p({}, k4), { node: C4 });
                }
              }, R8.prototype.updateFocusable = function(l, P6) {
                var C4 = P6.node, k4 = P6.preferredChildFocusKey, H = P6.focusable, $4 = P6.isFocusBoundary, Y3 = P6.focusBoundaryDirections, te2 = P6.onEnterPress, fe = P6.onEnterRelease, se = P6.onArrowPress, oe = P6.onFocus, ne = P6.onBlur;
                if (!this.nativeMode) {
                  var re = this.focusableComponents[l];
                  re && (re.preferredChildFocusKey = k4, re.focusable = H, re.isFocusBoundary = $4, re.focusBoundaryDirections = Y3, re.onEnterPress = te2, re.onEnterRelease = fe, re.onArrowPress = se, re.onFocus = oe, re.onBlur = ne, C4 && (re.node = C4));
                }
              }, R8.prototype.isNativeMode = function() {
                return this.nativeMode;
              }, R8.prototype.doesFocusableExist = function(l) {
                return !!this.focusableComponents[l];
              }, R8.prototype.updateRtl = function(l) {
                this.writingDirection = l ? S3.default.RTL : S3.default.LTR;
              }, R8;
            })();
            v5.SpatialNavigation = new j2(), v5.init = v5.SpatialNavigation.init, v5.setThrottle = v5.SpatialNavigation.setThrottle, v5.destroy = v5.SpatialNavigation.destroy, v5.setKeyMap = v5.SpatialNavigation.setKeyMap, v5.setFocus = v5.SpatialNavigation.setFocus, v5.navigateByDirection = v5.SpatialNavigation.navigateByDirection, v5.pause = v5.SpatialNavigation.pause, v5.resume = v5.SpatialNavigation.resume, v5.updateAllLayouts = v5.SpatialNavigation.updateAllLayouts, v5.getCurrentFocusKey = v5.SpatialNavigation.getCurrentFocusKey, v5.doesFocusableExist = v5.SpatialNavigation.doesFocusableExist, v5.updateRtl = v5.SpatialNavigation.updateRtl;
          }, 35: function(_, v5, g5) {
            var h3 = this && this.__importDefault || function(A7) {
              return A7 && A7.__esModule ? A7 : { default: A7 };
            };
            Object.defineProperty(v5, "__esModule", { value: true });
            var p = h3(g5(119)), y2 = typeof window < "u" && window.document, O6 = y2 ? window.innerWidth : 0, x5 = y2 ? window.innerHeight : 0, L5 = (function() {
              function A7(N4) {
                y2 && (this.debugCtx = A7.createCanvas("sn-debug", "1010", N4), this.layoutsCtx = A7.createCanvas("sn-layouts", "1000", N4), this.writingDirection = N4);
              }
              return A7.createCanvas = function(N4, I4, D3) {
                var M3 = document.querySelector("#".concat(N4)) || document.createElement("canvas");
                M3.setAttribute("id", N4), M3.setAttribute("dir", D3 === p.default.LTR ? "ltr" : "rtl");
                var E3 = M3.getContext("2d");
                return M3.style.zIndex = I4, M3.style.position = "fixed", M3.style.top = "0", M3.style.left = "0", document.body.appendChild(M3), M3.width = O6, M3.height = x5, E3;
              }, A7.prototype.clear = function() {
                y2 && this.debugCtx.clearRect(0, 0, O6, x5);
              }, A7.prototype.clearLayouts = function() {
                y2 && this.layoutsCtx.clearRect(0, 0, O6, x5);
              }, A7.prototype.drawLayout = function(N4, I4, D3) {
                if (y2) {
                  this.layoutsCtx.strokeStyle = "green", this.layoutsCtx.strokeRect(N4.left, N4.top, N4.width, N4.height), this.layoutsCtx.font = "8px monospace", this.layoutsCtx.fillStyle = "red";
                  var M3 = this.writingDirection === p.default.LTR ? "left" : "right", E3 = N4[M3];
                  this.layoutsCtx.fillText(I4, E3, N4.top + 10), this.layoutsCtx.fillText(D3, E3, N4.top + 25), this.layoutsCtx.fillText("".concat(M3, ": ").concat(E3), E3, N4.top + 40), this.layoutsCtx.fillText("top: ".concat(N4.top), E3, N4.top + 55);
                }
              }, A7.prototype.drawPoint = function(N4, I4, D3, M3) {
                D3 === void 0 && (D3 = "blue"), M3 === void 0 && (M3 = 10), y2 && (this.debugCtx.strokeStyle = D3, this.debugCtx.lineWidth = 3, this.debugCtx.strokeRect(N4 - M3 / 2, I4 - M3 / 2, M3, M3));
              }, A7;
            })();
            v5.default = L5;
          }, 119: function(_, v5) {
            var g5;
            Object.defineProperty(v5, "__esModule", { value: true }), (function(h3) {
              h3[h3.LTR = 0] = "LTR", h3[h3.RTL = 1] = "RTL";
            })(g5 || (g5 = {})), v5.default = g5;
          }, 607: function(_, v5, g5) {
            var h3 = this && this.__createBinding || (Object.create ? function(y2, O6, x5, L5) {
              L5 === void 0 && (L5 = x5);
              var A7 = Object.getOwnPropertyDescriptor(O6, x5);
              A7 && !("get" in A7 ? !O6.__esModule : A7.writable || A7.configurable) || (A7 = { enumerable: true, get: function() {
                return O6[x5];
              } }), Object.defineProperty(y2, L5, A7);
            } : function(y2, O6, x5, L5) {
              L5 === void 0 && (L5 = x5), y2[L5] = O6[x5];
            }), p = this && this.__exportStar || function(y2, O6) {
              for (var x5 in y2) x5 === "default" || Object.prototype.hasOwnProperty.call(O6, x5) || h3(O6, y2, x5);
            };
            Object.defineProperty(v5, "__esModule", { value: true }), p(g5(79), v5), p(g5(445), v5), p(g5(654), v5);
          }, 964: function(_, v5) {
            Object.defineProperty(v5, "__esModule", { value: true }), v5.getBoundingClientRect = void 0;
            var g5 = function(h3) {
              for (var p = h3.offsetParent, y2 = h3.offsetHeight, O6 = h3.offsetWidth, x5 = h3.offsetLeft, L5 = h3.offsetTop; p && p.nodeType === 1; ) x5 += p.offsetLeft - p.scrollLeft, L5 += p.offsetTop - p.scrollTop, p = p.offsetParent;
              return { height: y2, left: x5, top: L5, width: O6 };
            };
            v5.default = function(h3) {
              var p = h3 && h3.parentElement;
              if (h3 && p) {
                var y2 = g5(p), O6 = g5(h3), x5 = O6.height, L5 = O6.left, A7 = O6.top, N4 = O6.width;
                return { x: L5 - y2.left, y: A7 - y2.top, width: N4, height: x5, left: L5, top: A7, get right() {
                  return this.left + this.width;
                }, get bottom() {
                  return this.top + this.height;
                } };
              }
              return { x: 0, y: 0, width: 0, height: 0, left: 0, top: 0, right: 0, bottom: 0 };
            }, v5.getBoundingClientRect = function(h3) {
              if (h3 && h3.getBoundingClientRect) {
                var p = h3.getBoundingClientRect();
                return { x: p.x, y: p.y, width: p.width, height: p.height, left: p.left, top: p.top, get right() {
                  return this.left + this.width;
                }, get bottom() {
                  return this.top + this.height;
                } };
              }
              return { x: 0, y: 0, width: 0, height: 0, left: 0, top: 0, right: 0, bottom: 0 };
            };
          }, 445: function(_, v5, g5) {
            Object.defineProperty(v5, "__esModule", { value: true }), v5.useFocusContext = v5.FocusContext = void 0;
            var h3 = g5(156), p = g5(654);
            v5.FocusContext = (0, h3.createContext)(p.ROOT_FOCUS_KEY), v5.FocusContext.displayName = "FocusContext", v5.useFocusContext = function() {
              return (0, h3.useContext)(v5.FocusContext);
            };
          }, 79: function(_, v5, g5) {
            var h3 = this && this.__importDefault || function(A7) {
              return A7 && A7.__esModule ? A7 : { default: A7 };
            };
            Object.defineProperty(v5, "__esModule", { value: true }), v5.useFocusable = void 0;
            var p = g5(156), y2 = h3(g5(604)), O6 = h3(g5(461)), x5 = g5(654), L5 = g5(445);
            v5.useFocusable = function(A7) {
              var N4 = A7 === void 0 ? {} : A7, I4 = N4.focusable, D3 = I4 === void 0 || I4, M3 = N4.saveLastFocusedChild, E3 = M3 === void 0 || M3, F2 = N4.trackChildren, X = F2 !== void 0 && F2, ae = N4.autoRestoreFocus, pe = ae === void 0 || ae, K3 = N4.forceFocus, S3 = K3 !== void 0 && K3, q5 = N4.isFocusBoundary, U3 = q5 !== void 0 && q5, B6 = N4.focusBoundaryDirections, W4 = N4.focusKey, G2 = N4.preferredChildFocusKey, J3 = N4.onEnterPress, Z2 = J3 === void 0 ? y2.default : J3, Q2 = N4.onEnterRelease, ee2 = Q2 === void 0 ? y2.default : Q2, j2 = N4.onArrowPress, R8 = j2 === void 0 ? function() {
                return true;
              } : j2, l = N4.onArrowRelease, P6 = l === void 0 ? y2.default : l, C4 = N4.onFocus, k4 = C4 === void 0 ? y2.default : C4, H = N4.onBlur, $4 = H === void 0 ? y2.default : H, Y3 = N4.extraProps, te2 = (0, p.useCallback)(function(be) {
                Z2(Y3, be);
              }, [Z2, Y3]), fe = (0, p.useCallback)(function() {
                ee2(Y3);
              }, [ee2, Y3]), se = (0, p.useCallback)(function(be, Pe) {
                return R8(be, Y3, Pe);
              }, [Y3, R8]), oe = (0, p.useCallback)(function(be) {
                P6(be, Y3);
              }, [P6, Y3]), ne = (0, p.useCallback)(function(be, Pe) {
                k4(be, Y3, Pe);
              }, [Y3, k4]), re = (0, p.useCallback)(function(be, Pe) {
                $4(be, Y3, Pe);
              }, [Y3, $4]), _e = (0, p.useRef)(null), ge = (0, p.useState)(false), Oe = ge[0], Fe = ge[1], he = (0, p.useState)(false), xe = he[0], je = he[1], ke = (0, L5.useFocusContext)(), Ee = (0, p.useMemo)(function() {
                return W4 || (0, O6.default)("sn:focusable-item-");
              }, [W4]), st = (0, p.useCallback)(function(be) {
                be === void 0 && (be = {}), x5.SpatialNavigation.setFocus(Ee, be);
              }, [Ee]);
              return (0, p.useEffect)(function() {
                var be = _e.current;
                return x5.SpatialNavigation.addFocusable({ focusKey: Ee, node: be, parentFocusKey: ke, preferredChildFocusKey: G2, onEnterPress: te2, onEnterRelease: fe, onArrowPress: se, onArrowRelease: oe, onFocus: ne, onBlur: re, onUpdateFocus: function(Pe) {
                  return Pe === void 0 && (Pe = false), Fe(Pe);
                }, onUpdateHasFocusedChild: function(Pe) {
                  return Pe === void 0 && (Pe = false), je(Pe);
                }, saveLastFocusedChild: E3, trackChildren: X, isFocusBoundary: U3, focusBoundaryDirections: B6, autoRestoreFocus: pe, forceFocus: S3, focusable: D3 }), function() {
                  x5.SpatialNavigation.removeFocusable({ focusKey: Ee });
                };
              }, []), (0, p.useEffect)(function() {
                var be = _e.current;
                x5.SpatialNavigation.updateFocusable(Ee, { node: be, preferredChildFocusKey: G2, focusable: D3, isFocusBoundary: U3, focusBoundaryDirections: B6, onEnterPress: te2, onEnterRelease: fe, onArrowPress: se, onArrowRelease: oe, onFocus: ne, onBlur: re });
              }, [Ee, G2, D3, U3, B6, te2, fe, se, oe, ne, re]), { ref: _e, focusSelf: st, focused: Oe, hasFocusedChild: xe, focusKey: Ee };
            };
          }, 150: function(_) {
            _.exports = r;
          }, 117: function(_) {
            _.exports = n;
          }, 747: function(_) {
            _.exports = a;
          }, 23: function(_) {
            _.exports = i;
          }, 842: function(_) {
            _.exports = o;
          }, 682: function(_) {
            _.exports = s;
          }, 784: function(_) {
            _.exports = u;
          }, 604: function(_) {
            _.exports = f5;
          }, 432: function(_) {
            _.exports = d3;
          }, 67: function(_) {
            _.exports = c;
          }, 461: function(_) {
            _.exports = m;
          }, 156: function(_) {
            _.exports = b3;
          } }, w2 = {};
          return (function _(v5) {
            var g5 = w2[v5];
            if (g5 !== void 0) return g5.exports;
            var h3 = w2[v5] = { exports: {} };
            return T7[v5].call(h3.exports, h3, h3.exports, _), h3.exports;
          })(607);
        })();
      });
    })(zt)), zt.exports;
  }
  function Sp() {
    if (Qc) return Ci;
    Qc = 1;
    var e2 = import_react15.default;
    function t(c, m) {
      return c === m && (c !== 0 || 1 / c === 1 / m) || c !== c && m !== m;
    }
    var r = typeof Object.is == "function" ? Object.is : t, n = e2.useState, a = e2.useEffect, i = e2.useLayoutEffect, o = e2.useDebugValue;
    function s(c, m) {
      var b3 = m(), T7 = n({ inst: { value: b3, getSnapshot: m } }), w2 = T7[0].inst, _ = T7[1];
      return i(function() {
        w2.value = b3, w2.getSnapshot = m, u(w2) && _({ inst: w2 });
      }, [c, b3, m]), a(function() {
        return u(w2) && _({ inst: w2 }), c(function() {
          u(w2) && _({ inst: w2 });
        });
      }, [c]), o(b3), b3;
    }
    function u(c) {
      var m = c.getSnapshot;
      c = c.value;
      try {
        var b3 = m();
        return !r(c, b3);
      } catch {
        return true;
      }
    }
    function f5(c, m) {
      return m();
    }
    var d3 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? f5 : s;
    return Ci.useSyncExternalStore = e2.useSyncExternalStore !== void 0 ? e2.useSyncExternalStore : d3, Ci;
  }
  function ul() {
    return tf || (tf = 1, true ? It.exports = Sp() : It.exports = Cp()), It.exports;
  }
  function xp() {
    if (rf) return Si;
    rf = 1;
    var e2 = import_react15.default, t = ul();
    function r(f5, d3) {
      return f5 === d3 && (f5 !== 0 || 1 / f5 === 1 / d3) || f5 !== f5 && d3 !== d3;
    }
    var n = typeof Object.is == "function" ? Object.is : r, a = t.useSyncExternalStore, i = e2.useRef, o = e2.useEffect, s = e2.useMemo, u = e2.useDebugValue;
    return Si.useSyncExternalStoreWithSelector = function(f5, d3, c, m, b3) {
      var T7 = i(null);
      if (T7.current === null) {
        var w2 = { hasValue: false, value: null };
        T7.current = w2;
      } else w2 = T7.current;
      T7 = s(function() {
        function v5(O6) {
          if (!g5) {
            if (g5 = true, h3 = O6, O6 = m(O6), b3 !== void 0 && w2.hasValue) {
              var x5 = w2.value;
              if (b3(x5, O6)) return p = x5;
            }
            return p = O6;
          }
          if (x5 = p, n(h3, O6)) return x5;
          var L5 = m(O6);
          return b3 !== void 0 && b3(x5, L5) ? x5 : (h3 = O6, p = L5);
        }
        var g5 = false, h3, p, y2 = c === void 0 ? null : c;
        return [function() {
          return v5(d3());
        }, y2 === null ? void 0 : function() {
          return v5(y2());
        }];
      }, [d3, c, m, b3]);
      var _ = a(f5, T7[0], T7[1]);
      return o(function() {
        w2.hasValue = true, w2.value = _;
      }, [_]), u(_), _;
    }, Si;
  }
  function Ap() {
    return af || (af = 1, true ? kt.exports = xp() : kt.exports = Ep()), kt.exports;
  }
  function Fp(e2, t = Mp, r) {
    (cl ? "production" : void 0) !== "production" && r && !of && (console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
    ), of = true);
    const n = Ip(
      e2.subscribe,
      e2.getState,
      e2.getServerState || e2.getInitialState,
      t,
      r
    );
    return kp(n), n;
  }
  function fl() {
    var e2 = (0, import_react15.useState)(uf), t = e2[0], r = e2[1], n = Kp();
    return (0, import_react15.useEffect)(function() {
      if (!n)
        return;
      function a() {
        var i = uf();
        r(i);
      }
      return window.addEventListener("resize", a), function() {
        return window.removeEventListener("resize", a);
      };
    }, [n]), n ? t : null;
  }
  function uf() {
    return ll() ? window.innerHeight : null;
  }
  function Kp() {
    var e2 = (0, import_react15.useState)(false), t = e2[0], r = e2[1];
    return (0, import_react15.useEffect)(function() {
      ll() && r(true);
    }, []), t;
  }
  function ll() {
    return typeof window < "u" && typeof document < "u";
  }
  function cf(e2, t) {
    var r = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e2);
      t && (n = n.filter(function(a) {
        return Object.getOwnPropertyDescriptor(e2, a).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function z3(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2 ? cf(Object(r), true).forEach(function(n) {
        we(e2, n, r[n]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : cf(Object(r)).forEach(function(n) {
        Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
      });
    }
    return e2;
  }
  function $t(e2) {
    "@babel/helpers - typeof";
    return $t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, $t(e2);
  }
  function Up(e2, t) {
    if (!(e2 instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function zp(e2, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e2, n.key, n);
    }
  }
  function Hp(e2, t, r) {
    return t && zp(e2.prototype, t), Object.defineProperty(e2, "prototype", {
      writable: false
    }), e2;
  }
  function we(e2, t, r) {
    return t in e2 ? Object.defineProperty(e2, t, {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e2[t] = r, e2;
  }
  function lo(e2, t) {
    return $p(e2) || Wp(e2, t) || dl(e2, t) || Gp();
  }
  function Ct(e2) {
    return Bp(e2) || Vp(e2) || dl(e2) || Yp();
  }
  function Bp(e2) {
    if (Array.isArray(e2)) return Li(e2);
  }
  function $p(e2) {
    if (Array.isArray(e2)) return e2;
  }
  function Vp(e2) {
    if (typeof Symbol < "u" && e2[Symbol.iterator] != null || e2["@@iterator"] != null) return Array.from(e2);
  }
  function Wp(e2, t) {
    var r = e2 == null ? null : typeof Symbol < "u" && e2[Symbol.iterator] || e2["@@iterator"];
    if (r != null) {
      var n = [], a = true, i = false, o, s;
      try {
        for (r = r.call(e2); !(a = (o = r.next()).done) && (n.push(o.value), !(t && n.length === t)); a = true)
          ;
      } catch (u) {
        i = true, s = u;
      } finally {
        try {
          !a && r.return != null && r.return();
        } finally {
          if (i) throw s;
        }
      }
      return n;
    }
  }
  function dl(e2, t) {
    if (e2) {
      if (typeof e2 == "string") return Li(e2, t);
      var r = Object.prototype.toString.call(e2).slice(8, -1);
      if (r === "Object" && e2.constructor && (r = e2.constructor.name), r === "Map" || r === "Set") return Array.from(e2);
      if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Li(e2, t);
    }
  }
  function Li(e2, t) {
    (t == null || t > e2.length) && (t = e2.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e2[r];
    return n;
  }
  function Yp() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Gp() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function xt(e2) {
    return new Proxy(e2, {
      get: function(r, n) {
        return n in r ? r[n] : r[de];
      }
    });
  }
  function sh(e2) {
    var t = ve.querySelector("script[" + e2 + "]");
    if (t)
      return t.getAttribute(e2);
  }
  function uh(e2) {
    return e2 === "" ? true : e2 === "false" ? false : e2 === "true" ? true : e2;
  }
  function fh(e2) {
    return vt.push(e2), function() {
      vt.splice(vt.indexOf(e2), 1);
    };
  }
  function lh(e2) {
    if (!(!e2 || !De)) {
      var t = ve.createElement("style");
      t.setAttribute("type", "text/css"), t.innerHTML = e2;
      for (var r = ve.head.childNodes, n = null, a = r.length - 1; a > -1; a--) {
        var i = r[a], o = (i.tagName || "").toUpperCase();
        ["STYLE", "LINK"].indexOf(o) > -1 && (n = i);
      }
      return ve.head.insertBefore(t, n), e2;
    }
  }
  function bt() {
    for (var e2 = 12, t = ""; e2-- > 0; )
      t += dh[Math.random() * 62 | 0];
    return t;
  }
  function ot(e2) {
    for (var t = [], r = (e2 || []).length >>> 0; r--; )
      t[r] = e2[r];
    return t;
  }
  function mo(e2) {
    return e2.classList ? ot(e2.classList) : (e2.getAttribute("class") || "").split(" ").filter(function(t) {
      return t;
    });
  }
  function Pl(e2) {
    return "".concat(e2).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function vh(e2) {
    return Object.keys(e2 || {}).reduce(function(t, r) {
      return t + "".concat(r, '="').concat(Pl(e2[r]), '" ');
    }, "").trim();
  }
  function rr(e2) {
    return Object.keys(e2 || {}).reduce(function(t, r) {
      return t + "".concat(r, ": ").concat(e2[r].trim(), ";");
    }, "");
  }
  function go(e2) {
    return e2.size !== Ie.size || e2.x !== Ie.x || e2.y !== Ie.y || e2.rotate !== Ie.rotate || e2.flipX || e2.flipY;
  }
  function ph(e2) {
    var t = e2.transform, r = e2.containerWidth, n = e2.iconWidth, a = {
      transform: "translate(".concat(r / 2, " 256)")
    }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), u = {
      transform: "".concat(i, " ").concat(o, " ").concat(s)
    }, f5 = {
      transform: "translate(".concat(n / 2 * -1, " -256)")
    };
    return {
      outer: a,
      inner: u,
      path: f5
    };
  }
  function hh(e2) {
    var t = e2.transform, r = e2.width, n = r === void 0 ? qi : r, a = e2.height, i = a === void 0 ? qi : a, o = "";
    return yl ? o += "translate(".concat(t.x / Qe - n / 2, "em, ").concat(t.y / Qe - i / 2, "em) ") : o += "translate(calc(-50% + ".concat(t.x / Qe, "em), calc(-50% + ").concat(t.y / Qe, "em)) "), o += "scale(".concat(t.size / Qe * (t.flipX ? -1 : 1), ", ").concat(t.size / Qe * (t.flipY ? -1 : 1), ") "), o += "rotate(".concat(t.rotate, "deg) "), o;
  }
  function Sl() {
    var e2 = ml, t = gl, r = V4.cssPrefix, n = V4.replacementClass, a = yh;
    if (r !== e2 || n !== t) {
      var i = new RegExp("\\.".concat(e2, "\\-"), "g"), o = new RegExp("\\--".concat(e2, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
      a = a.replace(i, ".".concat(r, "-")).replace(o, "--".concat(r, "-")).replace(s, ".".concat(n));
    }
    return a;
  }
  function Ai() {
    V4.autoAddCss && !hf && (lh(Sl()), hf = true);
  }
  function bh(e2) {
    De && (Vt ? setTimeout(e2, 0) : Cl.push(e2));
  }
  function Et(e2) {
    var t = e2.tag, r = e2.attributes, n = r === void 0 ? {} : r, a = e2.children, i = a === void 0 ? [] : a;
    return typeof e2 == "string" ? Pl(e2) : "<".concat(t, " ").concat(vh(n), ">").concat(i.map(Et).join(""), "</").concat(t, ">");
  }
  function yf(e2, t, r) {
    if (e2 && e2[t] && e2[t][r])
      return {
        prefix: t,
        iconName: r,
        icon: e2[t][r]
      };
  }
  function _h(e2) {
    for (var t = [], r = 0, n = e2.length; r < n; ) {
      var a = e2.charCodeAt(r++);
      if (a >= 55296 && a <= 56319 && r < n) {
        var i = e2.charCodeAt(r++);
        (i & 64512) == 56320 ? t.push(((a & 1023) << 10) + (i & 1023) + 65536) : (t.push(a), r--);
      } else
        t.push(a);
    }
    return t;
  }
  function Di(e2) {
    var t = _h(e2);
    return t.length === 1 ? t[0].toString(16) : null;
  }
  function wh(e2, t) {
    var r = e2.length, n = e2.charCodeAt(t), a;
    return n >= 55296 && n <= 56319 && r > t + 1 && (a = e2.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (n - 55296) * 1024 + a - 56320 + 65536 : n;
  }
  function mf(e2) {
    return Object.keys(e2).reduce(function(t, r) {
      var n = e2[r], a = !!n.icon;
      return a ? t[n.iconName] = n.icon : t[r] = n, t;
    }, {});
  }
  function ji(e2, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = r.skipHooks, a = n === void 0 ? false : n, i = mf(t);
    typeof Re.hooks.addPack == "function" && !a ? Re.hooks.addPack(e2, mf(t)) : Re.styles[e2] = z3(z3({}, Re.styles[e2] || {}), i), e2 === "fas" && ji("fa", t);
  }
  function Ch(e2) {
    return ~oh.indexOf(e2);
  }
  function xh(e2, t) {
    var r = t.split("-"), n = r[0], a = r.slice(1).join("-");
    return n === e2 && a !== "" && !Ch(a) ? a : null;
  }
  function _o(e2, t) {
    return (xl[e2] || {})[t];
  }
  function Eh(e2, t) {
    return (El[e2] || {})[t];
  }
  function Ye(e2, t) {
    return (Rl[e2] || {})[t];
  }
  function Il(e2) {
    return Al[e2] || {
      prefix: null,
      iconName: null
    };
  }
  function Ah(e2) {
    var t = Tl[e2], r = _o("fas", e2);
    return t || (r ? {
      prefix: "fas",
      iconName: r
    } : null) || {
      prefix: null,
      iconName: null
    };
  }
  function He() {
    return bo;
  }
  function nr(e2) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.family, n = r === void 0 ? de : r, a = ht[n][e2], i = yt[n][e2] || yt[n][a], o = e2 in Re.styles ? e2 : null;
    return i || o || null;
  }
  function ar(e2) {
    var t, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.skipLookups, a = n === void 0 ? false : n, i = (t = {}, we(t, de, "".concat(V4.cssPrefix, "-").concat(de)), we(t, ye, "".concat(V4.cssPrefix, "-").concat(ye)), t), o = null, s = de;
    (e2.includes(i[de]) || e2.some(function(f5) {
      return gf[de].includes(f5);
    })) && (s = de), (e2.includes(i[ye]) || e2.some(function(f5) {
      return gf[ye].includes(f5);
    })) && (s = ye);
    var u = e2.reduce(function(f5, d3) {
      var c = xh(V4.cssPrefix, d3);
      if (et[d3] ? (d3 = Ph[s].includes(d3) ? eh[s][d3] : d3, o = d3, f5.prefix = d3) : Sh[s].indexOf(d3) > -1 ? (o = d3, f5.prefix = nr(d3, {
        family: s
      })) : c ? f5.iconName = c : d3 !== V4.replacementClass && d3 !== i[de] && d3 !== i[ye] && f5.rest.push(d3), !a && f5.prefix && f5.iconName) {
        var m = o === "fa" ? Il(f5.iconName) : {}, b3 = Ye(f5.prefix, f5.iconName);
        m.prefix && (o = null), f5.iconName = m.iconName || b3 || f5.iconName, f5.prefix = m.prefix || f5.prefix, f5.prefix === "far" && !et.far && et.fas && !V4.autoFetchSvg && (f5.prefix = "fas");
      }
      return f5;
    }, wo());
    return (e2.includes("fa-brands") || e2.includes("fab")) && (u.prefix = "fab"), (e2.includes("fa-duotone") || e2.includes("fad")) && (u.prefix = "fad"), !u.prefix && s === ye && (et.fass || V4.autoFetchSvg) && (u.prefix = "fass", u.iconName = Ye(u.prefix, u.iconName) || u.iconName), (u.prefix === "fa" || o === "fa") && (u.prefix = He() || "fas"), u;
  }
  function kh(e2, t) {
    var r = t.mixoutsTo;
    return bf = e2, tt = {}, Object.keys(nt).forEach(function(n) {
      Rh.indexOf(n) === -1 && delete nt[n];
    }), bf.forEach(function(n) {
      var a = n.mixout ? n.mixout() : {};
      if (Object.keys(a).forEach(function(o) {
        typeof a[o] == "function" && (r[o] = a[o]), $t(a[o]) === "object" && Object.keys(a[o]).forEach(function(s) {
          r[o] || (r[o] = {}), r[o][s] = a[o][s];
        });
      }), n.hooks) {
        var i = n.hooks();
        Object.keys(i).forEach(function(o) {
          tt[o] || (tt[o] = []), tt[o].push(i[o]);
        });
      }
      n.provides && n.provides(nt);
    }), r;
  }
  function Ki(e2, t) {
    for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
      n[a - 2] = arguments[a];
    var i = tt[e2] || [];
    return i.forEach(function(o) {
      t = o.apply(null, [t].concat(n));
    }), t;
  }
  function Xe(e2) {
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
      r[n - 1] = arguments[n];
    var a = tt[e2] || [];
    a.forEach(function(i) {
      i.apply(null, r);
    });
  }
  function Ne() {
    var e2 = arguments[0], t = Array.prototype.slice.call(arguments, 1);
    return nt[e2] ? nt[e2].apply(null, t) : void 0;
  }
  function Ui(e2) {
    e2.prefix === "fa" && (e2.prefix = "fas");
    var t = e2.iconName, r = e2.prefix || He();
    if (t)
      return t = Ye(r, t) || t, yf(Ml.definitions, r, t) || yf(Re.styles, r, t);
  }
  function ir(e2, t) {
    return Object.defineProperty(e2, "abstract", {
      get: t
    }), Object.defineProperty(e2, "html", {
      get: function() {
        return e2.abstract.map(function(n) {
          return Et(n);
        });
      }
    }), Object.defineProperty(e2, "node", {
      get: function() {
        if (De) {
          var n = ve.createElement("div");
          return n.innerHTML = e2.html, n.children;
        }
      }
    }), e2;
  }
  function qh(e2) {
    var t = e2.children, r = e2.main, n = e2.mask, a = e2.attributes, i = e2.styles, o = e2.transform;
    if (go(o) && r.found && !n.found) {
      var s = r.width, u = r.height, f5 = {
        x: s / u / 2,
        y: 0.5
      };
      a.style = rr(z3(z3({}, i), {}, {
        "transform-origin": "".concat(f5.x + o.x / 16, "em ").concat(f5.y + o.y / 16, "em")
      }));
    }
    return [{
      tag: "svg",
      attributes: a,
      children: t
    }];
  }
  function Nh(e2) {
    var t = e2.prefix, r = e2.iconName, n = e2.children, a = e2.attributes, i = e2.symbol, o = i === true ? "".concat(t, "-").concat(V4.cssPrefix, "-").concat(r) : i;
    return [{
      tag: "svg",
      attributes: {
        style: "display: none;"
      },
      children: [{
        tag: "symbol",
        attributes: z3(z3({}, a), {}, {
          id: o
        }),
        children: n
      }]
    }];
  }
  function Oo(e2) {
    var t = e2.icons, r = t.main, n = t.mask, a = e2.prefix, i = e2.iconName, o = e2.transform, s = e2.symbol, u = e2.title, f5 = e2.maskId, d3 = e2.titleId, c = e2.extra, m = e2.watchable, b3 = m === void 0 ? false : m, T7 = n.found ? n : r, w2 = T7.width, _ = T7.height, v5 = a === "fak", g5 = [V4.replacementClass, i ? "".concat(V4.cssPrefix, "-").concat(i) : ""].filter(function(A7) {
      return c.classes.indexOf(A7) === -1;
    }).filter(function(A7) {
      return A7 !== "" || !!A7;
    }).concat(c.classes).join(" "), h3 = {
      children: [],
      attributes: z3(z3({}, c.attributes), {}, {
        "data-prefix": a,
        "data-icon": i,
        class: g5,
        role: c.attributes.role || "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 ".concat(w2, " ").concat(_)
      })
    }, p = v5 && !~c.classes.indexOf("fa-fw") ? {
      width: "".concat(w2 / _ * 16 * 0.0625, "em")
    } : {};
    b3 && (h3.attributes[Ge] = ""), u && (h3.children.push({
      tag: "title",
      attributes: {
        id: h3.attributes["aria-labelledby"] || "title-".concat(d3 || bt())
      },
      children: [u]
    }), delete h3.attributes.title);
    var y2 = z3(z3({}, h3), {}, {
      prefix: a,
      iconName: i,
      main: r,
      mask: n,
      maskId: f5,
      transform: o,
      symbol: s,
      styles: z3(z3({}, p), c.styles)
    }), O6 = n.found && r.found ? Ne("generateAbstractMask", y2) || {
      children: [],
      attributes: {}
    } : Ne("generateAbstractIcon", y2) || {
      children: [],
      attributes: {}
    }, x5 = O6.children, L5 = O6.attributes;
    return y2.children = x5, y2.attributes = L5, s ? Nh(y2) : qh(y2);
  }
  function _f(e2) {
    var t = e2.content, r = e2.width, n = e2.height, a = e2.transform, i = e2.title, o = e2.extra, s = e2.watchable, u = s === void 0 ? false : s, f5 = z3(z3(z3({}, o.attributes), i ? {
      title: i
    } : {}), {}, {
      class: o.classes.join(" ")
    });
    u && (f5[Ge] = "");
    var d3 = z3({}, o.styles);
    go(a) && (d3.transform = hh({
      transform: a,
      width: r,
      height: n
    }), d3["-webkit-transform"] = d3.transform);
    var c = rr(d3);
    c.length > 0 && (f5.style = c);
    var m = [];
    return m.push({
      tag: "span",
      attributes: f5,
      children: [t]
    }), i && m.push({
      tag: "span",
      attributes: {
        class: "sr-only"
      },
      children: [i]
    }), m;
  }
  function Dh(e2) {
    var t = e2.content, r = e2.title, n = e2.extra, a = z3(z3(z3({}, n.attributes), r ? {
      title: r
    } : {}), {}, {
      class: n.classes.join(" ")
    }), i = rr(n.styles);
    i.length > 0 && (a.style = i);
    var o = [];
    return o.push({
      tag: "span",
      attributes: a,
      children: [t]
    }), r && o.push({
      tag: "span",
      attributes: {
        class: "sr-only"
      },
      children: [r]
    }), o;
  }
  function zi(e2) {
    var t = e2[0], r = e2[1], n = e2.slice(4), a = lo(n, 1), i = a[0], o = null;
    return Array.isArray(i) ? o = {
      tag: "g",
      attributes: {
        class: "".concat(V4.cssPrefix, "-").concat(We.GROUP)
      },
      children: [{
        tag: "path",
        attributes: {
          class: "".concat(V4.cssPrefix, "-").concat(We.SECONDARY),
          fill: "currentColor",
          d: i[0]
        }
      }, {
        tag: "path",
        attributes: {
          class: "".concat(V4.cssPrefix, "-").concat(We.PRIMARY),
          fill: "currentColor",
          d: i[1]
        }
      }]
    } : o = {
      tag: "path",
      attributes: {
        fill: "currentColor",
        d: i
      }
    }, {
      found: true,
      width: t,
      height: r,
      icon: o
    };
  }
  function Kh(e2, t) {
    !bl && !V4.showMissingIcons && e2 && console.error('Icon with name "'.concat(e2, '" and prefix "').concat(t, '" is missing.'));
  }
  function Hi(e2, t) {
    var r = t;
    return t === "fa" && V4.styleDefault !== null && (t = He()), new Promise(function(n, a) {
      if (Ne("missingIconAbstract"), r === "fa") {
        var i = Il(e2) || {};
        e2 = i.iconName || e2, t = i.prefix || t;
      }
      if (e2 && t && Ri[t] && Ri[t][e2]) {
        var o = Ri[t][e2];
        return n(zi(o));
      }
      Kh(e2, t), n(z3(z3({}, jh), {}, {
        icon: V4.showMissingIcons && e2 ? Ne("missingIconAbstract") || {} : {}
      }));
    });
  }
  function Of(e2) {
    var t = e2.getAttribute ? e2.getAttribute(Ge) : null;
    return typeof t == "string";
  }
  function zh(e2) {
    var t = e2.getAttribute ? e2.getAttribute(po) : null, r = e2.getAttribute ? e2.getAttribute(ho) : null;
    return t && r;
  }
  function Hh(e2) {
    return e2 && e2.classList && e2.classList.contains && e2.classList.contains(V4.replacementClass);
  }
  function Bh() {
    if (V4.autoReplaceSvg === true)
      return Bt.replace;
    var e2 = Bt[V4.autoReplaceSvg];
    return e2 || Bt.replace;
  }
  function $h(e2) {
    return ve.createElementNS("http://www.w3.org/2000/svg", e2);
  }
  function Vh(e2) {
    return ve.createElement(e2);
  }
  function Ll(e2) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.ceFn, n = r === void 0 ? e2.tag === "svg" ? $h : Vh : r;
    if (typeof e2 == "string")
      return ve.createTextNode(e2);
    var a = n(e2.tag);
    Object.keys(e2.attributes || []).forEach(function(o) {
      a.setAttribute(o, e2.attributes[o]);
    });
    var i = e2.children || [];
    return i.forEach(function(o) {
      a.appendChild(Ll(o, {
        ceFn: n
      }));
    }), a;
  }
  function Wh(e2) {
    var t = " ".concat(e2.outerHTML, " ");
    return t = "".concat(t, "Font Awesome fontawesome.com "), t;
  }
  function Pf(e2) {
    e2();
  }
  function ql(e2, t) {
    var r = typeof t == "function" ? t : Ht;
    if (e2.length === 0)
      r();
    else {
      var n = Pf;
      V4.mutateApproach === Zp && (n = ze.requestAnimationFrame || Pf), n(function() {
        var a = Bh(), i = Po.begin("mutate");
        e2.map(a), i(), r();
      });
    }
  }
  function Nl() {
    So = true;
  }
  function $i() {
    So = false;
  }
  function Sf(e2) {
    if (vf && V4.observeMutations) {
      var t = e2.treeCallback, r = t === void 0 ? Ht : t, n = e2.nodeCallback, a = n === void 0 ? Ht : n, i = e2.pseudoElementsCallback, o = i === void 0 ? Ht : i, s = e2.observeMutationsRoot, u = s === void 0 ? ve : s;
      Wt = new vf(function(f5) {
        if (!So) {
          var d3 = He();
          ot(f5).forEach(function(c) {
            if (c.type === "childList" && c.addedNodes.length > 0 && !Of(c.addedNodes[0]) && (V4.searchPseudoElements && o(c.target), r(c.target)), c.type === "attributes" && c.target.parentNode && V4.searchPseudoElements && o(c.target.parentNode), c.type === "attributes" && Of(c.target) && ~ih.indexOf(c.attributeName))
              if (c.attributeName === "class" && zh(c.target)) {
                var m = ar(mo(c.target)), b3 = m.prefix, T7 = m.iconName;
                c.target.setAttribute(po, b3 || d3), T7 && c.target.setAttribute(ho, T7);
              } else Hh(c.target) && a(c.target);
          });
        }
      }), De && Wt.observe(u, {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true
      });
    }
  }
  function Yh() {
    Wt && Wt.disconnect();
  }
  function Gh(e2) {
    var t = e2.getAttribute("style"), r = [];
    return t && (r = t.split(";").reduce(function(n, a) {
      var i = a.split(":"), o = i[0], s = i.slice(1);
      return o && s.length > 0 && (n[o] = s.join(":").trim()), n;
    }, {})), r;
  }
  function Xh(e2) {
    var t = e2.getAttribute("data-prefix"), r = e2.getAttribute("data-icon"), n = e2.innerText !== void 0 ? e2.innerText.trim() : "", a = ar(mo(e2));
    return a.prefix || (a.prefix = He()), t && r && (a.prefix = t, a.iconName = r), a.iconName && a.prefix || (a.prefix && n.length > 0 && (a.iconName = Eh(a.prefix, e2.innerText) || _o(a.prefix, Di(e2.innerText))), !a.iconName && V4.autoFetchSvg && e2.firstChild && e2.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e2.firstChild.data)), a;
  }
  function Jh(e2) {
    var t = ot(e2.attributes).reduce(function(a, i) {
      return a.name !== "class" && a.name !== "style" && (a[i.name] = i.value), a;
    }, {}), r = e2.getAttribute("title"), n = e2.getAttribute("data-fa-title-id");
    return V4.autoA11y && (r ? t["aria-labelledby"] = "".concat(V4.replacementClass, "-title-").concat(n || bt()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
  }
  function Zh() {
    return {
      iconName: null,
      title: null,
      titleId: null,
      prefix: null,
      transform: Ie,
      symbol: false,
      mask: {
        iconName: null,
        prefix: null,
        rest: []
      },
      maskId: null,
      extra: {
        classes: [],
        styles: {},
        attributes: {}
      }
    };
  }
  function Cf(e2) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      styleParser: true
    }, r = Xh(e2), n = r.iconName, a = r.prefix, i = r.rest, o = Jh(e2), s = Ki("parseNodeAttributes", {}, e2), u = t.styleParser ? Gh(e2) : [];
    return z3({
      iconName: n,
      title: e2.getAttribute("title"),
      titleId: e2.getAttribute("data-fa-title-id"),
      prefix: a,
      transform: Ie,
      mask: {
        iconName: null,
        prefix: null,
        rest: []
      },
      maskId: null,
      symbol: false,
      extra: {
        classes: i,
        styles: u,
        attributes: o
      }
    }, s);
  }
  function Dl(e2) {
    var t = V4.autoReplaceSvg === "nest" ? Cf(e2, {
      styleParser: false
    }) : Cf(e2);
    return ~t.extra.classes.indexOf(_l) ? Ne("generateLayersText", e2, t) : Ne("generateSvgReplacementMutation", e2, t);
  }
  function xf(e2) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!De) return Promise.resolve();
    var r = ve.documentElement.classList, n = function(c) {
      return r.add("".concat(pf, "-").concat(c));
    }, a = function(c) {
      return r.remove("".concat(pf, "-").concat(c));
    }, i = V4.autoFetchSvg ? Be : yo.map(function(d3) {
      return "fa-".concat(d3);
    }).concat(Object.keys(Qh));
    i.includes("fa") || i.push("fa");
    var o = [".".concat(_l, ":not([").concat(Ge, "])")].concat(i.map(function(d3) {
      return ".".concat(d3, ":not([").concat(Ge, "])");
    })).join(", ");
    if (o.length === 0)
      return Promise.resolve();
    var s = [];
    try {
      s = ot(e2.querySelectorAll(o));
    } catch {
    }
    if (s.length > 0)
      n("pending"), a("complete");
    else
      return Promise.resolve();
    var u = Po.begin("onTree"), f5 = s.reduce(function(d3, c) {
      try {
        var m = Dl(c);
        m && d3.push(m);
      } catch (b3) {
        bl || b3.name === "MissingIcon" && console.error(b3);
      }
      return d3;
    }, []);
    return new Promise(function(d3, c) {
      Promise.all(f5).then(function(m) {
        ql(m, function() {
          n("active"), n("complete"), a("pending"), typeof t == "function" && t(), u(), d3();
        });
      }).catch(function(m) {
        u(), c(m);
      });
    });
  }
  function ey(e2) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    Dl(e2).then(function(r) {
      r && ql([r], t);
    });
  }
  function ty(e2) {
    return function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = (t || {}).icon ? t : Ui(t || {}), a = r.mask;
      return a && (a = (a || {}).icon ? a : Ui(a || {})), e2(n, z3(z3({}, r), {}, {
        mask: a
      }));
    };
  }
  function uy(e2) {
    var t = e2.replace(sy, ""), r = wh(t, 0), n = r >= Ef[0] && r <= Ef[1], a = t.length === 2 ? t[0] === t[1] : false;
    return {
      value: Di(a ? t[0] : t),
      isSecondary: n || a
    };
  }
  function Af(e2, t) {
    var r = "".concat(Jp).concat(t.replace(":", "-"));
    return new Promise(function(n, a) {
      if (e2.getAttribute(r) !== null)
        return n();
      var i = ot(e2.children), o = i.filter(function(x5) {
        return x5.getAttribute(Ni) === t;
      })[0], s = ze.getComputedStyle(e2, t), u = s.getPropertyValue("font-family").match(rh), f5 = s.getPropertyValue("font-weight"), d3 = s.getPropertyValue("content");
      if (o && !u)
        return e2.removeChild(o), n();
      if (u && d3 !== "none" && d3 !== "") {
        var c = s.getPropertyValue("content"), m = ~["Sharp"].indexOf(u[2]) ? ye : de, b3 = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(u[2]) ? yt[m][u[2].toLowerCase()] : nh[m][f5], T7 = uy(c), w2 = T7.value, _ = T7.isSecondary, v5 = u[0].startsWith("FontAwesome"), g5 = _o(b3, w2), h3 = g5;
        if (v5) {
          var p = Ah(w2);
          p.iconName && p.prefix && (g5 = p.iconName, b3 = p.prefix);
        }
        if (g5 && !_ && (!o || o.getAttribute(po) !== b3 || o.getAttribute(ho) !== h3)) {
          e2.setAttribute(r, h3), o && e2.removeChild(o);
          var y2 = Zh(), O6 = y2.extra;
          O6.attributes[Ni] = t, Hi(g5, b3).then(function(x5) {
            var L5 = Oo(z3(z3({}, y2), {}, {
              icons: {
                main: x5,
                mask: wo()
              },
              prefix: b3,
              iconName: h3,
              extra: O6,
              watchable: true
            })), A7 = ve.createElementNS("http://www.w3.org/2000/svg", "svg");
            t === "::before" ? e2.insertBefore(A7, e2.firstChild) : e2.appendChild(A7), A7.outerHTML = L5.map(function(N4) {
              return Et(N4);
            }).join(`
`), e2.removeAttribute(r), n();
          }).catch(a);
        } else
          n();
      } else
        n();
    });
  }
  function cy(e2) {
    return Promise.all([Af(e2, "::before"), Af(e2, "::after")]);
  }
  function fy(e2) {
    return e2.parentNode !== document.head && !~Qp.indexOf(e2.tagName.toUpperCase()) && !e2.getAttribute(Ni) && (!e2.parentNode || e2.parentNode.tagName !== "svg");
  }
  function Tf(e2) {
    if (De)
      return new Promise(function(t, r) {
        var n = ot(e2.querySelectorAll("*")).filter(fy).map(cy), a = Po.begin("searchPseudoElements");
        Nl(), Promise.all(n).then(function() {
          a(), $i(), t();
        }).catch(function() {
          a(), $i(), r();
        });
      });
  }
  function If(e2) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    return e2.attributes && (e2.attributes.fill || t) && (e2.attributes.fill = "black"), e2;
  }
  function py(e2) {
    return e2.tag === "g" ? e2.children : [e2];
  }
  function Mf(e2, t) {
    var r = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e2);
      t && (n = n.filter(function(a) {
        return Object.getOwnPropertyDescriptor(e2, a).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function Ue(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2 ? Mf(Object(r), true).forEach(function(n) {
        rt(e2, n, r[n]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Mf(Object(r)).forEach(function(n) {
        Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
      });
    }
    return e2;
  }
  function Yt(e2) {
    "@babel/helpers - typeof";
    return Yt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, Yt(e2);
  }
  function rt(e2, t, r) {
    return t in e2 ? Object.defineProperty(e2, t, {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e2[t] = r, e2;
  }
  function wy(e2, t) {
    if (e2 == null) return {};
    var r = {}, n = Object.keys(e2), a, i;
    for (i = 0; i < n.length; i++)
      a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e2[a]);
    return r;
  }
  function Oy(e2, t) {
    if (e2 == null) return {};
    var r = wy(e2, t), n, a;
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e2);
      for (a = 0; a < i.length; a++)
        n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e2, n) && (r[n] = e2[n]);
    }
    return r;
  }
  function Wi(e2) {
    return Py(e2) || Sy(e2) || Cy(e2) || xy();
  }
  function Py(e2) {
    if (Array.isArray(e2)) return Yi(e2);
  }
  function Sy(e2) {
    if (typeof Symbol < "u" && e2[Symbol.iterator] != null || e2["@@iterator"] != null) return Array.from(e2);
  }
  function Cy(e2, t) {
    if (e2) {
      if (typeof e2 == "string") return Yi(e2, t);
      var r = Object.prototype.toString.call(e2).slice(8, -1);
      if (r === "Object" && e2.constructor && (r = e2.constructor.name), r === "Map" || r === "Set") return Array.from(e2);
      if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Yi(e2, t);
    }
  }
  function Yi(e2, t) {
    (t == null || t > e2.length) && (t = e2.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e2[r];
    return n;
  }
  function xy() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Ey(e2) {
    var t, r = e2.beat, n = e2.fade, a = e2.beatFade, i = e2.bounce, o = e2.shake, s = e2.flash, u = e2.spin, f5 = e2.spinPulse, d3 = e2.spinReverse, c = e2.pulse, m = e2.fixedWidth, b3 = e2.inverse, T7 = e2.border, w2 = e2.listItem, _ = e2.flip, v5 = e2.size, g5 = e2.rotation, h3 = e2.pull, p = (t = {
      "fa-beat": r,
      "fa-fade": n,
      "fa-beat-fade": a,
      "fa-bounce": i,
      "fa-shake": o,
      "fa-flash": s,
      "fa-spin": u,
      "fa-spin-reverse": d3,
      "fa-spin-pulse": f5,
      "fa-pulse": c,
      "fa-fw": m,
      "fa-inverse": b3,
      "fa-border": T7,
      "fa-li": w2,
      "fa-flip": _ === true,
      "fa-flip-horizontal": _ === "horizontal" || _ === "both",
      "fa-flip-vertical": _ === "vertical" || _ === "both"
    }, rt(t, "fa-".concat(v5), typeof v5 < "u" && v5 !== null), rt(t, "fa-rotate-".concat(g5), typeof g5 < "u" && g5 !== null && g5 !== 0), rt(t, "fa-pull-".concat(h3), typeof h3 < "u" && h3 !== null), rt(t, "fa-swap-opacity", e2.swapOpacity), t);
    return Object.keys(p).map(function(y2) {
      return p[y2] ? y2 : null;
    }).filter(function(y2) {
      return y2;
    });
  }
  function Ay(e2) {
    return e2 = e2 - 0, e2 === e2;
  }
  function jl(e2) {
    return Ay(e2) ? e2 : (e2 = e2.replace(/[\-_\s]+(.)?/g, function(t, r) {
      return r ? r.toUpperCase() : "";
    }), e2.substr(0, 1).toLowerCase() + e2.substr(1));
  }
  function Ry(e2) {
    return e2.charAt(0).toUpperCase() + e2.slice(1);
  }
  function ky(e2) {
    return e2.split(";").map(function(t) {
      return t.trim();
    }).filter(function(t) {
      return t;
    }).reduce(function(t, r) {
      var n = r.indexOf(":"), a = jl(r.slice(0, n)), i = r.slice(n + 1).trim();
      return a.startsWith("webkit") ? t[Ry(a)] = i : t[a] = i, t;
    }, {});
  }
  function Kl(e2, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (typeof t == "string")
      return t;
    var n = (t.children || []).map(function(u) {
      return Kl(e2, u);
    }), a = Object.keys(t.attributes || {}).reduce(function(u, f5) {
      var d3 = t.attributes[f5];
      switch (f5) {
        case "class":
          u.attrs.className = d3, delete t.attributes.class;
          break;
        case "style":
          u.attrs.style = ky(d3);
          break;
        default:
          f5.indexOf("aria-") === 0 || f5.indexOf("data-") === 0 ? u.attrs[f5.toLowerCase()] = d3 : u.attrs[jl(f5)] = d3;
      }
      return u;
    }, {
      attrs: {}
    }), i = r.style, o = i === void 0 ? {} : i, s = Oy(r, Ty);
    return a.attrs.style = Ue(Ue({}, a.attrs.style), o), e2.apply(void 0, [t.tag, Ue(Ue({}, a.attrs), s)].concat(Wi(n)));
  }
  function Iy() {
    if (!Ul && console && typeof console.error == "function") {
      var e2;
      (e2 = console).error.apply(e2, arguments);
    }
  }
  function Ff(e2) {
    if (e2 && Yt(e2) === "object" && e2.prefix && e2.iconName && e2.icon)
      return e2;
    if (Vi.icon)
      return Vi.icon(e2);
    if (e2 === null)
      return null;
    if (e2 && Yt(e2) === "object" && e2.prefix && e2.iconName)
      return e2;
    if (Array.isArray(e2) && e2.length === 2)
      return {
        prefix: e2[0],
        iconName: e2[1]
      };
    if (typeof e2 == "string")
      return {
        prefix: "fas",
        iconName: e2
      };
  }
  function Ii(e2, t) {
    return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? rt({}, e2, t) : {};
  }
  function Zy(e2) {
    const { currentTime: t, duration: r, player: n, handleSkipForward: a, handleSkipBack: i } = e2, o = t / r * 100, s = Math.min(100, o), u = (d3) => {
      const c = d3.currentTarget, b3 = d3.nativeEvent.offsetX / c.offsetWidth;
      n && n.seekTo(b3 * r);
    }, f5 = !n || !r || t >= 86400 || r >= 86400;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        className: pt("progress-bar", {
          hide: f5
        }),
        "data-testid": "progress-bar",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "data-testid": "current-time", className: "time", children: n && Lf(t) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "span",
            {
              className: "bar-wrapper",
              onMouseDown: (d3) => d3.preventDefault(),
              onMouseUp: u,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "bar", children: [
                !f5 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  zl,
                  {
                    style: { left: `${s}%` },
                    className: "progress-bar-button",
                    focusKey: "progress-bar-button",
                    handleArrowPress: (d3) => d3 === "up" || d3 === "down" ? true : (d3 === "left" ? i() : a(), false)
                  },
                  "progress-bar-button"
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "span",
                  {
                    className: "fill",
                    style: { width: `${s}%` }
                  }
                )
              ] })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "data-testid": "duration", className: "time time--duration", children: n && Lf(r) })
        ]
      }
    );
  }
  function zl(e2) {
    const {
      children: t,
      handlePress: r,
      handleRelease: n,
      handleArrowPress: a = () => true,
      focusKey: i,
      className: o,
      style: s,
      disabled: u
    } = e2, { ref: f5, focused: d3, focusSelf: c } = Ve.useFocusable({
      onEnterPress: u ? void 0 : r,
      onEnterRelease: u ? void 0 : n,
      onArrowPress: a
    });
    return (0, import_react15.useEffect)(() => {
      i === "playpause" && c();
    }, [c, i]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        style: s,
        "data-testid": i,
        className: pt(o, { focused: d3, disabled: u }),
        onMouseDown: r,
        onMouseUp: n,
        "focus-key": i,
        ref: f5,
        onMouseEnter: c,
        disabled: u,
        children: t
      }
    );
  }
  function Qy(e2) {
    const t = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/, r = e2.match(t);
    return r ? r[1] : null;
  }
  var import_jsx_runtime, import_react15, $e, sr, Ao, Yl, pt, ur, To, cr, Ro, fr, ko, lr, Io, dr, Mo, Fo, td, rd, vr, Lo, Tt, hr, Ko, br, Bo, $o, _r, Vo, wr, Wo, Or, Yo, Pr, Go, dd, vd, zt, Sr, Xo, Cr, Jo, xr, Zo, Er, Qo, Ar, es, Tr, ts, Rr, rs, kr, ns, Ir, as, Mr, is, Fr, os, Lr, ss, qr, us, Nr, cs, Dr, fs, jr, ls, Kr, ds, Ur, vs, zr, ps, Hr, hs, Br, ys, $r, ms, Vr, gs, Wr, bs, Yr, _s, Gr, ws, Xr, Os, Jr, Ps, Zr, Ss, Qr, Cs, en, xs, tn, Es, rn, As, nn, Ts, an, Rs, on, ks, sn, Is, un, Ms, cn, Fs, fn, Ls, ln, qs, dn, Ns, vn, Ds, pn, js, hn, Ks, yn, Us, mn, zs, gn, Hs, bn, Bs, _n, $s, wn, Vs, On, Ws, Pn, Ys, Sn, Gs, Cn, Xs, xn, Js, En, Zs, An, Qs, Tn, eu, Rn, tu, kn, ru, In, nu, Mn, au, Fn, iu, Ln, ou, qn, su, Nn, uu, Dn, cu, jn, fu, Kn, lu, Un, du, zn, vu, Hn, pu, Bn, hu, $n, yu, Vn, mu, Wn, gu, Yn, bu, Gn, _u, Xn, wu, Jn, Ou, ut, Zn, Pu, Su, Qn, Cu, ea, xu, ct, Eu, ta, Au, ra, Tu, na, Ru, aa, ku, ia, Iu, oa, Mu, sa, Fu, ua, Lu, ca, qu, fa, Nu, la, Du, da, ju, va, Ku, pa, Uu, ha, zu, ya, Hu, ma, Bu, ga, $u, ba, Vu, _a, Wu, wa, Yu, Oa, Gu, Pa, Xu, Sa, Ju, Ca, Zu, xa, Qu, Ea, ec, Aa, tc, Ta, rc, Ra, nc, ka, ac, Ia, ic, Ma, oc, Fa, sc, La, uc, qa, cc, Na, fc, Da, lc, ja, dc, Ka, vc, Ua, pc, za, hc, Ha, yc, Ba, mc, $a, gc, Va, bc, Wa, _c, Ya, wc, Ga, Oc, Xa, Pc, Ja, Sc, Za, Cc, Qa, xc, ei, Ec, ti, Ac, ri, Tc, ni, Rc, ai, kc, ii, Ic, oi, Mc, si, Fc, ui, Lc, ci, qc, fi, Nc, li, Dc, di, jc, vi, Kc, pi, Uc, hi, zc, yi, Hc, mi, Bc, gi, $c, bi, Vc, _i, Wc, wi, Yc, Oi, Gc, Pi, Xc, _p, Jc, Ve, Op, Zc, Pp, kt, Si, It, Ci, Qc, tf, rf, af, Tp, Rp, cl, kp, Ip, of, Mp, Lp, qp, Np, le, lt, Dp, sf, jp, ff, vo, vl, pl, hl, Xp, lf, df, ze, ve, vf, Mt, De, yl, Ft, Lt, qt, Nt, Dt, Le, qi, ml, gl, Ge, Ni, Jp, po, ho, pf, Zp, Qp, bl, de, ye, yo, ht, yt, mt, eh, th, _l, rh, nh, wl, ah, ih, We, gt, oh, dt, ch, Ol, at, V4, vt, Qe, Ie, dh, yh, hf, mh, qe, Re, Cl, gh, Vt, Ti, jt, Kt, Ut, et, Oh, Ph, bo, xl, El, Al, Tl, Rl, Sh, kl, wo, gf, Th, bf, tt, nt, Rh, Ml, Ih, Mh, Fh, Ce, Lh, Ri, jh, wf, Bi, ft, Uh, Fl, Po, Ht, Bt, So, Wt, Qh, Be, ry, ny, ay, iy, oy, sy, Ef, ly, Rf, dy, kf, vy, ki, hy, yy, my, gy, Vi, by, _y, ie, Ty, Ul, At, My, Fy, Ly, qy, Ny, Dy, jy, Ky, Uy, zy, Hy, By, $y, Vy, Wy, Yy, Gy, Xy, Lf, Jy, rm;
  var init_index_r8XrYpcu = __esm({
    "node_modules/react-tv-player/dist/index-r8XrYpcu.js"() {
      import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
      import_react15 = __toESM(require_react(), 1);
      $e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
      sr = { exports: {} };
      Yl = Wl();
      pt = /* @__PURE__ */ Gt(Yl);
      Fo = Number.isNaN || function(t) {
        return typeof t == "number" && t !== t;
      };
      td = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
        __proto__: null,
        default: ed
      }, Symbol.toStringTag, { value: "Module" }));
      rd = /* @__PURE__ */ Vl(td);
      Tt = { exports: {} };
      dd = /* @__PURE__ */ ld();
      vd = /* @__PURE__ */ Gt(dd);
      zt = { exports: {} };
      ut = { exports: {} };
      ut.exports;
      ct = { exports: {} };
      ct.exports;
      _p = zt.exports;
      Ve = wp();
      Op = {};
      Zc = (e2) => {
        let t;
        const r = /* @__PURE__ */ new Set(), n = (d3, c) => {
          const m = typeof d3 == "function" ? d3(t) : d3;
          if (!Object.is(m, t)) {
            const b3 = t;
            t = c ?? (typeof m != "object" || m === null) ? m : Object.assign({}, t, m), r.forEach((T7) => T7(t, b3));
          }
        }, a = () => t, u = { setState: n, getState: a, getInitialState: () => f5, subscribe: (d3) => (r.add(d3), () => r.delete(d3)), destroy: () => {
          (Op ? "production" : void 0) !== "production" && console.warn(
            "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
          ), r.clear();
        } }, f5 = t = e2(n, a, u);
        return u;
      };
      Pp = (e2) => e2 ? Zc(e2) : Zc;
      kt = { exports: {} };
      Si = {};
      It = { exports: {} };
      Ci = {};
      Tp = Ap();
      Rp = /* @__PURE__ */ Gt(Tp);
      cl = {};
      ({ useDebugValue: kp } = import_react15.default);
      ({ useSyncExternalStoreWithSelector: Ip } = Rp);
      of = false;
      Mp = (e2) => e2;
      Lp = (e2) => {
        (cl ? "production" : void 0) !== "production" && typeof e2 != "function" && console.warn(
          "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
        );
        const t = typeof e2 == "function" ? Pp(e2) : e2, r = (n, a) => Fp(t, n, a);
        return Object.assign(r, t), r;
      };
      qp = (e2) => Lp;
      Np = {
        activity: true,
        duration: 0,
        mediaIndex: 0,
        mediaCount: 0,
        progress: {
          playedSeconds: 0
        }
      };
      le = qp()((e2) => ({
        ...Np,
        actions: {
          setActivity: (t) => e2({ activity: t }),
          setCustomToggle: (t) => e2({ customToggle: t }),
          setDuration: (t) => e2({ duration: t }),
          setFullscreen: (t) => e2({ fullscreen: t }),
          setLight: (t) => e2({ light: t }),
          setLikeToggle: (t) => e2({ likeToggle: t }),
          setLoop: (t) => e2({ loop: t }),
          setMediaIndex: (t) => e2({ mediaIndex: t }),
          setMediaCount: (t) => e2({ mediaCount: t }),
          setMuted: (t) => e2({ muted: t }),
          setPlayer: (t) => e2({ player: t }),
          setPlaying: (t) => e2({ playing: t }),
          setProgress: (t) => e2({ progress: { playedSeconds: t } }),
          setSubTitle: (t) => e2({ subTitle: t }),
          setTitle: (t) => e2({ title: t })
        }
      }));
      lt = function() {
        return lt = Object.assign || function(e2) {
          for (var t, r = 1, n = arguments.length; r < n; r++) {
            t = arguments[r];
            for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e2[a] = t[a]);
          }
          return e2;
        }, lt.apply(this, arguments);
      };
      Dp = function(e2, t) {
        var r = {};
        for (var n in e2) Object.prototype.hasOwnProperty.call(e2, n) && t.indexOf(n) < 0 && (r[n] = e2[n]);
        if (e2 != null && typeof Object.getOwnPropertySymbols == "function")
          for (var a = 0, n = Object.getOwnPropertySymbols(e2); a < n.length; a++)
            t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, n[a]) && (r[n[a]] = e2[n[a]]);
        return r;
      };
      sf = false;
      jp = (0, import_react15.forwardRef)(function(e2, t) {
        var r = e2.style, n = Dp(e2, ["style"]), a = fl();
        !sf && (r != null && r.height) && (sf = true, console.warn("<Div100vh /> overrides the height property of the style prop"));
        var i = lt(lt({}, r), { height: a ? a + "px" : "100vh" });
        return import_react15.default.createElement("div", lt({ ref: t, style: i }, n));
      });
      jp.displayName = "Div100vh";
      ff = function() {
      };
      vo = {};
      vl = {};
      pl = null;
      hl = {
        mark: ff,
        measure: ff
      };
      try {
        typeof window < "u" && (vo = window), typeof document < "u" && (vl = document), typeof MutationObserver < "u" && (pl = MutationObserver), typeof performance < "u" && (hl = performance);
      } catch {
      }
      Xp = vo.navigator || {};
      lf = Xp.userAgent;
      df = lf === void 0 ? "" : lf;
      ze = vo;
      ve = vl;
      vf = pl;
      Mt = hl;
      ze.document;
      De = !!ve.documentElement && !!ve.head && typeof ve.addEventListener == "function" && typeof ve.createElement == "function";
      yl = ~df.indexOf("MSIE") || ~df.indexOf("Trident/");
      Le = "___FONT_AWESOME___";
      qi = 16;
      ml = "fa";
      gl = "svg-inline--fa";
      Ge = "data-fa-i2svg";
      Ni = "data-fa-pseudo-element";
      Jp = "data-fa-pseudo-element-pending";
      po = "data-prefix";
      ho = "data-icon";
      pf = "fontawesome-i2svg";
      Zp = "async";
      Qp = ["HTML", "HEAD", "STYLE", "SCRIPT"];
      bl = (function() {
        try {
          return true;
        } catch {
          return false;
        }
      })();
      de = "classic";
      ye = "sharp";
      yo = [de, ye];
      ht = xt((Ft = {}, we(Ft, de, {
        fa: "solid",
        fas: "solid",
        "fa-solid": "solid",
        far: "regular",
        "fa-regular": "regular",
        fal: "light",
        "fa-light": "light",
        fat: "thin",
        "fa-thin": "thin",
        fad: "duotone",
        "fa-duotone": "duotone",
        fab: "brands",
        "fa-brands": "brands",
        fak: "kit",
        fakd: "kit",
        "fa-kit": "kit",
        "fa-kit-duotone": "kit"
      }), we(Ft, ye, {
        fa: "solid",
        fass: "solid",
        "fa-solid": "solid",
        fasr: "regular",
        "fa-regular": "regular",
        fasl: "light",
        "fa-light": "light",
        fast: "thin",
        "fa-thin": "thin"
      }), Ft));
      yt = xt((Lt = {}, we(Lt, de, {
        solid: "fas",
        regular: "far",
        light: "fal",
        thin: "fat",
        duotone: "fad",
        brands: "fab",
        kit: "fak"
      }), we(Lt, ye, {
        solid: "fass",
        regular: "fasr",
        light: "fasl",
        thin: "fast"
      }), Lt));
      mt = xt((qt = {}, we(qt, de, {
        fab: "fa-brands",
        fad: "fa-duotone",
        fak: "fa-kit",
        fal: "fa-light",
        far: "fa-regular",
        fas: "fa-solid",
        fat: "fa-thin"
      }), we(qt, ye, {
        fass: "fa-solid",
        fasr: "fa-regular",
        fasl: "fa-light",
        fast: "fa-thin"
      }), qt));
      eh = xt((Nt = {}, we(Nt, de, {
        "fa-brands": "fab",
        "fa-duotone": "fad",
        "fa-kit": "fak",
        "fa-light": "fal",
        "fa-regular": "far",
        "fa-solid": "fas",
        "fa-thin": "fat"
      }), we(Nt, ye, {
        "fa-solid": "fass",
        "fa-regular": "fasr",
        "fa-light": "fasl",
        "fa-thin": "fast"
      }), Nt));
      th = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/;
      _l = "fa-layers-text";
      rh = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i;
      nh = xt((Dt = {}, we(Dt, de, {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal",
        100: "fat"
      }), we(Dt, ye, {
        900: "fass",
        400: "fasr",
        300: "fasl",
        100: "fast"
      }), Dt));
      wl = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      ah = wl.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
      ih = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"];
      We = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      };
      gt = /* @__PURE__ */ new Set();
      Object.keys(yt[de]).map(gt.add.bind(gt));
      Object.keys(yt[ye]).map(gt.add.bind(gt));
      oh = [].concat(yo, Ct(gt), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", We.GROUP, We.SWAP_OPACITY, We.PRIMARY, We.SECONDARY]).concat(wl.map(function(e2) {
        return "".concat(e2, "x");
      })).concat(ah.map(function(e2) {
        return "w-".concat(e2);
      }));
      dt = ze.FontAwesomeConfig || {};
      if (ve && typeof ve.querySelector == "function") {
        ch = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
        ch.forEach(function(e2) {
          var t = lo(e2, 2), r = t[0], n = t[1], a = uh(sh(r));
          a != null && (dt[n] = a);
        });
      }
      Ol = {
        styleDefault: "solid",
        familyDefault: "classic",
        cssPrefix: ml,
        replacementClass: gl,
        autoReplaceSvg: true,
        autoAddCss: true,
        autoA11y: true,
        searchPseudoElements: false,
        observeMutations: true,
        mutateApproach: "async",
        keepOriginalSource: true,
        measurePerformance: false,
        showMissingIcons: true
      };
      dt.familyPrefix && (dt.cssPrefix = dt.familyPrefix);
      at = z3(z3({}, Ol), dt);
      at.autoReplaceSvg || (at.observeMutations = false);
      V4 = {};
      Object.keys(Ol).forEach(function(e2) {
        Object.defineProperty(V4, e2, {
          enumerable: true,
          set: function(r) {
            at[e2] = r, vt.forEach(function(n) {
              return n(V4);
            });
          },
          get: function() {
            return at[e2];
          }
        });
      });
      Object.defineProperty(V4, "familyPrefix", {
        enumerable: true,
        set: function(t) {
          at.cssPrefix = t, vt.forEach(function(r) {
            return r(V4);
          });
        },
        get: function() {
          return at.cssPrefix;
        }
      });
      ze.FontAwesomeConfig = V4;
      vt = [];
      Qe = qi;
      Ie = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: false,
        flipY: false
      };
      dh = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      yh = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
      hf = false;
      mh = {
        mixout: function() {
          return {
            dom: {
              css: Sl,
              insertCss: Ai
            }
          };
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              Ai();
            },
            beforeI2svg: function() {
              Ai();
            }
          };
        }
      };
      qe = ze || {};
      qe[Le] || (qe[Le] = {});
      qe[Le].styles || (qe[Le].styles = {});
      qe[Le].hooks || (qe[Le].hooks = {});
      qe[Le].shims || (qe[Le].shims = []);
      Re = qe[Le];
      Cl = [];
      gh = function e() {
        ve.removeEventListener("DOMContentLoaded", e), Vt = 1, Cl.map(function(t) {
          return t();
        });
      };
      Vt = false;
      De && (Vt = (ve.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ve.readyState), Vt || ve.addEventListener("DOMContentLoaded", gh));
      Ti = function(t, r, n, a) {
        var i = Object.keys(t), o = i.length, s = r, u, f5, d3;
        for (n === void 0 ? (u = 1, d3 = t[i[0]]) : (u = 0, d3 = n); u < o; u++)
          f5 = i[u], d3 = s(d3, t[f5], f5, t);
        return d3;
      };
      et = Re.styles;
      Oh = Re.shims;
      Ph = (jt = {}, we(jt, de, Object.values(mt[de])), we(jt, ye, Object.values(mt[ye])), jt);
      bo = null;
      xl = {};
      El = {};
      Al = {};
      Tl = {};
      Rl = {};
      Sh = (Kt = {}, we(Kt, de, Object.keys(ht[de])), we(Kt, ye, Object.keys(ht[ye])), Kt);
      kl = function() {
        var t = function(i) {
          return Ti(et, function(o, s, u) {
            return o[u] = Ti(s, i, {}), o;
          }, {});
        };
        xl = t(function(a, i, o) {
          if (i[3] && (a[i[3]] = o), i[2]) {
            var s = i[2].filter(function(u) {
              return typeof u == "number";
            });
            s.forEach(function(u) {
              a[u.toString(16)] = o;
            });
          }
          return a;
        }), El = t(function(a, i, o) {
          if (a[o] = o, i[2]) {
            var s = i[2].filter(function(u) {
              return typeof u == "string";
            });
            s.forEach(function(u) {
              a[u] = o;
            });
          }
          return a;
        }), Rl = t(function(a, i, o) {
          var s = i[2];
          return a[o] = o, s.forEach(function(u) {
            a[u] = o;
          }), a;
        });
        var r = "far" in et || V4.autoFetchSvg, n = Ti(Oh, function(a, i) {
          var o = i[0], s = i[1], u = i[2];
          return s === "far" && !r && (s = "fas"), typeof o == "string" && (a.names[o] = {
            prefix: s,
            iconName: u
          }), typeof o == "number" && (a.unicodes[o.toString(16)] = {
            prefix: s,
            iconName: u
          }), a;
        }, {
          names: {},
          unicodes: {}
        });
        Al = n.names, Tl = n.unicodes, bo = nr(V4.styleDefault, {
          family: V4.familyDefault
        });
      };
      fh(function(e2) {
        bo = nr(e2.styleDefault, {
          family: V4.familyDefault
        });
      });
      kl();
      wo = function() {
        return {
          prefix: null,
          iconName: null,
          rest: []
        };
      };
      gf = (Ut = {}, we(Ut, de, Object.keys(mt[de])), we(Ut, ye, Object.keys(mt[ye])), Ut);
      Th = /* @__PURE__ */ (function() {
        function e2() {
          Up(this, e2), this.definitions = {};
        }
        return Hp(e2, [{
          key: "add",
          value: function() {
            for (var r = this, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
              a[i] = arguments[i];
            var o = a.reduce(this._pullDefinitions, {});
            Object.keys(o).forEach(function(s) {
              r.definitions[s] = z3(z3({}, r.definitions[s] || {}), o[s]), ji(s, o[s]);
              var u = mt[de][s];
              u && ji(u, o[s]), kl();
            });
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {};
          }
        }, {
          key: "_pullDefinitions",
          value: function(r, n) {
            var a = n.prefix && n.iconName && n.icon ? {
              0: n
            } : n;
            return Object.keys(a).map(function(i) {
              var o = a[i], s = o.prefix, u = o.iconName, f5 = o.icon, d3 = f5[2];
              r[s] || (r[s] = {}), d3.length > 0 && d3.forEach(function(c) {
                typeof c == "string" && (r[s][c] = f5);
              }), r[s][u] = f5;
            }), r;
          }
        }]), e2;
      })();
      bf = [];
      tt = {};
      nt = {};
      Rh = Object.keys(nt);
      Ml = new Th();
      Ih = function() {
        V4.autoReplaceSvg = false, V4.observeMutations = false, Xe("noAuto");
      };
      Mh = {
        i2svg: function() {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return De ? (Xe("beforeI2svg", t), Ne("pseudoElements2svg", t), Ne("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
        },
        watch: function() {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.autoReplaceSvgRoot;
          V4.autoReplaceSvg === false && (V4.autoReplaceSvg = true), V4.observeMutations = true, bh(function() {
            Lh({
              autoReplaceSvgRoot: r
            }), Xe("watch", t);
          });
        }
      };
      Fh = {
        icon: function(t) {
          if (t === null)
            return null;
          if ($t(t) === "object" && t.prefix && t.iconName)
            return {
              prefix: t.prefix,
              iconName: Ye(t.prefix, t.iconName) || t.iconName
            };
          if (Array.isArray(t) && t.length === 2) {
            var r = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], n = nr(t[0]);
            return {
              prefix: n,
              iconName: Ye(n, r) || r
            };
          }
          if (typeof t == "string" && (t.indexOf("".concat(V4.cssPrefix, "-")) > -1 || t.match(th))) {
            var a = ar(t.split(" "), {
              skipLookups: true
            });
            return {
              prefix: a.prefix || He(),
              iconName: Ye(a.prefix, a.iconName) || a.iconName
            };
          }
          if (typeof t == "string") {
            var i = He();
            return {
              prefix: i,
              iconName: Ye(i, t) || t
            };
          }
        }
      };
      Ce = {
        noAuto: Ih,
        config: V4,
        dom: Mh,
        parse: Fh,
        library: Ml,
        findIconDefinition: Ui,
        toHtml: Et
      };
      Lh = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.autoReplaceSvgRoot, n = r === void 0 ? ve : r;
        (Object.keys(Re.styles).length > 0 || V4.autoFetchSvg) && De && V4.autoReplaceSvg && Ce.dom.i2svg({
          node: n
        });
      };
      Ri = Re.styles;
      jh = {
        found: false,
        width: 512,
        height: 512
      };
      wf = function() {
      };
      Bi = V4.measurePerformance && Mt && Mt.mark && Mt.measure ? Mt : {
        mark: wf,
        measure: wf
      };
      ft = 'FA "6.5.2"';
      Uh = function(t) {
        return Bi.mark("".concat(ft, " ").concat(t, " begins")), function() {
          return Fl(t);
        };
      };
      Fl = function(t) {
        Bi.mark("".concat(ft, " ").concat(t, " ends")), Bi.measure("".concat(ft, " ").concat(t), "".concat(ft, " ").concat(t, " begins"), "".concat(ft, " ").concat(t, " ends"));
      };
      Po = {
        begin: Uh,
        end: Fl
      };
      Ht = function() {
      };
      Bt = {
        replace: function(t) {
          var r = t[0];
          if (r.parentNode)
            if (t[1].forEach(function(a) {
              r.parentNode.insertBefore(Ll(a), r);
            }), r.getAttribute(Ge) === null && V4.keepOriginalSource) {
              var n = ve.createComment(Wh(r));
              r.parentNode.replaceChild(n, r);
            } else
              r.remove();
        },
        nest: function(t) {
          var r = t[0], n = t[1];
          if (~mo(r).indexOf(V4.replacementClass))
            return Bt.replace(t);
          var a = new RegExp("".concat(V4.cssPrefix, "-.*"));
          if (delete n[0].attributes.id, n[0].attributes.class) {
            var i = n[0].attributes.class.split(" ").reduce(function(s, u) {
              return u === V4.replacementClass || u.match(a) ? s.toSvg.push(u) : s.toNode.push(u), s;
            }, {
              toNode: [],
              toSvg: []
            });
            n[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? r.removeAttribute("class") : r.setAttribute("class", i.toNode.join(" "));
          }
          var o = n.map(function(s) {
            return Et(s);
          }).join(`
`);
          r.setAttribute(Ge, ""), r.innerHTML = o;
        }
      };
      So = false;
      Wt = null;
      Qh = Re.styles;
      Be = /* @__PURE__ */ new Set();
      yo.map(function(e2) {
        Be.add("fa-".concat(e2));
      });
      Object.keys(ht[de]).map(Be.add.bind(Be));
      Object.keys(ht[ye]).map(Be.add.bind(Be));
      Be = Ct(Be);
      ry = function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.transform, a = n === void 0 ? Ie : n, i = r.symbol, o = i === void 0 ? false : i, s = r.mask, u = s === void 0 ? null : s, f5 = r.maskId, d3 = f5 === void 0 ? null : f5, c = r.title, m = c === void 0 ? null : c, b3 = r.titleId, T7 = b3 === void 0 ? null : b3, w2 = r.classes, _ = w2 === void 0 ? [] : w2, v5 = r.attributes, g5 = v5 === void 0 ? {} : v5, h3 = r.styles, p = h3 === void 0 ? {} : h3;
        if (t) {
          var y2 = t.prefix, O6 = t.iconName, x5 = t.icon;
          return ir(z3({
            type: "icon"
          }, t), function() {
            return Xe("beforeDOMElementCreation", {
              iconDefinition: t,
              params: r
            }), V4.autoA11y && (m ? g5["aria-labelledby"] = "".concat(V4.replacementClass, "-title-").concat(T7 || bt()) : (g5["aria-hidden"] = "true", g5.focusable = "false")), Oo({
              icons: {
                main: zi(x5),
                mask: u ? zi(u.icon) : {
                  found: false,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: y2,
              iconName: O6,
              transform: z3(z3({}, Ie), a),
              symbol: o,
              title: m,
              maskId: d3,
              titleId: T7,
              extra: {
                attributes: g5,
                styles: p,
                classes: _
              }
            });
          });
        }
      };
      ny = {
        mixout: function() {
          return {
            icon: ty(ry)
          };
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(r) {
              return r.treeCallback = xf, r.nodeCallback = ey, r;
            }
          };
        },
        provides: function(t) {
          t.i2svg = function(r) {
            var n = r.node, a = n === void 0 ? ve : n, i = r.callback, o = i === void 0 ? function() {
            } : i;
            return xf(a, o);
          }, t.generateSvgReplacementMutation = function(r, n) {
            var a = n.iconName, i = n.title, o = n.titleId, s = n.prefix, u = n.transform, f5 = n.symbol, d3 = n.mask, c = n.maskId, m = n.extra;
            return new Promise(function(b3, T7) {
              Promise.all([Hi(a, s), d3.iconName ? Hi(d3.iconName, d3.prefix) : Promise.resolve({
                found: false,
                width: 512,
                height: 512,
                icon: {}
              })]).then(function(w2) {
                var _ = lo(w2, 2), v5 = _[0], g5 = _[1];
                b3([r, Oo({
                  icons: {
                    main: v5,
                    mask: g5
                  },
                  prefix: s,
                  iconName: a,
                  transform: u,
                  symbol: f5,
                  maskId: c,
                  title: i,
                  titleId: o,
                  extra: m,
                  watchable: true
                })]);
              }).catch(T7);
            });
          }, t.generateAbstractIcon = function(r) {
            var n = r.children, a = r.attributes, i = r.main, o = r.transform, s = r.styles, u = rr(s);
            u.length > 0 && (a.style = u);
            var f5;
            return go(o) && (f5 = Ne("generateAbstractTransformGrouping", {
              main: i,
              transform: o,
              containerWidth: i.width,
              iconWidth: i.width
            })), n.push(f5 || i.icon), {
              children: n,
              attributes: a
            };
          };
        }
      };
      ay = {
        mixout: function() {
          return {
            layer: function(r) {
              var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.classes, i = a === void 0 ? [] : a;
              return ir({
                type: "layer"
              }, function() {
                Xe("beforeDOMElementCreation", {
                  assembler: r,
                  params: n
                });
                var o = [];
                return r(function(s) {
                  Array.isArray(s) ? s.map(function(u) {
                    o = o.concat(u.abstract);
                  }) : o = o.concat(s.abstract);
                }), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(V4.cssPrefix, "-layers")].concat(Ct(i)).join(" ")
                  },
                  children: o
                }];
              });
            }
          };
        }
      };
      iy = {
        mixout: function() {
          return {
            counter: function(r) {
              var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.title, i = a === void 0 ? null : a, o = n.classes, s = o === void 0 ? [] : o, u = n.attributes, f5 = u === void 0 ? {} : u, d3 = n.styles, c = d3 === void 0 ? {} : d3;
              return ir({
                type: "counter",
                content: r
              }, function() {
                return Xe("beforeDOMElementCreation", {
                  content: r,
                  params: n
                }), Dh({
                  content: r.toString(),
                  title: i,
                  extra: {
                    attributes: f5,
                    styles: c,
                    classes: ["".concat(V4.cssPrefix, "-layers-counter")].concat(Ct(s))
                  }
                });
              });
            }
          };
        }
      };
      oy = {
        mixout: function() {
          return {
            text: function(r) {
              var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.transform, i = a === void 0 ? Ie : a, o = n.title, s = o === void 0 ? null : o, u = n.classes, f5 = u === void 0 ? [] : u, d3 = n.attributes, c = d3 === void 0 ? {} : d3, m = n.styles, b3 = m === void 0 ? {} : m;
              return ir({
                type: "text",
                content: r
              }, function() {
                return Xe("beforeDOMElementCreation", {
                  content: r,
                  params: n
                }), _f({
                  content: r,
                  transform: z3(z3({}, Ie), i),
                  title: s,
                  extra: {
                    attributes: c,
                    styles: b3,
                    classes: ["".concat(V4.cssPrefix, "-layers-text")].concat(Ct(f5))
                  }
                });
              });
            }
          };
        },
        provides: function(t) {
          t.generateLayersText = function(r, n) {
            var a = n.title, i = n.transform, o = n.extra, s = null, u = null;
            if (yl) {
              var f5 = parseInt(getComputedStyle(r).fontSize, 10), d3 = r.getBoundingClientRect();
              s = d3.width / f5, u = d3.height / f5;
            }
            return V4.autoA11y && !a && (o.attributes["aria-hidden"] = "true"), Promise.resolve([r, _f({
              content: r.innerHTML,
              width: s,
              height: u,
              transform: i,
              title: a,
              extra: o,
              watchable: true
            })]);
          };
        }
      };
      sy = new RegExp('"', "ug");
      Ef = [1105920, 1112319];
      ly = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(r) {
              return r.pseudoElementsCallback = Tf, r;
            }
          };
        },
        provides: function(t) {
          t.pseudoElements2svg = function(r) {
            var n = r.node, a = n === void 0 ? ve : n;
            V4.searchPseudoElements && Tf(a);
          };
        }
      };
      Rf = false;
      dy = {
        mixout: function() {
          return {
            dom: {
              unwatch: function() {
                Nl(), Rf = true;
              }
            }
          };
        },
        hooks: function() {
          return {
            bootstrap: function() {
              Sf(Ki("mutationObserverCallbacks", {}));
            },
            noAuto: function() {
              Yh();
            },
            watch: function(r) {
              var n = r.observeMutationsRoot;
              Rf ? $i() : Sf(Ki("mutationObserverCallbacks", {
                observeMutationsRoot: n
              }));
            }
          };
        }
      };
      kf = function(t) {
        var r = {
          size: 16,
          x: 0,
          y: 0,
          flipX: false,
          flipY: false,
          rotate: 0
        };
        return t.toLowerCase().split(" ").reduce(function(n, a) {
          var i = a.toLowerCase().split("-"), o = i[0], s = i.slice(1).join("-");
          if (o && s === "h")
            return n.flipX = true, n;
          if (o && s === "v")
            return n.flipY = true, n;
          if (s = parseFloat(s), isNaN(s))
            return n;
          switch (o) {
            case "grow":
              n.size = n.size + s;
              break;
            case "shrink":
              n.size = n.size - s;
              break;
            case "left":
              n.x = n.x - s;
              break;
            case "right":
              n.x = n.x + s;
              break;
            case "up":
              n.y = n.y - s;
              break;
            case "down":
              n.y = n.y + s;
              break;
            case "rotate":
              n.rotate = n.rotate + s;
              break;
          }
          return n;
        }, r);
      };
      vy = {
        mixout: function() {
          return {
            parse: {
              transform: function(r) {
                return kf(r);
              }
            }
          };
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(r, n) {
              var a = n.getAttribute("data-fa-transform");
              return a && (r.transform = kf(a)), r;
            }
          };
        },
        provides: function(t) {
          t.generateAbstractTransformGrouping = function(r) {
            var n = r.main, a = r.transform, i = r.containerWidth, o = r.iconWidth, s = {
              transform: "translate(".concat(i / 2, " 256)")
            }, u = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), f5 = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), d3 = "rotate(".concat(a.rotate, " 0 0)"), c = {
              transform: "".concat(u, " ").concat(f5, " ").concat(d3)
            }, m = {
              transform: "translate(".concat(o / 2 * -1, " -256)")
            }, b3 = {
              outer: s,
              inner: c,
              path: m
            };
            return {
              tag: "g",
              attributes: z3({}, b3.outer),
              children: [{
                tag: "g",
                attributes: z3({}, b3.inner),
                children: [{
                  tag: n.icon.tag,
                  children: n.icon.children,
                  attributes: z3(z3({}, n.icon.attributes), b3.path)
                }]
              }]
            };
          };
        }
      };
      ki = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };
      hy = {
        hooks: function() {
          return {
            parseNodeAttributes: function(r, n) {
              var a = n.getAttribute("data-fa-mask"), i = a ? ar(a.split(" ").map(function(o) {
                return o.trim();
              })) : wo();
              return i.prefix || (i.prefix = He()), r.mask = i, r.maskId = n.getAttribute("data-fa-mask-id"), r;
            }
          };
        },
        provides: function(t) {
          t.generateAbstractMask = function(r) {
            var n = r.children, a = r.attributes, i = r.main, o = r.mask, s = r.maskId, u = r.transform, f5 = i.width, d3 = i.icon, c = o.width, m = o.icon, b3 = ph({
              transform: u,
              containerWidth: c,
              iconWidth: f5
            }), T7 = {
              tag: "rect",
              attributes: z3(z3({}, ki), {}, {
                fill: "white"
              })
            }, w2 = d3.children ? {
              children: d3.children.map(If)
            } : {}, _ = {
              tag: "g",
              attributes: z3({}, b3.inner),
              children: [If(z3({
                tag: d3.tag,
                attributes: z3(z3({}, d3.attributes), b3.path)
              }, w2))]
            }, v5 = {
              tag: "g",
              attributes: z3({}, b3.outer),
              children: [_]
            }, g5 = "mask-".concat(s || bt()), h3 = "clip-".concat(s || bt()), p = {
              tag: "mask",
              attributes: z3(z3({}, ki), {}, {
                id: g5,
                maskUnits: "userSpaceOnUse",
                maskContentUnits: "userSpaceOnUse"
              }),
              children: [T7, v5]
            }, y2 = {
              tag: "defs",
              children: [{
                tag: "clipPath",
                attributes: {
                  id: h3
                },
                children: py(m)
              }, p]
            };
            return n.push(y2, {
              tag: "rect",
              attributes: z3({
                fill: "currentColor",
                "clip-path": "url(#".concat(h3, ")"),
                mask: "url(#".concat(g5, ")")
              }, ki)
            }), {
              children: n,
              attributes: a
            };
          };
        }
      };
      yy = {
        provides: function(t) {
          var r = false;
          ze.matchMedia && (r = ze.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
            var n = [], a = {
              fill: "currentColor"
            }, i = {
              attributeType: "XML",
              repeatCount: "indefinite",
              dur: "2s"
            };
            n.push({
              tag: "path",
              attributes: z3(z3({}, a), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var o = z3(z3({}, i), {}, {
              attributeName: "opacity"
            }), s = {
              tag: "circle",
              attributes: z3(z3({}, a), {}, {
                cx: "256",
                cy: "364",
                r: "28"
              }),
              children: []
            };
            return r || s.children.push({
              tag: "animate",
              attributes: z3(z3({}, i), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: z3(z3({}, o), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), n.push(s), n.push({
              tag: "path",
              attributes: z3(z3({}, a), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: r ? [] : [{
                tag: "animate",
                attributes: z3(z3({}, o), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), r || n.push({
              tag: "path",
              attributes: z3(z3({}, a), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: z3(z3({}, o), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: n
            };
          };
        }
      };
      my = {
        hooks: function() {
          return {
            parseNodeAttributes: function(r, n) {
              var a = n.getAttribute("data-fa-symbol"), i = a === null ? false : a === "" ? true : a;
              return r.symbol = i, r;
            }
          };
        }
      };
      gy = [mh, ny, ay, iy, oy, ly, dy, vy, hy, yy, my];
      kh(gy, {
        mixoutsTo: Ce
      });
      Ce.noAuto;
      Ce.config;
      Ce.library;
      Ce.dom;
      Vi = Ce.parse;
      Ce.findIconDefinition;
      Ce.toHtml;
      by = Ce.icon;
      Ce.layer;
      Ce.text;
      Ce.counter;
      _y = /* @__PURE__ */ Kf();
      ie = /* @__PURE__ */ Gt(_y);
      Ty = ["style"];
      Ul = false;
      try {
        Ul = true;
      } catch {
      }
      At = /* @__PURE__ */ import_react15.default.forwardRef(function(e2, t) {
        var r = e2.icon, n = e2.mask, a = e2.symbol, i = e2.className, o = e2.title, s = e2.titleId, u = e2.maskId, f5 = Ff(r), d3 = Ii("classes", [].concat(Wi(Ey(e2)), Wi(i.split(" ")))), c = Ii("transform", typeof e2.transform == "string" ? Vi.transform(e2.transform) : e2.transform), m = Ii("mask", Ff(n)), b3 = by(f5, Ue(Ue(Ue(Ue({}, d3), c), m), {}, {
          symbol: a,
          title: o,
          titleId: s,
          maskId: u
        }));
        if (!b3)
          return Iy("Could not find icon", f5), null;
        var T7 = b3.abstract, w2 = {
          ref: t
        };
        return Object.keys(e2).forEach(function(_) {
          At.defaultProps.hasOwnProperty(_) || (w2[_] = e2[_]);
        }), My(T7[0], w2);
      });
      At.displayName = "FontAwesomeIcon";
      At.propTypes = {
        beat: ie.bool,
        border: ie.bool,
        beatFade: ie.bool,
        bounce: ie.bool,
        className: ie.string,
        fade: ie.bool,
        flash: ie.bool,
        mask: ie.oneOfType([ie.object, ie.array, ie.string]),
        maskId: ie.string,
        fixedWidth: ie.bool,
        inverse: ie.bool,
        flip: ie.oneOf([true, false, "horizontal", "vertical", "both"]),
        icon: ie.oneOfType([ie.object, ie.array, ie.string]),
        listItem: ie.bool,
        pull: ie.oneOf(["right", "left"]),
        pulse: ie.bool,
        rotation: ie.oneOf([0, 90, 180, 270]),
        shake: ie.bool,
        size: ie.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
        spin: ie.bool,
        spinPulse: ie.bool,
        spinReverse: ie.bool,
        symbol: ie.oneOfType([ie.bool, ie.string]),
        title: ie.string,
        titleId: ie.string,
        transform: ie.oneOfType([ie.string, ie.object]),
        swapOpacity: ie.bool
      };
      At.defaultProps = {
        border: false,
        className: "",
        mask: null,
        maskId: null,
        fixedWidth: false,
        inverse: false,
        flip: false,
        icon: null,
        listItem: false,
        pull: null,
        pulse: false,
        rotation: null,
        size: null,
        spin: false,
        spinPulse: false,
        spinReverse: false,
        beat: false,
        fade: false,
        beatFade: false,
        bounce: false,
        shake: false,
        symbol: false,
        title: "",
        titleId: null,
        transform: null,
        swapOpacity: false
      };
      My = Kl.bind(null, import_react15.default.createElement);
      Fy = {
        prefix: "fas",
        iconName: "forward-step",
        icon: [320, 512, ["step-forward"], "f051", "M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z"]
      };
      Ly = {
        prefix: "fas",
        iconName: "backward",
        icon: [512, 512, [9194], "f04a", "M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"]
      };
      qy = {
        prefix: "fas",
        iconName: "compress",
        icon: [448, 512, [], "f066", "M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"]
      };
      Ny = {
        prefix: "fas",
        iconName: "repeat",
        icon: [512, 512, [128257], "f363", "M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z"]
      };
      Dy = {
        prefix: "fas",
        iconName: "pause",
        icon: [320, 512, [9208], "f04c", "M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"]
      };
      jy = {
        prefix: "fas",
        iconName: "heart",
        icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]
      };
      Ky = {
        prefix: "fas",
        iconName: "volume-high",
        icon: [640, 512, [128266, "volume-up"], "f028", "M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"]
      };
      Uy = {
        prefix: "fas",
        iconName: "backward-step",
        icon: [320, 512, ["step-backward"], "f048", "M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z"]
      };
      zy = {
        prefix: "fas",
        iconName: "forward",
        icon: [512, 512, [9193], "f04e", "M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"]
      };
      Hy = {
        prefix: "fas",
        iconName: "ellipsis",
        icon: [448, 512, ["ellipsis-h"], "f141", "M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"]
      };
      By = {
        prefix: "fas",
        iconName: "play",
        icon: [384, 512, [9654], "f04b", "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]
      };
      $y = {
        prefix: "fas",
        iconName: "volume-xmark",
        icon: [576, 512, ["volume-mute", "volume-times"], "f6a9", "M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]
      };
      Vy = $y;
      Wy = {
        prefix: "fas",
        iconName: "expand",
        icon: [448, 512, [], "f065", "M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"]
      };
      Yy = {
        prefix: "far",
        iconName: "heart",
        icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"]
      };
      Gy = 4e3;
      Xy = () => {
        const e2 = (0, import_react15.useRef)(null), t = le((s) => s.actions), r = le((s) => s.activity), n = le((s) => s.playing), a = (0, import_react15.useCallback)(
          (s) => {
            e2.current && clearTimeout(e2.current), !(!s || !n) && (e2.current = window.setTimeout(() => {
              t.setActivity(false);
            }, Gy));
          },
          [t, n]
        ), i = (0, import_react15.useCallback)(
          (s) => {
            t.setActivity(true), a(r), !r && s.stopPropagation();
          },
          [r, t, a]
        ), o = (0, import_react15.useCallback)(() => {
          n && r && t.setActivity(false);
        }, [n, r, t]);
        (0, import_react15.useEffect)(() => {
          a(r);
        }, [r, a]), (0, import_react15.useEffect)(() => (document.addEventListener("click", i), document.addEventListener("mousemove", i), document.addEventListener("keydown", i), document.addEventListener("mouseleave", o), () => {
          document.removeEventListener("click", i), document.removeEventListener("mousemove", i), document.removeEventListener("keydown", i), document.removeEventListener("mouseleave", o);
        }), [i, o]);
      };
      Lf = (e2) => {
        if (isNaN(e2))
          return;
        let t = e2;
        const r = Math.floor(t / 3600);
        t %= 3600;
        let n = String(Math.floor(t / 60)), a = String(Math.floor(t % 60));
        return a = a.padStart(2, "0"), r > 0 ? (n = n.padStart(2, "0"), `${r}:${n}:${a}`) : `${n}:${a}`;
      };
      Jy = (e2) => {
        const {
          onLoopPress: t,
          onLikePress: r,
          onPreviousPress: n,
          onSkipBackPress: a,
          onSkipForwardPress: i,
          onSkipReleasePress: o,
          onNextPress: s,
          onMutePress: u,
          onFullscreenPress: f5,
          withTopCover: d3,
          customButtons: c,
          disableFullscreen: m,
          hideControlsOnArrowUp: b3
        } = e2, { focusKey: T7, ref: w2 } = Ve.useFocusable();
        Xy();
        const _ = fl(), v5 = le((j2) => j2.actions), g5 = le((j2) => j2.activity), h3 = le((j2) => j2.duration), p = le((j2) => j2.fullscreen), y2 = le((j2) => j2.light), O6 = le((j2) => j2.likeToggle), x5 = le((j2) => j2.loop), L5 = le((j2) => j2.mediaIndex) || 0, A7 = le((j2) => j2.mediaCount), N4 = le((j2) => j2.muted), I4 = le((j2) => j2.player), D3 = le((j2) => j2.playing), M3 = le((j2) => j2.progress), E3 = le((j2) => j2.subTitle), F2 = le((j2) => j2.title), X = Math.max(1, Number(window.__HAK_SEEK_SECONDS__ || 10) || 10), ae = A7 && A7 > 1, pe = c !== null && c || [
          { action: "loop", align: "left" },
          { action: ae ? "previous" : "skipback" },
          { action: "playpause" },
          { action: ae ? "next" : "skipforward" },
          { action: m ? "fullscreen" : "mute", align: "right" }
        ], K3 = () => {
          v5.setLoop(!x5), t == null || t();
        }, S3 = () => {
          v5.setPlaying(!D3), v5.setLight(false);
        }, q5 = () => {
          v5.setMuted(!N4), u == null || u();
        }, U3 = () => {
          v5.setFullscreen(!p), f5 == null || f5();
        }, B6 = () => {
          L5 && L5 > 0 && v5.setMediaIndex(L5 - 1), n == null || n();
        }, W4 = () => {
          I4 && I4.seekTo(I4.getCurrentTime() - X), a == null || a();
        }, G2 = () => {
          I4 && I4.seekTo(I4.getCurrentTime() + X), i == null || i();
        }, J3 = () => {
          A7 && L5 < A7 - 1 && v5.setMediaIndex(L5 + 1), s == null || s();
        }, Z2 = () => {
          !D3 && S3(), o == null || o();
        }, Q2 = {
          loop: {
            action: "loop",
            label: x5 ? "Looping" : "Loop",
            onPress: K3,
            faIcon: Ny,
            isSelectedFill: x5
          },
          like: {
            action: "like",
            label: O6 ? "Liked" : "Like",
            onPress: r,
            faIcon: O6 ? jy : Yy
          },
          previous: {
            action: "previous",
            label: "Previous",
            onPress: B6,
            faIcon: Uy,
            disabled: L5 === 0
          },
          skipback: {
            action: "skipback",
            label: "Skip Back",
            onPress: W4,
            onRelease: Z2,
            faIcon: Ly
          },
          playpause: {
            action: "playpause",
            label: D3 ? "Pause" : "Play",
            onPress: S3,
            faIcon: D3 ? Dy : By
          },
          skipforward: {
            action: "skipforward",
            label: "Skip Forward",
            onPress: G2,
            onRelease: Z2,
            faIcon: zy
          },
          next: {
            action: "next",
            label: "Next",
            onPress: J3,
            faIcon: Fy,
            disabled: A7 ? L5 === A7 - 1 : false
          },
          mute: {
            action: "mute",
            label: N4 ? "Muted" : "Mute",
            onPress: q5,
            faIcon: N4 ? Vy : Ky
          },
          fullscreen: {
            action: "fullscreen",
            label: p ? "Minimise" : "Fullscreen",
            onPress: U3,
            faIcon: p ? qy : Wy
          },
          custom: {
            action: "custom",
            label: "Custom"
          }
        }, ee2 = (j2) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: pe.map((R8, l) => {
          if (R8.align === j2 || !R8.align && j2 === "center")
            return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              zl,
              {
                className: pt({
                  "selected-fill": R8.isSelectedFill || Q2[R8.action].isSelectedFill
                }),
                focusKey: R8.action,
                handlePress: R8.onPress || Q2[R8.action].onPress || void 0,
                handleRelease: R8.onRelease || Q2[R8.action].onRelease || void 0,
                disabled: R8.disabled || Q2[R8.action].disabled,
                handleArrowPress: (P6) => (b3 && P6 === "up" && v5.setActivity(false), true),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    At,
                    {
                      icon: R8.faIcon || Q2[R8.action].faIcon || Hy
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: R8.label || Q2[R8.action].label })
                ]
              },
              l
            );
        }) });
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            className: "tv-player-ui",
            "data-testid": "tv-player-ui",
            style: {
              width: p ? "100%" : e2.width || "100%",
              height: p ? _ || "100%" : e2.height || "350px"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "div",
                {
                  className: pt("tv-player-ui__cover", {
                    hide: !g5,
                    "with-top-cover": d3 || !y2,
                    "light-cover": y2 && !D3
                  })
                }
              ),
              g5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "metadata-wrapper", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "metadata metadata--title", children: F2 }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "metadata metadata--subTitle", children: E3 })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ve.FocusContext.Provider, { value: T7, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "buttons", ref: w2, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "buttons__left", children: ee2("left") }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "buttons__center", children: ee2("center") }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "buttons__right", children: ee2("right") })
                ] }) }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  Zy,
                  {
                    currentTime: M3.playedSeconds,
                    duration: h3,
                    player: I4,
                    handleSkipForward: G2,
                    handleSkipBack: W4
                  }
                )
              ] })
            ]
          }
        );
      };
      rm = (e2) => {
        !e2.disableInitNav && Ve.init({
          debug: false,
          visualDebug: false,
          throttle: 100
          // options
        });
        const { onReady: t, onStart: r, onPause: n, onPlay: a, onError: i, onEnded: o, onBuffer: s } = e2, u = (0, import_react15.useRef)(null), f5 = (0, import_react15.useRef)(null), [d3, c] = (0, import_react15.useState)(true), m = le((F2) => F2.actions), b3 = le((F2) => F2.light), T7 = le((F2) => F2.loop), w2 = le((F2) => F2.muted), _ = le((F2) => F2.playing), v5 = le((F2) => F2.activity), g5 = le((F2) => F2.fullscreen), h3 = typeof e2.url == "string" && Qy(e2.url), p = e2.withTopCover || !!h3, y2 = async (F2) => {
          const ae = await (await fetch(`https://noembed.com/embed?url=${F2}`)).json();
          !e2.title && ae.title && m.setTitle(ae.title), !e2.subTitle && ae.author_name && m.setSubTitle(ae.author_name), ae.error && h3 && m.setLight(false), f5.current && h3 && e2.light && (f5.current.src = typeof e2.light == "string" ? e2.light : `https://img.youtube.com/vi/${h3}/maxresdefault.jpg`);
        };
        (0, import_react15.useEffect)(() => (e2.disableNav ? Ve.pause() : Ve.resume(), () => Ve.resume()), [e2.disableNav]), (0, import_react15.useEffect)(() => {
          m.setLight(e2.light), typeof e2.url == "string" ? y2(e2.url) : m.setLight(false), m.setProgress(0), m.setDuration(0);
        }, [e2.url, e2.light]), (0, import_react15.useEffect)(() => {
          m.setPlaying(e2.playing), e2.playing && m.setLight(false);
        }, [e2.playing]), (0, import_react15.useEffect)(() => m.setTitle(e2.title), [e2.title]), (0, import_react15.useEffect)(() => m.setSubTitle(e2.subTitle), [e2.subTitle]), (0, import_react15.useEffect)(() => {
          m.setFullscreen(!e2.disableFullscreen);
        }, [e2.disableFullscreen]), (0, import_react15.useEffect)(() => m.setLoop(e2.loop), [e2.loop]), (0, import_react15.useEffect)(() => m.setMuted(e2.muted), [e2.muted]), (0, import_react15.useEffect)(() => m.setMediaCount(e2.mediaCount), [e2.mediaCount]), (0, import_react15.useEffect)(() => {
          setTimeout(() => m.setMediaIndex(e2.mediaIndex));
        }, [e2.mediaIndex]);
        const O6 = () => {
          m.setPlaying(true), m.setLight(false);
        }, x5 = () => {
          m.setPlaying(false), n == null || n();
        }, L5 = () => {
          m.setPlaying(true), m.setLight(false), a == null || a();
        }, A7 = (F2) => {
          m.setPlayer(F2), t == null || t(F2);
        }, N4 = (F2, X, ae, pe) => {
          i == null || i(F2, X, ae, pe);
        }, I4 = () => {
          m.setPlaying(false), m.setActivity(true), o == null || o();
        }, D3 = (F2) => {
          m.setProgress(F2.playedSeconds);
        }, M3 = (F2) => {
          m.setDuration(F2);
        }, E3 = () => {
          f5.current && (typeof e2.light == "boolean" && f5.current.naturalWidth >= 1280 || typeof e2.light == "string" ? c(false) : c(true));
        };
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            className: "tv-player",
            "data-testid": "tv-player",
            style: { height: g5 ? "100vh" : "unset", ...e2.style },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                vd,
                {
                  "data-testid": "react-player",
                  ref: u,
                  url: e2.url,
                  width: g5 ? "100%" : e2.width || "100%",
                  height: g5 ? "100%" : e2.height || "350px",
                  light: !_ && b3,
                  controls: e2.controls,
                  playIcon: e2.playIcon || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {}),
                  loop: T7,
                  muted: w2,
                  playing: _,
                  playbackRate: e2.playbackRate,
                  progressInterval: v5 ? 200 : e2.progressInterval,
                  playsinline: e2.playsinline,
                  volume: e2.volume,
                  onPlay: L5,
                  onReady: A7,
                  onStart: () => r == null ? void 0 : r(),
                  onBuffer: () => s == null ? void 0 : s(),
                  onEnded: I4,
                  onPause: x5,
                  onDuration: M3,
                  onProgress: D3,
                  onClickPreview: O6,
                  onError: N4,
                  config: e2.config || {
                    file: {
                      attributes: {
                        style: {
                          width: "100%",
                          height: "100%",
                          objectFit: "contain"
                        }
                      }
                    }
                  }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "img",
                {
                  ref: f5,
                  onError: () => c(true),
                  onLoad: E3,
                  alt: "",
                  style: {
                    width: g5 ? "100%" : e2.width || "100%",
                    height: g5 ? "100%" : e2.height || "350px"
                  },
                  className: pt("yt-preview", {
                    show: !d3 && b3 && h3 && !_
                  })
                }
              ),
              !e2.controls && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Jy, { withTopCover: p, ...e2 })
            ]
          }
        );
      };
    }
  });

  // src/player-app.jsx
  var import_react16 = __toESM(require_react());
  var import_client = __toESM(require_client());

  // node_modules/react-tv-player/dist/react-tv-player.js
  init_index_r8XrYpcu();
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var t = document.createElement("style");
        t.appendChild(document.createTextNode('.tv-player-ui{z-index:2;display:flex;flex-direction:column;justify-content:flex-end;box-sizing:border-box;padding:2.0833333333vw 2.6041666667vw}.tv-player-ui__cover{transition:opacity .3s;width:100%;height:100%;opacity:1;background:linear-gradient(#0000,#000000d9 78%);position:absolute;top:0;left:0;z-index:-1}.tv-player-ui__cover.hide{opacity:0}.tv-player-ui__cover.with-top-cover{background:linear-gradient(#000000f7,#000000f7 6%,#0009 30%,#00000094,#0009 40%,#000000fa 78%)}.tv-player-ui__cover.light-cover{background:linear-gradient(#0000,#000000d9 70%)}@media screen and (max-width: 1200px) and (orientation: landscape){.tv-player-ui__cover.light-cover{background:linear-gradient(#0000,#000000e6 60%)}}.tv-player-ui .metadata-wrapper{width:84%;text-align:center;padding:.2083333333vw 0;margin:0 auto;pointer-events:none;animation:fadeInAnim ease-in-out .3s forwards}.tv-player-ui .metadata{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#fafafa;padding:0 2.6041666667vw;pointer-events:none;line-height:1.4}.tv-player-ui .metadata--title{font-size:3.2291666667vw;font-weight:800}.tv-player-ui .metadata--subTitle{font-size:1.4583333333vw;font-weight:400}@media screen and (max-width: 1200px){.tv-player-ui .metadata--title{font-size:4.1666666667vw}.tv-player-ui .metadata--subTitle{font-size:2.0833333333vw}}@media screen and (max-width: 600px){.tv-player-ui .metadata--title{font-size:6.25vw}.tv-player-ui .metadata--subTitle{font-size:3.125vw}}.tv-player-ui .buttons{padding:2.0833333333vw 2.6041666667vw;height:3.125vw;min-height:60px;display:flex;align-items:center;justify-content:center;gap:2.5vw;transition:all .3s;border-top:.5px solid rgba(255,255,255,0);pointer-events:none}.tv-player-ui .buttons>*{display:flex;gap:3vw}.tv-player-ui .buttons__left{margin-right:auto}.tv-player-ui .buttons__center{position:absolute}.tv-player-ui .buttons__right{margin-left:auto}.tv-player-ui .buttons button{position:relative;pointer-events:auto;box-sizing:border-box;border-radius:50%;border:2px solid transparent;background-color:transparent;color:#fff;width:3.125vw;height:3.125vw;min-width:54px;min-height:54px;cursor:pointer;transition:all .3s;outline:none}.tv-player-ui .buttons button small{position:absolute;transform:translateY(50px);left:-50%;width:200%;opacity:0;transition:all .3s;font-size:18px;z-index:1}@media screen and (min-width: 1600px){.tv-player-ui .buttons button small{transform:translateY(54px);font-size:20px}}.tv-player-ui .buttons button:disabled{opacity:.5;pointer-events:none}.tv-player-ui .buttons button.focused{border-color:#fafafa;outline:none}.tv-player-ui .buttons button.focused small{opacity:1}@media screen and (max-width: 600px){.tv-player-ui .buttons button{min-width:39px;min-height:39px}.tv-player-ui .buttons button.focused small{opacity:0}.tv-player-ui .buttons button svg{font-size:16px!important}}.tv-player-ui .buttons button.selected-dot{position:relative}.tv-player-ui .buttons button.selected-dot:before{content:".";position:absolute;bottom:-4px;left:38%;font-size:40px}.tv-player-ui .buttons button.selected-fill{background-color:#323232}.tv-player-ui .buttons button svg{font-size:24px}.tv-player-ui .buttons button svg.fa-play{padding-left:3px}@media screen and (max-width: 600px){.tv-player-ui .buttons button svg.fa-play{padding-left:2px}}.tv-player-ui .buttons button svg.fa-backward{margin-left:-3px}.tv-player-ui .buttons button svg.fa-forward{margin-left:3px}.tv-player-ui .buttons button svg.fa-info{margin-bottom:2px;font-size:16px}.tv-player-ui .buttons button svg.fa-volume-xmark{margin-left:-2px}.tv-player-ui .buttons button svg.fa-circle-info{font-size:28px}.tv-player-ui .buttons button svg.fa-circle-info path{fill:#ffffffe6}.tv-player-ui .buttons button svg.fa-github{font-size:34px}.tv-player-ui .progress-bar{padding:0 calc(2.6041666667vw - 4px);display:flex;justify-content:center;align-items:center;height:60px;gap:1.1458333333vw;transition:opacity .3s}.tv-player-ui .progress-bar.hide{opacity:0}.tv-player-ui .progress-bar:not(.hide){animation:fadeInAnim ease-in-out .3s forwards}.tv-player-ui .progress-bar .time{color:#fafafa;font-size:18px;font-weight:600;min-height:24px;min-width:70px;text-align:left;display:flex;justify-content:center;align-items:center}.tv-player-ui .progress-bar .time--duration{text-align:right}@media screen and (max-width: 600px){.tv-player-ui .progress-bar .time{font-size:14px}}@media screen and (min-width: 1600px){.tv-player-ui .progress-bar .time{font-size:20px}}.tv-player-ui .progress-bar .bar-wrapper{flex:1;cursor:pointer}.tv-player-ui .progress-bar .bar-wrapper .bar{position:relative;height:.4166666667vw;border-radius:.2083333333vw;background-color:#191919;margin:.625vw 0}@media screen and (max-width: 600px){.tv-player-ui .progress-bar .bar-wrapper .bar{height:.625vw}}.tv-player-ui .progress-bar .bar-wrapper .bar .fill{background-color:#fafafa;position:absolute;left:0;height:100%;border-radius:.2083333333vw;opacity:.8;transition:all .3s}.tv-player-ui .progress-bar .bar-wrapper .bar .progress-bar-button{background-color:#fafafa;position:absolute;border-radius:50%;width:.8333333333vw;height:.8333333333vw;padding:.2083333333vw;top:-.4166666667vw;margin:.2083333333vw .2083333333vw .2083333333vw -.8333333333vw;border:.2083333333vw solid transparent;transition:all .3s;transform:scale(1.2);z-index:1;cursor:pointer;pointer-events:none}@media screen and (max-width: 1200px){.tv-player-ui .progress-bar .bar-wrapper .bar .progress-bar-button{width:1.25vw;height:1.25vw;top:-.6770833333vw}}@media screen and (max-width: 600px){.tv-player-ui .progress-bar .bar-wrapper .bar .progress-bar-button{width:1.6666666667vw;height:1.6666666667vw}}.tv-player-ui .progress-bar .bar-wrapper .bar .progress-bar-button:before{content:"";position:absolute;top:-.5208333333vw;right:-.5208333333vw;bottom:-.5208333333vw;left:-.5208333333vw;border:.1041666667vw solid transparent;border-radius:50%;transition:all .3s}.tv-player-ui .progress-bar .bar-wrapper .bar .progress-bar-button.focused,.tv-player-ui .progress-bar .bar-wrapper .bar .progress-bar-button:hover{transform:scale(1.6)}.tv-player-ui .progress-bar .bar-wrapper .bar .progress-bar-button.focused:before{border-color:#fafafa}.tv-player-ui .progress-bar .bar-wrapper.focused .progress-bar-button,.tv-player-ui .progress-bar .bar-wrapper:hover .progress-bar-button{transform:scale(1.6);opacity:1}@keyframes fadeInAnim{0%{opacity:0}to{opacity:1}}.tv-player{background:#000;height:100vh;position:relative}.tv-player :focus{outline:0;outline-color:transparent;outline-style:none}.tv-player>*{position:absolute;top:0;left:0}.tv-player video{background-color:#000}img.yt-preview{object-position:center;object-fit:cover;display:none}img.yt-preview.show{display:block}')), document.head.appendChild(t);
      }
    } catch (e2) {
      console.error("vite-plugin-css-injected-by-js", e2);
    }
  })();

  // node_modules/@fortawesome/free-solid-svg-icons/index.mjs
  var faBackward = {
    prefix: "fas",
    iconName: "backward",
    icon: [512, 512, [9194], "f04a", "M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3l0 41.7 0 41.7L459.5 440.6zM256 352l0-96 0-128 0-32c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-64z"]
  };
  var faList = {
    prefix: "fas",
    iconName: "list",
    icon: [512, 512, ["list-squares"], "f03a", "M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"]
  };
  var faLanguage = {
    prefix: "fas",
    iconName: "language",
    icon: [640, 512, [], "f1ab", "M0 128C0 92.7 28.7 64 64 64l192 0 48 0 16 0 256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-256 0-16 0-48 0L64 448c-35.3 0-64-28.7-64-64L0 128zm320 0l0 256 256 0 0-256-256 0zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1 73.6 0 8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276l-38 0 19-42.8zM448 164c11 0 20 9 20 20l0 4 44 0 16 0c11 0 20 9 20 20s-9 20-20 20l-2 0-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45L448 228l-72 0c-11 0-20-9-20-20s9-20 20-20l52 0 0-4c0-11 9-20 20-20z"]
  };
  var faSliders = {
    prefix: "fas",
    iconName: "sliders",
    icon: [512, 512, ["sliders-h"], "f1de", "M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"]
  };
  var faClosedCaptioning = {
    prefix: "fas",
    iconName: "closed-captioning",
    icon: [576, 512, [], "f20a", "M0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM200 208c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48s21.5-48 48-48zm144 48c0-26.5 21.5-48 48-48c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48z"]
  };
  var faForward = {
    prefix: "fas",
    iconName: "forward",
    icon: [512, 512, [9193], "f04e", "M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416L0 96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3l0 41.7 0 41.7L52.5 440.6zM256 352l0-96 0-128 0-32c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29l0-64z"]
  };
  var faGaugeHigh = {
    prefix: "fas",
    iconName: "gauge-high",
    icon: [512, 512, [62461, "tachometer-alt", "tachometer-alt-fast"], "f625", "M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64c0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L257.9 288c-.6 0-1.3 0-1.9 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
  };

  // src/player-app.jsx
  var import_jsx_runtime2 = __toESM(require_jsx_runtime());
  var boot = window.__ARRWA_PLAYER_BOOT__ || {};
  var initial = boot.initial || {};
  var PLAYER_RETURN_KEY = "arrwa:player-return";
  var PLAYER_PREVIEW_KEY = "arrwa:player-preview";
  var EMPTY_SUBTITLES = [{ id: "off", index: -1, label: "Off", meta: "No subtitles" }];
  var PLAYER_MODE_HLS_JS = "hls-js";
  var PLAYER_MODE_NATIVE_HLS = "native-hls";
  var DEFAULT_SEEK_PRESET_ID = "seek-10";
  var SEEK_PRESETS = [
    { id: "seek-5", label: "5 sec", meta: "Precise seeking", steps: [5, 5, 10, 15, 20, 30] },
    { id: "seek-10", label: "10 sec", meta: "Standard seeking", steps: [10, 10, 15, 20, 30, 45, 60] },
    { id: "seek-30", label: "30 sec", meta: "Quick jumps", steps: [30, 30, 45, 60, 90, 120, 180] },
    { id: "seek-60", label: "1 min", meta: "Large jumps", steps: [60, 60, 90, 120, 180, 240, 300] },
    { id: "seek-180", label: "3 min", meta: "Chapter-sized jumps", steps: [180, 180, 240, 300, 360, 420, 600] },
    { id: "seek-300", label: "5 min", meta: "Fast skipping", steps: [300, 300, 420, 600, 900, 1200, 1500] }
  ];
  var PLAYER_FONT_FACE_STYLES = `
@font-face {
  font-family: "Netflix Sans";
  src: url("/static/fonts/NetflixSans-Light.woff2") format("woff2");
  font-style: normal;
  font-weight: 300;
  font-display: swap;
}

@font-face {
  font-family: "Netflix Sans";
  src: url("/static/fonts/NetflixSans-Regular.woff2") format("woff2");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: "Netflix Sans";
  src: url("/static/fonts/NetflixSans-Medium.woff2") format("woff2");
  font-style: normal;
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: "Netflix Sans";
  src: url("/static/fonts/NetflixSans-Bold.woff2") format("woff2");
  font-style: normal;
  font-weight: 700;
  font-display: swap;
}

@font-face {
  font-family: "Netflix Sans";
  src: url("/static/fonts/NetflixSans-Bold.woff2") format("woff2");
  font-style: normal;
  font-weight: 900;
  font-display: swap;
}
`;
  var GLOBAL_STYLES = `${PLAYER_FONT_FACE_STYLES}
@keyframes arrwaPlayerSpin { to { transform: rotate(360deg); } }`;
  var CONTINUE_WATCHING_KEY = "hak:continue-watching";
  var SUBTITLE_SETTINGS_KEY = "hak:subtitle-settings";
  var SUBTITLE_FONT_SIZE_OPTIONS = [
    { id: "size-sm", label: "Small", meta: "Compact captions", value: "1.15rem" },
    { id: "size-md", label: "Medium", meta: "Balanced size", value: "1.45rem" },
    { id: "size-lg", label: "Large", meta: "10-foot readable", value: "1.85rem" },
    { id: "size-xl", label: "Extra Large", meta: "Maximum legibility", value: "2.2rem" },
    { id: "size-2xl", label: "Huge", meta: "Very large subtitles", value: "2.7rem" },
    { id: "size-3xl", label: "Cinema", meta: "Largest subtitle option", value: "3.2rem" }
  ];
  var SUBTITLE_SCALE_OPTIONS = [
    { id: "scale-85", label: "85%", meta: "Slightly smaller", value: 0.85 },
    { id: "scale-100", label: "100%", meta: "Original scale", value: 1 },
    { id: "scale-125", label: "125%", meta: "Comfortably larger", value: 1.25 },
    { id: "scale-150", label: "150%", meta: "Large TV boost", value: 1.5 },
    { id: "scale-175", label: "175%", meta: "Extra couch distance", value: 1.75 },
    { id: "scale-200", label: "200%", meta: "Maximum scaling", value: 2 }
  ];
  var SUBTITLE_FONT_FAMILY_OPTIONS = [
    { id: "font-sans", label: "Netflix Sans", meta: "Netflix-style subtitle face", value: '"Netflix Sans", "Helvetica Neue", Arial, sans-serif' },
    { id: "font-serif", label: "Serif", meta: "Book-like subtitles", value: 'Georgia, "Times New Roman", serif' },
    { id: "font-mono", label: "Mono", meta: "Fixed-width captions", value: '"Courier New", monospace' }
  ];
  var SUBTITLE_COLOR_OPTIONS = [
    { id: "color-white", label: "White", meta: "Neutral default", value: "#ffffff" },
    { id: "color-yellow", label: "Yellow", meta: "Classic subtitle tone", value: "#f9e26b" },
    { id: "color-cyan", label: "Cyan", meta: "Cool contrast", value: "#9be7ff" }
  ];
  var SUBTITLE_BACKGROUND_OPTIONS = [
    { id: "bg-clear", label: "Clear", meta: "No backdrop", value: "transparent" },
    { id: "bg-soft", label: "Soft", meta: "Gentle dark backing", value: "rgba(0, 0, 0, 0.52)" },
    { id: "bg-solid", label: "Solid", meta: "Highest contrast", value: "rgba(0, 0, 0, 0.82)" }
  ];
  var SUBTITLE_SHIFT_OPTIONS = [
    { id: "shift-neg4", label: "4 sec earlier", meta: "Show captions sooner", value: -4 },
    { id: "shift-neg2", label: "2 sec earlier", meta: "Slightly ahead", value: -2 },
    { id: "shift-neg1", label: "1 sec earlier", meta: "Fine-tune early", value: -1 },
    { id: "shift-0", label: "On time", meta: "Match the stream", value: 0 },
    { id: "shift-pos1", label: "1 sec later", meta: "Fine-tune late", value: 1 },
    { id: "shift-pos2", label: "2 sec later", meta: "Delay subtitles", value: 2 },
    { id: "shift-pos4", label: "4 sec later", meta: "Strong delay", value: 4 }
  ];
  var SUBTITLE_MARGIN_OPTIONS = [
    { id: "margin-6", label: "6% Bottom", meta: "Closest to the lower edge", value: 94 },
    { id: "margin-10", label: "10% Bottom", meta: "Balanced lower-third placement", value: 90 },
    { id: "margin-14", label: "14% Bottom", meta: "Raised above busy UI", value: 86 },
    { id: "margin-18", label: "18% Bottom", meta: "Higher on the screen", value: 82 },
    { id: "margin-22", label: "22% Bottom", meta: "Highest safe subtitle line", value: 78 }
  ];
  var DEFAULT_SUBTITLE_SETTINGS = {
    fontSizeId: "size-lg",
    scaleId: "scale-100",
    fontFamilyId: "font-sans",
    colorId: "color-white",
    backgroundId: "bg-soft",
    shiftId: "shift-0",
    marginId: "margin-10"
  };
  var shellStyles = {
    frame: {
      position: "fixed",
      inset: 0,
      background: "#000",
      color: "#fff",
      overflow: "hidden"
    },
    overlay: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      padding: "5vw",
      zIndex: 8
    },
    previewBackdrop: {
      position: "absolute",
      inset: 0,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      transform: "scale(1.04)",
      filter: "blur(16px) saturate(1.05)",
      opacity: 0.9
    },
    previewScrim: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(0,0,0,0.48), rgba(0,0,0,0.9) 52%, rgba(0,0,0,0.96))"
    },
    loadingPanel: {
      position: "relative",
      width: "min(24rem, 100%)",
      display: "grid",
      justifyItems: "center",
      gap: "1rem",
      padding: "1.9rem 1.6rem",
      borderRadius: "1.6rem",
      border: "1px solid rgba(255,255,255,0.12)",
      background: "rgba(8, 8, 8, 0.72)",
      boxShadow: "0 22px 52px rgba(0,0,0,0.52)",
      backdropFilter: "blur(18px)",
      textAlign: "center"
    },
    previewCard: {
      width: "min(22rem, 72vw)",
      aspectRatio: "16 / 9",
      borderRadius: "1.1rem",
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.14)",
      boxShadow: "0 20px 46px rgba(0,0,0,0.4)",
      background: "rgba(255,255,255,0.04)"
    },
    previewImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    },
    loadingBrand: {
      color: "#e50914",
      fontSize: "1.5rem",
      fontWeight: 900,
      letterSpacing: "-0.12em",
      textTransform: "uppercase"
    },
    loadingRing: {
      width: "68px",
      height: "68px",
      borderRadius: "50%",
      border: "5px solid rgba(229, 9, 20, 0.2)",
      borderTopColor: "#e50914",
      animation: "arrwaPlayerSpin 0.82s linear infinite"
    },
    loadingTitle: {
      margin: 0,
      fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
      fontWeight: 800,
      lineHeight: 1.12
    },
    loadingSubTitle: {
      margin: 0,
      color: "rgba(255,255,255,0.72)",
      fontSize: "0.98rem",
      lineHeight: 1.45
    },
    meta: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "0.6rem"
    },
    pill: {
      padding: "0.5rem 0.9rem",
      borderRadius: "999px",
      border: "1px solid rgba(255,255,255,0.16)",
      color: "rgba(255,255,255,0.88)",
      background: "rgba(255,255,255,0.06)",
      fontSize: "0.92rem",
      fontWeight: 600
    },
    errorPanel: {
      position: "relative",
      width: "min(34rem, 100%)",
      display: "grid",
      gap: "1rem",
      padding: "2rem 1.8rem",
      borderRadius: "1.6rem",
      border: "1px solid rgba(255,255,255,0.12)",
      background: "rgba(8, 8, 8, 0.78)",
      boxShadow: "0 22px 52px rgba(0,0,0,0.52)",
      backdropFilter: "blur(18px)"
    },
    errorKicker: {
      margin: 0,
      fontSize: "0.88rem",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.64)"
    },
    errorTitle: {
      margin: 0,
      fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
      lineHeight: 1.08,
      fontWeight: 800
    },
    errorBody: {
      margin: 0,
      color: "rgba(255,255,255,0.78)",
      fontSize: "1rem",
      lineHeight: 1.6
    },
    actions: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.75rem",
      marginTop: "0.25rem"
    },
    button: {
      minWidth: "8.5rem",
      border: "none",
      borderRadius: "999px",
      padding: "0.95rem 1.35rem",
      fontSize: "1rem",
      fontWeight: 700,
      cursor: "pointer",
      transition: "transform 120ms ease, box-shadow 120ms ease, background 120ms ease"
    },
    primaryButton: {
      background: "#fff",
      color: "#050505"
    },
    secondaryButton: {
      background: "rgba(255,255,255,0.14)",
      color: "#fff"
    },
    buttonFocused: {
      boxShadow: "0 0 0 2px rgba(255,255,255,0.95), 0 0 0 7px rgba(229, 9, 20, 0.95)",
      transform: "translateY(-1px)"
    },
    menu: {
      position: "absolute",
      top: "8vh",
      right: "3vw",
      width: "min(28rem, 40vw)",
      maxHeight: "78vh",
      overflowY: "auto",
      padding: "1.15rem",
      borderRadius: "1.35rem",
      background: "rgba(10, 10, 10, 0.92)",
      border: "1px solid rgba(255,255,255,0.14)",
      boxShadow: "0 22px 54px rgba(0, 0, 0, 0.52)",
      backdropFilter: "blur(18px)",
      zIndex: 12
    },
    menuTitle: {
      margin: 0,
      fontSize: "1.4rem",
      fontWeight: 800
    },
    menuHint: {
      margin: "0.55rem 0 1rem",
      fontSize: "0.95rem",
      lineHeight: 1.45,
      color: "rgba(255,255,255,0.68)"
    },
    menuList: {
      display: "grid",
      gap: "0.55rem"
    },
    menuItem: {
      width: "100%",
      padding: "0.95rem 1rem",
      borderRadius: "1rem",
      border: "1px solid rgba(255,255,255,0.08)",
      background: "rgba(255,255,255,0.04)",
      color: "#fff",
      textAlign: "left",
      fontSize: "1rem",
      fontWeight: 600
    },
    menuItemFocused: {
      borderColor: "rgba(229, 9, 20, 0.95)",
      boxShadow: "0 0 0 2px rgba(255,255,255,0.92), 0 0 0 7px rgba(229, 9, 20, 0.95)",
      background: "rgba(255,255,255,0.08)"
    },
    menuItemSelected: {
      color: "#ffffff"
    },
    menuMeta: {
      display: "block",
      marginTop: "0.3rem",
      color: "rgba(255,255,255,0.62)",
      fontSize: "0.86rem",
      fontWeight: 500
    }
  };
  function parseBool(value, fallback = false) {
    if (value == null) return fallback;
    const normalized = String(value).trim().toLowerCase();
    return normalized === "1" || normalized === "true" || normalized === "yes" || normalized === "on";
  }
  function browserUserAgent() {
    return String(window.navigator.userAgent || "");
  }
  function isBrowserHere() {
    return /browsehere|browserhere|com\.tcl\.browser/i.test(browserUserAgent());
  }
  function canUseNativeHls() {
    if (typeof document === "undefined") return false;
    const video = document.createElement("video");
    return Boolean(
      video.canPlayType("application/vnd.apple.mpegurl") || video.canPlayType("application/x-mpegURL")
    );
  }
  function preferredPlayerMode() {
    return isBrowserHere() && canUseNativeHls() ? PLAYER_MODE_NATIVE_HLS : PLAYER_MODE_HLS_JS;
  }
  function alternatePlayerMode(mode) {
    return mode === PLAYER_MODE_NATIVE_HLS ? PLAYER_MODE_HLS_JS : PLAYER_MODE_NATIVE_HLS;
  }
  function isAutoplayBlockedError(message) {
    const text = String(message || "").toLowerCase();
    return text.includes("notallowederror") || text.includes("play() failed") || text.includes("user didn't interact") || text.includes("user did not interact") || text.includes("gesture") || text.includes("autoplay");
  }
  function mapInput(event) {
    const code = event.keyCode || event.which;
    const key = event.key;
    if (key === "ArrowUp" || code === 19 || code === 38) return "UP";
    if (key === "ArrowDown" || code === 20 || code === 40) return "DOWN";
    if (key === "ArrowLeft" || code === 21 || code === 37) return "LEFT";
    if (key === "ArrowRight" || code === 22 || code === 39) return "RIGHT";
    if (key === "Enter" || code === 13 || code === 23 || code === 66 || code === 96) return "SELECT";
    if (key === "Escape" || key === "Backspace" || key === "BrowserBack" || key === "GoBack" || code === 4 || code === 8 || code === 27 || code === 97 || code === 111 || code === 461 || code === 10009) {
      return "BACK";
    }
    return "";
  }
  function normalizeLanguage(value) {
    const raw = String(value || "").trim().toLowerCase();
    if (!raw) return "";
    if (raw.includes("english") || raw === "en" || raw.startsWith("en-")) return "en";
    if (raw.includes("korean") || raw === "ko" || raw === "kr" || raw.startsWith("ko-")) return "ko";
    if (raw.includes("japanese") || raw === "ja" || raw === "jp" || raw.startsWith("ja-")) return "ja";
    return raw.slice(0, 2);
  }
  function languageName(code) {
    const normalized = normalizeLanguage(code);
    if (normalized === "en") return "English";
    if (normalized === "ko") return "Korean";
    if (normalized === "ja") return "Japanese";
    return normalized ? normalized.toUpperCase() : "Unknown";
  }
  function languageMatches(option, target) {
    const desired = normalizeLanguage(target);
    if (!desired) return false;
    const haystack = `${option.label || ""} ${option.language || ""} ${option.name || ""} ${option.lang || ""}`.toLowerCase();
    return haystack.includes(desired) || haystack.includes(languageName(desired).toLowerCase());
  }
  function buildExtractUrl() {
    const params = new URLSearchParams();
    params.set("tmdb_id", initial.tmdb_id || "");
    params.set("type", initial.type === "tv" ? "tv" : "movie");
    params.set("multiLang", "1");
    if (initial.type === "tv") {
      params.set("season", initial.season || "1");
      params.set("episode", initial.episode || "1");
    }
    return `/extract?${params.toString()}`;
  }
  function buildDetailsUrl() {
    const params = new URLSearchParams();
    params.set("tmdb_id", initial.tmdb_id || "");
    params.set("type", initial.type === "tv" ? "tv" : "movie");
    if (initial.type === "tv") {
      params.set("season", initial.season || "1");
    }
    return `/api/details?${params.toString()}`;
  }
  function buildPlayerUrl(season, episode) {
    const params = new URLSearchParams();
    params.set("tmdb_id", initial.tmdb_id || "");
    params.set("type", initial.type === "tv" ? "tv" : "movie");
    params.set("multiLang", parseBool(initial.multiLang, true) ? "1" : "0");
    params.set("autoplay", parseBool(initial.autoplay, true) ? "1" : "0");
    if (initial.type === "tv") {
      params.set("season", String(season || initial.season || "1"));
      params.set("episode", String(episode || initial.episode || "1"));
    }
    return `/player?${params.toString()}`;
  }
  function buildSubtitleTracks(subtitles = []) {
    const validTracks = subtitles.filter((entry) => entry && entry.url);
    const preferredIndex = validTracks.findIndex((entry) => languageMatches(entry, "en"));
    const defaultIndex = preferredIndex >= 0 ? preferredIndex : validTracks.length ? 0 : -1;
    return validTracks.map((entry, index) => {
      const language = String(entry.language || `Subtitle ${index + 1}`).trim();
      const code = normalizeLanguage(language) || "en";
      return {
        kind: "subtitles",
        src: entry.url,
        srcLang: code,
        label: language,
        default: index === defaultIndex
      };
    });
  }
  function textTrackArray(media) {
    if (!media || !media.textTracks) return [];
    const tracks = [];
    for (let index = 0; index < media.textTracks.length; index += 1) {
      tracks.push(media.textTracks[index]);
    }
    return tracks;
  }
  function humanAudioLabel(track, index) {
    return track.name || track.label || languageName(track.lang || track.language) || `Track ${index + 1}`;
  }
  function keyLabel(season = initial.season, episode = initial.episode) {
    if (initial.type === "tv") {
      return `S${season || "1"} E${episode || "1"}`;
    }
    return "Movie";
  }
  function readSessionJson(key) {
    try {
      const raw = window.sessionStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (_error) {
      return null;
    }
  }
  function writeSessionJson(key, value) {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (_error) {
    }
  }
  function removeSessionKey(key) {
    try {
      window.sessionStorage.removeItem(key);
    } catch (_error) {
    }
  }
  function readLocalJson(key) {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (_error) {
      return null;
    }
  }
  function writeLocalJson(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (_error) {
    }
  }
  function readContinueWatchingStore() {
    return readLocalJson(CONTINUE_WATCHING_KEY) || {};
  }
  function writeContinueWatchingStore(store) {
    writeLocalJson(CONTINUE_WATCHING_KEY, store);
  }
  function episodeProgressKey(season, episode) {
    return `s${season}e${episode}`;
  }
  function readSubtitleSettings() {
    const stored = readLocalJson(SUBTITLE_SETTINGS_KEY) || {};
    return {
      ...DEFAULT_SUBTITLE_SETTINGS,
      ...stored
    };
  }
  function findSettingOption(options, id) {
    return options.find((option) => option.id === id) || options[0];
  }
  function buildSubtitleCueStyles(settings) {
    const fontSize = findSettingOption(SUBTITLE_FONT_SIZE_OPTIONS, settings.fontSizeId);
    const scale = findSettingOption(SUBTITLE_SCALE_OPTIONS, settings.scaleId);
    const fontFamily = findSettingOption(SUBTITLE_FONT_FAMILY_OPTIONS, settings.fontFamilyId);
    const color = findSettingOption(SUBTITLE_COLOR_OPTIONS, settings.colorId);
    const background = findSettingOption(SUBTITLE_BACKGROUND_OPTIONS, settings.backgroundId);
    return `
video::cue {
  font-size: calc(${fontSize.value} * ${scale.value});
  font-family: ${fontFamily.value};
  color: ${color.value};
  background: ${background.value};
  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.88);
}
`;
  }
  function readResumeTimeFromStore() {
    const direct = Number(initial.start || 0);
    if (Number.isFinite(direct) && direct > 0) return direct;
    if (!parseBool(initial.resume, false) || !initial.tmdb_id) return 0;
    const store = readContinueWatchingStore();
    const record = store[String(initial.tmdb_id)];
    if (!record) return 0;
    if (record.type === "tv") {
      const season = String(initial.season || record.last_season_watched || "1");
      const episode = String(initial.episode || record.last_episode_watched || "1");
      const entry = record.show_progress && record.show_progress[episodeProgressKey(season, episode)];
      const watched2 = Number(entry && entry.progress && entry.progress.watched || record.progress && record.progress.watched || 0);
      return Number.isFinite(watched2) ? watched2 : 0;
    }
    const watched = Number(record.progress && record.progress.watched || 0);
    return Number.isFinite(watched) ? watched : 0;
  }
  function clampResumeTime(startTime, duration) {
    const safeStart = Number(startTime || 0);
    if (!Number.isFinite(safeStart) || safeStart <= 0) return 0;
    if (!Number.isFinite(duration) || duration <= 0) return safeStart;
    return Math.max(0, Math.min(duration - 5, safeStart));
  }
  function cueArray(track) {
    if (!track || !track.cues) return [];
    const cues = [];
    for (let index = 0; index < track.cues.length; index += 1) {
      cues.push(track.cues[index]);
    }
    return cues;
  }
  function applyCueAdjustments(track, offsetSeconds, linePercent, cueSnapshotMap) {
    cueArray(track).forEach((cue) => {
      if (!cueSnapshotMap.has(cue)) {
        cueSnapshotMap.set(cue, {
          startTime: cue.startTime,
          endTime: cue.endTime,
          line: cue.line,
          snapToLines: cue.snapToLines
        });
      }
      const original = cueSnapshotMap.get(cue);
      if (!original) return;
      const nextStart = Math.max(0, original.startTime + offsetSeconds);
      const nextEnd = Math.max(nextStart + 0.05, original.endTime + offsetSeconds);
      try {
        cue.startTime = nextStart;
        cue.endTime = nextEnd;
      } catch (_error) {
      }
      try {
        cue.snapToLines = false;
        cue.line = linePercent;
      } catch (_error) {
        try {
          cue.snapToLines = original.snapToLines;
          cue.line = original.line;
        } catch (_innerError) {
        }
      }
    });
  }
  function basePreviewState() {
    return {
      tmdbId: String(initial.tmdb_id || ""),
      type: initial.type === "tv" ? "tv" : "movie",
      season: String(initial.season || "1"),
      episode: String(initial.episode || "1"),
      title: "",
      subtitle: initial.type === "tv" ? keyLabel() : "Movie",
      backdropUrl: "",
      cardImage: ""
    };
  }
  function readLaunchPreview() {
    const base = basePreviewState();
    const stored = readSessionJson(PLAYER_PREVIEW_KEY);
    if (!stored) return base;
    if (stored.tmdbId && String(stored.tmdbId) !== base.tmdbId) return base;
    if (stored.type && stored.type !== base.type) return base;
    return { ...base, ...stored };
  }
  function findEpisode(detail, episodeNumber = initial.episode || "1") {
    if (!detail || !Array.isArray(detail.episodes)) return null;
    return detail.episodes.find((episode) => String(episode.episodeNumber) === String(episodeNumber)) || null;
  }
  function mergePreview(current, detail, episode) {
    const merged = {
      ...current || basePreviewState(),
      tmdbId: String(detail?.tmdbId || current?.tmdbId || initial.tmdb_id || ""),
      type: detail?.type || current?.type || (initial.type === "tv" ? "tv" : "movie"),
      season: String(detail?.selectedSeason || current?.season || initial.season || "1"),
      episode: String(episode?.episodeNumber || current?.episode || initial.episode || "1"),
      title: detail?.title || current?.title || "",
      subtitle: episode?.name || current?.subtitle || (initial.type === "tv" ? keyLabel() : "Movie"),
      backdropUrl: detail?.backdropUrl || current?.backdropUrl || current?.cardImage || "",
      cardImage: episode?.stillUrl || detail?.cardImage || current?.cardImage || detail?.backdropUrl || ""
    };
    return merged;
  }
  function nextSeekAmount(preset) {
    const steps = preset?.steps || SEEK_PRESETS[1].steps;
    return Number(steps[0] || 10);
  }
  function backToBrowse() {
    window.location.replace("/");
  }
  function overlayBackgroundStyle(preview) {
    const image = preview?.backdropUrl || preview?.cardImage || "";
    return image ? { ...shellStyles.previewBackdrop, backgroundImage: `url("${image}")` } : shellStyles.previewBackdrop;
  }
  function LoadingScreen({ preview }) {
    const previewImage = preview?.cardImage || preview?.backdropUrl || "";
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: shellStyles.overlay, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("style", { children: GLOBAL_STYLES }),
      previewImage ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "img",
        {
          src: previewImage,
          alt: "",
          style: {
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center"
          }
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: overlayBackgroundStyle(preview) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "div",
        {
          style: {
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.22), rgba(0,0,0,0.6) 58%, rgba(0,0,0,0.82))"
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { position: "relative", zIndex: 2, display: "grid", placeItems: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: shellStyles.loadingRing, "aria-hidden": "true" }) })
    ] });
  }
  function ErrorScreen({ error, onRetry, onBack, focusedIndex, preview }) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: shellStyles.overlay, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("style", { children: GLOBAL_STYLES }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: overlayBackgroundStyle(preview) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: shellStyles.previewScrim }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: shellStyles.errorPanel, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { style: shellStyles.errorKicker, children: "Playback Error" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", { style: shellStyles.errorTitle, children: "The player could not start." }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { style: shellStyles.errorBody, children: error || "An unknown playback error occurred." }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: shellStyles.actions, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "button",
            {
              type: "button",
              onClick: onRetry,
              style: {
                ...shellStyles.button,
                ...shellStyles.primaryButton,
                ...focusedIndex === 0 ? shellStyles.buttonFocused : null
              },
              children: "Retry"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "button",
            {
              type: "button",
              onClick: onBack,
              style: {
                ...shellStyles.button,
                ...shellStyles.secondaryButton,
                ...focusedIndex === 1 ? shellStyles.buttonFocused : null
              },
              children: "Back"
            }
          )
        ] })
      ] })
    ] });
  }
  function menuTitle(kind, detail) {
    if (kind === "audio") return "Audio";
    if (kind === "subtitles") return "Subtitles";
    if (kind === "seek") return "Seek Speed";
    if (kind === "subtitle-settings") return "Subtitle Settings";
    if (kind === "subtitle-font-size") return "Subtitle Size";
    if (kind === "subtitle-scale") return "Subtitle Scale";
    if (kind === "subtitle-font-family") return "Subtitle Font";
    if (kind === "subtitle-color") return "Subtitle Color";
    if (kind === "subtitle-background") return "Subtitle Background";
    if (kind === "subtitle-shift") return "Subtitle Timing";
    if (kind === "subtitle-margin") return "Subtitle Margin";
    if (kind === "episodes") return `Season ${detail?.selectedSeason || initial.season || "1"} Episodes`;
    return "Options";
  }
  function menuHint(kind) {
    if (kind === "audio") return "Use Up and Down to switch language tracks.";
    if (kind === "subtitles") return "English is selected by default when available.";
    if (kind === "seek") return "Pick how aggressively left and right should jump through the stream.";
    if (kind === "subtitle-settings") return "Adjust caption size, scale, font, color, timing, and screen position.";
    if (kind === "subtitle-font-size") return "Choose a subtitle size that feels readable from the couch.";
    if (kind === "subtitle-scale") return "Scale the current subtitle size with percent-based sizing.";
    if (kind === "subtitle-font-family") return "Pick the subtitle font style.";
    if (kind === "subtitle-color") return "Choose the subtitle text color.";
    if (kind === "subtitle-background") return "Add or remove the subtitle backdrop.";
    if (kind === "subtitle-shift") return "Nudge subtitles earlier or later to match the stream.";
    if (kind === "subtitle-margin") return "Move subtitles higher or lower so they clear the player UI.";
    if (kind === "episodes") return "Choose another episode in the current season.";
    return "Use Up and Down to choose, Enter to confirm, and Back to close.";
  }
  function TrackMenu({ menuState, options, detail, containerRef }) {
    if (!menuState) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("aside", { ref: containerRef, style: shellStyles.menu, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { style: shellStyles.menuTitle, children: menuTitle(menuState.kind, detail) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { style: shellStyles.menuHint, children: menuHint(menuState.kind) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: shellStyles.menuList, children: options.map((option, index) => {
        const isFocused = index === menuState.index;
        const isSelected = Boolean(option.selected);
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "button",
          {
            type: "button",
            "data-menu-index": index,
            style: {
              ...shellStyles.menuItem,
              ...isFocused ? shellStyles.menuItemFocused : null,
              ...isSelected ? shellStyles.menuItemSelected : null
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: option.label }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("small", { style: shellStyles.menuMeta, children: isSelected ? "Selected" : option.meta || "Available" })
            ]
          },
          option.id || `${menuState.kind}-${index}`
        );
      }) })
    ] });
  }
  function PlayerApp() {
    const playerInstance = le((state) => state.player);
    const [stream, setStream] = (0, import_react16.useState)(null);
    const [details, setDetails] = (0, import_react16.useState)(null);
    const [loading, setLoading] = (0, import_react16.useState)(Boolean(initial.tmdb_id));
    const [playerReady, setPlayerReady] = (0, import_react16.useState)(false);
    const [error, setError] = (0, import_react16.useState)("");
    const [reloadKey, setReloadKey] = (0, import_react16.useState)(0);
    const [playerMode, setPlayerMode] = (0, import_react16.useState)(() => preferredPlayerMode());
    const [audioOptions, setAudioOptions] = (0, import_react16.useState)([]);
    const [audioSelection, setAudioSelection] = (0, import_react16.useState)(-1);
    const [subtitleOptions, setSubtitleOptions] = (0, import_react16.useState)(EMPTY_SUBTITLES);
    const [subtitleSelection, setSubtitleSelection] = (0, import_react16.useState)(0);
    const [subtitleSettings, setSubtitleSettings] = (0, import_react16.useState)(() => readSubtitleSettings());
    const [seekPresetIndex, setSeekPresetIndex] = (0, import_react16.useState)(() => {
      const defaultIndex = SEEK_PRESETS.findIndex((preset) => preset.id === DEFAULT_SEEK_PRESET_ID);
      return defaultIndex >= 0 ? defaultIndex : 1;
    });
    const [menuState, setMenuState] = (0, import_react16.useState)(null);
    const [errorFocusIndex, setErrorFocusIndex] = (0, import_react16.useState)(0);
    const [launchPreview, setLaunchPreview] = (0, import_react16.useState)(() => readLaunchPreview());
    const defaultSelectionRef = (0, import_react16.useRef)({ audioKey: "", subtitleKey: "" });
    const seekStateRef = (0, import_react16.useRef)({ direction: 0, count: 0, at: 0 });
    const lastSeekAtRef = (0, import_react16.useRef)(0);
    const menuContainerRef = (0, import_react16.useRef)(null);
    const cueSnapshotRef = (0, import_react16.useRef)(/* @__PURE__ */ new WeakMap());
    const progressWriteRef = (0, import_react16.useRef)({ at: 0, watched: 0 });
    const resumeAppliedRef = (0, import_react16.useRef)(false);
    const playerModeAttemptsRef = (0, import_react16.useRef)(/* @__PURE__ */ new Set([preferredPlayerMode()]));
    (0, import_react16.useEffect)(() => {
      const restore = readSessionJson(PLAYER_RETURN_KEY);
      const expectedType = initial.type === "tv" ? "tv" : "movie";
      if (!restore) return;
      if (String(restore.tmdbId || "") !== String(initial.tmdb_id || "") || String(restore.type || "") !== expectedType) {
        removeSessionKey(PLAYER_RETURN_KEY);
      }
    }, []);
    (0, import_react16.useEffect)(() => {
      let cancelled = false;
      async function loadPlayer() {
        if (!initial.tmdb_id) {
          setError("Missing tmdb_id in the player URL.");
          setLoading(false);
          return;
        }
        setLoading(true);
        setPlayerReady(false);
        setError("");
        setMenuState(null);
        setStream(null);
        setDetails(null);
        const detailTask = fetch(buildDetailsUrl()).then((response) => response.json().then((payload) => ({ ok: response.ok, payload }))).catch(() => null).then((result) => {
          if (cancelled || !result || !result.ok || !result.payload?.success) return null;
          const nextDetails = result.payload.details;
          setDetails(nextDetails);
          const nextEpisode = findEpisode(nextDetails);
          setLaunchPreview((current) => {
            const merged = mergePreview(current, nextDetails, nextEpisode);
            writeSessionJson(PLAYER_PREVIEW_KEY, merged);
            return merged;
          });
          return nextDetails;
        });
        try {
          const streamResponse = await fetch(buildExtractUrl());
          const streamPayload = await streamResponse.json();
          if (!streamResponse.ok || !streamPayload.success || !streamPayload.hls_url) {
            throw new Error(streamPayload.error || "Unable to resolve the video stream.");
          }
          if (cancelled) return;
          setStream(streamPayload);
          await detailTask;
          if (cancelled) return;
          setLoading(false);
        } catch (loadError) {
          await detailTask;
          if (cancelled) return;
          setError(loadError instanceof Error ? loadError.message : String(loadError));
          setLoading(false);
        }
      }
      loadPlayer();
      return () => {
        cancelled = true;
      };
    }, [reloadKey]);
    (0, import_react16.useEffect)(() => {
      defaultSelectionRef.current = { audioKey: "", subtitleKey: "" };
      setAudioOptions([]);
      setAudioSelection(-1);
      setSubtitleOptions(EMPTY_SUBTITLES);
      setSubtitleSelection(0);
      setMenuState(null);
      setPlayerReady(false);
      seekStateRef.current = { direction: 0, count: 0, at: 0 };
      progressWriteRef.current = { at: 0, watched: 0 };
      resumeAppliedRef.current = false;
      cueSnapshotRef.current = /* @__PURE__ */ new WeakMap();
      const initialPlayerMode = preferredPlayerMode();
      playerModeAttemptsRef.current = /* @__PURE__ */ new Set([initialPlayerMode]);
      setPlayerMode(initialPlayerMode);
    }, [stream?.hls_url]);
    (0, import_react16.useEffect)(() => {
      writeLocalJson(SUBTITLE_SETTINGS_KEY, subtitleSettings);
    }, [subtitleSettings]);
    (0, import_react16.useEffect)(() => {
      if (!playerInstance || !stream?.hls_url) return void 0;
      let active = true;
      let attempts = 0;
      const syncTracks = () => {
        if (!active) return;
        const hls = playerInstance.getInternalPlayer?.("hls");
        const media = playerInstance.getInternalPlayer?.();
        let foundTrackData = false;
        if (hls && Array.isArray(hls.audioTracks) && hls.audioTracks.length) {
          foundTrackData = true;
          const nextAudioOptions = hls.audioTracks.map((track, index) => ({
            id: `audio-${index}`,
            index,
            label: humanAudioLabel(track, index),
            language: track.lang || track.language || "",
            meta: languageName(track.lang || track.language)
          }));
          setAudioOptions(nextAudioOptions);
          let activeAudioIndex = typeof hls.audioTrack === "number" && hls.audioTrack >= 0 ? hls.audioTrack : 0;
          if (defaultSelectionRef.current.audioKey !== stream.hls_url) {
            const preferredIndex = nextAudioOptions.findIndex((option) => languageMatches(option, details?.originalLanguage));
            if (preferredIndex >= 0) {
              hls.audioTrack = preferredIndex;
              activeAudioIndex = preferredIndex;
            }
            defaultSelectionRef.current.audioKey = stream.hls_url;
          }
          setAudioSelection(activeAudioIndex);
        }
        if (media && media.textTracks) {
          const tracks = textTrackArray(media);
          if (tracks.length || Array.isArray(stream.subtitles)) {
            foundTrackData = true;
          }
          const nextSubtitleOptions = [
            { id: "off", index: -1, label: "Off", meta: "No subtitles" },
            ...tracks.map((track, index) => ({
              id: `subtitle-${index}`,
              index,
              label: track.label || languageName(track.language),
              language: track.language || "",
              meta: track.language ? languageName(track.language) : "Subtitle track"
            }))
          ];
          setSubtitleOptions(nextSubtitleOptions);
          let activeSubtitleIndex = tracks.findIndex((track) => track.mode === "showing");
          if (defaultSelectionRef.current.subtitleKey !== stream.hls_url) {
            const preferredIndex = tracks.findIndex((track) => languageMatches(track, "en"));
            const nextIndex = preferredIndex >= 0 ? preferredIndex : tracks.length ? 0 : -1;
            tracks.forEach((track, index) => {
              track.mode = index === nextIndex ? "showing" : "disabled";
            });
            activeSubtitleIndex = nextIndex;
            defaultSelectionRef.current.subtitleKey = stream.hls_url;
          }
          setSubtitleSelection(activeSubtitleIndex >= 0 ? activeSubtitleIndex + 1 : 0);
        }
        attempts += 1;
        if (foundTrackData || attempts > 40) {
          window.clearInterval(intervalId);
        }
      };
      const intervalId = window.setInterval(syncTracks, 250);
      syncTracks();
      return () => {
        active = false;
        window.clearInterval(intervalId);
      };
    }, [details?.originalLanguage, playerInstance, stream?.hls_url, stream?.subtitles]);
    (0, import_react16.useEffect)(() => {
      if (error) setErrorFocusIndex(0);
    }, [error]);
    const storedResumeTime = (0, import_react16.useMemo)(() => readResumeTimeFromStore(), []);
    const selectedEpisode = (0, import_react16.useMemo)(() => findEpisode(details), [details]);
    const subtitleTracks = (0, import_react16.useMemo)(() => buildSubtitleTracks(stream?.subtitles || []), [stream]);
    const subtitleCueStyles = (0, import_react16.useMemo)(() => buildSubtitleCueStyles(subtitleSettings), [subtitleSettings]);
    const currentSeekPreset = SEEK_PRESETS[seekPresetIndex] || SEEK_PRESETS[1];
    const currentSubtitleFontSize = (0, import_react16.useMemo)(() => findSettingOption(SUBTITLE_FONT_SIZE_OPTIONS, subtitleSettings.fontSizeId), [subtitleSettings.fontSizeId]);
    const currentSubtitleScale = (0, import_react16.useMemo)(() => findSettingOption(SUBTITLE_SCALE_OPTIONS, subtitleSettings.scaleId), [subtitleSettings.scaleId]);
    const currentSubtitleFontFamily = (0, import_react16.useMemo)(() => findSettingOption(SUBTITLE_FONT_FAMILY_OPTIONS, subtitleSettings.fontFamilyId), [subtitleSettings.fontFamilyId]);
    const currentSubtitleColor = (0, import_react16.useMemo)(() => findSettingOption(SUBTITLE_COLOR_OPTIONS, subtitleSettings.colorId), [subtitleSettings.colorId]);
    const currentSubtitleBackground = (0, import_react16.useMemo)(() => findSettingOption(SUBTITLE_BACKGROUND_OPTIONS, subtitleSettings.backgroundId), [subtitleSettings.backgroundId]);
    const currentSubtitleShift = (0, import_react16.useMemo)(() => findSettingOption(SUBTITLE_SHIFT_OPTIONS, subtitleSettings.shiftId), [subtitleSettings.shiftId]);
    const currentSubtitleMargin = (0, import_react16.useMemo)(() => findSettingOption(SUBTITLE_MARGIN_OPTIONS, subtitleSettings.marginId), [subtitleSettings.marginId]);
    const currentAudioLabel = (0, import_react16.useMemo)(() => {
      return audioOptions.find((option) => option.index === audioSelection)?.label || "Audio";
    }, [audioOptions, audioSelection]);
    const currentSubtitleLabel = (0, import_react16.useMemo)(() => {
      return subtitleOptions[subtitleSelection]?.label || "Subtitles";
    }, [subtitleOptions, subtitleSelection]);
    const currentSubtitleSettingsLabel = (0, import_react16.useMemo)(() => {
      return `${currentSubtitleScale.label} / ${currentSubtitleMargin.label}`;
    }, [currentSubtitleMargin.label, currentSubtitleScale.label]);
    const currentEpisodeLabel = (0, import_react16.useMemo)(() => {
      if (initial.type !== "tv") return "Episodes";
      if (!selectedEpisode) return `Episode ${initial.episode || "1"}`;
      return `E${selectedEpisode.episodeNumber}`;
    }, [selectedEpisode]);
    (0, import_react16.useEffect)(() => {
      window.__HAK_SEEK_SECONDS__ = nextSeekAmount(currentSeekPreset);
    }, [currentSeekPreset]);
    const persistPlaybackProgress = (0, import_react16.useCallback)((watchedSeconds, durationSeconds, options = {}) => {
      const watched = Number(watchedSeconds || 0);
      const duration = Number(durationSeconds || 0);
      if (!initial.tmdb_id || !Number.isFinite(watched) || watched <= 0) return;
      if (!Number.isFinite(duration) || duration <= 0) return;
      const store = readContinueWatchingStore();
      const key = String(initial.tmdb_id);
      const completed = Boolean(options.completed) || watched >= duration * 0.97 || duration - watched <= 45;
      if (completed) {
        if (store[key]) {
          delete store[key];
          writeContinueWatchingStore(store);
        }
        return;
      }
      const previous = store[key] || {};
      const title2 = details?.title || launchPreview.title || (initial.type === "tv" ? "TV Show" : "Movie");
      const season = String(details?.selectedSeason || initial.season || previous.last_season_watched || "1");
      const episode = String(initial.episode || previous.last_episode_watched || "1");
      const posterPath = details?.cardImage || launchPreview.cardImage || previous.poster_path || "";
      const backdropPath = details?.backdropUrl || launchPreview.backdropUrl || previous.backdrop_path || "";
      const nextRecord = {
        ...previous,
        id: Number(initial.tmdb_id || previous.id || 0),
        type: initial.type === "tv" ? "tv" : "movie",
        title: title2,
        poster_path: posterPath,
        backdrop_path: backdropPath,
        overview: details?.overview || previous.overview || "",
        genres: Array.isArray(details?.genres) ? details.genres : previous.genres || [],
        year: details?.year || previous.year || "",
        rating: details?.rating || previous.rating || "",
        progress: {
          watched,
          duration
        },
        last_updated: Date.now()
      };
      if (initial.type === "tv") {
        const progressKey = episodeProgressKey(season, episode);
        nextRecord.last_season_watched = season;
        nextRecord.last_episode_watched = episode;
        nextRecord.show_progress = {
          ...previous.show_progress || {},
          [progressKey]: {
            season,
            episode,
            title: selectedEpisode?.name || "",
            progress: {
              watched,
              duration
            }
          }
        };
      }
      store[key] = nextRecord;
      writeContinueWatchingStore(store);
    }, [details, initial.episode, initial.season, initial.tmdb_id, initial.type, launchPreview.backdropUrl, launchPreview.cardImage, launchPreview.title, selectedEpisode?.name]);
    const persistCurrentProgress = (0, import_react16.useCallback)((options = {}) => {
      if (!playerInstance) return;
      const watched = Number(playerInstance.getCurrentTime?.() || 0);
      const duration = Number(playerInstance.getDuration?.() || 0);
      if (!options.force && watched < 5) return;
      persistPlaybackProgress(watched, duration, options);
    }, [persistPlaybackProgress, playerInstance]);
    const handleProgress = (0, import_react16.useCallback)((progressState) => {
      const watched = Number(progressState?.playedSeconds || 0);
      if (!Number.isFinite(watched) || watched < 5) return;
      const now = Date.now();
      if (now - progressWriteRef.current.at < 4e3 && Math.abs(watched - progressWriteRef.current.watched) < 5) return;
      progressWriteRef.current = { at: now, watched };
      const duration = Number(playerInstance?.getDuration?.() || 0);
      persistPlaybackProgress(watched, duration);
    }, [persistPlaybackProgress, playerInstance]);
    (0, import_react16.useEffect)(() => {
      if (!playerInstance || !stream?.hls_url) return void 0;
      const offset = Number(currentSubtitleShift.value || 0);
      const linePercent = Number(currentSubtitleMargin.value || 90);
      let attempts = 0;
      const syncCueShift = () => {
        const media = playerInstance.getInternalPlayer?.();
        const tracks = textTrackArray(media);
        tracks.forEach((track) => {
          if (track.kind === "subtitles" || track.kind === "captions") {
            applyCueAdjustments(track, offset, linePercent, cueSnapshotRef.current);
          }
        });
        attempts += 1;
        if (tracks.some((track) => cueArray(track).length) || attempts > 20) {
          window.clearInterval(intervalId);
        }
      };
      const intervalId = window.setInterval(syncCueShift, 400);
      syncCueShift();
      return () => window.clearInterval(intervalId);
    }, [currentSubtitleMargin.value, currentSubtitleShift.value, playerInstance, stream?.hls_url]);
    (0, import_react16.useEffect)(() => {
      if (!playerReady || !playerInstance || resumeAppliedRef.current) return;
      const resumeAt = clampResumeTime(storedResumeTime, Number(playerInstance.getDuration?.() || 0));
      if (resumeAt > 0) {
        playerInstance.seekTo(resumeAt, "seconds");
      }
      resumeAppliedRef.current = true;
    }, [playerInstance, playerReady, storedResumeTime]);
    const handleBackToBrowse = (0, import_react16.useCallback)(() => {
      persistCurrentProgress({ force: true });
      backToBrowse();
    }, [persistCurrentProgress]);
    const handleSeek = (0, import_react16.useCallback)((direction) => {
      if (!playerInstance) return;
      const now = Date.now();
      if (now - lastSeekAtRef.current < 220) return;
      lastSeekAtRef.current = now;
      const amount = nextSeekAmount(currentSeekPreset);
      const currentTime = Number(playerInstance.getCurrentTime?.() || 0);
      const duration = Number(playerInstance.getDuration?.() || 0);
      const nextTime = Math.max(0, duration ? Math.min(duration - 1, currentTime + amount * direction) : currentTime + amount * direction);
      playerInstance.seekTo(nextTime, "seconds");
    }, [currentSeekPreset, playerInstance]);
    const tryAlternatePlayerMode = (0, import_react16.useCallback)((playerError) => {
      const nextMode = alternatePlayerMode(playerMode);
      if (playerModeAttemptsRef.current.has(nextMode)) return false;
      if (nextMode === PLAYER_MODE_NATIVE_HLS && !canUseNativeHls()) return false;
      playerModeAttemptsRef.current.add(nextMode);
      console.warn(`[player] retrying playback with ${nextMode} after error:`, playerError);
      setPlayerReady(false);
      setError("");
      setMenuState(null);
      setPlayerMode(nextMode);
      return true;
    }, [playerMode]);
    const openSettingChoiceMenu = (0, import_react16.useCallback)((kind, options, selectedId, parentIndex) => {
      const index = Math.max(0, options.findIndex((option) => option.id === selectedId));
      setMenuState({ kind, index, parentKind: "subtitle-settings", parentIndex });
    }, []);
    const openMenu = (0, import_react16.useCallback)((kind) => {
      if (kind === "audio") {
        if (audioOptions.length <= 1) return;
        const index = Math.max(0, audioOptions.findIndex((option) => option.index === audioSelection));
        setMenuState({ kind, index });
        return;
      }
      if (kind === "subtitles") {
        if (subtitleOptions.length <= 1) return;
        setMenuState({ kind, index: subtitleSelection });
        return;
      }
      if (kind === "seek") {
        setMenuState({ kind, index: seekPresetIndex });
        return;
      }
      if (kind === "subtitle-settings") {
        setMenuState({ kind, index: 0 });
        return;
      }
      if (kind === "episodes") {
        if (initial.type !== "tv" || !details?.episodes?.length) return;
        const index = Math.max(0, details.episodes.findIndex((episode) => String(episode.episodeNumber) === String(initial.episode || "1")));
        setMenuState({ kind, index });
      }
    }, [audioOptions, audioSelection, details, initial.episode, initial.type, seekPresetIndex, subtitleOptions, subtitleSelection]);
    const applyAudioSelection = (0, import_react16.useCallback)((optionIndex) => {
      const hls = playerInstance?.getInternalPlayer?.("hls");
      const selected = audioOptions[optionIndex];
      if (!hls || !selected) return;
      hls.audioTrack = selected.index;
      setAudioSelection(selected.index);
      setMenuState(null);
    }, [audioOptions, playerInstance]);
    const applySubtitleSelection = (0, import_react16.useCallback)((optionIndex) => {
      const media = playerInstance?.getInternalPlayer?.();
      if (!media) return;
      const selected = subtitleOptions[optionIndex] || subtitleOptions[0];
      const tracks = textTrackArray(media);
      tracks.forEach((track, index) => {
        track.mode = index === selected.index ? "showing" : "disabled";
      });
      setSubtitleSelection(optionIndex);
      setMenuState(null);
    }, [playerInstance, subtitleOptions]);
    const applySeekPreset = (0, import_react16.useCallback)((optionIndex) => {
      setSeekPresetIndex(optionIndex);
      seekStateRef.current = { direction: 0, count: 0, at: 0 };
      setMenuState(null);
    }, []);
    const applySubtitleSettingsMenuSelection = (0, import_react16.useCallback)((optionIndex) => {
      const groups = [
        { kind: "subtitle-font-size", options: SUBTITLE_FONT_SIZE_OPTIONS, selectedId: subtitleSettings.fontSizeId },
        { kind: "subtitle-scale", options: SUBTITLE_SCALE_OPTIONS, selectedId: subtitleSettings.scaleId },
        { kind: "subtitle-font-family", options: SUBTITLE_FONT_FAMILY_OPTIONS, selectedId: subtitleSettings.fontFamilyId },
        { kind: "subtitle-color", options: SUBTITLE_COLOR_OPTIONS, selectedId: subtitleSettings.colorId },
        { kind: "subtitle-background", options: SUBTITLE_BACKGROUND_OPTIONS, selectedId: subtitleSettings.backgroundId },
        { kind: "subtitle-shift", options: SUBTITLE_SHIFT_OPTIONS, selectedId: subtitleSettings.shiftId },
        { kind: "subtitle-margin", options: SUBTITLE_MARGIN_OPTIONS, selectedId: subtitleSettings.marginId }
      ];
      const nextGroup = groups[optionIndex];
      if (!nextGroup) return;
      openSettingChoiceMenu(nextGroup.kind, nextGroup.options, nextGroup.selectedId, optionIndex);
    }, [openSettingChoiceMenu, subtitleSettings.backgroundId, subtitleSettings.colorId, subtitleSettings.fontFamilyId, subtitleSettings.fontSizeId, subtitleSettings.marginId, subtitleSettings.scaleId, subtitleSettings.shiftId]);
    const applySubtitleSettingsSelection = (0, import_react16.useCallback)((kind, optionIndex) => {
      const mapping = {
        "subtitle-font-size": { key: "fontSizeId", options: SUBTITLE_FONT_SIZE_OPTIONS },
        "subtitle-scale": { key: "scaleId", options: SUBTITLE_SCALE_OPTIONS },
        "subtitle-font-family": { key: "fontFamilyId", options: SUBTITLE_FONT_FAMILY_OPTIONS },
        "subtitle-color": { key: "colorId", options: SUBTITLE_COLOR_OPTIONS },
        "subtitle-background": { key: "backgroundId", options: SUBTITLE_BACKGROUND_OPTIONS },
        "subtitle-shift": { key: "shiftId", options: SUBTITLE_SHIFT_OPTIONS },
        "subtitle-margin": { key: "marginId", options: SUBTITLE_MARGIN_OPTIONS }
      };
      const group = mapping[kind];
      const selected = group?.options?.[optionIndex];
      if (!group || !selected) return;
      setSubtitleSettings((current) => ({
        ...current,
        [group.key]: selected.id
      }));
      const parentIndex = typeof menuState?.parentIndex === "number" ? menuState.parentIndex : 0;
      setMenuState({ kind: "subtitle-settings", index: parentIndex });
    }, [menuState?.parentIndex]);
    const applyEpisodeSelection = (0, import_react16.useCallback)((optionIndex) => {
      const nextEpisode = details?.episodes?.[optionIndex];
      if (!nextEpisode) return;
      if (String(nextEpisode.episodeNumber) === String(initial.episode || "1")) {
        setMenuState(null);
        return;
      }
      persistCurrentProgress({ force: true });
      const nextPreview = mergePreview(launchPreview, details, nextEpisode);
      setLaunchPreview(nextPreview);
      writeSessionJson(PLAYER_PREVIEW_KEY, nextPreview);
      const restore = readSessionJson(PLAYER_RETURN_KEY);
      if (restore) {
        writeSessionJson(PLAYER_RETURN_KEY, {
          ...restore,
          season: Number(details?.selectedSeason || initial.season || 1),
          tmdbId: Number(initial.tmdb_id || restore.tmdbId || 0),
          type: initial.type === "tv" ? "tv" : "movie",
          createdAt: Date.now()
        });
      }
      window.location.replace(buildPlayerUrl(details?.selectedSeason || initial.season || 1, nextEpisode.episodeNumber));
    }, [details, initial.episode, initial.season, initial.tmdb_id, initial.type, launchPreview, persistCurrentProgress]);
    const menuOptions = (0, import_react16.useMemo)(() => {
      if (!menuState) return [];
      if (menuState.kind === "audio") {
        return audioOptions.map((option) => ({
          ...option,
          selected: option.index === audioSelection
        }));
      }
      if (menuState.kind === "subtitles") {
        return subtitleOptions.map((option, index) => ({
          ...option,
          selected: index === subtitleSelection
        }));
      }
      if (menuState.kind === "seek") {
        return SEEK_PRESETS.map((preset, index) => ({
          id: preset.id,
          label: preset.label,
          meta: preset.meta,
          selected: index === seekPresetIndex
        }));
      }
      if (menuState.kind === "subtitle-settings") {
        return [
          { id: "subtitle-font-size", label: "Text Size", meta: currentSubtitleFontSize.label },
          { id: "subtitle-scale", label: "Scale %", meta: currentSubtitleScale.label },
          { id: "subtitle-font-family", label: "Font", meta: currentSubtitleFontFamily.label },
          { id: "subtitle-color", label: "Color", meta: currentSubtitleColor.label },
          { id: "subtitle-background", label: "Background", meta: currentSubtitleBackground.label },
          { id: "subtitle-shift", label: "Time Shift", meta: currentSubtitleShift.label },
          { id: "subtitle-margin", label: "Bottom Margin", meta: currentSubtitleMargin.label }
        ];
      }
      if (menuState.kind === "subtitle-font-size") {
        return SUBTITLE_FONT_SIZE_OPTIONS.map((option) => ({ ...option, selected: option.id === subtitleSettings.fontSizeId }));
      }
      if (menuState.kind === "subtitle-scale") {
        return SUBTITLE_SCALE_OPTIONS.map((option) => ({ ...option, selected: option.id === subtitleSettings.scaleId }));
      }
      if (menuState.kind === "subtitle-font-family") {
        return SUBTITLE_FONT_FAMILY_OPTIONS.map((option) => ({ ...option, selected: option.id === subtitleSettings.fontFamilyId }));
      }
      if (menuState.kind === "subtitle-color") {
        return SUBTITLE_COLOR_OPTIONS.map((option) => ({ ...option, selected: option.id === subtitleSettings.colorId }));
      }
      if (menuState.kind === "subtitle-background") {
        return SUBTITLE_BACKGROUND_OPTIONS.map((option) => ({ ...option, selected: option.id === subtitleSettings.backgroundId }));
      }
      if (menuState.kind === "subtitle-shift") {
        return SUBTITLE_SHIFT_OPTIONS.map((option) => ({ ...option, selected: option.id === subtitleSettings.shiftId }));
      }
      if (menuState.kind === "subtitle-margin") {
        return SUBTITLE_MARGIN_OPTIONS.map((option) => ({ ...option, selected: option.id === subtitleSettings.marginId }));
      }
      if (menuState.kind === "episodes") {
        return (details?.episodes || []).map((episode) => ({
          id: `episode-${episode.episodeNumber}`,
          label: `E${episode.episodeNumber} ${episode.name || "Episode"}`,
          meta: episode.runtimeLabel || "Episode",
          selected: String(episode.episodeNumber) === String(initial.episode || "1")
        }));
      }
      return [];
    }, [audioOptions, audioSelection, currentSubtitleBackground.label, currentSubtitleColor.label, currentSubtitleFontFamily.label, currentSubtitleFontSize.label, currentSubtitleMargin.label, currentSubtitleScale.label, currentSubtitleShift.label, details, initial.episode, menuState, seekPresetIndex, subtitleOptions, subtitleSelection, subtitleSettings.backgroundId, subtitleSettings.colorId, subtitleSettings.fontFamilyId, subtitleSettings.fontSizeId, subtitleSettings.marginId, subtitleSettings.scaleId, subtitleSettings.shiftId]);
    (0, import_react16.useEffect)(() => {
      if (!menuState || !menuContainerRef.current) return;
      const focusedNode = menuContainerRef.current.querySelector(`[data-menu-index="${menuState.index}"]`);
      if (focusedNode && typeof focusedNode.scrollIntoView === "function") {
        focusedNode.scrollIntoView({ block: "nearest" });
      }
    }, [menuState]);
    (0, import_react16.useEffect)(() => {
      const onKeyDown = (event) => {
        const action = mapInput(event);
        if (!action) return;
        if (menuState) {
          if (action === "BACK" || action === "LEFT") {
            event.preventDefault();
            if (menuState.parentKind) {
              setMenuState({ kind: menuState.parentKind, index: menuState.parentIndex || 0 });
            } else {
              setMenuState(null);
            }
            return;
          }
          if (action === "UP" || action === "DOWN") {
            event.preventDefault();
            setMenuState((current) => {
              if (!current) return current;
              const total = menuOptions.length;
              if (!total) return current;
              const delta = action === "UP" ? -1 : 1;
              return {
                ...current,
                index: (current.index + delta + total) % total
              };
            });
            return;
          }
          if (action === "SELECT") {
            event.preventDefault();
            if (menuState.kind === "audio") applyAudioSelection(menuState.index);
            if (menuState.kind === "subtitles") applySubtitleSelection(menuState.index);
            if (menuState.kind === "seek") applySeekPreset(menuState.index);
            if (menuState.kind === "subtitle-settings") applySubtitleSettingsMenuSelection(menuState.index);
            if (menuState.kind === "subtitle-font-size" || menuState.kind === "subtitle-scale" || menuState.kind === "subtitle-font-family" || menuState.kind === "subtitle-color" || menuState.kind === "subtitle-background" || menuState.kind === "subtitle-shift" || menuState.kind === "subtitle-margin") {
              applySubtitleSettingsSelection(menuState.kind, menuState.index);
            }
            if (menuState.kind === "episodes") applyEpisodeSelection(menuState.index);
          }
          return;
        }
        if (error || !loading && !stream?.hls_url) {
          if (action === "BACK") {
            event.preventDefault();
            handleBackToBrowse();
            return;
          }
          if (action === "LEFT" || action === "UP") {
            event.preventDefault();
            setErrorFocusIndex(0);
            return;
          }
          if (action === "RIGHT" || action === "DOWN") {
            event.preventDefault();
            setErrorFocusIndex(1);
            return;
          }
          if (action === "SELECT") {
            event.preventDefault();
            if (errorFocusIndex === 0) {
              setReloadKey((value) => value + 1);
            } else {
              handleBackToBrowse();
            }
          }
          return;
        }
        if (loading || !playerReady) {
          if (action === "BACK") {
            event.preventDefault();
            handleBackToBrowse();
          }
          return;
        }
        if (action === "BACK") {
          event.preventDefault();
          handleBackToBrowse();
        }
      };
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }, [
      applyAudioSelection,
      applyEpisodeSelection,
      applySeekPreset,
      applySubtitleSelection,
      applySubtitleSettingsMenuSelection,
      applySubtitleSettingsSelection,
      error,
      errorFocusIndex,
      handleBackToBrowse,
      loading,
      menuOptions.length,
      menuState,
      playerReady,
      stream?.hls_url
    ]);
    const title = details?.title || launchPreview.title || (initial.type === "tv" ? "TV Show" : "Movie");
    const subTitle = initial.type === "tv" ? [keyLabel(details?.selectedSeason || initial.season, initial.episode), selectedEpisode?.name || launchPreview.subtitle].filter(Boolean).join(" - ") : [details?.year, details?.rating].filter(Boolean).join(" - ");
    const customButtons = (0, import_react16.useMemo)(() => {
      const buttons = [];
      if (initial.type === "tv" && details?.episodes?.length) {
        buttons.push({
          action: "custom",
          align: "left",
          label: `Episodes: ${currentEpisodeLabel}`,
          faIcon: faList,
          onPress: () => openMenu("episodes")
        });
      }
      buttons.push(
        {
          action: "custom",
          align: "left",
          label: `Seek: ${currentSeekPreset.label}`,
          faIcon: faGaugeHigh,
          onPress: () => openMenu("seek")
        },
        {
          action: "custom",
          align: "left",
          label: `Audio: ${currentAudioLabel}`,
          faIcon: faLanguage,
          onPress: () => openMenu("audio"),
          disable: audioOptions.length <= 1
        },
        {
          action: "custom",
          align: "center",
          label: "Seek Back",
          faIcon: faBackward,
          onPress: () => handleSeek(-1)
        },
        { action: "playpause", align: "center" },
        {
          action: "custom",
          align: "center",
          label: "Seek Forward",
          faIcon: faForward,
          onPress: () => handleSeek(1)
        },
        {
          action: "custom",
          align: "right",
          label: `Subs: ${currentSubtitleLabel}`,
          faIcon: faClosedCaptioning,
          onPress: () => openMenu("subtitles"),
          isSelectedFill: subtitleSelection > 0,
          disable: subtitleOptions.length <= 1
        },
        {
          action: "custom",
          align: "right",
          label: `Style: ${currentSubtitleSettingsLabel}`,
          faIcon: faSliders,
          onPress: () => openMenu("subtitle-settings")
        },
        { action: "mute", align: "right" }
      );
      return buttons;
    }, [
      currentAudioLabel,
      currentEpisodeLabel,
      currentSeekPreset.label,
      currentSubtitleLabel,
      currentSubtitleSettingsLabel,
      details?.episodes?.length,
      handleSeek,
      initial.type,
      openMenu,
      subtitleOptions.length,
      subtitleSelection,
      audioOptions.length
    ]);
    const showLoadingOverlay = loading || !stream?.hls_url || !playerReady;
    const showErrorScreen = Boolean(error || !loading && !stream?.hls_url);
    if (showErrorScreen) {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        ErrorScreen,
        {
          error: error || "Unable to load the fullscreen player.",
          preview: launchPreview,
          focusedIndex: errorFocusIndex,
          onRetry: () => setReloadKey((value) => value + 1),
          onBack: handleBackToBrowse
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: shellStyles.frame, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("style", { children: `${GLOBAL_STYLES}
${subtitleCueStyles}` }),
      stream?.hls_url ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        rm,
        {
          url: stream.hls_url,
          playing: parseBool(initial.autoplay, true),
          title,
          subTitle,
          width: "100%",
          height: "100%",
          style: { width: "100%", height: "100%" },
          customButtons,
          disableNav: Boolean(menuState || loading || !playerReady),
          hideControlsOnArrowUp: true,
          config: {
            file: {
              forceHLS: playerMode === PLAYER_MODE_HLS_JS,
              forceDisableHls: playerMode === PLAYER_MODE_NATIVE_HLS,
              tracks: subtitleTracks,
              hlsOptions: {
                enableWorker: true,
                lowLatencyMode: false
              },
              attributes: {
                playsInline: true,
                crossOrigin: "anonymous",
                autoPlay: parseBool(initial.autoplay, true)
              }
            }
          },
          onStart: () => setPlayerReady(true),
          onPlay: () => setPlayerReady(true),
          onPause: () => persistCurrentProgress({ force: true }),
          onProgress: handleProgress,
          onEnded: () => persistCurrentProgress({ completed: true, force: true }),
          onError: (playerError) => {
            const nextError = playerError instanceof Error ? playerError.message : "The video could not be played.";
            if (isAutoplayBlockedError(nextError)) {
              console.warn("[player] autoplay was blocked, leaving controls available for manual start:", nextError);
              setError("");
              setPlayerReady(true);
              return;
            }
            if (tryAlternatePlayerMode(nextError)) return;
            setError(nextError);
            setPlayerReady(false);
          }
        },
        `${stream.hls_url}:${playerMode}`
      ) : null,
      showLoadingOverlay ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(LoadingScreen, { preview: launchPreview }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TrackMenu, { menuState, options: menuOptions, detail: details, containerRef: menuContainerRef })
    ] });
  }
  var rootNode = document.getElementById("player-root");
  if (rootNode) {
    const root = (0, import_client.createRoot)(rootNode);
    root.render(/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(PlayerApp, {}));
  }
})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-tv-player/dist/index-r8XrYpcu.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
  (**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@fortawesome/free-solid-svg-icons/index.mjs:
  (*!
   * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   * Copyright 2024 Fonticons, Inc.
   *)
*/
