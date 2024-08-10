(() => {
  var e = {};
  (e.id = 820),
    (e.ids = [820, 888, 660]),
    (e.modules = {
      1323: (e, t) => {
        'use strict';
        Object.defineProperty(t, 'l', {
          enumerable: !0,
          get: function () {
            return function e(t, r) {
              return r in t
                ? t[r]
                : 'then' in t && 'function' == typeof t.then
                  ? t.then((t) => e(t, r))
                  : 'function' == typeof t && 'default' === r
                    ? t
                    : void 0;
            };
          },
        });
      },
      448: (e) => {
        e.exports = {
          style: {
            fontFamily: "'__Playfair_Display_SC_ac17af', '__Playfair_Display_SC_Fallback_ac17af'",
            fontStyle: 'normal',
          },
          className: '__className_ac17af',
        };
      },
      8459: (e) => {
        e.exports = { 'footer-inner': 'Footer_footer-inner__9RnnQ' };
      },
      8697: (e) => {
        e.exports = {
          'header-wrapper': 'header_header-wrapper__aEXA4',
          'theme-button': 'header_theme-button__YYIif',
          'theme-button__dark': 'header_theme-button__dark__BrXnP',
          heading: 'header_heading__rYA0t',
          'heading-dark': 'header_heading-dark__B6KP7',
        };
      },
      7002: (e) => {
        e.exports = {
          wrapper: 'layout_wrapper__K7k59',
          'wrapper-dark': 'layout_wrapper-dark__0aLGW',
        };
      },
      6968: (e, t, r) => {
        'use strict';
        r.a(e, async (e, n) => {
          try {
            r.r(t),
              r.d(t, {
                config: () => m,
                default: () => c,
                getServerSideProps: () => h,
                getStaticPaths: () => f,
                getStaticProps: () => p,
                reportWebVitals: () => y,
                routeModule: () => j,
                unstable_getServerProps: () => b,
                unstable_getServerSideProps: () => P,
                unstable_getStaticParams: () => x,
                unstable_getStaticPaths: () => _,
                unstable_getStaticProps: () => g,
              });
            var a = r(7093),
              s = r(5244),
              i = r(1323),
              l = r(1070),
              o = r(3893),
              d = r(6971),
              u = e([o]);
            o = (u.then ? (await u)() : u)[0];
            let c = (0, i.l)(d, 'default'),
              p = (0, i.l)(d, 'getStaticProps'),
              f = (0, i.l)(d, 'getStaticPaths'),
              h = (0, i.l)(d, 'getServerSideProps'),
              m = (0, i.l)(d, 'config'),
              y = (0, i.l)(d, 'reportWebVitals'),
              g = (0, i.l)(d, 'unstable_getStaticProps'),
              _ = (0, i.l)(d, 'unstable_getStaticPaths'),
              x = (0, i.l)(d, 'unstable_getStaticParams'),
              b = (0, i.l)(d, 'unstable_getServerProps'),
              P = (0, i.l)(d, 'unstable_getServerSideProps'),
              j = new a.PagesRouteModule({
                definition: {
                  kind: s.x.PAGES,
                  page: '/_error',
                  pathname: '/_error',
                  bundlePath: '',
                  filename: '',
                },
                components: { App: o.default, Document: l.default },
                userland: d,
              });
            n();
          } catch (e) {
            n(e);
          }
        });
      },
      6971: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          Object.defineProperty(t, 'default', {
            enumerable: !0,
            get: function () {
              return u;
            },
          });
        let n = r(167),
          a = r(997),
          s = n._(r(6689)),
          i = n._(r(7828)),
          l = {
            400: 'Bad Request',
            404: 'This page could not be found',
            405: 'Method Not Allowed',
            500: 'Internal Server Error',
          };
        function o(e) {
          let { res: t, err: r } = e;
          return { statusCode: t && t.statusCode ? t.statusCode : r ? r.statusCode : 404 };
        }
        let d = {
          error: {
            fontFamily:
              'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
            height: '100vh',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          },
          desc: { lineHeight: '48px' },
          h1: {
            display: 'inline-block',
            margin: '0 20px 0 0',
            paddingRight: 23,
            fontSize: 24,
            fontWeight: 500,
            verticalAlign: 'top',
          },
          h2: { fontSize: 14, fontWeight: 400, lineHeight: '28px' },
          wrap: { display: 'inline-block' },
        };
        class u extends s.default.Component {
          render() {
            let { statusCode: e, withDarkMode: t = !0 } = this.props,
              r = this.props.title || l[e] || 'An unexpected error has occurred';
            return (0, a.jsxs)('div', {
              style: d.error,
              children: [
                (0, a.jsx)(i.default, {
                  children: (0, a.jsx)('title', {
                    children: e
                      ? e + ': ' + r
                      : 'Application error: a client-side exception has occurred',
                  }),
                }),
                (0, a.jsxs)('div', {
                  style: d.desc,
                  children: [
                    (0, a.jsx)('style', {
                      dangerouslySetInnerHTML: {
                        __html:
                          'body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}' +
                          (t
                            ? '@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}'
                            : ''),
                      },
                    }),
                    e
                      ? (0, a.jsx)('h1', { className: 'next-error-h1', style: d.h1, children: e })
                      : null,
                    (0, a.jsx)('div', {
                      style: d.wrap,
                      children: (0, a.jsxs)('h2', {
                        style: d.h2,
                        children: [
                          this.props.title || e
                            ? r
                            : (0, a.jsx)(a.Fragment, {
                                children:
                                  'Application error: a client-side exception has occurred (see the browser console for more information)',
                              }),
                          '.',
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            });
          }
        }
        (u.displayName = 'ErrorPage'),
          (u.getInitialProps = o),
          (u.origGetInitialProps = o),
          ('function' == typeof t.default ||
            ('object' == typeof t.default && null !== t.default)) &&
            void 0 === t.default.__esModule &&
            (Object.defineProperty(t.default, '__esModule', { value: !0 }),
            Object.assign(t.default, t),
            (e.exports = t.default));
      },
      5495: (e, t) => {
        'use strict';
        function r(e) {
          let { ampFirst: t = !1, hybrid: r = !1, hasQuery: n = !1 } = void 0 === e ? {} : e;
          return t || (r && n);
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          Object.defineProperty(t, 'isInAmpMode', {
            enumerable: !0,
            get: function () {
              return r;
            },
          });
      },
      7828: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (function (e, t) {
            for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            default: function () {
              return m;
            },
            defaultHead: function () {
              return c;
            },
          });
        let n = r(167),
          a = r(8760),
          s = r(997),
          i = a._(r(6689)),
          l = n._(r(7215)),
          o = r(8039),
          d = r(1988),
          u = r(5495);
        function c(e) {
          void 0 === e && (e = !1);
          let t = [(0, s.jsx)('meta', { charSet: 'utf-8' })];
          return (
            e || t.push((0, s.jsx)('meta', { name: 'viewport', content: 'width=device-width' })), t
          );
        }
        function p(e, t) {
          return 'string' == typeof t || 'number' == typeof t
            ? e
            : t.type === i.default.Fragment
              ? e.concat(
                  i.default.Children.toArray(t.props.children).reduce(
                    (e, t) => ('string' == typeof t || 'number' == typeof t ? e : e.concat(t)),
                    []
                  )
                )
              : e.concat(t);
        }
        r(1997);
        let f = ['name', 'httpEquiv', 'charSet', 'itemProp'];
        function h(e, t) {
          let { inAmpMode: r } = t;
          return e
            .reduce(p, [])
            .reverse()
            .concat(c(r).reverse())
            .filter(
              (function () {
                let e = new Set(),
                  t = new Set(),
                  r = new Set(),
                  n = {};
                return (a) => {
                  let s = !0,
                    i = !1;
                  if (a.key && 'number' != typeof a.key && a.key.indexOf('$') > 0) {
                    i = !0;
                    let t = a.key.slice(a.key.indexOf('$') + 1);
                    e.has(t) ? (s = !1) : e.add(t);
                  }
                  switch (a.type) {
                    case 'title':
                    case 'base':
                      t.has(a.type) ? (s = !1) : t.add(a.type);
                      break;
                    case 'meta':
                      for (let e = 0, t = f.length; e < t; e++) {
                        let t = f[e];
                        if (a.props.hasOwnProperty(t)) {
                          if ('charSet' === t) r.has(t) ? (s = !1) : r.add(t);
                          else {
                            let e = a.props[t],
                              r = n[t] || new Set();
                            ('name' !== t || !i) && r.has(e) ? (s = !1) : (r.add(e), (n[t] = r));
                          }
                        }
                      }
                  }
                  return s;
                };
              })()
            )
            .reverse()
            .map((e, t) => {
              let n = e.key || t;
              if (
                !r &&
                'link' === e.type &&
                e.props.href &&
                ['https://fonts.googleapis.com/css', 'https://use.typekit.net/'].some((t) =>
                  e.props.href.startsWith(t)
                )
              ) {
                let t = { ...(e.props || {}) };
                return (
                  (t['data-href'] = t.href),
                  (t.href = void 0),
                  (t['data-optimized-fonts'] = !0),
                  i.default.cloneElement(e, t)
                );
              }
              return i.default.cloneElement(e, { key: n });
            });
        }
        let m = function (e) {
          let { children: t } = e,
            r = (0, i.useContext)(o.AmpStateContext),
            n = (0, i.useContext)(d.HeadManagerContext);
          return (0, s.jsx)(l.default, {
            reduceComponentsToState: h,
            headManager: n,
            inAmpMode: (0, u.isInAmpMode)(r),
            children: t,
          });
        };
        ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
      7215: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          Object.defineProperty(t, 'default', {
            enumerable: !0,
            get: function () {
              return i;
            },
          });
        let n = r(6689),
          a = () => {},
          s = () => {};
        function i(e) {
          var t;
          let { headManager: r, reduceComponentsToState: i } = e;
          function l() {
            if (r && r.mountedInstances) {
              let t = n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));
              r.updateHead(i(t, e));
            }
          }
          return (
            null == r || null == (t = r.mountedInstances) || t.add(e.children),
            l(),
            a(() => {
              var t;
              return (
                null == r || null == (t = r.mountedInstances) || t.add(e.children),
                () => {
                  var t;
                  null == r || null == (t = r.mountedInstances) || t.delete(e.children);
                }
              );
            }),
            a(
              () => (
                r && (r._pendingUpdate = l),
                () => {
                  r && (r._pendingUpdate = l);
                }
              )
            ),
            s(
              () => (
                r && r._pendingUpdate && (r._pendingUpdate(), (r._pendingUpdate = null)),
                () => {
                  r && r._pendingUpdate && (r._pendingUpdate(), (r._pendingUpdate = null));
                }
              )
            ),
            null
          );
        }
      },
      1997: (e, t) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          Object.defineProperty(t, 'warnOnce', {
            enumerable: !0,
            get: function () {
              return r;
            },
          });
        let r = (e) => {};
      },
      8872: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => i });
        var n = r(997),
          a = r(6689);
        class s extends a.Component {
          constructor(e) {
            super(e), (this.state = { error: null, errorInfo: null });
          }
          componentDidCatch(e, t) {
            this.setState({ error: e, errorInfo: t });
          }
          render() {
            return this.state.errorInfo
              ? n.jsx('div', {
                  className: 'error-boundary',
                  children: n.jsx('h2', { children: 'Something went wrong...' }),
                })
              : this.props.children;
          }
        }
        let i = s;
      },
      9864: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => h });
        var n = r(997),
          a = r(7002),
          s = r.n(a),
          i = r(8697),
          l = r.n(i),
          o = r(6689),
          d = r(4044);
        let u = function () {
          let { theme: e, handleThemeChange: t } = (0, o.useContext)(d.N);
          return n.jsx('header', {
            children: (0, n.jsxs)('div', {
              className: l()['header-wrapper'],
              children: [
                n.jsx('h1', {
                  className: `${'light' === e ? l()['heading-dark'] : l().heading}`,
                  children: 'Star Wars Planets',
                }),
                n.jsx('button', {
                  className: `${'light' === e ? l()['theme-button__dark'] : l()['theme-button']}`,
                  onClick: t,
                  children: e,
                }),
              ],
            }),
          });
        };
        var c = r(8459),
          p = r.n(c);
        let f = function () {
            return n.jsx('footer', {
              children: n.jsx('div', {
                className: p()['footer-inner'],
                children: n.jsx('a', {
                  href: 'https://github.com/raenlin/',
                  target: 'blank',
                  children: n.jsx('h3', { children: 'raenlin' }),
                }),
              }),
            });
          },
          h = function ({ children: e }) {
            let [t, r] = (0, o.useState)('');
            return n.jsx(d.N.Provider, {
              value: {
                theme: t,
                handleThemeChange: () => {
                  localStorage.setItem('theme', t), t === d.n.light ? r(d.n.dark) : r(d.n.light);
                },
              },
              children: (0, n.jsxs)('div', {
                className: `${'light' === t ? s()['wrapper-dark'] : s().wrapper}`,
                children: [n.jsx(u, {}), n.jsx('main', { children: e }), n.jsx(f, {})],
              }),
            });
          };
      },
      4044: (e, t, r) => {
        'use strict';
        r.d(t, { N: () => s, n: () => a });
        var n = r(6689);
        let a = { dark: 'dark', light: 'light' },
          s = (0, n.createContext)({ theme: 'light', handleThemeChange: () => {} });
      },
      3893: (e, t, r) => {
        'use strict';
        r.a(e, async (e, n) => {
          try {
            r.r(t), r.d(t, { default: () => g });
            var a = r(997),
              s = r(448),
              i = r.n(s),
              l = r(9816),
              o = r.n(l);
            r(8006), r(6689);
            var d = r(8872),
              u = r(3291),
              c = r(4091),
              p = r(8858),
              f = r(2470),
              h = r.n(f),
              m = r(9864),
              y = e([u, c]);
            function g({ Component: e, pageProps: t }) {
              let r = e.getLayout ?? ((e) => e);
              return a.jsx(d.Z, {
                children: a.jsx(u.Provider, {
                  store: c.h,
                  children: a.jsx(p.QueryParamProvider, {
                    adapter: h(),
                    children: (0, a.jsxs)(a.Fragment, {
                      children: [
                        a.jsx(o(), {
                          id: '32540a0128e0a37b',
                          dynamic: [i().style.fontFamily],
                          children: `html,button,input{font-family:${i().style.fontFamily}}`,
                        }),
                        a.jsx(m.Z, {
                          children: r(
                            a.jsx(e, {
                              ...t,
                              className:
                                o().dynamic([['32540a0128e0a37b', [i().style.fontFamily]]]) +
                                ' ' +
                                ((t && null != t.className && t.className) || ''),
                            })
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
              });
            }
            ([u, c] = y.then ? (await y)() : y), n();
          } catch (e) {
            n(e);
          }
        });
      },
      1070: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => s });
        var n = r(997),
          a = r(6859);
        function s() {
          return (0, n.jsxs)(a.Html, {
            lang: 'en',
            children: [
              n.jsx(a.Head, {}),
              (0, n.jsxs)('body', { children: [n.jsx(a.Main, {}), n.jsx(a.NextScript, {})] }),
            ],
          });
        }
      },
      3472: (e, t, r) => {
        'use strict';
        r.a(e, async (e, n) => {
          try {
            r.d(t, { Gh: () => l, ZP: () => u, a7: () => o });
            var a = r(3258),
              s = e([a]);
            a = (s.then ? (await s)() : s)[0];
            let i = (0, a.createSlice)({
                name: 'cards',
                initialState: { page: [], selectedCards: [] },
                reducers: {
                  selectItem(e, t) {
                    e.selectedCards.push(t.payload);
                  },
                  unselectItem(e, t) {
                    e.selectedCards = e.selectedCards.filter((e) => e.name !== t.payload.name);
                  },
                  addItems(e, t) {
                    e.page = t.payload;
                  },
                },
              }),
              { selectItem: l, unselectItem: o, addItems: d } = i.actions,
              u = i.reducer;
            n();
          } catch (e) {
            n(e);
          }
        });
      },
      1540: (e, t, r) => {
        'use strict';
        r.a(e, async (e, n) => {
          try {
            r.d(t, { E: () => i });
            var a = r(9943),
              s = e([a]);
            a = (s.then ? (await s)() : s)[0];
            let i = (0, a.createApi)({
              reducerPath: 'planetsApi',
              baseQuery: (0, a.fetchBaseQuery)({ baseUrl: 'https://swapi.dev/api/planets/' }),
              endpoints: (e) => ({
                getPlanets: e.query({
                  query: ({ search: e, page: t }) =>
                    t ? `?search=${e}&page=${t}` : `?search=${e}`,
                }),
              }),
            });
            n();
          } catch (e) {
            n(e);
          }
        });
      },
      4091: (e, t, r) => {
        'use strict';
        r.a(e, async (e, n) => {
          try {
            r.d(t, { h: () => o });
            var a = r(3258),
              s = r(3472),
              i = r(1540),
              l = e([a, s, i]);
            [a, s, i] = l.then ? (await l)() : l;
            let o = (0, a.configureStore)({
              reducer: { cards: s.ZP, [i.E.reducerPath]: i.E.reducer },
              middleware: (e) => e().concat(i.E.middleware),
            });
            n();
          } catch (e) {
            n(e);
          }
        });
      },
      8006: () => {},
      5244: (e, t) => {
        'use strict';
        var r;
        Object.defineProperty(t, 'x', {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
          (function (e) {
            (e.PAGES = 'PAGES'),
              (e.PAGES_API = 'PAGES_API'),
              (e.APP_PAGE = 'APP_PAGE'),
              (e.APP_ROUTE = 'APP_ROUTE');
          })(r || (r = {}));
      },
      8039: (e, t, r) => {
        'use strict';
        e.exports = r(7093).vendored.contexts.AmpContext;
      },
      1988: (e, t, r) => {
        'use strict';
        e.exports = r(7093).vendored.contexts.HeadManagerContext;
      },
      2470: (e) => {
        'use strict';
        e.exports = require('next-query-params/app');
      },
      2785: (e) => {
        'use strict';
        e.exports = require('next/dist/compiled/next-server/pages.runtime.prod.js');
      },
      6689: (e) => {
        'use strict';
        e.exports = require('react');
      },
      997: (e) => {
        'use strict';
        e.exports = require('react/jsx-runtime');
      },
      9816: (e) => {
        'use strict';
        e.exports = require('styled-jsx/style');
      },
      8858: (e) => {
        'use strict';
        e.exports = require('use-query-params');
      },
      3258: (e) => {
        'use strict';
        e.exports = import('@reduxjs/toolkit');
      },
      9943: (e) => {
        'use strict';
        e.exports = import('@reduxjs/toolkit/query/react');
      },
      3291: (e) => {
        'use strict';
        e.exports = import('react-redux');
      },
      1017: (e) => {
        'use strict';
        e.exports = require('path');
      },
      8760: (e, t) => {
        'use strict';
        function r(e) {
          if ('function' != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (r = function (e) {
            return e ? n : t;
          })(e);
        }
        t._ = t._interop_require_wildcard = function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ('object' != typeof e && 'function' != typeof e)) return { default: e };
          var n = r(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            s = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
              var l = s ? Object.getOwnPropertyDescriptor(e, i) : null;
              l && (l.get || l.set) ? Object.defineProperty(a, i, l) : (a[i] = e[i]);
            }
          return (a.default = e), n && n.set(e, a), a;
        };
      },
    });
  var t = require('../webpack-runtime.js');
  t.C(e);
  var r = (e) => t((t.s = e)),
    n = t.X(0, [859], () => r(6968));
  module.exports = n;
})();
