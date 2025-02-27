import { jsxs as O, Fragment as R, jsx as p } from "react/jsx-runtime";
import w, { createContext as k, useContext as I, useRef as N, useLayoutEffect as j, createElement as T, useEffect as P, useState as H, useCallback as v } from "react";
const C = k(null), Q = () => I(C);
function U(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var A = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(a) {
  (function() {
    var u = {}.hasOwnProperty;
    function l() {
      for (var c = "", d = 0; d < arguments.length; d++) {
        var g = arguments[d];
        g && (c = f(c, s(g)));
      }
      return c;
    }
    function s(c) {
      if (typeof c == "string" || typeof c == "number")
        return c;
      if (typeof c != "object")
        return "";
      if (Array.isArray(c))
        return l.apply(null, c);
      if (c.toString !== Object.prototype.toString && !c.toString.toString().includes("[native code]"))
        return c.toString();
      var d = "";
      for (var g in c)
        u.call(c, g) && c[g] && (d = f(d, g));
      return d;
    }
    function f(c, d) {
      return d ? c ? c + " " + d : c + d : c;
    }
    a.exports ? (l.default = l, a.exports = l) : window.classNames = l;
  })();
})(A);
var F = A.exports;
const V = /* @__PURE__ */ U(F), E = {
  modalTitle: "modal-fw__title",
  modalContent: "modal-fw-content",
  modalContainer: "modal-fw"
};
function B({ onClose: a, onConfirmed: u }) {
  return /* @__PURE__ */ O(R, { children: [
    /* @__PURE__ */ p("button", { autoFocus: !0, onClick: a, children: "close" }),
    !!u && /* @__PURE__ */ p(
      "button",
      {
        className: "is-primary",
        onClick: u,
        children: "confirm"
      }
    )
  ] });
}
function L({ onClose: a }) {
  return /* @__PURE__ */ p("button", { "aria-label": "close-modal", onClick: a, className: "modal-fw__close-button", children: "✕" });
}
function G({ onClose: a, title: u, buttons: l, children: s }) {
  return /* @__PURE__ */ O(R, { children: [
    u && /* @__PURE__ */ p("h2", { className: "modal-fw__title", "data-testid": E.modalTitle, children: u }),
    /* @__PURE__ */ p(L, { onClose: a }),
    /* @__PURE__ */ p("section", { className: "modal-fw__content", "data-testid": E.modalContent, children: s }),
    /* @__PURE__ */ p("div", { className: "modal-fw__footer", children: l })
  ] });
}
function ee({ src: a, altText: u, onClose: l, title: s }) {
  return /* @__PURE__ */ O(R, { children: [
    /* @__PURE__ */ p("h2", { children: s }),
    /* @__PURE__ */ p(L, { onClose: l }),
    /* @__PURE__ */ p("object", { "aria-label": u, data: a, children: /* @__PURE__ */ p("img", { src: "/image-not-found.png?url", alt: "image not found" }) })
  ] });
}
function q({
  onClose: a,
  children: u,
  title: l,
  onConfirmed: s,
  buttons: f,
  isBlocking: c,
  isFullScreen: d,
  getLayout: g,
  zIndex: n
}) {
  const t = N(null);
  j(() => {
    const r = t == null ? void 0 : t.current;
    return r && (c ? r.showModal() : r.show()), () => {
      r && r.close();
    };
  }, []);
  const i = { onClose: a, onConfirmed: s };
  return /* @__PURE__ */ p(
    "dialog",
    {
      ref: t,
      className: V("modal-fw", { "modal-fw--full-screen": d }),
      "data-testid": E.modalContainer,
      onClose: a,
      style: { zIndex: n },
      children: (g == null ? void 0 : g({ onClose: a })) ?? T(
        G,
        {
          onClose: a,
          title: l,
          buttons: T(f ?? B, i),
          onConfirmed: s
        },
        u
      )
    }
  );
}
function z() {
  const a = N(null);
  return P(
    () => {
      const u = document.createElement("div");
      return document.body.appendChild(u), a.current = u, () => {
        a.current && document.body.removeChild(a.current);
      };
    },
    []
  ), { portalRoot: a };
}
var b = { exports: {} }, y = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function K() {
  if (D) return y;
  D = 1;
  var a = w;
  function u(n) {
    var t = "https://react.dev/errors/" + n;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++)
        t += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return "Minified React error #" + n + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function l() {
  }
  var s = {
    d: {
      f: l,
      r: function() {
        throw Error(u(522));
      },
      D: l,
      C: l,
      L: l,
      m: l,
      X: l,
      S: l,
      M: l
    },
    p: 0,
    findDOMNode: null
  }, f = Symbol.for("react.portal");
  function c(n, t, i) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: r == null ? null : "" + r,
      children: n,
      containerInfo: t,
      implementation: i
    };
  }
  var d = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(n, t) {
    if (n === "font") return "";
    if (typeof t == "string")
      return t === "use-credentials" ? t : "";
  }
  return y.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, y.createPortal = function(n, t) {
    var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
      throw Error(u(299));
    return c(n, t, null, i);
  }, y.flushSync = function(n) {
    var t = d.T, i = s.p;
    try {
      if (d.T = null, s.p = 2, n) return n();
    } finally {
      d.T = t, s.p = i, s.d.f();
    }
  }, y.preconnect = function(n, t) {
    typeof n == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, s.d.C(n, t));
  }, y.prefetchDNS = function(n) {
    typeof n == "string" && s.d.D(n);
  }, y.preinit = function(n, t) {
    if (typeof n == "string" && t && typeof t.as == "string") {
      var i = t.as, r = g(i, t.crossOrigin), e = typeof t.integrity == "string" ? t.integrity : void 0, o = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
      i === "style" ? s.d.S(
        n,
        typeof t.precedence == "string" ? t.precedence : void 0,
        {
          crossOrigin: r,
          integrity: e,
          fetchPriority: o
        }
      ) : i === "script" && s.d.X(n, {
        crossOrigin: r,
        integrity: e,
        fetchPriority: o,
        nonce: typeof t.nonce == "string" ? t.nonce : void 0
      });
    }
  }, y.preinitModule = function(n, t) {
    if (typeof n == "string")
      if (typeof t == "object" && t !== null) {
        if (t.as == null || t.as === "script") {
          var i = g(
            t.as,
            t.crossOrigin
          );
          s.d.M(n, {
            crossOrigin: i,
            integrity: typeof t.integrity == "string" ? t.integrity : void 0,
            nonce: typeof t.nonce == "string" ? t.nonce : void 0
          });
        }
      } else t == null && s.d.M(n);
  }, y.preload = function(n, t) {
    if (typeof n == "string" && typeof t == "object" && t !== null && typeof t.as == "string") {
      var i = t.as, r = g(i, t.crossOrigin);
      s.d.L(n, i, {
        crossOrigin: r,
        integrity: typeof t.integrity == "string" ? t.integrity : void 0,
        nonce: typeof t.nonce == "string" ? t.nonce : void 0,
        type: typeof t.type == "string" ? t.type : void 0,
        fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
        referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
        imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
        imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
        media: typeof t.media == "string" ? t.media : void 0
      });
    }
  }, y.preloadModule = function(n, t) {
    if (typeof n == "string")
      if (t) {
        var i = g(t.as, t.crossOrigin);
        s.d.m(n, {
          as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
          crossOrigin: i,
          integrity: typeof t.integrity == "string" ? t.integrity : void 0
        });
      } else s.d.m(n);
  }, y.requestFormReset = function(n) {
    s.d.r(n);
  }, y.unstable_batchedUpdates = function(n, t) {
    return n(t);
  }, y.useFormState = function(n, t, i) {
    return d.H.useFormState(n, t, i);
  }, y.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, y.version = "19.0.0", y;
}
var m = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M;
function Y() {
  return M || (M = 1, process.env.NODE_ENV !== "production" && function() {
    function a() {
    }
    function u(r) {
      return "" + r;
    }
    function l(r, e, o) {
      var _ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        u(_);
        var h = !1;
      } catch {
        h = !0;
      }
      return h && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && _[Symbol.toStringTag] || _.constructor.name || "Object"
      ), u(_)), {
        $$typeof: t,
        key: _ == null ? null : "" + _,
        children: r,
        containerInfo: e,
        implementation: o
      };
    }
    function s(r, e) {
      if (r === "font") return "";
      if (typeof e == "string")
        return e === "use-credentials" ? e : "";
    }
    function f(r) {
      return r === null ? "`null`" : r === void 0 ? "`undefined`" : r === "" ? "an empty string" : 'something with type "' + typeof r + '"';
    }
    function c(r) {
      return r === null ? "`null`" : r === void 0 ? "`undefined`" : r === "" ? "an empty string" : typeof r == "string" ? JSON.stringify(r) : typeof r == "number" ? "`" + r + "`" : 'something with type "' + typeof r + '"';
    }
    function d() {
      var r = i.H;
      return r === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), r;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var g = w, n = {
      d: {
        f: a,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: a,
        C: a,
        L: a,
        m: a,
        X: a,
        S: a,
        M: a
      },
      p: 0,
      findDOMNode: null
    }, t = Symbol.for("react.portal"), i = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), m.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n, m.createPortal = function(r, e) {
      var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return l(r, e, null, o);
    }, m.flushSync = function(r) {
      var e = i.T, o = n.p;
      try {
        if (i.T = null, n.p = 2, r)
          return r();
      } finally {
        i.T = e, n.p = o, n.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, m.preconnect = function(r, e) {
      typeof r == "string" && r ? e != null && typeof e != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        c(e)
      ) : e != null && typeof e.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        f(e.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        f(r)
      ), typeof r == "string" && (e ? (e = e.crossOrigin, e = typeof e == "string" ? e === "use-credentials" ? e : "" : void 0) : e = null, n.d.C(r, e));
    }, m.prefetchDNS = function(r) {
      if (typeof r != "string" || !r)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          f(r)
        );
      else if (1 < arguments.length) {
        var e = arguments[1];
        typeof e == "object" && e.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          c(e)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          c(e)
        );
      }
      typeof r == "string" && n.d.D(r);
    }, m.preinit = function(r, e) {
      if (typeof r == "string" && r ? e == null || typeof e != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        c(e)
      ) : e.as !== "style" && e.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        c(e.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        f(r)
      ), typeof r == "string" && e && typeof e.as == "string") {
        var o = e.as, _ = s(o, e.crossOrigin), h = typeof e.integrity == "string" ? e.integrity : void 0, S = typeof e.fetchPriority == "string" ? e.fetchPriority : void 0;
        o === "style" ? n.d.S(
          r,
          typeof e.precedence == "string" ? e.precedence : void 0,
          {
            crossOrigin: _,
            integrity: h,
            fetchPriority: S
          }
        ) : o === "script" && n.d.X(r, {
          crossOrigin: _,
          integrity: h,
          fetchPriority: S,
          nonce: typeof e.nonce == "string" ? e.nonce : void 0
        });
      }
    }, m.preinitModule = function(r, e) {
      var o = "";
      if (typeof r == "string" && r || (o += " The `href` argument encountered was " + f(r) + "."), e !== void 0 && typeof e != "object" ? o += " The `options` argument encountered was " + f(e) + "." : e && "as" in e && e.as !== "script" && (o += " The `as` option encountered was " + c(e.as) + "."), o)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          o
        );
      else
        switch (o = e && typeof e.as == "string" ? e.as : "script", o) {
          case "script":
            break;
          default:
            o = c(o), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              o,
              r
            );
        }
      typeof r == "string" && (typeof e == "object" && e !== null ? (e.as == null || e.as === "script") && (o = s(
        e.as,
        e.crossOrigin
      ), n.d.M(r, {
        crossOrigin: o,
        integrity: typeof e.integrity == "string" ? e.integrity : void 0,
        nonce: typeof e.nonce == "string" ? e.nonce : void 0
      })) : e == null && n.d.M(r));
    }, m.preload = function(r, e) {
      var o = "";
      if (typeof r == "string" && r || (o += " The `href` argument encountered was " + f(r) + "."), e == null || typeof e != "object" ? o += " The `options` argument encountered was " + f(e) + "." : typeof e.as == "string" && e.as || (o += " The `as` option encountered was " + f(e.as) + "."), o && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        o
      ), typeof r == "string" && typeof e == "object" && e !== null && typeof e.as == "string") {
        o = e.as;
        var _ = s(
          o,
          e.crossOrigin
        );
        n.d.L(r, o, {
          crossOrigin: _,
          integrity: typeof e.integrity == "string" ? e.integrity : void 0,
          nonce: typeof e.nonce == "string" ? e.nonce : void 0,
          type: typeof e.type == "string" ? e.type : void 0,
          fetchPriority: typeof e.fetchPriority == "string" ? e.fetchPriority : void 0,
          referrerPolicy: typeof e.referrerPolicy == "string" ? e.referrerPolicy : void 0,
          imageSrcSet: typeof e.imageSrcSet == "string" ? e.imageSrcSet : void 0,
          imageSizes: typeof e.imageSizes == "string" ? e.imageSizes : void 0,
          media: typeof e.media == "string" ? e.media : void 0
        });
      }
    }, m.preloadModule = function(r, e) {
      var o = "";
      typeof r == "string" && r || (o += " The `href` argument encountered was " + f(r) + "."), e !== void 0 && typeof e != "object" ? o += " The `options` argument encountered was " + f(e) + "." : e && "as" in e && typeof e.as != "string" && (o += " The `as` option encountered was " + f(e.as) + "."), o && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        o
      ), typeof r == "string" && (e ? (o = s(
        e.as,
        e.crossOrigin
      ), n.d.m(r, {
        as: typeof e.as == "string" && e.as !== "script" ? e.as : void 0,
        crossOrigin: o,
        integrity: typeof e.integrity == "string" ? e.integrity : void 0
      })) : n.d.m(r));
    }, m.requestFormReset = function(r) {
      n.d.r(r);
    }, m.unstable_batchedUpdates = function(r, e) {
      return r(e);
    }, m.useFormState = function(r, e, o) {
      return d().useFormState(r, e, o);
    }, m.useFormStatus = function() {
      return d().useHostTransitionStatus();
    }, m.version = "19.0.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), m;
}
function x() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x);
    } catch (a) {
      console.error(a);
    }
  }
}
process.env.NODE_ENV === "production" ? (x(), b.exports = K()) : b.exports = Y();
var $ = b.exports;
function te(a) {
  const { portalRoot: u } = z(), [
    l,
    s
  ] = H([]), f = v((t) => {
    const i = t.id || self.crypto.randomUUID();
    return s(
      (r) => [...r, { ...t, id: i, zIndex: 0 }]
    ), i;
  }, []), c = v((t) => {
    s((i) => i.filter(({ id: r }) => r !== t));
  }, []), d = v((t) => {
    s((i) => {
      const r = i.find(({ id: e }) => e === t);
      return r ? [r, ...i.filter(({ id: e }) => e !== t)] : i;
    });
  }, []), g = v((t) => {
    s((i) => {
      const r = i.find(({ id: e }) => e === t);
      return r ? [...i.filter(({ id: e }) => e !== t), r] : i;
    });
  }, []), n = v((t, i) => {
    s((r) => {
      const e = r.find(({ id: o }) => o === t);
      return e ? [
        ...r.filter(({ id: o }) => o !== t),
        { ...e, zIndex: i }
      ] : r;
    });
  }, []);
  return /* @__PURE__ */ O(C.Provider, { value: { openNewModal: f, close: c, moveToBack: d, moveToFront: g, setZIndex: n }, children: [
    a.children,
    u.current && $.createPortal(
      l.filter((t, i) => W(t, l, i)).map((t) => T(
        q,
        {
          ...t,
          onClose: () => {
            var i;
            (i = t.onClose) == null || i.call(t), c(t.id);
          },
          ...t.onConfirmed && {
            onConfirmed: () => {
              var i;
              (i = t.onConfirmed) == null || i.call(t, t.id);
            }
          },
          // not sure why TS won't understand this syntax
          key: t.id
        },
        t.children
      )),
      u.current
    )
  ] });
}
function W(a, u, l) {
  return !a.isBlocking || X(u, l);
}
function X(a, u) {
  return a.length - 1 === u;
}
export {
  ee as ImageModalLayout,
  te as ModalProvider,
  Q as useModal
};
