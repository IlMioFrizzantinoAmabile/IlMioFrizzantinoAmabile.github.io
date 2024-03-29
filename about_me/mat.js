parcelRequire = function(e, r, t, n) {
    var i, o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;

    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            p.resolve = function(r) {
                return e[t][1][r] || r
            }, p.cache = {};
            var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports;

        function p(e) {
            return f(p.resolve(e))
        }
    }
    f.isParcelRequire = !0, f.Module = function(e) {
        this.id = e, this.bundle = f, this.exports = {}
    }, f.modules = e, f.cache = r, f.parent = o, f.register = function(r, t) {
        e[r] = [function(e, r) {
            r.exports = t
        }, {}]
    };
    for (var c = 0; c < t.length; c++) try {
        f(t[c])
    } catch (e) {
        i || (i = e)
    }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
            return l
        }) : n && (this[n] = l)
    }
    if (parcelRequire = f, i) throw i;
    return f
}({
    "X4Si": [function(require, module, exports) {
        "use strict";

        function e(e, n) {
            var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!i) {
                if (Array.isArray(e) || (i = t(e)) || n && e && "number" == typeof e.length) {
                    i && (e = i);
                    var r = 0,
                        o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, s = !0,
                c = !1;
            return {
                s: function() {
                    i = i.call(e)
                },
                n: function() {
                    var e = i.next();
                    return s = e.done, e
                },
                e: function(e) {
                    c = !0, a = e
                },
                f: function() {
                    try {
                        s || null == i.return || i.return()
                    } finally {
                        if (c) throw a
                    }
                }
            }
        }

        function t(e, t) {
            if (e) {
                if ("string" == typeof e) return n(e, t);
                var i = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? n(e, t) : void 0
            }
        }

        function n(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function o(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", {
                writable: !1
            }), e
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var a = function() {
                function t(e, n) {
                    var r = this;
                    i(this, t), this.container = e, this.items = n, this.revealHeight = 64, this.selectedIndex = -1, this.containerHeight = 0, this.prepare(), this.configure(), requestAnimationFrame(function(t) {
                        e.classList.add("card-presentation")
                    }), document.body.addEventListener("keypress", function(e) {
                        27 == (e = e || window.event).keyCode && r.setSelectedItemIndex(-1)
                    })
                }
                return o(t, [{
                    key: "itemSelected",
                    value: function(e, t) {
                        t && t.stopPropagation(), e == this.selectedIndex && (e = -1), this.setSelectedItemIndex(e)
                    }
                }, {
                    key: "setSelectedItemIndex",
                    value: function(e) {
                        if (this.selectedIndex != e) {
                            this.selectedIndex = e, this.configure();
                            var t = this.selectedOutside;
                            t && document.removeEventListener("click", t), -1 != e && (t = this.setSelectedItemIndex.bind(this, -1), document.addEventListener("click", t), this.selectedOutside = t)
                        }
                    }
                }, {
                    key: "prepare",
                    value: function() {
                        var t, n = 0,
                            i = this.items.length * this.revealHeight,
                            r = e(this.items);
                        try {
                            for (r.s(); !(t = r.n()).done;) {
                                var o = t.value,
                                    a = this.itemSelected.bind(this, n);
                                o.addEventListener("click", a);
                                var s = o.style;
                                s.position = "absolute", s.transformOrigin = "top center", s.zIndex = 10 + n, s.top = "0px", n += 1, i = Math.max(i, o.clientHeight)
                            }
                        } catch (c) {
                            r.e(c)
                        } finally {
                            r.f()
                        }
                        this.container.style.minHeight = "".concat(i, "px"), this.containerHeight = i
                    }
                }, {
                    key: "configure",
                    value: function() {
                        var t, n = this.selectedIndex,
                            i = 0,
                            r = this.containerHeight,
                            o = e(this.items);
                        try {
                            for (o.s(); !(t = o.n()).done;) {
                                var a = t.value,
                                    s = -10,
                                    c = .85,
                                    l = 10 * -(this.items.length - i),
                                    u = i * this.revealHeight;
                                if (-1 != n && (c = 1, u = 0, s = 0, i != n)) {
                                    c = .85;
                                    i < n ? u = 16 : (c = 1, u = i * this.revealHeight + r)
                                }
                                a.style.transform = "rotateX(".concat(s, "deg) scale(").concat(c, ") translate3d(0, ").concat(u, "px, ").concat(l, "px)"), a.classList.toggle("is-selected", i == n), i += 1
                            }
                        } catch (d) {
                            o.e(d)
                        } finally {
                            o.f()
                        }
                        this.container.classList.toggle("has-selection", -1 != n)
                    }
                }]), t
            }(),
            s = a;
        exports.default = s;
    }, {}],
    "OAO3": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        class t {
            constructor(t, e, i) {
                if (!t) throw "Butter.AnimatedProperty: Cannot animate a property without a key.";
                const a = this.parseValue(e),
                    r = this.parseValue(i);
                if (r.unit || (r.unit = a.unit), (a.unit || r.unit) && a.unit !== r.unit) throw `Butter.AnimatedProperty: Unit for values mismatch. Animating from "${a.unit}" to "${r.unit}" is not supported.`;
                this.fromValue = a.floatValue, this.toValue = r.floatValue, this.unit = a.unit, this.key = t
            }
            parseValue(t) {
                let e = 0,
                    i = void 0;
                return "string" == typeof t || t instanceof String ? (e = parseFloat(t), i = t.match(/[\d.\-\+]*\s*(.*)/)[1] || "") : isNaN(t) || (e = t), {
                    unit: i,
                    floatValue: e
                }
            }
            get reversed() {
                return new t(this.key, this.toValue, this.fromValue)
            }
        }
        var e = t;
        exports.default = e;
    }, {}],
    "Cf7S": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.linear = exports.easeOutQuint = exports.easeOutQuart = exports.easeOutQuad = exports.easeOutCubic = exports.easeInQuint = exports.easeInQuart = exports.easeInQuad = exports.easeInOutQuint = exports.easeInOutQuart = exports.easeInOutQuad = exports.easeInOutCubic = exports.easeInCubic = void 0;
        const e = e => e;
        exports.linear = e;
        const t = e => e * e;
        exports.easeInQuad = t;
        const s = e => e * (2 - e);
        exports.easeOutQuad = s;
        const o = e => e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1;
        exports.easeInOutQuad = o;
        const u = e => e * e * e;
        exports.easeInCubic = u;
        const a = e => --e * e * e + 1;
        exports.easeOutCubic = a;
        const n = e => e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
        exports.easeInOutCubic = n;
        const r = e => e * e * e * e;
        exports.easeInQuart = r;
        const p = e => 1 - --e * e * e * e;
        exports.easeOutQuart = p;
        const x = e => e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
        exports.easeInOutQuart = x;
        const c = e => e * e * e * e * e;
        exports.easeInQuint = c;
        const Q = e => 1 + --e * e * e * e * e;
        exports.easeOutQuint = Q;
        const i = e => e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e;
        exports.easeInOutQuint = i;
    }, {}],
    "kLVJ": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var t = r(require("./AnimatedProperty.js")),
            e = n(require("./TimingFunctions.js"));

        function i(t) {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap,
                n = new WeakMap;
            return (i = function(t) {
                return t ? n : e
            })(t)
        }

        function n(t, e) {
            if (!e && t && t.__esModule) return t;
            if (null === t || "object" != typeof t && "function" != typeof t) return {
                default: t
            };
            var n = i(e);
            if (n && n.has(t)) return n.get(t);
            var r = {},
                s = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in t)
                if ("default" !== o && Object.prototype.hasOwnProperty.call(t, o)) {
                    var a = s ? Object.getOwnPropertyDescriptor(t, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = t[o]
                } return r.default = t, n && n.set(t, r), r
        }

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        class s {
            constructor(t, i = {}) {
                if (!t) throw "Butter.KeyedAnimator: Cannot instantiate an animator without a target.";
                const {
                    timing: n = e.easeOutCubic,
                    autoreverses: r = !0,
                    repeatCount: s = 0,
                    interruptAnimationEvents: o = []
                } = i;
                this.target = t, this.timing = n, this.autoreverses = r, this.repeatCount = s, this.interruptAnimationEvents = ["mousewheel", "touchstart"] + o
            }
            animate(e, i, n) {
                this.animating && this.stopAnimation();
                const r = [];
                for (const s in e) {
                    const i = new t.default(s, this.target[s], e[s]);
                    i && r.push(i)
                }
                this.duration = Math.max(i, .1), this.beginTime = 0, this.properties = r, this.completion = n, this.completed = !1, this.startAnimation()
            }
            update() {
                if (0 == this.beginTime) this.beginTime = (new Date).getTime();
                else {
                    let t = ((new Date).getTime() - this.beginTime) / this.duration;
                    this.target;
                    this.updateTarget(t)
                }
            }
            updateTarget(t) {
                const e = this.target;

                function i(t, e) {
                    return e && (t = String(t) + e), t
                }

                function n(t, e, i) {
                    let n = e.split("."),
                        r = n.length;
                    if (r > 1) {
                        let e = r - 1;
                        for (let i = 0; i < e; i += 1) t = t[n[i]]
                    }
                    return t[r > 0 ? n[r - 1] : e] = i, t
                }
                if (t < 1)
                    if (1 - t < .001) {
                        for (const t of this.properties) n(e, t.key, i(t.toValue, t.unit));
                        this.complete()
                    } else {
                        const r = this.timing(t);
                        for (const t of this.properties) {
                            const s = t.fromValue + (t.toValue - t.fromValue) * r;
                            n(e, t.key, i(s, t.unit))
                        }
                    }
                else {
                    for (const t of this.properties) n(e, t.key, i(t.toValue, t.unit));
                    this.complete()
                }
            }
            complete() {
                let t = this.iterationCount + 1,
                    e = t > this.repeatCount;
                if (!e)
                    if (this.beginTime = 0, this.autoreverses) {
                        const t = [];
                        for (const e of properties) t.push(e.reversed);
                        this.properties = t
                    } else this.updateTarget(0);
                this.iterationCount = t, e && (this.completed = !0, this.stopAnimation())
            }
            stopAnimation() {
                if (!this.animating) return;
                this.animating = !1;
                let t = this.targetScrollEventHandler;
                t && this.target.removeEventListener(t);
                let e = this.frameRequest;
                e && cancelAnimationFrame(e);
                let i = this.completion;
                i && i(this.completed), this.completion = void 0
            }
            startAnimation() {
                if (this.animating) return;
                this.animating = !0, this.iterationCount = 0;
                const t = this.stopAnimation.bind(this);
                if (this.target.addEventListener)
                    for (const r of this.interruptAnimationEvents) this.target.addEventListener(r, t);
                const e = this.update.bind(this),
                    i = () => {
                        e(), n(), this.didAnimate && this.didAnimate()
                    },
                    n = () => {
                        this.animating && (this.frameRequest = requestAnimationFrame(i, this))
                    };
                n()
            }
        }
        var o = s;
        exports.default = o;
    }, {
        "./AnimatedProperty.js": "OAO3",
        "./TimingFunctions.js": "Cf7S"
    }],
    "xFyw": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        const {
            sqrt: t,
            exp: e,
            cos: s,
            sin: n,
            cosh: o,
            sinh: i
        } = Math;

        function r(r = {}) {
            const {
                damping: c = 10,
                mass: a = 1,
                stiffness: u = 100,
                initialVelocity: l = 0
            } = r, d = c, f = a, p = u, x = l;
            return r => {
                const c = d / (2 * f),
                    a = t(p / f),
                    u = t(a * a - c * c),
                    l = t(c * c - a * a),
                    h = e(-c * r);
                let v;
                return v = c < a ? 1 + h * (-1 * s(u * r) + (-1 * c + x) / u * n(u * r)) : c == a ? 1 + h * ((-1 * c + x) * r - 1) : 1 + h * (-1 * o(l * r) + (-1 * c + x) / l * i(l * r))
            }
        }
        var c = r;
        exports.default = c;
    }, {}],
    "lAJF": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var e = u(require("./lib/KeyedAnimator.js")),
            t = u(require("./lib/SpringTimingFunctionProvider.js")),
            r = i(require("./lib/TimingFunctions.js"));

        function n(e) {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (n = function(e) {
                return e ? r : t
            })(e)
        }

        function i(e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var r = n(t);
            if (r && r.has(e)) return r.get(e);
            var i = {},
                u = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = u ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(i, o, a) : i[o] = e[o]
                } return i.default = e, r && r.set(e, i), i
        }

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var o = {
            animator: e.default,
            timingFunctions: r,
            spring: t.default
        };
        exports.default = o;
    }, {
        "./lib/KeyedAnimator.js": "kLVJ",
        "./lib/SpringTimingFunctionProvider.js": "xFyw",
        "./lib/TimingFunctions.js": "Cf7S"
    }],
    "vNKp": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var t = e(require("mantequilla"));

        function e(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function n(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = r(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var o = 0,
                        a = function() {};
                    return {
                        s: a,
                        n: function() {
                            return o >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[o++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: a
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, u = !0,
                l = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return u = t.done, t
                },
                e: function(t) {
                    l = !0, i = t
                },
                f: function() {
                    try {
                        u || null == n.return || n.return()
                    } finally {
                        if (l) throw i
                    }
                }
            }
        }

        function r(t, e) {
            if (t) {
                if ("string" == typeof t) return o(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, e) : void 0
            }
        }

        function o(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r
        }

        function a(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function u(t, e, n) {
            return e && i(t.prototype, e), n && i(t, n), Object.defineProperty(t, "prototype", {
                writable: !1
            }), t
        }
        var l = function() {
                function e(t) {
                    a(this, e), this.items = t;
                    var r, o = n(t);
                    try {
                        for (o.s(); !(r = o.n()).done;) {
                            var i = r.value,
                                u = this.navigate.bind(this, i);
                            i.addEventListener("click", u)
                        }
                    } catch (l) {
                        o.e(l)
                    } finally {
                        o.f()
                    }
                }
                return u(e, [{
                    key: "navigate",
                    value: function(e, n) {
                        var r = e.getAttribute("href").split("#")[1],
                            o = r ? document.getElementById(r) : document.body;
                        if (o) {
                            n.preventDefault();
                            for (var a = 0, i = ["body", "html"]; a < i.length; a++) {
                                var u = i[a],
                                    l = document.getElementsByTagName(u)[0];
                                new t.default.animator(l, {
                                    timing: t.default.spring({
                                        damping: 16
                                    })
                                }).animate({
                                    scrollTop: o.offsetTop
                                }, 900)
                            }
                        }
                    }
                }]), e
            }(),
            f = l;
        exports.default = f;
    }, {
        "mantequilla": "lAJF"
    }],
    "Focm": [function(require, module, exports) {
        "use strict";
        var e = n(require("./js/CardPresentationController")),
            r = n(require("./js/NavigationAnchorController"));

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o() {
            var n = document.querySelector(".work .selection"),
                o = n.querySelectorAll("li");
            window.cardPresentationController = new e.default(n, o);
            var t = document.querySelectorAll("main > header a");
            window.anchorController = new r.default(t)
        }
        document.addEventListener("DOMContentLoaded", o);
    }, {
        "./js/CardPresentationController": "X4Si",
        "./js/NavigationAnchorController": "vNKp"
    }]
}, {}, ["Focm"], null)