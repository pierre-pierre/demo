function destroy(e) {
    var t = jQuery(e);
    t.each(function() {
        var e = jQuery(this);
        e.data("flexslider") && (e.removeData("flexslider"), jQuery(".slides", e).clone(!1).prependTo(e).attr("style", "").find(">li").each(function() {
            jQuery(this).hasClass("clone") && jQuery(this).remove(), jQuery(this).attr("style", "")
        }), jQuery(".flex-viewport, .flex-control-nav, .flex-direction-nav, .flex-prev, .flex-next", e).remove())
    })
}

function showDiv(e, t) {
    t.preventDefault(), t.stopPropagation();
    var n = $(e).parent().next("div").attr("id"),
        i = $(e).parent().attr("data-pop");
    if ("video-display1" == n) {
        $(e).parent().next("div").removeAttr("style");
        var a = $(e).parent().attr("data-url");
        void 0 != a && (a.trim().indexOf("autoplay=false") > -1 && (a = a.replace("autoplay=false", "autoplay=1")), $(e).parent().next("div").find("iframe").attr("src", a))
    }
    if ("undefined" != typeof i && i !== !1) {
        var a = $(e).parent().attr("data-url");
        void 0 != a && (a.trim().indexOf("autoplay=false") > -1 && (a = a.replace("autoplay=false", "autoplay=1")), $(e).parent().next("div").find("iframe").attr("src", a))
    }
}
if (function() {
        var e = this,
            t = e._,
            n = {},
            i = Array.prototype,
            a = Object.prototype,
            r = Function.prototype,
            o = i.push,
            s = i.slice,
            l = i.concat,
            c = a.toString,
            u = a.hasOwnProperty,
            d = i.forEach,
            p = i.reduce,
            f = i.reduceRight,
            h = i.filter,
            v = i.every,
            m = i.some,
            g = i.indexOf,
            y = i.lastIndexOf,
            b = Array.isArray,
            w = Object.keys,
            x = r.bind,
            j = function(e) {
                return e instanceof j ? e : this instanceof j ? void(this._wrapped = e) : new j(e)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = j), exports._ = j) : e._ = j, j.VERSION = "1.4.4";
        var k = j.each = j.forEach = function(e, t, i) {
                if (null != e)
                    if (d && e.forEach === d) e.forEach(t, i);
                    else if (e.length === +e.length) {
                    for (var a = 0, r = e.length; r > a; a++)
                        if (t.call(i, e[a], a, e) === n) return
                } else
                    for (var o in e)
                        if (j.has(e, o) && t.call(i, e[o], o, e) === n) return
            },
            C = "Reduce of empty array with no initial value";
        j.reduce = j.foldl = j.inject = function(e, t, n, i) {
            var a = arguments.length > 2;
            if (null == e && (e = []), p && e.reduce === p) return i && (t = j.bind(t, i)), a ? e.reduce(t, n) : e.reduce(t);
            if (k(e, function(e, r, o) {
                    a ? n = t.call(i, n, e, r, o) : (n = e, a = !0)
                }), !a) throw new TypeError(C);
            return n
        }, j.reduceRight = j.foldr = function(e, t, n, i) {
            var a = arguments.length > 2;
            if (null == e && (e = []), f && e.reduceRight === f) return i && (t = j.bind(t, i)), a ? e.reduceRight(t, n) : e.reduceRight(t);
            var r = e.length;
            if (r !== +r) {
                var o = j.keys(e);
                r = o.length
            }
            if (k(e, function(s, l, c) {
                    l = o ? o[--r] : --r, a ? n = t.call(i, n, e[l], l, c) : (n = e[l], a = !0)
                }), !a) throw new TypeError(C);
            return n
        }, j.find = j.detect = function(e, t, n) {
            var i;
            return $(e, function(e, a, r) {
                return t.call(n, e, a, r) ? (i = e, !0) : void 0
            }), i
        }, j.filter = j.select = function(e, t, n) {
            var i = [];
            return null == e ? i : h && e.filter === h ? e.filter(t, n) : (k(e, function(e, a, r) {
                t.call(n, e, a, r) && (i[i.length] = e)
            }), i)
        }, j.reject = function(e, t, n) {
            return j.filter(e, function(e, i, a) {
                return !t.call(n, e, i, a)
            }, n)
        }, j.every = j.all = function(e, t, i) {
            t || (t = j.identity);
            var a = !0;
            return null == e ? a : v && e.every === v ? e.every(t, i) : (k(e, function(e, r, o) {
                return (a = a && t.call(i, e, r, o)) ? void 0 : n
            }), !!a)
        };
        var $ = j.some = j.any = function(e, t, i) {
            t || (t = j.identity);
            var a = !1;
            return null == e ? a : m && e.some === m ? e.some(t, i) : (k(e, function(e, r, o) {
                return a || (a = t.call(i, e, r, o)) ? n : void 0
            }), !!a)
        };
        j.contains = j.include = function(e, t) {
            return null == e ? !1 : g && e.indexOf === g ? -1 != e.indexOf(t) : $(e, function(e) {
                return e === t
            })
        }, j.invoke = function(e, t) {
            var n = s.call(arguments, 2),
                i = j.isFunction(t);
            return j.map(e, function(e) {
                return (i ? t : e[t]).apply(e, n)
            })
        }, j.pluck = function(e, t) {
            return j.map(e, function(e) {
                return e[t]
            })
        }, j.where = function(e, t, n) {
            return j.isEmpty(t) ? n ? null : [] : j[n ? "find" : "filter"](e, function(e) {
                for (var n in t)
                    if (t[n] !== e[n]) return !1;
                return !0
            })
        }, j.findWhere = function(e, t) {
            return j.where(e, t, !0)
        }, j.max = function(e, t, n) {
            if (!t && j.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
            if (!t && j.isEmpty(e)) return -1 / 0;
            var i = {
                computed: -1 / 0,
                value: -1 / 0
            };
            return k(e, function(e, a, r) {
                var o = t ? t.call(n, e, a, r) : e;
                o >= i.computed && (i = {
                    value: e,
                    computed: o
                })
            }), i.value
        }, j.min = function(e, t, n) {
            if (!t && j.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
            if (!t && j.isEmpty(e)) return 1 / 0;
            var i = {
                computed: 1 / 0,
                value: 1 / 0
            };
            return k(e, function(e, a, r) {
                var o = t ? t.call(n, e, a, r) : e;
                o < i.computed && (i = {
                    value: e,
                    computed: o
                })
            }), i.value
        }, j.shuffle = function(e) {
            var t, n = 0,
                i = [];
            return k(e, function(e) {
                t = j.random(n++), i[n - 1] = i[t], i[t] = e
            }), i
        };
        var T = function(e) {
            return j.isFunction(e) ? e : function(t) {
                return t[e]
            }
        };
        j.sortBy = function(e, t, n) {
            var i = T(t);
            return j.pluck(j.map(e, function(e, t, a) {
                return {
                    value: e,
                    index: t,
                    criteria: i.call(n, e, t, a)
                }
            }).sort(function(e, t) {
                var n = e.criteria,
                    i = t.criteria;
                if (n !== i) {
                    if (n > i || void 0 === n) return 1;
                    if (i > n || void 0 === i) return -1
                }
                return e.index < t.index ? -1 : 1
            }), "value")
        };
        var Q = function(e, t, n, i) {
            var a = {},
                r = T(t || j.identity);
            return k(e, function(t, o) {
                var s = r.call(n, t, o, e);
                i(a, s, t)
            }), a
        };
        j.groupBy = function(e, t, n) {
            return Q(e, t, n, function(e, t, n) {
                (j.has(e, t) ? e[t] : e[t] = []).push(n)
            })
        }, j.countBy = function(e, t, n) {
            return Q(e, t, n, function(e, t) {
                j.has(e, t) || (e[t] = 0), e[t]++
            })
        }, j.sortedIndex = function(e, t, n, i) {
            n = null == n ? j.identity : T(n);
            for (var a = n.call(i, t), r = 0, o = e.length; o > r;) {
                var s = r + o >>> 1;
                n.call(i, e[s]) < a ? r = s + 1 : o = s
            }
            return r
        }, j.toArray = function(e) {
            return e ? j.isArray(e) ? s.call(e) : e.length === +e.length ? j.map(e, j.identity) : j.values(e) : []
        }, j.size = function(e) {
            return null == e ? 0 : e.length === +e.length ? e.length : j.keys(e).length
        }, j.first = j.head = j.take = function(e, t, n) {
            return null == e ? void 0 : null == t || n ? e[0] : s.call(e, 0, t)
        }, j.initial = function(e, t, n) {
            return s.call(e, 0, e.length - (null == t || n ? 1 : t))
        }, j.last = function(e, t, n) {
            return null == e ? void 0 : null == t || n ? e[e.length - 1] : s.call(e, Math.max(e.length - t, 0))
        }, j.rest = j.tail = j.drop = function(e, t, n) {
            return s.call(e, null == t || n ? 1 : t)
        }, j.compact = function(e) {
            return j.filter(e, j.identity)
        };
        var S = function(e, t, n) {
            return k(e, function(e) {
                j.isArray(e) ? t ? o.apply(n, e) : S(e, t, n) : n.push(e)
            }), n
        };
        j.flatten = function(e, t) {
            return S(e, t, [])
        }, j.without = function(e) {
            return j.difference(e, s.call(arguments, 1))
        }, j.uniq = j.unique = function(e, t, n, i) {
            j.isFunction(t) && (i = n, n = t, t = !1);
            var a = n ? j.map(e, n, i) : e,
                r = [],
                o = [];
            return k(a, function(n, i) {
                (t ? i && o[o.length - 1] === n : j.contains(o, n)) || (o.push(n), r.push(e[i]))
            }), r
        }, j.union = function() {
            return j.uniq(l.apply(i, arguments))
        }, j.intersection = function(e) {
            var t = s.call(arguments, 1);
            return j.filter(j.uniq(e), function(e) {
                return j.every(t, function(t) {
                    return j.indexOf(t, e) >= 0
                })
            })
        }, j.difference = function(e) {
            var t = l.apply(i, s.call(arguments, 1));
            return j.filter(e, function(e) {
                return !j.contains(t, e)
            })
        }, j.zip = function() {
            for (var e = s.call(arguments), t = j.max(j.pluck(e, "length")), n = new Array(t), i = 0; t > i; i++) n[i] = j.pluck(e, "" + i);
            return n
        }, j.object = function(e, t) {
            if (null == e) return {};
            for (var n = {}, i = 0, a = e.length; a > i; i++) t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
            return n
        }, j.indexOf = function(e, t, n) {
            if (null == e) return -1;
            var i = 0,
                a = e.length;
            if (n) {
                if ("number" != typeof n) return i = j.sortedIndex(e, t), e[i] === t ? i : -1;
                i = 0 > n ? Math.max(0, a + n) : n
            }
            if (g && e.indexOf === g) return e.indexOf(t, n);
            for (; a > i; i++)
                if (e[i] === t) return i;
            return -1
        }, j.lastIndexOf = function(e, t, n) {
            if (null == e) return -1;
            var i = null != n;
            if (y && e.lastIndexOf === y) return i ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
            for (var a = i ? n : e.length; a--;)
                if (e[a] === t) return a;
            return -1
        }, j.range = function(e, t, n) {
            arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
            for (var i = Math.max(Math.ceil((t - e) / n), 0), a = 0, r = new Array(i); i > a;) r[a++] = e, e += n;
            return r
        }, j.bind = function(e, t) {
            if (e.bind === x && x) return x.apply(e, s.call(arguments, 1));
            var n = s.call(arguments, 2);
            return function() {
                return e.apply(t, n.concat(s.call(arguments)))
            }
        }, j.partial = function(e) {
            var t = s.call(arguments, 1);
            return function() {
                return e.apply(this, t.concat(s.call(arguments)))
            }
        }, j.bindAll = function(e) {
            var t = s.call(arguments, 1);
            return 0 === t.length && (t = j.functions(e)), k(t, function(t) {
                e[t] = j.bind(e[t], e)
            }), e
        }, j.memoize = function(e, t) {
            var n = {};
            return t || (t = j.identity),
                function() {
                    var i = t.apply(this, arguments);
                    return j.has(n, i) ? n[i] : n[i] = e.apply(this, arguments)
                }
        }, j.delay = function(e, t) {
            var n = s.call(arguments, 2);
            return setTimeout(function() {
                return e.apply(null, n)
            }, t)
        }, j.defer = function(e) {
            return j.delay.apply(j, [e, 1].concat(s.call(arguments, 1)))
        }, j.throttle = function(e, t) {
            var n, i, a, r, o = 0,
                s = function() {
                    o = new Date, a = null, r = e.apply(n, i)
                };
            return function() {
                var l = new Date,
                    c = t - (l - o);
                return n = this, i = arguments, 0 >= c ? (clearTimeout(a), a = null, o = l, r = e.apply(n, i)) : a || (a = setTimeout(s, c)), r
            }
        }, j.debounce = function(e, t, n) {
            var i, a;
            return function() {
                var r = this,
                    o = arguments,
                    s = function() {
                        i = null, n || (a = e.apply(r, o))
                    },
                    l = n && !i;
                return clearTimeout(i), i = setTimeout(s, t), l && (a = e.apply(r, o)), a
            }
        }, j.once = function(e) {
            var t, n = !1;
            return function() {
                return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
            }
        }, j.wrap = function(e, t) {
            return function() {
                var n = [e];
                return o.apply(n, arguments), t.apply(this, n)
            }
        }, j.compose = function() {
            var e = arguments;
            return function() {
                for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
                return t[0]
            }
        }, j.after = function(e, t) {
            return 0 >= e ? t() : function() {
                return --e < 1 ? t.apply(this, arguments) : void 0
            }
        }, j.keys = w || function(e) {
            if (e !== Object(e)) throw new TypeError("Invalid object");
            var t = [];
            for (var n in e) j.has(e, n) && (t[t.length] = n);
            return t
        }, j.values = function(e) {
            var t = [];
            for (var n in e) j.has(e, n) && t.push(e[n]);
            return t
        }, j.pairs = function(e) {
            var t = [];
            for (var n in e) j.has(e, n) && t.push([n, e[n]]);
            return t
        }, j.invert = function(e) {
            var t = {};
            for (var n in e) j.has(e, n) && (t[e[n]] = n);
            return t
        }, j.functions = j.methods = function(e) {
            var t = [];
            for (var n in e) j.isFunction(e[n]) && t.push(n);
            return t.sort()
        }, j.extend = function(e) {
            return k(s.call(arguments, 1), function(t) {
                if (t)
                    for (var n in t) e[n] = t[n]
            }), e
        }, j.pick = function(e) {
            var t = {},
                n = l.apply(i, s.call(arguments, 1));
            return k(n, function(n) {
                n in e && (t[n] = e[n])
            }), t
        }, j.omit = function(e) {
            var t = {},
                n = l.apply(i, s.call(arguments, 1));
            for (var a in e) j.contains(n, a) || (t[a] = e[a]);
            return t
        }, j.defaults = function(e) {
            return k(s.call(arguments, 1), function(t) {
                if (t)
                    for (var n in t) null == e[n] && (e[n] = t[n])
            }), e
        }, j.clone = function(e) {
            return j.isObject(e) ? j.isArray(e) ? e.slice() : j.extend({}, e) : e
        }, j.tap = function(e, t) {
            return t(e), e
        };
        var N = function(e, t, n, i) {
            if (e === t) return 0 !== e || 1 / e == 1 / t;
            if (null == e || null == t) return e === t;
            e instanceof j && (e = e._wrapped), t instanceof j && (t = t._wrapped);
            var a = c.call(e);
            if (a != c.call(t)) return !1;
            switch (a) {
                case "[object String]":
                    return e == String(t);
                case "[object Number]":
                    return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e == +t;
                case "[object RegExp]":
                    return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
            }
            if ("object" != typeof e || "object" != typeof t) return !1;
            for (var r = n.length; r--;)
                if (n[r] == e) return i[r] == t;
            n.push(e), i.push(t);
            var o = 0,
                s = !0;
            if ("[object Array]" == a) {
                if (o = e.length, s = o == t.length)
                    for (; o-- && (s = N(e[o], t[o], n, i)););
            } else {
                var l = e.constructor,
                    u = t.constructor;
                if (l !== u && !(j.isFunction(l) && l instanceof l && j.isFunction(u) && u instanceof u)) return !1;
                for (var d in e)
                    if (j.has(e, d) && (o++, !(s = j.has(t, d) && N(e[d], t[d], n, i)))) break;
                if (s) {
                    for (d in t)
                        if (j.has(t, d) && !o--) break;
                    s = !o
                }
            }
            return n.pop(), i.pop(), s
        };
        j.isEqual = function(e, t) {
            return N(e, t, [], [])
        }, j.isEmpty = function(e) {
            if (null == e) return !0;
            if (j.isArray(e) || j.isString(e)) return 0 === e.length;
            for (var t in e)
                if (j.has(e, t)) return !1;
            return !0
        }, j.isElement = function(e) {
            return !(!e || 1 !== e.nodeType)
        }, j.isArray = b || function(e) {
            return "[object Array]" == c.call(e)
        }, j.isObject = function(e) {
            return e === Object(e)
        }, k(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
            j["is" + e] = function(t) {
                return c.call(t) == "[object " + e + "]"
            }
        }), j.isArguments(arguments) || (j.isArguments = function(e) {
            return !(!e || !j.has(e, "callee"))
        }), "function" != typeof / . / && (j.isFunction = function(e) {
            return "function" == typeof e
        }), j.isFinite = function(e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }, j.isNaN = function(e) {
            return j.isNumber(e) && e != +e
        }, j.isBoolean = function(e) {
            return e === !0 || e === !1 || "[object Boolean]" == c.call(e)
        }, j.isNull = function(e) {
            return null === e
        }, j.isUndefined = function(e) {
            return void 0 === e
        }, j.has = function(e, t) {
            return u.call(e, t)
        }, j.noConflict = function() {
            return e._ = t, this
        }, j.identity = function(e) {
            return e
        }, j.times = function(e, t, n) {
            for (var i = Array(e), a = 0; e > a; a++) i[a] = t.call(n, a);
            return i
        }, j.random = function(e, t) {
            return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
        };
        var E = {
            escape: {
                "&": "&",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "/": "&#x2F;"
            }
        };
        E.unescape = j.invert(E.escape);
        var A = {
            escape: new RegExp("[" + j.keys(E.escape).join("") + "]", "g"),
            unescape: new RegExp("(" + j.keys(E.unescape).join("|") + ")", "g")
        };
        j.each(["escape", "unescape"], function(e) {
            j[e] = function(t) {
                return null == t ? "" : ("" + t).replace(A[e], function(t) {
                    return E[e][t]
                })
            }
        }), j.result = function(e, t) {
            if (null == e) return null;
            var n = e[t];
            return j.isFunction(n) ? n.call(e) : n
        }, j.mixin = function(e) {
            k(j.functions(e), function(t) {
                var n = j[t] = e[t];
                j.prototype[t] = function() {
                    var e = [this._wrapped];
                    return o.apply(e, arguments), _.call(this, n.apply(j, e))
                }
            })
        };
        var R = 0;
        j.uniqueId = function(e) {
            var t = ++R + "";
            return e ? e + t : t
        }, j.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var M = /(.)^/,
            z = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "	": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            I = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        j.template = function(e, t, n) {
            var i;
            n = j.defaults({}, n, j.templateSettings);
            var a = new RegExp([(n.escape || M).source, (n.interpolate || M).source, (n.evaluate || M).source].join("|") + "|$", "g"),
                r = 0,
                o = "__p+='";
            e.replace(a, function(t, n, i, a, s) {
                return o += e.slice(r, s).replace(I, function(e) {
                    return "\\" + z[e]
                }), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), a && (o += "';\n" + a + "\n__p+='"), r = s + t.length, t
            }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
            try {
                i = new Function(n.variable || "obj", "_", o)
            } catch (s) {
                throw s.source = o, s
            }
            if (t) return i(t, j);
            var l = function(e) {
                return i.call(this, e, j)
            };
            return l.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", l
        }, j.chain = function(e) {
            return j(e).chain()
        };
        var _ = function(e) {
            return this._chain ? j(e).chain() : e
        };
        j.mixin(j), k(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
            var t = i[e];
            j.prototype[e] = function() {
                var n = this._wrapped;
                return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], _.call(this, n)
            }
        }), k(["concat", "join", "slice"], function(e) {
            var t = i[e];
            j.prototype[e] = function() {
                return _.call(this, t.apply(this._wrapped, arguments))
            }
        }), j.extend(j.prototype, {
            chain: function() {
                return this._chain = !0, this
            },
            value: function() {
                return this._wrapped
            }
        })
    }.call(this), "undefined" == typeof Reflow) var Reflow = {};
