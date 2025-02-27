import { jsx as _, jsxs as b, Fragment as w } from "react/jsx-runtime";
import M, { createContext as k, useContext as x, useRef as N, useLayoutEffect as j, createElement as S, useEffect as P, useState as I, useCallback as v } from "react";
const C = k(null), Z = () => x(C), T = {
  modalTitle: "modal-fw__title",
  modalContent: "modal-content",
  modalContainer: "modal-fw"
};
function H({ onClose: a }) {
  return /* @__PURE__ */ _("button", { "aria-label": "close-modal", onClick: a, className: "modal-fw__close-button", children: "✕" });
}
function U({ onClose: a, title: u, buttons: l, children: s }) {
  return /* @__PURE__ */ b(w, { children: [
    u && /* @__PURE__ */ _("h2", { className: "modal-fw__title", "data-testid": T.modalTitle, children: u }),
    /* @__PURE__ */ _(H, { onClose: a }),
    /* @__PURE__ */ _("section", { className: "modal-fw__content", "data-testid": T.modalContent, children: s }),
    /* @__PURE__ */ _("div", { className: "modal-fw__footer", children: l })
  ] });
}
function F({ onClose: a, onConfirmed: u }) {
  return /* @__PURE__ */ b(w, { children: [
    /* @__PURE__ */ _("button", { autoFocus: !0, onClick: a, children: "close" }),
    !!u && /* @__PURE__ */ _(
      "button",
      {
        className: "is-primary",
        onClick: u,
        children: "confirm"
      }
    )
  ] });
}
function V(a) {
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
        var y = arguments[d];
        y && (c = f(c, s(y)));
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
      for (var y in c)
        u.call(c, y) && c[y] && (d = f(d, y));
      return d;
    }
    function f(c, d) {
      return d ? c ? c + " " + d : c + d : c;
    }
    a.exports ? (l.default = l, a.exports = l) : window.classNames = l;
  })();
})(A);
var B = A.exports;
const G = /* @__PURE__ */ V(B);
function q({
  onClose: a,
  children: u,
  title: l,
  onConfirmed: s,
  buttons: f,
  isBlocking: c,
  isFullScreen: d,
  contentComponentToRender: y
}) {
  const n = N(null);
  j(() => {
    const o = n == null ? void 0 : n.current;
    return o && (c ? o.showModal() : o.show()), () => {
      o && o.close();
    };
  }, []);
  const t = { onClose: a, onConfirmed: s };
  return /* @__PURE__ */ _(
    "dialog",
    {
      ref: n,
      className: G("modal-fw", { "modal-fw--full-screen": d }),
      "data-testid": T.modalContainer,
      onClose: a,
      children: S(
        y ?? U,
        {
          onClose: a,
          title: l,
          buttons: S(f ?? F, t),
          onConfirmed: s
        },
        u
      )
    }
  );
}
function K() {
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
var E = { exports: {} }, g = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var R;
function Y() {
  if (R) return g;
  R = 1;
  var a = M;
  function u(n) {
    var t = "https://react.dev/errors/" + n;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var o = 2; o < arguments.length; o++)
        t += "&args[]=" + encodeURIComponent(arguments[o]);
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
  function c(n, t, o) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: r == null ? null : "" + r,
      children: n,
      containerInfo: t,
      implementation: o
    };
  }
  var d = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(n, t) {
    if (n === "font") return "";
    if (typeof t == "string")
      return t === "use-credentials" ? t : "";
  }
  return g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, g.createPortal = function(n, t) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
      throw Error(u(299));
    return c(n, t, null, o);
  }, g.flushSync = function(n) {
    var t = d.T, o = s.p;
    try {
      if (d.T = null, s.p = 2, n) return n();
    } finally {
      d.T = t, s.p = o, s.d.f();
    }
  }, g.preconnect = function(n, t) {
    typeof n == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, s.d.C(n, t));
  }, g.prefetchDNS = function(n) {
    typeof n == "string" && s.d.D(n);
  }, g.preinit = function(n, t) {
    if (typeof n == "string" && t && typeof t.as == "string") {
      var o = t.as, r = y(o, t.crossOrigin), e = typeof t.integrity == "string" ? t.integrity : void 0, i = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
      o === "style" ? s.d.S(
        n,
        typeof t.precedence == "string" ? t.precedence : void 0,
        {
          crossOrigin: r,
          integrity: e,
          fetchPriority: i
        }
      ) : o === "script" && s.d.X(n, {
        crossOrigin: r,
        integrity: e,
        fetchPriority: i,
        nonce: typeof t.nonce == "string" ? t.nonce : void 0
      });
    }
  }, g.preinitModule = function(n, t) {
    if (typeof n == "string")
      if (typeof t == "object" && t !== null) {
        if (t.as == null || t.as === "script") {
          var o = y(
            t.as,
            t.crossOrigin
          );
          s.d.M(n, {
            crossOrigin: o,
            integrity: typeof t.integrity == "string" ? t.integrity : void 0,
            nonce: typeof t.nonce == "string" ? t.nonce : void 0
          });
        }
      } else t == null && s.d.M(n);
  }, g.preload = function(n, t) {
    if (typeof n == "string" && typeof t == "object" && t !== null && typeof t.as == "string") {
      var o = t.as, r = y(o, t.crossOrigin);
      s.d.L(n, o, {
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
  }, g.preloadModule = function(n, t) {
    if (typeof n == "string")
      if (t) {
        var o = y(t.as, t.crossOrigin);
        s.d.m(n, {
          as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
          crossOrigin: o,
          integrity: typeof t.integrity == "string" ? t.integrity : void 0
        });
      } else s.d.m(n);
  }, g.requestFormReset = function(n) {
    s.d.r(n);
  }, g.unstable_batchedUpdates = function(n, t) {
    return n(t);
  }, g.useFormState = function(n, t, o) {
    return d.H.useFormState(n, t, o);
  }, g.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, g.version = "19.0.0", g;
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
var D;
function z() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && function() {
    function a() {
    }
    function u(r) {
      return "" + r;
    }
    function l(r, e, i) {
      var p = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        u(p);
        var h = !1;
      } catch {
        h = !0;
      }
      return h && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && p[Symbol.toStringTag] || p.constructor.name || "Object"
      ), u(p)), {
        $$typeof: t,
        key: p == null ? null : "" + p,
        children: r,
        containerInfo: e,
        implementation: i
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
      var r = o.H;
      return r === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), r;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var y = M, n = {
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
    }, t = Symbol.for("react.portal"), o = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), m.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n, m.createPortal = function(r, e) {
      var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return l(r, e, null, i);
    }, m.flushSync = function(r) {
      var e = o.T, i = n.p;
      try {
        if (o.T = null, n.p = 2, r)
          return r();
      } finally {
        o.T = e, n.p = i, n.d.f() && console.error(
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
        var i = e.as, p = s(i, e.crossOrigin), h = typeof e.integrity == "string" ? e.integrity : void 0, O = typeof e.fetchPriority == "string" ? e.fetchPriority : void 0;
        i === "style" ? n.d.S(
          r,
          typeof e.precedence == "string" ? e.precedence : void 0,
          {
            crossOrigin: p,
            integrity: h,
            fetchPriority: O
          }
        ) : i === "script" && n.d.X(r, {
          crossOrigin: p,
          integrity: h,
          fetchPriority: O,
          nonce: typeof e.nonce == "string" ? e.nonce : void 0
        });
      }
    }, m.preinitModule = function(r, e) {
      var i = "";
      if (typeof r == "string" && r || (i += " The `href` argument encountered was " + f(r) + "."), e !== void 0 && typeof e != "object" ? i += " The `options` argument encountered was " + f(e) + "." : e && "as" in e && e.as !== "script" && (i += " The `as` option encountered was " + c(e.as) + "."), i)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          i
        );
      else
        switch (i = e && typeof e.as == "string" ? e.as : "script", i) {
          case "script":
            break;
          default:
            i = c(i), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              i,
              r
            );
        }
      typeof r == "string" && (typeof e == "object" && e !== null ? (e.as == null || e.as === "script") && (i = s(
        e.as,
        e.crossOrigin
      ), n.d.M(r, {
        crossOrigin: i,
        integrity: typeof e.integrity == "string" ? e.integrity : void 0,
        nonce: typeof e.nonce == "string" ? e.nonce : void 0
      })) : e == null && n.d.M(r));
    }, m.preload = function(r, e) {
      var i = "";
      if (typeof r == "string" && r || (i += " The `href` argument encountered was " + f(r) + "."), e == null || typeof e != "object" ? i += " The `options` argument encountered was " + f(e) + "." : typeof e.as == "string" && e.as || (i += " The `as` option encountered was " + f(e.as) + "."), i && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        i
      ), typeof r == "string" && typeof e == "object" && e !== null && typeof e.as == "string") {
        i = e.as;
        var p = s(
          i,
          e.crossOrigin
        );
        n.d.L(r, i, {
          crossOrigin: p,
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
      var i = "";
      typeof r == "string" && r || (i += " The `href` argument encountered was " + f(r) + "."), e !== void 0 && typeof e != "object" ? i += " The `options` argument encountered was " + f(e) + "." : e && "as" in e && typeof e.as != "string" && (i += " The `as` option encountered was " + f(e.as) + "."), i && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        i
      ), typeof r == "string" && (e ? (i = s(
        e.as,
        e.crossOrigin
      ), n.d.m(r, {
        as: typeof e.as == "string" && e.as !== "script" ? e.as : void 0,
        crossOrigin: i,
        integrity: typeof e.integrity == "string" ? e.integrity : void 0
      })) : n.d.m(r));
    }, m.requestFormReset = function(r) {
      n.d.r(r);
    }, m.unstable_batchedUpdates = function(r, e) {
      return r(e);
    }, m.useFormState = function(r, e, i) {
      return d().useFormState(r, e, i);
    }, m.useFormStatus = function() {
      return d().useHostTransitionStatus();
    }, m.version = "19.0.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), m;
}
function L() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L);
    } catch (a) {
      console.error(a);
    }
  }
}
process.env.NODE_ENV === "production" ? (L(), E.exports = Y()) : E.exports = z();
var $ = E.exports;
function ee(a) {
  const { portalRoot: u } = K(), [
    l,
    s
  ] = I([]), f = v((n) => {
    const t = n.id || self.crypto.randomUUID();
    return s(
      (o) => [...o, { ...n, id: t }]
    ), t;
  }, []), c = v((n) => {
    s((t) => t.filter(({ id: o }) => o !== n));
  }, []), d = v((n) => {
    s((t) => {
      const o = t.find(({ id: r }) => r === n);
      return o ? [o, ...t.filter(({ id: r }) => r !== n)] : t;
    });
  }, []), y = v((n) => {
    s((t) => {
      const o = t.find(({ id: r }) => r === n);
      return o ? [...t.filter(({ id: r }) => r !== n), o] : t;
    });
  }, []);
  return /* @__PURE__ */ b(C.Provider, { value: { openNewModal: f, close: c, moveToBack: d, moveToFront: y }, children: [
    a.children,
    u.current && $.createPortal(
      l.filter((n, t) => W(n, l, t)).map((n) => /* @__PURE__ */ S(
        q,
        {
          ...n,
          onClose: () => {
            var t;
            (t = n.onClose) == null || t.call(n), c(n.id);
          },
          ...n.onConfirmed && {
            onConfirmed: () => {
              var t;
              (t = n.onConfirmed) == null || t.call(n, n.id);
            }
          },
          key: n.id
        },
        n.children
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
  ee as ModalProvider,
  Z as useModal
};
