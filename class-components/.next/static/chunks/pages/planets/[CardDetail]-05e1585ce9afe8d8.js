(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [819],
  {
    3568: function (e, a, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/planets/[CardDetail]',
        function () {
          return t(9983);
        },
      ]);
    },
    4522: function (e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, {
          default: function () {
            return Q;
          },
        });
      var n = t(5893),
        r = t(7294),
        s = t(1263),
        i = t.n(s),
        c = function (e) {
          let { className: a, onClick: t, name: r } = e;
          return (0, n.jsx)('button', { className: a, onClick: t, children: r });
        },
        l = function (e) {
          let { value: a, type: t, className: r, placeholder: s, onChange: i } = e;
          return (0, n.jsx)('input', {
            value: a,
            type: t,
            className: r,
            placeholder: s,
            onChange: i,
          });
        },
        o = (e, a) => {
          let [t, n] = (0, r.useState)(() => {
            try {
              let t = localStorage.getItem(e);
              return t ? JSON.parse(t) : a;
            } catch (e) {
              return console.log(e), a;
            }
          });
          return [
            t,
            (a) => {
              try {
                let r = a instanceof Function ? a(t) : a;
                localStorage.setItem(e, JSON.stringify(r)), n(r);
              } catch (e) {
                console.log(e);
              }
            },
          ];
        },
        _ = t(4044),
        u = function (e) {
          let { onSearch: a, setquery: t } = e,
            [s, u] = (0, r.useState)(''),
            [d, p] = (0, r.useState)(!1),
            [h, m] = o('searchPlanet', ''),
            { theme: x } = (0, r.useContext)(_.N);
          if (!d)
            return (0, n.jsx)('section', {
              className: i().search,
              children: (0, n.jsxs)('div', {
                className: i()['search-inner'],
                children: [
                  (0, n.jsx)(l, {
                    value: h,
                    type: 'text',
                    className: ''.concat(
                      'light' === x ? i()['search-inner__input-dark'] : i()['search-inner__input']
                    ),
                    placeholder: 'Type planet to search...',
                    onChange: (e) => {
                      u(e.target.value), m(e.target.value);
                    },
                  }),
                  (0, n.jsx)(c, {
                    className: ''.concat(
                      'light' === x ? i()['search-inner__button-dark'] : i()['search-inner__button']
                    ),
                    onClick: () => {
                      (m(s.trim()), s) ? a(s.trim()) : (a(''), t({ search: '', page: 1 })), u('');
                    },
                    name: 'Search',
                  }),
                  (0, n.jsx)('button', {
                    className: ''.concat(
                      'light' === x
                        ? i()['search-inner__button-error__dark']
                        : i()['search-inner__button-error']
                    ),
                    onClick: () => p(!0),
                    children: 'Error!',
                  }),
                ],
              }),
            });
          throw Error('I crashed!');
        },
        d = t(9139),
        p = t.n(d),
        h = t(1054),
        m = t.n(h),
        x = t(5007),
        j = t(1664),
        g = t.n(j),
        f = t(3472),
        b = t(1163),
        N = function (e) {
          let { innerClassName: a, className: t, item: r, setIsPopupVisible: s } = e,
            { asPath: i } = (0, b.useRouter)(),
            c = (0, x.I0)(),
            l = (0, x.v9)((e) => e.cards.selectedCards),
            { name: o } = r,
            _ = l.some((e) => e.name === r.name),
            u = (e) => {
              _ ? c((0, f.a7)(e)) : c((0, f.Gh)(e)),
                setTimeout(() => {
                  s(!0);
                }, 500);
            };
          return (0, n.jsxs)(
            'div',
            {
              className: m().card,
              children: [
                (0, n.jsx)('input', {
                  className: m()['card-checkbox'],
                  type: 'checkbox',
                  checked: _,
                  onChange: () => u(r),
                }),
                (0, n.jsx)('li', {
                  className: t,
                  children: (0, n.jsx)(
                    g(),
                    {
                      href: '/planets/'.concat(o).concat(i),
                      children: (0, n.jsx)('div', {
                        className: a,
                        children: (0, n.jsx)('h2', { children: o }),
                      }),
                    },
                    r.name
                  ),
                }),
              ],
            },
            r.name
          );
        },
        k = t(6626),
        v = t.n(k);
      function C(e) {
        let { pages: a, setquery: t, query: r } = e;
        return (0, n.jsx)('div', {
          className: v().pagination,
          children: (0, n.jsx)('ul', {
            className: v()['pagination-list'],
            children: a.map((e) =>
              (0, n.jsx)(
                'li',
                {
                  className:
                    r === e ? v()['pagination-list__item-active'] : v()['pagination-list__item'],
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
      var y = t(2701),
        S = t.n(y),
        w = t(7460),
        E = t.n(w),
        P = t(3162);
      function D(e) {
        let { selectedCards: a } = e,
          t = (0, x.I0)(),
          { theme: s } = (0, r.useContext)(_.N);
        return a.length
          ? (0, n.jsxs)('div', {
              className: S().popup,
              'data-testid': 'popup',
              children: [
                (0, n.jsxs)('h3', { children: [a.length, ' items are selected:'] }),
                a.map((e) => (0, n.jsx)('li', { children: e.name }, e.name)),
                (0, n.jsxs)('div', {
                  className: S()['popup-buttons'],
                  children: [
                    (0, n.jsx)('button', {
                      className: ''.concat(
                        'light' === s ? S()['popup-button__dark'] : S()['popup-button']
                      ),
                      onClick: () => {
                        a.forEach((e) => {
                          t((0, f.a7)(e));
                        });
                      },
                      children: 'Unselect all',
                    }),
                    (0, n.jsx)('button', {
                      className: ''.concat(
                        'light' === s ? S()['popup-button__dark'] : S()['popup-button']
                      ),
                      onClick: () => {
                        let e = new Blob([E().unparse(a)], { type: 'text/csv;charset=utf-8;' }),
                          t = ''.concat(a.length, '_planets.csv');
                        (0, P.saveAs)(e, t);
                      },
                      children: 'Download',
                    }),
                  ],
                }),
              ],
            })
          : (0, n.jsx)('div', {});
      }
      var I = function (e) {
          let { items: a, pages: t, setquery: s, query: i, children: c } = e,
            [l, o] = (0, r.useState)(!1),
            _ = (0, x.v9)((e) => e.cards.selectedCards);
          return (0, n.jsxs)('section', {
            className: p().main,
            children: [
              (0, n.jsxs)('div', {
                className: p()['main-list__wrapper'],
                children: [
                  (0, n.jsx)('ul', {
                    className: p()['main-list'],
                    children: a.map((e) =>
                      (0, n.jsx)(
                        N,
                        {
                          className: p()['main-list__item'],
                          innerClassName: p()['main-list__item-inner'],
                          item: e,
                          setIsPopupVisible: o,
                        },
                        e.name
                      )
                    ),
                  }),
                  c,
                ],
              }),
              '/' === location.pathname && (0, n.jsx)(C, { pages: t, setquery: s, query: i }),
              l && (0, n.jsx)(D, { selectedCards: _ }),
            ],
          });
        },
        q = t(3272),
        T = t(2620);
      function Q(e) {
        let { children: a } = e,
          t = (0, x.I0)(),
          [s, i] = (0, r.useState)(''),
          [c, l] = (0, q.useQueryParams)({ search: q.StringParam, page: q.NumberParam }),
          {
            data: o,
            error: _,
            isLoading: d,
          } = T.E.useGetPlanetsQuery({ search: s || '', page: c.page || 1 }),
          p = o ? o.results : [],
          h = o ? o.count : 0,
          m = s ? [] : Array.from({ length: Math.ceil(h / 10) }, (e, a) => a + 1);
        return ((0, r.useEffect)(() => {
          p.length > 0 && t((0, f.$)(p));
        }, [p]),
        (0, r.useEffect)(() => {
          l({ search: '', page: 1 });
        }, []),
        _)
          ? (0, n.jsx)('p', { children: 'Error' })
          : (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(u, {
                  onSearch: (e) => {
                    i(e.trim());
                  },
                  setquery: l,
                }),
                d
                  ? (0, n.jsx)('div', { className: 'loader' })
                  : (0, n.jsx)(I, { items: p, pages: m, setquery: l, query: c.page, children: a }),
              ],
            });
      }
    },
    9983: function (e, a, t) {
      'use strict';
      t.r(a);
      var n = t(5893),
        r = t(7687),
        s = t.n(r),
        i = t(7294),
        c = t(4044),
        l = t(2620),
        o = t(1163),
        _ = t(4522);
      function u() {
        let e = (0, o.useRouter)(),
          a = e.query.CardDetail,
          { theme: t } = (0, i.useContext)(c.N),
          { data: r, error: _, isLoading: u } = l.E.useGetPlanetsQuery({ search: a || '' }),
          d = r ? r.results : [];
        return d
          ? _
            ? (0, n.jsx)('p', { children: 'Error' })
            : (0, n.jsx)(n.Fragment, {
                children: u
                  ? (0, n.jsx)('div', { className: s().loader })
                  : (0, n.jsxs)('div', {
                      className: s()['card-details'],
                      children: [
                        d.map((e) =>
                          (0, n.jsxs)(
                            'div',
                            {
                              children: [
                                (0, n.jsx)('h2', { children: e.name }),
                                (0, n.jsxs)('div', {
                                  children: [
                                    (0, n.jsxs)('p', { children: ['Diameter: ', e.diameter] }),
                                    (0, n.jsxs)('p', {
                                      children: ['Rotation-period: ', e.rotation_period],
                                    }),
                                    (0, n.jsxs)('p', {
                                      children: ['Orbital-period: ', e.orbital_period],
                                    }),
                                    (0, n.jsxs)('p', { children: ['Climate: ', e.climate] }),
                                    (0, n.jsxs)('p', { children: ['Terrain: ', e.terrain] }),
                                    (0, n.jsxs)('p', { children: ['Gravity: ', e.gravity] }),
                                    (0, n.jsxs)('p', { children: ['Population: ', e.population] }),
                                    (0, n.jsxs)('p', {
                                      children: ['Surface-water: ', e.surface_water],
                                    }),
                                    (0, n.jsxs)('p', { children: ['Created: ', e.created] }),
                                  ],
                                }),
                              ],
                            },
                            e.name
                          )
                        ),
                        (0, n.jsx)('button', {
                          onClick: () => {
                            e.push('/?search=&page=1');
                          },
                          className: ''.concat(
                            'light' === t
                              ? s()['card-details-close__dark']
                              : s()['card-details-close']
                          ),
                          children: 'Close',
                        }),
                      ],
                    }),
              })
          : void 0;
      }
      (u.getLayout = function (e) {
        return (0, n.jsx)(_.default, { children: e });
      }),
        (a.default = u);
    },
    1054: function (e) {
      e.exports = { card: 'Card_card__RlVbj', 'card-checkbox': 'Card_card-checkbox__jGlbz' };
    },
    9139: function (e) {
      e.exports = {
        'main-list__wrapper': 'main_main-list__wrapper__2QTH0',
        'main-list': 'main_main-list__N6w7w',
        'main-list__item': 'main_main-list__item__dMs0B',
        'main-list__item-inner': 'main_main-list__item-inner__vn3Q0',
      };
    },
    6626: function (e) {
      e.exports = {
        pagination: 'pagination_pagination__auit7',
        'pagination-list': 'pagination_pagination-list__3wHnL',
        'pagination-list__item': 'pagination_pagination-list__item__3M6eo',
        'pagination-list__item-active': 'pagination_pagination-list__item-active__75uw4',
      };
    },
    2701: function (e) {
      e.exports = {
        popup: 'Popup_popup__cpqn3',
        'popup-buttons': 'Popup_popup-buttons__8wLdy',
        'popup-button': 'Popup_popup-button__FAHkS',
        'popup-button__dark': 'Popup_popup-button__dark__jif_k',
      };
    },
    1263: function (e) {
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
    7687: function (e) {
      e.exports = {
        'card-details': 'CardDetail_card-details__1WaaF',
        'card-details-close': 'CardDetail_card-details-close__joSdE',
        'card-details-close__dark': 'CardDetail_card-details-close__dark___VaMo',
        loader: 'CardDetail_loader__IiR7h',
        l24: 'CardDetail_l24__Ukm27',
      };
    },
  },
  function (e) {
    e.O(0, [664, 655, 888, 774, 179], function () {
      return e((e.s = 3568));
    }),
      (_N_E = e.O());
  },
]);