Reflow.getClass = function(e) {
        return Object.prototype.toString.call(e).slice(8, -1)
    }, Reflow.is = function(e, t) {
        return void 0 !== t && null !== t && Reflow.getClass(t) === e
    }, Reflow.isArray = function(e) {
        return Reflow.isDefined(e) && Reflow.is("Array", e)
    }, Reflow.isString = function(e) {
        return Reflow.isDefined(e) && Reflow.is("String", e)
    }, Reflow.isNumber = function(e) {
        return Reflow.isDefined(e) && Reflow.is("Number", e) && isNaN(e) === !1
    }, Reflow.isBoolean = function(e) {
        return Reflow.isDefined(e) && Reflow.is("Boolean", e)
    }, Reflow.isDate = function(e) {
        return Reflow.isDefined(e) && Reflow.is("Date", e)
    }, Reflow.isError = function(e) {
        return Reflow.isDefined(e) && Reflow.is("Error", e)
    }, Reflow.isFunction = function(e) {
        return Reflow.isDefined(e) && Reflow.is("Function", e)
    }, Reflow.isRegExp = function(e) {
        return Reflow.isDefined(e) && Reflow.is("RegExp", e)
    }, Reflow.isObject = function(e) {
        return Reflow.isDefined(e) && Reflow.is("Object", e)
    }, Reflow.isUndefined = function(e) {
        return "undefined" == typeof e
    }, Reflow.isDefined = function(e) {
        return !Reflow.isUndefined(e)
    }, Reflow.isUrl = function(e) {
        return Reflow.isString(e) && "" != e
    }, Reflow.isEmpty = function(e) {
        return Reflow.isUndefined(e) === !0 || Reflow.isString(e) === !0 && "" === e || Reflow.isArray(e) === !0 && 0 === e.length
    }, Reflow.isJQuery = function(e) {
        return Reflow.isDefined(e) && Reflow.isDefined(e.jquery)
    }, jQuery(window).load(function() {
        $(window.location.hash).each(function() {
            var e = $(this);
            $("html, body").animate({
                scrollTop: e.offset().top
            }, 0)
        })
    }),
    function() {}(window),
    function(e) {
        for (var t = 0, n = ["ms", "moz", "webkit", "o"], i = 0; i < n.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[n[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[n[i] + "CancelAnimationFrame"] || window[n[i] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
            var n = (new Date).getTime(),
                i = Math.max(0, 16 - (n - t)),
                a = window.setTimeout(function() {
                    e(n + i)
                }, i);
            return t = n + i, a
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        });
        var a = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            msTransition: "MSTransitionEnd",
            transition: "transitionend"
        };
        window.Modernizr.transEndEventName = a[window.Modernizr.prefixed("transition")], e.fn.extend({
            transition: function(t, n, i, a, r) {
                var o = this.last(),
                    s = n && "object" == typeof n ? e.extend({}, n) : {
                        complete: r && a || !r && e.isFunction(a) && a || i && e.isFunction(i) && i || e.isFunction(n) && n,
                        duration: n + "ms",
                        easing: a && i || i && !e.isFunction(i) && !e.isNumeric(i) && i || "ease-in-out",
                        delay: (r || !r && !e.isFunction(a) && a || !r && !a && !e.isFunction(i) && i || "0") + "ms"
                    };
                Modernizr.csstransitions ? this.each(function(n) {
                    var i = e(this),
                        a = 0;
                    iObject = 0, props = [], transition = " " + s.duration + " " + s.easing + " " + s.delay;
                    for (n in t) iObject++, n = Modernizr.prefixed(n).replace(/([A-Z])/g, function(e, t) {
                        return "-" + t.toLowerCase()
                    }).replace(/^ms-/, "-ms-"), props.push(n + transition), i.css(n) == t[n] && a++;
                    iObject > a ? ! function(e) {
                        window.requestAnimationFrame(function() {
                            i[0].style[Modernizr.prefixed("transition")] = e.join(), i.one(Modernizr.transEndEventName, function(e) {
                                e.currentTarget.style[Modernizr.prefixed("transition")] = "", s.complete && o.is(i) && s.complete()
                            }), window.requestAnimationFrame(function() {
                                i.css(t)
                            })
                        })
                    }(props) : s.complete && s.complete()
                }) : this.delay(s.delay).animate(t, s.duration, function() {
                    s.complete && o.is(this) && s.complete()
                })
            }
        })
    }(jQuery),
    function(e) {
        e.flexslider = function(t, n) {
            var i = e(t),
                a = e.extend({}, e.flexslider.defaults, n),
                r = a.namespace,
                o = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
                s = o ? "touchend" : "click",
                l = "vertical" === a.direction,
                c = a.reverse,
                u = a.itemWidth > 0,
                d = "fade" === a.animation,
                p = "" !== a.asNavFor,
                f = a.a11y,
                h = {};
            e.data(t, "flexslider", i), h = {
                init: function() {
                    i.animating = !1, i.currentSlide = a.startAt, i.animatingTo = i.currentSlide, i.atEnd = 0 === i.currentSlide || i.currentSlide === i.last, i.containerSelector = a.selector.substr(0, a.selector.search(" ")), i.slides = e(a.selector, i), i.container = e(i.containerSelector, i), i.count = i.slides.length, i.syncExists = e(a.sync).length > 0, "slide" === a.animation && (a.animation = "swing"), i.prop = l ? "top" : "marginLeft", i.args = {}, i.manualPause = !1, i.transitions = !a.video && !d && a.useCSS && function() {
                        var e = document.createElement("div"),
                            t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var n in t)
                            if (void 0 !== e.style[t[n]]) return i.pfx = t[n].replace("Perspective", "").toLowerCase(), i.prop = "-" + i.pfx + "-transform", !0;
                        return !1
                    }(), "" !== a.controlsContainer && (i.controlsContainer = e(a.controlsContainer).length > 0 && e(a.controlsContainer)), "" !== a.manualControls && (i.manualControls = e(a.manualControls).length > 0 && e(a.manualControls)), a.randomize && (i.slides.sort(function() {
                        return Math.round(Math.random()) - .5
                    }), i.container.empty().append(i.slides)), i.doMath(), p && h.asNav.setup(), i.setup("init"), a.controlNav && h.controlNav.setup(), a.directionNav && h.directionNav.setup(), a.keyboard && (1 === e(i.containerSelector).length || a.multipleKeyboard) && e(document).bind("keyup", function(e) {
                        var t = e.keyCode;
                        if (!i.animating && (39 === t || 37 === t)) {
                            var n = 39 === t ? i.getTarget("next") : 37 === t ? i.getTarget("prev") : !1;
                            i.flexAnimate(n, a.pauseOnAction)
                        }
                    }), a.mousewheel && i.bind("mousewheel", function(e, t) {
                        e.preventDefault();
                        var n = i.getTarget(0 > t ? "next" : "prev");
                        i.flexAnimate(n, a.pauseOnAction)
                    }), a.pausePlay && h.pausePlay.setup(), a.slideshow && (a.pauseOnHover && i.hover(function() {
                        i.manualPlay || i.manualPause || i.pause()
                    }, function() {
                        i.manualPause || i.manualPlay || i.play()
                    }), a.initDelay > 0 ? setTimeout(i.play, a.initDelay) : i.play()), o && a.touch && h.touch(), (!d || d && a.smoothHeight) && e(window).bind("resize focus", h.resize), setTimeout(function() {
                        a.start(i)
                    }, 200)
                },
                asNav: {
                    setup: function() {
                        i.asNav = !0, i.animatingTo = Math.floor(i.currentSlide / i.move), i.currentItem = i.currentSlide, i.slides.filter(function(e) {
                            return e < i.visible ? this : null
                        }).attr("tabindex", 0), i.slides.removeClass(r + "active-slide").eq(i.currentItem).addClass(r + "active-slide"), i.slides.bind("touchend.flexslider touchcancel.flexslider click.flexslider keypress.flexslider", function(t) {
                            if (13 === t.keyCode || "keypress" !== t.type) {
                                t.preventDefault();
                                var n = e(this),
                                    r = n.index();
                                e(a.asNavFor).data("flexslider").animating || n.hasClass("active") || (i.direction = i.currentItem < r ? "next" : "prev", i.flexAnimate(r, a.pauseOnAction, !1, !0, !0))
                            }
                        })
                    }
                },
                controlNav: {
                    setup: function() {
                        i.manualControls ? h.controlNav.setupManual() : h.controlNav.setupPaging()
                    },
                    setupPaging: function() {
                        var t, n = "thumbnails" === a.controlNav ? "control-thumbs" : "control-paging",
                            l = 1;
                        if (i.controlNavScaffold = e('<ol class="' + r + "control-nav " + r + n + '"></ol>'), i.pagingCount > 1)
                            for (var c = 0; c < i.pagingCount; c++) t = "thumbnails" === a.controlNav ? '<img src="' + i.slides.eq(c).attr("data-thumb") + '"/>' : "<button><span>" + l + "</span></button>", i.controlNavScaffold.append("<li>" + t + "</li>"), l++;
                        i.controlsContainer ? e(i.controlsContainer).append(i.controlNavScaffold) : i.append(i.controlNavScaffold), h.controlNav.set(), h.controlNav.active(), i.controlNavScaffold.delegate("button, img", s, function(t) {
                            t.preventDefault();
                            var n = e(this),
                                o = i.controlNav.index(n);
                            n.hasClass(r + "active") || (i.direction = o > i.currentSlide ? "next" : "prev", i.flexAnimate(o, a.pauseOnAction))
                        }), o && i.controlNavScaffold.delegate("button", "click touchstart", function(e) {
                            e.preventDefault()
                        })
                    },
                    setupManual: function() {
                        i.controlNav = i.manualControls, h.controlNav.active(), i.controlNav.live(s, function(t) {
                            t.preventDefault();
                            var n = e(this),
                                o = i.controlNav.index(n);
                            n.hasClass(r + "active") || (i.direction = o > i.currentSlide ? "next" : "prev", i.flexAnimate(o, a.pauseOnAction))
                        }), o && i.controlNav.live("click touchstart", function(e) {
                            e.preventDefault()
                        })
                    },
                    set: function() {
                        var t = "thumbnails" === a.controlNav ? "img" : "button";
                        i.controlNav = e("." + r + "control-nav li " + t, i.controlsContainer ? i.controlsContainer : i)
                    },
                    active: function() {
                        i.controlNav.removeClass(r + "active").eq(i.animatingTo).addClass(r + "active")
                    },
                    update: function(t, n) {
                        i.pagingCount > 1 && "add" === t ? i.controlNavScaffold.append(e("<li><button>" + i.count + "</button></li>")) : 1 === i.pagingCount ? i.controlNavScaffold.find("li").remove() : i.controlNav.eq(n).closest("li").remove(), h.controlNav.set(), i.pagingCount > 1 && i.pagingCount !== i.controlNav.length ? i.update(n, t) : h.controlNav.active()
                    }
                },
                directionNav: {
                    setup: function() {
                        if (!(i.pagingCount <= 1)) {
                            var t, n;
                            f && !i.controlsContainer ? t = [e('<button class="' + r + 'prev"><span>' + a.prevText + "</span></button>"), e('<button class="' + r + 'next"><span>' + a.nextText + "</span></button>")] : n = e('<ul class="' + r + 'direction-nav"><li><button class="' + r + 'prev"><span>' + a.prevText + '</span></button></li><li><button class="' + r + 'next"><span>' + a.nextText + "</span></button></li></ul>"), i.controlsContainer ? (e(i.controlsContainer).append(n), i.directionNav = e("." + r + "direction-nav li button", i.controlsContainer)) : f && t.length > 0 ? (i.prepend(t[0]), i.controlNavScaffold ? i.controlNavScaffold.before(t[1]) : i.append(t[1]), i.directionNav = t[0].add(t[1])) : (i.append(n), i.directionNav = e("." + r + "direction-nav li button", i)), h.directionNav.update(), i.directionNav.bind(s, function(t) {
                                t.preventDefault();
                                var n = i.getTarget(e(this).hasClass(r + "next") ? "next" : "prev");
                                i.flexAnimate(n, a.pauseOnAction)
                            }), o && i.directionNav.bind("click touchstart", function(e) {
                                e.preventDefault()
                            })
                        }
                    },
                    update: function() {
                        var e = r + "disabled";
                        1 === i.pagingCount && i.directionNav ? i.directionNav.addClass(e) : a.animationLoop ? i.directionNav && i.directionNav.removeClass(e) : 0 === i.animatingTo ? i.directionNav.removeClass(e).filter("." + r + "prev").addClass(e) : i.animatingTo === i.last ? i.directionNav.removeClass(e).filter("." + r + "next").addClass(e) : i.directionNav.removeClass(e)
                    }
                },
                pausePlay: {
                    setup: function() {
                        var t = e('<div class="' + r + 'pauseplay"><a></a></div>');
                        i.controlsContainer ? (i.controlsContainer.append(t), i.pausePlay = e("." + r + "pauseplay a", i.controlsContainer)) : (i.append(t), i.pausePlay = e("." + r + "pauseplay a", i)), h.pausePlay.update(a.slideshow ? r + "pause" : r + "play"), i.pausePlay.bind(s, function(t) {
                            t.preventDefault(), e(this).hasClass(r + "pause") ? (i.manualPause = !0, i.manualPlay = !1, i.pause()) : (i.manualPause = !1, i.manualPlay = !0, i.play())
                        }), o && i.pausePlay.bind("click touchstart", function(e) {
                            e.preventDefault()
                        })
                    },
                    update: function(e) {
                        "play" === e ? i.pausePlay.removeClass(r + "pause").addClass(r + "play").text(a.playText) : i.pausePlay.removeClass(r + "play").addClass(r + "pause").text(a.pauseText)
                    }
                },
                touch: function() {
                    function e(e) {
                        i.animating ? e.preventDefault() : 1 === e.touches.length && (i.pause(), f = l ? i.h : i.w, v = Number(new Date), p = u && c && i.animatingTo === i.last ? 0 : u && c ? i.limit - (i.itemW + a.itemMargin) * i.move * i.animatingTo : u && i.currentSlide === i.last ? i.limit : u ? (i.itemW + a.itemMargin) * i.move * i.currentSlide : c ? (i.last - i.currentSlide + i.cloneOffset) * f : (i.currentSlide + i.cloneOffset) * f, o = l ? e.touches[0].pageY : e.touches[0].pageX, s = l ? e.touches[0].pageX : e.touches[0].pageY, t.addEventListener("touchmove", n, !1), t.addEventListener("touchend", r, !1))
                    }

                    function n(e) {
                        h = l ? o - e.touches[0].pageY : o - e.touches[0].pageX, m = l ? Math.abs(h) < Math.abs(e.touches[0].pageX - s) : Math.abs(h) < Math.abs(e.touches[0].pageY - s), (!m || Number(new Date) - v > 500) && (e.preventDefault(), !d && i.transitions && (a.animationLoop || (h /= 0 === i.currentSlide && 0 > h || i.currentSlide === i.last && h > 0 ? Math.abs(h) / f + 2 : 1), i.setProps(p + h, "setTouch")))
                    }

                    function r() {
                        if (t.removeEventListener("touchmove", n, !1), i.animatingTo === i.currentSlide && !m && null !== h) {
                            var e = c ? -h : h,
                                l = i.getTarget(e > 0 ? "next" : "prev");
                            i.canAdvance(l) && (Number(new Date) - v < 550 && Math.abs(e) > 50 || Math.abs(e) > f / 2) ? i.flexAnimate(l, a.pauseOnAction) : d || i.flexAnimate(i.currentSlide, a.pauseOnAction, !0)
                        }
                        t.removeEventListener("touchend", r, !1), o = null, s = null, h = null, p = null
                    }
                    var o, s, p, f, h, v, m = !1;
                    t.addEventListener("touchstart", e, !1)
                },
                resize: function() {
                    !i.animating && i.is(":visible") && (u || i.doMath(), d ? h.smoothHeight() : u ? (i.slides.width(i.computedW), i.update(i.pagingCount), i.setProps()) : l ? (i.viewport.height(i.h), i.setProps(i.h, "setTotal")) : (a.smoothHeight && h.smoothHeight(), i.newSlides.width(i.computedW), i.setProps(i.computedW, "setTotal")))
                },
                smoothHeight: function(e) {
                    if (!l || d) {
                        var t = d ? i : i.viewport;
                        e ? t.animate({
                            height: i.slides.eq(i.animatingTo).height()
                        }, e) : t.height(i.slides.eq(i.animatingTo).height())
                    }
                },
                sync: function(t) {
                    var n = e(a.sync).data("flexslider"),
                        r = i.animatingTo;
                    switch (t) {
                        case "animate":
                            n.flexAnimate(r, a.pauseOnAction, !1, !0);
                            break;
                        case "play":
                            n.playing || n.asNav || n.play();
                            break;
                        case "pause":
                            n.pause()
                    }
                }
            }, i.flexAnimate = function(t, n, s, f, v) {
                if (p && 1 === i.pagingCount && (i.direction = i.currentItem < t ? "next" : "prev"), !i.animating && (i.canAdvance(t, v) || s) && i.is(":visible")) {
                    if (p && f) {
                        var m = e(a.asNavFor).data("flexslider");
                        if (i.atEnd = 0 === t || t === i.count - 1, m.flexAnimate(t, !0, !1, !0, v), i.direction = i.currentItem < t ? "next" : "prev", m.direction = i.direction, Math.ceil((t + 1) / i.visible) - 1 === i.currentSlide || 0 === t) return i.currentItem = t, i.slides.removeClass(r + "active-slide").eq(t).addClass(r + "active-slide"), !1;
                        i.currentItem = t, i.slides.removeClass(r + "active-slide").eq(t).addClass(r + "active-slide"), t = Math.floor(t / i.visible)
                    }
                    if (i.animating = !0, i.animatingTo = t, a.before(i), n && i.pause(), i.syncExists && !v && h.sync("animate"), a.controlNav && h.controlNav.active(), u || i.slides.removeClass(r + "active-slide").eq(t).addClass(r + "active-slide"), i.atEnd = 0 === t || t === i.last, a.directionNav && h.directionNav.update(), t === i.last && (a.end(i), a.animationLoop || i.pause()), d) o ? (i.slides.eq(i.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    }), i.slides.eq(t).css({
                        opacity: 1,
                        zIndex: 2
                    }), i.animating = !1, i.currentSlide = i.animatingTo) : (i.slides.eq(i.currentSlide).fadeOut(a.animationSpeed, a.easing), i.slides.eq(t).fadeIn(a.animationSpeed, a.easing, i.wrapup));
                    else {
                        var g, y, b, w = l ? i.slides.filter(":first").height() : i.computedW;
                        u ? (g = a.itemWidth > i.w ? 2 * a.itemMargin : a.itemMargin, b = (i.itemW + g) * i.move * i.animatingTo, y = b > i.limit && 1 !== i.visible ? i.limit : b) : y = 0 === i.currentSlide && t === i.count - 1 && a.animationLoop && "next" !== i.direction ? c ? (i.count + i.cloneOffset) * w : 0 : i.currentSlide === i.last && 0 === t && a.animationLoop && "prev" !== i.direction ? c ? 0 : (i.count + 1) * w : c ? (i.count - 1 - t + i.cloneOffset) * w : (t + i.cloneOffset) * w, i.setProps(y, "", a.animationSpeed), i.transitions ? (a.animationLoop && i.atEnd || (i.animating = !1, i.currentSlide = i.animatingTo), i.container.unbind("webkitTransitionEnd transitionend oTransitionEnd otransitionend MSTransitionEnd"), i.container.bind("webkitTransitionEnd transitionend oTransitionEnd otransitionend MSTransitionEnd", function() {
                            i.wrapup(w)
                        })) : i.container.animate(i.args, a.animationSpeed, a.easing, function() {
                            i.wrapup(w)
                        })
                    }
                    a.smoothHeight && h.smoothHeight(a.animationSpeed)
                }
            }, i.wrapup = function(e) {
                d || u || (0 === i.currentSlide && i.animatingTo === i.last && a.animationLoop ? i.setProps(e, "jumpEnd") : i.currentSlide === i.last && 0 === i.animatingTo && a.animationLoop && i.setProps(e, "jumpStart")), i.animating = !1, i.currentSlide = i.animatingTo, i.tabulate(), a.after(i)
            }, i.animateSlides = function() {
                i.animating || i.flexAnimate(i.getTarget("next"))
            }, i.pause = function() {
                clearInterval(i.animatedSlides), i.playing = !1, a.pausePlay && h.pausePlay.update("play"), i.syncExists && h.sync("pause")
            }, i.play = function() {
                i.animatedSlides = setInterval(i.animateSlides, a.slideshowSpeed), i.playing = !0, a.pausePlay && h.pausePlay.update("pause"), i.syncExists && h.sync("play")
            }, i.canAdvance = function(e, t) {
                var n = p ? i.pagingCount - 1 : i.last;
                return t ? !0 : p && i.currentItem === i.count - 1 && 0 === e && "prev" === i.direction ? !0 : e !== i.currentSlide || p ? a.animationLoop ? !0 : i.atEnd && 0 === i.currentSlide && e === n && "next" !== i.direction ? !1 : i.atEnd && i.currentSlide === n && 0 === e && "next" === i.direction ? !1 : !0 : !1
            }, i.getTarget = function(e) {
                return i.direction = e, "next" === e ? i.currentSlide === i.last ? 0 : i.currentSlide + 1 : 0 === i.currentSlide ? i.last : i.currentSlide - 1
            }, i.setProps = function(e, t, n) {
                var r = function() {
                    var n = e ? e : (i.itemW + a.itemMargin) * i.move * i.animatingTo,
                        r = function() {
                            if (u) return "setTouch" === t ? e : c && i.animatingTo === i.last ? 0 : c ? i.limit - (i.itemW + a.itemMargin) * i.move * i.animatingTo : i.animatingTo === i.last ? i.limit : n;
                            switch (t) {
                                case "setTotal":
                                    return c ? (i.count - 1 - i.currentSlide + i.cloneOffset) * e : (i.currentSlide + i.cloneOffset) * e;
                                case "setTouch":
                                    return c ? e : e;
                                case "jumpEnd":
                                    return c ? e : i.count * e;
                                case "jumpStart":
                                    return c ? i.count * e : e;
                                default:
                                    return e
                            }
                        }();
                    return -1 * r + "px"
                }();
                i.transitions && (r = l ? "translate3d(0," + r + ",0)" : "translate3d(" + r + ",0,0)", n = void 0 !== n ? n / 1e3 + "s" : "0s", i.container.css("-" + i.pfx + "-transition-duration", n)), i.args[i.prop] = r, (i.transitions || void 0 === n) && i.container.css(i.args)
            }, i.setup = function(t) {
                if (d) i.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%",
                    position: "relative"
                }), "init" === t && (o ? i.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + a.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(i.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : i.slides.eq(i.currentSlide).fadeIn(a.animationSpeed, a.easing)), a.smoothHeight && h.smoothHeight();
                else {
                    var n, s;
                    "init" === t && (i.viewport = e('<div class="' + r + 'viewport"></div>').css({
                        overflow: "hidden",
                        position: "relative"
                    }).appendTo(i).append(i.container), i.cloneCount = 0, i.cloneOffset = 0, c && (s = e.makeArray(i.slides).reverse(), i.slides = e(s), i.container.empty().append(i.slides))), a.animationLoop && !u && Modernizr.opacity && (i.cloneCount = 2, i.cloneOffset = 1, "init" !== t && i.container.find(".clone").remove(), i.container.append(i.slides.first().clone().addClass("clone")).prepend(i.slides.last().clone().addClass("clone"))), i.newSlides = e(a.selector, i), n = c ? i.count - 1 - i.currentSlide + i.cloneOffset : i.currentSlide + i.cloneOffset, l && !u ? (i.container.height(200 * (i.count + i.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                        i.newSlides.css({
                            display: "block"
                        }), i.doMath(), i.viewport.height(i.h), i.setProps(n * i.h, "init")
                    }, "init" === t ? 100 : 0)) : (i.container.width(200 * (i.count + i.cloneCount) + "%"), i.setProps(n * i.computedW, "init"), setTimeout(function() {
                        i.doMath(), i.newSlides.css({
                            width: i.computedW,
                            "float": "left",
                            display: "block"
                        }), a.smoothHeight && h.smoothHeight()
                    }, "init" === t ? 100 : 0))
                }
                u || i.slides.removeClass(r + "active-slide").eq(i.currentSlide).addClass(r + "active-slide"), i.tabulate()
            }, i.doMath = function() {
                var e = i.slides.first(),
                    t = a.itemMargin,
                    n = a.minItems,
                    r = a.maxItems;
                i.w = i.width(), i.h = e.height(), i.boxPadding = e.outerWidth() - e.width(), u ? (i.itemT = a.itemWidth + t, i.minW = n ? n * i.itemT : i.w, i.maxW = r ? r * i.itemT : i.w, i.itemW = i.minW > i.w ? (i.w - t * n) / n : i.maxW < i.w ? (i.w - t * r) / r : a.itemWidth > i.w ? i.w : a.itemWidth, i.visible = Math.floor(i.w / (i.itemW + t)), i.move = a.move > 0 && a.move < i.visible ? a.move : i.visible, i.pagingCount = Math.ceil((i.count - i.visible) / i.move + 1), i.last = i.pagingCount - 1, i.limit = 1 === i.pagingCount ? 0 : a.itemWidth > i.w ? (i.itemW + 2 * t) * i.count - i.w - t : (i.itemW + t) * i.count - i.w - t) : (i.itemW = i.w, i.pagingCount = i.count, i.last = i.count - 1), i.computedW = i.itemW - i.boxPadding
            }, i.update = function(e, t) {
                i.doMath(), u || (e < i.currentSlide ? i.currentSlide += 1 : e <= i.currentSlide && 0 !== e && (i.currentSlide -= 1), i.animatingTo = i.currentSlide), a.controlNav && !i.manualControls && ("add" === t && !u || i.pagingCount > i.controlNav.length ? h.controlNav.update("add") : ("remove" === t && !u || i.pagingCount < i.controlNav.length) && (u && i.currentSlide > i.last && (i.currentSlide -= 1, i.animatingTo -= 1), h.controlNav.update("remove", i.last))), a.directionNav && h.directionNav.update()
            }, i.addSlide = function(t, n) {
                var r = e(t);
                i.count += 1, i.last = i.count - 1, l && c ? void 0 !== n ? i.slides.eq(i.count - n).after(r) : i.container.prepend(r) : void 0 !== n ? i.slides.eq(n).before(r) : i.container.append(r), i.update(n, "add"), i.slides = e(a.selector + ":not(.clone)", i), i.setup(), a.added(i)
            }, i.removeSlide = function(t) {
                var n = isNaN(t) ? i.slides.index(e(t)) : t;
                i.count -= 1, i.last = i.count - 1, isNaN(t) ? e(t, i.slides).remove() : l && c ? i.slides.eq(i.last).remove() : i.slides.eq(t).remove(), i.doMath(), i.update(n, "remove"), i.slides = e(a.selector + ":not(.clone)", i), i.setup(), a.removed(i)
            }, i.tabulate = function() {
                var t = {};
                u ? (i.currentSlide + 1) * i.visible > i.count ? (t.start = i.count - i.visible, t.end = i.count - 1) : (t.start = i.currentSlide * i.visible, t.end = i.currentSlide * i.visible + i.visible - 1) : t.start = t.end = i.currentSlide, i.slides.each(function(n) {
                    e("a", this).attr("tabindex", n < t.start || n > t.end ? "-1" : "0")
                }), i.asNav && e(i.slides).each(function(n) {
                    e(this).attr("role", "button"), e(this).attr("tabindex", n < t.start || n > t.end ? "-1" : "0")
                })
            }, h.init()
        }, e.flexslider.defaults = {
            namespace: "flex-",
            selector: ".slides > li",
            animation: "fade",
            easing: "swing",
            direction: "horizontal",
            reverse: !1,
            animationLoop: !0,
            smoothHeight: !1,
            startAt: 0,
            slideshow: !0,
            slideshowSpeed: 7e3,
            animationSpeed: 600,
            initDelay: 0,
            randomize: !1,
            pauseOnAction: !0,
            pauseOnHover: !1,
            useCSS: !0,
            touch: !0,
            video: !1,
            controlNav: !0,
            directionNav: !0,
            prevText: "Previous",
            nextText: "Next",
            keyboard: !0,
            multipleKeyboard: !1,
            mousewheel: !1,
            pausePlay: !1,
            pauseText: "Pause",
            playText: "Play",
            controlsContainer: "",
            manualControls: "",
            sync: "",
            asNavFor: "",
            a11y: !0,
            itemWidth: 0,
            itemMargin: 0,
            minItems: 0,
            maxItems: 0,
            move: 0,
            start: function() {},
            before: function() {},
            after: function() {},
            end: function() {},
            added: function() {},
            removed: function() {}
        }, e.fn.flexslider = function(t) {
            if (void 0 === t && (t = {}), "object" == typeof t) return this.each(function() {
                var n = e(this),
                    i = t.selector ? t.selector : ".slides > li",
                    a = n.find(i);
                1 === a.length ? (a.fadeIn(400), t.start && t.start(n)) : void 0 === n.data("flexslider") && new e.flexslider(this, t)
            });
            var n = e(this).data("flexslider");
            switch (t) {
                case "play":
                    n.play();
                    break;
                case "pause":
                    n.pause();
                    break;
                case "next":
                    n.flexAnimate(n.getTarget("next"), !0);
                    break;
                case "prev":
                case "previous":
                    n.flexAnimate(n.getTarget("prev"), !0);
                    break;
                default:
                    "number" == typeof t && n.flexAnimate(t, !0)
            }
        }
    }(jQuery), Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
        var t = this.length >>> 0,
            n = Number(arguments[1]) || 0;
        for (n = 0 > n ? Math.ceil(n) : Math.floor(n), 0 > n && (n += t); t > n; n++)
            if (n in this && this[n] === e) return n;
        return -1
    });
