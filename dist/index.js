"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // node_modules/.pnpm/@auth0+auth0-spa-js@2.0.8/node_modules/@auth0/auth0-spa-js/dist/auth0-spa-js.production.esm.js
  function e(e2, t2) {
    var i2 = {};
    for (var o2 in e2)
      Object.prototype.hasOwnProperty.call(e2, o2) && t2.indexOf(o2) < 0 && (i2[o2] = e2[o2]);
    if (null != e2 && "function" == typeof Object.getOwnPropertySymbols) {
      var n2 = 0;
      for (o2 = Object.getOwnPropertySymbols(e2); n2 < o2.length; n2++)
        t2.indexOf(o2[n2]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, o2[n2]) && (i2[o2[n2]] = e2[o2[n2]]);
    }
    return i2;
  }
  var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
  function i(e2) {
    return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
  }
  function o(e2, t2) {
    return e2(t2 = { exports: {} }, t2.exports), t2.exports;
  }
  var n = o(function(e2, t2) {
    Object.defineProperty(t2, "__esModule", { value: true });
    var i2 = function() {
      function e3() {
        var e4 = this;
        this.locked = /* @__PURE__ */ new Map(), this.addToLocked = function(t3, i3) {
          var o2 = e4.locked.get(t3);
          void 0 === o2 ? void 0 === i3 ? e4.locked.set(t3, []) : e4.locked.set(t3, [i3]) : void 0 !== i3 && (o2.unshift(i3), e4.locked.set(t3, o2));
        }, this.isLocked = function(t3) {
          return e4.locked.has(t3);
        }, this.lock = function(t3) {
          return new Promise(function(i3, o2) {
            e4.isLocked(t3) ? e4.addToLocked(t3, i3) : (e4.addToLocked(t3), i3());
          });
        }, this.unlock = function(t3) {
          var i3 = e4.locked.get(t3);
          if (void 0 !== i3 && 0 !== i3.length) {
            var o2 = i3.pop();
            e4.locked.set(t3, i3), void 0 !== o2 && setTimeout(o2, 0);
          } else
            e4.locked.delete(t3);
        };
      }
      return e3.getInstance = function() {
        return void 0 === e3.instance && (e3.instance = new e3()), e3.instance;
      }, e3;
    }();
    t2.default = function() {
      return i2.getInstance();
    };
  });
  i(n);
  var a = i(o(function(e2, i2) {
    var o2 = t && t.__awaiter || function(e3, t2, i3, o3) {
      return new (i3 || (i3 = Promise))(function(n2, a3) {
        function s3(e4) {
          try {
            c3(o3.next(e4));
          } catch (e5) {
            a3(e5);
          }
        }
        function r3(e4) {
          try {
            c3(o3.throw(e4));
          } catch (e5) {
            a3(e5);
          }
        }
        function c3(e4) {
          e4.done ? n2(e4.value) : new i3(function(t3) {
            t3(e4.value);
          }).then(s3, r3);
        }
        c3((o3 = o3.apply(e3, t2 || [])).next());
      });
    }, a2 = t && t.__generator || function(e3, t2) {
      var i3, o3, n2, a3, s3 = { label: 0, sent: function() {
        if (1 & n2[0])
          throw n2[1];
        return n2[1];
      }, trys: [], ops: [] };
      return a3 = { next: r3(0), throw: r3(1), return: r3(2) }, "function" == typeof Symbol && (a3[Symbol.iterator] = function() {
        return this;
      }), a3;
      function r3(a4) {
        return function(r4) {
          return function(a5) {
            if (i3)
              throw new TypeError("Generator is already executing.");
            for (; s3; )
              try {
                if (i3 = 1, o3 && (n2 = 2 & a5[0] ? o3.return : a5[0] ? o3.throw || ((n2 = o3.return) && n2.call(o3), 0) : o3.next) && !(n2 = n2.call(o3, a5[1])).done)
                  return n2;
                switch (o3 = 0, n2 && (a5 = [2 & a5[0], n2.value]), a5[0]) {
                  case 0:
                  case 1:
                    n2 = a5;
                    break;
                  case 4:
                    return s3.label++, { value: a5[1], done: false };
                  case 5:
                    s3.label++, o3 = a5[1], a5 = [0];
                    continue;
                  case 7:
                    a5 = s3.ops.pop(), s3.trys.pop();
                    continue;
                  default:
                    if (!(n2 = s3.trys, (n2 = n2.length > 0 && n2[n2.length - 1]) || 6 !== a5[0] && 2 !== a5[0])) {
                      s3 = 0;
                      continue;
                    }
                    if (3 === a5[0] && (!n2 || a5[1] > n2[0] && a5[1] < n2[3])) {
                      s3.label = a5[1];
                      break;
                    }
                    if (6 === a5[0] && s3.label < n2[1]) {
                      s3.label = n2[1], n2 = a5;
                      break;
                    }
                    if (n2 && s3.label < n2[2]) {
                      s3.label = n2[2], s3.ops.push(a5);
                      break;
                    }
                    n2[2] && s3.ops.pop(), s3.trys.pop();
                    continue;
                }
                a5 = t2.call(e3, s3);
              } catch (e4) {
                a5 = [6, e4], o3 = 0;
              } finally {
                i3 = n2 = 0;
              }
            if (5 & a5[0])
              throw a5[1];
            return { value: a5[0] ? a5[1] : void 0, done: true };
          }([a4, r4]);
        };
      }
    };
    Object.defineProperty(i2, "__esModule", { value: true });
    var s2 = "browser-tabs-lock-key";
    function r2(e3) {
      return new Promise(function(t2) {
        return setTimeout(t2, e3);
      });
    }
    function c2(e3) {
      for (var t2 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", i3 = "", o3 = 0; o3 < e3; o3++) {
        i3 += t2[Math.floor(Math.random() * t2.length)];
      }
      return i3;
    }
    var d2 = function() {
      function e3() {
        this.acquiredIatSet = /* @__PURE__ */ new Set(), this.id = Date.now().toString() + c2(15), this.acquireLock = this.acquireLock.bind(this), this.releaseLock = this.releaseLock.bind(this), this.releaseLock__private__ = this.releaseLock__private__.bind(this), this.waitForSomethingToChange = this.waitForSomethingToChange.bind(this), this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(this), void 0 === e3.waiters && (e3.waiters = []);
      }
      return e3.prototype.acquireLock = function(t2, i3) {
        return void 0 === i3 && (i3 = 5e3), o2(this, void 0, void 0, function() {
          var o3, n2, d3, u2, l2, h2;
          return a2(this, function(a3) {
            switch (a3.label) {
              case 0:
                o3 = Date.now() + c2(4), n2 = Date.now() + i3, d3 = s2 + "-" + t2, u2 = window.localStorage, a3.label = 1;
              case 1:
                return Date.now() < n2 ? [4, r2(30)] : [3, 8];
              case 2:
                return a3.sent(), null !== u2.getItem(d3) ? [3, 5] : (l2 = this.id + "-" + t2 + "-" + o3, [4, r2(Math.floor(25 * Math.random()))]);
              case 3:
                return a3.sent(), u2.setItem(d3, JSON.stringify({ id: this.id, iat: o3, timeoutKey: l2, timeAcquired: Date.now(), timeRefreshed: Date.now() })), [4, r2(30)];
              case 4:
                return a3.sent(), null !== (h2 = u2.getItem(d3)) && (h2 = JSON.parse(h2)).id === this.id && h2.iat === o3 ? (this.acquiredIatSet.add(o3), this.refreshLockWhileAcquired(d3, o3), [2, true]) : [3, 7];
              case 5:
                return e3.lockCorrector(), [4, this.waitForSomethingToChange(n2)];
              case 6:
                a3.sent(), a3.label = 7;
              case 7:
                return o3 = Date.now() + c2(4), [3, 1];
              case 8:
                return [2, false];
            }
          });
        });
      }, e3.prototype.refreshLockWhileAcquired = function(e4, t2) {
        return o2(this, void 0, void 0, function() {
          var i3 = this;
          return a2(this, function(s3) {
            return setTimeout(function() {
              return o2(i3, void 0, void 0, function() {
                var i4, o3;
                return a2(this, function(a3) {
                  switch (a3.label) {
                    case 0:
                      return [4, n.default().lock(t2)];
                    case 1:
                      return a3.sent(), this.acquiredIatSet.has(t2) ? (i4 = window.localStorage, null === (o3 = i4.getItem(e4)) ? (n.default().unlock(t2), [2]) : ((o3 = JSON.parse(o3)).timeRefreshed = Date.now(), i4.setItem(e4, JSON.stringify(o3)), n.default().unlock(t2), this.refreshLockWhileAcquired(e4, t2), [2])) : (n.default().unlock(t2), [2]);
                  }
                });
              });
            }, 1e3), [2];
          });
        });
      }, e3.prototype.waitForSomethingToChange = function(t2) {
        return o2(this, void 0, void 0, function() {
          return a2(this, function(i3) {
            switch (i3.label) {
              case 0:
                return [4, new Promise(function(i4) {
                  var o3 = false, n2 = Date.now(), a3 = false;
                  function s3() {
                    if (a3 || (window.removeEventListener("storage", s3), e3.removeFromWaiting(s3), clearTimeout(r3), a3 = true), !o3) {
                      o3 = true;
                      var t3 = 50 - (Date.now() - n2);
                      t3 > 0 ? setTimeout(i4, t3) : i4();
                    }
                  }
                  window.addEventListener("storage", s3), e3.addToWaiting(s3);
                  var r3 = setTimeout(s3, Math.max(0, t2 - Date.now()));
                })];
              case 1:
                return i3.sent(), [2];
            }
          });
        });
      }, e3.addToWaiting = function(t2) {
        this.removeFromWaiting(t2), void 0 !== e3.waiters && e3.waiters.push(t2);
      }, e3.removeFromWaiting = function(t2) {
        void 0 !== e3.waiters && (e3.waiters = e3.waiters.filter(function(e4) {
          return e4 !== t2;
        }));
      }, e3.notifyWaiters = function() {
        void 0 !== e3.waiters && e3.waiters.slice().forEach(function(e4) {
          return e4();
        });
      }, e3.prototype.releaseLock = function(e4) {
        return o2(this, void 0, void 0, function() {
          return a2(this, function(t2) {
            switch (t2.label) {
              case 0:
                return [4, this.releaseLock__private__(e4)];
              case 1:
                return [2, t2.sent()];
            }
          });
        });
      }, e3.prototype.releaseLock__private__ = function(t2) {
        return o2(this, void 0, void 0, function() {
          var i3, o3, r3;
          return a2(this, function(a3) {
            switch (a3.label) {
              case 0:
                return i3 = window.localStorage, o3 = s2 + "-" + t2, null === (r3 = i3.getItem(o3)) ? [2] : (r3 = JSON.parse(r3)).id !== this.id ? [3, 2] : [4, n.default().lock(r3.iat)];
              case 1:
                a3.sent(), this.acquiredIatSet.delete(r3.iat), i3.removeItem(o3), n.default().unlock(r3.iat), e3.notifyWaiters(), a3.label = 2;
              case 2:
                return [2];
            }
          });
        });
      }, e3.lockCorrector = function() {
        for (var t2 = Date.now() - 5e3, i3 = window.localStorage, o3 = Object.keys(i3), n2 = false, a3 = 0; a3 < o3.length; a3++) {
          var r3 = o3[a3];
          if (r3.includes(s2)) {
            var c3 = i3.getItem(r3);
            null !== c3 && (void 0 === (c3 = JSON.parse(c3)).timeRefreshed && c3.timeAcquired < t2 || void 0 !== c3.timeRefreshed && c3.timeRefreshed < t2) && (i3.removeItem(r3), n2 = true);
          }
        }
        n2 && e3.notifyWaiters();
      }, e3.waiters = void 0, e3;
    }();
    i2.default = d2;
  }));
  var s = { timeoutInSeconds: 60 };
  var r = { name: "auth0-spa-js", version: "2.0.8" };
  var c = () => Date.now();
  var d = class extends Error {
    constructor(e2, t2) {
      super(t2), this.error = e2, this.error_description = t2, Object.setPrototypeOf(this, d.prototype);
    }
    static fromPayload({ error: e2, error_description: t2 }) {
      return new d(e2, t2);
    }
  };
  var u = class extends d {
    constructor(e2, t2, i2, o2 = null) {
      super(e2, t2), this.state = i2, this.appState = o2, Object.setPrototypeOf(this, u.prototype);
    }
  };
  var l = class extends d {
    constructor() {
      super("timeout", "Timeout"), Object.setPrototypeOf(this, l.prototype);
    }
  };
  var h = class extends l {
    constructor(e2) {
      super(), this.popup = e2, Object.setPrototypeOf(this, h.prototype);
    }
  };
  var p = class extends d {
    constructor(e2) {
      super("cancelled", "Popup closed"), this.popup = e2, Object.setPrototypeOf(this, p.prototype);
    }
  };
  var m = class extends d {
    constructor(e2, t2, i2) {
      super(e2, t2), this.mfa_token = i2, Object.setPrototypeOf(this, m.prototype);
    }
  };
  var f = class extends d {
    constructor(e2, t2) {
      super("missing_refresh_token", `Missing Refresh Token (audience: '${g(e2, ["default"])}', scope: '${g(t2)}')`), this.audience = e2, this.scope = t2, Object.setPrototypeOf(this, f.prototype);
    }
  };
  function g(e2, t2 = []) {
    return e2 && !t2.includes(e2) ? e2 : "";
  }
  var w = () => window.crypto;
  var y = () => {
    const e2 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.";
    let t2 = "";
    return Array.from(w().getRandomValues(new Uint8Array(43))).forEach((i2) => t2 += e2[i2 % e2.length]), t2;
  };
  var k = (e2) => btoa(e2);
  var b = (t2) => {
    var { clientId: i2 } = t2, o2 = e(t2, ["clientId"]);
    return new URLSearchParams(((e2) => Object.keys(e2).filter((t3) => void 0 !== e2[t3]).reduce((t3, i3) => Object.assign(Object.assign({}, t3), { [i3]: e2[i3] }), {}))(Object.assign({ client_id: i2 }, o2))).toString();
  };
  var v = (e2) => ((e3) => decodeURIComponent(atob(e3).split("").map((e4) => "%" + ("00" + e4.charCodeAt(0).toString(16)).slice(-2)).join("")))(e2.replace(/_/g, "/").replace(/-/g, "+"));
  var _ = async (e2, t2) => {
    const i2 = await fetch(e2, t2);
    return { ok: i2.ok, json: await i2.json() };
  };
  var I = async (e2, t2, i2) => {
    const o2 = new AbortController();
    let n2;
    return t2.signal = o2.signal, Promise.race([_(e2, t2), new Promise((e3, t3) => {
      n2 = setTimeout(() => {
        o2.abort(), t3(new Error("Timeout when executing 'fetch'"));
      }, i2);
    })]).finally(() => {
      clearTimeout(n2);
    });
  };
  var S = async (e2, t2, i2, o2, n2, a2, s2) => {
    return r2 = { auth: { audience: t2, scope: i2 }, timeout: n2, fetchUrl: e2, fetchOptions: o2, useFormData: s2 }, c2 = a2, new Promise(function(e3, t3) {
      const i3 = new MessageChannel();
      i3.port1.onmessage = function(o3) {
        o3.data.error ? t3(new Error(o3.data.error)) : e3(o3.data), i3.port1.close();
      }, c2.postMessage(r2, [i3.port2]);
    });
    var r2, c2;
  };
  var T = async (e2, t2, i2, o2, n2, a2, s2 = 1e4) => n2 ? S(e2, t2, i2, o2, s2, n2, a2) : I(e2, o2, s2);
  async function O(t2, i2) {
    var { baseUrl: o2, timeout: n2, audience: a2, scope: s2, auth0Client: c2, useFormData: u2 } = t2, l2 = e(t2, ["baseUrl", "timeout", "audience", "scope", "auth0Client", "useFormData"]);
    const h2 = u2 ? b(l2) : JSON.stringify(l2);
    return await async function(t3, i3, o3, n3, a3, s3, r2) {
      let c3, u3 = null;
      for (let e2 = 0; e2 < 3; e2++)
        try {
          c3 = await T(t3, o3, n3, a3, s3, r2, i3), u3 = null;
          break;
        } catch (e3) {
          u3 = e3;
        }
      if (u3)
        throw u3;
      const l3 = c3.json, { error: h3, error_description: p2 } = l3, g2 = e(l3, ["error", "error_description"]), { ok: w2 } = c3;
      if (!w2) {
        const e2 = p2 || `HTTP error. Unable to fetch ${t3}`;
        if ("mfa_required" === h3)
          throw new m(h3, e2, g2.mfa_token);
        if ("missing_refresh_token" === h3)
          throw new f(o3, n3);
        throw new d(h3 || "request_error", e2);
      }
      return g2;
    }(`${o2}/oauth/token`, n2, a2 || "default", s2, { method: "POST", body: h2, headers: { "Content-Type": u2 ? "application/x-www-form-urlencoded" : "application/json", "Auth0-Client": btoa(JSON.stringify(c2 || r)) } }, i2, u2);
  }
  var j = (...e2) => {
    return (t2 = e2.filter(Boolean).join(" ").trim().split(/\s+/), Array.from(new Set(t2))).join(" ");
    var t2;
  };
  var C = class {
    constructor(e2, t2 = "@@auth0spajs@@", i2) {
      this.prefix = t2, this.suffix = i2, this.clientId = e2.clientId, this.scope = e2.scope, this.audience = e2.audience;
    }
    toKey() {
      return [this.prefix, this.clientId, this.audience, this.scope, this.suffix].filter(Boolean).join("::");
    }
    static fromKey(e2) {
      const [t2, i2, o2, n2] = e2.split("::");
      return new C({ clientId: i2, scope: n2, audience: o2 }, t2);
    }
    static fromCacheEntry(e2) {
      const { scope: t2, audience: i2, client_id: o2 } = e2;
      return new C({ scope: t2, audience: i2, clientId: o2 });
    }
  };
  var z = class {
    set(e2, t2) {
      localStorage.setItem(e2, JSON.stringify(t2));
    }
    get(e2) {
      const t2 = window.localStorage.getItem(e2);
      if (t2)
        try {
          return JSON.parse(t2);
        } catch (e3) {
          return;
        }
    }
    remove(e2) {
      localStorage.removeItem(e2);
    }
    allKeys() {
      return Object.keys(window.localStorage).filter((e2) => e2.startsWith("@@auth0spajs@@"));
    }
  };
  var x = class {
    constructor() {
      this.enclosedCache = function() {
        let e2 = {};
        return { set(t2, i2) {
          e2[t2] = i2;
        }, get(t2) {
          const i2 = e2[t2];
          if (i2)
            return i2;
        }, remove(t2) {
          delete e2[t2];
        }, allKeys: () => Object.keys(e2) };
      }();
    }
  };
  var P = class {
    constructor(e2, t2, i2) {
      this.cache = e2, this.keyManifest = t2, this.nowProvider = i2 || c;
    }
    async setIdToken(e2, t2, i2) {
      var o2;
      const n2 = this.getIdTokenCacheKey(e2);
      await this.cache.set(n2, { id_token: t2, decodedToken: i2 }), await (null === (o2 = this.keyManifest) || void 0 === o2 ? void 0 : o2.add(n2));
    }
    async getIdToken(e2) {
      const t2 = await this.cache.get(this.getIdTokenCacheKey(e2.clientId));
      if (!t2 && e2.scope && e2.audience) {
        const t3 = await this.get(e2);
        if (!t3)
          return;
        if (!t3.id_token || !t3.decodedToken)
          return;
        return { id_token: t3.id_token, decodedToken: t3.decodedToken };
      }
      if (t2)
        return { id_token: t2.id_token, decodedToken: t2.decodedToken };
    }
    async get(e2, t2 = 0) {
      var i2;
      let o2 = await this.cache.get(e2.toKey());
      if (!o2) {
        const t3 = await this.getCacheKeys();
        if (!t3)
          return;
        const i3 = this.matchExistingCacheKey(e2, t3);
        i3 && (o2 = await this.cache.get(i3));
      }
      if (!o2)
        return;
      const n2 = await this.nowProvider(), a2 = Math.floor(n2 / 1e3);
      return o2.expiresAt - t2 < a2 ? o2.body.refresh_token ? (o2.body = { refresh_token: o2.body.refresh_token }, await this.cache.set(e2.toKey(), o2), o2.body) : (await this.cache.remove(e2.toKey()), void await (null === (i2 = this.keyManifest) || void 0 === i2 ? void 0 : i2.remove(e2.toKey()))) : o2.body;
    }
    async set(e2) {
      var t2;
      const i2 = new C({ clientId: e2.client_id, scope: e2.scope, audience: e2.audience }), o2 = await this.wrapCacheEntry(e2);
      await this.cache.set(i2.toKey(), o2), await (null === (t2 = this.keyManifest) || void 0 === t2 ? void 0 : t2.add(i2.toKey()));
    }
    async clear(e2) {
      var t2;
      const i2 = await this.getCacheKeys();
      i2 && (await i2.filter((t3) => !e2 || t3.includes(e2)).reduce(async (e3, t3) => {
        await e3, await this.cache.remove(t3);
      }, Promise.resolve()), await (null === (t2 = this.keyManifest) || void 0 === t2 ? void 0 : t2.clear()));
    }
    async wrapCacheEntry(e2) {
      const t2 = await this.nowProvider();
      return { body: e2, expiresAt: Math.floor(t2 / 1e3) + e2.expires_in };
    }
    async getCacheKeys() {
      var e2;
      return this.keyManifest ? null === (e2 = await this.keyManifest.get()) || void 0 === e2 ? void 0 : e2.keys : this.cache.allKeys ? this.cache.allKeys() : void 0;
    }
    getIdTokenCacheKey(e2) {
      return new C({ clientId: e2 }, "@@auth0spajs@@", "@@user@@").toKey();
    }
    matchExistingCacheKey(e2, t2) {
      return t2.filter((t3) => {
        var i2;
        const o2 = C.fromKey(t3), n2 = new Set(o2.scope && o2.scope.split(" ")), a2 = (null === (i2 = e2.scope) || void 0 === i2 ? void 0 : i2.split(" ")) || [], s2 = o2.scope && a2.reduce((e3, t4) => e3 && n2.has(t4), true);
        return "@@auth0spajs@@" === o2.prefix && o2.clientId === e2.clientId && o2.audience === e2.audience && s2;
      })[0];
    }
  };
  var Z = class {
    constructor(e2, t2, i2) {
      this.storage = e2, this.clientId = t2, this.cookieDomain = i2, this.storageKey = `a0.spajs.txs.${this.clientId}`;
    }
    create(e2) {
      this.storage.save(this.storageKey, e2, { daysUntilExpire: 1, cookieDomain: this.cookieDomain });
    }
    get() {
      return this.storage.get(this.storageKey);
    }
    remove() {
      this.storage.remove(this.storageKey, { cookieDomain: this.cookieDomain });
    }
  };
  var K = (e2) => "number" == typeof e2;
  var L = ["iss", "aud", "exp", "nbf", "iat", "jti", "azp", "nonce", "auth_time", "at_hash", "c_hash", "acr", "amr", "sub_jwk", "cnf", "sip_from_tag", "sip_date", "sip_callid", "sip_cseq_num", "sip_via_branch", "orig", "dest", "mky", "events", "toe", "txn", "rph", "sid", "vot", "vtm"];
  var U = (e2) => {
    if (!e2.id_token)
      throw new Error("ID token is required but missing");
    const t2 = ((e3) => {
      const t3 = e3.split("."), [i3, o3, n3] = t3;
      if (3 !== t3.length || !i3 || !o3 || !n3)
        throw new Error("ID token could not be decoded");
      const a2 = JSON.parse(v(o3)), s2 = { __raw: e3 }, r2 = {};
      return Object.keys(a2).forEach((e4) => {
        s2[e4] = a2[e4], L.includes(e4) || (r2[e4] = a2[e4]);
      }), { encoded: { header: i3, payload: o3, signature: n3 }, header: JSON.parse(v(i3)), claims: s2, user: r2 };
    })(e2.id_token);
    if (!t2.claims.iss)
      throw new Error("Issuer (iss) claim must be a string present in the ID token");
    if (t2.claims.iss !== e2.iss)
      throw new Error(`Issuer (iss) claim mismatch in the ID token; expected "${e2.iss}", found "${t2.claims.iss}"`);
    if (!t2.user.sub)
      throw new Error("Subject (sub) claim must be a string present in the ID token");
    if ("RS256" !== t2.header.alg)
      throw new Error(`Signature algorithm of "${t2.header.alg}" is not supported. Expected the ID token to be signed with "RS256".`);
    if (!t2.claims.aud || "string" != typeof t2.claims.aud && !Array.isArray(t2.claims.aud))
      throw new Error("Audience (aud) claim must be a string or array of strings present in the ID token");
    if (Array.isArray(t2.claims.aud)) {
      if (!t2.claims.aud.includes(e2.aud))
        throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${e2.aud}" but was not one of "${t2.claims.aud.join(", ")}"`);
      if (t2.claims.aud.length > 1) {
        if (!t2.claims.azp)
          throw new Error("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values");
        if (t2.claims.azp !== e2.aud)
          throw new Error(`Authorized Party (azp) claim mismatch in the ID token; expected "${e2.aud}", found "${t2.claims.azp}"`);
      }
    } else if (t2.claims.aud !== e2.aud)
      throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${e2.aud}" but found "${t2.claims.aud}"`);
    if (e2.nonce) {
      if (!t2.claims.nonce)
        throw new Error("Nonce (nonce) claim must be a string present in the ID token");
      if (t2.claims.nonce !== e2.nonce)
        throw new Error(`Nonce (nonce) claim mismatch in the ID token; expected "${e2.nonce}", found "${t2.claims.nonce}"`);
    }
    if (e2.max_age && !K(t2.claims.auth_time))
      throw new Error("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified");
    if (null == t2.claims.exp || !K(t2.claims.exp))
      throw new Error("Expiration Time (exp) claim must be a number present in the ID token");
    if (!K(t2.claims.iat))
      throw new Error("Issued At (iat) claim must be a number present in the ID token");
    const i2 = e2.leeway || 60, o2 = new Date(e2.now || Date.now()), n2 = /* @__PURE__ */ new Date(0);
    if (n2.setUTCSeconds(t2.claims.exp + i2), o2 > n2)
      throw new Error(`Expiration Time (exp) claim error in the ID token; current time (${o2}) is after expiration time (${n2})`);
    if (null != t2.claims.nbf && K(t2.claims.nbf)) {
      const e3 = /* @__PURE__ */ new Date(0);
      if (e3.setUTCSeconds(t2.claims.nbf - i2), o2 < e3)
        throw new Error(`Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (${o2}) is before ${e3}`);
    }
    if (null != t2.claims.auth_time && K(t2.claims.auth_time)) {
      const n3 = /* @__PURE__ */ new Date(0);
      if (n3.setUTCSeconds(parseInt(t2.claims.auth_time) + e2.max_age + i2), o2 > n3)
        throw new Error(`Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time (${o2}) is after last auth at ${n3}`);
    }
    if (e2.organizationId) {
      if (!t2.claims.org_id)
        throw new Error("Organization ID (org_id) claim must be a string present in the ID token");
      if (e2.organizationId !== t2.claims.org_id)
        throw new Error(`Organization ID (org_id) claim mismatch in the ID token; expected "${e2.organizationId}", found "${t2.claims.org_id}"`);
    }
    return t2;
  };
  var E = o(function(e2, i2) {
    var o2 = t && t.__assign || function() {
      return o2 = Object.assign || function(e3) {
        for (var t2, i3 = 1, o3 = arguments.length; i3 < o3; i3++)
          for (var n3 in t2 = arguments[i3])
            Object.prototype.hasOwnProperty.call(t2, n3) && (e3[n3] = t2[n3]);
        return e3;
      }, o2.apply(this, arguments);
    };
    function n2(e3, t2) {
      if (!t2)
        return "";
      var i3 = "; " + e3;
      return true === t2 ? i3 : i3 + "=" + t2;
    }
    function a2(e3, t2, i3) {
      return encodeURIComponent(e3).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/\(/g, "%28").replace(/\)/g, "%29") + "=" + encodeURIComponent(t2).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent) + function(e4) {
        if ("number" == typeof e4.expires) {
          var t3 = /* @__PURE__ */ new Date();
          t3.setMilliseconds(t3.getMilliseconds() + 864e5 * e4.expires), e4.expires = t3;
        }
        return n2("Expires", e4.expires ? e4.expires.toUTCString() : "") + n2("Domain", e4.domain) + n2("Path", e4.path) + n2("Secure", e4.secure) + n2("SameSite", e4.sameSite);
      }(i3);
    }
    function s2(e3) {
      for (var t2 = {}, i3 = e3 ? e3.split("; ") : [], o3 = /(%[\dA-F]{2})+/gi, n3 = 0; n3 < i3.length; n3++) {
        var a3 = i3[n3].split("="), s3 = a3.slice(1).join("=");
        '"' === s3.charAt(0) && (s3 = s3.slice(1, -1));
        try {
          t2[a3[0].replace(o3, decodeURIComponent)] = s3.replace(o3, decodeURIComponent);
        } catch (e4) {
        }
      }
      return t2;
    }
    function r2() {
      return s2(document.cookie);
    }
    function c2(e3, t2, i3) {
      document.cookie = a2(e3, t2, o2({ path: "/" }, i3));
    }
    i2.__esModule = true, i2.encode = a2, i2.parse = s2, i2.getAll = r2, i2.get = function(e3) {
      return r2()[e3];
    }, i2.set = c2, i2.remove = function(e3, t2) {
      c2(e3, "", o2(o2({}, t2), { expires: -1 }));
    };
  });
  i(E), E.encode, E.parse, E.getAll;
  var W = E.get;
  var X = E.set;
  var D = E.remove;
  var N = { get(e2) {
    const t2 = W(e2);
    if (void 0 !== t2)
      return JSON.parse(t2);
  }, save(e2, t2, i2) {
    let o2 = {};
    "https:" === window.location.protocol && (o2 = { secure: true, sameSite: "none" }), (null == i2 ? void 0 : i2.daysUntilExpire) && (o2.expires = i2.daysUntilExpire), (null == i2 ? void 0 : i2.cookieDomain) && (o2.domain = i2.cookieDomain), X(e2, JSON.stringify(t2), o2);
  }, remove(e2, t2) {
    let i2 = {};
    (null == t2 ? void 0 : t2.cookieDomain) && (i2.domain = t2.cookieDomain), D(e2, i2);
  } };
  var R = { get(e2) {
    const t2 = N.get(e2);
    return t2 || N.get(`_legacy_${e2}`);
  }, save(e2, t2, i2) {
    let o2 = {};
    "https:" === window.location.protocol && (o2 = { secure: true }), (null == i2 ? void 0 : i2.daysUntilExpire) && (o2.expires = i2.daysUntilExpire), (null == i2 ? void 0 : i2.cookieDomain) && (o2.domain = i2.cookieDomain), X(`_legacy_${e2}`, JSON.stringify(t2), o2), N.save(e2, t2, i2);
  }, remove(e2, t2) {
    let i2 = {};
    (null == t2 ? void 0 : t2.cookieDomain) && (i2.domain = t2.cookieDomain), D(e2, i2), N.remove(e2, t2), N.remove(`_legacy_${e2}`, t2);
  } };
  var V = { get(e2) {
    if ("undefined" == typeof sessionStorage)
      return;
    const t2 = sessionStorage.getItem(e2);
    return null != t2 ? JSON.parse(t2) : void 0;
  }, save(e2, t2) {
    sessionStorage.setItem(e2, JSON.stringify(t2));
  }, remove(e2) {
    sessionStorage.removeItem(e2);
  } };
  function J(e2, t2, i2) {
    var o2 = void 0 === t2 ? null : t2, n2 = function(e3, t3) {
      var i3 = atob(e3);
      if (t3) {
        for (var o3 = new Uint8Array(i3.length), n3 = 0, a3 = i3.length; n3 < a3; ++n3)
          o3[n3] = i3.charCodeAt(n3);
        return String.fromCharCode.apply(null, new Uint16Array(o3.buffer));
      }
      return i3;
    }(e2, void 0 !== i2 && i2), a2 = n2.indexOf("\n", 10) + 1, s2 = n2.substring(a2) + (o2 ? "//# sourceMappingURL=" + o2 : ""), r2 = new Blob([s2], { type: "application/javascript" });
    return URL.createObjectURL(r2);
  }
  var F;
  var H;
  var G;
  var M;
  var A = (F = "Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgZSBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHQscil7c3VwZXIociksdGhpcy5lcnJvcj10LHRoaXMuZXJyb3JfZGVzY3JpcHRpb249cixPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcyxlLnByb3RvdHlwZSl9c3RhdGljIGZyb21QYXlsb2FkKHtlcnJvcjp0LGVycm9yX2Rlc2NyaXB0aW9uOnJ9KXtyZXR1cm4gbmV3IGUodCxyKX19Y2xhc3MgdCBleHRlbmRzIGV7Y29uc3RydWN0b3IoZSxzKXtzdXBlcigibWlzc2luZ19yZWZyZXNoX3Rva2VuIixgTWlzc2luZyBSZWZyZXNoIFRva2VuIChhdWRpZW5jZTogJyR7cihlLFsiZGVmYXVsdCJdKX0nLCBzY29wZTogJyR7cihzKX0nKWApLHRoaXMuYXVkaWVuY2U9ZSx0aGlzLnNjb3BlPXMsT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsdC5wcm90b3R5cGUpfX1mdW5jdGlvbiByKGUsdD1bXSl7cmV0dXJuIGUmJiF0LmluY2x1ZGVzKGUpP2U6IiJ9Y29uc3Qgcz1lPT57dmFye2NsaWVudElkOnR9PWUscj1mdW5jdGlvbihlLHQpe3ZhciByPXt9O2Zvcih2YXIgcyBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHMpJiZ0LmluZGV4T2Yocyk8MCYmKHJbc109ZVtzXSk7aWYobnVsbCE9ZSYmImZ1bmN0aW9uIj09dHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBvPTA7Zm9yKHM9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtvPHMubGVuZ3RoO28rKyl0LmluZGV4T2Yoc1tvXSk8MCYmT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGUsc1tvXSkmJihyW3Nbb11dPWVbc1tvXV0pfXJldHVybiByfShlLFsiY2xpZW50SWQiXSk7cmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXMoKGU9Pk9iamVjdC5rZXlzKGUpLmZpbHRlcigodD0+dm9pZCAwIT09ZVt0XSkpLnJlZHVjZSgoKHQscik9Pk9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSx0KSx7W3JdOmVbcl19KSkse30pKShPYmplY3QuYXNzaWduKHtjbGllbnRfaWQ6dH0scikpKS50b1N0cmluZygpfTtsZXQgbz17fTtjb25zdCBuPShlLHQpPT5gJHtlfXwke3R9YDthZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwoYXN5bmMoe2RhdGE6e3RpbWVvdXQ6ZSxhdXRoOnIsZmV0Y2hVcmw6aSxmZXRjaE9wdGlvbnM6Yyx1c2VGb3JtRGF0YTphfSxwb3J0czpbZl19KT0+e2xldCBwO2NvbnN0e2F1ZGllbmNlOmwsc2NvcGU6dX09cnx8e307dHJ5e2NvbnN0IHI9YT8oZT0+e2NvbnN0IHQ9bmV3IFVSTFNlYXJjaFBhcmFtcyhlKSxyPXt9O3JldHVybiB0LmZvckVhY2goKChlLHQpPT57clt0XT1lfSkpLHJ9KShjLmJvZHkpOkpTT04ucGFyc2UoYy5ib2R5KTtpZighci5yZWZyZXNoX3Rva2VuJiYicmVmcmVzaF90b2tlbiI9PT1yLmdyYW50X3R5cGUpe2NvbnN0IGU9KChlLHQpPT5vW24oZSx0KV0pKGwsdSk7aWYoIWUpdGhyb3cgbmV3IHQobCx1KTtjLmJvZHk9YT9zKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxyKSx7cmVmcmVzaF90b2tlbjplfSkpOkpTT04uc3RyaW5naWZ5KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxyKSx7cmVmcmVzaF90b2tlbjplfSkpfWxldCBkLGc7ImZ1bmN0aW9uIj09dHlwZW9mIEFib3J0Q29udHJvbGxlciYmKGQ9bmV3IEFib3J0Q29udHJvbGxlcixjLnNpZ25hbD1kLnNpZ25hbCk7dHJ5e2c9YXdhaXQgUHJvbWlzZS5yYWNlKFsoaD1lLG5ldyBQcm9taXNlKChlPT5zZXRUaW1lb3V0KGUsaCkpKSksZmV0Y2goaSxPYmplY3QuYXNzaWduKHt9LGMpKV0pfWNhdGNoKGUpe3JldHVybiB2b2lkIGYucG9zdE1lc3NhZ2Uoe2Vycm9yOmUubWVzc2FnZX0pfWlmKCFnKXJldHVybiBkJiZkLmFib3J0KCksdm9pZCBmLnBvc3RNZXNzYWdlKHtlcnJvcjoiVGltZW91dCB3aGVuIGV4ZWN1dGluZyAnZmV0Y2gnIn0pO3A9YXdhaXQgZy5qc29uKCkscC5yZWZyZXNoX3Rva2VuPygoKGUsdCxyKT0+e29bbih0LHIpXT1lfSkocC5yZWZyZXNoX3Rva2VuLGwsdSksZGVsZXRlIHAucmVmcmVzaF90b2tlbik6KChlLHQpPT57ZGVsZXRlIG9bbihlLHQpXX0pKGwsdSksZi5wb3N0TWVzc2FnZSh7b2s6Zy5vayxqc29uOnB9KX1jYXRjaChlKXtmLnBvc3RNZXNzYWdlKHtvazohMSxqc29uOntlcnJvcjplLmVycm9yLGVycm9yX2Rlc2NyaXB0aW9uOmUubWVzc2FnZX19KX12YXIgaH0pKX0oKTsKCg==", H = null, G = false, function(e2) {
    return M = M || J(F, H, G), new Worker(M, e2);
  });
  var Y = {};
  var B = class {
    constructor(e2, t2) {
      this.cache = e2, this.clientId = t2, this.manifestKey = this.createManifestKeyFrom(this.clientId);
    }
    async add(e2) {
      var t2;
      const i2 = new Set((null === (t2 = await this.cache.get(this.manifestKey)) || void 0 === t2 ? void 0 : t2.keys) || []);
      i2.add(e2), await this.cache.set(this.manifestKey, { keys: [...i2] });
    }
    async remove(e2) {
      const t2 = await this.cache.get(this.manifestKey);
      if (t2) {
        const i2 = new Set(t2.keys);
        return i2.delete(e2), i2.size > 0 ? await this.cache.set(this.manifestKey, { keys: [...i2] }) : await this.cache.remove(this.manifestKey);
      }
    }
    get() {
      return this.cache.get(this.manifestKey);
    }
    clear() {
      return this.cache.remove(this.manifestKey);
    }
    createManifestKeyFrom(e2) {
      return `@@auth0spajs@@::${e2}`;
    }
  };
  var $ = { memory: () => new x().enclosedCache, localstorage: () => new z() };
  var q = (e2) => $[e2];
  var Q = (t2) => {
    const { openUrl: i2, onRedirect: o2 } = t2, n2 = e(t2, ["openUrl", "onRedirect"]);
    return Object.assign(Object.assign({}, n2), { openUrl: false === i2 || i2 ? i2 : o2 });
  };
  var ee = new a();
  var te = class {
    constructor(e2) {
      let t2, i2;
      if (this.userCache = new x().enclosedCache, this.defaultOptions = { authorizationParams: { scope: "openid profile email" }, useRefreshTokensFallback: false, useFormData: true }, this._releaseLockOnPageHide = async () => {
        await ee.releaseLock("auth0.lock.getTokenSilently"), window.removeEventListener("pagehide", this._releaseLockOnPageHide);
      }, this.options = Object.assign(Object.assign(Object.assign({}, this.defaultOptions), e2), { authorizationParams: Object.assign(Object.assign({}, this.defaultOptions.authorizationParams), e2.authorizationParams) }), "undefined" != typeof window && (() => {
        if (!w())
          throw new Error("For security reasons, `window.crypto` is required to run `auth0-spa-js`.");
        if (void 0 === w().subtle)
          throw new Error("\n      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.\n    ");
      })(), e2.cache && e2.cacheLocation && console.warn("Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`."), e2.cache)
        i2 = e2.cache;
      else {
        if (t2 = e2.cacheLocation || "memory", !q(t2))
          throw new Error(`Invalid cache location "${t2}"`);
        i2 = q(t2)();
      }
      this.httpTimeoutMs = e2.httpTimeoutInSeconds ? 1e3 * e2.httpTimeoutInSeconds : 1e4, this.cookieStorage = false === e2.legacySameSiteCookie ? N : R, this.orgHintCookieName = `auth0.${this.options.clientId}.organization_hint`, this.isAuthenticatedCookieName = ((e3) => `auth0.${e3}.is.authenticated`)(this.options.clientId), this.sessionCheckExpiryDays = e2.sessionCheckExpiryDays || 1;
      const o2 = e2.useCookiesForTransactions ? this.cookieStorage : V;
      var n2;
      this.scope = j("openid", this.options.authorizationParams.scope, this.options.useRefreshTokens ? "offline_access" : ""), this.transactionManager = new Z(o2, this.options.clientId, this.options.cookieDomain), this.nowProvider = this.options.nowProvider || c, this.cacheManager = new P(i2, i2.allKeys ? void 0 : new B(i2, this.options.clientId), this.nowProvider), this.domainUrl = (n2 = this.options.domain, /^https?:\/\//.test(n2) ? n2 : `https://${n2}`), this.tokenIssuer = ((e3, t3) => e3 ? e3.startsWith("https://") ? e3 : `https://${e3}/` : `${t3}/`)(this.options.issuer, this.domainUrl), "undefined" != typeof window && window.Worker && this.options.useRefreshTokens && "memory" === t2 && (this.worker = new A());
    }
    _url(e2) {
      const t2 = encodeURIComponent(btoa(JSON.stringify(this.options.auth0Client || r)));
      return `${this.domainUrl}${e2}&auth0Client=${t2}`;
    }
    _authorizeUrl(e2) {
      return this._url(`/authorize?${b(e2)}`);
    }
    async _verifyIdToken(e2, t2, i2) {
      const o2 = await this.nowProvider();
      return U({ iss: this.tokenIssuer, aud: this.options.clientId, id_token: e2, nonce: t2, organizationId: i2, leeway: this.options.leeway, max_age: (n2 = this.options.authorizationParams.max_age, "string" != typeof n2 ? n2 : parseInt(n2, 10) || void 0), now: o2 });
      var n2;
    }
    _processOrgIdHint(e2) {
      e2 ? this.cookieStorage.save(this.orgHintCookieName, e2, { daysUntilExpire: this.sessionCheckExpiryDays, cookieDomain: this.options.cookieDomain }) : this.cookieStorage.remove(this.orgHintCookieName, { cookieDomain: this.options.cookieDomain });
    }
    async _prepareAuthorizeUrl(e2, t2, i2) {
      const o2 = k(y()), n2 = k(y()), a2 = y(), s2 = ((e3) => {
        const t3 = new Uint8Array(e3);
        return ((e4) => {
          const t4 = { "+": "-", "/": "_", "=": "" };
          return e4.replace(/[+/=]/g, (e5) => t4[e5]);
        })(window.btoa(String.fromCharCode(...Array.from(t3))));
      })(await (async (e3) => {
        const t3 = w().subtle.digest({ name: "SHA-256" }, new TextEncoder().encode(e3));
        return await t3;
      })(a2)), r2 = ((e3, t3, i3, o3, n3, a3, s3, r3) => Object.assign(Object.assign(Object.assign({ client_id: e3.clientId }, e3.authorizationParams), i3), { scope: j(t3, i3.scope), response_type: "code", response_mode: r3 || "query", state: o3, nonce: n3, redirect_uri: s3 || e3.authorizationParams.redirect_uri, code_challenge: a3, code_challenge_method: "S256" }))(this.options, this.scope, e2, o2, n2, s2, e2.redirect_uri || this.options.authorizationParams.redirect_uri || i2, null == t2 ? void 0 : t2.response_mode), c2 = this._authorizeUrl(r2);
      return { nonce: n2, code_verifier: a2, scope: r2.scope, audience: r2.audience || "default", redirect_uri: r2.redirect_uri, state: o2, url: c2 };
    }
    async loginWithPopup(e2, t2) {
      var i2;
      if (e2 = e2 || {}, !(t2 = t2 || {}).popup && (t2.popup = ((e3) => {
        const t3 = window.screenX + (window.innerWidth - 400) / 2, i3 = window.screenY + (window.innerHeight - 600) / 2;
        return window.open(e3, "auth0:authorize:popup", `left=${t3},top=${i3},width=400,height=600,resizable,scrollbars=yes,status=1`);
      })(""), !t2.popup))
        throw new Error("Unable to open a popup for loginWithPopup - window.open returned `null`");
      const o2 = await this._prepareAuthorizeUrl(e2.authorizationParams || {}, { response_mode: "web_message" }, window.location.origin);
      t2.popup.location.href = o2.url;
      const n2 = await ((e3) => new Promise((t3, i3) => {
        let o3;
        const n3 = setInterval(() => {
          e3.popup && e3.popup.closed && (clearInterval(n3), clearTimeout(a3), window.removeEventListener("message", o3, false), i3(new p(e3.popup)));
        }, 1e3), a3 = setTimeout(() => {
          clearInterval(n3), i3(new h(e3.popup)), window.removeEventListener("message", o3, false);
        }, 1e3 * (e3.timeoutInSeconds || 60));
        o3 = function(s2) {
          if (s2.data && "authorization_response" === s2.data.type) {
            if (clearTimeout(a3), clearInterval(n3), window.removeEventListener("message", o3, false), e3.popup.close(), s2.data.response.error)
              return i3(d.fromPayload(s2.data.response));
            t3(s2.data.response);
          }
        }, window.addEventListener("message", o3);
      }))(Object.assign(Object.assign({}, t2), { timeoutInSeconds: t2.timeoutInSeconds || this.options.authorizeTimeoutInSeconds || 60 }));
      if (o2.state !== n2.state)
        throw new d("state_mismatch", "Invalid state");
      const a2 = (null === (i2 = e2.authorizationParams) || void 0 === i2 ? void 0 : i2.organization) || this.options.authorizationParams.organization;
      await this._requestToken({ audience: o2.audience, scope: o2.scope, code_verifier: o2.code_verifier, grant_type: "authorization_code", code: n2.code, redirect_uri: o2.redirect_uri }, { nonceIn: o2.nonce, organizationId: a2 });
    }
    async getUser() {
      var e2;
      const t2 = await this._getIdTokenFromCache();
      return null === (e2 = null == t2 ? void 0 : t2.decodedToken) || void 0 === e2 ? void 0 : e2.user;
    }
    async getIdTokenClaims() {
      var e2;
      const t2 = await this._getIdTokenFromCache();
      return null === (e2 = null == t2 ? void 0 : t2.decodedToken) || void 0 === e2 ? void 0 : e2.claims;
    }
    async loginWithRedirect(t2 = {}) {
      var i2;
      const o2 = Q(t2), { openUrl: n2, fragment: a2, appState: s2 } = o2, r2 = e(o2, ["openUrl", "fragment", "appState"]), c2 = (null === (i2 = r2.authorizationParams) || void 0 === i2 ? void 0 : i2.organization) || this.options.authorizationParams.organization, d2 = await this._prepareAuthorizeUrl(r2.authorizationParams || {}), { url: u2 } = d2, l2 = e(d2, ["url"]);
      this.transactionManager.create(Object.assign(Object.assign(Object.assign({}, l2), { appState: s2 }), c2 && { organizationId: c2 }));
      const h2 = a2 ? `${u2}#${a2}` : u2;
      n2 ? await n2(h2) : window.location.assign(h2);
    }
    async handleRedirectCallback(e2 = window.location.href) {
      const t2 = e2.split("?").slice(1);
      if (0 === t2.length)
        throw new Error("There are no query params available for parsing.");
      const { state: i2, code: o2, error: n2, error_description: a2 } = ((e3) => {
        e3.indexOf("#") > -1 && (e3 = e3.substring(0, e3.indexOf("#")));
        const t3 = new URLSearchParams(e3);
        return { state: t3.get("state"), code: t3.get("code") || void 0, error: t3.get("error") || void 0, error_description: t3.get("error_description") || void 0 };
      })(t2.join("")), s2 = this.transactionManager.get();
      if (!s2)
        throw new d("missing_transaction", "Invalid state");
      if (this.transactionManager.remove(), n2)
        throw new u(n2, a2 || n2, i2, s2.appState);
      if (!s2.code_verifier || s2.state && s2.state !== i2)
        throw new d("state_mismatch", "Invalid state");
      const r2 = s2.organizationId, c2 = s2.nonce, l2 = s2.redirect_uri;
      return await this._requestToken(Object.assign({ audience: s2.audience, scope: s2.scope, code_verifier: s2.code_verifier, grant_type: "authorization_code", code: o2 }, l2 ? { redirect_uri: l2 } : {}), { nonceIn: c2, organizationId: r2 }), { appState: s2.appState };
    }
    async checkSession(e2) {
      if (!this.cookieStorage.get(this.isAuthenticatedCookieName)) {
        if (!this.cookieStorage.get("auth0.is.authenticated"))
          return;
        this.cookieStorage.save(this.isAuthenticatedCookieName, true, { daysUntilExpire: this.sessionCheckExpiryDays, cookieDomain: this.options.cookieDomain }), this.cookieStorage.remove("auth0.is.authenticated");
      }
      try {
        await this.getTokenSilently(e2);
      } catch (e3) {
      }
    }
    async getTokenSilently(e2 = {}) {
      var t2;
      const i2 = Object.assign(Object.assign({ cacheMode: "on" }, e2), { authorizationParams: Object.assign(Object.assign(Object.assign({}, this.options.authorizationParams), e2.authorizationParams), { scope: j(this.scope, null === (t2 = e2.authorizationParams) || void 0 === t2 ? void 0 : t2.scope) }) }), o2 = await ((e3, t3) => {
        let i3 = Y[t3];
        return i3 || (i3 = e3().finally(() => {
          delete Y[t3], i3 = null;
        }), Y[t3] = i3), i3;
      })(() => this._getTokenSilently(i2), `${this.options.clientId}::${i2.authorizationParams.audience}::${i2.authorizationParams.scope}`);
      return e2.detailedResponse ? o2 : null == o2 ? void 0 : o2.access_token;
    }
    async _getTokenSilently(t2) {
      const { cacheMode: i2 } = t2, o2 = e(t2, ["cacheMode"]);
      if ("off" !== i2) {
        const e2 = await this._getEntryFromCache({ scope: o2.authorizationParams.scope, audience: o2.authorizationParams.audience || "default", clientId: this.options.clientId });
        if (e2)
          return e2;
      }
      if ("cache-only" !== i2) {
        if (!await (async (e2, t3 = 3) => {
          for (let i3 = 0; i3 < t3; i3++)
            if (await e2())
              return true;
          return false;
        })(() => ee.acquireLock("auth0.lock.getTokenSilently", 5e3), 10))
          throw new l();
        try {
          if (window.addEventListener("pagehide", this._releaseLockOnPageHide), "off" !== i2) {
            const e3 = await this._getEntryFromCache({ scope: o2.authorizationParams.scope, audience: o2.authorizationParams.audience || "default", clientId: this.options.clientId });
            if (e3)
              return e3;
          }
          const e2 = this.options.useRefreshTokens ? await this._getTokenUsingRefreshToken(o2) : await this._getTokenFromIFrame(o2), { id_token: t3, access_token: n2, oauthTokenScope: a2, expires_in: s2 } = e2;
          return Object.assign(Object.assign({ id_token: t3, access_token: n2 }, a2 ? { scope: a2 } : null), { expires_in: s2 });
        } finally {
          await ee.releaseLock("auth0.lock.getTokenSilently"), window.removeEventListener("pagehide", this._releaseLockOnPageHide);
        }
      }
    }
    async getTokenWithPopup(e2 = {}, t2 = {}) {
      var i2;
      const o2 = Object.assign(Object.assign({}, e2), { authorizationParams: Object.assign(Object.assign(Object.assign({}, this.options.authorizationParams), e2.authorizationParams), { scope: j(this.scope, null === (i2 = e2.authorizationParams) || void 0 === i2 ? void 0 : i2.scope) }) });
      t2 = Object.assign(Object.assign({}, s), t2), await this.loginWithPopup(o2, t2);
      return (await this.cacheManager.get(new C({ scope: o2.authorizationParams.scope, audience: o2.authorizationParams.audience || "default", clientId: this.options.clientId }))).access_token;
    }
    async isAuthenticated() {
      return !!await this.getUser();
    }
    _buildLogoutUrl(t2) {
      null !== t2.clientId ? t2.clientId = t2.clientId || this.options.clientId : delete t2.clientId;
      const i2 = t2.logoutParams || {}, { federated: o2 } = i2, n2 = e(i2, ["federated"]), a2 = o2 ? "&federated" : "";
      return this._url(`/v2/logout?${b(Object.assign({ clientId: t2.clientId }, n2))}`) + a2;
    }
    async logout(t2 = {}) {
      const i2 = Q(t2), { openUrl: o2 } = i2, n2 = e(i2, ["openUrl"]);
      null === t2.clientId ? await this.cacheManager.clear() : await this.cacheManager.clear(t2.clientId || this.options.clientId), this.cookieStorage.remove(this.orgHintCookieName, { cookieDomain: this.options.cookieDomain }), this.cookieStorage.remove(this.isAuthenticatedCookieName, { cookieDomain: this.options.cookieDomain }), this.userCache.remove("@@user@@");
      const a2 = this._buildLogoutUrl(n2);
      o2 ? await o2(a2) : false !== o2 && window.location.assign(a2);
    }
    async _getTokenFromIFrame(e2) {
      const t2 = Object.assign(Object.assign({}, e2.authorizationParams), { prompt: "none" }), i2 = this.cookieStorage.get(this.orgHintCookieName);
      i2 && !t2.organization && (t2.organization = i2);
      const { url: o2, state: n2, nonce: a2, code_verifier: s2, redirect_uri: r2, scope: c2, audience: u2 } = await this._prepareAuthorizeUrl(t2, { response_mode: "web_message" }, window.location.origin);
      try {
        if (window.crossOriginIsolated)
          throw new d("login_required", "The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.");
        const t3 = e2.timeoutInSeconds || this.options.authorizeTimeoutInSeconds, i3 = await ((e3, t4, i4 = 60) => new Promise((o3, n3) => {
          const a3 = window.document.createElement("iframe");
          a3.setAttribute("width", "0"), a3.setAttribute("height", "0"), a3.style.display = "none";
          const s3 = () => {
            window.document.body.contains(a3) && (window.document.body.removeChild(a3), window.removeEventListener("message", r3, false));
          };
          let r3;
          const c3 = setTimeout(() => {
            n3(new l()), s3();
          }, 1e3 * i4);
          r3 = function(e4) {
            if (e4.origin != t4)
              return;
            if (!e4.data || "authorization_response" !== e4.data.type)
              return;
            const i5 = e4.source;
            i5 && i5.close(), e4.data.response.error ? n3(d.fromPayload(e4.data.response)) : o3(e4.data.response), clearTimeout(c3), window.removeEventListener("message", r3, false), setTimeout(s3, 2e3);
          }, window.addEventListener("message", r3, false), window.document.body.appendChild(a3), a3.setAttribute("src", e3);
        }))(o2, this.domainUrl, t3);
        if (n2 !== i3.state)
          throw new d("state_mismatch", "Invalid state");
        const h2 = await this._requestToken(Object.assign(Object.assign({}, e2.authorizationParams), { code_verifier: s2, code: i3.code, grant_type: "authorization_code", redirect_uri: r2, timeout: e2.authorizationParams.timeout || this.httpTimeoutMs }), { nonceIn: a2 });
        return Object.assign(Object.assign({}, h2), { scope: c2, oauthTokenScope: h2.scope, audience: u2 });
      } catch (e3) {
        throw "login_required" === e3.error && this.logout({ openUrl: false }), e3;
      }
    }
    async _getTokenUsingRefreshToken(e2) {
      const t2 = await this.cacheManager.get(new C({ scope: e2.authorizationParams.scope, audience: e2.authorizationParams.audience || "default", clientId: this.options.clientId }));
      if (!(t2 && t2.refresh_token || this.worker)) {
        if (this.options.useRefreshTokensFallback)
          return await this._getTokenFromIFrame(e2);
        throw new f(e2.authorizationParams.audience || "default", e2.authorizationParams.scope);
      }
      const i2 = e2.authorizationParams.redirect_uri || this.options.authorizationParams.redirect_uri || window.location.origin, o2 = "number" == typeof e2.timeoutInSeconds ? 1e3 * e2.timeoutInSeconds : null;
      try {
        const n2 = await this._requestToken(Object.assign(Object.assign(Object.assign({}, e2.authorizationParams), { grant_type: "refresh_token", refresh_token: t2 && t2.refresh_token, redirect_uri: i2 }), o2 && { timeout: o2 }));
        return Object.assign(Object.assign({}, n2), { scope: e2.authorizationParams.scope, oauthTokenScope: n2.scope, audience: e2.authorizationParams.audience || "default" });
      } catch (t3) {
        if ((t3.message.indexOf("Missing Refresh Token") > -1 || t3.message && t3.message.indexOf("invalid refresh token") > -1) && this.options.useRefreshTokensFallback)
          return await this._getTokenFromIFrame(e2);
        throw t3;
      }
    }
    async _saveEntryInCache(t2) {
      const { id_token: i2, decodedToken: o2 } = t2, n2 = e(t2, ["id_token", "decodedToken"]);
      this.userCache.set("@@user@@", { id_token: i2, decodedToken: o2 }), await this.cacheManager.setIdToken(this.options.clientId, t2.id_token, t2.decodedToken), await this.cacheManager.set(n2);
    }
    async _getIdTokenFromCache() {
      const e2 = this.options.authorizationParams.audience || "default", t2 = await this.cacheManager.getIdToken(new C({ clientId: this.options.clientId, audience: e2, scope: this.scope })), i2 = this.userCache.get("@@user@@");
      return t2 && t2.id_token === (null == i2 ? void 0 : i2.id_token) ? i2 : (this.userCache.set("@@user@@", t2), t2);
    }
    async _getEntryFromCache({ scope: e2, audience: t2, clientId: i2 }) {
      const o2 = await this.cacheManager.get(new C({ scope: e2, audience: t2, clientId: i2 }), 60);
      if (o2 && o2.access_token) {
        const { access_token: e3, oauthTokenScope: t3, expires_in: i3 } = o2, n2 = await this._getIdTokenFromCache();
        return n2 && Object.assign(Object.assign({ id_token: n2.id_token, access_token: e3 }, t3 ? { scope: t3 } : null), { expires_in: i3 });
      }
    }
    async _requestToken(e2, t2) {
      const { nonceIn: i2, organizationId: o2 } = t2 || {}, n2 = await O(Object.assign({ baseUrl: this.domainUrl, client_id: this.options.clientId, auth0Client: this.options.auth0Client, useFormData: this.options.useFormData, timeout: this.httpTimeoutMs }, e2), this.worker), a2 = await this._verifyIdToken(n2.id_token, i2, o2);
      return await this._saveEntryInCache(Object.assign(Object.assign(Object.assign(Object.assign({}, n2), { decodedToken: a2, scope: e2.scope, audience: e2.audience || "default" }), n2.scope ? { oauthTokenScope: n2.scope } : null), { client_id: this.options.clientId })), this.cookieStorage.save(this.isAuthenticatedCookieName, true, { daysUntilExpire: this.sessionCheckExpiryDays, cookieDomain: this.options.cookieDomain }), this._processOrgIdHint(a2.claims.org_id), Object.assign(Object.assign({}, n2), { decodedToken: a2 });
    }
  };
  async function oe(e2) {
    const t2 = new te(e2);
    return await t2.checkSession(), t2;
  }

  // src/index.ts
  var init = async () => {
    const client = await oe({
      clientId: "SaYMf7u7esx5uE091UgWC7b4it47HCeu",
      domain: "liqid-dev.eu.auth0.com",
      authorizationParams: {
        redirect_uri: "https://arnels-ultra-awesome-site-8feb2b.webflow.io/"
      }
    });
    console.log(client);
    const hidebtn = document.getElementById("hideLink");
    console.log(hidebtn);
    const url = new URLSearchParams(window.location.search);
    const code = url.get("code");
    if (code) {
      await client.handleRedirectCallback();
      history.replaceState({}, document.title, window.location.origin + window.location.pathname);
    }
    console.log(code);
    const logoutBtn = document.getElementById("logOutbtn");
    const loginUser = document.getElementById("authLogin");
    const signUpUser = document.getElementById("authSignUp");
    const accessDenied = document.querySelector('[Lf-element="deniedEl"]');
    const accessPage = document.querySelector('[Lf-element="mainPage"]');
    const isLoggedIn = await client.isAuthenticated();
    console.log(isLoggedIn);
    const unregisteredUser = function() {
      if (!isLoggedIn) {
        hidebtn.href = ``;
        hidebtn.style.opacity = `50%`;
        accessDenied ? accessDenied.style.display = `flex` : "";
      }
      console.log(isLoggedIn);
    };
    const activeUser = function() {
      if (isLoggedIn) {
        hidebtn.href = "https://arnels-ultra-awesome-site-8feb2b.webflow.io/private-equity";
        hidebtn.classList.remove("disabled");
        console.log(client);
        accessDenied ? accessDenied.style.display = `none` : "";
        accessPage ? accessPage.classList.remove("hide") : "";
      }
    };
    unregisteredUser();
    activeUser();
    console.log("gbemi");
    window.Webflow ||= [];
    window.Webflow.push(() => {
      if (!loginUser || !logoutBtn || !signUpUser)
        return;
      loginUser.addEventListener("click", async (e2) => {
        (await client).loginWithRedirect();
      });
      logoutBtn.addEventListener("click", async () => {
        (await client).logout();
        console.log("logoit");
      });
    });
  };
  init();
})();
//# sourceMappingURL=index.js.map
