function isArray(e) {
  return "[object Array]" === Object.prototype.toString.call(e)
}

function isBoolean(e) {
  return "boolean" == typeof e
}

function isDate(e) {
  return "[object Date]" === Object.prototype.toString.call(e)
}

function isDefined(e) {
  return void 0 !== e
}

function isFunction(e) {
  return "function" == typeof e
}

function isNull(e) {
  return null === e
}

function isNumber(e) {
  return "number" == typeof e
}

function isObject(e) {
  return null !== e && "object" == typeof e
}

function isString(e) {
  return "string" == typeof e
}

function isUndefined(e) {
  return void 0 === e
}

function convertToBoolean(e) {
  return isBoolean(e) ? e : null !== e && "" !== e && "false" !== e
}

function hasProperty(e, t) {
  return e.hasOwnProperty(t)
}

function isStringEmpty(e) {
  return isNull(e) || isUndefined(e) || isString(e) && 0 == e.length
}

function isStringNonempty(e) {
  return isString(e) && e.length > 0
}

function upperCaseFirstLetter(e) {
  return e.charAt(0).toUpperCase() + e.slice(1)
}

function areEqual(e, t) {
  return angular.equals(e, t)
}

function min(e, t) {
  return e < t ? e : t
}

function max(e, t) {
  return e > t ? e : t
}

function beginsWith(e, t) {
  return isString(e) && 0 == e.lastIndexOf(t, 0)
}

function endsWith(e, t) {
  return isString(e) && -1 !== e.indexOf(t, e.length - t.length)
}

function copy(e, t) {
  return angular.copy(e, t)
}

function removeProperty(e, t) {
  delete e[t]
}

function removeProperties(e, t) {
  for (var n = 0; n < t.length; ++n) delete e[t[n]]
}

function forEach(e, t, n) {
  return angular.forEach(e, t, n)
}

function defineScalyrJsLibrary(e, t) {
  var n = [];
  if (t instanceof Array) for (var r = 0; r < t.length - 1; ++r) n.push(t[r]);
  return angular.module(e, n).factory(e, t)
}

function defineScalyrAngularModule(e, t) {
  return angular.module(e, t)
}

function isArray(e) {
  return "[object Array]" === Object.prototype.toString.call(e)
}

function isBoolean(e) {
  return "boolean" == typeof e
}

function isDate(e) {
  return "[object Date]" === Object.prototype.toString.call(e)
}

function isDefined(e) {
  return void 0 !== e
}

function isFunction(e) {
  return "function" == typeof e
}

function isNull(e) {
  return null === e
}

function isNumber(e) {
  return "number" == typeof e
}

function isObject(e) {
  return null !== e && "object" == typeof e
}

function isString(e) {
  return "string" == typeof e
}

function isUndefined(e) {
  return void 0 === e
}

function convertToBoolean(e) {
  return isBoolean(e) ? e : null !== e && "" !== e && "false" !== e
}

function hasProperty(e, t) {
  return e.hasOwnProperty(t)
}

function isStringEmpty(e) {
  return isNull(e) || isUndefined(e) || isString(e) && 0 == e.length
}

function isStringNonempty(e) {
  return isString(e) && e.length > 0
}

function upperCaseFirstLetter(e) {
  return e.charAt(0).toUpperCase() + e.slice(1)
}

function areEqual(e, t) {
  return angular.equals(e, t)
}

function min(e, t) {
  return e < t ? e : t
}

function max(e, t) {
  return e > t ? e : t
}

function beginsWith(e, t) {
  return isString(e) && 0 == e.lastIndexOf(t, 0)
}

function endsWith(e, t) {
  return isString(e) && -1 !== e.indexOf(t, e.length - t.length)
}

function copy(e, t) {
  return angular.copy(e, t)
}

function removeProperty(e, t) {
  delete e[t]
}

function removeProperties(e, t) {
  for (var n = 0; n < t.length; ++n) delete e[t[n]]
}

function forEach(e, t, n) {
  return angular.forEach(e, t, n)
}

function defineScalyrJsLibrary(e, t) {
  var n = [];
  if (t instanceof Array) for (var r = 0; r < t.length - 1; ++r) n.push(t[r]);
  return angular.module(e, n).factory(e, t)
}

function defineScalyrAngularModule(e, t) {
  return angular.module(e, t)
}

function getLang() {
  var e = localStorage.lang || "cn";
  return Langs[e] || Langs.en
}

function log10(e) {
  return Math.log(e) / Math.LN10
}

function millitime() {
  return (new Date).getTime() / 1e3
}

function hms_from_epoch_ms(e, t) {
  var n, r, o, i = "", a = null;
  try {
    a = new Date(e), t ? (n = a.getHours(), r = a.getMinutes(), o = a.getSeconds()) : (n = a.getUTCHours(), r = a.getUTCMinutes(), o = a.getUTCSeconds()), i += (n < 10 ? "0" + n : n) + ":", i += (r < 10 ? "0" + r : r) + ":", i += o < 10 ? "0" + o : o
  } catch (e) {
    i = "00:00:00"
  }
  return i
}

function formatted_date(e, t, n) {
  var r = new Date(1e3 * e), o = "";
  return !0 === n ? (t && (o = r.getFullYear() + "-"), o += r.getMonth() + 1 < 10 ? "0" : "", o += r.getMonth() + 1 + "-", o += r.getDate() < 10 ? "0" : "", o += r.getDate()) : (t && (o = r.getUTCFullYear() + "-"), o += r.getUTCMonth() + 1 < 10 ? "0" : "", o += r.getUTCMonth() + 1 + "-", o += r.getUTCDate() < 10 ? "0" : "", o += r.getUTCDate()), o
}

function timestamp(e) {
  null != e && void 0 !== e || (e = !0);
  var t, n, r, o = new Date, i = "";
  return e ? (t = o.getHours(), n = o.getMinutes(), r = o.getSeconds()) : (t = o.getUTCHours(), n = o.getUTCMinutes(), r = o.getUTCSeconds()), i += (t < 10 ? "0" + t : t) + ":", i += (n < 10 ? "0" + n : n) + ":", i += r < 10 ? "0" + r : r
}

function hms_from_sec(e) {
  var t = "", n = e % 60, r = (e - n) / 60 % 60, o = (e - 60 * r - n) / 3600 % 3600;
  return t += (o < 10 ? "0" + o : o) + ":", t += (r < 10 ? "0" + r : r) + ":", t += n < 10 ? "0" + n : n
}

function dhms_from_sec(e) {
  var t, n, r, o, i = "", a = e;
  return t = Math.floor(a / 86400), a -= 86400 * t, n = Math.floor(a / 3600), a -= 3600 * n, r = Math.floor(a / 60), o = a - 60 * r, i += t > 0 ? t + ":" : "", i += (n < 10 ? "0" + n : n) + ":", i += (r < 10 ? "0" + r : r) + ":", i += o < 10 ? "0" + o : o
}

function time_delta_print(e) {
  var t = "", n = 0, r = 0, o = 0, i = 0, a = e;
  return a |= 0, n = Math.floor(a / 86400), a -= 86400 * n, r = Math.floor(a / 3600), a -= 3600 * r, o = Math.floor(a / 60), i = a - 60 * o, n >= 2 ? t = n + " days" : n >= 1 ? (t = n + " day, " + r + " hour", r > 1 && (t += "s")) : r >= 1 ? (t = r + " hour", r > 1 && (t += "s")) : t = o >= 1 ? o + " min" : i + " sec", t + " ago"
}

function numberWithCommas(e) {
  var t = e.toString().split(".");
  return t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), t.join(".")
}

function delayClass(e, t, n) {
  window.setTimeout(function () {
    $(e).removeClass(t)
  }, n)
}

function deepCopy(e) {
  return $.extend(!0, {}, e)
}

function AssertException(e) {
  this.message = e
}

function assert(e, t) {
  if (!e) throw new AssertException(t)
}

function stopEvent(e) {
  try {
    e.preventDefault(), e.stopPropagation()
  } catch (e) {
  }
}

function NoBreak(e) {
  return e.replace(/ /g, "&nbsp;")
}

function HTMLEncode(e) {
  return $("<div/>").text(e).html()
}

function HTMLDecode(e) {
  return $("<div/>").html(e).text()
}

function clearingSpan() {
  return $("<span/>").addClass("clear").html("&nbsp;")
}

function clearingSpanHTML() {
  return '<span class="clear">&nbsp;</span>'
}

function uniqueID() {
  return "id" + lastUniqueID++
}

function randInt(e) {
  return Math.floor(Math.random() * e)
}

function randRange(e, t) {
  return Math.floor(Math.random() * (t - e)) + e
}

function randomString(e) {
  "number" != typeof e && (e = 10);
  var t = 0, n = "";
  for (t = 0; t < e; t++) n += alphabet[randInt(alphalen)];
  return n
}

function storageSupport() {
  try {
    return "localStorage" in window && null !== window.localStorage
  } catch (e) {
    return !1
  }
}

function wsSupport() {
  try {
    return !!window.WebSocket
  } catch (e) {
    return !1
  }
}

function locationOf(e, t, n, r, o) {
  null == n && (n = 0), null == r && (r = t.length - 1), "string" == typeof o && ("gt" == o ? o = function (e, t) {
    return e > t
  } : "lt" == o && (o = function (e, t) {
    return e < t
  }));
  var i = parseInt(n + (r - n) / 2);
  return t[i] == e ? {index: i, exact: !0} : r - n <= 1 ? {
    index: i + 1,
    exact: !1
  } : o(t[i], e) ? locationOf(e, t, i, r, o) : locationOf(e, t, n, i, o)
}

function has_worker() {
  return !!window.Worker
}

function pixel_ratio() {
  return window.hasOwnProperty("devicePixelRatio") ? window.devicePixelRatio : 1
}

function _(e, t) {
  return e
}

function PtInPolygon(e, t) {
  for (var n = 0, r = 0; r < t.length; r++) p1 = t[r], p2 = t[(r + 1) % t.length], p1[1] != p2[1] && (e[1] < Math.min(p1[1], p2[1]) || e[1] >= Math.max(p1[1], p2[1]) || (e[1] - p1[1]) * (p2[0] - p1[0]) / (p2[1] - p1[1]) + p1[0] > e[0] && n++);
  return n % 2 == 1
}

function chackRate() {
  var e = 0;
  for (timesList.length >= times && timesList.pop(), timesList.splice(0, 0, (new Date).getTime()), e = 0; e < timesList.length && !(timesList[e] + timeLimit < (new Date).getTime()); e++) ;
  return !(e >= times) || (console.log("@@@@@@按钮点击频率太快"), !1)
}

function Graph(e) {
  this.vertices = e, this.edges = 0, this.adj = [], this.edgeTo = [];
  for (var t = 0; t < this.vertices; t++) ;
  this.marked = {}, this.addEdge = function (e, t) {
    this.adj[e] || (this.adj[e] = []), this.adj[t] || (this.adj[t] = []), this.adj[e].push(t), this.adj[t].push(e), this.edges++
  }, this.bfs = function (e) {
    this.source = e;
    for (var t in this.marked) this.marked[t] = !1;
    var n = [];
    for (this.marked[e] = !0, n.push(e); n.length > 0;) {
      var r = n.shift();
      if (this.adj[r]) for (var o = 0; o < this.adj[r].length; o++) for (var i = this.adj[r], a = 0; a < i.length; a++) this.marked[i[a]] || (this.edgeTo[i[a]] = r, this.marked[i[a]] = !0, n.push(i[a]))
    }
  }, this.pathTo = function (e) {
    var t = this.source, n = 0, r = [];
    if (!this.edgeTo[e]) return 0;
    for (var o = e; o != t; o = this.edgeTo[o]) {
      if (!this.edgeTo[o]) return 0;
      if (r.push([this.edgeTo[o], o]), ++n > 100) break
    }
    return r
  }
}

!function (e) {
  var t = function (e) {
    var t = e.backingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
    return (window.devicePixelRatio || 1) / t
  }(e);
  1 !== t && (!function (e, t) {
    for (var n in e) e.hasOwnProperty(n) && t(e[n], n)
  }({
    fillRect: "all",
    clearRect: "all",
    strokeRect: "all",
    moveTo: "all",
    lineTo: "all",
    arc: [0, 1, 2],
    arcTo: "all",
    bezierCurveTo: "all",
    isPointinPath: "all",
    isPointinStroke: "all",
    quadraticCurveTo: "all",
    rect: "all",
    translate: "all",
    createRadialGradient: "all",
    createLinearGradient: "all"
  }, function (n, r) {
    e[r] = function (e) {
      return function () {
        var r, o, i = Array.prototype.slice.call(arguments);
        if ("all" === n) i = i.map(function (e) {
          return e * t
        }); else if (Array.isArray(n)) for (r = 0, o = n.length; r < o; r++) i[n[r]] *= t;
        return e.apply(this, i)
      }
    }(e[r])
  }), e.stroke = function (e) {
    return function () {
      this.lineWidth *= t, e.apply(this, arguments), this.lineWidth /= t
    }
  }(e.stroke), e.fillText = function (e) {
    return function () {
      var n = Array.prototype.slice.call(arguments);
      n[1] *= t, n[2] *= t, this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function (e, n, r) {
        return n * t + r
      }), n.length >= 4 && t > 1 && (n[3] *= t), e.apply(this, n), this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function (e, n, r) {
        return n / t + r
      })
    }
  }(e.fillText), e.strokeText = function (e) {
    return function () {
      var n = Array.prototype.slice.call(arguments);
      n[1] *= t, n[2] *= t, this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function (e, n, r) {
        return n * t + r
      }), e.apply(this, n), this.font = this.font.replace(/(\d+)(px|em|rem|pt)/g, function (e, n, r) {
        return n / t + r
      })
    }
  }(e.strokeText))
}(CanvasRenderingContext2D.prototype), function (e) {
  e.getContext = function (e) {
    return function (t) {
      var n, r, o = e.call(this, t);
      return "2d" === t && (n = o.backingStorePixelRatio || o.mozBackingStorePixelRatio || o.msBackingStorePixelRatio || o.oBackingStorePixelRatio || o.backingStorePixelRatio || 1, (r = (window.devicePixelRatio || 1) / n) > 1 && "true" != $(this).attr("val") && !($(this).attr("class") || "").match("geetest_absolute") && ("" != this.style.height && Number(this.style.height.replace("px", "")) * r == this.height || (this.style.height = this.height + "px", this.style.width = this.width + "px", this.width *= r, this.height *= r, $(this).attr("val", !0)))), o
    }
  }(e.getContext)
}(HTMLCanvasElement.prototype), function (e, t) {
  function n(e) {
    var t = e.length, n = ce.type(e);
    return !ce.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)))
  }

  function r(e) {
    var t = Te[e] = {};
    return ce.each(e.match(fe) || [], function (e, n) {
      t[n] = !0
    }), t
  }

  function o(e, n, r, o) {
    if (ce.acceptData(e)) {
      var i, a, s = ce.expando, l = e.nodeType, c = l ? ce.cache : e, u = l ? e[s] : e[s] && s;
      if (u && c[u] && (o || c[u].data) || r !== t || "string" != typeof n) return u || (u = l ? e[s] = ee.pop() || ce.guid++ : s), c[u] || (c[u] = l ? {} : {toJSON: ce.noop}), ("object" == typeof n || "function" == typeof n) && (o ? c[u] = ce.extend(c[u], n) : c[u].data = ce.extend(c[u].data, n)), a = c[u], o || (a.data || (a.data = {}), a = a.data), r !== t && (a[ce.camelCase(n)] = r), "string" == typeof n ? null == (i = a[n]) && (i = a[ce.camelCase(n)]) : i = a, i
    }
  }

  function i(e, t, n) {
    if (ce.acceptData(e)) {
      var r, o, i = e.nodeType, a = i ? ce.cache : e, l = i ? e[ce.expando] : ce.expando;
      if (a[l]) {
        if (t && (r = n ? a[l] : a[l].data)) {
          ce.isArray(t) ? t = t.concat(ce.map(t, ce.camelCase)) : t in r ? t = [t] : (t = ce.camelCase(t), t = t in r ? [t] : t.split(" ")), o = t.length;
          for (; o--;) delete r[t[o]];
          if (n ? !s(r) : !ce.isEmptyObject(r)) return
        }
        (n || (delete a[l].data, s(a[l]))) && (i ? ce.cleanData([e], !0) : ce.support.deleteExpando || a != a.window ? delete a[l] : a[l] = null)
      }
    }
  }

  function a(e, n, r) {
    if (r === t && 1 === e.nodeType) {
      var o = "data-" + n.replace(Ce, "-$1").toLowerCase();
      if ("string" == typeof(r = e.getAttribute(o))) {
        try {
          r = "true" === r || "false" !== r && ("null" === r ? null : +r + "" === r ? +r : Se.test(r) ? ce.parseJSON(r) : r)
        } catch (e) {
        }
        ce.data(e, n, r)
      } else r = t
    }
    return r
  }

  function s(e) {
    var t;
    for (t in e) if (("data" !== t || !ce.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0
  }

  function l() {
    return !0
  }

  function c() {
    return !1
  }

  function u() {
    try {
      return X.activeElement
    } catch (e) {
    }
  }

  function f(e, t) {
    do {
      e = e[t]
    } while (e && 1 !== e.nodeType);
    return e
  }

  function d(e, t, n) {
    if (ce.isFunction(t)) return ce.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n
    });
    if (t.nodeType) return ce.grep(e, function (e) {
      return e === t !== n
    });
    if ("string" == typeof t) {
      if (qe.test(t)) return ce.filter(t, e, n);
      t = ce.filter(t, e)
    }
    return ce.grep(e, function (e) {
      return ce.inArray(e, t) >= 0 !== n
    })
  }

  function p(e) {
    var t = ze.split("|"), n = e.createDocumentFragment();
    if (n.createElement) for (; t.length;) n.createElement(t.pop());
    return n
  }

  function h(e, t) {
    return ce.nodeName(e, "table") && ce.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }

  function g(e) {
    return e.type = (null !== ce.find.attr(e, "type")) + "/" + e.type, e
  }

  function m(e) {
    var t = rt.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function v(e, t) {
    for (var n, r = 0; null != (n = e[r]); r++) ce._data(n, "globalEval", !t || ce._data(t[r], "globalEval"))
  }

  function b(e, t) {
    if (1 === t.nodeType && ce.hasData(e)) {
      var n, r, o, i = ce._data(e), a = ce._data(t, i), s = i.events;
      if (s) {
        delete a.handle, a.events = {};
        for (n in s) for (r = 0, o = s[n].length; o > r; r++) ce.event.add(t, n, s[n][r])
      }
      a.data && (a.data = ce.extend({}, a.data))
    }
  }

  function y(e, t) {
    var n, r, o;
    if (1 === t.nodeType) {
      if (n = t.nodeName.toLowerCase(), !ce.support.noCloneEvent && t[ce.expando]) {
        o = ce._data(t);
        for (r in o.events) ce.removeEvent(t, r, o.handle);
        t.removeAttribute(ce.expando)
      }
      "script" === n && t.text !== e.text ? (g(t).text = e.text, m(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ce.support.html5Clone && e.innerHTML && !ce.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && et.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }
  }

  function x(e, n) {
    var r, o, i = 0,
      a = typeof e.getElementsByTagName !== G ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== G ? e.querySelectorAll(n || "*") : t;
    if (!a) for (a = [], r = e.childNodes || e; null != (o = r[i]); i++) !n || ce.nodeName(o, n) ? a.push(o) : ce.merge(a, x(o, n));
    return n === t || n && ce.nodeName(e, n) ? ce.merge([e], a) : a
  }

  function w(e) {
    et.test(e.type) && (e.defaultChecked = e.checked)
  }

  function $(e, t) {
    if (t in e) return t;
    for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, o = $t.length; o--;) if ((t = $t[o] + n) in e) return t;
    return r
  }

  function k(e, t) {
    return e = t || e, "none" === ce.css(e, "display") || !ce.contains(e.ownerDocument, e)
  }

  function T(e, t) {
    for (var n, r, o, i = [], a = 0, s = e.length; s > a; a++) (r = e[a]).style && (i[a] = ce._data(r, "olddisplay"), n = r.style.display, t ? (i[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && k(r) && (i[a] = ce._data(r, "olddisplay", A(r.nodeName)))) : i[a] || (o = k(r), (n && "none" !== n || !o) && ce._data(r, "olddisplay", o ? n : ce.css(r, "display"))));
    for (a = 0; s > a; a++) (r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[a] || "" : "none"));
    return e
  }

  function S(e, t, n) {
    var r = gt.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
  }

  function C(e, t, n, r, o) {
    for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > i; i += 2) "margin" === n && (a += ce.css(e, n + wt[i], !0, o)), r ? ("content" === n && (a -= ce.css(e, "padding" + wt[i], !0, o)), "margin" !== n && (a -= ce.css(e, "border" + wt[i] + "Width", !0, o))) : (a += ce.css(e, "padding" + wt[i], !0, o), "padding" !== n && (a += ce.css(e, "border" + wt[i] + "Width", !0, o)));
    return a
  }

  function E(e, t, n) {
    var r = !0, o = "width" === t ? e.offsetWidth : e.offsetHeight, i = lt(e),
      a = ce.support.boxSizing && "border-box" === ce.css(e, "boxSizing", !1, i);
    if (0 >= o || null == o) {
      if ((0 > (o = ct(e, t, i)) || null == o) && (o = e.style[t]), mt.test(o)) return o;
      r = a && (ce.support.boxSizingReliable || o === e.style[t]), o = parseFloat(o) || 0
    }
    return o + C(e, t, n || (a ? "border" : "content"), r, i) + "px"
  }

  function A(e) {
    var t = X, n = bt[e];
    return n || ("none" !== (n = N(e, t)) && n || (st = (st || ce("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), (t = (st[0].contentWindow || st[0].contentDocument).document).write("<!doctype html><html><body>"), t.close(), n = N(e, t), st.detach()), bt[e] = n), n
  }

  function N(e, t) {
    var n = ce(t.createElement(e)).appendTo(t.body), r = ce.css(n[0], "display");
    return n.remove(), r
  }

  function P(e, t, n, r) {
    var o;
    if (ce.isArray(t)) ce.each(t, function (t, o) {
      n || Tt.test(e) ? r(e, o) : P(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, r)
    }); else if (n || "object" !== ce.type(t)) r(e, t); else for (o in t) P(e + "[" + o + "]", t[o], n, r)
  }

  function O(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r, o = 0, i = t.toLowerCase().match(fe) || [];
      if (ce.isFunction(n)) for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
    }
  }

  function D(e, n, r, o) {
    function i(l) {
      var c;
      return a[l] = !0, ce.each(e[l] || [], function (e, l) {
        var u = l(n, r, o);
        return "string" != typeof u || s || a[u] ? s ? !(c = u) : t : (n.dataTypes.unshift(u), i(u), !1)
      }), c
    }

    var a = {}, s = e === jt;
    return i(n.dataTypes[0]) || !a["*"] && i("*")
  }

  function I(e, n) {
    var r, o, i = ce.ajaxSettings.flatOptions || {};
    for (o in n) n[o] !== t && ((i[o] ? e : r || (r = {}))[o] = n[o]);
    return r && ce.extend(!0, e, r), e
  }

  function M(e, n, r) {
    for (var o, i, a, s, l = e.contents, c = e.dataTypes; "*" === c[0];) c.shift(), i === t && (i = e.mimeType || n.getResponseHeader("Content-Type"));
    if (i) for (s in l) if (l[s] && l[s].test(i)) {
      c.unshift(s);
      break
    }
    if (c[0] in r) a = c[0]; else {
      for (s in r) {
        if (!c[0] || e.converters[s + " " + c[0]]) {
          a = s;
          break
        }
        o || (o = s)
      }
      a = a || o
    }
    return a ? (a !== c[0] && c.unshift(a), r[a]) : t
  }

  function _(e, t, n, r) {
    var o, i, a, s, l, c = {}, u = e.dataTypes.slice();
    if (u[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
    for (i = u.shift(); i;) if (e.responseFields[i] && (n[e.responseFields[i]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = u.shift()) if ("*" === i) i = l; else if ("*" !== l && l !== i) {
      if (!(a = c[l + " " + i] || c["* " + i])) for (o in c) if ((s = o.split(" "))[1] === i && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
        !0 === a ? a = c[o] : !0 !== c[o] && (i = s[0], u.unshift(s[1]));
        break
      }
      if (!0 !== a) if (a && e.throws) t = a(t); else try {
        t = a(t)
      } catch (e) {
        return {state: "parsererror", error: a ? e : "No conversion from " + l + " to " + i}
      }
    }
    return {state: "success", data: t}
  }

  function L() {
    try {
      return new e.XMLHttpRequest
    } catch (e) {
    }
  }

  function F() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP")
    } catch (e) {
    }
  }

  function B() {
    return setTimeout(function () {
      Yt = t
    }), Yt = ce.now()
  }

  function R(e, t, n) {
    for (var r, o = (en[t] || []).concat(en["*"]), i = 0, a = o.length; a > i; i++) if (r = o[i].call(n, t, e)) return r
  }

  function j(e, t, n) {
    var r, o, i = 0, a = Zt.length, s = ce.Deferred().always(function () {
      delete l.elem
    }), l = function () {
      if (o) return !1;
      for (var t = Yt || B(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), i = 0, a = c.tweens.length; a > i; i++) c.tweens[i].run(r);
      return s.notifyWith(e, [c, r, n]), 1 > r && a ? n : (s.resolveWith(e, [c]), !1)
    }, c = s.promise({
      elem: e,
      props: ce.extend({}, t),
      opts: ce.extend(!0, {specialEasing: {}}, n),
      originalProperties: t,
      originalOptions: n,
      startTime: Yt || B(),
      duration: n.duration,
      tweens: [],
      createTween: function (t, n) {
        var r = ce.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
        return c.tweens.push(r), r
      },
      stop: function (t) {
        var n = 0, r = t ? c.tweens.length : 0;
        if (o) return this;
        for (o = !0; r > n; n++) c.tweens[n].run(1);
        return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
      }
    }), u = c.props;
    for (q(u, c.opts.specialEasing); a > i; i++) if (r = Zt[i].call(c, e, u, c.opts)) return r;
    return ce.map(u, R, c), ce.isFunction(c.opts.start) && c.opts.start.call(e, c), ce.fx.timer(ce.extend(l, {
      elem: e,
      anim: c,
      queue: c.opts.queue
    })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
  }

  function q(e, t) {
    var n, r, o, i, a;
    for (n in e) if (r = ce.camelCase(n), o = t[r], i = e[n], ce.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (a = ce.cssHooks[r]) && "expand" in a) {
      i = a.expand(i), delete e[r];
      for (n in i) n in e || (e[n] = i[n], t[n] = o)
    } else t[r] = o
  }

  function U(e, t, n, r, o) {
    return new U.prototype.init(e, t, n, r, o)
  }

  function H(e, t) {
    var n, r = {height: e}, o = 0;
    for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = wt[o], r["margin" + n] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r
  }

  function V(e) {
    return ce.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
  }

  var z, W, G = typeof t, Y = e.location, X = e.document, K = X.documentElement, Q = e.jQuery, J = e.$, Z = {}, ee = [],
    te = "1.10.2", ne = ee.concat, re = ee.push, oe = ee.slice, ie = ee.indexOf, ae = Z.toString, se = Z.hasOwnProperty,
    le = te.trim, ce = function (e, t) {
      return new ce.fn.init(e, t, W)
    }, ue = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, fe = /\S+/g, de = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    pe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, he = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ge = /^[\],:{}\s]*$/,
    me = /(?:^|:|,)(?:\s*\[)+/g, ve = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    be = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, ye = /^-ms-/, xe = /-([\da-z])/gi,
    we = function (e, t) {
      return t.toUpperCase()
    }, $e = function (e) {
      (X.addEventListener || "load" === e.type || "complete" === X.readyState) && (ke(), ce.ready())
    }, ke = function () {
      X.addEventListener ? (X.removeEventListener("DOMContentLoaded", $e, !1), e.removeEventListener("load", $e, !1)) : (X.detachEvent("onreadystatechange", $e), e.detachEvent("onload", $e))
    };
  ce.fn = ce.prototype = {
    jquery: te, constructor: ce, init: function (e, n, r) {
      var o, i;
      if (!e) return this;
      if ("string" == typeof e) {
        if (!(o = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : pe.exec(e)) || !o[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
        if (o[1]) {
          if (n = n instanceof ce ? n[0] : n, ce.merge(this, ce.parseHTML(o[1], n && n.nodeType ? n.ownerDocument || n : X, !0)), he.test(o[1]) && ce.isPlainObject(n)) for (o in n) ce.isFunction(this[o]) ? this[o](n[o]) : this.attr(o, n[o]);
          return this
        }
        if ((i = X.getElementById(o[2])) && i.parentNode) {
          if (i.id !== o[2]) return r.find(e);
          this.length = 1, this[0] = i
        }
        return this.context = X, this.selector = e, this
      }
      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ce.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ce.makeArray(e, this))
    }, selector: "", length: 0, toArray: function () {
      return oe.call(this)
    }, get: function (e) {
      return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
    }, pushStack: function (e) {
      var t = ce.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t
    }, each: function (e, t) {
      return ce.each(this, e, t)
    }, ready: function (e) {
      return ce.ready.promise().done(e), this
    }, slice: function () {
      return this.pushStack(oe.apply(this, arguments))
    }, first: function () {
      return this.eq(0)
    }, last: function () {
      return this.eq(-1)
    }, eq: function (e) {
      var t = this.length, n = +e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
    }, map: function (e) {
      return this.pushStack(ce.map(this, function (t, n) {
        return e.call(t, n, t)
      }))
    }, end: function () {
      return this.prevObject || this.constructor(null)
    }, push: re, sort: [].sort, splice: [].splice
  }, ce.fn.init.prototype = ce.fn, ce.extend = ce.fn.extend = function () {
    var e, n, r, o, i, a, s = arguments[0] || {}, l = 1, c = arguments.length, u = !1;
    for ("boolean" == typeof s && (u = s, s = arguments[1] || {}, l = 2), "object" == typeof s || ce.isFunction(s) || (s = {}), c === l && (s = this, --l); c > l; l++) if (null != (i = arguments[l])) for (o in i) e = s[o], r = i[o], s !== r && (u && r && (ce.isPlainObject(r) || (n = ce.isArray(r))) ? (n ? (n = !1, a = e && ce.isArray(e) ? e : []) : a = e && ce.isPlainObject(e) ? e : {}, s[o] = ce.extend(u, a, r)) : r !== t && (s[o] = r));
    return s
  }, ce.extend({
    expando: "jQuery" + (te + Math.random()).replace(/\D/g, ""), noConflict: function (t) {
      return e.$ === ce && (e.$ = J), t && e.jQuery === ce && (e.jQuery = Q), ce
    }, isReady: !1, readyWait: 1, holdReady: function (e) {
      e ? ce.readyWait++ : ce.ready(!0)
    }, ready: function (e) {
      if (!0 === e ? !--ce.readyWait : !ce.isReady) {
        if (!X.body) return setTimeout(ce.ready);
        ce.isReady = !0, !0 !== e && --ce.readyWait > 0 || (z.resolveWith(X, [ce]), ce.fn.trigger && ce(X).trigger("ready").off("ready"))
      }
    }, isFunction: function (e) {
      return "function" === ce.type(e)
    }, isArray: Array.isArray || function (e) {
      return "array" === ce.type(e)
    }, isWindow: function (e) {
      return null != e && e == e.window
    }, isNumeric: function (e) {
      return !isNaN(parseFloat(e)) && isFinite(e)
    }, type: function (e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ae.call(e)] || "object" : typeof e
    }, isPlainObject: function (e) {
      var n;
      if (!e || "object" !== ce.type(e) || e.nodeType || ce.isWindow(e)) return !1;
      try {
        if (e.constructor && !se.call(e, "constructor") && !se.call(e.constructor.prototype, "isPrototypeOf")) return !1
      } catch (e) {
        return !1
      }
      if (ce.support.ownLast) for (n in e) return se.call(e, n);
      for (n in e) ;
      return n === t || se.call(e, n)
    }, isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0
    }, error: function (e) {
      throw Error(e)
    }, parseHTML: function (e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && (n = t, t = !1), t = t || X;
      var r = he.exec(e), o = !n && [];
      return r ? [t.createElement(r[1])] : (r = ce.buildFragment([e], t, o), o && ce(o).remove(), ce.merge([], r.childNodes))
    }, parseJSON: function (n) {
      return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = ce.trim(n)) && ge.test(n.replace(ve, "@").replace(be, "]").replace(me, "")) ? Function("return " + n)() : (ce.error("Invalid JSON: " + n), t)
    }, parseXML: function (n) {
      var r, o;
      if (!n || "string" != typeof n) return null;
      try {
        e.DOMParser ? (o = new DOMParser, r = o.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
      } catch (e) {
        r = t
      }
      return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ce.error("Invalid XML: " + n), r
    }, noop: function () {
    }, globalEval: function (t) {
      t && ce.trim(t) && (e.execScript || function (t) {
        e.eval.call(e, t)
      })(t)
    }, camelCase: function (e) {
      return e.replace(ye, "ms-").replace(xe, we)
    }, nodeName: function (e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, each: function (e, t, r) {
      var o = 0, i = e.length, a = n(e);
      if (r) {
        if (a) for (; i > o && !1 !== t.apply(e[o], r); o++) ; else for (o in e) if (!1 === t.apply(e[o], r)) break
      } else if (a) for (; i > o && !1 !== t.call(e[o], o, e[o]); o++) ; else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
      return e
    }, trim: le && !le.call("\ufeff ") ? function (e) {
      return null == e ? "" : le.call(e)
    } : function (e) {
      return null == e ? "" : (e + "").replace(de, "")
    }, makeArray: function (e, t) {
      var r = t || [];
      return null != e && (n(Object(e)) ? ce.merge(r, "string" == typeof e ? [e] : e) : re.call(r, e)), r
    }, inArray: function (e, t, n) {
      var r;
      if (t) {
        if (ie) return ie.call(t, e, n);
        for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n
      }
      return -1
    }, merge: function (e, n) {
      var r = n.length, o = e.length, i = 0;
      if ("number" == typeof r) for (; r > i; i++) e[o++] = n[i]; else for (; n[i] !== t;) e[o++] = n[i++];
      return e.length = o, e
    }, grep: function (e, t, n) {
      var r, o = [], i = 0, a = e.length;
      for (n = !!n; a > i; i++) r = !!t(e[i], i), n !== r && o.push(e[i]);
      return o
    }, map: function (e, t, r) {
      var o, i = 0, a = e.length, s = [];
      if (n(e)) for (; a > i; i++) null != (o = t(e[i], i, r)) && (s[s.length] = o); else for (i in e) null != (o = t(e[i], i, r)) && (s[s.length] = o);
      return ne.apply([], s)
    }, guid: 1, proxy: function (e, n) {
      var r, o, i;
      return "string" == typeof n && (i = e[n], n = e, e = i), ce.isFunction(e) ? (r = oe.call(arguments, 2), o = function () {
        return e.apply(n || this, r.concat(oe.call(arguments)))
      }, o.guid = e.guid = e.guid || ce.guid++, o) : t
    }, access: function (e, n, r, o, i, a, s) {
      var l = 0, c = e.length, u = null == r;
      if ("object" === ce.type(r)) {
        i = !0;
        for (l in r) ce.access(e, n, l, r[l], !0, a, s)
      } else if (o !== t && (i = !0, ce.isFunction(o) || (s = !0), u && (s ? (n.call(e, o), n = null) : (u = n, n = function (e, t, n) {
          return u.call(ce(e), n)
        })), n)) for (; c > l; l++) n(e[l], r, s ? o : o.call(e[l], l, n(e[l], r)));
      return i ? e : u ? n.call(e) : c ? n(e[0], r) : a
    }, now: function () {
      return (new Date).getTime()
    }, swap: function (e, t, n, r) {
      var o, i, a = {};
      for (i in t) a[i] = e.style[i], e.style[i] = t[i];
      o = n.apply(e, r || []);
      for (i in t) e.style[i] = a[i];
      return o
    }
  }), ce.ready.promise = function (t) {
    if (!z) if (z = ce.Deferred(), "complete" === X.readyState) setTimeout(ce.ready); else if (X.addEventListener) X.addEventListener("DOMContentLoaded", $e, !1), e.addEventListener("load", $e, !1); else {
      X.attachEvent("onreadystatechange", $e), e.attachEvent("onload", $e);
      var n = !1;
      try {
        n = null == e.frameElement && X.documentElement
      } catch (e) {
      }
      n && n.doScroll && function e() {
        if (!ce.isReady) {
          try {
            n.doScroll("left")
          } catch (t) {
            return setTimeout(e, 50)
          }
          ke(), ce.ready()
        }
      }()
    }
    return z.promise(t)
  }, ce.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
    Z["[object " + t + "]"] = t.toLowerCase()
  }), W = ce(X), function (e, t) {
    function n(e, t, n, r) {
      var o, i, a, s, l, c, d, p, h, g;
      if ((t ? t.ownerDocument || t : B) !== P && N(t), t = t || P, n = n || [], !e || "string" != typeof e) return n;
      if (1 !== (s = t.nodeType) && 9 !== s) return [];
      if (D && !r) {
        if (o = ve.exec(e)) if (a = o[1]) {
          if (9 === s) {
            if (!(i = t.getElementById(a)) || !i.parentNode) return n;
            if (i.id === a) return n.push(i), n
          } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && L(t, i) && i.id === a) return n.push(i), n
        } else {
          if (o[2]) return J.apply(n, t.getElementsByTagName(e)), n;
          if ((a = o[3]) && w.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(a)), n
        }
        if (w.qsa && (!I || !I.test(e))) {
          if (p = d = F, h = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
            for (c = u(e), (d = t.getAttribute("id")) ? p = d.replace(xe, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + f(c[l]);
            h = fe.test(e) && t.parentNode || t, g = c.join(",")
          }
          if (g) try {
            return J.apply(n, h.querySelectorAll(g)), n
          } catch (e) {
          } finally {
            d || t.removeAttribute("id")
          }
        }
      }
      return y(e.replace(se, "$1"), t, n, r)
    }

    function r() {
      function e(n, r) {
        return t.push(n += " ") > k.cacheLength && delete e[t.shift()], e[n] = r
      }

      var t = [];
      return e
    }

    function o(e) {
      return e[F] = !0, e
    }

    function i(e) {
      var t = P.createElement("div");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function a(e, t) {
      for (var n = e.split("|"), r = e.length; r--;) k.attrHandle[n[r]] = t
    }

    function s(e, t) {
      var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
      if (r) return r;
      if (n) for (; n = n.nextSibling;) if (n === t) return -1;
      return e ? 1 : -1
    }

    function l(e) {
      return o(function (t) {
        return t = +t, o(function (n, r) {
          for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
        })
      })
    }

    function c() {
    }

    function u(e, t) {
      var r, o, i, a, s, l, c, u = U[e + " "];
      if (u) return t ? 0 : u.slice(0);
      for (s = e, l = [], c = k.preFilter; s;) {
        (!r || (o = le.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(i = [])), r = !1, (o = ue.exec(s)) && (r = o.shift(), i.push({
          value: r,
          type: o[0].replace(se, " ")
        }), s = s.slice(r.length));
        for (a in k.filter) !(o = ge[a].exec(s)) || c[a] && !(o = c[a](o)) || (r = o.shift(), i.push({
          value: r,
          type: a,
          matches: o
        }), s = s.slice(r.length));
        if (!r) break
      }
      return t ? s.length : s ? n.error(e) : U(e, l).slice(0)
    }

    function f(e) {
      for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
      return r
    }

    function d(e, t, n) {
      var r = t.dir, o = n && "parentNode" === r, i = j++;
      return t.first ? function (t, n, i) {
        for (; t = t[r];) if (1 === t.nodeType || o) return e(t, n, i)
      } : function (t, n, a) {
        var s, l, c, u = R + " " + i;
        if (a) {
          for (; t = t[r];) if ((1 === t.nodeType || o) && e(t, n, a)) return !0
        } else for (; t = t[r];) if (1 === t.nodeType || o) if (c = t[F] || (t[F] = {}), (l = c[r]) && l[0] === u) {
          if (!0 === (s = l[1]) || s === $) return !0 === s
        } else if (l = c[r] = [u], l[1] = e(t, n, a) || $, !0 === l[1]) return !0
      }
    }

    function p(e) {
      return e.length > 1 ? function (t, n, r) {
        for (var o = e.length; o--;) if (!e[o](t, n, r)) return !1;
        return !0
      } : e[0]
    }

    function h(e, t, n, r, o) {
      for (var i, a = [], s = 0, l = e.length, c = null != t; l > s; s++) (i = e[s]) && (!n || n(i, r, o)) && (a.push(i), c && t.push(s));
      return a
    }

    function g(e, t, n, r, i, a) {
      return r && !r[F] && (r = g(r)), i && !i[F] && (i = g(i, a)), o(function (o, a, s, l) {
        var c, u, f, d = [], p = [], g = a.length, m = o || b(t || "*", s.nodeType ? [s] : s, []),
          v = !e || !o && t ? m : h(m, d, e, s, l), y = n ? i || (o ? e : g || r) ? [] : a : v;
        if (n && n(v, y, s, l), r) for (c = h(y, p), r(c, [], s, l), u = c.length; u--;) (f = c[u]) && (y[p[u]] = !(v[p[u]] = f));
        if (o) {
          if (i || e) {
            if (i) {
              for (c = [], u = y.length; u--;) (f = y[u]) && c.push(v[u] = f);
              i(null, y = [], c, l)
            }
            for (u = y.length; u--;) (f = y[u]) && (c = i ? ee.call(o, f) : d[u]) > -1 && (o[c] = !(a[c] = f))
          }
        } else y = h(y === a ? y.splice(g, y.length) : y), i ? i(null, a, y, l) : J.apply(a, y)
      })
    }

    function m(e) {
      for (var t, n, r, o = e.length, i = k.relative[e[0].type], a = i || k.relative[" "], s = i ? 1 : 0, l = d(function (e) {
        return e === t
      }, a, !0), c = d(function (e) {
        return ee.call(t, e) > -1
      }, a, !0), u = [function (e, n, r) {
        return !i && (r || n !== E) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
      }]; o > s; s++) if (n = k.relative[e[s].type]) u = [d(p(u), n)]; else {
        if ((n = k.filter[e[s].type].apply(null, e[s].matches))[F]) {
          for (r = ++s; o > r && !k.relative[e[r].type]; r++) ;
          return g(s > 1 && p(u), s > 1 && f(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(se, "$1"), n, r > s && m(e.slice(s, r)), o > r && m(e = e.slice(r)), o > r && f(e))
        }
        u.push(n)
      }
      return p(u)
    }

    function v(e, t) {
      var r = 0, i = t.length > 0, a = e.length > 0, s = function (o, s, l, c, u) {
        var f, d, p, g = [], m = 0, v = "0", b = o && [], y = null != u, x = E,
          w = o || a && k.find.TAG("*", u && s.parentNode || s), T = R += null == x ? 1 : Math.random() || .1;
        for (y && (E = s !== P && s, $ = r); null != (f = w[v]); v++) {
          if (a && f) {
            for (d = 0; p = e[d++];) if (p(f, s, l)) {
              c.push(f);
              break
            }
            y && (R = T, $ = ++r)
          }
          i && ((f = !p && f) && m--, o && b.push(f))
        }
        if (m += v, i && v !== m) {
          for (d = 0; p = t[d++];) p(b, g, s, l);
          if (o) {
            if (m > 0) for (; v--;) b[v] || g[v] || (g[v] = K.call(c));
            g = h(g)
          }
          J.apply(c, g), y && !o && g.length > 0 && m + t.length > 1 && n.uniqueSort(c)
        }
        return y && (R = T, E = x), b
      };
      return i ? o(s) : s
    }

    function b(e, t, r) {
      for (var o = 0, i = t.length; i > o; o++) n(e, t[o], r);
      return r
    }

    function y(e, t, n, r) {
      var o, i, a, s, l, c = u(e);
      if (!r && 1 === c.length) {
        if ((i = c[0] = c[0].slice(0)).length > 2 && "ID" === (a = i[0]).type && w.getById && 9 === t.nodeType && D && k.relative[i[1].type]) {
          if (!(t = (k.find.ID(a.matches[0].replace(we, $e), t) || [])[0])) return n;
          e = e.slice(i.shift().value.length)
        }
        for (o = ge.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !k.relative[s = a.type]);) if ((l = k.find[s]) && (r = l(a.matches[0].replace(we, $e), fe.test(i[0].type) && t.parentNode || t))) {
          if (i.splice(o, 1), !(e = r.length && f(i))) return J.apply(n, r), n;
          break
        }
      }
      return C(e, c)(r, t, !D, n, fe.test(e)), n
    }

    var x, w, $, k, T, S, C, E, A, N, P, O, D, I, M, _, L, F = "sizzle" + -new Date, B = e.document, R = 0, j = 0,
      q = r(), U = r(), H = r(), V = !1, z = function (e, t) {
        return e === t ? (V = !0, 0) : 0
      }, W = typeof t, G = 1 << 31, Y = {}.hasOwnProperty, X = [], K = X.pop, Q = X.push, J = X.push, Z = X.slice,
      ee = X.indexOf || function (e) {
        for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
        return -1
      },
      te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = re.replace("w", "w#"),
      ie = "\\[" + ne + "*(" + re + ")" + ne + "*(?:([*^$|!~]?=)" + ne + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + oe + ")|)|)" + ne + "*\\]",
      ae = ":(" + re + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ie.replace(3, 8) + ")*)|.*)\\)|)",
      se = RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), le = RegExp("^" + ne + "*," + ne + "*"),
      ue = RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), fe = RegExp(ne + "*[+~]"),
      de = RegExp("=" + ne + "*([^\\]'\"]*)" + ne + "*\\]", "g"), pe = RegExp(ae), he = RegExp("^" + oe + "$"), ge = {
        ID: RegExp("^#(" + re + ")"),
        CLASS: RegExp("^\\.(" + re + ")"),
        TAG: RegExp("^(" + re.replace("w", "w*") + ")"),
        ATTR: RegExp("^" + ie),
        PSEUDO: RegExp("^" + ae),
        CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
        bool: RegExp("^(?:" + te + ")$", "i"),
        needsContext: RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
      }, me = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      be = /^(?:input|select|textarea|button)$/i, ye = /^h\d$/i, xe = /'|\\/g,
      we = RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), $e = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
      };
    try {
      J.apply(X = Z.call(B.childNodes), B.childNodes), X[B.childNodes.length].nodeType
    } catch (e) {
      J = {
        apply: X.length ? function (e, t) {
          Q.apply(e, Z.call(t))
        } : function (e, t) {
          for (var n = e.length, r = 0; e[n++] = t[r++];) ;
          e.length = n - 1
        }
      }
    }
    S = n.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName
    }, w = n.support = {}, N = n.setDocument = function (e) {
      var n = e ? e.ownerDocument || e : B, r = n.defaultView;
      return n !== P && 9 === n.nodeType && n.documentElement ? (P = n, O = n.documentElement, D = !S(n), r && r.attachEvent && r !== r.top && r.attachEvent("onbeforeunload", function () {
        N()
      }), w.attributes = i(function (e) {
        return e.className = "i", !e.getAttribute("className")
      }), w.getElementsByTagName = i(function (e) {
        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
      }), w.getElementsByClassName = i(function (e) {
        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
      }), w.getById = i(function (e) {
        return O.appendChild(e).id = F, !n.getElementsByName || !n.getElementsByName(F).length
      }), w.getById ? (k.find.ID = function (e, t) {
        if (typeof t.getElementById !== W && D) {
          var n = t.getElementById(e);
          return n && n.parentNode ? [n] : []
        }
      }, k.filter.ID = function (e) {
        var t = e.replace(we, $e);
        return function (e) {
          return e.getAttribute("id") === t
        }
      }) : (delete k.find.ID, k.filter.ID = function (e) {
        var t = e.replace(we, $e);
        return function (e) {
          var n = typeof e.getAttributeNode !== W && e.getAttributeNode("id");
          return n && n.value === t
        }
      }), k.find.TAG = w.getElementsByTagName ? function (e, n) {
        return typeof n.getElementsByTagName !== W ? n.getElementsByTagName(e) : t
      } : function (e, t) {
        var n, r = [], o = 0, i = t.getElementsByTagName(e);
        if ("*" === e) {
          for (; n = i[o++];) 1 === n.nodeType && r.push(n);
          return r
        }
        return i
      }, k.find.CLASS = w.getElementsByClassName && function (e, n) {
        return typeof n.getElementsByClassName !== W && D ? n.getElementsByClassName(e) : t
      }, M = [], I = [], (w.qsa = me.test(n.querySelectorAll)) && (i(function (e) {
        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || I.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll(":checked").length || I.push(":checked")
      }), i(function (e) {
        var t = n.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && I.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
      })), (w.matchesSelector = me.test(_ = O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && i(function (e) {
        w.disconnectedMatch = _.call(e, "div"), _.call(e, "[s!='']:x"), M.push("!=", ae)
      }), I = I.length && RegExp(I.join("|")), M = M.length && RegExp(M.join("|")), L = me.test(O.contains) || O.compareDocumentPosition ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) if (t === e) return !0;
        return !1
      }, z = O.compareDocumentPosition ? function (e, t) {
        if (e === t) return V = !0, 0;
        var r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
        return r ? 1 & r || !w.sortDetached && t.compareDocumentPosition(e) === r ? e === n || L(B, e) ? -1 : t === n || L(B, t) ? 1 : A ? ee.call(A, e) - ee.call(A, t) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
      } : function (e, t) {
        var r, o = 0, i = e.parentNode, a = t.parentNode, l = [e], c = [t];
        if (e === t) return V = !0, 0;
        if (!i || !a) return e === n ? -1 : t === n ? 1 : i ? -1 : a ? 1 : A ? ee.call(A, e) - ee.call(A, t) : 0;
        if (i === a) return s(e, t);
        for (r = e; r = r.parentNode;) l.unshift(r);
        for (r = t; r = r.parentNode;) c.unshift(r);
        for (; l[o] === c[o];) o++;
        return o ? s(l[o], c[o]) : l[o] === B ? -1 : c[o] === B ? 1 : 0
      }, n) : P
    }, n.matches = function (e, t) {
      return n(e, null, null, t)
    }, n.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== P && N(e), t = t.replace(de, "='$1']"), !(!w.matchesSelector || !D || M && M.test(t) || I && I.test(t))) try {
        var r = _.call(e, t);
        if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
      } catch (e) {
      }
      return n(t, P, null, [e]).length > 0
    }, n.contains = function (e, t) {
      return (e.ownerDocument || e) !== P && N(e), L(e, t)
    }, n.attr = function (e, n) {
      (e.ownerDocument || e) !== P && N(e);
      var r = k.attrHandle[n.toLowerCase()], o = r && Y.call(k.attrHandle, n.toLowerCase()) ? r(e, n, !D) : t;
      return o === t ? w.attributes || !D ? e.getAttribute(n) : (o = e.getAttributeNode(n)) && o.specified ? o.value : null : o
    }, n.error = function (e) {
      throw Error("Syntax error, unrecognized expression: " + e)
    }, n.uniqueSort = function (e) {
      var t, n = [], r = 0, o = 0;
      if (V = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(z), V) {
        for (; t = e[o++];) t === e[o] && (r = n.push(o));
        for (; r--;) e.splice(n[r], 1)
      }
      return e
    }, T = n.getText = function (e) {
      var t, n = "", r = 0, o = e.nodeType;
      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
        } else if (3 === o || 4 === o) return e.nodeValue
      } else for (; t = e[r]; r++) n += T(t);
      return n
    }, (k = n.selectors = {
      cacheLength: 50,
      createPseudo: o,
      match: ge,
      attrHandle: {},
      find: {},
      relative: {
        ">": {dir: "parentNode", first: !0},
        " ": {dir: "parentNode"},
        "+": {dir: "previousSibling", first: !0},
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(we, $e), e[3] = (e[4] || e[5] || "").replace(we, $e), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        }, CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
        }, PSEUDO: function (e) {
          var n, r = !e[5] && e[2];
          return ge.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && pe.test(r) && (n = u(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(we, $e).toLowerCase();
          return "*" === e ? function () {
            return !0
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        }, CLASS: function (e) {
          var t = q[e + " "];
          return t || (t = RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && q(e, function (e) {
            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== W && e.getAttribute("class") || "")
          })
        }, ATTR: function (e, t, r) {
          return function (o) {
            var i = n.attr(o, e);
            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === r : "!=" === t ? i !== r : "^=" === t ? r && 0 === i.indexOf(r) : "*=" === t ? r && i.indexOf(r) > -1 : "$=" === t ? r && i.slice(-r.length) === r : "~=" === t ? (" " + i + " ").indexOf(r) > -1 : "|=" === t && (i === r || i.slice(0, r.length + 1) === r + "-"))
          }
        }, CHILD: function (e, t, n, r, o) {
          var i = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
          return 1 === r && 0 === o ? function (e) {
            return !!e.parentNode
          } : function (t, n, l) {
            var c, u, f, d, p, h, g = i !== a ? "nextSibling" : "previousSibling", m = t.parentNode,
              v = s && t.nodeName.toLowerCase(), b = !l && !s;
            if (m) {
              if (i) {
                for (; g;) {
                  for (f = t; f = f[g];) if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                  h = g = "only" === e && !h && "nextSibling"
                }
                return !0
              }
              if (h = [a ? m.firstChild : m.lastChild], a && b) {
                for (p = (c = (u = m[F] || (m[F] = {}))[e] || [])[0] === R && c[1], d = c[0] === R && c[2], f = p && m.childNodes[p]; f = ++p && f && f[g] || (d = p = 0) || h.pop();) if (1 === f.nodeType && ++d && f === t) {
                  u[e] = [R, p, d];
                  break
                }
              } else if (b && (c = (t[F] || (t[F] = {}))[e]) && c[0] === R) d = c[1]; else for (; (f = ++p && f && f[g] || (d = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++d || (b && ((f[F] || (f[F] = {}))[e] = [R, d]), f !== t));) ;
              return (d -= o) === r || 0 == d % r && d / r >= 0
            }
          }
        }, PSEUDO: function (e, t) {
          var r, i = k.pseudos[e] || k.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
          return i[F] ? i(t) : i.length > 1 ? (r = [e, e, "", t], k.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function (e, n) {
            for (var r, o = i(e, t), a = o.length; a--;) r = ee.call(e, o[a]), e[r] = !(n[r] = o[a])
          }) : function (e) {
            return i(e, 0, r)
          }) : i
        }
      },
      pseudos: {
        not: o(function (e) {
          var t = [], n = [], r = C(e.replace(se, "$1"));
          return r[F] ? o(function (e, t, n, o) {
            for (var i, a = r(e, null, o, []), s = e.length; s--;) (i = a[s]) && (e[s] = !(t[s] = i))
          }) : function (e, o, i) {
            return t[0] = e, r(t, null, i, n), !n.pop()
          }
        }), has: o(function (e) {
          return function (t) {
            return n(e, t).length > 0
          }
        }), contains: o(function (e) {
          return function (t) {
            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
          }
        }), lang: o(function (e) {
          return he.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(we, $e).toLowerCase(), function (t) {
            var n;
            do {
              if (n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
            } while ((t = t.parentNode) && 1 === t.nodeType);
            return !1
          }
        }), target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id
        }, root: function (e) {
          return e === O
        }, focus: function (e) {
          return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        }, enabled: function (e) {
          return !1 === e.disabled
        }, disabled: function (e) {
          return !0 === e.disabled
        }, checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        }, selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
        }, empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
          return !0
        }, parent: function (e) {
          return !k.pseudos.empty(e)
        }, header: function (e) {
          return ye.test(e.nodeName)
        }, input: function (e) {
          return be.test(e.nodeName)
        }, button: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        }, text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
        }, first: l(function () {
          return [0]
        }), last: l(function (e, t) {
          return [t - 1]
        }), eq: l(function (e, t, n) {
          return [0 > n ? n + t : n]
        }), even: l(function (e, t) {
          for (var n = 0; t > n; n += 2) e.push(n);
          return e
        }), odd: l(function (e, t) {
          for (var n = 1; t > n; n += 2) e.push(n);
          return e
        }), lt: l(function (e, t, n) {
          for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
          return e
        }), gt: l(function (e, t, n) {
          for (var r = 0 > n ? n + t : n; t > ++r;) e.push(r);
          return e
        })
      }
    }).pseudos.nth = k.pseudos.eq;
    for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) k.pseudos[x] = function (e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e
      }
    }(x);
    for (x in{submit: !0, reset: !0}) k.pseudos[x] = function (e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e
      }
    }(x);
    c.prototype = k.filters = k.pseudos, k.setFilters = new c, C = n.compile = function (e, t) {
      var n, r = [], o = [], i = H[e + " "];
      if (!i) {
        for (t || (t = u(e)), n = t.length; n--;) (i = m(t[n]))[F] ? r.push(i) : o.push(i);
        i = H(e, v(o, r))
      }
      return i
    }, w.sortStable = F.split("").sort(z).join("") === F, w.detectDuplicates = V, N(), w.sortDetached = i(function (e) {
      return 1 & e.compareDocumentPosition(P.createElement("div"))
    }), i(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || a("type|href|height|width", function (e, n, r) {
      return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
    }), w.attributes && i(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || a("value", function (e, n, r) {
      return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
    }), i(function (e) {
      return null == e.getAttribute("disabled")
    }) || a(te, function (e, n, r) {
      var o;
      return r ? t : (o = e.getAttributeNode(n)) && o.specified ? o.value : !0 === e[n] ? n.toLowerCase() : null
    }), ce.find = n, ce.expr = n.selectors, ce.expr[":"] = ce.expr.pseudos, ce.unique = n.uniqueSort, ce.text = n.getText, ce.isXMLDoc = n.isXML, ce.contains = n.contains
  }(e);
  var Te = {};
  ce.Callbacks = function (e) {
    var n, o, i, a, s, l, c = [], u = !(e = "string" == typeof e ? Te[e] || r(e) : ce.extend({}, e)).once && [],
      f = function (t) {
        for (o = e.memory && t, i = !0, s = l || 0, l = 0, a = c.length, n = !0; c && a > s; s++) if (!1 === c[s].apply(t[0], t[1]) && e.stopOnFalse) {
          o = !1;
          break
        }
        n = !1, c && (u ? u.length && f(u.shift()) : o ? c = [] : d.disable())
      }, d = {
        add: function () {
          if (c) {
            var t = c.length;
            (function t(n) {
              ce.each(n, function (n, r) {
                var o = ce.type(r);
                "function" === o ? e.unique && d.has(r) || c.push(r) : r && r.length && "string" !== o && t(r)
              })
            })(arguments), n ? a = c.length : o && (l = t, f(o))
          }
          return this
        }, remove: function () {
          return c && ce.each(arguments, function (e, t) {
            for (var r; (r = ce.inArray(t, c, r)) > -1;) c.splice(r, 1), n && (a >= r && a--, s >= r && s--)
          }), this
        }, has: function (e) {
          return e ? ce.inArray(e, c) > -1 : !(!c || !c.length)
        }, empty: function () {
          return c = [], a = 0, this
        }, disable: function () {
          return c = u = o = t, this
        }, disabled: function () {
          return !c
        }, lock: function () {
          return u = t, o || d.disable(), this
        }, locked: function () {
          return !u
        }, fireWith: function (e, t) {
          return !c || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : f(t)), this
        }, fire: function () {
          return d.fireWith(this, arguments), this
        }, fired: function () {
          return !!i
        }
      };
    return d
  }, ce.extend({
    Deferred: function (e) {
      var t = [["resolve", "done", ce.Callbacks("once memory"), "resolved"], ["reject", "fail", ce.Callbacks("once memory"), "rejected"], ["notify", "progress", ce.Callbacks("memory")]],
        n = "pending", r = {
          state: function () {
            return n
          }, always: function () {
            return o.done(arguments).fail(arguments), this
          }, then: function () {
            var e = arguments;
            return ce.Deferred(function (n) {
              ce.each(t, function (t, i) {
                var a = i[0], s = ce.isFunction(e[t]) && e[t];
                o[i[1]](function () {
                  var e = s && s.apply(this, arguments);
                  e && ce.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                })
              }), e = null
            }).promise()
          }, promise: function (e) {
            return null != e ? ce.extend(e, r) : r
          }
        }, o = {};
      return r.pipe = r.then, ce.each(t, function (e, i) {
        var a = i[2], s = i[3];
        r[i[1]] = a.add, s && a.add(function () {
          n = s
        }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function () {
          return o[i[0] + "With"](this === o ? r : this, arguments), this
        }, o[i[0] + "With"] = a.fireWith
      }), r.promise(o), e && e.call(o, o), o
    }, when: function (e) {
      var t, n, r, o = 0, i = oe.call(arguments), a = i.length, s = 1 !== a || e && ce.isFunction(e.promise) ? a : 0,
        l = 1 === s ? e : ce.Deferred(), c = function (e, n, r) {
          return function (o) {
            n[e] = this, r[e] = arguments.length > 1 ? oe.call(arguments) : o, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
          }
        };
      if (a > 1) for (t = Array(a), n = Array(a), r = Array(a); a > o; o++) i[o] && ce.isFunction(i[o].promise) ? i[o].promise().done(c(o, r, i)).fail(l.reject).progress(c(o, n, t)) : --s;
      return s || l.resolveWith(r, i), l.promise()
    }
  }), ce.support = function (t) {
    var n, r, o, i, a, s, l, c, u, f = X.createElement("div");
    if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*") || [], !(r = f.getElementsByTagName("a")[0]) || !r.style || !n.length) return t;
    s = (i = X.createElement("select")).appendChild(X.createElement("option")), o = f.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== f.className, t.leadingWhitespace = 3 === f.firstChild.nodeType, t.tbody = !f.getElementsByTagName("tbody").length, t.htmlSerialize = !!f.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = s.selected, t.enctype = !!X.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== X.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !s.disabled;
    try {
      delete f.test
    } catch (e) {
      t.deleteExpando = !1
    }
    (o = X.createElement("input")).setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), (a = X.createDocumentFragment()).appendChild(o), t.appendChecked = o.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, f.attachEvent && (f.attachEvent("onclick", function () {
      t.noCloneEvent = !1
    }), f.cloneNode(!0).click());
    for (u in{
      submit: !0,
      change: !0,
      focusin: !0
    }) f.setAttribute(l = "on" + u, "t"), t[u + "Bubbles"] = l in e || !1 === f.attributes[l].expando;
    f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === f.style.backgroundClip;
    for (u in ce(t)) break;
    return t.ownLast = "0" !== u, ce(function () {
      var n, r, o,
        i = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
        a = X.getElementsByTagName("body")[0];
      a && (n = X.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = f.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === o[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ce.swap(a, null != a.style.zoom ? {zoom: 1} : {}, function () {
        t.boxSizing = 4 === f.offsetWidth
      }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(f, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(f, null) || {width: "4px"}).width, r = f.appendChild(X.createElement("div")), r.style.cssText = f.style.cssText = i, r.style.marginRight = r.style.width = "0", f.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof f.style.zoom !== G && (f.innerHTML = "", f.style.cssText = i + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== f.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = f = o = r = null)
    }), n = i = a = s = r = o = null, t
  }({});
  var Se = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, Ce = /([A-Z])/g;
  ce.extend({
    cache: {},
    noData: {applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
    hasData: function (e) {
      return !!(e = e.nodeType ? ce.cache[e[ce.expando]] : e[ce.expando]) && !s(e)
    },
    data: function (e, t, n) {
      return o(e, t, n)
    },
    removeData: function (e, t) {
      return i(e, t)
    },
    _data: function (e, t, n) {
      return o(e, t, n, !0)
    },
    _removeData: function (e, t) {
      return i(e, t, !0)
    },
    acceptData: function (e) {
      if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
      var t = e.nodeName && ce.noData[e.nodeName.toLowerCase()];
      return !t || !0 !== t && e.getAttribute("classid") === t
    }
  }), ce.fn.extend({
    data: function (e, n) {
      var r, o, i = null, s = 0, l = this[0];
      if (e === t) {
        if (this.length && (i = ce.data(l), 1 === l.nodeType && !ce._data(l, "parsedAttrs"))) {
          for (r = l.attributes; r.length > s; s++) 0 === (o = r[s].name).indexOf("data-") && (o = ce.camelCase(o.slice(5)), a(l, o, i[o]));
          ce._data(l, "parsedAttrs", !0)
        }
        return i
      }
      return "object" == typeof e ? this.each(function () {
        ce.data(this, e)
      }) : arguments.length > 1 ? this.each(function () {
        ce.data(this, e, n)
      }) : l ? a(l, e, ce.data(l, e)) : null
    }, removeData: function (e) {
      return this.each(function () {
        ce.removeData(this, e)
      })
    }
  }), ce.extend({
    queue: function (e, n, r) {
      var o;
      return e ? (n = (n || "fx") + "queue", o = ce._data(e, n), r && (!o || ce.isArray(r) ? o = ce._data(e, n, ce.makeArray(r)) : o.push(r)), o || []) : t
    }, dequeue: function (e, t) {
      t = t || "fx";
      var n = ce.queue(e, t), r = n.length, o = n.shift(), i = ce._queueHooks(e, t);
      "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, function () {
        ce.dequeue(e, t)
      }, i)), !r && i && i.empty.fire()
    }, _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return ce._data(e, n) || ce._data(e, n, {
        empty: ce.Callbacks("once memory").add(function () {
          ce._removeData(e, t + "queue"), ce._removeData(e, n)
        })
      })
    }
  }), ce.fn.extend({
    queue: function (e, n) {
      var r = 2;
      return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? ce.queue(this[0], e) : n === t ? this : this.each(function () {
        var t = ce.queue(this, e, n);
        ce._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ce.dequeue(this, e)
      })
    }, dequeue: function (e) {
      return this.each(function () {
        ce.dequeue(this, e)
      })
    }, delay: function (e, t) {
      return e = ce.fx ? ce.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
        var r = setTimeout(t, e);
        n.stop = function () {
          clearTimeout(r)
        }
      })
    }, clearQueue: function (e) {
      return this.queue(e || "fx", [])
    }, promise: function (e, n) {
      var r, o = 1, i = ce.Deferred(), a = this, s = this.length, l = function () {
        --o || i.resolveWith(a, [a])
      };
      for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) (r = ce._data(a[s], e + "queueHooks")) && r.empty && (o++, r.empty.add(l));
      return l(), i.promise(n)
    }
  });
  var Ee, Ae, Ne = /[\t\r\n\f]/g, Pe = /\r/g, Oe = /^(?:input|select|textarea|button|object)$/i, De = /^(?:a|area)$/i,
    Ie = /^(?:checked|selected)$/i, Me = ce.support.getSetAttribute, _e = ce.support.input;
  ce.fn.extend({
    attr: function (e, t) {
      return ce.access(this, ce.attr, e, t, arguments.length > 1)
    }, removeAttr: function (e) {
      return this.each(function () {
        ce.removeAttr(this, e)
      })
    }, prop: function (e, t) {
      return ce.access(this, ce.prop, e, t, arguments.length > 1)
    }, removeProp: function (e) {
      return e = ce.propFix[e] || e, this.each(function () {
        try {
          this[e] = t, delete this[e]
        } catch (e) {
        }
      })
    }, addClass: function (e) {
      var t, n, r, o, i, a = 0, s = this.length, l = "string" == typeof e && e;
      if (ce.isFunction(e)) return this.each(function (t) {
        ce(this).addClass(e.call(this, t, this.className))
      });
      if (l) for (t = (e || "").match(fe) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ne, " ") : " ")) {
        for (i = 0; o = t[i++];) 0 > r.indexOf(" " + o + " ") && (r += o + " ");
        n.className = ce.trim(r)
      }
      return this
    }, removeClass: function (e) {
      var t, n, r, o, i, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e;
      if (ce.isFunction(e)) return this.each(function (t) {
        ce(this).removeClass(e.call(this, t, this.className))
      });
      if (l) for (t = (e || "").match(fe) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ne, " ") : "")) {
        for (i = 0; o = t[i++];) for (; r.indexOf(" " + o + " ") >= 0;) r = r.replace(" " + o + " ", " ");
        n.className = e ? ce.trim(r) : ""
      }
      return this
    }, toggleClass: function (e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ce.isFunction(e) ? this.each(function (n) {
        ce(this).toggleClass(e.call(this, n, this.className, t), t)
      }) : this.each(function () {
        if ("string" === n) for (var t, r = 0, o = ce(this), i = e.match(fe) || []; t = i[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else (n === G || "boolean" === n) && (this.className && ce._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : ce._data(this, "__className__") || "")
      })
    }, hasClass: function (e) {
      for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ne, " ").indexOf(t) >= 0) return !0;
      return !1
    }, val: function (e) {
      var n, r, o, i = this[0];
      return arguments.length ? (o = ce.isFunction(e), this.each(function (n) {
        var i;
        1 === this.nodeType && (null == (i = o ? e.call(this, n, ce(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : ce.isArray(i) && (i = ce.map(i, function (e) {
          return null == e ? "" : e + ""
        })), (r = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r && r.set(this, i, "value") !== t || (this.value = i))
      })) : i ? (r = ce.valHooks[i.type] || ce.valHooks[i.nodeName.toLowerCase()]) && "get" in r && (n = r.get(i, "value")) !== t ? n : "string" == typeof(n = i.value) ? n.replace(Pe, "") : null == n ? "" : n : void 0
    }
  }), ce.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = ce.find.attr(e, "value");
          return null != t ? t : e.text
        }
      }, select: {
        get: function (e) {
          for (var t, n, r = e.options, o = e.selectedIndex, i = "select-one" === e.type || 0 > o, a = i ? null : [], s = i ? o + 1 : r.length, l = 0 > o ? s : i ? o : 0; s > l; l++) if (!(!(n = r[l]).selected && l !== o || (ce.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ce.nodeName(n.parentNode, "optgroup"))) {
            if (t = ce(n).val(), i) return t;
            a.push(t)
          }
          return a
        }, set: function (e, t) {
          for (var n, r, o = e.options, i = ce.makeArray(t), a = o.length; a--;) r = o[a], (r.selected = ce.inArray(ce(r).val(), i) >= 0) && (n = !0);
          return n || (e.selectedIndex = -1), i
        }
      }
    }, attr: function (e, n, r) {
      var o, i, a = e.nodeType;
      if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === G ? ce.prop(e, n, r) : (1 === a && ce.isXMLDoc(e) || (n = n.toLowerCase(), o = ce.attrHooks[n] || (ce.expr.match.bool.test(n) ? Ae : Ee)), r === t ? o && "get" in o && null !== (i = o.get(e, n)) ? i : null == (i = ce.find.attr(e, n)) ? t : i : null !== r ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : (e.setAttribute(n, r + ""), r) : (ce.removeAttr(e, n), t))
    }, removeAttr: function (e, t) {
      var n, r, o = 0, i = t && t.match(fe);
      if (i && 1 === e.nodeType) for (; n = i[o++];) r = ce.propFix[n] || n, ce.expr.match.bool.test(n) ? _e && Me || !Ie.test(n) ? e[r] = !1 : e[ce.camelCase("default-" + n)] = e[r] = !1 : ce.attr(e, n, ""), e.removeAttribute(Me ? n : r)
    }, attrHooks: {
      type: {
        set: function (e, t) {
          if (!ce.support.radioValue && "radio" === t && ce.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    }, propFix: {for: "htmlFor", class: "className"}, prop: function (e, n, r) {
      var o, i, a = e.nodeType;
      if (e && 3 !== a && 8 !== a && 2 !== a) return (1 !== a || !ce.isXMLDoc(e)) && (n = ce.propFix[n] || n, i = ce.propHooks[n]), r !== t ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o : e[n] = r : i && "get" in i && null !== (o = i.get(e, n)) ? o : e[n]
    }, propHooks: {
      tabIndex: {
        get: function (e) {
          var t = ce.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : Oe.test(e.nodeName) || De.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    }
  }), Ae = {
    set: function (e, t, n) {
      return !1 === t ? ce.removeAttr(e, n) : _e && Me || !Ie.test(n) ? e.setAttribute(!Me && ce.propFix[n] || n, n) : e[ce.camelCase("default-" + n)] = e[n] = !0, n
    }
  }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, n) {
    var r = ce.expr.attrHandle[n] || ce.find.attr;
    ce.expr.attrHandle[n] = _e && Me || !Ie.test(n) ? function (e, n, o) {
      var i = ce.expr.attrHandle[n], a = o ? t : (ce.expr.attrHandle[n] = t) != r(e, n, o) ? n.toLowerCase() : null;
      return ce.expr.attrHandle[n] = i, a
    } : function (e, n, r) {
      return r ? t : e[ce.camelCase("default-" + n)] ? n.toLowerCase() : null
    }
  }), _e && Me || (ce.attrHooks.value = {
    set: function (e, n, r) {
      return ce.nodeName(e, "input") ? (e.defaultValue = n, t) : Ee && Ee.set(e, n, r)
    }
  }), Me || (Ee = {
    set: function (e, n, r) {
      var o = e.getAttributeNode(r);
      return o || e.setAttributeNode(o = e.ownerDocument.createAttribute(r)), o.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
    }
  }, ce.expr.attrHandle.id = ce.expr.attrHandle.name = ce.expr.attrHandle.coords = function (e, n, r) {
    var o;
    return r ? t : (o = e.getAttributeNode(n)) && "" !== o.value ? o.value : null
  }, ce.valHooks.button = {
    get: function (e, n) {
      var r = e.getAttributeNode(n);
      return r && r.specified ? r.value : t
    }, set: Ee.set
  }, ce.attrHooks.contenteditable = {
    set: function (e, t, n) {
      Ee.set(e, "" !== t && t, n)
    }
  }, ce.each(["width", "height"], function (e, n) {
    ce.attrHooks[n] = {
      set: function (e, r) {
        return "" === r ? (e.setAttribute(n, "auto"), r) : t
      }
    }
  })), ce.support.hrefNormalized || ce.each(["href", "src"], function (e, t) {
    ce.propHooks[t] = {
      get: function (e) {
        return e.getAttribute(t, 4)
      }
    }
  }), ce.support.style || (ce.attrHooks.style = {
    get: function (e) {
      return e.style.cssText || t
    }, set: function (e, t) {
      return e.style.cssText = t + ""
    }
  }), ce.support.optSelected || (ce.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
    }
  }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    ce.propFix[this.toLowerCase()] = this
  }), ce.support.enctype || (ce.propFix.enctype = "encoding"), ce.each(["radio", "checkbox"], function () {
    ce.valHooks[this] = {
      set: function (e, n) {
        return ce.isArray(n) ? e.checked = ce.inArray(ce(e).val(), n) >= 0 : t
      }
    }, ce.support.checkOn || (ce.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  });
  var Le = /^(?:input|select|textarea)$/i, Fe = /^key/, Be = /^(?:mouse|contextmenu)|click/,
    Re = /^(?:focusinfocus|focusoutblur)$/, je = /^([^.]*)(?:\.(.+)|)$/;
  ce.event = {
    global: {},
    add: function (e, n, r, o, i) {
      var a, s, l, c, u, f, d, p, h, g, m, v = ce._data(e);
      if (v) {
        for (r.handler && (c = r, r = c.handler, i = c.selector), r.guid || (r.guid = ce.guid++), (s = v.events) || (s = v.events = {}), (f = v.handle) || (f = v.handle = function (e) {
          return typeof ce === G || e && ce.event.triggered === e.type ? t : ce.event.dispatch.apply(f.elem, arguments)
        }, f.elem = e), l = (n = (n || "").match(fe) || [""]).length; l--;) a = je.exec(n[l]) || [], h = m = a[1], g = (a[2] || "").split(".").sort(), h && (u = ce.event.special[h] || {}, h = (i ? u.delegateType : u.bindType) || h, u = ce.event.special[h] || {}, d = ce.extend({
          type: h,
          origType: m,
          data: o,
          handler: r,
          guid: r.guid,
          selector: i,
          needsContext: i && ce.expr.match.needsContext.test(i),
          namespace: g.join(".")
        }, c), (p = s[h]) || (p = s[h] = [], p.delegateCount = 0, u.setup && !1 !== u.setup.call(e, o, g, f) || (e.addEventListener ? e.addEventListener(h, f, !1) : e.attachEvent && e.attachEvent("on" + h, f))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), i ? p.splice(p.delegateCount++, 0, d) : p.push(d), ce.event.global[h] = !0);
        e = null
      }
    },
    remove: function (e, t, n, r, o) {
      var i, a, s, l, c, u, f, d, p, h, g, m = ce.hasData(e) && ce._data(e);
      if (m && (u = m.events)) {
        for (c = (t = (t || "").match(fe) || [""]).length; c--;) if (s = je.exec(t[c]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
          for (f = ce.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = i = d.length; i--;) a = d[i], !o && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(i, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
          l && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || ce.removeEvent(e, p, m.handle), delete u[p])
        } else for (p in u) ce.event.remove(e, p + t[c], n, r, !0);
        ce.isEmptyObject(u) && (delete m.handle, ce._removeData(e, "events"))
      }
    },
    trigger: function (n, r, o, i) {
      var a, s, l, c, u, f, d, p = [o || X], h = se.call(n, "type") ? n.type : n,
        g = se.call(n, "namespace") ? n.namespace.split(".") : [];
      if (l = f = o = o || X, 3 !== o.nodeType && 8 !== o.nodeType && !Re.test(h + ce.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), s = 0 > h.indexOf(":") && "on" + h, n = n[ce.expando] ? n : new ce.Event(h, "object" == typeof n && n), n.isTrigger = i ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = o), r = null == r ? [n] : ce.makeArray(r, [n]), u = ce.event.special[h] || {}, i || !u.trigger || !1 !== u.trigger.apply(o, r))) {
        if (!i && !u.noBubble && !ce.isWindow(o)) {
          for (c = u.delegateType || h, Re.test(c + h) || (l = l.parentNode); l; l = l.parentNode) p.push(l), f = l;
          f === (o.ownerDocument || X) && p.push(f.defaultView || f.parentWindow || e)
        }
        for (d = 0; (l = p[d++]) && !n.isPropagationStopped();) n.type = d > 1 ? c : u.bindType || h, (a = (ce._data(l, "events") || {})[n.type] && ce._data(l, "handle")) && a.apply(l, r), (a = s && l[s]) && ce.acceptData(l) && a.apply && !1 === a.apply(l, r) && n.preventDefault();
        if (n.type = h, !i && !n.isDefaultPrevented() && (!u._default || !1 === u._default.apply(p.pop(), r)) && ce.acceptData(o) && s && o[h] && !ce.isWindow(o)) {
          (f = o[s]) && (o[s] = null), ce.event.triggered = h;
          try {
            o[h]()
          } catch (e) {
          }
          ce.event.triggered = t, f && (o[s] = f)
        }
        return n.result
      }
    },
    dispatch: function (e) {
      e = ce.event.fix(e);
      var n, r, o, i, a, s = [], l = oe.call(arguments), c = (ce._data(this, "events") || {})[e.type] || [],
        u = ce.event.special[e.type] || {};
      if (l[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
        for (s = ce.event.handlers.call(this, e, c), n = 0; (i = s[n++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, a = 0; (o = i.handlers[a++]) && !e.isImmediatePropagationStopped();) (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, (r = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l)) !== t && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, e), e.result
      }
    },
    handlers: function (e, n) {
      var r, o, i, a, s = [], l = n.delegateCount, c = e.target;
      if (l && c.nodeType && (!e.button || "click" !== e.type)) for (; c != this; c = c.parentNode || this) if (1 === c.nodeType && (!0 !== c.disabled || "click" !== e.type)) {
        for (i = [], a = 0; l > a; a++) o = n[a], r = o.selector + " ", i[r] === t && (i[r] = o.needsContext ? ce(r, this).index(c) >= 0 : ce.find(r, this, null, [c]).length), i[r] && i.push(o);
        i.length && s.push({elem: c, handlers: i})
      }
      return n.length > l && s.push({elem: this, handlers: n.slice(l)}), s
    },
    fix: function (e) {
      if (e[ce.expando]) return e;
      var t, n, r, o = e.type, i = e, a = this.fixHooks[o];
      for (a || (this.fixHooks[o] = a = Be.test(o) ? this.mouseHooks : Fe.test(o) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ce.Event(i), t = r.length; t--;) n = r[t], e[n] = i[n];
      return e.target || (e.target = i.srcElement || X), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, i) : e
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "), filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function (e, n) {
        var r, o, i, a = n.button, s = n.fromElement;
        return null == e.pageX && null != n.clientX && (o = e.target.ownerDocument || X, i = o.documentElement, r = o.body, e.pageX = n.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
      }
    },
    special: {
      load: {noBubble: !0}, focus: {
        trigger: function () {
          if (this !== u() && this.focus) try {
            return this.focus(), !1
          } catch (e) {
          }
        }, delegateType: "focusin"
      }, blur: {
        trigger: function () {
          return this === u() && this.blur ? (this.blur(), !1) : t
        }, delegateType: "focusout"
      }, click: {
        trigger: function () {
          return ce.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
        }, _default: function (e) {
          return ce.nodeName(e.target, "a")
        }
      }, beforeunload: {
        postDispatch: function (e) {
          e.result !== t && (e.originalEvent.returnValue = e.result)
        }
      }
    },
    simulate: function (e, t, n, r) {
      var o = ce.extend(new ce.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
      r ? ce.event.trigger(o, null, t) : ce.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
    }
  }, ce.removeEvent = X.removeEventListener ? function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1)
  } : function (e, t, n) {
    var r = "on" + t;
    e.detachEvent && (typeof e[r] === G && (e[r] = null), e.detachEvent(r, n))
  }, ce.Event = function (e, n) {
    return this instanceof ce.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? l : c) : this.type = e, n && ce.extend(this, n), this.timeStamp = e && e.timeStamp || ce.now(), this[ce.expando] = !0, t) : new ce.Event(e, n)
  }, ce.Event.prototype = {
    isDefaultPrevented: c,
    isPropagationStopped: c,
    isImmediatePropagationStopped: c,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
    },
    stopImmediatePropagation: function () {
      this.isImmediatePropagationStopped = l, this.stopPropagation()
    }
  }, ce.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
    ce.event.special[e] = {
      delegateType: t, bindType: t, handle: function (e) {
        var n, r = this, o = e.relatedTarget, i = e.handleObj;
        return (!o || o !== r && !ce.contains(r, o)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
      }
    }
  }), ce.support.submitBubbles || (ce.event.special.submit = {
    setup: function () {
      return !ce.nodeName(this, "form") && (ce.event.add(this, "click._submit keypress._submit", function (e) {
        var n = e.target, r = ce.nodeName(n, "input") || ce.nodeName(n, "button") ? n.form : t;
        r && !ce._data(r, "submitBubbles") && (ce.event.add(r, "submit._submit", function (e) {
          e._submit_bubble = !0
        }), ce._data(r, "submitBubbles", !0))
      }), t)
    }, postDispatch: function (e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ce.event.simulate("submit", this.parentNode, e, !0))
    }, teardown: function () {
      return !ce.nodeName(this, "form") && (ce.event.remove(this, "._submit"), t)
    }
  }), ce.support.changeBubbles || (ce.event.special.change = {
    setup: function () {
      return Le.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ce.event.add(this, "propertychange._change", function (e) {
        "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
      }), ce.event.add(this, "click._change", function (e) {
        this._just_changed && !e.isTrigger && (this._just_changed = !1), ce.event.simulate("change", this, e, !0)
      })), !1) : (ce.event.add(this, "beforeactivate._change", function (e) {
        var t = e.target;
        Le.test(t.nodeName) && !ce._data(t, "changeBubbles") && (ce.event.add(t, "change._change", function (e) {
          !this.parentNode || e.isSimulated || e.isTrigger || ce.event.simulate("change", this.parentNode, e, !0)
        }), ce._data(t, "changeBubbles", !0))
      }), t)
    }, handle: function (e) {
      var n = e.target;
      return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
    }, teardown: function () {
      return ce.event.remove(this, "._change"), !Le.test(this.nodeName)
    }
  }), ce.support.focusinBubbles || ce.each({focus: "focusin", blur: "focusout"}, function (e, t) {
    var n = 0, r = function (e) {
      ce.event.simulate(t, e.target, ce.event.fix(e), !0)
    };
    ce.event.special[t] = {
      setup: function () {
        0 == n++ && X.addEventListener(e, r, !0)
      }, teardown: function () {
        0 == --n && X.removeEventListener(e, r, !0)
      }
    }
  }), ce.fn.extend({
    on: function (e, n, r, o, i) {
      var a, s;
      if ("object" == typeof e) {
        "string" != typeof n && (r = r || n, n = t);
        for (a in e) this.on(a, n, r, e[a], i);
        return this
      }
      if (null == r && null == o ? (o = n, r = n = t) : null == o && ("string" == typeof n ? (o = r, r = t) : (o = r, r = n, n = t)), !1 === o) o = c; else if (!o) return this;
      return 1 === i && (s = o, o = function (e) {
        return ce().off(e), s.apply(this, arguments)
      }, o.guid = s.guid || (s.guid = ce.guid++)), this.each(function () {
        ce.event.add(this, e, o, r, n)
      })
    }, one: function (e, t, n, r) {
      return this.on(e, t, n, r, 1)
    }, off: function (e, n, r) {
      var o, i;
      if (e && e.preventDefault && e.handleObj) return o = e.handleObj, ce(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
      if ("object" == typeof e) {
        for (i in e) this.off(i, n, e[i]);
        return this
      }
      return (!1 === n || "function" == typeof n) && (r = n, n = t), !1 === r && (r = c), this.each(function () {
        ce.event.remove(this, e, r, n)
      })
    }, trigger: function (e, t) {
      return this.each(function () {
        ce.event.trigger(e, t, this)
      })
    }, triggerHandler: function (e, n) {
      var r = this[0];
      return r ? ce.event.trigger(e, n, r, !0) : t
    }
  });
  var qe = /^.[^:#\[\.,]*$/, Ue = /^(?:parents|prev(?:Until|All))/, He = ce.expr.match.needsContext,
    Ve = {children: !0, contents: !0, next: !0, prev: !0};
  ce.fn.extend({
    find: function (e) {
      var t, n = [], r = this, o = r.length;
      if ("string" != typeof e) return this.pushStack(ce(e).filter(function () {
        for (t = 0; o > t; t++) if (ce.contains(r[t], this)) return !0
      }));
      for (t = 0; o > t; t++) ce.find(e, r[t], n);
      return n = this.pushStack(o > 1 ? ce.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
    }, has: function (e) {
      var t, n = ce(e, this), r = n.length;
      return this.filter(function () {
        for (t = 0; r > t; t++) if (ce.contains(this, n[t])) return !0
      })
    }, not: function (e) {
      return this.pushStack(d(this, e || [], !0))
    }, filter: function (e) {
      return this.pushStack(d(this, e || [], !1))
    }, is: function (e) {
      return !!d(this, "string" == typeof e && He.test(e) ? ce(e) : e || [], !1).length
    }, closest: function (e, t) {
      for (var n, r = 0, o = this.length, i = [], a = He.test(e) || "string" != typeof e ? ce(e, t || this.context) : 0; o > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
        n = i.push(n);
        break
      }
      return this.pushStack(i.length > 1 ? ce.unique(i) : i)
    }, index: function (e) {
      return e ? "string" == typeof e ? ce.inArray(this[0], ce(e)) : ce.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (e, t) {
      var n = "string" == typeof e ? ce(e, t) : ce.makeArray(e && e.nodeType ? [e] : e), r = ce.merge(this.get(), n);
      return this.pushStack(ce.unique(r))
    }, addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), ce.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    }, parents: function (e) {
      return ce.dir(e, "parentNode")
    }, parentsUntil: function (e, t, n) {
      return ce.dir(e, "parentNode", n)
    }, next: function (e) {
      return f(e, "nextSibling")
    }, prev: function (e) {
      return f(e, "previousSibling")
    }, nextAll: function (e) {
      return ce.dir(e, "nextSibling")
    }, prevAll: function (e) {
      return ce.dir(e, "previousSibling")
    }, nextUntil: function (e, t, n) {
      return ce.dir(e, "nextSibling", n)
    }, prevUntil: function (e, t, n) {
      return ce.dir(e, "previousSibling", n)
    }, siblings: function (e) {
      return ce.sibling((e.parentNode || {}).firstChild, e)
    }, children: function (e) {
      return ce.sibling(e.firstChild)
    }, contents: function (e) {
      return ce.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ce.merge([], e.childNodes)
    }
  }, function (e, t) {
    ce.fn[e] = function (n, r) {
      var o = ce.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = ce.filter(r, o)), this.length > 1 && (Ve[e] || (o = ce.unique(o)), Ue.test(e) && (o = o.reverse())), this.pushStack(o)
    }
  }), ce.extend({
    filter: function (e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ce.find.matchesSelector(r, e) ? [r] : [] : ce.find.matches(e, ce.grep(t, function (e) {
        return 1 === e.nodeType
      }))
    }, dir: function (e, n, r) {
      for (var o = [], i = e[n]; i && 9 !== i.nodeType && (r === t || 1 !== i.nodeType || !ce(i).is(r));) 1 === i.nodeType && o.push(i), i = i[n];
      return o
    }, sibling: function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    }
  });
  var ze = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    We = / jQuery\d+="(?:null|\d+)"/g, Ge = RegExp("<(?:" + ze + ")[\\s/>]", "i"), Ye = /^\s+/,
    Xe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ke = /<([\w:]+)/, Qe = /<tbody/i,
    Je = /<|&#?\w+;/, Ze = /<(?:script|style|link)/i, et = /^(?:checkbox|radio)$/i,
    tt = /checked\s*(?:[^=]|=\s*.checked.)/i, nt = /^$|\/(?:java|ecma)script/i, rt = /^true\/(.*)/,
    ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, it = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: ce.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }, at = p(X).appendChild(X.createElement("div"));
  it.optgroup = it.option, it.tbody = it.tfoot = it.colgroup = it.caption = it.thead, it.th = it.td, ce.fn.extend({
    text: function (e) {
      return ce.access(this, function (e) {
        return e === t ? ce.text(this) : this.empty().append((this[0] && this[0].ownerDocument || X).createTextNode(e))
      }, null, e, arguments.length)
    }, append: function () {
      return this.domManip(arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || h(this, e).appendChild(e)
      })
    }, prepend: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = h(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    }, before: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    }, after: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    }, remove: function (e, t) {
      for (var n, r = e ? ce.filter(e, this) : this, o = 0; null != (n = r[o]); o++) t || 1 !== n.nodeType || ce.cleanData(x(n)), n.parentNode && (t && ce.contains(n.ownerDocument, n) && v(x(n, "script")), n.parentNode.removeChild(n));
      return this
    }, empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) {
        for (1 === e.nodeType && ce.cleanData(x(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
        e.options && ce.nodeName(e, "select") && (e.options.length = 0)
      }
      return this
    }, clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return ce.clone(this, e, t)
      })
    }, html: function (e) {
      return ce.access(this, function (e) {
        var n = this[0] || {}, r = 0, o = this.length;
        if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(We, "") : t;
        if (!("string" != typeof e || Ze.test(e) || !ce.support.htmlSerialize && Ge.test(e) || !ce.support.leadingWhitespace && Ye.test(e) || it[(Ke.exec(e) || ["", ""])[1].toLowerCase()])) {
          e = e.replace(Xe, "<$1></$2>");
          try {
            for (; o > r; r++) 1 === (n = this[r] || {}).nodeType && (ce.cleanData(x(n, !1)), n.innerHTML = e);
            n = 0
          } catch (e) {
          }
        }
        n && this.empty().append(e)
      }, null, e, arguments.length)
    }, replaceWith: function () {
      var e = ce.map(this, function (e) {
        return [e.nextSibling, e.parentNode]
      }), t = 0;
      return this.domManip(arguments, function (n) {
        var r = e[t++], o = e[t++];
        o && (r && r.parentNode !== o && (r = this.nextSibling), ce(this).remove(), o.insertBefore(n, r))
      }, !0), t ? this : this.remove()
    }, detach: function (e) {
      return this.remove(e, !0)
    }, domManip: function (e, t, n) {
      e = ne.apply([], e);
      var r, o, i, a, s, l, c = 0, u = this.length, f = this, d = u - 1, p = e[0], h = ce.isFunction(p);
      if (h || !(1 >= u || "string" != typeof p || ce.support.checkClone) && tt.test(p)) return this.each(function (r) {
        var o = f.eq(r);
        h && (e[0] = p.call(this, r, o.html())), o.domManip(e, t, n)
      });
      if (u && (l = ce.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
        for (i = (a = ce.map(x(l, "script"), g)).length; u > c; c++) o = l, c !== d && (o = ce.clone(o, !0, !0), i && ce.merge(a, x(o, "script"))), t.call(this[c], o, c);
        if (i) for (s = a[a.length - 1].ownerDocument, ce.map(a, m), c = 0; i > c; c++) o = a[c], nt.test(o.type || "") && !ce._data(o, "globalEval") && ce.contains(s, o) && (o.src ? ce._evalUrl(o.src) : ce.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ot, "")));
        l = r = null
      }
      return this
    }
  }), ce.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    ce.fn[e] = function (e) {
      for (var n, r = 0, o = [], i = ce(e), a = i.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), ce(i[r])[t](n), re.apply(o, n.get());
      return this.pushStack(o)
    }
  }), ce.extend({
    clone: function (e, t, n) {
      var r, o, i, a, s, l = ce.contains(e.ownerDocument, e);
      if (ce.support.html5Clone || ce.isXMLDoc(e) || !Ge.test("<" + e.nodeName + ">") ? i = e.cloneNode(!0) : (at.innerHTML = e.outerHTML, at.removeChild(i = at.firstChild)), !(ce.support.noCloneEvent && ce.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e))) for (r = x(i), s = x(e), a = 0; null != (o = s[a]); ++a) r[a] && y(o, r[a]);
      if (t) if (n) for (s = s || x(e), r = r || x(i), a = 0; null != (o = s[a]); a++) b(o, r[a]); else b(e, i);
      return (r = x(i, "script")).length > 0 && v(r, !l && x(e, "script")), r = s = o = null, i
    }, buildFragment: function (e, t, n, r) {
      for (var o, i, a, s, l, c, u, f = e.length, d = p(t), h = [], g = 0; f > g; g++) if ((i = e[g]) || 0 === i) if ("object" === ce.type(i)) ce.merge(h, i.nodeType ? [i] : i); else if (Je.test(i)) {
        for (s = s || d.appendChild(t.createElement("div")), l = (Ke.exec(i) || ["", ""])[1].toLowerCase(), u = it[l] || it._default, s.innerHTML = u[1] + i.replace(Xe, "<$1></$2>") + u[2], o = u[0]; o--;) s = s.lastChild;
        if (!ce.support.leadingWhitespace && Ye.test(i) && h.push(t.createTextNode(Ye.exec(i)[0])), !ce.support.tbody) for (o = (i = "table" !== l || Qe.test(i) ? "<table>" !== u[1] || Qe.test(i) ? 0 : s : s.firstChild) && i.childNodes.length; o--;) ce.nodeName(c = i.childNodes[o], "tbody") && !c.childNodes.length && i.removeChild(c);
        for (ce.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
        s = d.lastChild
      } else h.push(t.createTextNode(i));
      for (s && d.removeChild(s), ce.support.appendChecked || ce.grep(x(h, "input"), w), g = 0; i = h[g++];) if ((!r || -1 === ce.inArray(i, r)) && (a = ce.contains(i.ownerDocument, i), s = x(d.appendChild(i), "script"), a && v(s), n)) for (o = 0; i = s[o++];) nt.test(i.type || "") && n.push(i);
      return s = null, d
    }, cleanData: function (e, t) {
      for (var n, r, o, i, a = 0, s = ce.expando, l = ce.cache, c = ce.support.deleteExpando, u = ce.event.special; null != (n = e[a]); a++) if ((t || ce.acceptData(n)) && (o = n[s], i = o && l[o])) {
        if (i.events) for (r in i.events) u[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, i.handle);
        l[o] && (delete l[o], c ? delete n[s] : typeof n.removeAttribute !== G ? n.removeAttribute(s) : n[s] = null, ee.push(o))
      }
    }, _evalUrl: function (e) {
      return ce.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
    }
  }), ce.fn.extend({
    wrapAll: function (e) {
      if (ce.isFunction(e)) return this.each(function (t) {
        ce(this).wrapAll(e.call(this, t))
      });
      if (this[0]) {
        var t = ce(e, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
          return e
        }).append(this)
      }
      return this
    }, wrapInner: function (e) {
      return ce.isFunction(e) ? this.each(function (t) {
        ce(this).wrapInner(e.call(this, t))
      }) : this.each(function () {
        var t = ce(this), n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e)
      })
    }, wrap: function (e) {
      var t = ce.isFunction(e);
      return this.each(function (n) {
        ce(this).wrapAll(t ? e.call(this, n) : e)
      })
    }, unwrap: function () {
      return this.parent().each(function () {
        ce.nodeName(this, "body") || ce(this).replaceWith(this.childNodes)
      }).end()
    }
  });
  var st, lt, ct, ut = /alpha\([^)]*\)/i, ft = /opacity\s*=\s*([^)]*)/, dt = /^(top|right|bottom|left)$/,
    pt = /^(none|table(?!-c[ea]).+)/, ht = /^margin/, gt = RegExp("^(" + ue + ")(.*)$", "i"),
    mt = RegExp("^(" + ue + ")(?!px)[a-z%]+$", "i"), vt = RegExp("^([+-])=(" + ue + ")", "i"), bt = {BODY: "block"},
    yt = {position: "absolute", visibility: "hidden", display: "block"}, xt = {letterSpacing: 0, fontWeight: 400},
    wt = ["Top", "Right", "Bottom", "Left"], $t = ["Webkit", "O", "Moz", "ms"];
  ce.fn.extend({
    css: function (e, n) {
      return ce.access(this, function (e, n, r) {
        var o, i, a = {}, s = 0;
        if (ce.isArray(n)) {
          for (i = lt(e), o = n.length; o > s; s++) a[n[s]] = ce.css(e, n[s], !1, i);
          return a
        }
        return r !== t ? ce.style(e, n, r) : ce.css(e, n)
      }, e, n, arguments.length > 1)
    }, show: function () {
      return T(this, !0)
    }, hide: function () {
      return T(this)
    }, toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        k(this) ? ce(this).show() : ce(this).hide()
      })
    }
  }), ce.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = ct(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {float: ce.support.cssFloat ? "cssFloat" : "styleFloat"},
    style: function (e, n, r, o) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, a, s, l = ce.camelCase(n), c = e.style;
        if (n = ce.cssProps[l] || (ce.cssProps[l] = $(c, l)), s = ce.cssHooks[n] || ce.cssHooks[l], r === t) return s && "get" in s && (i = s.get(e, !1, o)) !== t ? i : c[n];
        if ("string" === (a = typeof r) && (i = vt.exec(r)) && (r = (i[1] + 1) * i[2] + parseFloat(ce.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || ce.cssNumber[l] || (r += "px"), ce.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (c[n] = "inherit"), s && "set" in s && (r = s.set(e, r, o)) === t))) try {
          c[n] = r
        } catch (e) {
        }
      }
    },
    css: function (e, n, r, o) {
      var i, a, s, l = ce.camelCase(n);
      return n = ce.cssProps[l] || (ce.cssProps[l] = $(e.style, l)), (s = ce.cssHooks[n] || ce.cssHooks[l]) && "get" in s && (a = s.get(e, !0, r)), a === t && (a = ct(e, n, o)), "normal" === a && n in xt && (a = xt[n]), "" === r || r ? (i = parseFloat(a), !0 === r || ce.isNumeric(i) ? i || 0 : a) : a
    }
  }), e.getComputedStyle ? (lt = function (t) {
    return e.getComputedStyle(t, null)
  }, ct = function (e, n, r) {
    var o, i, a, s = r || lt(e), l = s ? s.getPropertyValue(n) || s[n] : t, c = e.style;
    return s && ("" !== l || ce.contains(e.ownerDocument, e) || (l = ce.style(e, n)), mt.test(l) && ht.test(n) && (o = c.width, i = c.minWidth, a = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = s.width, c.width = o, c.minWidth = i, c.maxWidth = a)), l
  }) : X.documentElement.currentStyle && (lt = function (e) {
    return e.currentStyle
  }, ct = function (e, n, r) {
    var o, i, a, s = r || lt(e), l = s ? s[n] : t, c = e.style;
    return null == l && c && c[n] && (l = c[n]), mt.test(l) && !dt.test(n) && (o = c.left, i = e.runtimeStyle, (a = i && i.left) && (i.left = e.currentStyle.left), c.left = "fontSize" === n ? "1em" : l, l = c.pixelLeft + "px", c.left = o, a && (i.left = a)), "" === l ? "auto" : l
  }), ce.each(["height", "width"], function (e, n) {
    ce.cssHooks[n] = {
      get: function (e, r, o) {
        return r ? 0 === e.offsetWidth && pt.test(ce.css(e, "display")) ? ce.swap(e, yt, function () {
          return E(e, n, o)
        }) : E(e, n, o) : t
      }, set: function (e, t, r) {
        var o = r && lt(e);
        return S(0, t, r ? C(e, n, r, ce.support.boxSizing && "border-box" === ce.css(e, "boxSizing", !1, o), o) : 0)
      }
    }
  }), ce.support.opacity || (ce.cssHooks.opacity = {
    get: function (e, t) {
      return ft.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
    }, set: function (e, t) {
      var n = e.style, r = e.currentStyle, o = ce.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
        i = r && r.filter || n.filter || "";
      n.zoom = 1, (t >= 1 || "" === t) && "" === ce.trim(i.replace(ut, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = ut.test(i) ? i.replace(ut, o) : i + " " + o)
    }
  }), ce(function () {
    ce.support.reliableMarginRight || (ce.cssHooks.marginRight = {
      get: function (e, n) {
        return n ? ce.swap(e, {display: "inline-block"}, ct, [e, "marginRight"]) : t
      }
    }), !ce.support.pixelPosition && ce.fn.position && ce.each(["top", "left"], function (e, n) {
      ce.cssHooks[n] = {
        get: function (e, r) {
          return r ? (r = ct(e, n), mt.test(r) ? ce(e).position()[n] + "px" : r) : t
        }
      }
    })
  }), ce.expr && ce.expr.filters && (ce.expr.filters.hidden = function (e) {
    return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !ce.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ce.css(e, "display"))
  }, ce.expr.filters.visible = function (e) {
    return !ce.expr.filters.hidden(e)
  }), ce.each({margin: "", padding: "", border: "Width"}, function (e, t) {
    ce.cssHooks[e + t] = {
      expand: function (n) {
        for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) o[e + wt[r] + t] = i[r] || i[r - 2] || i[0];
        return o
      }
    }, ht.test(e) || (ce.cssHooks[e + t].set = S)
  });
  var kt = /%20/g, Tt = /\[\]$/, St = /\r?\n/g, Ct = /^(?:submit|button|image|reset|file)$/i,
    Et = /^(?:input|select|textarea|keygen)/i;
  ce.fn.extend({
    serialize: function () {
      return ce.param(this.serializeArray())
    }, serializeArray: function () {
      return this.map(function () {
        var e = ce.prop(this, "elements");
        return e ? ce.makeArray(e) : this
      }).filter(function () {
        var e = this.type;
        return this.name && !ce(this).is(":disabled") && Et.test(this.nodeName) && !Ct.test(e) && (this.checked || !et.test(e))
      }).map(function (e, t) {
        var n = ce(this).val();
        return null == n ? null : ce.isArray(n) ? ce.map(n, function (e) {
          return {name: t.name, value: e.replace(St, "\r\n")}
        }) : {name: t.name, value: n.replace(St, "\r\n")}
      }).get()
    }
  }), ce.param = function (e, n) {
    var r, o = [], i = function (e, t) {
      t = ce.isFunction(t) ? t() : null == t ? "" : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
    };
    if (n === t && (n = ce.ajaxSettings && ce.ajaxSettings.traditional), ce.isArray(e) || e.jquery && !ce.isPlainObject(e)) ce.each(e, function () {
      i(this.name, this.value)
    }); else for (r in e) P(r, e[r], n, i);
    return o.join("&").replace(kt, "+")
  }, ce.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
    ce.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }), ce.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }, bind: function (e, t, n) {
      return this.on(e, null, t, n)
    }, unbind: function (e, t) {
      return this.off(e, null, t)
    }, delegate: function (e, t, n, r) {
      return this.on(t, e, n, r)
    }, undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  });
  var At, Nt, Pt = ce.now(), Ot = /\?/, Dt = /#.*$/, It = /([?&])_=[^&]*/, Mt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    _t = /^(?:GET|HEAD)$/, Lt = /^\/\//, Ft = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Bt = ce.fn.load, Rt = {},
    jt = {}, qt = "*/".concat("*");
  try {
    Nt = Y.href
  } catch (e) {
    (Nt = X.createElement("a")).href = "", Nt = Nt.href
  }
  At = Ft.exec(Nt.toLowerCase()) || [], ce.fn.load = function (e, n, r) {
    if ("string" != typeof e && Bt) return Bt.apply(this, arguments);
    var o, i, a, s = this, l = e.indexOf(" ");
    return l >= 0 && (o = e.slice(l, e.length), e = e.slice(0, l)), ce.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && ce.ajax({
      url: e,
      type: a,
      dataType: "html",
      data: n
    }).done(function (e) {
      i = arguments, s.html(o ? ce("<div>").append(ce.parseHTML(e)).find(o) : e)
    }).complete(r && function (e, t) {
      s.each(r, i || [e.responseText, t, e])
    }), this
  }, ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    ce.fn[t] = function (e) {
      return this.on(t, e)
    }
  }), ce.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Nt,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(At[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": qt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {xml: /xml/, html: /html/, json: /json/},
      responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
      converters: {"* text": String, "text html": !0, "text json": ce.parseJSON, "text xml": ce.parseXML},
      flatOptions: {url: !0, context: !0}
    },
    ajaxSetup: function (e, t) {
      return t ? I(I(e, ce.ajaxSettings), t) : I(ce.ajaxSettings, e)
    },
    ajaxPrefilter: O(Rt),
    ajaxTransport: O(jt),
    ajax: function (e, n) {
      function r(e, n, r, o) {
        var i, f, b, y, w, k = n;
        2 !== x && (x = 2, l && clearTimeout(l), u = t, s = o || "", $.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, r && (y = M(d, $, r)), y = _(d, y, $, i), i ? (d.ifModified && ((w = $.getResponseHeader("Last-Modified")) && (ce.lastModified[a] = w), (w = $.getResponseHeader("etag")) && (ce.etag[a] = w)), 204 === e || "HEAD" === d.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = y.state, f = y.data, b = y.error, i = !b)) : (b = k, (e || !k) && (k = "error", 0 > e && (e = 0))), $.status = e, $.statusText = (n || k) + "", i ? g.resolveWith(p, [f, k, $]) : g.rejectWith(p, [$, k, b]), $.statusCode(v), v = t, c && h.trigger(i ? "ajaxSuccess" : "ajaxError", [$, d, i ? f : b]), m.fireWith(p, [$, k]), c && (h.trigger("ajaxComplete", [$, d]), --ce.active || ce.event.trigger("ajaxStop")))
      }

      "object" == typeof e && (n = e, e = t), n = n || {};
      var o, i, a, s, l, c, u, f, d = ce.ajaxSetup({}, n), p = d.context || d,
        h = d.context && (p.nodeType || p.jquery) ? ce(p) : ce.event, g = ce.Deferred(),
        m = ce.Callbacks("once memory"), v = d.statusCode || {}, b = {}, y = {}, x = 0, w = "canceled", $ = {
          readyState: 0, getResponseHeader: function (e) {
            var t;
            if (2 === x) {
              if (!f) for (f = {}; t = Mt.exec(s);) f[t[1].toLowerCase()] = t[2];
              t = f[e.toLowerCase()]
            }
            return null == t ? null : t
          }, getAllResponseHeaders: function () {
            return 2 === x ? s : null
          }, setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return x || (e = y[n] = y[n] || e, b[e] = t), this
          }, overrideMimeType: function (e) {
            return x || (d.mimeType = e), this
          }, statusCode: function (e) {
            var t;
            if (e) if (2 > x) for (t in e) v[t] = [v[t], e[t]]; else $.always(e[$.status]);
            return this
          }, abort: function (e) {
            var t = e || w;
            return u && u.abort(t), r(0, t), this
          }
        };
      if (g.promise($).complete = m.add, $.success = $.done, $.error = $.fail, d.url = ((e || d.url || Nt) + "").replace(Dt, "").replace(Lt, At[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = ce.trim(d.dataType || "*").toLowerCase().match(fe) || [""], null == d.crossDomain && (o = Ft.exec(d.url.toLowerCase()), d.crossDomain = !(!o || o[1] === At[1] && o[2] === At[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (At[3] || ("http:" === At[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ce.param(d.data, d.traditional)), D(Rt, d, n, $), 2 === x) return $;
      (c = d.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !_t.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (Ot.test(a) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = It.test(a) ? a.replace(It, "$1_=" + Pt++) : a + (Ot.test(a) ? "&" : "?") + "_=" + Pt++)), d.ifModified && (ce.lastModified[a] && $.setRequestHeader("If-Modified-Since", ce.lastModified[a]), ce.etag[a] && $.setRequestHeader("If-None-Match", ce.etag[a])), (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && $.setRequestHeader("Content-Type", d.contentType), $.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : d.accepts["*"]);
      for (i in d.headers) $.setRequestHeader(i, d.headers[i]);
      if (d.beforeSend && (!1 === d.beforeSend.call(p, $, d) || 2 === x)) return $.abort();
      w = "abort";
      for (i in{success: 1, error: 1, complete: 1}) $[i](d[i]);
      if (u = D(jt, d, n, $)) {
        $.readyState = 1, c && h.trigger("ajaxSend", [$, d]), d.async && d.timeout > 0 && (l = setTimeout(function () {
          $.abort("timeout")
        }, d.timeout));
        try {
          x = 1, u.send(b, r)
        } catch (e) {
          if (!(2 > x)) throw e;
          r(-1, e)
        }
      } else r(-1, "No Transport");
      return $
    },
    getJSON: function (e, t, n) {
      return ce.get(e, t, n, "json")
    },
    getScript: function (e, n) {
      return ce.get(e, t, n, "script")
    }
  }), ce.each(["get", "post"], function (e, n) {
    ce[n] = function (e, r, o, i) {
      return ce.isFunction(r) && (i = i || o, o = r, r = t), ce.ajax({
        url: e,
        type: n,
        dataType: i,
        data: r,
        success: o
      })
    }
  }), ce.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
    contents: {script: /(?:java|ecma)script/},
    converters: {
      "text script": function (e) {
        return ce.globalEval(e), e
      }
    }
  }), ce.ajaxPrefilter("script", function (e) {
    e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
  }), ce.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var n, r = X.head || ce("head")[0] || X.documentElement;
      return {
        send: function (t, o) {
          (n = X.createElement("script")).async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || o(200, "success"))
          }, r.insertBefore(n, r.firstChild)
        }, abort: function () {
          n && n.onload(t, !0)
        }
      }
    }
  });
  var Ut = [], Ht = /(=)\?(?=&|$)|\?\?/;
  ce.ajaxSetup({
    jsonp: "callback", jsonpCallback: function () {
      var e = Ut.pop() || ce.expando + "_" + Pt++;
      return this[e] = !0, e
    }
  }), ce.ajaxPrefilter("json jsonp", function (n, r, o) {
    var i, a, s,
      l = !1 !== n.jsonp && (Ht.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Ht.test(n.data) && "data");
    return l || "jsonp" === n.dataTypes[0] ? (i = n.jsonpCallback = ce.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Ht, "$1" + i) : !1 !== n.jsonp && (n.url += (Ot.test(n.url) ? "&" : "?") + n.jsonp + "=" + i), n.converters["script json"] = function () {
      return s || ce.error(i + " was not called"), s[0]
    }, n.dataTypes[0] = "json", a = e[i], e[i] = function () {
      s = arguments
    }, o.always(function () {
      e[i] = a, n[i] && (n.jsonpCallback = r.jsonpCallback, Ut.push(i)), s && ce.isFunction(a) && a(s[0]), s = a = t
    }), "script") : t
  });
  var Vt, zt, Wt = 0, Gt = e.ActiveXObject && function () {
    var e;
    for (e in Vt) Vt[e](t, !0)
  };
  ce.ajaxSettings.xhr = e.ActiveXObject ? function () {
    return !this.isLocal && L() || F()
  } : L, zt = ce.ajaxSettings.xhr(), ce.support.cors = !!zt && "withCredentials" in zt, (zt = ce.support.ajax = !!zt) && ce.ajaxTransport(function (n) {
    if (!n.crossDomain || ce.support.cors) {
      var r;
      return {
        send: function (o, i) {
          var a, s, l = n.xhr();
          if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s];
          n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
          try {
            for (s in o) l.setRequestHeader(s, o[s])
          } catch (e) {
          }
          l.send(n.hasContent && n.data || null), r = function (e, o) {
            var s, c, u, f;
            try {
              if (r && (o || 4 === l.readyState)) if (r = t, a && (l.onreadystatechange = ce.noop, Gt && delete Vt[a]), o) 4 !== l.readyState && l.abort(); else {
                f = {}, s = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (f.text = l.responseText);
                try {
                  u = l.statusText
                } catch (e) {
                  u = ""
                }
                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
              }
            } catch (e) {
              o || i(-1, e)
            }
            f && i(s, u, f, c)
          }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wt, Gt && (Vt || (Vt = {}, ce(e).unload(Gt)), Vt[a] = r), l.onreadystatechange = r) : r()
        }, abort: function () {
          r && r(t, !0)
        }
      }
    }
  });
  var Yt, Xt, Kt = /^(?:toggle|show|hide)$/, Qt = RegExp("^(?:([+-])=|)(" + ue + ")([a-z%]*)$", "i"),
    Jt = /queueHooks$/, Zt = [function (e, t, n) {
      var r, o, i, a, s, l, c = this, u = {}, f = e.style, d = e.nodeType && k(e), p = ce._data(e, "fxshow");
      n.queue || (null == (s = ce._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
        s.unqueued || l()
      }), s.unqueued++, c.always(function () {
        c.always(function () {
          s.unqueued--, ce.queue(e, "fx").length || s.empty.fire()
        })
      })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ce.css(e, "display") && "none" === ce.css(e, "float") && (ce.support.inlineBlockNeedsLayout && "inline" !== A(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ce.support.shrinkWrapBlocks || c.always(function () {
        f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
      }));
      for (r in t) if (o = t[r], Kt.exec(o)) {
        if (delete t[r], i = i || "toggle" === o, o === (d ? "hide" : "show")) continue;
        u[r] = p && p[r] || ce.style(e, r)
      }
      if (!ce.isEmptyObject(u)) {
        p ? "hidden" in p && (d = p.hidden) : p = ce._data(e, "fxshow", {}), i && (p.hidden = !d), d ? ce(e).show() : c.done(function () {
          ce(e).hide()
        }), c.done(function () {
          var t;
          ce._removeData(e, "fxshow");
          for (t in u) ce.style(e, t, u[t])
        });
        for (r in u) a = R(d ? p[r] : 0, r, c), r in p || (p[r] = a.start, d && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
      }
    }], en = {
      "*": [function (e, t) {
        var n = this.createTween(e, t), r = n.cur(), o = Qt.exec(t), i = o && o[3] || (ce.cssNumber[e] ? "" : "px"),
          a = (ce.cssNumber[e] || "px" !== i && +r) && Qt.exec(ce.css(n.elem, e)), s = 1, l = 20;
        if (a && a[3] !== i) {
          i = i || a[3], o = o || [], a = +r || 1;
          do {
            s = s || ".5", a /= s, ce.style(n.elem, e, a + i)
          } while (s !== (s = n.cur() / r) && 1 !== s && --l)
        }
        return o && (a = n.start = +a || +r || 0, n.unit = i, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
      }]
    };
  ce.Animation = ce.extend(j, {
    tweener: function (e, t) {
      ce.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
      for (var n, r = 0, o = e.length; o > r; r++) n = e[r], en[n] = en[n] || [], en[n].unshift(t)
    }, prefilter: function (e, t) {
      t ? Zt.unshift(e) : Zt.push(e)
    }
  }), ce.Tween = U, U.prototype = {
    constructor: U, init: function (e, t, n, r, o, i) {
      this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (ce.cssNumber[n] ? "" : "px")
    }, cur: function () {
      var e = U.propHooks[this.prop];
      return e && e.get ? e.get(this) : U.propHooks._default.get(this)
    }, run: function (e) {
      var t, n = U.propHooks[this.prop];
      return this.pos = t = this.options.duration ? ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : U.propHooks._default.set(this), this
    }
  }, U.prototype.init.prototype = U.prototype, U.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ce.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
      }, set: function (e) {
        ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ce.cssProps[e.prop]] || ce.cssHooks[e.prop]) ? ce.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
      }
    }
  }, U.propHooks.scrollTop = U.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, ce.each(["toggle", "show", "hide"], function (e, t) {
    var n = ce.fn[t];
    ce.fn[t] = function (e, r, o) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(H(t, !0), e, r, o)
    }
  }), ce.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(k).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
    }, animate: function (e, t, n, r) {
      var o = ce.isEmptyObject(e), i = ce.speed(t, n, r), a = function () {
        var t = j(this, ce.extend({}, e), i);
        (o || ce._data(this, "finish")) && t.stop(!0)
      };
      return a.finish = a, o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
    }, stop: function (e, n, r) {
      var o = function (e) {
        var t = e.stop;
        delete e.stop, t(r)
      };
      return "string" != typeof e && (r = n, n = e, e = t), n && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0, n = null != e && e + "queueHooks", i = ce.timers, a = ce._data(this);
        if (n) a[n] && a[n].stop && o(a[n]); else for (n in a) a[n] && a[n].stop && Jt.test(n) && o(a[n]);
        for (n = i.length; n--;) i[n].elem !== this || null != e && i[n].queue !== e || (i[n].anim.stop(r), t = !1, i.splice(n, 1));
        (t || !r) && ce.dequeue(this, e)
      })
    }, finish: function (e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t, n = ce._data(this), r = n[e + "queue"], o = n[e + "queueHooks"], i = ce.timers, a = r ? r.length : 0;
        for (n.finish = !0, ce.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
        for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish
      })
    }
  }), ce.each({
    slideDown: H("show"),
    slideUp: H("hide"),
    slideToggle: H("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function (e, t) {
    ce.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r)
    }
  }), ce.speed = function (e, t, n) {
    var r = e && "object" == typeof e ? ce.extend({}, e) : {
      complete: n || !n && t || ce.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !ce.isFunction(t) && t
    };
    return r.duration = ce.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ce.fx.speeds ? ce.fx.speeds[r.duration] : ce.fx.speeds._default, (null == r.queue || !0 === r.queue) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      ce.isFunction(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue)
    }, r
  }, ce.easing = {
    linear: function (e) {
      return e
    }, swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2
    }
  }, ce.timers = [], ce.fx = U.prototype.init, ce.fx.tick = function () {
    var e, n = ce.timers, r = 0;
    for (Yt = ce.now(); n.length > r; r++) (e = n[r])() || n[r] !== e || n.splice(r--, 1);
    n.length || ce.fx.stop(), Yt = t
  }, ce.fx.timer = function (e) {
    e() && ce.timers.push(e) && ce.fx.start()
  }, ce.fx.interval = 13, ce.fx.start = function () {
    Xt || (Xt = setInterval(ce.fx.tick, ce.fx.interval))
  }, ce.fx.stop = function () {
    clearInterval(Xt), Xt = null
  }, ce.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, ce.fx.step = {}, ce.expr && ce.expr.filters && (ce.expr.filters.animated = function (e) {
    return ce.grep(ce.timers, function (t) {
      return e === t.elem
    }).length
  }), ce.fn.offset = function (e) {
    if (arguments.length) return e === t ? this : this.each(function (t) {
      ce.offset.setOffset(this, e, t)
    });
    var n, r, o = {top: 0, left: 0}, i = this[0], a = i && i.ownerDocument;
    return a ? (n = a.documentElement, ce.contains(n, i) ? (typeof i.getBoundingClientRect !== G && (o = i.getBoundingClientRect()), r = V(a), {
      top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
      left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
    }) : o) : void 0
  }, ce.offset = {
    setOffset: function (e, t, n) {
      var r = ce.css(e, "position");
      "static" === r && (e.style.position = "relative");
      var o, i, a = ce(e), s = a.offset(), l = ce.css(e, "top"), c = ce.css(e, "left"), u = {}, f = {};
      ("absolute" === r || "fixed" === r) && ce.inArray("auto", [l, c]) > -1 ? (f = a.position(), o = f.top, i = f.left) : (o = parseFloat(l) || 0, i = parseFloat(c) || 0), ce.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (u.top = t.top - s.top + o), null != t.left && (u.left = t.left - s.left + i), "using" in t ? t.using.call(e, u) : a.css(u)
    }
  }, ce.fn.extend({
    position: function () {
      if (this[0]) {
        var e, t, n = {top: 0, left: 0}, r = this[0];
        return "fixed" === ce.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ce.nodeName(e[0], "html") || (n = e.offset()), n.top += ce.css(e[0], "borderTopWidth", !0), n.left += ce.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - n.top - ce.css(r, "marginTop", !0),
          left: t.left - n.left - ce.css(r, "marginLeft", !0)
        }
      }
    }, offsetParent: function () {
      return this.map(function () {
        for (var e = this.offsetParent || K; e && !ce.nodeName(e, "html") && "static" === ce.css(e, "position");) e = e.offsetParent;
        return e || K
      })
    }
  }), ce.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
    var r = /Y/.test(n);
    ce.fn[e] = function (o) {
      return ce.access(this, function (e, o, i) {
        var a = V(e);
        return i === t ? a ? n in a ? a[n] : a.document.documentElement[o] : e[o] : (a ? a.scrollTo(r ? ce(a).scrollLeft() : i, r ? i : ce(a).scrollTop()) : e[o] = i, t)
      }, e, o, arguments.length, null)
    }
  }), ce.each({Height: "height", Width: "width"}, function (e, n) {
    ce.each({padding: "inner" + e, content: n, "": "outer" + e}, function (r, o) {
      ce.fn[o] = function (o, i) {
        var a = arguments.length && (r || "boolean" != typeof o), s = r || (!0 === o || !0 === i ? "margin" : "border");
        return ce.access(this, function (n, r, o) {
          var i;
          return ce.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (i = n.documentElement, Math.max(n.body["scroll" + e], i["scroll" + e], n.body["offset" + e], i["offset" + e], i["client" + e])) : o === t ? ce.css(n, r, s) : ce.style(n, r, o, s)
        }, n, a ? o : t, a, null)
      }
    })
  }), ce.fn.size = function () {
    return this.length
  }, ce.fn.andSelf = ce.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ce : (e.jQuery = e.$ = ce, "function" == typeof define && define.amd && define("jquery", [], function () {
    return ce
  }))
}(window), function (e) {
  "use strict";

  function t() {
    function e(r) {
      var o = this;
      return o instanceof e ? (r instanceof e ? (o.s = r.s, o.e = r.e, o.c = r.c.slice()) : n(o, r), void(o.constructor = e)) : r === m ? t() : new e(r)
    }

    return e.prototype = g, e.DP = a, e.RM = s, e.NE = c, e.PE = u, e.version = "5.0.2", e
  }

  function n(e, t) {
    var n, r, o;
    if (0 === t && 0 > 1 / t) t = "-0"; else if (!v.test(t += "")) throw Error(d + "number");
    for (e.s = "-" == t.charAt(0) ? (t = t.slice(1), -1) : 1, (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (0 > n && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : 0 > n && (n = t.length), o = t.length, r = 0; o > r && "0" == t.charAt(r);) ++r;
    if (r == o) e.c = [e.e = 0]; else {
      for (; o > 0 && "0" == t.charAt(--o);) ;
      for (e.e = n - r - 1, e.c = [], n = 0; o >= r;) e.c[n++] = +t.charAt(r++)
    }
    return e
  }

  function r(e, t, n, r) {
    var o = e.c, i = e.e + t + 1;
    if (1 === n) r = o[i] >= 5; else if (2 === n) r = o[i] > 5 || 5 == o[i] && (r || 0 > i || o[i + 1] !== m || 1 & o[i - 1]); else if (3 === n) r = r || o[i] !== m || 0 > i; else if (r = !1, 0 !== n) throw Error(d + "rounding mode");
    if (1 > i || !o[0]) o.length = 1, r ? (e.e = -t, o[0] = 1) : o[0] = e.e = 0; else {
      if (o.length = i--, r) for (; ++o[i] > 9;) o[i] = 0, i-- || (++e.e, o.unshift(1));
      for (i = o.length; !o[--i];) o.pop()
    }
    return e
  }

  function o(e, t, n, o) {
    var i, a, s = e.constructor, c = !e.c[0];
    if (n !== m) {
      if (n !== ~~n || (3 == t) > n || n > l) throw Error(3 == t ? d + "precision" : p);
      for (n = o - (e = new s(e)).e, e.c.length > ++o && r(e, n, s.RM), 2 == t && (o = e.e + n + 1); e.c.length < o;) e.c.push(0)
    }
    if (i = e.e, a = e.c.join(""), n = a.length, 2 != t && (1 == t || 3 == t && i >= o || i <= s.NE || i >= s.PE)) a = a.charAt(0) + (n > 1 ? "." + a.slice(1) : "") + (0 > i ? "e" : "e+") + i; else if (0 > i) {
      for (; ++i;) a = "0" + a;
      a = "0." + a
    } else if (i > 0) if (++i > n) for (i -= n; i--;) a += "0"; else n > i && (a = a.slice(0, i) + "." + a.slice(i)); else n > 1 && (a = a.charAt(0) + "." + a.slice(1));
    return e.s < 0 && (!c || 4 == t) ? "-" + a : a
  }

  var i, a = 20, s = 1, l = 1e6, c = -7, u = 21, f = "[big.js] ", d = f + "Invalid ", p = d + "decimal places",
    h = f + "Division by zero", g = {}, m = void 0, v = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
  g.abs = function () {
    var e = new this.constructor(this);
    return e.s = 1, e
  }, g.cmp = function (e) {
    var t, n = this, r = n.c, o = (e = new n.constructor(e)).c, i = n.s, a = e.s, s = n.e, l = e.e;
    if (!r[0] || !o[0]) return r[0] ? i : o[0] ? -a : 0;
    if (i != a) return i;
    if (t = 0 > i, s != l) return s > l ^ t ? 1 : -1;
    for (a = (s = r.length) < (l = o.length) ? s : l, i = -1; ++i < a;) if (r[i] != o[i]) return r[i] > o[i] ^ t ? 1 : -1;
    return s == l ? 0 : s > l ^ t ? 1 : -1
  }, g.div = function (e) {
    var t = this, n = t.constructor, o = t.c, i = (e = new n(e)).c, a = t.s == e.s ? 1 : -1, s = n.DP;
    if (s !== ~~s || 0 > s || s > l) throw Error(p);
    if (!i[0]) throw Error(h);
    if (!o[0]) return new n(0 * a);
    var c, u, f, d, g, v = i.slice(), b = c = i.length, y = o.length, x = o.slice(0, c), w = x.length, $ = e,
      k = $.c = [], T = 0, S = s + ($.e = t.e - e.e) + 1;
    for ($.s = a, a = 0 > S ? 0 : S, v.unshift(0); w++ < c;) x.push(0);
    do {
      for (f = 0; 10 > f; f++) {
        if (c != (w = x.length)) d = c > w ? 1 : -1; else for (g = -1, d = 0; ++g < c;) if (i[g] != x[g]) {
          d = i[g] > x[g] ? 1 : -1;
          break
        }
        if (!(0 > d)) break;
        for (u = w == c ? i : v; w;) {
          if (x[--w] < u[w]) {
            for (g = w; g && !x[--g];) x[g] = 9;
            --x[g], x[w] += 10
          }
          x[w] -= u[w]
        }
        for (; !x[0];) x.shift()
      }
      k[T++] = d ? f : ++f, x[0] && d ? x[w] = o[b] || 0 : x = [o[b]]
    } while ((b++ < y || x[0] !== m) && a--);
    return k[0] || 1 == T || (k.shift(), $.e--), T > S && r($, s, n.RM, x[0] !== m), $
  }, g.eq = function (e) {
    return !this.cmp(e)
  }, g.gt = function (e) {
    return this.cmp(e) > 0
  }, g.gte = function (e) {
    return this.cmp(e) > -1
  }, g.lt = function (e) {
    return this.cmp(e) < 0
  }, g.lte = function (e) {
    return this.cmp(e) < 1
  }, g.minus = g.sub = function (e) {
    var t, n, r, o, i = this, a = i.constructor, s = i.s, l = (e = new a(e)).s;
    if (s != l) return e.s = -l, i.plus(e);
    var c = i.c.slice(), u = i.e, f = e.c, d = e.e;
    if (!c[0] || !f[0]) return f[0] ? (e.s = -l, e) : new a(c[0] ? i : 0);
    if (s = u - d) {
      for ((o = 0 > s) ? (s = -s, r = c) : (d = u, r = f), r.reverse(), l = s; l--;) r.push(0);
      r.reverse()
    } else for (n = ((o = c.length < f.length) ? c : f).length, s = l = 0; n > l; l++) if (c[l] != f[l]) {
      o = c[l] < f[l];
      break
    }
    if (o && (r = c, c = f, f = r, e.s = -e.s), (l = (n = f.length) - (t = c.length)) > 0) for (; l--;) c[t++] = 0;
    for (l = t; n > s;) {
      if (c[--n] < f[n]) {
        for (t = n; t && !c[--t];) c[t] = 9;
        --c[t], c[n] += 10
      }
      c[n] -= f[n]
    }
    for (; 0 === c[--l];) c.pop();
    for (; 0 === c[0];) c.shift(), --d;
    return c[0] || (e.s = 1, c = [d = 0]), e.c = c, e.e = d, e
  }, g.mod = function (e) {
    var t, n = this, r = n.constructor, o = n.s, i = (e = new r(e)).s;
    if (!e.c[0]) throw Error(h);
    return n.s = e.s = 1, t = 1 == e.cmp(n), n.s = o, e.s = i, t ? new r(n) : (o = r.DP, i = r.RM, r.DP = r.RM = 0, n = n.div(e), r.DP = o, r.RM = i, this.minus(n.times(e)))
  }, g.plus = g.add = function (e) {
    var t, n = this, r = n.constructor, o = n.s, i = (e = new r(e)).s;
    if (o != i) return e.s = -i, n.minus(e);
    var a = n.e, s = n.c, l = e.e, c = e.c;
    if (!s[0] || !c[0]) return c[0] ? e : new r(s[0] ? n : 0 * o);
    if (s = s.slice(), o = a - l) {
      for (o > 0 ? (l = a, t = c) : (o = -o, t = s), t.reverse(); o--;) t.push(0);
      t.reverse()
    }
    for (s.length - c.length < 0 && (t = c, c = s, s = t), o = c.length, i = 0; o; s[o] %= 10) i = (s[--o] = s[o] + c[o] + i) / 10 | 0;
    for (i && (s.unshift(i), ++l), o = s.length; 0 === s[--o];) s.pop();
    return e.c = s, e.e = l, e
  }, g.pow = function (e) {
    var t = this, n = new t.constructor(1), r = n, o = 0 > e;
    if (e !== ~~e || -1e6 > e || e > 1e6) throw Error(d + "exponent");
    for (o && (e = -e); 1 & e && (r = r.times(t)), e >>= 1;) t = t.times(t);
    return o ? n.div(r) : r
  }, g.round = function (e, t) {
    var n = this.constructor;
    if (e === m) e = 0; else if (e !== ~~e || 0 > e || e > l) throw Error(p);
    return r(new n(this), e, t === m ? n.RM : t)
  }, g.sqrt = function () {
    var e, t, n, o = this, i = o.constructor, a = o.s, s = o.e, l = new i(.5);
    if (!o.c[0]) return new i(o);
    if (0 > a) throw Error(f + "No square root");
    0 === (a = Math.sqrt(o.toString())) || a === 1 / 0 ? ((t = o.c.join("")).length + s & 1 || (t += "0"), e = new i(Math.sqrt(t).toString()), e.e = ((s + 1) / 2 | 0) - (0 > s || 1 & s)) : e = new i(a.toString()), s = e.e + (i.DP += 4);
    do {
      n = e, e = l.times(n.plus(o.div(n)))
    } while (n.c.slice(0, s).join("") !== e.c.slice(0, s).join(""));
    return r(e, i.DP -= 4, i.RM)
  }, g.times = g.mul = function (e) {
    var t, n = this, r = n.constructor, o = n.c, i = (e = new r(e)).c, a = o.length, s = i.length, l = n.e, c = e.e;
    if (e.s = n.s == e.s ? 1 : -1, !o[0] || !i[0]) return new r(0 * e.s);
    for (e.e = l + c, s > a && (t = o, o = i, i = t, c = a, a = s, s = c), t = new Array(c = a + s); c--;) t[c] = 0;
    for (l = s; l--;) {
      for (s = 0, c = a + l; c > l;) s = t[c] + i[l] * o[c - l - 1] + s, t[c--] = s % 10, s = s / 10 | 0;
      t[c] = (t[c] + s) % 10
    }
    for (s ? ++e.e : t.shift(), l = t.length; !t[--l];) t.pop();
    return e.c = t, e
  }, g.toExponential = function (e) {
    return o(this, 1, e, e)
  }, g.toFixed = function (e) {
    return o(this, 2, e, this.e + e)
  }, g.toPrecision = function (e) {
    return o(this, 3, e, e - 1)
  }, g.toString = function () {
    return o(this)
  }, g.valueOf = g.toJSON = function () {
    return o(this, 4)
  }, (i = t()).default = i.Big = i, "function" == typeof define && define.amd ? define(function () {
    return i
  }) : "undefined" != typeof module && module.exports ? module.exports = i : e.Big = i
}(this), function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function (e) {
  function t(t) {
    var o, i = t || window.event, a = [].slice.call(arguments, 1), s = 0, l = 0, c = 0, u = 0, f = 0;
    return t = e.event.fix(i), t.type = "mousewheel", i.wheelDelta && (s = i.wheelDelta), i.detail && (s = -1 * i.detail), i.deltaY && (s = c = -1 * i.deltaY), i.deltaX && (s = -1 * (l = i.deltaX)), void 0 !== i.wheelDeltaY && (c = i.wheelDeltaY), void 0 !== i.wheelDeltaX && (l = -1 * i.wheelDeltaX), u = Math.abs(s), (!n || u < n) && (n = u), f = Math.max(Math.abs(c), Math.abs(l)), (!r || f < r) && (r = f), o = s > 0 ? "floor" : "ceil", s = Math[o](s / n), l = Math[o](l / r), c = Math[o](c / r), a.unshift(t, s, l, c), (e.event.dispatch || e.event.handle).apply(this, a)
  }

  var n, r, o = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
    i = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"];
  if (e.event.fixHooks) for (var a = o.length; a;) e.event.fixHooks[o[--a]] = e.event.mouseHooks;
  e.event.special.mousewheel = {
    setup: function () {
      if (this.addEventListener) for (var e = i.length; e;) this.addEventListener(i[--e], t, !1); else this.onmousewheel = t
    }, teardown: function () {
      if (this.removeEventListener) for (var e = i.length; e;) this.removeEventListener(i[--e], t, !1); else this.onmousewheel = null
    }
  }, e.fn.extend({
    mousewheel: function (e) {
      return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
    }, unmousewheel: function (e) {
      return this.unbind("mousewheel", e)
    }
  })
}), function (e) {
  var t = function () {
    var t = 65, n = {
      eventName: "click", onShow: function () {
      }, onBeforeShow: function () {
      }, onHide: function () {
      }, onChange: function () {
      }, onSubmit: function () {
      }, color: "ff0000", livePreview: !0, flat: !1
    }, r = function (t, n) {
      var r = L(t);
      e(n).data("colorpicker").fields.eq(1).val(r.r).end().eq(2).val(r.g).end().eq(3).val(r.b).end()
    }, o = function (t, n) {
      e(n).data("colorpicker").fields.eq(4).val(t.h).end().eq(5).val(t.s).end().eq(6).val(t.b).end()
    }, i = function (t, n) {
      e(n).data("colorpicker").fields.eq(0).val(B(t)).end()
    }, a = function (t, n) {
      e(n).data("colorpicker").selector.css("backgroundColor", "#" + B({
        h: t.h,
        s: 100,
        b: 100
      })), e(n).data("colorpicker").selectorIndic.css({
        left: parseInt(150 * t.s / 100, 10),
        top: parseInt(150 * (100 - t.b) / 100, 10)
      })
    }, s = function (t, n) {
      e(n).data("colorpicker").hue.css("top", parseInt(150 - 150 * t.h / 360, 10))
    }, l = function (t, n) {
      e(n).data("colorpicker").currentColor.css("backgroundColor", "#" + B(t))
    }, c = function (t, n) {
      e(n).data("colorpicker").newColor.css("backgroundColor", "#" + B(t))
    }, u = function (n) {
      var r = n.charCode || n.keyCode || -1;
      if (r > t && r <= 90 || 32 == r) return !1;
      !0 === e(this).parent().parent().data("colorpicker").livePreview && f.apply(this)
    }, f = function (t) {
      var n, l = e(this).parent().parent();
      this.parentNode.className.indexOf("_hex") > 0 ? l.data("colorpicker").color = n = M(D(this.value)) : this.parentNode.className.indexOf("_hsb") > 0 ? l.data("colorpicker").color = n = P({
        h: parseInt(l.data("colorpicker").fields.eq(4).val(), 10),
        s: parseInt(l.data("colorpicker").fields.eq(5).val(), 10),
        b: parseInt(l.data("colorpicker").fields.eq(6).val(), 10)
      }) : l.data("colorpicker").color = n = _(O({
        r: parseInt(l.data("colorpicker").fields.eq(1).val(), 10),
        g: parseInt(l.data("colorpicker").fields.eq(2).val(), 10),
        b: parseInt(l.data("colorpicker").fields.eq(3).val(), 10)
      })), t && (r(n, l.get(0)), i(n, l.get(0)), o(n, l.get(0))), a(n, l.get(0)), s(n, l.get(0)), c(n, l.get(0)), l.data("colorpicker").onChange.apply(l, [n, B(n), L(n)])
    }, d = function (t) {
      e(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus")
    }, p = function () {
      t = this.parentNode.className.indexOf("_hex") > 0 ? 70 : 65, e(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus"), e(this).parent().addClass("colorpicker_focus")
    }, h = function (t) {
      var n = e(this).parent().find("input").focus(), r = {
        el: e(this).parent().addClass("colorpicker_slider"),
        max: this.parentNode.className.indexOf("_hsb_h") > 0 ? 360 : this.parentNode.className.indexOf("_hsb") > 0 ? 100 : 255,
        y: t.pageY,
        field: n,
        val: parseInt(n.val(), 10),
        preview: e(this).parent().parent().data("colorpicker").livePreview
      };
      e(document).bind("mouseup", r, m), e(document).bind("mousemove", r, g)
    }, g = function (e) {
      return e.data.field.val(Math.max(0, Math.min(e.data.max, parseInt(e.data.val + e.pageY - e.data.y, 10)))), e.data.preview && f.apply(e.data.field.get(0), [!0]), !1
    }, m = function (t) {
      return f.apply(t.data.field.get(0), [!0]), t.data.el.removeClass("colorpicker_slider").find("input").focus(), e(document).unbind("mouseup", m), e(document).unbind("mousemove", g), !1
    }, v = function (t) {
      var n = {cal: e(this).parent(), y: e(this).offset().top};
      n.preview = n.cal.data("colorpicker").livePreview, e(document).bind("mouseup", n, y), e(document).bind("mousemove", n, b)
    }, b = function (e) {
      return f.apply(e.data.cal.data("colorpicker").fields.eq(4).val(parseInt(360 * (150 - Math.max(0, Math.min(150, e.pageY - e.data.y))) / 150, 10)).get(0), [e.data.preview]), !1
    }, y = function (t) {
      return r(t.data.cal.data("colorpicker").color, t.data.cal.get(0)), i(t.data.cal.data("colorpicker").color, t.data.cal.get(0)), e(document).unbind("mouseup", y), e(document).unbind("mousemove", b), !1
    }, x = function (t) {
      var n = {cal: e(this).parent(), pos: e(this).offset()};
      n.preview = n.cal.data("colorpicker").livePreview, e(document).bind("mouseup", n, $), e(document).bind("mousemove", n, w)
    }, w = function (e) {
      return f.apply(e.data.cal.data("colorpicker").fields.eq(6).val(parseInt(100 * (150 - Math.max(0, Math.min(150, e.pageY - e.data.pos.top))) / 150, 10)).end().eq(5).val(parseInt(100 * Math.max(0, Math.min(150, e.pageX - e.data.pos.left)) / 150, 10)).get(0), [e.data.preview]), !1
    }, $ = function (t) {
      return r(t.data.cal.data("colorpicker").color, t.data.cal.get(0)), i(t.data.cal.data("colorpicker").color, t.data.cal.get(0)), e(document).unbind("mouseup", $), e(document).unbind("mousemove", w), !1
    }, k = function (t) {
      e(this).addClass("colorpicker_focus")
    }, T = function (t) {
      e(this).removeClass("colorpicker_focus")
    }, S = function (t) {
      var n = e(this).parent(), r = n.data("colorpicker").color;
      n.data("colorpicker").origColor = r, l(r, n.get(0)), n.data("colorpicker").onSubmit(r, B(r), L(r), n.data("colorpicker").el)
    }, C = function (t) {
      var n = e("#" + e(this).data("colorpickerId"));
      n.data("colorpicker").onBeforeShow.apply(this, [n.get(0)]);
      var r = e(this).offset(), o = N(), i = r.top + this.offsetHeight, a = r.left;
      return i + 176 > o.t + o.h && (i -= this.offsetHeight + 176), a + 356 > o.l + o.w && (a -= 356), n.css({
        left: a + "px",
        top: i + "px"
      }), 0 != n.data("colorpicker").onShow.apply(this, [n.get(0)]) && n.show(), e(document).bind("mousedown", {cal: n}, E), !1
    }, E = function (t) {
      A(t.data.cal.get(0), t.target, t.data.cal.get(0)) || (0 != t.data.cal.data("colorpicker").onHide.apply(this, [t.data.cal.get(0)]) && t.data.cal.hide(), e(document).unbind("mousedown", E))
    }, A = function (e, t, n) {
      if (e == t) return !0;
      if (e.contains) return e.contains(t);
      if (e.compareDocumentPosition) return !!(16 & e.compareDocumentPosition(t));
      for (var r = t.parentNode; r && r != n;) {
        if (r == e) return !0;
        r = r.parentNode
      }
      return !1
    }, N = function () {
      var e = "CSS1Compat" == document.compatMode;
      return {
        l: window.pageXOffset || (e ? document.documentElement.scrollLeft : document.body.scrollLeft),
        t: window.pageYOffset || (e ? document.documentElement.scrollTop : document.body.scrollTop),
        w: window.innerWidth || (e ? document.documentElement.clientWidth : document.body.clientWidth),
        h: window.innerHeight || (e ? document.documentElement.clientHeight : document.body.clientHeight)
      }
    }, P = function (e) {
      return {
        h: Math.min(360, Math.max(0, e.h)),
        s: Math.min(100, Math.max(0, e.s)),
        b: Math.min(100, Math.max(0, e.b))
      }
    }, O = function (e) {
      return {
        r: Math.min(255, Math.max(0, e.r)),
        g: Math.min(255, Math.max(0, e.g)),
        b: Math.min(255, Math.max(0, e.b))
      }
    }, D = function (e) {
      var t = 6 - e.length;
      if (t > 0) {
        for (var n = [], r = 0; r < t; r++) n.push("0");
        n.push(e), e = n.join("")
      }
      return e
    }, I = function (e) {
      return {r: (e = parseInt(e.indexOf("#") > -1 ? e.substring(1) : e, 16)) >> 16, g: (65280 & e) >> 8, b: 255 & e}
    }, M = function (e) {
      return _(I(e))
    }, _ = function (e) {
      var t = {h: 0, s: 0, b: 0}, n = Math.min(e.r, e.g, e.b), r = Math.max(e.r, e.g, e.b), o = r - n;
      return t.b = r, t.s = 0 != r ? 255 * o / r : 0, 0 != t.s ? e.r == r ? t.h = (e.g - e.b) / o : e.g == r ? t.h = 2 + (e.b - e.r) / o : t.h = 4 + (e.r - e.g) / o : t.h = -1, t.h *= 60, t.h < 0 && (t.h += 360), t.s *= 100 / 255, t.b *= 100 / 255, t
    }, L = function (e) {
      var t = {}, n = Math.round(e.h), r = Math.round(255 * e.s / 100), o = Math.round(255 * e.b / 100);
      if (0 == r) t.r = t.g = t.b = o; else {
        var i = o, a = (255 - r) * o / 255, s = n % 60 * (i - a) / 60;
        360 == n && (n = 0), n < 60 ? (t.r = i, t.b = a, t.g = a + s) : n < 120 ? (t.g = i, t.b = a, t.r = i - s) : n < 180 ? (t.g = i, t.r = a, t.b = a + s) : n < 240 ? (t.b = i, t.r = a, t.g = i - s) : n < 300 ? (t.b = i, t.g = a, t.r = a + s) : n < 360 ? (t.r = i, t.g = a, t.b = i - s) : (t.r = 0, t.g = 0, t.b = 0)
      }
      return {r: Math.round(t.r), g: Math.round(t.g), b: Math.round(t.b)}
    }, F = function (t) {
      var n = [t.r.toString(16), t.g.toString(16), t.b.toString(16)];
      return e.each(n, function (e, t) {
        1 == t.length && (n[e] = "0" + t)
      }), n.join("")
    }, B = function (e) {
      return F(L(e))
    }, R = function () {
      var t = e(this).parent(), n = t.data("colorpicker").origColor;
      t.data("colorpicker").color = n, r(n, t.get(0)), i(n, t.get(0)), o(n, t.get(0)), a(n, t.get(0)), s(n, t.get(0)), c(n, t.get(0))
    };
    return {
      init: function (t) {
        if ("string" == typeof(t = e.extend({}, n, t || {})).color) t.color = M(t.color); else if (void 0 != t.color.r && void 0 != t.color.g && void 0 != t.color.b) t.color = _(t.color); else {
          if (void 0 == t.color.h || void 0 == t.color.s || void 0 == t.color.b) return this;
          t.color = P(t.color)
        }
        return this.each(function () {
          if (!e(this).data("colorpickerId")) {
            var n = e.extend({}, t);
            n.origColor = t.color;
            var g = "collorpicker_" + parseInt(1e3 * Math.random());
            e(this).data("colorpickerId", g);
            var m = e('<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>').attr("id", g);
            n.flat ? m.appendTo(this).show() : m.appendTo(document.body), n.fields = m.find("input").bind("keyup", u).bind("change", f).bind("blur", d).bind("focus", p), m.find("span").bind("mousedown", h).end().find(">div.colorpicker_current_color").bind("click", R), n.selector = m.find("div.colorpicker_color").bind("mousedown", x), n.selectorIndic = n.selector.find("div div"), n.el = this, n.hue = m.find("div.colorpicker_hue div"), m.find("div.colorpicker_hue").bind("mousedown", v), n.newColor = m.find("div.colorpicker_new_color"), n.currentColor = m.find("div.colorpicker_current_color"), m.data("colorpicker", n), m.find("div.colorpicker_submit").bind("mouseenter", k).bind("mouseleave", T).bind("click", S), r(n.color, m.get(0)), o(n.color, m.get(0)), i(n.color, m.get(0)), s(n.color, m.get(0)), a(n.color, m.get(0)), l(n.color, m.get(0)), c(n.color, m.get(0)), n.flat ? m.css({
              position: "relative",
              display: "block"
            }) : e(this).bind(n.eventName, C)
          }
        })
      }, showPicker: function () {
        return this.each(function () {
          e(this).data("colorpickerId") && C.apply(this)
        })
      }, hidePicker: function () {
        return this.each(function () {
          e(this).data("colorpickerId") && e("#" + e(this).data("colorpickerId")).hide()
        })
      }, setColor: function (t) {
        if ("string" == typeof t) t = M(t); else if (void 0 != t.r && void 0 != t.g && void 0 != t.b) t = _(t); else {
          if (void 0 == t.h || void 0 == t.s || void 0 == t.b) return this;
          t = P(t)
        }
        return this.each(function () {
          if (e(this).data("colorpickerId")) {
            var n = e("#" + e(this).data("colorpickerId"));
            n.data("colorpicker").color = t, n.data("colorpicker").origColor = t, r(t, n.get(0)), o(t, n.get(0)), i(t, n.get(0)), s(t, n.get(0)), a(t, n.get(0)), l(t, n.get(0)), c(t, n.get(0))
          }
        })
      }
    }
  }();
  e.fn.extend({
    ColorPicker: t.init,
    ColorPickerHide: t.hidePicker,
    ColorPickerShow: t.showPicker,
    ColorPickerSetColor: t.setColor,
    ColorPicker: t.init,
    ColorPickerHide: t.hidePicker,
    ColorPickerShow: t.showPicker,
    ColorPickerSetColor: t.setColor
  })
}(jQuery), function (e) {
  var t = function (e, t) {
    return e << t | e >>> 32 - t
  }, n = function (e, t) {
    var n, r, o, i, a;
    return o = 2147483648 & e, i = 2147483648 & t, n = 1073741824 & e, r = 1073741824 & t, a = (1073741823 & e) + (1073741823 & t), n & r ? 2147483648 ^ a ^ o ^ i : n | r ? 1073741824 & a ? 3221225472 ^ a ^ o ^ i : 1073741824 ^ a ^ o ^ i : a ^ o ^ i
  }, r = function (e, t, n) {
    return e & t | ~e & n
  }, o = function (e, t, n) {
    return e & n | t & ~n
  }, i = function (e, t, n) {
    return e ^ t ^ n
  }, a = function (e, t, n) {
    return t ^ (e | ~n)
  }, s = function (e, o, i, a, s, l, c) {
    return e = n(e, n(n(r(o, i, a), s), c)), n(t(e, l), o)
  }, l = function (e, r, i, a, s, l, c) {
    return e = n(e, n(n(o(r, i, a), s), c)), n(t(e, l), r)
  }, c = function (e, r, o, a, s, l, c) {
    return e = n(e, n(n(i(r, o, a), s), c)), n(t(e, l), r)
  }, u = function (e, r, o, i, s, l, c) {
    return e = n(e, n(n(a(r, o, i), s), c)), n(t(e, l), r)
  }, f = function (e) {
    for (var t, n = e.length, r = n + 8, o = 16 * ((r - r % 64) / 64 + 1), i = Array(o - 1), a = 0, s = 0; s < n;) a = s % 4 * 8, i[t = (s - s % 4) / 4] = i[t] | e.charCodeAt(s) << a, s++;
    return t = (s - s % 4) / 4, a = s % 4 * 8, i[t] = i[t] | 128 << a, i[o - 2] = n << 3, i[o - 1] = n >>> 29, i
  }, d = function (e) {
    var t, n = "", r = "";
    for (t = 0; t <= 3; t++) n += (r = "0" + (e >>> 8 * t & 255).toString(16)).substr(r.length - 2, 2);
    return n
  }, p = function (e) {
    e = e.replace(/\x0d\x0a/g, "\n");
    for (var t = "", n = 0; n < e.length; n++) {
      var r = e.charCodeAt(n);
      r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(63 & r | 128))
    }
    return t
  };
  jQuery.extend({
    md5: function (e) {
      var t, r, o, i, a, h, g, m, v, b = Array();
      for (e = p(e), b = f(e), h = 1732584193, g = 4023233417, m = 2562383102, v = 271733878, t = 0; t < b.length; t += 16) r = h, o = g, i = m, a = v, h = s(h, g, m, v, b[t + 0], 7, 3614090360), v = s(v, h, g, m, b[t + 1], 12, 3905402710), m = s(m, v, h, g, b[t + 2], 17, 606105819), g = s(g, m, v, h, b[t + 3], 22, 3250441966), h = s(h, g, m, v, b[t + 4], 7, 4118548399), v = s(v, h, g, m, b[t + 5], 12, 1200080426), m = s(m, v, h, g, b[t + 6], 17, 2821735955), g = s(g, m, v, h, b[t + 7], 22, 4249261313), h = s(h, g, m, v, b[t + 8], 7, 1770035416), v = s(v, h, g, m, b[t + 9], 12, 2336552879), m = s(m, v, h, g, b[t + 10], 17, 4294925233), g = s(g, m, v, h, b[t + 11], 22, 2304563134), h = s(h, g, m, v, b[t + 12], 7, 1804603682), v = s(v, h, g, m, b[t + 13], 12, 4254626195), m = s(m, v, h, g, b[t + 14], 17, 2792965006), g = s(g, m, v, h, b[t + 15], 22, 1236535329), h = l(h, g, m, v, b[t + 1], 5, 4129170786), v = l(v, h, g, m, b[t + 6], 9, 3225465664), m = l(m, v, h, g, b[t + 11], 14, 643717713), g = l(g, m, v, h, b[t + 0], 20, 3921069994), h = l(h, g, m, v, b[t + 5], 5, 3593408605), v = l(v, h, g, m, b[t + 10], 9, 38016083), m = l(m, v, h, g, b[t + 15], 14, 3634488961), g = l(g, m, v, h, b[t + 4], 20, 3889429448), h = l(h, g, m, v, b[t + 9], 5, 568446438), v = l(v, h, g, m, b[t + 14], 9, 3275163606), m = l(m, v, h, g, b[t + 3], 14, 4107603335), g = l(g, m, v, h, b[t + 8], 20, 1163531501), h = l(h, g, m, v, b[t + 13], 5, 2850285829), v = l(v, h, g, m, b[t + 2], 9, 4243563512), m = l(m, v, h, g, b[t + 7], 14, 1735328473), g = l(g, m, v, h, b[t + 12], 20, 2368359562), h = c(h, g, m, v, b[t + 5], 4, 4294588738), v = c(v, h, g, m, b[t + 8], 11, 2272392833), m = c(m, v, h, g, b[t + 11], 16, 1839030562), g = c(g, m, v, h, b[t + 14], 23, 4259657740), h = c(h, g, m, v, b[t + 1], 4, 2763975236), v = c(v, h, g, m, b[t + 4], 11, 1272893353), m = c(m, v, h, g, b[t + 7], 16, 4139469664), g = c(g, m, v, h, b[t + 10], 23, 3200236656), h = c(h, g, m, v, b[t + 13], 4, 681279174), v = c(v, h, g, m, b[t + 0], 11, 3936430074), m = c(m, v, h, g, b[t + 3], 16, 3572445317), g = c(g, m, v, h, b[t + 6], 23, 76029189), h = c(h, g, m, v, b[t + 9], 4, 3654602809), v = c(v, h, g, m, b[t + 12], 11, 3873151461), m = c(m, v, h, g, b[t + 15], 16, 530742520), g = c(g, m, v, h, b[t + 2], 23, 3299628645), h = u(h, g, m, v, b[t + 0], 6, 4096336452), v = u(v, h, g, m, b[t + 7], 10, 1126891415), m = u(m, v, h, g, b[t + 14], 15, 2878612391), g = u(g, m, v, h, b[t + 5], 21, 4237533241), h = u(h, g, m, v, b[t + 12], 6, 1700485571), v = u(v, h, g, m, b[t + 3], 10, 2399980690), m = u(m, v, h, g, b[t + 10], 15, 4293915773), g = u(g, m, v, h, b[t + 1], 21, 2240044497), h = u(h, g, m, v, b[t + 8], 6, 1873313359), v = u(v, h, g, m, b[t + 15], 10, 4264355552), m = u(m, v, h, g, b[t + 6], 15, 2734768916), g = u(g, m, v, h, b[t + 13], 21, 1309151649), h = u(h, g, m, v, b[t + 4], 6, 4149444226), v = u(v, h, g, m, b[t + 11], 10, 3174756917), m = u(m, v, h, g, b[t + 2], 15, 718787259), g = u(g, m, v, h, b[t + 9], 21, 3951481745), h = n(h, r), g = n(g, o), m = n(m, i), v = n(v, a);
      return (d(h) + d(g) + d(m) + d(v)).toLowerCase()
    }
  })
}(), function (e, t, n) {
  "use strict";

  function r(e) {
    return function () {
      var t, n = arguments[0],
        n = "[" + (e ? e + ":" : "") + n + "] http://errors.angularjs.org/1.2.28/" + (e ? e + "/" : "") + n;
      for (t = 1; t < arguments.length; t++) n = n + (1 == t ? "?" : "&") + "p" + (t - 1) + "=" + encodeURIComponent("function" == typeof arguments[t] ? arguments[t].toString().replace(/ \{[\s\S]*$/, "") : void 0 === arguments[t] ? "undefined" : "string" != typeof arguments[t] ? JSON.stringify(arguments[t]) : arguments[t]);
      return Error(n)
    }
  }

  function o(e) {
    if (null == e || S(e)) return !1;
    var t = e.length;
    return !(1 !== e.nodeType || !t) || (x(e) || on(e) || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
  }

  function i(e, t, n) {
    var r;
    if (e) if (k(e)) for (r in e) "prototype" == r || "length" == r || "name" == r || e.hasOwnProperty && !e.hasOwnProperty(r) || t.call(n, e[r], r); else if (on(e) || o(e)) for (r = 0; r < e.length; r++) t.call(n, e[r], r); else if (e.forEach && e.forEach !== i) e.forEach(t, n); else for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
    return e
  }

  function a(e) {
    var t, n = [];
    for (t in e) e.hasOwnProperty(t) && n.push(t);
    return n.sort()
  }

  function s(e, t, n) {
    for (var r = a(e), o = 0; o < r.length; o++) t.call(n, e[r[o]], r[o]);
    return r
  }

  function l(e) {
    return function (t, n) {
      e(n, t)
    }
  }

  function c() {
    for (var e, t = rn.length; t;) {
      if (t--, 57 == (e = rn[t].charCodeAt(0))) return rn[t] = "A", rn.join("");
      if (90 != e) return rn[t] = String.fromCharCode(e + 1), rn.join("");
      rn[t] = "0"
    }
    return rn.unshift("0"), rn.join("")
  }

  function u(e, t) {
    t ? e.$$hashKey = t : delete e.$$hashKey
  }

  function f(e) {
    var t = e.$$hashKey;
    return i(arguments, function (t) {
      t !== e && i(t, function (t, n) {
        e[n] = t
      })
    }), u(e, t), e
  }

  function d(e) {
    return parseInt(e, 10)
  }

  function p(e, t) {
    return f(new (f(function () {
    }, {prototype: e})), t)
  }

  function h() {
  }

  function g(e) {
    return e
  }

  function m(e) {
    return function () {
      return e
    }
  }

  function v(e) {
    return void 0 === e
  }

  function b(e) {
    return void 0 !== e
  }

  function y(e) {
    return null != e && "object" == typeof e
  }

  function x(e) {
    return "string" == typeof e
  }

  function w(e) {
    return "number" == typeof e
  }

  function $(e) {
    return "[object Date]" === en.call(e)
  }

  function k(e) {
    return "function" == typeof e
  }

  function T(e) {
    return "[object RegExp]" === en.call(e)
  }

  function S(e) {
    return e && e.document && e.location && e.alert && e.setInterval
  }

  function C(e) {
    return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
  }

  function E(e, t, n) {
    var r = [];
    return i(e, function (e, o, i) {
      r.push(t.call(n, e, o, i))
    }), r
  }

  function A(e, t) {
    if (e.indexOf) return e.indexOf(t);
    for (var n = 0; n < e.length; n++) if (t === e[n]) return n;
    return -1
  }

  function N(e, t) {
    var n = A(e, t);
    return 0 <= n && e.splice(n, 1), t
  }

  function P(e, t, n, r) {
    if (S(e) || e && e.$evalAsync && e.$watch) throw tn("cpws");
    if (t) {
      if (e === t) throw tn("cpi");
      if (n = n || [], r = r || [], y(e)) {
        var o = A(n, e);
        if (-1 !== o) return r[o];
        n.push(e), r.push(t)
      }
      if (on(e)) for (var a = t.length = 0; a < e.length; a++) o = P(e[a], null, n, r), y(e[a]) && (n.push(e[a]), r.push(o)), t.push(o); else {
        var s = t.$$hashKey;
        on(t) ? t.length = 0 : i(t, function (e, n) {
          delete t[n]
        });
        for (a in e) o = P(e[a], null, n, r), y(e[a]) && (n.push(e[a]), r.push(o)), t[a] = o;
        u(t, s)
      }
    } else (t = e) && (on(e) ? t = P(e, [], n, r) : $(e) ? t = new Date(e.getTime()) : T(e) ? (t = RegExp(e.source, e.toString().match(/[^\/]*$/)[0]), t.lastIndex = e.lastIndex) : y(e) && (t = P(e, {}, n, r)));
    return t
  }

  function O(e, t) {
    if (on(e)) {
      t = t || [];
      for (var n = 0; n < e.length; n++) t[n] = e[n]
    } else if (y(e)) for (n in t = t || {}, e) !Kt.call(e, n) || "$" === n.charAt(0) && "$" === n.charAt(1) || (t[n] = e[n]);
    return t || e
  }

  function D(e, t) {
    if (e === t) return !0;
    if (null === e || null === t) return !1;
    if (e != e && t != t) return !0;
    var r, o = typeof e;
    if (o == typeof t && "object" == o) {
      if (!on(e)) {
        if ($(e)) return !!$(t) && (isNaN(e.getTime()) && isNaN(t.getTime()) || e.getTime() === t.getTime());
        if (T(e) && T(t)) return e.toString() == t.toString();
        if (e && e.$evalAsync && e.$watch || t && t.$evalAsync && t.$watch || S(e) || S(t) || on(t)) return !1;
        o = {};
        for (r in e) if ("$" !== r.charAt(0) && !k(e[r])) {
          if (!D(e[r], t[r])) return !1;
          o[r] = !0
        }
        for (r in t) if (!o.hasOwnProperty(r) && "$" !== r.charAt(0) && t[r] !== n && !k(t[r])) return !1;
        return !0
      }
      if (!on(t)) return !1;
      if ((o = e.length) == t.length) {
        for (r = 0; r < o; r++) if (!D(e[r], t[r])) return !1;
        return !0
      }
    }
    return !1
  }

  function I(e, t) {
    var n = 2 < arguments.length ? Jt.call(arguments, 2) : [];
    return !k(t) || t instanceof RegExp ? t : n.length ? function () {
      return arguments.length ? t.apply(e, n.concat(Jt.call(arguments, 0))) : t.apply(e, n)
    } : function () {
      return arguments.length ? t.apply(e, arguments) : t.call(e)
    }
  }

  function M(e, r) {
    var o = r;
    return "string" == typeof e && "$" === e.charAt(0) ? o = n : S(r) ? o = "$WINDOW" : r && t === r ? o = "$DOCUMENT" : r && r.$evalAsync && r.$watch && (o = "$SCOPE"), o
  }

  function _(e, t) {
    return void 0 === e ? n : JSON.stringify(e, M, t ? "  " : null)
  }

  function L(e) {
    return x(e) ? JSON.parse(e) : e
  }

  function F(e) {
    return "function" == typeof e ? e = !0 : e && 0 !== e.length ? (e = Xt("" + e), e = !("f" == e || "0" == e || "false" == e || "no" == e || "n" == e || "[]" == e)) : e = !1, e
  }

  function B(e) {
    e = Vt(e).clone();
    try {
      e.empty()
    } catch (e) {
    }
    var t = Vt("<div>").append(e).html();
    try {
      return 3 === e[0].nodeType ? Xt(t) : t.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (e, t) {
        return "<" + Xt(t)
      })
    } catch (e) {
      return Xt(t)
    }
  }

  function R(e) {
    try {
      return decodeURIComponent(e)
    } catch (e) {
    }
  }

  function j(e) {
    var t, n, r = {};
    return i((e || "").split("&"), function (e) {
      e && (t = e.replace(/\+/g, "%20").split("="), n = R(t[0]), b(n) && (e = !b(t[1]) || R(t[1]), Kt.call(r, n) ? on(r[n]) ? r[n].push(e) : r[n] = [r[n], e] : r[n] = e))
    }), r
  }

  function q(e) {
    var t = [];
    return i(e, function (e, n) {
      on(e) ? i(e, function (e) {
        t.push(H(n, !0) + (!0 === e ? "" : "=" + H(e, !0)))
      }) : t.push(H(n, !0) + (!0 === e ? "" : "=" + H(e, !0)))
    }), t.length ? t.join("&") : ""
  }

  function U(e) {
    return H(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
  }

  function H(e, t) {
    return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, t ? "%20" : "+")
  }

  function V(e, n) {
    function r(e) {
      e && s.push(e)
    }

    var o, a, s = [e], l = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"], c = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
    i(l, function (n) {
      l[n] = !0, r(t.getElementById(n)), n = n.replace(":", "\\:"), e.querySelectorAll && (i(e.querySelectorAll("." + n), r), i(e.querySelectorAll("." + n + "\\:"), r), i(e.querySelectorAll("[" + n + "]"), r))
    }), i(s, function (e) {
      if (!o) {
        var t = c.exec(" " + e.className + " ");
        t ? (o = e, a = (t[2] || "").replace(/\s+/g, ",")) : i(e.attributes, function (t) {
          !o && l[t.name] && (o = e, a = t.value)
        })
      }
    }), o && n(o, a ? [a] : [])
  }

  function z(n, r) {
    var o = function () {
      if ((n = Vt(n)).injector()) {
        var e = n[0] === t ? "document" : B(n);
        throw tn("btstrpd", e.replace(/</, "&lt;").replace(/>/, "&gt;"))
      }
      return (r = r || []).unshift(["$provide", function (e) {
        e.value("$rootElement", n)
      }]), r.unshift("ng"), (e = xe(r)).invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate", function (e, t, n, r, o) {
        e.$apply(function () {
          t.data("$injector", r), n(t)(e)
        })
      }]), e
    }, a = /^NG_DEFER_BOOTSTRAP!/;
    if (e && !a.test(e.name)) return o();
    e.name = e.name.replace(a, ""), nn.resumeBootstrap = function (e) {
      i(e, function (e) {
        r.push(e)
      }), o()
    }
  }

  function W(e, t) {
    return t = t || "_", e.replace(ln, function (e, n) {
      return (n ? t : "") + e.toLowerCase()
    })
  }

  function G(e, t, n) {
    if (!e) throw tn("areq", t || "?", n || "required");
    return e
  }

  function Y(e, t, n) {
    return n && on(e) && (e = e[e.length - 1]), G(k(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
  }

  function X(e, t) {
    if ("hasOwnProperty" === e) throw tn("badname", t)
  }

  function K(e, t, n) {
    if (!t) return e;
    for (var r, o = e, i = (t = t.split(".")).length, a = 0; a < i; a++) r = t[a], e && (e = (o = e)[r]);
    return !n && k(e) ? I(o, e) : e
  }

  function Q(e) {
    var t = e[0];
    if (e = e[e.length - 1], t === e) return Vt(t);
    var n = [t];
    do {
      if (!(t = t.nextSibling)) break;
      n.push(t)
    } while (t !== e);
    return Vt(n)
  }

  function J(e) {
    var t = r("$injector"), n = r("ng");
    return e = e.angular || (e.angular = {}), e.$$minErr = e.$$minErr || r, e.module || (e.module = function () {
      var e = {};
      return function (r, o, i) {
        if ("hasOwnProperty" === r) throw n("badname", "module");
        return o && e.hasOwnProperty(r) && (e[r] = null), e[r] || (e[r] = function () {
          function e(e, t, r) {
            return function () {
              return n[r || "push"]([e, t, arguments]), l
            }
          }

          if (!o) throw t("nomod", r);
          var n = [], a = [], s = e("$injector", "invoke"), l = {
            _invokeQueue: n,
            _runBlocks: a,
            requires: o,
            name: r,
            provider: e("$provide", "provider"),
            factory: e("$provide", "factory"),
            service: e("$provide", "service"),
            value: e("$provide", "value"),
            constant: e("$provide", "constant", "unshift"),
            animation: e("$animateProvider", "register"),
            filter: e("$filterProvider", "register"),
            controller: e("$controllerProvider", "register"),
            directive: e("$compileProvider", "directive"),
            config: s,
            run: function (e) {
              return a.push(e), this
            }
          };
          return i && s(i), l
        }())
      }
    }())
  }

  function Z(e) {
    return e.replace(hn, function (e, t, n, r) {
      return r ? n.toUpperCase() : n
    }).replace(gn, "Moz$1")
  }

  function ee(e, t, n, r) {
    function o(e) {
      var o, a, s, l, c, u, f = n && e ? [this.filter(e)] : [this], d = t;
      if (!r || null != e) for (; f.length;) for (o = f.shift(), a = 0, s = o.length; a < s; a++) for (l = Vt(o[a]), d ? l.triggerHandler("$destroy") : d = !d, c = 0, l = (u = l.children()).length; c < l; c++) f.push(zt(u[c]));
      return i.apply(this, arguments)
    }

    var i = (i = zt.fn[e]).$original || i;
    o.$original = i, zt.fn[e] = o
  }

  function te(e) {
    if (e instanceof te) return e;
    if (x(e) && (e = an(e)), !(this instanceof te)) {
      if (x(e) && "<" != e.charAt(0)) throw mn("nosel");
      return new te(e)
    }
    if (x(e)) {
      var n = e;
      e = t;
      var r;
      if (r = vn.exec(n)) e = [e.createElement(r[1])]; else {
        var o, i = e;
        if (e = i.createDocumentFragment(), r = [], bn.test(n)) {
          for (i = e.appendChild(i.createElement("div")), o = (yn.exec(n) || ["", ""])[1].toLowerCase(), o = wn[o] || wn._default, i.innerHTML = "<div>&#160;</div>" + o[1] + n.replace(xn, "<$1></$2>") + o[2], i.removeChild(i.firstChild), n = o[0]; n--;) i = i.lastChild;
          for (n = 0, o = i.childNodes.length; n < o; ++n) r.push(i.childNodes[n]);
          (i = e.firstChild).textContent = ""
        } else r.push(i.createTextNode(n));
        e.textContent = "", e.innerHTML = "", e = r
      }
      fe(this, e), Vt(t.createDocumentFragment()).append(this)
    } else fe(this, e)
  }

  function ne(e) {
    return e.cloneNode(!0)
  }

  function re(e) {
    ie(e);
    var t = 0;
    for (e = e.childNodes || []; t < e.length; t++) re(e[t])
  }

  function oe(e, t, n, r) {
    if (b(r)) throw mn("offargs");
    var o = ae(e, "events");
    ae(e, "handle") && (v(t) ? i(o, function (t, n) {
      pn(e, n, t), delete o[n]
    }) : i(t.split(" "), function (t) {
      v(n) ? (pn(e, t, o[t]), delete o[t]) : N(o[t] || [], n)
    }))
  }

  function ie(e, t) {
    var r = e.ng339, o = un[r];
    o && (t ? delete un[r].data[t] : (o.handle && (o.events.$destroy && o.handle({}, "$destroy"), oe(e)), delete un[r], e.ng339 = n))
  }

  function ae(e, t, n) {
    var r = e.ng339, r = un[r || -1];
    if (!b(n)) return r && r[t];
    r || (e.ng339 = r = ++fn, r = un[r] = {}), r[t] = n
  }

  function se(e, t, n) {
    var r = ae(e, "data"), o = b(n), i = !o && b(t), a = i && !y(t);
    if (r || a || ae(e, "data", r = {}), o) r[t] = n; else {
      if (!i) return r;
      if (a) return r && r[t];
      f(r, t)
    }
  }

  function le(e, t) {
    return !!e.getAttribute && -1 < (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ")
  }

  function ce(e, t) {
    t && e.setAttribute && i(t.split(" "), function (t) {
      e.setAttribute("class", an((" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + an(t) + " ", " ")))
    })
  }

  function ue(e, t) {
    if (t && e.setAttribute) {
      var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
      i(t.split(" "), function (e) {
        e = an(e), -1 === n.indexOf(" " + e + " ") && (n += e + " ")
      }), e.setAttribute("class", an(n))
    }
  }

  function fe(e, t) {
    if (t) {
      t = t.nodeName || !b(t.length) || S(t) ? [t] : t;
      for (var n = 0; n < t.length; n++) e.push(t[n])
    }
  }

  function de(e, t) {
    return pe(e, "$" + (t || "ngController") + "Controller")
  }

  function pe(e, t, r) {
    for (9 == e.nodeType && (e = e.documentElement), t = on(t) ? t : [t]; e;) {
      for (var o = 0, i = t.length; o < i; o++) if ((r = Vt.data(e, t[o])) !== n) return r;
      e = e.parentNode || 11 === e.nodeType && e.host
    }
  }

  function he(e) {
    for (var t = 0, n = e.childNodes; t < n.length; t++) re(n[t]);
    for (; e.firstChild;) e.removeChild(e.firstChild)
  }

  function ge(e, t) {
    var n = kn[t.toLowerCase()];
    return n && Tn[e.nodeName] && n
  }

  function me(e, n) {
    var r = function (r, o) {
      if (r.preventDefault || (r.preventDefault = function () {
          r.returnValue = !1
        }), r.stopPropagation || (r.stopPropagation = function () {
          r.cancelBubble = !0
        }), r.target || (r.target = r.srcElement || t), v(r.defaultPrevented)) {
        var a = r.preventDefault;
        r.preventDefault = function () {
          r.defaultPrevented = !0, a.call(r)
        }, r.defaultPrevented = !1
      }
      r.isDefaultPrevented = function () {
        return r.defaultPrevented || !1 === r.returnValue
      }, i(O(n[o || r.type] || []), function (t) {
        t.call(e, r)
      }), 8 >= Ht ? (r.preventDefault = null, r.stopPropagation = null, r.isDefaultPrevented = null) : (delete r.preventDefault, delete r.stopPropagation, delete r.isDefaultPrevented)
    };
    return r.elem = e, r
  }

  function ve(e, t) {
    var r, o = typeof e;
    return "function" == o || "object" == o && null !== e ? "function" == typeof(r = e.$$hashKey) ? r = e.$$hashKey() : r === n && (r = e.$$hashKey = (t || c)()) : r = e, o + ":" + r
  }

  function be(e, t) {
    if (t) {
      var n = 0;
      this.nextUid = function () {
        return ++n
      }
    }
    i(e, this.put, this)
  }

  function ye(e) {
    var t, n;
    return "function" == typeof e ? (t = e.$inject) || (t = [], e.length && (n = e.toString().replace(An, ""), n = n.match(Sn), i(n[1].split(Cn), function (e) {
      e.replace(En, function (e, n, r) {
        t.push(r)
      })
    })), e.$inject = t) : on(e) ? (n = e.length - 1, Y(e[n], "fn"), t = e.slice(0, n)) : Y(e, "fn", !0), t
  }

  function xe(e) {
    function t(e) {
      return function (t, n) {
        if (!y(t)) return e(t, n);
        i(t, l(e))
      }
    }

    function n(e, t) {
      if (X(e, "service"), (k(t) || on(t)) && (t = p.instantiate(t)), !t.$get) throw Nn("pget", e);
      return d[e + c] = t
    }

    function r(e, t) {
      return n(e, {$get: t})
    }

    function o(e) {
      var t, n, r, a, s = [];
      return i(e, function (e) {
        if (!f.get(e)) {
          f.put(e, !0);
          try {
            if (x(e)) for (t = Wt(e), s = s.concat(o(t.requires)).concat(t._runBlocks), n = t._invokeQueue, r = 0, a = n.length; r < a; r++) {
              var i = n[r], l = p.get(i[0]);
              l[i[1]].apply(l, i[2])
            } else k(e) ? s.push(p.invoke(e)) : on(e) ? s.push(p.invoke(e)) : Y(e, "module")
          } catch (t) {
            throw on(e) && (e = e[e.length - 1]), t.message && t.stack && -1 == t.stack.indexOf(t.message) && (t = t.message + "\n" + t.stack), Nn("modulerr", e, t.stack || t.message || t)
          }
        }
      }), s
    }

    function a(e, t) {
      function n(n) {
        if (e.hasOwnProperty(n)) {
          if (e[n] === s) throw Nn("cdep", n + " <- " + u.join(" <- "));
          return e[n]
        }
        try {
          return u.unshift(n), e[n] = s, e[n] = t(n)
        } catch (t) {
          throw e[n] === s && delete e[n], t
        } finally {
          u.shift()
        }
      }

      function r(e, t, r) {
        var o, i, a, s = [], l = ye(e);
        for (i = 0, o = l.length; i < o; i++) {
          if ("string" != typeof(a = l[i])) throw Nn("itkn", a);
          s.push(r && r.hasOwnProperty(a) ? r[a] : n(a))
        }
        return on(e) && (e = e[o]), e.apply(t, s)
      }

      return {
        invoke: r, instantiate: function (e, t) {
          var n, o = function () {
          };
          return o.prototype = (on(e) ? e[e.length - 1] : e).prototype, o = new o, n = r(e, o, t), y(n) || k(n) ? n : o
        }, get: n, annotate: ye, has: function (t) {
          return d.hasOwnProperty(t + c) || e.hasOwnProperty(t)
        }
      }
    }

    var s = {}, c = "Provider", u = [], f = new be([], !0), d = {
      $provide: {
        provider: t(n), factory: t(r), service: t(function (e, t) {
          return r(e, ["$injector", function (e) {
            return e.instantiate(t)
          }])
        }), value: t(function (e, t) {
          return r(e, m(t))
        }), constant: t(function (e, t) {
          X(e, "constant"), d[e] = t, g[e] = t
        }), decorator: function (e, t) {
          var n = p.get(e + c), r = n.$get;
          n.$get = function () {
            var e = v.invoke(r, n);
            return v.invoke(t, null, {$delegate: e})
          }
        }
      }
    }, p = d.$injector = a(d, function () {
      throw Nn("unpr", u.join(" <- "))
    }), g = {}, v = g.$injector = a(g, function (e) {
      return e = p.get(e + c), v.invoke(e.$get, e)
    });
    return i(o(e), function (e) {
      v.invoke(e || h)
    }), v
  }

  function we() {
    var e = !0;
    this.disableAutoScrolling = function () {
      e = !1
    }, this.$get = ["$window", "$location", "$rootScope", function (t, n, r) {
      function o(e) {
        var t = null;
        return i(e, function (e) {
          t || "a" !== Xt(e.nodeName) || (t = e)
        }), t
      }

      function a() {
        var e, r = n.hash();
        r ? (e = s.getElementById(r)) ? e.scrollIntoView() : (e = o(s.getElementsByName(r))) ? e.scrollIntoView() : "top" === r && t.scrollTo(0, 0) : t.scrollTo(0, 0)
      }

      var s = t.document;
      return e && r.$watch(function () {
        return n.hash()
      }, function () {
        r.$evalAsync(a)
      }), a
    }]
  }

  function $e() {
    this.$get = ["$$rAF", "$timeout", function (e, t) {
      return e.supported ? function (t) {
        return e(t)
      } : function (e) {
        return t(e, 0, !1)
      }
    }]
  }

  function ke(e, t, r, o) {
    function a(e) {
      try {
        e.apply(null, Jt.call(arguments, 1))
      } finally {
        if (0 == --b) for (; y.length;) try {
          y.pop()()
        } catch (e) {
          r.error(e)
        }
      }
    }

    function s(e, t) {
      !function n() {
        i($, function (e) {
          e()
        }), w = t(n, e)
      }()
    }

    function l() {
      k != c.url() && (k = c.url(), i(C, function (e) {
        e(c.url())
      }))
    }

    var c = this, u = t[0], f = e.location, d = e.history, p = e.setTimeout, g = e.clearTimeout, m = {};
    c.isMock = !1;
    var b = 0, y = [];
    c.$$completeOutstandingRequest = a, c.$$incOutstandingRequestCount = function () {
      b++
    }, c.notifyWhenNoOutstandingRequests = function (e) {
      i($, function (e) {
        e()
      }), 0 === b ? e() : y.push(e)
    };
    var w, $ = [];
    c.addPollFn = function (e) {
      return v(w) && s(100, p), $.push(e), e
    };
    var k = f.href, T = t.find("base"), S = null;
    c.url = function (t, n) {
      if (f !== e.location && (f = e.location), d !== e.history && (d = e.history), !t) return S || f.href.replace(/%27/g, "'");
      if (k != t) {
        var r = k && Ge(k) === Ge(t);
        return k = t, !r && o.history ? n ? d.replaceState(null, "", t) : (d.pushState(null, "", t), T.attr("href", T.attr("href"))) : (r || (S = t), n ? f.replace(t) : f.href = t), c
      }
    };
    var C = [], E = !1;
    c.onUrlChange = function (t) {
      return E || (o.history && Vt(e).on("popstate", l), o.hashchange ? Vt(e).on("hashchange", l) : c.addPollFn(l), E = !0), C.push(t), t
    }, c.$$checkUrlChange = l, c.baseHref = function () {
      var e = T.attr("href");
      return e ? e.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
    };
    var A = {}, N = "", P = c.baseHref();
    c.cookies = function (e, t) {
      var o, i, a, s;
      if (!e) {
        if (u.cookie !== N) for (N = u.cookie, o = N.split("; "), A = {}, a = 0; a < o.length; a++) i = o[a], 0 < (s = i.indexOf("=")) && (e = unescape(i.substring(0, s)), A[e] === n && (A[e] = unescape(i.substring(s + 1))));
        return A
      }
      t === n ? u.cookie = escape(e) + "=;path=" + P + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : x(t) && 4096 < (o = (u.cookie = escape(e) + "=" + escape(t) + ";path=" + P).length + 1) && r.warn("Cookie '" + e + "' possibly not set or overflowed because it was too large (" + o + " > 4096 bytes)!")
    }, c.defer = function (e, t) {
      var n;
      return b++, n = p(function () {
        delete m[n], a(e)
      }, t || 0), m[n] = !0, n
    }, c.defer.cancel = function (e) {
      return !!m[e] && (delete m[e], g(e), a(h), !0)
    }
  }

  function Te() {
    this.$get = ["$window", "$log", "$sniffer", "$document", function (e, t, n, r) {
      return new ke(e, r, t, n)
    }]
  }

  function Se() {
    this.$get = function () {
      function e(e, n) {
        function o(e) {
          e != d && (p ? p == e && (p = e.n) : p = e, i(e.n, e.p), i(e, d), d = e, d.n = null)
        }

        function i(e, t) {
          e != t && (e && (e.p = t), t && (t.n = e))
        }

        if (e in t) throw r("$cacheFactory")("iid", e);
        var a = 0, s = f({}, n, {id: e}), l = {}, c = n && n.capacity || Number.MAX_VALUE, u = {}, d = null, p = null;
        return t[e] = {
          put: function (e, t) {
            if (c < Number.MAX_VALUE && o(u[e] || (u[e] = {key: e})), !v(t)) return e in l || a++, l[e] = t, a > c && this.remove(p.key), t
          }, get: function (e) {
            if (c < Number.MAX_VALUE) {
              var t = u[e];
              if (!t) return;
              o(t)
            }
            return l[e]
          }, remove: function (e) {
            if (c < Number.MAX_VALUE) {
              var t = u[e];
              if (!t) return;
              t == d && (d = t.p), t == p && (p = t.n), i(t.n, t.p), delete u[e]
            }
            delete l[e], a--
          }, removeAll: function () {
            l = {}, a = 0, u = {}, d = p = null
          }, destroy: function () {
            u = s = l = null, delete t[e]
          }, info: function () {
            return f({}, s, {size: a})
          }
        }
      }

      var t = {};
      return e.info = function () {
        var e = {};
        return i(t, function (t, n) {
          e[n] = t.info()
        }), e
      }, e.get = function (e) {
        return t[e]
      }, e
    }
  }

  function Ce() {
    this.$get = ["$cacheFactory", function (e) {
      return e("templates")
    }]
  }

  function Ee(e, r) {
    var o = {}, a = "Directive", s = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/, c = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
      u = /^(on[a-z]+|formaction)$/;
    this.directive = function t(n, r) {
      return X(n, "directive"), x(n) ? (G(r, "directiveFactory"), o.hasOwnProperty(n) || (o[n] = [], e.factory(n + a, ["$injector", "$exceptionHandler", function (e, t) {
        var r = [];
        return i(o[n], function (o, i) {
          try {
            var a = e.invoke(o);
            k(a) ? a = {compile: m(a)} : !a.compile && a.link && (a.compile = m(a.link)), a.priority = a.priority || 0, a.index = i, a.name = a.name || n, a.require = a.require || a.controller && a.name, a.restrict = a.restrict || "A", r.push(a)
          } catch (e) {
            t(e)
          }
        }), r
      }])), o[n].push(r)) : i(n, l(t)), this
    }, this.aHrefSanitizationWhitelist = function (e) {
      return b(e) ? (r.aHrefSanitizationWhitelist(e), this) : r.aHrefSanitizationWhitelist()
    }, this.imgSrcSanitizationWhitelist = function (e) {
      return b(e) ? (r.imgSrcSanitizationWhitelist(e), this) : r.imgSrcSanitizationWhitelist()
    }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (e, r, l, d, h, m, v, b, w, $, T, S) {
      function C(e, t, n, r, o) {
        e instanceof Vt || (e = Vt(e)), i(e, function (t, n) {
          3 == t.nodeType && t.nodeValue.match(/\S+/) && (e[n] = Vt(t).wrap("<span></span>").parent()[0])
        });
        var a = A(e, t, e, n, r, o);
        return E(e, "ng-scope"), function (t, n, r, o) {
          G(t, "scope");
          var s = n ? $n.clone.call(e) : e;
          i(r, function (e, t) {
            s.data("$" + t + "Controller", e)
          }), r = 0;
          for (var l = s.length; r < l; r++) {
            var c = s[r].nodeType;
            1 !== c && 9 !== c || s.eq(r).data("$scope", t)
          }
          return n && n(s, t), a && a(t, s, s, o), s
        }
      }

      function E(e, t) {
        try {
          e.addClass(t)
        } catch (e) {
        }
      }

      function A(e, t, r, o, i, a) {
        for (var s, l, c, u, f = [], d = 0; d < e.length; d++) s = new K, l = P(e[d], [], s, 0 === d ? o : n, i), (a = l.length ? _(l, e[d], s, t, r, null, [], [], a) : null) && a.scope && E(s.$$element, "ng-scope"), s = a && a.terminal || !(c = e[d].childNodes) || !c.length ? null : A(c, a ? (a.transcludeOnThisElement || !a.templateOnThisElement) && a.transclude : t), f.push(a, s), u = u || a || s, a = null;
        return u ? function (e, r, o, i) {
          var a, s, l, c, u, d, p;
          a = r.length;
          var h = Array(a);
          for (c = 0; c < a; c++) h[c] = r[c];
          for (d = c = 0, u = f.length; c < u; d++) s = h[d], r = f[c++], a = f[c++], r ? (r.scope ? (l = e.$new(), Vt.data(s, "$scope", l)) : l = e, p = r.transcludeOnThisElement ? N(e, r.transclude, i) : !r.templateOnThisElement && i ? i : !i && t ? N(e, t) : null, r(a, l, s, o, p)) : a && a(e, s.childNodes, n, i)
        } : null
      }

      function N(e, t, n) {
        return function (r, o, i) {
          var a = !1;
          return r || (r = e.$new(), a = r.$$transcluded = !0), o = t(r, o, i, n), a && o.on("$destroy", function () {
            r.$destroy()
          }), o
        }
      }

      function P(e, t, n, r, o) {
        var i, a = n.$attr;
        switch (e.nodeType) {
          case 1:
            F(t, Ae(Gt(e).toLowerCase()), "E", r, o);
            for (var l, u, f, d = e.attributes, p = 0, h = d && d.length; p < h; p++) {
              var g = !1, m = !1;
              l = d[p], (!Ht || 8 <= Ht || l.specified) && (i = l.name, u = an(l.value), l = Ae(i), (f = ee.test(l)) && (i = W(l.substr(6), "-")), l === l.replace(/(Start|End)$/, "") + "Start" && (g = i, m = i.substr(0, i.length - 5) + "end", i = i.substr(0, i.length - 6)), a[l = Ae(i.toLowerCase())] = i, !f && n.hasOwnProperty(l) || (n[l] = u, ge(e, l) && (n[l] = !0)), z(e, t, u, l), F(t, l, "A", r, o, g, m))
            }
            if (e = e.className, x(e) && "" !== e) for (; i = c.exec(e);) l = Ae(i[2]), F(t, l, "C", r, o) && (n[l] = an(i[3])), e = e.substr(i.index + i[0].length);
            break;
          case 3:
            H(t, e.nodeValue);
            break;
          case 8:
            try {
              (i = s.exec(e.nodeValue)) && (l = Ae(i[1]), F(t, l, "M", r, o) && (n[l] = an(i[2])))
            } catch (e) {
            }
        }
        return t.sort(q), t
      }

      function I(e, t, n) {
        var r = [], o = 0;
        if (t && e.hasAttribute && e.hasAttribute(t)) do {
          if (!e) throw Dn("uterdir", t, n);
          1 == e.nodeType && (e.hasAttribute(t) && o++, e.hasAttribute(n) && o--), r.push(e), e = e.nextSibling
        } while (0 < o); else r.push(e);
        return Vt(r)
      }

      function M(e, t, n) {
        return function (r, o, i, a, s) {
          return o = I(o[0], t, n), e(r, o, i, a, s)
        }
      }

      function _(e, o, a, s, c, u, f, d, p) {
        function h(e, t, n, r) {
          e && (n && (e = M(e, n, r)), e.require = $.require, e.directiveName = T, (F === $ || $.$$isolateScope) && (e = X(e, {isolateScope: !0})), f.push(e)), t && (n && (t = M(t, n, r)), t.require = $.require, t.directiveName = T, (F === $ || $.$$isolateScope) && (t = X(t, {isolateScope: !0})), d.push(t))
        }

        function g(e, t, n, r) {
          var o, a = "data", s = !1;
          if (x(t)) {
            for (; "^" == (o = t.charAt(0)) || "?" == o;) t = t.substr(1), "^" == o && (a = "inheritedData"), s = s || "?" == o;
            if (o = null, r && "data" === a && (o = r[t]), !(o = o || n[a]("$" + t + "Controller")) && !s) throw Dn("ctreq", t, e)
          } else on(t) && (o = [], i(t, function (t) {
            o.push(g(e, t, n, r))
          }));
          return o
        }

        function b(e, t, s, c, u) {
          var p, h, b, y, x, w, $, k = {};
          if (p = o === s ? a : O(a, new K(Vt(s), a.$attr)), h = p.$$element, F) {
            var T = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
            w = t.$new(!0), !q || q !== F && q !== F.$$originalDirective ? h.data("$isolateScopeNoTemplate", w) : h.data("$isolateScope", w), E(h, "ng-isolate-scope"), i(F.scope, function (e, n) {
              var o, i, a, s, l = (u = e.match(T) || [])[3] || n, c = "?" == u[2], u = u[1];
              switch (w.$$isolateBindings[n] = u + l, u) {
                case"@":
                  p.$observe(l, function (e) {
                    w[n] = e
                  }), p.$$observers[l].$$scope = t, p[l] && (w[n] = r(p[l])(t));
                  break;
                case"=":
                  if (c && !p[l]) break;
                  i = m(p[l]), s = i.literal ? D : function (e, t) {
                    return e === t || e != e && t != t
                  }, a = i.assign || function () {
                    throw o = w[n] = i(t), Dn("nonassign", p[l], F.name)
                  }, o = w[n] = i(t), w.$watch(function () {
                    var e = i(t);
                    return s(e, w[n]) || (s(e, o) ? a(t, e = w[n]) : w[n] = e), o = e
                  }, null, i.literal);
                  break;
                case"&":
                  i = m(p[l]), w[n] = function (e) {
                    return i(t, e)
                  };
                  break;
                default:
                  throw Dn("iscp", F.name, n, e)
              }
            })
          }
          for ($ = u && function (e, t) {
            var r;
            return 2 > arguments.length && (t = e, e = n), W && (r = k), u(e, t, r)
          }, _ && i(_, function (e) {
            var n, r = {$scope: e === F || e.$$isolateScope ? w : t, $element: h, $attrs: p, $transclude: $};
            "@" == (x = e.controller) && (x = p[e.name]), n = v(x, r), k[e.name] = n, W || h.data("$" + e.name + "Controller", n), e.controllerAs && (r.$scope[e.controllerAs] = n)
          }), c = 0, b = f.length; c < b; c++) try {
            (y = f[c])(y.isolateScope ? w : t, h, p, y.require && g(y.directiveName, y.require, h, k), $)
          } catch (e) {
            l(e, B(h))
          }
          for (c = t, F && (F.template || null === F.templateUrl) && (c = w), e && e(c, s.childNodes, n, u), c = d.length - 1; 0 <= c; c--) try {
            (y = d[c])(y.isolateScope ? w : t, h, p, y.require && g(y.directiveName, y.require, h, k), $)
          } catch (e) {
            l(e, B(h))
          }
        }

        p = p || {};
        for (var w, $, T, S, A, N = -Number.MAX_VALUE, _ = p.controllerDirectives, F = p.newIsolateScopeDirective, q = p.templateDirective, H = p.nonTlbTranscludeDirective, V = !1, z = !1, W = p.hasElementTranscludeDirective, G = a.$$element = Vt(o), Q = s, J = 0, ee = e.length; J < ee; J++) {
          var te = ($ = e[J]).$$start, re = $.$$end;
          if (te && (G = I(o, te, re)), S = n, N > $.priority) break;
          if ((S = $.scope) && (w = w || $, $.templateUrl || (U("new/isolated scope", F, $, G), y(S) && (F = $))), T = $.name, !$.templateUrl && $.controller && (S = $.controller, _ = _ || {}, U("'" + T + "' controller", _[T], $, G), _[T] = $), (S = $.transclude) && (V = !0, $.$$tlb || (U("transclusion", H, $, G), H = $), "element" == S ? (W = !0, N = $.priority, S = G, G = a.$$element = Vt(t.createComment(" " + T + ": " + a[T] + " ")), o = G[0], Y(c, Jt.call(S, 0), o), Q = C(S, s, N, u && u.name, {nonTlbTranscludeDirective: H})) : (S = Vt(ne(o)).contents(), G.empty(), Q = C(S, s))), $.template) if (z = !0, U("template", q, $, G), q = $, S = k($.template) ? $.template(G, a) : $.template, S = Z(S), $.replace) {
            if (u = $, S = bn.test(S) ? Vt(an(S)) : [], o = S[0], 1 != S.length || 1 !== o.nodeType) throw Dn("tplrt", T, "");
            Y(c, G, o), S = P(o, [], ee = {$attr: {}});
            var oe = e.splice(J + 1, e.length - (J + 1));
            F && L(S), e = e.concat(S).concat(oe), R(a, ee), ee = e.length
          } else G.html(S);
          if ($.templateUrl) z = !0, U("template", q, $, G), q = $, $.replace && (u = $), b = j(e.splice(J, e.length - J), G, a, c, V && Q, f, d, {
            controllerDirectives: _,
            newIsolateScopeDirective: F,
            templateDirective: q,
            nonTlbTranscludeDirective: H
          }), ee = e.length; else if ($.compile) try {
            k(A = $.compile(G, a, Q)) ? h(null, A, te, re) : A && h(A.pre, A.post, te, re)
          } catch (e) {
            l(e, B(G))
          }
          $.terminal && (b.terminal = !0, N = Math.max(N, $.priority))
        }
        return b.scope = w && !0 === w.scope, b.transcludeOnThisElement = V, b.templateOnThisElement = z, b.transclude = Q, p.hasElementTranscludeDirective = W, b
      }

      function L(e) {
        for (var t = 0, n = e.length; t < n; t++) e[t] = p(e[t], {$$isolateScope: !0})
      }

      function F(t, r, i, s, c, u, f) {
        if (r === c) return null;
        if (c = null, o.hasOwnProperty(r)) for (var d, h = 0, g = (r = e.get(r + a)).length; h < g; h++) try {
          d = r[h], (s === n || s > d.priority) && -1 != d.restrict.indexOf(i) && (u && (d = p(d, {
            $$start: u,
            $$end: f
          })), t.push(d), c = d)
        } catch (e) {
          l(e)
        }
        return c
      }

      function R(e, t) {
        var n = t.$attr, r = e.$attr, o = e.$$element;
        i(e, function (r, o) {
          "$" != o.charAt(0) && (t[o] && t[o] !== r && (r += ("style" === o ? ";" : " ") + t[o]), e.$set(o, r, !0, n[o]))
        }), i(t, function (t, i) {
          "class" == i ? (E(o, t), e.class = (e.class ? e.class + " " : "") + t) : "style" == i ? (o.attr("style", o.attr("style") + ";" + t), e.style = (e.style ? e.style + ";" : "") + t) : "$" == i.charAt(0) || e.hasOwnProperty(i) || (e[i] = t, r[i] = n[i])
        })
      }

      function j(e, t, n, r, o, a, s, l) {
        var c, u, p = [], g = t[0], m = e.shift(),
          v = f({}, m, {templateUrl: null, transclude: null, replace: null, $$originalDirective: m}),
          b = k(m.templateUrl) ? m.templateUrl(t, n) : m.templateUrl;
        return t.empty(), d.get($.getTrustedResourceUrl(b), {cache: h}).success(function (f) {
          var d, h;
          if (f = Z(f), m.replace) {
            if (f = bn.test(f) ? Vt(an(f)) : [], d = f[0], 1 != f.length || 1 !== d.nodeType) throw Dn("tplrt", m.name, b);
            f = {$attr: {}}, Y(r, t, d);
            $ = P(d, [], f);
            y(m.scope) && L($), e = $.concat(e), R(n, f)
          } else d = g, t.html(f);
          for (e.unshift(v), c = _(e, d, n, o, t, m, a, s, l), i(r, function (e, n) {
            e == d && (r[n] = t[0])
          }), u = A(t[0].childNodes, o); p.length;) {
            f = p.shift(), h = p.shift();
            var x = p.shift(), w = p.shift(), $ = t[0];
            if (h !== g) {
              var k = h.className;
              l.hasElementTranscludeDirective && m.replace || ($ = ne(d)), Y(x, Vt(h), $), E(Vt($), k)
            }
            h = c.transcludeOnThisElement ? N(f, c.transclude, w) : w, c(u, f, $, r, h)
          }
          p = null
        }).error(function (e, t, n, r) {
          throw Dn("tpload", r.url)
        }), function (e, t, n, r, o) {
          e = o, p ? (p.push(t), p.push(n), p.push(r), p.push(e)) : (c.transcludeOnThisElement && (e = N(t, c.transclude, o)), c(u, t, n, r, e))
        }
      }

      function q(e, t) {
        var n = t.priority - e.priority;
        return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
      }

      function U(e, t, n, r) {
        if (t) throw Dn("multidir", t.name, n.name, e, B(r))
      }

      function H(e, t) {
        var n = r(t, !0);
        n && e.push({
          priority: 0, compile: function (e) {
            var t = e.parent().length;
            return t && E(e.parent(), "ng-binding"), function (e, r) {
              var o = r.parent(), i = o.data("$binding") || [];
              i.push(n), o.data("$binding", i), t || E(o, "ng-binding"), e.$watch(n, function (e) {
                r[0].nodeValue = e
              })
            }
          }
        })
      }

      function V(e, t) {
        if ("srcdoc" == t) return $.HTML;
        var n = Gt(e);
        return "xlinkHref" == t || "FORM" == n && "action" == t || "IMG" != n && ("src" == t || "ngSrc" == t) ? $.RESOURCE_URL : void 0
      }

      function z(e, t, n, o) {
        var i = r(n, !0);
        if (i) {
          if ("multiple" === o && "SELECT" === Gt(e)) throw Dn("selmulti", B(e));
          t.push({
            priority: 100, compile: function () {
              return {
                pre: function (t, n, a) {
                  if (n = a.$$observers || (a.$$observers = {}), u.test(o)) throw Dn("nodomevents");
                  (i = r(a[o], !0, V(e, o))) && (a[o] = i(t), (n[o] || (n[o] = [])).$$inter = !0, (a.$$observers && a.$$observers[o].$$scope || t).$watch(i, function (e, t) {
                    "class" === o && e != t ? a.$updateClass(e, t) : a.$set(o, e)
                  }))
                }
              }
            }
          })
        }
      }

      function Y(e, n, r) {
        var o, i, a = n[0], s = n.length, l = a.parentNode;
        if (e) for (o = 0, i = e.length; o < i; o++) if (e[o] == a) {
          e[o++] = r, i = o + s - 1;
          for (var c = e.length; o < c; o++, i++) i < c ? e[o] = e[i] : delete e[o];
          e.length -= s - 1;
          break
        }
        for (l && l.replaceChild(r, a), (e = t.createDocumentFragment()).appendChild(a), r[Vt.expando] = a[Vt.expando], a = 1, s = n.length; a < s; a++) l = n[a], Vt(l).remove(), e.appendChild(l), delete n[a];
        n[0] = r, n.length = 1
      }

      function X(e, t) {
        return f(function () {
          return e.apply(null, arguments)
        }, e, t)
      }

      var K = function (e, t) {
        this.$$element = e, this.$attr = t || {}
      };
      K.prototype = {
        $normalize: Ae, $addClass: function (e) {
          e && 0 < e.length && T.addClass(this.$$element, e)
        }, $removeClass: function (e) {
          e && 0 < e.length && T.removeClass(this.$$element, e)
        }, $updateClass: function (e, t) {
          var n = Ne(e, t), r = Ne(t, e);
          0 === n.length ? T.removeClass(this.$$element, r) : 0 === r.length ? T.addClass(this.$$element, n) : T.setClass(this.$$element, n, r)
        }, $set: function (e, t, r, o) {
          var a = ge(this.$$element[0], e);
          a && (this.$$element.prop(e, t), o = a), this[e] = t, o ? this.$attr[e] = o : (o = this.$attr[e]) || (this.$attr[e] = o = W(e, "-")), ("A" === (a = Gt(this.$$element)) && "href" === e || "IMG" === a && "src" === e) && (this[e] = t = S(t, "src" === e)), !1 !== r && (null === t || t === n ? this.$$element.removeAttr(o) : this.$$element.attr(o, t)), (r = this.$$observers) && i(r[e], function (e) {
            try {
              e(t)
            } catch (e) {
              l(e)
            }
          })
        }, $observe: function (e, t) {
          var n = this, r = n.$$observers || (n.$$observers = {}), o = r[e] || (r[e] = []);
          return o.push(t), b.$evalAsync(function () {
            o.$$inter || t(n[e])
          }), t
        }
      };
      var Q = r.startSymbol(), J = r.endSymbol(), Z = "{{" == Q || "}}" == J ? g : function (e) {
        return e.replace(/\{\{/g, Q).replace(/}}/g, J)
      }, ee = /^ngAttr[A-Z]/;
      return C
    }]
  }

  function Ae(e) {
    return Z(e.replace(In, ""))
  }

  function Ne(e, t) {
    var n = "", r = e.split(/\s+/), o = t.split(/\s+/), i = 0;
    e:for (; i < r.length; i++) {
      for (var a = r[i], s = 0; s < o.length; s++) if (a == o[s]) continue e;
      n += (0 < n.length ? " " : "") + a
    }
    return n
  }

  function Pe() {
    var e = {}, t = /^(\S+)(\s+as\s+(\w+))?$/;
    this.register = function (t, n) {
      X(t, "controller"), y(t) ? f(e, t) : e[t] = n
    }, this.$get = ["$injector", "$window", function (n, o) {
      return function (i, a) {
        var s, l, c;
        if (x(i) && (s = i.match(t), l = s[1], c = s[3], i = e.hasOwnProperty(l) ? e[l] : K(a.$scope, l, !0) || K(o, l, !0), Y(i, l, !0)), s = n.instantiate(i, a), c) {
          if (!a || "object" != typeof a.$scope) throw r("$controller")("noscp", l || i.name, c);
          a.$scope[c] = s
        }
        return s
      }
    }]
  }

  function Oe() {
    this.$get = ["$window", function (e) {
      return Vt(e.document)
    }]
  }

  function De() {
    this.$get = ["$log", function (e) {
      return function (t, n) {
        e.error.apply(e, arguments)
      }
    }]
  }

  function Ie(e) {
    var t, n, r, o = {};
    return e ? (i(e.split("\n"), function (e) {
      r = e.indexOf(":"), t = Xt(an(e.substr(0, r))), n = an(e.substr(r + 1)), t && (o[t] = o[t] ? o[t] + ", " + n : n)
    }), o) : o
  }

  function Me(e) {
    var t = y(e) ? e : n;
    return function (n) {
      return t || (t = Ie(e)), n ? t[Xt(n)] || null : t
    }
  }

  function _e(e, t, n) {
    return k(n) ? n(e, t) : (i(n, function (n) {
      e = n(e, t)
    }), e)
  }

  function Le() {
    var e = /^\s*(\[|\{[^\{])/, t = /[\}\]]\s*$/, r = /^\)\]\}',?\n/,
      o = {"Content-Type": "application/json;charset=utf-8"}, a = this.defaults = {
        transformResponse: [function (n) {
          return x(n) && (n = n.replace(r, ""), e.test(n) && t.test(n) && (n = L(n))), n
        }],
        transformRequest: [function (e) {
          return y(e) && "[object File]" !== en.call(e) && "[object Blob]" !== en.call(e) ? _(e) : e
        }],
        headers: {common: {Accept: "application/json, text/plain, */*"}, post: O(o), put: O(o), patch: O(o)},
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN"
      }, l = this.interceptors = [], c = this.responseInterceptors = [];
    this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (e, t, r, o, u, d) {
      function p(e) {
        function t(e) {
          var t = f({}, e, {data: _e(e.data, e.headers, r.transformResponse)});
          return 200 <= e.status && 300 > e.status ? t : u.reject(t)
        }

        var r = {method: "get", transformRequest: a.transformRequest, transformResponse: a.transformResponse},
          o = function (e) {
            var t, n, r = a.headers, o = f({}, e.headers), r = f({}, r.common, r[Xt(e.method)]);
            e:for (t in r) {
              e = Xt(t);
              for (n in o) if (Xt(n) === e) continue e;
              o[t] = r[t]
            }
            return function (e) {
              var t;
              i(e, function (n, r) {
                k(n) && (null != (t = n()) ? e[r] = t : delete e[r])
              })
            }(o), o
          }(e);
        f(r, e), r.headers = o, r.method = Qt(r.method);
        var s = [function (e) {
          o = e.headers;
          var n = _e(e.data, Me(o), e.transformRequest);
          return v(n) && i(o, function (e, t) {
            "content-type" === Xt(t) && delete o[t]
          }), v(e.withCredentials) && !v(a.withCredentials) && (e.withCredentials = a.withCredentials), h(e, n, o).then(t, t)
        }, n], l = u.when(r);
        for (i(w, function (e) {
          (e.request || e.requestError) && s.unshift(e.request, e.requestError), (e.response || e.responseError) && s.push(e.response, e.responseError)
        }); s.length;) {
          e = s.shift();
          var c = s.shift(), l = l.then(e, c)
        }
        return l.success = function (e) {
          return l.then(function (t) {
            e(t.data, t.status, t.headers, r)
          }), l
        }, l.error = function (e) {
          return l.then(null, function (t) {
            e(t.data, t.status, t.headers, r)
          }), l
        }, l
      }

      function h(r, i, s) {
        function l(e, t, n, o) {
          (200 <= (t = Math.max(t, 0)) && 300 > t ? h.resolve : h.reject)({
            data: e,
            status: t,
            headers: Me(n),
            config: r,
            statusText: o
          })
        }

        function c() {
          var e = A(p.pendingRequests, r);
          -1 !== e && p.pendingRequests.splice(e, 1)
        }

        var f, d, h = u.defer(), x = h.promise, w = g(r.url, r.params);
        if (p.pendingRequests.push(r), x.then(c, c), !r.cache && !a.cache || !1 === r.cache || "GET" !== r.method && "JSONP" !== r.method || (f = y(r.cache) ? r.cache : y(a.cache) ? a.cache : m), f) if (d = f.get(w), b(d)) {
          if (d && k(d.then)) return d.then(c, c), d;
          on(d) ? l(d[1], d[0], O(d[2]), d[3]) : l(d, 200, {}, "OK")
        } else f.put(w, x);
        return v(d) && ((d = $t(r.url) ? t.cookies()[r.xsrfCookieName || a.xsrfCookieName] : n) && (s[r.xsrfHeaderName || a.xsrfHeaderName] = d), e(r.method, w, i, function (e, t, n, r) {
          f && (200 <= e && 300 > e ? f.put(w, [e, t, Ie(n), r]) : f.remove(w)), l(t, e, n, r), o.$$phase || o.$apply()
        }, s, r.timeout, r.withCredentials, r.responseType)), x
      }

      function g(e, t) {
        if (!t) return e;
        var n = [];
        return s(t, function (e, t) {
          null === e || v(e) || (on(e) || (e = [e]), i(e, function (e) {
            y(e) && (e = $(e) ? e.toISOString() : _(e)), n.push(H(t) + "=" + H(e))
          }))
        }), 0 < n.length && (e += (-1 == e.indexOf("?") ? "?" : "&") + n.join("&")), e
      }

      var m = r("$http"), w = [];
      return i(l, function (e) {
        w.unshift(x(e) ? d.get(e) : d.invoke(e))
      }), i(c, function (e, t) {
        var n = x(e) ? d.get(e) : d.invoke(e);
        w.splice(t, 0, {
          response: function (e) {
            return n(u.when(e))
          }, responseError: function (e) {
            return n(u.reject(e))
          }
        })
      }), p.pendingRequests = [], function (e) {
        i(arguments, function (e) {
          p[e] = function (t, n) {
            return p(f(n || {}, {method: e, url: t}))
          }
        })
      }("get", "delete", "head", "jsonp"), function (e) {
        i(arguments, function (e) {
          p[e] = function (t, n, r) {
            return p(f(r || {}, {method: e, url: t, data: n}))
          }
        })
      }("post", "put", "patch"), p.defaults = a, p
    }]
  }

  function Fe(t) {
    if (8 >= Ht && (!t.match(/^(get|post|head|put|delete|options)$/i) || !e.XMLHttpRequest)) return new e.ActiveXObject("Microsoft.XMLHTTP");
    if (e.XMLHttpRequest) return new e.XMLHttpRequest;
    throw r("$httpBackend")("noxhr")
  }

  function Be() {
    this.$get = ["$browser", "$window", "$document", function (e, t, n) {
      return Re(e, Fe, e.defer, t.angular.callbacks, n[0])
    }]
  }

  function Re(e, t, n, r, o) {
    function a(e, t, n) {
      var i = o.createElement("script"), a = null;
      return i.type = "text/javascript", i.src = e, i.async = !0, a = function (e) {
        pn(i, "load", a), pn(i, "error", a), o.body.removeChild(i), i = null;
        var s = -1, l = "unknown";
        e && ("load" !== e.type || r[t].called || (e = {type: "error"}), l = e.type, s = "error" === e.type ? 404 : 200), n && n(s, l)
      }, dn(i, "load", a), dn(i, "error", a), 8 >= Ht && (i.onreadystatechange = function () {
        x(i.readyState) && /loaded|complete/.test(i.readyState) && (i.onreadystatechange = null, a({type: "load"}))
      }), o.body.appendChild(i), a
    }

    var s = -1;
    return function (o, l, c, u, f, d, p, g) {
      function m() {
        y = s, w && w(), $ && $.abort()
      }

      function v(t, r, o, i, a) {
        T && n.cancel(T), w = $ = null, 0 === r && (r = o ? 200 : "file" == wt(l).protocol ? 404 : 0), t(1223 === r ? 204 : r, o, i, a || ""), e.$$completeOutstandingRequest(h)
      }

      var y;
      if (e.$$incOutstandingRequestCount(), l = l || e.url(), "jsonp" == Xt(o)) {
        var x = "_" + (r.counter++).toString(36);
        r[x] = function (e) {
          r[x].data = e, r[x].called = !0
        };
        var w = a(l.replace("JSON_CALLBACK", "angular.callbacks." + x), x, function (e, t) {
          v(u, e, r[x].data, "", t), r[x] = h
        })
      } else {
        var $ = t(o);
        if ($.open(o, l, !0), i(f, function (e, t) {
            b(e) && $.setRequestHeader(t, e)
          }), $.onreadystatechange = function () {
            if ($ && 4 == $.readyState) {
              var e = null, t = null, n = "";
              y !== s && (e = $.getAllResponseHeaders(), t = "response" in $ ? $.response : $.responseText), y === s && 10 > Ht || (n = $.statusText), v(u, y || $.status, t, e, n)
            }
          }, p && ($.withCredentials = !0), g) try {
          $.responseType = g
        } catch (e) {
          if ("json" !== g) throw e
        }
        $.send(c || null)
      }
      if (0 < d) var T = n(m, d); else d && k(d.then) && d.then(m)
    }
  }

  function je() {
    var e = "{{", t = "}}";
    this.startSymbol = function (t) {
      return t ? (e = t, this) : e
    }, this.endSymbol = function (e) {
      return e ? (t = e, this) : t
    }, this.$get = ["$parse", "$exceptionHandler", "$sce", function (n, r, o) {
      function i(i, l, c) {
        for (var u, f, d = 0, p = [], h = i.length, g = !1, m = []; d < h;) -1 != (u = i.indexOf(e, d)) && -1 != (f = i.indexOf(t, u + a)) ? (d != u && p.push(i.substring(d, u)), p.push(d = n(g = i.substring(u + a, f))), d.exp = g, d = f + s, g = !0) : (d != h && p.push(i.substring(d)), d = h);
        if ((h = p.length) || (p.push(""), h = 1), c && 1 < p.length) throw Mn("noconcat", i);
        if (!l || g) return m.length = h, d = function (e) {
          try {
            for (var t, n = 0, a = h; n < a; n++) {
              if ("function" == typeof(t = p[n])) if (t = t(e), null == (t = c ? o.getTrusted(c, t) : o.valueOf(t))) t = ""; else switch (typeof t) {
                case"string":
                  break;
                case"number":
                  t = "" + t;
                  break;
                default:
                  t = _(t)
              }
              m[n] = t
            }
            return m.join("")
          } catch (t) {
            e = Mn("interr", i, t.toString()), r(e)
          }
        }, d.exp = i, d.parts = p, d
      }

      var a = e.length, s = t.length;
      return i.startSymbol = function () {
        return e
      }, i.endSymbol = function () {
        return t
      }, i
    }]
  }

  function qe() {
    this.$get = ["$rootScope", "$window", "$q", function (e, t, n) {
      function r(r, i, a, s) {
        var l = t.setInterval, c = t.clearInterval, u = n.defer(), f = u.promise, d = 0, p = b(s) && !s;
        return a = b(a) ? a : 0, f.then(null, null, r), f.$$intervalId = l(function () {
          u.notify(d++), 0 < a && d >= a && (u.resolve(d), c(f.$$intervalId), delete o[f.$$intervalId]), p || e.$apply()
        }, i), o[f.$$intervalId] = u, f
      }

      var o = {};
      return r.cancel = function (e) {
        return !!(e && e.$$intervalId in o) && (o[e.$$intervalId].reject("canceled"), t.clearInterval(e.$$intervalId), delete o[e.$$intervalId], !0)
      }, r
    }]
  }

  function Ue() {
    this.$get = function () {
      return {
        id: "en-us",
        NUMBER_FORMATS: {
          DECIMAL_SEP: ".",
          GROUP_SEP: ",",
          PATTERNS: [{
            minInt: 1,
            minFrac: 0,
            maxFrac: 3,
            posPre: "",
            posSuf: "",
            negPre: "-",
            negSuf: "",
            gSize: 3,
            lgSize: 3
          }, {
            minInt: 1,
            minFrac: 2,
            maxFrac: 2,
            posPre: "¤",
            posSuf: "",
            negPre: "(¤",
            negSuf: ")",
            gSize: 3,
            lgSize: 3
          }],
          CURRENCY_SYM: "$"
        },
        DATETIME_FORMATS: {
          MONTH: "January February March April May June July August September October November December".split(" "),
          SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
          DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
          SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
          AMPMS: ["AM", "PM"],
          medium: "MMM d, y h:mm:ss a",
          short: "M/d/yy h:mm a",
          fullDate: "EEEE, MMMM d, y",
          longDate: "MMMM d, y",
          mediumDate: "MMM d, y",
          shortDate: "M/d/yy",
          mediumTime: "h:mm:ss a",
          shortTime: "h:mm a"
        },
        pluralCat: function (e) {
          return 1 === e ? "one" : "other"
        }
      }
    }
  }

  function He(e) {
    for (var t = (e = e.split("/")).length; t--;) e[t] = U(e[t]);
    return e.join("/")
  }

  function Ve(e, t, n) {
    e = wt(e, n), t.$$protocol = e.protocol, t.$$host = e.hostname, t.$$port = d(e.port) || Ln[e.protocol] || null
  }

  function ze(e, t, n) {
    var r = "/" !== e.charAt(0);
    r && (e = "/" + e), e = wt(e, n), t.$$path = decodeURIComponent(r && "/" === e.pathname.charAt(0) ? e.pathname.substring(1) : e.pathname), t.$$search = j(e.search), t.$$hash = decodeURIComponent(e.hash), t.$$path && "/" != t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
  }

  function We(e, t) {
    if (0 === t.indexOf(e)) return t.substr(e.length)
  }

  function Ge(e) {
    var t = e.indexOf("#");
    return -1 == t ? e : e.substr(0, t)
  }

  function Ye(e) {
    return e.substr(0, Ge(e).lastIndexOf("/") + 1)
  }

  function Xe(e, t) {
    this.$$html5 = !0, t = t || "";
    var r = Ye(e);
    Ve(e, this, e), this.$$parse = function (t) {
      var n = We(r, t);
      if (!x(n)) throw Fn("ipthprfx", t, r);
      ze(n, this, e), this.$$path || (this.$$path = "/"), this.$$compose()
    }, this.$$compose = function () {
      var e = q(this.$$search), t = this.$$hash ? "#" + U(this.$$hash) : "";
      this.$$url = He(this.$$path) + (e ? "?" + e : "") + t, this.$$absUrl = r + this.$$url.substr(1)
    }, this.$$parseLinkUrl = function (o, i) {
      var a, s;
      return (a = We(e, o)) !== n ? (s = a, s = (a = We(t, a)) !== n ? r + (We("/", a) || a) : e + s) : (a = We(r, o)) !== n ? s = r + a : r == o + "/" && (s = r), s && this.$$parse(s), !!s
    }
  }

  function Ke(e, t) {
    var n = Ye(e);
    Ve(e, this, e), this.$$parse = function (r) {
      var o = We(e, r) || We(n, r);
      if (!x(o = "#" == o.charAt(0) ? We(t, o) : this.$$html5 ? o : "")) throw Fn("ihshprfx", r, t);
      ze(o, this, e), r = this.$$path;
      var i = /^\/[A-Z]:(\/.*)/;
      0 === o.indexOf(e) && (o = o.replace(e, "")), i.exec(o) || (r = (o = i.exec(r)) ? o[1] : r), this.$$path = r, this.$$compose()
    }, this.$$compose = function () {
      var n = q(this.$$search), r = this.$$hash ? "#" + U(this.$$hash) : "";
      this.$$url = He(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = e + (this.$$url ? t + this.$$url : "")
    }, this.$$parseLinkUrl = function (t, n) {
      return Ge(e) == Ge(t) && (this.$$parse(t), !0)
    }
  }

  function Qe(e, t) {
    this.$$html5 = !0, Ke.apply(this, arguments);
    var n = Ye(e);
    this.$$parseLinkUrl = function (r, o) {
      var i, a;
      return e == Ge(r) ? i = r : (a = We(n, r)) ? i = e + t + a : n === r + "/" && (i = n), i && this.$$parse(i), !!i
    }, this.$$compose = function () {
      var n = q(this.$$search), r = this.$$hash ? "#" + U(this.$$hash) : "";
      this.$$url = He(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = e + t + this.$$url
    }
  }

  function Je(e) {
    return function () {
      return this[e]
    }
  }

  function Ze(e, t) {
    return function (n) {
      return v(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
    }
  }

  function et() {
    var t = "", n = !1;
    this.hashPrefix = function (e) {
      return b(e) ? (t = e, this) : t
    }, this.html5Mode = function (e) {
      return b(e) ? (n = e, this) : n
    }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function (r, o, i, a) {
      function s(e) {
        r.$broadcast("$locationChangeSuccess", l.absUrl(), e)
      }

      var l, c = o.baseHref(), u = o.url();
      n ? (c = u.substring(0, u.indexOf("/", u.indexOf("//") + 2)) + (c || "/"), i = i.history ? Xe : Qe) : (c = Ge(u), i = Ke), (l = new i(c, "#" + t)).$$parseLinkUrl(u, u);
      var f = /^\s*(javascript|mailto):/i;
      a.on("click", function (t) {
        if (!t.ctrlKey && !t.metaKey && 2 != t.which) {
          for (var n = Vt(t.target); "a" !== Xt(n[0].nodeName);) if (n[0] === a[0] || !(n = n.parent())[0]) return;
          var i = n.prop("href"), s = n.attr("href") || n.attr("xlink:href");
          y(i) && "[object SVGAnimatedString]" === i.toString() && (i = wt(i.animVal).href), f.test(i) || !i || n.attr("target") || t.isDefaultPrevented() || !l.$$parseLinkUrl(i, s) || (t.preventDefault(), l.absUrl() != o.url() && (r.$apply(), e.angular["ff-684208-preventDefault"] = !0))
        }
      }), l.absUrl() != u && o.url(l.absUrl(), !0), o.onUrlChange(function (e) {
        l.absUrl() != e && (r.$evalAsync(function () {
          var t = l.absUrl();
          l.$$parse(e), r.$broadcast("$locationChangeStart", e, t).defaultPrevented ? (l.$$parse(t), o.url(t)) : s(t)
        }), r.$$phase || r.$digest())
      });
      var d = 0;
      return r.$watch(function () {
        var e = o.url(), t = l.$$replace;
        return d && e == l.absUrl() || (d++, r.$evalAsync(function () {
          r.$broadcast("$locationChangeStart", l.absUrl(), e).defaultPrevented ? l.$$parse(e) : (o.url(l.absUrl(), t), s(e))
        })), l.$$replace = !1, d
      }), l
    }]
  }

  function tt() {
    var e = !0, t = this;
    this.debugEnabled = function (t) {
      return b(t) ? (e = t, this) : e
    }, this.$get = ["$window", function (n) {
      function r(e) {
        return e instanceof Error && (e.stack ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
      }

      function o(e) {
        var t = n.console || {}, o = t[e] || t.log || h;
        e = !1;
        try {
          e = !!o.apply
        } catch (e) {
        }
        return e ? function () {
          var e = [];
          return i(arguments, function (t) {
            e.push(r(t))
          }), o.apply(t, e)
        } : function (e, t) {
          o(e, null == t ? "" : t)
        }
      }

      return {
        log: o("log"), info: o("info"), warn: o("warn"), error: o("error"), debug: function () {
          var n = o("debug");
          return function () {
            e && n.apply(t, arguments)
          }
        }()
      }
    }]
  }

  function nt(e, t) {
    if ("__defineGetter__" === e || "__defineSetter__" === e || "__lookupGetter__" === e || "__lookupSetter__" === e || "__proto__" === e) throw Rn("isecfld", t);
    return e
  }

  function rt(e, t) {
    if (e) {
      if (e.constructor === e) throw Rn("isecfn", t);
      if (e.document && e.location && e.alert && e.setInterval) throw Rn("isecwindow", t);
      if (e.children && (e.nodeName || e.prop && e.attr && e.find)) throw Rn("isecdom", t);
      if (e === Object) throw Rn("isecobj", t)
    }
    return e
  }

  function ot(e, t, r, o, i) {
    rt(e, o), i = i || {}, t = t.split(".");
    for (var a, s = 0; 1 < t.length; s++) {
      var l = rt(e[a = nt(t.shift(), o)], o);
      l || (l = {}, e[a] = l), (e = l).then && i.unwrapPromises && (Bn(o), "$$v" in e || function (e) {
        e.then(function (t) {
          e.$$v = t
        })
      }(e), e.$$v === n && (e.$$v = {}), e = e.$$v)
    }
    return a = nt(t.shift(), o), rt(e[a], o), e[a] = r
  }

  function it(e) {
    return "constructor" == e
  }

  function at(e, t, r, o, i, a, s) {
    nt(e, a), nt(t, a), nt(r, a), nt(o, a), nt(i, a);
    var l = function (e) {
        return rt(e, a)
      }, c = s.expensiveChecks, u = c || it(e) ? l : g, f = c || it(t) ? l : g, d = c || it(r) ? l : g,
      p = c || it(o) ? l : g, h = c || it(i) ? l : g;
    return s.unwrapPromises ? function (s, l) {
      var c, g = l && l.hasOwnProperty(e) ? l : s;
      return null == g ? g : ((g = u(g[e])) && g.then && (Bn(a), "$$v" in g || (c = g, c.$$v = n, c.then(function (e) {
        c.$$v = u(e)
      })), g = u(g.$$v)), t ? null == g ? n : ((g = f(g[t])) && g.then && (Bn(a), "$$v" in g || (c = g, c.$$v = n, c.then(function (e) {
        c.$$v = f(e)
      })), g = f(g.$$v)), r ? null == g ? n : ((g = d(g[r])) && g.then && (Bn(a), "$$v" in g || (c = g, c.$$v = n, c.then(function (e) {
        c.$$v = d(e)
      })), g = d(g.$$v)), o ? null == g ? n : ((g = p(g[o])) && g.then && (Bn(a), "$$v" in g || (c = g, c.$$v = n, c.then(function (e) {
        c.$$v = p(e)
      })), g = p(g.$$v)), i ? null == g ? n : ((g = h(g[i])) && g.then && (Bn(a), "$$v" in g || (c = g, c.$$v = n, c.then(function (e) {
        c.$$v = h(e)
      })), g = h(g.$$v)), g) : g) : g) : g) : g)
    } : function (a, s) {
      var l = s && s.hasOwnProperty(e) ? s : a;
      return null == l ? l : (l = u(l[e]), t ? null == l ? n : (l = f(l[t]), r ? null == l ? n : (l = d(l[r]), o ? null == l ? n : (l = p(l[o]), i ? null == l ? n : l = h(l[i]) : l) : l) : l) : l)
    }
  }

  function st(e, t) {
    return function (n, r) {
      return e(n, r, Bn, rt, t)
    }
  }

  function lt(e, t, r) {
    var o = t.expensiveChecks, a = o ? Xn : Yn;
    if (a.hasOwnProperty(e)) return a[e];
    var s, l = e.split("."), c = l.length;
    if (t.csp) s = 6 > c ? at(l[0], l[1], l[2], l[3], l[4], r, t) : function (e, o) {
      var i, a = 0;
      do {
        i = at(l[a++], l[a++], l[a++], l[a++], l[a++], r, t)(e, o), o = n, e = i
      } while (a < c);
      return i
    }; else {
      var u = "var p;\n";
      o && (u += "s = eso(s, fe);\nl = eso(l, fe);\n");
      var f = o;
      i(l, function (e, n) {
        nt(e, r);
        var i = (n ? "s" : '((l&&l.hasOwnProperty("' + e + '"))?l:s)') + '["' + e + '"]', a = o || it(e);
        a && (i = "eso(" + i + ", fe)", f = !0), u += "if(s == null) return undefined;\ns=" + i + ";\n", t.unwrapPromises && (u += 'if (s && s.then) {\n pw("' + r.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=' + (a ? "eso(v)" : "v") + ";});\n}\n s=" + (a ? "eso(s.$$v)" : "s.$$v") + "\n}\n")
      }), u += "return s;", (s = new Function("s", "l", "pw", "eso", "fe", u)).toString = m(u), (f || t.unwrapPromises) && (s = st(s, r))
    }
    return "hasOwnProperty" !== e && (a[e] = s), s
  }

  function ct() {
    var e = {}, t = {}, n = {csp: !1, unwrapPromises: !1, logPromiseWarnings: !0, expensiveChecks: !1};
    this.unwrapPromises = function (e) {
      return b(e) ? (n.unwrapPromises = !!e, this) : n.unwrapPromises
    }, this.logPromiseWarnings = function (e) {
      return b(e) ? (n.logPromiseWarnings = e, this) : n.logPromiseWarnings
    }, this.$get = ["$filter", "$sniffer", "$log", function (r, o, i) {
      n.csp = o.csp;
      var a = {
        csp: n.csp,
        unwrapPromises: n.unwrapPromises,
        logPromiseWarnings: n.logPromiseWarnings,
        expensiveChecks: !0
      };
      return Bn = function (e) {
        n.logPromiseWarnings && !jn.hasOwnProperty(e) && (jn[e] = !0, i.warn("[$parse] Promise found in the expression `" + e + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
      }, function (o, i) {
        var s;
        switch (typeof o) {
          case"string":
            var l = i ? t : e;
            if (l.hasOwnProperty(o)) return l[o];
            var c = new Wn(s = i ? a : n);
            return s = new Gn(c, r, s).parse(o), "hasOwnProperty" !== o && (l[o] = s), s;
          case"function":
            return o;
          default:
            return h
        }
      }
    }]
  }

  function ut() {
    this.$get = ["$rootScope", "$exceptionHandler", function (e, t) {
      return ft(function (t) {
        e.$evalAsync(t)
      }, t)
    }]
  }

  function ft(e, t) {
    function r(e) {
      return e
    }

    function o(e) {
      return l(e)
    }

    var a = function () {
      var i, l, u = [];
      return l = {
        resolve: function (t) {
          if (u) {
            var r = u;
            u = n, i = s(t), r.length && e(function () {
              for (var e, t = 0, n = r.length; t < n; t++) e = r[t], i.then(e[0], e[1], e[2])
            })
          }
        }, reject: function (e) {
          l.resolve(c(e))
        }, notify: function (t) {
          if (u) {
            var n = u;
            u.length && e(function () {
              for (var e = 0, r = n.length; e < r; e++) n[e][2](t)
            })
          }
        }, promise: {
          then: function (e, n, s) {
            var l = a(), c = function (n) {
              try {
                l.resolve((k(e) ? e : r)(n))
              } catch (e) {
                l.reject(e), t(e)
              }
            }, f = function (e) {
              try {
                l.resolve((k(n) ? n : o)(e))
              } catch (e) {
                l.reject(e), t(e)
              }
            }, d = function (e) {
              try {
                l.notify((k(s) ? s : r)(e))
              } catch (e) {
                t(e)
              }
            };
            return u ? u.push([c, f, d]) : i.then(c, f, d), l.promise
          }, catch: function (e) {
            return this.then(null, e)
          }, finally: function (e) {
            function t(e, t) {
              var n = a();
              return t ? n.resolve(e) : n.reject(e), n.promise
            }

            function n(n, o) {
              var i = null;
              try {
                i = (e || r)()
              } catch (e) {
                return t(e, !1)
              }
              return i && k(i.then) ? i.then(function () {
                return t(n, o)
              }, function (e) {
                return t(e, !1)
              }) : t(n, o)
            }

            return this.then(function (e) {
              return n(e, !0)
            }, function (e) {
              return n(e, !1)
            })
          }
        }
      }
    }, s = function (t) {
      return t && k(t.then) ? t : {
        then: function (n) {
          var r = a();
          return e(function () {
            r.resolve(n(t))
          }), r.promise
        }
      }
    }, l = function (e) {
      var t = a();
      return t.reject(e), t.promise
    }, c = function (n) {
      return {
        then: function (r, i) {
          var s = a();
          return e(function () {
            try {
              s.resolve((k(i) ? i : o)(n))
            } catch (e) {
              s.reject(e), t(e)
            }
          }), s.promise
        }
      }
    };
    return {
      defer: a, reject: l, when: function (n, i, c, u) {
        var f, d = a(), p = function (e) {
          try {
            return (k(i) ? i : r)(e)
          } catch (e) {
            return t(e), l(e)
          }
        }, h = function (e) {
          try {
            return (k(c) ? c : o)(e)
          } catch (e) {
            return t(e), l(e)
          }
        }, g = function (e) {
          try {
            return (k(u) ? u : r)(e)
          } catch (e) {
            t(e)
          }
        };
        return e(function () {
          s(n).then(function (e) {
            f || (f = !0, d.resolve(s(e).then(p, h, g)))
          }, function (e) {
            f || (f = !0, d.resolve(h(e)))
          }, function (e) {
            f || d.notify(g(e))
          })
        }), d.promise
      }, all: function (e) {
        var t = a(), n = 0, r = on(e) ? [] : {};
        return i(e, function (e, o) {
          n++, s(e).then(function (e) {
            r.hasOwnProperty(o) || (r[o] = e, --n || t.resolve(r))
          }, function (e) {
            r.hasOwnProperty(o) || t.reject(e)
          })
        }), 0 === n && t.resolve(r), t.promise
      }
    }
  }

  function dt() {
    this.$get = ["$window", "$timeout", function (e, t) {
      var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame,
        r = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
        o = !!n, i = o ? function (e) {
          var t = n(e);
          return function () {
            r(t)
          }
        } : function (e) {
          var n = t(e, 16.66, !1);
          return function () {
            t.cancel(n)
          }
        };
      return i.supported = o, i
    }]
  }

  function pt() {
    var e = 10, t = r("$rootScope"), n = null;
    this.digestTtl = function (t) {
      return arguments.length && (e = t), e
    }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (r, a, s, l) {
      function u() {
        this.$id = c(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.this = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$postDigestQueue = [], this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = {}
      }

      function f(e) {
        if (m.$$phase) throw t("inprog", m.$$phase);
        m.$$phase = e
      }

      function d(e, t) {
        var n = s(e);
        return Y(n, t), n
      }

      function p(e, t, n) {
        do {
          e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n]
        } while (e = e.$parent)
      }

      function g() {
      }

      u.prototype = {
        constructor: u, $new: function (e) {
          return e ? (e = new u, e.$root = this.$root, e.$$asyncQueue = this.$$asyncQueue, e.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function () {
            this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$id = c(), this.$$childScopeClass = null
          }, this.$$childScopeClass.prototype = this), e = new this.$$childScopeClass), e.this = e, e.$parent = this, e.$$prevSibling = this.$$childTail, this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = e : this.$$childHead = this.$$childTail = e, e
        }, $watch: function (e, t, r) {
          var o = d(e, "watch"), i = this.$$watchers, a = {fn: t, last: g, get: o, exp: e, eq: !!r};
          if (n = null, !k(t)) {
            var s = d(t || h, "listener");
            a.fn = function (e, t, n) {
              s(n)
            }
          }
          if ("string" == typeof e && o.constant) {
            var l = a.fn;
            a.fn = function (e, t, n) {
              l.call(this, e, t, n), N(i, a)
            }
          }
          return i || (i = this.$$watchers = []), i.unshift(a), function () {
            N(i, a), n = null
          }
        }, $watchCollection: function (e, t) {
          var n, r, i, a = this, l = 1 < t.length, c = 0, u = s(e), f = [], d = {}, p = !0, h = 0;
          return this.$watch(function () {
            var e, t;
            if (y(n = u(a))) if (o(n)) for (r !== f && (r = f, h = r.length = 0, c++), e = n.length, h !== e && (c++, r.length = h = e), t = 0; t < e; t++) r[t] != r[t] && n[t] != n[t] || r[t] === n[t] || (c++, r[t] = n[t]); else {
              r !== d && (r = d = {}, h = 0, c++), e = 0;
              for (t in n) n.hasOwnProperty(t) && (e++, r.hasOwnProperty(t) ? r[t] != r[t] && n[t] != n[t] || r[t] === n[t] || (c++, r[t] = n[t]) : (h++, r[t] = n[t], c++));
              if (h > e) for (t in c++, r) r.hasOwnProperty(t) && !n.hasOwnProperty(t) && (h--, delete r[t])
            } else r !== n && (r = n, c++);
            return c
          }, function () {
            if (p ? (p = !1, t(n, n, a)) : t(n, i, a), l) if (y(n)) if (o(n)) {
              i = Array(n.length);
              for (var e = 0; e < n.length; e++) i[e] = n[e]
            } else for (e in i = {}, n) Kt.call(n, e) && (i[e] = n[e]); else i = n
          })
        }, $digest: function () {
          var r, o, i, s, c, u, d, p, h, v, b = this.$$asyncQueue, y = this.$$postDigestQueue, x = e, w = [];
          f("$digest"), l.$$checkUrlChange(), n = null;
          do {
            for (u = !1, d = this; b.length;) {
              try {
                (v = b.shift()).scope.$eval(v.expression)
              } catch (e) {
                m.$$phase = null, a(e)
              }
              n = null
            }
            e:do {
              if (s = d.$$watchers) for (c = s.length; c--;) try {
                if (r = s[c]) if ((o = r.get(d)) === (i = r.last) || (r.eq ? D(o, i) : "number" == typeof o && "number" == typeof i && isNaN(o) && isNaN(i))) {
                  if (r === n) {
                    u = !1;
                    break e
                  }
                } else u = !0, n = r, r.last = r.eq ? P(o, null) : o, r.fn(o, i === g ? o : i, d), 5 > x && (p = 4 - x, w[p] || (w[p] = []), h = k(r.exp) ? "fn: " + (r.exp.name || r.exp.toString()) : r.exp, h += "; newVal: " + _(o) + "; oldVal: " + _(i), w[p].push(h))
              } catch (e) {
                m.$$phase = null, a(e)
              }
              if (!(s = d.$$childHead || d !== this && d.$$nextSibling)) for (; d !== this && !(s = d.$$nextSibling);) d = d.$parent
            } while (d = s);
            if ((u || b.length) && !x--) throw m.$$phase = null, t("infdig", e, _(w))
          } while (u || b.length);
          for (m.$$phase = null; y.length;) try {
            y.shift()()
          } catch (e) {
            a(e)
          }
        }, $destroy: function () {
          if (!this.$$destroyed) {
            var e = this.$parent;
            this.$broadcast("$destroy"), this.$$destroyed = !0, this !== m && (i(this.$$listenerCount, I(null, p, this)), e.$$childHead == this && (e.$$childHead = this.$$nextSibling), e.$$childTail == this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = h, this.$on = this.$watch = function () {
              return h
            })
          }
        }, $eval: function (e, t) {
          return s(e)(this, t)
        }, $evalAsync: function (e) {
          m.$$phase || m.$$asyncQueue.length || l.defer(function () {
            m.$$asyncQueue.length && m.$digest()
          }), this.$$asyncQueue.push({scope: this, expression: e})
        }, $$postDigest: function (e) {
          this.$$postDigestQueue.push(e)
        }, $apply: function (e) {
          try {
            return f("$apply"), this.$eval(e)
          } catch (e) {
            a(e)
          } finally {
            m.$$phase = null;
            try {
              m.$digest()
            } catch (e) {
              throw a(e), e
            }
          }
        }, $on: function (e, t) {
          var n = this.$$listeners[e];
          n || (this.$$listeners[e] = n = []), n.push(t);
          var r = this;
          do {
            r.$$listenerCount[e] || (r.$$listenerCount[e] = 0), r.$$listenerCount[e]++
          } while (r = r.$parent);
          var o = this;
          return function () {
            var r = A(n, t);
            -1 !== r && (n[r] = null, p(o, 1, e))
          }
        }, $emit: function (e, t) {
          var n, r, o, i = [], s = this, l = !1, c = {
            name: e, targetScope: s, stopPropagation: function () {
              l = !0
            }, preventDefault: function () {
              c.defaultPrevented = !0
            }, defaultPrevented: !1
          }, u = [c].concat(Jt.call(arguments, 1));
          do {
            for (n = s.$$listeners[e] || i, c.currentScope = s, r = 0, o = n.length; r < o; r++) if (n[r]) try {
              n[r].apply(null, u)
            } catch (e) {
              a(e)
            } else n.splice(r, 1), r--, o--;
            if (l) break;
            s = s.$parent
          } while (s);
          return c
        }, $broadcast: function (e, t) {
          for (var n, r, o = this, i = this, s = {
            name: e, targetScope: this, preventDefault: function () {
              s.defaultPrevented = !0
            }, defaultPrevented: !1
          }, l = [s].concat(Jt.call(arguments, 1)); o = i;) {
            for (s.currentScope = o, n = 0, r = (i = o.$$listeners[e] || []).length; n < r; n++) if (i[n]) try {
              i[n].apply(null, l)
            } catch (e) {
              a(e)
            } else i.splice(n, 1), n--, r--;
            if (!(i = o.$$listenerCount[e] && o.$$childHead || o !== this && o.$$nextSibling)) for (; o !== this && !(i = o.$$nextSibling);) o = o.$parent
          }
          return s
        }
      };
      var m = new u;
      return m
    }]
  }

  function ht() {
    var e = /^\s*(https?|ftp|mailto|tel|file):/, t = /^\s*((https?|ftp|file):|data:image\/)/;
    this.aHrefSanitizationWhitelist = function (t) {
      return b(t) ? (e = t, this) : e
    }, this.imgSrcSanitizationWhitelist = function (e) {
      return b(e) ? (t = e, this) : t
    }, this.$get = function () {
      return function (n, r) {
        var o, i = r ? t : e;
        return Ht && !(8 <= Ht) || "" === (o = wt(n).href) || o.match(i) ? n : "unsafe:" + o
      }
    }
  }

  function gt(e) {
    if ("self" === e) return e;
    if (x(e)) {
      if (-1 < e.indexOf("***")) throw Kn("iwcard", e);
      return e = e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), RegExp("^" + e + "$")
    }
    if (T(e)) return RegExp("^" + e.source + "$");
    throw Kn("imatcher")
  }

  function mt(e) {
    var t = [];
    return b(e) && i(e, function (e) {
      t.push(gt(e))
    }), t
  }

  function vt() {
    this.SCE_CONTEXTS = Qn;
    var e = ["self"], t = [];
    this.resourceUrlWhitelist = function (t) {
      return arguments.length && (e = mt(t)), e
    }, this.resourceUrlBlacklist = function (e) {
      return arguments.length && (t = mt(e)), t
    }, this.$get = ["$injector", function (r) {
      function o(e) {
        var t = function (e) {
          this.$$unwrapTrustedValue = function () {
            return e
          }
        };
        return e && (t.prototype = new e), t.prototype.valueOf = function () {
          return this.$$unwrapTrustedValue()
        }, t.prototype.toString = function () {
          return this.$$unwrapTrustedValue().toString()
        }, t
      }

      var i = function (e) {
        throw Kn("unsafe")
      };
      r.has("$sanitize") && (i = r.get("$sanitize"));
      var a = o(), s = {};
      return s[Qn.HTML] = o(a), s[Qn.CSS] = o(a), s[Qn.URL] = o(a), s[Qn.JS] = o(a), s[Qn.RESOURCE_URL] = o(s[Qn.URL]), {
        trustAs: function (e, t) {
          var r = s.hasOwnProperty(e) ? s[e] : null;
          if (!r) throw Kn("icontext", e, t);
          if (null === t || t === n || "" === t) return t;
          if ("string" != typeof t) throw Kn("itype", e);
          return new r(t)
        }, getTrusted: function (r, o) {
          if (null === o || o === n || "" === o) return o;
          if ((c = s.hasOwnProperty(r) ? s[r] : null) && o instanceof c) return o.$$unwrapTrustedValue();
          if (r === Qn.RESOURCE_URL) {
            var a, l, c = wt(o.toString()), u = !1;
            for (a = 0, l = e.length; a < l; a++) if ("self" === e[a] ? $t(c) : e[a].exec(c.href)) {
              u = !0;
              break
            }
            if (u) for (a = 0, l = t.length; a < l; a++) if ("self" === t[a] ? $t(c) : t[a].exec(c.href)) {
              u = !1;
              break
            }
            if (u) return o;
            throw Kn("insecurl", o.toString())
          }
          if (r === Qn.HTML) return i(o);
          throw Kn("unsafe")
        }, valueOf: function (e) {
          return e instanceof a ? e.$$unwrapTrustedValue() : e
        }
      }
    }]
  }

  function bt() {
    var e = !0;
    this.enabled = function (t) {
      return arguments.length && (e = !!t), e
    }, this.$get = ["$parse", "$sniffer", "$sceDelegate", function (t, n, r) {
      if (e && n.msie && 8 > n.msieDocumentMode) throw Kn("iequirks");
      var o = O(Qn);
      o.isEnabled = function () {
        return e
      }, o.trustAs = r.trustAs, o.getTrusted = r.getTrusted, o.valueOf = r.valueOf, e || (o.trustAs = o.getTrusted = function (e, t) {
        return t
      }, o.valueOf = g), o.parseAs = function (e, n) {
        var r = t(n);
        return r.literal && r.constant ? r : function (t, n) {
          return o.getTrusted(e, r(t, n))
        }
      };
      var a = o.parseAs, s = o.getTrusted, l = o.trustAs;
      return i(Qn, function (e, t) {
        var n = Xt(t);
        o[Z("parse_as_" + n)] = function (t) {
          return a(e, t)
        }, o[Z("get_trusted_" + n)] = function (t) {
          return s(e, t)
        }, o[Z("trust_as_" + n)] = function (t) {
          return l(e, t)
        }
      }), o
    }]
  }

  function yt() {
    this.$get = ["$window", "$document", function (e, t) {
      var n, r = {}, o = d((/android (\d+)/.exec(Xt((e.navigator || {}).userAgent)) || [])[1]),
        i = /Boxee/i.test((e.navigator || {}).userAgent), a = t[0] || {}, s = a.documentMode,
        l = /^(Moz|webkit|O|ms)(?=[A-Z])/, c = a.body && a.body.style, u = !1, f = !1;
      if (c) {
        for (var p in c) if (u = l.exec(p)) {
          n = (n = u[0]).substr(0, 1).toUpperCase() + n.substr(1);
          break
        }
        n || (n = "WebkitOpacity" in c && "webkit"), u = !!("transition" in c || n + "Transition" in c), f = !!("animation" in c || n + "Animation" in c), !o || u && f || (u = x(a.body.style.webkitTransition), f = x(a.body.style.webkitAnimation))
      }
      return {
        history: !(!e.history || !e.history.pushState || 4 > o || i),
        hashchange: "onhashchange" in e && (!s || 7 < s),
        hasEvent: function (e) {
          if ("input" == e && 9 == Ht) return !1;
          if (v(r[e])) {
            var t = a.createElement("div");
            r[e] = "on" + e in t
          }
          return r[e]
        },
        csp: sn(),
        vendorPrefix: n,
        transitions: u,
        animations: f,
        android: o,
        msie: Ht,
        msieDocumentMode: s
      }
    }]
  }

  function xt() {
    this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function (e, t, n, r) {
      function o(o, a, s) {
        var l = n.defer(), c = l.promise, u = b(s) && !s;
        return a = t.defer(function () {
          try {
            l.resolve(o())
          } catch (e) {
            l.reject(e), r(e)
          } finally {
            delete i[c.$$timeoutId]
          }
          u || e.$apply()
        }, a), c.$$timeoutId = a, i[a] = l, c
      }

      var i = {};
      return o.cancel = function (e) {
        return !!(e && e.$$timeoutId in i) && (i[e.$$timeoutId].reject("canceled"), delete i[e.$$timeoutId], t.defer.cancel(e.$$timeoutId))
      }, o
    }]
  }

  function wt(e, t) {
    var n = e;
    return Ht && (Jn.setAttribute("href", n), n = Jn.href), Jn.setAttribute("href", n), {
      href: Jn.href,
      protocol: Jn.protocol ? Jn.protocol.replace(/:$/, "") : "",
      host: Jn.host,
      search: Jn.search ? Jn.search.replace(/^\?/, "") : "",
      hash: Jn.hash ? Jn.hash.replace(/^#/, "") : "",
      hostname: Jn.hostname,
      port: Jn.port,
      pathname: "/" === Jn.pathname.charAt(0) ? Jn.pathname : "/" + Jn.pathname
    }
  }

  function $t(e) {
    return (e = x(e) ? wt(e) : e).protocol === Zn.protocol && e.host === Zn.host
  }

  function kt() {
    this.$get = m(e)
  }

  function Tt(e) {
    function t(r, o) {
      if (y(r)) {
        var a = {};
        return i(r, function (e, n) {
          a[n] = t(n, e)
        }), a
      }
      return e.factory(r + n, o)
    }

    var n = "Filter";
    this.register = t, this.$get = ["$injector", function (e) {
      return function (t) {
        return e.get(t + n)
      }
    }], t("currency", Ct), t("date", Dt), t("filter", St), t("json", It), t("limitTo", Mt), t("lowercase", or), t("number", Et), t("orderBy", _t), t("uppercase", ir)
  }

  function St() {
    return function (e, t, n) {
      if (!on(e)) return e;
      var r = typeof n, o = [];
      o.check = function (e) {
        for (var t = 0; t < o.length; t++) if (!o[t](e)) return !1;
        return !0
      }, "function" !== r && (n = "boolean" === r && n ? function (e, t) {
        return nn.equals(e, t)
      } : function (e, t) {
        if (e && t && "object" == typeof e && "object" == typeof t) {
          for (var r in e) if ("$" !== r.charAt(0) && Kt.call(e, r) && n(e[r], t[r])) return !0;
          return !1
        }
        return t = ("" + t).toLowerCase(), -1 < ("" + e).toLowerCase().indexOf(t)
      });
      var i = function (e, t) {
        if ("string" == typeof t && "!" === t.charAt(0)) return !i(e, t.substr(1));
        switch (typeof e) {
          case"boolean":
          case"number":
          case"string":
            return n(e, t);
          case"object":
            switch (typeof t) {
              case"object":
                return n(e, t);
              default:
                for (var r in e) if ("$" !== r.charAt(0) && i(e[r], t)) return !0
            }
            return !1;
          case"array":
            for (r = 0; r < e.length; r++) if (i(e[r], t)) return !0;
            return !1;
          default:
            return !1
        }
      };
      switch (typeof t) {
        case"boolean":
        case"number":
        case"string":
          t = {$: t};
        case"object":
          for (var a in t) !function (e) {
            void 0 !== t[e] && o.push(function (n) {
              return i("$" == e ? n : n && n[e], t[e])
            })
          }(a);
          break;
        case"function":
          o.push(t);
          break;
        default:
          return e
      }
      for (r = [], a = 0; a < e.length; a++) {
        var s = e[a];
        o.check(s) && r.push(s)
      }
      return r
    }
  }

  function Ct(e) {
    var t = e.NUMBER_FORMATS;
    return function (e, n) {
      return v(n) && (n = t.CURRENCY_SYM), At(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, 2).replace(/\u00A4/g, n)
    }
  }

  function Et(e) {
    var t = e.NUMBER_FORMATS;
    return function (e, n) {
      return At(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
    }
  }

  function At(e, t, n, r, o) {
    if (null == e || !isFinite(e) || y(e)) return "";
    var i = 0 > e, a = (e = Math.abs(e)) + "", s = "", l = [], c = !1;
    if (-1 !== a.indexOf("e") && ((u = a.match(/([\d\.]+)e(-?)(\d+)/)) && "-" == u[2] && u[3] > o + 1 ? (a = "0", e = 0) : (s = a, c = !0)), c) 0 < o && -1 < e && 1 > e && (s = e.toFixed(o)); else {
      a = (a.split(er)[1] || "").length, v(o) && (o = Math.min(Math.max(t.minFrac, a), t.maxFrac)), 0 === (e = +(Math.round(+(e.toString() + "e" + o)).toString() + "e" + -o)) && (i = !1), a = (e = ("" + e).split(er))[0], e = e[1] || "";
      var u = 0, f = t.lgSize, d = t.gSize;
      if (a.length >= f + d) for (u = a.length - f, c = 0; c < u; c++) 0 == (u - c) % d && 0 !== c && (s += n), s += a.charAt(c);
      for (c = u; c < a.length; c++) 0 == (a.length - c) % f && 0 !== c && (s += n), s += a.charAt(c);
      for (; e.length < o;) e += "0";
      o && "0" !== o && (s += r + e.substr(0, o))
    }
    return l.push(i ? t.negPre : t.posPre), l.push(s), l.push(i ? t.negSuf : t.posSuf), l.join("")
  }

  function Nt(e, t, n) {
    var r = "";
    for (0 > e && (r = "-", e = -e), e = "" + e; e.length < t;) e = "0" + e;
    return n && (e = e.substr(e.length - t)), r + e
  }

  function Pt(e, t, n, r) {
    return n = n || 0, function (o) {
      return o = o["get" + e](), (0 < n || o > -n) && (o += n), 0 === o && -12 == n && (o = 12), Nt(o, t, r)
    }
  }

  function Ot(e, t) {
    return function (n, r) {
      var o = n["get" + e]();
      return r[Qt(t ? "SHORT" + e : e)][o]
    }
  }

  function Dt(e) {
    function t(e) {
      var t;
      if (t = e.match(n)) {
        e = new Date(0);
        var r = 0, o = 0, i = t[8] ? e.setUTCFullYear : e.setFullYear, a = t[8] ? e.setUTCHours : e.setHours;
        t[9] && (r = d(t[9] + t[10]), o = d(t[9] + t[11])), i.call(e, d(t[1]), d(t[2]) - 1, d(t[3])), r = d(t[4] || 0) - r, o = d(t[5] || 0) - o, i = d(t[6] || 0), t = Math.round(1e3 * parseFloat("0." + (t[7] || 0))), a.call(e, r, o, i, t)
      }
      return e
    }

    var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    return function (n, r) {
      var o, a, s = "", l = [];
      if (r = r || "mediumDate", r = e.DATETIME_FORMATS[r] || r, x(n) && (n = rr.test(n) ? d(n) : t(n)), w(n) && (n = new Date(n)), !$(n)) return n;
      for (; r;) (a = nr.exec(r)) ? (l = l.concat(Jt.call(a, 1)), r = l.pop()) : (l.push(r), r = null);
      return i(l, function (t) {
        o = tr[t], s += o ? o(n, e.DATETIME_FORMATS) : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
      }), s
    }
  }

  function It() {
    return function (e) {
      return _(e, !0)
    }
  }

  function Mt() {
    return function (e, t) {
      if (!on(e) && !x(e)) return e;
      if (t = 1 / 0 === Math.abs(Number(t)) ? Number(t) : d(t), x(e)) return t ? 0 <= t ? e.slice(0, t) : e.slice(t, e.length) : "";
      var n, r, o = [];
      for (t > e.length ? t = e.length : t < -e.length && (t = -e.length), 0 < t ? (n = 0, r = t) : (n = e.length + t, r = e.length); n < r; n++) o.push(e[n]);
      return o
    }
  }

  function _t(e) {
    return function (t, n, r) {
      function i(e, t) {
        return F(t) ? function (t, n) {
          return e(n, t)
        } : e
      }

      function a(e, t) {
        var n = typeof e, r = typeof t;
        return n == r ? ($(e) && $(t) && (e = e.valueOf(), t = t.valueOf()), "string" == n && (e = e.toLowerCase(), t = t.toLowerCase()), e === t ? 0 : e < t ? -1 : 1) : n < r ? -1 : 1
      }

      return o(t) ? (0 === (n = on(n) ? n : [n]).length && (n = ["+"]), n = E(n, function (t) {
        var n = !1, r = t || g;
        if (x(t)) {
          if ("+" != t.charAt(0) && "-" != t.charAt(0) || (n = "-" == t.charAt(0), t = t.substring(1)), "" === t) return i(function (e, t) {
            return a(e, t)
          }, n);
          if ((r = e(t)).constant) {
            var o = r();
            return i(function (e, t) {
              return a(e[o], t[o])
            }, n)
          }
        }
        return i(function (e, t) {
          return a(r(e), r(t))
        }, n)
      }), Jt.call(t).sort(i(function (e, t) {
        for (var r = 0; r < n.length; r++) {
          var o = n[r](e, t);
          if (0 !== o) return o
        }
        return 0
      }, r))) : t
    }
  }

  function Lt(e) {
    return k(e) && (e = {link: e}), e.restrict = e.restrict || "AC", m(e)
  }

  function Ft(e, t, n, r) {
    function o(t, n) {
      n = n ? "-" + W(n, "-") : "", r.setClass(e, (t ? br : yr) + n, (t ? yr : br) + n)
    }

    var a = this, s = e.parent().controller("form") || lr, l = 0, c = a.$error = {}, u = [];
    a.$name = t.name || t.ngForm, a.$dirty = !1, a.$pristine = !0, a.$valid = !0, a.$invalid = !1, s.$addControl(a), e.addClass(xr), o(!0), a.$addControl = function (e) {
      X(e.$name, "input"), u.push(e), e.$name && (a[e.$name] = e)
    }, a.$removeControl = function (e) {
      e.$name && a[e.$name] === e && delete a[e.$name], i(c, function (t, n) {
        a.$setValidity(n, !0, e)
      }), N(u, e)
    }, a.$setValidity = function (e, t, n) {
      var r = c[e];
      if (t) r && (N(r, n), r.length || (--l || (o(t), a.$valid = !0, a.$invalid = !1), c[e] = !1, o(!0, e), s.$setValidity(e, !0, a))); else {
        if (l || o(t), r) {
          if (-1 != A(r, n)) return
        } else c[e] = r = [], l++, o(!1, e), s.$setValidity(e, !1, a);
        r.push(n), a.$valid = !1, a.$invalid = !0
      }
    }, a.$setDirty = function () {
      r.removeClass(e, xr), r.addClass(e, wr), a.$dirty = !0, a.$pristine = !1, s.$setDirty()
    }, a.$setPristine = function () {
      r.removeClass(e, wr), r.addClass(e, xr), a.$dirty = !1, a.$pristine = !0, i(u, function (e) {
        e.$setPristine()
      })
    }
  }

  function Bt(e, t, r, o) {
    return e.$setValidity(t, r), r ? o : n
  }

  function Rt(e, t) {
    var n, r;
    if (t) for (n = 0; n < t.length; ++n) if (r = t[n], e[r]) return !0;
    return !1
  }

  function jt(e, t, n, r, o) {
    y(o) && (e.$$hasNativeValidators = !0, e.$parsers.push(function (i) {
      if (e.$error[t] || Rt(o, r) || !Rt(o, n)) return i;
      e.$setValidity(t, !1)
    }))
  }

  function qt(e, t, n, o, i, a) {
    var s = t.prop(Yt), l = t[0].placeholder, c = {}, u = Xt(t[0].type);
    if (o.$$validityState = s, !i.android) {
      var f = !1;
      t.on("compositionstart", function (e) {
        f = !0
      }), t.on("compositionend", function () {
        f = !1, p()
      })
    }
    var p = function (r) {
      if (!f) {
        var i = t.val();
        Ht && "input" === (r || c).type && t[0].placeholder !== l ? l = t[0].placeholder : ("password" !== u && F(n.ngTrim || "T") && (i = an(i)), r = s && o.$$hasNativeValidators, (o.$viewValue !== i || "" === i && r) && (e.$root.$$phase ? o.$setViewValue(i) : e.$apply(function () {
          o.$setViewValue(i)
        })))
      }
    };
    if (i.hasEvent("input")) t.on("input", p); else {
      var h, g = function () {
        h || (h = a.defer(function () {
          p(), h = null
        }))
      };
      t.on("keydown", function (e) {
        91 === (e = e.keyCode) || 15 < e && 19 > e || 37 <= e && 40 >= e || g()
      }), i.hasEvent("paste") && t.on("paste cut", g)
    }
    t.on("change", p), o.$render = function () {
      t.val(o.$isEmpty(o.$viewValue) ? "" : o.$viewValue)
    };
    var m = n.ngPattern;
    if (m && ((i = m.match(/^\/(.*)\/([gim]*)$/)) ? (m = RegExp(i[1], i[2]), i = function (e) {
        return Bt(o, "pattern", o.$isEmpty(e) || m.test(e), e)
      }) : i = function (n) {
        var i = e.$eval(m);
        if (!i || !i.test) throw r("ngPattern")("noregexp", m, i, B(t));
        return Bt(o, "pattern", o.$isEmpty(n) || i.test(n), n)
      }, o.$formatters.push(i), o.$parsers.push(i)), n.ngMinlength) {
      var v = d(n.ngMinlength);
      i = function (e) {
        return Bt(o, "minlength", o.$isEmpty(e) || e.length >= v, e)
      }, o.$parsers.push(i), o.$formatters.push(i)
    }
    if (n.ngMaxlength) {
      var b = d(n.ngMaxlength);
      i = function (e) {
        return Bt(o, "maxlength", o.$isEmpty(e) || e.length <= b, e)
      }, o.$parsers.push(i), o.$formatters.push(i)
    }
  }

  function Ut(e, t) {
    return e = "ngClass" + e, ["$animate", function (n) {
      function r(e, t) {
        var n = [], r = 0;
        e:for (; r < e.length; r++) {
          for (var o = e[r], i = 0; i < t.length; i++) if (o == t[i]) continue e;
          n.push(o)
        }
        return n
      }

      function o(e) {
        if (!on(e)) {
          if (x(e)) return e.split(" ");
          if (y(e)) {
            var t = [];
            return i(e, function (e, n) {
              e && (t = t.concat(n.split(" ")))
            }), t
          }
        }
        return e
      }

      return {
        restrict: "AC", link: function (a, s, l) {
          function c(e, t) {
            var n = s.data("$classCounts") || {}, r = [];
            return i(e, function (e) {
              (0 < t || n[e]) && (n[e] = (n[e] || 0) + t, n[e] === +(0 < t) && r.push(e))
            }), s.data("$classCounts", n), r.join(" ")
          }

          function u(e) {
            if (!0 === t || a.$index % 2 === t) {
              d = o(e || []);
              if (f) {
                if (!D(e, f)) {
                  var i = o(f), u = r(d, i), d = c(d = r(i, d), -1);
                  0 === (u = c(u, 1)).length ? n.removeClass(s, d) : 0 === d.length ? n.addClass(s, u) : n.setClass(s, u, d)
                }
              } else {
                u = c(d, 1);
                l.$addClass(u)
              }
            }
            f = O(e)
          }

          var f;
          a.$watch(l[e], u, !0), l.$observe("class", function (t) {
            u(a.$eval(l[e]))
          }), "ngClass" !== e && a.$watch("$index", function (n, r) {
            var i = 1 & n;
            if (i !== (1 & r)) {
              var s = o(a.$eval(l[e]));
              i === t ? (i = c(s, 1), l.$addClass(i)) : (i = c(s, -1), l.$removeClass(i))
            }
          })
        }
      }
    }]
  }

  var Ht, Vt, zt, Wt, Gt, Yt = "validity", Xt = function (e) {
      return x(e) ? e.toLowerCase() : e
    }, Kt = Object.prototype.hasOwnProperty, Qt = function (e) {
      return x(e) ? e.toUpperCase() : e
    }, Jt = [].slice, Zt = [].push, en = Object.prototype.toString, tn = r("ng"), nn = e.angular || (e.angular = {}),
    rn = ["0", "0", "0"];
  Ht = d((/msie (\d+)/.exec(Xt(navigator.userAgent)) || [])[1]), isNaN(Ht) && (Ht = d((/trident\/.*; rv:(\d+)/.exec(Xt(navigator.userAgent)) || [])[1])), h.$inject = [], g.$inject = [];
  var on = k(Array.isArray) ? Array.isArray : function (e) {
    return "[object Array]" === en.call(e)
  }, an = String.prototype.trim ? function (e) {
    return x(e) ? e.trim() : e
  } : function (e) {
    return x(e) ? e.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : e
  };
  Gt = 9 > Ht ? function (e) {
    return (e = e.nodeName ? e : e[0]).scopeName && "HTML" != e.scopeName ? Qt(e.scopeName + ":" + e.nodeName) : e.nodeName
  } : function (e) {
    return e.nodeName ? e.nodeName : e[0].nodeName
  };
  var sn = function () {
    if (b(sn.isActive_)) return sn.isActive_;
    var e = !(!t.querySelector("[ng-csp]") && !t.querySelector("[data-ng-csp]"));
    if (!e) try {
      new Function("")
    } catch (t) {
      e = !0
    }
    return sn.isActive_ = e
  }, ln = /[A-Z]/g, cn = {full: "1.2.28", major: 1, minor: 2, dot: 28, codeName: "finnish-disembarkation"};
  te.expando = "ng339";
  var un = te.cache = {}, fn = 1, dn = e.document.addEventListener ? function (e, t, n) {
    e.addEventListener(t, n, !1)
  } : function (e, t, n) {
    e.attachEvent("on" + t, n)
  }, pn = e.document.removeEventListener ? function (e, t, n) {
    e.removeEventListener(t, n, !1)
  } : function (e, t, n) {
    e.detachEvent("on" + t, n)
  };
  te._data = function (e) {
    return this.cache[e[this.expando]] || {}
  };
  var hn = /([\:\-\_]+(.))/g, gn = /^moz([A-Z])/, mn = r("jqLite"), vn = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, bn = /<|&#?\w+;/,
    yn = /<([\w:]+)/, xn = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, wn = {
      option: [1, '<select multiple="multiple">', "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  wn.optgroup = wn.option, wn.tbody = wn.tfoot = wn.colgroup = wn.caption = wn.thead, wn.th = wn.td;
  var $n = te.prototype = {
    ready: function (n) {
      function r() {
        o || (o = !0, n())
      }

      var o = !1;
      "complete" === t.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), te(e).on("load", r))
    }, toString: function () {
      var e = [];
      return i(this, function (t) {
        e.push("" + t)
      }), "[" + e.join(", ") + "]"
    }, eq: function (e) {
      return Vt(0 <= e ? this[e] : this[this.length + e])
    }, length: 0, push: Zt, sort: [].sort, splice: [].splice
  }, kn = {};
  i("multiple selected checked disabled readOnly required open".split(" "), function (e) {
    kn[Xt(e)] = e
  });
  var Tn = {};
  i("input select option textarea button form details".split(" "), function (e) {
    Tn[Qt(e)] = !0
  }), i({data: se, removeData: ie}, function (e, t) {
    te[t] = e
  }), i({
    data: se, inheritedData: pe, scope: function (e) {
      return Vt.data(e, "$scope") || pe(e.parentNode || e, ["$isolateScope", "$scope"])
    }, isolateScope: function (e) {
      return Vt.data(e, "$isolateScope") || Vt.data(e, "$isolateScopeNoTemplate")
    }, controller: de, injector: function (e) {
      return pe(e, "$injector")
    }, removeAttr: function (e, t) {
      e.removeAttribute(t)
    }, hasClass: le, css: function (e, t, r) {
      if (t = Z(t), !b(r)) {
        var o;
        return 8 >= Ht && "" === (o = e.currentStyle && e.currentStyle[t]) && (o = "auto"), o = o || e.style[t], 8 >= Ht && (o = "" === o ? n : o), o
      }
      e.style[t] = r
    }, attr: function (e, t, r) {
      var o = Xt(t);
      if (kn[o]) {
        if (!b(r)) return e[t] || (e.attributes.getNamedItem(t) || h).specified ? o : n;
        r ? (e[t] = !0, e.setAttribute(t, o)) : (e[t] = !1, e.removeAttribute(o))
      } else if (b(r)) e.setAttribute(t, r); else if (e.getAttribute) return null === (e = e.getAttribute(t, 2)) ? n : e
    }, prop: function (e, t, n) {
      if (!b(n)) return e[t];
      e[t] = n
    }, text: function () {
      function e(e, n) {
        var r = t[e.nodeType];
        if (v(n)) return r ? e[r] : "";
        e[r] = n
      }

      var t = [];
      return 9 > Ht ? (t[1] = "innerText", t[3] = "nodeValue") : t[1] = t[3] = "textContent", e.$dv = "", e
    }(), val: function (e, t) {
      if (v(t)) {
        if ("SELECT" === Gt(e) && e.multiple) {
          var n = [];
          return i(e.options, function (e) {
            e.selected && n.push(e.value || e.text)
          }), 0 === n.length ? null : n
        }
        return e.value
      }
      e.value = t
    }, html: function (e, t) {
      if (v(t)) return e.innerHTML;
      for (var n = 0, r = e.childNodes; n < r.length; n++) re(r[n]);
      e.innerHTML = t
    }, empty: he
  }, function (e, t) {
    te.prototype[t] = function (t, r) {
      var o, i, a = this.length;
      if (e !== he && (2 == e.length && e !== le && e !== de ? t : r) === n) {
        if (y(t)) {
          for (o = 0; o < a; o++) if (e === se) e(this[o], t); else for (i in t) e(this[o], i, t[i]);
          return this
        }
        for (a = (o = e.$dv) === n ? Math.min(a, 1) : a, i = 0; i < a; i++) {
          var s = e(this[i], t, r);
          o = o ? o + s : s
        }
        return o
      }
      for (o = 0; o < a; o++) e(this[o], t, r);
      return this
    }
  }), i({
    removeData: ie, dealoc: re, on: function e(n, r, o, a) {
      if (b(a)) throw mn("onargs");
      var s = ae(n, "events"), l = ae(n, "handle");
      s || ae(n, "events", s = {}), l || ae(n, "handle", l = me(n, s)), i(r.split(" "), function (r) {
        var i = s[r];
        if (!i) {
          if ("mouseenter" == r || "mouseleave" == r) {
            var a = t.body.contains || t.body.compareDocumentPosition ? function (e, t) {
              var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
              return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
              if (t) for (; t = t.parentNode;) if (t === e) return !0;
              return !1
            };
            s[r] = [], e(n, {mouseleave: "mouseout", mouseenter: "mouseover"}[r], function (e) {
              var t = e.relatedTarget;
              t && (t === this || a(this, t)) || l(e, r)
            })
          } else dn(n, r, l), s[r] = [];
          i = s[r]
        }
        i.push(o)
      })
    }, off: oe, one: function (e, t, n) {
      (e = Vt(e)).on(t, function r() {
        e.off(t, n), e.off(t, r)
      }), e.on(t, n)
    }, replaceWith: function (e, t) {
      var n, r = e.parentNode;
      re(e), i(new te(t), function (t) {
        n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e), n = t
      })
    }, children: function (e) {
      var t = [];
      return i(e.childNodes, function (e) {
        1 === e.nodeType && t.push(e)
      }), t
    }, contents: function (e) {
      return e.contentDocument || e.childNodes || []
    }, append: function (e, t) {
      i(new te(t), function (t) {
        1 !== e.nodeType && 11 !== e.nodeType || e.appendChild(t)
      })
    }, prepend: function (e, t) {
      if (1 === e.nodeType) {
        var n = e.firstChild;
        i(new te(t), function (t) {
          e.insertBefore(t, n)
        })
      }
    }, wrap: function (e, t) {
      t = Vt(t)[0];
      var n = e.parentNode;
      n && n.replaceChild(t, e), t.appendChild(e)
    }, remove: function (e) {
      re(e);
      var t = e.parentNode;
      t && t.removeChild(e)
    }, after: function (e, t) {
      var n = e, r = e.parentNode;
      i(new te(t), function (e) {
        r.insertBefore(e, n.nextSibling), n = e
      })
    }, addClass: ue, removeClass: ce, toggleClass: function (e, t, n) {
      t && i(t.split(" "), function (t) {
        var r = n;
        v(r) && (r = !le(e, t)), (r ? ue : ce)(e, t)
      })
    }, parent: function (e) {
      return (e = e.parentNode) && 11 !== e.nodeType ? e : null
    }, next: function (e) {
      if (e.nextElementSibling) return e.nextElementSibling;
      for (e = e.nextSibling; null != e && 1 !== e.nodeType;) e = e.nextSibling;
      return e
    }, find: function (e, t) {
      return e.getElementsByTagName ? e.getElementsByTagName(t) : []
    }, clone: ne, triggerHandler: function (e, t, n) {
      var r, o;
      r = t.type || t;
      var a = (ae(e, "events") || {})[r];
      a && (r = {
        preventDefault: function () {
          this.defaultPrevented = !0
        }, isDefaultPrevented: function () {
          return !0 === this.defaultPrevented
        }, stopPropagation: h, type: r, target: e
      }, t.type && (r = f(r, t)), t = O(a), o = n ? [r].concat(n) : [r], i(t, function (t) {
        t.apply(e, o)
      }))
    }
  }, function (e, t) {
    te.prototype[t] = function (t, n, r) {
      for (var o, i = 0; i < this.length; i++) v(o) ? (o = e(this[i], t, n, r), b(o) && (o = Vt(o))) : fe(o, e(this[i], t, n, r));
      return b(o) ? o : this
    }, te.prototype.bind = te.prototype.on, te.prototype.unbind = te.prototype.off
  }), be.prototype = {
    put: function (e, t) {
      this[ve(e, this.nextUid)] = t
    }, get: function (e) {
      return this[ve(e, this.nextUid)]
    }, remove: function (e) {
      var t = this[e = ve(e, this.nextUid)];
      return delete this[e], t
    }
  };
  var Sn = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, Cn = /,/, En = /^\s*(_?)(\S+?)\1\s*$/,
    An = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Nn = r("$injector"), Pn = r("$animate"), On = ["$provide", function (e) {
      this.$$selectors = {}, this.register = function (t, n) {
        var r = t + "-animation";
        if (t && "." != t.charAt(0)) throw Pn("notcsel", t);
        this.$$selectors[t.substr(1)] = r, e.factory(r, n)
      }, this.classNameFilter = function (e) {
        return 1 === arguments.length && (this.$$classNameFilter = e instanceof RegExp ? e : null), this.$$classNameFilter
      }, this.$get = ["$timeout", "$$asyncCallback", function (e, t) {
        return {
          enter: function (e, n, r, o) {
            r ? r.after(e) : (n && n[0] || (n = r.parent()), n.append(e)), o && t(o)
          }, leave: function (e, n) {
            e.remove(), n && t(n)
          }, move: function (e, t, n, r) {
            this.enter(e, t, n, r)
          }, addClass: function (e, n, r) {
            n = x(n) ? n : on(n) ? n.join(" ") : "", i(e, function (e) {
              ue(e, n)
            }), r && t(r)
          }, removeClass: function (e, n, r) {
            n = x(n) ? n : on(n) ? n.join(" ") : "", i(e, function (e) {
              ce(e, n)
            }), r && t(r)
          }, setClass: function (e, n, r, o) {
            i(e, function (e) {
              ue(e, n), ce(e, r)
            }), o && t(o)
          }, enabled: h
        }
      }]
    }], Dn = r("$compile");
  Ee.$inject = ["$provide", "$$sanitizeUriProvider"];
  var In = /^(x[\:\-_]|data[\:\-_])/i, Mn = r("$interpolate"), _n = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
    Ln = {http: 80, https: 443, ftp: 21}, Fn = r("$location");
  Qe.prototype = Ke.prototype = Xe.prototype = {
    $$html5: !1, $$replace: !1, absUrl: Je("$$absUrl"), url: function (e) {
      return v(e) ? this.$$url : ((e = _n.exec(e))[1] && this.path(decodeURIComponent(e[1])), (e[2] || e[1]) && this.search(e[3] || ""), this.hash(e[5] || ""), this)
    }, protocol: Je("$$protocol"), host: Je("$$host"), port: Je("$$port"), path: Ze("$$path", function (e) {
      return "/" == (e = null !== e ? e.toString() : "").charAt(0) ? e : "/" + e
    }), search: function (e, t) {
      switch (arguments.length) {
        case 0:
          return this.$$search;
        case 1:
          if (x(e) || w(e)) e = e.toString(), this.$$search = j(e); else {
            if (!y(e)) throw Fn("isrcharg");
            i(e, function (t, n) {
              null == t && delete e[n]
            }), this.$$search = e
          }
          break;
        default:
          v(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
      }
      return this.$$compose(), this
    }, hash: Ze("$$hash", function (e) {
      return null !== e ? e.toString() : ""
    }), replace: function () {
      return this.$$replace = !0, this
    }
  };
  var Bn, Rn = r("$parse"), jn = {}, qn = Function.prototype.call, Un = Function.prototype.apply,
    Hn = Function.prototype.bind, Vn = {
      null: function () {
        return null
      }, true: function () {
        return !0
      }, false: function () {
        return !1
      }, undefined: h, "+": function (e, t, r, o) {
        return r = r(e, t), o = o(e, t), b(r) ? b(o) ? r + o : r : b(o) ? o : n
      }, "-": function (e, t, n, r) {
        return n = n(e, t), r = r(e, t), (b(n) ? n : 0) - (b(r) ? r : 0)
      }, "*": function (e, t, n, r) {
        return n(e, t) * r(e, t)
      }, "/": function (e, t, n, r) {
        return n(e, t) / r(e, t)
      }, "%": function (e, t, n, r) {
        return n(e, t) % r(e, t)
      }, "^": function (e, t, n, r) {
        return n(e, t) ^ r(e, t)
      }, "=": h, "===": function (e, t, n, r) {
        return n(e, t) === r(e, t)
      }, "!==": function (e, t, n, r) {
        return n(e, t) !== r(e, t)
      }, "==": function (e, t, n, r) {
        return n(e, t) == r(e, t)
      }, "!=": function (e, t, n, r) {
        return n(e, t) != r(e, t)
      }, "<": function (e, t, n, r) {
        return n(e, t) < r(e, t)
      }, ">": function (e, t, n, r) {
        return n(e, t) > r(e, t)
      }, "<=": function (e, t, n, r) {
        return n(e, t) <= r(e, t)
      }, ">=": function (e, t, n, r) {
        return n(e, t) >= r(e, t)
      }, "&&": function (e, t, n, r) {
        return n(e, t) && r(e, t)
      }, "||": function (e, t, n, r) {
        return n(e, t) || r(e, t)
      }, "&": function (e, t, n, r) {
        return n(e, t) & r(e, t)
      }, "|": function (e, t, n, r) {
        return r(e, t)(e, t, n(e, t))
      }, "!": function (e, t, n) {
        return !n(e, t)
      }
    }, zn = {n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"'}, Wn = function (e) {
      this.options = e
    };
  Wn.prototype = {
    constructor: Wn, lex: function (e) {
      for (this.text = e, this.index = 0, this.ch = n, this.lastCh = ":", this.tokens = []; this.index < this.text.length;) {
        if (this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch); else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdent(this.ch)) this.readIdent(); else if (this.is("(){}[].,;:?")) this.tokens.push({
          index: this.index,
          text: this.ch
        }), this.index++; else {
          if (this.isWhitespace(this.ch)) {
            this.index++;
            continue
          }
          var t = (e = this.ch + this.peek()) + this.peek(2), r = Vn[this.ch], o = Vn[e], i = Vn[t];
          i ? (this.tokens.push({
            index: this.index,
            text: t,
            fn: i
          }), this.index += 3) : o ? (this.tokens.push({
            index: this.index,
            text: e,
            fn: o
          }), this.index += 2) : r ? (this.tokens.push({
            index: this.index,
            text: this.ch,
            fn: r
          }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
        }
        this.lastCh = this.ch
      }
      return this.tokens
    }, is: function (e) {
      return -1 !== e.indexOf(this.ch)
    }, was: function (e) {
      return -1 !== e.indexOf(this.lastCh)
    }, peek: function (e) {
      return e = e || 1, this.index + e < this.text.length && this.text.charAt(this.index + e)
    }, isNumber: function (e) {
      return "0" <= e && "9" >= e
    }, isWhitespace: function (e) {
      return " " === e || "\r" === e || "\t" === e || "\n" === e || "\v" === e || " " === e
    }, isIdent: function (e) {
      return "a" <= e && "z" >= e || "A" <= e && "Z" >= e || "_" === e || "$" === e
    }, isExpOperator: function (e) {
      return "-" === e || "+" === e || this.isNumber(e)
    }, throwError: function (e, t, n) {
      throw n = n || this.index, t = b(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n, Rn("lexerr", e, t, this.text)
    }, readNumber: function () {
      for (var e = "", t = this.index; this.index < this.text.length;) {
        var n = Xt(this.text.charAt(this.index));
        if ("." == n || this.isNumber(n)) e += n; else {
          var r = this.peek();
          if ("e" == n && this.isExpOperator(r)) e += n; else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == e.charAt(e.length - 1)) e += n; else {
            if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != e.charAt(e.length - 1)) break;
            this.throwError("Invalid exponent")
          }
        }
        this.index++
      }
      e *= 1, this.tokens.push({
        index: t, text: e, literal: !0, constant: !0, fn: function () {
          return e
        }
      })
    }, readIdent: function () {
      for (var e, t, n, r, o = this, i = "", a = this.index; this.index < this.text.length && ("." === (r = this.text.charAt(this.index)) || this.isIdent(r) || this.isNumber(r));) "." === r && (e = this.index), i += r, this.index++;
      if (e) for (t = this.index; t < this.text.length;) {
        if ("(" === (r = this.text.charAt(t))) {
          n = i.substr(e - a + 1), i = i.substr(0, e - a), this.index = t;
          break
        }
        if (!this.isWhitespace(r)) break;
        t++
      }
      if (a = {index: a, text: i}, Vn.hasOwnProperty(i)) a.fn = Vn[i], a.literal = !0, a.constant = !0; else {
        var s = lt(i, this.options, this.text);
        a.fn = f(function (e, t) {
          return s(e, t)
        }, {
          assign: function (e, t) {
            return ot(e, i, t, o.text, o.options)
          }
        })
      }
      this.tokens.push(a), n && (this.tokens.push({index: e, text: "."}), this.tokens.push({index: e + 1, text: n}))
    }, readString: function (e) {
      var t = this.index;
      this.index++;
      for (var n = "", r = e, o = !1; this.index < this.text.length;) {
        var i = this.text.charAt(this.index), r = r + i;
        if (o) "u" === i ? ((o = this.text.substring(this.index + 1, this.index + 5)).match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + o + "]"), this.index += 4, n += String.fromCharCode(parseInt(o, 16))) : n += zn[i] || i, o = !1; else if ("\\" === i) o = !0; else {
          if (i === e) return this.index++, void this.tokens.push({
            index: t,
            text: r,
            string: n,
            literal: !0,
            constant: !0,
            fn: function () {
              return n
            }
          });
          n += i
        }
        this.index++
      }
      this.throwError("Unterminated quote", t)
    }
  };
  var Gn = function (e, t, n) {
    this.lexer = e, this.$filter = t, this.options = n
  };
  Gn.ZERO = f(function () {
    return 0
  }, {constant: !0}), Gn.prototype = {
    constructor: Gn, parse: function (e) {
      return this.text = e, this.tokens = this.lexer.lex(e), e = this.statements(), 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), e.literal = !!e.literal, e.constant = !!e.constant, e
    }, primary: function () {
      var e;
      if (this.expect("(")) e = this.filterChain(), this.consume(")"); else if (this.expect("[")) e = this.arrayDeclaration(); else if (this.expect("{")) e = this.object(); else {
        var t = this.expect();
        (e = t.fn) || this.throwError("not a primary expression", t), e.literal = !!t.literal, e.constant = !!t.constant
      }
      for (var n; t = this.expect("(", "[", ".");) "(" === t.text ? (e = this.functionCall(e, n), n = null) : "[" === t.text ? (n = e, e = this.objectIndex(e)) : "." === t.text ? (n = e, e = this.fieldAccess(e)) : this.throwError("IMPOSSIBLE");
      return e
    }, throwError: function (e, t) {
      throw Rn("syntax", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
    }, peekToken: function () {
      if (0 === this.tokens.length) throw Rn("ueoe", this.text);
      return this.tokens[0]
    }, peek: function (e, t, n, r) {
      if (0 < this.tokens.length) {
        var o = this.tokens[0], i = o.text;
        if (i === e || i === t || i === n || i === r || !(e || t || n || r)) return o
      }
      return !1
    }, expect: function (e, t, n, r) {
      return !!(e = this.peek(e, t, n, r)) && (this.tokens.shift(), e)
    }, consume: function (e) {
      this.expect(e) || this.throwError("is unexpected, expecting [" + e + "]", this.peek())
    }, unaryFn: function (e, t) {
      return f(function (n, r) {
        return e(n, r, t)
      }, {constant: t.constant})
    }, ternaryFn: function (e, t, n) {
      return f(function (r, o) {
        return e(r, o) ? t(r, o) : n(r, o)
      }, {constant: e.constant && t.constant && n.constant})
    }, binaryFn: function (e, t, n) {
      return f(function (r, o) {
        return t(r, o, e, n)
      }, {constant: e.constant && n.constant})
    }, statements: function () {
      for (var e = []; ;) if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && e.push(this.filterChain()), !this.expect(";")) return 1 === e.length ? e[0] : function (t, n) {
        for (var r, o = 0; o < e.length; o++) {
          var i = e[o];
          i && (r = i(t, n))
        }
        return r
      }
    }, filterChain: function () {
      for (var e, t = this.expression(); ;) {
        if (!(e = this.expect("|"))) return t;
        t = this.binaryFn(t, e.fn, this.filter())
      }
    }, filter: function () {
      for (var e = this.expect(), t = this.$filter(e.text), n = []; ;) {
        if (!(e = this.expect(":"))) {
          var r = function (e, r, o) {
            o = [o];
            for (var i = 0; i < n.length; i++) o.push(n[i](e, r));
            return t.apply(e, o)
          };
          return function () {
            return r
          }
        }
        n.push(this.expression())
      }
    }, expression: function () {
      return this.assignment()
    }, assignment: function () {
      var e, t, n = this.ternary();
      return (t = this.expect("=")) ? (n.assign || this.throwError("implies assignment but [" + this.text.substring(0, t.index) + "] can not be assigned to", t), e = this.ternary(), function (t, r) {
        return n.assign(t, e(t, r), r)
      }) : n
    }, ternary: function () {
      var e, t, n = this.logicalOR();
      return this.expect("?") ? (e = this.assignment(), (t = this.expect(":")) ? this.ternaryFn(n, e, this.assignment()) : void this.throwError("expected :", t)) : n
    }, logicalOR: function () {
      for (var e, t = this.logicalAND(); ;) {
        if (!(e = this.expect("||"))) return t;
        t = this.binaryFn(t, e.fn, this.logicalAND())
      }
    }, logicalAND: function () {
      var e, t = this.equality();
      return (e = this.expect("&&")) && (t = this.binaryFn(t, e.fn, this.logicalAND())), t
    }, equality: function () {
      var e, t = this.relational();
      return (e = this.expect("==", "!=", "===", "!==")) && (t = this.binaryFn(t, e.fn, this.equality())), t
    }, relational: function () {
      var e, t = this.additive();
      return (e = this.expect("<", ">", "<=", ">=")) && (t = this.binaryFn(t, e.fn, this.relational())), t
    }, additive: function () {
      for (var e, t = this.multiplicative(); e = this.expect("+", "-");) t = this.binaryFn(t, e.fn, this.multiplicative());
      return t
    }, multiplicative: function () {
      for (var e, t = this.unary(); e = this.expect("*", "/", "%");) t = this.binaryFn(t, e.fn, this.unary());
      return t
    }, unary: function () {
      var e;
      return this.expect("+") ? this.primary() : (e = this.expect("-")) ? this.binaryFn(Gn.ZERO, e.fn, this.unary()) : (e = this.expect("!")) ? this.unaryFn(e.fn, this.unary()) : this.primary()
    }, fieldAccess: function (e) {
      var t = this, n = this.expect().text, r = lt(n, this.options, this.text);
      return f(function (t, n, o) {
        return r(o || e(t, n))
      }, {
        assign: function (r, o, i) {
          return (i = e(r, i)) || e.assign(r, i = {}), ot(i, n, o, t.text, t.options)
        }
      })
    }, objectIndex: function (e) {
      var t = this, r = this.expression();
      return this.consume("]"), f(function (o, i) {
        var a, s = e(o, i), l = r(o, i);
        return nt(l, t.text), s ? ((s = rt(s[l], t.text)) && s.then && t.options.unwrapPromises && (a = s, "$$v" in s || (a.$$v = n, a.then(function (e) {
          a.$$v = e
        })), s = s.$$v), s) : n
      }, {
        assign: function (n, o, i) {
          var a = nt(r(n, i), t.text);
          return (i = rt(e(n, i), t.text)) || e.assign(n, i = {}), i[a] = o
        }
      })
    }, functionCall: function (e, t) {
      var n = [];
      if (")" !== this.peekToken().text) do {
        n.push(this.expression())
      } while (this.expect(","));
      this.consume(")");
      var r = this;
      return function (o, i) {
        for (var a = [], s = t ? t(o, i) : o, l = 0; l < n.length; l++) a.push(rt(n[l](o, i), r.text));
        l = e(o, i, s) || h, rt(s, r.text);
        var c = r.text;
        if (l) {
          if (l.constructor === l) throw Rn("isecfn", c);
          if (l === qn || l === Un || Hn && l === Hn) throw Rn("isecff", c)
        }
        return a = l.apply ? l.apply(s, a) : l(a[0], a[1], a[2], a[3], a[4]), rt(a, r.text)
      }
    }, arrayDeclaration: function () {
      var e = [], t = !0;
      if ("]" !== this.peekToken().text) do {
        if (this.peek("]")) break;
        var n = this.expression();
        e.push(n), n.constant || (t = !1)
      } while (this.expect(","));
      return this.consume("]"), f(function (t, n) {
        for (var r = [], o = 0; o < e.length; o++) r.push(e[o](t, n));
        return r
      }, {literal: !0, constant: t})
    }, object: function () {
      var e = [], t = !0;
      if ("}" !== this.peekToken().text) do {
        if (this.peek("}")) break;
        var n = (n = this.expect()).string || n.text;
        this.consume(":");
        var r = this.expression();
        e.push({key: n, value: r}), r.constant || (t = !1)
      } while (this.expect(","));
      return this.consume("}"), f(function (t, n) {
        for (var r = {}, o = 0; o < e.length; o++) {
          var i = e[o];
          r[i.key] = i.value(t, n)
        }
        return r
      }, {literal: !0, constant: t})
    }
  };
  var Yn = {}, Xn = {}, Kn = r("$sce"),
    Qn = {HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js"}, Jn = t.createElement("a"),
    Zn = wt(e.location.href, !0);
  Tt.$inject = ["$provide"], Ct.$inject = ["$locale"], Et.$inject = ["$locale"];
  var er = ".", tr = {
    yyyy: Pt("FullYear", 4),
    yy: Pt("FullYear", 2, 0, !0),
    y: Pt("FullYear", 1),
    MMMM: Ot("Month"),
    MMM: Ot("Month", !0),
    MM: Pt("Month", 2, 1),
    M: Pt("Month", 1, 1),
    dd: Pt("Date", 2),
    d: Pt("Date", 1),
    HH: Pt("Hours", 2),
    H: Pt("Hours", 1),
    hh: Pt("Hours", 2, -12),
    h: Pt("Hours", 1, -12),
    mm: Pt("Minutes", 2),
    m: Pt("Minutes", 1),
    ss: Pt("Seconds", 2),
    s: Pt("Seconds", 1),
    sss: Pt("Milliseconds", 3),
    EEEE: Ot("Day"),
    EEE: Ot("Day", !0),
    a: function (e, t) {
      return 12 > e.getHours() ? t.AMPMS[0] : t.AMPMS[1]
    },
    Z: function (e) {
      return e = -1 * e.getTimezoneOffset(), e = (0 <= e ? "+" : "") + (Nt(Math[0 < e ? "floor" : "ceil"](e / 60), 2) + Nt(Math.abs(e % 60), 2))
    }
  }, nr = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, rr = /^\-?\d+$/;
  Dt.$inject = ["$locale"];
  var or = m(Xt), ir = m(Qt);
  _t.$inject = ["$parse"];
  var ar = m({
    restrict: "E", compile: function (e, n) {
      if (8 >= Ht && (n.href || n.name || n.$set("href", ""), e.append(t.createComment("IE fix"))), !n.href && !n.xlinkHref && !n.name) return function (e, t) {
        var n = "[object SVGAnimatedString]" === en.call(t.prop("href")) ? "xlink:href" : "href";
        t.on("click", function (e) {
          t.attr(n) || e.preventDefault()
        })
      }
    }
  }), sr = {};
  i(kn, function (e, t) {
    if ("multiple" != e) {
      var n = Ae("ng-" + t);
      sr[n] = function () {
        return {
          priority: 100, link: function (e, r, o) {
            e.$watch(o[n], function (e) {
              o.$set(t, !!e)
            })
          }
        }
      }
    }
  }), i(["src", "srcset", "href"], function (e) {
    var t = Ae("ng-" + e);
    sr[t] = function () {
      return {
        priority: 99, link: function (n, r, o) {
          var i = e, a = e;
          "href" === e && "[object SVGAnimatedString]" === en.call(r.prop("href")) && (a = "xlinkHref", o.$attr[a] = "xlink:href", i = null), o.$observe(t, function (t) {
            t ? (o.$set(a, t), Ht && i && r.prop(i, o[a])) : "href" === e && o.$set(a, null)
          })
        }
      }
    }
  });
  var lr = {$addControl: h, $removeControl: h, $setValidity: h, $setDirty: h, $setPristine: h};
  Ft.$inject = ["$element", "$attrs", "$scope", "$animate"];
  var cr = function (e) {
      return ["$timeout", function (t) {
        return {
          name: "form", restrict: e ? "EAC" : "E", controller: Ft, compile: function () {
            return {
              pre: function (e, r, o, i) {
                if (!o.action) {
                  var a = function (e) {
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1
                  };
                  dn(r[0], "submit", a), r.on("$destroy", function () {
                    t(function () {
                      pn(r[0], "submit", a)
                    }, 0, !1)
                  })
                }
                var s = r.parent().controller("form"), l = o.name || o.ngForm;
                l && ot(e, l, i, l), s && r.on("$destroy", function () {
                  s.$removeControl(i), l && ot(e, l, n, l), f(i, lr)
                })
              }
            }
          }
        }
      }]
    }, ur = cr(), fr = cr(!0), dr = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
    pr = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
    hr = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, gr = {
      text: qt, number: function (e, t, r, o, i, a) {
        qt(e, t, r, o, i, a), o.$parsers.push(function (e) {
          var t = o.$isEmpty(e);
          return t || hr.test(e) ? (o.$setValidity("number", !0), "" === e ? null : t ? e : parseFloat(e)) : (o.$setValidity("number", !1), n)
        }), jt(o, "number", mr, null, o.$$validityState), o.$formatters.push(function (e) {
          return o.$isEmpty(e) ? "" : "" + e
        }), r.min && (e = function (e) {
          var t = parseFloat(r.min);
          return Bt(o, "min", o.$isEmpty(e) || e >= t, e)
        }, o.$parsers.push(e), o.$formatters.push(e)), r.max && (e = function (e) {
          var t = parseFloat(r.max);
          return Bt(o, "max", o.$isEmpty(e) || e <= t, e)
        }, o.$parsers.push(e), o.$formatters.push(e)), o.$formatters.push(function (e) {
          return Bt(o, "number", o.$isEmpty(e) || w(e), e)
        })
      }, url: function (e, t, n, r, o, i) {
        qt(e, t, n, r, o, i), e = function (e) {
          return Bt(r, "url", r.$isEmpty(e) || dr.test(e), e)
        }, r.$formatters.push(e), r.$parsers.push(e)
      }, email: function (e, t, n, r, o, i) {
        qt(e, t, n, r, o, i), e = function (e) {
          return Bt(r, "email", r.$isEmpty(e) || pr.test(e), e)
        }, r.$formatters.push(e), r.$parsers.push(e)
      }, radio: function (e, t, n, r) {
        v(n.name) && t.attr("name", c()), t.on("click", function () {
          t[0].checked && e.$apply(function () {
            r.$setViewValue(n.value)
          })
        }), r.$render = function () {
          t[0].checked = n.value == r.$viewValue
        }, n.$observe("value", r.$render)
      }, checkbox: function (e, t, n, r) {
        var o = n.ngTrueValue, i = n.ngFalseValue;
        x(o) || (o = !0), x(i) || (i = !1), t.on("click", function () {
          e.$apply(function () {
            r.$setViewValue(t[0].checked)
          })
        }), r.$render = function () {
          t[0].checked = r.$viewValue
        }, r.$isEmpty = function (e) {
          return e !== o
        }, r.$formatters.push(function (e) {
          return e === o
        }), r.$parsers.push(function (e) {
          return e ? o : i
        })
      }, hidden: h, button: h, submit: h, reset: h, file: h
    }, mr = ["badInput"], vr = ["$browser", "$sniffer", function (e, t) {
      return {
        restrict: "E", require: "?ngModel", link: function (n, r, o, i) {
          i && (gr[Xt(o.type)] || gr.text)(n, r, o, i, t, e)
        }
      }
    }], br = "ng-valid", yr = "ng-invalid", xr = "ng-pristine", wr = "ng-dirty",
    $r = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function (e, t, n, o, a, s) {
      function l(e, t) {
        t = t ? "-" + W(t, "-") : "", s.removeClass(o, (e ? yr : br) + t), s.addClass(o, (e ? br : yr) + t)
      }

      this.$modelValue = this.$viewValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = n.name;
      var c = a(n.ngModel), u = c.assign;
      if (!u) throw r("ngModel")("nonassign", n.ngModel, B(o));
      this.$render = h, this.$isEmpty = function (e) {
        return v(e) || "" === e || null === e || e != e
      };
      var f = o.inheritedData("$formController") || lr, d = 0, p = this.$error = {};
      o.addClass(xr), l(!0), this.$setValidity = function (e, t) {
        p[e] !== !t && (t ? (p[e] && d--, d || (l(!0), this.$valid = !0, this.$invalid = !1)) : (l(!1), this.$invalid = !0, this.$valid = !1, d++), p[e] = !t, l(t, e), f.$setValidity(e, t, this))
      }, this.$setPristine = function () {
        this.$dirty = !1, this.$pristine = !0, s.removeClass(o, wr), s.addClass(o, xr)
      }, this.$setViewValue = function (n) {
        this.$viewValue = n, this.$pristine && (this.$dirty = !0, this.$pristine = !1, s.removeClass(o, xr), s.addClass(o, wr), f.$setDirty()), i(this.$parsers, function (e) {
          n = e(n)
        }), this.$modelValue !== n && (this.$modelValue = n, u(e, n), i(this.$viewChangeListeners, function (e) {
          try {
            e()
          } catch (e) {
            t(e)
          }
        }))
      };
      var g = this;
      e.$watch(function () {
        var t = c(e);
        if (g.$modelValue !== t) {
          var n = g.$formatters, r = n.length;
          for (g.$modelValue = t; r--;) t = n[r](t);
          g.$viewValue !== t && (g.$viewValue = t, g.$render())
        }
        return t
      })
    }], kr = function () {
      return {
        require: ["ngModel", "^?form"], controller: $r, link: function (e, t, n, r) {
          var o = r[0], i = r[1] || lr;
          i.$addControl(o), e.$on("$destroy", function () {
            i.$removeControl(o)
          })
        }
      }
    }, Tr = m({
      require: "ngModel", link: function (e, t, n, r) {
        r.$viewChangeListeners.push(function () {
          e.$eval(n.ngChange)
        })
      }
    }), Sr = function () {
      return {
        require: "?ngModel", link: function (e, t, n, r) {
          if (r) {
            n.required = !0;
            var o = function (e) {
              if (!n.required || !r.$isEmpty(e)) return r.$setValidity("required", !0), e;
              r.$setValidity("required", !1)
            };
            r.$formatters.push(o), r.$parsers.unshift(o), n.$observe("required", function () {
              o(r.$viewValue)
            })
          }
        }
      }
    }, Cr = function () {
      return {
        require: "ngModel", link: function (e, t, r, o) {
          var a = (e = /\/(.*)\//.exec(r.ngList)) && RegExp(e[1]) || r.ngList || ",";
          o.$parsers.push(function (e) {
            if (!v(e)) {
              var t = [];
              return e && i(e.split(a), function (e) {
                e && t.push(an(e))
              }), t
            }
          }), o.$formatters.push(function (e) {
            return on(e) ? e.join(", ") : n
          }), o.$isEmpty = function (e) {
            return !e || !e.length
          }
        }
      }
    }, Er = /^(true|false|\d+)$/, Ar = function () {
      return {
        priority: 100, compile: function (e, t) {
          return Er.test(t.ngValue) ? function (e, t, n) {
            n.$set("value", e.$eval(n.ngValue))
          } : function (e, t, n) {
            e.$watch(n.ngValue, function (e) {
              n.$set("value", e)
            })
          }
        }
      }
    }, Nr = Lt({
      compile: function (e) {
        return e.addClass("ng-binding"), function (e, t, r) {
          t.data("$binding", r.ngBind), e.$watch(r.ngBind, function (e) {
            t.text(e == n ? "" : e)
          })
        }
      }
    }), Pr = ["$interpolate", function (e) {
      return function (t, n, r) {
        t = e(n.attr(r.$attr.ngBindTemplate)), n.addClass("ng-binding").data("$binding", t), r.$observe("ngBindTemplate", function (e) {
          n.text(e)
        })
      }
    }], Or = ["$sce", "$parse", function (e, t) {
      return {
        compile: function (n) {
          return n.addClass("ng-binding"), function (n, r, o) {
            r.data("$binding", o.ngBindHtml);
            var i = t(o.ngBindHtml);
            n.$watch(function () {
              return (i(n) || "").toString()
            }, function (t) {
              r.html(e.getTrustedHtml(i(n)) || "")
            })
          }
        }
      }
    }], Dr = Ut("", !0), Ir = Ut("Odd", 0), Mr = Ut("Even", 1), _r = Lt({
      compile: function (e, t) {
        t.$set("ngCloak", n), e.removeClass("ng-cloak")
      }
    }), Lr = [function () {
      return {scope: !0, controller: "@", priority: 500}
    }], Fr = {}, Br = {blur: !0, focus: !0};
  i("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (e) {
    var t = Ae("ng-" + e);
    Fr[t] = ["$parse", "$rootScope", function (n, r) {
      return {
        compile: function (o, i) {
          var a = n(i[t], !0);
          return function (t, n) {
            n.on(e, function (n) {
              var o = function () {
                a(t, {$event: n})
              };
              Br[e] && r.$$phase ? t.$evalAsync(o) : t.$apply(o)
            })
          }
        }
      }
    }]
  });
  var Rr = ["$animate", function (e) {
    return {
      transclude: "element",
      priority: 600,
      terminal: !0,
      restrict: "A",
      $$tlb: !0,
      link: function (n, r, o, i, a) {
        var s, l, c;
        n.$watch(o.ngIf, function (i) {
          F(i) ? l || (l = n.$new(), a(l, function (n) {
            n[n.length++] = t.createComment(" end ngIf: " + o.ngIf + " "), s = {clone: n}, e.enter(n, r.parent(), r)
          })) : (c && (c.remove(), c = null), l && (l.$destroy(), l = null), s && (c = Q(s.clone), e.leave(c, function () {
            c = null
          }), s = null))
        })
      }
    }
  }], jr = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function (e, t, n, r, o) {
    return {
      restrict: "ECA",
      priority: 400,
      terminal: !0,
      transclude: "element",
      controller: nn.noop,
      compile: function (i, a) {
        var s = a.ngInclude || a.src, l = a.onload || "", c = a.autoscroll;
        return function (i, a, u, f, d) {
          var p, h, g, m = 0, v = function () {
            h && (h.remove(), h = null), p && (p.$destroy(), p = null), g && (r.leave(g, function () {
              h = null
            }), h = g, g = null)
          };
          i.$watch(o.parseAsResourceUrl(s), function (o) {
            var s = function () {
              !b(c) || c && !i.$eval(c) || n()
            }, u = ++m;
            o ? (e.get(o, {cache: t}).success(function (e) {
              if (u === m) {
                var t = i.$new();
                f.template = e, e = d(t, function (e) {
                  v(), r.enter(e, null, a, s)
                }), g = e, (p = t).$emit("$includeContentLoaded"), i.$eval(l)
              }
            }).error(function () {
              u === m && v()
            }), i.$emit("$includeContentRequested")) : (v(), f.template = null)
          })
        }
      }
    }
  }], qr = ["$compile", function (e) {
    return {
      restrict: "ECA", priority: -400, require: "ngInclude", link: function (t, n, r, o) {
        n.html(o.template), e(n.contents())(t)
      }
    }
  }], Ur = Lt({
    priority: 450, compile: function () {
      return {
        pre: function (e, t, n) {
          e.$eval(n.ngInit)
        }
      }
    }
  }), Hr = Lt({terminal: !0, priority: 1e3}), Vr = ["$locale", "$interpolate", function (e, t) {
    var n = /{}/g;
    return {
      restrict: "EA", link: function (r, o, a) {
        var s = a.count, l = a.$attr.when && o.attr(a.$attr.when), c = a.offset || 0, u = r.$eval(l) || {}, f = {},
          d = t.startSymbol(), p = t.endSymbol(), h = /^when(Minus)?(.+)$/;
        i(a, function (e, t) {
          h.test(t) && (u[Xt(t.replace("when", "").replace("Minus", "-"))] = o.attr(a.$attr[t]))
        }), i(u, function (e, r) {
          f[r] = t(e.replace(n, d + s + "-" + c + p))
        }), r.$watch(function () {
          var t = parseFloat(r.$eval(s));
          return isNaN(t) ? "" : (t in u || (t = e.pluralCat(t - c)), f[t](r, o, !0))
        }, function (e) {
          o.text(e)
        })
      }
    }
  }], zr = ["$parse", "$animate", function (e, n) {
    var a = r("ngRepeat");
    return {
      transclude: "element", priority: 1e3, terminal: !0, $$tlb: !0, link: function (r, s, l, c, u) {
        var f, d, p, h, g, m, v = l.ngRepeat,
          b = v.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), y = {$id: ve};
        if (!b) throw a("iexp", v);
        if (l = b[1], c = b[2], (b = b[3]) ? (f = e(b), d = function (e, t, n) {
            return m && (y[m] = e), y[g] = t, y.$index = n, f(r, y)
          }) : (p = function (e, t) {
            return ve(t)
          }, h = function (e) {
            return e
          }), !(b = l.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/))) throw a("iidexp", l);
        g = b[3] || b[1], m = b[2];
        var x = {};
        r.$watchCollection(c, function (e) {
          var l, c, f, b, y, w, $, k, T, S, C = s[0], E = {}, A = [];
          if (o(e)) T = e, k = d || p; else {
            k = d || h, T = [];
            for (w in e) e.hasOwnProperty(w) && "$" != w.charAt(0) && T.push(w);
            T.sort()
          }
          for (b = T.length, c = A.length = T.length, l = 0; l < c; l++) if (w = e === T ? l : T[l], $ = e[w], f = k(w, $, l), X(f, "`track by` id"), x.hasOwnProperty(f)) S = x[f], delete x[f], E[f] = S, A[l] = S; else {
            if (E.hasOwnProperty(f)) throw i(A, function (e) {
              e && e.scope && (x[e.id] = e)
            }), a("dupes", v, f, _($));
            A[l] = {id: f}, E[f] = !1
          }
          for (w in x) x.hasOwnProperty(w) && (S = x[w], l = Q(S.clone), n.leave(l), i(l, function (e) {
            e.$$NG_REMOVED = !0
          }), S.scope.$destroy());
          for (l = 0, c = T.length; l < c; l++) {
            if (w = e === T ? l : T[l], $ = e[w], S = A[l], A[l - 1] && (C = A[l - 1].clone[A[l - 1].clone.length - 1]), S.scope) {
              y = S.scope, f = C;
              do {
                f = f.nextSibling
              } while (f && f.$$NG_REMOVED);
              S.clone[0] != f && n.move(Q(S.clone), null, Vt(C)), C = S.clone[S.clone.length - 1]
            } else y = r.$new();
            y[g] = $, m && (y[m] = w), y.$index = l, y.$first = 0 === l, y.$last = l === b - 1, y.$middle = !(y.$first || y.$last), y.$odd = !(y.$even = 0 == (1 & l)), S.scope || u(y, function (e) {
              e[e.length++] = t.createComment(" end ngRepeat: " + v + " "), n.enter(e, null, Vt(C)), C = e, S.scope = y, S.clone = e, E[S.id] = S
            })
          }
          x = E
        })
      }
    }
  }], Wr = ["$animate", function (e) {
    return function (t, n, r) {
      t.$watch(r.ngShow, function (t) {
        e[F(t) ? "removeClass" : "addClass"](n, "ng-hide")
      })
    }
  }], Gr = ["$animate", function (e) {
    return function (t, n, r) {
      t.$watch(r.ngHide, function (t) {
        e[F(t) ? "addClass" : "removeClass"](n, "ng-hide")
      })
    }
  }], Yr = Lt(function (e, t, n) {
    e.$watch(n.ngStyle, function (e, n) {
      n && e !== n && i(n, function (e, n) {
        t.css(n, "")
      }), e && t.css(e)
    }, !0)
  }), Xr = ["$animate", function (e) {
    return {
      restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
        this.cases = {}
      }], link: function (t, n, r, o) {
        var a = [], s = [], l = [], c = [];
        t.$watch(r.ngSwitch || r.on, function (n) {
          var u, f;
          for (u = 0, f = l.length; u < f; ++u) l[u].remove();
          for (u = l.length = 0, f = c.length; u < f; ++u) {
            var d = s[u];
            c[u].$destroy(), l[u] = d, e.leave(d, function () {
              l.splice(u, 1)
            })
          }
          s.length = 0, c.length = 0, (a = o.cases["!" + n] || o.cases["?"]) && (t.$eval(r.change), i(a, function (n) {
            var r = t.$new();
            c.push(r), n.transclude(r, function (t) {
              var r = n.element;
              s.push(t), e.enter(t, r.parent(), r)
            })
          }))
        })
      }
    }
  }], Kr = Lt({
    transclude: "element", priority: 800, require: "^ngSwitch", link: function (e, t, n, r, o) {
      r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
        transclude: o,
        element: t
      })
    }
  }), Qr = Lt({
    transclude: "element", priority: 800, require: "^ngSwitch", link: function (e, t, n, r, o) {
      r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({transclude: o, element: t})
    }
  }), Jr = Lt({
    link: function (e, t, n, o, i) {
      if (!i) throw r("ngTransclude")("orphan", B(t));
      i(function (e) {
        t.empty(), t.append(e)
      })
    }
  }), Zr = ["$templateCache", function (e) {
    return {
      restrict: "E", terminal: !0, compile: function (t, n) {
        "text/ng-template" == n.type && e.put(n.id, t[0].text)
      }
    }
  }], eo = r("ngOptions"), to = m({terminal: !0}), no = ["$compile", "$parse", function (e, r) {
    var o = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
      s = {$setViewValue: h};
    return {
      restrict: "E",
      require: ["select", "?ngModel"],
      controller: ["$element", "$scope", "$attrs", function (e, t, n) {
        var r, o = this, i = {}, a = s;
        o.databound = n.ngModel, o.init = function (e, t, n) {
          a = e, r = n
        }, o.addOption = function (t) {
          X(t, '"option value"'), i[t] = !0, a.$viewValue == t && (e.val(t), r.parent() && r.remove())
        }, o.removeOption = function (e) {
          this.hasOption(e) && (delete i[e], a.$viewValue == e && this.renderUnknownOption(e))
        }, o.renderUnknownOption = function (t) {
          t = "? " + ve(t) + " ?", r.val(t), e.prepend(r), e.val(t), r.prop("selected", !0)
        }, o.hasOption = function (e) {
          return i.hasOwnProperty(e)
        }, t.$on("$destroy", function () {
          o.renderUnknownOption = h
        })
      }],
      link: function (s, l, c, u) {
        if (u[1]) {
          var f = u[0];
          u = u[1];
          var d, p = c.multiple, h = c.ngOptions, g = !1, m = Vt(t.createElement("option")),
            y = Vt(t.createElement("optgroup")), x = m.clone();
          c = 0;
          for (var w = l.children(), $ = w.length; c < $; c++) if ("" === w[c].value) {
            d = g = w.eq(c);
            break
          }
          f.init(u, g, x), p && (u.$isEmpty = function (e) {
            return !e || 0 === e.length
          }), h ? function (t, i, s) {
            function l() {
              var e, n, r, o, l, c = {"": []}, h = [""];
              r = s.$modelValue, o = $(t) || [];
              var S, C, E, A = v ? a(o) : o;
              if (C = {}, E = !1, p) if (n = s.$modelValue, k && on(n)) for (E = new be([]), e = {}, l = 0; l < n.length; l++) e[d] = n[l], E.put(k(t, e), n[l]); else E = new be(n);
              l = E;
              var N, P;
              for (E = 0; S = A.length, E < S; E++) {
                if (n = E, v) {
                  if ("$" === (n = A[E]).charAt(0)) continue;
                  C[v] = n
                }
                C[d] = o[n], (n = c[e = x(t, C) || ""]) || (n = c[e] = [], h.push(e)), p ? e = b(l.remove(k ? k(t, C) : w(t, C))) : (k ? (e = {}, e[d] = r, e = k(t, e) === k(t, C)) : e = r === w(t, C), l = l || e), N = b(N = u(t, C)) ? N : "", n.push({
                  id: k ? k(t, C) : v ? A[E] : E,
                  label: N,
                  selected: e
                })
              }
              for (p || (g || null === r ? c[""].unshift({
                id: "",
                label: "",
                selected: !l
              }) : l || c[""].unshift({id: "?", label: "", selected: !0})), C = 0, A = h.length; C < A; C++) {
                for (n = c[e = h[C]], T.length <= C ? (r = {
                  element: y.clone().attr("label", e),
                  label: n.label
                }, o = [r], T.push(o), i.append(r.element)) : (o = T[C], (r = o[0]).label != e && r.element.attr("label", r.label = e)), N = null, E = 0, S = n.length; E < S; E++) e = n[E], (l = o[E + 1]) ? (N = l.element, l.label !== e.label && (N.text(l.label = e.label), N.prop("label", l.label)), l.id !== e.id && N.val(l.id = e.id), N[0].selected !== e.selected && (N.prop("selected", l.selected = e.selected), Ht && N.prop("selected", l.selected))) : ("" === e.id && g ? P = g : (P = m.clone()).val(e.id).prop("selected", e.selected).attr("selected", e.selected).prop("label", e.label).text(e.label), o.push({
                  element: P,
                  label: e.label,
                  id: e.id,
                  selected: e.selected
                }), f.addOption(e.label, P), N ? N.after(P) : r.element.append(P), N = P);
                for (E++; o.length > E;) e = o.pop(), f.removeOption(e.label), e.element.remove()
              }
              for (; T.length > C;) T.pop()[0].element.remove()
            }

            var c;
            if (!(c = h.match(o))) throw eo("iexp", h, B(i));
            var u = r(c[2] || c[1]), d = c[4] || c[6], v = c[5], x = r(c[3] || ""), w = r(c[2] ? c[1] : d), $ = r(c[7]),
              k = c[8] ? r(c[8]) : null, T = [[{element: i, label: ""}]];
            g && (e(g)(t), g.removeClass("ng-scope"), g.remove()), i.empty(), i.on("change", function () {
              t.$apply(function () {
                var e, r, o, a, c, u, f, h, g = $(t) || [], m = {};
                if (p) {
                  for (o = [], c = 0, f = T.length; c < f; c++) for (e = T[c], a = 1, u = e.length; a < u; a++) if ((r = e[a].element)[0].selected) {
                    if (r = r.val(), v && (m[v] = r), k) for (h = 0; h < g.length && (m[d] = g[h], k(t, m) != r); h++) ; else m[d] = g[r];
                    o.push(w(t, m))
                  }
                } else if ("?" == (r = i.val())) o = n; else if ("" === r) o = null; else if (k) {
                  for (h = 0; h < g.length; h++) if (m[d] = g[h], k(t, m) == r) {
                    o = w(t, m);
                    break
                  }
                } else m[d] = g[r], v && (m[v] = r), o = w(t, m);
                s.$setViewValue(o), l()
              })
            }), s.$render = l, t.$watchCollection($, l), t.$watchCollection(function () {
              var e = {}, n = $(t);
              if (n) {
                for (var r = Array(n.length), o = 0, i = n.length; o < i; o++) e[d] = n[o], r[o] = u(t, e);
                return r
              }
            }, l), p && t.$watchCollection(function () {
              return s.$modelValue
            }, l)
          }(s, l, u) : p ? function (e, t, n) {
            var r;
            n.$render = function () {
              var e = new be(n.$viewValue);
              i(t.find("option"), function (t) {
                t.selected = b(e.get(t.value))
              })
            }, e.$watch(function () {
              D(r, n.$viewValue) || (r = O(n.$viewValue), n.$render())
            }), t.on("change", function () {
              e.$apply(function () {
                var e = [];
                i(t.find("option"), function (t) {
                  t.selected && e.push(t.value)
                }), n.$setViewValue(e)
              })
            })
          }(s, l, u) : function (e, t, n, r) {
            n.$render = function () {
              var e = n.$viewValue;
              r.hasOption(e) ? (x.parent() && x.remove(), t.val(e), "" === e && d.prop("selected", !0)) : v(e) && d ? t.val("") : r.renderUnknownOption(e)
            }, t.on("change", function () {
              e.$apply(function () {
                x.parent() && x.remove(), n.$setViewValue(t.val())
              })
            })
          }(s, l, u, f)
        }
      }
    }
  }], ro = ["$interpolate", function (e) {
    var t = {addOption: h, removeOption: h};
    return {
      restrict: "E", priority: 100, compile: function (n, r) {
        if (v(r.value)) {
          var o = e(n.text(), !0);
          o || r.$set("value", n.text())
        }
        return function (e, n, r) {
          var i = n.parent(), a = i.data("$selectController") || i.parent().data("$selectController");
          a && a.databound ? n.prop("selected", !1) : a = t, o ? e.$watch(o, function (e, t) {
            r.$set("value", e), e !== t && a.removeOption(t), a.addOption(e)
          }) : a.addOption(r.value), n.on("$destroy", function () {
            a.removeOption(r.value)
          })
        }
      }
    }
  }], oo = m({restrict: "E", terminal: !0});
  e.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : ((zt = e.jQuery) && zt.fn.on ? (Vt = zt, f(zt.fn, {
    scope: $n.scope,
    isolateScope: $n.isolateScope,
    controller: $n.controller,
    injector: $n.injector,
    inheritedData: $n.inheritedData
  }), ee("remove", !0, !0, !1), ee("empty", !1, !1, !1), ee("html", !1, !1, !0)) : Vt = te, nn.element = Vt, function (t) {
    f(t, {
      bootstrap: z,
      copy: P,
      extend: f,
      equals: D,
      element: Vt,
      forEach: i,
      injector: xe,
      noop: h,
      bind: I,
      toJson: _,
      fromJson: L,
      identity: g,
      isUndefined: v,
      isDefined: b,
      isString: x,
      isFunction: k,
      isObject: y,
      isNumber: w,
      isElement: C,
      isArray: on,
      version: cn,
      isDate: $,
      lowercase: Xt,
      uppercase: Qt,
      callbacks: {counter: 0},
      $$minErr: r,
      $$csp: sn
    }), Wt = J(e);
    try {
      Wt("ngLocale")
    } catch (e) {
      Wt("ngLocale", []).provider("$locale", Ue)
    }
    Wt("ng", ["ngLocale"], ["$provide", function (e) {
      e.provider({$$sanitizeUri: ht}), e.provider("$compile", Ee).directive({
        a: ar,
        input: vr,
        textarea: vr,
        form: ur,
        script: Zr,
        select: no,
        style: oo,
        option: ro,
        ngBind: Nr,
        ngBindHtml: Or,
        ngBindTemplate: Pr,
        ngClass: Dr,
        ngClassEven: Mr,
        ngClassOdd: Ir,
        ngCloak: _r,
        ngController: Lr,
        ngForm: fr,
        ngHide: Gr,
        ngIf: Rr,
        ngInclude: jr,
        ngInit: Ur,
        ngNonBindable: Hr,
        ngPluralize: Vr,
        ngRepeat: zr,
        ngShow: Wr,
        ngStyle: Yr,
        ngSwitch: Xr,
        ngSwitchWhen: Kr,
        ngSwitchDefault: Qr,
        ngOptions: to,
        ngTransclude: Jr,
        ngModel: kr,
        ngList: Cr,
        ngChange: Tr,
        required: Sr,
        ngRequired: Sr,
        ngValue: Ar
      }).directive({ngInclude: qr}).directive(sr).directive(Fr), e.provider({
        $anchorScroll: we,
        $animate: On,
        $browser: Te,
        $cacheFactory: Se,
        $controller: Pe,
        $document: Oe,
        $exceptionHandler: De,
        $filter: Tt,
        $interpolate: je,
        $interval: qe,
        $http: Le,
        $httpBackend: Be,
        $location: et,
        $log: tt,
        $parse: ct,
        $rootScope: pt,
        $q: ut,
        $sce: bt,
        $sceDelegate: vt,
        $sniffer: yt,
        $templateCache: Ce,
        $timeout: xt,
        $window: kt,
        $$rAF: dt,
        $$asyncCallback: $e
      })
    }])
  }(nn), Vt(t).ready(function () {
    V(t, z)
  }))
}(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>'), angular.module("sly", ["slyEvaluate", "slyRepeat"]), defineScalyrAngularModule("slyEvaluate", ["gatedScope"]).directive("slyEvaluateOnlyWhen", ["$parse", function (e) {
  return {
    scope: !0, restrict: "A", compile: function (t, n) {
      return {
        pre: function (t, n, r) {
          var o = null, i = !1, a = e(r.slyEvaluateOnlyWhen), s = null;
          if (hasProperty(r, "slyAlwaysEvaluate") && (s = r.slyAlwaysEvaluate, isStringEmpty(s))) throw new Exception("Empty string is illegal for value of slyAlwaysEvaluate");
          t.$addWatcherGate(function () {
            var e = a(t);
            if (!i) return i = !0, o = e, !0;
            var n = o !== e;
            return o = e, n
          }, function (e) {
            return isNull(s) || !(isStringNonempty(e) && e.indexOf(s) >= 0)
          }, !0)
        }
      }
    }
  }
}]).directive("slyAlwaysEvaluate", function () {
  return {
    restrict: "A", link: function (e, t, n) {
    }
  }
}).directive("slyShow", ["$animate", function (e) {
  function t(e) {
    if (e && 0 !== e.length) {
      var t = "" + e;
      e = !("f" == (t = isString(t) ? t.toLowerCase() : t) || "0" == t || "false" == t || "no" == t || "n" == t || "[]" == t)
    } else e = !1;
    return e
  }

  return {
    restrict: "A", link: function (n, r, o) {
      n.$watch(o.slyShow, function (n) {
        e[t(n) ? "removeClass" : "addClass"](r, "ng-hide")
      }, !1, "slyShow")
    }
  }
}]).directive("slyPreventEvaluationWhenHidden", function () {
  return {
    restrict: "A", scope: !0, compile: function (e, t) {
      return {
        pre: function (e, t, n) {
          e.$addWatcherGate(function () {
            return !t.hasClass("ng-hide")
          }, function (e, t, n, r) {
            return !isDefined(r) || "slyShow" != r
          })
        }
      }
    }
  }
}), defineScalyrAngularModule("slyRepeat", ["gatedScope"]).directive("slyRepeat", ["$animate", "$parse", function (e, t) {
  function n(e) {
    e.scope.$addWatcherGate(function () {
      return e.isActiveForRepeat
    })
  }

  return {
    restrict: "A", scope: !0, transclude: "element", priority: 1e3, terminal: !0, compile: function (t, r, o) {
      return function (t, r, i) {
        var a = i.slyRepeat, s = a.match(/^\s*(.+)\s+in\s+(.*?)$/);
        if (!s) throw Error("Expected slyRepeat in form of '_item_ in _collection_' but got '" + a + "'.");
        var l = s[1], c = s[2];
        if (!(s = l.match(/^(?:([\$\w]+))$/))) throw Error("'item' in 'item in collection' should be identifier but got '" + lhs + "'.");
        var u = [], f = [], d = t.$watchCollection(c, function (i) {
          if (i) {
            if (!isArray(i)) throw Error("'collection' did not evaluate to an array.  expression was " + c);
            var a = u.length;
            if (u.length < i.length && f.length > 0) {
              var s = u.length + f.length;
              s > i.length && (s = i.length), u = u.concat(f.splice(0, s - u.length))
            }
            var d = null, p = [], h = [];
            if (i.length > u.length) {
              for (y = u.length; y < i.length; ++y) {
                var g = {scope: t.$new(), isActiveForRepeat: !0};
                n(g), g.scope.$index = y, g.scope.$first = 0 == y, h.push(g)
              }
              d = u.concat(h), p = f
            } else if (i.length < u.length) {
              for (y = i.length; y < u.length; ++y) u[y].isActiveForRepeat = !1;
              p = u.splice(i.length, u.length - i.length).concat(f), d = u
            } else d = u, p = f;
            if (d.length > 0) {
              var m = d.length - 1, v = d.length - 1;
              a < d.length && (m = a), m > 0 && (m -= 1);
              for (y = m; y <= v; ++y) d[y].scope.$last = y == d.length - 1, d[y].scope.$middle = 0 != y && y != d.length - 1, d[y].isActiveForRepeat || (d[y].isActiveForRepeat = !0, d[y].element.css("display", ""))
            }
            for (y = 0; y < p.length && !p[y].isActiveForRepeat; ++y) p[y].element.css("display", "none");
            for (y = 0; y < d.length; ++y) d[y].scope[l] = i[y];
            var b = r;
            u.length > 0 && (b = u[u.length - 1].element);
            for (var y = 0; y < h.length; ++y) o(h[y].scope, function (t) {
              e.enter(t, null, b), b = t, h[y].element = t
            });
            u = d, f = p
          }
        });
        t.$on("$destroy", function () {
          d()
        })
      }
    }
  }
}]), defineScalyrAngularModule("gatedScope", []).config(["$provide", function (e) {
  e.decorator("$rootScope", ["$delegate", "$exceptionHandler", function (e, t) {
    var n = {};
    for (var r in e) isFunction(e[r]) && (n[r] = e[r]);
    var o, i = e.constructor, a = {};
    return a.$new = function (e) {
      var t = n.$new.call(this, e);
      return t.$$gatingFunction = this.$$gatingFunction, t.$$parentGatingFunction = this.$$gatingFunction, t.$$shouldGateFunction = this.$$shouldGateFunction, t.$$gatedWatchers = [], t.$$cleanUpQueue = this.$$cleanUpQueue, t
    }, a.$digestGated = function (e) {
      var n, r, i, a, s, l, c = this, u = this, f = !1;
      do {
        if (i = c.$$gatedWatchers) for (a = i.length; a--;) try {
          if ((n = i[a]).gatingFunction !== e) continue;
          n && !isNull(n.cleanUp) && (n.cleanUp(), n.cleanUp = null), n && (r = n.get(c)) !== (l = n.last) && !(n.eq ? areEqual(r, l) : "number" == typeof r && "number" == typeof l && isNaN(r) && isNaN(l)) && (f = !0, n.last = n.eq ? copy(r) : r, n.fn(r, l === o ? r : l, c))
        } catch (e) {
          t(e)
        }
        if (!(s = c.$$gatingFunction === e && c.$$childHead || c !== u && c.$$nextSibling)) for (; c !== u && !(s = c.$$nextSibling);) c = c.$parent
      } while (c = s);
      return e.hasDigested = !0, f
    }, a.$watch = function (e, t, r, i) {
      if (isNull(this.$$gatingFunction) || !isNull(this.$$shouldGateFunction) && !this.$$shouldGateFunction(e, t, r, i)) return n.$watch.call(this, e, t, r);
      var a = this.$$watchers;
      this.$$watchers = this.$$gatedWatchers;
      var s = n.$watch.call(this, e, t, r);
      this.$$watchers = a, this.$$gatedWatchers[0].gatingFunction = this.$$gatingFunction, this.$$gatedWatchers[0].cleanUp = null, o = this.$$gatedWatchers[0].last;
      var l = this.$$gatedWatchers[0];
      if (this.$$gatingFunction.shouldEvalNewWatchers && this.$$gatingFunction.hasDigested) {
        var c = this;
        l.cleanUp = n.$watch.call(c, function () {
          isNull(l.cleanUp) || (c.$$cleanUpQueue.unshift(l.cleanUp), l.cleanUp = null);
          var e, t = o;
          return l && (e = l.get(c)) !== (t = l.last) && !(l.eq ? areEqual(e, t) : "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t)) && (l.last = l.eq ? copy(e) : e, l.fn(e, t === o ? e : t, c)), l.last
        })
      }
      return s
    }, a.$digest = function () {
      var e = !1;
      if (!isNull(this.$$parentGatingFunction) && this.$$parentGatingFunction()) {
        var r = 5;
        do {
          if (e = this.$digestGated(this.$$parentGatingFunction), r--, e && !r--) throw Error(TTL + " $digest() iterations reached for gated watcher. Aborting!\nWatchers fired in the last 5 iterations.")
        } while (e)
      }
      e = n.$digest.call(this) || e;
      for (var o = this.$$cleanUpQueue; o.length;) try {
        o.shift()()
      } catch (e) {
        t(e)
      }
      return e
    }, a.$addWatcherGate = function (e, t, r) {
      var o = 0, i = this, a = !isNull(this.$$gatingFunction);
      !function () {
        var t = null;
        i.$watch(function () {
          return e() ? i.$digestGated(e) && ++o : a && isNull(t) && (t = n.$watch.call(i, function () {
            return e() && (t(), t = null, i.$digestGated(e) && ++o), o
          })), o
        })
      }(), isUndefined(t) && (t = null), isUndefined(r) && (r = !1), this.$$gatingFunction = e, this.$$gatingFunction.shouldEvalNewWatchers = r, this.$$shouldGateFunction = t
    }, angular.extend(i.prototype, a), angular.extend(e, a), e.$$gatingFunction = null, e.$$parentGatingFunction = null, e.$$shouldGateFunction = null, e.$$gatedWatchers = [], e.$$cleanUpQueue = [], e
  }])
}]), defineScalyrAngularModule("slyEvaluate", ["gatedScope"]).directive("slyEvaluateOnlyWhen", ["$parse", function (e) {
  return {
    scope: !0, restrict: "A", compile: function (t, n) {
      return {
        pre: function (t, n, r) {
          var o = null, i = !1, a = e(r.slyEvaluateOnlyWhen), s = null;
          if (hasProperty(r, "slyAlwaysEvaluate") && (s = r.slyAlwaysEvaluate, isStringEmpty(s))) throw new Exception("Empty string is illegal for value of slyAlwaysEvaluate");
          t.$addWatcherGate(function () {
            var e = a(t);
            if (!i) return i = !0, o = e, !0;
            var n = o !== e;
            return o = e, n
          }, function (e) {
            return isNull(s) || !(isStringNonempty(e) && e.indexOf(s) >= 0)
          }, !0)
        }
      }
    }
  }
}]).directive("slyAlwaysEvaluate", function () {
  return {
    restrict: "A", link: function (e, t, n) {
    }
  }
}).directive("slyShow", ["$animate", function (e) {
  function t(e) {
    if (e && 0 !== e.length) {
      var t = "" + e;
      e = !("f" == (t = isString(t) ? t.toLowerCase() : t) || "0" == t || "false" == t || "no" == t || "n" == t || "[]" == t)
    } else e = !1;
    return e
  }

  return {
    restrict: "A", link: function (n, r, o) {
      n.$watch(o.slyShow, function (n) {
        e[t(n) ? "removeClass" : "addClass"](r, "ng-hide")
      }, !1, "slyShow")
    }
  }
}]).directive("slyPreventEvaluationWhenHidden", function () {
  return {
    restrict: "A", scope: !0, compile: function (e, t) {
      return {
        pre: function (e, t, n) {
          e.$addWatcherGate(function () {
            return !t.hasClass("ng-hide")
          }, function (e, t, n, r) {
            return !isDefined(r) || "slyShow" != r
          })
        }
      }
    }
  }
}), defineScalyrAngularModule("slyRepeat", ["gatedScope"]).directive("slyRepeat", ["$animate", "$parse", function (e, t) {
  function n(e) {
    e.scope.$addWatcherGate(function () {
      return e.isActiveForRepeat
    })
  }

  return {
    restrict: "A", scope: !0, transclude: "element", priority: 1e3, terminal: !0, compile: function (t, r, o) {
      return function (t, r, i) {
        var a = i.slyRepeat, s = a.match(/^\s*(.+)\s+in\s+(.*?)$/);
        if (!s) throw Error("Expected slyRepeat in form of '_item_ in _collection_' but got '" + a + "'.");
        var l = s[1], c = s[2];
        if (!(s = l.match(/^(?:([\$\w]+))$/))) throw Error("'item' in 'item in collection' should be identifier but got '" + lhs + "'.");
        var u = [], f = [], d = t.$watchCollection(c, function (i) {
          if (i) {
            if (!isArray(i)) throw Error("'collection' did not evaluate to an array.  expression was " + c);
            var a = u.length;
            if (u.length < i.length && f.length > 0) {
              var s = u.length + f.length;
              s > i.length && (s = i.length), u = u.concat(f.splice(0, s - u.length))
            }
            var d = null, p = [], h = [];
            if (i.length > u.length) {
              for (y = u.length; y < i.length; ++y) {
                var g = {scope: t.$new(), isActiveForRepeat: !0};
                n(g), g.scope.$index = y, g.scope.$first = 0 == y, h.push(g)
              }
              d = u.concat(h), p = f
            } else if (i.length < u.length) {
              for (y = i.length; y < u.length; ++y) u[y].isActiveForRepeat = !1;
              p = u.splice(i.length, u.length - i.length).concat(f), d = u
            } else d = u, p = f;
            if (d.length > 0) {
              var m = d.length - 1, v = d.length - 1;
              a < d.length && (m = a), m > 0 && (m -= 1);
              for (y = m; y <= v; ++y) d[y].scope.$last = y == d.length - 1, d[y].scope.$middle = 0 != y && y != d.length - 1, d[y].isActiveForRepeat || (d[y].isActiveForRepeat = !0, d[y].element.css("display", ""))
            }
            for (y = 0; y < p.length && !p[y].isActiveForRepeat; ++y) p[y].element.css("display", "none");
            for (y = 0; y < d.length; ++y) d[y].scope[l] = i[y];
            var b = r;
            u.length > 0 && (b = u[u.length - 1].element);
            for (var y = 0; y < h.length; ++y) o(h[y].scope, function (t) {
              e.enter(t, null, b), b = t, h[y].element = t
            });
            u = d, f = p
          }
        });
        t.$on("$destroy", function () {
          d()
        })
      }
    }
  }
}]), function (e, t) {
  "function" == typeof define && define.amd ? define([], function () {
    return t()
  }) : "object" == typeof exports ? module.exports = t() : t()
}(0, function () {
  function e(e) {
    "use strict";
    var t = e.storageKey(), n = e.storage(), r = function () {
      var r = e.preferredLanguage();
      angular.isString(r) ? e.use(r) : n.put(t, e.use())
    };
    r.displayName = "fallbackFromIncorrectStorageValue", n ? n.get(t) ? e.use(n.get(t)).catch(r) : r() : angular.isString(e.preferredLanguage()) && e.use(e.preferredLanguage())
  }

  function t(e, t, n, r) {
    "use strict";
    var o, i, a, s, l, c, u, f, d, p, h, g, m, v, b, y = {}, x = [], w = e, $ = [], k = "translate-cloak", T = !1,
      S = !1, C = ".", E = 0, A = !0, N = "default", P = {
        default: function (e) {
          return (e || "").split("-").join("_")
        }, java: function (e) {
          var t = (e || "").split("-").join("_"), n = t.split("_");
          return n.length > 1 ? n[0].toLowerCase() + "_" + n[1].toUpperCase() : t
        }, bcp47: function (e) {
          var t = (e || "").split("_").join("-"), n = t.split("-");
          return n.length > 1 ? n[0].toLowerCase() + "-" + n[1].toUpperCase() : t
        }
      }, O = function () {
        if (angular.isFunction(r.getLocale)) return r.getLocale();
        var e, n, o = t.$get().navigator, i = ["language", "browserLanguage", "systemLanguage", "userLanguage"];
        if (angular.isArray(o.languages)) for (e = 0; e < o.languages.length; e++) if ((n = o.languages[e]) && n.length) return n;
        for (e = 0; e < i.length; e++) if ((n = o[i[e]]) && n.length) return n;
        return null
      };
    O.displayName = "angular-translate/service: getFirstBrowserLanguage";
    var D = function () {
      var e = O() || "";
      return P[N] && (e = P[N](e)), e
    };
    D.displayName = "angular-translate/service: getLocale";
    var I = function (e, t) {
      for (var n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
      return -1
    }, M = function () {
      return this.toString().replace(/^\s+|\s+$/g, "")
    }, _ = function (e) {
      for (var t = [], n = angular.lowercase(e), r = 0, o = x.length; o > r; r++) t.push(angular.lowercase(x[r]));
      if (I(t, n) > -1) return e;
      if (i) {
        var a;
        for (var s in i) {
          var l = !1, c = Object.prototype.hasOwnProperty.call(i, s) && angular.lowercase(s) === angular.lowercase(e);
          if ("*" === s.slice(-1) && (l = s.slice(0, -1) === e.slice(0, s.length - 1)), (c || l) && (a = i[s], I(t, angular.lowercase(a)) > -1)) return a
        }
      }
      if (e) {
        var u = e.split("_");
        if (u.length > 1 && I(t, angular.lowercase(u[0])) > -1) return u[0]
      }
      return e
    }, L = function (e, t) {
      if (!e && !t) return y;
      if (e && !t) {
        if (angular.isString(e)) return y[e]
      } else angular.isObject(y[e]) || (y[e] = {}), angular.extend(y[e], F(t));
      return this
    };
    this.translations = L, this.cloakClassName = function (e) {
      return e ? (k = e, this) : k
    }, this.nestedObjectDelimeter = function (e) {
      return e ? (C = e, this) : C
    };
    var F = function (e, t, n, r) {
      var o, i, a, s;
      t || (t = []), n || (n = {});
      for (o in e) Object.prototype.hasOwnProperty.call(e, o) && (s = e[o], angular.isObject(s) ? F(s, t.concat(o), n, o) : (i = t.length ? "" + t.join(C) + C + o : o, t.length && o === r && (a = "" + t.join(C), n[a] = "@:" + i), n[i] = s));
      return n
    };
    F.displayName = "flatObject", this.addInterpolation = function (e) {
      return $.push(e), this
    }, this.useMessageFormatInterpolation = function () {
      return this.useInterpolation("$translateMessageFormatInterpolation")
    }, this.useInterpolation = function (e) {
      return p = e, this
    }, this.useSanitizeValueStrategy = function (e) {
      return n.useStrategy(e), this
    }, this.preferredLanguage = function (e) {
      return e ? (B(e), this) : o
    };
    var B = function (e) {
      return e && (o = e), o
    };
    this.translationNotFoundIndicator = function (e) {
      return this.translationNotFoundIndicatorLeft(e), this.translationNotFoundIndicatorRight(e), this
    }, this.translationNotFoundIndicatorLeft = function (e) {
      return e ? (m = e, this) : m
    }, this.translationNotFoundIndicatorRight = function (e) {
      return e ? (v = e, this) : v
    }, this.fallbackLanguage = function (e) {
      return R(e), this
    };
    var R = function (e) {
      return e ? (angular.isString(e) ? (s = !0, a = [e]) : angular.isArray(e) && (s = !1, a = e), angular.isString(o) && I(a, o) < 0 && a.push(o), this) : s ? a[0] : a
    };
    this.use = function (e) {
      if (e) {
        if (!y[e] && !h) throw new Error("$translateProvider couldn't find translationTable for langKey: '" + e + "'");
        return l = e, this
      }
      return l
    };
    var j = function (e) {
      return e ? (w = e, this) : f ? f + w : w
    };
    this.storageKey = j, this.useUrlLoader = function (e, t) {
      return this.useLoader("$translateUrlLoader", angular.extend({url: e}, t))
    }, this.useStaticFilesLoader = function (e) {
      return this.useLoader("$translateStaticFilesLoader", e)
    }, this.useLoader = function (e, t) {
      return h = e, g = t || {}, this
    }, this.useLocalStorage = function () {
      return this.useStorage("$translateLocalStorage")
    }, this.useCookieStorage = function () {
      return this.useStorage("$translateCookieStorage")
    }, this.useStorage = function (e) {
      return u = e, this
    }, this.storagePrefix = function (e) {
      return e ? (f = e, this) : e
    }, this.useMissingTranslationHandlerLog = function () {
      return this.useMissingTranslationHandler("$translateMissingTranslationHandlerLog")
    }, this.useMissingTranslationHandler = function (e) {
      return d = e, this
    }, this.usePostCompiling = function (e) {
      return T = !!e, this
    }, this.forceAsyncReload = function (e) {
      return S = !!e, this
    }, this.uniformLanguageTag = function (e) {
      return e ? angular.isString(e) && (e = {standard: e}) : e = {}, N = e.standard, this
    }, this.determinePreferredLanguage = function (e) {
      var t = e && angular.isFunction(e) ? e() : D();
      return o = x.length ? _(t) : t, this
    }, this.registerAvailableLanguageKeys = function (e, t) {
      return e ? (x = e, t && (i = t), this) : x
    }, this.useLoaderCache = function (e) {
      return !1 === e ? b = void 0 : !0 === e ? b = !0 : void 0 === e ? b = "$translationCache" : e && (b = e), this
    }, this.directivePriority = function (e) {
      return void 0 === e ? E : (E = e, this)
    }, this.statefulFilter = function (e) {
      return void 0 === e ? A : (A = e, this)
    }, this.$get = ["$log", "$injector", "$rootScope", "$q", function (e, t, n, r) {
      var i, f, x, N, P = t.get(p || "$translateDefaultInterpolation"), O = !1, D = {}, q = {},
        U = function (e, t, n, s) {
          if (angular.isArray(e)) {
            return function (e) {
              for (var o = {}, i = [], a = 0, l = e.length; l > a; a++) i.push(function (e) {
                var i = r.defer(), a = function (t) {
                  o[e] = t, i.resolve([e, t])
                };
                return U(e, t, n, s).then(a, a), i.promise
              }(e[a]));
              return r.all(i).then(function () {
                return o
              })
            }(e)
          }
          var c = r.defer();
          e && (e = M.apply(e));
          var d = function () {
            var e = o ? q[o] : q[l];
            if (f = 0, u && !e) {
              var t = i.get(w);
              if (e = q[t], a && a.length) {
                var n = I(a, t);
                f = 0 === n ? 1 : 0, I(a, o) < 0 && a.push(o)
              }
            }
            return e
          }();
          if (d) {
            var p = function () {
              te(e, t, n, s).then(c.resolve, c.reject)
            };
            p.displayName = "promiseResolved", d.finally(p, c.reject)
          } else te(e, t, n, s).then(c.resolve, c.reject);
          return c.promise
        }, H = function (e) {
          return m && (e = [m, e].join(" ")), v && (e = [e, v].join(" ")), e
        }, V = function (e) {
          l = e, u && i.put(U.storageKey(), l), n.$emit("$translateChangeSuccess", {language: e}), P.setLocale(l);
          var t = function (e, t) {
            D[t].setLocale(l)
          };
          t.displayName = "eachInterpolatorLocaleSetter", angular.forEach(D, t), n.$emit("$translateChangeEnd", {language: e})
        }, z = function (e) {
          if (!e) throw"No language key specified for loading.";
          var o = r.defer();
          n.$emit("$translateLoadingStart", {language: e}), O = !0;
          var i = b;
          "string" == typeof i && (i = t.get(i)), O && N && N.resolve(), N = r.defer();
          var a = angular.extend({}, g, {key: e, $http: angular.extend({}, {cache: i, timeout: N.promise}, g.$http)}),
            s = function (t) {
              var r = {};
              n.$emit("$translateLoadingSuccess", {language: e}), angular.isArray(t) ? angular.forEach(t, function (e) {
                angular.extend(r, F(e))
              }) : angular.extend(r, F(t)), O = !1, o.resolve({
                key: e,
                table: r
              }), n.$emit("$translateLoadingEnd", {language: e})
            };
          s.displayName = "onLoaderSuccess";
          var l = function (e) {
            n.$emit("$translateLoadingError", {language: e}), o.reject(e), n.$emit("$translateLoadingEnd", {language: e})
          };
          return l.displayName = "onLoaderError", t.get(h)(a).then(s, l), o.promise
        };
      if (u && (!(i = t.get(u)).get || !i.put)) throw new Error("Couldn't use storage '" + u + "', missing get() or put() method!");
      if ($.length) {
        var W = function (e) {
          var n = t.get(e);
          n.setLocale(o || l), D[n.getInterpolationIdentifier()] = n
        };
        W.displayName = "interpolationFactoryAdder", angular.forEach($, W)
      }
      var G = function (e) {
        var t = r.defer();
        if (Object.prototype.hasOwnProperty.call(y, e)) t.resolve(y[e]); else if (q[e]) {
          var n = function (e) {
            L(e.key, e.table), t.resolve(e.table)
          };
          n.displayName = "translationTableResolver", q[e].then(n, t.reject)
        } else t.reject();
        return t.promise
      }, Y = function (e, t, n, o) {
        var i = r.defer(), a = function (r) {
          if (Object.prototype.hasOwnProperty.call(r, t)) {
            o.setLocale(e);
            var a = r[t];
            "@:" === a.substr(0, 2) ? Y(e, a.substr(2), n, o).then(i.resolve, i.reject) : i.resolve(o.interpolate(r[t], n)), o.setLocale(l)
          } else i.reject()
        };
        return a.displayName = "fallbackTranslationResolver", G(e).then(a, i.reject), i.promise
      }, X = function (e, t, n, r) {
        var o, i = y[e];
        if (i && Object.prototype.hasOwnProperty.call(i, t)) {
          if (r.setLocale(e), "@:" === (o = r.interpolate(i[t], n)).substr(0, 2)) return X(e, o.substr(2), n, r);
          r.setLocale(l)
        }
        return o
      }, K = function (e, n) {
        if (d) {
          var r = t.get(d)(e, l, n);
          return void 0 !== r ? r : e
        }
        return e
      }, Q = function (e, t, n, o, i) {
        var s = r.defer();
        if (e < a.length) {
          var l = a[e];
          Y(l, t, n, o).then(s.resolve, function () {
            Q(e + 1, t, n, o, i).then(s.resolve)
          })
        } else s.resolve(i || K(t, n));
        return s.promise
      }, J = function (e, t, n, r) {
        var o;
        if (e < a.length) {
          var i = a[e];
          (o = X(i, t, n, r)) || (o = J(e + 1, t, n, r))
        }
        return o
      }, Z = function (e, t, n, r) {
        return Q(x > 0 ? x : f, e, t, n, r)
      }, ee = function (e, t, n) {
        return J(x > 0 ? x : f, e, t, n)
      }, te = function (e, t, n, o) {
        var i = r.defer(), s = l ? y[l] : y, c = n ? D[n] : P;
        if (s && Object.prototype.hasOwnProperty.call(s, e)) {
          var u = s[e];
          "@:" === u.substr(0, 2) ? U(u.substr(2), t, n, o).then(i.resolve, i.reject) : i.resolve(c.interpolate(u, t))
        } else {
          var f;
          d && !O && (f = K(e, t)), l && a && a.length ? Z(e, t, c, o).then(function (e) {
            i.resolve(e)
          }, function (e) {
            i.reject(H(e))
          }) : d && !O && f ? i.resolve(o || f) : o ? i.resolve(o) : i.reject(H(e))
        }
        return i.promise
      }, ne = function (e, t, n) {
        var r, o = l ? y[l] : y, i = P;
        if (D && Object.prototype.hasOwnProperty.call(D, n) && (i = D[n]), o && Object.prototype.hasOwnProperty.call(o, e)) {
          var s = o[e];
          r = "@:" === s.substr(0, 2) ? ne(s.substr(2), t, n) : i.interpolate(s, t)
        } else {
          var c;
          d && !O && (c = K(e, t)), l && a && a.length ? (f = 0, r = ee(e, t, i)) : r = d && !O && c ? c : H(e)
        }
        return r
      }, re = function (e) {
        c === e && (c = void 0), q[e] = void 0
      };
      U.preferredLanguage = function (e) {
        return e && B(e), o
      }, U.cloakClassName = function () {
        return k
      }, U.nestedObjectDelimeter = function () {
        return C
      }, U.fallbackLanguage = function (e) {
        if (void 0 !== e && null !== e) {
          if (R(e), h && a && a.length) for (var t = 0, n = a.length; n > t; t++) q[a[t]] || (q[a[t]] = z(a[t]));
          U.use(U.use())
        }
        return s ? a[0] : a
      }, U.useFallbackLanguage = function (e) {
        if (void 0 !== e && null !== e) if (e) {
          var t = I(a, e);
          t > -1 && (x = t)
        } else x = 0
      }, U.proposedLanguage = function () {
        return c
      }, U.storage = function () {
        return i
      }, U.use = function (e) {
        if (!e) return l;
        var t = r.defer();
        n.$emit("$translateChangeStart", {language: e});
        var o = _(e);
        return o && (e = o), !S && y[e] || !h || q[e] ? c === e && q[e] ? q[e].then(function (e) {
          return t.resolve(e.key), e
        }, function (e) {
          return t.reject(e), r.reject(e)
        }) : (t.resolve(e), V(e)) : (c = e, q[e] = z(e).then(function (e) {
          return L(e.key, e.table), t.resolve(e.key), V(e.key), e
        }, function (e) {
          return n.$emit("$translateChangeError", {language: e}), t.reject(e), n.$emit("$translateChangeEnd", {language: e}), r.reject(e)
        }), q[e].finally(function () {
          re(e)
        })), t.promise
      }, U.storageKey = function () {
        return j()
      }, U.isPostCompilingEnabled = function () {
        return T
      }, U.isForceAsyncReloadEnabled = function () {
        return S
      }, U.refresh = function (e) {
        function t() {
          i.resolve(), n.$emit("$translateRefreshEnd", {language: e})
        }

        function o() {
          i.reject(), n.$emit("$translateRefreshEnd", {language: e})
        }

        if (!h) throw new Error("Couldn't refresh translation table, no loader registered!");
        var i = r.defer();
        if (n.$emit("$translateRefreshStart", {language: e}), e) if (y[e]) {
          var s = function (n) {
            L(n.key, n.table), e === l && V(l), t()
          };
          s.displayName = "refreshPostProcessor", z(e).then(s, o)
        } else o(); else {
          var c = [], u = {};
          if (a && a.length) for (var f = 0, d = a.length; d > f; f++) c.push(z(a[f])), u[a[f]] = !0;
          l && !u[l] && c.push(z(l));
          var p = function (e) {
            y = {}, angular.forEach(e, function (e) {
              L(e.key, e.table)
            }), l && V(l), t()
          };
          p.displayName = "refreshPostProcessor", r.all(c).then(p, o)
        }
        return i.promise
      }, U.instant = function (e, t, n) {
        if (null === e || angular.isUndefined(e)) return e;
        if (angular.isArray(e)) {
          for (var r = {}, i = 0, s = e.length; s > i; i++) r[e[i]] = U.instant(e[i], t, n);
          return r
        }
        if (angular.isString(e) && e.length < 1) return e;
        e && (e = M.apply(e));
        var c, u = [];
        o && u.push(o), l && u.push(l), a && a.length && (u = u.concat(a));
        for (var f = 0, p = u.length; p > f; f++) {
          var h = u[f];
          if (y[h] && (void 0 !== y[h][e] ? c = ne(e, t, n) : (m || v) && (c = H(e))), void 0 !== c) break
        }
        return c || "" === c || (c = P.interpolate(e, t), d && !O && (c = K(e, t))), c
      }, U.versionInfo = function () {
        return "2.8.0"
      }, U.loaderCache = function () {
        return b
      }, U.directivePriority = function () {
        return E
      }, U.statefulFilter = function () {
        return A
      }, U.isReady = function () {
        return !1
      };
      var oe = r.defer();
      U.onReady = function (e) {
        var t = r.defer();
        return angular.isFunction(e) && t.promise.then(e), oe.promise.then(function () {
          t.resolve()
        }), t.promise
      };
      var ie = n.$on("$translateReady", function () {
        oe.resolve(), ie(), ie = null
      }), ae = n.$on("$translateChangeEnd", function () {
        oe.resolve(), ae(), ae = null
      });
      if (h) {
        if (angular.equals(y, {}) && U.use() && U.use(U.use()), a && a.length) for (var se = 0, le = a.length; le > se; se++) {
          var ce = a[se];
          (S || !y[ce]) && (q[ce] = z(ce).then(function (e) {
            return L(e.key, e.table), n.$emit("$translateChangeEnd", {language: e.key}), e
          }))
        }
      } else n.$emit("$translateReady", {language: U.use()});
      return U
    }]
  }

  function n(e, t) {
    "use strict";
    var n, r = {};
    return r.setLocale = function (e) {
      n = e
    }, r.getInterpolationIdentifier = function () {
      return "default"
    }, r.useSanitizeValueStrategy = function (e) {
      return t.useStrategy(e), this
    }, r.interpolate = function (n, r) {
      r = r || {}, r = t.sanitize(r, "params");
      var o = e(n)(r);
      return o = t.sanitize(o, "text")
    }, r
  }

  function r(e, t, n, r, i, a) {
    "use strict";
    var s = function () {
      return this.toString().replace(/^\s+|\s+$/g, "")
    };
    return {
      restrict: "AE", scope: !0, priority: e.directivePriority(), compile: function (t, l) {
        var c = l.translateValues ? l.translateValues : void 0,
          u = l.translateInterpolation ? l.translateInterpolation : void 0,
          f = t[0].outerHTML.match(/translate-value-+/i),
          d = "^(.*)(" + n.startSymbol() + ".*" + n.endSymbol() + ")(.*)",
          p = "^(.*)" + n.startSymbol() + "(.*)" + n.endSymbol() + "(.*)";
        return function (t, h, g) {
          t.interpolateParams = {}, t.preText = "", t.postText = "", t.translateNamespace = o(t);
          var m = {}, v = function (e) {
            if (angular.isFunction(v._unwatchOld) && (v._unwatchOld(), v._unwatchOld = void 0), angular.equals(e, "") || !angular.isDefined(e)) {
              var r = s.apply(h.text()), o = r.match(d);
              if (angular.isArray(o)) {
                t.preText = o[1], t.postText = o[3], m.translate = n(o[2])(t.$parent);
                var i = r.match(p);
                angular.isArray(i) && i[2] && i[2].length && (v._unwatchOld = t.$watch(i[2], function (e) {
                  m.translate = e, w()
                }))
              } else m.translate = r
            } else m.translate = e;
            w()
          };
          !function (e, n, r) {
            if (n.translateValues && angular.extend(e, i(n.translateValues)(t.$parent)), f) for (var o in r) Object.prototype.hasOwnProperty.call(n, o) && "translateValue" === o.substr(0, 14) && "translateValues" !== o && (e[angular.lowercase(o.substr(14, 1)) + o.substr(15)] = r[o])
          }(t.interpolateParams, g, l);
          var b = !0;
          g.$observe("translate", function (e) {
            void 0 === e ? v("") : "" === e && b || (m.translate = e, w()), b = !1
          });
          for (var y in g) g.hasOwnProperty(y) && "translateAttr" === y.substr(0, 13) && function (e) {
            g.$observe(e, function (t) {
              m[e] = t, w()
            })
          }(y);
          if (g.$observe("translateDefault", function (e) {
              t.defaultText = e
            }), c && g.$observe("translateValues", function (e) {
              e && t.$parent.$watch(function () {
                angular.extend(t.interpolateParams, i(e)(t.$parent))
              })
            }), f) {
            for (var x in g) Object.prototype.hasOwnProperty.call(g, x) && "translateValue" === x.substr(0, 14) && "translateValues" !== x && function (e) {
              g.$observe(e, function (n) {
                var r = angular.lowercase(e.substr(14, 1)) + e.substr(15);
                t.interpolateParams[r] = n
              })
            }(x)
          }
          var w = function () {
            for (var e in m) m.hasOwnProperty(e) && void 0 !== m[e] && $(e, m[e], t, t.interpolateParams, t.defaultText, t.translateNamespace)
          }, $ = function (t, n, r, o, i, a) {
            n ? (a && "." === n.charAt(0) && (n = a + n), e(n, o, u, i).then(function (e) {
              k(e, r, !0, t)
            }, function (e) {
              k(e, r, !1, t)
            })) : k(n, r, !1, t)
          }, k = function (t, n, o, i) {
            if ("translate" === i) {
              o || void 0 === n.defaultText || (t = n.defaultText), h.empty().append(n.preText + t + n.postText);
              var a = e.isPostCompilingEnabled(), s = void 0 !== l.translateCompile,
                c = s && "false" !== l.translateCompile;
              (a && !s || c) && r(h.contents())(n)
            } else {
              o || void 0 === n.defaultText || (t = n.defaultText);
              var u = g.$attr[i];
              "data-" === u.substr(0, 5) && (u = u.substr(5)), u = u.substr(15), h.attr(u, t)
            }
          };
          (c || f || g.translateDefault) && t.$watch("interpolateParams", w, !0);
          var T = a.$on("$translateChangeSuccess", w);
          h.text().length ? v(g.translate ? g.translate : "") : g.translate && v(g.translate), w(), t.$on("$destroy", T)
        }
      }
    }
  }

  function o(e) {
    "use strict";
    return e.translateNamespace ? e.translateNamespace : e.$parent ? o(e.$parent) : void 0
  }

  function i(e) {
    "use strict";
    return {
      compile: function (t) {
        var n = function () {
          t.addClass(e.cloakClassName())
        }, r = function () {
          t.removeClass(e.cloakClassName())
        };
        return e.onReady(function () {
          r()
        }), n(), function (t, o, i) {
          i.translateCloak && i.translateCloak.length && i.$observe("translateCloak", function (t) {
            e(t).then(r, n)
          })
        }
      }
    }
  }

  function a() {
    "use strict";
    return {
      restrict: "A", scope: !0, compile: function () {
        return {
          pre: function (e, t, n) {
            e.translateNamespace = o(e), e.translateNamespace && "." === n.translateNamespace.charAt(0) ? e.translateNamespace += n.translateNamespace : e.translateNamespace = n.translateNamespace
          }
        }
      }
    }
  }

  function o(e) {
    "use strict";
    return e.translateNamespace ? e.translateNamespace : e.$parent ? o(e.$parent) : void 0
  }

  function s(e, t) {
    "use strict";
    var n = function (n, r, o) {
      return angular.isObject(r) || (r = e(r)(this)), t.instant(n, r, o)
    };
    return t.statefulFilter() && (n.$stateful = !0), n
  }

  function l(e) {
    "use strict";
    return e("translations")
  }

  return angular.module("pascalprecht.translate", ["ng"]).run(e), e.$inject = ["$translate"], e.displayName = "runTranslate", angular.module("pascalprecht.translate").provider("$translateSanitization", function () {
    "use strict";
    var e, t, n = null, r = !1, o = !1;
    (t = {
      sanitize: function (e, t) {
        return "text" === t && (e = a(e)), e
      }, escape: function (e, t) {
        return "text" === t && (e = i(e)), e
      }, sanitizeParameters: function (e, t) {
        return "params" === t && (e = s(e, a)), e
      }, escapeParameters: function (e, t) {
        return "params" === t && (e = s(e, i)), e
      }
    }).escaped = t.escapeParameters, this.addStrategy = function (e, n) {
      return t[e] = n, this
    }, this.removeStrategy = function (e) {
      return delete t[e], this
    }, this.useStrategy = function (e) {
      return r = !0, n = e, this
    }, this.$get = ["$injector", "$log", function (i, a) {
      var s = {}, l = function (e, n, r) {
        return angular.forEach(r, function (r) {
          if (angular.isFunction(r)) e = r(e, n); else if (angular.isFunction(t[r])) e = t[r](e, n); else {
            if (!angular.isString(t[r])) throw new Error("pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: '" + r + "'");
            if (!s[t[r]]) try {
              s[t[r]] = i.get(t[r])
            } catch (e) {
              throw s[t[r]] = function () {
              }, new Error("pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: '" + r + "'")
            }
            e = s[t[r]](e, n)
          }
        }), e
      }, c = function () {
        r || o || (a.warn("pascalprecht.translate.$translateSanitization: No sanitization strategy has been configured. This can have serious security implications. See http://angular-translate.github.io/docs/#/guide/19_security for details."), o = !0)
      };
      return i.has("$sanitize") && (e = i.get("$sanitize")), {
        useStrategy: function (e) {
          return function (t) {
            e.useStrategy(t)
          }
        }(this), sanitize: function (e, t, r) {
          if (n || c(), arguments.length < 3 && (r = n), !r) return e;
          var o = angular.isArray(r) ? r : [r];
          return l(e, t, o)
        }
      }
    }];
    var i = function (e) {
      var t = angular.element("<div></div>");
      return t.text(e), t.html()
    }, a = function (t) {
      if (!e) throw new Error("pascalprecht.translate.$translateSanitization: Error cannot find $sanitize service. Either include the ngSanitize module (https://docs.angularjs.org/api/ngSanitize) or use a sanitization strategy which does not depend on $sanitize, such as 'escape'.");
      return e(t)
    }, s = function (e, t) {
      if (angular.isObject(e)) {
        var n = angular.isArray(e) ? [] : {};
        return angular.forEach(e, function (e, r) {
          n[r] = s(e, t)
        }), n
      }
      return angular.isNumber(e) ? e : t(e)
    }
  }), angular.module("pascalprecht.translate").constant("pascalprechtTranslateOverrider", {}).provider("$translate", t), t.$inject = ["$STORAGE_KEY", "$windowProvider", "$translateSanitizationProvider", "pascalprechtTranslateOverrider"], t.displayName = "displayName", angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation", n), n.$inject = ["$interpolate", "$translateSanitization"], n.displayName = "$translateDefaultInterpolation", angular.module("pascalprecht.translate").constant("$STORAGE_KEY", "NG_TRANSLATE_LANG_KEY"), angular.module("pascalprecht.translate").directive("translate", r), r.$inject = ["$translate", "$q", "$interpolate", "$compile", "$parse", "$rootScope"], r.displayName = "translateDirective", angular.module("pascalprecht.translate").directive("translateCloak", i), i.$inject = ["$translate"], i.displayName = "translateCloakDirective", angular.module("pascalprecht.translate").directive("translateNamespace", a), a.displayName = "translateNamespaceDirective", angular.module("pascalprecht.translate").filter("translate", s), s.$inject = ["$parse", "$translate"], s.displayName = "translateFilterFactory", angular.module("pascalprecht.translate").factory("$translationCache", l), l.$inject = ["$cacheFactory"], l.displayName = "$translationCache", "pascalprecht.translate"
}), function (e, t) {
  "function" == typeof define && define.amd ? define([], function () {
    return t()
  }) : "object" == typeof exports ? module.exports = t() : t()
}(0, function () {
  function e(e, t) {
    "use strict";
    return function (n) {
      if (!n || !(angular.isArray(n.files) || angular.isString(n.prefix) && angular.isString(n.suffix))) throw new Error("Couldn't load static files, no files and prefix or suffix specified!");
      n.files || (n.files = [{prefix: n.prefix, suffix: n.suffix}]);
      for (var r = [], o = n.files.length, i = 0; o > i; i++) r.push(function (r) {
        if (!r || !angular.isString(r.prefix) || !angular.isString(r.suffix)) throw new Error("Couldn't load static file, no prefix or suffix specified!");
        return t(angular.extend({
          url: [r.prefix, n.key, r.suffix].join(""),
          method: "GET",
          params: ""
        }, n.$http)).then(function (e) {
          return e.data
        }, function () {
          return e.reject(n.key)
        })
      }({prefix: n.files[i].prefix, key: n.key, suffix: n.files[i].suffix}));
      return e.all(r).then(function (e) {
        for (var t = e.length, n = {}, r = 0; t > r; r++) for (var o in e[r]) n[o] = e[r][o];
        return n
      })
    }
  }

  return e.$inject = ["$q", "$http"], angular.module("pascalprecht.translate").factory("$translateStaticFilesLoader", e), e.displayName = "$translateStaticFilesLoader", "pascalprecht.translate"
}), function (e, t, n) {
  "use strict";
  t.module("ngCookies", ["ng"]).factory("$cookies", ["$rootScope", "$browser", function (e, n) {
    var r, o = {}, i = {}, a = !1, s = t.copy, l = t.isUndefined;
    return n.addPollFn(function () {
      var t = n.cookies();
      r != t && (r = t, s(t, i), s(t, o), a && e.$apply())
    })(), a = !0, e.$watch(function () {
      var e, r, a;
      for (e in i) l(o[e]) && n.cookies(e, void 0);
      for (e in o) r = o[e], t.isString(r) || (r = "" + r, o[e] = r), r !== i[e] && (n.cookies(e, r), a = !0);
      if (a) for (e in r = n.cookies(), o) o[e] !== r[e] && (l(r[e]) ? delete o[e] : o[e] = r[e])
    }), o
  }]).factory("$cookieStore", ["$cookies", function (e) {
    return {
      get: function (n) {
        return (n = e[n]) ? t.fromJson(n) : n
      }, put: function (n, r) {
        e[n] = t.toJson(r)
      }, remove: function (t) {
        delete e[t]
      }
    }
  }])
}(window, window.angular);
var Langs = {};
Langs.en = {
  time: "时间",
  open: "开盘",
  high: "最高",
  low: "最低",
  close: "收盘",
  increase: "涨幅",
  swing: "振幅",
  volume: "VOL",
  quoteVolume: "转让额",
  hand: "换手率",
  o: "开",
  h: "高",
  l: "低",
  c: "收",
  price: "价格",
  updown: "涨跌",
  rang: "幅度"
}, Langs.cn = {
  time: "时间",
  open: "开盘",
  high: "最高",
  low: "最低",
  close: "收盘",
  increase: "涨幅",
  swing: "振幅",
  volume: "成交量",
  quoteVolume: "成交额",
  hand: "换手率",
  o: "开",
  h: "高",
  l: "低",
  c: "收",
  price: "价格",
  updown: "涨跌",
  rang: "幅度"
}, function (e) {
  "use strict";
  var t = function (e, t) {
    this.init("tooltip", e, t)
  };
  t.prototype = {
    constructor: t, init: function (t, n, r) {
      var o, i;
      this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.enabled = !0, "manual" != this.options.trigger && (o = "hover" == this.options.trigger ? "mouseenter" : "focus", i = "hover" == this.options.trigger ? "mouseleave" : "blur", this.$element.on(o, this.options.selector, e.proxy(this.enter, this)), this.$element.on(i, this.options.selector, e.proxy(this.leave, this))), this.options.selector ? this._options = e.extend({}, this.options, {
        trigger: "manual",
        selector: ""
      }) : this.fixTitle()
    }, getOptions: function (t) {
      return (t = e.extend({}, e.fn[this.type].defaults, t, this.$element.data())).delay && "number" == typeof t.delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), t
    }, enter: function (t) {
      var n = e(t.currentTarget)[this.type](this._options).data(this.type);
      n.options.delay && n.options.delay.show ? (n.hoverState = "in", setTimeout(function () {
        "in" == n.hoverState && n.show()
      }, n.options.delay.show)) : n.show()
    }, leave: function (t) {
      var n = e(t.currentTarget)[this.type](this._options).data(this.type);
      n.options.delay && n.options.delay.hide ? (n.hoverState = "out", setTimeout(function () {
        "out" == n.hoverState && n.hide()
      }, n.options.delay.hide)) : n.hide()
    }, show: function () {
      var e, t, n, r, o, i, a;
      if (this.hasContent() && this.enabled) {
        switch (e = this.tip(), this.setContent(), this.options.animation && e.addClass("fade"), i = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, t = /in/.test(i), e.remove().css({
          top: 0,
          left: 0,
          display: "block"
        }).appendTo(t ? this.$element : document.body), n = this.getPosition(t), r = e[0].offsetWidth, o = e[0].offsetHeight, t ? i.split(" ")[1] : i) {
          case"bottom":
            a = {top: n.top + n.height, left: n.left + n.width / 2 - r / 2};
            break;
          case"top":
            a = {top: n.top - o, left: n.left + n.width / 2 - r / 2};
            break;
          case"left":
            a = {top: n.top + n.height / 2 - o / 2, left: n.left - r};
            break;
          case"right":
            a = {top: n.top + n.height / 2 - o / 2, left: n.left + n.width}
        }
        e.css(a).addClass(i).addClass("in")
      }
    }, setContent: function () {
      var e = this.tip();
      e.find(".tooltip-inner").html(this.getTitle()), e.removeClass("fade in top bottom left right")
    }, hide: function () {
      var t = this.tip();
      t.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? function () {
        var n = setTimeout(function () {
          t.off(e.support.transition.end).remove()
        }, 500);
        t.one(e.support.transition.end, function () {
          clearTimeout(n), t.remove()
        })
      }() : t.remove()
    }, fixTitle: function () {
      var e = this.$element;
      (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").removeAttr("title")
    }, hasContent: function () {
      return this.getTitle()
    }, getPosition: function (t) {
      return e.extend({}, t ? {top: 0, left: 0} : this.$element.offset(), {
        width: this.$element[0].offsetWidth,
        height: this.$element[0].offsetHeight
      })
    }, getTitle: function () {
      var e, t = this.$element, n = this.options;
      return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title), e = e.toString().replace(/(^\s*|\s*$)/, "")
    }, tip: function () {
      return this.$tip = this.$tip || e(this.options.template)
    }, validate: function () {
      this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, enable: function () {
      this.enabled = !0
    }, disable: function () {
      this.enabled = !1
    }, toggleEnabled: function () {
      this.enabled = !this.enabled
    }, toggle: function () {
      this[this.tip().hasClass("in") ? "hide" : "show"]()
    }
  }, e.fn.tooltip = function (n) {
    return this.each(function () {
      var r = e(this), o = r.data("tooltip"), i = "object" == typeof n && n;
      o || r.data("tooltip", o = new t(this, i)), "string" == typeof n && o[n]()
    })
  }, e.fn.tooltip.Constructor = t, e.fn.tooltip.defaults = {
    animation: !0,
    delay: 0,
    selector: !1,
    placement: "top",
    trigger: "hover",
    title: "",
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  }
}(window.jQuery);
var BASE_URL = "http://localhost/rtbtc-dev/", DATA_URL = "http://localhost/rtbtc-dev/", DEBUG = !0, OFFLINE = !1,
  RTBTC_Class = function (e, t, n) {
    function r() {
      function r(e, t) {
        if (i.handlers.hasOwnProperty(e)) for (var n = 0; n < i.handlers[e].length; n++) i.handlers[e][n][1](t)
      }

      function o(e, t, n) {
        DEBUG && a("JSON Call for " + e), $.ajax({
          url: e, type: "GET", dataType: "json", success: function (e, n, r) {
            "function" == typeof t && t(e)
          }, error: function (e, t, r) {
            "function" == typeof n && n()
          }
        })
      }

      var i = {
        url: "" + e,
        debug: !!t,
        offline: !!n,
        lang: "en",
        accounts: {},
        has_api: !1,
        prefsAccount: "",
        expires: millitime() + 60,
        expires_id: -1,
        base: "",
        base_int: 1,
        base_prec: 8,
        quote: "CNY",
        quote_int: 1,
        quote_prec: 4,
        exch_fee: {mtgox: .0065, bitstamp: .005, btce: .002},
        token: "",
        version: "0.0.0",
        startTime: millitime(),
        offset: 0,
        exchange: "bitstamp",
        exch_list: ["bitstamp", "btce"],
        handlers: {},
        title: "" + window.document.title,
        ERROR: 1,
        WARNING: 2,
        MESSAGE: 3,
        windows: []
      }, a = function (e, t) {
        switch (t) {
          case i.ERROR:
            console.error(e);
            break;
          case i.WARNING:
            console.warn(e);
            break;
          case i.MESSAGE:
          default:
            console.log(e)
        }
        if (!DEBUG) throw{}
      };
      $.ajaxSetup({async: !0, type: "POST", dataType: "json", crossDomain: !1});
      for (var s = function (e, t, n, o, s) {
        DEBUG && a("AJAX Call for " + e + ", data:"), DEBUG && null != t && a(t), $.ajax({
          url: i.url + "api/" + e,
          data: {payload: t, token: i.token, aid: i.accounts[i.exchange], t0: millitime()},
          success: function (t, c, u) {
            var f = millitime();
            if (void 0 !== t.result) {
              if (void 0 !== t.timing && l({
                  t0: parseFloat(t.timing.t0),
                  t1: parseFloat(t.timing.t1),
                  t2: parseFloat(t.timing.t2),
                  t3: f
                }), void 0 !== t.token && (i.token = $.trim(t.token)), void 0 !== t.version) {
                var d = $.trim(t.version);
                d != i.version && window.setTimeout(function () {
                  r("version", d)
                }, 5e3)
              }
              if ("success" == t.result) DEBUG && a("Success data [" + e + "]:"), DEBUG && a(t.data), "function" == typeof n && n(t.data); else if (void 0 !== t.reason) switch (t.reason) {
                case"session":
                case"auth":
                  DEBUG && a("Save failure: " + t.reason), !OFFLINE && window.location.reload();
                  break;
                default:
                  "function" == typeof o && (DEBUG && a("Calling failure fn with:"), DEBUG && a(t.reason), o(t.reason))
              } else "function" == typeof o && o()
            } else "function" == typeof s && s()
          },
          error: function (e, t, n) {
            "function" == typeof s && s()
          }
        })
      }, l = function (e) {
        void 0 !== e.t0 && void 0 !== e.t1 && void 0 !== e.t2 && void 0 !== e.t3 && r("timing", {
          latency: (-e.t0 + e.t1 - e.t2 + e.t3) / 2,
          processing: e.t2 - e.t1
        })
      }, c = function () {
        i.windows.append(window.open(i.url + "s/platform/window", uniqueID()))
      }, u = function () {
        var e = i.expires - millitime();
        1e3 * e > 2147483647 || (DEBUG && a("Expire in " + (i.expires - millitime()) + "s"), window.clearTimeout(i.expires_id), i.expires_id = window.setTimeout(function () {
          DEBUG && a("Subscription expired. Reloading."), window.location.reload()
        }, 1e3 * e))
      }, f = [""], d = [""], p = 1; p <= 30; p++) d.push(d[p - 1] + "&nbsp;"), f.push(f[p - 1] + "0");
      return {
        token: function (e) {
          return null == e ? i.token : (i.token = e, DEBUG && a('Set RTBTC token to "' + e + '"'), this)
        }, account: function () {
          return i.accounts[i.exchange]
        }, accounts: function (e) {
          i.accounts = {};
          for (var t in e) i.exch_list.indexOf(t) < 0 || (i.accounts[t] = e[t], DEBUG && a("Set user account string for " + t + ' to "' + e[t] + '"'));
          return this
        }, prefsAccount: function (e) {
          return null == e ? i.prefsAccount : (i.prefsAccount = e, DEBUG && a('Set user preferences account string to "' + e + '"'), this)
        }, hasApi: function () {
          return i.accounts.hasOwnProperty(i.exchange)
        }, startTime: function () {
          return i.startTime
        }, offset: function (e) {
          return null == e ? i.offset : (i.offset = e.client - e.server, DEBUG && a("Got server time offset of " + i.offset + "s"), this)
        }, expires: function (e) {
          return null == e ? i.expires : (i.expires = +e + i.offset, u(), DEBUG && a("Set expiration time to " + new Date(1e3 * i.expires)), this)
        }, ajax: function (e, t, n, r, o) {
          return void 0 !== e && s(e, t, n, r, o), this
        }, json: function (e, t, n) {
          return void 0 !== e && o(e, t, n), this
        }, base: function () {
          return i.base
        }, quote: function () {
          return i.quote
        }, symbol: function () {
          return i.base + "/" + i.quote
        }, baseInt: function () {
          return i.base_int
        }, quoteInt: function () {
          return i.quote_int
        }, basePrec: function () {
          return i.base_prec
        }, quotePrec: function () {
          return i.quote_prec
        }, instrument: function (e, t, n) {
          try {
            e = e.toLowerCase(), t = t.toUpperCase(), n = n.toUpperCase()
          } catch (r) {
            return DEBUG && a("RTBTC.instrument 1: " + e + ", " + t + ", " + n, i.ERROR), this
          }
          var o = {exch: "" + i.exchange, base: "" + i.base, quote: "" + i.quote};
          return i.exchange = e, i.base = t, i.quote = n, DEBUG && a("RTBTC:instrument(" + i.exchange + ", " + i.base + ", " + i.quote + ")"), DEBUG && a(" " + i.base + " precision : " + i.base_prec + ", int: " + i.base_int), DEBUG && a(" " + i.quote + " precision: " + i.quote_prec + ", int: " + i.quote_int), r("instrument", {
            old_instr: o,
            new_instr: {exch: i.exchange, base: i.base, quote: i.quote}
          }), this
        }, version: function (e) {
          if (null == e) return i.version;
          i.version = e;
          for (var t = "", n = 0; n < 75; n++) t += "=";
          return DEBUG && a(t), DEBUG && a("RTBTC Version " + i.version), DEBUG && a(t), DEBUG && a(" "), this
        }, url: function () {
          return i.url
        }, language: function (e) {
          return null == e ? i.lang : (i.lang = e, r("language", i.lang), this)
        }, handler: function (e, t, n) {
          return i.handlers.hasOwnProperty(e) || (i.handlers[e] = []), i.handlers[e].push([t, n]), this
        }, unregister: function (e, t, n) {
          if (i.handlers.hasOwnProperty(e)) {
            var r, o = void 0 === n;
            for (r = i.handlers[e].length - 1; r >= 0; r--) i.handlers[e][r][0] == t && (o || i.handlers[e][r][1] == n) && i.handlers[e].splice(r, 1);
            return this
          }
        }, unregisterAll: function (e) {
          var t, n;
          for (n in i.handlers) if (i.handlers.hasOwnProperty(n)) for (t = i.handlers[n].length - 1; t >= 0; t--) i.handlers[n][t][0] == e && i.handlers[n].splice(t, 1)
        }, trigger: function (e, t) {
          r(e, t)
        }, countdown: function (e, t) {
          $(e).each(function (e, t) {
            $(t).data("time", parseInt($(this).attr("name"))).removeAttr("name")
          });
          var n = function (e, t) {
            $(e).each(function (e, n) {
              var r = Math.max($(n).data("time"), 0), o = t ? dhms_from_sec(r) : hms_from_sec(r);
              return $(n).text(o), $(n).data("time", r - 1), !0
            })
          };
          window.setInterval(function () {
            n(e, t)
          }, 1e3), n(e, t)
        }, toggle: function (e, t, n, r) {
          return $("<span/>").addClass("control-toggle").addClass(function () {
            return e ? "yes" : "no"
          }).append(function () {
            return '<i class="icon-' + (e ? "ok" : "remove") + '"></i>'
          }).data("state", e).click(function (e) {
            var o = $(e.currentTarget);
            o.data("state") ? (o.data("state", !1).removeClass("yes").addClass("no").html('<i class="icon-remove"></i>'), "function" == typeof n && n()) : (o.data("state", !0).removeClass("no").addClass("yes").html('<i class="icon-ok"></i>'), "function" == typeof t && t()), "function" == typeof r && r(), stopEvent(e)
          })
        }, select: function (e, t, n, r) {
          var o, i, a = $("<select/>").on("change", function (t) {
            n(t.currentTarget.value), r && (t.currentTarget.value = e)
          });
          for (o = 0; o < t.length; o++) i = $("<option/>").html(t[o].text).attr("value", t[o].val), t[o].val == e && i.attr("selected", "selected"), a.append(i);
          return a
        }, numFormat: function (e, t) {
          if (void 0 === e) return "";
          var n = null == t ? Settings.display.precision.price : t, r = e.toFixed(n), o = r.length, i = 1;
          for (isNaN(r) && (r = "0.0"); i < t;) {
            if ("0" != r.charAt(o - i)) {
              if (1 == i) return r;
              break
            }
            i++
          }
          return Settings.display.zeros ? r.slice(0, o - i + 1) + '<span class="insig">' + f[i - 1] + "</span>" : r.slice(0, o - i + 1) + d[i - 1]
        }, numFormatShort: function (e, t) {
          if (void 0 === e) return "";
          var n = null == t ? Settings.display.precision.price : t, r = e.toFixed(n), o = r.length, i = 1;
          for (isNaN(r) && (r = "0.0"); i < t;) {
            if ("0" != r.charAt(o - i)) {
              if (1 == i) return r;
              break
            }
            i++
          }
          return r.slice(0, o - i + 1)
        }, siteTitle: function (e) {
          window.document.title = e + i.title
        }, newWindow: function () {
          return c(), this
        }, regUnsignedNum: new RegExp(/^\d*\.?\d*$/), internals: DEBUG ? function () {
          return i
        } : function () {
          return null
        }, debug: i.debug ? a : function (e, t) {
        }, isDebug: function () {
          return i.debug
        }, offline: function () {
          return i.offline
        }, ERROR: i.ERROR, WARNING: i.WARNING, MESSAGE: i.MESSAGE, ZEROS: f, SPACES: d
      }
    }

    var o = null;
    return new function () {
      this.Build = function () {
        return null == o && ((o = new r).constructor = null), o
      }
    }
  }(BASE_URL, DEBUG, OFFLINE), RTBTC = RTBTC_Class.Build(), BTC = "&#3647;", BTC_U = "฿", BTC_INT = 1;
AssertException.prototype.toString = function () {
  return "AssertException: " + this.message
};
var lastUniqueID = 0, alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(""),
  alphalen = alphabet.length;
Object.size = function (e) {
  var t, n = 0;
  for (t in e) e.hasOwnProperty(t) && n++;
  return n
}, Array.prototype.indexOf || (Array.prototype.indexOf = function (e) {
  var t = this.length, n = Number(arguments[1]) || 0;
  for ((n = n < 0 ? Math.ceil(n) : Math.floor(n)) < 0 && (n += t); n < t; n++) if (n in this && this[n] === e) return n;
  return -1
});
var has_dataURI = function () {
  return !1
};
!function () {
  var e = new Image;
  e.onload = function () {
    1 == this.width && 1 == this.height && (has_dataURI = function () {
      return !0
    })
  }, e.onerror = function () {
  }, e.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
}(), function () {
  var e = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.reqAnimFrame = void 0 !== e ? e : function (e) {
    e()
  }
}(), jQuery.cookie = function (e, t, n) {
  if (arguments.length > 1 && "[object Object]" !== String(t)) {
    if (n = jQuery.extend({}, n), null !== t && void 0 !== t || (n.expires = -1), "number" == typeof n.expires) {
      var r = n.expires, o = n.expires = new Date;
      o.setDate(o.getDate() + r)
    }
    return t = String(t), document.cookie = [encodeURIComponent(e), "=", n.raw ? t : encodeURIComponent(t), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
  }
  var i, a = (n = t || {}).raw ? function (e) {
    return e
  } : decodeURIComponent;
  return (i = new RegExp("(?:^|; )" + encodeURIComponent(e) + "=([^;]*)").exec(document.cookie)) ? a(i[1]) : null
};
var mobile, Colors = {
  c: {
    stroke: {
      fenshi: "#ffffff",
      up: "#ff0000",
      down: "#3AA60C",
      bid: "#4dd710",
      ask: "#d00017",
      grid: "#252522",
      border: "#333",
      arrow: "#fff",
      order: "#ffc200",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#fff",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#191919",
      up: "#ff0000",
      down: "#3AA60C",
      label: "#9EA694",
      flags: "#191919",
      crosshair: "#191919",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffc200",
      slottext: "#f4ffe4"
    }
  },
  c1: {
    stroke: {
      fenshi: "#ffffff",
      up: "#d00017",
      down: "#4dd710",
      bid: "#d00017",
      ask: "#4dd710",
      grid: "#252522",
      border: "#333",
      arrow: "#fff",
      order: "#ffc200",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#fff",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#191919",
      up: "#3AA60C",
      down: "#A10013",
      label: "#9EA694",
      flags: "#191919",
      crosshair: "#191919",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffc200",
      slottext: "#f4ffe4"
    }
  },
  f: {
    stroke: {
      up: "#00a1d9",
      down: "#ed111a",
      bid: "#ed111a",
      ask: "#00a1d9",
      grid: "#d5e4eb",
      border: "#014d65",
      order: "#014d65",
      majorlevel: "#014d65",
      minorlevel: "#014d65",
      crosshair: "#040f12",
      i: ["#00a1d9", "#ed111a", "#014d65", "#c60", "#6c0", "#0cc", "#cc0", "#0c0"]
    },
    fill: {
      bg: "#d5e4eb",
      up: "#00ACE5",
      down: "#FF121A",
      label: "#09232B",
      flags: "#F2F8FA",
      crosshair: "#fff",
      blankBG: "#fff",
      flagtext: "#040f12",
      ordertext: "#014d65",
      slottext: "#040f12"
    }
  },
  m: {
    stroke: {
      up: "#9C6",
      down: "#B40000",
      bid: "#7A1631",
      ask: "#89D12A",
      grid: "#454545",
      border: "#616161",
      order: "#014d65",
      majorlevel: "#014d65",
      minorlevel: "#014d65",
      crosshair: "#ffc200",
      i: ["#ffc200", "#0099cc", "#014d65", "#c60", "#6c0", "#0cc", "#cc0", "#0c0"]
    },
    fill: {
      bg: "#0f0f0f",
      up: "#658744",
      down: "#750000",
      label: "#F4FFE4",
      flags: "#0f0f0f",
      crosshair: "#0f0f0f",
      blankBG: "#0f0f0f",
      flagtext: "#F4FFE4",
      ordertext: "#014d65",
      slottext: "#F4FFE4"
    }
  },
  t: {
    stroke: {
      up: "#498192",
      down: "#daa102",
      bid: "#daa102",
      ask: "#498192",
      grid: "#0d1e29",
      border: "#014d65",
      order: "#014d65",
      majorlevel: "#014d65",
      minorlevel: "#014d65",
      crosshair: "#040f12",
      i: ["#498192", "#daa102", "#014d65", "#c60", "#6c0", "#0cc", "#cc0", "#0c0"]
    },
    fill: {
      bg: "#05232c",
      up: "#d6f7fb",
      down: "#f9f15f",
      label: "#daa102",
      flags: "#F2F8FA",
      crosshair: "#fff",
      blankBG: "#050b0f",
      flagtext: "#040f12",
      ordertext: "#014d65",
      slottext: "#040f12"
    }
  },
  s: {
    stroke: {
      up: "#999",
      down: "#000",
      bid: "#333",
      ask: "#999",
      grid: "#ddd",
      border: "#000",
      order: "#014d65",
      majorlevel: "#ccc",
      minorlevel: "#ddd",
      crosshair: "#000",
      i: ["#aaa", "#999", "#ccc", "#777"]
    },
    fill: {
      bg: "#fff",
      up: "#bbb",
      down: "#333",
      label: "#333",
      flags: "#fff",
      crosshair: "#fff",
      blankBG: "#fff",
      flagtext: "#000",
      ordertext: "#014d65",
      slottext: "#000"
    }
  },
  a: {
    stroke: {
      up: "#d00017",
      down: "#4dd710",
      bid: "#4dd710",
      ask: "#d00017",
      grid: "#d3d3d3",
      border: "#999999",
      order: "red",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#008fdb",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#ffffff",
      up: "#A10013",
      down: "#3AA60C",
      label: "#999999",
      flags: "#ffffff",
      crosshair: "#ffffff",
      blankBG: "#ffffff",
      flagtext: "#999999",
      ordertext: "#ffc200",
      slottext: "#165d82"
    }
  },
  a1: {
    stroke: {
      fenshi: "#267cd1",
      up: "#f24957",
      down: "#1dbf60",
      bid: "#4dd710",
      ask: "#d00017",
      grid: "#d3d3d3",
      border: "#999999",
      arrow: "#008fbd",
      order: "red",
      opacity: !0,
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#008fdb",
      i: ["#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#ffffff",
      up: "#f24957",
      down: "#1dbf60",
      label: "#999999",
      flags: "#ffffff",
      crosshair: "#ffffff",
      blankBG: "#ffffff",
      flagtext: "#999999",
      ordertext: "#ffc200",
      slottext: "#165d82"
    }
  },
  a2: {
    stroke: {
      fenshi: "#267cd1",
      up: "#f24957",
      down: "#1dbf60",
      bid: "#4dd710",
      ask: "#d00017",
      grid: "#d3d3d3",
      border: "#999999",
      arrow: "#008fbd",
      order: "red",
      priceShow: !0,
      opacity: !0,
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#008fdb",
      i: ["#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#ffffff",
      up: "#f24957",
      down: "#1dbf60",
      label: "#999999",
      flags: "#ffffff",
      crosshair: "#ffffff",
      blankBG: "#ffffff",
      flagtext: "#999999",
      ordertext: "#ffc200",
      slottext: "#165d82"
    }
  },
  "depth-white": {
    stroke: {
      up: "#d00017",
      down: "#ff6c78",
      bid: "#4dd710",
      ask: "#ff6c78",
      grid: "#dedede",
      border: "#dedede",
      order: "#1ad1af",
      majorlevel: "blue",
      minorlevel: "blue",
      crosshair: "#deac37",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#ffffff",
      up: "#ff6c78",
      down: "#9ed577",
      label: "#999999",
      flags: "#191919",
      crosshair: "#fff",
      blankBG: "#ffffff",
      flagtext: "#666666",
      ordertext: "#1ad1af",
      slottext: "blue"
    }
  },
  "chart-white2": {
    stroke: {
      fenshi: "#267cd1",
      up: "#73c921",
      fillUp: "#73c921",
      down: "#ca2c78",
      bid: "#79b48a",
      ask: "#f32f3f",
      grid: "#f1f1f1",
      border: "#f1f1f1",
      arrow: "#444",
      order: "red",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#008fdb",
      i: ["#ffc200", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#ffffff",
      up: "#73c921",
      down: "#ca2c78",
      label: "#999999",
      flags: "#ffffff",
      crosshair: "#ffffff",
      blankBG: "#ffffff",
      flagtext: "#999999",
      ordertext: "#ffc200",
      slottext: "#165d82"
    }
  },
  "depth-black-bnb": {
    stroke: {
      up: "#d00017",
      down: "#4dd710",
      bid: "#a3ff61",
      ask: "#ff3394",
      grid: "#323c45",
      border: "#333",
      order: "#ffffff",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#deac37",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#262d33",
      up: "#ff3394",
      down: "#a3ff61",
      label: "#9EA694",
      flags: "#191919",
      crosshair: "#191919",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffffff",
      slottext: "#f4ffe4"
    }
  },
  "depth-black-mobile-bnb": {
    stroke: {
      up: "#d00017",
      down: "#4dd710",
      bid: "#a3ff61",
      ask: "#ff3394",
      grid: "#323c45",
      border: "#333",
      order: "#ffffff",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#deac37",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#191d21",
      up: "#ff3394",
      down: "#a3ff61",
      label: "#9EA694",
      flags: "#191919",
      crosshair: "#191919",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffffff",
      slottext: "#f4ffe4"
    }
  },
  "chart-black-bnb": {
    stroke: {
      fenshi: "#ffffff",
      up: "#73c921",
      down: "#ca2c78",
      bid: "#4dd710",
      ask: "#d00017",
      grid: "#323c45",
      border: "#323c45",
      arrow: "#fff",
      order: "#ffc200",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#fff",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#262d33",
      up: "#73c921",
      down: "#ca2c78",
      label: "#9EA694",
      flags: "#262d33",
      crosshair: "#262d33",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffc200",
      slottext: "#f4ffe4"
    }
  },
  "chart-black-mobile-bnb": {
    stroke: {
      fenshi: "#ffffff",
      up: "#73c921",
      down: "#ca2c78",
      bid: "#4dd710",
      ask: "#d00017",
      grid: "#323c45",
      border: "#323c45",
      arrow: "#fff",
      order: "#ffc200",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#fff",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#191d21",
      up: "#73c921",
      down: "#ca2c78",
      label: "#9EA694",
      flags: "#262d33",
      crosshair: "#262d33",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffc200",
      slottext: "#f4ffe4"
    }
  },
  "depth-black-ico": {
    stroke: {
      fenshi: "#ffffff",
      up: "#4dd710",
      down: "#d00017",
      bid: "#4dd710",
      ask: "#d00017",
      grid: "#252522",
      border: "#333",
      arrow: "#fff",
      order: "#ffc200",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#fff",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#191919",
      up: "#A10013",
      down: "#3AA60C",
      label: "#9EA694",
      flags: "#191919",
      crosshair: "#191919",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffc200",
      slottext: "#f4ffe4"
    }
  },
  "chart-black-ico": {
    stroke: {
      fenshi: "#ffffff",
      up: "#3AA60C",
      down: "#ff0000",
      bid: "#4dd710",
      ask: "#d00017",
      grid: "#323c45",
      border: "#333",
      arrow: "#fff",
      order: "#ffc200",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#fff",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#191919",
      up: "#3AA60C",
      down: "#ff0000",
      label: "#9EA694",
      flags: "#191919",
      crosshair: "#262d33",
      blankBG: "#191919",
      flagtext: "#f4ffe4",
      ordertext: "#ffc200",
      slottext: "#f4ffe4"
    }
  },
  "chart-black-zql": {
    stroke: {
      fenshi: "#ffffff",
      up: "#3AA60C",
      down: "#ff0000",
      bid: "#4dd710",
      ask: "#d00017",
      grid: "#323c45",
      border: "#333",
      arrow: "#fff",
      order: "#ffc200",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#fff",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#191919",
      up: "#3AA60C",
      down: "#ff0000",
      label: "#9EA694",
      flags: "#191919",
      crosshair: "#262d33",
      blankBG: "#191919",
      flagtext: "#f4ffe4",
      ordertext: "#ffc200",
      slottext: "#f4ffe4"
    }
  },
  "chart-black-mobile-zql": {
    stroke: {
      fenshi: "#ffffff",
      up: "#73c921",
      down: "#ca2c78",
      bid: "#4dd710",
      ask: "#d00017",
      grid: "#323c45",
      border: "#323c45",
      arrow: "#fff",
      order: "#ffc200",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#fff",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#191d21",
      up: "#73c921",
      down: "#ca2c78",
      label: "#9EA694",
      flags: "#262d33",
      crosshair: "#262d33",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffc200",
      slottext: "#f4ffe4"
    }
  },
  "depth-black-zql": {
    stroke: {
      fenshi: "#ffffff",
      up: "#4dd710",
      down: "#d00017",
      bid: "#4dd710",
      ask: "#d00017",
      grid: "#252522",
      border: "#333",
      arrow: "#fff",
      order: "#ffc200",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#fff",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#191919",
      up: "#A10013",
      down: "#3AA60C",
      label: "#9EA694",
      flags: "#191919",
      crosshair: "#191919",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffc200",
      slottext: "#f4ffe4"
    }
  },
  "depth-black-mobile-zql": {
    stroke: {
      up: "#d00017",
      down: "#4dd710",
      bid: "#a3ff61",
      ask: "#ff3394",
      grid: "#323c45",
      border: "#333",
      order: "#ffffff",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#deac37",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#191d21",
      up: "#ff3394",
      down: "#a3ff61",
      label: "#9EA694",
      flags: "#191919",
      crosshair: "#191919",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffffff",
      slottext: "#f4ffe4"
    }
  },
  "chart-black-dae": {
    stroke: {
      fenshi: "#ffffff",
      up: "#73c921",
      down: "#ca2c78",
      bid: "#4dd710",
      ask: "#d00017",
      grid: "#323c45",
      border: "#323c45",
      arrow: "#fff",
      order: "#ffc200",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#fff",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#191919",
      up: "#73c921",
      down: "#ca2c78",
      label: "#9EA694",
      flags: "#262d33",
      crosshair: "#262d33",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffc200",
      slottext: "#f4ffe4"
    }
  },
  "chart-black-mobile-dae": {
    stroke: {
      fenshi: "#ffffff",
      up: "#73c921",
      down: "#ca2c78",
      bid: "#4dd710",
      ask: "#d00017",
      grid: "#323c45",
      border: "#323c45",
      arrow: "#fff",
      order: "#ffc200",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#fff",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#191d21",
      up: "#73c921",
      down: "#ca2c78",
      label: "#9EA694",
      flags: "#262d33",
      crosshair: "#262d33",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffc200",
      slottext: "#f4ffe4"
    }
  },
  "depth-black-dae": {
    stroke: {
      up: "#d00017",
      down: "#4dd710",
      bid: "#a3ff61",
      ask: "#ff3394",
      grid: "#323c45",
      border: "#333",
      order: "#ffffff",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#deac37",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#262d33",
      up: "#ff3394",
      down: "#a3ff61",
      label: "#9EA694",
      flags: "#191919",
      crosshair: "#191919",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffffff",
      slottext: "#f4ffe4"
    }
  },
  "depth-black-mobile-dae": {
    stroke: {
      up: "#d00017",
      down: "#4dd710",
      bid: "#a3ff61",
      ask: "#ff3394",
      grid: "#323c45",
      border: "#333",
      order: "#ffffff",
      majorlevel: "#666",
      minorlevel: "#666",
      crosshair: "#deac37",
      i: ["#0066cc", "#ffc200", "#6600cc", "#cc0066", "#00cccc", "#CC401D", "#fff385", "#9665cc", "#cc5c79", "#cc9056", "#86ccb6"]
    },
    fill: {
      bg: "#191d21",
      up: "#ff3394",
      down: "#a3ff61",
      label: "#9EA694",
      flags: "#191919",
      crosshair: "#191919",
      blankBG: "#0A0A09",
      flagtext: "#f4ffe4",
      ordertext: "#ffffff",
      slottext: "#f4ffe4"
    }
  }
}, Validator = function () {
  var e = null, t = null, n = {BOOL: 1, INT: 2, FLOAT: 3, STRING: 4}, r = RTBTC.debug, o = function (e) {
    switch (e) {
      case n.BOOL:
        return "boolean";
      case n.INT:
        return "integer";
      case n.FLOAT:
        return "float";
      case n.STRING:
        return "string";
      default:
        return "unknown"
    }
  }, i = function (i) {
    switch (t) {
      case n.BOOL:
        if ("boolean" == typeof i) return e = i, !0;
        break;
      case n.INT:
        if ("number" == typeof i) return e = parseInt(i), !0;
        break;
      case n.FLOAT:
        if ("number" == typeof i) return e = parseFloat(i), !0;
        break;
      case n.STRING:
        if ("string" == typeof i) return e = "" + i, !0
    }
    return DEBUG && r("Unable to validate " + i + ' as type "' + o(t) + '". Detected type: ' + typeof i, RTBTC.ERROR), !1
  };
  return {
    create: function (r) {
      if (r === n.BOOL && (t = r), r === n.INT && (t = r), r === n.FLOAT && (t = r), r === n.STRING && (t = r), null == t) throw"Invalid type.";
      return {
        get: function () {
          return e
        }, set: function (e) {
          return i(e), this
        }, toString: function () {
          return "" + e
        }
      }
    }, BOOL: n.BOOL, INT: n.INT, FLOAT: n.FLOAT, STRING: n.STRING
  }
}, V = new Validator, Settings = {
  base: "BTC",
  quote: "USD",
  exchange: "mtgox",
  display: {precision: {price: 5, volume: 4}, zeros: !0, grid: 5},
  sounds: {},
  localTime: !0,
  theme: "c",
  version: "0.0.0",
  layouts: [{
    name: "Market Overview",
    modules: [{
      m: {t: "order-book", w: 478, h: 478, x: 510, y: 100, l: !0},
      c: {g: !0, i: .01, s: !0, d: 50}
    }, {m: {t: "time-sales", w: 488, h: 178, x: 10, y: 400, l: !0}, c: {f: !0, s: !0}}, {
      m: {
        t: "ticker",
        w: 478,
        h: 78,
        x: 510,
        y: 10,
        l: !0
      }, c: {a: !0, h: !0, l: !0, v: !0}
    }, {m: {t: "orders", w: 488, h: 108, x: 10, y: 280, l: !0}, c: {}}, {
      m: {
        t: "order-entry",
        w: 238,
        h: 258,
        x: 10,
        y: 10,
        l: !0
      }, c: {b: !0, c: !0, l: !1}
    }, {m: {t: "order-entry", w: 238, h: 258, x: 260, y: 10, l: !0}, c: {b: !1, c: !0, l: !1}}]
  }]
}, Settings_Helper = function () {
  var e = (new Validator).create(V.BOOL), t = (new Validator).create(V.INT),
    n = ((new Validator).create(V.FLOAT), (new Validator).create(V.STRING)), r = {}, o = {
      dpp: Settings.display.precision.price,
      dpv: Settings.display.precision.volume,
      dz: Settings.display.zeros,
      dg: Settings.display.grid,
      b: Settings.base,
      q: Settings.quote,
      ex: Settings.exchange,
      lt: Settings.localTime,
      thm: Settings.theme,
      snd: Settings.sounds,
      version: Settings.version
    }, i = (RTBTC.debug, function (e, t, n) {
      return void 0 === r[e] ? t : n.set(t).set(r[e]).get()
    }), a = function (a) {
      r = a, Settings.display.precision.price = i("dpp", o.dpp, t), Settings.display.precision.volume = i("dpv", o.dpv, t), Settings.display.zeros = i("dz", o.dz, e), Settings.display.grid = i("dg", o.dg, t), Settings.display.grid = 5, Settings.localTime = i("lt", o.lt, e), Settings.theme = i("thm", o.thm, n), Settings.version = i("version", o.version, n);
      var s = i("b", o.b, n);
      Currency.valid(s) && (Settings.base = s);
      var l = i("q", o.q, n);
      Currency.valid(l) && (Settings.quote = l);
      var c = i("ex", o.ex, n);
      if (Exchanges.valid(c) && (Settings.exchange = c), Settings.sounds = a.hasOwnProperty("snd") ? a.snd : {}, void 0 !== a.layouts && a.layouts.length > 0) {
        Settings.layouts = [];
        for (var u, f, d = 0; d < a.layouts.length; d++) {
          if (u = {}, void 0 !== a.layouts[d].name && a.layouts[d].name.length > 0 && (u.name = "" + a.layouts[d].name), void 0 !== a.layouts[d].modules) {
            u.modules = [];
            for (var p = 0; p < a.layouts[d].modules.length; p++) f = {
              m: {},
              c: {}
            }, void 0 !== a.layouts[d].modules[p].m && (f.m = a.layouts[d].modules[p].m), void 0 !== a.layouts[d].modules[p].c && (f.c = a.layouts[d].modules[p].c), u.modules.push(deepCopy(f))
          }
          Settings.layouts.push(deepCopy(u))
        }
      }
    };
  return {
    process: function (e) {
      return a(e), this
    }, save: function () {
      var e = {};
      for (var t in o) o.hasOwnProperty(t) && (e[t] = o[t]);
      return e.layouts = Settings.layouts, JSON.stringify(e)
    }, saveToStructure: function (e, t) {
      o[e] = t
    }
  }
}(), i18n = {
  Account: {
    ru: "счет",
    de: "Konto",
    cn: "帐户",
    pl: "konto",
    vi: "T�i kho?n",
    da: "konto",
    es: "",
    sv: "",
    fi: "",
    bg: "",
    it: ""
  },
  Close: {
    ru: "?????????",
    de: "schlie�en",
    cn: "??",
    pl: "zamkn??",
    vi: "?�ng",
    da: "Luk",
    es: "",
    sv: "",
    fi: "",
    bg: "",
    it: ""
  },
  Settings: {
    ru: "?????????",
    de: "Einstellungen",
    cn: "??",
    pl: "Ustawienia",
    vi: "C�i ??t",
    da: "Indstillinger",
    es: "",
    sv: "",
    fi: "",
    bg: "",
    it: ""
  },
  Layout: {
    ru: "????????????",
    de: "Layout",
    cn: "??",
    pl: "uk?ad",
    vi: "Giao di?n",
    da: "Layout",
    es: "",
    sv: "",
    fi: "",
    bg: "",
    it: ""
  },
  Locking: {
    ru: "??????????",
    de: "Sperren",
    cn: "??",
    pl: "Blokowanie",
    vi: "kh�a",
    da: "L�sning",
    es: "",
    sv: "",
    fi: "",
    bg: "",
    it: ""
  },
  "Place Order": {
    ru: "?????????? ?????",
    de: "Bestellung aufgeben",
    cn: "???",
    pl: "Z?�? zam�wienie",
    vi: "??t th? t?",
    da: "Afgiv ordre",
    es: "",
    sv: "",
    fi: "",
    bg: "",
    it: ""
  },
  Sending: {
    ru: "??????????",
    de: "Senden",
    cn: "??",
    pl: "wysy?anie",
    vi: "g?i",
    da: "Sende",
    es: "",
    sv: "",
    fi: "",
    bg: "",
    it: ""
  },
  Bid: {
    ru: "???",
    de: "Geld",
    cn: "??",
    pl: "oferta",
    vi: "Gi� th?u",
    da: "Bud",
    es: "",
    sv: "",
    fi: "",
    bg: "",
    it: ""
  },
  Ask: {
    ru: "???",
    de: "Brief",
    "en-gb": "Offer",
    cn: "?",
    pl: "zapyta?",
    vi: "xin",
    da: "Sp�rg",
    es: "",
    sv: "",
    fi: "",
    bg: "",
    it: ""
  },
  Sum: {ru: "?????", de: "Summe", cn: "??", pl: "suma", vi: "Sum", da: "Sum", es: "", sv: "", fi: "", bg: "", it: ""},
  Size: {
    ru: "??????",
    de: "Gr��e",
    cn: "??",
    pl: "rozmiar",
    vi: "K�ch th??c",
    da: "St�rrelse",
    es: "",
    sv: "",
    fi: "",
    bg: "",
    it: ""
  }
}, Data_Class = function () {
  function e() {
    function e() {
      DEBUG && d("Data Setup. " + (f.hasStorage ? "Has" : "Does not have") + " localStorage"), f.hasStorage && (f.storage = window.localStorage), c()
    }

    function t(e) {
      switch (e) {
        case 0:
        case 60:
          return "1m";
        case 180:
          return "3m";
        case 300:
          return "5m";
        case 900:
          return "15m";
        case 1800:
          return "30m";
        case 3600:
          return "1h";
        case 7200:
          return "2h";
        case 14400:
          return "4h";
        case 21600:
          return "6h";
        case 43200:
          return "12h";
        case 86400:
          return "1d";
        case 259200:
          return "3d";
        case 604800:
          return "1w"
      }
    }

    function n(e, n) {
      if (f.lock[e]) DEBUG && d("data: _load: LOCK on period " + e); else {
        f.lock[e] = !0;
        var i = RTBTC.base(), a = p + "/klines?symbol=" + RTBTC.base() + "&interval=" + t(e);
        if (null != f.links[e].prev) a += "&endTime=" + f.links[e].prev; else if (!n) return void(f.lock[e] = !1);
        RTBTC.json(a, function (e) {
          return function (t) {
            i == RTBTC.base() && r(t, e, null)
          }
        }(e), function (e) {
          return function (t) {
            o(e)
          }
        }(e))
      }
    }

    function r(e, t, n) {
      f.lock[t] = !1, e.length >= 0 && f._onLoaded && f._onLoaded(), e[e.length - 1];
      var r;
      if (e.length > 0 && (f.links[t].prev = e[0][0] - 1e3 * t), RTBTC.trigger("console", "Loaded " + e.length + " chart bars."), 0 != e.length) {
        for (f.cache.bars[t] = [], r = e.length - 1; r >= 0; r--) f.cache.bars[t].push([e[r][0], Number(e[r][1]), Number(e[r][2]), Number(e[r][3]), Number(e[r][4]), Number(e[r][5]), Number(e[r][7])]);
        RTBTC.trigger("barclose", t)
      }
    }

    function o(e) {
      f.lock[e] = !1, DEBUG && d("Data: load failure for period " + e + "!")
    }

    function i(e, t) {
      return (e = +e) - e % t
    }

    function a(e) {
      var t, n = [e.time, e.price, e.amount];
      f.cache.ticks.splice(0, 0, n);
      var r, o, a = f.cache.ticks.length, s = f.config.tradeBuffer;
      a > s && f.cache.ticks.splice(s - 1, s - a);
      for (o in f.cache.bars) f.cache.bars.hasOwnProperty(o) && (r = +o, t = i(e.time, r), 0 == f.cache.bars[o].length || t >= f.cache.bars[o][0][0] + r ? (f.cache.bars[o].splice(0, 0, [t, n[1], n[1], n[1], n[1], n[2]]), RTBTC.trigger("barclose", o)) : t == f.cache.bars[o][0][0] && (n[1] > f.cache.bars[o][0][2] && (f.cache.bars[o][0][2] = n[1]), n[1] < f.cache.bars[o][0][3] && (f.cache.bars[o][0][3] = n[1]), f.cache.bars[o][0][4] = n[1], f.cache.bars[o][0][5] += n[2]));
      ++f.config.tradeCount % f.config.tradeSave == 0 ? u() : -1 == f.config.saveID && (f.config.saveID = window.setTimeout(u, f.config.saveTimeout))
    }

    function s(e) {
      f.cache.ticker = e
    }

    function l(e, t) {
      if (void 0 != f.cache.bars[t]) if (f.cache.bars[t].length > 0) {
        if (e[0] < f.cache.bars[t][0][0]) return;
        if (e[0] == f.cache.bars[t][0][0] && e[5] <= f.cache.bars[t][0][5]) return;
        e[0] == f.cache.bars[t][0][0] ? f.cache.bars[t][0] = e : f.cache.bars[t].splice(0, 0, e), RTBTC.trigger("barclose", t)
      } else f.cache.bars[t].splice(0, 0, e), RTBTC.trigger("barclose", t)
    }

    function c() {
      var e, t, r = RTBTC.base(), o = RTBTC.quote();
      for (f.cache.ticks = [], f.cache.ticker = {}, t = 0; t < f.offline.length; t++) e = f.offline[t], f.cache.bars[e] = [];
      for (t = 0; t < f.online.length; t++) e = f.online[t], f.links[e] = {
        prev: null,
        next: null,
        last: null
      }, f.lock[e] = !1;
      if (n(f.currentPeriod, !0), f.hasStorage) {
        var i = r + o + "_ticks";
        if (void 0 !== f.storage[i]) {
          var a = JSON.parse(f.storage[i]);
          a.hasOwnProperty("stamp") && a.stamp + f.config.ticksMaxAge > millitime() && (f.cache.ticks = a.ticks)
        }
      }
    }

    function u() {
      if (f.hasStorage) {
        millitime();
        var e = RTBTC.exchange() + "_" + RTBTC.base() + RTBTC.quote() + "_ticks",
          t = f.cache.ticks.slice(0, f.config.tradeBuffer), n = {};
        if (0 != t.length) {
          n.stamp = millitime(), n.ticks = t;
          try {
            f.storage[e] = JSON.stringify(n)
          } catch (e) {
            DEBUG && d("LocalStorage quota exceeded.")
          }
          window.clearTimeout(f.config.saveID), f.config.saveID = -1
        }
      }
    }

    var f = {
        cache: {bars: {}, ticks: [], ticker: {}},
        links: {},
        currentPeriod: 60,
        online: [2592e3, 604800, 259200, 86400, 43200, 21600, 14400, 7200, 3600, 1800, 900, 300, 180, 60],
        offline: [2592e3, 604800, 259200, 86400, 43200, 21600, 14400, 7200, 3600, 1800, 900, 300, 180, 60],
        lock: {},
        storage: null,
        hasStorage: storageSupport(),
        config: {saveTimeout: 3e4, saveID: -1, tradeCount: 0, tradeSave: 100, tradeBuffer: 1500, ticksMaxAge: 300},
        self: null,
        debug: RTBTC.isDebug()
      }, d = RTBTC.debug,
      p = location.host.match("localhost") || location.host.match("192.168.0") ? "/exchange/public" : "/api/v1";
    return {
      setup: function (t) {
        return "undifined" != t && f.online.indexOf(t) >= 0 && (f.currentPeriod = t), e(), this
      }, self: function (t) {
        return f.self = t, RTBTC.handler("trade", "data", f.self.onTrade), RTBTC.handler("ticker", "data", f.self.onTicker), RTBTC.handler("instrument", "data", e), this
      }, onTrade: function (e) {
        a(e)
      }, onTicker: function (e) {
        s(e)
      }, onBar: function (e, t) {
        l(e, t)
      }, onLoaded: function (e) {
        f._onLoaded = e
      }, data: f.cache, loadPrev: function (e) {
        var t = e;
        if (-1 == f.online.indexOf(e)) for (var r = 0; r < f.online.length; r++) if (f.online[r] <= e) {
          t = f.online[r];
          break
        }
        n(t, !1)
      }, internals: f.debug ? function () {
        return f
      } : function () {
        return {}
      }, debug: f.debug ? d : function (e, t) {
      }
    }
  }

  var t = null;
  return new function () {
    this.Build = function () {
      return null == t && ((t = new e).constructor = null), t
    }
  }
}(), Data = Data_Class.Build(), digit = 6, Indicator = function () {
  function e(e) {
    if (void 0 !== e && e.hasOwnProperty("length")) {
      var t;
      for (t = 0; t < Ae.ps.length; t++) e.length <= t || e[t] < Ae.ps[t].bounds[0] || e[t] > Ae.ps[t].bounds[1] || (Ae.p[t] = e[t])
    }
  }

  function t(e) {
    var t = _("DMI");
    return t += "(" + ~~Ae.p[0] + ")", e >= 0 && Ae.output.length > 0 && e < Ae.output[0].length && (t += ": ", t += Ae.output[2][e].toFixed(1), t += ", +DI: ", t += Ae.output[1][e].toFixed(1), t += ", -DI: ", t += Ae.output[0][e].toFixed(1)), t
  }

  function n() {
    return [{type: Ae.LINE, data: Ae.output[0]}, {type: Ae.LINE, data: Ae.output[1]}, {
      type: Ae.LINE,
      data: Ae.output[2]
    }]
  }

  function r(e, t, n) {
    var r, o, i, a, s, l, c = 0, u = 0, f = 0, d = 0, p = 0, h = 0;
    for (Ae.output = [[0], [0], [0]], Ae.min = 1 / 0, Ae.max = -1 / 0, r = Math.min(e.length - 2, n + 150 - 1); r >= t; r--) u = Math.max(e[r][2] - e[r][3], Math.abs(e[r][2] - e[r + 1][4]), Math.abs(e[r][3] - e[r + 1][4])), o = e[r][2] - e[r + 1][2] > e[r + 1][3] - e[r][3] ? Math.max(e[r][2] - e[r + 1][2], 0) : 0, i = e[r + 1][3] - e[r][3] > e[r][2] - e[r + 1][2] ? Math.max(e[r + 1][3] - e[r][3], 0) : 0, c < Ae.p[0] ? (f += u, d += o, p += i) : (f = f - f / Ae.p[0] + u, d = d - d / Ae.p[0] + o, p = p - p / Ae.p[0] + i), a = 100 * d / f, s = 100 * p / f, l = 100 * Math.abs(a - s) / (a + s + 1e-6), c < Ae.p[0] ? h = 0 : c < 2 * Ae.p[0] ? h += l / Ae.p[0] : h = (h * (Ae.p[0] - 1) + l) / Ae.p[0], Ae.output[0].splice(0, 0, s), Ae.output[1].splice(0, 0, a), Ae.output[2].splice(0, 0, h), r < n && (s < Ae.min && (Ae.min = s), a < Ae.min && (Ae.min = a), h < Ae.min && (Ae.min = h), s > Ae.max && (Ae.max = s), a > Ae.max && (Ae.max = a), h > Ae.max && (Ae.max = h)), c++
  }

  function o() {
    return {major: [50], minor: [30, 70]}
  }

  function i() {
    return [{type: Ae.LINE, data: Ae.output[0]}, {type: Ae.LINE, data: Ae.output[1]}, {
      type: Ae.LINE,
      data: Ae.output[2]
    }]
  }

  function a(e, t, n) {
    var r, o, i = Ae.p[0], a = Ae.p[1], s = 0, l = 0, c = 0, u = .05, f = [], d = 0, p = [];
    for (Ae.output = [[], [], []], r = Math.min(e.length - 1, n + i); r >= t; r--) o = e[r][4], f.splice(0, 0, o), p.splice(0, 0, o * o), l += o, c += p[0], f.length > i && (l -= f.pop(), c -= p.pop()), s = l / f.length, f.length > 1 ? (d = f.length, u = Math.sqrt((d * c - l * l) / (d * (d - 1)))) : u = 0, Ae.output[0].splice(0, 0, s), Ae.output[1].splice(0, 0, s + a * u), Ae.output[2].splice(0, 0, s - a * u)
  }

  function s(e) {
    var t = _("Bands");
    return t += "(" + ~~Ae.p[0] + ", " + Ae.p[1].toFixed(1) + ")", e >= 0 && Ae.output.length > 0 && e < Ae.output[0].length && (t += ": ", t += Ae.output[2][e].toFixed(digit) + ", ", t += Ae.output[0][e].toFixed(digit) + ", ", t += Ae.output[1][e].toFixed(digit)), t
  }

  function l() {
    return [{type: Ae.LINE, data: Ae.output[0]}]
  }

  function c() {
    return {major: [-200, -100, 100, 200], minor: [0]}
  }

  function u(e, t, n) {
    var r, o, i, a, s, l = Ae.p[0], c = [], u = Math.min(e.length - 1, n + Ae.p[0]);
    for (Ae.output = [[]], r = u; r >= t; r--) {
      a = (e[r][2] + e[r][3] + e[r][4]) / 3;
      var f = 0;
      for (o = r; o <= Math.min(r + l - 1, u); o++) f += e[o][4];
      var d = f / (Math.min(r + l - 1, u) - r + 1);
      c.splice(0, 0, d), c.length > l && c.pop();
      var p = 0;
      for (i = 0; i <= c.length - 1; i++) p += Math.abs(c[i] - e[r + i][4]);
      var h = p / c.length;
      s = 0 == h ? 0 : (a - d) / h / .015, Ae.output[0].splice(0, 0, s)
    }
  }

  function f(e) {
    var t = "CCI";
    return t += "(" + ~~Ae.p[0] + ")", e >= 0 && Ae.output.length > 0 && e < Ae.output[0].length && (t += " " + Ae.output[0][e].toFixed(digit)), t
  }

  function d() {
    return [{type: Ae.LINE, data: Ae.output[0]}, {type: Ae.LINE, data: Ae.output[1]}, {
      type: Ae.LINE,
      data: Ae.output[2]
    }]
  }

  function p(e, t, n) {
    var r, o, i, a = Ae.p[0], s = Math.min(e.length - 1, n + a), l = [], c = e[s][2], u = e[s][3];
    for (Ae.output = [[], [], []], r = s; r >= t; r--) {
      if (i = e[r][4], l.splice(0, 0, i), i > c && (c = i), i < u && (u = i), l.length > a) for (l.pop(), u = 1e15, c = -1e15, o = 0; o < l.length; o++) l[o] > c && (c = l[o]), l[o] < u && (u = l[o]);
      Ae.output[0].splice(0, 0, (c + u) / 2), Ae.output[1].splice(0, 0, c), Ae.output[2].splice(0, 0, u)
    }
  }

  function h(e) {
    var t = _("Channel");
    return t += "(" + ~~Ae.p[0] + ")", e >= 0 && Ae.output.length > 0 && e < Ae.output[0].length && (t += ": ", t += Ae.output[2][e].toFixed(digit) + ", ", t += Ae.output[0][e].toFixed(digit) + ", ", t += Ae.output[1][e].toFixed(digit)), t
  }

  function g() {
    return [{type: Ae.LINE, data: Ae.output}]
  }

  function m(e, t, n) {
    var r, o, i = 2 / (Ae.p[0] + 1), a = Math.ceil(Math.log(.01) / Math.log(1 - i));
    for (Ae.output = [e[Math.min(e.length - 1, n + a + 1)][4]], r = Math.min(e.length - 2, n + a); r >= t; r--) o = i * e[r][4] + (1 - i) * Ae.output[0], Ae.output.splice(0, 0, o)
  }

  function v(e) {
    var t = "";
    return e >= 0 && e < Ae.output.length && (t = _("EMA"), t += "(" + ~~Ae.p[0] + "): ", t += Ae.output[e].toFixed(digit)), t
  }

  function b() {
    return [{type: Ae.LINE, data: Ae.output}]
  }

  function y(e, t, n) {
    var r, o = Ae.p[0], i = 0, a = 0;
    for (Ae.output = [], r = Math.min(e.length - 1, n + o); r >= t; r--) {
      if (i == o - 1) {
        a = 0;
        for (var s = 0; s <= o - 1; s++) a += e[r + s][4];
        Ae.output.splice(0, 0, a / o)
      } else i > o - 1 ? (a = Ae.output[0] * o, a -= e[r + o][4], a += e[r][4], Ae.output.splice(0, 0, a / o)) : Ae.output.splice(0, 0, void 0);
      i++
    }
  }

  function x(e) {
    var t = "";
    return e >= 0 && e < Ae.output.length && (t = _("MA"), t += "(" + ~~Ae.p[0] + "): ", t += (Ae.output[e] || 0).toFixed(digit)), t
  }

  function w() {
    return [{type: Ae.LINE, data: Ae.output}]
  }

  function $() {
    return {major: [-500, 500], minor: [0]}
  }

  function k(e, t, n) {
    var r, o, i = 2 / (Ae.p[1] + 1), a = Math.ceil(Math.log(.01) / Math.log(1 - i));
    if (Ae.min = 1 / 0, Ae.max = -1 / 0, Ae.output = [], r = Math.min(e.length - 1, n + a + 1), !(--r < 0)) {
      for (o = 0 == e[r][5] ? 0 : Ae.p[0] * (e[r][2] - e[r][3]) / e[r][5] * (e[r][2] + e[r][3] - e[r + 1][2] - e[r + 1][3]) * .5, Ae.output.splice(0, 0, o), --r; r >= t; r--) (o = i * (0 == e[r][5] ? 0 : Ae.p[0] * (e[r][2] - e[r][3]) / e[r][5] * (e[r][2] + e[r][3] - e[r + 1][2] - e[r + 1][3]) * .5) + (1 - i) * o) > Ae.max && (Ae.max = o), o < Ae.min && (Ae.min = o), Ae.output.splice(0, 0, o);
      Ae.max = Ae.max + .05 * (Ae.max - Ae.min)
    }
  }

  function T(e) {
    var t = _("EMV");
    return e >= 0 && e < Ae.output.length && (t += "(" + ~~Ae.p[0] + ", " + ~~Ae.p[1] + "): ", t += Ae.output[e].toFixed(digit)), t
  }

  function S() {
    return [{type: Ae.LINE, data: Ae.output}]
  }

  function C(e, t, n) {
    var r, o, i, a, s = 2 / (Ae.p[0] + 1), l = Math.ceil(Math.log(.01) / Math.log(1 - s));
    for (a = i = o = e[Math.min(e.length - 1, n + l + 1)][4], r = Math.min(e.length - 2, n + l); r >= t; r--) a = s * (i = s * (o = s * e[r][4] + (1 - s) * o) + (1 - s) * i) + (1 - s) * a, Ae.output.splice(0, 0, a)
  }

  function E(e) {
    var t = _("TRIX");
    return e >= 0 && e < Ae.output.length && (t += "(" + ~~Ae.p[0] + "): ", t += Ae.output[e].toFixed(digit)), t
  }

  function A() {
    return [{type: Ae.HIST, data: Ae.output[0]}, {type: Ae.LINE, data: Ae.output[1]}, {
      type: Ae.LINE,
      data: Ae.output[2]
    }]
  }

  function N() {
    return {minor: [0]}
  }

  function P(e, t, n) {
    var r, o, i, a = 0, s = 0, l = 0, c = 2 / (1 + Ae.p[0]), u = 2 / (1 + Ae.p[1]), f = 2 / (1 + Ae.p[2]),
      d = Math.ceil(Math.log(.01) / Math.log(1 - Math.min(c, u))), p = e[Math.min(e.length - 1, n + d + 1)][4];
    for (Ae.output = [[0], [0], [0]], a = p, s = p, l = 0, Ae.min = 0, Ae.max = 0, r = Math.min(e.length - 2, n + d); r >= t; r--) i = (o = (a = c * (p = e[r][4]) + (1 - c) * a) - (s = u * p + (1 - u) * s)) - (l = f * o + (1 - f) * l), Ae.output[0].splice(0, 0, i), Ae.output[1].splice(0, 0, l), Ae.output[2].splice(0, 0, o), r < n && (o > Ae.max && (Ae.max = o), o < Ae.min && (Ae.min = o), i > Ae.max && (Ae.max = i), i < Ae.min && (Ae.min = i));
    Ae.max = Ae.max + .05 * (Ae.max - Ae.min), 0 == Ae.max && 0 == Ae.min && (Ae.max = 10, Ae.min = -10)
  }

  function O(e) {
    var t = _("MACD");
    return t += "(" + ~~Ae.p[0] + ", " + ~~Ae.p[1] + ", " + ~~Ae.p[2] + ")", e >= 0 && Ae.output.length > 0 && e < Ae.output[0].length && (t += ": ", t += Ae.output[0][e].toFixed(digit) + ", ", t += Ae.output[1][e].toFixed(digit) + ", ", t += Ae.output[2][e].toFixed(digit)), t
  }

  function D() {
    return {major: [20, 80]}
  }

  function I() {
    return [{type: Ae.LINE, data: Ae.output}]
  }

  function M() {
    return {minor: [0]}
  }

  function L(e, t, n) {
    var r;
    if (!(e.length <= 1)) for (Ae.output = [e[Math.min(e.length - 2, n - 1)][5] / BTC_INT], Ae.min = Ae.output[0], Ae.max = Ae.min, r = Math.min(e.length - 2, n - 1); r >= t; r--) e[r][4] > e[r + 1][4] ? Ae.output.splice(0, 0, Ae.output[0] + e[r][5] / BTC_INT) : Ae.output.splice(0, 0, Ae.output[0] - e[r][5] / BTC_INT), Ae.output[0] < Ae.min && (Ae.min = Ae.output[0]), Ae.output[0] > Ae.max && (Ae.max = Ae.output[0])
  }

  function F(e) {
    var t = _("On Balance Volume");
    return e >= 0 && e < Ae.output.length && (t += ": ", t += Ae.output[e].toFixed(1)), t
  }

  function B() {
    return [{type: Ae.PSAR, data: Ae.output}]
  }

  function R(e, t, n) {
    var r, o, i, a = !0, s = Ae.p[0], l = (Ae.p[1], Math.min(e.length - 1, n + 100)), c = e[l][2], u = e[l][3], f = c,
      d = u;
    for (Ae.output = [d], i = l - 1; i >= t; i--) r = e[i][2], o = e[i][3], d = Ae.output[0] + s * (f - Ae.output[0]), a ? (r > f && (f = r, (s += Ae.p[0]) > Ae.p[1] && (s = Ae.p[1])), d > o && (a = !1, d = f, s = Ae.p[0], f = o)) : (o < f && (f = o, (s += Ae.p[0]) > Ae.p[1] && (s = Ae.p[1])), d < r && (a = !0, d = f, s = Ae.p[0], f = r)), c = r, u = o, Ae.output.splice(0, 0, d)
  }

  function j(e) {
    var t = "PSAR";
    return t += "(" + Ae.p[0].toFixed(3) + ", " + Ae.p[1].toFixed(digit) + ")", e >= 0 && e < Ae.output.length && (t += ": ", t += Ae.output[e].toFixed(digit)), t
  }

  function q() {
    return [{type: Ae.LINE, data: Ae.output}]
  }

  function U() {
    return {major: [30, 70], minor: [50]}
  }

  function H(e, t, n) {
    var r, o, i = 0, a = [], s = [], l = 0, c = 0, u = 0, f = !1, d = 0;
    for (Ae.output = [50], r = Math.min(e.length - 2, n + 250); r >= t; r--) {
      if (f = e[r][4] > e[r + 1][4], d = e[r][4] - e[r + 1][4], f ? a.push(d) : s.push(-d), i < Ae.p[0]) Ae.output.splice(0, 0, 50); else if (i == Ae.p[0]) {
        for (o = 0; o < a.length; o++) l += a[o];
        for (0 == a.length ? l = 0 : l /= a.length, o = 0; o < s.length; o++) c += s[o];
        0 == s.length ? c = 0 : c /= s.length, u = l / (c + 1e-8), Ae.output.splice(0, 0, 100 - 100 / (1 + u))
      } else u = (l = (l * (Ae.p[0] - 1) + (f ? d : 0)) / Ae.p[0]) / ((c = (c * (Ae.p[0] - 1) + (f ? 0 : -d)) / Ae.p[0]) + 1e-8), Ae.output.splice(0, 0, 100 - 100 / (1 + u));
      i++
    }
  }

  function V(e) {
    var t = _("RSI");
    return e >= 0 && e < Ae.output.length && (t += "(" + ~~Ae.p[0] + "): ", t += Ae.output[e].toFixed(1)), t
  }

  function z() {
    return [{type: Ae.LINE, data: Ae.output[0]}, {type: Ae.LINE, data: Ae.output[1]}]
  }

  function W() {
    return {major: [20, 80], minor: [50]}
  }

  function G(e, t, n) {
    var r, o, i = [], a = 1e15, s = -1e15, l = 0, c = 0, u = 2 / (Ae.p[2] + 1), f = 2 / (Ae.p[3] + 1);
    Ae.output = [[], []];
    var d, p, h = 0, g = [], m = [], v = 0, b = 0, y = 0, x = !1, w = 0;
    for (d = Math.min(e.length - 2, n + 250); d >= t; d--) {
      if (x = e[d][4] > e[d + 1][4], w = e[d][4] - e[d + 1][4], x ? g.push(w) : m.push(-w), h < Ae.p[0]) y = 50; else if (h == Ae.p[0]) {
        for (p = 0; p < g.length; p++) v += g[p];
        for (0 == g.length ? v = 0 : v /= g.length, p = 0; p < m.length; p++) b += m[p];
        0 == m.length ? b = 0 : b /= m.length, y = 100 - 100 / (1 + v / (b + 1e-8))
      } else y = 100 - 100 / (1 + (v = (v * (Ae.p[0] - 1) + (x ? w : 0)) / Ae.p[0]) / ((b = (b * (Ae.p[0] - 1) + (x ? 0 : -w)) / Ae.p[0]) + 1e-8));
      if (h++, i.splice(0, 0, y), y > s && (s = y), y < a && (a = y), i.length > Ae.p[1] && ((o = i.pop()) >= s || o <= a)) for (a = 1e15, s = -1e15, r = 0; r < i.length; r++) i[r] > s && (s = i[r]), i[r] < a && (a = i[r]);
      c = f * (l = u * (s == a ? 100 : 100 * (y - a) / (s - a)) + (1 - u) * l) + (1 - f) * c, Ae.output[0].splice(0, 0, l), Ae.output[1].splice(0, 0, c)
    }
  }

  function Y(e) {
    var t = "STORSI";
    return t += "(" + ~~Ae.p[0] + ", " + ~~Ae.p[1] + ", " + ~~Ae.p[2] + ", " + ~~Ae.p[3] + ")", e >= 0 && Ae.output.length > 0 && e < Ae.output[0].length && (t += " K:" + Ae.output[0][e].toFixed(digit) + ", ", t += " D:" + Ae.output[1][e].toFixed(digit)), t
  }

  function X() {
    return [{type: Ae.LINE, data: Ae.output}]
  }

  function K(e, t, n) {
    var r, o, i = [], a = 0, s = Ae.p[0];
    for (Ae.output = [], r = Math.min(e.length - 1, n + s); r >= t; r--) o = e[r][4], i.length < s ? (i.push(o), a = (a * (i.length - 1) + o) / i.length) : (a -= i[0] / s, a += o / s, i.splice(0, 1), i.push(o)), Ae.output.splice(0, 0, a)
  }

  function Q(e) {
    var t = _("SMA");
    return e >= 0 && e < Ae.output.length && (t += "(" + ~~Ae.p[0] + "): ", t += Ae.output[e].toFixed(digit)), t
  }

  function J() {
    return [{type: Ae.LINE, data: Ae.output[0]}, {type: Ae.LINE, data: Ae.output[1]}]
  }

  function Z() {
    return {major: [20, 80], minor: [50]}
  }

  function ee(e, t, n) {
    var r, o, i, a, s = [], l = 1e15, c = -1e15, u = 0, f = 0, d = 2 / (Ae.p[1] + 1), p = 2 / (Ae.p[2] + 1);
    for (Ae.output = [[], []], r = Math.min(e.length - 1, n + Ae.p[0]); r >= t; r--) {
      if (i = e[r][4], s.splice(0, 0, i), i > c && (c = i), i < l && (l = i), s.length > Ae.p[0] && ((a = s.pop()) >= c || a <= l)) for (l = 1e15, c = -1e15, o = 0; o < s.length; o++) s[o] > c && (c = s[o]), s[o] < l && (l = s[o]);
      f = p * (u = d * (c == l ? 100 : 100 * (i - l) / (c - l)) + (1 - d) * u) + (1 - p) * f, Ae.output[0].splice(0, 0, u), Ae.output[1].splice(0, 0, f)
    }
  }

  function te(e) {
    var t = "STO";
    return e >= 0 && Ae.output.length > 0 && e < Ae.output[0].length && (t += " %K(" + ~~Ae.p[0] + ", " + ~~Ae.p[1] + "): ", t += Ae.output[0][e].toFixed(1), t += " %D(" + ~~Ae.p[2] + "): ", t += Ae.output[1][e].toFixed(1)), t
  }

  function ne() {
    return [{type: Ae.LINE, data: Ae.output[0]}, {type: Ae.LINE, data: Ae.output[1]}, {
      type: Ae.LINE,
      data: Ae.output[2]
    }]
  }

  function re() {
    return {major: [0, 100], minor: [50]}
  }

  function oe(e, t, n) {
    var r, o, i, a, s = [], l = 1e15, c = -1e15, u = 0, f = 0, d = 0, p = 1 / Ae.p[1], h = 1 / Ae.p[2];
    for (Ae.output = [[], [], []], r = Math.min(e.length - 1, n + Ae.p[0]); r >= t; r--) {
      if (i = e[r][4], s.splice(0, 0, i), i > c && (c = i), i < l && (l = i), s.length > Ae.p[0] && ((a = s.pop()) >= c || a <= l)) for (l = 1e15, c = -1e15, o = 0; o < s.length; o++) s[o] > c && (c = s[o]), s[o] < l && (l = s[o]);
      d = 3 * (u = p * (c == l ? 100 : 100 * (i - l) / (c - l)) + (1 - p) * u) - 2 * (f = h * u + (1 - h) * f), Ae.output[0].splice(0, 0, u), Ae.output[1].splice(0, 0, f), Ae.output[2].splice(0, 0, d)
    }
  }

  function ie(e) {
    var t = "KDJ";
    return t += "(" + ~~Ae.p[0] + ", " + ~~Ae.p[1] + ", " + ~~Ae.p[2] + ")", e >= 0 && Ae.output.length > 0 && e < Ae.output[0].length && (t += " K:" + Ae.output[0][e].toFixed(digit) + ", ", t += " D:" + Ae.output[1][e].toFixed(digit) + ", ", t += " J:" + Ae.output[2][e].toFixed(digit)), t
  }

  function ae(e, t, n) {
    var r, o;
    if (!(void 0 === e || e.length <= t)) {
      for (Ae.max = -1 / 0, r = 0; r <= n - t; r++) {
        (o = e[r + t][5] / BTC_INT) > Ae.max && (Ae.max = o);
        var i = !0;
        i = e[r + t][4] >= e[r + t][1] && !(e[r + t][1] == e[r + t][4] && e[r + t + 1] && e[r + t + 1][4] > e[r + t][4]), Ae.output.push([o, i])
      }
      0 == Ae.max ? Ae.max = 10 : Ae.max = Ae.max
    }
  }

  function se() {
    return [{type: Ae.LBLHIST, data: Ae.output}]
  }

  function le(e) {
    var t = "";
    return e >= 0 && e < Ae.output.length && (t = _(getLang().volume), t += " " + Ae.output[e][0].toFixed(4)), t
  }

  function ce() {
    return [{type: Ae.LINE, data: Ae.output}]
  }

  function ue(e, t, n) {
    var r, o = 0, i = 0, a = 0;
    for (Ae.output = [], r = Math.min(e.length - 1, n + Ae.p[0]); r >= t; r--) o += e[r][4] * (e[r][5] / BTC_INT), i += e[r][5] / BTC_INT, a >= Ae.p[0] && (o -= e[r + Ae.p[0]][4] * (e[r + Ae.p[0]][5] / BTC_INT), i -= e[r + Ae.p[0]][5] / BTC_INT), Ae.output.splice(0, 0, o / i), a++
  }

  function fe(e) {
    var t = "VWAP";
    return t += "(" + ~~Ae.p[0] + ")", e >= 0 && e < Ae.output.length && (t += ": ", t += Ae.output[e].toFixed(digit)), t
  }

  function de() {
    return {major: [20, 80], minor: [50]}
  }

  function pe() {
    return [{type: Ae.LINE, data: Ae.output}]
  }

  function he(e, t, n) {
    var r, o, i, a, s = [], l = 1e15, c = -1e15, u = 0;
    for (Ae.output = [], r = Math.min(e.length - 1, n + Ae.p[0]); r >= t; r--) {
      if (i = e[r][4], s.splice(0, 0, i), i > c && (c = i), i < l && (l = i), s.length > Ae.p[0] && ((a = s.pop()) >= c || a <= l)) for (l = 1e15, c = -1e15, o = 0; o < s.length; o++) s[o] > c && (c = s[o]), s[o] < l && (l = s[o]);
      u = c == l ? 100 : 100 * (i - l) / (c - l), Ae.output.splice(0, 0, u)
    }
  }

  function ge(e) {
    var t = "Wm %R";
    return t += "(" + ~~Ae.p[0] + ")", e >= 0 && e < Ae.output.length && (t += ": ", t += Ae.output[e].toFixed(1)), t
  }

  function me() {
    return {major: [-5, 5], minor: [0]}
  }

  function ve(e) {
    var t = _("MTM");
    return t += "(" + ~~Ae.p[0] + ")", e >= 0 && Ae.output.length > 0 && e < Ae.output.length && (t += ": ", t += Ae.output[e].toFixed(digit)), t
  }

  function be() {
    return [{type: Ae.LINE, data: Ae.output}]
  }

  function ye(e, t, n) {
    var r;
    for (Ae.min = 1 / 0, Ae.max = -1 / 0, Ae.output = [], r = Math.min(e.length - 1 - Ae.p[0], n); r >= t; r--) {
      var o = e[r][4] - e[r + Ae.p[0]][4];
      o > Ae.max && (Ae.max = o), o < Ae.min && (Ae.min = o), Ae.output.splice(0, 0, o)
    }
    Ae.max = Ae.max + .05 * (Ae.max - Ae.min)
  }

  function xe() {
    return [{type: Ae.LINE, data: Ae.output}]
  }

  function we(e, t, n) {
    var r = 0, o = 0;
    Ae.output = [];
    for (var i = Math.min(e.length - 1, n); i >= t; i--) r += e[i][6], 0 == (o += e[i][5]) ? Ae.output.splice(0, 0, e[i][4]) : Ae.output.splice(0, 0, r / o)
  }

  function $e(e) {
    var t = "";
    return e >= 0 && e < Ae.output.length && (t = _("AVL"), t += Ae.output[e].toFixed(digit)), t
  }

  function ke() {
    return [{type: Ae.LINE, data: Ae.output}]
  }

  function Te(e, t, n) {
    var r = 0, o = 0;
    Ae.output = [];
    for (var i = Math.min(e.length - 1, n); i >= t; i--) r += (e[i][1] + e[i][2] + e[i][3] + e[i][4]) / 4 * e[i][5], 0 == (o += e[i][5]) ? Ae.output.splice(0, 0, e[i][4]) : Ae.output.splice(0, 0, r / o)
  }

  function Se(e) {
    var t = "";
    return e >= 0 && e < Ae.output.length && (t = _("AVL"), t += Ae.output[e].toFixed(digit)), t
  }

  function Ce(e) {
    switch (DEBUG && Ne("Indicator: building " + e), e) {
      case"dmi":
        Ae.shortName = "DMI", Ae.p = [14], Ae.ps = [{
          label: _("Period"),
          type: Ae.V.INT,
          bounds: [2, 1 / 0]
        }], Ae.label = t, Ae.draw = n, Ae.update = r;
        break;
      case"arn":
        Ae.shortName = "Aroon", Ae.min = 0, Ae.max = 100, Ae.p = [25], Ae.ps = [{
          label: _("Period"),
          type: Ae.V.INT,
          bounds: [2, 1 / 0]
        }], Ae.statics = o;
        break;
      case"atr":
        Ae.shortName = "ATR", Ae.p = [14], Ae.ps = [{label: _("Period"), type: Ae.V.INT, bounds: [2, 1 / 0]}];
        break;
      case"bnd":
        Ae.shortName = "Bands", Ae.p = [21, 2], Ae.ps = [{
          label: _("Period"),
          type: Ae.V.INT,
          bounds: [2, 1 / 0]
        }, {
          label: _("z Score"),
          type: Ae.V.FLOAT,
          bounds: [.1, 1 / 0],
          inc: .1,
          places: 1
        }], Ae.draw = i, Ae.update = a, Ae.label = s;
        break;
      case"cci":
        Ae.shortName = "CCI", Ae.min = -250, Ae.max = 250, Ae.p = [20], Ae.ps = [{
          label: _("Period"),
          type: Ae.V.INT,
          bounds: [2, 1 / 0]
        }], Ae.draw = l, Ae.statics = c, Ae.update = u, Ae.label = f;
        break;
      case"dcn":
        Ae.shortName = "Channels", Ae.p = [21], Ae.ps = [{
          label: _("Period"),
          type: Ae.V.INT,
          bounds: [2, 1 / 0]
        }], Ae.draw = d, Ae.update = p, Ae.label = h;
        break;
      case"ema":
        Ae.shortName = "EMA", Ae.p = [5], Ae.ps = [{
          label: _("Period"),
          type: Ae.V.INT,
          bounds: [1, 1 / 0]
        }], Ae.draw = g, Ae.update = m, Ae.label = v;
        break;
      case"ma":
        Ae.shortName = "MA", Ae.p = [5], Ae.ps = [{
          label: _("Period"),
          type: Ae.V.INT,
          bounds: [1, 1 / 0]
        }], Ae.draw = b, Ae.update = y, Ae.label = x;
        break;
      case"trix":
        Ae.shortName = "TRIX", Ae.p = [9], Ae.ps = [{
          label: _("Period"),
          type: Ae.V.INT,
          bounds: [1, 1 / 0]
        }], Ae.draw = S, Ae.update = C, Ae.label = E;
        break;
      case"macd":
        Ae.shortName = "MACD", Ae.p = [12, 26, 9], Ae.ps = [{
          label: "Short EMA",
          type: Ae.V.INT,
          bounds: [2, 1 / 0]
        }, {label: "Long EMA", type: Ae.V.INT, bounds: [2, 1 / 0]}, {
          label: "Signal",
          type: Ae.V.INT,
          bounds: [2, 1 / 0]
        }], Ae.label = O, Ae.draw = A, Ae.statics = N, Ae.update = P;
        break;
      case"mfi":
        Ae.shortName = "MFI", Ae.min = 0, Ae.max = 100, Ae.p = [14], Ae.ps = [{
          label: _("Period"),
          type: Ae.V.INT,
          bounds: [2, 1 / 0]
        }], Ae.statics = D;
        break;
      case"obv":
        Ae.shortName = "OBV", Ae.p = [], Ae.draw = I, Ae.statics = M, Ae.update = L, Ae.label = F;
        break;
      case"emv":
        Ae.shortName = "EMV", Ae.p = [1e4, 14], Ae.ps = [{
          label: "除数",
          type: Ae.V.INT,
          bounds: [2, 1 / 0]
        }, {label: "长度", type: Ae.V.INT, bounds: [2, 1 / 0]}], Ae.draw = w, Ae.statics = $, Ae.update = k, Ae.label = T;
        break;
      case"psar":
        Ae.shortName = "PSAR", Ae.p = [.02, .2], Ae.ps = [{
          label: "AF",
          type: Ae.V.FLOAT,
          bounds: [0, 1],
          inc: .01,
          places: 3
        }, {
          label: "Max AF",
          type: Ae.V.FLOAT,
          bounds: [0, 1],
          inc: .01,
          places: 3
        }], Ae.draw = B, Ae.update = R, Ae.label = j;
        break;
      case"rsi":
        Ae.shortName = "RSI", Ae.min = 0, Ae.max = 100, Ae.p = [14], Ae.ps = [{
          label: _("Period"),
          type: Ae.V.INT,
          bounds: [2, 1 / 0]
        }], Ae.draw = q, Ae.statics = U, Ae.update = H, Ae.label = V;
        break;
      case"storsi":
        Ae.shortName = "STORSI", Ae.min = 0, Ae.max = 100, Ae.p = [14, 9, 3, 3], Ae.ps = [{
          label: "RSI长度",
          type: Ae.V.INT,
          bounds: [1, 1 / 0]
        }, {label: "Stoch长度", type: Ae.V.INT, bounds: [1, 1 / 0]}, {
          label: "平滑%K",
          type: Ae.V.INT,
          bounds: [1, 1 / 0]
        }, {
          label: "平滑%D",
          type: Ae.V.INT,
          bounds: [1, 1 / 0]
        }], Ae.draw = z, Ae.statics = W, Ae.update = G, Ae.label = Y;
        break;
      case"sma":
        Ae.shortName = "SMA", Ae.p = [21], Ae.ps = [{
          label: _("Period"),
          type: Ae.V.INT,
          bounds: [2, 1 / 0]
        }], Ae.draw = X, Ae.update = K, Ae.label = Q;
        break;
      case"sto":
        Ae.shortName = "STO", Ae.min = 0, Ae.max = 100, Ae.p = [14, 3, 3], Ae.ps = [{
          label: "长度",
          type: Ae.V.INT,
          bounds: [1, 1 / 0]
        }, {label: "平滑%K", type: Ae.V.INT, bounds: [1, 1 / 0]}, {
          label: "平滑%D",
          type: Ae.V.INT,
          bounds: [1, 1 / 0]
        }], Ae.draw = J, Ae.statics = Z, Ae.update = ee, Ae.label = te;
        break;
      case"kdj":
        Ae.shortName = "KDJ", Ae.min = -50, Ae.max = 150, Ae.p = [9, 3, 3], Ae.ps = [{
          label: "%K",
          type: Ae.V.INT,
          bounds: [1, 1 / 0]
        }, {label: "%D", type: Ae.V.INT, bounds: [1, 1 / 0]}, {
          label: "%J",
          type: Ae.V.INT,
          bounds: [1, 1 / 0]
        }], Ae.draw = ne, Ae.statics = re, Ae.update = oe, Ae.label = ie;
        break;
      case"vol":
        Ae.shortName = "VOL", Ae.min = 0, Ae.update = ae, Ae.draw = se, Ae.label = le;
        break;
      case"vwap":
        Ae.shortName = "VWAP", Ae.p = [14], Ae.ps = [{
          label: _("Period"),
          type: Ae.V.INT,
          bounds: [1, 1 / 0]
        }], Ae.draw = ce, Ae.update = ue, Ae.label = fe;
        break;
      case"wpr":
        Ae.shortName = "Wm %R", Ae.min = 0, Ae.max = 100, Ae.p = [14], Ae.ps = [{
          label: _("Period"),
          type: Ae.V.INT,
          bounds: [1, 1 / 0]
        }], Ae.draw = pe, Ae.statics = de, Ae.update = he, Ae.label = ge;
        break;
      case"mtm":
        Ae.shortName = "MTM", Ae.p = [14], Ae.ps = [{
          label: _("Period"),
          type: Ae.V.INT,
          bounds: [2, 1 / 0]
        }], Ae.label = ve, Ae.draw = be, Ae.statics = me, Ae.update = ye;
        break;
      case"avl":
        Ae.shortName = "AVL", Ae.draw = xe, Ae.update = we, Ae.label = $e;
        break;
      case"avlIndex":
        Ae.shortName = "AVL", Ae.draw = ke, Ae.update = Te, Ae.label = Se
    }
    Ae.type = e
  }

  function Ee() {
    Ae.output = []
  }

  var Ae = {
    type: "",
    shortName: "IND",
    color: null,
    min: 0,
    max: 1,
    p: [],
    ps: [],
    V: new Validator,
    input: null,
    output: [],
    cache: {i0: -1, i1: -1, t0: -1, values: []},
    CANDLE: 0,
    OHLC: 1,
    HLC: 2,
    LINE: 3,
    MOUNTAIN: 4,
    BANDS: 5,
    PSAR: 6,
    HIST: 7,
    LBLHIST: 8,
    HISTLINE: 9,
    draw: function () {
      return []
    },
    statics: function () {
      return {}
    },
    update: function (e, t, n) {
    },
    label: function (e) {
      return ""
    },
    debug: RTBTC.isDebug()
  }, Ne = RTBTC.debug;
  return {
    build: function (t, n) {
      return Ce(t), e(n), this
    }, reset: function () {
      return Ee(), this
    }, bounds: function () {
      return [Ae.min, Ae.max]
    }, update: function (e, t, n) {
      if (Ae.output = [], void 0 !== e && e.hasOwnProperty("length") && 0 != e.length) return Ae.update(e, t, n), this
    }, draw: function () {
      return Ae.draw()
    }, statics: function () {
      return Ae.statics()
    }, label: function (e) {
      return Ae.label(e)
    }, color: function (e) {
      return void 0 === e ? Ae.color : (Ae.color = e, this)
    }, shortName: function () {
      return Ae.shortName
    }, settings: function () {
      return Ae.p
    }, paramSettings: function () {
      return Ae.ps
    }, params: function (e) {
    }, paramUpdate: function (e, t) {
      return Ae.p[e] = t, this
    }, internals: Ae.debug ? function () {
      return Ae
    } : function () {
      return null
    }
  }
}, Chart = function () {
  function e() {
    $(bt.element).empty(), bt.w = $(bt.element).width(), bt.h = $(bt.element).height(), DEBUG && yt("#######################_P.w, h: " + bt.w + ", " + bt.h), bt.canvas.base = $("<canvas/>").attr("width", bt.w + "px").attr("height", bt.h + "px").attr("z-index", 100), bt.canvas.bg = $("<canvas/>").attr("width", bt.w + "px").attr("height", bt.h + "px").attr("z-index", 101), bt.canvas.main = $("<canvas/>").attr("width", bt.w + "px").attr("height", bt.h + "px").attr("z-index", 102), bt.canvas.fg = $("<canvas/>").attr("width", bt.w + "px").attr("height", bt.h + "px").attr("z-index", 103), bt.canvas.orders = $("<canvas/>").attr("width", bt.w + "px").attr("height", bt.h + "px").attr("z-index", 104), bt.canvas.lbl = $("<canvas/>").attr("width", bt.w + "px").attr("height", bt.h + "px").attr("z-index", 105), bt.canvas.line = $("<canvas/>").attr("width", bt.w + "px").attr("height", bt.h + "px").attr("z-index", 106).attr("id", "line"), bt.canvas.i = $("<canvas/>").attr("width", bt.w + "px").attr("height", bt.h + "px").attr("z-index", 107), $(bt.element).append(bt.canvas.base).append(bt.canvas.bg).append(bt.canvas.main).append(bt.canvas.fg).append(bt.canvas.orders).append(bt.canvas.lbl).append(bt.canvas.line).append(bt.canvas.i);
    bt.canvas.line[0].getContext("2d")
  }

  function t() {
    var e, t = (bt.slots.length - 1) * (2 + bt.px.pad) + 1 + bt.px.lbl.h, n = bt.h - t, r = -1;
    for (e = 0; e < bt.slots.length; e++) bt.slots[e].hasOwnProperty("main") ? bt.slots[e].h = (bt.mainSlotHeightPercent || .67) * n | 0 : bt.slots[e].h = (1 - bt.mainSlotHeightPercent || .33) * n / (bt.slots.length - 1) | 0, bt.slots[e].px = r, r += bt.slots[e].h + 2 + bt.px.pad + 1, DEBUG && yt("Slot " + e + " height: " + bt.slots[e].h + ", px: " + bt.slots[e].px)
  }

  function n(e) {
    if (t(), void 0 !== e) {
      var n = new Validator, r = (new Validator).create(n.INT), o = (new Validator).create(n.BOOL);
      e.hasOwnProperty("r") && (bt.settings.repaint = o.set(bt.settings.repaint).set(e.r).get()), e.hasOwnProperty("g") && (bt.settings.grid = o.set(bt.settings.grid).set(e.g).get()), e.hasOwnProperty("c") && (bt.settings.crosshairs = o.set(bt.settings.crosshairs).set(e.c).get()), e.hasOwnProperty("k") && (bt.settings.icontrols = o.set(bt.settings.icontrols).set(e.k).get()), e.hasOwnProperty("b") && (bt.settings.bidask = o.set(bt.settings.bidask).set(e.b).get()), e.hasOwnProperty("l") && (bt.settings.logscale = o.set(bt.settings.logscale).set(e.l).get()), e.hasOwnProperty("o") && (bt.settings.userorders = o.set(bt.settings.userorders).set(e.o).get()), e.hasOwnProperty("time") && (bt.settings.time = o.set(bt.settings.userorders).set(e.time).get()), e.hasOwnProperty("m") && (bt.mode.current = r.set(bt.mode.current).set(e.m).get()), e.hasOwnProperty("d") && (bt.mode.display = r.set(bt.mode.display).set(e.d).get()), e.hasOwnProperty("w") && (bt.px.bar.width = r.set(bt.px.bar.width).set(e.w).get()), e.hasOwnProperty("s") && (bt.px.bar.spacing = r.set(bt.px.bar.spacing).set(e.s).get());
      for (var i = r.set(bt.period.avail[bt.period.current]).set(e.t).get(), a = 0; a < bt.period.avail.length; a++) bt.period.avail[a] == i && (bt.period.current = a);
      if (e.hasOwnProperty("i")) {
        var s, l, c, u, f = [], d = ["m", "p", "h"], p = [], h = [];
        for (a in bt.indicators) bt.indicators.hasOwnProperty(a) && p.push(a);
        for (a in bt.overlays) bt.overlays.hasOwnProperty(a) && h.push(a);
        for (a = 0; a < e.i.length; a++) {
          for (l = !0, s = 0; s < d.length; s++) l = l && e.i[a].hasOwnProperty(d[s]);
          if (l) {
            if (c = {px: ~~+e.i[a].p, h: ~~+e.i[a].h}, e.i[a].m) {
              if (c.main = !0, c.o = [], c.u = [], e.i[a].hasOwnProperty("o")) for (s = 0; s < e.i[a].o.length; s++) u = null, e.i[a].o[s].hasOwnProperty("t") && h.indexOf(e.i[a].o[s].t) >= 0 && e.i[a].o[s].hasOwnProperty("s") && (e.i[a].o[s].hasOwnProperty("c") && (u = e.i[a].o[s].c), c.o.push({
                t: e.i[a].o[s].t,
                i: null,
                s: e.i[a].o[s].s,
                c: u
              }));
              if (e.i[a].hasOwnProperty("u")) for (s = 0; s < e.i[a].u.length; s++) e.i[a].u[s].hasOwnProperty("t") && h.indexOf(e.i[a].u[s].t) >= 0 && e.i[a].u[s].hasOwnProperty("s") && (e.i[a].u[s].hasOwnProperty("c") && (u = e.i[a].u[s].c), c.u.push({
                t: e.i[a].u[s].t,
                i: null,
                s: e.i[a].u[s].s,
                c: u
              }))
            } else {
              if (!(p.indexOf(e.i[a].t) >= 0 && e.i[a].hasOwnProperty("r"))) continue;
              c.t = e.i[a].t, c.i = null, c.s = e.i[a].r
            }
            f.push(c)
          }
        }
        f.length > 0 && (bt.slots = f, t())
      }
    }
  }

  function r() {
    var e;
    if (bt.bars.data = [], 0 != bt.period.avail[bt.period.current]) for (bt.bars.data.push([bt.bars.ticks[0][0], bt.bars.ticks[0][1], bt.bars.ticks[0][1], bt.bars.ticks[0][1], bt.bars.ticks[0][1], bt.bars.ticks[0][2]]), e = 1; e < bt.bars.ticks.length; e++) o(bt.bars.ticks[e]); else for (e = 0; e < bt.bars.ticks.length; e++) bt.bars.splice(0, 0, [bt.bars.ticks[e][0], bt.bars.ticks[e][1], bt.bars.ticks[e][1], bt.bars.ticks[e][1], bt.bars.ticks[e][1], bt.bars.ticks[e][2]])
  }

  function o(e) {
    var t = e[0], n = lt();
    0 == bt.bars.data.length || 0 == n || t >= bt.bars.data[0][0] + 1e3 * n ? (bt.bars.data.splice(0, 0, [t, e[1], e[1], e[1], e[1], e[2]]), bt.flags.recompute = !0) : (e[1] > bt.bars.data[0][2] && (bt.bars.data[0][2] = e[1]), e[1] < bt.bars.data[0][3] && (bt.bars.data[0][3] = e[1]), bt.bars.data[0][4] = e[1], bt.bars.data[0][5] += e[2], bt.flags.recompute = !0), (e[1] > bt.highPrice || e[1] < bt.lowPrice || bt.bars.data[0][5] > bt.maxVol) && (bt.flags.recompute = !0)
  }

  function i(e) {
    var t = parseFloat(e[0]), n = parseFloat(e[1]), r = parseFloat(e[2]);
    return !(isNaN(t) || isNaN(n) || isNaN(r))
  }

  function a() {
    var e, t, n = {};
    for (n.r = bt.settings.repaint, n.g = bt.settings.grid, n.c = bt.settings.crosshairs, n.k = bt.settings.icontrols, n.b = bt.settings.bidask, n.l = bt.settings.logscale, n.o = bt.settings.userorders, n.m = +~~bt.mode.current, n.d = +~~bt.mode.display, n.t = +~~bt.period.avail[bt.period.current], n.w = +~~bt.px.bar.width, n.s = +~~bt.px.bar.spacing, n.i = [], e = 0; e < bt.slots.length; e++) if (bt.slots[e].hasOwnProperty("main")) {
      var r, o = [], i = [];
      for (t = 0; t < bt.slots[e].o.length; t++) r = B(e, t, "o"), o.push({
        t: bt.slots[e].o[t].t,
        s: bt.slots[e].o[t].i.settings(),
        c: r
      });
      for (t = 0; t < bt.slots[e].u.length; t++) r = B(e, t, "u"), i.push({
        t: bt.slots[e].u[t].t,
        s: bt.slots[e].u[t].i.settings(),
        c: r
      });
      n.i.push({m: !0, p: +~~bt.slots[e].px, h: +~~bt.slots[e].h, o: o, u: i})
    } else n.i.push({m: !1, t: bt.slots[e].t, p: +~~bt.slots[e].px, h: +~~bt.slots[e].h, r: bt.slots[e].i.settings()});
    return n
  }

  function s(e) {
    var t = "";
    switch (e) {
      case 0:
        t = "日";
        break;
      case 1:
        t = "一";
        break;
      case 2:
        t = "二";
        break;
      case 3:
        t = "三";
        break;
      case 4:
        t = "四";
        break;
      case 5:
        t = "五";
        break;
      case 6:
        t = "六"
    }
    return t
  }

  function l() {
    $(bt.element).append($('<div id="chartCtrlFixed" class="chartCtrl" hidden><div class="content"><div>时间:<span id="date"></span></div><div>开盘:<span id="open"></span></div><div>最高:<span id="high"></span></div><div>最低:<span id="low"></span></div><div>收盘:<span  id="close"></span></div><div>涨幅:<span id="updownPercent" ></span></div><div>振幅:<span  id="updown1"></span></div><div>成交量:<span  id="volume"></span></div><div>成交额:<span  id="quoteVolume"></span></div><div>换手率:<span  id="hand"></span></div></div></div>'));
    $(bt.element).mouseover(function () {
      bt.mode.display, bt.CANDLE
    }), $(bt.element).mouseout(function () {
      bt.mode.display == bt.CANDLE && $("#chartCtrlFixed").hide()
    }), bt.updateXFK = function (e) {
      if (e) r = t = [(new Date).getTime(), 0, 0, 0, 0, 0]; else var t = bt.bars.data[bt.curIndex],
        n = bt.curIndex + 1 >= bt.bars.data.length ? bt.curIndex : bt.curIndex + 1, r = bt.bars.data[n];
      var o, i = bt.period.avail[bt.period.current];
      i > 0 && i <= 3600 ? o = new Date(t[0]).Format("MM-dd hh:mm") : 86400 == i ? o = new Date(t[0]).Format("yyyy/MM/dd/") + s(new Date(t[0]).getDay()) : 604800 == i && (o = new Date(t[0]).Format("yyyy-MM-dd")), e && (o = "--"), $("#chartCtrlFixed #date").text(o), $("#chartCtrlFixed #open").text(e ? "--" : Ee(t[1])), $("#chartCtrlFixed #open").css("color", t[1] < r[4] ? "#ff4056" : t[1] > r[4] ? "#34ce6b" : ""), $("#chartCtrlFixed #high").text(e ? "--" : Ee(t[2])), $("#chartCtrlFixed #high").css("color", t[2] < r[4] ? "#ff4056" : t[2] > r[4] ? "#34ce6b" : ""), $("#chartCtrlFixed #low").text(e ? "--" : Ee(t[3])), $("#chartCtrlFixed #low").css("color", t[3] < r[4] ? "#ff4056" : t[3] > r[4] ? "#34ce6b" : ""), $("#chartCtrlFixed #close").text(e ? "--" : Ee(t[4])), $("#chartCtrlFixed #close").css("color", t[4] < r[4] ? "#ff4056" : t[4] > r[4] ? "#34ce6b" : ""), $("#chartCtrlFixed #updownPercent").text(e ? "--" : (100 * (t[4] - r[4]) / r[4]).toFixed(2) + "%"), $("#chartCtrlFixed #updownPercent").css("color", t[4] < r[4] ? "#ff4056" : t[4] > r[4] ? "#34ce6b" : ""), $("#chartCtrlFixed #updown1").text(e ? "--" : (100 * (t[2] - t[3]) / r[4]).toFixed(2) + "%"), $("#chartCtrlFixed #volume").text(e ? "--" : t[5].toFixed(0)), $("#chartCtrlFixed #hand").text(e ? "--" : (100 * (bt.data.circulation ? t[5] / bt.data.circulation : 0)).toFixed(6) + "%")
    }
  }

  function c(e) {
    if (bt.mode.display != bt.CANDLE) {
      var t;
      (t = e < 0 || e > bt.bars.data.length ? [(new Date).getTime(), 0, 0, 0, 0, 0] : bt.bars.data[e]) && ($("#time").text(new Date(t[0]).Format("hh:mm")), $("#price").text(t[4].toFixed(6)), $("#volume").text(t[5].toFixed(0)), $("#updown").text((0 == t[4] ? 0 : t[4] - bt.preClose).toFixed(6)), $("#price").css("color", t[4] >= bt.preClose ? "red" : "green"), $("#updown").css("color", t[4] >= bt.preClose ? "red" : "green"))
    }
  }

  function u() {
    $(bt.element).attr("tabindex", 0).keydown(function (e) {
      if (37 == e.keyCode || 39 == e.keyCode) {
        if (bt.mouse.x < 0 && (bt.mouse.x = 0), bt.mouse.x > Ie(0) && (bt.mouse.x = Ie(0)), 37 == e.keyCode) {
          bt.mode.display, bt.CANDLE;
          var t = bt.mouse.x - bt.px.bar.width - bt.px.bar.spacing;
          (n = _e(t < 0 ? 0 : t)) > bt.bars.visible - 4 ? Re(n) < bt.bars.data.length && (bt.bars.offset++, E()) : (bt.mouse.x -= bt.px.bar.width + bt.px.bar.spacing, bt.mouse.x < 0 && (bt.mouse.x = 0))
        } else if (39 == e.keyCode) {
          var n = _e(bt.mouse.x + bt.px.bar.width + bt.px.bar.spacing);
          0 == n && bt.bars.offset > 0 ? (bt.bars.offset--, E()) : bt.mouse.x += bt.px.bar.width + bt.px.bar.spacing
        }
        bt.bars.data[Re(_e(bt.mouse.x))] && (bt.mouse.y = De(bt.bars.data[Re(_e(bt.mouse.x))][4], 0)), window.reqAnimFrame(function () {
          oe(bt.mouse.x, bt.mouse.y, !0)
        })
      }
    })
  }

  function f(e) {
    var t = [], n = 0, r = $("<div/>").addClass("control-" + e);
    return t[n++] = '<span class="settings-popout">', t[n++] = '<span class="icon settings">', t[n++] = '<i class="icon-wrench"></i></span>', t[n++] = "</span>", r.addClass("icontrol").html(t.join("")).css("top", bt.slots[e].px + 3 + "px"), r.hide(), 0 == e ? $("span.move-up i", r).addClass("disable") : $("span.move-up", r).tooltip({
      placement: "right",
      title: _("Move Up")
    }).click(function (e) {
      return function () {
        k(e, !0)
      }
    }(e)), $("span.settings", r).tooltip({placement: "right", title: _("Settings")}).click(function (e) {
      return function () {
        d(e)
      }
    }(e)), e == bt.slots.length - 1 && $("span.move-down i", r).addClass("disable"), r
  }

  function d(e) {
    if (!(bt.slots.length <= e || e < 0 || $(".popout .extra-settings").length > 0)) {
      var t = $(".control-" + e, bt.element);
      if (t.click(function (e) {
          e.stopPropagation()
        }), $(document).click(function () {
          $(".extra-settings", t).remove(), $(".colorpicker").hide(), t.data("popped", !1)
        }), t.data("popped")) return $(".extra-settings", t).remove(), t.removeClass("popout"), t.data("popped", !1), void $(".settings", t).tooltip("enable");
      var n = $("<span/>").addClass("extra-settings"), r = [];
      if (bt.slots[e].hasOwnProperty("main")) {
        var o, i, a, s = $("<div/>").addClass("underlays sortable"), l = $("<div/>").addClass("overlays sortable"),
          c = $("<div/>").addClass("rows");
        for (c.append($("<div/>").addClass("title").html(_("Behind Price"))), b = 0; b < bt.slots[e].u.length; b++) {
          for (i = B(e, b, "u"), "bidask" == bt.slots[e].u[b].t && (i = null), a = uniqueID(), o = $("<div/>").addClass("row").addClass("row1").addClass("u" + b).data({
            j: b,
            place: "u"
          }).append($("<span/>").addClass("icon reorder-icon").append($("<i/>").addClass("icon-reorder").css("color", i).attr("id", a))).append($("<u/>").html(bt.slots[e].u[b].i.shortName() + ": ")), u = bt.slots[e].u[b].i.settings(), f = bt.slots[e].u[b].i.paramSettings(), p = "", 0 == u.length && o.append($("<u/>").text(" --- ")), v = 0; v < u.length; v++) p = uniqueID(), o.append($("<span/>").addClass("param-field").append($("<strong/>").text(f[v].hasOwnProperty("label") ? f[v].label : "P" + (v + 1))).append($("<input/>").attr("type", "text").val(u[v]).addClass("param-input").attr("id", p))), r.push({
            val: u[v],
            sel: "#" + p,
            set: f[v],
            fn: function (t, n, r) {
              return function (o) {
                "function" == typeof t && t(n, o), bt.slots[e].u[r].s = [o], E()
              }
            }(bt.slots[e].u[b].i.paramUpdate, v, b)
          });
          p = uniqueID(), o.append($("<span/>").addClass("icon remove-icon").attr("id", p).append($("<i/>").addClass("icon-trash")).click(function (e, t, n, r) {
            return function () {
              $("#" + e).tooltip("hide"), T(t, "u", r), d(r), d(r)
            }
          }(p, b, 0, e)).tooltip({
            placement: "right",
            title: _("Remove")
          })), h = uniqueID(), o.append($("<span/>").addClass("icon edit-icon").attr("id", h).append($("<i/>").addClass("icon-edit")).click(g(h, e, "u", b, a)).tooltip({
            placement: "right",
            title: _("Pick Color")
          })), o.append(clearingSpan()), s.append(o)
        }
        for (c.append(s), c.append($("<div/>").addClass("title").html(_("In Front of Price"))), b = 0; b < bt.slots[e].o.length; b++) {
          for (i = B(e, b, "o"), "bidask" == bt.slots[e].o[b].t && (i = null), a = uniqueID(), o = $("<div/>").addClass("row").addClass("o" + b).data({
            j: b,
            place: "o"
          }).append($("<span/>").addClass("icon reorder-icon").append($("<i/>").addClass("icon-reorder").css("color", i).attr("id", a))).append($("<u/>").html(bt.slots[e].o[b].i.shortName() + ": ")), u = bt.slots[e].o[b].i.settings(), f = bt.slots[e].o[b].i.paramSettings(), p = "", 0 == u.length && o.append($("<u/>").text(" --- ")), v = 0; v < u.length; v++) p = uniqueID(), o.append($("<span/>").addClass("param-field").append($("<strong/>").text(f[v].hasOwnProperty("label") ? f[v].label : "P" + (v + 1))).append($("<input/>").attr("type", "text").val(u[v]).addClass("param-input").attr("id", p))), r.push({
            val: u[v],
            sel: "#" + p,
            set: f[v],
            fn: function (t, n, r) {
              return function (o) {
                "function" == typeof t && t(n, o), bt.slots[e].o[r].s = [o], E()
              }
            }(bt.slots[e].o[b].i.paramUpdate, v, b)
          });
          p = uniqueID(), o.append($("<span/>").addClass("icon remove-icon").attr("id", p).append($("<i/>").addClass("icon-trash")).click(function (e, t, n, r) {
            return function () {
              $("#" + e).tooltip("hide"), T(t, "o", r), d(r), d(r)
            }
          }(p, b, 0, e)).tooltip({
            placement: "right",
            title: _("Remove")
          })), h = uniqueID(), o.append($("<span/>").addClass("icon edit-icon").attr("id", h).append($("<i/>").addClass("icon-edit")).click(g(h, e, "o", b, a)).tooltip({
            placement: "right",
            title: _("Pick Color")
          })), o.append(clearingSpan()), l.append(o)
        }
        c.append(l), n.append(c);
        $(".rows", n), $(".reorder-icon", n), function (e) {
        }($(".rows", n));
        $(".overlays", n).append("<div class='row' style='height:0'></div>"), $(".underlays", n).append("<div class='row' style='height:0'></div>")
      } else {
        n.append($("<span/>").addClass("icon remove-icon").append($("<i/>").addClass("icon-trash")).click(function (e) {
          return function () {
            $(".control-" + e + " .remove-icon", bt.element).tooltip("hide"), S(e)
          }
        }(e)).tooltip({placement: "bottom", title: _("Remove")}));
        for (var u = bt.slots[e].i.settings(), f = bt.slots[e].i.paramSettings(), p = "", h = "", v = 0; v < u.length; v++) p = uniqueID(), n.append($("<span/>").addClass("param-field").append($("<strong/>").text(f[v].hasOwnProperty("label") ? f[v].label : "P" + (v + 1))).append($("<input/>").attr("type", "text").val(u[v]).addClass("param-input").attr("id", p))), r.push({
          val: u[v],
          sel: "#" + p,
          set: f[v],
          fn: function (e, t) {
            return function (n) {
              "function" == typeof e && e(t, n), E()
            }
          }(bt.slots[e].i.paramUpdate, v)
        })
      }
      n.append(clearingSpan()), $(".settings-popout", t).append(n);
      for (var b = 0; b < r.length; b++) $(r[b].sel).data("value", r[b].val), m(e, r[b].sel, r[b].set, r[b].fn, E);
      t.addClass("popout"), $(".settings", t).tooltip("disable"), t.data("popped", !0)
    }
  }

  function p() {
    var e;
    for (e = 0; e < bt.slots.length; e++) $(".control-" + e, bt.element).data("popped") && d(e)
  }

  function h() {
    var e, t;
    for (e = 0; e < bt.slots.length; e++) (t = $(".control-" + e, bt.element)).data("popped") || t.hide()
  }

  function g(e, t, n, r, o) {
    return function () {
      $("#" + e).ColorPicker({
        color: B(t, r, n), onChange: function (e, i, a) {
          R(t, r, n, "#" + i), "o" == n ? bt.flags.redraw.overlay = !0 : "u" == n && (bt.flags.redraw.underlay = !0), window.reqAnimFrame(C), $("#" + o).css("color", "#" + i)
        }, onHide: function () {
        }
      }).ColorPickerShow(), $(".colorpicker").click(function (e) {
        e.stopPropagation()
      })
    }
  }

  function m(e, t, n, r, o, i) {
    new Validator;
    var a = (new Validator).create(n.type), s = n.hasOwnProperty("inc") ? n.inc : 1,
      l = n.hasOwnProperty("places") ? n.places : 0;
    $(t).on({
      keyup: function (o) {
        var i = $(t), c = o.keyCode || o.which, u = {left: 37, up: 38, right: 39, down: 40}, f = {enter: 13, esc: 27},
          p = !1, h = i.data("value");
        switch (c) {
          case u.up:
            h + s <= n.bounds[1] && (i.data("value", h + s), i.val((h + s).toFixed(l)), "function" == typeof r && r(h + s));
            break;
          case u.down:
            h - s >= n.bounds[0] && (i.data("value", h - s), i.val((h - s).toFixed(l)), "function" == typeof r && r(h - s));
            break;
          case f.enter:
          case f.esc:
            o.preventDefault(), o.stopPropagation(), d(e);
            break;
          default:
            p = !0
        }
        if (p) {
          var g = +i.val(), m = a.set(h).set(g).get();
          m != h && (m >= n.bounds[0] && m <= n.bounds[1] ? (i.data("value", m), "function" == typeof r && r(m)) : i.val().length > 0 && i.val(h))
        }
      }, blur: function () {
        0 == $(t).val().length && $(t).val($(t).data("value")), "function" == typeof o && o()
      }
    })
  }

  function v() {
    var e, t = [], n = [], r = [{val: 0, text: _("Indicator…")}], o = [{val: 0, text: _("Overlay…")}];
    for (e = 0; e < bt.period.avail.length; e++) t.push({val: bt.period.avail[e], text: ut(bt.period.avail[e])});
    for (e = 0; e < bt.mode.avail_display.length; e++) n.push({val: e, text: bt.mode.avail_display[e]});
    for (e in bt.indicators) bt.indicators.hasOwnProperty(e) && r.push({val: e, text: bt.indicators[e]});
    for (e in bt.overlays) bt.overlays.hasOwnProperty(e) && o.push({val: e, text: bt.overlays[e]});
    return [$("<p/>").append(RTBTC.select(bt.period.avail[bt.period.current], t, function (e) {
      bt.period.current = bt.period.avail.indexOf(+e), pt(), E()
    })).append($("<span/>").addClass("control-label").html(_("Time Period"))), $("<p/>").append(RTBTC.select(bt.mode.display, n, function (e) {
      bt.mode.display = +e, E()
    })).append($("<span/>").addClass("control-label").html(_("Draw Style"))), $("<p/>").append(RTBTC.toggle(bt.settings.bidask, function () {
      bt.settings.bidask = !0
    }, function () {
      bt.settings.bidask = !1
    }, function () {
      E()
    })).append($("<span/>").addClass("control-label").html(_("Show Bid / Ask"))), $("<p/>").append(RTBTC.toggle(bt.settings.crosshairs, function () {
      bt.settings.crosshairs = !0
    }, function () {
      bt.settings.crosshairs = !1
    }, function () {
      E()
    })).append($("<span/>").addClass("control-label").html(_("Show Crosshair"))), $("<p/>").append(RTBTC.toggle(bt.settings.grid, function () {
      bt.settings.grid = !0
    }, function () {
      bt.settings.grid = !1
    }, function () {
      E()
    })).append($("<span/>").addClass("control-label").html(_("Show Grid"))), $("<p/>").append(RTBTC.toggle(bt.settings.icontrols, function () {
      bt.settings.icontrols = !0
    }, function () {
      bt.settings.icontrols = !1;
      for (var e = 0; e < bt.slots.length; e++) $(".control-" + e, bt.element).hide().data("popped", !1)
    }, function () {
      E()
    })).append($("<span/>").addClass("control-label").html(_("Show Indicator Controls"))), $("<p/>").append(RTBTC.toggle(bt.settings.logscale, function () {
      bt.settings.logscale = !0
    }, function () {
      bt.settings.logscale = !1
    }, function () {
      E()
    })).append($("<span/>").addClass("control-label").html(_("Logarithmic Scale"))), $("<p/>").append(RTBTC.select(0, o, function (e) {
      0 != +e && y(e)
    }, !0)).append($("<span/>").addClass("control-label").html(_("Add Overlay"))), $("<p/>").append(RTBTC.select(0, r, function (e) {
      0 != +e && x(e)
    }, !0)).append($("<span/>").addClass("control-label").html(_("Add Indicator"))), $("<p/>").append(RTBTC.toggle(bt.settings.userorders, function () {
      bt.settings.userorders = !0
    }, function () {
      bt.settings.userorders = !1
    }, function () {
      E()
    })).append($("<span/>").addClass("control-label").html(_("Show User Orders")))]
  }

  function b() {
    var e, t, n;
    for (e = 0; e < bt.slots.length; e++) {
      if (bt.slots[e].hasOwnProperty("main")) {
        for (t = 0; t < bt.slots[e].u.length; t++) n = void 0 !== bt.slots[e].u[t].c && null != bt.slots[e].u[t].c ? bt.slots[e].u[t].c : B(e), bt.slots[e].u[t].i = (new Indicator).build(bt.slots[e].u[t].t, bt.slots[e].u[t].s).color(n);
        for (t = 0; t < bt.slots[e].o.length; t++) n = void 0 !== bt.slots[e].o[t].c && null != bt.slots[e].o[t].c ? bt.slots[e].o[t].c : B(e), bt.slots[e].o[t].i = (new Indicator).build(bt.slots[e].o[t].t, bt.slots[e].o[t].s).color(n)
      } else bt.slots[e].i = (new Indicator).build(bt.slots[e].t, bt.slots[e].s);
      bt.slots[e].control = f(e), $(bt.element).append(bt.slots[e].control)
    }
  }

  function y(e, t) {
    DEBUG && yt("Adding overlay " + e + " to chart.");
    var n = {t: e, i: (new Indicator).build(e), s: []};
    n.s = n.i.settings(), t && n.i.paramUpdate(0, t), n.i.color(bt.colors.stroke.i[bt.lastColorIndex % bt.colors.stroke.i.length]), bt.lastColorIndex++;
    var r, o = -1;
    for (r = 0; r < bt.slots.length; r++) if (bt.slots[r].hasOwnProperty("main")) {
      o = r;
      break
    }
    -1 != o && (bt.slots[o].u.push(n), $(".control-" + o, bt.element).data("popped") && (d(o), d(o)), E())
  }

  function x(e) {
    DEBUG && yt("Adding indicator " + e + " to chart.");
    var n, r = (bt.slots.length - 1) * (2 + bt.px.pad) + 1 + bt.px.lbl.h,
      o = (bt.h, Math.max(bt.slots[bt.slots.length - 1].h * bt.slots.length / (bt.slots.length + 1), bt.px.slotmin)),
      i = 0, a = 0, s = 0, l = !1, c = 0, u = {t: e, h: o, px: 0, i: (new Indicator).build(e), s: []};
    for (u.s = u.i.settings(); i < o;) if (!l && bt.slots[a % bt.slots.length].h <= bt.px.slotmin) ++s == bt.slots.length && (l = !0), a++; else {
      for (s = 0, bt.slots[a % bt.slots.length].h -= 1, i += 1, n = 1 + a % bt.slots.length; n < bt.slots.length; n++) bt.slots[n].px -= 1;
      if (a++, ++c > 1500) {
        DEBUG && yt("Emergency break. nc = " + s + " shrink: " + (l ? "true" : "false")), DEBUG && yt(bt.slots);
        break
      }
    }
    u.px = bt.slots[bt.slots.length - 1].h + 2 + bt.px.pad + 1, bt.slots.push(u);
    for (var d = 1; d <= bt.slots.length - 2; d++) $(".control-" + d, bt.element).remove(), bt.slots[d].control = f(d), $(bt.element).append(bt.slots[d].control);
    bt.slots[bt.slots.length - 1].control = f(bt.slots.length - 1), $(bt.element).append(bt.slots[bt.slots.length - 1].control), t(), ot(), st()
  }

  function k(e, t) {
    if (!(bt.slots.length <= 1) && (0 != e || !t) && (e != bt.slots.length - 1 || t)) {
      DEBUG && yt("Moving indicator in slot " + e + " " + (t ? "up" : "down")), $(".icontrol", bt.element).each(function (e, t) {
        $(t).data("popped") && d(e)
      });
      var n, r, o = t ? e - 1 : e + 1;
      r = bt.slots[o].px, bt.slots[o].px = bt.slots[e].px, bt.slots[e].px = r, n = bt.slots.splice(e, 1)[0], bt.slots.splice(o, 0, n), ot(), st()
    }
  }

  function T(e, t, n) {
    bt.slots[n].hasOwnProperty(t) && (bt.slots[n][t].splice(e, 1), $(".control-" + n + " ." + t + e, bt.element).remove(), E())
  }

  function S(e) {
    if (!bt.slots[e].hasOwnProperty("main")) {
      var t, n = +bt.slots[e].h + bt.px.pad + 3, r = -1;
      for ($(".control-" + (bt.slots.length - 1), bt.element).remove(), $(".icontrol", bt.element).each(function (e, t) {
        $(t).data("popped") && d(e)
      }), t = 0; t < bt.slots.length; t++) if (t != e && (r < 0 && t > e && (bt.slots[t].px -= bt.slots[e].h), bt.slots[t].hasOwnProperty("main"))) {
        r = t, bt.slots[t].h += n;
        break
      }
      for (t = 0; t < bt.slots.length; t++) DEBUG && yt("Slot " + t + " h: " + bt.slots[t].h + ", px: " + bt.slots[t].px);
      bt.slots.splice(e, 1), ot(), st()
    }
  }

  function C() {
    var e = bt.canvas.base[0].getContext("2d"), t = bt.canvas.orders[0].getContext("2d"),
      n = bt.canvas.bg[0].getContext("2d"), r = bt.canvas.main[0].getContext("2d"),
      o = bt.canvas.fg[0].getContext("2d");
    bt.flags.recompute && A(e), bt.flags.redraw.base && (e.clearRect(0, 0, bt.w, bt.h), P(e), bt.flags.redraw.base = !1, bt.settings.userorders ? D(t) : t.clearRect(0, 0, bt.w, bt.h));
    var i, a;
    for ((bt.flags.redraw.inds || bt.flags.redraw.overlay) && (o.clearRect(0, 0, bt.w, bt.h), bt.flags.redraw.inds = !0, bt.flags.redraw.overlay = !0), bt.flags.redraw.underlay && n.clearRect(0, 0, bt.w, bt.h), i = 0; i < bt.slots.length; i++) if (bt.slots[i].hasOwnProperty("main")) {
      if (bt.flags.redraw.main && (r.clearRect(0, 0, bt.w, bt.h), M(r, i), bt.flags.redraw.main = !1), bt.flags.redraw.underlay) {
        for (N(n, i), a = 0; a < bt.slots[i].u.length; a++) j(n, i, bt.slots[i].u[a].i);
        bt.flags.redraw.underlay = !1
      }
      if (bt.flags.redraw.overlay) {
        for (N(o, i), a = 0; a < bt.slots[i].o.length; a++) j(o, i, bt.slots[i].o[a].i);
        bt.flags.redraw.overlay = !1
      }
    } else (bt.flags.redraw.inds || "vol" == bt.slots[i].t) && (N(o, i), j(o, i, bt.slots[i].i));
    bt.flags.redraw.inds = !1, bt.notClicked || 1 == mobile || (o.strokeStyle = "#f9ee30", o.strokeRect(0, 0, bt.w, bt.h))
  }

  function E() {
    var e = lt(), t = 0;
    if (bt.bars.data = [], Data.data.bars[e]) if (1 == bt.bars.fixTime) for (t = 0; t < Data.data.bars[e].length; t++) bt.bars.data.push(Data.data.bars[e][t]); else bt.bars.data = Data.data.bars[e];
    void 0 === bt.bars.data && (DEBUG && yt("No data for " + e), bt.bars.data = []), bt.flags.recompute = !0, C()
  }

  function A(e) {
    if (bt.bars.fixTime) {
      var t, n = new Date(bt.bars.data && bt.bars.data.length > 0 ? bt.bars.data[0][0] : new Date),
        r = new Date(n.getFullYear() + "/" + (n.getMonth() + 1) + "/" + n.getDate() + " " + bt.bars.startTime1),
        o = new Date(n.getFullYear() + "/" + (n.getMonth() + 1) + "/" + n.getDate() + " " + bt.bars.endTime1),
        i = new Date(n.getFullYear() + "/" + (n.getMonth() + 1) + "/" + n.getDate() + " " + bt.bars.startTime2),
        a = new Date(n.getFullYear() + "/" + (n.getMonth() + 1) + "/" + n.getDate() + " " + bt.bars.endTime2);
      t = n <= o && n >= r ? (o.getTime() - n.getTime() + (a - i)) / 6e4 + 1 : n < i && n > o ? (a - i) / 6e4 : n <= a && n >= i ? (a.getTime() - n.getTime()) / 6e4 : n > a ? 0 : (o.getTime() - r.getTime() + a.getTime() - i.getTime()) / 6e4, t = Math.floor(t), bt.bars.blank = t < 0 ? 0 : t, bt.bars.visible = (o.getTime() - r.getTime() + a.getTime() - i.getTime()) / 6e4 + 1, bt.px.bar.spacing = 1
    } else bt.px.bar.spacing = bt.px.bar.width / 3 > 2 ? bt.px.bar.width / 3 : 2, bt.bars.visible = 0 | parseInt((bt.w - bt.px.lbl.tick - bt.px.lbl.w - 1) / (bt.px.bar.width + bt.px.bar.spacing));
    var s, l, c = Be();
    if (c[1] > -1 && (bt.price.high = 0, bt.price.low = 1e15), bt.mode.display == bt.CANDLE) for (s = c[0]; s <= c[1]; s++) bt.bars.data[s][2] > bt.price.high && (bt.price.high = bt.bars.data[s][2]), bt.bars.data[s][3] < bt.price.low && (bt.price.low = bt.bars.data[s][3]); else for (s = c[0]; s <= c[1]; s++) bt.bars.data[s][4] > bt.price.high && (bt.price.high = bt.bars.data[s][4]), bt.bars.data[s][4] < bt.price.low && (bt.price.low = bt.bars.data[s][4]);
    var u = bt.canvas.base[0].getContext("2d");
    u.font = bt.font.labels, bt.px.lbl.w = u.measureText(Ee(10)).width + 8, bt.LblWidthChange && bt.LblWidthChange(bt.px.lbl.w);
    var f = bt.price.high - bt.price.low;
    for (bt.settings.logscale && (bt.price.high = Math.min(1.1 * bt.price.high, bt.price.high + .1 * f), bt.price.low = Math.max(bt.price.low / 1.1, bt.price.low - .1 * f)), bt.price.low < 0 && (bt.price.low = 0), bt.px.bar.dx = (bt.px.bar.width - 1) / 2 | 0, bt.period.string = ut(), s = 0; s < bt.slots.length; s++) if (bt.slots[s].hasOwnProperty("main")) {
      if (bt.settings.logscale) {
        var d = bt.slots[s].px, p = d + bt.slots[s].h;
        try {
          bt.log.m = (d - p) / log10(p1 / p0), bt.log.b = (d * log10(p0) - p * log10(p1)) / log10(p0 / p1)
        } catch (e) {
          bt.log.m = 0, bt.log.b = 0
        }
      }
      bt.price.high, bt.price.low;
      for (l = 0; l < bt.slots[s].o.length; l++) if (bt.slots[s].o[l].hasOwnProperty("i") && (bt.slots[s].o[l].i.update(bt.bars.data, c[0], c[1]), m = bt.slots[s].o[l].i.draw())) for (v = 0; v < m.length; v++) for (var h = m[v].data, g = 0; g < c[1] - c[0]; g++) (b = h[g]) > bt.price.high && (bt.price.high = b), b < bt.price.low && (bt.price.low = b);
      for (l = 0; l < bt.slots[s].u.length; l++) if (bt.slots[s].u[l].hasOwnProperty("i")) {
        "ema" == bt.slots[s].u[l].t && bt.slots[s].u[l].s && bt.slots[s].u[l].i.paramUpdate(0, bt.slots[s].u[l].s[0]), bt.slots[s].u[l].i.update(bt.bars.data, c[0], c[1]);
        var m = bt.slots[s].u[l].i.draw();
        if (m) for (var v = 0; v < m.length; v++) for (var h = m[v].data, g = 0; g < c[1] - c[0]; g++) {
          var b = h[g];
          b > bt.price.high && (bt.price.high = b), b < bt.price.low && (bt.price.low = b)
        }
      }
    } else bt.slots[s].i.update(bt.bars.data, c[0], c[1]);
    var y = bt.slots[0].h, x = 40 * (bt.price.high - bt.price.low) / (y - 40);
    x > (void 0 === Data.qouteFixed ? 1e-5 : Math.pow(.1, Data.qouteFixed - 2)) ? (bt.price.high += 3 * x / 4, bt.price.low -= x / 4) : (bt.price.high = 1.01 * bt.price.high, bt.price.low = bt.price.low / 1.01), bt.price.low < 0 && (bt.price.low = 0), bt.price.range = bt.price.high - bt.price.low, bt.flags.recompute = !1, bt.flags.redraw.base = !0, bt.flags.redraw.main = !0, bt.flags.redraw.underlay = !0, bt.flags.redraw.overlay = !0, bt.flags.redraw.inds = !0
  }

  function N(e, t) {
    e.clearRect(0, bt.slots[t].px - bt.px.pad, bt.w, bt.slots[t].h + 2 * bt.px.pad)
  }

  function P(e, t) {
    void 0 === t && (t = !1);
    var n, r;
    for (e.fillStyle = bt.colors.fill.bg, Pe(e, r = bt.w - bt.px.lbl.w - bt.px.lbl.tick, 0, bt.px.lbl.w + bt.px.lbl.tick, bt.h), Pe(e, 0, 0, bt.offset, bt.h), n = 0; n < bt.slots.length; n++) n < bt.slots.length - 1 ? Pe(e, 0, bt.slots[n].px + bt.slots[n].h + 2, r, bt.px.pad) : Pe(e, 0, bt.slots[n].px + bt.slots[n].h + 2, r, bt.px.lbl.h);
    for (Z(e), e.textAlign = "left", e.textBaseline = "middle", e.font = bt.font.labels, e.fillStyle = bt.colors.fill.label, n = 0; n < bt.slots.length; n++) bt.slots[n].hasOwnProperty("main") ? (e.strokeStyle = bt.colors.stroke.border, e.beginPath(), U(e, n), e.stroke()) : F(e, n), Q(e, n)
  }

  function O() {
    var e = bt.canvas.orders[0].getContext("2d");
    DEBUG && yt("Chart refreshing user orders.");
    try {
      D(e)
    } catch (e) {
      DEBUG && yt("Could not clear user orders"), DEBUG && console.error(e)
    }
  }

  function D(e) {
    void 0 === e && (e = bt.canvas.orders[0].getContext("2d"));
    for (var t = -1, n = 0; n < bt.slots.length; n++) if (bt.slots[n].hasOwnProperty("main")) {
      t = n;
      break
    }
    if (-1 != t) {
      try {
        e.clearRect(0, 0, bt.w, bt.h)
      } catch (e) {
        return
      }
      if (bt.settings.userorders) {
        var r = UserAccount.orders(), o = "", i = "", a = {}, s = [], l = [], c = [], u = [], n = 0, f = 0;
        for (o in r) if (r.hasOwnProperty(o) && o == RTBTC.exchange()) for (i in r[o]) r[o].hasOwnProperty(i) && ((a = r[o][i]).exch = o, a.hasOwnProperty("base") && a.base == RTBTC.base() && a.hasOwnProperty("quote") && a.quote == RTBTC.quote() && ((f = De(a.price, t)) < bt.slots[t].px || f > bt.slots[t].px + bt.slots[t].h || ("buy" == a.action ? (s.push(a), c.push(I(a))) : "sell" == a.action && (l.push(a), u.push(I(a))))));
        if (s.length + l.length > 0 && (e.textAlign = "left", e.font = bt.font.indicators), s.length > 0) {
          for (e.strokeStyle = bt.colors.stroke.bid, e.fillStyle = bt.colors.stroke.bid, e.textBaseline = "top", e.beginPath(), n = 0; n < s.length; n++) ne(e, t, s[n].price, bt.DASHDOT), (f = De(s[n].price, t) + 1) > bt.slots[t].px + bt.slots[t].h - 10 || e.fillText(c[n], 2, f);
          for (e.stroke(), e.font = bt.font.labels, e.textBaseline = "middle", n = 0; n < s.length; n++) e.fillStyle = bt.colors.fill.flags, Te(e, t, s[n].price, Ee(s[n].price))
        }
        if (l.length > 0) {
          for (e.strokeStyle = bt.colors.stroke.ask, e.fillStyle = bt.colors.stroke.ask, e.textBaseline = "top", e.font = bt.font.indicators, e.beginPath(), n = 0; n < l.length; n++) ne(e, t, l[n].price, bt.DASHDOT), f = De(l[n].price, t) + 1, e.fillText(u[n], 2, f);
          for (e.stroke(), e.font = bt.font.labels, e.textBaseline = "middle", n = 0; n < l.length; n++) e.fillStyle = bt.colors.fill.flags, Te(e, t, l[n].price, Ee(l[n].price))
        }
      }
    }
  }

  function I(e) {
    var t = "";
    return "buy" == e.action ? t += _("BUY") : "sell" == e.action ? t += _("SELL") : t += "UNKNOWN ACTION", t += " ", t += parseFloat(e.amount).toFixed(Exchanges.cur_prec(e.exch, e.base))
  }

  function M(e, t) {
    if (void 0 !== bt.bars.data && 0 != bt.bars.data.length) switch (bt.settings.bidask && L(e, t), bt.mode.display) {
      case bt.CANDLE:
      case bt.OHLC:
      case bt.HLC:
        H(e, t, bt.bars.data, bt.mode.display);
        break;
      case bt.LINE:
      case bt.MOUNTAIN:
        V(e, t, bt.bars.data, bt.mode.display == bt.MOUNTAIN, !0, !0)
    }
  }

  function L(e, t) {
    if (!isNaN(bt.price.bid) || !isNaN(bt.price.ask)) {
      var n = bt.price.bid, r = bt.price.ask;
      e.textBaseline = "middle", e.textAlign = "left", e.font = bt.font.labels, e.fillStyle = bt.colors.fill.flags, e.strokeStyle = bt.colors.stroke.ask, e.beginPath(), ne(e, t, r, bt.SOLID), e.stroke(), Te(e, t, r, Ee(r)), e.fillStyle = bt.colors.fill.flags, e.strokeStyle = bt.colors.stroke.bid, e.beginPath(), ne(e, t, n, bt.SOLID), e.stroke(), Te(e, t, n, Ee(n))
    }
  }

  function F(e, t) {
    var n, r, o = bt.slots[t].i.statics(), i = !0, a = bt.slots[t].i.bounds();
    if (e.lineWidth = 1, o.hasOwnProperty("minor")) {
      for (e.strokeStyle = bt.colors.stroke.minorlevel, e.fillStyle = bt.colors.fill.label, e.beginPath(), n = 0; n < o.minor.length; n++) (r = o.minor[n]) < a[0] || r > a[1] || (ne(e, t, r, bt.DASHDOT), xe(e, t, r, Ee(r)));
      for (e.stroke(), e.strokeStyle = bt.colors.stroke.border, e.beginPath(), n = 0; n < o.minor.length; n++) (r = o.minor[n]) < a[0] || r > a[1] || xe(e, t, r, Ee(r));
      e.stroke(), i = !1
    }
    if (o.hasOwnProperty("major")) {
      for (e.strokeStyle = bt.colors.stroke.majorlevel, e.fillStyle = bt.colors.fill.label, e.beginPath(), n = 0; n < o.major.length; n++) (r = o.major[n]) < a[0] || r > a[1] || (ne(e, t, r, bt.SOLID), xe(e, t, r, Ee(r)));
      for (e.stroke(), e.strokeStyle = bt.colors.stroke.border, e.beginPath(), n = 0; n < o.major.length; n++) (r = o.major[n]) < a[0] || r > a[1] || xe(e, t, r, Ee(r));
      e.stroke(), i = !1
    }
    i && (e.strokeStyle = bt.colors.stroke.border, e.beginPath(), U(e, t), e.stroke())
  }

  function B(e, t, n) {
    var r = null, o = bt.colors.stroke.i, i = null;
    return bt.slots[e].hasOwnProperty("main") && void 0 !== n && (i = bt.slots[e][n][t].i), null != i && (r = i.color()), null === r && (void 0 !== t ? r = o[t % o.length] : (r = o[bt.lastColorIndex % o.length], bt.lastColorIndex++)), r
  }

  function R(e, t, n, r) {
    var o = null;
    null != (o = bt.slots[e].hasOwnProperty("main") && void 0 !== n ? bt.slots[e][n][t].i : bt.slots[e].i) && o.color(r)
  }

  function j(e, t, n, r) {
    if (void 0 !== n) {
      var o, i = n.draw(), a = null, s = bt.slots[t].hasOwnProperty("main");
      for (o = 0; o < i.length; o++) switch (a = null, i[o].type) {
        case bt.CANDLE:
        case bt.OHLC:
        case bt.HLC:
          break;
        case bt.LINE:
          s && (a = n.color()), null == a && (a = B(t, o)), e.strokeStyle = a, e.beginPath(), V(e, t, i[o].data, !1, !1), e.stroke();
          break;
        case bt.MOUNTAIN:
          V(e, t, i[o].data, !0, !1);
          break;
        case bt.BANDS:
          break;
        case bt.PSAR:
          s && (a = n.color()), null == a && (a = B(t, o)), e.strokeStyle = a, e.beginPath(), W(e, t, i[o].data), e.stroke();
          break;
        case bt.HIST:
          z(e, t, i[o].data, !0);
          break;
        case bt.LBLHIST:
          z(e, t, i[o].data, !1)
      }
    }
  }

  function q(e) {
    var t, n, r, o, i, a = bt.canvas.lbl[0].getContext("2d"), s = ~~(1.25 * bt.px.lbl.font), l = Be(), c = Re(0),
      u = Re(e), f = (bt.colors.stroke.i, bt.w - bt.px.lbl.tick - bt.px.lbl.w - 2);
    l[0], l[1];
    c < 0 && (e += c), e < 0 && (e = -1), a.strokeStyle = bt.colors.fill.blankBG, a.lineWidth = 1.5, a.fillStyle = bt.colors.fill.slottext, a.textBaseline = "top", a.font = bt.font.indicators;
    var d = 3 + bt.offset, p = 3 + bt.offset;
    for (a.clearRect(0, 0, bt.w, bt.h), t = 0; t < bt.slots.length; t++) if (bt.slots[t].hasOwnProperty("main")) {
      if (o = ae(u), r = bt.slots[t].px + 1, a.strokeText(o, p, r, f), a.fillText(o, p, r, f), p = 6 + bt.offset + a.measureText(o).width, 1 == bt.colors.stroke.priceShow) {
        var h = bt.w - bt.px.lbl.tick - bt.px.lbl.w, g = bt.canvas.base[0].getContext("2d"),
          m = h - g.measureText(Ee(bt.price.high)).width - 3, p = h - g.measureText(Ee(bt.price.low)).width - 3;
        a.clearRect(m, r, f, 13), a.strokeText(Ee(bt.price.high), m, r, f), a.fillText(Ee(bt.price.high), m, r, f);
        var v = bt.slots[t].h - 14;
        a.strokeText(Ee(bt.price.low), p, v, f), a.fillText(Ee(bt.price.low), p, v, f)
      }
      for (n = 0; n < bt.slots[t].u.length; n++) if ((i = bt.slots[t].u[n].i).hasOwnProperty("label")) {
        if (r + s > bt.slots[t].px + bt.slots[t].h) break;
        1 != mobile ? (o = i.label(e), a.fillStyle = B(t, n, "u"), p + a.measureText(o).width + 2 > f && (r += s, p = 2), a.fillText(o, p, r, f), p += a.measureText(o).width + 2) : (o = i.label(e), a.fillStyle = B(t, n, "u"), a.fillText(o, d, r, f), r += s)
      }
      for (n = 0; n < bt.slots[t].o.length; n++) if ((i = bt.slots[t].o[n].i).hasOwnProperty("label")) {
        if ((r += s) + s > bt.slots[t].px + bt.slots[t].h) break;
        1 != mobile ? (o = i.label(e), a.fillStyle = B(t, n, "o"), p + a.measureText(o).width + 2 > f && (r += s, p = 2), a.fillText(o, p, 0, f), p += a.measureText(o).width + 2) : (o = i.label(e), a.fillStyle = B(t, n, "o"), a.fillText(o, d, r, f))
      }
      a.fillStyle = bt.colors.fill.flagtext
    } else {
      if (!(i = bt.slots[t].i).hasOwnProperty("label")) continue;
      o = i.label(e), r = bt.slots[t].px + 1, a.fillText(o, d, r, f)
    }
  }

  function U(e, t) {
    var n, r, o, i, a, s, l, c, u, f, d, p, h, g, m = [], v = 0, b = 0, y = [5, 2.5, 2];
    if (bt.slots[t].hasOwnProperty("main")) r = bt.price.high, o = bt.price.low; else {
      var x = bt.slots[t].i.bounds();
      o = x[0], r = x[1]
    }
    if (!((n = r - o) < 0 || (i = ~~(bt.slots[t].h / (4 * bt.px.lbl.font)), (a = n / i) < 0))) {
      for (c = Math.log(a) / Math.LN10, s = Math.pow(10, c > 0 ? ~~c : Math.floor(c)), .5, v = 0; v < y.length; v++) (h = Math.log(a / s / (y[v] / 10)) / Math.LN10) > 1 && m.push([s * y[v], Math.abs(.5 - h), h]);
      for (0 == m.length && m.push([s, 0, 0]), l = 1e8, v = 0; v < m.length; v++) m[v][1] < l && (l = m[v][1], a = m[v][0]);
      if (u = ~~(r / a) * a, f = bt.w - bt.px.lbl.tick - bt.px.lbl.w, d = De(u, t), p = De(o, t) - bt.px.lbl.font / 2 | 0, 1 != t) {
        if (bt.slots[t].hasOwnProperty("main") && 0 != bt.offset) {
          e.textAlign = "right";
          for (v = 0; v <= 6; v++) {
            var w = bt.price.low + v * (bt.price.high - bt.price.low) / 6, $ = De(w, t);
            e.textBaseline = 6 == v ? "top" : 0 == v ? "bottom" : "middle", e.fillText((100 * (bt.preClose ? w / bt.preClose - 1 : 0)).toFixed(2) + "%", bt.offset - 3, $, bt.offset - 3)
          }
          e.textAlign = "start"
        }
        for (v = 0, 2; u >= o && d < p && v < 100;) {
          for (d >= bt.slots[t].px + bt.px.lbl.font / 2 && (we(e, f, d, Ee(u)), bt.settings.grid && re(e, d, bt.DASHED), b++), g = 0; g < 2; g++) $e(e, t, u - (g + 1) * a / 3);
          d = De(u -= a, t), v++
        }
        0 == b && we(e, f, d = De(u = o + n / 2, t), Ee(u))
      } else we(e, f, $ = De(r, t), r.toFixed(2))
    }
  }

  function H(e, t, n, r) {
    var o, i, a, s, l = Be(), c = null, u = [], f = [];
    switch (o = n.length - 1 > l[1] ? n[l[1] + 1] : n[l[1]], r) {
      case bt.CANDLE:
        c = G;
        break;
      case bt.OHLC:
        c = Y;
        break;
      case bt.HLC:
        c = X;
        break;
      default:
        return
    }
    var d, p, h = 0, g = 1e5;
    for (i = l[1]; i >= l[0]; i--) n[i][4] >= n[i][1] ? n[i][1] == n[i][4] && n[i + 1] && n[i + 1][4] > n[i][1] ? f.push([i, je(i)]) : u.push([i, je(i)]) : f.push([i, je(i)]), o = n[i], n[i][2] >= h && (h = n[i][2], d = i), n[i][3] <= g && (g = n[i][3], p = i);
    for (e.strokeStyle = bt.colors.stroke.down, e.fillStyle = bt.colors.fill.down, e.beginPath(), i = 0; i < f.length; i++) (a = n[f[i][0]].slice())[5] /= BTC_INT, c(e, t, f[i][1], a, !0);
    for (e.stroke(), e.strokeStyle = bt.colors.stroke.up, e.fillStyle = bt.colors.fill.up, e.beginPath(), i = 0; i < u.length; i++) (a = deepCopy(n[u[i][0]]))[5] /= BTC_INT, c(e, t, u[i][1], a, !1);
    if (e.stroke(), s = o[4], n.length >= 2 && n[1][4] > n[0][4] && (e.strokeStyle = bt.colors.stroke.down), e.fillStyle = bt.colors.fill.flags, e.textBaseline = "middle", e.font = bt.font.labels, Te(e, t, s, Ee(s)), r == bt.CANDLE) {
      e.textBaseline = "middle", e.fillStyle = bt.colors.stroke.arrow;
      var m = De(h, t), v = Ie(je(d)), b = De(g, t), y = Ie(je(p)), x = e.measureText(Ee(h)).width + 19,
        w = e.measureText(Ee(g)).width + 21;
      v - x > 0 ? (Ve(e, 0, 0, v - 15, m, v - 2, m), e.fillText(Ee(h), v - x, m)) : (Ve(e, 0, 0, v + 15, m, v + 2, m), e.fillText(Ee(h), v + 19, m)), y - w > 0 ? (Ve(e, 0, 0, y - 15, b, y - 2, b), e.fillText(Ee(g), y - x, b)) : (Ve(e, 0, 0, y + 15, b, y + 2, b), e.fillText(Ee(g), y + 19, b))
    }
  }

  function V(e, t, n, r, o, i) {
    if (void 0 !== n && n.hasOwnProperty("length") && n.length > 0) {
      var a, s, l, c, u, f, d = Be();
      if (!r) {
        if (c = Ie(je(d[1])), u = o ? De(n[d[1]][4], t) : De(n[d[1] - d[0]], t), o) {
          var p = [], h = {};
          for ((l = []).push(d[1]), c = Ie(je(d[1])), u = De(n[d[1]][4], t), h[d[1]] = [+c, +u], a = d[1] - 1; a >= d[0]; a--) c = Ie(je(a)), u = De(n[a][4], t), n[a + 1][4] <= n[a][4] ? l.push(a) : p.push(a), h[a] = [+c, +u];
          for (f = n.length + 2, e.lineWidth = 1, e.strokeStyle = bt.colors.stroke.fenshi || bt.colors.stroke.down, e.beginPath(), s = 0; s < p.length; s++) (a = p[s]) < f - 1 && h.hasOwnProperty(a + 1) && Ae(e, h[a + 1][0], h[a + 1][1]), Ne(e, h[a][0], h[a][1]), f = a;
          for (e.stroke(), e.strokeStyle = bt.colors.stroke.fenshi || bt.colors.stroke.up, e.beginPath(), f = n.length + 2, a = 0; a < l.length; a++) l[a] < f - 1 && h.hasOwnProperty(l[a] + 1) && Ae(e, h[l[a] + 1][0], h[l[a] + 1][1]), Ne(e, h[l[a]][0], h[l[a]][1]), f = l[a];
          e.stroke(), n.length > 1 ? e.strokeStyle = n[1][4] <= n[0][4] ? bt.colors.stroke.up : bt.colors.stroke.down : e.strokeStyle = l, f = n[0][4]
        } else {
          var g = !1;
          for (Ae(e, c, u), a = d[1] - d[0]; a >= 0; a--) c = Ie(je(a + d[0])), (u = De(n[a], t)) >= bt.slots[t].px && u <= bt.slots[t].px + bt.slots[t].h ? g ? (g = !1, e.beginPath(), Ae(e, c, u)) : Ne(e, c, u) : g || (e.stroke(), g = !0);
          f = n[0], e.stroke()
        }
        e.lineWidth = 1, e.fillStyle = bt.colors.fill.flags, e.textBaseline = "middle", e.font = bt.font.labels, i && Te(e, t, f, Ee(f))
      }
    }
  }

  function z(e, t, n, r) {
    if (void 0 !== n && n.hasOwnProperty("length") && n.length > 0) {
      var o, i, a = Be(), s = [], l = [];
      if (r) for (o = 0; o <= a[1] - a[0]; o++) n[o] > 0 ? s.push([o, je(o + a[0])]) : l.push([o, je(o + a[0])]); else for (o = 0; o <= a[1] - a[0]; o++) n && void 0 !== n[o] && (n[o][1] ? s.push([o, je(o + a[0])]) : l.push([o, je(o + a[0])]));
      for (e.strokeStyle = bt.colors.stroke.down, e.fillStyle = bt.colors.fill.down, e.beginPath(), o = 0; o < l.length; o++) K(e, t, l[o][1], r ? n[l[o][0]] : n[l[o][0]][0], !1);
      for (e.stroke(), e.strokeStyle = bt.colors.stroke.up, e.fillStyle = bt.colors.fill.up, e.beginPath(), o = 0; o < s.length; o++) K(e, t, s[o][1], r ? n[s[o][0]] : n[s[o][0]][0]);
      e.stroke(), r ? (i = n[0]) < 0 && (e.strokeStyle = bt.colors.stroke.down) : (i = n[0][0], n[0][1] || (e.strokeStyle = bt.colors.stroke.down)), e.lineWidth = 1, e.fillStyle = bt.colors.fill.flags, e.textBaseline = "middle", e.font = bt.font.labels, Te(e, t, i, Ee(i)), e.stroke()
    }
  }

  function W(e, t, n) {
    if (n.hasOwnProperty("length") && n.length > 0) {
      var r, o, i, a = Be(), s = bt.slots[t].px + 3, l = s + bt.slots[t].h - 3;
      for (r = 0; r <= a[1] - a[0]; r++) o = Ie(je(r + a[0])), (i = De(n[r], t)) < s || i > l || Oe(e, o - 1, i - 1, 2, 2)
    }
  }

  function G(e, t, n, r, o) {
    var i = De(r[1], t), a = De(r[2], t), s = De(r[3], t), l = De(r[4], t), c = Math.min(i, l), u = Ie(n);
    o ? 1 == mobile && Pe(e, u - bt.px.bar.dx + 1, c, bt.px.bar.width - 2, Math.abs(l - i)) : bt.colors.stroke.fillUp && Pe(e, u - bt.px.bar.dx + 1, Math.min(i, l), bt.px.bar.width - 2, Math.abs(i - l)), Oe(e, u - bt.px.bar.dx, Math.min(i, l), bt.px.bar.width - 1, Math.abs(i - l)), a < Math.min(i, l) && (Ae(e, u, a), Ne(e, u, Math.min(i, l) - 1)), s > Math.max(i, l) && (Ae(e, u, s), Ne(e, u, Math.max(i, l))), o && Pe(e, u - bt.px.bar.dx, c, bt.px.bar.width - 1, Math.abs(l - i))
  }

  function Y(e, t, n, r) {
    var o = De(r[1], t), i = De(r[2], t), a = De(r[3], t), s = De(r[4], t), l = Ie(n);
    Ae(e, l - bt.px.bar.dx, o), Ne(e, l, o), Ae(e, l, s), e.lineTo(.6 + (l + bt.px.bar.dx | 0), .5 + (0 | s)), Ae(e, l, i), Ne(e, l, a)
  }

  function X(e, t, n, r) {
    var o = De(r[2], t), i = De(r[3], t), a = De(r[4], t), s = Ie(n);
    Ae(e, s, a), e.lineTo(.6 + (s + bt.px.bar.dx | 0), .5 + (0 | a)), Ae(e, s, o), Ne(e, s, i)
  }

  function K(e, t, n, r, o) {
    var i = De(r, t), a = Ie(n), s = De(0, t), l = Math.abs(s - i), c = Math.min(i, s);
    i < bt.slots[t].px ? i = bt.slots[t].px : i > bt.slots[t].px + bt.slots[t].h && (i = bt.slots[t].px + bt.slots[t].h), Oe(e, a - bt.px.bar.dx, c, bt.px.bar.width - 1 <= 0 ? 0 : bt.px.bar.width - 1, l), !1 === o ? Pe(e, a - bt.px.bar.dx + 1, c + 1, bt.px.bar.width - 2 <= 0 ? 0 : bt.px.bar.width - 2, l) : bt.colors.stroke.fillUp && Pe(e, a - bt.px.bar.dx + 1, c + 1, bt.px.bar.width - 2 <= 0 ? 0 : bt.px.bar.width - 2, l)
  }

  function Q(e, t) {
    e.lineWidth = mobile ? 2 : 1, e.strokeStyle = bt.colors.stroke.border;
    var n = bt.offset - 1, r = bt.slots[t].px - 1, o = bt.w - bt.px.lbl.w - bt.offset - bt.px.lbl.tick,
      i = bt.slots[t].h + 2;
    Oe(e, n <= 0 ? 0 : n, r <= 0 ? 0 : r, o - (n <= 0 ? -n : 0), i - (r <= 0 ? -r : 0))
  }

  function J(e) {
    for (var t = 1; t <= 5; t++) re(e, De(t * (bt.price.high - bt.price.low) / 6 + bt.price.low, 0), bt.DOTTED)
  }

  function Z(e) {
    bt.w;
    var t, n, r, o, i, a, s, l, c, u = lt(), f = Settings.localTime, d = [];
    if (ge(e, !0), e.strokeStyle = bt.colors.stroke.grid, e.lineWidth = 1, a = e.measureText("00:00").width, s = e.measureText("12/30").width, e.measureText("Jan").width, l = 1.25 * a, (c = 2 * Math.ceil(l / (bt.px.bar.width + bt.px.bar.spacing))) <= 0 && (c = 1), e.beginPath(), u < 14400) {
      for (n = 0; ; n++) if (!((o = Re(n)) < 0)) {
        if (o >= bt.bars.data.length) break;
        if (i = bt.bars.data[o][0], he(i, f)) {
          if (d.push(n), 1 == de(i, f) ? 1 == ce(i, f) ? me(e, le(i, f), n) : me(e, ue(i, f), n) : me(e, fe(i, !1, f), n), bt.settings.grid) for (r = 0; r < bt.slots.length; r++) ;
          if (n > bt.bars.visible) break;
          n += c - 1
        }
      }
      if (0 == d.length && d.push(je(bt.bars.data.length - 1)), e.stroke(), e.beginPath(), ge(e, !1), e.strokeStyle = bt.colors.stroke.grid, bt.bars.fixTime) {
        var p = new Date,
          h = new Date(p.getFullYear() + "/" + (p.getMonth() + 1) + "/" + p.getDate() + " " + bt.bars.startTime1),
          g = new Date(p.getFullYear() + "/" + (p.getMonth() + 1) + "/" + p.getDate() + " " + bt.bars.endTime1),
          m = new Date(p.getFullYear() + "/" + (p.getMonth() + 1) + "/" + p.getDate() + " " + bt.bars.startTime2),
          v = new Date(p.getFullYear() + "/" + (p.getMonth() + 1) + "/" + p.getDate() + " " + bt.bars.endTime2),
          b = g.getTime() - h.getTime();
        b /= 6e4;
        var y = g.getTime() - h.getTime() + v.getTime() - m.getTime();
        y /= 6e4;
        var x = Math.ceil(y / bt.w * 17);
        Math.ceil(y / bt.w * bt.offset);
        for (me(e, pe(i = v.getTime(), !1, f), x + Math.ceil(y / bt.w * 2)), me(e, pe(i = (v.getTime() + m.getTime()) / 2, !1, f), 60), me(e, pe(i = g.getTime(), !1, f), 120), me(e, pe(i = (g.getTime() + h.getTime()) / 2, !1, f), 180), me(e, pe(i = h.getTime(), !1, f), 240 - x), bt.mode.display != bt.CANDLE && J(e), r = 0; r < bt.slots.length; r++) ee(e, r, 0, bt.DOTTED);
        for (r = 0; r < bt.slots.length; r++) ee(e, r, y / 4, bt.DOTTED);
        for (r = 0; r < bt.slots.length; r++) ee(e, r, b + 1, bt.DOTTED);
        for (r = 0; r < bt.slots.length; r++) ee(e, r, y + 1, bt.DOTTED);
        for (r = 0; r < bt.slots.length; r++) ee(e, r, 3 * y / 4 + 1, bt.DOTTED)
      } else for (t = d.length - 1; t >= 0; t--) for (n = d[t] - c; ; n -= c) if (!(n > bt.bars.visible)) {
        if (0 == t && n < 0) break;
        if ((o = Re(n)) < 0) break;
        if (!(o >= bt.bars.data.length)) {
          if (bt.settings.grid) for (r = 0; r < bt.slots.length; r++) ;
          if (n <= d[t - 1]) break;
          if (t > 0 && Ie(n) + a / 2 >= Ie(d[t - 1]) - s / 2) break;
          me(e, pe(i = bt.bars.data[o][0], !1, f), n)
        }
      }
      e.stroke()
    } else if (u < 86400) {
      var w = -1, $ = -1;
      for (n = 0; ; n++) if (!((o = Re(n)) < 0)) {
        if (o >= bt.bars.data.length - 1) break;
        if (i = bt.bars.data[o][0], $ = de(i, f), w = de(bt.bars.data[o + 1][0], f), u > 86400 && ce(i, f) != ce(bt.bars.data[o + 1][0], f) || w > 1 && 1 == $) {
          if (d.push(n), 1 == ce(i, f) ? me(e, le(i, f), n) : me(e, ue(i, f), n), bt.settings.grid) for (r = 0; r < bt.slots.length; r++) ;
          if (d[d.length - 1] > bt.bars.visible) break;
          n += c - 1
        }
      }
      for (d.push(je(bt.bars.data.length - 1)), e.stroke(), e.beginPath(), ge(e, !1), e.strokeStyle = bt.colors.stroke.grid, t = d.length - 1; t >= 0; t--) for (n = d[t] - c; ; n -= c) if (!(n > bt.bars.visible)) {
        if (0 == t && n < 0) break;
        if ((o = Re(n)) < 0) break;
        if (!(o >= bt.bars.data.length)) {
          if (bt.settings.grid) for (r = 0; r < bt.slots.length; r++) ;
          if (n <= d[t - 1]) break;
          if (t > 0 && Ie(n) + a / 2 >= Ie(d[t - 1]) - s / 2) break;
          me(e, he(i = bt.bars.data[o][0], f) ? u < 86400 ? de(i, f) : fe(i, !1, f) : pe(i, !1, f), n)
        }
      }
      e.stroke()
    } else if (u < 2592e3) {
      var w = -1, $ = -1;
      for (n = 0; ; n++) if (!((o = Re(n)) < 0)) {
        if (o >= bt.bars.data.length - 1) break;
        if (i = bt.bars.data[o][0], $ = de(i, f), w = de(bt.bars.data[o + 1][0], f), u > 86400 && ce(i, f) != ce(bt.bars.data[o + 1][0], f) || w > 1 && 1 == $) {
          if (d.push(n), 1 == ce(i, f) ? me(e, le(i, f), n) : me(e, ue(i, f), n), bt.settings.grid) for (r = 0; r < bt.slots.length; r++) ;
          if (d[d.length - 1] > bt.bars.visible) break;
          n += c - 1
        }
      }
      for (d.push(je(bt.bars.data.length - 1)), e.stroke(), e.beginPath(), ge(e, !1), e.strokeStyle = bt.colors.stroke.grid, t = d.length - 1; t >= 0; t--) for (n = d[t] - c; ; n -= c) if (!(n > bt.bars.visible)) {
        if (0 == t && n < 0) break;
        if ((o = Re(n)) < 0) break;
        if (!(o >= bt.bars.data.length)) {
          if (bt.settings.grid) for (r = 0; r < bt.slots.length; r++) ;
          if (n <= d[t - 1]) break;
          if (t > 0 && Ie(n) + a / 2 >= Ie(d[t - 1]) - s / 2) break;
          i = bt.bars.data[o][0], me(e, u < 86400 ? de(i, f) : fe(i, !1, f), n)
        }
      }
      e.stroke()
    }
  }

  function ee(e, t, n, r) {
    te(e, t, Ie(n), r)
  }

  function te(e, t, n, r) {
    var o, i = bt.slots[t].px - 1, a = bt.slots[t].px + bt.slots[t].h;
    if (DEBUG && assert(a > i, "Invalid bounds on vertical line drawing. y0:" + i + ", y1:" + a), a > i && !(a < 0 || n < 0 || n > bt.w || n > 25e3)) switch (Ae(e, n, i), o = i, r) {
      case bt.DOTTED:
        for (; o < a;) Ne(e, n, ++o), Ae(e, n, ++o);
        break;
      case bt.DASHED:
        for (; o < a;) Ne(e, n, o = (o += 6) > a ? a : o), Ae(e, n, o += 2);
        break;
      case bt.DASHDOT:
        for (; o < a && (o += 7, o = o > a ? a : o, Ne(e, n, o), !((o += 4) >= a));) Ae(e, n, o), Ne(e, n, o = (o += 2) > a ? a : o), Ae(e, n, o += 4);
        break;
      case bt.SOLID:
      default:
        Ne(e, n, a)
    }
  }

  function ne(e, t, n, r) {
    var o = De(n, t);
    o < bt.slots[t].px || o > bt.slots[t].px + bt.slots[t].h || re(e, o, r)
  }

  function re(e, t, n) {
    var r, o = bt.w - bt.px.lbl.tick - bt.px.lbl.w - 1, i = bt.offset;
    if (DEBUG && assert(o > i, "Invalid bounds on line drawing. x0: " + o + ", x1: " + i), o > i) switch (Ae(e, o, t), r = o, n) {
      case bt.DOTTED:
        for (; r > i + 1;) Ne(e, --r, t), Ae(e, --r, t);
        break;
      case bt.DASHED:
        for (; r > i;) Ne(e, r = (r -= 6) < i ? i : r, t), Ae(e, r -= 2, t);
        break;
      case bt.DASHDOT:
        for (; r > i && (r -= 7, r = r < i ? i : r, Ne(e, r, t), !((r -= 4) <= i));) Ae(e, r, t), Ne(e, r = (r -= 2) < i ? i : r, t), Ae(e, r -= 4, t);
        break;
      case bt.SOLID:
      default:
        Ne(e, i, t)
    }
  }

  function oe(e, t, n) {
    if (bt.settings.crosshairs && !(e < bt.offset)) {
      var r = bt.canvas.i[0].getContext("2d"), o = _e(e), i = qe(e, t);
      if (!(null == i || i < 0)) {
        var a, s = Fe(i, t), l = Re(o), c = Ie(o);
        if (ie(r), r.textBaseline = "middle", r.textAlign = "left", r.font = bt.font.labels, r.lineWidth = 1, r.fillStyle = bt.colors.fill.crosshair, r.strokeStyle = bt.colors.stroke.crosshair, r.beginPath(), bt.showMainCrosshairs) for (bt.crossHairH && re(r, t, bt.SOLID), a = 0; a < bt.slots.length; a++) te(r, a, c, bt.SOLID);
        if (r.stroke(), r.fillStyle = bt.colors.fill.crosshair, bt.crossHairH && (n && (s = bt.bars.data[l] && bt.bars.data[l][4] || 0), Se(r, i, t, Ee(s))), mobile && bt.updateXFK && bt.updateXFK(!0), l >= 0 && l < bt.bars.data.length) {
          ge(r, !0);
          var u = se(bt.bars.data[l][0], !1, Settings.localTime), f = r.measureText(u).width, d = r.fillStyle,
            p = r.strokeStyle;
          r.fillStyle = bt.colors.fill.crosshair, r.strokeStyle = bt.colors.stroke.crosshair, ye(r, o, 0 | f), r.fillStyle = d, r.strokeStyle = p, ve(r, u, be(Ie(o), f + 10)), q(o)
        }
        bt.px.crosshairs.x = c, bt.px.crosshairs.y = t, bt.mouse.bar = o
      }
    }
  }

  function ie(e) {
    if (bt.settings.crosshairs) {
      var t = e || bt.canvas.i[0].getContext("2d");
      t.clearRect(0, bt.px.crosshairs.y - 30, bt.w, 60), t.clearRect(bt.px.crosshairs.x - 30, 0, 60, bt.h), t.clearRect(0, bt.h - bt.px.lbl.h - 4, bt.w, bt.px.lbl.h + 4), bt.mouse.bar = null, bt.canvas.lbl[0].getContext("2d").clearRect(0, 0, bt.w, bt.h)
    }
  }

  function ae(e) {
    if (bt.curIndex = e, c(e), e < 0 || e >= bt.bars.data.length) return "";
    if (0 != qe(bt.mouse.x, bt.mouse.y) && 1 != qe(bt.mouse.x, bt.mouse.y) && 2 != qe(bt.mouse.x, bt.mouse.y) && 3 != qe(bt.mouse.x, bt.mouse.y) || (bt.curIndex = e, mobile && bt.updateXFK && bt.updateXFK(!1)), void 0 === bt.bars.data[e]) return "";
    var t = bt.bars.data[e][0], n = bt.bars.data[e][1], r = bt.bars.data[e][2], o = bt.bars.data[e][3],
      i = bt.bars.data[e][4], a = (bt.bars.data[e][5], []), s = bt.bars.data[e + 1];
    return a = [se(t, !1, Settings.localTime), "  ", " O:", Ee(n), " H:", Ee(r), " L:", Ee(o), " C:", Ee(i), " CHANGE:", (s ? 100 * (i - s[4]) / s[4] : 0).toFixed(2) + "%", " AMPLITUDE:", (s ? 100 * (r - o) / s[4] : 0).toFixed(2) + "%"], "cn" == localStorage.lang && (a = [se(t, !1, Settings.localTime), "  ", " 开:", Ee(n), " 高:", Ee(r), " 低:", Ee(o), " 收:", Ee(i), " 涨幅:", (s ? 100 * (i - s[4]) / s[4] : 0).toFixed(2) + "%", " 振幅:", (s ? 100 * (r - o) / s[4] : 0).toFixed(2) + "%"]), mobile ? "" : a.join("")
  }

  function se(e, t, n) {
    var r = new Date(e), o = "";
    return !0 === n ? (o = r.getFullYear() + "-", o += r.getMonth() + 1 < 10 ? "0" : "", o += r.getMonth() + 1 + "-", o += r.getDate() < 10 ? "0" : "", o += r.getDate() + " ", o += r.getHours() < 10 ? "0" : "", o += r.getHours() + ":", o += r.getMinutes() < 10 ? "0" : "", o += r.getMinutes(), t && (o += (r.getSeconds(), "0"), o += r.getSeconds())) : (o = r.getUTCFullYear() + "-", o += r.getUTCMonth() + 1 < 10 ? "0" : "", o += r.getUTCMonth() + 1 + "-", o += r.getUTCDate() < 10 ? "0" : "", o += r.getUTCDate() + " ", o += r.getUTCHours() < 10 ? "0" : "", o += r.getUTCHours() + ":", o += r.getUTCMinutes() < 10 ? "0" : "", o += r.getUTCMinutes(), t && (o += (r.getUTCSeconds(), "0"), o += r.getUTCSeconds())), o
  }

  function le(e, t) {
    var n = new Date(e);
    return !0 === t ? n.getFullYear() : n.getUTCFullYear()
  }

  function ce(e, t) {
    var n = new Date(e);
    return !0 === t ? n.getMonth() + 1 : n.getUTCMonth() + 1
  }

  function ue(e, t) {
    var n = new Date(e);
    return !0 === t ? kt[n.getMonth()] : kt[n.getUTCMonth()]
  }

  function fe(e, t, n) {
    var r = new Date(e), o = "";
    return !0 === n ? (t && (o = r.getFullYear() + "/"), o += r.getMonth() + 1 + "/", o += r.getDate()) : (t && (o = r.getUTCFullYear() + "/"), o += r.getUTCMonth() + 1 + "/", o += r.getUTCDate()), o
  }

  function de(e, t) {
    var n = new Date(e), r = "";
    return r += !0 === t ? n.getDate() : n.getUTCDate()
  }

  function pe(e, t, n) {
    var r = new Date(e), o = "";
    return !0 === n ? (o = r.getHours() + ":", o += r.getMinutes() < 10 ? "0" : "", o += r.getMinutes(), t && (o += ":" + (r.getSeconds() < 10 ? "0" : ""), o += r.getSeconds())) : (o = r.getUTCHours() + ":", o += r.getUTCMinutes() < 10 ? "0" : "", o += r.getUTCMinutes(), t && (o += ":" + (r.getUTCSeconds() < 10 ? "0" : ""), o += r.getUTCSeconds())), o
  }

  function he(e, t) {
    if (!0 === t) {
      var n = new Date(e);
      return 0 == n.getHours() && 0 == n.getMinutes() && 0 == n.getSeconds()
    }
    return e % 86400 == 0
  }

  function ge(e, t) {
    e.textBaseline = "bottom", e.textAlign = "center";
    var n = bt.font.size + "px/" + bt.font.lineHeight + "em " + bt.font.face;
    t ? (n += " bold", e.fillStyle = bt.colors.stroke.crosshair) : e.fillStyle = bt.colors.fill.label, e.font = n
  }

  function me(e, t, n) {
    var r = bt.h - (bt.px.lbl.h - bt.px.lbl.font) / 2, o = Ie(n);
    e.fillText(t, o, r)
  }

  function ve(e, t, n) {
    var r = bt.h - (bt.px.lbl.h - bt.px.lbl.font) / 2;
    e.fillText(t, n, r)
  }

  function be(e, t) {
    return e > bt.w - bt.px.lbl.w - bt.px.lbl.tick - 1 - t / 2 ? bt.w - bt.px.lbl.w - bt.px.lbl.tick - 1 - t / 2 : e < t / 2 ? t / 2 : e
  }

  function ye(e, t, n) {
    var r = Ie(t), o = 0 | be(r, n + 10), i = n / 2 + 5 | 0, a = be(r, 7);
    e.beginPath(), Ae(e, o - i, bt.h - 1), Ne(e, o + i, bt.h - 1), Ne(e, o + i, bt.h - bt.px.lbl.h), Ne(e, a + 3.5, bt.h - bt.px.lbl.h), Ne(e, a, bt.h - bt.px.lbl.h - 4), Ne(e, a - 3.5, bt.h - bt.px.lbl.h), Ne(e, o - i, bt.h - bt.px.lbl.h), Ne(e, o - i, bt.h - 1), e.fill(), e.stroke()
  }

  function xe(e, t, n, r) {
    var o = De(n, t);
    we(e, bt.w - bt.px.lbl.tick - bt.px.lbl.w, o, r)
  }

  function we(e, t, n, r) {
    Ae(e, t, n), Ne(e, t + bt.px.lbl.tick, n), e.fillText(r, t + bt.px.lbl.tick + 2, n, bt.px.lbl.w)
  }

  function $e(e, t, n) {
    var r = De(n, t);
    ke(e, bt.w - bt.px.lbl.tick - bt.px.lbl.w, r)
  }

  function ke(e, t, n) {
    Ae(e, t, n), Ne(e, t + bt.px.lbl.halftick, n)
  }

  function Te(e, t, n, r) {
    if (1 != bt.colors.stroke.opacity) {
      var o, i = De(n, t), a = bt.w - bt.px.lbl.tick - bt.px.lbl.w - 3;
      i < (o = bt.slots[t].px + 1 + Math.ceil(bt.px.lbl.font / 2)) ? i = o : i > (o = bt.slots[t].px + bt.slots[t].h - Math.ceil(bt.px.lbl.font / 2)) && (i = o), Ce(e, a, i, r)
    }
  }

  function Se(e, t, n, r) {
    var o, i = bt.w - bt.px.lbl.tick - bt.px.lbl.w - 3;
    n < (o = bt.slots[t].px + 1 + Math.ceil(bt.px.lbl.font / 2)) ? n = o : n > (o = bt.slots[t].px + bt.slots[t].h - Math.ceil(bt.px.lbl.font / 2)) && (n = o), Ce(e, i, n, r)
  }

  function Ce(e, t, n, r) {
    var o, i, a = bt.px.lbl.font / 2;
    e.beginPath(), Ae(e, t, n), Ne(e, o = t + ~~a, i = ~~(n - 1 - a)), o = t + bt.px.lbl.w + bt.px.lbl.tick + 1, e.lineTo(.6 + (0 | o), .5 + (0 | i)), Ae(e, o, i), Ne(e, o, i = Math.ceil(n + 1 + a)), Ne(e, o = t + ~~a, i), Ne(e, t, n), e.fill(), e.stroke(), e.fillStyle = bt.colors.fill.flagtext, e.fillText(r, t + bt.px.lbl.tick + 5, n + 1)
  }

  function Ee(e) {
    return e.toFixed(Data.qouteFixed || 8)
  }

  function Ae(e, t, n) {
    e.moveTo(.5 + (0 | t), .5 + (0 | n))
  }

  function Ne(e, t, n) {
    e.lineTo(.5 + (0 | t), .5 + (0 | n))
  }

  function Pe(e, t, n, r, o) {
    e.fillRect(0 | t, 0 | n, 0 | r, 0 | o)
  }

  function Oe(e, t, n, r, o) {
    e.strokeRect(.5 + (0 | t), .5 + (0 | n), 0 | r, 0 | o)
  }

  function De(e, t) {
    var n, r = null;
    if (bt.slots[t].hasOwnProperty("main")) {
      if (r = [bt.price.low, bt.price.high], bt.settings.logscale) return bt.log.m * log10(e) + bt.log.b;
      n = bt.price.range
    } else r = bt.slots[t].i.bounds(), n = Math.max(r[1] - r[0], 1e-8);
    var o = (r[1] - e) / n;
    return bt.slots[t].px + Math.ceil(bt.slots[t].h * o)
  }

  function Ie(e) {
    var t = Be();
    return bt.bars.visible > bt.bars.data.length ? Me(e) - Me(t[1]) + (bt.px.bar.width + 1) / 2 : Me(e)
  }

  function Me(e) {
    return bt.w - bt.px.lbl.w - bt.px.lbl.tick - 1 - (e + 1) * (bt.px.bar.spacing + bt.px.bar.width) + (bt.px.bar.width + 1) / 2 | 0
  }

  function _e(e) {
    var t = Be();
    return bt.bars.visible > bt.bars.data.length ? t[1] - (e - (bt.px.bar.spacing + bt.px.bar.width) / 2) / (bt.px.bar.spacing + bt.px.bar.width) | 0 : Le(e)
  }

  function Le(e) {
    return (bt.w - bt.px.lbl.w - bt.px.lbl.tick - 1 - bt.px.bar.spacing / 2 - e) / (bt.px.bar.spacing + bt.px.bar.width) | 0
  }

  function Fe(e, t) {
    var n = null;
    if (bt.slots[e].hasOwnProperty("main")) {
      if (bt.settings.logscale) return Math.pow(10, (t - bt.log.b) / bt.log.m);
      n = [bt.price.low, bt.price.high]
    } else n = bt.slots[e].i.bounds();
    var r = Math.max(n[1] - n[0], 1e-8), o = (t - bt.slots[e].px) / bt.slots[e].h;
    return n[1] - o * r
  }

  function Be() {
    return void 0 === bt.bars.data || 0 == bt.bars.data.length ? [0, -1] : [Math.max(0, Re(0)), Math.min(bt.bars.data.length - 1, Re(bt.bars.visible))]
  }

  function Re(e) {
    return e + bt.bars.offset - bt.bars.blank
  }

  function je(e) {
    return e - bt.bars.offset + bt.bars.blank
  }

  function qe(e, t) {
    if (e >= bt.w - bt.px.lbl.w - bt.px.lbl.tick - 1) return null;
    if (e < bt.offset) return null;
    if (t >= bt.h - bt.px.lbl.h - 1) return null;
    if (t <= bt.slots[0].px + bt.slots[0].h) return 0;
    for (var n = 1; n < bt.slots.length; n++) {
      if (t < bt.slots[n].px) return -n;
      if (t <= bt.slots[n].px + bt.slots[n].h) return n
    }
  }

  function Ue(e, t) {
    return !(t < bt.h - bt.px.lbl.h) && (!(e > bt.w - bt.px.lbl.w) && !(e < bt.offset))
  }

  function He() {
    bt.settings.crosshairs && window.reqAnimFrame(function () {
      ie()
    })
  }

  function Ve(e, t, n, r, o, i, a) {
    var s = new Array(r, o), l = new Array(i, a);
    e.fillStyle = bt.colors.stroke.arrow, e.strokeStyle = bt.colors.stroke.arrow, e.beginPath(), e.translate(t, n, 0), e.moveTo(s[0], s[1]), e.lineTo(l[0], l[1]), e.fill(), e.stroke(), e.save(), e.translate(l[0], l[1]);
    var c = (l[0] - s[0]) / (l[1] - s[1]);
    c = Math.atan(c), l[1] - s[1] >= 0 ? e.rotate(-c) : e.rotate(Math.PI - c), e.lineTo(-5, -10), e.lineTo(0, -5), e.lineTo(5, -10), e.lineTo(0, 0), e.fill(), e.restore(), e.closePath()
  }

  function ze() {
    bt.canvas.i.on({
      mousedown: function (e) {
        if (!bt.stopEvent && !mobile) {
          bt.mouse.origOffset = bt.bars.offset, bt.mouse.origOffsetBlank = bt.bars.blank, bt.mouse.origSpacing = bt.px.bar.spacing, Ge(e), bt.mouse.sx = bt.mouse.x, bt.mouse.sy = bt.mouse.y, wt = e.offsetX, $t = e.offsetY;
          var t = qe(bt.mouse.x, bt.mouse.y);
          if (null == t ? (Ue(bt.mouse.x, bt.mouse.y) ? (bt.canvas.i.css("cursor", "e-resize"), bt.mouse.zoom = !0, bt.mouse.w0 = +bt.px.bar.width) : bt.canvas.i.css("cursor", "default"), He()) : t < 0 ? (bt.canvas.i.css("cursor", "n-resize"), bt.mouse.resize = !0, bt.mouse.re_slot = -t, bt.mouse.re_slots.px0 = bt.slots[bt.mouse.re_slot - 1].px, bt.mouse.re_slots.h0 = bt.slots[bt.mouse.re_slot - 1].h, bt.mouse.re_slots.px1 = bt.slots[bt.mouse.re_slot].px, bt.mouse.re_slots.h1 = bt.slots[bt.mouse.re_slot].h, He()) : (bt.mouse.down = !0, He(), bt.settings.crosshairs ? (bt.canvas.i.css("cursor", "none"), window.reqAnimFrame(function () {
              oe(bt.mouse.x, bt.mouse.y)
            })) : bt.canvas.i.css("cursor", "crosshair")), bt.settings.icontrols && t != bt.mouse.slot) {
            null != t && t >= 0 && $(".control-" + t, bt.element).show();
            var n, r;
            for (n = 0; n < bt.slots.length; n++) n != t && ((r = $(".control-" + n, bt.element)).data("popped") || r.hide())
          }
          bt.mouse.slot = t, tt(e), e.preventDefault(), e.stopPropagation()
        }
      }, mouseup: function (e) {
        bt.stopEvent || mobile || (bt.mouse.down = !1, bt.mouse.resize = !1, bt.mouse.zoom = !1, Math.abs(wt - e.offsetX) < 1 && Math.abs($t - e.offsetY) < 1 && (bt.notClicked = !bt.notClicked, $(bt.element).focus(), E()), tt(e), Ue(bt.mouse.x, bt.mouse.y) ? bt.canvas.i.css("cursor", "e-resize") : bt.canvas.i.css("cursor", "none"), e.ctrlKey && e.shiftKey && (qe(bt.mouse.x, bt.mouse.y) >= 0 && bt.settings.crosshairs && (bt.canvas.i.css("cursor", "none"), oe(bt.mouse.x, bt.mouse.y)), vt()))
      }, contextmenu: function (e) {
        return Ge(e), qe(bt.mouse.x, bt.mouse.y) >= 0 && bt.settings.crosshairs && (bt.canvas.i.css("cursor", "none"), oe(bt.mouse.x, bt.mouse.y)), vt(), e.stopPropagation(), e.preventDefault(), !1
      }, mouseout: function (e) {
        bt.mouse.down = !1, bt.mouse.resize = !1, bt.mouse.zoom = !1, bt.canvas.i.css("cursor", "none"), He(), bt.mouse.slot = -1
      }, mousemove: function (e) {
        if (!mobile && ((bt.mouse.down || bt.mouse.resize || bt.mouse.zoom) && (bt.flags.recompute = !0, tt(e)), e.offsetY != Tt || e.offsetX != St)) {
          Tt = e.offsetY, St = e.offsetX, Ge(e);
          var t = qe(bt.mouse.x, bt.mouse.y);
          bt.canvas.i[0].getContext("2d");
          if (null == t ? (Ue(bt.mouse.x, bt.mouse.y) ? bt.canvas.i.css("cursor", "e-resize") : bt.canvas.i.css("cursor", "default"), He()) : t < 0 ? (bt.canvas.i.css("cursor", "n-resize"), He()) : bt.settings.crosshairs ? (bt.canvas.i.css("cursor", "none"), window.reqAnimFrame(function () {
              oe(bt.mouse.x, bt.mouse.y)
            })) : bt.canvas.i.css("cursor", "crosshair"), bt.settings.icontrols && t != bt.mouse.slot) {
            null != t && t >= 0 && $(".control-" + t, bt.element).show();
            var n, r;
            for (n = 0; n < bt.slots.length; n++) n != t && ((r = $(".control-" + n, bt.element)).data("popped") || r.hide())
          }
          bt.mouse.slot = t, (bt.mouse.down || bt.mouse.resize || bt.mouse.zoom) && (bt.mouse.down || bt.mouse.zoom ? $(bt.canvas.i).css("cursor", "e-resize") : bt.canvas.i.css("cursor", "n-resize"))
        }
      }, dblclick: function (e) {
        bt.stopEvent || (bt.mode.display, bt.CANDLE, bt.mouse.down = !1)
      }, touchstart: function (e) {
        if (1 == e.originalEvent.touches.length && (timeOutEvent = setTimeout(function () {
            xt = !0, Xe(e), $(".chartDetail").show(), $("html,body", parent.document).addClass("hidden")
          }, 300)), bt.mouse.origOffset = bt.bars.offset, bt.mouse.origSpacing = bt.px.bar.spacing, e.originalEvent.touches[0].clientX) bt.mouse.sx = e.originalEvent.touches[0].clientX, bt.mouse.sy = e.originalEvent.touches[0].clientY; else if (e.originalEvent.touches[0].pageX) {
          var t = bt.canvas.i.offset();
          bt.mouse.sx = e.originalEvent.touches[0].pageX - t.left, bt.mouse.sy = e.originalEvent.touches[0].pageY - t.top
        }
        bt.startTouchCoords = [];
        for (var n = 0; n < e.originalEvent.touches.length; ++n) bt.startTouchCoords.push([e.originalEvent.touches[n].clientX, e.originalEvent.touches[n].clientY])
      }, touchmove: function (e) {
        var t, n;
        if (e.originalEvent.touches[0].clientX) t = e.originalEvent.touches[0].clientX, n = e.originalEvent.touches[0].clientY; else if (e.originalEvent.touches[0].pageX) {
          var r = bt.canvas.i.offset();
          t = e.originalEvent.touches[0].pageX - r.left, n = e.originalEvent.touches[0].pageY - r.top
        }
        (Math.abs(bt.mouse.sx - t) > 6 || Math.abs(bt.mouse.sy - n) > 6) && clearTimeout(timeOutEvent), 0 != xt ? Xe(e) : Ke(e)
      }, touchend: function (e) {
        clearTimeout(timeOutEvent), xt = !1, $(".chartDetail").hide(), $("html,body", parent.document).removeClass("hidden"), Qe(e), He()
      }
    }), bt.canvas.i.bind("mousewheel", We), bt.canvas.i.bind("pinch", Ye), RTBTC.handler("barclose", bt.element, ht)
  }

  function We(e, t, n, r) {
    if (!(bt.stopEvent || bt.notClicked || (stopEvent(e), isNaN(n) || isNaN(r)))) {
      if (0 != n && (bt.mouse.origOffset = bt.bars.offset, bt.bars.offset -= n, nt(), bt.bars.offset != bt.mouse.origOffset && (E(), et())), 0 != r) {
        var o = bt.px.bar.width;
        bt.px.bar.width += r, rt(), bt.px.bar.width < 2 && (bt.px.bar.width = 2), bt.px.bar.width > 51 && (bt.px.bar.width = 51), bt.px.bar.width != o && (nt(), E(), et())
      }
      localStorage.barWidth = bt.px.bar.width
    }
  }

  function Ge(e) {
    if (e.offsetX) bt.mouse.x = e.offsetX, bt.mouse.y = e.offsetY; else if (e.pageX) {
      var t = bt.canvas.i.offset();
      bt.mouse.x = e.pageX - t.left, bt.mouse.y = e.pageY - t.top
    }
  }

  function Ye(e, t) {
    if (null != t.scale) {
      w = bt.px.bar.width;
      var n = Math.round(bt.px.bar.width * t.scale);
      bt.px.bar.width = n + (n + 1) % 2, bt.px.bar.width < 2 && (bt.px.bar.width = 2), bt.px.bar.width > 51 && (bt.px.bar.width = 51), bt.px.bar.width != w && (nt(), E(), et()), bt.lastPinchTime = (new Date).getTime()
    }
    t.originalEvent.preventDefault(), t.originalEvent.stopPropagation()
  }

  function Xe(e) {
    e.pageX = e.originalEvent.touches[0].pageX, e.pageY = e.originalEvent.touches[0].pageY, Ge(e);
    var t = qe(bt.mouse.x, bt.mouse.y);
    bt.canvas.i[0].getContext("2d");
    null == t ? He() : t < 0 ? (bt.canvas.i.css("cursor", "n-resize"), He()) : bt.settings.crosshairs ? (bt.canvas.i.css("cursor", "none"), window.reqAnimFrame(function () {
      oe(bt.mouse.x, bt.mouse.y)
    })) : bt.canvas.i.css("cursor", "crosshair"), bt.mouse.slot = t, e.originalEvent.preventDefault(), e.originalEvent.stopPropagation()
  }

  function Ke(e) {
    if (bt.bars.allowScale = !0, !((new Date).getTime() - bt.lastPinchTime < 1e3)) if (2 != e.originalEvent.touches.length || 2 != bt.startTouchCoords.length) e.originalEvent.touches.length > 1 || (new Date).getTime() - bt.lastZoomTime < 1e3 || (bt.flags.recompute = !0, bt.bars.offset = bt.mouse.origOffset + Math.round((e.originalEvent.touches[0].clientX - bt.mouse.sx) / (bt.px.bar.width + bt.px.bar.spacing)), nt(), bt.bars.offset != bt.mouse.origOffset && (E(), et()), bt.canvas.i.css("cursor", "e-resize")); else {
      var t = Math.sqrt(Math.pow(bt.startTouchCoords[0][0] - bt.startTouchCoords[1][0], 2) + Math.pow(bt.startTouchCoords[0][1] - bt.startTouchCoords[1][1], 2)),
        n = Math.sqrt(Math.pow(e.originalEvent.touches[0].clientX - e.originalEvent.touches[1].clientX, 2) + Math.pow(e.originalEvent.touches[0].clientY - e.originalEvent.touches[1].clientY, 2)) / t;
      if (n > 1 && (n *= 1.3), n < 1 && (n *= .7), null != n) {
        w = bt.px.bar.width;
        var r = Math.round(bt.px.bar.width * n);
        bt.px.bar.width = r + (r + 1) % 2, bt.px.bar.width < 2 && (bt.px.bar.width = 2), bt.px.bar.width > 51 && (bt.px.bar.width = 51), bt.px.bar.width != w && (nt(), E(), et()), bt.lastZoomTime = (new Date).getTime()
      }
    }
  }

  function Qe(e) {
    if (bt.bars.allowScale = !0, 1 == e.originalEvent.changedTouches.length && 1 == bt.startTouchCoords.length && bt.startTouchCoords[0][1] != e.originalEvent.changedTouches[0].clientY && Math.abs((bt.startTouchCoords[0][0] - e.originalEvent.changedTouches[0].clientX) / (bt.startTouchCoords[0][1] - e.originalEvent.changedTouches[0].clientY)) < .15) {
      var t = qe(bt.mouse.sx, bt.mouse.sy), n = 0;
      n = e.originalEvent.changedTouches[0].clientY > bt.startTouchCoords[0][1] ? 1 : -1, 0 == t ? (bt.currentOverlay = (bt.currentOverlay + bt.mobileOverlays.length + n) % bt.mobileOverlays.length, Ze(bt.mobileOverlays[bt.currentOverlay])) : t > 0 && (bt.currentIndicator = (bt.currentIndicator + bt.mobileIndicators.length + n) % bt.mobileIndicators.length, Je(bt.mobileIndicators[bt.currentIndicator]))
    }
  }

  function Je(e) {
    if (bt.indicators.hasOwnProperty(e)) {
      for (; bt.slots.length > 2;) S(bt.slots.length - 1);
      x(e)
    }
    return this
  }

  function Ze(e) {
    if (bt.overlays.hasOwnProperty(e)) {
      for (; bt.slots[0].u.length > 0;) T(bt.slots[0].u.length - 1, "u", 0);
      y(e)
    }
    return this
  }

  function et() {
    Be()[1] > -1 && bt.bars.offset >= bt.bars.data.length - bt.bars.visible + bt.bars.blank + bt.bars.endpad - 3 && Data.loadPrev(lt())
  }

  function tt(e) {
    if (Ge(e), bt.mouse.down) if (e.ctrlKey) {
      var t = bt.px.bar.spacing;
      bt.px.bar.spacing = bt.mouse.origSpacing + Math.round((bt.mouse.sx - bt.mouse.x) / 10), bt.px.bar.spacing < 0 && (bt.px.bar.spacing = 0), bt.px.bar.spacing > 51 && (bt.px.bar.spacing = 51), bt.px.bar.spacing != t && (E(), et())
    } else 0 == bt.mouse.origOffsetBlank && (bt.bars.offset = bt.mouse.origOffset + Math.round((bt.mouse.x - bt.mouse.sx) / (bt.px.bar.width + bt.px.bar.spacing))), 0 == bt.mouse.origOffset && (bt.bars.blank = bt.mouse.origOffsetBlank + Math.round((bt.mouse.sx - bt.mouse.x) / (bt.px.bar.width + bt.px.bar.spacing)), rt()), nt(), bt.bars.offset == bt.mouse.origOffset && 0 != bt.bars.offset || (E(), et()); else if (bt.mouse.zoom) {
      var n = bt.mouse.x - bt.mouse.sx, r = +bt.px.bar.width;
      bt.px.bar.width = bt.mouse.w0 - 2 * (n / 10 | 0), bt.px.bar.width < 3 && (bt.px.bar.width = 3), bt.px.bar.width > 51 && (bt.px.bar.width = 51), bt.px.bar.width != r && (nt(), E(), et())
    } else if (bt.mouse.resize) {
      var o = bt.mouse.y - bt.mouse.sy;
      if (bt.slots[bt.mouse.re_slot - 1].h = bt.mouse.re_slots.h0 + o, bt.slots[bt.mouse.re_slot - 1].h < bt.px.slotmin && (o = bt.px.slotmin - bt.mouse.re_slots.h0, bt.slots[bt.mouse.re_slot - 1].h = bt.px.slotmin), bt.slots[bt.mouse.re_slot].h = bt.mouse.re_slots.h1 - o, bt.slots[bt.mouse.re_slot].px = bt.mouse.re_slots.px1 + o, bt.slots[bt.mouse.re_slot].h < bt.px.slotmin && (o = bt.mouse.re_slots.h1 - bt.px.slotmin, bt.slots[bt.mouse.re_slot].h = bt.px.slotmin, bt.slots[bt.mouse.re_slot].px = bt.mouse.re_slots.px1 + o), bt.slots[bt.mouse.re_slot - 1].h = bt.mouse.re_slots.h0 + o, bt.slots[bt.mouse.re_slot - 1].h < bt.px.slotmin) {
        var i = (bt.slots[bt.mouse.re_slot - 1].h + bt.slots[bt.mouse.re_slot].h) / 2;
        bt.slots[bt.mouse.re_slot].h = i, bt.slots[bt.mouse.re_slot - 1].h = i, bt.slots[bt.mouse.re_slot].px = bt.slots[bt.mouse.re_slot - 1].px + bt.slots[bt.mouse.re_slot - 1].h + bt.px.pad + 3
      }
      for (var a = 0; a < bt.slots.length; a++) $(".control-" + a, bt.element).css("top", bt.slots[a].px + 3 + "px");
      E()
    }
  }

  function nt() {
    bt.bars.offset > bt.bars.data.length - bt.bars.visible + bt.bars.blank + bt.bars.endpad && (bt.bars.offset = bt.bars.data.length - bt.bars.visible + bt.bars.blank + bt.bars.endpad), bt.bars.offset < 0 && (bt.bars.offset = 0)
  }

  function rt() {
    var e = bt.bars.visible, t = 0;
    t = bt.bars.data.length > e ? e / 2 : bt.bars.data.length > e / 2 ? (bt.bars.data.length - e / 2) / 2 : 0, t = parseInt(t), bt.bars.blank > t && (bt.bars.blank = t), bt.bars.blank < 0 && (bt.bars.blank = 0)
  }

  function ot() {
    bt.resize.avail = bt.h - (bt.slots.length * (2 + bt.px.pad) - bt.px.pad - 1 + bt.px.lbl.h), bt.resize.slots = [], bt.resize.pct = [];
    for (var e = 0; e < bt.slots.length; e++) bt.resize.slots.push(bt.slots[e].h), bt.resize.pct.push(bt.slots[e].h / bt.resize.avail);
    p()
  }

  function it() {
    var e = $(bt.element).width(), t = $(bt.element).height();
    if (bt.w != e || bt.h != t) {
      bt.w = e, bt.h = t, DEBUG && yt("@@@@@@@_P.w, h: " + bt.w + ", " + bt.h), $("canvas", bt.element).each(function (e, t) {
        $(t).attr("width", bt.w + "px").attr("height", bt.h + "px")
      }), $("canvas", bt.element).attr("val", !1), at();
      bt.canvas.i[0].getContext("2d");
      bt.canvas.line[0].getContext("2d"), E()
    }
  }

  function at() {
    var e, t, n = (bt.slots.length - 1) * (2 + bt.px.pad) + 1 + bt.px.lbl.h, r = bt.h - n, o = -1, i = 0;
    for (e = 0; e < bt.slots.length; e++) bt.slots[e].h = bt.resize.pct[e] * r | 0, bt.slots[e].px = o, o += bt.slots[e].h + 2 + bt.px.pad, i += bt.slots[e].h;
    for (e = 0; i < r;) {
      for (bt.slots[e % bt.slots.length].h += 1, i += 1, t = 1 + e % bt.slots.length; t < bt.slots.length; t++) bt.slots[t].px += 1;
      e++
    }
    for (e = 0; i > r;) {
      for (bt.slots[e % bt.slots.length].h -= 1, i -= 1, t = 1 + e % bt.slots.length; t < bt.slots.length; t++) bt.slots[t].px -= 1;
      e++
    }
    for (e = 0; e < bt.slots.length; e++) $(".control-" + e, bt.element).css("top", bt.slots[e].px + 3 + "px")
  }

  function st() {
    at(), E()
  }

  function lt() {
    return bt.period.avail[bt.period.current]
  }

  function ct() {
    switch (bt.mode.current) {
      case bt.TIME_BAR:
        return ut();
      case bt.VOL_BAR:
        return dt();
      default:
        return ""
    }
  }

  function ut(e) {
    var t = void 0 === e ? bt.period.avail[bt.period.current] : e;
    return 0 == t ? "Ticks" : t < 60 ? "S" + t : t < 3600 ? "M" + (t / 60 | 0) : t < 86400 ? "H" + (t / 3600 | 0) : t < 604800 ? "D" + (t / 86400 | 0) : t < 2592e3 ? "W" + (t / 604800 | 0) : (t / 2592e3 | 0) + "M"
  }

  function ft(e) {
    var t = void 0 === e ? bt.period.avail[bt.period.current] : e;
    return 0 == t ? _("Ticks") : t < 60 ? t + " NaN" : t < 3600 ? (t / 60 | 0) + " " + _("minute") : t < 86400 ? (t / 3600 | 0) + " " + _("hour") : t < 604800 ? (t / 86400 | 0) + " " + _("day") : t < 2592e3 ? (t / 604800 | 0) + " " + _("week") : (t / 2592e3 | 0) + " " + _("month")
  }

  function dt(e) {
    var t = void 0 === e ? bt.volume.avail[bt.volume.current] : e;
    return (t |= 0) < 1e3 ? "V" + t : t < 1e6 ? "V" + ~~(t / 1e3) + "K" : t < 1e9 ? "V" + ~~(t / 1e6) + "M" : "V" + ~~(t / 1e9) + "B"
  }

  function pt() {
    var e = RTBTC.exchangeName() + " " + RTBTC.base() + "/" + RTBTC.quote() + ", " + ct();
    bt.module.setTitle(e)
  }

  function ht(e) {
    void 0 === e && (e = lt());
    var t = +e;
    isNaN(t) || bt.mode.current == bt.TIME_BAR && e == bt.period.avail[bt.period.current] && (DEBUG && yt("handling bar close for period: " + e), bt.bars.data = Data.data.bars[e], E())
  }

  function gt(e) {
    E()
  }

  function mt(e) {
    Colors.hasOwnProperty(e) && (bt.colors = Colors[e]), E()
  }

  function vt() {
    if (!mobile) {
      var e, t, n, r, o = bt.font.headingSize, i = 1.25 * o, a = 2.75 * i | 0,
        s = $("<canvas/>").attr("width", bt.w).attr("height", bt.h + a), l = s[0].getContext("2d"),
        c = RTBTC.base() + "/" + RTBTC.quote(), u = ", " + ft() + " " + _("bars"), f = Be(), d = Settings.localTime;
      if (l.fillStyle = bt.colors.fill.blankBG, l.fillRect(0, a, bt.w, bt.h), l.fillStyle = bt.colors.fill.bg, l.fillRect(0, 0, bt.w, a), l.fillStyle = bt.colors.stroke.crosshair, l.font = bt.font.headingBold, l.textBaseline = "middle", n = l.measureText(c).width, e = l.measureText(bt.watermark).width, t = bt.w - e - o, f[1] >= f[0]) {
        for (l.fillText(c, o / 2, i), l.font = bt.font.heading, l.fillStyle = bt.colors.fill.slottext, l.fillText(u, o / 2 + n, i, t - n), r = f[1]; r > f[0]; r--) if (r < bt.bars.data.length) {
          u = fe(bt.bars.data[r][0], !0, d) + " " + pe(bt.bars.data[r][0], d);
          break
        }
        for (u += " - ", r = f[0]; r < f[1]; r++) if (r >= 0) {
          u += fe(bt.bars.data[r][0], !0, d) + " " + pe(bt.bars.data[r][0], d);
          break
        }
        l.fillText(u, o / 2, 2 * i, t - bt.px.lbl.tick - bt.px.lbl.w)
      } else l.fillText(c, o / 2, 2 * i), l.font = bt.font.heading, l.fillStyle = bt.colors.fill.slottext, l.fillText(u, o / 2 + n, 2 * i, t - n);
      l.fillText(bt.watermark, bt.w - e - o / 2 - bt.px.lbl.tick - bt.px.lbl.w, 2 * i), l.drawImage(bt.canvas.base[0], 0, a), l.drawImage(bt.canvas.bg[0], 0, a), l.drawImage(bt.canvas.main[0], 0, a), l.drawImage(bt.canvas.fg[0], 0, a), l.drawImage(bt.canvas.orders[0], 0, a), l.drawImage(bt.canvas.lbl[0], 0, a), l.drawImage(bt.canvas.line[0], 0, a), l.drawImage(bt.canvas.i[0], 0, a), l.strokeStyle = bt.colors.stroke.border, l.lineWidth = 1, l.beginPath(), Ae(l, 0, a), Ne(l, bt.w - bt.px.lbl.tick - bt.px.lbl.w, a), l.stroke();
      var p = s[0].toDataURL("image/png");
      if (has_dataURI()) window.open(p, "_blank"); else {
        var h = window.open(BASE_URL + "blank.html");
        h.data = '<img src="' + p + '"/>', h.document.write(h.data), h.focus()
      }
    }
  }

  var bt = {
    element: "",
    parent: null,
    module: null,
    self: null,
    canvas: {base: null, bg: null, main: null, fg: null, orders: null, lbl: null, i: null, line: null},
    w: 0,
    h: 0,
    mode: {current: 0, avail: ["Time Bars"], display: 0, avail_display: ["Candle", "OHLC", "HLC", "Line"]},
    TIME_BAR: 0,
    CANDLE: 0,
    OHLC: 1,
    HLC: 2,
    LINE: 3,
    MOUNTAIN: 4,
    BANDS: 5,
    PSAR: 6,
    HIST: 7,
    LBLHIST: 8,
    period: {
      current: 13,
      string: "M15",
      avail: [2592e3, 604800, 259200, 86400, 43200, 28800, 21600, 14400, 7200, 3600, 2700, 1800, 900, 300, 180, 60, 0]
    },
    bars: {
      visible: -1,
      offset: 0,
      blank: 0,
      endpad: 0,
      data: [],
      noload: {},
      startTime1: "9:30:00",
      endTime1: "11:30:00",
      startTime2: "13:00:00",
      endTime2: "15:00:00",
      ticks: [],
      fixTime: !1
    },
    slots: [{main: !0, px: 0, h: 50, u: [{t: "ema", i: null, s: [5]}], o: []}, {
      t: "vol",
      i: null,
      px: 5,
      h: 10,
      s: []
    }],
    resize: {avail: 0, slots: [], pct: []},
    price: {high: 100, low: 50, range: 50, bid: NaN, ask: NaN},
    log: {m: 0, b: 0, b10: 0},
    px: {
      pad: 5,
      lbl: {w: 65, h: 14, tick: 5, halftick: 2, font: 11},
      bar: {width: 7, dx: 4, spacing: 1},
      price: 1,
      crosshairs: {x: 0, y: 0},
      slotmin: 50
    },
    flags: {redraw: {base: !0, main: !0, underlay: !0, overlay: !0, inds: !0}, recompute: !0, widget: !1},
    mouse: {
      down: !1,
      zoom: !1,
      w0: null,
      x: 0,
      y: 0,
      bar: null,
      sx: 0,
      sy: 0,
      origOffset: 0,
      origSpacing: 1,
      resize: !1,
      re_slot: 0,
      re_slots: {px0: 0, h0: 0, px1: 0, h1: 0},
      slot: -1
    },
    colors: Colors.c,
    lastColorIndex: 0,
    defaultColors: null,
    SOLID: 0,
    DOTTED: 1,
    DASHED: 2,
    DASHDOT: 3,
    font: {
      precision: 2,
      labels: mobile ? '10px/1.0em  "Microsoft YaHei", Arial, sans-serif' : '11px/1.0em  Consolas, "Courier New", monospace',
      size: 11,
      lineHeight: 1,
      face: ' "Microsoft YaHei", Consolas, "Courier New", monospace',
      indicators: '10px/1.0em  "Microsoft YaHei", Arial, sans-serif',
      heading: '12px/1.0em  "Microsoft YaHei", Arial, sans-serif',
      headingBold: 'bold 12px/1.0em  "Microsoft YaHei", Arial, sans-serif',
      headingSize: 12
    },
    watermark: "bijietech.com",
    settings: {repaint: !0, grid: !0, crosshairs: !0, icontrols: !0, bidask: !0, logscale: !1, userorders: !1},
    indicators: {
      macd: "MACD",
      kdj: "KDJ",
      cci: "Commodity Channel Index",
      dmi: "Directional Movement Index",
      obv: "On-Balance Volume",
      rsi: "Relative Strength Index",
      sto: "Stochastic Oscillator",
      storsi: "Stochastic RSI",
      vol: "Volume",
      wpr: "Williams %R",
      emv: "Ease of movement value",
      mtm: "Momentum"
    },
    mobileIndicators: ["macd", "kdj", "cci", "dmi", "obv", "rsi", "sto", "storsi", "wpr", "emv", "mtm", "avl"],
    currentIndicator: 0,
    overlays: {
      ema: "Exponential Moving Average",
      bnd: "Bollinger Bands &reg;",
      psar: "Parabolic SAR",
      dcn: "Price Channels",
      sma: "Simple Moving Average",
      vwap: "Volume Weighted Average Price",
      trix: "Triple Exponentially Smoothed Average",
      avl: "avl",
      ma: "ma"
    },
    mobileOverlays: ["ema", "bnd", "psar", "dcn", "sma", "vwap", "trix", "avl", "ma"],
    currentOverlay: 0,
    lastPinchTime: -1,
    lastZoomTime: -1,
    startTouchCoords: [],
    crossHairH: !0,
    setShowRateOnLeft: !1,
    data: {},
    curIndex: 1,
    offset: 0,
    preClose: 0,
    showMainCrosshairs: !0,
    stopEvent: !1,
    preTradingDay: 0,
    notClicked: !0,
    debug: RTBTC.isDebug()
  }, yt = RTBTC.debug;
  Date.prototype.Format = function (e) {
    var t = {
      "M+": this.getMonth() + 1,
      "d+": this.getDate(),
      "h+": this.getHours(),
      "m+": this.getMinutes(),
      "s+": this.getSeconds(),
      "q+": Math.floor((this.getMonth() + 3) / 3),
      S: this.getMilliseconds()
    };
    /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var n in t) new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[n] : ("00" + t[n]).substr(("" + t[n]).length)));
    return e
  };
  var xt, wt, $t,
    kt = [_("Jan"), _("Feb"), _("Mar"), _("Apr"), _("May"), _("Jun"), _("Jul"), _("Aug"), _("Sep"), _("Oct"), _("Nov"), _("Dec")],
    Tt = 0, St = 0;
  return {
    build: function (t, r, o) {
      return bt.element = t, bt.parent = r, e(), ze(), n(o), b(), u(), l(), window.setTimeout(function () {
        RTBTC.trigger("what-theme", null)
      }, 100), $(bt.element).on("mouseleave", function () {
        h()
      }), $(bt.element).on("keydown", function (e) {
        38 == e.keyCode && We(bt.element, 0, 0, 1), 40 == e.keyCode && We(bt.element, 0, 0, -1)
      }), this
    }, lblWidth: function () {
      return bt.px.lbl.w
    }, module: function (e) {
      return bt.module = e, pt(), RTBTC.handler("barclose", bt.module.id(), bt.self.onBarClose), RTBTC.handler("theme", bt.module.id(), bt.self.onTheme), RTBTC.handler("trade", bt.module.id(), bt.self.onTrade), RTBTC.handler("bidask", bt.module.id(), bt.self.bidask), RTBTC.handler("orders", bt.module.id(), D), RTBTC.handler("order-canceled", bt.module.id(), O), this
    }, self: function (e) {
      return bt.self = e, this
    }, settings: function () {
      return v()
    }, save: function () {
      return a()
    }, load: function (e) {
      n(e), E()
    }, unload: function () {
      RTBTC.unregisterAll(bt.module.id())
    }, onBarClose: function (e) {
      ht(e)
    }, onTheme: function (e) {
      mt(e)
    }, setPreClose: function (e) {
      bt.preClose = Number(e)
    }, showDetail: function () {
      l()
    }, onTrade: function (e) {
      gt()
    }, wheel: function (e) {
      We(bt.element, 0, 0, -e)
    }, loadTicks: function (e) {
      var t = bt.bars.ticks;
      bt.bars.ticks = [];
      for (var n = 0; n < e.length; n++) i(e[n]) && bt.bars.ticks.push(e[n]);
      return 0 == bt.bars.ticks.length ? (bt.bars.ticks = t, yt("Failed to load any new ticks!")) : (r(), C()), this
    }, loadBars: function (e) {
      var t, n, r = bt.bars.ticks, o = bt.bars.data;
      if (e.length > 0) {
        for (bt.bars.ticks = [], t = e.length - 1; t >= 0; t--) i(n = [e[t][0], e[t][1], e[t][5] / 4]) && bt.bars.ticks.push(n), i(n = [e[t][0], e[t][2], e[t][5] / 4]) && bt.bars.ticks.push(n), i(n = [e[t][0], e[t][3], e[t][5] / 4]) && bt.bars.ticks.push(n), i(n = [e[t][0], e[t][4], e[t][5] / 4]) && bt.bars.ticks.push(n);
        bt.bars.ticks.length > 0 ? (bt.bars.data = e, bt.flags.redrawBG = !0, bt.flags.recompute = !0, C()) : (bt.bars.ticks = r, bt.bars.data = o)
      }
      return this
    }, tick: function (e) {
      var t = bt.bars.data.length;
      i(e) && (bt.bars.ticks.push([e[0], e[1], e[2]]), o(e), bt.bars.data.length > t && (bt.flags.redrawFG = !0), C())
    }, bar: function (e) {
      bt.bars.data.length;
      if (bt.bars.data.length > 0) {
        if (e[0] < bt.bars.data[0][0]) return;
        if (e[0] == bt.bars.data[0][0] && e[5] <= bt.bars.data[0][5]) return;
        e[0] == bt.bars.data[0][0] ? bt.bars.data[0] = e : (bt.bars.data.splice(0, 0, e), bt.flags.redrawFG = !0)
      } else bt.bars.data.splice(0, 0, e), bt.flags.redrawFG = !0;
      bt.flags.recompute = !0, C()
    }, bidask: function (e) {
      var t = !1;
      return e.hasOwnProperty("bid") && bt.price.bid != e.bid && (bt.price.bid = e.bid, t = !0), e.hasOwnProperty("ask") && bt.price.ask != e.ask && (bt.price.ask = e.ask, t = !0), t && (bt.flags.redraw.main = !0, C()), this
    }, resize: function () {
      t(), ot(), window.reqAnimFrame(it), st()
    }, drag: function (e) {
      switch (e) {
        case"start":
          p()
      }
    }, widget: function (e) {
      return null == e || void 0 === e ? bt.flags.widget : (bt.flags.widget = e, this)
    }, addIndicator: function (e) {
      return x(e), this
    }, addOrUpdateIndicator: function (e, t) {
      return bt.indicators.hasOwnProperty(e) ? x(e, t) : bt.overlays.hasOwnProperty(e) && y(e, t), this
    }, removeIndicator: function () {
      for (; bt.slots.length > 2;) S(bt.slots.length - 1);
      for (; bt.slots[0].u.length > 1;) T(bt.slots[0].u.length - 1, "u", 0);
      return this
    }, addOverlay: function (e, t) {
      y(e, t)
    }, removeIndicatorByname: function (e) {
      return e instanceof Array && e.forEach(function (e) {
        for (var t = bt.slots[0].u, n = t.length, r = 0; r < n; r++) t[r] && t[r].t == e && T(r, "u", 0);
        for (var o = bt.slots, i = 0; i < o.length; i++) o[i].t == e && S(i)
      }), this
    }, setResolution: function (e) {
      return bt.period.avail.indexOf(e) >= 0 && bt.period.current != bt.period.avail.indexOf(e) && (bt.period.current = bt.period.avail.indexOf(e), bt.bars.offset = 0, bt.bars.blank = 0), Data.setup(e), this
    }, crossHairH: function (e) {
      bt.crossHairH = e
    }, fixTime: function (e) {
      bt.bars.fixTime = e, bt.offset = e ? 40 : 0, bt.bars.offset = 0, bt.settings.grid = !0
    }, setBarwidth: function (e) {
      bt.px.bar.width = e
    }, setData: function (e) {
      bt.data = e
    }, clearData: function () {
      Data.data.bars[lt()] = [], E()
    }, setOffset: function (e) {
      bt.offset = e
    }, setShowRateOnLeft: function (e) {
      bt.setShowRateOnLeft = e
    }, setLastColorIndex: function (e) {
      bt.lastColorIndex = e
    }, setMode: function (e) {
      return bt.mode.avail_display.indexOf(e) >= 0 && bt.mode.display != bt.mode.avail_display.indexOf(e) && (bt.mode.display = bt.mode.avail_display.indexOf(e)), $(".icontrol", bt.element).css("left", bt.offset + 2 + "px"), this
    }, setCrossHair: function (e) {
      bt.showMainCrosshairs = e, bt.stopEvent = !e, e ? (bt.canvas.i.removeClass("showHand"), 0 == $("#chartCtrlFixed").length && l()) : (bt.canvas.i.addClass("showHand"), $("#chartCtrlFixed").remove())
    }, getMode: function () {
      return bt.mode.display
    }, getInernal: function () {
      return bt.yToVal = Fe, bt.xToBar = _e, bt.toPxX = Ie, bt.barToIndex = Re, bt.toPxY = De, bt
    }, getCurDay: function () {
      if (bt.bars.data[bt.curIndex]) return $("#chartCtrlFixed").hide(), bt.bars.data[bt.curIndex][0]
    }, getPerClose: function () {
      if (bt.bars.data[bt.curIndex + 1]) return bt.bars.data[bt.curIndex + 1][4]
    }, LblWidthChangeEvent: function (e) {
      bt.LblWidthChange = e
    }, showHighlowPriceAtAngles: function () {
      bt.colors.stroke.priceShow = !0
    }, setMainSlotHeightPercent: function (e) {
      bt.mainSlotHeightPercent = e
    }, redraw: function () {
      E()
    }, isIndicator: function (e) {
      return !!bt.indicators[e]
    }, internals: (bt.debug, function () {
      return bt
    })
  }
};
Date.prototype.get8Date = function () {
  var e = 6e4 * this.getTimezoneOffset(), t = this.getTime() + e;
  return new Date(t + 288e5)
};
var Currency = function () {
  var e = [], t = {
    AUD: {symbol: "$", before: !0, digits: 2, name: _("Australian dollar")},
    BTC: {symbol: "BTC", before: !1, digits: 8, name: _("Bitcoin")},
    USDT: {symbol: "USDT", before: !1, digits: 2, name: _("USDT")},
    ANS: {symbol: "ANS", before: !1, digits: 8, name: _("Antshares")},
    BNB: {symbol: "BNB", before: !1, digits: 8, name: _("Binance")},
    ETH: {symbol: "ETH", before: !1, digits: 8, name: _("Ethereum")},
    123: {symbol: "123", before: !1, digits: 8, name: _("123")},
    456: {symbol: "456", before: !1, digits: 8, name: _("456")},
    CAD: {symbol: "$", before: !0, digits: 2, name: _("Canadian dollar")},
    CHF: {symbol: "S₣", before: !1, digits: 2, name: _("Swiss franc")},
    CLP: {symbol: "$", before: !0, digits: 2, name: _("Chilean peso")},
    CNY: {symbol: "CNY", before: !1, digits: 2, name: _("Chinese yuan")},
    DKK: {symbol: "kr", before: !1, digits: 2, name: _("Danish krone")},
    EUR: {symbol: "€", before: !0, digits: 2, name: _("Euro")},
    GBP: {symbol: "£", before: !0, digits: 2, name: _("Pound sterling")},
    HKD: {symbol: "圓", before: !0, digits: 2, name: _("Hong Kong dollar")},
    JPY: {symbol: "¥", before: !0, digits: 2, name: _("Japanese yen")},
    FTC: {symbol: "FTC", before: !1, digits: 8, name: _("Feathercoin")},
    LTC: {symbol: "Ł", before: !0, digits: 6, name: _("Litecoin")},
    NMC: {symbol: "ℕ", before: !0, digits: 8, name: _("Namecoin")},
    NVC: {symbol: "NVC", before: !1, digits: 8, name: _("Novacoin")},
    NOK: {symbol: "kr", before: !1, digits: 2, name: _("Norwegian krone")},
    NZD: {symbol: "$", before: !0, digits: 2, name: _("New Zealand dollar")},
    PLN: {symbol: "zł", before: !1, digits: 2, name: _("Polish złoty")},
    PPC: {symbol: "PPC", before: !1, digits: 8, name: _("Peercoin")},
    RUB: {symbol: "руб", before: !1, digits: 2, name: _("Russian ruble")},
    SEK: {symbol: "kr", before: !1, digits: 2, name: _("Swedish krona")},
    SGD: {symbol: "S", before: !0, digits: 2, name: _("Singapore dollar")},
    THB: {symbol: "฿", before: !0, digits: 2, name: _("Thai baht")},
    TRC: {symbol: "TRC", before: !1, digits: 8, name: _("Terracoin")},
    USD: {symbol: "$", before: !0, digits: 2, name: _("United States dollar")},
    XPM: {symbol: "Ψ", before: !0, digits: 8, name: _("Primecoin")}
  };
  for (var n in t) t.hasOwnProperty(n) && e.push(n);
  return e.sort(), {
    list: function () {
      return e
    }, before: function (e) {
      try {
        return t[e].before
      } catch (e) {
        return !0
      }
    }, fullname: function (e) {
      try {
        return t[e].name
      } catch (e) {
        return _("Currency")
      }
    }, format: function (e, n, r) {
      try {
        null == r && (r = t[e].digits);
        var o = numberWithCommas((n = parseFloat(n)).toFixed(r));
        return t[e].before ? t[e].symbol + o : o + " " + t[e].symbol
      } catch (e) {
        return "¤0.00"
      }
    }, symbol: function (e) {
      try {
        return t[e].symbol
      } catch (e) {
        return "¤"
      }
    }, valid: function (e) {
      return t.hasOwnProperty(e)
    }
  }
}(), OrderBookDaemon = function () {
  function e() {
    function e(e, n) {
      var r = 0, o = 0, i = RTBTC.baseInt();
      if (e *= RTBTC.quoteInt(), "bid" == n) for (o = 0; o < t.book.bid.price.length && !(t.book.bid.price[o] < e); o++) r += t.book.bid.amount[o] / i; else if ("ask" == n) for (o = 0; o < t.book.ask.price.length && !(t.book.ask.price[o] > e); o++) r += t.book.ask.amount[o] / i;
      return r
    }

    var t = {book: {bid: {price: [], amount: []}, ask: {price: [], amount: []}}};
    return {
      book: t.book, sumToPrice: function (t, n) {
        return e(t, n)
      }, loadBook: function (e, n, r) {
        t.book.bid.price = [], t.book.bid.amount = [], t.book.ask.price = [], t.book.ask.amount = [];
        var o = Object.keys(n).sort(function (e, t) {
          return e - t
        }).reverse(), i = Object.keys(e).sort(function (e, t) {
          return e - t
        });
        o.slice(0, r || 20).forEach(function (e) {
          t.book.bid.price.push(parseFloat(e)), t.book.bid.amount.push(n[e])
        }), i.slice(0, r || 20).forEach(function (n) {
          t.book.ask.price.push(parseFloat(n)), t.book.ask.amount.push(e[n])
        }), RTBTC.trigger("newbook", null)
      }
    }
  }

  var t = null;
  return new function () {
    this.Build = function () {
      return null == t && ((t = new e).constructor = null), t
    }
  }
}(), OBD = null, TWOPI = 2 * Math.PI, OBD = OrderBookDaemon.Build(), VisualDepth = function () {
  function e() {
    ce.parent.addClass("visualdepth"), ce.element = $(".box-inner", ce.parent), ce.element.empty(), ce.w = ce.element.width(), ce.h = ce.element.height(), ce.canvas.bg = $("<canvas/>").attr("width", ce.w + "px").attr("height", ce.h + "px").attr("z-index", 100), ce.canvas.bidFill = $("<canvas/>").attr("width", ce.w + "px").attr("height", ce.h + "px").attr("z-index", 101), ce.canvas.askFill = $("<canvas/>").attr("width", ce.w + "px").attr("height", ce.h + "px").attr("z-index", 102), ce.canvas.bid = $("<canvas/>").attr("width", ce.w + "px").attr("height", ce.h + "px").attr("z-index", 103), ce.canvas.sweepFill = $("<canvas/>").attr("width", ce.w + "px").attr("height", ce.h + "px").attr("z-index", 104), ce.canvas.sweep = $("<canvas/>").attr("width", ce.w + "px").attr("height", ce.h + "px").attr("z-index", 105), ce.canvas.ask = $("<canvas/>").attr("width", ce.w + "px").attr("height", ce.h + "px").attr("z-index", 106), ce.canvas.orders = $("<canvas/>").attr("width", ce.w + "px").attr("height", ce.h + "px").attr("z-index", 107), ce.canvas.userOrders = $("<canvas/>").attr("width", ce.w + "px").attr("height", ce.h + "px").attr("z-index", 108), ce.canvas.axes = $("<canvas/>").attr("width", ce.w + "px").attr("height", ce.h + "px").attr("z-index", 109), ce.canvas.lbl = $("<canvas/>").attr("width", ce.w + "px").attr("height", ce.h + "px").attr("z-index", 110), ce.canvas.i = $("<canvas/>").attr("width", ce.w + "px").attr("height", ce.h + "px").attr("z-index", 111), ce.element.append(ce.canvas.bg).append(ce.canvas.bidFill).append(ce.canvas.askFill).append(ce.canvas.bid).append(ce.canvas.ask).append(ce.canvas.sweepFill).append(ce.canvas.sweep).append(ce.canvas.orders).append(ce.canvas.userOrders).append(ce.canvas.axes).append(ce.canvas.lbl).append(ce.canvas.i), ce.defaultColors = deepCopy(ce.colors);
    var e = ce.canvas.bg[0].getContext("2d");
    e.font = ce.font.labels, ce.px.lbl.w = e.measureText("100.00").width + ce.px.pad + 2
  }

  function t(e) {
    if (void 0 !== e) {
      var t = new Validator, n = (new Validator).create(t.FLOAT), r = (new Validator).create(t.BOOL);
      ce.settings.grid = r.set(ce.settings.grid).set(e.g).get(), ce.settings.fill = r.set(ce.settings.fill).set(e.f).get(), ce.price.scale = n.set(ce.price.scale).set(e.s).get()
    }
  }

  function n() {
    var e = {};
    return e.g = ce.settings.grid, e.f = ce.settings.fill, e.s = ce.price.scale, e
  }

  function r() {
    return [$("<p/>").append(RTBTC.toggle(ce.settings.fill, function () {
      ce.settings.fill = !0
    }, function () {
      ce.settings.fill = !1, m()
    }, function () {
      i()
    })).append($("<span/>").addClass("control-label").html(_("Fill the Chart"))), $("<p/>").append(RTBTC.toggle(ce.settings.grid, function () {
      ce.settings.grid = !0
    }, function () {
      ce.settings.grid = !1
    }, function () {
      i()
    })).append($("<span/>").addClass("control-label").html(_("Show Grid")))]
  }

  function o() {
    var e = ce.canvas.bg[0].getContext("2d"), t = ce.canvas.bidFill[0].getContext("2d"),
      n = ce.canvas.askFill[0].getContext("2d"), r = ce.canvas.bid[0].getContext("2d"),
      o = ce.canvas.ask[0].getContext("2d"), i = ce.canvas.axes[0].getContext("2d"),
      s = ce.canvas.lbl[0].getContext("2d");
    if (ce.flags.recompute && a(e), ce.flags.redraw.base) {
      e.clearRect(0, 0, ce.w, ce.h), l(e), i.clearRect(0, ce.h - ce.px.lbl.h - 2 * ce.px.lbl.tick - 2, ce.w, ce.px.lbl.h + 2 * ce.px.lbl.tick + 2), i.font = ce.font.labels;
      var u = i.measureText(ce.volume).width;
      i.clearRect(0, 0, ce.px.lbl.tick + u + 5, ce.h - ce.px.lbl.h - ce.px.lbl.tick - 1), c(i, e), ce.flags.redraw.base = !1
    }
    var f = ce.flags.redraw.bid || ce.flags.redraw.ask;
    ce.flags.redraw.bid && (d(r, t), ce.flags.redraw.bid = !1), ce.flags.redraw.ask && (p(o, n), ce.flags.redraw.ask = !1), f && v(s), ae()
  }

  function i(e) {
    ce.flags.recompute = !0, e ? o() : window.reqAnimFrame(o)
  }

  function a(e) {
    ce.price.low, ce.price.high;
    var t = RTBTC.quoteInt(), n = !1, r = (fe = OBD.book).bid.price, o = fe.ask.price;
    if (0 == r.length && o.length > 0) fe.bid.price = [o[0]], fe.bid.amount = [fe.ask.amount[0]]; else if (r.length > 0 && 0 == o.length) fe.ask.price = [r[0]], fe.ask.amount = [fe.bid.amount[0]]; else if (0 == r.length && 0 == o.length) return;
    if (fe.bid.price.length > 0 && fe.ask.price.length > 0) {
      ce.price.low < fe.bid.price[fe.bid.price.length - 1] / t && (n = !0, DEBUG && ue("New low price: " + ce.price.low)), ce.price.high > fe.ask.price[fe.ask.price.length - 1] / t && (n = !0, DEBUG && ue("New high price: " + ce.price.high)), ce.price.low > fe.bid.price[fe.bid.price.length - 1] / t && DEBUG && ue("New low price: " + ce.price.low), ce.price.high < fe.ask.price[fe.ask.price.length - 1] / t && DEBUG && ue("New high price: " + ce.price.high);
      var i = (fe.ask.price[0] + fe.bid.price[0]) / 2;
      i * (1 - ce.price.scale) > 0 && (ce.price.high = i * (1 + ce.price.scale), ce.price.low = i * (1 - ce.price.scale)), (0 == r.length || 1 == r.length && r[0] == o[0]) && o.length > 0 ? ce.price.low < 0 && (ce.price.low = 0) : r.length > 0 && (0 == o.length || 1 == o.length && (o[0], r[0])), ce.allowScale ? ce.allowScale = !1 : ce.price.range = ce.price.high - ce.price.low, ce.price.range = ce.price.high - ce.price.low, n && (DEBUG && ue(ce.price), ce.price.range = ce.price.high - ce.price.low, ce.price.range <= 0 && (ce.price.range = 1), ce.price.high < ce.price.low && (ce.price.high = ce.price.low + 1 / RTBTC.quoteInt()), ce.price.scale < ce.price.minScale ? ce.price.scale = ce.price.minScale : ce.price.scale > ce.price.maxScale && (ce.price.scale = ce.price.maxScale), DEBUG && ue("Scale: " + ce.price.scale + ", range: " + ce.price.range))
    }
    var a, s = 0;
    for (ce.sums.bid = [], a = 0; a < fe.bid.amount.length && (s += fe.bid.amount[a] / RTBTC.baseInt(), ce.sums.bid[a] = s, !(fe.bid.price[a] / t < ce.price.low)); a++) ;
    for (s = 0, ce.sums.ask = [], a = 0; a < fe.ask.amount.length && (s += fe.ask.amount[a] / RTBTC.baseInt(), ce.sums.ask[a] = s, !(fe.ask.price[a] / t > ce.price.high)); a++) ;
    var l = 0, c = 0;
    l = fe.ask.price[ce.sums.ask.length - 1] > ce.price.high ? ce.sums.ask[ce.sums.ask.length - 2] : ce.sums.ask[ce.sums.ask.length - 1], c = fe.bid.price[ce.sums.bid.length - 1] < ce.price.low ? ce.sums.bid[ce.sums.bid.length - 2] : ce.sums.bid[ce.sums.bid.length - 1], ce.volume = Math.max(l, c), ce.volume *= 1.15, ce.flags.recompute = !1, ce.flags.redraw.base = !0, ce.flags.redraw.bid = !0, ce.flags.redraw.ask = !0, void 0 === ce.asdf && (ue(ce), ce.asdf = !0)
  }

  function s() {
    var e = fe.bid.amount.length, t = fe.ask.amount.length, n = RTBTC.quoteInt();
    fe.bid.price[e - 1] / n < ce.price.low && ce.sums.bid.length > 0 && fe.bid.price[ce.sums.bid.length - 1] > ce.price.low ? ce.flags.recompute = !0 : fe.ask.price[t - 1] / n > ce.price.high && ce.sums.ask.length > 0 && fe.ask.price[ce.sums.ask.length - 1] < ce.price.high && (ce.flags.recompute = !0)
  }

  function l(e, t) {
    void 0 === t && (t = !1);
    var n = ce.px.lbl.h + ce.px.lbl.tick + 1, r = ce.h - n;
    e.fillStyle = ce.colors.fill.bg, U(e, 0, r, ce.w, n), e.strokeStyle = ce.colors.stroke.border, e.beginPath(), R(e, 0, r), j(e, ce.w, r), e.stroke()
  }

  function c(e, t) {
    u(e, t), f(e, t)
  }

  function u(e, t) {
    e.font = ce.font.labels, e.fillStyle = ce.colors.fill.label, e.strokeStyle = ce.colors.stroke.border, e.textBaseline = "middle", e.textAlign = "center";
    var n, r, o = 1 / RTBTC.quoteInt(), i = 7, a = 1.5 * ce.font.size, s = 0,
      l = [1e-6, 2e-5, 1e-4, 2e-4, 5e-4, .001, .01, .5, 1, 2, 2.5, 5], c = 1e-8, u = !1;
    for (o = 1e-8, n = 0; n < 15; n++) {
      for (i = Math.max(Math.abs(Math.log(o) / Math.LN10) + 1, 2), r = 0; r < l.length; r++) if (c = o * l[r], s = e.measureText(ce.price.high.toFixed(i)).width, V(2 * c) - V(c) >= s + a) {
        u = !0;
        break
      }
      if (u) break;
      o *= 10
    }
    ce.price.decimals = i;
    var f = Math.ceil(ce.price.high / c) * c, d = V(f);
    for (ce.settings.grid && (t.strokeStyle = ce.colors.stroke.grid, t.beginPath()), e.beginPath(); f >= ce.price.low && !(d < 0);) P(e, f.toFixed(i), f), ce.settings.grid && x(t, d, ce.DOTTED), d = V(f -= c);
    e.stroke(), ce.settings.grid && t.stroke()
  }

  function f(e, t) {
    e.font = ce.font.labels, e.fillStyle = ce.colors.fill.label, e.strokeStyle = ce.colors.stroke.border, e.textBaseline = "middle", e.textAlign = "left";
    var n, r, o = 1e-8, i = 8, a = .625 * ce.font.size, s = ce.px.lbl.font, l = [1, 2, 2.5, 5], c = 1e-8, u = !1;
    for (n = 0; n < 20; n++) {
      for (i = Math.max(Math.abs(Math.log(o) / Math.LN10) + 1, 2), r = 0; r < l.length; r++) if (c = o * l[r], H(c) - H(2 * c) >= s + a) {
        u = !0;
        break
      }
      if (u) break;
      o *= 10
    }
    o >= 1 && (i = 0);
    var f = c, d = H(f);
    for (ce.settings.grid && (t.strokeStyle = ce.colors.stroke.grid, t.beginPath()), e.beginPath(); f < ce.volume;) D(e, numberWithCommas(f.toFixed(i)), f), ce.settings.grid && k(t, d, ce.DOTTED), d = H(f += c);
    e.stroke(), ce.settings.grid && t.stroke()
  }

  function d(e, t) {
    e.clearRect(0, 0, ce.w, ce.h), e.strokeStyle = ce.colors.stroke.bid, ce.settings.fill && (t.clearRect(0, 0, ce.w, ce.h), t.fillStyle = ce.colors.fill.down, g(t, ce.sums.bid, fe.bid.price, !0));
    var n = !1;
    if (ce.interacted && fe.bid.price.length > 0) {
      var r = fe.bid.price[0] / RTBTC.quoteInt();
      ce.px.crosshairs.x <= V(r) && (C(), n = !0)
    }
    h(e, ce.sums.bid, fe.bid.price, !0), n && S(ce.mouse.x, ce.mouse.y)
  }

  function p(e, t) {
    e.clearRect(0, 0, ce.w, ce.h), e.strokeStyle = ce.colors.stroke.ask, ce.settings.fill && (t.clearRect(0, 0, ce.w, ce.h), t.fillStyle = ce.colors.fill.up, g(t, ce.sums.ask, fe.ask.price, !1));
    var n = !1;
    if (ce.interacted && fe.ask.price.length > 0) {
      var r = fe.ask.price[0] / RTBTC.quoteInt();
      ce.px.crosshairs.x >= V(r) && (C(), n = !0)
    }
    h(e, ce.sums.ask, fe.ask.price, !1), n && S(ce.mouse.x, ce.mouse.y)
  }

  function h(e, t, n, r, o) {
    if (0 != n.length) {
      var i, a, s, l = t.length, c = RTBTC.quoteInt(), u = V(n[l - 1] / c), f = u, d = H(t[l - 1]), p = u,
        h = void 0 !== o, g = h ? V(o) : r ? ce.w + 1 : -1;
      if (e.beginPath(), h) for (p = u = g, i = l - 1; i >= 0; i--) if (r && n[i] / c > o || !r && n[i] / c < o) {
        l = i + 1;
        break
      }
      for (R(e, u, s = H(t[l - 1])), !h && u > 0 && (ce.yVals[u] = s), i = l - 1; i >= 0; i--) {
        if (u = V(n[i] / c), r && u > p || !r && u < p) {
          if (s = H(t[i]), r && u > p + 1 && j(e, p + 1, s), !r && u < p - 1 && j(e, p - 1, s), j(e, u, s), !h && u > 0 && (ce.yVals[u] = s), !h) {
            if (r && u > p + 1) for (a = p + 1; a < u; a++) ce.yVals[a] = void 0;
            if (!r && u < p - 1) for (a = p - 1; a > u; a--) ce.yVals[a] = void 0
          }
          p = u
        }
        if (u < -100 * ce.w || u > 100 * ce.w) {
          DEBUG && ue(fe), DEBUG && ue("n: " + l + ", curInt: " + c + ", prices[n-1]: " + n[l - 1] + ", x: " + u + ", xf: " + f + ", sums[n-1]: " + t[l - 1] + ", yf: " + d + ", ");
          break
        }
      }
      e.stroke()
    }
  }

  function g(e, t, n, r, o) {
    if (0 != n.length) {
      var i, a = t.length, s = RTBTC.quoteInt(), l = V(n[a - 1] / s), c = l, u = l, f = 0, d = H(0),
        p = e.createLinearGradient(0, 0, 0, d), h = void 0 !== o, g = h ? V(o) : r ? ce.w + 1 : -1;
      if (e.beginPath(), h) for (l = g, u = g, c = g, i = a - 1; i >= 0; i--) if (r && n[i] / s > o || !r && n[i] / s < o) {
        a = i + 1;
        break
      }
      for (R(e, l, f = H(t[a - 1])), i = a - 1; i >= 0; i--) l = V(n[i] / s), (r && l > u || !r && l < u) && (f = H(t[i]), r && l > u + 1 && j(e, u + 1, f), !r && l < u - 1 && j(e, u - 1, f), j(e, l, f), u = l);
      j(e, u, d), j(e, c, d), e.closePath(), p.addColorStop(0, e.fillStyle), p.addColorStop(1, ce.colors.fill.blankBG), e.fillStyle = p, e.fill()
    }
  }

  function m() {
    var e = ce.canvas.bidFill[0].getContext("2d");
    e.clearRect(0, 0, ce.w, ce.h), (e = ce.canvas.askFill[0].getContext("2d")).clearRect(0, 0, ce.w, ce.h)
  }

  function v(e) {
    e.clearRect(0, ce.h - ce.px.lbl.h - ce.px.lbl.tick - 1, ce.w, ce.px.lbl.h + ce.px.lbl.tick + 1), e.clearRect(0, 0, ce.w, ce.font.overlaySize + ce.px.lbl.tick + 5);
    var t = 0, n = 0;
    try {
      t = fe.bid.price.length, n = fe.ask.price.length
    } catch (e) {
      return
    }
    if (0 != t || 0 != n) {
      var r = fe.bid.price[0] / RTBTC.quoteInt(), o = fe.ask.price[0] / RTBTC.quoteInt(), i = "", a = 0, s = 0,
        l = o > 0 ? 100 * (o - r) / o : NaN;
      e.font = ce.font.labels, e.lineWidth = 1, e.fillStyle = ce.colors.fill.crosshair, e.textAlign = "center", e.textBaseline = "middle", o > ce.price.low && o < ce.price.high && (i = Currency.format(RTBTC.quote(), o), a = V(o), e.strokeStyle = ce.colors.stroke.ask, F(e, a, e.measureText(i).width), e.fillStyle = ce.colors.fill.flagtext, O(e, i, a)), r > ce.price.low && r < ce.price.high && (e.fillStyle = ce.colors.fill.crosshair, i = Currency.format(RTBTC.quote(), r), s = V(r), e.strokeStyle = ce.colors.stroke.bid, F(e, s, e.measureText(i).width), e.fillStyle = ce.colors.fill.flagtext, O(e, i, s)), o > ce.price.low && o < ce.price.high && r > ce.price.low && r < ce.price.high && !isNaN(l) && (i = l.toFixed(2) + "%", e.fillStyle = ce.colors.fill.ordertext, e.strokeStyle = ce.colors.stroke.order, e.textAlign = "center", e.textBaseline = "top", e.font = ce.font.overlays, e.fillText(i, (a + s) / 2, 1), e.beginPath(), R(e, s, ce.font.overlaySize + ce.px.lbl.tick + 3), j(e, s, ce.font.overlaySize + 3), j(e, a, ce.font.overlaySize + 3), j(e, a, ce.font.overlaySize + ce.px.lbl.tick + 3), e.stroke())
    }
  }

  function b(e) {
    var t = ce.canvas.orders[0].getContext("2d"), n = V(e.price / RTBTC.quoteInt());
    if (!(n < 0 || n > ce.w)) {
      if (e.amount > 0) t.strokeStyle = ce.colors.stroke.up; else {
        if (!(e.amount < 0)) return;
        t.strokeStyle = ce.colors.stroke.down
      }
      ce.orders.length > n && n >= 0 && (t.beginPath(), R(t, n, ce.h), j(t, n, ce.h - ce.px.lbl.h - ce.px.lbl.tick), t.stroke(), void 0 === ce.orders[n] ? ce.orders[n] = 1 : ce.orders[n]++), window.setTimeout(function (e) {
        return function () {
          y(e)
        }
      }(n), ce.orderDelay)
    }
  }

  function y(e) {
    if (ce.orders.length > e && e >= 0) {
      if (void 0 === ce.orders[e]) return;
      if (--ce.orders[e] > 0) return;
      ce.canvas.orders[0].getContext("2d").clearRect(e, ce.h - ce.px.lbl.h - ce.px.lbl.tick, 1, ce.px.lbl.h + ce.px.lbl.tick)
    }
  }

  function x(e, t, n) {
    var r, o = ce.h - ce.px.lbl.h - ce.px.lbl.tick - 2;
    switch (R(e, t, 0), r = 0, n) {
      case ce.DOTTED:
        for (; r < o;) j(e, t, ++r), R(e, t, ++r);
        break;
      case ce.DASHED:
        for (; r < o;) j(e, t, r = (r += 6) > o ? o : r), R(e, t, r += 2);
        break;
      case ce.DASHDOT:
        for (; r < o && (r += 7, r = r > o ? o : r, j(e, t, r), !((r += 4) >= o));) R(e, t, r), j(e, t, r = (r += 2) > o ? o : r), R(e, t, r += 4);
        break;
      case ce.SOLID:
      default:
        j(e, t, o)
    }
  }

  function k(e, t, n) {
    var r, o = ce.w;
    switch (R(e, o, t), r = o, n) {
      case ce.DOTTED:
        for (; r > 1;) j(e, --r, t), R(e, --r, t);
        break;
      case ce.DASHED:
        for (; r > 0;) j(e, r = (r -= 6) < 0 ? 0 : r, t), R(e, r -= 2, t);
        break;
      case ce.DASHDOT:
        for (; r > 0 && (r -= 7, r = r < 0 ? 0 : r, j(e, r, t), !((r -= 4) <= 0));) R(e, r, t), j(e, r = (r -= 2) < 0 ? 0 : r, t), R(e, r -= 4, t);
        break;
      case ce.SOLID:
      default:
        j(e, 0, t)
    }
  }

  function T(e) {
    var t = ce.h - ce.px.lbl.h - ce.px.lbl.tick - 2;
    if (fe.bid.price.length > 0 && fe.ask.price.length > 0) {
      var n = fe.bid.price[0] / RTBTC.quoteInt(), r = fe.ask.price[0] / RTBTC.quoteInt(), o = V(n), i = V(r);
      if (e > o && e < i) return t;
      if (void 0 !== ce.yVals[e]) return ce.yVals[e];
      ce.price.high, ce.price.low;
      var a = e;
      if (z(e) >= r) for (; Math.ceil(1e6 * z(--a)) / 1e6 >= r;) {
        if (void 0 !== ce.yVals[a]) return ce.yVals[a];
        if (a <= 0) break
      } else if (z(e) <= n) for (; Math.floor(1e6 * z(++a)) / 1e6 <= n;) {
        if (void 0 !== ce.yVals[a]) return ce.yVals[a];
        if (a >= ce.w) break
      }
    }
    return t
  }

  function S(e, t) {
    ce.mouse.shift && (N(), A(e, t));
    var n = ce.canvas.i[0].getContext("2d");
    if (!G(e, t)) {
      var r = z(e), o = T(e), i = W(o);
      C(n), n.font = ce.font.labels, n.lineWidth = 1, n.fillStyle = ce.colors.fill.crosshair, n.strokeStyle = ce.colors.stroke.crosshair, n.beginPath(), n.arc(e + .5, o + .5, 2, 0, TWOPI, !1), n.stroke();
      var a = Currency.format(RTBTC.quote(), r), s = i.toFixed(ce.volDecimals);
      F(n, e, n.measureText(a).width), B(n, o, n.measureText(s).width), n.fillStyle = ce.colors.fill.flagtext, n.textAlign = "left", n.textBaseline = "middle", I(n, s, o, !0), n.textAlign = "center", O(n, a, e), ce.px.crosshairs.x = e, ce.px.crosshairs.y = t, ce.interacted = !0
    }
  }

  function C(e, t) {
    ce.interacted = !1;
    var n = e || ce.canvas.i[0].getContext("2d");
    if (!0 !== t) {
      n.font = ce.font.labels;
      var r = T(ce.px.crosshairs.x),
        o = n.measureText(Currency.format("CNY", ce.volume, ce.volDecimals)).width + ce.px.lbl.tick + 6;
      n.clearRect(ce.px.crosshairs.x - 4, r - 4, 8, 8), n.clearRect(0, ce.h - ce.px.lbl.h - ce.px.lbl.tick - 1, ce.w, ce.px.lbl.h + ce.px.lbl.tick + 1), n.clearRect(0, r - ce.px.lbl.font - 3, o, 2 * ce.px.lbl.font + 6)
    } else n.clearRect(0, 0, ce.w, ce.h)
  }

  function E() {
    window.reqAnimFrame(function () {
      C()
    })
  }

  function A(e, t) {
    var n = ce.canvas.sweep[0].getContext("2d"), r = ce.canvas.sweepFill[0].getContext("2d"), o = z(e),
      i = fe.bid.price[0] / RTBTC.quoteInt(), a = fe.ask.price[0] / RTBTC.quoteInt();
    n.clearRect(0, 0, ce.w, ce.h), n.strokeStyle = ce.colors.stroke.order, r.clearRect(0, 0, ce.w, ce.h), r.fillStyle = ce.colors.fill.ordertext, o >= a ? (g(r, ce.sums.ask, fe.ask.price, !1, o), h(n, ce.sums.ask, fe.ask.price, !1, o)) : o <= i && (g(r, ce.sums.bid, fe.bid.price, !0, o), h(n, ce.sums.bid, fe.bid.price, !0, o))
  }

  function N() {
    var e = ce.canvas.sweep[0].getContext("2d"), t = ce.canvas.sweepFill[0].getContext("2d");
    e.clearRect(0, 0, ce.w, ce.h), t.clearRect(0, 0, ce.w, ce.h)
  }

  function P(e, t, n) {
    var r = ce.h - (ce.px.lbl.h - ce.px.lbl.tick) / 2 - 2, o = V(n);
    R(e, o, ce.h - ce.px.lbl.h - 2 * ce.px.lbl.tick - 1), j(e, o, ce.h - ce.px.lbl.h - .5 * ce.px.lbl.tick), e.fillText(t, o, r)
  }

  function O(e, t, n) {
    var r = ce.h - (ce.px.lbl.h - ce.px.lbl.tick) / 2 - 2;
    e.fillText(t, M(n, 10 + e.measureText(t).width), r)
  }

  function D(e, t, n, r) {
    I(e, t, H(n), r)
  }

  function I(e, t, n, r) {
    !0 !== r && (R(e, 0, n), j(e, ce.px.lbl.tick, n)), n = L(n, ce.px.lbl.font + 2), e.save(), e.strokeStyle = ce.colors.fill.blankBG, e.strokeText(t, ce.px.lbl.tick + 2, n), e.restore(), e.fillText(t, ce.px.lbl.tick + 2, n)
  }

  function M(e, t) {
    return e > ce.w - t / 2 ? ce.w - t / 2 : e < t / 2 ? t / 2 : e
  }

  function L(e, t) {
    var n = ce.h - ce.px.lbl.h - ce.px.lbl.tick - 1 - t / 2;
    return e > n ? n : e < t / 2 ? t / 2 : e
  }

  function F(e, t, n) {
    var r = 0 | M(t, n + 10), o = n / 2 + 5 | 0, i = M(t, 7);
    e.beginPath(), R(e, r - o, ce.h - 1), j(e, r + o, ce.h - 1), j(e, r + o, ce.h - ce.px.lbl.h), j(e, i + 3.5, ce.h - ce.px.lbl.h), j(e, i, ce.h - ce.px.lbl.h - 4), j(e, i - 3.5, ce.h - ce.px.lbl.h), j(e, r - o, ce.h - ce.px.lbl.h), j(e, r - o, ce.h - 1), e.fill(), e.stroke()
  }

  function B(e, t, n) {
    var r = ce.px.lbl.tick + 2 + n + 3, o = ce.px.lbl.font / 2;
    t = L(t, ce.px.lbl.font + 2), e.beginPath(), R(e, 0, t), j(e, o, t - 1 - o), e.lineTo(.6 + (0 | r), .5 + (t - 1 - o | 0)), R(e, r, t - 1 - o), j(e, r, t + 1 + o), j(e, o, t + 1 + o), j(e, 0, t), e.fill(), e.stroke()
  }

  function R(e, t, n) {
    e.moveTo(.5 + (0 | t), .5 + (0 | n))
  }

  function j(e, t, n) {
    e.lineTo(.5 + (0 | t), .5 + (0 | n))
  }

  function q(e, t, n) {
    e.lineTo(.6 + (0 | t), .5 + (0 | n))
  }

  function U(e, t, n, r, o) {
    e.fillRect(0 | t, 0 | n, 0 | r, 0 | o)
  }

  function H(e) {
    var t = 1 - e / ce.volume;
    return (ce.h - ce.px.lbl.h - ce.px.lbl.tick - 2) * t | 0
  }

  function V(e) {
    return ce.w * (e - ce.price.low) / ce.price.range | 0
  }

  function z(e) {
    return ce.price.low + e / ce.w * ce.price.range
  }

  function W(e) {
    return (1 - e / (ce.h - ce.px.lbl.h - ce.px.lbl.tick - 2)) * ce.volume
  }

  function G(e, t) {
    return !(t < ce.h - ce.px.lbl.h - ce.px.lbl.tick - 1)
  }

  function Y() {
    ce.canvas.i.on({
      mousedown: function (e) {
        Q(e), ce.mouse.sx = ce.mouse.x, ce.mouse.sy = ce.mouse.y, ce.mouse.s0 = ce.price.scale, ce.mouse.down = !0, G(ce.mouse.x, ce.mouse.y) && (ce.mouse.zoom = !0), stopEvent(e)
      }, click: function (e) {
        Q(e), ce.mouse.sx = ce.mouse.x, ce.mouse.sy = ce.mouse.y, ce.mouse.s0 = ce.price.scale, S(ce.mouse.x, ce.mouse.y)
      }, mouseup: function (e) {
        ce.mouse.down = !1, ce.mouse.zoom = !1, e.ctrlKey && e.shiftKey || Z(e)
      }, mouseout: function (e) {
        ce.mouse.down = !1, ce.mouse.zoom = !1, E(), N()
      }, mousemove: function (e) {
        ce.mouse.down ? (J(e), ce.mouse.zoom && ce.canvas.i.css("cursor", "e-resize")) : (ce.mouse.shift && !e.shiftKey && N(), Q(e), G(ce.mouse.x, ce.mouse.y) ? (E(), ce.canvas.i.css("cursor", "e-resize")) : (S(ce.mouse.x, ce.mouse.y), ce.canvas.i.css("cursor", "pointer")))
      }, dblclick: function (e) {
        ce.mouse.down = !1, ce.mouse.zoom = !1, ce.price.scale != ce.price.defaultScale && (ce.price.scale = ce.price.defaultScale, ce.flags.recompute = !0, i(), stopEvent(e))
      }
    }), ce.canvas.i.bind("pinch", K), ce.canvas.i.bind("mousewheel", X), RTBTC.handler("newbook", ce.element, ie), RTBTC.handler("orders", ce.element, ae)
  }

  function X(e, t, n, r) {
    ce.allowScale = !0, stopEvent(e);
    var o = 1;
    if (void 0 !== n || void 0 !== r) {
      0 != n ? o = 1 - .01 * n : 0 != r && (o = 1 - .1 * r);
      var a = ce.price.scale;
      ce.price.scale *= o, ce.price.scale > ce.price.maxScale && (ce.price.scale = ce.price.maxScale), ce.price.scale < ce.price.minScale && (ce.price.scale = ce.price.minScale), ce.price.scale != a && i()
    }
  }

  function K(e, t) {
    if (null != t.scale) {
      w = ce.px.bar.width;
      var n = ce.price.scale;
      ce.price.scale *= t.scale, ce.price.scale > ce.price.maxScale && (ce.price.scale = ce.price.maxScale), ce.price.scale < ce.price.minScale && (ce.price.scale = ce.price.minScale), ce.price.scale != n && i()
    }
    t.originalEvent.preventDefault(), t.originalEvent.stopPropagation()
  }

  function Q(e) {
    if (e.offsetX) ce.mouse.x = e.offsetX, ce.mouse.y = e.offsetY; else if (e.pageX) {
      var t = ce.canvas.i.offset();
      ce.mouse.x = e.pageX - t.left, ce.mouse.y = e.pageY - t.top
    }
    ce.mouse.shift = e.shiftKey
  }

  function J(e) {
    if (Q(e), ce.mouse.zoom) {
      var t = ce.mouse.x - ce.mouse.sx, n = ce.price.scale;
      e.shiftKey ? ce.price.scale = ce.mouse.s0 * (1 - t / 1e3) : ce.price.scale = ce.mouse.s0 * (1 - t / 100), ce.price.scale > ce.price.maxScale && (ce.price.scale = ce.price.maxScale), ce.price.scale < ce.price.minScale && (ce.price.scale = ce.price.minScale), ce.price.scale != n && i()
    }
  }

  function Z(e) {
    if (Q(e), !G(ce.mouse.x, ce.mouse.y)) {
      var t = +z(ce.mouse.x).toFixed(ce.price.decimals), n = "", r = 0, o = {side: "", price: t};
      fe.bid.price.length > 0 && t <= fe.bid.price[0] / RTBTC.quoteInt() ? ce.mouse.shift ? (n = "sell", r = OBD.sumToPrice(t, "bid"), o.amount = r) : n = "buy" : fe.ask.price.length > 0 && t >= fe.ask.price[0] / RTBTC.quoteInt() && (ce.mouse.shift ? (n = "buy", r = OBD.sumToPrice(t, "ask"), o.amount = r) : n = "sell"), o.side = n, RTBTC.trigger("set-order-entry-" + n, o), ce.mouse.shift && N()
    }
  }

  function ee() {
  }

  function te() {
    var e = $(ce.element).width(), t = $(ce.element).height();
    ce.w == e && ce.h == t || (ce.w = e, ce.h = t, $("canvas", ce.element).each(function (e, t) {
      $(t).attr("width", ce.w + "px").attr("height", ce.h + "px")
    }), i(!0))
  }

  function ne() {
    if (!isNaN(parseInt(ce.w)) && (ce.w = 0 | ce.w, ce.w >= 0)) {
      try {
        ce.orders = new Array(ce.w + 1), ce.yVals = new Array(ce.w + 1)
      } catch (e) {
        DEBUG && ue("Exception on Array size");
        try {
          "console" in window && console.log("Warning: " + ce.w)
        } catch (e) {
        }
      }
      i()
    }
  }

  function re() {
    ce.module.setTitle(_("Visual Depth"))
  }

  function oe(e) {
    var t = e.price / RTBTC.quoteInt();
    s(), "bid" == e.location ? t >= ce.price.low && (ce.flags.redraw.bid = !0, o()) : "ask" == e.location && t <= ce.price.high && (ce.flags.redraw.ask = !0, o()), ce.settings.orders && b(e)
  }

  function ie() {
    ce.flags.recompute = !0, ce.flags.redraw.base = !0, ce.flags.redraw.bid = !0, ce.flags.redraw.ask = !0, C(null, !0), i(!0)
  }

  function ae() {
    var e, t, n = UserAccount.orders(), r = null, o = 0;
    if (n.hasOwnProperty("BIJIE")) {
      n = n.BIJIE;
      for (e in n) n.hasOwnProperty(e) && (o++, null == r && ((r = ce.canvas.userOrders[0].getContext("2d")).clearRect(0, 0, ce.w, ce.h), r.text = ce.font.overlays, r.textBaseline = "bottom", r.strokeStyle = ce.colors.stroke.order, r.fillStyle = ce.colors.fill.ordertext, r.beginPath()), (t = n[e]).quote == RTBTC.quote() && se(r, t));
      null != r && (r.fill(), r.stroke()), 0 == o && ce.userOrders > 0 && (r = ce.canvas.userOrders[0].getContext("2d")).clearRect(0, 0, ce.w, ce.h), ce.userOrders = o
    }
  }

  function se(e, t) {
    var n = V(t.price), r = 0, o = "", i = "", a = t.quote;
    n < 0 || n > ce.w || (R(e, n, r = T(n)), j(e, n - ce.px.lbl.tick / 2, r - ce.px.lbl.tick), q(e, n + ce.px.lbl.tick / 2, r - ce.px.lbl.tick), j(e, n, r), "buy" == t.action ? (o = _("BUY"), e.textAlign = "left", n -= ce.px.lbl.tick / 2) : "sell" == t.action && (o = _("SELL"), e.textAlign = "right", n += ce.px.lbl.tick / 2), i = Currency.format(a, t.price), o += " " + RTBTC.numFormatShort(t.amount, 8) + " @ " + i, e.fillText(o, n, r - 1.5 * ce.px.lbl.tick))
  }

  function le(e) {
    Colors.hasOwnProperty(e) && (ce.colors = Colors[e], i())
  }

  var ce = {
    element: "",
    parent: null,
    module: null,
    self: null,
    canvas: {
      bg: null,
      bidFill: null,
      askFill: null,
      bid: null,
      ask: null,
      sweepFill: null,
      sweep: null,
      orders: null,
      userOrders: null,
      axes: null,
      lbl: null,
      i: null
    },
    w: 0,
    h: 0,
    price: {low: 5, high: 10, range: 5, scale: .01, defaultScale: .01, minScale: 1e-5, maxScale: 1e5, decimals: 4},
    volume: 100,
    volDecimals: 2,
    orders: [],
    orderDelay: 1250,
    userOrders: 0,
    yVals: [],
    allowScale: !1,
    sums: {bid: [], ask: []},
    log: {m: 0, b: 0, b10: 0},
    px: {pad: 5, lbl: {w: 65, h: 16, tick: 4, halftick: 2, font: 11}, crosshairs: {x: 0, y: 0}},
    flags: {redraw: {base: !0, bid: !0, ask: !0}, recompute: !0, widget: !1},
    interacted: !1,
    mouse: {down: !1, zoom: !1, x: 0, y: 0, sx: 0, sy: 0, s0: null, shift: !1},
    colors: Colors.c1,
    SOLID: 0,
    DOTTED: 1,
    DASHED: 2,
    DASHDOT: 3,
    font: {
      precision: 6,
      labels: '11px/1.0em Consolas, "Courier New", monospace',
      size: 11,
      lineHeight: 1,
      face: 'Consolas, "Courier New", monospace',
      overlays: "10px/1.0em Arial, sans-serif",
      overlaySize: 10,
      heading: "12px/1.0em Arial, sans-serif",
      headingBold: "bold 12px/1.0em Arial, sans-serif",
      headingSize: 12
    },
    watermark: "© RTBTC",
    settings: {grid: !0, fill: !0, orders: !0},
    debug: RTBTC.isDebug()
  }, ue = RTBTC.debug, fe = OBD.book;
  return {
    build: function (n, r, o) {
      return ce.element = n, ce.parent = r, e(), Y(), t(o), window.setTimeout(function () {
        RTBTC.trigger("what-theme", null)
      }, 100), this
    }, module: function (e) {
      return ce.module = e, re(), RTBTC.handler("newbook", ce.module.id(), ce.self.onBook), RTBTC.handler("depth", ce.module.id(), ce.self.onDepth), RTBTC.handler("theme", ce.module.id(), ce.self.onTheme), RTBTC.handler("orders", ce.module.id(), ae), RTBTC.handler("order-canceled", ce.module.id(), ae), this
    }, self: function (e) {
      ce.self = e
    }, settings: function () {
      return r()
    }, save: function () {
      return n()
    }, load: function (e) {
      t(e), i()
    }, unload: function () {
      RTBTC.unregisterAll(ce.module.id())
    }, onDepth: function (e) {
      oe(e)
    }, onTheme: function (e) {
      le(e)
    }, onBook: function (e) {
      ie()
    }, resize: function (e) {
      ee(), window.reqAnimFrame(te), ne()
    }, resizeStop: function () {
      ne()
    }, drag: function (e) {
      e
    }, widget: function (e) {
      return null == e || void 0 === e ? ce.flags.widget : (ce.flags.widget = e, this)
    }, internals: ce.debug ? function () {
      return ce
    } : function () {
      return {}
    }
  }
}, custLine = function () {
  function e() {
    window.reqAnimFrame(function () {
      t()
    })
  }

  function t() {
    D.canvas[0].getContext("2d").clearRect(0, 0, D.chart.w, D.chart.h);
    for (var e = 0; e < D.objLines.length; e++) D.objLines[e].draw();
    n()
  }

  function n() {
    var e = b();
    I.globalCompositeOperation = "destination-out", I.fillStyle = "rgba(250,250,250,1)", I.beginPath(), I.rect(0, 0, D.chart.w, D.chart.h), o(I, e.x, e.y), i(I, e.x, e.y + e.h), i(I, e.x + e.w, e.y + e.h), i(I, e.x + e.w, e.y), i(I, e.x, e.y), I.closePath(), I.fill(), I.globalCompositeOperation = "source-over"
  }

  function r(e, t, n, r, o) {
    e.strokeRect(.5 + (0 | t), .5 + (0 | n), 0 | r, 0 | o)
  }

  function o(e, t, n) {
    e.moveTo(.5 + (0 | t), .5 + (0 | n))
  }

  function i(e, t, n) {
    e.lineTo(.5 + (0 | t), .5 + (0 | n))
  }

  function a(e) {
    I.strokeStyle = C.line, I.lineWidth = 1, I.beginPath();
    for (n = 0; n < e.points.length; n++) {
      r = e.points[n];
      o(I, r[0], r[1]), i(I, r[2], r[3])
    }
    I.stroke(), I.fillStyle = C.text, I.textBaseline = "bottom", I.textAlign = "left", I.font = "12px Arial";
    var t = 0;
    if ("periodicLine" != e.name && "fibonacciSequence" != e.name || (t = 40), e.text.length > 0) {
      for (var n = 0; n < e.points.length; n++) {
        var r = e.points[n];
        I.fillText(e.text[n], r[0], r[1] + t)
      }
      I.stroke()
    }
    D.selectDrawObj && e.id == D.selectDrawObj.id && u(e)
  }

  function s(e) {
    I.strokeStyle = C.line, I.lineWidth = 1, I.beginPath();
    for (var t = 0; t < e.points.length; t++) {
      n = e.points[t];
      o(I, n[0], n[1]), i(I, n[2], n[3])
    }
    I.stroke(), I.fillStyle = C.text, I.textBaseline = "bottom", I.textAlign = "left", I.font = "12px Arial";
    var n = e.points[0];
    I.fillText(e.text[0], n[0], n[1]), I.fillText(e.text[1], n[2], n[3]), I.stroke(), D.selectDrawObj && e.id == D.selectDrawObj.id && u(e)
  }

  function l(e) {
    I.fillStyle = I.strokeStyle = e.up ? C.upArrow : C.downArrow, I.lineWidth = 1, I.beginPath();
    var t = e.points[0];
    o(I, t[0], t[1]);
    for (var n = 0; n < e.points.length; n++) t = e.points[n], i(I, t[0], t[1]);
    I.stroke(), I.fill()
  }

  function c(e) {
    I.strokeStyle = C.line, I.lineWidth = 1;
    for (var t = 0; t < e.points.length; t++) {
      var n = e.points[t];
      r(I, n[0], n[1], n[2] - n[0], n[3] - n[1])
    }
    I.fillStyle = C.text, I.textBaseline = "bottom", I.textAlign = "left", I.font = "12px Arial", (n = e.points[0])[0] <= n[2] ? I.textAlign = "left" : I.textAlign = "right", I.fillText(e.text[0], n[0], n[1]), n[0] > n[2] ? I.textAlign = "left" : I.textAlign = "right", I.textBaseline = "top", I.fillText(e.text[1], n[2], n[3]), D.selectDrawObj && e.id == D.selectDrawObj.id && u(e)
  }

  function u(e) {
    I.strokeStyle = C.pot, I.fillStyle = "black", I.lineWidth = 1;
    var t = 3;
    1 == e.large && (t = 5), e.pots.forEach(function (e) {
      I.beginPath(), I.arc(e[0] + .5, e[1] + .5, t, 0, 2 * Math.PI, !0), I.stroke(), I.beginPath(), I.arc(e[0] + .5, e[1] + .5, t - 1, 0, 2 * Math.PI, !0), I.fill()
    })
  }

  function f() {
    function e() {
      return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
    }

    return e() + e() + "-" + e() + "-" + e()
  }

  function d(e) {
    var t = !1;
    return e.forEach(function (e) {
      var n = D.mouse.x, r = D.mouse.y, o = e[0], i = e[1], a = e[2], s = e[3], l = s - i, c = o - a, u = a * i - o * s,
        f = l, d = c, p = u + 5 * Math.sqrt(l * l + c * c), h = l, g = c, m = u - 5 * Math.sqrt(l * l + c * c);
      f * n + d * r + p > 0 && h * n + g * r + m < 0 && -c * n + l * r + (c * o - l * i) > 0 && -c * n + l * r + (c * a - l * s) < 0 && (t = !0)
    }), t
  }

  function p() {
    D.objLines && D.objLines.forEach(function (e) {
      e.selectPotIndex = null
    })
  }

  function h(e) {
    var t = !1;
    return e.pots.forEach(function (n, r) {
      var o = D.mouse.x, i = D.mouse.y;
      Math.sqrt((o - n[0]) * (o - n[0]) + (i - n[1]) * (i - n[1])) <= 5 && (e.selectPotIndex = r, t = !0)
    }), t
  }

  function g() {
    D.selectDrawObj = null;
    for (var t = 0; t < D.objLines.length; t++) switch (drawType = D.objLines[t].drawType || D.LINES, drawType) {
      case D.LINES:
        var n = d(D.objLines[t].points), r = h(D.objLines[t]);
        1 != n && 1 != r || (D.selectDrawObj = D.objLines[t], 0 == r && (D.selectDrawObj.selectPotIndex = null));
        break;
      case D.RECT:
        var o = [];
        D.objLines[t].points.forEach(function (e) {
          o.push([e[0], e[1], e[2], e[1]]), o.push([e[2], e[1], e[2], e[3]]), o.push([e[2], e[3], e[0], e[3]]), o.push([e[0], e[3], e[0], e[1]])
        });
        var n = d(o), r = h(D.objLines[t]);
        1 != n && 1 != r || (D.selectDrawObj = D.objLines[t], 0 == r && (D.selectDrawObj.selectPotIndex = null));
        break;
      case D.ARROW:
        PtInPolygon([D.mouse.x, D.mouse.y], D.objLines[t].points) && (D.selectDrawObj = D.objLines[t])
    }
    e()
  }

  function m() {
    D.chart.canvas.i.on({
      mousedown: function (t) {
        0 == t.button && (v(t), D.mouseOri.x = D.mouse.x, D.mouseOri.y = D.mouse.y, D.mouseDown = !0, D.curLine ? (D.objLines.push(D.curLine), D.curLine.init(), D.selectDrawObj = D.curLine, D.curLine = null) : g(), e())
      }, mousemove: function (t) {
        v(t);
        var n = !1;
        if (D.selectDrawObj && 1 == D.mouseDown && (D.selectDrawObj.moving(), n = !0), D.selectDrawObj && 0 == D.mouseDown) {
          var r = D.selectDrawObj.large, o = h(D.selectDrawObj);
          D.selectDrawObj.large = 1 == o
        }
        D.selectDrawObj && (n || r != D.selectDrawObj.large) && e()
      }
    }), $(document).on({
      mouseup: function (e) {
        1 == D.mouseDown && (D.mouseDown = !1, p())
      }, keydown: function (t) {
        var n = t || window.event;
        46 == (n.keyCode || n.which || n.charCode) && D.selectDrawObj && (D.objLines.forEach(function (e, t) {
          e.name == D.selectDrawObj.name && e.id == D.selectDrawObj.id && (D.objLines.splice(t, 1), 0 == D.objLines.length && D.nullDrawObj && D.nullDrawObj())
        }), e())
      }
    })
  }

  function v(e) {
    if (e.offsetX) D.mouse.x = e.offsetX, D.mouse.y = e.offsetY; else if (e.pageX) {
      var t = D.canvas.offset();
      D.mouse.x = e.pageX - t.left, D.mouse.y = e.pageY - t.top
    }
  }

  function b() {
    return {
      x: D.chart.offset,
      y: 0,
      w: D.chart.w - D.chart.offset - D.chart.px.lbl.w - D.chart.px.lbl.tick - 1,
      h: D.chart.slots[0].px + D.chart.slots[0].h
    }
  }

  function y() {
    this.name = "percentLine", this.points = [], this.pots = [], this.text = [], this.selectPotIndex = 1;
    var e = [0, 1 / 8, .25, 1 / 3, 3 / 8, .5, 5 / 8, 2 / 3, .75, 7 / 8, 1];
    this.init = function () {
      var t = b();
      this.points = [];
      for (var n = D.chart.yToVal(0, D.mouse.y), r = 0; r < 11; r++) this.points.push([t.x, D.mouse.y, t.w + t.x, D.mouse.y]), this.text.push((100 * e[r]).toFixed(2) + "% " + n.toFixed(2));
      return this.pots = [], this.pots.push([D.w / 2, D.mouse.y, 0]), this.pots.push([D.w / 2, D.mouse.y, 10]), this.points
    }, this.moving = function () {
      if (D.mouseDown) {
        var t = D.mouse.y - D.mouseOri.y;
        null != this.selectPotIndex && 0 != t ? 1 == this.selectPotIndex ? (this.points.forEach(function (n, r, o) {
          n[1] = n[3] += t * e[r]
        }), this.pots.forEach(function (n, r, o) {
          n[1] += t * e[n[2]]
        })) : 0 == this.selectPotIndex && (this.points.forEach(function (n, r, o) {
          n[1] = n[3] += t * (1 - e[r])
        }), this.pots.forEach(function (n, r, o) {
          n[1] += t * (1 - e[n[2]])
        })) : null == this.selectPotIndex && 0 != t && (this.points.forEach(function (e, n, r) {
          e[1] = e[3] += t
        }), this.pots.forEach(function (e, n, r) {
          e[1] += t
        })), this.text = [];
        var n = this;
        this.points.forEach(function (t, r) {
          var o = D.chart.yToVal(0, t[1]);
          n.text.push((100 * e[r]).toFixed(2) + "% " + o.toFixed(2))
        }), D.mouseOri.y = D.mouse.y
      }
    }, this.draw = function () {
      a(this)
    }
  }

  function x() {
    this.name = "godPercentLines", this.points = [], this.pots = [], this.text = [], this.selectPotIndex = 1;
    var e = [0, .191, .382, .5, .618, 1, 1.191, 1.382, 1.5, 1.618, 2];
    this.init = function () {
      var t = b();
      this.points = [];
      for (var n = D.chart.yToVal(0, D.mouse.y), r = 0; r < 11; r++) this.points.push([t.x, D.mouse.y, t.w + t.x, D.mouse.y]), this.text.push((100 * e[r]).toFixed(2) + "% " + n.toFixed(2));
      return this.pots = [], this.pots.push([D.w / 2, D.mouse.y, 0]), this.pots.push([D.w / 2, D.mouse.y, 5]), this.points
    }, this.moving = function () {
      if (D.mouseDown) {
        var t = D.mouse.y - D.mouseOri.y;
        null != this.selectPotIndex && 0 != t ? 1 == this.selectPotIndex ? (this.points.forEach(function (n, r, o) {
          n[1] = n[3] += t * e[r]
        }), this.pots.forEach(function (n, r, o) {
          n[1] += t * e[n[2]]
        })) : 0 == this.selectPotIndex && (this.points.forEach(function (n, r, o) {
          n[1] = n[3] += t * (1 - e[r])
        }), this.pots.forEach(function (n, r, o) {
          n[1] += t * (1 - e[n[2]])
        })) : null == this.selectPotIndex && 0 != t && (this.points.forEach(function (e, n, r) {
          e[1] = e[3] += t
        }), this.pots.forEach(function (e, n, r) {
          e[1] += t
        })), this.text = [];
        var n = this;
        this.points.forEach(function (t, r) {
          var o = D.chart.yToVal(0, t[1]);
          n.text.push((100 * e[r]).toFixed(2) + "% " + o.toFixed(2))
        }), D.mouseOri.y = D.mouse.y
      }
    }, this.draw = function () {
      a(this)
    }
  }

  function w() {
    this.name = "wavePercentLines", this.points = [], this.pots = [], this.text = [], this.selectPotIndex = 1;
    var e = [0, .25, .333, .5, 1];
    this.init = function () {
      var t = b();
      this.points = [];
      for (var n = D.chart.yToVal(0, D.mouse.y), r = 0; r < 5; r++) this.points.push([t.x, D.mouse.y, t.w + t.x, D.mouse.y]), this.text.push((100 * e[r]).toFixed(2) + "% " + n.toFixed(2));
      return this.pots = [], this.pots.push([D.w / 2, D.mouse.y, 0]), this.pots.push([D.w / 2, D.mouse.y, 4]), this.points
    }, this.moving = function () {
      if (D.mouseDown) {
        var t = D.mouse.y - D.mouseOri.y;
        null != this.selectPotIndex && 0 != t ? 1 == this.selectPotIndex ? (this.points.forEach(function (n, r, o) {
          n[1] = n[3] += t * e[r]
        }), this.pots.forEach(function (n, r) {
          n[1] += t * e[n[2]]
        })) : 0 == this.selectPotIndex && (this.points.forEach(function (n, r, o) {
          n[1] = n[3] += t * (1 - e[r])
        }), this.pots.forEach(function (n, r, o) {
          n[1] += t * (1 - e[n[2]])
        })) : null == this.selectPotIndex && 0 != t && (this.points.forEach(function (e, n, r) {
          e[1] = e[3] += t
        }), this.pots.forEach(function (e, n, r) {
          e[1] += t
        })), this.text = [];
        var n = this;
        this.points.forEach(function (t, r) {
          var o = D.chart.yToVal(0, t[1]);
          n.text.push((100 * e[r]).toFixed(2) + "% " + o.toFixed(2))
        }), D.mouseOri.y = D.mouse.y
      }
    }, this.draw = function () {
      a(this)
    }
  }

  function k() {
    this.name = "fibonacciSequence", this.points = [], this.pots = [], this.text = [], this.selectPotIndex = null;
    var e = [];
    this.id = f(), this.init = function () {
      var t = b();
      this.points = [];
      D.chart.yToVal(0, D.mouse.y);
      for (var n = 0; n < 100; n++) 0 == n ? e.push(0) : e.push(n + e[n - 1]);
      for (var r = D.chart.xToBar(D.mouse.x), o = 0; o < e.length; o++) {
        var i = D.chart.toPxX(r - e[o]);
        if (i > t.x + t.w) break;
        this.points.push([i, 0, i, t.h]), this.text.push(o)
      }
      return this.pots = [], this.pots.push([D.chart.toPxX(r), t.h / 2, 0]), this.points
    }, this.moving = function () {
      if (D.mouseDown) {
        var t = b();
        this.points = [], this.text = [];
        for (var n = D.chart.xToBar(D.mouse.x), r = 0; r < e.length; r++) {
          var o = D.chart.toPxX(n - e[r]);
          if (o > t.x + t.w) break;
          this.points.push([o, 0, o, t.h]), this.text.push(r)
        }
        this.pots.forEach(function (e, t, r) {
          e[0] = D.chart.toPxX(n)
        })
      }
    }, this.draw = function () {
      a(this)
    }
  }

  function T() {
    this.name = "periodicLine", this.points = [], this.pots = [], this.text = [], this.id = f(), this.selectPotIndex = 1;
    var e = 0;
    this.init = function () {
      var e = b();
      this.points = [];
      D.chart.yToVal(0, D.mouse.y);
      for (var t = D.chart.xToBar(D.mouse.x), n = 0; n < 300; n++) {
        var r = D.chart.toPxX(t - n);
        this.points.push([r, 0, r, e.h]), this.text.push(n)
      }
      return this.pots = [], this.pots.push([D.chart.toPxX(t), e.h / 2, 0]), this.pots.push([D.chart.toPxX(t - 1), e.h / 2, 0]), this.points
    }, this.moving = function () {
      if (D.mouseDown) {
        b();
        var t = D.mouse.x - D.mouseOri.x;
        if (null != this.selectPotIndex && 0 != t) if (0 == this.selectPotIndex) {
          e += t;
          for (var n = parseInt(e / (D.chart.px.bar.spacing + D.chart.px.bar.width)), r = 0; r < this.points.length; r++) this.points[r][0] = this.points[r][2] += n * (D.chart.px.bar.spacing + D.chart.px.bar.width);
          this.pots[1][0] += n * (D.chart.px.bar.spacing + D.chart.px.bar.width), this.pots[0][0] += n * (D.chart.px.bar.spacing + D.chart.px.bar.width), e %= D.chart.px.bar.spacing + D.chart.px.bar.width
        } else {
          e += t;
          for (var n = parseInt(e / (D.chart.px.bar.spacing + D.chart.px.bar.width)), r = 0; r < this.points.length; r++) this.points[r][0] = this.points[r][2] += r * n * (D.chart.px.bar.spacing + D.chart.px.bar.width), this.text[r] += n * r;
          this.pots[1][0] += n * (D.chart.px.bar.spacing + D.chart.px.bar.width), e %= D.chart.px.bar.spacing + D.chart.px.bar.width
        }
        D.mouseOri.x = D.mouse.x
      }
    }, this.draw = function () {
      a(this)
    }
  }

  function S() {
    this.name = "lineSegment", this.points = [], this.pots = [], this.text = [], this.id = f(), this.selectPotIndex = 1;
    var e = 0;
    this.init = function () {
      b();
      this.points = [];
      for (var e = D.chart.yToVal(0, D.mouse.y), t = D.chart.xToBar(D.mouse.x), n = D.chart.barToIndex(t), r = new Date(D.chart.bars.data[n][0]).Format("yyyy.MM.dd") + " " + e.toFixed(2), o = D.chart.toPxX(t), i = D.chart.toPxY(e, 0), a = 0; a < 1; a++) this.points.push([o, i, o, i]), this.text.push(r);
      return this.pots = [], this.pots.push([o, i]), this.pots.push([o, i]), this.points
    }, this.moving = function () {
      if (D.mouseDown) {
        var t = D.mouse.y - D.mouseOri.y, n = D.mouse.x - D.mouseOri.x;
        e += n;
        var r = parseInt(e / (D.chart.px.bar.spacing + D.chart.px.bar.width)) * (D.chart.px.bar.spacing + D.chart.px.bar.width);
        null == this.selectPotIndex || 0 == t && 0 == r ? null != this.selectPotIndex || 0 == t && 0 == r || (this.points.forEach(function (e, n, o) {
          e[0] += r, e[1] += t, e[2] += r, e[3] += t
        }), this.pots.forEach(function (e, n, o) {
          e[1] += t, e[0] += r
        })) : 1 == this.selectPotIndex ? (this.points[0][2] += r, this.points[0][3] += t, this.pots[1][0] += r, this.pots[1][1] += t) : 0 == this.selectPotIndex && (this.points[0][0] += r, this.points[0][1] += t, this.pots[0][0] += r, this.pots[0][1] += t), this.text = [];
        var o = this.points[0], i = D.chart.yToVal(0, o[1]), a = D.chart.xToBar(o[0]), s = D.chart.barToIndex(a),
          l = D.chart.bars.data[s] ? new Date(D.chart.bars.data[s][0]).Format("yyyy.MM.dd") : "";
        this.text.push(l + " " + i.toFixed(2)), i = D.chart.yToVal(0, o[3]), a = D.chart.xToBar(o[2]), s = D.chart.barToIndex(a), l = D.chart.bars.data[s] ? new Date(D.chart.bars.data[s][0]).Format("yyyy.MM.dd") : "", this.text.push(l + " " + i.toFixed(2)), e %= D.chart.px.bar.spacing + D.chart.px.bar.width, D.mouseOri.y = D.mouse.y, D.mouseOri.x = D.mouse.x
      }
    }, this.draw = function () {
      s(this)
    }
  }

  function E() {
    function e(e, t) {
      var n = D.chart.bars.data.slice(e, t + 1), r = n.length, o = (1 + r) / 2, i = 0, a = 0, s = 0;
      n.forEach(function (e, t) {
        i += e[4], a += e[4] * (t + 1), s += (t + 1) * (t + 1)
      });
      var l, c, u = i / r, f = (a - r * o * u) / (s - r * o * o), d = u - f * o, p = d + 1 * f, h = d + f * r, g = 0,
        m = 0;
      n.forEach(function (e, t) {
        var n = (e[2] - (t + 1) * f - d) / Math.sqrt(d * d + f * f);
        n > g && (g = n, l = t), (n = (e[3] - (t + 1) * f - d) / Math.sqrt(d * d + f * f)) < m && (m = n, c = t)
      });
      var v = n[l || 0][2] - ((l || 0) + 1) * f, b = f, y = v + 1 * b, x = v + b * r,
        w = n[c || 0][3] - ((c || 0) + 1) * f, $ = f;
      return [[p, h], [y, x], [w + 1 * $, w + $ * r]]
    }

    this.name = "regressionLine", this.points = [], this.pots = [], this.text = [], this.id = f(), this.selectPotIndex = 1;
    var t = 0;
    this.init = function () {
      var e = b();
      this.points = [];
      for (var t = D.chart.yToVal(0, D.mouse.y), n = D.chart.xToBar(D.mouse.x), r = (D.chart.barToIndex(n), D.chart.toPxX(n)), o = (D.chart.toPxY(t, 0), 0); o < 2; o++) this.points.push([r, 0, r, e.h]);
      for (var i = 0; i < 3; i++) this.points.push([r, 0, r, 0]);
      return this.pots = [], this.pots.push([r, e.h / 2]), this.pots.push([r, e.h / 2]), this.points
    }, this.moving = function () {
      if (D.mouseDown) {
        var n = D.mouse.y - D.mouseOri.y, r = D.mouse.x - D.mouseOri.x;
        t += r;
        var o = parseInt(t / (D.chart.px.bar.spacing + D.chart.px.bar.width)) * (D.chart.px.bar.spacing + D.chart.px.bar.width);
        null == this.selectPotIndex || 0 == n && 0 == o ? null != this.selectPotIndex || 0 == n && 0 == o || (this.points.forEach(function (e, t, n) {
          e[0] += o, e[2] += o
        }), this.pots.forEach(function (e, t, n) {
          e[0] += o
        })) : 1 == this.selectPotIndex ? (this.points[1][0] = this.points[1][2] += o, this.points[2][2] += o, this.points[3][2] += o, this.points[4][2] += o, this.pots[1][0] += o) : 0 == this.selectPotIndex && (this.points[0][0] = this.points[0][2] += o, this.points[2][0] += o, this.points[3][0] += o, this.points[4][0] += o, this.pots[0][0] += o), index1 = D.chart.barToIndex(D.chart.xToBar(this.points[0][0])), index2 = D.chart.barToIndex(D.chart.xToBar(this.points[1][0]));
        var i, a = 0, s = 0;
        index1 > index2 ? (i = e(index2, index1), a = D.chart.toPxY(i[0][0], 0), s = D.chart.toPxY(i[0][1], 0), y2 = D.chart.toPxY(i[1][0], 0), y3 = D.chart.toPxY(i[1][1], 0), y4 = D.chart.toPxY(i[2][0], 0), y5 = D.chart.toPxY(i[2][1], 0), this.points[2][3] = a, this.points[2][1] = s, this.points[3][3] = y2, this.points[3][1] = y3, this.points[4][3] = y4, this.points[4][1] = y5) : index1 < index2 ? (i = e(index1, index2), a = D.chart.toPxY(i[0][0], 0), s = D.chart.toPxY(i[0][1], 0), y2 = D.chart.toPxY(i[1][0], 0), y3 = D.chart.toPxY(i[1][1], 0), y4 = D.chart.toPxY(i[2][0], 0), y5 = D.chart.toPxY(i[2][1], 0), this.points[2][3] = s, this.points[2][1] = a, this.points[3][3] = y3, this.points[3][1] = y2, this.points[4][3] = y5, this.points[4][1] = y4) : (this.points[2][3] = 0, this.points[2][1] = 0, this.points[3][3] = 0, this.points[3][1] = 0, this.points[4][3] = 0, this.points[4][1] = 0), t %= D.chart.px.bar.spacing + D.chart.px.bar.width, D.mouseOri.y = D.mouse.y, D.mouseOri.x = D.mouse.x
      }
    }, this.draw = function () {
      a(this)
    }
  }

  function A() {
    this.name = "rectLine", this.drawType = D.RECT, this.id = f(), this.points = [], this.pots = [], this.text = [], this.selectPotIndex = 1;
    var e = 0;
    this.init = function () {
      b();
      this.points = [];
      for (var e = D.chart.yToVal(0, D.mouse.y), t = D.chart.xToBar(D.mouse.x), n = D.chart.barToIndex(t), r = new Date(D.chart.bars.data[n][0]).Format("yyyy.MM.dd") + " " + e.toFixed(2), o = D.chart.toPxX(t), i = D.chart.toPxY(e, 0), a = 0; a < 1; a++) this.points.push([o, i, o, i]);
      return this.text.push(r), this.text.push(r), this.pots = [], this.pots.push([o, i]), this.pots.push([o, i]), this.points
    }, this.moving = function () {
      if (D.mouseDown) {
        var t = D.mouse.y - D.mouseOri.y, n = D.mouse.x - D.mouseOri.x;
        e += n;
        var r = parseInt(e / (D.chart.px.bar.spacing + D.chart.px.bar.width)) * (D.chart.px.bar.spacing + D.chart.px.bar.width);
        null == this.selectPotIndex || 0 == t && 0 == r ? null != this.selectPotIndex || 0 == t && 0 == r || (this.points.forEach(function (e, n, o) {
          e[0] += r, e[1] += t, e[2] += r, e[3] += t
        }), this.pots.forEach(function (e, n, o) {
          e[1] += t, e[0] += r
        })) : 1 == this.selectPotIndex ? (this.points[0][2] += r, this.points[0][3] += t, this.pots[1][0] += r, this.pots[1][1] += t) : 0 == this.selectPotIndex && (this.points[0][0] += r, this.points[0][1] += t, this.pots[0][0] += r, this.pots[0][1] += t), this.text = [];
        var o = this.points[0], i = D.chart.yToVal(0, o[1]), a = D.chart.xToBar(o[0]), s = D.chart.barToIndex(a),
          l = D.chart.bars.data[s] ? new Date(D.chart.bars.data[s][0]).Format("yyyy.MM.dd") : "";
        this.text.push(l + " " + i.toFixed(2)), i = D.chart.yToVal(0, o[3]), a = D.chart.xToBar(o[2]), s = D.chart.barToIndex(a), l = D.chart.bars.data[s] ? new Date(D.chart.bars.data[s][0]).Format("yyyy.MM.dd") : "", this.text.push(l + " " + i.toFixed(2)), e %= D.chart.px.bar.spacing + D.chart.px.bar.width, D.mouseOri.y = D.mouse.y, D.mouseOri.x = D.mouse.x
      }
    }, this.draw = function () {
      c(this)
    }
  }

  function N() {
    this.name = "singleLine", this.points = [], this.pots = [], this.text = [], this.selectPotIndex = null, this.init = function () {
      var e = b();
      this.points = [];
      for (var t = D.chart.yToVal(0, D.mouse.y), n = 0; n < 1; n++) this.points.push([e.x, D.mouse.y, e.w + e.x, D.mouse.y]), this.text.push(t.toFixed(2));
      return this.pots = [], this.pots.push([D.w / 2, D.mouse.y, 0]), this.points
    }, this.moving = function () {
      if (D.mouseDown) {
        var e = D.mouse.y - D.mouseOri.y;
        0 != e && (this.points.forEach(function (t, n, r) {
          t[1] = t[3] += e
        }), this.pots.forEach(function (t, n, r) {
          t[1] += e
        })), this.text = [];
        var t = this;
        this.points.forEach(function (e, n) {
          var r = D.chart.yToVal(0, e[1]);
          t.text.push(r.toFixed(2))
        }), D.mouseOri.y = D.mouse.y
      }
    }, this.draw = function () {
      a(this)
    }
  }

  function P() {
    this.name = "upArrow", this.up = !0, this.id = f(), this.drawType = D.ARROW, this.points = [], this.pots = [], this.text = [], this.selectPotIndex = null;
    var e = 0;
    this.init = function () {
      b();
      this.points = [];
      var e = D.chart.toPxX(D.chart.xToBar(D.mouse.x)), t = D.mouse.y;
      return this.points.push([e, t]), this.points.push([e + 10, t + 10]), this.points.push([e + 10, t + 14]), this.points.push([e + 2, t + 6]), this.points.push([e + 2, t + 20]), this.points.push([e - 2, t + 20]), this.points.push([e - 2, t + 6]), this.points.push([e - 10, t + 14]), this.points.push([e - 10, t + 10]), this.points.push([e, t]), this.points
    }, this.moving = function () {
      if (D.mouseDown) {
        var t = D.mouse.x - D.mouseOri.x, n = D.mouse.y - D.mouseOri.y;
        e += t, 0 == n && 0 == t || this.points.forEach(function (t, r, o) {
          t[0] += e - e % (D.chart.px.bar.spacing + D.chart.px.bar.width), t[1] += n
        }), e %= D.chart.px.bar.spacing + D.chart.px.bar.width, D.mouseOri.x = D.mouse.x, D.mouseOri.y = D.mouse.y
      }
    }, this.draw = function () {
      l(this)
    }
  }

  function O() {
    this.name = "downArrow", this.up = !1, this.id = f(), this.drawType = D.ARROW, this.points = [], this.pots = [], this.text = [], this.selectPotIndex = null;
    var e = 0;
    this.init = function () {
      b();
      this.points = [];
      var e = D.chart.toPxX(D.chart.xToBar(D.mouse.x)), t = D.mouse.y;
      return this.points.push([e, t]), this.points.push([e + 10, t - 10]), this.points.push([e + 10, t - 14]), this.points.push([e + 2, t - 6]), this.points.push([e + 2, t - 20]), this.points.push([e - 2, t - 20]), this.points.push([e - 2, t - 6]), this.points.push([e - 10, t - 14]), this.points.push([e - 10, t - 10]), this.points.push([e, t]), this.points
    }, this.moving = function () {
      if (D.mouseDown) {
        var t = D.mouse.x - D.mouseOri.x, n = D.mouse.y - D.mouseOri.y;
        e += t, 0 == n && 0 == t || this.points.forEach(function (t, r, o) {
          t[0] += e - e % (D.chart.px.bar.spacing + D.chart.px.bar.width), t[1] += n
        }), e %= D.chart.px.bar.spacing + D.chart.px.bar.width, D.mouseOri.x = D.mouse.x, D.mouseOri.y = D.mouse.y
      }
    }, this.draw = function () {
      l(this)
    }
  }

  var D = {
    canvas: $("#line"),
    chart: null,
    w: 0,
    h: 0,
    objLines: [],
    curLine: null,
    points: [],
    selectDrawObj: null,
    LINES: 0,
    CIRCLE: 1,
    RECT: 2,
    ARROW: 3,
    mouse: {},
    mouseOri: {}
  }, I = D.canvas[0].getContext("2d");
  return {
    build: function () {
      return D.w = D.canvas.width(), D.h = D.canvas.height(), this
    }, add: function (e, t) {
      switch (e) {
        case"percentLine":
          D.curLine = new y;
          break;
        case"godPercentLine":
          D.curLine = new x;
          break;
        case"wavePercentLines":
          D.curLine = new w;
          break;
        case"fibonacciSequence":
          D.curLine = new k;
          break;
        case"periodicLine":
          D.curLine = new T;
          break;
        case"lineSegment":
          D.curLine = new S;
          break;
        case"regressionLine":
          D.curLine = new E;
          break;
        case"rectLine":
          D.curLine = new A;
          break;
        case"singleLine":
          D.curLine = new N;
          break;
        case"upArrow":
          D.curLine = new P;
          break;
        case"downArrow":
          D.curLine = new O
      }
    }, setType: function (e) {
      D._drawType = e
    }, resize: function () {
      return D.w = D.canvas.width(), D.h = D.canvas.height(), this
    }, setChartData: function (e) {
      D.chart = e, m()
    }, ifNull: function (e) {
      D.nullDrawObj = e
    }, clean: function () {
      D.objLines = [], D.curLine = null, D.selectDrawObj = null, I.clearRect(0, 0, D.w, D.h), D.nullDrawObj && D.nullDrawObj()
    }, deleteLine: function () {
      D.selectDrawObj && (D.objLines.forEach(function (e, t) {
        e.name == D.selectDrawObj.name && e.id == D.selectDrawObj.id && (D.objLines.splice(t, 1), 0 == D.objLines.length && D.nullDrawObj && D.nullDrawObj())
      }), e())
    }
  }
}, C = {upArrow: "#ff4056", downArrow: "#34ce6b", line: "#787878", text: "#20acea", pot: "#20acea"};
Array.prototype.clone = function () {
  return JSON.parse(JSON.stringify(this))
};
var UserAccount, UserAccount_Class = function () {
    function e() {
      function e(e) {
        if (null != e && void 0 !== e) {
          var n = null;
          e.hasOwnProperty("exch") ? (n = e.exch, e.hasOwnProperty("orders") && null != e.orders && e.orders.hasOwnProperty("length") && (t(e.orders, n), RTBTC.trigger("orders"))) : DEBUG && _debug("No exchange sent with orders!", RTBTC.ERROR)
        } else _ordersFail()
      }

      function t(e, t) {
        var o = "", i = 0;
        millitime();
        for (o in r.orders[t]) r.orders[t].hasOwnProperty(o) && (r.orders[t][o], delete r.orders[t][o]);
        for (i = 0; i < e.length; i++) n(e[i], t)
      }

      function n(e, t) {
        var n = e.id, o = millitime();
        null != t && void 0 !== t ? (r.orders[t] || (r.orders[t] = {}), r.orders[t].hasOwnProperty(n) ? r.orders[t][n].hasOwnProperty("added") && (r.orders[t][n].added = 0) : (r.orders[t][n] = {}, r.orders[t][n].added = o), r.orders[t][n].action = e.action, r.orders[t][n].amount = parseFloat(e.amount), r.orders[t][n].price = parseFloat(e.price), r.orders[t][n].base = e.base, r.orders[t][n].quote = e.quote, r.orders[t][n].status = e.status, "Unknown" == r.orders[t][n].status && (r.orders[t][n].status = "Open")) : DEBUG && _debug("Order triggered with no exchange!", RTBTC.ERROR)
      }

      var r = {orders: {}};
      return {
        orders: function () {
          return r.orders
        }, ordersAdd: function (t) {
          e(t)
        }
      }
    }

    var t = null;
    return new function () {
      this.Build = function () {
        return null == t && ((t = new e).constructor = null), t
      }
    }
  }(), timesList = [], timeLimit = 1e3, times = 7,
  app = angular.module("tradeApp", ["pascalprecht.translate", "ngCookies", "sly"]);
app.config(["$translateProvider", "$httpProvider", function (e, t) {
  t.interceptors.push("myInterceptor"), window.translations = e.translations, function (t) {
    e.translations(t, window["mm" + t]), e.preferredLanguage(t), e.useSanitizeValueStrategy("escape")
  }(initLang)
}]).controller("tradeController", ["$scope", "$rootScope", "$http", "$interval", "$cookies", "$timeout", "$document", "$window", "$q", "streamer", "user", "$translate", "userStreamer", "klineStreamer", "tradeStreamer", "pageLoading1", "scroll", "mktdataStreamer", "form", "mobile", "$filter", "urlSearch", "SPA", "divLoading", function (e, t, n, r, i, a, s, l, c, u, f, d, p, h, g, m, v, b, y, x, w, k, T, S) {
  function C(t, n) {
    var r = new Date;
    if (r.setFullYear(2999), document.cookie = "lang=" + t.toUpperCase() + ";path=/;expires=" + r.toGMTString(), $("#loaded" + t).length) translations(t, window["mm" + t]), d.use(t); else {
      var o = document.createElement("script");
      o.src = n + t + ".js?v=" + r.getTime(), o.type = "text/javascript", o.id = "loaded" + t, o.onload = function () {
        translations(t, window["mm" + t]), d.use(t);
        var n = e.$root.$$phase;
        "$apply" != n && "$digest" != n && e.$apply()
      }, document.getElementsByTagName("head")[0].appendChild(o)
    }
  }

  function E(t) {
    e.products = t, BTCConvert.setProducts(t), "y" == i.logined && e.getUserAsset(), A(t), e.getTransToUSDT(e.products);
    for (var n = 0; n < t.length; n++) -1 == e.Markets.indexOf(t[n].quoteAsset) && e.Markets.push(t[n].quoteAsset), e.lastPrices[t[n].baseAsset] = t[n].close, e.productSplit[t[n].symbol] = {
      base: t[n].baseAsset,
      quote: t[n].quoteAsset
    }, e.assetFixed[t[n].quoteAsset] = t[n].decimalPlaces, e.assetFixed[t[n].baseAsset] = t[n].decimalPlaces, e.fixed[t[n].symbol] = t[n].decimalPlaces, e.minFixed[t[n].symbol] = {
      qtyTick: Math.abs(Math.log10(t[n].minTrade)),
      priceTick: Math.abs(Math.log10(t[n].tickSize))
    }, e.currentProduct, angular.forEach(e.products, function (t, n) {
      var r = Math.abs(Math.log10(t.tickSize)), o = Math.abs(Math.log10(t.minTrade));
      e.products[n].priceTick = r, e.products[n].qtyTick = o, e.products[n].close = Number(t.close), null == t.close || 0 == t.close ? e.products[n].changeRate = 0 : e.products[n].changeRate = 100 * Number(t.close - t.open) / t.open
    }), console.log(e.products)
  }

  function A(n) {
    angular.forEach(n, function (r, o) {
      if (r.symbol == e.product.symbol) {
        e.currentProduct = r, Data.baseFixed = e.currentProduct.qtyTick = Math.abs(Math.log10(Number(e.currentProduct.minTrade))), Data.qouteFixed = e.currentProduct.priceTick = Math.abs(Math.log10(Number(e.currentProduct.tickSize))), chart.redraw(), e.currentProduct.amountTick = Math.abs(Math.log10(e.currentProduct.tickSize * e.currentProduct.minTrade)), e.currentProduct.amountTick = Math.min(e.currentProduct.amountTick, 8), 8 == e.depthMergeUnit && (e.depthMergeUnit = e.currentProduct.priceTick), e.priceRegExp = new RegExp("^\\d+(\\.\\d{0," + e.currentProduct.priceTick + "}0*)?$"), e.newest = e.currentProduct.close, e.buy_order.price = e.sell_order.sell_price = e.currentProduct.close && Number(e.currentProduct.close).toFixed(e.fixed[e.currentProduct.symbol]), t.pageTitle = e.currentProduct.symbol, e.depthUnits = [];
        for (var i = 3; i >= 0;) e.currentProduct.priceTick - i < 0 ? i-- : (e.depthUnits.push(e.currentProduct.priceTick - i), i--);
        e.depthMergeChange(e.depthUnits[e.depthUnits.length - 1]), e.trade(e.currentProduct.close), Z = n[o - 1 < 0 ? o - 1 + n.length : o - 1].baseAsset + "_" + n[o - 1 < 0 ? o - 1 + n.length : o - 1].quoteAsset, ee = n[(o + 1) % n.length].baseAsset + "_" + n[(o + 1) % n.length].quoteAsset, $(window).bind("keyup", N)
      }
    })
  }

  function N(e) {
    if (te) {
      if ((new Date).getTime() - te < 600) return
    } else te = (new Date).getTime();
    te = (new Date).getTime(), 33 == e.keyCode && ($(window).unbind("keyup", N), T.setUrl("?symbol=" + Z)), 34 == e.keyCode && ($(window).unbind("keyup", N), T.setUrl("?symbol=" + ee))
  }

  function P(t) {
    angular.forEach(e.products, function (n, r) {
      -1 != jQuery.inArray(n.symbol, t) && (e.products[r].pro = !0)
    }), e.getProNum()
  }

  function O(t) {
    if (t && t instanceof Array) {
      var n = {};
      n.exch = "BIJIE", n.orders = [], t.forEach(function (t) {
        t.symbol == e.product.symbol && n.orders.push({
          id: t.id || t.orderId,
          action: t.side.toLowerCase(),
          amount: t.origQty,
          price: t.price,
          base: e.product.baseCurrency,
          quote: e.product.qouteCurrency,
          status: "Open"
        })
      }), UserAccount.ordersAdd(n)
    }
  }

  function D(e, t) {
    return Math.floor(new Big(e + "").times(new Big(Math.pow(10, t) + "")).toString()) / Math.pow(10, t)
  }

  function I(e, t) {
    return Math.ceil(new Big(e + "").times(new Big(Math.pow(10, t) + "")).toString()) / Math.pow(10, t)
  }

  function M(t, n, r, o) {
    angular.forEach(t, function (t) {
      if (e.depthUnits.length) if (e.depthMergeUnit != e.depthUnits[e.depthUnits.length - 1].value) {
        var i = !1;
        r.forEach(function (r) {
          r[0] == o(Number(t), e.depthMergeUnit) && (r[1] += Number(n[t]), r[2] += Number(n[t] * t), i = !0)
        }), i || r.push([o(Number(t), e.depthMergeUnit), Number(n[t]), Number(n[t]) * Number(t)])
      } else r.push([Number(t), Number(n[t]), Number(t) * Number(n[t])])
    })
  }

  function _(e, t) {
    var n = [], r = [];
    angular.forEach(e, function (e) {
      n.push(e)
    }), angular.forEach(t, function (e) {
      r.push(e)
    });
    var o = sortDepth.medianUnit(n, r, 48);
    angular.forEach(e, function (e) {
      e.push({width: sortDepth.width(e[1], o) * xe / 100})
    }), angular.forEach(t, function (e) {
      e.push({width: sortDepth.width(e[1], o) * xe / 100})
    })
  }

  function L(e, t) {
    e && e.forEach(function (e) {
      var n = Number(e[0]), r = Number(e[1]);
      0 != r ? t[n] = r : delete t[n]
    })
  }

  function F(e) {
    for (; e.length < 51;) e.push(["--", "--", "--", {width: 0}])
  }

  function B(e) {
    for (; e.length < 51;) e.unshift(["--", "--", "--", {width: 0}])
  }

  function R(e, t) {
    he.clean(), chart.setCrossHair(!0), chart.fixTime(!1), chart.setBarwidth(ke), chart.clearData(), chart.setMode(t), le = ae(se = e), chart.setResolution(Number(e))
  }

  function j(e) {
    var t;
    return "MACD" == e ? t = "macd" : "TRIX" == e ? t = "trix" : "KDJ" == e ? t = "kdj" : "BRAR" == e || ("StochRSI" == e ? t = "storsi" : "VR" == e || ("RSI" == e ? t = "rsi" : "EMV" == e ? t = "emv" : "DMI" == e ? t = "dmi" : "WR" == e ? t = "wpr" : "OBV" == e ? t = "obv" : "ROC" == e || ("BOLL" == e ? t = "bnd" : "MTM" == e ? t = "mtm" : "SAR" == e ? t = "psar" : "EMA" == e ? t = "ema" : "PSY" == e || ("CCI" == e ? t = "cci" : "VWAP" == e ? t = "vwap" : "MA" == e ? t = "ma" : "AVL" == e && (t = "avl"))))), t
  }

  function q(t) {
    e.depthWrong = t;
    var n = e.$root.$$phase;
    "$apply" != n && "$digest" != n && e.$apply()
  }

  function U(t, n, r) {
    [t, n].forEach(function (t) {
      t && t.forEach(function (t) {
        "--" != t[0] && (t[4] = !1, r && r.forEach(function (n) {
          if (n.symbol == e.product.symbol) {
            var r = n.price;
            "SELL" == n.side ? r = I(r, e.depthMergeUnit) : "BUY" == n.side && (r = D(r, e.depthMergeUnit)), t[0] == r && (t[4] = !0)
          }
        }))
      })
    })
  }

  if (console.log = function () {
    }, T.UrlChange = function () {
      e.product.oriSymbol = k.getUrlParam("symbol") || localStorage.echangeProduct || "BNB_BTC", e.product.symbol = e.product.oriSymbol.replace("_", ""), void 0 !== e.product.symbol && (e.product.baseCurrency = e.product.oriSymbol.split("_")[0], e.product.qouteCurrency = e.product.oriSymbol.split("_")[1]), e.buy_order.quantity = "", e.sell_order.sell_quantity = "", e.market_buy_order.quantity = "", e.market_sell_order.quantity = "", S.loading("#chart"), RTBTC.instrument("BIJIE", e.product.symbol, e.product.qouteCurrency), chart.setResolution(Number(X[e.curIndex])), e.Islogin && (e.getCommission(e.product.symbol), e.getUserAsset()), A(e.products), e.getStreamers(), e.getLocalProStatus()
    }, t.ts = k.getUrlParam("ts"), e.agentId = k.getUrlParam("ref"), t.ts) {
    /^[\w|\d|\.|-]+$/.test(t.ts) && sessionStorage.setItem("ts", t.ts.substr(0, 16))
  }
  e.agentId && sessionStorage.setItem("refId", e.agentId);
  location.host.match("localhost") || location.host.match("192.168.0");
  e.tradeDetail = !0, e.product = {}, e.EXCHANGE = "Binance", e.lang = window.localStorage.lang, e.timeLang = "zh-cn", "cn" != e.lang && (e.timeLang = "en"), e.product.oriSymbol = k.getUrlParam("symbol") || localStorage.echangeProduct || "BNB_BTC", e.curIndex = 1 * localStorage.curIndex || 0, e.product.symbol = e.product.oriSymbol.replace("_", ""), e.buy_order = {}, e.sell_order = {}, e.market_buy_order = {}, e.market_sell_order = {}, e.stopBuy_order = {}, e.stopSell_order = {}, e.userAsset = {}, e.fixed = {}, e.assetFixed = {};
  var H = new Date, V = H.getFullYear(), z = H.getMonth(), W = H.getDate(), G = new Date(V, z, W, 0, 0, 0).getTime(),
    Y = H.setDate(H.getDate() + 1), X = [60, 60, 300, 900, 1800, 3600, 7200, 14400, 21600, 43200, 86400, 604800];
  window.dateStartSelect = function () {
    WdatePicker({dateFmt: "yyyy-MM-dd", maxDate: "#F{$dp.$D('lscj_end')||'%y-%M-%d'}", readOnly: !0, lang: e.timeLang})
  }, window.dateEndSelect = function () {
    WdatePicker({dateFmt: "yyyy-MM-dd", minDate: "#F{$dp.$D('lscj_start')}", readOnly: !0, lang: e.timeLang})
  };
  var K = d.instant;
  d.instant = function (e) {
    return (K(e) == e ? mmen[e] : K(e)) || e
  };
  var Q = (new Date).getTime();
  n.get("/exchange/public/serverTime").success(function (t) {
    var n = ((new Date).getTime() - Q) / 2, r = new Date(Math.round(Number(t) + n)).getTime() - (new Date).getTime();
    e.today = new Date((new Date).getTime() + r);
    var o = "";
    setInterval(function () {
      var e = w("date")(new Date((new Date).getTime() + r), "yyyy-MM-dd HH:mm:ss");
      e != o && (o = e, $("#todaytime").text(o))
    }, 100)
  }), e.logout = f.logout, e.getUserBaseDetail = function () {
    n({method: "post", url: "/user/basedetail.html"}).success(function (t) {
      e.userBaseInfo = t, e.userEmail = t.email.split("@")[0]
    })
  }, $("body").attr("class", localStorage.lang), e.switching = function (t) {
    C(t, "/" + resourcePerfixed + "/js/i18n/"), window.localStorage.lang = t, e.lang = t, $("body").attr("class", t)
  };
  var J;
  e.currentUserAsset = null, e.getUserAsset = function () {
    n.post("/exchange/private/userAsset").success(function (t) {
      t = t || [], e.userAssets = [], t.forEach(function (t) {
        0 == Number(t.free) && 0 == Number(t.freeze) && 0 == Number(t.withdrawing) && 0 == Number(t.locked) || e.userAssets.push(t)
      }), e.userAssetsNum = t.length, e.totalMarketValue = 0, e.totalProfit = 0, e.cost = 0, e.totalAsset = 0, e.freezeAsset = 0, e.qouteFree = 0, e.baseFree = 0, angular.forEach(e.userAssets, function (t) {
        t.asset == e.product.qouteCurrency && (e.currentUserAsset = t.free, e.qouteFree = t.free), t.asset == e.product.baseCurrency && (e.baseFree = t.free)
      }), e.btcWatch = [e.products, e.userAssets], J && J(), J = e.$watch("btcWatch", function () {
        angular.forEach(e.userAssets, function (e) {
          e.btcValue = BTCConvert.getNewPrice(e.asset, 1 * e.free + 1 * e.freeze + 1 * e.locked + 1 * e.withdrawing)
        })
      }, !0)
    })
  }, e.refresh = function () {
    window.location.href = window.location.href
  }, e.getOrders = function () {
    n({method: "post", url: "/exchange/private/openOrders"}).success(function (t) {
      O(t), e.openOrders = t;
      var n = e.openOrders.length;
      e.IsopenOrdersNull = 0 == n, U(e.asksTwenty, e.bidsTwenty, e.openOrders)
    })
  }, e.allOrders = [], e.getTradeOrders = function (t, r, o, i) {
    e.loading = !0;
    var a = new Date, s = (a.getTime(), a.setDate(a.getDate() - 1), $.param({page: t, rows: r, start: o, end: i}));
    n.post("/exchange/private/tradeOrders", s).success(function (t) {
      e.loading = !1, t.data ? (e.scrollLoading = !1, angular.forEach(t.data, function (t, n) {
        -1 == e.allOrders.indexOf(t) && e.allOrders.push(t), 0 == t.statusCode && (e.allOrders[n].executedPrice = t.price)
      }), e.tradeOrdersCurrentPage = t.page, e.tradeOrdersPages = t.pages, e.isBottom("tradeOrderBox", e.getTradeOrders, e.tradeOrdersCurrentPage, e.tradeOrdersPages, G, Y)) : e.allOrders = []
    })
  }, e.cal = function (e, t, n) {
    var r = $(n.target).parent("span"), o = Math.pow(.1, e), i = r.siblings("input"), a = i.val();
    a ? t ? i.val((1 * a + o).toFixed(e)) : a > o && i.val((1 * a - o).toFixed(e)) : (a = o, i.val(a.toFixed(e))), i.trigger("input")
  }, e.orderPercent = function (t, n, r) {
    var o = {};
    if (e.userAssets) {
      for (var i = 0; i < e.userAssets.length; i++) o[e.userAssets[i].asset] = e.userAssets[i].free;
      "limit" == r ? "buy" == n && e.buy_order.price ? e.buy_order.quantity = re(t * o[e.currentProduct.quoteAsset] / e.buy_order.price, e.currentProduct.qtyTick) : e.sell_order.sell_quantity = re(t * o[e.currentProduct.baseAsset], e.currentProduct.qtyTick) : "market" == r ? "buy" == n ? e.market_buy_order.quantity = re(t * o[e.currentProduct.quoteAsset] / e.currentProduct.close, e.currentProduct.qtyTick) : e.market_sell_order.quantity = re(t * o[e.currentProduct.baseAsset], e.currentProduct.qtyTick) : "stopLimit" == r && ("buy" == n ? e.stopBuy_order.price && (e.stopBuy_order.quantity = re(t * o[e.currentProduct.quoteAsset] / e.stopBuy_order.price, e.currentProduct.qtyTick)) : e.stopSell_order.quantity = re(t * o[e.currentProduct.baseAsset], e.currentProduct.qtyTick))
    }
  }, e.setTimequantum = function (t, n) {
    if (e.Islogin) {
      var r = new Date, o = r.getFullYear(), i = r.getMonth(), a = r.getDate(), s = new Date(o, i, a, 0, 0, 0),
        l = s.getTime(), c = new Date(o, i, a, 0, 0, 0).setDate(new Date(o, i, a, 0, 0, 0).getDate() + 1);
      switch (t) {
        case 0:
          l = s.getTime();
          break;
        case 1:
          l = Math.abs(s.setDate(s.getDate() - 7));
          break;
        case 2:
          l = Math.abs(s.setMonth(s.getMonth() - 1));
          break;
        case 3:
          l = Math.abs(s.setMonth(s.getMonth() - 3))
      }
      n(1, 30, l, c)
    } else e.showLoginBox()
  }, e.search_submit = function (t, n) {
    if (e.Islogin) {
      var r = new Date($("#" + n + "_start").val()).setHours(0), o = new Date($("#" + n + "_end").val()).setHours(0);
      r && o && t(1, 30, r, o)
    } else e.showLoginBox()
  }, e.isBottom = function (t, n, r, o, i, a) {
    (t = document.getElementById(t)).onscroll = function () {
      var s = t.clientHeight;
      if (t.scrollHeight == s + t.scrollTop) {
        var l = r + 1;
        l <= o ? (e.scrollLoading = !0, n(l, 30, i, a)) : e.scrollLoading = !1;
        var c = e.$root.$$phase;
        "$apply" != c && "$digest" != c && e.$apply()
      }
    }
  }, e.dealOrders = [], e.getDealOrders = function (t, r, o, i) {
    e.loading = !0;
    var a = $.param({page: t, start: o, rows: r, end: i});
    n.post("/exchange/private/userTrades", a).success(function (t) {
      e.loading = !1, t.data ? (e.scrollLoading = !1, angular.forEach(t.data, function (t) {
        -1 == e.dealOrders.indexOf(t) && e.dealOrders.push(t)
      }), e.dealOrdersCurrentPage = t.page, e.dealOrdersPages = t.pages, e.isBottom("userTradeBox", e.getDealOrders, e.dealOrdersCurrentPage, e.dealOrdersPages, o, i)) : e.dealOrders = []
    })
  }, e.isLogin = function () {
    if ("y" == i.logined) {
      e.Islogin = !0;
      i.userId;
      e.getUserBaseDetail(), e.getOrders(), e.getTradeOrders(1, 30, G, Y), e.getDealOrders(1, 30, G, Y), e.getCommission(e.product.symbol), e.getUserInfo()
    } else e.Islogin = !1
  }, e.hideInfo = function () {
    angular.element(".wrap").removeClass("blur"), angular.element(".overlayer,#aboutus-box").hide()
  }, e.getTransToUSDT = function (t) {
    angular.forEach(t, function (t, n) {
      "USDT" == t.quoteAsset && (e.transToUSDT[t.baseAsset] = t.close)
    }), e.transToUSDT.USDT = 1
  }, e.products = [], e.currentProduct = {}, e.productSplit = {}, e.lastPrices = {}, e.minFixed = {}, e.lastPrices.BTC = 1, e.priceRegExp = new RegExp("^\\d+(\\.\\d{0,8}0*)?$"), e.depthUnits = [], e.transToUSDT = {USDT: 1}, e.getTradeLists = function () {
    n.get("/exchange/public/product").success(function (t) {
      if (t.data.length) {
        for (var r = t.data, o = !1, i = 0; i < r.length; i++) r[i].symbol == e.product.symbol && (o = !0), r[i].pro = !1;
        e.Islogin ? setTimeout(function () {
          e.getFavorite(r)
        }, 0) : setTimeout(function () {
          e.noLoginFavoreteFun(r)
        }, 0), o ? E(r) : n.get("/exchange/public/product?symbol=" + e.product.baseAsset + "_" + e.product.quoteAsset).success(function (e) {
          e.data[0] && r.push(e.data[0]), E(r)
        })
      } else e.products = []
    })
  }, e.changeMarket = function (t) {
    e.curMarket = t
  }, e.Markets = [];
  var Z, ee, te;
  e.getTradeLists(), e.getCnyusd = function () {
    n.get("/exchange/public/cnyusd").success(function (t) {
      e.cnyusdRate = t.rate
    })
  }, e.getCnyusd(), e.orderKey = "tradedMoney", e.isSameKey = "tradedMoney", e.orderDesc = !1, e.sortByKey = function (t, n) {
    e.orderKey = t, e.isSameKey != t ? (e.isSameKey = t, e.orderDesc = !0) : n || (e.orderDesc = !e.orderDesc)
  }, e.sortByKey(e.orderKey);
  location.host.match("localhost") || location.host.match("192.168.0");
  e.delayHide = function (t, n) {
    e[n] = a(function () {
      e[t] = !1
    }, 500)
  }, e.clearTimer = function (t) {
    a.cancel(e[t])
  };
  var ne;
  e.selectProduct = function (t, n, r, o) {
    if (r.stopPropagation(), ne) {
      if ((new Date).getTime() - ne < 300) return
    } else ne = (new Date).getTime();
    ne = (new Date).getTime(), e.isShowProduct = !1, localStorage.ProStatus = t + n, localStorage.setStatus = t + "_" + n, localStorage.quoteAsset = n, localStorage.curMarket = o, localStorage.thisMarket = "" == o ? "Favorete" : n, T.setUrl("?symbol=" + t + "_" + n)
  }, e.getLocalProStatus = function () {
    void 0 !== localStorage.ProStatus && (e.proStatus = localStorage.ProStatus, window.location.search.indexOf("symbol") < 0 && (window.location.href = "/tradeDetail.html?symbol=" + localStorage.setStatus)), void 0 !== localStorage.quoteAsset ? void 0 !== localStorage.thisMarket && "Favorete" == localStorage.thisMarket ? (e.getQuoteAsset = "", e.curMarket = "", e.isPro = !0) : e.getQuoteAsset = localStorage.quoteAsset : e.getQuoteAsset = "BTC"
  }, e.localListData = [], e.favoriteFun = function (t, r, o) {
    if (t.stopPropagation(), o) e.Islogin ? n.post("/exchange/private/deletePortfolio", $.param({symbol: r})).success(function (t) {
      for (var n = 0; n < e.products.length; n++) if (r == e.products[n].symbol) {
        e.products[n].pro = !1;
        break
      }
      e.getProNum()
    }) : (console.log("未登录，删除本地"), angular.forEach(e.products, function (e, t) {
      r == e.symbol && (e.pro = !1)
    }), e.getProNum(), e.removeByValue(e.localListData, r), localStorage.sortLists = JSON.stringify(e.localListData), console.log(localStorage.sortLists)); else if (e.Islogin) n.post("/exchange/private/addPortfolio", $.param({symbol: r})).success(function (t) {
      for (var n = 0; n < e.products.length; n++) r == e.products[n].symbol && (e.products[n].pro = !0);
      e.getProNum()
    }); else {
      console.log("未登录，添加到本地");
      for (var i = 0; i < e.products.length; i++) r == e.products[i].symbol && (e.products[i].pro = !0, e.localListData.push(e.products[i].symbol));
      e.getProNum(), localStorage.sortLists = JSON.stringify(e.localListData), console.log(JSON.parse(localStorage.sortLists).length)
    }
  }, e.removeByValue = function (e, t) {
    for (var n = 0; n < e.length; n++) if (e[n] == t) {
      e.splice(n, 1);
      break
    }
  }, e.noLoginFavoreteFun = function (t) {
    void 0 !== localStorage.sortLists && (e.localListData = JSON.parse(localStorage.sortLists));
    var n = e.localListData;
    angular.forEach(n, function (e) {
      angular.forEach(t, function (t) {
        e == t.symbol && (t.pro = !0)
      })
    }), e.getProNum()
  }, e.getFavorite = function () {
    e.Islogin ? n.post("/exchange/private/portfolios").success(function (e) {
      P(e.data)
    }) : localStorage.sortLists && P(JSON.parse(localStorage.sortLists))
  }, e.getProNum = function () {
    var t = 0;
    angular.forEach(e.products, function (e, n) {
      e.pro && t++
    }), t ? e.noPro = !1 : (e.noPro = !0, localStorage.thisMarket = "")
  }, e.getLocalProStatus(), e.changeMarket(e.getQuoteAsset), s.bind("keydown", function (t) {
    e.$apply(function () {
      114 == t.keyCode ? (t.preventDefault(), e.sign = "dqwt") : 121 == t.keyCode ? e.tabName = "cpxx" : t.ctrlKey && t.shiftKey && 75 == t.keyCode ? exchangeDate.bool = !0 : t.keyCode
    })
  }), e.sign = localStorage.sign || "zjcc", e.tab = function (t) {
    e.sign = t, localStorage.sign = t
  }, e.trade = function (t) {
    isNaN(Number(t)) || ("limit" == e.orderType.v ? (e.buy_order.price = Number(t).toFixed(e.currentProduct.priceTick), e.sell_order.sell_price = Number(t).toFixed(e.currentProduct.priceTick)) : "stopLimit" == e.orderType.v && (e.stopBuy_order.stopPrice = Number(t).toFixed(e.currentProduct.priceTick), e.stopBuy_order.price = Number(t).toFixed(e.currentProduct.priceTick), e.stopSell_order.stopPrice = Number(t).toFixed(e.currentProduct.priceTick), e.stopSell_order.curPrice = Number(t).toFixed(e.currentProduct.priceTick)))
  }, e.tradeBuyVol = function (t) {
    for (var n = 0, r = 0; r <= t; r++) n += Number(e.bidsTwenty[r][1]);
    e.Islogin ? n < Number(e.baseFree) ? e.sell_order.sell_quantity = re(n, e.currentProduct.qtyTick) : e.sell_order.sell_quantity = re(e.baseFree, e.currentProduct.qtyTick) : e.sell_order.sell_quantity = re(n, e.currentProduct.qtyTick)
  }, e.tradeSellVol = function (t) {
    for (var n = e.asksTwenty.indexOf(t), r = 0, o = e.asksTwenty.length - 1; o >= n; o--) r += Number(e.asksTwenty[o][1]);
    e.Islogin ? r < Number(e.qouteFree / e.buy_order.price) ? e.buy_order.quantity = re(r, e.currentProduct.qtyTick) : e.buy_order.quantity = re(e.qouteFree / e.buy_order.price, e.currentProduct.qtyTick) : e.buy_order.quantity = re(r, e.currentProduct.qtyTick)
  };
  var re = function (e, t) {
    return (Math.floor(new Big(e + "").times(new Big(Math.pow(10, t) + "")).toString()) / Math.pow(10, t)).toFixed(t)
  };
  e.googleVerify = !1, e.showLoginBox = f.login, e.logout = f.logout, e.loadingGeetest = !0;
  var oe, ie = function (t) {
    oe = t, t.onReady(function () {
      e.loadingGeetest = !1;
      var t = e.$root.$$phase;
      "$apply" != t && "$digest" != t && e.$apply()
    }), t.onSuccess(function () {
      $("#userId").attr("disabled", !1);
      var r = t.getValidate(), o = layer.load(1, {shade: [.1, "#fff"]}), i = $.param({
        email: e.login.email.trim().toLowerCase(),
        password: $.md5(e.login.password + e.login.email.trim().toLowerCase()),
        validateCodeType: "gt",
        geetest_challenge: r.geetest_challenge,
        geetest_seccode: r.geetest_seccode,
        geetest_validate: r.geetest_validate
      });
      n.post("/user/login.html", i).then(function (t) {
        if (layer.close(o), t.data.success) if (document.cookie = "logined=y;path=/;", document.cookie = "CSRFToken=" + t.data.CSRFToken + ";path=/", document.cookie = "mobile=" + t.data.mobile + ";path=/", document.cookie = "userId=" + t.data.userId + ";path=/", t.data.confirmTips) window.location.reload(); else {
          var n = encodeURIComponent(location.pathname + location.search);
          location.href = "/safetyInstructions.html?callback=" + n
        } else e.verifyEmail = e.login.email.trim().toLowerCase(), 0 == t.data.emailVerified ? window.location.href = "/resendEmail.html" : t.data.gauth && !t.data.mobileSecurity ? (e.googleVerify = !0, e.verifyType = 1, setTimeout(function () {
          y.validate("#googleVerify-form", "#googleVerify-btn", e.verifySuccess)
        }, 500)) : t.data.mobileSecurity && !t.data.gauth ? (e.googleVerify = !0, e.verifyType = 2, setTimeout(function () {
          y.validate("#mobile-form", "#mobile-btn", e.verifySuccess)
        }, 500)) : t.data.gauth && t.data.mobileSecurity ? (e.googleVerify = !0, e.verifyType = 0, setTimeout(function () {
          y.validate("#googleVerify-form", "#googleVerify-btn", e.verifySuccess), y.validate("#mobile-form", "#mobile-btn", e.verifySuccess)
        }, 500)) : angular.element("#error-info").show().html(t.data.msg);
        void 0 != oe && null != oe && oe.reset(), $("#login-btn").attr("disabled", !1)
      }, function (e) {
        return void 0 != oe && null != oe && oe.reset(), $("#login-btn").attr("disabled", !1), layer.msg("登录异常", {
          icon: 5,
          shift: 1,
          time: 1e3
        }), angular.element("#loginValiCode").val("").focus(), angular.element("#imageStream1").click(), !1
      })
    }), t.onClose(function () {
      $("#userId").attr("disabled", !1)
    }), t.onError(function () {
      $("#userId").attr("disabled", !1), layer.msg("geetestError", {icon: 2, time: 1500})
    })
  };
  !function () {
    var t = localStorage.lang;
    t = "cn" != t ? "en" : "zh-cn", $("#loadingGeetest").html('<img src="/resources/img/loading-2.gif" style="vertical-align:middle;"/> Loading...'), setTimeout(function () {
      e.loadingGeetest && ("cn" == e.lang ? $("#loadingGeetest").html('网络不给力，请 <a href="javascript:;" class="yellow" onclick="location.reload()">刷新</a> 后重试') : "tw" == e.lang ? $("#loadingGeetest").html('網絡不給力，請 <a href="javascript:;" class="yellow" onclick="location.reload()">刷新</a> 後重試') : $("#loadingGeetest").html('Network unavailable,please <a href="javascript:;" class="yellow" onclick="location.reload()">refresh</a> and try again'))
    }, 5e3), n.get("/security/getGtCode.html?t=" + (new Date).getTime()).success(function (e) {
      initGeetest({
        gt: e.gt,
        challenge: e.challenge,
        new_captcha: e.new_captcha,
        offline: !e.success,
        product: "bind",
        lang: t,
        width: "100%"
      }, ie)
    })
  }(), e.login = function () {
    $("#userId").attr("disabled", !0), oe.verify()
  }, e.send = function () {
    x.sendVerifyCode("/user/sendMobileVerifyCode.html", "verifyCode", "sendBtn")
  }, e.verifySuccess = function (e) {
    if (e.success) if (layer.msg(e.msg, {
        icon: 1,
        time: 2e3
      }), document.cookie = "logined=y;path=/;", document.cookie = "CSRFToken=" + e.CSRFToken + ";path=/", document.cookie = "email=" + e.email + ";path=/", e.confirmTips) window.location.reload(); else {
      var t = encodeURIComponent(location.pathname + location.search);
      location.href = "/safetyInstructions.html?callback=" + t
    } else layer.msg(e.msg, {icon: 5, time: 2e3})
  }, e.checkinput = function (e, t) {
    var n = $(e.target).val();
    if (!new RegExp("^\\d+(\\.\\d{0," + t + "})?$").test(n) && ($(e.target).val(n.replace(/[^\d\.]/g, "")), -1 != n.indexOf("."))) {
      var r = n.toString().split(".")[1].length;
      r > t && $(e.target).val(n.slice(0, -(r - t)))
    }
    $(e.target).trigger("input"), $(e.target).trigger("change")
  }, e.buy_submit = function () {
    if (chackRate()) {
      var t = angular.element("#buyPrice").val(),
        r = (e.buy_order.quantity, new RegExp("^\\d+(\\.\\d{0," + e.currentProduct.qtyTick + "}0*)?$")),
        o = new RegExp("^\\d+(\\.\\d{0," + e.currentProduct.priceTick + "}0*)?$");
      if (!e.Islogin) return e.showLoginBox(), !1;
      var i = e.qouteFree / e.buy_order.price;
      if ("" == t || null == t) return layer.msg(d.instant("inputprice"), {icon: 5, shift: 1, time: 500}), !1;
      if (!o.test(t)) return layer.msg(d.instant("inputCrrectPrice").replace("&&&", Number(e.currentProduct.tickSize).toFixed(e.currentProduct.priceTick)), {
        icon: 5,
        shift: 1,
        time: 500
      }), !1;
      if ("" == e.buy_order.quantity || null == e.buy_order.quantity) return layer.msg(d.instant("inputVolume"), {
        icon: 5,
        shift: 1,
        time: 500
      }), angular.element("#buy_order").focus(), !1;
      if (r.test(e.buy_order.quantity)) {
        if (Number(e.buy_order.quantity) > i) return angular.element("#buy_order").focus(), !1;
        var s = {
          method: "post",
          url: "/exchange/private/order",
          data: $.param({
            price: t,
            quantity: e.buy_order.quantity,
            symbol: e.currentProduct.symbol,
            side: "BUY",
            type: "LIMIT"
          })
        };
        0 != e.currentProduct.close && (t - e.currentProduct.close) / e.currentProduct.close > .05 ? layer.confirm(d.instant("buyorderConfirmTip"), {
          title: "",
          area: "320px",
          closeBtn: !1,
          skin: "confirm-class",
          btn: [d.instant("Yes"), d.instant("No")]
        }, function () {
          n(s).then(function (t) {
            layer.msg(d.instant("orderSucceed"), {icon: 1, shift: 1, time: 500}), a(function () {
              e.buy_order.quantity = "", e.openOrderType.v = "limitOrder"
            }, 500)
          }, function (e) {
            e.data.msg.toUpperCase().match("INSUFFICIENT BALANCE") ? layer.msg(d.instant("Balance is not enough"), {
              icon: 5,
              shift: 1,
              time: 1e3
            }) : layer.msg(e.data.msg, {icon: 5, shift: 1, time: 1e3})
          })
        }, function () {
          layer.closeAll()
        }) : n(s).then(function (t) {
          layer.msg(d.instant("orderSucceed"), {icon: 1, shift: 1, time: 500}), a(function () {
            e.buy_order.quantity = "", e.openOrderType.v = "limitOrder"
          }, 500)
        }, function (e) {
          e.data.msg.toUpperCase().match("INSUFFICIENT BALANCE") ? layer.msg(d.instant("Balance is not enough"), {
            icon: 5,
            shift: 1,
            time: 1e3
          }) : layer.msg(e.data.msg, {icon: 5, shift: 1, time: 1e3})
        })
      } else layer.msg(d.instant("inputCorrectVolume").replace("&&&", Number(e.currentProduct.minTrade).toFixed(e.currentProduct.qtyTick)), {
        icon: 5,
        shift: 1,
        time: 500
      }), angular.element("#buy_order").val("").focus()
    } else layer.msg(d.instant("tooFast"), {icon: 5, shift: 1, time: 700})
  }, e.limitBuyOrder = function () {
    exchangeDate.isClose(e.today, e.buy_submit)
  }, e.getCommission = function (t, r) {
    n.get("/exchange/public/userTradeFee?symbol=" + t).success(function (t) {
      e.buyFee = t.buyMakerCommission, e.sellFee = t.sellMakerCommission
    })
  }, e.sell_submit = function () {
    if (chackRate()) {
      var t = angular.element("#sellPrice").val(), r = Number(e.sell_order.sell_quantity),
        o = new RegExp("^\\d+(\\.\\d{0," + e.currentProduct.qtyTick + "}0*)?$"),
        i = new RegExp("^\\d+(\\.\\d{0," + e.currentProduct.priceTick + "}0*)?$");
      if (!e.Islogin) return e.showLoginBox(), !1;
      if ("" == t || null == t) return layer.msg(d.instant("inputprice"), {icon: 5, shift: 1, time: 500}), !1;
      if (!i.test(t)) return layer.msg(d.instant("inputCrrectPrice").replace("&&&", Number(e.currentProduct.tickSize).toFixed(e.currentProduct.priceTick)), {
        icon: 5,
        shift: 1,
        time: 500
      }), !1;
      if ("" == e.sell_order.sell_quantity || null == e.sell_order.sell_quantity) return layer.msg(d.instant("inputSellVolume"), {
        icon: 5,
        shift: 1,
        time: 500
      }), angular.element("#sell_order").focus(), !1;
      if (!o.test(e.sell_order.sell_quantity)) return layer.msg(d.instant("inputCorrectVolume").replace("&&&", Number(e.currentProduct.minTrade).toFixed(e.currentProduct.qtyTick)), {
        icon: 5,
        shift: 1,
        time: 500
      }), angular.element("#sell_order").val("").focus(), !1;
      if (r > Number(e.baseFree)) return angular.element("#sell_order").focus(), !1;
      var s = {
        method: "post",
        url: "/exchange/private/order",
        data: $.param({
          price: t,
          quantity: e.sell_order.sell_quantity,
          symbol: e.currentProduct.symbol,
          side: "SELL",
          type: "LIMIT"
        })
      };
      0 != e.currentProduct.close && (e.currentProduct.close - t) / e.currentProduct.close > .05 ? layer.confirm(d.instant("sellorderConfirmTip"), {
        title: "",
        area: "320px",
        closeBtn: !1,
        skin: "confirm-class",
        btn: [d.instant("Yes"), d.instant("No")]
      }, function () {
        n(s).then(function (t) {
          layer.msg(d.instant("orderSucceed"), {icon: 1, shift: 1, time: 500}), a(function () {
            e.sell_order.sell_quantity = "", e.openOrderType.v = "limitOrder"
          }, 500)
        }, function (e) {
          e.data.msg.toUpperCase().match("INSUFFICIENT BALANCE") ? layer.msg(d.instant("Balance is not enough"), {
            icon: 5,
            shift: 1,
            time: 500
          }) : layer.msg(e.data.msg, {icon: 5, shift: 1, time: 500})
        })
      }, function () {
        layer.closeAll()
      }) : n(s).then(function (t) {
        layer.msg(d.instant("orderSucceed"), {icon: 1, shift: 1, time: 500}), a(function () {
          e.sell_order.sell_quantity = "", e.openOrderType.v = "limitOrder"
        }, 500)
      }, function (e) {
        e.data.msg.toUpperCase().match("INSUFFICIENT BALANCE") ? layer.msg(d.instant("Balance is not enough"), {
          icon: 5,
          shift: 1,
          time: 500
        }) : layer.msg(e.data.msg, {icon: 5, shift: 1, time: 500})
      })
    } else layer.msg(d.instant("tooFast"), {icon: 5, shift: 1, time: 700})
  }, e.limitSellOrder = function () {
    exchangeDate.isClose(e.today, e.sell_submit)
  }, e.market_buy_submit = function () {
    if (chackRate()) {
      var t = new RegExp("^\\d+(\\.\\d{0," + e.currentProduct.qtyTick + "}0*)?$");
      if (!e.Islogin) return e.showLoginBox(), !1;
      if ("" == e.market_buy_order.quantity || null == e.market_buy_order.quantity) return layer.msg(d.instant("inputVolume"), {
        icon: 5,
        shift: 1,
        time: 500
      }), angular.element("#market_buy_order").focus(), !1;
      if (t.test(e.market_buy_order.quantity)) {
        var r = {
          method: "post",
          url: "/exchange/private/order",
          data: $.param({
            quantity: e.market_buy_order.quantity,
            symbol: e.currentProduct.symbol,
            side: "BUY",
            type: "MARKET"
          })
        };
        e.market_buy_order.quantity = "", n(r).then(function (e) {
          layer.msg(d.instant("orderSucceed"), {icon: 1, shift: 1, time: 500})
        }, function (e) {
          e.data.msg.toUpperCase().match("INSUFFICIENT BALANCE") ? layer.msg(d.instant("Balance is not enough"), {
            icon: 5,
            shift: 1,
            time: 1e3
          }) : layer.msg(e.data.msg, {icon: 5, shift: 1, time: 1e3})
        })
      } else layer.msg(d.instant("inputCorrectVolume").replace("&&&", Number(e.currentProduct.minTrade).toFixed(e.currentProduct.qtyTick)), {
        icon: 5,
        shift: 1,
        time: 500
      }), angular.element("#market_buy_order").val("").focus()
    } else layer.msg(d.instant("tooFast"), {icon: 5, shift: 1, time: 700})
  }, e.market_sell_submit = function () {
    if (chackRate()) {
      var t = new RegExp("^\\d+(\\.\\d{0," + e.currentProduct.qtyTick + "}0*)?$");
      if (!e.Islogin) return e.showLoginBox(), !1;
      if ("" == e.market_sell_order.quantity || null == e.market_sell_order.quantity) return layer.msg(d.instant("inputVolume"), {
        icon: 5,
        shift: 1,
        time: 500
      }), angular.element("#market_sell_order").focus(), !1;
      if (t.test(e.market_sell_order.quantity)) {
        var r = {
          method: "post",
          url: "/exchange/private/order",
          data: $.param({
            quantity: e.market_sell_order.quantity,
            symbol: e.currentProduct.symbol,
            side: "SELL",
            type: "MARKET"
          })
        };
        e.market_sell_order.quantity = "", n(r).then(function (e) {
          layer.msg(d.instant("orderSucceed"), {icon: 1, shift: 1, time: 500})
        }, function (e) {
          e.data.msg.toUpperCase().match("INSUFFICIENT BALANCE") ? layer.msg(d.instant("Balance is not enough"), {
            icon: 5,
            shift: 1,
            time: 1e3
          }) : layer.msg(e.data.msg, {icon: 5, shift: 1, time: 1e3})
        })
      } else layer.msg(d.instant("inputCorrectVolume").replace("&&&", Number(e.currentProduct.minTrade).toFixed(e.currentProduct.qtyTick)), {
        icon: 5,
        shift: 1,
        time: 500
      }), angular.element("#market_sell_order").val("").focus()
    } else layer.msg(d.instant("tooFast"), {icon: 5, shift: 1, time: 700})
  }, e.stopLimit_buy_submit = function () {
    if (chackRate()) {
      var t = angular.element("#buy_stopPrice").val(), r = angular.element("#stop_curPrice").val(),
        o = angular.element("#stop_buyQuanity").val(),
        i = new RegExp("^\\d+(\\.\\d{0," + e.currentProduct.qtyTick + "}0*)?$"),
        s = new RegExp("^\\d+(\\.\\d{0," + e.currentProduct.priceTick + "}0*)?$");
      if (!e.Islogin) return e.showLoginBox(), !1;
      var l = e.qouteFree / r;
      if ("" == t || null == t) return layer.msg(d.instant("inputprice"), {icon: 5, shift: 1, time: 500}), !1;
      if (!s.test(t)) return layer.msg(d.instant("inputCrrectPrice").replace("&&&", Number(e.currentProduct.tickSize).toFixed(e.currentProduct.priceTick)), {
        icon: 5,
        shift: 1,
        time: 500
      }), !1;
      if ("" == r || null == r) return layer.msg(d.instant("inputprice"), {icon: 5, shift: 1, time: 500}), !1;
      if (!s.test(r)) return layer.msg(d.instant("inputCrrectPrice").replace("&&&", Number(e.currentProduct.tickSize).toFixed(e.currentProduct.priceTick)), {
        icon: 5,
        shift: 1,
        time: 500
      }), !1;
      if ("" == o || null == o) return layer.msg(d.instant("inputVolume"), {
        icon: 5,
        shift: 1,
        time: 500
      }), angular.element("#stop_buyQuanity").focus(), !1;
      if (!i.test(o)) return layer.msg(d.instant("inputCorrectVolume").replace("&&&", Number(e.currentProduct.minTrade).toFixed(e.currentProduct.qtyTick)), {
        icon: 5,
        shift: 1,
        time: 500
      }), angular.element("#stop_buyQuanity").focus(), !1;
      if (Number(o) > l) return angular.element("#stop_buyQuanity").focus(), !1;
      var c, u;
      Number(t) >= Number(e.currentProduct.close) ? (c = "STOP_LOSS_LIMIT", u = "cn" != e.lang ? "If the last price rises to or above " + t + " " + e.currentProduct.quoteAsset + " ,an order to buy " + o + " " + e.currentProduct.baseAsset + " at a price of " + r + " " + e.currentProduct.quoteAsset + " will be placed." : "当价格上涨至或高于" + t + " " + e.currentProduct.quoteAsset + "时，则触发以" + r + " " + e.currentProduct.quoteAsset + "的价格买入" + o + " " + e.currentProduct.baseAsset + "的订单") : Number(t) < Number(e.currentProduct.close) && (c = "TAKE_PROFIT_LIMIT", u = "cn" != e.lang ? "If the last price drops to or below " + t + " " + e.currentProduct.quoteAsset + ", an order to buy" + o + " " + e.currentProduct.baseAsset + "at a price of" + r + " " + e.currentProduct.quoteAsset + "will be placed." : "当价格下跌至或低于" + t + " " + e.currentProduct.quoteAsset + "时，则触发以" + r + " " + e.currentProduct.quoteAsset + "的价格买入" + o + " " + e.currentProduct.baseAsset + "的订单");
      var f = {
        method: "post",
        url: "/exchange/private/order",
        data: $.param({price: r, quantity: o, symbol: e.product.symbol, side: "BUY", stopPrice: t, type: c})
      };
      layer.confirm(u, {
        title: "",
        area: "320px",
        closeBtn: !1,
        skin: "confirm-class",
        btn: [d.instant("Yes"), d.instant("No")]
      }, function () {
        n(f).then(function (t) {
          layer.msg(d.instant("orderSucceed"), {icon: 1, shift: 1, time: 500}), a(function () {
            e.stopBuy_order.quantity = "", e.openOrderType.v = "stopLimitOrder"
          }, 500)
        }, function (e) {
          e.data.msg.toUpperCase().match("INSUFFICIENT BALANCE") ? layer.msg(d.instant("Balance is not enough"), {
            icon: 5,
            shift: 1,
            time: 1e3
          }) : layer.msg(e.data.msg, {icon: 5, shift: 1, time: 1e3})
        })
      }, function () {
        layer.closeAll()
      })
    } else layer.msg(d.instant("tooFast"), {icon: 5, shift: 1, time: 700})
  }, e.stopLimit_sell_submit = function () {
    if (chackRate()) {
      var t = angular.element("#stopSell_StopPrice").val(), r = angular.element("#stopSell_curPrice").val(),
        o = angular.element("#stopSell_Quanity").val(),
        i = new RegExp("^\\d+(\\.\\d{0," + e.currentProduct.qtyTick + "}0*)?$"),
        s = new RegExp("^\\d+(\\.\\d{0," + e.currentProduct.priceTick + "}0*)?$");
      if (!e.Islogin) return e.showLoginBox(), !1;
      if ("" == t || null == t) return layer.msg(d.instant("inputprice"), {icon: 5, shift: 1, time: 500}), !1;
      if (!s.test(t)) return layer.msg(d.instant("inputCrrectPrice").replace("&&&", Number(e.currentProduct.tickSize).toFixed(e.currentProduct.priceTick)), {
        icon: 5,
        shift: 1,
        time: 500
      }), !1;
      if ("" == r || null == r) return layer.msg(d.instant("inputprice"), {icon: 5, shift: 1, time: 500}), !1;
      if (!s.test(r)) return layer.msg(d.instant("inputCrrectPrice").replace("&&&", Number(e.currentProduct.tickSize).toFixed(e.currentProduct.priceTick)), {
        icon: 5,
        shift: 1,
        time: 500
      }), !1;
      if ("" == o || null == o) return layer.msg(d.instant("inputSellVolume"), {
        icon: 5,
        shift: 1,
        time: 500
      }), angular.element("#stopSell_Quanity").focus(), !1;
      if (!i.test(o)) return layer.msg(d.instant("inputCorrectVolume").replace("&&&", Number(e.currentProduct.minTrade).toFixed(e.currentProduct.qtyTick)), {
        icon: 5,
        shift: 1,
        time: 500
      }), angular.element("#stopSell_Quanity").val("").focus(), !1;
      if (o > Number(e.baseFree)) return angular.element("#stopSell_Quanity").focus(), !1;
      var l, c;
      Number(t) > Number(e.currentProduct.close) ? (l = "TAKE_PROFIT_LIMIT", c = "cn" != e.lang ? "If the last price rises to or above " + t + " " + e.currentProduct.quoteAsset + " ,an order to sell " + o + " " + e.currentProduct.baseAsset + " at a price of " + r + " " + e.currentProduct.quoteAsset + " will be placed." : "当价格上涨至或高于" + t + " " + e.currentProduct.quoteAsset + "时，则触发以" + r + " " + e.currentProduct.quoteAsset + "的价格卖出" + o + " " + e.currentProduct.baseAsset + "的订单") : Number(t) <= Number(e.currentProduct.close) && (l = "STOP_LOSS_LIMIT", c = "cn" != e.lang ? "If the last price drops to or below " + t + " " + e.currentProduct.quoteAsset + ", an order to sell" + o + " " + e.currentProduct.baseAsset + "at a price of" + r + " " + e.currentProduct.quoteAsset + "will be placed." : "当价格下跌至或低于" + t + " " + e.currentProduct.quoteAsset + "时，则触发以" + r + " " + e.currentProduct.quoteAsset + "的价格卖出" + o + " " + e.currentProduct.baseAsset + "的订单");
      var u = {
        method: "post",
        url: "/exchange/private/order",
        data: $.param({price: r, quantity: o, symbol: e.product.symbol, side: "SELL", stopPrice: t, type: l})
      };
      layer.confirm(c, {
        title: "",
        area: "320px",
        closeBtn: !1,
        skin: "confirm-class",
        btn: [d.instant("Yes"), d.instant("No")]
      }, function () {
        n(u).then(function (t) {
          layer.msg(d.instant("orderSucceed"), {icon: 1, shift: 1, time: 500}), a(function () {
            e.stopSell_order.quantity = "", e.openOrderType.v = "stopLimitOrder"
          }, 500)
        }, function (e) {
          e.data.msg.toUpperCase().match("INSUFFICIENT BALANCE") ? layer.msg(d.instant("Balance is not enough"), {
            icon: 5,
            shift: 1,
            time: 500
          }) : layer.msg(e.data.msg, {icon: 5, shift: 1, time: 500})
        })
      }, function () {
        layer.closeAll()
      })
    } else layer.msg(d.instant("tooFast"), {icon: 5, shift: 1, time: 700})
  }, e.deleteOrder = function (e, t) {
    var r = {method: "post", url: "/exchange/private/deleteOrder", data: $.param({orderId: e, symbol: t})};
    n(r).then(function (e) {
      layer.msg(d.instant("cancelOrderSucceed"), {icon: 1, shift: 1, time: 500})
    }, function (e) {
      layer.msg(e.data.msg, {icon: 5, shift: 1, time: 500})
    })
  }, e.caculateNum = function (t) {
    var n = 0;
    return "All" == t ? n = e.openOrders.length : "Stop-Limit" == t ? angular.forEach(e.openOrders, function (e, t) {
      e.stopPrice && (n += 1)
    }) : "Limit" == t && angular.forEach(e.openOrders, function (e, t) {
      e.stopPrice || (n += 1)
    }), n
  }, e.deleteAllOrder = function (t) {
    "dqwt" == e.sign && (angular.element(".wrap").removeClass("blur"), angular.forEach(e.openOrders, function (n) {
      "All" == t ? e.deleteOrder(n.orderId, n.symbol) : "Limit" == t ? n.stopPrice || e.deleteOrder(n.orderId, n.symbol) : "Stop-Limit" == t && n.stopPrice && e.deleteOrder(n.orderId, n.symbol)
    }))
  }, e.deleteAllOrderAsk = function (t) {
    var n, r;
    if ("Limit" == t ? (r = e.caculateNum("Limit"), n = "Are you sure to cancel all Limit orders?") : "Stop-Limit" == t ? (r = e.caculateNum("Stop-Limit"), n = "Are you sure to cancel all Stop-Limit orders?") : "All" == t && (r = e.caculateNum("All"), n = "Are you sure you want to cancel all?"), r) {
      angular.element(".wrap").addClass("blur");
      var o = layer.confirm('<p style="font-size:16px;color:#c3c3c3;font-family:NSimSun;text-align: center;margin-top: 18px;height:60px">' + d.instant(n) + "</p>", {
        skin: "confirm-class",
        closeBtn: !1,
        area: ["345px", "170px"],
        title: !1,
        btn: [d.instant("Yes"), d.instant("No")]
      }, function () {
        e.deleteAllOrder(t)
      }, function () {
        angular.element(".wrap").removeClass("blur"), layer.close(o)
      })
    }
  };
  var ae = function (e) {
    switch (e) {
      case"0":
      case"60":
        return "1m";
      case"180":
        return "3m";
      case"300":
        return "5m";
      case"900":
        return "15m";
      case"1800":
        return "30m";
      case"3600":
        return "1h";
      case"7200":
        return "2h";
      case"14400":
        return "4h";
      case"21600":
        return "6h";
      case"43200":
        return "12h";
      case"86400":
        return "1d";
      case"259200":
        return "3d";
      case"604800":
        return "1w"
    }
    console.log("Error parsing resolution: " + e)
  };
  void 0 !== e.product.symbol && (e.product.baseCurrency = e.product.oriSymbol.split("_")[0], e.product.qouteCurrency = e.product.oriSymbol.split("_")[1]);
  var se = "60", le = ae(se);
  RTBTC.instrument("Binance", e.product.symbol, e.product.qouteCurrency);
  var ce = JSON.parse(localStorage.chart || "{}"), ue = {
    t: Number(se),
    icontrols: !0,
    i: [{m: !0, p: 0, h: 50, u: [], g: !0, o: []}, {m: !1, t: "vol", i: null, p: 5, h: 10, r: []}]
  };
  if (localStorage.chart) {
    e.curzb = ce.curzb;
    for (pe = 0; pe < ce.u.length; pe++) {
      fe = ce.u[pe];
      ue.i[0].u.push({i: null, s: fe.s, t: fe.t}), e.curOver = function (e) {
        var t;
        return "macd" == e ? t = "MACD" : "trix" == e ? t = "TRIX" : "kdj" == e ? t = "KDJ" : "BRAR" == e || ("storsi" == e ? t = "StochRSI" : "VR" == e || ("rsi" == e ? t = "RSI" : "emv" == e ? t = "EMV" : "dmi" == e ? t = "DMI" : "wpr" == e ? t = "WR" : "obv" == e ? t = "OBV" : "ROC" == e || ("bnd" == e ? t = "BOLL" : "mtm" == e ? t = "MTM" : "psar" == e ? t = "SAR" : "ema" == e ? t = "EMA" : "PSY" == e || ("cci" == e ? t = "CCI" : "vwap" == e ? t = "VWAP" : "ma" == e ? t = "MA" : "avl" == e && (t = "AVL"))))), t
      }(fe.t)
    }
    for (pe = 0; pe < ce.o.length; pe++) {
      var fe = ce.o[pe];
      ue.i[0].o.push({i: null, s: o.s, t: o.t}), e.curOver = fe.t
    }
    for (var de = 0; de < ce.i.length; de++) {
      var pe = ce.i[de];
      ue.i.push({i: null, t: pe.t, h: pe.h, r: [], p: 5, m: !1})
    }
  } else e.curzb = "MACD", ue.i.push({m: !1, t: "macd", i: null, p: 5, h: 10, r: []}), ue.i[0].u.push({
    t: "avl",
    i: null,
    s: []
  });
  window.chart = (new Chart).build("#chart", null, ue), chart.onTheme("chart-black-" + EXCHANGE);
  var he = (new custLine).build();
  he.setChartData(chart.getInernal()), e.setDrawLineType = function (e) {
    he.add(e), chart.setCrossHair(!1)
  }, he.ifNull(function () {
    chart.setCrossHair(!0)
  }), e.deleteLine = function () {
    he.deleteLine(), e.drawLists = !1
  }, e.cleanLines = function () {
    he.clean(), e.drawLists = !1
  }, window.UserAccount = UserAccount_Class.Build();
  var ge = angular.element(window).height(), me = angular.element(".header").outerHeight(!0),
    ve = angular.element(".detail-lb").outerHeight(!0);
  angular.element(".box-inner").css({height: ge - me - ve - 39, "max-height": ge - me - 75});
  var be = (new VisualDepth).build("#depth", $("#p"));
  be.onTheme("depth-black-" + EXCHANGE), e.depthMergeUnit = 8, e.trades = [], e.todayTrades = [], e.streamBids = {}, e.streamBidsKeys = [], e.streamAsks = {}, e.streamAsksKeys = [];
  var ye = function (t) {
    if ("depthUpdate" == t.eventType) {
      console.log(t.bids), L(t.bids, e.streamBids), L(t.asks, e.streamAsks);
      OBD.loadBook(e.streamAsks, e.streamBids, 100), e.streamBidsKeys = Object.keys(e.streamBids).sort(function (e, t) {
        return e - t
      }), e.streamAsksKeys = Object.keys(e.streamAsks).sort(function (e, t) {
        return e - t
      });
      var n = [], r = [];
      M(e.streamBidsKeys, e.streamBids, n, D), M(e.streamAsksKeys, e.streamAsks, r, I), n[n.length - 1] && r[0] && !isNaN(Number(n[n.length - 1][0])) && !isNaN(Number(r[0][0])) && Number(n[n.length - 1][0]) >= Number(r[0][0]) && e.streamerInstance.RePull(), (n = n.reverse()).length > 100 && (n = n.slice(0, 100)), e.bidsTwenty = n, r.length > 100 && (r = r.slice(0, 100)), e.asksTwenty = r.reverse(), (e.bidsTwenty.length || e.asksTwenty.length) && _(e.bidsTwenty, e.asksTwenty), U(e.asksTwenty, e.bidsTwenty, e.openOrders), F(e.bidsTwenty), B(e.asksTwenty), "$apply" != (i = e.$root.$$phase) && "$digest" != i && e.$apply()
    } else if ("trade" == t.eventType) {
      if ((0 == e.trades.length || e.trades[0].aggTradeId < t.aggTradeId) && (e.trades.unshift(t), e.trades.length > 50 && e.trades.pop()), !e.currentProduct.lastAggTradeId || null == e.currentProduct.lastAggTradeId || e.currentProduct.lastAggTradeId >= t.aggTradeId) return;
      e.currentProduct.lastAggTradeId = t.aggTradeId;
      var o = Number(t.price);
      e.currentProduct.close = o;
      var i = e.$root.$$phase;
      "$apply" != i && "$digest" != i && e.$apply()
    } else "kline" == t.eventType ? t.kline.interval == le && Data.onBar([t.kline.time, Number(t.kline.open), Number(t.kline.high), Number(t.kline.low), Number(t.kline.close), Number(t.kline.volume), Number(t.kline.quoteVolume)], Number(se)) : (console.log("Error! Bad data received:"), console.log(t))
  }, xe = 280;
  e.depthMergeChange = function (t) {
    e.depthMergeUnit = t, ye({eventType: "depthUpdate"})
  };
  var we = !0, $e = function (t, n) {
    he.clean(), chart.setCrossHair(!0), n ? (we || (chart.fixTime(!1), chart.clearData(), chart.removeIndicatorByname(["avl"]), chart.addOrUpdateIndicator("ma", 7), chart.addOrUpdateIndicator("ma", 25), chart.addOrUpdateIndicator("ma", 99), chart.setMode("Candle"), e.curOver = "MA", Se(), we = !0), le = ae(se = t), chart.setResolution(Number(t))) : (we && (chart.fixTime(!1), chart.clearData(), chart.setLastColorIndex(0), e.removeOver(e.curOver), chart.addOrUpdateIndicator("avl"), chart.setMode("Line"), Se(), e.curOver = "AVL", we = !1), le = ae(se = "60"), chart.setResolution(60))
  }, ke = Number(localStorage.barWidth || 5);
  e.getByInterval = function (t, n) {
    Te != n && ($e(t, !0), e.curIndex = n, Te = n, localStorage.curIndex = n)
  }, e.setTimeLine = function (t) {
    Te != t && ($e("60", !1), e.curIndex = t, localStorage.curIndex = t, Te = t)
  }, parseInt(e.curIndex) ? (we = !0, R(X[parseInt(e.curIndex)] + "", "Candle")) : (we = !1, e.curIndex = 0, R(X[parseInt(e.curIndex)] + "", "Line")), e.chartLoaded = function () {
    e.klineStreamer && e.klineStreamer.stopStream(), e.loaded = !0, n.get("/exchange/public/klineUrl").success(function (t) {
      e.connectToKlineStreamer(t)
    })
  };
  var Te = "-1";
  Data.onLoaded(function () {
    S.close("#chart"), e.chartLoaded()
  }), e.jszbLists = !1, e.setIndicator = function (t) {
    var n = j(t);
    chart.isIndicator(n) ? (e.removeIndicator(e.curzb), chart.addOrUpdateIndicator(n), e.curzb = t) : (e.removeOver(e.curOver), "ema" == n || "ma" == n ? (chart.addOrUpdateIndicator(n, 7), chart.addOrUpdateIndicator(n, 25), chart.addOrUpdateIndicator(n, 99)) : chart.addOrUpdateIndicator(n), e.curOver = t), Se()
  }, e.removeIndicator = function (t) {
    var n = j(t);
    "ema" == n || "ma" == n ? (chart.removeIndicatorByname([n]), chart.removeIndicatorByname([n]), chart.removeIndicatorByname([n])) : chart.removeIndicatorByname([n]), e.curzb = "", Se()
  }, e.removeOver = function (t) {
    var n = j(t);
    "ema" == n || "ma" == n ? (chart.removeIndicatorByname([n]), chart.removeIndicatorByname([n]), chart.removeIndicatorByname([n])) : chart.removeIndicatorByname([n]), e.curOver = "", Se()
  }, $(".chart").on("blur", ".icontrol input", function () {
    Se()
  });
  var Se = function () {
    var t = {};
    t.u = [], t.o = [];
    for (var n = chart.internals().slots[0].u, r = chart.internals().slots[0].o, o = 0; o < n.length; o++) t.u.push({
      s: n[o].s,
      t: n[o].t
    });
    for (o = 0; o < r.length; o++) t.o.push({s: r[o].s, t: r[o].t});
    t.i = [];
    for (var i = 2; i < chart.internals().slots.length; i++) {
      var a = chart.internals().slots[i];
      t.i.push({h: a.h, px: a.px, s: a.s, t: a.t})
    }
    t.curzb = e.curzb, localStorage.chart = JSON.stringify(t)
  };
  e.disconnect = function () {
    e.streamerInstance.stopStream(), e.streamerInstance = null
  }, e.connectToSymbol = function (t) {
    null == e.streamerInstance ? e.streamerInstance = new u : e.streamerInstance.stopStream(), e.streamerInstance.startStream(e.product.symbol, t, function (t) {
      t.clean && (e.streamBids = {}, e.streamAsks = {}), ye(t)
    }, q)
  }, e.getStreamers = function () {
    e.connectToTradeStream(e.wssUrl), e.connectToSymbol(e.wssUrl)
  }, n.get("/exchange/public/wssUrl").success(function (t) {
    e.wssUrl = t, e.connectToTradeStream(t), e.connectToSymbol(t)
  });
  e.userCallback = function (t) {
    if ("outboundAccountInfo" == t.eventType && t.balances.forEach(function (t) {
        if (t.asset == e.product.qouteCurrency && (e.qouteFree = t.free), t.asset == e.product.baseCurrency && (e.baseFree = t.free), e.userAssets instanceof Array) {
          var n;
          e.userAssets.forEach(function (r, o) {
            r.asset == t.asset && (r.locked = t.locked, r.free = t.free, e.currentUserAsset = r.free, 0 == e.currentUserAsset ? e.takeDelivery = !1 : e.takeDelivery = !0, 0 == parseFloat(r.free).toFixed(2) && 0 == parseFloat(r.locked).toFixed(2) && 0 == parseFloat(r.freeze).toFixed(2) && 0 == parseFloat(r.ipoing).toFixed(2) && 0 == parseFloat(r.ipoable).toFixed(2) && 0 == parseFloat(r.storage).toFixed(2) && (n = o))
          }), void 0 !== n && e.userAssets.splice(n, 1)
        }
      }), "executionReport" == t.eventType) {
      var n = {};
      switch (n.time = t.time, n.symbol = t.symbol, n.side = t.side, n.type = t.orderType, n.orderType = d.instant(n.type), n.status = t.orderStatus, n.workingIndicator = t.workingIndicator, n.origQty = parseFloat(t.qty), n.price = parseFloat(t.price), n.stopPrice = parseFloat(t.stopPrice), n.executedQty = parseFloat(t.cummulativeQty), n.commissionAsset = t.commissionAsset, n.orderId = t.orderId, "STOP_LOSS_LIMIT" != n.type && "TAKE_PROFIT_LIMIT" != n.type || (n.orderType = d.instant("Stop-Limit")), t.orderStatus) {
        case"NEW":
          n.executedQty = 0, n.executedPrice = 0, console.log(n.symbol + " 委托" + n.origQty), "LIMIT" == n.type || "MARKET" == n.type ? (e.openOrders.splice(0, 0, n), e.IsopenOrdersNull = !1) : "STOP_LOSS_LIMIT" != n.type && "TAKE_PROFIT_LIMIT" != n.type || (n.workingIndicator ? angular.forEach(e.openOrders, function (t, r) {
            n.orderId == t.orderId && n.symbol == t.symbol && (e.openOrders[r].workingIndicator = n.workingIndicator)
          }) : (e.openOrders.splice(0, 0, n), e.IsopenOrdersNull = !1));
          break;
        case"PARTIALLY_FILLED":
          var r = parseFloat(t.lastQty), o = parseFloat(t.lastPrice), i = parseFloat(t.cummulativeQty);
          e.openOrders instanceof Array && e.openOrders.forEach(function (e) {
            e.symbol == n.symbol && e.orderId == n.orderId && (e.executedPrice = (e.executedQty * e.executedPrice + o * r) / i, e.executedQty = i, e.executedQuoteQty = e.executedPrice * e.executedQty, e.status = d.instant("PARTIALLY_FILLED"))
          });
          var a = {};
          a.symbol = t.symbol, a.time = t.time, a.side = t.side, a.qty = t.lastQty, a.price = t.lastPrice, a.totalQuota = i * o, a.fee = parseFloat(t.commission), a.feeAsset = t.commissionAsset, e.dealOrders.splice(0, 0, a), e.dealOrders && e.dealOrders.length > 30 && e.dealOrders.pop(), e.dealBigTotalItems = e.dealOrders.length, e.updatePosition(n, r, o, parseFloat(a.fee));
          break;
        case"FILLED":
          var s = parseFloat(t.lastQty), l = parseFloat(t.lastPrice), c = parseFloat(t.cummulativeQty);
          console.log(t), e.openOrders instanceof Array && e.openOrders.forEach(function (e) {
            e.symbol == n.symbol && e.orderId == n.orderId && (e.executedPrice = (e.executedQty * e.executedPrice + l * s) / c, e.executedQty = c, e.status = d.instant("FILLED"), e.executedQuoteQty = e.executedPrice * e.executedQty, g = e)
          });
          var u = {};
          u.symbol = n.symbol, u.time = n.time, u.side = n.side, u.qty = s, u.price = l;
          var f = parseFloat(t.commission);
          u.fee = f, u.feeAsset = t.commissionAsset, u.totalQuota = c * l, e.dealOrders.splice(0, 0, u), e.dealOrders && e.dealOrders.length > 30 && e.dealOrders.pop(), e.dealBigTotalItems = e.dealOrders.length, e.allOrders.splice(0, 0, g), e.allOrders && e.allOrders.length > 30 && e.allOrders.pop();
          var p;
          e.openOrders.forEach(function (e, t) {
            e.symbol == n.symbol && e.orderId == n.orderId && (p = t)
          }), e.openOrders.splice(p, 1), 0 == e.openOrders.length ? e.IsopenOrdersNull = !0 : e.IsopenOrdersNull = !1, e.updatePosition(n, s, l, parseFloat(f));
          break;
        case"CANCELED":
        case"EXPIRED":
          var h, g, s = parseFloat(t.lastQty), l = parseFloat(t.lastPrice), c = parseFloat(t.cummulativeQty);
          e.openOrders.forEach(function (e, t) {
            e.symbol == n.symbol && e.orderId == n.orderId && (h = t, 0 == c ? (e.executedPrice = n.price, e.status = d.instant("CANCELED"), "MARKET" == n.type && (e.status = d.instant("EXPIRED")), e.executedQuoteQty = 0) : (e.executedPrice = (e.executedQty * e.executedPrice + l * s) / c, e.executedQty = c, e.status = d.instant("PARTIALLY_FILLED"), e.executedQuoteQty = e.executedPrice * e.executedQty), g = e)
          }), e.openOrders.splice(h, 1), 0 == e.openOrders.length ? e.IsopenOrdersNull = !0 : e.IsopenOrdersNull = !1, e.allOrders.splice(0, 0, g), e.allOrders && e.allOrders.length > 30 && e.allOrders.pop()
      }
      O(e.openOrders), U(e.asksTwenty, e.bidsTwenty, e.openOrders)
    }
    var m = e.$root.$$phase;
    "$apply" != m && "$digest" != m && e.$apply()
  }, e.updatePosition = function (t, n, r, o) {
    var i, a;
    if (e.userAssets instanceof Array && (e.userAssets.forEach(function (n, r) {
        n.asset == e.productSplit[t.symbol].base && (i = n, a = r)
      }), !i && "BUY" == t.side)) {
      var s = {};
      s.asset = t.symbol.replace(t.commissionAsset, ""), s.productName = t.productName, s.free = n, s.locked = 0, s.freeze = 0, s.withdrawing = 0, s.ipoing = 0, s.ipoable = 0, s.storage = 0, s.quoteAsset = t.commissionAsset, s.price = r, s.marketValue = n * r, s.profitLoss = -o, e.userAssets.splice(0, 0, s)
    }
    0 == e.userAssets.length && (e.totalMarketValue = 0, e.totalProfit = 0)
  }, e.connectToKlineStreamer = function (t) {
    null == e.klineStreamer ? e.klineStreamer = new h : e.klineStreamer.stopStream(), e.klineStreamer.startStream(e.product.symbol, t, ae(se), function (e) {
      ye(e)
    })
  }, e.connectToTradeStream = function (t) {
    S.loading("#tradeHistory"), null == e.streamerTrade ? e.streamerTrade = new g : e.streamerTrade.stopStream(), e.streamerTrade.startStream(e.product.symbol, t, function (t) {
      1 == t.clean && (e.trades = []), ye(t), S.close("#tradeHistory")
    })
  }, e.connectToMktdata = function (t) {
    null == e.streamerMktdata && (e.streamerMktdata = new b, e.streamerMktdata.startStream(t, function (t) {
      t.forEach(function (t) {
        if ("trade" == t.eventType) {
          if (e.currentProduct.symbol == t.symbol) {
            var n = Number(t.price);
            e.currentProduct.close = n, e.currentProduct.open = t.open, e.currentProduct.high = t.high, e.currentProduct.low = t.low, e.currentProduct.volume = Number(t.volume), e.currentProduct.tradedMoney = Number(t.quoteVolume)
          }
          e.productSplit[t.symbol] && (e.lastPrices[e.productSplit[t.symbol].base] = t.price), angular.forEach(e.products, function (e) {
            e.symbol == t.symbol && (e.close = Number(t.price), e.open = t.open, e.high = t.high, e.low = t.low, e.volume = Number(t.volume), e.tradedMoney = Number(t.quoteVolume), e.changeRate = 100 * Number(1 * t.price - t.open) / t.open)
          }), e.getTransToUSDT(e.products), e.sortByKey(e.orderKey, 1)
        }
      });
      var n = e.$root.$$phase;
      "$apply" != n && "$digest" != n && e.$apply()
    }))
  }, n.get("/exchange/public/mktdataWssUrl").success(function (t) {
    e.connectToMktdata(t)
  }), e.getUserInfo = function () {
    var t = {};
    t.method = "post", t.url = "/exchange/private/startStream", n(t).success(function (t) {
      n.get("/exchange/public/wssUrl").success(function (o) {
        var i = o + "/" + t.listenKey;
        r(function () {
          n({
            url: "/exchange/private/pingStream",
            method: "post",
            data: "listenKey=" + t.listenKey
          }).success(function () {
            console.log("pingStream success")
          })
        }, 18e5), null == e.userStreamerInstance && (e.userStreamerInstance = new p, e.userStreamerInstance.startStream(i, e.userCallback))
      })
    })
  }, e.depthSelect = function (e) {
  }, e.isFull = !1;
  var Ce = angular.element("#klinecon"), Ee = angular.element("#chart_container"),
    ge = angular.element(window).height();
  e.setlayout = function () {
    var t = angular.element(window).height(), n = angular.element(".header").outerHeight(!0),
      r = angular.element(".detail-lb").outerHeight(!0), o = angular.element(".detail-rb").outerHeight(!0),
      i = angular.element(".depthctrl").outerHeight(!0), a = angular.element(".orderform").outerHeight(!0);
    angular.element(".detail-lt").css({
      height: t - n - r + 25,
      "max-height": t - n - 12
    }), angular.element(".detail-rt").css("height", t - n - o - 11), angular.element(".newtrade").css("height", 16 * Math.floor((t - n - o - 6 - 20) / 16)), angular.element(".tradefive").css("height", 16 * Math.floor((t - n - o - 6 - 12 - i) / 16) + 12 + i), angular.element(".tradefive-inner").css("height", 16 * Math.floor((t - n - a - (37 + i)) / 2 / 16)), ye({eventType: "depthUpdate"}), "kline" == e.tabName && chart.resize(), "depth" == e.tabName && (angular.element(".box-inner").css({
      height: t - n - r - 47,
      "max-height": t
    }), be.resize())
  }, e.fullpage = function () {
    e.isFull = !0, Ce.css({
      position: "fixed",
      top: "0px",
      left: "0px",
      width: "100%",
      height: "100%",
      "z-index": 99
    }), Ee.css({width: "100%", "max-height": ge - 33 + "px"}), chart.resize()
  }, $(window).keydown(function (t) {
    27 == t.keyCode && e.isFull && e.offFullpage()
  }), e.offFullpage = function () {
    e.isFull = !1, Ce.css({position: "static"}), e.setlayout()
  }, m.loading(), $(window).load(function () {
    e.setlayout(), chart.resize(), angular.element("input").attr("autocomplete", "off"), m.close()
  }), window.onresize = function () {
    e.setlayout()
  };
  var Ae = !1, Ne = 0;
  $(".handle").mousedown(function (t) {
    Ae = !0, Ne = t.clientY;
    var n = $(".detail-lt").height(), r = $(".detail-lb").height();
    return $(document).mousemove(function (t) {
      if (Ae) {
        var o = t.clientY - Ne;
        $(".detail-lt").css("height", n + o + "px"), $(".detail-lb").css("height", r - o + "px"), "kline" == e.tabName && (chart.resize(), he.resize()), "depth" == e.tabName && ($(".box-inner").css("height", n + o - 34 + "px"), be.resize())
      }
    }), !1
  }), $(document).mouseup(function () {
    Ae = !1
  }), e.isLogin(), (v = document.getElementById("askScrollBox")) && (v.addEventListener(getTransitionEvent().type, function () {
    document.getElementById("askScrollBox").scrollTop = document.getElementById("askScrollBox").scrollHeight
  }), document.getElementById("bidScrollBox").addEventListener(getTransitionEvent().type, function () {
    document.getElementById("bidScrollBox").scrollTop = 0
  })), e.autoSubmit = function (e) {
    var t = $(e.target);
    6 == t.val().length && setTimeout(function () {
      t.is(":focus") && t.parents("form").submit()
    }, 500)
  }
}]);
var sortDepth = new function () {
  this.sort = function (e) {
    return e.sort(function (e, t) {
      return e[1] - t[1]
    }), e
  }, this.median = function (e) {
    var t = Math.floor(e.length / 3 * 2);
    return e[t][1] < 1 ? 1 : e[t][1]
  }, this.medianUnit = function (e, t, n) {
    var r = new Array(e);
    r = r[0];
    var o = new Array(t);
    o = o[0], r = r.concat(o);
    var i = this.median(this.sort(r)) / n;
    return r = null, o = null, i
  }, this.width = function (e, t) {
    if (0 == t) return 1;
    var n = Math.round(Number(e) / t);
    return n <= 0 ? 1 : n > 160 ? 160 : n
  }
}, BTCConvert = new function () {
  this.setProducts = function (e) {
    this.products = e, this.g = new Graph(e.length);
    var t = this;
    e.forEach(function (e) {
      t.g.addEdge(e.baseAsset, e.quoteAsset, e.symbol)
    })
  }, this.getNewPrice = function (e, t, n) {
    n && this.setProducts(n), this.g.bfs(e);
    var r = this.g.pathTo("BTC");
    if (r) {
      for (var o = 0; o < r.length; o++) this.products.forEach(function (e) {
        if (e.baseAsset == r[o][0] && e.quoteAsset == r[o][1]) {
          n = e.close;
          t *= n
        }
        if (e.quoteAsset == r[o][0] && e.baseAsset == r[o][1]) {
          var n = e.close;
          t /= n
        }
      });
      return t
    }
    return 0
  }
}, getTransitionEvent = function () {
  var e, t, n = !1, r = document.createElement("fakeelement"), o = {
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "transitionend",
    OTransition: "otransitionend",
    transition: "transitionend"
  };
  for (e in o) if (void 0 !== r.style[e]) {
    t = o[e], n = !0;
    break
  }
  return {type: t, supported: n}
};
app.factory("streamer", ["$http", "$interval", function (e, t) {
  return function () {
    var t, n = {};
    return n.isRunning = !1, n.restart = !1, n.root_url = location.host.match("localhost") || location.host.match("192.168.0") ? "/exchange/public" : "/api/v1", n.startStream = function (e, t, r, o) {
      n.isRunning = !0, n.url = t, n.lastDepthId = -2, n.connectRightNow = !0, n.backedMsg = [], n.buildingState = !0, n.wsbuildingState = !0, n.restart = !0, n.lastConntectTime, n.callback = r, n.symbol = e, n.lowerCaseSymbol = e.toLowerCase(), n.stateChange = o || function () {
      }, n.stateChange(!0), n.ws && n.stopStream(), n.ws = n._makeStream()
    }, n.processData = function (e) {
      n._isDuplicate(e) || n.callback(e)
    }, n.stopStream = function () {
      n.restart = !1, n.ws && (n._clear(n.ws), n.ws.handClose = !0, n.ws.close()), n.lastDepthId = -2, n.connectRightNow = !0, n.backedMsg = [], n.buildingState = !0, n.wsbuildingState = !0, n.isRunning = !1
    }, n._rolloverStream = function () {
      console.log("Rolling over stream!"), n.backedMsg = [], n.buildingState = !0, n.wsbuildingState = !0, n.stateChange(!0), n.ws = n._makeStream()
    }, n._makeStream = function () {
      var r = new WebSocket(n.url + "/" + n.lowerCaseSymbol + "@depth.b10");
      return n._buildState(), r.onopen = function () {
        console.log("Socket has been opened for: " + n.symbol + "!"), n.lastConntectTime = new Date, n.wsbuildingState = !1, n.stateChange(!(0 == n.buildingState && 0 == n.wsbuildingState)), clearInterval(t)
      }, r.onclose = function (e) {
        console.log("Socket has been CLOSED for: " + n.symbol + "!"), n.wsbuildingState = !0, n.stateChange(!0), r.handClose ? (r.handClose = !1, console.log("Socket done!")) : (new Date).getTime() - n.lastConntectTime.getTime() < 12e4 ? setTimeout(function () {
          console.log("streamer reconntect delay=========="), n._rolloverStream()
        }, 1e3) : (console.log("streamer reconntect now=========="), n._rolloverStream())
      }, r.onmessage = function (e) {
        if (r == n.ws) {
          var t = JSON.parse(e.data);
          console.log("WS recv: " + t), t = n.converter(t), n.buildingState ? (n.backedMsg.push(t), console.log("Adding msg to backlog: " + t)) : n._isLoss(t) ? (n.backedMsg = [], n.backedMsg.push(t), n.buildingState = !0, n.stateChange(n.buildingState), n._buildState()) : n.processData(t)
        }
      }, r.onerror = function (r) {
        n.wsbuildingState = !0, n.stateChange(!0), t || (t = setInterval(function () {
          var t = {};
          t.method = "get", t.url = n.root_url + "/depth", t.params = {
            symbol: n.symbol,
            limit: 100
          }, e(t).success(function (e) {
            var t = {};
            t.eventType = "depthUpdate", t.updateId = e.lastUpdateId, t.bids = e.bids, t.asks = e.asks, n.processData(t)
          })
        }, 3e3)), setTimeout(function () {
          console.log("streamer reconntect now=========="), n.stopStream(), n._rolloverStream()
        }, 6e4)
      }, r
    }, n.RePull = function () {
      n.backedMsg = [], n.buildingState = !0, n.stateChange(n.buildingState), n._buildState()
    }, n._buildState = function () {
      var t = {};
      t.method = "get", t.url = n.root_url + "/depth", t.params = {symbol: n.symbol};
      var r = function () {
        e(t).success(function (e) {
          n.lastDepthId = -1;
          var t = {};
          t.eventType = "depthUpdate", t.updateId = e.lastUpdateId, t.bids = e.bids, t.asks = e.asks, t.clean = !0, console.log("GET All Depth Success "), n.processData(t), console.log("Initial state set!"), console.log("Replaying " + n.backedMsg.length + " backed msgs!");
          var o = !1;
          if (n.backedMsg && n.backedMsg.length > 0) {
            var i = n.backedMsg[0];
            n._isLoss(i) && (o = !0, setTimeout(function () {
              r()
            }, 500))
          }
          o || n.backedMsg.forEach(function (e, t) {
            n.processData(e), console.log("Replayed: " + e.eventType)
          }), n.buildingState = !1, n.stateChange(!(0 == n.buildingState && 0 == n.wsbuildingState))
        })
      };
      r()
    }, n.converter = function (e) {
      var t = {};
      return t.eventType = e.e, t.eventTime = e.E, t.symbol = e.s, t.kline = e.k, "depthUpdate" == t.eventType ? (t.event = e.e, t.eventTime = e.E, t.symbol = e.s, t.updateId = e.u, t.fupdateId = e.U, t.bids = e.b, t.asks = e.a) : (console.log("Error! Bad data received:"), console.log(t)), t
    }, n._isDuplicate = function (e) {
      if ("depthUpdate" == e.eventType) {
        if (e.updateId > n.lastDepthId) return n.lastDepthId = e.updateId, !1
      } else console.log("Error! Bad data received:"), console.log(e);
      return !0
    }, n._isLoss = function (e) {
      if ("depthUpdate" == e.eventType) {
        if (e.fupdateId <= n.lastDepthId + 1) return !1
      } else console.log("Error! Has Loss data");
      return !0
    }, n._clear = function (e) {
      e.onopen = null, e.onmessage = null, e.onerror = null, e.onclose = null
    }, n
  }
}]), app.factory("userStreamer", function () {
  return function () {
    var e = {};
    return e.isRunning = !1, e.restart = !1, e.lastConntectTime = new Date, e.startStream = function (t, n) {
      e.isRunning = !0, e.url = t, e.lastTradeIds = {}, e.backedMsg = [], e.buildingState = !0, e.restart = !0, e.callback = n, e.ws ? e.ws.close() : e.ws = e._makeStream()
    }, e.processData = function (t) {
      e._isDuplicate(t) || e.callback(t)
    }, e.stopStream = function () {
      e.restart = !1, e.ws && e.ws.close(), e.lastTradeIds = {}, e.backedMsg = [], e.buildingState = !0, e.isRunning = !1
    }, e._rolloverStream = function () {
      console.log("Rolling over stream!"), e.backedMsg = [], e.buildingState = !0, e.ws = e._makeStream()
    }, e._makeStream = function () {
      var t = new WebSocket(e.url);
      return t.onopen = function () {
        console.log("Socket has been opened for: market data!"), e.lastConntectTime = new Date, e._buildState()
      }, t.onclose = function (t) {
        console.log("Socket has been CLOSED for: market data!"), e.restart ? (new Date).getTime() - e.lastConntectTime.getTime() < 12e4 ? setTimeout(function () {
          console.log("streamer reconntect delay=========="), e._rolloverStream()
        }, 1e3) : (console.log("streamer reconntect now=========="), e._rolloverStream()) : (delete e.ws, console.log("Socket done!"))
      }, t.onmessage = function (t) {
        var n = JSON.parse(t.data);
        n = e.converter(n), console.log("User data WS recv, eventType: " + n.eventType + ", eventTime: " + n.eventTime), e.buildingState ? (e.backedMsg.push(n), console.log("Adding msg to backlog: " + n.eventType)) : e.processData(n)
      }, t
    }, e._buildState = function () {
      e.buildingState = !1
    }, e.converter = function (e) {
      var t = {};
      return t.eventType = e.e, "outboundAccountInfo" == t.eventType ? (t.eventTime = e.E, t.makerCommission = e.m, t.takerCommission = e.t, t.buyerCommission = e.b, t.sellerCommission = e.s, t.isActive = e.a, t.balances = [], e.B && e.B.forEach(function (e) {
        t.balances.push({asset: e.a, free: e.f, locked: e.l})
      }), t.leverage = e.l, t.positions = [], e.p && e.p.forEach(function (e) {
        t.positions.push({
          symbol: e.s,
          usedQty: e.u,
          usedMargin: e.U,
          avgQuotePrice: e.q,
          pendingQtyBuy: e.b,
          pendingMarginBuy: e.B,
          pendingQtySell: e.a,
          pendingMarginSell: e.A,
          lockedProfitLoss: e.l
        })
      })) : "executionReport" == t.eventType && (t.event = e.e, t.eventTime = e.E, t.symbol = e.s, t.clOrdId = e.c, t.side = e.S, t.orderType = e.o, t.timeInForce = e.f, t.qty = e.q, t.price = e.p, t.stopPrice = e.P, t.maxFloor = e.F, t.originalClOrdId = e.C, t.executionType = e.x, t.orderStatus = e.X, t.orderRejectReason = e.r, t.orderId = e.i, t.lastQty = e.l, t.cummulativeQty = e.z, t.lastPrice = e.L, t.commission = e.n, t.commissionAsset = e.N, t.time = e.T, t.executionId = e.I, t.tradeId = e.t, t.workingIndicator = e.w, t.isMaker = e.m, t.commissionAsset = e.N), t
    }, e._isDuplicate = function (e) {
      return !1
    }, e
  }
}), app.factory("klineStreamer", ["$http", "$interval", "$rootScope", function (e, t, n) {
  return function () {
    var e = {};
    return e.isRunning = !1, e.restart = !1, e.lastTradeId = -1, e.root_url = location.host.match("localhost") || location.host.match("192.168.0") ? "/exchange/public" : "/api/v1", e.startStream = function (t, n, r, o) {
      e.isRunning = !0, e.url = n, e.interval = r, e.lastDepthId = -2, e.lastKlineId = -1, e.backedMsg = [], e.restart = !0, e.lastConntectTime = new Date, e.symbol = t, e.lowerCaseSymbol = t.toLowerCase(), e.callback = o, e.ws && e.stopStream(), e.ws = e._makeStream()
    }, e.processData = function (t) {
      e._isDuplicate(t) || e.callback(t)
    }, e.stopStream = function () {
      e.restart = !1, e.ws && (e._clear(e.ws), e.ws.HandClose = !0, e.ws.close()), e.lastDepthId = -1, e.lastKlineId = -1, e.backedMsg = [], e.isRunning = !1
    }, e._rolloverStream = function () {
      console.log("Rolling over stream!"), e.backedMsg = [], e.ws = e._makeStream()
    }, e._makeStream = function () {
      var t = new WebSocket(e.url + "/" + e.lowerCaseSymbol + "@kline_" + e.interval + ".b10");
      return n.websocketStatus = "connecting", t.onopen = function () {
        n.websocketStatus = "connected", console.log("Socket has been opened for: " + e.symbol + "!"), e.lastConntectTime = new Date
      }, t.onclose = function (r) {
        console.log("Socket has been CLOSED for: " + e.symbol + "!"), t.HandClose ? (t.HandClose = !0, console.log("Socket done!")) : (n.websocketStatus = "reconnecting", (new Date).getTime() - e.lastConntectTime.getTime() < 12e4 ? setTimeout(function () {
          console.log("streamer reconntect delay=========="), e._rolloverStream()
        }, 1e3) : (console.log("streamer reconntect now=========="), e._rolloverStream()))
      }, t.onerror = function () {
        n.websocketStatus = "error"
      }, t.onmessage = function (t) {
        var n = JSON.parse(t.data);
        n = e.converter(n), console.log("WS recv: " + n), e.processData(n)
      }, t
    }, e.converter = function (e) {
      var t = {};
      return t.eventType = e.e, t.eventTime = e.E, t.symbol = e.s, t.kline = {}, t.kline.time = e.k.t, t.kline.closeTime = e.k.T, t.kline.symbol = e.k.s, t.kline.interval = e.k.i, t.kline.firstId = e.k.f, t.kline.lastId = e.k.L, t.kline.open = e.k.o, t.kline.close = e.k.c, t.kline.high = e.k.h, t.kline.low = e.k.l, t.kline.volume = e.k.v, t.kline.quoteVolume = e.k.q, t.kline.count = e.k.n, t.kline.closed = e.k.x, t
    }, e._isDuplicate = function (e) {
      return "kline" != e.eventType && (console.log("Error! Bad data received:"), console.log(e), !0)
    }, e._clear = function (e) {
      e.onopen = null, e.onmessage = null, e.onerror = null, e.onclose = null
    }, e
  }
}]);
var tradeSymbol = "";
app.factory("tradeStreamer", ["$http", "$interval", function (e, t) {
  return function () {
    var t = {};
    return t.isRunning = !1, t.restart = !1, t.lastAggTradeId = -2, t.root_url = location.host.match("localhost") || location.host.match("192.168.0") ? "/exchange/public" : "/api/v1", t.startStream = function (e, n, r) {
      t.isRunning = !0, t.lastDepthId = -2, t.lastKlineId = -1, t.backedMsg = [], t.buildingState = !0, t.restart = !0, t.lastConntectTime, t.symbol = e, tradeSymbol = e, t.lowerCaseSymbol = e.toLowerCase(), t.url = n, t.callback = r, t.ws && t.stopStream(), t.ws = t._makeStream()
    }, t.processData = function (e) {
      t._isDuplicate(e) || t.callback(e)
    }, t.stopStream = function () {
      t.restart = !1, t.ws && (t._clear(t.ws), t.ws.HandClose = !0, t.ws.close()), t.lastKlineId = -1, t.backedMsg = [], t.buildingState = !0, t.isRunning = !1
    }, t._rolloverStream = function () {
      console.log("Rolling over stream!"), t.backedMsg = [], t.buildingState = !0, t.ws = t._makeStream()
    }, t._makeStream = function () {
      var n = new WebSocket(t.url + "/" + t.lowerCaseSymbol + "@aggTrade.b10");
      return n.onopen = function () {
        console.log("Socket has been opened for: " + t.symbol + "!"), t.lastConntectTime = new Date, t._buildState(), clearInterval(void 0)
      }, n.onclose = function (e) {
        console.log("Socket has been CLOSED for: " + t.symbol + "!"), n.HandClose ? (n.HandClose = !1, console.log("Socket done!")) : (new Date).getTime() - t.lastConntectTime.getTime() < 12e4 ? setTimeout(function () {
          console.log("streamer reconntect delay=========="), t._rolloverStream()
        }, 1e3) : (console.log("streamer reconntect now=========="), t._rolloverStream())
      }, n.onmessage = function (e) {
        var n = JSON.parse(e.data);
        console.log("WS recv: " + n), n = t.converter(n), t.buildingState ? (t.backedMsg.push(n), console.log("Adding msg to backlog: " + n)) : t.processData(n)
      }, n.onerror = function (n) {
        var r = {};
        r.method = "get", r.url = t.root_url + "/aggTrades", r.params = {
          symbol: t.symbol,
          limit: 40
        }, e(r).success(function (e) {
          for (var n = 0; n < e.length; n++) {
            var r = {};
            r.eventType = "trade", r.aggTradeId = e[n].a, r.firstTradeId = e[n].f, r.lastTradeId = e[n].l, r.price = e[n].p, r.qty = e[n].q, r.symbol = e[n].s, r.time = e[n].T, r.isBuyerMaker = e[n].m, r.buyerOrderId = -1, r.sellerOrderId = -1, t.processData(r)
          }
        }), setTimeout(function () {
          console.log("streamer reconntect now=========="), t.stopStream(), t._rolloverStream()
        }, 6e4)
      }, n
    }, t._buildState = function () {
      var n = {};
      n.method = "get", n.url = t.root_url + "/aggTrades", n.params = {
        symbol: t.symbol,
        limit: 40
      }, e(n).success(function (e) {
        if (console.log("Successfully Get Trades Second Time"), tradeSymbol == t.symbol) {
          t.lastAggTradeId = -1;
          var n = {};
          n.clean = !0, 0 == e.length && (n.eventType = "trade", n.aggTradeId = 1, t.processData(n));
          for (var r = 0; r < e.length; r++) n.eventType = "trade", n.aggTradeId = e[r].a, n.firstTradeId = e[r].f, n.lastTradeId = e[r].l, n.price = e[r].p, n.qty = e[r].q, n.symbol = e[r].s, n.time = e[r].T, n.isBuyerMaker = e[r].m, n.buyerOrderId = -1, n.sellerOrderId = -1, t.processData(n), n = {};
          console.log("Initial state set!"), console.log("Replaying " + t.backedMsg.length + " backed msgs!");
          for (var o = t.backedMsg.shift(); o;) t.processData(o), console.log("Replayed: " + o.eventType), o = t.backedMsg.shift();
          if (t.buildingState = !1, console.log("Replaying DONE! " + t.backedMsg.length + " backed msgs remain."), 0 != t.backedMsg.length) for (console.log("OMG!! ME SMASH!!! GIVE ME A REAL THREADING MODEL PLEASE!!"), o = t.backedMsg.shift(); o;) t.processData(o), o = t.backedMsg.shift()
        }
      })
    }, t._getLastTrade = function (n) {
      var r = {};
      r.method = "get", r.url = t.root_url + "/aggTrades", r.params = {
        symbol: t.symbol,
        limit: 40
      }, e(r).success(function (e) {
        n(e)
      })
    }, t.converterGets = function (e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var r = {};
        r.eventType = "trade", r.aggTradeId = e[n].a, r.firstTradeId = e[n].f, r.lastTradeId = e[n].l, r.price = e[n].p, r.qty = e[n].q, r.symbol = e[n].s, r.time = e[n].T, r.isBuyerMaker = e[n].m, r.buyerOrderId = -1, r.sellerOrderId = -1, t.push(r)
      }
      return t
    }, t.converter = function (e) {
      var t = {};
      return t.eventType = "aggTrade" == e.e && "trade", t.eventTime = e.E, t.symbol = e.s, t.kline = e.k, "trade" == t.eventType ? (t.aggTradeId = e.a, t.event = e.e, t.eventTime = e.E, t.firstTradeId = e.f, t.lastTradeId = e.l, t.price = e.p, t.qty = e.q, t.symbol = e.s, t.time = e.T, t.isBuyerMaker = e.m) : (console.log("Error! Bad data received:"), console.log(t)), t
    }, t._isDuplicate = function (e) {
      if ("trade" == e.eventType) {
        if (e.aggTradeId > t.lastAggTradeId) return t.lastAggTradeId = e.aggTradeId, !1
      } else console.log("Error! Bad data received:"), console.log(e);
      return !0
    }, t._clear = function (e) {
      e.onopen = null, e.onmessage = null, e.onerror = null, e.onclose = null
    }, t
  }
}]), app.factory("mktdataStreamer", ["$http", "$interval", "$rootScope", function (e, t, n) {
  return function () {
    var e = {};
    return e.isRunning = !1, e.restart = !1, e.startStream = function (t, n) {
      e.isRunning = !0, e.url = t, e.lastTradeIds = {}, e.backedMsg = [], e.buildingState = !0, e.restart = !0, e.callback = n, e.ws ? e.ws.close() : e.ws = e._makeStream()
    }, e.processData = function (t) {
      e.callback(t)
    }, e.stopStream = function () {
      e.restart = !1, e.ws && e.ws.close(), e.lastTradeIds = {}, e.backedMsg = [], e.buildingState = !0, e.isRunning = !1
    }, e._rolloverStream = function () {
      console.log("Rolling over stream!"), e.backedMsg = [], e.buildingState = !0, e.ws = e._makeStream()
    }, e._makeStream = function () {
      var t = new WebSocket(e.url + "/!miniTicker@arr@3000ms");
      return n.websocketStatus = "connecting", t.onopen = function () {
        n.websocketStatus = "connected", console.log("Socket has been opened for: market data!"), e.lastConntectTime = new Date, e._buildState()
      }, t.onclose = function (t) {
        console.log("Socket has been CLOSED for: market data!"), e.restart ? (n.websocketStatus = "reconnecting", (new Date).getTime() - e.lastConntectTime.getTime() < 12e4 ? setTimeout(function () {
          console.log("streamer reconntect delay=========="), e._rolloverStream()
        }, 1e3) : (console.log("streamer reconntect now=========="), e._rolloverStream())) : (delete e.ws, console.log("Socket done!"))
      }, t.onerror = function () {
        n.websocketStatus = "error"
      }, t.onmessage = function (t) {
        var n = JSON.parse(t.data);
        n = e.converter(n), console.log("Market data WS recv, symbol: " + n.symbol + ", lastUpdateTime: " + n.lastUpdateTime), e.buildingState ? (e.backedMsg.push(n), console.log("Adding msg to backlog: " + n.eventType)) : e.processData(n)
      }, t
    }, e._buildState = function () {
      e.buildingState = !1
    }, e.converter = function (e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var r = {}, o = e[n];
        r.eventType = "trade", r.symbol = o.s, r.price = o.c, r.open = o.o, r.high = o.h, r.low = o.l, r.volume = o.v, r.quoteVolume = o.q, t.push(r)
      }
      return t
    }, e._isDuplicate = function (t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        if ("trade" == r.eventType && (void 0 == e.lastTradeIds[r.symbol] || e.lastTradeIds[r.symbol] < r.tradeId)) return e.lastTradeIds[r.symbol] = r.tradeId, !1
      }
      return !0
    }, e
  }
}]), app.factory("myInterceptor", ["$q", "$cookies", function (e, t) {
  return {
    request: function (e) {
      return e.headers = {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        lang: localStorage.lang,
        clientType: "web"
      }, t.CSRFToken && (e.headers.CSRFToken = $.md5(t.CSRFToken)), e
    }, response: function (e) {
      return e
    }, requestError: function (t) {
      return e.reject(t)
    }, responseError: function (t) {
      if (console.log(t), 401 == t.status) {
        var n = new Date;
        n.setTime(n.getTime() - 1e3), t = JSON.stringify(t), localStorage.setItem("temp2", t), localStorage.getItem("temp2"), localStorage.getItem("temp2"), localStorage.a = document.cookie, document.cookie = "logined=;path=/;expires=" + n.toGMTString(), location.href = "/login.html?callback=" + encodeURIComponent(location.pathname) + encodeURIComponent(location.search)
      }
      return e.reject(t)
    }
  }
}]), app.factory("user", ["$http", "$cookies", "$translate", function (e, t, n) {
  var r = {};
  return r.logout = function () {
    e({method: "post", url: "/user/loginOut.html"}).success(function (e) {
      if (e.success) {
        var t = new Date;
        t.setTime(t.getTime() - 1e3), document.cookie = "logined=;path=/;expires=" + t.toGMTString(), window.location.reload()
      }
    })
  }, r.login = function () {
    setTimeout(function () {
      angular.element("#userId").focus()
    }), layer.open({
      type: 1,
      title: null,
      shade: [.85, "#000"],
      shadeClose: !0,
      shift: 1,
      closeBtn: 1,
      area: "auto",
      content: $("#login-box"),
      end: function () {
      }
    })
  }, r.gauth = function () {
    angular.element(".wrap").addClass("blur"), angular.element("#imageStream1").click(), layer.open({
      type: 1,
      title: n.instant("gauth"),
      shadeClose: !0,
      shift: 1,
      area: ["300px", "200px"],
      content: $("#gauth-box"),
      end: function () {
        angular.element(".wrap").removeClass("blur")
      }
    })
  }, r
}]), app.factory("getRequest", function () {
  var e = location.search, t = new Object;
  if (-1 != e.indexOf("?")) for (var n = e.substr(1).split("&"), r = 0; r < n.length; r++) t[n[r].split("=")[0]] = unescape(n[r].split("=")[1]);
  return t
}), app.factory("layout", function () {
  var e = {};
  return e.set = function () {
    var e = angular.element(".header").outerHeight(!0), t = angular.element(".tradelist-main-bottom").outerHeight(!0),
      n = angular.element(window).height();
    angular.element(".tradelist-main-top").css({
      height: n - e - t,
      "max-height": n - e - t
    }), angular.element(".list-table").css({height: n - e - t - 79, "max-height": n - e - t - 79})
  }, e
}), app.factory("intro", ["$rootScope", function (e) {
  var t = {};
  return t.init = function () {
    e.ShouldAutoStart = !1, e.IntroOptions = {
      steps: [{
        element: "#step1",
        intro: '<img src="/exchange/resources/img/guide/step1.png"/>',
        position: "right"
      }, {
        element: "#step2",
        intro: '<img src="/exchange/resources/img/guide/step2.png"/>',
        position: "bottom"
      }, {
        element: "#step3",
        intro: '<img src="/exchange/resources/img/guide/step3.png"/>',
        position: "bottom"
      }, {
        element: "#step4",
        intro: '<img src="/exchange/resources/img/guide/step4.png"/>',
        position: "right"
      }, {
        element: "#step5",
        intro: '<img src="/exchange/resources/img/guide/step5.png"/>',
        position: "left"
      }, {
        element: "#step6",
        intro: '<img src="/exchange/resources/img/guide/step6.png"/><span class="start-btn" onclick="document.getElementsByClassName(\'introjs-overlay\')[0].click()">开始交易</span>',
        position: "left"
      }],
      showStepNumbers: !1,
      exitOnOverlayClick: !0,
      exitOnEsc: !0,
      keyboardNavigation: !0,
      showBullets: !1,
      overlayOpacity: 1,
      nextLabel: "<strong>下一步</strong>",
      prevLabel: '<span style="color:green">上一步</span>',
      skipLabel: '<i class="font font-close"></i>',
      doneLabel: '<i class="font font-close"></i>'
    }, e.showHelp = function () {
      angular.element("body").append('<div class="overlayer"></div>'), angular.element("#guide-box").show()
    }, e.hideHelp = function () {
      angular.element(".overlayer").remove(), angular.element("#guide-box").hide()
    }, e.startGuide = function () {
      e.hideHelp()
    }
  }, t
}]), app.factory("scroll", function () {
  var e, t = {};
  return t.scrollTop = function (t) {
    var n = $(t), r = n.find("li"), o = "-" + r.height() + "px";
    r.length > 1 && (e = setInterval(function () {
      n.animate({top: o}, 500, function () {
        n.find("li:first").appendTo(n), n.css("top", 0)
      })
    }, 5e3))
  }, t.stop = function () {
    clearInterval(e)
  }, t
}), app.factory("pageLoading", function () {
  var e = {};
  return e.loading = function () {
    var t = ['<div class="spinner">', '<div class="rect2"></div>', '<div class="rect3"></div>', '<div class="rect4"></div>', '<div class="rect5"></div>', "</div>"].join("");
    e.loading = layer.open({type: 1, title: null, closeBtn: !1, shade: .9, area: ["100%", "100%"], content: t})
  }, e.close = function () {
    layer.close(e.loading)
  }, e
}), app.factory("pageLoading1", function () {
  var e = {};
  return e.loading = function () {
    if (!$("#pageLoading").html()) {
      var e = ['<div id="pageLoading">', '<div class="spinner">', '<div class="rect2"></div>', '<div class="rect3"></div>', '<div class="rect4"></div>', '<div class="rect5"></div>', "</div>", "</div>"].join("");
      $("body").append(e)
    }
  }, e.close = function () {
    $("#pageLoading").hide()
  }, e
}), app.factory("divLoading", function () {
  var e = {}, t = {};
  return e.loading = function (e) {
    if ($(e + " #divLoading").html()) $(e + " #divLoading").show(); else {
      var n = ['<div id="divLoading">', '<div class="spinner">', '<div class="rect2"></div>', '<div class="rect3"></div>', '<div class="rect4"></div>', '<div class="rect5"></div>', "</div>", "</div>"].join("");
      $(e).append(n)
    }
    t[e] || (t[e] = 0), t[e] += 1
  }, e.close = function (e, n) {
    n ? (t[e] -= 1, t[e] <= 0 && $(e + " #divLoading").hide()) : $(e + " #divLoading").hide()
  }, e
}), app.factory("T", ["$translate", function (e) {
  return {
    T: function (t) {
      return t ? e.instant(t) : t
    }
  }
}]), app.factory("form", function () {
  var e, t = {};
  return t.validate = function (t, n, r, o) {
    return $(t).Validform({
      btnSubmit: n,
      showAllError: !1,
      datatype: {
        amount: /^(([1-9]\d{0,9})|0)(\.\d{1,8})?$/,
        pwd: /^(?=.*\d)(?=.*[A-Z])[\da-zA-Z~!@#$%^&*-_——\\\/]{8,}$/,
        mobile: /^[1]\d{10}$/
      },
      postonce: !1,
      ajaxPost: !0,
      tiptype: function (t, n, r) {
        if (n.obj.is("form")) e = layer.load("正在提交...", 3); else {
          var o = n.obj.siblings(".Validform_checktip");
          r(o, n.type), o.text(t)
        }
      },
      beforeSubmit: function (e) {
        $(this.btnSubmit).attr("disabled", !0), o && o()
      },
      callback: function (t) {
        layer.close(e), $(this.btnSubmit).attr("disabled", !1), r(t)
      }
    })
  }, t
}), app.factory("mobile", ["$http", "$translate", function (e, t) {
  var n = {}, r = null;
  return n.flag = !0, n.showError = function (e, t) {
    angular.element("#" + e).focus().siblings(".Validform_checktip").text(t).addClass("Validform_wrong")
  }, n.picVerifyCode = function (e, t) {
    angular.element("#" + e).val("").focus(), angular.element("#" + t).click()
  }, n.clearCountDown = function (e, o) {
    n.flag = !0, angular.element("#" + o).text(t.instant("Regain")).removeClass("btn-disabled"), clearInterval(r)
  }, n.countDown = function (e, o) {
    angular.element("#" + e).val(""), angular.element("#" + o).addClass("btn-disabled");
    var i = 60;
    r = setInterval(function () {
      angular.element("#" + o).text(t.instant("Regain") + "(" + i + ")"), -1 == --i && n.clearCountDown(e, o)
    }, 1e3)
  }, n.sendVerifyCode = function (t, r, o, i) {
    if (n.flag) {
      if (n.flag = !1, n.countDown(r, o), i) a = $.param({mobile: i}); else var a;
      e.post(t, a).then(function (e) {
        if (!e.data.success) return layer.msg(e.data.msg, {
          icon: 2,
          shift: 1,
          time: 1500
        }), n.picVerifyCode("registerValiCode", "imageStream1"), n.flag = !0, n.clearCountDown(r, o), !1
      }, function (e) {
        layer.msg(e.data.msg, {icon: 2, shift: 1, time: 1500}), n.clearCountDown(r, o)
      })
    }
  }, n
}]), app.factory("urlSearch", function () {
  var e = {};
  return e.getUrlParam = function (e) {
    for (var t = location.search.substr(1).split("&"), n = 0; n < t.length; n++) {
      var r = t[n].split("=");
      if (e == r[0]) return r[1]
    }
  }, e
}), app.factory("SPA", function () {
  var e = {};
  return e.setUrl = function (t) {
    history.replaceState(null, "", t), e.UrlChange && e.UrlChange()
  }, e
}), app.filter("filterFloor", function () {
  return function (e) {
    return Math.floor(e)
  }
}).filter("marketPrice", function () {
  return function (e) {
    return -1 == e ? "市价" : e
  }
}).filter("filterol", function () {
  return function (e) {
    return null != e ? Number(e).toFixed(8) : "--"
  }
}).filter("filterProfitRatio", function () {
  return function (e) {
    return e > 9999 ? "+9999" : e
  }
}).filter("phone", function () {
  return function (e) {
    var t;
    return e && (t = e.substr(0, 3) + "****" + e.substr(e.length - 4)), t
  }
}).filter("filtermn", function () {
  return function (e) {
    return e >= 0 ? "+" + Number(e).toFixed(2) : Number(e).toFixed(2)
  }
}).filter("filtermnq", function () {
  return function (e) {
    var t;
    return 0 == e ? t = Number(e).toFixed(2) + "%" : e > 0 || e < 0 ? t = Number(e).toFixed(2) + "%" : "--" == e && (t = "--"), t
  }
}).filter("filtermns", function () {
  return function (e) {
    var t;
    return 0 == e ? t = Number(e).toFixed(2) : e > 0 || e < 0 ? t = Number(e).toFixed(2) : "--" == e && (t = "--"), t
  }
}).filter("get8Date", function () {
  return function (e) {
    var t = new Date(e), n = 6e4 * t.getTimezoneOffset(), r = t.getTime() + n;
    return new Date(r + 288e5)
  }
}).filter("T", ["$translate", function (e) {
  return function (t) {
    if (t) return e.instant(t)
  }
}]).filter("floor", function () {
  return function (e) {
    var t = Array.prototype.slice.call(arguments);
    return (Math.floor(Number(e) * Math.pow(10, Number(t[1]))) / Math.pow(10, Number(t[1]))).toFixed(t[1])
  }
}).filter("ifnull", function () {
  return function (e) {
    return e && 0 != Number(e) ? e : "--"
  }
}).filter("symbol", function () {
  return function (e) {
    return e = e || 0, Number(e) >= 0 ? "+" + e : e
  }
}).filter("sameGray", ["$sce", function (e) {
  return function (t, n, r) {
    var o;
    return t = t && (t + "").replace(",", ""), o = n && t.substring(0, t.length - 2) == Number(n).toFixed(r).substring(0, t.length - 2) ? '<span class="gray">' + t.substring(0, t.length - 2) + "</span>" + t.substr(t.length - 2, 2) : Number(t).toFixed(r), o = "<span>" + o + "</span>", e.trustAsHtml(o)
  }
}]).filter("getDigit", function () {
  return function (e) {
    return (1 / Math.pow(10, e)).toFixed(e)
  }
}), Date.prototype.get8Date = function () {
  var e = 6e4 * this.getTimezoneOffset(), t = this.getTime() + e;
  return new Date(t + 288e5)
};
