Datafeeds = {}, Datafeeds.UDFCompatibleDatafeed = function () {
  "use strict";
  this._configuration = void 0, this._symbolSearch = null, this._symbolsStorage = null, this._enableLogging = !1, this._initializationFinished = !1, this._callbacks = {}, this._binary_websockets = new BinaryWebsockets, this._symbolRequestResponseHandler = new SymbolReqRespHandler(this._binary_websockets), this._historicalOHLCReqResHandler = new HistoricalOHLCReqRespHandler(this._binary_websockets), this._ohlcStreamingReqResHandler = new OHLCStreamingReqResHandler(this._binary_websockets, this._symbolRequestResponseHandler), this._supported_resolutions = [], this._supported_resolutions.push("1"), this._supported_resolutions.push("2"), this._supported_resolutions.push("3"), this._supported_resolutions.push("5"), this._supported_resolutions.push("10"), this._supported_resolutions.push("15"), this._supported_resolutions.push("30"), this._supported_resolutions.push("60"), this._supported_resolutions.push("120"), this._supported_resolutions.push("240"), this._supported_resolutions.push("480"), this._supported_resolutions.push("D"), this.globalNotifier = GlobalNotifier.getInstance(), this._initialize()
}, Datafeeds.UDFCompatibleDatafeed.prototype.defaultConfiguration = function () {
  "use strict";
  return {
    supports_search: !0,
    supports_group_request: !1,
    supported_resolutions: this._supported_resolutions,
    supports_marks: !0,
    exchanges: [],
    symbolsTypes: [{name: "Forex", value: "Forex"}, {name: "Indices", value: "Indices"}, {
      name: "OTC Stocks",
      value: "OTC Stocks"
    }, {name: "Commodities", value: "Commodities"}, {name: "Volatility Indices", value: "Volatility Indices"}]
  }
}, Datafeeds.UDFCompatibleDatafeed.prototype.on = function (a, b) {
  "use strict";
  return this._callbacks.hasOwnProperty(a) || (this._callbacks[a] = []), this._callbacks[a].push(b), this
}, Datafeeds.UDFCompatibleDatafeed.prototype._fireEvent = function (a, b) {
  "use strict";
  if (this._callbacks.hasOwnProperty(a)) {
    for (var c = this._callbacks[a], d = 0; d < c.length; ++d) c[d](b);
    this._callbacks[a] = []
  }
}, Datafeeds.UDFCompatibleDatafeed.prototype.onInitialized = function () {
  "use strict";
  this._initializationFinished = !0, this._fireEvent("initialized")
}, Datafeeds.UDFCompatibleDatafeed.prototype._logMessage = function (a) {
  "use strict";
  if (this._enableLogging) {
    new Date
  }
}, Datafeeds.UDFCompatibleDatafeed.prototype._initialize = function () {
  "use strict";
  var a = this;
  this._binary_websockets.init().then(function (b) {
    b && a._symbolRequestResponseHandler.init().then(function (b, c) {
      var d = a.defaultConfiguration();
      d.symbolsTypes = [];
      var e = b;
      e.forEach(function (a) {
        d.symbolsTypes.push({name: a, value: a})
      }), a._setupWithConfiguration(d)
    })
  })
}, Datafeeds.UDFCompatibleDatafeed.prototype.onReady = function (a) {
  "use strict";
  var b = this;
  setTimeout(function () {
    b._configuration ? a(b._configuration) : b.on("configuration_ready", function () {
      a(b._configuration)
    })
  }, 0)
}, Datafeeds.UDFCompatibleDatafeed.prototype._setupWithConfiguration = function (a) {
  "use strict";
  this._configuration = a, a.exchanges || (a.exchanges = []);
  var b = a.supported_resolutions || a.supportedResolutions;
  a.supported_resolutions = b;
  var c = a.symbols_types || a.symbolsTypes;
  if (a.symbols_types = c, !a.supports_search && !a.supports_group_request) throw"Unsupported datafeed configuration. Must either support search, or support group request";
  a.supports_search || (this._symbolSearch = new Datafeeds.SymbolSearchComponent(this)), a.supports_group_request ? this._symbolsStorage = new Datafeeds.SymbolsStorage(this) : this.onInitialized(), this._fireEvent("configuration_ready"), this._logMessage("Initialized with " + JSON.stringify(a))
}, Datafeeds.UDFCompatibleDatafeed.prototype._symbolMetadata = function (a) {
  "use strict";
  var b = {}, c = function () {
    return "Indices" === a
  }, d = function () {
    return "OTC Stocks" === a
  }, e = function () {
    return "Commodities" === a
  }, f = function () {
    return "Volatility Indices" === a
  }, g = function () {
    return "Forex" === a
  };
  if (a) {
    var h = 1e4, i = "2200-2159:123456";
    g() && (h = 1e5), (d() || c() || e()) && (h = 100), f() && (h = 1e4, i = "24x7"), b = {
      pricescale: h,
      minmov: 1,
      session: i
    }
  }
  return b
}, Datafeeds.UDFCompatibleDatafeed.prototype.searchSymbolsByName = function (a, b, c, d) {
  "use strict";
  if (!this._configuration) return void d([]);
  if (this._configuration.supports_search) {
    var e = this, f = function (a) {
      var b = [];
      return $.each(e._symbolRequestResponseHandler._markets, function (d, f) {
        f.name === c && $.each(f.submarkets, function (d, g) {
          $.each(g.symbols, function (d, g) {
            f.name.indexOf(c) !== -1 && (g.symbol.indexOf(a) === -1 && g.symbol_display.toUpperCase().indexOf(a) === -1 || b.push({
              symbol: g.symbol,
              description: g.symbol_display,
              type: f.name,
              exchange: "",
              full_name: g.symbol,
              supported_resolutions: e._supported_resolutions
            }))
          })
        })
      }), b
    };
    d(f(a))
  }
}, Datafeeds.UDFCompatibleDatafeed.prototype.searchSymbolsByNameOnly = function (a) {
  "use strict";
  if (!this._configuration) return [];
  if (this._configuration.supports_search) {
    var b = this, c = [];
    return $.each(b._symbolRequestResponseHandler._markets, function (d, e) {
      $.each(e.submarkets, function (d, f) {
        $.each(f.symbols, function (d, f) {
          f.symbol.indexOf(a) === -1 && f.symbol_display.toUpperCase().indexOf(a) === -1 || c.push({
            symbol: f.symbol,
            description: f.symbol_display,
            type: e.name,
            exchange: "",
            full_name: f.symbol,
            supported_resolutions: b._supported_resolutions
          })
        })
      })
    }), c
  }
}, Datafeeds.UDFCompatibleDatafeed.prototype.resolveSymbol = function (a, b, c) {
  "use strict";
  var d = this;
  setTimeout(function () {
    function e(a) {
      var c = a;
      d.postProcessSymbolInfo && (c = d.postProcessSymbolInfo(c)), b(c)
    }

    if (!d._initializationFinished) return void d.on("initialized", function () {
      d.resolveSymbol(a, b, c)
    });
    if (d._configuration.supports_group_request) d._initializationFinished ? d._symbolsStorage.resolveSymbol(a, e, c) : d.on("initialized", function () {
      d._symbolsStorage.resolveSymbol(a, e, c)
    }); else {
      var f = !1;
      $.each(d._symbolRequestResponseHandler._markets, function (b, c) {
        return $.each(c.submarkets, function (b, g) {
          return $.each(g.symbols, function (b, g) {
            if (g.symbol.indexOf(a) !== -1) {
              var h = d._symbolMetadata(c.name), i = h.pricescale, j = h.minmov, k = h.session;
              return e({
                name: g.symbol,
                timezone: "UTC",
                has_intraday: !0,
                has_no_volume: !0,
                ticker: g.symbol,
                description: g.symbol_display,
                type: c.name,
                minmov: j,
                pricescale: i,
                supported_resolutions: d._supported_resolutions,
                session: k
              }), f = !0, !1
            }
          }), !f
        }), !f
      }), f || c("unknown_symbol")
    }
  }, 0)
}, Datafeeds.UDFCompatibleDatafeed.prototype.getBars = function (a, b, c, d, e, f) {
  "use strict";
  this.globalNotifier.loadingNotification(), this._historicalOHLCReqResHandler.getBars(a, e, f)
}, Datafeeds.UDFCompatibleDatafeed.prototype.subscribeBars = function (a, b, c, d) {
  "use strict";
  this._ohlcStreamingReqResHandler.subscribeBars(a, c, d)
}, Datafeeds.UDFCompatibleDatafeed.prototype.unsubscribeBars = function (a) {
  "use strict";
  this._ohlcStreamingReqResHandler.unsubscribeBars(a)
}, Datafeeds.UDFCompatibleDatafeed.prototype.getMarks = function (a, b, c, d, e) {
  "use strict"
}, Datafeeds.UDFCompatibleDatafeed.prototype.calculateHistoryDepth = function (a, b, c) {
  "use strict"
}, Datafeeds.UDFCompatibleDatafeed.prototype.getQuotes = function (a, b, c) {
  "use strict"
}, Datafeeds.UDFCompatibleDatafeed.prototype.subscribeQuotes = function (a, b, c, d) {
  "use strict"
}, Datafeeds.UDFCompatibleDatafeed.prototype.unsubscribeQuotes = function (a) {
  "use strict"
}, Datafeeds.SymbolsStorage = function (a) {
  "use strict";
  this._datafeed = a, this._symbolsInfo = {}, this._symbolsList = [], this._requestFullSymbolsList()
}, Datafeeds.SymbolsStorage.prototype._requestFullSymbolsList = function () {
  "use strict";
  var a = this, b = this._datafeed;
  $.each(a._symbolRequestResponseHandler._markets, function (c, d) {
    $.each(d.submarkets, function (c, e) {
      $.each(e.symbols, function (c, e) {
        var f = b._symbolMetadata(d.symbol), g = f.pricescale, h = f.minmov, i = f.session, j = {
          name: e.symbol,
          base_name: e.symbol,
          description: e.symbol_display,
          full_name: e.symbol,
          legs: [e.symbol],
          has_intraday: !0,
          has_no_volume: !0,
          listed_exchange: [],
          exchange: [""],
          minmov: h,
          pricescale: g,
          type: d.name,
          session: i,
          ticker: e.symbol,
          timezone: "UTC",
          supported_resolutions: a._supported_resolutions,
          has_daily: !0,
          has_fractional_volume: !1,
          has_weekly_and_monthly: !0,
          has_empty_bars: !1,
          volume_precision: 0
        };
        a._symbolsInfo[e.symbol] = a._symbolsInfo[e.display_name] = j, a._symbolsList.push(e.symbol)
      })
    })
  }), this._symbolsList.sort(), this._datafeed.onInitialized()
}, Datafeeds.SymbolsStorage.prototype.resolveSymbol = function (a, b, c) {
  "use strict";
  this._symbolsInfo.hasOwnProperty(a) ? b(this._symbolsInfo[a]) : c("invalid symbol")
}, Datafeeds.SymbolSearchComponent = function (a) {
  "use strict";
  this._datafeed = a
}, Datafeeds.SymbolSearchComponent.prototype.searchSymbolsByName = function (a, b) {
  "use strict";
  if (!this._datafeed._symbolsStorage) throw"Cannot use local symbol search when no groups information is available";
  for (var c = this._datafeed._symbolsStorage, d = [], e = !a.ticker || 0 === a.ticker.length, f = 0; f < c._symbolsList.length; ++f) {
    var g = c._symbolsList[f], h = c._symbolsInfo[g];
    if (!(a.type && a.type.length > 0 && h.type !== a.type) && ((e || 0 === h.name.toUpperCase().indexOf(a.ticker)) && d.push({
        symbol: h.name,
        full_name: h.full_name,
        description: h.description,
        exchange: h.exchange,
        params: [],
        type: h.type,
        ticker: h.name,
        supported_resolutions: this._datafeed._supported_resolutions
      }), d.length >= b)) break
  }
  a.onResultReadyCallback(d)
}, BinaryWebsockets = function () {
  "use strict";
  this.unresolved_promises = [], this.callbacks = [], this.ws = null, this._commonUtils = CommonUtils.getInstance(), this.globalNotifier = GlobalNotifier.getInstance(), this.reqIdCounter = 0
}, BinaryWebsockets.prototype.init = function () {
  var a = this;
  return this.ws = new WebSocket("wss://frontend.binaryws.com/websockets/v3?l=en&app_id=2742"), this.ws.onopen = function (b) {
    (a.unresolved_promises.connectionOpenEvent || []).forEach(function (a) {
      a.resolve(!0)
    }), delete a.unresolved_promises.connectionOpenEvent
  }, this.ws.onclose = function (b) {
    setTimeout(function () {
      a.init().then(function (b) {
        b && (a.callbacks.ohlc || []).forEach(function (b) {
          if (b.requestObject) {
            var c = b.requestObject.req_id && Object.keys(b.requestObject).length > 1,
              d = !b.requestObject.req_id && Object.keys(b.requestObject).length > 0;
            (c || d) && a.ws.send(JSON.stringify(b.requestObject))
          }
        })
      })
    }, 1e3)
  }, this.ws.onerror = function (b) {
    a.globalNotifier.noConnectionNotification(), $.growl.error({message: "Connection error. Refresh page!"}), a.unresolved_promises = [], a.callbacks = []
  }, this.ws.onmessage = function (b) {
    var c = JSON.parse(b.data);
    (a.callbacks[c.msg_type] || []).forEach(function (a) {
      a._callback(c)
    });
    var d = c.req_id, e = a.unresolved_promises[d];
    e && (c.error ? (c.error.echo_req = c.echo_req, e.reject(c.error)) : e.resolve(c), delete a.unresolved_promises[d])
  }, new Promise(function (b, c) {
    a.unresolved_promises.connectionOpenEvent = a.unresolved_promises.connectionOpenEvent || [], a.unresolved_promises.connectionOpenEvent.push({
      resolve: b,
      reject: c
    })
  })
}, BinaryWebsockets.prototype.send_request = function (a) {
  a.req_id = ++this.reqIdCounter;
  var b = this, c = a.req_id && Object.keys(a).length > 1;
  return c ? new Promise(function (c, d) {
    b.unresolved_promises[a.req_id] = {resolve: c, reject: d}, b.ws.send(JSON.stringify(a))
  }) : Promise.reject({code: "EmptyRequest", message: "Empty Request", echo_req: a})
}, BinaryWebsockets.prototype.on = function (a, b) {
  (this.callbacks[a] = this.callbacks[a] || []).push(b)
}, BinaryWebsockets.prototype.request_trading_times = function () {
  "use strict";
  return this.send_request({trading_times: "" + (new Date).toISOString().slice(0, 10)})
}, BinaryWebsockets.prototype.request_stop_ohlc_streaming = function (a, b) {
  "use strict";
  var c = this;
  return this.callbacks.ohlc = this.callbacks.ohlc || [], this.callbacks.ohlc.forEach(function (a, d) {
    if (a.listenerID === b) return c.callbacks.ohlc.splice(d, 1), !1
  }), this.send_request({forget: a})
}, BinaryWebsockets.prototype.request_ohlc_streaming = function (a, b, c) {
  "use strict";
  var d = {ticks_history: a, end: "latest", count: 1, style: "candles", granularity: b, subscribe: 1};
  this.ws.send(JSON.stringify(d)), c && (c.requestObject = d, this.on("ohlc", c))
}, BinaryWebsockets.prototype.request_candles = function (a) {
  "use strict";
  var b = a.count || 5e3, c = a.granularity, d = null;
  if (a.startTime) d = moment.utc(a.startTime); else {
    d = moment.utc();
    var e = this._commonUtils.parseSuffixAndIntValue();
    d = d.subtract(b * this._commonUtils.totalSecondsInABar(e.suffix, e.intVal), "seconds")
  }
  var f = moment.utc();
  f = f.subtract(3, "years"), f = f.add(2, "days"), d.isBefore(f) && (d = f);
  var g = {ticks_history: a.symbol, end: "latest", style: "candles", start: d.unix(), count: b, granularity: c};
  return void 0 !== a.adjust_start_time && null !== a.adjust_start_time || (g.adjust_start_time = 1), this.send_request(g)
};
var CommonUtils = function () {
  function a() {
  }

  a.prototype.parseSuffixAndIntValue = function () {
    "use strict";
    var a = TradingView.actualResolution.toUpperCase().replace("D", "").replace("M", "").replace("W", ""),
      b = "" === a ? 1 : parseInt(a), c = TradingView.actualResolution.replace("" + b, "");
    switch (c) {
      case"":
        b < 60 ? c = "M" : (b /= 60, c = "H");
        break;
      case"W":
        b *= 7, c = "D";
        break;
      case"M":
        b *= 30, c = "D"
    }
    return {suffix: c, intVal: b}
  }, a.prototype.totalSecondsInABar = function (a, b) {
    "use strict";
    var c = 0;
    switch (a) {
      case"M":
        c = 60 * b;
        break;
      case"H":
        c = 60 * b * 60;
        break;
      case"D":
        c = 24 * b * 60 * 60
    }
    return c
  };
  var b = null;
  return {
    getInstance: function () {
      return null === b && (b = new a, b.constructor = null), b
    }
  }
}(), GlobalNotifier = function () {
  function a() {
    this.handleEvent = function (a) {
      var b = $(document).find("iframe").contents().find(".chart-status-picture");
      b.removeClass(b.attr("class")).addClass("chart-status-picture " + a)
    }
  }

  a.prototype.delayedNotification = function () {
    this.handleEvent("delayed-feed")
  }, a.prototype.realtimeNotification = function () {
    this.handleEvent("realtime-feed")
  }, a.prototype.loadingNotification = function () {
    this.handleEvent("loading")
  }, a.prototype.noConnectionNotification = function () {
    this.handleEvent("no-connection")
  };
  var b = null;
  return {
    getInstance: function () {
      return null === b && (b = new a, b.constructor = null), b
    }
  }
}();
HistoricalOHLCReqRespHandler = function (a) {
  this._binary_websockets = a, this._commonUtils = CommonUtils.getInstance()
}, HistoricalOHLCReqRespHandler.prototype.getBars = function (a, b, c) {
  "use strict";
  var d = this._commonUtils.parseSuffixAndIntValue(), e = d.suffix, f = d.intVal,
    g = this._commonUtils.totalSecondsInABar(e, f);
  this._binary_websockets.request_candles({symbol: a.ticker, granularity: g}).catch(function () {
    c()
  }).then(function (a) {
    if (a.candles) {
      var c = [];
      a.candles.forEach(function (a) {
        var b = 1e3 * parseInt(a.epoch), d = parseFloat(a.open), e = parseFloat(a.high), f = parseFloat(a.low),
          g = parseFloat(a.close);
        c.push({time: b, open: d, high: e, low: f, close: g})
      }), b(c)
    }
  })
}, OHLCStreamingReqResHandler = function (a, b) {
  this._binary_websockets = a, this._streamingMap = {}, this._commonUtils = CommonUtils.getInstance(), this._symbolRequestResponseHandler = b, this.globalNotifier = GlobalNotifier.getInstance()
}, OHLCStreamingReqResHandler.prototype.subscribeBars = function (a, b, c) {
  var d = this, e = this._commonUtils.parseSuffixAndIntValue(),
    f = this._commonUtils.totalSecondsInABar(e.suffix, e.intVal);
  this._streamingMap[c] = {
    symbol: a.ticker,
    resolution: TradingView.actualResolution,
    timerHandler: null,
    granularity: f,
    lastBar: null,
    timerCallback: function () {
      d.globalNotifier.delayedNotification();
      var a = this;
      d._binary_websockets.request_candles({
        symbol: a.symbol,
        granularity: a.granularity,
        startTime: a.lastBar ? a.lastBar.time : null,
        count: a.lastBar ? null : 1,
        adjust_start_time: a.lastBar ? 0 : null
      }).catch(function (a) {
      }).then(function (c) {
        c && c.candles && c.candles.forEach(function (c) {
          var d = 1e3 * parseInt(c.epoch), e = parseFloat(c.open), f = parseFloat(c.high), g = parseFloat(c.low),
            h = parseFloat(c.close), i = {time: d, open: e, high: f, low: g, close: h};
          (!a.lastBar || i.time > a.lastBar.time) && (a.lastBar = i), b(i)
        })
      })
    },
    streamingCallback: function (a) {
      d.globalNotifier.realtimeNotification();
      var e = d._streamingMap[c];
      if (e && a.ohlc.symbol === e.symbol && a.ohlc.granularity === e.granularity) {
        e.server_request_id = a.ohlc.id;
        var f = 1e3 * parseInt(a.ohlc.open_time), g = parseFloat(a.ohlc.open), h = parseFloat(a.ohlc.high),
          i = parseFloat(a.ohlc.low), j = parseFloat(a.ohlc.close);
        f && g && h && i && j && (this.lastBar = {time: f, open: g, high: h, low: i, close: j}, b(this.lastBar))
      }
    }
  };
  var g = this._symbolRequestResponseHandler.findInstrumentObjectBySymbol(a.ticker);
  if (g) if (g.delay_amount > 0) {
    var h = this._streamingMap[c];
    h.timerHandler = setInterval(function () {
      h.timerCallback.call(h)
    }, 6e4)
  } else this._binary_websockets.request_ohlc_streaming(a.ticker, f, {
    listenerID: c,
    _callback: this._streamingMap[c].streamingCallback
  })
}, OHLCStreamingReqResHandler.prototype.unsubscribeBars = function (a) {
  var b = this._streamingMap[a];
  b.timerHandler ? clearInterval(b.timerHandler) : this._binary_websockets.request_stop_ohlc_streaming(b.server_request_id, a).then(function () {
  }).catch(function () {
  }), delete this._streamingMap[a]
}, SymbolReqRespHandler = function (a) {
  this._binary_websockets = a
}, SymbolReqRespHandler.prototype.init = function () {
  "use strict";
  this._markets = null, this._symbolTypes = null;
  var a = this;
  return new Promise(function (b, c) {
    a._binary_websockets.request_trading_times().then(function (c) {
      a.process(c), b(a._symbolTypes, a._markets)
    }).catch(function (a) {
      "undefined" != typeof trackJs && trackJs.track("Unexpected response from server, [request_trading_times] Response error " + JSON.stringify(a))
    })
  })
}, SymbolReqRespHandler.prototype.process = function (a) {
  "use strict";
  this._markets = [], this._symbolTypes = [];
  for (var b = 0; b < a.trading_times.markets.length; b++) {
    var c = a.trading_times.markets[b];
    this._symbolTypes.push(c.name);
    for (var d = {name: c.name, submarkets: []}, e = 0; e < c.submarkets.length; ++e) {
      for (var f = c.submarkets[e], g = {name: f.name, symbols: []}, h = 0; h < f.symbols.length; h++) {
        var i = f.symbols[h];
        i.feed_license && "chartonly" === i.feed_license || g.symbols.push({
          symbol: i.symbol,
          symbol_display: i.name,
          feed_license: i.feed_license || "realtime",
          delay_amount: i.delay_amount || 0
        })
      }
      d.submarkets.push(g)
    }
    this._markets.push(d)
  }
}, SymbolReqRespHandler.prototype.findInstrumentObjectBySymbol = function (a) {
  var b = null, c = !0;
  return this._markets.forEach(function (d) {
    return d.submarkets.forEach(function (d) {
      return d.symbols.forEach(function (d) {
        return d.symbol === a && (b = $.extend(!0, {}, d), c = !1), c
      }), c
    }), c
  }), b
}, function (a) {
  a.fn.bindFirst = function (b, c, d) {
    var e = b.indexOf("."), f = e > 0 ? b.substring(e) : "";
    return b = e > 0 ? b.substring(0, e) : b, d = void 0 === d ? c : d, c = "function" == typeof c ? {} : c, this.each(function () {
      var e = a(this), g = this["on" + b];
      g && (e.bind(b, function (a) {
        return g(a.originalEvent)
      }), this["on" + b] = null), e.bind(b + f, c, d);
      var h = e.data("events") || a._data(e[0], "events"), i = h[b], j = i.pop();
      i.unshift(j)
    })
  }, a.isEnterKeyPressed = function (a) {
    var b = a.keyCode ? a.keyCode : a.which;
    return "13" == b
  }
}(jQuery);
