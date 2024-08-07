(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return t(4522);
        },
      ]);
    },
    4522: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          default: function () {
            return A;
          },
        });
      var a = t(5893),
        r = t(7294),
        s = t(1263),
        i = t.n(s),
        c = function (e) {
          let { className: n, onClick: t, name: r } = e;
          return (0, a.jsx)('button', { className: n, onClick: t, children: r });
        },
        _ = function (e) {
          let { value: n, type: t, className: r, placeholder: s, onChange: i } = e;
          return (0, a.jsx)('input', {
            value: n,
            type: t,
            className: r,
            placeholder: s,
            onChange: i,
          });
        },
        o = (e, n) => {
          let [t, a] = (0, r.useState)(() => {
            try {
              let t = localStorage.getItem(e);
              return t ? JSON.parse(t) : n;
            } catch (e) {
              return console.log(e), n;
            }
          });
          return [
            t,
            (n) => {
              try {
                let r = n instanceof Function ? n(t) : n;
                localStorage.setItem(e, JSON.stringify(r)), a(r);
              } catch (e) {
                console.log(e);
              }
            },
          ];
        },
        l = t(4044),
        u = function (e) {
          let { onSearch: n, setquery: t } = e,
            [s, u] = (0, r.useState)(''),
            [p, h] = (0, r.useState)(!1),
            [m, d] = o('searchPlanet', ''),
            { theme: g } = (0, r.useContext)(l.N);
          if (!p)
            return (0, a.jsx)('section', {
              className: i().search,
              children: (0, a.jsxs)('div', {
                className: i()['search-inner'],
                children: [
                  (0, a.jsx)(_, {
                    value: m,
                    type: 'text',
                    className: ''.concat(
                      'light' === g ? i()['search-inner__input-dark'] : i()['search-inner__input']
                    ),
                    placeholder: 'Type planet to search...',
                    onChange: (e) => {
                      u(e.target.value), d(e.target.value);
                    },
                  }),
                  (0, a.jsx)(c, {
                    className: ''.concat(
                      'light' === g ? i()['search-inner__button-dark'] : i()['search-inner__button']
                    ),
                    onClick: () => {
                      (d(s.trim()), s) ? n(s.trim()) : (n(''), t({ search: '', page: 1 })), u('');
                    },
                    name: 'Search',
                  }),
                  (0, a.jsx)('button', {
                    className: ''.concat(
                      'light' === g
                        ? i()['search-inner__button-error__dark']
                        : i()['search-inner__button-error']
                    ),
                    onClick: () => h(!0),
                    children: 'Error!',
                  }),
                ],
              }),
            });
          throw Error('I crashed!');
        },
        p = t(9139),
        h = t.n(p),
        m = t(1054),
        d = t.n(m),
        g = t(5007),
        x = t(1664),
        b = t.n(x),
        j = t(3472),
        f = t(1163),
        N = function (e) {
          let { innerClassName: n, className: t, item: r, setIsPopupVisible: s } = e,
            { asPath: i } = (0, f.useRouter)(),
            c = (0, g.I0)(),
            _ = (0, g.v9)((e) => e.cards.selectedCards),
            { name: o } = r,
            l = _.some((e) => e.name === r.name),
            u = (e) => {
              l ? c((0, j.a7)(e)) : c((0, j.Gh)(e)),
                setTimeout(() => {
                  s(!0);
                }, 500);
            };
          return (0, a.jsxs)(
            'div',
            {
              className: d().card,
              children: [
                (0, a.jsx)('input', {
                  className: d()['card-checkbox'],
                  type: 'checkbox',
                  checked: l,
                  onChange: () => u(r),
                }),
                (0, a.jsx)('li', {
                  className: t,
                  children: (0, a.jsx)(
                    b(),
                    {
                      href: '/planets/'.concat(o).concat(i),
                      children: (0, a.jsx)('div', {
                        className: n,
                        children: (0, a.jsx)('h2', { children: o }),
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
      function S(e) {
        let { pages: n, setquery: t, query: r } = e;
        return (0, a.jsx)('div', {
          className: v().pagination,
          children: (0, a.jsx)('ul', {
            className: v()['pagination-list'],
            children: n.map((e) =>
              (0, a.jsx)(
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
        C = t.n(y),
        w = t(7460),
        E = t.n(w),
        P = t(3162);
      function I(e) {
        let { selectedCards: n } = e,
          t = (0, g.I0)(),
          { theme: s } = (0, r.useContext)(l.N);
        return n.length
          ? (0, a.jsxs)('div', {
              className: C().popup,
              'data-testid': 'popup',
              children: [
                (0, a.jsxs)('h3', { children: [n.length, ' items are selected:'] }),
                n.map((e) => (0, a.jsx)('li', { children: e.name }, e.name)),
                (0, a.jsxs)('div', {
                  className: C()['popup-buttons'],
                  children: [
                    (0, a.jsx)('button', {
                      className: ''.concat(
                        'light' === s ? C()['popup-button__dark'] : C()['popup-button']
                      ),
                      onClick: () => {
                        n.forEach((e) => {
                          t((0, j.a7)(e));
                        });
                      },
                      children: 'Unselect all',
                    }),
                    (0, a.jsx)('button', {
                      className: ''.concat(
                        'light' === s ? C()['popup-button__dark'] : C()['popup-button']
                      ),
                      onClick: () => {
                        let e = new Blob([E().unparse(n)], { type: 'text/csv;charset=utf-8;' }),
                          t = ''.concat(n.length, '_planets.csv');
                        (0, P.saveAs)(e, t);
                      },
                      children: 'Download',
                    }),
                  ],
                }),
              ],
            })
          : (0, a.jsx)('div', {});
      }
      var q = function (e) {
          let { items: n, pages: t, setquery: s, query: i, children: c } = e,
            [_, o] = (0, r.useState)(!1),
            l = (0, g.v9)((e) => e.cards.selectedCards);
          return (0, a.jsxs)('section', {
            className: h().main,
            children: [
              (0, a.jsxs)('div', {
                className: h()['main-list__wrapper'],
                children: [
                  (0, a.jsx)('ul', {
                    className: h()['main-list'],
                    children: n.map((e) =>
                      (0, a.jsx)(
                        N,
                        {
                          className: h()['main-list__item'],
                          innerClassName: h()['main-list__item-inner'],
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
              '/' === location.pathname && (0, a.jsx)(S, { pages: t, setquery: s, query: i }),
              _ && (0, a.jsx)(I, { selectedCards: l }),
            ],
          });
        },
        T = t(3272),
        Q = t(2620);
      function A(e) {
        let { children: n } = e,
          t = (0, g.I0)(),
          [s, i] = (0, r.useState)(''),
          [c, _] = (0, T.useQueryParams)({ search: T.StringParam, page: T.NumberParam }),
          {
            data: o,
            error: l,
            isLoading: p,
          } = Q.E.useGetPlanetsQuery({ search: s || '', page: c.page || 1 }),
          h = o ? o.results : [],
          m = o ? o.count : 0,
          d = s ? [] : Array.from({ length: Math.ceil(m / 10) }, (e, n) => n + 1);
        return ((0, r.useEffect)(() => {
          h.length > 0 && t((0, j.$)(h));
        }, [h]),
        (0, r.useEffect)(() => {
          _({ search: '', page: 1 });
        }, []),
        l)
          ? (0, a.jsx)('p', { children: 'Error' })
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(u, {
                  onSearch: (e) => {
                    i(e.trim());
                  },
                  setquery: _,
                }),
                p
                  ? (0, a.jsx)('div', { className: 'loader' })
                  : (0, a.jsx)(q, { items: h, pages: d, setquery: _, query: c.page, children: n }),
              ],
            });
      }
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
  },
  function (e) {
    e.O(0, [664, 655, 888, 774, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
