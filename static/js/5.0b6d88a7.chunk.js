(this.webpackJsonpportfolio = this.webpackJsonpportfolio || []).push([
  [5],
  {
    109: function (e, t, r) {
      'use strict';
      r.r(t);
      var n = r(1),
        c = r(0),
        a = r(20),
        i = r(4),
        s = r.n(i),
        o = r(57),
        A = r(56),
        l = r(75),
        d = r(9),
        u = r(22),
        m = r(27),
        p = r(2);
      function j() {
        return (j =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      var b = c.createElement('path', {
        d: 'M1 1l20.5 12L42 1',
        strokeWidth: 2,
        fill: 'none',
      });
      function v({ title: e, titleId: t, ...r }, n) {
        return c.createElement(
          'svg',
          j(
            {
              stroke: 'currentColor',
              width: 43,
              height: 15,
              viewBox: '0 0 43 15',
              ref: n,
              'aria-labelledby': t,
            },
            r
          ),
          e ? c.createElement('title', { id: t }, e) : null,
          b
        );
      }
      const h = c.forwardRef(v);
      r.p;
      var f = r(10),
        g = r(58),
        x = r(61),
        w = r(28),
        O = r(23);
      r(87);
      const E = Object(c.lazy)(() => r.e(14).then(r.bind(null, 115)));
      var y = function ({
          id: e,
          sectionRef: t,
          disciplines: r,
          scrollIndicatorHidden: a,
          ...i
        }) {
          const j = Object(w.c)(),
            [b, v] = Object(c.useState)(0),
            y = Object(d.l)(),
            B = Object(d.i)(j),
            Q = [r.slice(0, -1).join(', '), r.slice(-1)[0]].join(', and '),
            D = r.filter((e, t) => t === b),
            I = `${e}-title`;
          return (
            Object(d.e)(
              () => {
                const e = (b + 1) % r.length;
                v(e);
              },
              5e3,
              j.themeId
            ),
            Object(c.useEffect)(() => {
              B && B.themeId !== j.themeId && v(0);
            }, [j.themeId, B]),
            Object(n.jsx)(x.a, {
              className: 'intro',
              as: 'section',
              ref: t,
              id: e,
              'aria-labelledby': I,
              tabIndex: -1,
              ...i,
              children: Object(n.jsx)(
                o.a,
                {
                  appear: !m.a,
                  in: !m.a,
                  timeout: 3e3,
                  onEnter: u.b,
                  children: e =>
                    Object(n.jsxs)(c.Fragment, {
                      children: [
                        !m.a &&
                          Object(n.jsx)(c.Suspense, {
                            fallback: null,
                            children: Object(n.jsx)(E, {}),
                          }),
                        Object(n.jsxs)('header', {
                          className: 'intro__text',
                          children: [
                            Object(n.jsx)('h1', {
                              className: s()('intro__name', `intro__name--${e}`),
                              id: I,
                              children: Object(n.jsx)(l.a, {
                                text: 'Xavier W. Wang',
                                start: !m.a,
                                delay: 300,
                              }),
                            }),
                            Object(n.jsxs)(g.a, {
                              level: 0,
                              as: 'h2',
                              className: 'intro__title',
                              children: [
                                Object(n.jsx)(O.a, {
                                  className: 'intro__title-label',
                                  children: `Designer + ${Q}`,
                                }),
                                Object(n.jsxs)('span', {
                                  'aria-hidden': !0,
                                  className: s()('intro__title-row', {
                                    'intro__title-row--hidden': m.a,
                                  }),
                                  children: [
                                    Object(n.jsx)('span', {
                                      className: s()(
                                        'intro__title-word',
                                        `intro__title-word--${e}`
                                      ),
                                      style: { '--delay': f.b.base.durationXS },
                                      children: 'Designer',
                                    }),
                                    Object(n.jsx)('span', {
                                      className: s()(
                                        'intro__title-line',
                                        `intro__title-line--${e}`
                                      ),
                                    }),
                                  ],
                                }),
                                Object(n.jsx)(A.a, {
                                  className: s()('intro__title-row', {
                                    'intro__title-row--hidden': m.a,
                                  }),
                                  component: 'span',
                                  children: D.map(e =>
                                    Object(n.jsx)(
                                      o.a,
                                      {
                                        appear: !0,
                                        timeout: { enter: 3e3, exit: 2e3 },
                                        onEnter: u.b,
                                        children: t =>
                                          Object(n.jsx)('span', {
                                            'aria-hidden': !0,
                                            className: s()(
                                              'intro__title-word',
                                              'intro__title-word--plus',
                                              `intro__title-word--${t}`
                                            ),
                                            style: { '--delay': f.b.base.durationL },
                                            children: e,
                                          }),
                                      },
                                      e
                                    )
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        y.width > p.a.tablet &&
                          Object(n.jsx)('div', {
                            className: s()(
                              'intro__scroll-indicator',
                              `intro__scroll-indicator--${e}`,
                              { 'intro__scroll-indicator--hidden': a }
                            ),
                            status: e,
                          }),
                        y.width <= p.a.tablet &&
                          Object(n.jsx)('div', {
                            className: s()(
                              'intro__mobile-scroll-indicator',
                              `intro__mobile-scroll-indicator--${e}`,
                              { 'intro__mobile-scroll-indicator--hidden': a }
                            ),
                            children: Object(n.jsx)(h, { 'aria-hidden': !0 }),
                          }),
                      ],
                    }),
                },
                j.themeId
              ),
            })
          );
        },
        B = r(21),
        Q = r(71),
        D = {
          uniforms: { tDiffuse: { value: null }, h: { value: 1 / 512 } },
          vertexShader:
            '\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvUv = uv;\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n\t\t}',
          fragmentShader:
            '\n\n\t\tuniform sampler2D tDiffuse;\n\t\tuniform float h;\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvec4 sum = vec4( 0.0 );\n\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;\n\n\t\t\tgl_FragColor = sum;\n\n\t\t}',
        };
      const I = {
        uniforms: { tDiffuse: { value: null }, v: { value: 1 / 512 } },
        vertexShader:
          '\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvUv = uv;\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n\t\t}',
        fragmentShader:
          '\n\n\t\tuniform sampler2D tDiffuse;\n\t\tuniform float v;\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvec4 sum = vec4( 0.0 );\n\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;\n\t\t\tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;\n\n\t\t\tgl_FragColor = sum;\n\n\t\t}',
      };
      var M = r(86),
        _ = r(74),
        R = r(65),
        N = r(76),
        U = r.p + 'static/media/iphone-11.dfa3acae.glb',
        C = r.p + 'static/media/macbook-pro.29527f3f.glb';
      const k = 'spring-up',
        S = 'laptop-open';
      var z = {
        phone: {
          url: U,
          width: 374,
          height: 512,
          position: { x: 0, y: 0, z: 0 },
          animation: k,
        },
        laptop: {
          url: C,
          width: 1280,
          height: 800,
          position: { x: 0, y: 0, z: 0 },
          animation: S,
        },
      };
      r(88);
      const T = 'Frame',
        F = 'Screen';
      var P = ({
          models: e,
          show: t = !0,
          showDelay: r = 0,
          cameraPosition: a = { x: 0, y: 0, z: 8 },
          enableControls: i,
          style: o,
          className: A,
          alt: l,
          ...u
        }) => {
          const [m, j] = Object(c.useState)(),
            [b, v] = Object(c.useState)(!1),
            h = Object(c.useRef)(),
            f = Object(c.useRef)(),
            g = Object(c.useRef)(),
            x = Object(c.useRef)(),
            w = Object(c.useRef)(),
            O = Object(c.useRef)(),
            E = Object(c.useRef)(),
            y = Object(c.useRef)(),
            B = Object(c.useRef)(),
            U = Object(c.useRef)(),
            C = Object(c.useRef)(),
            z = Object(c.useRef)(),
            P = Object(c.useRef)(),
            L = Object(c.useRef)(),
            H = Object(c.useRef)(),
            W = Object(c.useRef)(),
            J = Object(c.useRef)(),
            Y = Object(c.useRef)(),
            G = Object(c.useRef)(),
            V = Object(d.d)(h, !1, { threshold: 0.4 }),
            Z = Object(d.h)();
          Object(c.useEffect)(() => {
            const { clientWidth: t, clientHeight: n } = h.current;
            (y.current = new Q.Ob({
              canvas: f.current,
              alpha: !0,
              antialias: !1,
              powerPreference: 'high-performance',
            })),
              y.current.setPixelRatio(2),
              y.current.setSize(t, n),
              (y.current.outputEncoding = Q.Pb),
              (y.current.physicallyCorrectLights = !0),
              (g.current = new Q.fb(36, t / n, 0.1, 100)),
              g.current.position.set(a.x, a.y, a.z),
              (E.current = new Q.sb()),
              (x.current = new Q.Db()),
              (w.current = new M.a()),
              (O.current = new Q.u());
            const c = new Q.b(16777215, 1.2),
              i = new Q.o(16777215, 1.1),
              s = new Q.o(16777215, 0.8);
            s.position.set(-6, 2, 2),
              i.position.set(0.5, 0, 0.866),
              (J.current = [c, i, s]),
              J.current.forEach(e => E.current.add(e)),
              (B.current = new Q.u()),
              E.current.add(B.current),
              B.current.position.set(0, 0, -0.8),
              B.current.rotateX(Math.PI / 2);
            const o = 512;
            (U.current = new Q.Nb(o, o)),
              (U.current.texture.generateMipmaps = !1),
              (C.current = new Q.Nb(o, o)),
              (C.current.texture.generateMipmaps = !1);
            const A = new Q.gb(8, 8).rotateX(Math.PI / 2),
              l = new Q.S({ map: U.current.texture, opacity: 0.8, transparent: !0 });
            (W.current = new Q.R(A, l)),
              (W.current.scale.y = -1),
              B.current.add(W.current),
              (Y.current = new Q.R(A)),
              (Y.current.visible = !1),
              B.current.add(Y.current);
            const d = new Q.S({ color: 16777215, opacity: 0, transparent: !0 });
            (G.current = new Q.R(A, d)),
              G.current.rotateX(Math.PI),
              (G.current.position.y -= 1e-5),
              B.current.add(G.current),
              (z.current = new Q.db(-4, 4, 4, -4, 0, 1.5)),
              (z.current.rotation.x = Math.PI / 2),
              B.current.add(z.current),
              (P.current = new Q.T()),
              (P.current.userData.darkness = { value: 3 }),
              (P.current.onBeforeCompile = e => {
                (e.uniforms.darkness = P.current.userData.darkness),
                  (e.fragmentShader = `\n        uniform float darkness;\n        ${e.fragmentShader.replace(
                    'gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );',
                    'gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );'
                  )}\n      `);
              }),
              (P.current.depthTest = !1),
              (P.current.depthWrite = !1),
              (L.current = new Q.tb(D)),
              (L.current.depthTest = !1),
              (H.current = new Q.tb(I)),
              (H.current.depthTest = !1);
            const u = async (e, t) => {
                (e.encoding = Q.Pb),
                  (e.minFilter = Q.H),
                  (e.magFilter = Q.H),
                  (e.flipY = !1),
                  (e.anisotropy = y.current.capabilities.getMaxAnisotropy()),
                  (e.generateMipmaps = !1),
                  await y.current.initTexture(e),
                  (t.material.color = new Q.l(16777215)),
                  (t.material.transparent = !1),
                  (t.material.map = e);
              },
              m = e.map(async (e, t) => {
                const { texture: n, position: c, url: a } = e;
                let i;
                const [s, o] = await Promise.all([
                  await w.current.loadAsync(a),
                  await x.current.loadAsync(n.placeholder),
                ]);
                s.scene.traverse(async e => {
                  e.material &&
                    ((e.material.color = new Q.l(2039845)),
                    e.material.color.convertSRGBToLinear()),
                    e.name === F &&
                      (u(o, e),
                      (i = async () => {
                        const t = await Object(R.a)(n),
                          r = await x.current.loadAsync(t);
                        await u(r, e);
                      }));
                }),
                  O.current.add(s.scene);
                return {
                  ...(function ({
                    model: e,
                    gltf: t,
                    reduceMotion: r,
                    renderFrame: n,
                    index: c,
                    showDelay: a,
                  }) {
                    const i = new Q.Kb(e.position.x, e.position.y, e.position.z);
                    if (r) return void t.scene.position.set(...i.toArray());
                    if (e.animation === k) {
                      const e = new Q.Kb(i.x, i.y - 1, i.z),
                        r = i;
                      t.scene.position.set(...e.toArray());
                      const s = Object(_.g)(t.scene.position, ({ x: e, y: r, z: c }) => {
                        t.scene.position.set(e, r, c), n();
                      });
                      return {
                        animation: Object(_.a)(
                          Object(_.b)(300 * c + 0.6 * a),
                          Object(_.e)({
                            from: e,
                            to: r,
                            stiffness: 60,
                            damping: 16,
                            restSpeed: 0.001,
                          })
                        ),
                        modelValue: s,
                      };
                    }
                    if (e.animation === S) {
                      const e = t.scene.children.find(e => e.name === T),
                        r = new Q.Kb(Q.P.degToRad(90), 0, 0),
                        s = new Q.Kb(0, 0, 0);
                      t.scene.position.set(...i.toArray()),
                        e.rotation.set(...r.toArray());
                      const o = Object(_.g)(e.rotation, ({ x: t, y: r, z: c }) => {
                        e.rotation.set(t, r, c), n();
                      });
                      return {
                        animation: Object(_.a)(
                          Object(_.b)(300 * c + a + 200),
                          Object(_.e)({
                            from: r,
                            to: s,
                            stiffness: 50,
                            damping: 14,
                            restSpeed: 0.001,
                          })
                        ),
                        modelValue: o,
                      };
                    }
                  })({
                    model: e,
                    gltf: s,
                    position: c,
                    reduceMotion: Z,
                    renderFrame: $,
                    index: t,
                    showDelay: r,
                  }),
                  loadFullResTexture: i,
                };
              });
            return (
              j(m),
              () => {
                Object(N.c)(J.current), Object(N.b)(E.current), Object(N.a)(y.current);
              }
            );
          }, []);
          const X = Object(c.useCallback)(e => {
              (Y.current.visible = !0),
                (Y.current.material = L.current),
                (Y.current.material.uniforms.tDiffuse.value = U.current.texture),
                (L.current.uniforms.h.value = e * (1 / 256)),
                y.current.setRenderTarget(C.current),
                y.current.render(Y.current, z.current),
                (Y.current.material = H.current),
                (Y.current.material.uniforms.tDiffuse.value = C.current.texture),
                (H.current.uniforms.v.value = e * (1 / 256)),
                y.current.setRenderTarget(U.current),
                y.current.render(Y.current, z.current),
                (Y.current.visible = !1);
            }, []),
            $ = Object(c.useCallback)(() => {
              const e = E.current.background;
              (E.current.background = null),
                (E.current.overrideMaterial = P.current),
                y.current.setRenderTarget(U.current),
                y.current.render(E.current, z.current),
                (E.current.overrideMaterial = null),
                X(5),
                X(2),
                y.current.setRenderTarget(null),
                (E.current.background = e),
                y.current.render(E.current, g.current);
            }, [X]);
          return (
            Object(c.useEffect)(() => {
              let e = [];
              if (!m) return;
              E.current.add(O.current);
              return (
                t &&
                  (async () => {
                    const t = await Promise.all(m);
                    v(!0);
                    const r = t.map(async t => {
                      if (t.animation) {
                        const r = t.animation.start(t.modelValue);
                        e.push(r);
                      }
                      Z && $(), await t.loadFullResTexture(), Z && $();
                    });
                    await Promise.all(r);
                  })(),
                () => {
                  for (const t of e) t.stop();
                }
              );
            }, [m, Z, $, t]),
            Object(c.useEffect)(() => {
              let e, t;
              const r = r => {
                const { rotation: n } = O.current,
                  { innerWidth: c, innerHeight: a } = window,
                  i = (r.clientX - c / 2) / c,
                  s = (r.clientY - a / 2) / a;
                t ||
                  (t = Object(_.g)({ x: n.x, y: n.y }, ({ x: e, y: t }) => {
                    n.set(e, t, n.z), $();
                  })),
                  (e = Object(_.e)({
                    from: t.get(),
                    to: { x: s / 2, y: i / 2 },
                    stiffness: 40,
                    damping: 40,
                    velocity: t.getVelocity(),
                    restSpeed: 1e-5,
                    mass: 1.4,
                  }).start(t));
              };
              return (
                V && !Z && window.addEventListener('mousemove', r),
                () => {
                  var t;
                  window.removeEventListener('mousemove', r),
                    null === (t = e) || void 0 === t || t.stop();
                }
              );
            }, [V, Z, $]),
            Object(c.useEffect)(() => {
              const e = () => {
                if (!h.current) return;
                const { clientWidth: e, clientHeight: t } = h.current;
                y.current.setSize(e, t),
                  (g.current.aspect = e / t),
                  g.current.updateProjectionMatrix(),
                  $();
              };
              return (
                window.addEventListener('resize', e),
                e(),
                () => {
                  window.removeEventListener('resize', e);
                }
              );
            }, [$]),
            Object(n.jsx)('div', {
              className: s()('model', { 'model--loaded': b }, A),
              style: { '--delay': Object(p.c)(r), ...o },
              ref: h,
              role: 'img',
              'aria-label': l,
              ...u,
              children: Object(n.jsx)('canvas', { className: 'model__canvas', ref: f }),
            })
          );
        },
        L = r(78);
      function H() {
        return (H =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      var W = c.createElement('path', {
        d:
          'M113.904 33.552l-.288 1.152a18.13 18.13 0 0 1-.432 1.44l-.864 3.744c-11.808 46.224-36.864 75.312-82.656 95.76-4.752-9.648-8.784-15.12-18.144-24.192 38.304-11.952 64.224-37.44 72.432-70.992H23.76c-15.264.144-18.72.288-23.76.864v-25.92c5.472.864 9.504 1.152 24.192 1.152h73.44c.432-8.928 7.344-15.552 16.128-15.552 9.072 0 16.272 7.2 16.272 16.272s-7.056 16.128-16.128 16.272zm-.144-24.48c-4.464 0-8.208 3.744-8.208 8.208 0 4.32 3.744 8.064 8.208 8.064s8.208-3.744 8.208-8.064c0-4.464-3.744-8.208-8.208-8.208zm104.528 111.024h-61.776v9.936h-26.208c.864-7.92 1.152-12.816 1.152-23.472V32.544c0-6.192-.144-10.656-.576-16.56 5.04.432 7.92.576 17.424.576h77.616c8.928 0 11.088 0 17.856-.576-.288 5.04-.432 10.224-.432 16.992v73.008c0 11.088.288 18 1.008 23.76h-26.064v-9.648zm0-23.04V39.6h-61.776v57.456h61.776zm45.776-68.688L276.88 7.92c15.84 5.76 31.392 12.96 41.328 19.008L305.392 48.96C292 40.032 276.88 32.544 264.064 28.368zm73.008-16.992l14.256-4.752c5.04 6.624 9.36 14.688 12.672 22.896l-14.256 5.184c-3.888-9.504-7.488-16.272-12.672-23.328zm-84.24 52.416L266.08 43.2c15.408 6.048 28.944 12.816 40.176 20.448l-12.24 22.608c-10.368-8.064-26.496-16.848-41.184-22.464zM357.808 4.608L371.344 0c4.752 6.048 8.784 12.816 12.816 22.176l-13.824 5.04c-4.032-9.504-7.776-16.272-12.528-22.608zm-93.6 128.88l-7.2-27.36c12.672 0 30.96-3.888 44.352-9.216 26.928-10.656 45.936-31.824 56.16-62.928 6.912 7.776 13.536 13.392 21.168 18C360.4 97.2 327.712 121.968 274.432 131.04c-5.04 1.008-7.344 1.584-10.224 2.448zM449.952 64.8v42.912h22.464c9.216 0 13.68-.144 19.44-.864v21.888c-5.184-.432-9.216-.576-19.44-.576h-66.96c-10.512 0-12.672 0-19.584.576v-21.888c5.328.72 8.928.864 19.44.864h21.6V64.8h-13.248c-9.504 0-12.528.144-18.72.72V43.488c5.616.72 9.936 1.008 18.576 1.008h50.256c9.216 0 13.248-.288 18.864-1.008V65.52c-4.032-.432-9.936-.72-18.864-.72h-13.824zm97.472-62.064l27.216 4.896c-.72 1.296-1.008 1.728-1.728 3.6-.288.432-.576 1.296-1.008 2.16-.576 1.44-1.008 2.448-1.296 3.024-1.872 4.176-1.872 4.176-2.88 6.192l36.144-.432c5.616 0 7.2-.288 10.656-1.584L626.48 32.4c-1.728 2.88-2.16 3.744-4.176 10.224-7.344 23.904-17.136 42.624-29.808 57.024C579.392 114.624 563.12 126 539.504 136.8c-4.752-9.216-9.216-14.832-17.28-21.888 20.448-7.488 35.424-16.704 48.096-29.376 10.656-10.8 18.72-24.336 24.048-40.896l-38.304.432c-9.36 14.832-19.008 25.344-32.688 36.144-7.344-8.352-10.944-11.52-20.448-17.28 17.568-12.384 28.944-25.488 38.304-43.92 3.744-7.488 5.472-12.24 6.192-17.28zm137.936 130.32h-27.792c.576-6.48.864-10.656.864-22.032V27.216c0-11.664-.144-13.104-1.008-20.88h27.792c-.576 4.176-.72 11.376-.72 21.024v19.728c24.48 8.064 43.056 16.56 65.52 29.952l-13.68 24.48c-13.968-9.648-30.96-19.008-45.36-25.056-5.04-2.016-5.04-2.016-6.48-2.88v37.44c0 9.648.288 16.848.864 22.032z',
      });
      function J({ title: e, titleId: t, ...r }, n) {
        return c.createElement(
          'svg',
          H(
            {
              'aria-hidden': 'true',
              fill: 'currentColor',
              width: 750,
              height: 137,
              viewBox: '0 0 750 137',
              ref: n,
              'aria-labelledby': t,
            },
            r
          ),
          e ? c.createElement('title', { id: t }, e) : null,
          W
        );
      }
      const Y = c.forwardRef(J);
      r.p;
      var G = r(59);
      r(89);
      var V = ({
          id: e,
          visible: t,
          sectionRef: r,
          index: a,
          title: i,
          description: A,
          model: l,
          buttonText: m,
          buttonLink: j,
          alternate: b,
          ...v
        }) => {
          const h = Object(w.c)(),
            { width: f } = Object(d.l)(),
            O = `${e}-title`,
            E = f <= p.a.tablet,
            y = 'light' === h.themeId ? 0.7 : 1,
            Q = a < 10 ? `0${a}` : a,
            D = `(max-width: ${p.a.tablet}px) 30vw, 20vw`,
            I = `(max-width: ${p.a.tablet}px) 80vw, 40vw`,
            M = e =>
              Object(n.jsxs)('div', {
                className: 'project-summary__details',
                children: [
                  Object(n.jsxs)('div', {
                    'aria-hidden': !0,
                    className: 'project-summary__index',
                    children: [
                      Object(n.jsx)(L.a, {
                        notchWidth: '64px',
                        notchHeight: '8px',
                        collapsed: 'entered' !== e,
                        collapseDelay: 1e3,
                      }),
                      Object(n.jsx)('span', {
                        className: s()(
                          'project-summary__index-number',
                          `project-summary__index-number--${e}`
                        ),
                        children: Q,
                      }),
                    ],
                  }),
                  Object(n.jsx)(g.a, {
                    level: 3,
                    as: 'h2',
                    className: s()(
                      'project-summary__title',
                      `project-summary__title--${e}`
                    ),
                    id: O,
                    children: i,
                  }),
                  Object(n.jsx)(G.a, {
                    className: s()(
                      'project-summary__description',
                      `project-summary__description--${e}`
                    ),
                    children: A,
                  }),
                  Object(n.jsx)('div', {
                    className: s()(
                      'project-summary__button',
                      `project-summary__button--${e}`
                    ),
                    children: Object(n.jsx)(B.a, {
                      iconHoverShift: !0,
                      href: j,
                      iconEnd: 'arrowRight',
                      children: m,
                    }),
                  }),
                ],
              }),
            _ = e =>
              Object(n.jsxs)('div', {
                className: 'project-summary__preview',
                children: [
                  'laptop' === l.type &&
                    Object(n.jsxs)(c.Fragment, {
                      children: [
                        Object(n.jsx)(Y, {
                          style: { '--opacity': y },
                          className: s()(
                            'project-summary__svg',
                            'project-summary__svg--laptop',
                            `project-summary__svg--${e}`,
                            { 'project-summary__svg--light': 'light' === h.themeId }
                          ),
                        }),
                        Object(n.jsx)(P, {
                          className: s()(
                            'project-summary__model',
                            'project-summary__model--laptop'
                          ),
                          alt: l.alt,
                          cameraPosition: { x: 0, y: 0, z: 8 },
                          showDelay: 800,
                          show: Object(u.a)(e),
                          models: [
                            { ...z.laptop, texture: { ...l.textures[0], sizes: I } },
                          ],
                        }),
                      ],
                    }),
                  'phone' === l.type &&
                    Object(n.jsxs)(c.Fragment, {
                      children: [
                        Object(n.jsx)(Y, {
                          style: { '--opacity': y },
                          className: s()(
                            'project-summary__svg',
                            'project-summary__svg--phone',
                            `project-summary__svg--${e}`,
                            { 'project-summary__svg--light': 'light' === h.themeId }
                          ),
                        }),
                        Object(n.jsx)(P, {
                          className: s()(
                            'project-summary__model',
                            'project-summary__model--phone'
                          ),
                          alt: l.alt,
                          cameraPosition: { x: 0, y: 0, z: 11.5 },
                          showDelay: 500,
                          show: Object(u.a)(e),
                          models: [
                            {
                              ...z.phone,
                              position: { x: -0.6, y: 1.1, z: 0 },
                              texture: { ...l.textures[0], sizes: D },
                            },
                            {
                              ...z.phone,
                              position: { x: 0.6, y: -0.5, z: 0.3 },
                              texture: { ...l.textures[1], sizes: D },
                            },
                          ],
                        }),
                      ],
                    }),
                ],
              });
          return Object(n.jsx)(x.a, {
            className: s()('project-summary', {
              'project-summary--alternate': b,
              'project-summary--first': '01' === a,
            }),
            as: 'section',
            'aria-labelledby': O,
            ref: r,
            id: e,
            tabIndex: -1,
            ...v,
            children: Object(n.jsx)('div', {
              className: 'project-summary__content',
              children: Object(n.jsx)(o.a, {
                in: t,
                timeout: 0,
                onEnter: u.b,
                children: e =>
                  Object(n.jsxs)(c.Fragment, {
                    children: [
                      !b && !E && Object(n.jsxs)(c.Fragment, { children: [M(e), _(e)] }),
                      (b || E) && Object(n.jsxs)(c.Fragment, { children: [_(e), M(e)] }),
                    ],
                  }),
              }),
            }),
          });
        },
        Z = r(66),
        X = r(63),
        $ = r.p + 'static/media/profile.60bbb126.jpg',
        K = r.p + 'static/media/profile-large.b2ca24f7.jpg';
      function q() {
        return (q =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      var ee = c.createElement('path', {
        d:
          'M32.544 651.088l1.152.288c.576.144 1.008.288 1.44.432l3.744.864c46.224 11.808 75.312 36.864 95.76 82.656-9.648 4.752-15.12 8.784-24.192 18.144-11.952-38.304-37.44-64.224-70.992-72.432v60.192c.144 15.264.288 18.72.864 23.76H14.4c.864-5.472 1.152-9.504 1.152-24.192v-73.44C6.624 666.928 0 660.016 0 651.232c0-9.072 7.2-16.272 16.272-16.272s16.128 7.056 16.272 16.128zm-24.48.144c0 4.464 3.744 8.208 8.208 8.208 4.32 0 8.064-3.744 8.064-8.208s-3.744-8.208-8.064-8.208c-4.464 0-8.208 3.744-8.208 8.208zm111.024-104.528v61.776h9.936v26.208c-7.92-.864-12.816-1.152-23.472-1.152H31.536c-6.192 0-10.656.144-16.56.576.432-5.04.576-7.92.576-17.424v-77.616c0-8.928 0-11.088-.576-17.856 5.04.288 10.224.432 16.992.432h73.008c11.088 0 18-.288 23.76-1.008v26.064h-9.648zm-23.04 0H38.592v61.776h57.456v-61.776zM12.96 403.44l12.528-12.96c2.448 1.584 3.168 1.872 8.064 3.024 26.784 6.48 44.784 15.12 61.2 28.944 15.984 13.392 27.504 29.52 39.168 54.864-10.944 5.616-14.832 8.64-24.192 18.144-6.768-20.736-15.552-35.856-28.224-48.528-12.24-12.096-25.344-19.44-42.624-23.904v59.76c0 13.968.144 16.56.864 24.192H13.68c1.008-6.192 1.152-10.512 1.152-24.624v-68.4c0-4.752-.432-7.344-1.872-10.512zm13.968-106.112l13.824-20.16c1.584 1.872 1.584 1.872 5.04 5.04 8.64 7.776 16.272 16.56 23.472 26.64h44.352c9.36 0 14.688-.144 19.872-.864v25.632c-5.616-.72-9.36-1.008-19.872-1.008H83.52c7.344 12.24 9.36 16.848 16.992 37.584-7.92 3.168-13.392 6.48-20.448 12.24-6.192-22.176-15.12-41.328-27.36-58.32-8.784-12.24-18.432-22.32-25.776-26.784zm55.584-35.264H54.72c1.008-6.768 1.296-14.544 1.296-29.52v-68.832c0-14.4-.288-19.872-1.296-29.52h27.792c-.72 6.912-.864 13.248-.864 29.664V232.4c0 16.128.144 20.88.864 29.664zM8.352 113.76l1.584-27.216c4.896.576 4.896.576 33.408 1.584 30.096.864 46.08 3.744 61.776 10.656 10.656 4.752 18.432 10.224 28.8 20.016-9.648 7.344-13.68 11.376-20.16 20.592-7.344-8.208-13.392-12.672-22.896-17.136-14.112-6.768-31.968-9.072-69.264-9.072-6.336 0-9.504.144-13.248.576zm-.72-40.896V45.792c5.904.864 8.208 1.008 16.704 1.152l75.456.72c-4.896-7.776-9.072-12.384-15.84-17.28-7.344-5.184-14.832-8.64-24.624-11.232C68.256 11.952 72 8.208 78.336 0c16.128 6.48 27.216 13.968 36.576 24.912 7.344 8.64 11.088 15.696 16.416 30.24 1.44 4.032 1.872 5.184 3.024 7.056l-12.96 12.384c-3.744-1.296-6.192-1.584-12.096-1.584l-85.248-.72h-5.184c-4.608 0-7.776.144-11.232.576z',
      });
      function te({ title: e, titleId: t, ...r }, n) {
        return c.createElement(
          'svg',
          q(
            {
              'aria-hidden': 'true',
              fill: 'currentColor',
              width: 135,
              height: 765,
              viewBox: '0 0 135 765',
              ref: n,
              'aria-labelledby': t,
            },
            r
          ),
          e ? c.createElement('title', { id: t }, e) : null,
          ee
        );
      }
      const re = c.forwardRef(te);
      r.p, r(90);
      const ne = ({ status: e, titleId: t }) =>
        Object(n.jsxs)(c.Fragment, {
          children: [
            Object(n.jsx)(g.a, {
              className: s()('profile__title', `profile__title--${e}`),
              level: 3,
              id: t,
              children: Object(n.jsx)(l.a, {
                text: 'Hi there',
                start: 'exited' !== e,
                delay: 500,
              }),
            }),
            Object(n.jsxs)(G.a, {
              className: s()('profile__description', `profile__description--${e}`),
              size: 'l',
              children: [
                "I\u2019m Xavier, currently, I live in Halifax working as an Interdisciplinary designer. My projects include UX design, Graphic design, and Design consult. Being comfortable with code allows me to rapidly prototype and validate experiences. If you're interested in the tools and software I use check out my",
                ' ',
                Object(n.jsx)(Z.a, { href: '/uses', children: 'uses page' }),
                '.',
              ],
            }),
            Object(n.jsx)(G.a, {
              className: s()('profile__description', `profile__description--${e}`),
              size: 'l',
              children:
                'I\u2019m always down for hearing about new projects, so feel free to drop me a line.',
            }),
          ],
        });
      var ce = ({ id: e, visible: t, sectionRef: r }) => {
          const c = `${e}-title`;
          return Object(n.jsx)(x.a, {
            className: 'profile',
            as: 'section',
            id: e,
            ref: r,
            'aria-labelledby': c,
            tabIndex: -1,
            children: Object(n.jsx)(o.a, {
              in: t,
              timeout: 0,
              onEnter: u.b,
              children: e =>
                Object(n.jsxs)('div', {
                  className: 'profile__content',
                  children: [
                    Object(n.jsxs)('div', {
                      className: 'profile__column',
                      children: [
                        Object(n.jsx)(ne, { status: e, titleId: c }),
                        Object(n.jsx)(B.a, {
                          secondary: !0,
                          className: s()('profile__button', `profile__button--${e}`),
                          href: '/contact',
                          icon: 'send',
                          children: 'Send me a message',
                        }),
                      ],
                    }),
                    Object(n.jsxs)('div', {
                      className: 'profile__column',
                      children: [
                        Object(n.jsxs)('div', {
                          className: 'profile__tag',
                          'aria-hidden': !0,
                          children: [
                            Object(n.jsx)(L.a, {
                              notchWidth: '64px',
                              notchHeight: '8px',
                              collapsed: 'entered' !== e,
                              collapseDelay: 1e3,
                            }),
                            Object(n.jsx)('div', {
                              className: s()(
                                'profile__tag-text',
                                `profile__tag-text--${e}`
                              ),
                              children: 'About Me',
                            }),
                          ],
                        }),
                        Object(n.jsxs)('div', {
                          className: 'profile__image-wrapper',
                          children: [
                            Object(n.jsx)(X.a, {
                              reveal: !0,
                              delay: 100,
                              placeholder:
                                'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBggGBQkIBwgKCQkKDRYODQwMDRoTFBAWHxwhIB8cHh4jJzIqIyUvJR4eKzssLzM1ODg4ISo9QTw2QTI3ODX/2wBDAQkKCg0LDRkODhk1JB4kNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTX/wgARCAAOAAwDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAXAQADAQAAAAAAAAAAAAAAAAABAgQD/9oADAMBAAIQAxAAAACm+aiJ0VCWX//EAB0QAAICAQUAAAAAAAAAAAAAAAIDAAQVBQYxUmL/2gAIAQEAAT8Aqbqe0iWUzTe0XpIjYMhLmYz3P//EABkRAAMAAwAAAAAAAAAAAAAAAAABAgMTIf/aAAgBAgEBPwB0yHw3MWc//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECERP/2gAIAQMBAT8AikSqzIxP/9k=',
                              srcSet: `${$} 480w, ${K} 960w`,
                              sizes: `(max-width: ${p.a.mobile}px) 100vw, 480px`,
                              alt:
                                'Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan',
                            }),
                            Object(n.jsx)(re, {
                              className: s()('profile__svg', `profile__svg--${e}`),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
            }),
          });
        },
        ae = r(69),
        ie = r(5),
        se = r(80),
        oe = r(81),
        Ae = r(82),
        le = r.p + 'static/media/gamestack-login.a1efedd0.jpg',
        de = r.p + 'static/media/gamestack-login-large.44020927.jpg',
        ue = r.p + 'static/media/gamestack-list.8f1de0b0.jpg',
        me = r.p + 'static/media/gamestack-list-large.89dd2fc9.jpg',
        pe = r(83),
        je = r(84),
        be = r(85);
      r(91);
      const ve = ['Developer', 'Prototyper', 'Painter', 'Illustrator', 'Modder'];
      t.default = () => {
        const { status: e } = Object(d.j)(),
          { hash: t, state: r } = Object(ie.f)(),
          i = Object(c.useRef)(!0),
          [s, o] = Object(c.useState)([]),
          [A, l] = Object(c.useState)(!1),
          u = Object(c.useRef)(),
          m = Object(c.useRef)(),
          p = Object(c.useRef)(),
          j = Object(c.useRef)(),
          b = Object(c.useRef)(),
          v = Object(d.h)();
        return (
          Object(c.useEffect)(() => {
            const e = [u, m, p, j, b],
              t = new IntersectionObserver(
                (e, t) => {
                  e.forEach(e => {
                    if (e.isIntersecting) {
                      const r = e.target;
                      if ((t.unobserve(r), s.includes(r))) return;
                      o(e => [...e, r]);
                    }
                  });
                },
                { rootMargin: '0px 0px -10% 0px' }
              ),
              r = new IntersectionObserver(
                ([e]) => {
                  l(!e.isIntersecting);
                },
                { rootMargin: '-100% 0px 0px 0px' }
              );
            return (
              e.forEach(e => {
                t.observe(e.current);
              }),
              r.observe(u.current),
              () => {
                t.disconnect(), r.disconnect();
              }
            );
          }, [s]),
          Object(c.useEffect)(() => {
            const r = 'entered' === e,
              n = 'scrollBehavior' in document.documentElement.style;
            let c, a;
            const s = (e, t) => {
              clearTimeout(a);
              const r = [u, m, b],
                i = e.replace('#', ''),
                s = r.filter(e => e.current.id === i)[0];
              if (!s) return;
              const o = t && !v ? 'smooth' : 'instant',
                A = s.current.offsetTop;
              (c = new IntersectionObserver(
                (e, t) => {
                  const [r] = e;
                  r.isIntersecting &&
                    ((a = setTimeout(
                      () => {
                        s.current.focus();
                      },
                      v ? 0 : 400
                    )),
                    t.unobserve(r.target));
                },
                { rootMargin: '-20% 0px -20% 0px' }
              )),
                c.observe(s.current),
                n
                  ? window.scroll({ top: A, left: 0, behavior: o })
                  : window.scrollTo(0, A);
            };
            return (
              t && i.current && r
                ? (s(t, !1), (i.current = !1))
                : !t && i.current && r
                ? (window.scrollTo(0, 0), (i.current = !1))
                : r && s(t, !0),
              () => {
                clearTimeout(a), c && c.disconnect();
              }
            );
          }, [t, r, v, e]),
          Object(n.jsxs)('div', {
            className: 'home',
            children: [
              Object(n.jsxs)(a.a, {
                children: [
                  Object(n.jsx)('title', {
                    children: 'Xavier W. Wang | Designer + Developer',
                  }),
                  Object(n.jsx)('meta', {
                    name: 'description',
                    content:
                      'Portfolio of Xavier W. Wang \u2013 a digital designer working on web & mobile apps with a focus on motion and user experience design.',
                  }),
                  Object(n.jsx)('link', {
                    rel: 'prefetch',
                    href: U,
                    as: 'fetch',
                    crossorigin: '',
                  }),
                  Object(n.jsx)('link', {
                    rel: 'prefetch',
                    href: C,
                    as: 'fetch',
                    crossorigin: '',
                  }),
                ],
              }),
              Object(n.jsx)(y, {
                id: 'intro',
                sectionRef: u,
                disciplines: ve,
                scrollIndicatorHidden: A,
              }),
              Object(n.jsx)(V, {
                id: 'project-1',
                sectionRef: m,
                visible: s.includes(m.current),
                index: 1,
                title: 'Designing the future of education',
                description:
                  'Designing a platform to bridge front-end designers and developers ',
                buttonText: 'View Project',
                buttonLink: '/projects/X',
                model: {
                  type: 'laptop',
                  alt: 'Glimpse',
                  textures: [
                    {
                      src: oe.a,
                      srcSet: `${oe.a} 800w, ${Ae.a} 1440w`,
                      placeholder: se.a,
                    },
                  ],
                },
              }),
              Object(n.jsx)(V, {
                id: 'project-2 genre-2',
                alternate: !0,
                sectionRef: p,
                visible: s.includes(p.current),
                index: 2,
                title: 'project-2 genre-2',
                description: 'Design and development -',
                buttonText: 'View ',
                buttonLink: 'https://',
                model: {
                  type: 'phone',
                  alt: 'XXX',
                  textures: [
                    {
                      src: le,
                      srcSet: `${le} 254w, ${de} 508w`,
                      placeholder:
                        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIAEUAIAMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAADBAACBQEH/9oACAEBAAAAAPAGGkwlsuTolmWA57UCI9Kd1NCIKPRNIsF//8QAGAEBAAMBAAAAAAAAAAAAAAAAAQACBQT/2gAIAQIQAAAA7RrDVmQ//8QAFwEAAwEAAAAAAAAAAAAAAAAAAAIEAf/aAAgBAxAAAACVlc2IuP/EABwQAAIDAQEBAQAAAAAAAAAAAAABAgMRBFExMv/aAAgBAQABPwD6VpITWHThFCeCsLp6hNYfSexJy0iRxItzCYp4O4lafoxscJeDrl4KDRz1xklpHmrZLmrL64R+FVziR6X6S6H6W3aRbQpsc2Ntn//EAB4RAAICAgIDAAAAAAAAAAAAAAECAAMEEhBRESFB/9oACAECAQE/AITFK/YxHn1NG6mjdSvMoRADWJZmUMhAr5//xAAcEQACAQUBAAAAAAAAAAAAAAAAAQIDBBESURD/2gAIAQMBAT8AEsGGJPBsumy6Tt6kpNqZC3qKSbn7/9k=',
                    },
                    {
                      src: ue,
                      srcSet: `${ue} 254w, ${me} 508w`,
                      placeholder:
                        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIAEUAIAMBIgACEQEDEQH/xAAcAAACAgIDAAAAAAAAAAAAAAAEBgMFAQcAAgj/2gAIAQEAAAAA84zyZiNzyYqtEYpKEBu7rwLOSvAbDPSKbaxiDRt0tOB//8QAFwEBAQEBAAAAAAAAAAAAAAAAAwABAv/aAAgBAhAAAABLlWLZc//EABgBAQEAAwAAAAAAAAAAAAAAAAMEAAEC/9oACAEDEAAAANZVJ0YLM3//xAAfEAACAgMBAAMBAAAAAAAAAAAAAQIDBBESIQUTMSL/2gAIAQEAAT8Arjs+sVSZKkpg2Ks1ocloxqU0vCdajEtemx2GJD+S9aiX/rGYeuTJ1yXr1kjD60XxlyZC02SPjcHpLwy8BRg/DOq5kySPjLIRgjOvhKBnrqUidZjZE4rwuybJRLm5fpOKP//EABoRAQEAAwEBAAAAAAAAAAAAAAEAAhAhETH/2gAIAQIBAT8AWJxRg5Jimu3kfNf/xAAcEQACAgIDAAAAAAAAAAAAAAAAAQIhEBESEzH/2gAIAQMBAT8AUcRlDgSdlJDO2xPY1YvD/9k=',
                    },
                  ],
                },
              }),
              Object(n.jsx)(V, {
                id: 'project-3 genre-3',
                sectionRef: j,
                visible: s.includes(j.current),
                index: 3,
                title: 'project-3 genre-3',
                description: 'I',
                buttonText: 'View Project',
                buttonLink: '/projects/X',
                model: {
                  type: 'laptop',
                  alt: 'Annotating a biomedical',
                  textures: [
                    {
                      src: pe.a,
                      srcSet: `${pe.a} 980w, ${je.a} 1376w`,
                      placeholder: be.a,
                    },
                  ],
                },
              }),
              Object(n.jsx)(ce, {
                sectionRef: b,
                visible: s.includes(b.current),
                id: 'details',
              }),
              Object(n.jsx)(ae.a, {}),
            ],
          })
        );
      };
    },
    58: function (e, t, r) {
      'use strict';
      var n = r(1),
        c = r(0),
        a = r(4),
        i = r.n(a),
        s = r(20),
        o = r.p + 'static/media/gotham-bold.73ce573b.woff2';
      r(60);
      t.a = ({
        children: e,
        level: t = 1,
        as: r,
        align: a = 'auto',
        weight: A = 'medium',
        className: l,
        ...d
      }) => {
        const u = Math.min(Math.max(t, 0), 4),
          m = r || `h${Math.max(u, 1)}`;
        return Object(n.jsxs)(c.Fragment, {
          children: [
            'bold' === A &&
              Object(n.jsxs)(s.a, {
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
            Object(n.jsx)(m, {
              className: i()(
                l,
                'heading',
                `heading--align-${a}`,
                `heading--level-${u}`,
                `heading--weight-${A}`
              ),
              ...d,
              children: e,
            }),
          ],
        });
      };
    },
    59: function (e, t, r) {
      'use strict';
      var n = r(1),
        c = r(4),
        a = r.n(c);
      r(62);
      t.a = ({
        children: e,
        size: t = 'm',
        as: r = 'p',
        align: c = 'auto',
        weight: i = 'auto',
        secondary: s,
        className: o,
        ...A
      }) =>
        Object(n.jsx)(r, {
          className: a()(
            o,
            'text',
            `text--align-${c}`,
            `text--size-${t}`,
            `text--weight-${i}`,
            { 'text--secondary': s }
          ),
          ...A,
          children: e,
        });
    },
    60: function (e, t, r) {},
    61: function (e, t, r) {
      'use strict';
      var n = r(1),
        c = r(0),
        a = r(4),
        i = r.n(a);
      r(64);
      const s = Object(
        c.forwardRef
      )(({ as: e = 'div', children: t, className: r, ...c }, a) =>
        Object(n.jsx)(e, { className: i()('section', r), ref: a, ...c, children: t })
      );
      t.a = s;
    },
    62: function (e, t, r) {},
    63: function (e, t, r) {
      'use strict';
      var n = r(1),
        c = r(0),
        a = r(4),
        i = r.n(a),
        s = r(9),
        o = r(21),
        A = r(14),
        l = r(57),
        d = r(22),
        u = r(27),
        m = r(10),
        p = r(2),
        j = r(65),
        b = r(28),
        v = r(23);
      r(68);
      const h = ({
        onLoad: e,
        loaded: t,
        inViewport: r,
        srcSet: a,
        placeholder: b,
        delay: h,
        src: f,
        alt: g,
        play: x = !0,
        reveal: w,
        ...O
      }) => {
        const E = Object(s.h)(),
          [y, B] = Object(c.useState)(!0),
          [Q, D] = Object(c.useState)(!E),
          [I, M] = Object(c.useState)(!1),
          [_, R] = Object(c.useState)(!1),
          [N, U] = Object(c.useState)(!1),
          [C, k] = Object(c.useState)(),
          [S, z] = Object(c.useState)(),
          T = Object(c.useRef)(),
          F = Object(c.useRef)(),
          P = null === f || void 0 === f ? void 0 : f.endsWith('.mp4'),
          L = f || (null === a || void 0 === a ? void 0 : a.split(' ')[0]),
          H = !u.a && r;
        Object(c.useEffect)(() => {
          const e = () => {
              B(!1);
            },
            t = T.current;
          return (
            t.addEventListener('transitionend', e),
            function () {
              t && t.removeEventListener('transitionend', e);
            }
          );
        }, []),
          Object(c.useEffect)(() => {
            P && a
              ? (async () => {
                  const e = await Object(j.b)(a);
                  z(e);
                })()
              : P && z(f);
          }, [P, f, a]),
          Object(c.useEffect)(() => {
            const { width: e, height: t } = T.current;
            e && t && k({ width: e, height: t });
          }, []),
          Object(c.useEffect)(() => {
            F.current &&
              S &&
              (x && r
                ? !r || E || u.a || (D(!0), F.current.play())
                : (D(!1), F.current.pause()));
          }, [r, x, E, S]);
        const W = e => {
            e.preventDefault(),
              F.current.paused ? (D(!0), F.current.play()) : (D(!1), F.current.pause());
          },
          J = () => {
            M(!0), U(!0);
          };
        return Object(n.jsxs)('div', {
          className: i()('image__element-wrapper', {
            'image__element-wrapper--reveal': w,
            'image__element-wrapper--in-viewport': r,
          }),
          onMouseOver: P
            ? () => {
                M(!0), R(!0);
              }
            : void 0,
          onMouseOut: P ? () => R(!1) : void 0,
          style: { '--delay': Object(p.c)(h + 1e3) },
          children: [
            P &&
              Object(n.jsxs)(c.Fragment, {
                children: [
                  Object(n.jsx)('video', {
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    className: i()('image__element', { 'image__element--loaded': t }),
                    autoPlay: !E,
                    role: 'img',
                    onLoadStart: e,
                    src: S,
                    'aria-label': g,
                    ref: F,
                    ...O,
                  }),
                  Object(n.jsx)(l.a, {
                    in: _ || N,
                    onExit: d.b,
                    onExited: () => M(!1),
                    timeout: { enter: 0, exit: Object(p.b)(m.b.base.durationS) },
                    children: e =>
                      Object(n.jsx)(v.a, {
                        visible: I,
                        children: Object(n.jsxs)(o.a, {
                          className: i()('image__button', `image__button--${e}`),
                          onFocus: J,
                          onBlur: () => U(!1),
                          onClick: W,
                          children: [
                            Object(n.jsx)(A.a, { icon: Q ? 'pause' : 'play' }),
                            Q ? 'Pause' : 'Play',
                          ],
                        }),
                      }),
                  }),
                ],
              }),
            !P &&
              Object(n.jsx)('img', {
                className: i()('image__element', { 'image__element--loaded': t }),
                onLoad: e,
                decoding: 'async',
                src: H ? L : void 0,
                srcSet: H ? a : void 0,
                width: null === C || void 0 === C ? void 0 : C.width,
                height: null === C || void 0 === C ? void 0 : C.height,
                alt: g,
                ...O,
              }),
            y &&
              Object(n.jsx)('img', {
                'aria-hidden': !0,
                className: i()('image__placeholder', { 'image__placeholder--loaded': t }),
                style: { '--delay': Object(p.c)(h) },
                ref: T,
                src: b,
                onLoad: e => {
                  const { width: t, height: r } = e.target;
                  k({ width: t, height: r });
                },
                width: null === C || void 0 === C ? void 0 : C.width,
                height: null === C || void 0 === C ? void 0 : C.height,
                decoding: 'async',
                alt: '',
                role: 'presentation',
              }),
          ],
        });
      };
      t.a = ({
        className: e,
        style: t,
        reveal: r,
        delay: a = 0,
        raised: o,
        src: A,
        ...l
      }) => {
        const [d, u] = Object(c.useState)(!1),
          { themeId: m } = Object(b.c)(),
          j = Object(c.useRef)(),
          v = Object(s.d)(j, !(null === A || void 0 === A ? void 0 : A.endsWith('.mp4'))),
          f = Object(c.useCallback)(() => {
            u(!0);
          }, []);
        return Object(n.jsx)('div', {
          className: i()('image', e, `image--${m}`, {
            'image--in-viewport': v,
            'image--reveal': r,
            'image--raised': o,
          }),
          style: { ...t, '--delay': Object(p.c)(a) },
          ref: j,
          children: Object(n.jsx)(h, {
            delay: a,
            onLoad: f,
            loaded: d,
            inViewport: v,
            reveal: r,
            src: A,
            ...l,
          }),
        });
      };
    },
    64: function (e, t, r) {},
    65: function (e, t, r) {
      'use strict';
      async function n({ src: e, srcSet: t, sizes: r }) {
        return new Promise((n, c) => {
          try {
            if (!e && !t) throw new Error('No image src or srcSet provided');
            const c = new Image();
            e && (c.src = e), t && (c.srcset = t), r && (c.sizes = r);
            const a = () => {
              c.removeEventListener('load', a);
              const e = c.currentSrc;
              n(e);
            };
            c.addEventListener('load', a);
          } catch (a) {
            c(`Error loading ${t}: ${a}`);
          }
        });
      }
      async function c(e) {
        const t = e.split(', ').map(e => {
            const [t, r] = e.split(' ');
            return {
              src: t,
              image: (function (e = 1, t = 1) {
                const r = document.createElement('canvas'),
                  n = r.getContext('2d');
                (r.width = e),
                  (r.height = t),
                  (n.fillStyle = 'rgba(0, 0, 0, 0)'),
                  n.fillRect(0, 0, e, t);
                const c = r.toDataURL('image/png', '');
                return r.remove(), c;
              })(Number(r.replace('w', ''))),
              width: r,
            };
          }),
          r = t.map(({ image: e, width: t }) => `${e} ${t}`).join(', '),
          c = await n({ srcSet: r });
        return t.find(e => e.image === c).src;
      }
      r.d(t, 'a', function () {
        return n;
      }),
        r.d(t, 'b', function () {
          return c;
        });
    },
    66: function (e, t, r) {
      'use strict';
      var n = r(1),
        c = r(15),
        a = r(4),
        i = r.n(a),
        s = r(16);
      r(67);
      const o = ['txt', 'png', 'jpg'];
      t.a = ({
        rel: e,
        target: t,
        children: r,
        secondary: a,
        className: A,
        href: l,
        as: d,
        ...u
      }) => {
        const m = o.includes(null === l || void 0 === l ? void 0 : l.split('.').pop()),
          p =
            (null === l || void 0 === l ? void 0 : l.includes('://')) ||
            '#' === (null === l || void 0 === l ? void 0 : l[0]) ||
            m,
          j = e || (p ? 'noreferrer noopener' : void 0),
          b = t || (p ? '_blank' : void 0),
          v = d || (p ? 'a' : c.b);
        return Object(n.jsx)(v, {
          className: i()('link', A, { 'link--secondary': a }),
          rel: j,
          href: p ? l : void 0,
          to: p ? void 0 : l,
          target: b,
          onMouseUp: s.a,
          ...u,
          children: r,
        });
      };
    },
    67: function (e, t, r) {},
    68: function (e, t, r) {},
    69: function (e, t, r) {
      'use strict';
      var n = r(1),
        c = r(66);
      r(70);
      t.a = () =>
        Object(n.jsxs)('footer', {
          className: 'footer',
          children: [
            Object(n.jsx)('span', {
              className: 'footer__date',
              children: `\xa9 ${new Date().getFullYear()} Xavier W. Wang.`,
            }),
            Object(n.jsx)(c.a, {
              secondary: !0,
              className: 'footer__link',
              href: '/humans.txt',
              target: '_self',
              children: 'By yours truly',
            }),
          ],
        });
    },
    70: function (e, t, r) {},
    75: function (e, t, r) {
      'use strict';
      var n = r(1),
        c = r(0),
        a = r(4),
        i = r.n(a),
        s = r(9),
        o = r(74),
        A = r(23),
        l = r(27);
      r(77);
      const d = [
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
        u = 'glyph',
        m = 'value';
      const p = ({ text: e, start: t = !0, delay: r = 0, className: a, ...p }) => {
        const j = Object(c.useRef)([{ type: u, value: '' }]),
          b = Object(c.useRef)(),
          v = Object(s.h)();
        return (
          Object(c.useEffect)(() => {
            const n = b.current,
              c = e.split('');
            let a;
            const i = () => {
                const e = j.current.map(
                  e => `<span class="decoder-text__${e.type}">${e.value}</span>`
                );
                n.innerHTML = e.join('');
              },
              s = Object(o.g)(0, e => {
                (j.current = (function (e, t, r) {
                  return e.map((e, n) => {
                    if (n < r) return { type: m, value: e };
                    if (r % 1 < 0.5) {
                      const e = Math.floor(Math.random() * d.length);
                      return { type: u, value: d[e] };
                    }
                    return { type: u, value: t[n].value };
                  });
                })(c, j.current, e)),
                  i();
              });
            return (
              !t ||
                a ||
                v ||
                l.a ||
                (a = Object(o.a)(
                  Object(o.b)(r),
                  Object(o.e)({ from: 0, to: c.length, stiffness: 8, damping: 5 })
                ).start(s)),
              v && ((j.current = c.map((e, t) => ({ type: m, value: c[t] }))), i()),
              () => {
                a && a.stop();
              }
            );
          }, [v, t, r, e]),
          Object(n.jsxs)('span', {
            className: i()('decoder-text', a),
            ...p,
            children: [
              Object(n.jsx)(A.a, { className: 'decoder-text__label', children: e }),
              Object(n.jsx)('span', {
                'aria-hidden': !0,
                className: 'decoder-text__content',
                ref: b,
              }),
            ],
          })
        );
      };
      t.a = Object(c.memo)(p);
    },
    76: function (e, t, r) {
      'use strict';
      r.d(t, 'b', function () {
        return n;
      }),
        r.d(t, 'a', function () {
          return a;
        }),
        r.d(t, 'c', function () {
          return i;
        });
      const n = e => {
          e.traverse(e => {
            if (e.isMesh)
              if ((e.geometry.dispose(), e.material.isMaterial)) c(e.material);
              else for (const t of e.material) c(t);
          });
        },
        c = e => {
          e.dispose();
          for (const t of Object.keys(e)) {
            const r = e[t];
            r && 'object' === typeof r && 'minFilter' in r && r.dispose();
          }
        },
        a = e => {
          e.dispose(), e.forceContextLoss(), (e = null);
        },
        i = e => {
          for (const t of e) t.parent.remove(t);
        };
    },
    77: function (e, t, r) {},
    78: function (e, t, r) {
      'use strict';
      var n = r(1),
        c = r(4),
        a = r.n(c),
        i = r(2);
      r(79);
      const s = ({
        lineWidth: e,
        lineHeight: t,
        collapseDelay: r,
        collapsed: c,
        className: s,
        style: o,
      }) =>
        Object(n.jsx)('div', {
          className: a()('divider', s),
          style: {
            '--lineWidth': e,
            '--lineHeight': t,
            '--collapseDelay': Object(i.c)(r),
            ...o,
          },
          children: Object(n.jsx)('div', {
            className: a()('divider__line', { 'divider__line--collapsed': c }),
          }),
        });
      (s.defaultProps = {
        lineWidth: '100%',
        lineHeight: '2px',
        collapsed: !1,
        collapseDelay: 0,
      }),
        (t.a = s);
    },
    79: function (e, t, r) {},
    80: function (e, t, r) {
      'use strict';
      t.a =
        'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMZaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMzRkJBRkI2MTBENDExRUI5MDI3QUExN0VBMDVFMzM0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMzRkJBRkI1MTBENDExRUI5MDI3QUExN0VBMDVFMzM0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI5NjZGQjZDNjFBREQ4NkEyMUY4QUI3NURCM0MzNjdDMyIgc3RSZWY6ZG9jdW1lbnRJRD0iOTY2RkI2QzYxQUREODZBMjFGOEFCNzVEQjNDMzY3QzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgIDAwMDAwMDAwMDAQEBAQEBAQIBAQICAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wAARCAAUACADAREAAhEBAxEB/8QBogAAAAYCAwEAAAAAAAAAAAAABwgGBQQJAwoCAQALAQAABgMBAQEAAAAAAAAAAAAGBQQDBwIIAQkACgsQAAIBAwQBAwMCAwMDAgYJdQECAwQRBRIGIQcTIgAIMRRBMiMVCVFCFmEkMxdScYEYYpElQ6Gx8CY0cgoZwdE1J+FTNoLxkqJEVHNFRjdHYyhVVlcassLS4vJkg3SThGWjs8PT4yk4ZvN1Kjk6SElKWFlaZ2hpanZ3eHl6hYaHiImKlJWWl5iZmqSlpqeoqaq0tba3uLm6xMXGx8jJytTV1tfY2drk5ebn6Onq9PX29/j5+hEAAgEDAgQEAwUEBAQGBgVtAQIDEQQhEgUxBgAiE0FRBzJhFHEIQoEjkRVSoWIWMwmxJMHRQ3LwF+GCNCWSUxhjRPGisiY1GVQ2RWQnCnODk0Z0wtLi8lVldVY3hIWjs8PT4/MpGpSktMTU5PSVpbXF1eX1KEdXZjh2hpamtsbW5vZnd4eXp7fH1+f3SFhoeIiYqLjI2Oj4OUlZaXmJmam5ydnp+So6SlpqeoqaqrrK2ur6/9oADAMBAAIRAxEAPwDVxr67OZnHvkZ5HaVkZ2Ykk/Q/m/uQdwupbgmZzVugRb2sdnF4cQooHQF5aTcPhmlhmlLgsRbV/j7CD7jKshBOOiWfcpILijfAD0HNPnt1/dmEzT6lYG2o/wBbf09uncW04PR5azpdxa4z5dLdN3bi/ZpJqidQQAfVwSR/j/gPZTJvF1CSynoi3K6uraJnPwA9GhhmifbxdCFUxNxZfpY+xzPRlPQlc6IyT6dB9WbgwGNwkglkp2qn1rpbTqv/AIj6/X2F7uyTT4oI1dRxuVzLc3bRqp0jz6B7HmPJZOSoiiVUa5BAFrar/kj2TBWqQD0qtN4j2yMrKfy6YNy5OGjr1jsWkR7WVRf/AHgn3R7Z5u0Do0nnTdbImI9pHRv6X7P+60lvr4H03t/Q29yFN/Z46E9x/ZHohe/P4z/FpPD5ftvK2m2rT+r/AG309hxq511p0R2f0VH8SnidPGL/AIt/DYPB/ndPNtWq3+w9k7afFOnh0Eb36P61tf8AZ16k7Z/hn95Kf+9Or7fyjyf1tf8Ax9i3lv8Ad31Q+v8A7Pz6XTeP+7T+7+NMdf/Z';
    },
    81: function (e, t, r) {
      'use strict';
      t.a = r.p + 'static/media/spr-lesson-builder-dark.4c66acc3.jpg';
    },
    82: function (e, t, r) {
      'use strict';
      t.a = r.p + 'static/media/spr-lesson-builder-dark-large.c92ecacb.jpg';
    },
    83: function (e, t, r) {
      'use strict';
      t.a = r.p + 'static/media/slice-app.091155c4.jpg';
    },
    84: function (e, t, r) {
      'use strict';
      t.a = r.p + 'static/media/slice-app-large.a6491733.jpg';
    },
    85: function (e, t, r) {
      'use strict';
      t.a =
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIACgAQAMBIgACEQEDEQH/xAAcAAADAQACAwAAAAAAAAAAAAAFBgcEAAMBAgj/2gAIAQEAAAAAjRqhuHBeLxDmu2U7Mhq+j56ZK9RMKSA1Qw3Q3DEA6NEaOPh4aJ7Pf//EABkBAAIDAQAAAAAAAAAAAAAAAAMEAAECBf/aAAgBAhAAAADUKVZpm+W+0H//xAAXAQEAAwAAAAAAAAAAAAAAAAAEAQMF/9oACAEDEAAAAIm28qUMwtNbf//EACIQAAICAQQDAAMAAAAAAAAAAAECAAMEBRESIQYiMRUyQv/aAAgBAQABPwBDvMGgWMJpeii4L6ynxhWUeks8ZVR+ku0ZK9/WHAQH5PxqN/MqbuaQQXWePKhCTGrq4D5M0VKpmpWopaPkjlKbwdpWZplvF1mg5wUJ3KNUAQe0zdU3B9pn5nMnuNaS0ot2iGYLEMJpWQyhe5VmsE+zKzid+5dklie4LN4lm0T7MBd2E09SAs5ELMmw9xnO8Ro1nET/xAAaEQEAAwEBAQAAAAAAAAAAAAAAAQIDERMx/9oACAECAQE/AHFKdeKFM4lXPiYV+skNH//EABwRAAIDAAMBAAAAAAAAAAAAAAABAgMREhMxMv/aAAgBAwEBPwAwhDkdJFaxVaiqrBVaQ+kVeEEimK0//9k=';
    },
    87: function (e, t, r) {},
    88: function (e, t, r) {},
    89: function (e, t, r) {},
    90: function (e, t, r) {},
    91: function (e, t, r) {},
  },
]);
//# sourceMappingURL=5.0b6d88a7.chunk.js.map