var LOC, Loreal = function() {
    var e = this;
    e.userEvent = {
        action: "touchstart touchend touchcancel click",
        enter: "touchstart mouseenter focusin",
        leave: "touchend touchcancel mouseleave focusout",
        hover: "touchstart touchend touchcancel hover"
    }, e.location = document.getElementById("content").className, e.breakpoints = [320, 480, 768, 992, 1410], e.breakpoint = "", e.columns = {
        320: 1,
        480: 2,
        768: 3,
        992: 3,
        1410: 4
    }, e.scrollTo = function(e) {
        var t = window.location.search,
            n = /scroll=(\d+)/.exec(t);
        n ? setTimeout(function() {
            window.scrollTo(0, n[1])
        }, e) : /mobile/i.test(navigator.userAgent) && !window.location.hash && setTimeout(function() {
            window.pageYOffset || window.scrollTo(0, 1)
        }, e)
    }, e.popup = function() {
        jQuery("[data-popup]").bind("touchstart", function(e) {
            e.preventDefault()
        }), jQuery("[data-popup]").bind("click touchend", function(e) {
            e.preventDefault();
            var t = jQuery(this).data("popup");
            if ("" !== t) {
                var n = "";
                t = t.replace(/'/gi, '"'), t = jQuery.parseJSON(t);
                for (var i in t) t.hasOwnProperty(i) && (n += i + "=" + t[i] + ", ");
                window.open(this.href, "pop1", n)
            } else {
                var a = window.open(this.href);
                a.focus()
            }
        })
    }, e.styleSelect = function(e) {
        var t, n = "";
        t = e ? jQuery("select", e) : jQuery("select"), t.each(function() {
            var e = jQuery(this);
            if (!e.parent().hasClass("new-select") && !e.hasClass("skin") && (n = e.attr("class") ? e.attr("class") : "", e.is(":not([multiple])"))) {
                var t = jQuery.trim(jQuery("option:first-child", this).text()),
                    i = jQuery("<span>", {
                        "class": "select",
                        "aria-hidden": !0
                    });
                "" !== jQuery("option:selected", this).val() && (t = jQuery.trim(jQuery("option:selected", this).text())), this.title = t, e.wrap('<span class="new-select ' + n + '" />').css({
                    "z-index": 10,
                    opacity: 0
                }).after(i.text(t)).on("change", function() {
                    var t = jQuery.trim(jQuery("option:selected", this).text());
                    this.title = t, e.next().text(t), e.removeClass("active")
                }).on("keyup", function(t) {
                    var n;
                    37 === t.keyCode || 38 === t.keyCode ? n = jQuery.trim(jQuery("option[value=" + this.value + "]", this).text()) : (39 === t.keyCode || 40 === t.keyCode) && (n = jQuery.trim(jQuery("option[value=" + this.value + "]", this).text())), n && (this.title = n, e.next().text(n))
                }).attr("title", t);
                var a = e.clone();
                a.css({
                    position: "absolute",
                    left: "-100%",
                    top: "-100%",
                    visibility: "hidden!important",
                    display: "block"
                }).appendTo("body"), a.remove()
            }
        })
    }, e.refresh = function(e) {
        e = e || jQuery("body")
    }, e.fakeSelect = function() {
        var t, n, i = [],
            a = [];
        if (0 !== $("[data-select]").length) {
            var r = function(e) {
                    var n = e.find(".select"),
                        r = e.find("input[type=hidden]");
                    i.length = 0, a.length = 0, e.find("input:checked").each(function(e, t) {
                        i.push($(t).next("label").text()), a.push(t.name)
                    }), i.length > 0 ? (t = i.join(", "), r.val(a.join(","))) : (t = n.data("title"), r.val("")), n.text(t).attr("title", t)
                },
                o = function(t) {
                    n = e.userEvent.action.split(" ");
                    for (var i in n) n[i] = n[i] + "." + t;
                    return n.join(" ")
                };
            $("[data-select]").each(function() {
                var e = $(this),
                    t = e.find(".select");
                e.append($("<input>", {
                    type: "hidden",
                    name: e.data("select")
                })), t.attr({
                    tabindex: 0,
                    "aria-expanded": !1,
                    "aria-controls": t.next().attr("id")
                }), t.data("title", t.text()), r($(this))
            }), $("body").on(o("multiple"), "[data-select]", function(e) {
                if (e.stopPropagation(), "touchstart" !== e.type) {
                    $("body").one(o("multipleOut"), function(e) {
                        $(e.target).closest("[data-select-zone]").length || $(e.target).closest("[data-select]").length || $("[data-select]").removeClass("active")
                    });
                    var t = $(e.target),
                        n = $(this),
                        i = !!t.closest("[data-select-zone]").length;
                    i ? t.is("[type=checkbox]") && r(n) : (e.preventDefault(), n.toggleClass("active"), t.attr({
                        "aria-expanded": n.is(".active")
                    }))
                }
            }), $("body").on("change.multiple", "[data-select] input", function() {
                r($(this).closest("[data-select]"))
            }), $(document.body).delegate(".select-multiple-zone #all", "click", function() {
                if ($("input#all").is(":checked") === !0) {
                    $(".select-multiple-zone input[type=checkbox]").attr("checked", !0);
                    var e = $container.find(".select"),
                        t = e.data("title");
                    e.text(t).attr("title", t)
                } else $(".select-multiple-zone input[type=checkbox]").attr("checked", !1)
            })
        }
    }, e.init = function() {
        e.listen(), jQuery(window).triggerHandler("resize"), $("#chromeframePopin").length && $("body").css("overflow", "hidden"), $.browser.msie && "8" === $.browser.version.toString().substr(0, 1) && ($(window).height() > $("#navigation").position().top + $("#navigation").height() ? $("#header > .wrapper").addClass("fixed") : $("#header > .wrapper").removeClass("fixed"), $(window).resize(function() {
            $(window).height() > $("#navigation").position().top + $("#navigation").height() ? $("#header > .wrapper").addClass("fixed") : $("#header > .wrapper").removeClass("fixed")
        })), e.breakpoint < 480 && e.mobileNews(), e.refresh(), e.header.bind(this), e.scrollTo(0), e.styleSelect(), e.accordion(), e.fakeSelect(), e.quicklinks(), e.brandSlider(), e.tabs(), e.videoIframes(), e.viewers(), e.carrousels(), e.copy(), e.autocomplete(this), e.dashboard(), jQuery("[data-twitter-flux]").length && window.l10n.social.twitterSearch && e.initTwitterFlux(), e.popup(), e.toggleBloc(), e.dfn(), e.subNav(), e.browseItems();
        var t = $("input.date");
        if (t.length && $.tools.dateinput) {
            t.filter("[readonly]").data("readonly", !0), t.each(function(e) {
                $(this), $(this).dateinput({
                    lang: window.l10n.calendar ? window.l10n.lang : "en",
                    format: window.l10n.calendar && 0 === e ? window.l10n.calendar.formatFrom : window.l10n.calendar.formatTo,
                    change: function() {
                        this.getInput().siblings("input[type=hidden]").val(this.getValue("yyyy-mm-dd"))
                    },
                    onBeforeShow: function() {
                        var e = this.getInput();
                        e.is("[readonly]") && e.removeAttr("readonly")
                    },
                    onHide: function() {
                        var e = this.getInput();
                        e.data("readonly") && e.attr("readonly", "readonly")
                    }
                })
            });
            var n, i = $("input.date").eq(0).data("dateinput"),
                a = $("input.date").eq(1).data("dateinput");
            if ($(":date:first").data("dateinput").change(function() {
                    $(":date:last").data("dateinput").setMin(this.getValue(), !0)
                }), $("a[data-query=startDate]").length) {
                var r = $("a[data-query=startDate] time").attr("datetime");
                i.setValue(r)
            }
            if ($("a[data-query=endDate]").length) {
                var r = $("a[data-query=endDate] time").attr("datetime");
                a.setValue(r)
            }
            i.getInput().bind({
                change: function() {
                    "" === $("input.date").eq(1).val() && (e = (a.getValue() - i.getValue()) / 864e5, $("input.date").eq(1).data("dateinput").setValue(new Date).addDay(), a.getValue() < i.getValue() && a.setValue(i.getValue()).addDay());
                    var e = (a.getValue() - i.getValue()) / 864e5;
                    jQuery("input[name=groupBy]").val(366 > e ? "Month" : "Year")
                },
                blur: function(e) {
                    "" === $(e.currentTarget).val() && $(e.currentTarget).siblings("input[type=hidden]").val(window.l10n.calendar.defaultValueFrom)
                }
            }), a.getInput().bind("blur", function(e) {
                "" === $(e.currentTarget).val() && $(e.currentTarget).siblings("input[type=hidden]").val(window.l10n.calendar.defaultValueTo)
            }).bind("change", function() {
                n = (a.getValue() - i.getValue()) / 864e5, jQuery("input[name=groupBy]").val(366 > n ? "Month" : "Year")
            })
        }
        if ($("textarea.limited").length && $("textarea.limited").maxlength(), $("select[name=theme]").length && null !== e.getUrlVars().theme && $("#theme option[value='" + e.getUrlVars().theme + "']").attr("selected", !0), $("select[name=year]").length && null !== e.getUrlVars().year && $("#theme option[value='" + e.getUrlVars().year + "']").attr("selected", !0), $("form .std-form.rss-std input[type=checkbox]").length && e.bindCheckboxClick(), $("select[data-other]").length && e.displayOtherChoice(), $("select[data-selected=true]").length && e.displaySelectedChoice(), $("select[data-children]").length && e.fillNextSelect(), $(".prizes #aspnetForm.filters").length && e.ajaxFilters(), $(".media-gallery form").length, e.animateScroll(), jQuery("[data-xml]").length) {
            var o = jQuery("[data-xml]:eq(0)").data("xml");
            e.handleFinanceData(o)
        }
        jQuery("input[type=hidden][name=sort]").length && e.fixSearch(), !Modernizr.opacity && $("section.brands").length && ($("section.brands>ul li>a").removeClass("active"), $("section.brands>ul>li>a").eq(0).trigger("click")), $(".icono").length > 0 && new e.iconographie
    }, e.listen = function() {
        jQuery(window).on("resize.site, orientationchange.site", function() {
            if (!Modernizr.mq("only all")) return jQuery(window).off("resize.site, orientationchange.site"), void(e.breakpoint = 992);
            for (var t = e.breakpoints.length - 1; t >= 0; t--)
                if (Modernizr.mq("(min-width:" + e.breakpoints[t] + "px)")) {
                    e.breakpoint != e.breakpoints[t] && (e.breakpoint = e.breakpoints[t], jQuery(window).triggerHandler("breakpoint", [e.breakpoints[t]]));
                    break
                }
        })
    }, e.animateScroll = function(t, n) {
        if (n = "undefined" == typeof n ? 1e3 : n, t) {
            var i = t ? t.offset().top : 0;
            jQuery("html,body").animate({
                scrollTop: i
            }, n, function() {
                t && t.find("a:visible,input:not(:hidden),textarea:visible,select:visible").not(function() {
                    return $(this).closest(".hiddeninfos").length
                }).first().focus()
            })
        } else jQuery("body").on(e.userEvent.action, "[data-scroll]", function(t) {
            if (t.preventDefault(), "touchstart" !== t.type) {
                var n;
                n = jQuery("A" === this.nodeName ? jQuery(this).attr("href") : jQuery(this).data("scroll")), e.animateScroll(n)
            }
        })
    }, e.header = {
        bind: function(e) {
            this.that = e, this.header = jQuery(".website>header"), this.nav = jQuery(".wrapper>div", this.header), this.subnav = jQuery("li>section", this.nav), jQuery("#quickAccess .navigation a", this.header).on(e.userEvent.action, {
                o: this
            }, this.handleNav), jQuery("#navigation>ul>li>a,#navigation [data-subnav], #navigation .close, .foot nav>ul>li>a", this.header).on(e.userEvent.action, {
                o: this
            }, this.handleSubNav), jQuery("#navigation>ul>li>a, .foot nav>ul>li>a").each(function() {
                if(this.id !="")
				{
					jQuery(this).attr("aria-expanded", !1).attr("aria-controls", this.hash.replace("#", ""))
				}
            }), jQuery(window).on("breakpoint.header", {
                that: this
            }, function(e, t) {
                var n = e.data.that,
                    i = jQuery("#content").height();
                switch (t) {
                    case 1420:
                    case 992:
                        n.nav.get(0).style[Modernizr.prefixed("backfaceVisibility")] = "", n.nav.get(0).style.height = "";
                        break;
                    case 480:
                    case 320:
                        n.subnav.get(0).style.height = "";
                        break;
                    case 768:
                        n.nav.hasClass("active") && (n.nav.get(0).style[Modernizr.prefixed("backfaceVisibility")] = "hidden"), n.nav.css({
                            height: i
                        }), n.subnav.css({
                            height: i
                        })
                }
            })
        },
        handleNav: function(e) {
            e.preventDefault(), e.stopPropagation();
            var t = e.data.o;
            if ("touchstart" != e.type) {
                var n, i;
                t.nav.hasClass("active") ? (jQuery(".current .close", t.nav).trigger("click"), t.that.breakpoint < 992 ? (n = {
                    height: 0,
                    overflow: "hidden"
                }, i = {
                    height: t.nav.outerHeight(),
                    overflow: "hidden"
                }, t.nav.css(i)) : n = {
                    left: -1 * t.nav.outerWidth()
                }, t.nav.transition(n, 300, function() {
                    t.nav.toggleClass("active");
                    for (var e in n) n[e] = n[e] = "";
                    n.left = "", Modernizr.csstransforms3d && (t.that.breakpoint > 480 ? n[Modernizr.prefixed("backfaceVisibility")] = "" : n[Modernizr.prefixed("tranform")] = ""), t.nav.css(n)
                })) : (n = {
                    height: t.nav.outerHeight(),
                    overflow: "hidden"
                }, i = {
                    display: "block",
                    height: 0,
                    left: 0,
                    overflow: "hidden"
                }, t.that.breakpoint < 992 ? (n = {
                    height: t.nav.outerHeight(),
                    overflow: "hidden"
                }, i = {
                    display: "block",
                    height: 0,
                    left: 0,
                    overflow: "hidden"
                }) : (n = {
                    left: 0
                }, i = {
                    display: "block",
                    height: jQuery("#content").outerHeight(!0)
                }), Modernizr.csstransforms3d && (t.that.breakpoint > 480 ? i[Modernizr.prefixed("backfaceVisibility")] = "hidden" : i[Modernizr.prefixed("tranform")] = "translateZ(0)"), t.nav.css(i), t.nav.transition(n, 300, function() {
                    t.nav.toggleClass("active");
                    for (var e in n) n[e] = n[e] = "";
                    n.display = "", t.nav.css(n)
                }))
            }
        },
        handleSubNav: function(e) {
            var t, n, i, a, r = e.data.o,
                o = jQuery(this);
            if (o.hasClass("close") ? (t = o.closest("section"), n = t.parent(), i = o.closest("div"), a = t.prev()) : (t = o.next(), n = o.parent(), i = jQuery(">div", t), a = o), t.length && e.preventDefault(), "touchstart" != e.type)
                if (r.that.breakpoint > 480 && t.css({
                        height: jQuery("#content").outerWidth(!0)
                    }), n.hasClass("current")) {
                    jQuery("#content").off(r.that.userEvent.action + ".subnav"), a.attr("aria-expanded", !1), r.that.breakpoint > 768 && (r.nav.hasClass("active") ? r.nav.removeClass("active") : null), i.height(i.height());
                    var s = {
                        height: 0
                    };
                    i.height(i.height()),t.css({
                        display: "block",
                        visibility: "hidden"
                    }), t.transition(s, 300, function() {
                        n.removeClass("current"), n.blur(), s.display = "", i.get(0).style.height = "";
                        for (var e in s) s[e] = s[e] = "";
                        t.css(s)
                    }), jQuery(".js .website > header > .wrapper ").toggleClass("posFixed")
                } else if ("close" != this.className) {
                jQuery(".current .close", r.nav).trigger("click"), jQuery("#content").one(r.that.userEvent.action + ".subnav", {
                    o: r
                }, r.handleSubNav), o.attr("aria-expanded", !0), r.nav.hasClass("active") ? null : r.nav.addClass("active"), t.css({
                    display: "block",
                    visibility: "hidden"
                });
                var s = {
                    visibility: "visible",
                    height: t.outerHeight(),
	
                };
                i.height(i.height()), t.css({
                    visibility: "visible",
                    height: 0,
			
                }), t.transition(s, 300, function() {
                    n.addClass("current"), i.get(0).style.height = "";
                    for (var e in s) s[e] = s[e] = "";
                    t.css(s)
                }), jQuery(".js .website > header > .wrapper ").toggleClass("posFixed"), $("html,body").scrollTop($("#header").offset().top)
            }
        }
    }, e.quicklinks = function() {
        jQuery(window).on("keydown", function(t) {
            if (t.target === document.body && 9 === t.keyCode) {
                var n = jQuery("#quickAccess");
                n.addClass("focus"), n.on("blur focus " + e.userEvent.action, "a", function(e) {
                    var t = jQuery("a", e.delegateTarget),
                        i = t.index(this);
                    if ("focusout" === e.type || "focusin" === e.type) i === t.length - 1 ? "focusout" === e.type ? n.addClass("out") : "focusin" === e.type && n.removeClass("out") : n.removeClass("out");
                    else {
                        e.preventDefault();
                        var a = jQuery(this.hash),
                            r = a.position().top;
                        r > 0 ? jQuery("html,body").animate({
                            scrollTop: a.position().top
                        }, 500, function() {
                            this === document.body && jQuery("a:first", a).trigger("focus")
                        }) : jQuery("a:first", a).trigger("focus")
                    }
                })
            }
        })
    }, e.viewers = function(t) {
        var n = t || jQuery("[data-viewer]");
        n.each(function() {
            var t, n = jQuery(this),
                i = n.data("viewer"),
                a = jQuery(">div", n).find(">ul").addClass("slides").end(),
                r = a.clone();
            return 320 === e.breakpoint ? void(t = {
                minItems: 1
            }) : (r.find(".figureElem").each(function() {
                $fig = jQuery(this), $fig.has("a") && $fig.find("a").children().unwrap()
            }), r.find("iframe").remove(), r.on(e.userEvent.action, "li[tabindex=0]", function() {
                a.find("iframe").remove()
            }), i.title ? null : i.title = window.l10n.carrousel.defaultTitle, n.append(r.addClass("carrousel")), a.flexslider({
                slideshow: !1,
                animation: "slide",
                animationLoop: !0,
                controlNav: !1,
                directionNav: !1,
                sync: r
            }), t = {
                slideshow: !1,
                animation: "slide",
                animationLoop: !0,
                controlNav: !1,
                itemWidth: n.width() / e.columns[e.breakpoint],
                itemMargin: 0,
                minItems: e.columns[e.breakpoint],
                maxItems: e.columns[e.breakpoint],
                asNavFor: a,
                prevText: "",
                nextText: ""
            }, r.flexslider(t), n.data({
                params: t,
                viewer: a,
                carrousel: r
            }), void e.addVideoCarrouselList(a.context))
        }), jQuery(window).on("breakpoint.viewer", function(t, i) {
            n.each(function(t, n) {
                var a = jQuery(n),
                    r = a.data("params"),
                    o = a.data("viewer"),
                    s = a.data("carrousel");
                r.minItems !== e.columns[i] && (jQuery(window).off("breakpoint.viewer"), destroy(s), s.remove(), destroy(o), e.viewers())
            })
        })
    }, e.brandSlider = function(t, n) {
        var i = t || jQuery("[data-brand]");
        i.each(function() {
            var t = jQuery(this),
                i = t.data("brand"),
                a = t.data("type") || "",
                r = i.tabs || i.deploy;
            jQuery(window).one("breakpoint.brandSlider", {
                that: this
            }, function(n, i) {
                e.brandSlider(t, i)
            });
            var o = jQuery("[data-brandSlider]", t),
                s = jQuery(">ul", t),
                l = {
                    768: 4,
                    992: 4,
                    1410: 4
                },
                c = function() {
                    t.data("type", "tabs"), o.each(function() {
                        var t = jQuery(this),
                            a = jQuery("li", this);
                        if (i.items = +l[e.breakpoint], len = Math.ceil(a.length / i.items), $temp = $("<div>"), n && t.data("carrousel") && t.data("carrousel").brandItems != +l[e.breakpoint] || !n) {
                            t.data("flexslider") && destroy(t), n && (a = jQuery(".slides>li>ul>li", t).clone(), a.length && (jQuery(".slides>li", t).remove(), jQuery(".slides", t).append(a))), len = Math.ceil(a.length / i.items);
                            for (var r = 0; len > r; r++) $temp.append(jQuery("<li>").append(jQuery("<ul>").append(a.slice(i.items * r, i.items + i.items * r))));
                            jQuery(">ul", t).html($temp.html()), $temp.empty(), t.data("carrousel", {
                                controls: !0,
                                items: "1",
                                init: i.tabs,
                                brandItems: +l[e.breakpoint]
                            }).attr("data-carrousel", "true"), n && e.carrousels(t), t.on("beforeSlide", function() {
                                var e = t.data("flexslider"),
                                    n = e.find(".slides>li").eq(e.animatingTo);
                                n.find("[data-load-src]").each(function() {
                                    var e = $(this).data("load-src");
                                    e !== !1 && ($(this).prepend($("<img/>").attr("src", e)), $(this).data("load-src", !1))
                                })
                            })
                        }
                    }), s.after(jQuery("<div>").append(jQuery(">li>section", s))), e.tabs(s)
                },
                u = function() {
                    "tabs" === a ? (s.off(e.userEvent.action), destroy(o), o.each(function(e) {
                        var t = jQuery(this),
                            n = jQuery(".slides>li>ul>li", t).clone();
                        jQuery(".slides>li", t).remove(), jQuery(".slides", t).append(n), t.closest("section").appendTo(jQuery(">li:eq(" + e + ")", s))
                    })) : "deploy" === a && s.find(">li>a").each(function(e, t) {
                        jQuery(t).after(jQuery(t.hash))
                    }), t.data("type", "accordion"), e.accordion(s)
                },
                d = function() {
                    t.data("type", "deploy"), s.after(s.find(">li>section"))
                };
            i.tabs && e.breakpoint >= i.tabs && (!a || "tabs" != a) ? c() : e.breakpoint >= i.accordion && e.breakpoint < r && (!a || "accordion" != a) ? u() : i.deploy && e.breakpoint >= i.deploy && (!a || "deploy" != a) && d()
        })
    }, e.videoIframes = function(t) {
        var n = t || jQuery("a.iframePlayer");
        n.each(function() {
            var t = jQuery(this),
                n = t.next("iframe.player"),
                i = t.closest("[data-carrousel], [data-viewer]");
            n && i && (t.data("iframe", n.attr("src")), n.remove(), t.on(e.userEvent.action, function(e) {
                if (e.preventDefault(), "touchstart" !== e.type) {
                    i.prev("header").find(".pause button").trigger("click");
                    var n = jQuery(this),
                        a = n.data("iframe");
                    void 0 == a && (a = n.attr("href")), n.after(jQuery("<iframe/>", {
                        frameborder: 0,
                        scrolling: "no",
                        "class": "player",
						allowfullscreen:true,
                        src: a
                    }));
                    var r = n.find(".play").parent("a").parent().find("div");
                    r.transition({
                        opacity: 0
                    }, 500, function() {
                        r.hide().css("opacity", 1)
                    });
                    var o = $('<div class="bkg-close"><button class="close">' + window.l10n.close + "</button></div>");
                    t.after(o), $(".homeSlider > header").css("opacity", "0"), i.on("beforeSlide", function() {
                        n.next("iframe").remove(), r.show(), o.remove(), $(".homeSlider > header").show().css("opacity", "100")
                    })
                }
            }))
        }), $("body").on(e.userEvent.action.split(" ").join(".toggleBloc "), ".bkg-close button", function(t) {
            t.preventDefault();
            var n = $(t.currentTarget).parent(),
                i = $(".slides li a.iframePlayer").siblings("iframe"),
                a = n.closest("[data-carrousel], [data-viewer]"),
                r = n.closest("section"),
                o = r.find("> div:not(.bkg-close)");
            a.prev("header").find(".play button").trigger("click"), i.attr("src", ""), i.remove(), n.remove(), $(".homeSlider > header").css("opacity", "100"), 768 === e.breakpoint && a.is("[data-carrousel]") && ($(".homeSlider > header").removeClass("video-nav-under"), $(".video-nav-under").remove(".mobile.bkg-close")), o.show().css("opacity", 0), o.transition({
                opacity: 1
            }, 500)
        })
    }, e.carrousels = function(t) {
        var n = t || jQuery("[data-carrousel]"),
            i = new RegExp("(\\?|&|^)carrouselActiveSlide=([0-9]+)(.*?)(&|$)"),
            a = jQuery("[data-carrousel] ul.slides li"),
            r = a.length;
        1 == r && a.each(function() {
            var e = jQuery(this);
            1 == e.find("img").length && (e.find("div.col, div.mainCol").addClass("colitem"), e.find("div.mainCol").addClass("col"), e.find("div.mainCol").removeClass("mainCol"))
        }), n.each(function() {
            var t, n = jQuery(this),
                a = 0,
                r = n.closest("[data-active-item]"),
                o = document.location.search.match(i);
            if (n.find(".slides>li").length <= 1) return n.parent().addClass("noPager"), void n.prev("header").find("nav").hide();
            var s, l, c = n.data("carrousel");
            c.title = c.title || window.l10n.carrousel.defaultTitle, t = "object" == typeof c.items ? "undefined" != typeof c.items[e.breakpoint] ? c.items[e.breakpoint] : c.items.defaultSize : c.items || e.columns[e.breakpoint];
            var u = !1,
                d = {
                    slideshow: !1,
                    animation: "slide",
                    animationLoop: !0,
                    controlNav: !1,
                    itemWidth: 1 === t ? 0 : n.width() / (t || e.columns[e.breakpoint]),
                    itemMargin: 0,
                    minItems: t || e.columns[e.breakpoint],
                    maxItems: t || e.columns[e.breakpoint],
                    items: t,
                    fixedItem: "object" != typeof c.items && c.items ? !0 : !1,
                    initialize: c.init ? c.init : 0,
                    prevText: window.l10n.carrousel.previous ? window.l10n.carrousel.previous.replace("$1", c.title) : "",
                    nextText: window.l10n.carrousel.next ? window.l10n.carrousel.next.replace("$1", c.title) : "",
                    start: function() {},
                    before: function(e) {
                        n.trigger("beforeSlide"), u || setTimeout(function() {
                            e.closest(".media-bk").addClass("setHeight").css("height", e.find(".flex-active-slide").height()), u = !0
                        }, 600)
                    },
                    after: function(e) {
                        n.trigger("afterSlide"), e.closest(".media-bk").length && e.closest(".media-bk").hasClass("setHeight") && u && e.closest(".media-bk").addClass("setHeight").css("height", e.find(".flex-active-slide").height())
                    },
                    startAt: r.length ? +r.data("active-item") - 1 : o ? +o[2] - 1 : 0,
                    currentList: 0,
                    breakpoints: c.items
                };
            if (c.controls) d.controlNav = !0;
            else if (n.siblings("header")) {
                s = jQuery("nav", n.siblings("header"));
                var p = d.before,
                    f = d.after;
                d.directionNav = !1, d.controlNav = !1, d.animationLoop = !0, d.before = function(e) {
                    jQuery("a", s).removeClass("current"), p && p(e)
                }, d.after = function(e) {
                    var t;
                    e.playing || (jQuery(".pause:visible", s.parent()).length ? e.play() : e.pause()), t = jQuery("li:eq(" + e.currentSlide + ") a", s), t.addClass("current"), f && f(e)
                }, s.on(e.userEvent.action, "a", function(e) {
                    if (e.preventDefault(), "touchstart" != e.type) {
                        $("bkg-close").remove();
                        var t = jQuery("li", e.delegateTarget).index(jQuery(this).parent());
                        n.flexslider(t), jQuery(this).addClass("current")
                    }
                }), d.startAt ? jQuery("li:eq(" + d.startAt + ") a", s).addClass("current") : jQuery("li:eq(0) a", s).addClass("current"), jQuery('<ul><li class="play"><button><img src="/~/media/Loreal/Images/Common/sliderPlay.png" alt="Play" /></button></li><li class="pause"><button><img src="/~/media/Loreal/Images/Common/sliderPause.png" alt="Pause" /></button></li></ul>').prependTo(s.parent()).on(e.userEvent.action, "button", function(e) {
                    e.preventDefault(), "touchstart" != e.type && (jQuery(this).parent().is(".play") ? (jQuery(this).parent().hide().next().show(), n.flexslider("play")) : (jQuery(this).parent().hide().prev().show(), n.flexslider("pause")))
                })
            }
            l = function(e, t) {
                if (e.length)
                    for (t ? ++a : --a, s.find("li").hide(), s.find(".backward, .forward").css("visibility", "visible"), idx = 0; 4 > idx; ++idx) e.length && (0 === e.index() && s.find(".backward").css("visibility", "hidden"), e.index() === s.find("li").length - 1 && s.find(".forward").css("visibility", "hidden"), e.show()), e = e.next()
            }, c.navControls && s.find("li").length > 4 && (s.prepend('<button type="button" class="backward"><img src="/~/media/Loreal/Images/Common/backward.png" alt="" />'), s.append('<button type="button" class="forward"><img src="/~/media/Loreal/Images/Common/forward.png" alt="" /></button>'), s.find("li").hide().filter(":nth-child(-n4)").show(), n.on("beforeSlide", function() {
                var e = n.data("flexslider"),
                    t = e.animatingTo / 4 % 1 === 0 ? !0 : !1;
                e.animatingTo > e.currentSlide ? t && e.animatingTo / 4 === a + 1 && s.find(".forward").trigger("click") : 0 === e.animatingTo ? (l(s.find("li").first()), a = 0) : t && e.animatingTo / 4 === a - 1 && s.find(".backward").trigger("click")
            }), s.on(e.userEvent.action, "button", function() {
                var e, t, n, i, a = s.find("li");
                switch (e = a.filter(function() {
                    return jQuery(this).is(":visible")
                }), this.className) {
                    case "backward":
                        if (n = e.first(), n.prev().length) {
                            for (i = 0; 4 > i && (n = n.prev(), n.prev().length); ++i);
                            l(n, !1)
                        }
                        break;
                    case "forward":
                        t = e.last(), l(t.next(), !0)
                }
            })), c.autoplay && (d.slideshow = !0), d.useCSS = !1, (c.init && e.breakpoint >= c.init || !c.init) && (n.find("li.selected-item").length ? (n.on("afterSlide", function(e) {
                $(e.currentTarget).closest(".media-bk").css("visibility", "visible")
            }), n.flexslider(d), n.closest(".media-bk").css("visibility", "hidden"), n.flexslider(n.find(".clone").length ? n.find("li.selected-item").index() - 1 : n.find("li.selected-item").index())) : n.flexslider(d), n.find("ul > li").length > d.maxItems ? n.find(".flex-prev,.flex-next").show() : n.find(".flex-prev,.flex-next").hide()), n.data("params", d)
        }), jQuery(window).on("breakpoint", function(t, i) {
            n.each(function(t, n) {
                var a, r = jQuery(n),
                    o = r.data("params"),
                    s = !1;
                if (o && (o && o.breakpoints && "object" == typeof o.breakpoints ? (s = !0, a = "undefined" != typeof o.breakpoints[e.breakpoint] ? o.breakpoints[e.breakpoint] : o.breakpoints.defaultSize) : a = o.breakpoints, (o && 0 !== o.initialize || !o.fixedItem && (o.items && a !== o.items || !o.breakpoints)) && (i >= o.initialize && r.css({
                        visibility: "hidden"
                    }), window.destroy(r), i >= o.initialize))) {
                    var l = {
                        itemWidth: 1 === a ? 0 : r.width() / (s ? a : e.columns[e.breakpoint]),
                        itemMargin: 0,
                        items: a,
                        minItems: s ? a : e.columns[i],
                        maxItems: s ? a : e.columns[i]
                    };
                    o = jQuery.extend(o, l), r.flexslider(o), r.find("ul > li").length > o.maxItems ? r.find(".flex-prev,.flex-next").show() : r.find(".flex-prev,.flex-next").hide(), r.css({
                        visibility: "visible"
                    })
                }
            })
        })
    }, e.tabs = function(e) {
        var t = this,
            n = e || jQuery("[data-tabs]");
        n.each(function() {
            var e = jQuery(this);
            e.data("tabs"), e.on(t.userEvent.action + ".tabs", "a", function(e) {
                e.preventDefault();
                var t = jQuery(this),
                    n = t.closest("li");
                if ("touchstart" !== e.type && !n.hasClass("active")) {
                    t.closest("ul").find("li").removeClass("active"), n.addClass("active");
                    var i = jQuery(this.hash),
                        a = i.siblings(),
                        r = a.filter(function() {
                            return "hidden" !== jQuery(this).css("visibility")
                        });
                    i.css({
                        opacity: 0,
                        visibility: "visible",
                        zIndex: 2
                    }).find("li:first a,button").attr("tabindex", "0"), r.transition({
                        opacity: 0
                    }, 350, function() {
                        i.transition({
                            opacity: 1
                        }, 750, function() {
                            i.addClass("active"), i.attr("style", ""), r.removeClass("active"), r.css({
                                zIndex: -1,
                                opacity: 1,
                                visibility: "hidden"
                            }).find("li:first a,button").attr("tabindex", "-1")
                        })
                    })
                }
            })
        })
    }, e.mobileNews = function() {
        $(".home .news .slides > li").eq(3).nextAll().remove().end().closest("[data-carrousel]")
    }, e.accordion = function(t) {
        var n = t || jQuery("[data-accordion]");
        n.each(function() {
            var t = jQuery(this);
            t.data("accordion"), t.find("a:not(a+section a, .download)").each(function(e, t) {
                jQuery(t).attr("aria-expanded", "false").attr("aria-controls", t.hash.replace("#", ""))
            }), t.on(e.userEvent.action, "a:not(a+section a, .download)", function(e) {
                e.preventDefault();
                var t = jQuery(this),
                    n = jQuery(this).closest("li"),
                    i = t.next();
                if (i.length ? i.attr("class") && i.attr("class").match("download") && (i = t.parent().next()) : i = t.parent().next(), n.length || (n = jQuery(this).parent()), "touchstart" !== e.type) {
                    var a, r = i.show().height(),
                        o = i.css("marginTop"),
                        s = i.css("paddingTop"),
                        l = i.css("paddingBottom");
                    n.hasClass("active") ? (i.height(r), a = {
                        height: 0,
                        marginTop: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        overflow: "hidden"
                    }, i.transition(a, 500, function() {
                        n.removeClass("active"), i.attr("style", ""), t.attr("aria-expanded", "false")
                    })) : (i.css({
                        height: 0,
                        marginTop: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        overflow: "hidden"
                    }), a = {
                        height: r,
                        marginTop: o,
                        paddingTop: s,
                        paddingBottom: l
                    }, i.transition(a, 500, function() {
                        n.addClass("active"), i.attr("style", ""), t.attr("aria-expanded", "true")
                    }), $("#BrandWrap .active >a").after($("#BrandWrap section .active").html()))
                }
            })
        }), $(".openAll,.closeAll").bind("click", function(e) {
            $(e.currentTarget).hide().siblings("button").show(), $(e.currentTarget).hasClass("openAll") ? (n.find("li").addClass("active"), n.find("li a").attr("aria-expanded", "true")) : (n.find("li").removeClass("active"), n.find("li a").attr("aria-expanded", "false"))
        })
    }, e.toggleBloc = function() {
        var t = function(e) {
                var t = jQuery(e[0]),
                    n = $(t).html();
                jQuery(e[0]), e.html($(t).data("toggle-alt")).attr("data-toggle-alt", n).addClass("open"), e.data("targetBloc").slideDown().attr("aria-expanded", !0).focus()
            },
            n = function(e) {
                var t = jQuery(e[0]),
                    n = jQuery(e[0]),
                    i = $(n).html();
                e.html($(t).attr("data-toggle-alt")).attr("data-toggle-alt", i).removeClass("open"), e.data("targetBloc").slideUp().attr("aria-expanded", !1)
            };
        jQuery("body").on(e.userEvent.action.split(" ").join(".toggleBloc "), "[data-toggle]", function(e) {
            if (e.preventDefault(), "touchstart" !== e.type) {
                var i = jQuery(this),
                    a = jQuery("#" + i.attr("aria-controls"));
                if (!a.length) return;
                i.data("targetBloc", a), "true" == a.attr("aria-expanded") ? n(i) : t(i)
            }
        })
    }, e.copy = function() {
        jQuery("[data-copy]").each(function() {
            $this = jQuery(this), $this.zclip({
                path: window.l10n.root + window.l10n.copy,
                copy: function() {
                    return $(this).attr("href")
                },
                afterCopy: function() {}
            }), $(this).before($(".std-form .zclip"))
        })
    }, e.autocomplete = function(e) {
        var t = function(t) {
                var n = {
                    maxHeight: 200,
                    layerClass: "autocomplete-layer",
                    useCache: !0,
                    minchar: window.l10n.autocomplete.minchar
                };
                t = jQuery.extend(n, t);
                var i, a, r = this,
                    o = {},
                    s = '<ul role="listbox">{LIST}</ul>',
                    l = '<li role="option" data-idx="{INDEX}">{NAME}</li>',
                    c = '<li data-error="{ERROR}">{NAME}</li>',
                    u = !0,
                    d = -1,
                    p = 0,
                    f = t.searchField.data("suggestion-url"),
                    h = t.searchField.closest("form");
                jQuery(".live-autocomplete").length ? tplAriaLive = jQuery(".live-autocomplete") : (tplAriaLive = jQuery("<p/>", {
                    "class": "live-autocomplete",
                    "aria-live": "assertive"
                }), tplAriaLive.appendTo("body")), 0 === h.find("." + t.layerClass).length && (jQuery("<div />", {
                    "class": t.layerClass,
                    id: t.searchField.attr("name") + "-layer"
                }).appendTo(h), t.searchField.attr({
                    "aria-autocomplete": "list",
                    role: "combobox",
                    autocomplete: "off"
                })), a = h.find("." + t.layerClass), this.setOptions = function(e) {
                    t = jQuery.extend(t, e)
                }, this.show = function() {
                    var e = "top" == t.display ? t.searchField.parent().position().top - a.height() - 1 : t.searchField.parent().position().top + t.searchField.outerHeight();
                    a.css({
                        top: e,
                        left: t.searchField.parent().position().left,
                        width: t.searchField.outerWidth(),
                        display: "block"
                    }), a[0].scrollTop = 0
                }, this.hide = function() {
                    a.css({
                        display: "none"
                    }), u = !0, a.empty(), tplAriaLive.text("")
                }, this.set = function(e, t) {
                    var n = [];
                    a.find("li").unbind();
                    for (var i = 0; i < e.length; i++) {
                        var o = t.replace(/a/gi, "[aÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¤ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¥]").replace(/c/gi, "[cÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§]").replace(/e/gi, "[eÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¨ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚ÂªÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â«]").replace(/i/gi, "[iÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â­ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â®ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¯]").replace(/o/gi, "[oÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â°ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â²ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â´ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚ÂµÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¶]").replace(/u/gi, "[uÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¹ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚ÂºÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â»ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¼]").replace(/y/gi, "[yÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â½ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿]"),
                            c = new RegExp("(" + o + ")", "i"),
                            d = e[i].replace(c, "<mark>$1</mark>");
                        n.push(l.replace("{NAME}", d).replace("{INDEX}", i))
                    }
                    a.html(s.replace("{LIST}", n.join(""))), tplAriaLive.text(window.l10n.autocomplete.ariaLiveAutocomplete.replace("$1", e.length)), u = !1, p = e.length, a.find("li").bind("mousenter", function() {
                        var e = jQuery(this).data("idx");
                        r.hover(e)
                    }).bind("click", function() {
                        var e = jQuery(this).data("idx");
                        r.select(e)
                    })
                }, this.setError = function(e) {
                    var t = c.replace("{ERROR}", e).replace("{NAME}", window.l10n.autocomplete.noResult);
                    a.html(s.replace("{LIST}", t)), u = !0, d = 0, p = 0
                }, this.select = function(e) {
                    if (!u) {
                        e = e || d;
                        var n = a.find("li:eq(" + e + ")").text();
                        t.searchField.val(n), this.hide(), d = e, t.results && t.results.load(n)
                    }
                }, this.hover = function(e) {
                    if (!u) {
                        d = e;
                        var n = a.find(".hover").removeClass("hover").end().find("li:eq(" + e + ")").addClass("hover"),
                            i = a.find("li:eq(" + e + ")").text();
                        t.searchField.val(i);
                        var r = n.position(),
                            o = (a[0].scrollHeight, a[0].scrollTop);
                        o + t.maxHeight, r.top + n.outerHeight() > t.maxHeight + o ? a[0].scrollTop = r.top - t.maxHeight + n.outerHeight() : o > 0 && r.top < o && (a[0].scrollTop = r.top)
                    }
                }, this.hoverNext = function() {
                    this.hover(p > d + 1 ? d + 1 : 0)
                }, this.hoverPrevious = function() {
                    this.hover(d - 1 >= 0 ? d - 1 : p - 1)
                }, this.load = function(e) {
                    o[e] && t.useCache ? (this.set(o[e], e), this.show()) : (this.ajaxRequest ? this.ajaxRequest.abort() : this.ajaxRequest, this.ajaxRequest = jQuery.ajax({
                        url: f,
                        data: "query=" + e,
                        dataType: "json",
                        type: "post",
                        success: function(t) {
                            t && !t.error && t.results && t.results.length > 0 ? (r.set(t.results, e), o[e] = t.results) : 0 === t.results.length ? r.setError("no results") : t && t.error && r.setError("server error")
                        },
                        error: function(e, t, n) {
                            "abort" !== t && r.setError(n.toString())
                        },
                        complete: function() {
                            r.show()
                        }
                    }))
                }, t.searchField.bind("keyup", function() {
                    return this.value, e.breakpoint > 768 ? void(i = setTimeout(function() {
                        t.searchField.trigger("autocomplete")
                    }, 1e3)) : (this.ajaxRequest && this.ajaxRequest.abort(), void clearTimeout(i))
                })
            },
            n = function(t) {
                var n, i = {
                        layerClass: "search-results",
                        useCache: !0,
                        minchar: window.l10n.autocomplete.minchar
                    },
                    a = this,
                    r = {},
                    o = !1,
                    s = t.form.find(".field"),
                    l = ['<div class="inner">', '<p class="cls-wrap"><a class="bt-close">{CLOSE}</a></p>', '<p class="ttl">{TITLE}</p>', "<ul>{LIST}</ul>", '<div class="total-wrapper">', '<a href="{TOTALURL}" class="total">{NB}</a>', "</div>", "</div>"].join(""),
                    c = ['<p class="cls-wrap"><a class="bt-close">{CLOSE}</a></p>', '<p class="ttl" data-error="{ERROR}">{TITLE}</p>'].join(""),
                    u = ["<li>", '<a href="{URL}">', '<img src="{IMG}" class="pct" alt="" />', '<div class="text">', "<p>{TITLE}</p>", "<p>{DESC}</p>", "</div>", "</a>", "</li>"].join("");
                t = jQuery.extend(i, t), jQuery(".live-autocomplete").length ? tplAriaLive = jQuery(".live-autocomplete") : (tplAriaLive = jQuery("<p/>", {
                    "class": "live-autocomplete",
                    "aria-live": "assertive"
                }), tplAriaLive.appendTo("body")), 0 === t.form.find("." + t.layerClass).length && jQuery("<div />", {
                    "class": t.layerClass,
                    id: t.form.find("[data-suggestion-url]").attr("name") + "-results"
                }).appendTo(t.form), n = t.form.find("." + t.layerClass), this.show = function(e) {
                    return jQuery(".current .close").trigger("click"), o ? void(e && e()) : (o = !0, n.css({
                        display: "block",
                        opacity: 0
                    }), n.find(".inner").width(n.find(".inner").width()), void n.css({
                        width: 0,
                        opacity: 1,
                        height: jQuery(".website").height()
                    }).stop().animate({
                        width: "200%"
                    }, 300, function() {
                        n.find(".inner").removeAttr("style"), jQuery("#content").one("click", function() {
                            n.find(".bt-close").trigger("click")
                        }), e && e()
                    }))
                }, this.hide = function(e) {
                    return o ? (o = !1, n.find(".inner").width(n.find(".inner").width()), void n.stop().animate({
                        width: 0
                    }, 300, function() {
                        n.css({
                            display: "none",
                            width: "200%"
                        }), n.find(".inner").removeAttr("style"), tplAriaLive.text(""), e && e()
                    })) : void(e && e())
                }, this.set = function(e, t) {
                    for (var i = [], r = 0; r < e.results.length; r++) e.results[r].title && i.push(u.replace("{IMG}", e.results[r].img).replace("{TITLE}", e.results[r].title).replace("{DESC}", e.results[r].desc).replace("{URL}", e.results[r].url));
                    var o = l.replace("{CLOSE}", window.l10n.close).replace("{TITLE}", window.l10n.search.title.replace("{QUERY}", t)).replace("{NB}", +e.nbTotal > 1 ? window.l10n.search.totals.replace("{NB}", e.nbTotal) : window.l10n.search.total.replace("{NB}", e.nbTotal)).replace("{TOTALURL}", e.totalUrl).replace("{LIST}", i.join(""));
                    n.html(o), tplAriaLive.text(window.l10n.autocomplete.ariaLiveResults.replace("$1", e.results.length).replace("$2", t)), n.find(".bt-close").bind("click", function() {
                        a.hide()
                    })
                }, this.setError = function(e, t) {
                    var i = c.replace("{ERROR}", t).replace("{CLOSE}", window.l10n.close).replace("{TITLE}", window.l10n.search.titleError.replace("{QUERY}", e));
                    n.html(i), n.find(".bt-close").bind("click", function() {
                        a.hide()
                    }), jQuery("#content, .website > header .wrapper > div").one("click", function() {
                        n.find(".bt-close").trigger("click")
                    })
                }, this.addLoader = function() {
                    s.append('<div class="ac-loader"></div>')
                }, this.removeLoader = function() {
                    s.find(".ac-loader").remove()
                }, this.load = function(e) {
                    t.autocomplete.hide(), r[e] && t.useCache ? (this.set(r[e], e), this.show()) : (a.ajaxRequest ? this.ajaxRequest.abort() : this.ajaxRequest, a.addLoader(), this.ajaxRequest = jQuery.ajax({
                        url: t.form.find("[data-suggestion-url]").data("suggestion-results"),
                        data: "query=" + e + "&ajax=1",
                        dataType: "json",
                        type: t.form[0].method || "post",
                        success: function(t) {
                            t && !t.error && t.nbTotal > 0 ? (a.set(t, e), r[e] = t) : 0 === t.nbTotal ? a.setError(e, "No results") : t && t.error && a.setError(e, "Server error")
                        },
                        error: function(t, n, i) {
                            "abort" !== n && a.setError(e, "Ajax error: " + i.toString())
                        },
                        complete: function() {
                            a.show(), a.removeLoader()
                        }
                    }))
                }, t.form.bind("autocomplete", function(n) {
                    if (!(e.breakpoint <= 768)) {
                        n.preventDefault();
                        var i = (new RegExp(/\'/gi), t.form.find("[data-suggestion-url]")),
                            r = i.val();
                        jQuery.trim(r).length >= t.minchar ? a.load(r) : a.hide()
                    }
                })
            };
        jQuery("[data-search-form]").each(function() {
            var e, i, a = jQuery(this),
                r = a.find("[data-suggestion-url]");
            e = new t("top" == r.data("suggestion-direction") ? {
                searchField: r,
                display: "top"
            } : {
                searchField: r
            }), r.data("suggestion-results") && (i = new n({
                form: a,
                autocomplete: e
            }), e.setOptions({
                results: i
            }))
        })
    }, this.dashboard = function(e) {
        var t = e || jQuery("[data-dashboard], .dashboard");
        t.each(function() {
            var e = jQuery(this);
            e.data("dashboard"), e.find(">section.small").each(function(e, t) {
                var n = jQuery(t);
                if (!n.prev().hasClass("small")) {
                    var i = (n.parent(), jQuery("<div/>", {
                        "class": "column"
                    }));
                    n.add(n.next(".small")).wrapAll(i)
                }
            })
        })
    }, this.dfn = function(t) {
        var n = t || jQuery("[data-dfn]");
        n.each(function() {
            var t = jQuery(this),
                n = (t.data("dfn"), function(t, n) {
                    var i = jQuery(t.currentTarget),
                        a = !!jQuery("dl", i).length && jQuery("dl", i) || jQuery("<dl/>", {
                            "class": "definition"
                        }),
                        r = jQuery(n).clone().add(jQuery(n).next("dd").clone());
                    if (new RegExp(e.userEvent.enter.replace(/\s/g, "|")).test(t.type)) {
                        Modernizr.opacity && a.css({
                            opacity: 0
                        }), 0 === i.find("dl").length && i.append(a.append(r));
                        var o = Math.abs(parseInt(a.css("marginLeft"), 10)),
                            s = i.offset().left;
                        o > s ? a.addClass("left") : s + o > jQuery("body").width() && a.addClass("right"), Modernizr.opacity && a.transition({
                            opacity: 1
                        }, 250, function() {
                            i.data("animating", !1)
                        })
                    } else Modernizr.opacity ? (i.data("animating", !0), a.transition({
                        opacity: 0
                    }, 250, function() {
                        i.data("animating", !1), a.remove()
                    })) : a.remove()
                });
            jQuery("dt", this).each(function() {
                jQuery("a[href=#" + this.id + "]").addClass("word")
            }), $("body").on(e.userEvent.enter + ".dfn " + e.userEvent.leave + ".dfn", "a.word", function(e) {
                e.preventDefault(), n(e, document.getElementById(e.currentTarget.hash.replace("#", "")))
            })
        })
    }, this.subNav = function(t) {
        var n = t || jQuery("[data-browse]");
        n.each(function() {
            var t, n, i, a = jQuery(this),
                r = a.data("browse"),
                o = _.template('<div><h1><%if( !!topics[topic.parent] ){ %><a data-topic="<%= topic.parent %>" class="up" title="<%= text.up.replace(\'$1\',topics[topic.parent].title) %>" href="<%= topics[topic.parent].link %>"><span>&lt;</span></a><% } %><a href="<%= topic.link %>"><span><%= topic.title %></span></a></h1><% for( var index in topic.children){var currentTopicCode = topic.children[index].code;if("undefined" !== typeof currentTopicCode){var currentTopic = topics[currentTopicCode];if(!!currentTopic.children.length && (typeof base !== "undefined" && base === currentTopicCode)){%><ul><li class="children"><a <%= typeof active !== "undefined" && active === currentTopicCode ? \'class="active"\' : typeof base !== "undefined" && base === currentTopicCode ? \'class="active"\' : \'\' %> href="<%= currentTopic.link %>"><%= currentTopic.title %></a><a data-topic="<%= currentTopicCode %>" class="down" title="<%= text.down.replace(\'$1\',currentTopic.title) %>" href="<%= currentTopic.link %>"><span>&gt;</span></a></li></ul><% }else{ %><ul><li><a <%= typeof active !== "undefined" && active === currentTopicCode ? \'class="active"\' : typeof base !== "undefined" && base === currentTopicCode ? \'class="active"\' : \'\' %> href="<%= currentTopic.link %>"><%= currentTopic.title %><span></span></a></li></ul><% }}} %></div>'),
                s = function() {
                    jQuery.getJSON(r, function(r) {
                        if (t = r, a.on(e.userEvent.action, "[data-topic]", l), a.find("[data-start]").length) {
                            n = a.find("[data-active]").data("active"), i = a.find("[data-start]").data("start");
                            for (var s in t)
                                if (s.toLowerCase() == i.toLowerCase()) {
                                    i = s;
                                    break
                                }
                            html = o({
                                topics: t,
                                topic: t[i],
                                active: n,
                                text: window.l10n.browse
                            }), a.html(html)
                        }
                    })
                },
                l = function(e) {
                    e.preventDefault();
                    var r = jQuery(this),
                        s = o({
                            topics: t,
                            topic: t[r.data("topic")],
                            active: n,
                            base: i,
                            text: window.l10n.browse
                        });
                    a.html(s)
                };
            s()
        })
    }, this.browseItems = function(e) {
        var t = e || jQuery("[data-items]");
        t.each(function() {
            var e, t = jQuery(this),
                n = t.data("items"),
                i = t.data("l10n"),
                a = _.template('<%if(prev.link){%><a href="<%= prev.link %>" class="prv"><%= prev.title %></a><%} if(next.link){%><a href="<%= next.link %>" class="nxt"><%= next.title %></a><%}%>'),
                r = function() {
                    jQuery.getJSON(n, function(n) {
                        if (e = n, e[t.data("start")]) {
                            var r = e[t.data("start")].index,
                                o = _.filter(e, function(e) {
                                    return e.index === r - 1
                                }),
                                s = _.filter(e, function(e) {
                                    return e.index === r + 1
                                }),
                                l = a({
                                    prev: {
                                        title: i.prev,
                                        link: o.length && o[0].link
                                    },
                                    next: {
                                        title: i.next,
                                        link: s.length && s[0].link
                                    }
                                });
                            t.html(l)
                        }
                    })
                };
            r()
        })
    }, e.addVideoCarrouselList = function(e) {
        if (void 0 !== $("div:first-child .slides > li", e).data("id")) {
            var t = [],
                n = [];
            $("div:first-child .slides > li", e).each(function() {
                t.push($(this)), n.push($(this).data("id"))
            }), t.shift(), n.shift(), t.pop(), n.pop(), t.forEach(function(e, t) {
                prev = "", next = "", n[t - 1] && (prev = "&prev=" + n[t - 1]), n[t + 1] && (next = "&next=" + n[t + 1]), oldHref = $(e).find("a").attr("href"), $(e).find("a").attr("href", oldHref + prev + next + "&list=" + n)
            })
        }
    }
};
jQuery("document").ready(function() {
        jQuery(".js .website > header > .wrapper ").addClass("posFixed"), LOC = new Loreal, LOC.init(), $(".brands > ul > li > a").unbind("click").bind("click", function(n) {
            if (n.preventDefault(), "true" == t && "false" == e) {
                var i = $(this),
                    a = $(i.attr("href")).offset().top;
                $("body,html").animate({
                    scrollTop: a
                }, 400 * (i.index() + 1))
            }
        });
        var n = ($(".twin .dashboard"), 1);
        $(window).width() > 1023 ? n = 3 : $(window).width() > 767 && (n = 2);
        var i = $("header > .viewer", $("#content ")),
            a = $(".body > .viewer", $("#content "));
        $(window).width() > 1024 ? (i.addClass("hidden"), a.removeClass("hidden")) : (a.addClass("hidden"), i.removeClass("hidden")), $(window).unbind("resize.showHideCarousel").bind("resize.showHideCarousel", function() {
            $(window).width() > 1024 ? (i.addClass("hidden"), a.removeClass("hidden")) : (a.addClass("hidden"), i.removeClass("hidden"))
        }), $("p:empty").remove(), $("h1:empty").remove(), $("h2:empty").remove(), $("p").filter(function() {
            return "&nbsp;" === $.trim(this.innerHTML)
        }).remove(), $(".website #header .wrapper #navigation li:nth-child(3),.website #header .wrapper #navigation li:nth-child(4),.website #header .wrapper #navigation li:nth-child(6)").removeClass("wide").addClass("wider"), $("#foundation.website #header .wrapper #navigation li:nth-child(2),#foundation.website #header .wrapper #navigation li:nth-child(3)").removeClass("wider"), $("#cookie_banner").insertBefore(".website");
        var r = $(".cookies-popin");
        if (r.length) {
            var o = $("#header .wrapper, #content");
            cookiePopinH = r.height(), $("#content").css("position", "relative"), o.css("top", cookiePopinH), $(window).on("resize.setElmPosition", function() {
                o.css("top", r.height());
                var e = $("body").width(),
                    t = $(".website").width();
                r.css({
                    position: "fixed",
                    left: e / 2 - t / 2,
                    top: 0,
                    margin: 0,
                    zIndex: 9999
                })
            }).trigger("resize.setElmPosition"), $(".cookies-popin > a").on("click", function(e) {
                e.preventDefault(), r.remove(), o.css("top", 0)
            })
        }
        $("#countrypopup_wrapper").popup({
            transition: "all 0.3s"
        }), $(".popin-ct").css("background-color", "#fff"), $(".popin-ct .close").live("click", function() {
            $("div[id$='popup_wrapper']").popup("hide"), 0 !== $(".media-bk").length && $(".media-bk iframe.player").removeAttr("src")
        }), $(".new-select  select").click(function() {
            $(this).next("span.select").toggleClass("active"), $(this).next("span.select").hasClass("active") ? $(this).next("span.select").attr("aria-hidden", "false") : $(this).next("span.select").attr("aria-hidden", "true")
        }), $(".new-select  select").change(function() {
            var e = $(this).find("option:selected").text();
            $(this).next("span.select").html(e), $(this).attr("title", e)
        })
    }), $(".transcript").click(function() {
        var e = $(this).closest("div").next(".desc");
        return e.slideToggle("slow"), e.attr("aria-expanded", "false" == $(".desc").attr("aria-expanded") ? "true" : "false"), !1
    }), $("#media_popup_wrapper").on("click", ".transcript", function() {
        var e = $(this).closest("div").next(".desc");
        return e.slideToggle("slow"), e.attr("aria-expanded", "false" == $(".desc").attr("aria-expanded") ? "true" : "false"), !1
    }),
    function(e) {
        var t, n = e(window),
            i = {},
            a = [],
            r = [],
            o = !1,
            s = !1,
            l = null,
            c = null,
            u = null,
            d = null,
            p = "_open",
            f = "_close",
            h = null,
            v = {
                _init: function(t) {
                    var n = e(t),
                        i = n.data("popupoptions");
                    r[t.id] = !1, a[t.id] = 0, n.data("popup-initialized") || (n.attr("data-popup-initialized", "true"), v._initonce(t)), i.autoopen && setTimeout(function() {
                        v.show(t, 0)
                    }, 0)
                },
                _initonce: function(n) {
                    var i, a = e("body"),
                        r = $el.data("popupoptions");
                    if (d = parseInt(a.css("margin-right"), 10), "tooltip" == r.type && (r.background = !1, r.scrolllock = !1), r.scrolllock) {
                        var o, s;
                        "undefined" == typeof t && (o = e('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), s = o.children(), t = s.innerWidth() - s.height(99).innerWidth(), o.remove())
                    }
                    if ($el.attr("id") || $el.attr("id", "j-popup-" + parseInt(1e8 * Math.random())), $el.addClass("popup_content"), a.append(n), $el.wrap('<div id="' + n.id + '_wrapper" class="popup_wrapper" />'), i = e("#" + n.id + "_wrapper"), i.css({
                            opacity: 0,
                            visibility: "hidden",
                            position: "absolute",
                            overflow: "auto"
                        }), $el.css({
                            opacity: 0,
                            visibility: "hidden",
                            display: "inline-block"
                        }), r.setzindex && !r.autozindex && i.css("z-index", "2001"), r.outline || $el.css("outline", "none"), r.transition && ($el.css("transition", r.transition), i.css("transition", r.transition)), e(n).attr("aria-hidden", !0), r.background && !e("#" + n.id + "_background").length) {
                        var l = '<div id="' + n.id + '_background" class="popup_background"></div>';
                        a.append(l);
                        var c = e("#" + n.id + "_background");
                        c.css({
                            opacity: 0,
                            visibility: "hidden",
                            backgroundColor: r.color,
                            position: "fixed",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }), r.setzindex && !r.autozindex && c.css("z-index", "2000"), r.transition && c.css("transition", r.transition)
                    }
                    "overlay" == r.type && ($el.css({
                        textAlign: "left",
                        position: "relative",
                        verticalAlign: "middle"
                    }), i.css({
                        position: "fixed",
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        textAlign: "center"
                    }), i.append('<div class="popup_align" />'), e(".popup_align").css({
                        display: "inline-block",
                        verticalAlign: "middle",
                        height: "100%"
                    })), $el.attr("role", "dialog");
                    var u = r.openelement ? r.openelement : "." + n.id + p;
                    e(u).each(function(t, n) {
                        e(n).attr("data-popup-ordinal", t), e(n).attr("id") || e(n).attr("id", "open_" + parseInt(1e8 * Math.random(), 10))
                    }), $el.attr("aria-labelledby") || $el.attr("aria-label") || $el.attr("aria-labelledby", e(u).attr("id")), e(document).on("click", u, function(t) {
                        if (!$el.data("popup-visible")) {
                            var i = e(this).data("popup-ordinal");
                            setTimeout(function() {
                                v.show(n, i)
                            }, 0), t.preventDefault()
                        }
                    });
                    var h = r.closeelement ? r.closeelement : "." + n.id + f;
                    e(document).on("click", h, function(e) {
                        v.hide(n), e.preventDefault()
                    }), r.detach ? $el.hide().detach() : i.hide()
                },
                show: function(i, p) {
                    var f = e(i);
                    if (!f.data("popup-visible")) {
                        f.data("popup-initialized") || v._init(i), f.attr("data-popup-initialized", "true");
                        var g = e("body"),
                            y = f.data("popupoptions"),
                            b = e("#" + i.id + "_wrapper"),
                            w = e("#" + i.id + "_background");
                        if (m(i, p, y.beforeopen), r[i.id] = p, y.detach ? (b.prepend(i), f.show()) : b.show(), setTimeout(function() {
                                b.css({
                                    visibility: "visible",
                                    opacity: 1
                                }), e("html").addClass("popup_visible").addClass("popup_visible_" + i.id), f.addClass("popup_content_visible")
                            }, 20), f.css({
                                visibility: "visible",
                                opacity: 1
                            }), y.scrolllock && (g.css("overflow", "hidden"), g.height() > n.height() && g.css("margin-right", d + t)), setTimeout(function() {
                                o || (y.keepfocus && e(document).on("focusin", l), y.blur && e(document).on("click", c), y.escape && e(document).on("keydown", u)), o ? s = !0 : o = !0
                            }, 0), f.data("popup-visible", !0), v.reposition(i, p), y.background && (w.css({
                                visibility: "visible",
                                opacity: y.opacity
                            }), setTimeout(function() {
                                w.css({
                                    opacity: y.opacity
                                })
                            }, 0)), h = document.activeElement, y.keepfocus && (f.attr("tabindex", -1), setTimeout(function() {
                                y.focuselement ? e(y.focuselement).focus() : f.focus()
                            }, y.focusdelay), l = function(e) {
                                var t = document.getElementById(i.id);
                                t.contains(e.target) || (e.stopPropagation(), t.focus())
                            }), y.autozindex) {
                            for (var x = document.getElementsByTagName("*"), j = x.length, k = 0, C = 0; j > C; C++) {
                                var $ = e(x[C]).css("z-index");
                                "auto" !== $ && ($ = parseInt($), $ > k && (k = $))
                            }
                            a[i.id] = k, a[i.id] > 0 && b.css({
                                zIndex: a[i.id] + 2
                            }), y.background && a[i.id] > 0 && e("#" + i.id + "_background").css({
                                zIndex: a[i.id] + 1
                            })
                        }
                        y.blur && (c = function(t) {
                            e(t.target).parents().andSelf().is("#" + i.id) || v.hide(i)
                        }), y.escape && (u = function(e) {
                            27 == e.keyCode && f.data("popup-visible") && v.hide(i)
                        }), e(y.pagecontainer).attr("aria-hidden", !0), f.attr("aria-hidden", !1), b.one("transitionend", function() {
                            m(i, p, y.opentransitionend)
                        }), m(i, p, y.onopen)
                    }
                },
                hide: function(t) {
                    0 !== $(".media-bk").length && $(".media-bk iframe.player").removeAttr("src");
                    var n = e("body"),
                        i = e(t),
                        a = i.data("popupoptions"),
                        p = e("#" + t.id + "_wrapper"),
                        f = e("#" + t.id + "_background");
                    i.data("popup-visible", !1), s ? (e("html").removeClass("popup_visible_" + t.id), s = !1) : (e("html").removeClass("popup_visible").removeClass("popup_visible_" + t.id), o = !1), i.removeClass("popup_content_visible"), a.scrolllock && setTimeout(function() {
                        n.css({
                            overflow: "visible",
                            "margin-right": d
                        })
                    }, 10), a.blur && e(document).off("click", c), a.keepfocus && (e(document).off("focusin", l), setTimeout(function() {
                        e(h).is(":visible") && h.focus()
                    }, 0)), a.escape && e(document).off("keydown", u), p.css({
                        visibility: "hidden",
                        opacity: 0
                    }), i.css({
                        visibility: "hidden",
                        opacity: 0
                    }), a.background && f.css({
                        visibility: "hidden",
                        opacity: 0
                    }), i.one("transitionend", function() {
                        i.data("popup-visible") || (a.detach ? i.hide().detach() : p.hide()), a.notransitiondetach || m(t, r[t.id], a.closetransitionend)
                    }), a.notransitiondetach && (a.detach ? i.hide().detach() : p.hide()), e(a.pagecontainer).attr("aria-hidden", !1), i.attr("aria-hidden", !0), m(t, r[t.id], a.onclose)
                },
                toggle: function(e, t) {
                    $el.data("popup-visible") ? v.hide(e) : setTimeout(function() {
                        v.show(e, t)
                    }, 0)
                },
                reposition: function(t, n) {
                    var i = e(t),
                        a = i.data("popupoptions"),
                        r = e("#" + t.id + "_wrapper");
                    if (e("#" + t.id + "_background"), n = n || 0, "tooltip" == a.type) {
                        r.css({
                            position: "absolute"
                        });
                        var o = a.openelement ? a.openelement : "." + t.id + p,
                            s = e(o + '[data-popup-ordinal="' + n + '"]'),
                            l = s.offset();
                        "right" == a.horizontal ? r.css("left", l.left + s.outerWidth() + a.offsetleft) : "leftedge" == a.horizontal ? r.css("left", l.left + s.outerWidth() - s.outerWidth() + a.offsetleft) : "left" == a.horizontal ? r.css("right", e(window).width() - l.left - a.offsetleft) : "rightedge" == a.horizontal ? r.css("right", e(window).width() - l.left - s.outerWidth() - a.offsetleft) : r.css("left", l.left + s.outerWidth() / 2 - i.outerWidth() / 2 - parseFloat(i.css("marginLeft")) + a.offsetleft), "bottom" == a.vertical ? r.css("top", l.top + s.outerHeight() + a.offsettop) : "bottomedge" == a.vertical ? r.css("top", l.top + s.outerHeight() - i.outerHeight() + a.offsettop) : "top" == a.vertical ? r.css("bottom", e(window).height() - l.top - a.offsettop) : "topedge" == a.vertical ? r.css("bottom", e(window).height() - l.top - i.outerHeight() - a.offsettop) : r.css("top", l.top + s.outerHeight() / 2 - i.outerHeight() / 2 - parseFloat(i.css("marginTop")) + a.offsettop)
                    } else "overlay" == a.type && (a.horizontal ? r.css("text-align", a.horizontal) : r.css("text-align", "center"), a.vertical ? i.css("vertical-align", a.vertical) : i.css("vertical-align", "middle"))
                }
            },
            m = function(t, n, a) {
                var r = i.openelement ? i.openelement : "." + t.id + p,
                    o = e(r + '[data-popup-ordinal="' + n + '"]');
                "function" == typeof a && a(o)
            };
        e.fn.popup = function(t) {
            return this.each(function() {
                if ($el = e(this), "object" == typeof t) {
                    var n = e.extend({}, e.fn.popup.defaults, t);
                    $el.data("popupoptions", n), i = $el.data("popupoptions"), v._init(this)
                } else "string" == typeof t ? ($el.data("popupoptions") || ($el.data("popupoptions", e.fn.popup.defaults), i = $el.data("popupoptions")), v[t].call(this, this)) : ($el.data("popupoptions") || ($el.data("popupoptions", e.fn.popup.defaults), i = $el.data("popupoptions")), v._init(this))
            })
        }, e.fn.popup.defaults = {
            type: "overlay",
            autoopen: !1,
            background: !0,
            color: "black",
            opacity: "0.5",
            horizontal: "center",
            vertical: "middle",
            offsettop: 0,
            offsetleft: 0,
            escape: !0,
            blur: !0,
            setzindex: !0,
            autozindex: !1,
            scrolllock: !1,
            keepfocus: !0,
            focuselement: null,
            focusdelay: 50,
            outline: !1,
            pagecontainer: null,
            detach: !1,
            openelement: null,
            closeelement: null,
            transition: null,
            notransitiondetach: !1,
            beforeopen: function() {},
            onclose: function() {},
            onopen: function() {},
            opentransitionend: function() {},
            closetransitionend: function() {}
        }
    }(jQuery);