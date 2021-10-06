(this.webpackJsonpportfolio = this.webpackJsonpportfolio || []).push([
  [11],
  {
    113: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(1),
        c = (a(92), a(4)),
        s = a.n(c),
        i = a(21),
        r = a(75),
        o = a(78),
        l = a(58),
        d = a(14),
        u = a(0),
        b = a(56),
        j = a(57);
      a(93);
      var h = ({
          className: e,
          resize: t = 'none',
          value: a,
          onChange: c,
          minRows: i = 1,
          maxRows: r,
          ...o
        }) => {
          const [l, d] = Object(u.useState)(i),
            [b, j] = Object(u.useState)(),
            h = Object(u.useRef)();
          Object(u.useEffect)(() => {
            const e = getComputedStyle(h.current),
              t = parseInt(e.lineHeight, 10),
              a = parseInt(e.paddingTop, 10) + parseInt(e.paddingBottom, 10);
            j({ lineHeight: t, paddingHeight: a });
          }, []);
          return Object(n.jsx)('textarea', {
            className: s()('textarea', e),
            ref: h,
            onChange: e => {
              c(e);
              const { lineHeight: t, paddingHeight: a } = b,
                n = e.target.rows;
              e.target.rows = i;
              const s = ~~((e.target.scrollHeight - a) / t);
              s === n && (e.target.rows = s),
                r &&
                  s >= r &&
                  ((e.target.rows = r), (e.target.scrollTop = e.target.scrollHeight)),
                d(r && s > r ? r : s);
            },
            style: { '--resize': t },
            rows: l,
            value: a,
            ...o,
          });
        },
        m = a(9),
        p = a(22),
        O = a(10),
        _ = a(2);
      a(94);
      var g = ({
          id: e,
          label: t,
          hasValue: a,
          value: c,
          multiline: i,
          className: r,
          style: o,
          error: l,
          onBlur: g,
          ...f
        }) => {
          const [x, v] = Object(u.useState)(!1),
            y = Object(m.c)(),
            N = Object(u.useRef)(),
            w = e || `input-${y}`,
            $ = `${w}-label`,
            S = `${w}-error`,
            M = i ? h : 'input';
          return Object(n.jsxs)('div', {
            className: s()('input', r, { 'input--error': !!l }),
            style: o,
            children: [
              Object(n.jsxs)('div', {
                className: 'input__content',
                children: [
                  Object(n.jsx)('label', {
                    className: s()('input__label', {
                      'input__label--focused': x,
                      'input__label--has-value': !!c,
                    }),
                    id: $,
                    htmlFor: w,
                    children: t,
                  }),
                  Object(n.jsx)(M, {
                    className: 'input__element',
                    id: w,
                    'aria-labelledby': $,
                    'aria-describedby': l ? S : void 0,
                    onFocus: () => v(!0),
                    onBlur: e => {
                      v(!1), g && g(e);
                    },
                    value: c,
                    ...f,
                  }),
                  Object(n.jsx)('div', {
                    className: s()('input__underline', {
                      'input__underline--focused': x,
                    }),
                  }),
                ],
              }),
              Object(n.jsx)(b.a, {
                component: null,
                children:
                  !!l &&
                  Object(n.jsx)(j.a, {
                    timeout: Object(_.b)(O.b.base.durationM),
                    children: e => {
                      var t;
                      return Object(n.jsx)('div', {
                        className: s()('input__error', `input__error--${e}`),
                        id: S,
                        role: 'alert',
                        style: {
                          '--height': Object(p.a)(e)
                            ? Object(_.d)(
                                null === (t = N.current) || void 0 === t
                                  ? void 0
                                  : t.getBoundingClientRect().height
                              )
                            : '0px',
                        },
                        children: Object(n.jsxs)('div', {
                          className: 'input__error-message',
                          ref: N,
                          children: [Object(n.jsx)(d.a, { icon: 'error' }), l],
                        }),
                      });
                    },
                  }),
              }),
            ],
          });
        },
        f = a(61),
        x = a(59),
        v = a(20),
        y = a(27);
      const N = O.b.base.durationS;
      function w(e, t = Object(_.c)(0), a = 1) {
        const n = Object(_.b)(e) * a;
        return { '--delay': Object(_.c)((Object(_.b)(t) + n).toFixed(0)) };
      }
      t.default = () => {
        const { status: e } = Object(m.j)(),
          t = Object(u.useRef)(),
          a = Object(m.b)(''),
          c = Object(m.b)(''),
          [h, $] = Object(u.useState)(!1),
          [S, M] = Object(u.useState)(!1),
          [H, R] = Object(u.useState)('');
        Object(m.k)();
        const k = Object(u.useCallback)(
          async e => {
            if ((e.preventDefault(), R(''), !h))
              try {
                $(!0);
                const e = await fetch('https://api.X.com/message', {
                    method: 'POST',
                    mode: 'cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: a.value, message: c.value }),
                  }),
                  t = await e.json(),
                  n = (function ({
                    status: e,
                    errorMessage: t,
                    fallback: a = 'There was a problem with your request',
                  }) {
                    return (
                      200 !== e &&
                      (t ||
                        {
                          500: 'There was a problem with the server, try again later',
                          404: 'There was a problem connecting to the server. Make sure you are connected to the internet',
                        }[e] ||
                        a)
                    );
                  })({
                    status: null === e || void 0 === e ? void 0 : e.status,
                    errorMessage: null === t || void 0 === t ? void 0 : t.error,
                    fallback: 'There was a problem sending your message',
                  });
                if (n) throw new Error(n);
                M(!0), $(!1);
              } catch (t) {
                $(!1), R(t.message);
              }
          },
          [a.value, c.value, h]
        );
        return Object(n.jsxs)(f.a, {
          className: s()('contact', `contact--${e}`),
          children: [
            Object(n.jsxs)(v.a, {
              children: [
                Object(n.jsx)('title', { children: 'Contact | Xavier W. Wang' }),
                Object(n.jsx)('meta', {
                  name: 'description',
                  content:
                    'Send me a message if you\u2019re interested in discussing a project or if you just want to say hi',
                }),
              ],
            }),
            Object(n.jsxs)(b.a, {
              component: null,
              children: [
                !S &&
                  Object(n.jsx)(j.a, {
                    appear: !0,
                    mountOnEnter: !0,
                    unmountOnExit: !0,
                    timeout: 1600,
                    onEnter: p.b,
                    children: e =>
                      Object(n.jsxs)('form', {
                        className: 'contact__form',
                        method: 'post',
                        onSubmit: k,
                        children: [
                          Object(n.jsx)(l.a, {
                            className: s()('contact__title', `contact__title--${e}`, {
                              'contact__title--hidden': y.a,
                            }),
                            level: 3,
                            as: 'h1',
                            style: w(O.b.base.durationXS, N, 0.3),
                            children: Object(n.jsx)(r.a, {
                              text: 'Say hello',
                              start: 'exited' !== e && !y.a,
                              delay: 300,
                            }),
                          }),
                          Object(n.jsx)(o.a, {
                            className: s()('contact__divider', `contact__divider--${e}`, {
                              'contact__divider--hidden': y.a,
                            }),
                            style: w(O.b.base.durationXS, N, 0.4),
                          }),
                          Object(n.jsx)(g, {
                            required: !0,
                            className: s()('contact__input', `contact__input--${e}`, {
                              'contact__input--hidden': y.a,
                            }),
                            style: w(O.b.base.durationXS, N),
                            autoComplete: 'email',
                            label: 'Your Email',
                            type: 'email',
                            maxLength: 512,
                            ...a,
                          }),
                          Object(n.jsx)(g, {
                            required: !0,
                            multiline: !0,
                            className: s()('contact__input', `contact__input--${e}`, {
                              'contact__input--hidden': y.a,
                            }),
                            style: w(O.b.base.durationS, N),
                            autoComplete: 'off',
                            label: 'Message',
                            maxLength: 4096,
                            ...c,
                          }),
                          Object(n.jsx)(b.a, {
                            component: null,
                            children:
                              !!H &&
                              Object(n.jsx)(j.a, {
                                timeout: Object(_.b)(O.b.base.durationM),
                                children: e => {
                                  var a;
                                  return Object(n.jsx)('div', {
                                    className: s()(
                                      'contact__form-error',
                                      `contact__form-error--${e}`
                                    ),
                                    style: {
                                      '--height': Object(p.a)(e)
                                        ? Object(_.d)(
                                            null === (a = t.current) || void 0 === a
                                              ? void 0
                                              : a.getBoundingClientRect().height
                                          )
                                        : '0px',
                                    },
                                    children: Object(n.jsx)('div', {
                                      className: 'contact__form-error-content',
                                      ref: t,
                                      children: Object(n.jsxs)('div', {
                                        className: 'contact__form-error-message',
                                        children: [
                                          Object(n.jsx)(d.a, {
                                            className: 'contact__form-error-icon',
                                            icon: 'error',
                                          }),
                                          H,
                                        ],
                                      }),
                                    }),
                                  });
                                },
                              }),
                          }),
                          Object(n.jsx)(i.a, {
                            className: s()('contact__button', `contact__button--${e}`, {
                              'contact__button--hidden': y.a,
                              'contact__button--sending': h,
                            }),
                            style: w(O.b.base.durationM, N),
                            disabled: h,
                            loading: h,
                            loadingText: 'Sending...',
                            icon: 'send',
                            type: 'submit',
                            children: 'Send Message',
                          }),
                        ],
                      }),
                  }),
                S &&
                  Object(n.jsx)(j.a, {
                    appear: !0,
                    mountOnEnter: !0,
                    unmountOnExit: !0,
                    onEnter: p.b,
                    timeout: 0,
                    children: e =>
                      Object(n.jsxs)('div', {
                        className: 'contact__complete',
                        'aria-live': 'polite',
                        children: [
                          Object(n.jsx)(l.a, {
                            level: 3,
                            as: 'h3',
                            className: s()(
                              'contact__complete-title',
                              `contact__complete-title--${e}`
                            ),
                            children: 'Message Sent',
                          }),
                          Object(n.jsx)(x.a, {
                            size: 'l',
                            className: s()(
                              'contact__complete-text',
                              `contact__complete-text--${e}`
                            ),
                            style: w(O.b.base.durationXS),
                            children:
                              'I\u2019ll get back to you within a couple days, sit tight',
                          }),
                          Object(n.jsx)(i.a, {
                            secondary: !0,
                            iconHoverShift: !0,
                            className: s()(
                              'contact__complete-button',
                              `contact__complete-button--${e}`
                            ),
                            style: w(O.b.base.durationM),
                            href: '/',
                            icon: 'chevronRight',
                            children: 'Back to homepage',
                          }),
                        ],
                      }),
                  }),
              ],
            }),
          ],
        });
      };
    },
    58: function (e, t, a) {
      'use strict';
      var n = a(1),
        c = a(0),
        s = a(4),
        i = a.n(s),
        r = a(20),
        o = a.p + 'static/media/gotham-bold.73ce573b.woff2';
      a(60);
      t.a = ({
        children: e,
        level: t = 1,
        as: a,
        align: s = 'auto',
        weight: l = 'medium',
        className: d,
        ...u
      }) => {
        const b = Math.min(Math.max(t, 0), 4),
          j = a || `h${Math.max(b, 1)}`;
        return Object(n.jsxs)(c.Fragment, {
          children: [
            'bold' === l &&
              Object(n.jsxs)(r.a, {
                children: [
                  Object(n.jsx)('link', {
                    rel: 'preload',
                    href: o,
                    as: 'font',
                    crossorigin: '',
                  }),
                  Object(n.jsx)('style', {
                    children: `\n              @font-face {\n                font-family: 'Gotham';\n                font-weight: 700;\n                src: url(${o}) format('woff2');\n                font-display: swap;\n              }\n            `,
                  }),
                ],
              }),
            Object(n.jsx)(j, {
              className: i()(
                d,
                'heading',
                `heading--align-${s}`,
                `heading--level-${b}`,
                `heading--weight-${l}`
              ),
              ...u,
              children: e,
            }),
          ],
        });
      };
    },
    59: function (e, t, a) {
      'use strict';
      var n = a(1),
        c = a(4),
        s = a.n(c);
      a(62);
      t.a = ({
        children: e,
        size: t = 'm',
        as: a = 'p',
        align: c = 'auto',
        weight: i = 'auto',
        secondary: r,
        className: o,
        ...l
      }) =>
        Object(n.jsx)(a, {
          className: s()(
            o,
            'text',
            `text--align-${c}`,
            `text--size-${t}`,
            `text--weight-${i}`,
            { 'text--secondary': r }
          ),
          ...l,
          children: e,
        });
    },
    60: function (e, t, a) {},
    61: function (e, t, a) {
      'use strict';
      var n = a(1),
        c = a(0),
        s = a(4),
        i = a.n(s);
      a(64);
      const r = Object(
        c.forwardRef
      )(({ as: e = 'div', children: t, className: a, ...c }, s) =>
        Object(n.jsx)(e, { className: i()('section', a), ref: s, ...c, children: t })
      );
      t.a = r;
    },
    62: function (e, t, a) {},
    64: function (e, t, a) {},
    75: function (e, t, a) {
      'use strict';
      var n = a(1),
        c = a(0),
        s = a(4),
        i = a.n(s),
        r = a(9),
        o = a(74),
        l = a(23),
        d = a(27);
      a(77);
      const u = [
          '\u30a2',
          '\u30a4',
          '\u30a6',
          '\u30a8',
          '\u30aa',
          '\u30ab',
          '\u30ad',
          '\u30af',
          '\u30b1',
          '\u30b3',
          '\u30b5',
          '\u30b7',
          '\u30b9',
          '\u30bb',
          '\u30bd',
          '\u30bf',
          '\u30c1',
          '\u30c4',
          '\u30c6',
          '\u30c8',
          '\u30ca',
          '\u30cb',
          '\u30cc',
          '\u30cd',
          '\u30ce',
          '\u30cf',
          '\u30d2',
          '\u30d5',
          '\u30d8',
          '\u30db',
          '\u30de',
          '\u30df',
          '\u30e0',
          '\u30e1',
          '\u30e2',
          '\u30e4',
          '\u30e6',
          '\u30e8',
          '\u30fc',
          '\u30e9',
          '\u30ea',
          '\u30eb',
          '\u30ec',
          '\u30ed',
          '\u30ef',
          '\u30f0',
          '\u30f1',
          '\u30f2',
          '\u30f3',
          '\u30ac',
          '\u30ae',
          '\u30b0',
          '\u30b2',
          '\u30b4',
          '\u30b6',
          '\u30b8',
          '\u30ba',
          '\u30bc',
          '\u30be',
          '\u30c0',
          '\u30c2',
          '\u30c5',
          '\u30c7',
          '\u30c9',
          '\u30d0',
          '\u30d3',
          '\u30d6',
          '\u30d9',
          '\u30dc',
          '\u30d1',
          '\u30d4',
          '\u30d7',
          '\u30da',
          '\u30dd',
        ],
        b = 'glyph',
        j = 'value';
      const h = ({ text: e, start: t = !0, delay: a = 0, className: s, ...h }) => {
        const m = Object(c.useRef)([{ type: b, value: '' }]),
          p = Object(c.useRef)(),
          O = Object(r.h)();
        return (
          Object(c.useEffect)(() => {
            const n = p.current,
              c = e.split('');
            let s;
            const i = () => {
                const e = m.current.map(
                  e => `<span class="decoder-text__${e.type}">${e.value}</span>`
                );
                n.innerHTML = e.join('');
              },
              r = Object(o.g)(0, e => {
                (m.current = (function (e, t, a) {
                  return e.map((e, n) => {
                    if (n < a) return { type: j, value: e };
                    if (a % 1 < 0.5) {
                      const e = Math.floor(Math.random() * u.length);
                      return { type: b, value: u[e] };
                    }
                    return { type: b, value: t[n].value };
                  });
                })(c, m.current, e)),
                  i();
              });
            return (
              !t ||
                s ||
                O ||
                d.a ||
                (s = Object(o.a)(
                  Object(o.b)(a),
                  Object(o.e)({ from: 0, to: c.length, stiffness: 8, damping: 5 })
                ).start(r)),
              O && ((m.current = c.map((e, t) => ({ type: j, value: c[t] }))), i()),
              () => {
                s && s.stop();
              }
            );
          }, [O, t, a, e]),
          Object(n.jsxs)('span', {
            className: i()('decoder-text', s),
            ...h,
            children: [
              Object(n.jsx)(l.a, { className: 'decoder-text__label', children: e }),
              Object(n.jsx)('span', {
                'aria-hidden': !0,
                className: 'decoder-text__content',
                ref: p,
              }),
            ],
          })
        );
      };
      t.a = Object(c.memo)(h);
    },
    77: function (e, t, a) {},
    78: function (e, t, a) {
      'use strict';
      var n = a(1),
        c = a(4),
        s = a.n(c),
        i = a(2);
      a(79);
      const r = ({
        lineWidth: e,
        lineHeight: t,
        collapseDelay: a,
        collapsed: c,
        className: r,
        style: o,
      }) =>
        Object(n.jsx)('div', {
          className: s()('divider', r),
          style: {
            '--lineWidth': e,
            '--lineHeight': t,
            '--collapseDelay': Object(i.c)(a),
            ...o,
          },
          children: Object(n.jsx)('div', {
            className: s()('divider__line', { 'divider__line--collapsed': c }),
          }),
        });
      (r.defaultProps = {
        lineWidth: '100%',
        lineHeight: '2px',
        collapsed: !1,
        collapseDelay: 0,
      }),
        (t.a = r);
    },
    79: function (e, t, a) {},
    92: function (e, t, a) {},
    93: function (e, t, a) {},
    94: function (e, t, a) {},
  },
]);
//# sourceMappingURL=11.ef9a4559.chunk.js.map
