(exports.id = 485),
  (exports.ids = [485]),
  (exports.modules = {
    3666: (e) => {
      e.exports = { card: 'Card_card__RlVbj', 'card-checkbox': 'Card_card-checkbox__jGlbz' };
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
    481: (e) => {
      e.exports = {
        'main-list__wrapper': 'main_main-list__wrapper__2QTH0',
        'main-list': 'main_main-list__N6w7w',
        'main-list__item': 'main_main-list__item__dMs0B',
        'main-list__item-inner': 'main_main-list__item-inner__vn3Q0',
      };
    },
    3950: (e) => {
      e.exports = {
        pagination: 'pagination_pagination__auit7',
        'pagination-list': 'pagination_pagination-list__3wHnL',
        'pagination-list__item': 'pagination_pagination-list__item__3M6eo',
        'pagination-list__item-active': 'pagination_pagination-list__item-active__75uw4',
      };
    },
    484: (e) => {
      e.exports = {
        popup: 'Popup_popup__cpqn3',
        'popup-buttons': 'Popup_popup-buttons__8wLdy',
        'popup-button': 'Popup_popup-button__FAHkS',
        'popup-button__dark': 'Popup_popup-button__dark__jif_k',
      };
    },
    2665: (e) => {
      e.exports = {
        'search-inner': 'Search_search-inner__LhYdL',
        'search-inner__input': 'Search_search-inner__input__YfZnt',
        'search-inner__input-dark': 'Search_search-inner__input-dark__vynW0',
        'search-inner__button': 'Search_search-inner__button__vjSQE',
        'search-inner__button-error': 'Search_search-inner__button-error__oeAwy',
        'search-inner__button-dark': 'Search_search-inner__button-dark__4dSui',
        'search-inner__button-error__dark': 'Search_search-inner__button-error__dark__TsdoE',
      };
    },
    9895: (e, t, a) => {
      'use strict';
      a.a(e, async (e, r) => {
        try {
          a.d(t, { Z: () => _ });
          var n = a(997),
            s = a(3666),
            i = a.n(s),
            c = a(3291),
            l = a(1664),
            o = a.n(l),
            h = a(3472),
            d = a(1163),
            u = e([c, h]);
          [c, h] = u.then ? (await u)() : u;
          let _ = function ({ innerClassName: e, className: t, item: a, setIsPopupVisible: r }) {
            let { asPath: s } = (0, d.useRouter)(),
              l = (0, c.useDispatch)(),
              u = (0, c.useSelector)((e) => e.cards.selectedCards),
              { name: _ } = a,
              p = u.some((e) => e.name === a.name),
              m = (e) => {
                p ? l((0, h.a7)(e)) : l((0, h.Gh)(e)),
                  setTimeout(() => {
                    r(!0);
                  }, 500);
              };
            return (0, n.jsxs)(
              'div',
              {
                className: i().card,
                children: [
                  n.jsx('input', {
                    className: i()['card-checkbox'],
                    type: 'checkbox',
                    checked: p,
                    onChange: () => m(a),
                  }),
                  n.jsx('li', {
                    className: t,
                    children: n.jsx(
                      o(),
                      {
                        href: `/planets/${_}${s}`,
                        children: n.jsx('div', {
                          className: e,
                          children: n.jsx('h2', { children: _ }),
                        }),
                      },
                      a.name
                    ),
                  }),
                ],
              },
              a.name
            );
          };
          r();
        } catch (e) {
          r(e);
        }
      });
    },
    8872: (e, t, a) => {
      'use strict';
      a.d(t, { Z: () => i });
      var r = a(997),
        n = a(6689);
      class s extends n.Component {
        constructor(e) {
          super(e), (this.state = { error: null, errorInfo: null });
        }
        componentDidCatch(e, t) {
          this.setState({ error: e, errorInfo: t });
        }
        render() {
          return this.state.errorInfo
            ? r.jsx('div', {
                className: 'error-boundary',
                children: r.jsx('h2', { children: 'Something went wrong...' }),
              })
            : this.props.children;
        }
      }
      let i = s;
    },
    9864: (e, t, a) => {
      'use strict';
      a.d(t, { Z: () => p });
      var r = a(997),
        n = a(7002),
        s = a.n(n),
        i = a(8697),
        c = a.n(i),
        l = a(6689),
        o = a(4044);
      let h = function () {
        let { theme: e, handleThemeChange: t } = (0, l.useContext)(o.N);
        return r.jsx('header', {
          children: (0, r.jsxs)('div', {
            className: c()['header-wrapper'],
            children: [
              r.jsx('h1', {
                className: `${'light' === e ? c()['heading-dark'] : c().heading}`,
                children: 'Star Wars Planets',
              }),
              r.jsx('button', {
                className: `${'light' === e ? c()['theme-button__dark'] : c()['theme-button']}`,
                onClick: t,
                children: e,
              }),
            ],
          }),
        });
      };
      var d = a(8459),
        u = a.n(d);
      let _ = function () {
          return r.jsx('footer', {
            children: r.jsx('div', {
              className: u()['footer-inner'],
              children: r.jsx('a', {
                href: 'https://github.com/raenlin/',
                target: 'blank',
                children: r.jsx('h3', { children: 'raenlin' }),
              }),
            }),
          });
        },
        p = function ({ children: e }) {
          let [t, a] = (0, l.useState)('');
          return r.jsx(o.N.Provider, {
            value: {
              theme: t,
              handleThemeChange: () => {
                localStorage.setItem('theme', t), t === o.n.light ? a(o.n.dark) : a(o.n.light);
              },
            },
            children: (0, r.jsxs)('div', {
              className: `${'light' === t ? s()['wrapper-dark'] : s().wrapper}`,
              children: [r.jsx(h, {}), r.jsx('main', { children: e }), r.jsx(_, {})],
            }),
          });
        };
    },
    785: (e, t, a) => {
      'use strict';
      a.a(e, async (e, r) => {
        try {
          a.d(t, { Z: () => _ });
          var n = a(997),
            s = a(481),
            i = a.n(s),
            c = a(9895),
            l = a(3427),
            o = a(6689),
            h = a(3678),
            d = a(3291),
            u = e([c, h, d]);
          [c, h, d] = u.then ? (await u)() : u;
          let _ = function ({ items: e, pages: t, setquery: a, query: r, children: s }) {
            let [u, _] = (0, o.useState)(!1),
              p = (0, d.useSelector)((e) => e.cards.selectedCards);
            return (0, n.jsxs)('section', {
              className: i().main,
              children: [
                (0, n.jsxs)('div', {
                  className: i()['main-list__wrapper'],
                  children: [
                    n.jsx('ul', {
                      className: i()['main-list'],
                      children: e.map((e) =>
                        n.jsx(
                          c.Z,
                          {
                            className: i()['main-list__item'],
                            innerClassName: i()['main-list__item-inner'],
                            item: e,
                            setIsPopupVisible: _,
                          },
                          e.name
                        )
                      ),
                    }),
                    s,
                  ],
                }),
                '/' === location.pathname && n.jsx(l.t, { pages: t, setquery: a, query: r }),
                u && n.jsx(h.G, { selectedCards: p }),
              ],
            });
          };
          r();
        } catch (e) {
          r(e);
        }
      });
    },
    3427: (e, t, a) => {
      'use strict';
      a.d(t, { t: () => i });
      var r = a(997),
        n = a(3950),
        s = a.n(n);
      function i({ pages: e, setquery: t, query: a }) {
        return r.jsx('div', {
          className: s().pagination,
          children: r.jsx('ul', {
            className: s()['pagination-list'],
            children: e.map((e) =>
              r.jsx(
                'li',
                {
                  className:
                    a === e ? s()['pagination-list__item-active'] : s()['pagination-list__item'],
                  onClick: () => {
                    t({ page: e });
                  },
                  children: e,
                },
                e
              )
            ),
          }),
        });
      }
    },
    3678: (e, t, a) => {
      'use strict';
      a.a(e, async (e, r) => {
        try {
          a.d(t, { G: () => m });
          var n = a(997),
            s = a(484),
            i = a.n(s),
            c = a(3291),
            l = a(3472),
            o = a(6689),
            h = a(4044),
            d = a(7153),
            u = a.n(d),
            _ = a(8109),
            p = e([c, l]);
          function m({ selectedCards: e }) {
            let t = (0, c.useDispatch)(),
              { theme: a } = (0, o.useContext)(h.N);
            return e.length
              ? (0, n.jsxs)('div', {
                  className: i().popup,
                  'data-testid': 'popup',
                  children: [
                    (0, n.jsxs)('h3', { children: [e.length, ' items are selected:'] }),
                    e.map((e) => n.jsx('li', { children: e.name }, e.name)),
                    (0, n.jsxs)('div', {
                      className: i()['popup-buttons'],
                      children: [
                        n.jsx('button', {
                          className: `${'light' === a ? i()['popup-button__dark'] : i()['popup-button']}`,
                          onClick: () => {
                            e.forEach((e) => {
                              t((0, l.a7)(e));
                            });
                          },
                          children: 'Unselect all',
                        }),
                        n.jsx('button', {
                          className: `${'light' === a ? i()['popup-button__dark'] : i()['popup-button']}`,
                          onClick: () => {
                            let t = u().unparse(e),
                              a = new Blob([t], { type: 'text/csv;charset=utf-8;' }),
                              r = `${e.length}_planets.csv`;
                            (0, _.saveAs)(a, r);
                          },
                          children: 'Download',
                        }),
                      ],
                    }),
                  ],
                })
              : n.jsx('div', {});
          }
          ([c, l] = p.then ? (await p)() : p), r();
        } catch (e) {
          r(e);
        }
      });
    },
    534: (e, t, a) => {
      'use strict';
      a.d(t, { Z: () => d });
      var r = a(997),
        n = a(2665),
        s = a.n(n),
        i = a(6689);
      let c = function ({ className: e, onClick: t, name: a }) {
          return r.jsx('button', { className: e, onClick: t, children: a });
        },
        l = function ({ value: e, type: t, className: a, placeholder: n, onChange: s }) {
          return r.jsx('input', { value: e, type: t, className: a, placeholder: n, onChange: s });
        },
        o = (e, t) => {
          let [a, r] = (0, i.useState)(() => {
            try {
              return t;
            } catch (e) {
              return console.log(e), t;
            }
          });
          return [
            a,
            (t) => {
              try {
                let n = t instanceof Function ? t(a) : t;
                localStorage.setItem(e, JSON.stringify(n)), r(n);
              } catch (e) {
                console.log(e);
              }
            },
          ];
        };
      var h = a(4044);
      let d = function ({ onSearch: e, setquery: t }) {
        let [a, n] = (0, i.useState)(''),
          [d, u] = (0, i.useState)(!1),
          [_, p] = o('searchPlanet', ''),
          { theme: m } = (0, i.useContext)(h.N);
        if (!d)
          return r.jsx('section', {
            className: s().search,
            children: (0, r.jsxs)('div', {
              className: s()['search-inner'],
              children: [
                r.jsx(l, {
                  value: _,
                  type: 'text',
                  className: `${'light' === m ? s()['search-inner__input-dark'] : s()['search-inner__input']}`,
                  placeholder: 'Type planet to search...',
                  onChange: (e) => {
                    n(e.target.value), p(e.target.value);
                  },
                }),
                r.jsx(c, {
                  className: `${'light' === m ? s()['search-inner__button-dark'] : s()['search-inner__button']}`,
                  onClick: () => {
                    (p(a.trim()), a) ? e(a.trim()) : (e(''), t({ search: '', page: 1 })), n('');
                  },
                  name: 'Search',
                }),
                r.jsx('button', {
                  className: `${'light' === m ? s()['search-inner__button-error__dark'] : s()['search-inner__button-error']}`,
                  onClick: () => u(!0),
                  children: 'Error!',
                }),
              ],
            }),
          });
        throw Error('I crashed!');
      };
    },
    4044: (e, t, a) => {
      'use strict';
      a.d(t, { N: () => s, n: () => n });
      var r = a(6689);
      let n = { dark: 'dark', light: 'light' },
        s = (0, r.createContext)({ theme: 'light', handleThemeChange: () => {} });
    },
    3893: (e, t, a) => {
      'use strict';
      a.a(e, async (e, r) => {
        try {
          a.r(t), a.d(t, { default: () => g });
          var n = a(997),
            s = a(448),
            i = a.n(s),
            c = a(9816),
            l = a.n(c);
          a(8006), a(6689);
          var o = a(8872),
            h = a(3291),
            d = a(4091),
            u = a(8858),
            _ = a(2470),
            p = a.n(_),
            m = a(9864),
            x = e([h, d]);
          function g({ Component: e, pageProps: t }) {
            let a = e.getLayout ?? ((e) => e);
            return n.jsx(o.Z, {
              children: n.jsx(h.Provider, {
                store: d.h,
                children: n.jsx(u.QueryParamProvider, {
                  adapter: p(),
                  children: (0, n.jsxs)(n.Fragment, {
                    children: [
                      n.jsx(l(), {
                        id: '32540a0128e0a37b',
                        dynamic: [i().style.fontFamily],
                        children: `html,button,input{font-family:${i().style.fontFamily}}`,
                      }),
                      n.jsx(m.Z, {
                        children: a(
                          n.jsx(e, {
                            ...t,
                            className:
                              l().dynamic([['32540a0128e0a37b', [i().style.fontFamily]]]) +
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
          ([h, d] = x.then ? (await x)() : x), r();
        } catch (e) {
          r(e);
        }
      });
    },
    1070: (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => s });
      var r = a(997),
        n = a(6859);
      function s() {
        return (0, r.jsxs)(n.Html, {
          lang: 'en',
          children: [
            r.jsx(n.Head, {}),
            (0, r.jsxs)('body', { children: [r.jsx(n.Main, {}), r.jsx(n.NextScript, {})] }),
          ],
        });
      }
    },
    1364: (e, t, a) => {
      'use strict';
      a.a(e, async (e, r) => {
        try {
          a.r(t), a.d(t, { default: () => p });
          var n = a(997),
            s = a(6689),
            i = a(534),
            c = a(785),
            l = a(8858),
            o = a(1540),
            h = a(9186),
            d = a(3291),
            u = a(3472),
            _ = e([c, o, d, u]);
          function p({ children: e }) {
            (0, d.useDispatch)();
            let [t, a] = (0, s.useState)(''),
              [r, u] = (0, l.useQueryParams)({ search: l.StringParam, page: l.NumberParam }),
              {
                data: _,
                error: p,
                isLoading: m,
              } = o.E.useGetPlanetsQuery({ search: t || '', page: r.page || 1 }),
              x = _ ? _.results : [],
              g = _ ? _.count : 0,
              j = Math.ceil(g / h.C),
              y = t ? [] : Array.from({ length: j }, (e, t) => t + 1);
            return p
              ? n.jsx('p', { children: 'Error' })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    n.jsx(i.Z, {
                      onSearch: (e) => {
                        a(e.trim());
                      },
                      setquery: u,
                    }),
                    m
                      ? n.jsx('div', { className: 'loader' })
                      : n.jsx(c.Z, { items: x, pages: y, setquery: u, query: r.page, children: e }),
                  ],
                });
          }
          ([c, o, d, u] = _.then ? (await _)() : _), r();
        } catch (e) {
          r(e);
        }
      });
    },
    3472: (e, t, a) => {
      'use strict';
      a.a(e, async (e, r) => {
        try {
          a.d(t, { Gh: () => c, ZP: () => h, a7: () => l });
          var n = a(3258),
            s = e([n]);
          n = (s.then ? (await s)() : s)[0];
          let i = (0, n.createSlice)({
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
            { selectItem: c, unselectItem: l, addItems: o } = i.actions,
            h = i.reducer;
          r();
        } catch (e) {
          r(e);
        }
      });
    },
    1540: (e, t, a) => {
      'use strict';
      a.a(e, async (e, r) => {
        try {
          a.d(t, { E: () => i });
          var n = a(9943),
            s = e([n]);
          n = (s.then ? (await s)() : s)[0];
          let i = (0, n.createApi)({
            reducerPath: 'planetsApi',
            baseQuery: (0, n.fetchBaseQuery)({ baseUrl: 'https://swapi.dev/api/planets/' }),
            endpoints: (e) => ({
              getPlanets: e.query({
                query: ({ search: e, page: t }) => (t ? `?search=${e}&page=${t}` : `?search=${e}`),
              }),
            }),
          });
          r();
        } catch (e) {
          r(e);
        }
      });
    },
    4091: (e, t, a) => {
      'use strict';
      a.a(e, async (e, r) => {
        try {
          a.d(t, { h: () => l });
          var n = a(3258),
            s = a(3472),
            i = a(1540),
            c = e([n, s, i]);
          [n, s, i] = c.then ? (await c)() : c;
          let l = (0, n.configureStore)({
            reducer: { cards: s.ZP, [i.E.reducerPath]: i.E.reducer },
            middleware: (e) => e().concat(i.E.middleware),
          });
          r();
        } catch (e) {
          r(e);
        }
      });
    },
    9186: (e, t, a) => {
      'use strict';
      a.d(t, { C: () => r });
      let r = 10;
    },
    8006: () => {},
  });
