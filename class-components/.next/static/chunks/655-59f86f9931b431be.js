(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [655],
  {
    3162: function (e, t, i) {
      var n, r, s;
      (r = []),
        void 0 !==
          (s =
            'function' ==
            typeof (n = function () {
              'use strict';
              function t(e, t, i) {
                var n = new XMLHttpRequest();
                n.open('GET', e),
                  (n.responseType = 'blob'),
                  (n.onload = function () {
                    o(n.response, t, i);
                  }),
                  (n.onerror = function () {
                    console.error('could not download file');
                  }),
                  n.send();
              }
              function n(e) {
                var t = new XMLHttpRequest();
                t.open('HEAD', e, !1);
                try {
                  t.send();
                } catch (e) {}
                return 200 <= t.status && 299 >= t.status;
              }
              function r(e) {
                try {
                  e.dispatchEvent(new MouseEvent('click'));
                } catch (i) {
                  var t = document.createEvent('MouseEvents');
                  t.initMouseEvent(
                    'click',
                    !0,
                    !0,
                    window,
                    0,
                    0,
                    0,
                    80,
                    20,
                    !1,
                    !1,
                    !1,
                    !1,
                    0,
                    null
                  ),
                    e.dispatchEvent(t);
                }
              }
              var s =
                  'object' == typeof window && window.window === window
                    ? window
                    : 'object' == typeof self && self.self === self
                      ? self
                      : 'object' == typeof i.g && i.g.global === i.g
                        ? i.g
                        : void 0,
                a =
                  s.navigator &&
                  /Macintosh/.test(navigator.userAgent) &&
                  /AppleWebKit/.test(navigator.userAgent) &&
                  !/Safari/.test(navigator.userAgent),
                o =
                  s.saveAs ||
                  ('object' != typeof window || window !== s
                    ? function () {}
                    : 'download' in HTMLAnchorElement.prototype && !a
                      ? function (e, i, a) {
                          var o = s.URL || s.webkitURL,
                            u = document.createElement('a');
                          (i = i || e.name || 'download'),
                            (u.download = i),
                            (u.rel = 'noopener'),
                            'string' == typeof e
                              ? ((u.href = e),
                                u.origin === location.origin
                                  ? r(u)
                                  : n(u.href)
                                    ? t(e, i, a)
                                    : r(u, (u.target = '_blank')))
                              : ((u.href = o.createObjectURL(e)),
                                setTimeout(function () {
                                  o.revokeObjectURL(u.href);
                                }, 4e4),
                                setTimeout(function () {
                                  r(u);
                                }, 0));
                        }
                      : 'msSaveOrOpenBlob' in navigator
                        ? function (e, i, s) {
                            if (((i = i || e.name || 'download'), 'string' != typeof e)) {
                              var a;
                              navigator.msSaveOrOpenBlob(
                                (void 0 === (a = s)
                                  ? (a = { autoBom: !1 })
                                  : 'object' != typeof a &&
                                    (console.warn(
                                      'Deprecated: Expected third argument to be a object'
                                    ),
                                    (a = { autoBom: !a })),
                                a.autoBom &&
                                /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                                  e.type
                                )
                                  ? new Blob(['\uFEFF', e], { type: e.type })
                                  : e),
                                i
                              );
                            } else if (n(e)) t(e, i, s);
                            else {
                              var o = document.createElement('a');
                              (o.href = e),
                                (o.target = '_blank'),
                                setTimeout(function () {
                                  r(o);
                                });
                            }
                          }
                        : function (e, i, n, r) {
                            if (
                              ((r = r || open('', '_blank')) &&
                                (r.document.title = r.document.body.innerText = 'downloading...'),
                              'string' == typeof e)
                            )
                              return t(e, i, n);
                            var o = 'application/octet-stream' === e.type,
                              u = /constructor/i.test(s.HTMLElement) || s.safari,
                              h = /CriOS\/[\d]+/.test(navigator.userAgent);
                            if ((h || (o && u) || a) && 'undefined' != typeof FileReader) {
                              var f = new FileReader();
                              (f.onloadend = function () {
                                var e = f.result;
                                (e = h ? e : e.replace(/^data:[^;]*;/, 'data:attachment/file;')),
                                  r ? (r.location.href = e) : (location = e),
                                  (r = null);
                              }),
                                f.readAsDataURL(e);
                            } else {
                              var l = s.URL || s.webkitURL,
                                d = l.createObjectURL(e);
                              r ? (r.location = d) : (location.href = d),
                                (r = null),
                                setTimeout(function () {
                                  l.revokeObjectURL(d);
                                }, 4e4);
                            }
                          });
              (s.saveAs = o.saveAs = o), (e.exports = o);
            })
              ? n.apply(t, r)
              : n) && (e.exports = s);
    },
    1163: function (e, t, i) {
      e.exports = i(9090);
    },
    7460: function (e, t) {
      var i, n, r;
      (n = []),
        void 0 !==
          (r =
            'function' ==
            typeof (i = function e() {
              'use strict';
              var t =
                  'undefined' != typeof self
                    ? self
                    : 'undefined' != typeof window
                      ? window
                      : void 0 !== t
                        ? t
                        : {},
                i = !t.document && !!t.postMessage,
                n = t.IS_PAPA_WORKER || !1,
                r = {},
                s = 0,
                a = {
                  parse: function (i, n) {
                    var o,
                      u = (n = n || {}).dynamicTyping || !1;
                    if (
                      (b(u) && ((n.dynamicTypingFunction = u), (u = {})),
                      (n.dynamicTyping = u),
                      (n.transform = !!b(n.transform) && n.transform),
                      n.worker && a.WORKERS_SUPPORTED)
                    ) {
                      var c = (function () {
                        if (!a.WORKERS_SUPPORTED) return !1;
                        var i,
                          n,
                          o =
                            ((i = t.URL || t.webkitURL || null),
                            (n = e.toString()),
                            a.BLOB_URL ||
                              (a.BLOB_URL = i.createObjectURL(
                                new Blob(
                                  [
                                    "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                                    '(',
                                    n,
                                    ')();',
                                  ],
                                  { type: 'text/javascript' }
                                )
                              ))),
                          u = new t.Worker(o);
                        return (u.onmessage = m), (u.id = s++), (r[u.id] = u);
                      })();
                      return (
                        (c.userStep = n.step),
                        (c.userChunk = n.chunk),
                        (c.userComplete = n.complete),
                        (c.userError = n.error),
                        (n.step = b(n.step)),
                        (n.chunk = b(n.chunk)),
                        (n.complete = b(n.complete)),
                        (n.error = b(n.error)),
                        delete n.worker,
                        void c.postMessage({ input: i, config: n, workerId: c.id })
                      );
                    }
                    var p = null;
                    return (
                      a.NODE_STREAM_INPUT,
                      'string' == typeof i
                        ? ((i = 65279 === (o = i).charCodeAt(0) ? o.slice(1) : o),
                          (p = n.download ? new h(n) : new l(n)))
                        : !0 === i.readable && b(i.read) && b(i.on)
                          ? (p = new d(n))
                          : ((t.File && i instanceof File) || i instanceof Object) &&
                            (p = new f(n)),
                      p.stream(i)
                    );
                  },
                  unparse: function (e, t) {
                    var i = !1,
                      n = !0,
                      r = ',',
                      s = '\r\n',
                      o = '"',
                      u = o + o,
                      h = !1,
                      f = null,
                      l = !1;
                    !(function () {
                      if ('object' == typeof t) {
                        if (
                          ('string' != typeof t.delimiter ||
                            a.BAD_DELIMITERS.filter(function (e) {
                              return -1 !== t.delimiter.indexOf(e);
                            }).length ||
                            (r = t.delimiter),
                          ('boolean' == typeof t.quotes ||
                            'function' == typeof t.quotes ||
                            Array.isArray(t.quotes)) &&
                            (i = t.quotes),
                          ('boolean' != typeof t.skipEmptyLines &&
                            'string' != typeof t.skipEmptyLines) ||
                            (h = t.skipEmptyLines),
                          'string' == typeof t.newline && (s = t.newline),
                          'string' == typeof t.quoteChar && (o = t.quoteChar),
                          'boolean' == typeof t.header && (n = t.header),
                          Array.isArray(t.columns))
                        ) {
                          if (0 === t.columns.length) throw Error('Option columns is empty');
                          f = t.columns;
                        }
                        void 0 !== t.escapeChar && (u = t.escapeChar + o),
                          ('boolean' == typeof t.escapeFormulae ||
                            t.escapeFormulae instanceof RegExp) &&
                            (l =
                              t.escapeFormulae instanceof RegExp
                                ? t.escapeFormulae
                                : /^[=+\-@\t\r].*$/);
                      }
                    })();
                    var d = RegExp(p(o), 'g');
                    if (('string' == typeof e && (e = JSON.parse(e)), Array.isArray(e))) {
                      if (!e.length || Array.isArray(e[0])) return c(null, e, h);
                      if ('object' == typeof e[0]) return c(f || Object.keys(e[0]), e, h);
                    } else if ('object' == typeof e)
                      return (
                        'string' == typeof e.data && (e.data = JSON.parse(e.data)),
                        Array.isArray(e.data) &&
                          (e.fields || (e.fields = (e.meta && e.meta.fields) || f),
                          e.fields ||
                            (e.fields = Array.isArray(e.data[0])
                              ? e.fields
                              : 'object' == typeof e.data[0]
                                ? Object.keys(e.data[0])
                                : []),
                          Array.isArray(e.data[0]) ||
                            'object' == typeof e.data[0] ||
                            (e.data = [e.data])),
                        c(e.fields || [], e.data || [], h)
                      );
                    throw Error('Unable to serialize unrecognized input');
                    function c(e, t, i) {
                      var a = '';
                      'string' == typeof e && (e = JSON.parse(e)),
                        'string' == typeof t && (t = JSON.parse(t));
                      var o = Array.isArray(e) && 0 < e.length,
                        u = !Array.isArray(t[0]);
                      if (o && n) {
                        for (var h = 0; h < e.length; h++) 0 < h && (a += r), (a += g(e[h], h));
                        0 < t.length && (a += s);
                      }
                      for (var f = 0; f < t.length; f++) {
                        var l = o ? e.length : t[f].length,
                          d = !1,
                          c = o ? 0 === Object.keys(t[f]).length : 0 === t[f].length;
                        if (
                          (i &&
                            !o &&
                            (d =
                              'greedy' === i
                                ? '' === t[f].join('').trim()
                                : 1 === t[f].length && 0 === t[f][0].length),
                          'greedy' === i && o)
                        ) {
                          for (var p = [], m = 0; m < l; m++) {
                            var _ = u ? e[m] : m;
                            p.push(t[f][_]);
                          }
                          d = '' === p.join('').trim();
                        }
                        if (!d) {
                          for (var v = 0; v < l; v++) {
                            0 < v && !c && (a += r);
                            var y = o && u ? e[v] : v;
                            a += g(t[f][y], v);
                          }
                          f < t.length - 1 && (!i || (0 < l && !c)) && (a += s);
                        }
                      }
                      return a;
                    }
                    function g(e, t) {
                      if (null == e) return '';
                      if (e.constructor === Date) return JSON.stringify(e).slice(1, 25);
                      var n = !1;
                      l && 'string' == typeof e && l.test(e) && ((e = "'" + e), (n = !0));
                      var s = e.toString().replace(d, u);
                      return (n =
                        n ||
                        !0 === i ||
                        ('function' == typeof i && i(e, t)) ||
                        (Array.isArray(i) && i[t]) ||
                        (function (e, t) {
                          for (var i = 0; i < t.length; i++) if (-1 < e.indexOf(t[i])) return !0;
                          return !1;
                        })(s, a.BAD_DELIMITERS) ||
                        -1 < s.indexOf(r) ||
                        ' ' === s.charAt(0) ||
                        ' ' === s.charAt(s.length - 1))
                        ? o + s + o
                        : s;
                    }
                  },
                };
              if (
                ((a.RECORD_SEP = '\x1e'),
                (a.UNIT_SEP = '\x1f'),
                (a.BYTE_ORDER_MARK = '\uFEFF'),
                (a.BAD_DELIMITERS = ['\r', '\n', '"', a.BYTE_ORDER_MARK]),
                (a.WORKERS_SUPPORTED = !i && !!t.Worker),
                (a.NODE_STREAM_INPUT = 1),
                (a.LocalChunkSize = 10485760),
                (a.RemoteChunkSize = 5242880),
                (a.DefaultDelimiter = ','),
                (a.Parser = g),
                (a.ParserHandle = c),
                (a.NetworkStreamer = h),
                (a.FileStreamer = f),
                (a.StringStreamer = l),
                (a.ReadableStreamStreamer = d),
                t.jQuery)
              ) {
                var o = t.jQuery;
                o.fn.parse = function (e) {
                  var i = e.config || {},
                    n = [];
                  return (
                    this.each(function (e) {
                      if (
                        !(
                          'INPUT' === o(this).prop('tagName').toUpperCase() &&
                          'file' === o(this).attr('type').toLowerCase() &&
                          t.FileReader
                        ) ||
                        !this.files ||
                        0 === this.files.length
                      )
                        return !0;
                      for (var r = 0; r < this.files.length; r++)
                        n.push({
                          file: this.files[r],
                          inputElem: this,
                          instanceConfig: o.extend({}, i),
                        });
                    }),
                    r(),
                    this
                  );
                  function r() {
                    if (0 !== n.length) {
                      var t,
                        i,
                        r,
                        u,
                        h = n[0];
                      if (b(e.before)) {
                        var f = e.before(h.file, h.inputElem);
                        if ('object' == typeof f) {
                          if ('abort' === f.action)
                            return (
                              (t = 'AbortError'),
                              (i = h.file),
                              (r = h.inputElem),
                              (u = f.reason),
                              void (b(e.error) && e.error({ name: t }, i, r, u))
                            );
                          if ('skip' === f.action) return void s();
                          'object' == typeof f.config &&
                            (h.instanceConfig = o.extend(h.instanceConfig, f.config));
                        } else if ('skip' === f) return void s();
                      }
                      var l = h.instanceConfig.complete;
                      (h.instanceConfig.complete = function (e) {
                        b(l) && l(e, h.file, h.inputElem), s();
                      }),
                        a.parse(h.file, h.instanceConfig);
                    } else b(e.complete) && e.complete();
                  }
                  function s() {
                    n.splice(0, 1), r();
                  }
                };
              }
              function u(e) {
                (this._handle = null),
                  (this._finished = !1),
                  (this._completed = !1),
                  (this._halted = !1),
                  (this._input = null),
                  (this._baseIndex = 0),
                  (this._partialLine = ''),
                  (this._rowCount = 0),
                  (this._start = 0),
                  (this._nextChunk = null),
                  (this.isFirstChunk = !0),
                  (this._completeResults = { data: [], errors: [], meta: {} }),
                  function (e) {
                    var t = y(e);
                    (t.chunkSize = parseInt(t.chunkSize)),
                      e.step || e.chunk || (t.chunkSize = null),
                      (this._handle = new c(t)),
                      ((this._handle.streamer = this)._config = t);
                  }.call(this, e),
                  (this.parseChunk = function (e, i) {
                    if (this.isFirstChunk && b(this._config.beforeFirstChunk)) {
                      var r = this._config.beforeFirstChunk(e);
                      void 0 !== r && (e = r);
                    }
                    (this.isFirstChunk = !1), (this._halted = !1);
                    var s = this._partialLine + e;
                    this._partialLine = '';
                    var o = this._handle.parse(s, this._baseIndex, !this._finished);
                    if (!this._handle.paused() && !this._handle.aborted()) {
                      var u = o.meta.cursor;
                      this._finished ||
                        ((this._partialLine = s.substring(u - this._baseIndex)),
                        (this._baseIndex = u)),
                        o && o.data && (this._rowCount += o.data.length);
                      var h =
                        this._finished ||
                        (this._config.preview && this._rowCount >= this._config.preview);
                      if (n) t.postMessage({ results: o, workerId: a.WORKER_ID, finished: h });
                      else if (b(this._config.chunk) && !i) {
                        if (
                          (this._config.chunk(o, this._handle),
                          this._handle.paused() || this._handle.aborted())
                        )
                          return void (this._halted = !0);
                        (o = void 0), (this._completeResults = void 0);
                      }
                      return (
                        this._config.step ||
                          this._config.chunk ||
                          ((this._completeResults.data = this._completeResults.data.concat(o.data)),
                          (this._completeResults.errors = this._completeResults.errors.concat(
                            o.errors
                          )),
                          (this._completeResults.meta = o.meta)),
                        this._completed ||
                          !h ||
                          !b(this._config.complete) ||
                          (o && o.meta.aborted) ||
                          (this._config.complete(this._completeResults, this._input),
                          (this._completed = !0)),
                        h || (o && o.meta.paused) || this._nextChunk(),
                        o
                      );
                    }
                    this._halted = !0;
                  }),
                  (this._sendError = function (e) {
                    b(this._config.error)
                      ? this._config.error(e)
                      : n &&
                        this._config.error &&
                        t.postMessage({ workerId: a.WORKER_ID, error: e, finished: !1 });
                  });
              }
              function h(e) {
                var t;
                (e = e || {}).chunkSize || (e.chunkSize = a.RemoteChunkSize),
                  u.call(this, e),
                  (this._nextChunk = i
                    ? function () {
                        this._readChunk(), this._chunkLoaded();
                      }
                    : function () {
                        this._readChunk();
                      }),
                  (this.stream = function (e) {
                    (this._input = e), this._nextChunk();
                  }),
                  (this._readChunk = function () {
                    if (this._finished) this._chunkLoaded();
                    else {
                      if (
                        ((t = new XMLHttpRequest()),
                        this._config.withCredentials &&
                          (t.withCredentials = this._config.withCredentials),
                        i ||
                          ((t.onload = k(this._chunkLoaded, this)),
                          (t.onerror = k(this._chunkError, this))),
                        t.open(this._config.downloadRequestBody ? 'POST' : 'GET', this._input, !i),
                        this._config.downloadRequestHeaders)
                      ) {
                        var e = this._config.downloadRequestHeaders;
                        for (var n in e) t.setRequestHeader(n, e[n]);
                      }
                      if (this._config.chunkSize) {
                        var r = this._start + this._config.chunkSize - 1;
                        t.setRequestHeader('Range', 'bytes=' + this._start + '-' + r);
                      }
                      try {
                        t.send(this._config.downloadRequestBody);
                      } catch (e) {
                        this._chunkError(e.message);
                      }
                      i && 0 === t.status && this._chunkError();
                    }
                  }),
                  (this._chunkLoaded = function () {
                    var e;
                    4 === t.readyState &&
                      (t.status < 200 || 400 <= t.status
                        ? this._chunkError()
                        : ((this._start += this._config.chunkSize
                            ? this._config.chunkSize
                            : t.responseText.length),
                          (this._finished =
                            !this._config.chunkSize ||
                            this._start >=
                              (null === (e = t.getResponseHeader('Content-Range'))
                                ? -1
                                : parseInt(e.substring(e.lastIndexOf('/') + 1)))),
                          this.parseChunk(t.responseText)));
                  }),
                  (this._chunkError = function (e) {
                    var i = t.statusText || e;
                    this._sendError(Error(i));
                  });
              }
              function f(e) {
                (e = e || {}).chunkSize || (e.chunkSize = a.LocalChunkSize), u.call(this, e);
                var t,
                  i,
                  n = 'undefined' != typeof FileReader;
                (this.stream = function (e) {
                  (this._input = e),
                    (i = e.slice || e.webkitSlice || e.mozSlice),
                    n
                      ? (((t = new FileReader()).onload = k(this._chunkLoaded, this)),
                        (t.onerror = k(this._chunkError, this)))
                      : (t = new FileReaderSync()),
                    this._nextChunk();
                }),
                  (this._nextChunk = function () {
                    this._finished ||
                      (this._config.preview && !(this._rowCount < this._config.preview)) ||
                      this._readChunk();
                  }),
                  (this._readChunk = function () {
                    var e = this._input;
                    if (this._config.chunkSize) {
                      var r = Math.min(this._start + this._config.chunkSize, this._input.size);
                      e = i.call(e, this._start, r);
                    }
                    var s = t.readAsText(e, this._config.encoding);
                    n || this._chunkLoaded({ target: { result: s } });
                  }),
                  (this._chunkLoaded = function (e) {
                    (this._start += this._config.chunkSize),
                      (this._finished = !this._config.chunkSize || this._start >= this._input.size),
                      this.parseChunk(e.target.result);
                  }),
                  (this._chunkError = function () {
                    this._sendError(t.error);
                  });
              }
              function l(e) {
                var t;
                u.call(this, (e = e || {})),
                  (this.stream = function (e) {
                    return (t = e), this._nextChunk();
                  }),
                  (this._nextChunk = function () {
                    if (!this._finished) {
                      var e,
                        i = this._config.chunkSize;
                      return (
                        i ? ((e = t.substring(0, i)), (t = t.substring(i))) : ((e = t), (t = '')),
                        (this._finished = !t),
                        this.parseChunk(e)
                      );
                    }
                  });
              }
              function d(e) {
                u.call(this, (e = e || {}));
                var t = [],
                  i = !0,
                  n = !1;
                (this.pause = function () {
                  u.prototype.pause.apply(this, arguments), this._input.pause();
                }),
                  (this.resume = function () {
                    u.prototype.resume.apply(this, arguments), this._input.resume();
                  }),
                  (this.stream = function (e) {
                    (this._input = e),
                      this._input.on('data', this._streamData),
                      this._input.on('end', this._streamEnd),
                      this._input.on('error', this._streamError);
                  }),
                  (this._checkIsFinished = function () {
                    n && 1 === t.length && (this._finished = !0);
                  }),
                  (this._nextChunk = function () {
                    this._checkIsFinished(), t.length ? this.parseChunk(t.shift()) : (i = !0);
                  }),
                  (this._streamData = k(function (e) {
                    try {
                      t.push('string' == typeof e ? e : e.toString(this._config.encoding)),
                        i && ((i = !1), this._checkIsFinished(), this.parseChunk(t.shift()));
                    } catch (e) {
                      this._streamError(e);
                    }
                  }, this)),
                  (this._streamError = k(function (e) {
                    this._streamCleanUp(), this._sendError(e);
                  }, this)),
                  (this._streamEnd = k(function () {
                    this._streamCleanUp(), (n = !0), this._streamData('');
                  }, this)),
                  (this._streamCleanUp = k(function () {
                    this._input.removeListener('data', this._streamData),
                      this._input.removeListener('end', this._streamEnd),
                      this._input.removeListener('error', this._streamError);
                  }, this));
              }
              function c(e) {
                var t,
                  i,
                  n,
                  r = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
                  s =
                    /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
                  o = this,
                  u = 0,
                  h = 0,
                  f = !1,
                  l = !1,
                  d = [],
                  c = { data: [], errors: [], meta: {} };
                if (b(e.step)) {
                  var m = e.step;
                  e.step = function (t) {
                    if (((c = t), k())) v();
                    else {
                      if ((v(), 0 === c.data.length)) return;
                      (u += t.data.length),
                        e.preview && u > e.preview ? i.abort() : ((c.data = c.data[0]), m(c, o));
                    }
                  };
                }
                function _(t) {
                  return 'greedy' === e.skipEmptyLines
                    ? '' === t.join('').trim()
                    : 1 === t.length && 0 === t[0].length;
                }
                function v() {
                  return (
                    c &&
                      n &&
                      (w(
                        'Delimiter',
                        'UndetectableDelimiter',
                        "Unable to auto-detect delimiting character; defaulted to '" +
                          a.DefaultDelimiter +
                          "'"
                      ),
                      (n = !1)),
                    e.skipEmptyLines &&
                      (c.data = c.data.filter(function (e) {
                        return !_(e);
                      })),
                    k() &&
                      (function () {
                        if (c) {
                          if (Array.isArray(c.data[0])) {
                            for (var t = 0; k() && t < c.data.length; t++) c.data[t].forEach(i);
                            c.data.splice(0, 1);
                          } else c.data.forEach(i);
                        }
                        function i(t, i) {
                          b(e.transformHeader) && (t = e.transformHeader(t, i)), d.push(t);
                        }
                      })(),
                    (function () {
                      if (!c || (!e.header && !e.dynamicTyping && !e.transform)) return c;
                      function t(t, i) {
                        var n,
                          a = e.header ? {} : [];
                        for (n = 0; n < t.length; n++) {
                          var o,
                            u,
                            f = n,
                            l = t[n];
                          e.header && (f = n >= d.length ? '__parsed_extra' : d[n]),
                            e.transform && (l = e.transform(l, f)),
                            (o = f),
                            (u = l),
                            e.dynamicTypingFunction &&
                              void 0 === e.dynamicTyping[o] &&
                              (e.dynamicTyping[o] = e.dynamicTypingFunction(o)),
                            (l =
                              !0 === (e.dynamicTyping[o] || e.dynamicTyping)
                                ? 'true' === u ||
                                  'TRUE' === u ||
                                  ('false' !== u &&
                                    'FALSE' !== u &&
                                    (!(function (e) {
                                      if (r.test(e)) {
                                        var t = parseFloat(e);
                                        if (-9007199254740992 < t && t < 9007199254740992)
                                          return !0;
                                      }
                                      return !1;
                                    })(u)
                                      ? s.test(u)
                                        ? new Date(u)
                                        : '' === u
                                          ? null
                                          : u
                                      : parseFloat(u)))
                                : u),
                            '__parsed_extra' === f
                              ? ((a[f] = a[f] || []), a[f].push(l))
                              : (a[f] = l);
                        }
                        return (
                          e.header &&
                            (n > d.length
                              ? w(
                                  'FieldMismatch',
                                  'TooManyFields',
                                  'Too many fields: expected ' +
                                    d.length +
                                    ' fields but parsed ' +
                                    n,
                                  h + i
                                )
                              : n < d.length &&
                                w(
                                  'FieldMismatch',
                                  'TooFewFields',
                                  'Too few fields: expected ' +
                                    d.length +
                                    ' fields but parsed ' +
                                    n,
                                  h + i
                                )),
                          a
                        );
                      }
                      var i = 1;
                      return (
                        !c.data.length || Array.isArray(c.data[0])
                          ? ((c.data = c.data.map(t)), (i = c.data.length))
                          : (c.data = t(c.data, 0)),
                        e.header && c.meta && (c.meta.fields = d),
                        (h += i),
                        c
                      );
                    })()
                  );
                }
                function k() {
                  return e.header && 0 === d.length;
                }
                function w(e, t, i, n) {
                  var r = { type: e, code: t, message: i };
                  void 0 !== n && (r.row = n), c.errors.push(r);
                }
                (this.parse = function (r, s, o) {
                  var u = e.quoteChar || '"';
                  if (
                    (e.newline ||
                      (e.newline = (function (e, t) {
                        e = e.substring(0, 1048576);
                        var i = RegExp(p(t) + '([^]*?)' + p(t), 'gm'),
                          n = (e = e.replace(i, '')).split('\r'),
                          r = e.split('\n'),
                          s = 1 < r.length && r[0].length < n[0].length;
                        if (1 === n.length || s) return '\n';
                        for (var a = 0, o = 0; o < n.length; o++) '\n' === n[o][0] && a++;
                        return a >= n.length / 2 ? '\r\n' : '\r';
                      })(r, u)),
                    (n = !1),
                    e.delimiter)
                  )
                    b(e.delimiter) &&
                      ((e.delimiter = e.delimiter(r)), (c.meta.delimiter = e.delimiter));
                  else {
                    var h = (function (t, i, n, r, s) {
                      var o, u, h, f;
                      s = s || [',', '	', '|', ';', a.RECORD_SEP, a.UNIT_SEP];
                      for (var l = 0; l < s.length; l++) {
                        var d = s[l],
                          c = 0,
                          p = 0,
                          m = 0;
                        h = void 0;
                        for (
                          var v = new g({
                              comments: r,
                              delimiter: d,
                              newline: i,
                              preview: 10,
                            }).parse(t),
                            y = 0;
                          y < v.data.length;
                          y++
                        )
                          if (n && _(v.data[y])) m++;
                          else {
                            var k = v.data[y].length;
                            (p += k),
                              void 0 !== h ? 0 < k && ((c += Math.abs(k - h)), (h = k)) : (h = k);
                          }
                        0 < v.data.length && (p /= v.data.length - m),
                          (void 0 === u || c <= u) &&
                            (void 0 === f || f < p) &&
                            1.99 < p &&
                            ((u = c), (o = d), (f = p));
                      }
                      return { successful: !!(e.delimiter = o), bestDelimiter: o };
                    })(r, e.newline, e.skipEmptyLines, e.comments, e.delimitersToGuess);
                    h.successful
                      ? (e.delimiter = h.bestDelimiter)
                      : ((n = !0), (e.delimiter = a.DefaultDelimiter)),
                      (c.meta.delimiter = e.delimiter);
                  }
                  var l = y(e);
                  return (
                    e.preview && e.header && l.preview++,
                    (t = r),
                    (c = (i = new g(l)).parse(t, s, o)),
                    v(),
                    f ? { meta: { paused: !0 } } : c || { meta: { paused: !1 } }
                  );
                }),
                  (this.paused = function () {
                    return f;
                  }),
                  (this.pause = function () {
                    (f = !0), i.abort(), (t = b(e.chunk) ? '' : t.substring(i.getCharIndex()));
                  }),
                  (this.resume = function () {
                    o.streamer._halted
                      ? ((f = !1), o.streamer.parseChunk(t, !0))
                      : setTimeout(o.resume, 3);
                  }),
                  (this.aborted = function () {
                    return l;
                  }),
                  (this.abort = function () {
                    (l = !0),
                      i.abort(),
                      (c.meta.aborted = !0),
                      b(e.complete) && e.complete(c),
                      (t = '');
                  });
              }
              function p(e) {
                return e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
              }
              function g(e) {
                var t,
                  i = (e = e || {}).delimiter,
                  n = e.newline,
                  r = e.comments,
                  s = e.step,
                  o = e.preview,
                  u = e.fastMode,
                  h = (t = void 0 === e.quoteChar || null === e.quoteChar ? '"' : e.quoteChar);
                if (
                  (void 0 !== e.escapeChar && (h = e.escapeChar),
                  ('string' != typeof i || -1 < a.BAD_DELIMITERS.indexOf(i)) && (i = ','),
                  r === i)
                )
                  throw Error('Comment character same as delimiter');
                !0 === r
                  ? (r = '#')
                  : ('string' != typeof r || -1 < a.BAD_DELIMITERS.indexOf(r)) && (r = !1),
                  '\n' !== n && '\r' !== n && '\r\n' !== n && (n = '\n');
                var f = 0,
                  l = !1;
                (this.parse = function (a, d, c) {
                  if ('string' != typeof a) throw Error('Input must be a string');
                  var g = a.length,
                    m = i.length,
                    _ = n.length,
                    v = r.length,
                    y = b(s),
                    k = [],
                    w = [],
                    E = [],
                    R = (f = 0);
                  if (!a) return Q();
                  if (e.header && !d) {
                    var C = a.split(n)[0].split(i),
                      O = [],
                      S = {},
                      x = !1;
                    for (var A in C) {
                      var T = C[A];
                      b(e.transformHeader) && (T = e.transformHeader(T, A));
                      var L = T,
                        I = S[T] || 0;
                      for (0 < I && ((x = !0), (L = T + '_' + I)), S[T] = I + 1; O.includes(L); )
                        L = L + '_' + I;
                      O.push(L);
                    }
                    if (x) {
                      var D = a.split(n);
                      (D[0] = O.join(i)), (a = D.join(n));
                    }
                  }
                  if (u || (!1 !== u && -1 === a.indexOf(t))) {
                    for (var F = a.split(n), j = 0; j < F.length; j++) {
                      if (((E = F[j]), (f += E.length), j !== F.length - 1)) f += n.length;
                      else if (c) break;
                      if (!r || E.substring(0, v) !== r) {
                        if (y) {
                          if (((k = []), N(E.split(i)), J(), l)) return Q();
                        } else N(E.split(i));
                        if (o && o <= j) return (k = k.slice(0, o)), Q(!0);
                      }
                    }
                    return Q();
                  }
                  for (
                    var M = a.indexOf(i, f),
                      U = a.indexOf(n, f),
                      z = RegExp(p(h) + p(t), 'g'),
                      q = a.indexOf(t, f);
                    ;

                  )
                    if (a[f] !== t) {
                      if (r && 0 === E.length && a.substring(f, f + v) === r) {
                        if (-1 === U) return Q();
                        (f = U + _), (U = a.indexOf(n, f)), (M = a.indexOf(i, f));
                      } else if (-1 !== M && (M < U || -1 === U))
                        E.push(a.substring(f, M)), (f = M + m), (M = a.indexOf(i, f));
                      else {
                        if (-1 === U) break;
                        if ((E.push(a.substring(f, U)), W(U + _), y && (J(), l))) return Q();
                        if (o && k.length >= o) return Q(!0);
                      }
                    } else
                      for (q = f, f++; ; ) {
                        if (-1 === (q = a.indexOf(t, q + 1)))
                          return (
                            c ||
                              w.push({
                                type: 'Quotes',
                                code: 'MissingQuotes',
                                message: 'Quoted field unterminated',
                                row: k.length,
                                index: f,
                              }),
                            K()
                          );
                        if (q === g - 1) return K(a.substring(f, q).replace(z, t));
                        if (t !== h || a[q + 1] !== h) {
                          if (t === h || 0 === q || a[q - 1] !== h) {
                            -1 !== M && M < q + 1 && (M = a.indexOf(i, q + 1)),
                              -1 !== U && U < q + 1 && (U = a.indexOf(n, q + 1));
                            var B = H(-1 === U ? M : Math.min(M, U));
                            if (a.substr(q + 1 + B, m) === i) {
                              E.push(a.substring(f, q).replace(z, t)),
                                a[(f = q + 1 + B + m)] !== t && (q = a.indexOf(t, f)),
                                (M = a.indexOf(i, f)),
                                (U = a.indexOf(n, f));
                              break;
                            }
                            var P = H(U);
                            if (a.substring(q + 1 + P, q + 1 + P + _) === n) {
                              if (
                                (E.push(a.substring(f, q).replace(z, t)),
                                W(q + 1 + P + _),
                                (M = a.indexOf(i, f)),
                                (q = a.indexOf(t, f)),
                                y && (J(), l))
                              )
                                return Q();
                              if (o && k.length >= o) return Q(!0);
                              break;
                            }
                            w.push({
                              type: 'Quotes',
                              code: 'InvalidQuotes',
                              message: 'Trailing quote on quoted field is malformed',
                              row: k.length,
                              index: f,
                            }),
                              q++;
                          }
                        } else q++;
                      }
                  return K();
                  function N(e) {
                    k.push(e), (R = f);
                  }
                  function H(e) {
                    var t = 0;
                    if (-1 !== e) {
                      var i = a.substring(q + 1, e);
                      i && '' === i.trim() && (t = i.length);
                    }
                    return t;
                  }
                  function K(e) {
                    return (
                      c ||
                        (void 0 === e && (e = a.substring(f)), E.push(e), (f = g), N(E), y && J()),
                      Q()
                    );
                  }
                  function W(e) {
                    (f = e), N(E), (E = []), (U = a.indexOf(n, f));
                  }
                  function Q(e) {
                    return {
                      data: k,
                      errors: w,
                      meta: {
                        delimiter: i,
                        linebreak: n,
                        aborted: l,
                        truncated: !!e,
                        cursor: R + (d || 0),
                      },
                    };
                  }
                  function J() {
                    s(Q()), (k = []), (w = []);
                  }
                }),
                  (this.abort = function () {
                    l = !0;
                  }),
                  (this.getCharIndex = function () {
                    return f;
                  });
              }
              function m(e) {
                var t = e.data,
                  i = r[t.workerId],
                  n = !1;
                if (t.error) i.userError(t.error, t.file);
                else if (t.results && t.results.data) {
                  var s = {
                    abort: function () {
                      (n = !0), _(t.workerId, { data: [], errors: [], meta: { aborted: !0 } });
                    },
                    pause: v,
                    resume: v,
                  };
                  if (b(i.userStep)) {
                    for (
                      var a = 0;
                      a < t.results.data.length &&
                      (i.userStep(
                        { data: t.results.data[a], errors: t.results.errors, meta: t.results.meta },
                        s
                      ),
                      !n);
                      a++
                    );
                    delete t.results;
                  } else b(i.userChunk) && (i.userChunk(t.results, s, t.file), delete t.results);
                }
                t.finished && !n && _(t.workerId, t.results);
              }
              function _(e, t) {
                var i = r[e];
                b(i.userComplete) && i.userComplete(t), i.terminate(), delete r[e];
              }
              function v() {
                throw Error('Not implemented.');
              }
              function y(e) {
                if ('object' != typeof e || null === e) return e;
                var t = Array.isArray(e) ? [] : {};
                for (var i in e) t[i] = y(e[i]);
                return t;
              }
              function k(e, t) {
                return function () {
                  e.apply(t, arguments);
                };
              }
              function b(e) {
                return 'function' == typeof e;
              }
              return (
                n &&
                  (t.onmessage = function (e) {
                    var i = e.data;
                    if (
                      (void 0 === a.WORKER_ID && i && (a.WORKER_ID = i.workerId),
                      'string' == typeof i.input)
                    )
                      t.postMessage({
                        workerId: a.WORKER_ID,
                        results: a.parse(i.input, i.config),
                        finished: !0,
                      });
                    else if ((t.File && i.input instanceof File) || i.input instanceof Object) {
                      var n = a.parse(i.input, i.config);
                      n && t.postMessage({ workerId: a.WORKER_ID, results: n, finished: !0 });
                    }
                  }),
                ((h.prototype = Object.create(u.prototype)).constructor = h),
                ((f.prototype = Object.create(u.prototype)).constructor = f),
                ((l.prototype = Object.create(l.prototype)).constructor = l),
                ((d.prototype = Object.create(u.prototype)).constructor = d),
                a
              );
            })
              ? i.apply(t, n)
              : i) && (e.exports = r);
    },
  },
]);
