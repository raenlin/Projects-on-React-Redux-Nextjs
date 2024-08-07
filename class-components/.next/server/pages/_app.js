(() => {
  var e = {};
  (e.id = 888),
    (e.ids = [888]),
    (e.modules = {
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
      8872: (e, r, t) => {
        'use strict';
        t.d(r, { Z: () => i });
        var a = t(997),
          s = t(6689);
        class n extends s.Component {
          constructor(e) {
            super(e), (this.state = { error: null, errorInfo: null });
          }
          componentDidCatch(e, r) {
            this.setState({ error: e, errorInfo: r });
          }
          render() {
            return this.state.errorInfo
              ? a.jsx('div', {
                  className: 'error-boundary',
                  children: a.jsx('h2', { children: 'Something went wrong...' }),
                })
              : this.props.children;
          }
        }
        let i = n;
      },
      9864: (e, r, t) => {
        'use strict';
        t.d(r, { Z: () => m });
        var a = t(997),
          s = t(7002),
          n = t.n(s),
          i = t(8697),
          l = t.n(i),
          d = t(6689),
          c = t(4044);
        let o = function () {
          let { theme: e, handleThemeChange: r } = (0, d.useContext)(c.N);
          return a.jsx('header', {
            children: (0, a.jsxs)('div', {
              className: l()['header-wrapper'],
              children: [
                a.jsx('h1', {
                  className: `${'light' === e ? l()['heading-dark'] : l().heading}`,
                  children: 'Star Wars Planets',
                }),
                a.jsx('button', {
                  className: `${'light' === e ? l()['theme-button__dark'] : l()['theme-button']}`,
                  onClick: r,
                  children: e,
                }),
              ],
            }),
          });
        };
        var h = t(8459),
          u = t.n(h);
        let p = function () {
            return a.jsx('footer', {
              children: a.jsx('div', {
                className: u()['footer-inner'],
                children: a.jsx('a', {
                  href: 'https://github.com/raenlin/',
                  target: 'blank',
                  children: a.jsx('h3', { children: 'raenlin' }),
                }),
              }),
            });
          },
          m = function ({ children: e }) {
            let [r, t] = (0, d.useState)('');
            return a.jsx(c.N.Provider, {
              value: {
                theme: r,
                handleThemeChange: () => {
                  localStorage.setItem('theme', r), r === c.n.light ? t(c.n.dark) : t(c.n.light);
                },
              },
              children: (0, a.jsxs)('div', {
                className: `${'light' === r ? n()['wrapper-dark'] : n().wrapper}`,
                children: [a.jsx(o, {}), a.jsx('main', { children: e }), a.jsx(p, {})],
              }),
            });
          };
      },
      4044: (e, r, t) => {
        'use strict';
        t.d(r, { N: () => n, n: () => s });
        var a = t(6689);
        let s = { dark: 'dark', light: 'light' },
          n = (0, a.createContext)({ theme: 'light', handleThemeChange: () => {} });
      },
      3893: (e, r, t) => {
        'use strict';
        t.a(e, async (e, a) => {
          try {
            t.r(r), t.d(r, { default: () => y });
            var s = t(997),
              n = t(448),
              i = t.n(n),
              l = t(9816),
              d = t.n(l);
            t(8006), t(6689);
            var c = t(8872),
              o = t(3291),
              h = t(4091),
              u = t(8858),
              p = t(2470),
              m = t.n(p),
              x = t(9864),
              _ = e([o, h]);
            function y({ Component: e, pageProps: r }) {
              let t = e.getLayout ?? ((e) => e);
              return s.jsx(c.Z, {
                children: s.jsx(o.Provider, {
                  store: h.h,
                  children: s.jsx(u.QueryParamProvider, {
                    adapter: m(),
                    children: (0, s.jsxs)(s.Fragment, {
                      children: [
                        s.jsx(d(), {
                          id: '32540a0128e0a37b',
                          dynamic: [i().style.fontFamily],
                          children: `html,button,input{font-family:${i().style.fontFamily}}`,
                        }),
                        s.jsx(x.Z, {
                          children: t(
                            s.jsx(e, {
                              ...r,
                              className:
                                d().dynamic([['32540a0128e0a37b', [i().style.fontFamily]]]) +
                                ' ' +
                                ((r && null != r.className && r.className) || ''),
                            })
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
              });
            }
            ([o, h] = _.then ? (await _)() : _), a();
          } catch (e) {
            a(e);
          }
        });
      },
      3472: (e, r, t) => {
        'use strict';
        t.a(e, async (e, a) => {
          try {
            t.d(r, { Gh: () => l, ZP: () => o, a7: () => d });
            var s = t(3258),
              n = e([s]);
            s = (n.then ? (await n)() : n)[0];
            let i = (0, s.createSlice)({
                name: 'cards',
                initialState: { page: [], selectedCards: [] },
                reducers: {
                  selectItem(e, r) {
                    e.selectedCards.push(r.payload);
                  },
                  unselectItem(e, r) {
                    e.selectedCards = e.selectedCards.filter((e) => e.name !== r.payload.name);
                  },
                  addItems(e, r) {
                    e.page = r.payload;
                  },
                },
              }),
              { selectItem: l, unselectItem: d, addItems: c } = i.actions,
              o = i.reducer;
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      1540: (e, r, t) => {
        'use strict';
        t.a(e, async (e, a) => {
          try {
            t.d(r, { E: () => i });
            var s = t(9943),
              n = e([s]);
            s = (n.then ? (await n)() : n)[0];
            let i = (0, s.createApi)({
              reducerPath: 'planetsApi',
              baseQuery: (0, s.fetchBaseQuery)({ baseUrl: 'https://swapi.dev/api/planets/' }),
              endpoints: (e) => ({
                getPlanets: e.query({
                  query: ({ search: e, page: r }) =>
                    r ? `?search=${e}&page=${r}` : `?search=${e}`,
                }),
              }),
            });
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      4091: (e, r, t) => {
        'use strict';
        t.a(e, async (e, a) => {
          try {
            t.d(r, { h: () => d });
            var s = t(3258),
              n = t(3472),
              i = t(1540),
              l = e([s, n, i]);
            [s, n, i] = l.then ? (await l)() : l;
            let d = (0, s.configureStore)({
              reducer: { cards: n.ZP, [i.E.reducerPath]: i.E.reducer },
              middleware: (e) => e().concat(i.E.middleware),
            });
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      8006: () => {},
      2470: (e) => {
        'use strict';
        e.exports = require('next-query-params/app');
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
    });
  var r = require('../webpack-runtime.js');
  r.C(e);
  var t = r((r.s = 3893));
  module.exports = t;
})();
