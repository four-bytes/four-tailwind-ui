import { defineComponent as L, useId as q, computed as w, openBlock as o, createElementBlock as n, normalizeClass as g, unref as d, createTextVNode as T, toDisplayString as C, createCommentVNode as b, createElementVNode as s, useSlots as fe, renderSlot as M, ref as D, watch as be, Fragment as A, renderList as E, onMounted as Y, onBeforeUnmount as e1, withModifiers as Ae, createVNode as W, Transition as ne, withCtx as z, createBlock as Z, resolveDynamicComponent as G, resolveComponent as Ee, h as O, readonly as t1, Teleport as Ge, TransitionGroup as r1, nextTick as o1, onUnmounted as he, inject as qe, provide as Pe, normalizeProps as pe, guardReactiveProps as ye, createSlots as s1, normalizeStyle as Q, withDirectives as l1, vModelText as a1, withKeys as n1 } from "vue";
import { useRoute as Fe } from "vue-router";
function Oe(e) {
  var t, r, l = "";
  if (typeof e == "string" || typeof e == "number") l += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (r = Oe(e[t])) && (l && (l += " "), l += r);
  } else for (r in e) e[r] && (l && (l += " "), l += r);
  return l;
}
function i1() {
  for (var e, t, r = 0, l = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = Oe(e)) && (l && (l += " "), l += t);
  return l;
}
const $e = "-", d1 = (e) => {
  const t = u1(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: l
  } = e;
  return {
    getClassGroupId: (u) => {
      const c = u.split($e);
      return c[0] === "" && c.length !== 1 && c.shift(), Re(c, t) || c1(u);
    },
    getConflictingClassGroupIds: (u, c) => {
      const f = r[u] || [];
      return c && l[u] ? [...f, ...l[u]] : f;
    }
  };
}, Re = (e, t) => {
  var u;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], l = t.nextPart.get(r), a = l ? Re(e.slice(1), l) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const i = e.join($e);
  return (u = t.validators.find(({
    validator: c
  }) => c(i))) == null ? void 0 : u.classGroupId;
}, Se = /^\[(.+)\]$/, c1 = (e) => {
  if (Se.test(e)) {
    const t = Se.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, u1 = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, l = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return f1(Object.entries(e.classGroups), r).forEach(([i, u]) => {
    we(u, l, i, t);
  }), l;
}, we = (e, t, r, l) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const i = a === "" ? t : Ie(t, a);
      i.classGroupId = r;
      return;
    }
    if (typeof a == "function") {
      if (g1(a)) {
        we(a(l), t, r, l);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: r
      });
      return;
    }
    Object.entries(a).forEach(([i, u]) => {
      we(u, Ie(t, i), r, l);
    });
  });
}, Ie = (e, t) => {
  let r = e;
  return t.split($e).forEach((l) => {
    r.nextPart.has(l) || r.nextPart.set(l, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(l);
  }), r;
}, g1 = (e) => e.isThemeGetter, f1 = (e, t) => t ? e.map(([r, l]) => {
  const a = l.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([u, c]) => [t + u, c])) : i);
  return [r, a];
}) : e, b1 = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
  const a = (i, u) => {
    r.set(i, u), t++, t > e && (t = 0, l = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let u = r.get(i);
      if (u !== void 0)
        return u;
      if ((u = l.get(i)) !== void 0)
        return a(i, u), u;
    },
    set(i, u) {
      r.has(i) ? r.set(i, u) : a(i, u);
    }
  };
}, Ne = "!", h1 = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, l = t.length === 1, a = t[0], i = t.length, u = (c) => {
    const f = [];
    let h = 0, x = 0, v;
    for (let H = 0; H < c.length; H++) {
      let B = c[H];
      if (h === 0) {
        if (B === a && (l || c.slice(H, H + i) === t)) {
          f.push(c.slice(x, H)), x = H + i;
          continue;
        }
        if (B === "/") {
          v = H;
          continue;
        }
      }
      B === "[" ? h++ : B === "]" && h--;
    }
    const p = f.length === 0 ? c : c.substring(x), y = p.startsWith(Ne), V = y ? p.substring(1) : p, S = v && v > x ? v - x : void 0;
    return {
      modifiers: f,
      hasImportantModifier: y,
      baseClassName: V,
      maybePostfixModifierPosition: S
    };
  };
  return r ? (c) => r({
    className: c,
    parseClassName: u
  }) : u;
}, m1 = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((l) => {
    l[0] === "[" ? (t.push(...r.sort(), l), r = []) : r.push(l);
  }), t.push(...r.sort()), t;
}, C1 = (e) => ({
  cache: b1(e.cacheSize),
  parseClassName: h1(e),
  ...d1(e)
}), x1 = /\s+/, v1 = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: l,
    getConflictingClassGroupIds: a
  } = t, i = [], u = e.trim().split(x1);
  let c = "";
  for (let f = u.length - 1; f >= 0; f -= 1) {
    const h = u[f], {
      modifiers: x,
      hasImportantModifier: v,
      baseClassName: p,
      maybePostfixModifierPosition: y
    } = r(h);
    let V = !!y, S = l(V ? p.substring(0, y) : p);
    if (!S) {
      if (!V) {
        c = h + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (S = l(p), !S) {
        c = h + (c.length > 0 ? " " + c : c);
        continue;
      }
      V = !1;
    }
    const H = m1(x).join(":"), B = v ? H + Ne : H, j = B + S;
    if (i.includes(j))
      continue;
    i.push(j);
    const oe = a(S, V);
    for (let U = 0; U < oe.length; ++U) {
      const de = oe[U];
      i.push(B + de);
    }
    c = h + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function p1() {
  let e = 0, t, r, l = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = We(t)) && (l && (l += " "), l += r);
  return l;
}
const We = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let l = 0; l < e.length; l++)
    e[l] && (t = We(e[l])) && (r && (r += " "), r += t);
  return r;
};
function y1(e, ...t) {
  let r, l, a, i = u;
  function u(f) {
    const h = t.reduce((x, v) => v(x), e());
    return r = C1(h), l = r.cache.get, a = r.cache.set, i = c, c(f);
  }
  function c(f) {
    const h = l(f);
    if (h)
      return h;
    const x = v1(f, r);
    return a(f, x), x;
  }
  return function() {
    return i(p1.apply(null, arguments));
  };
}
const _ = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Ue = /^\[(?:([a-z-]+):)?(.+)\]$/i, k1 = /^\d+\/\d+$/, w1 = /* @__PURE__ */ new Set(["px", "full", "screen"]), $1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, V1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, L1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, M1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, H1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, F = (e) => J(e) || w1.has(e) || k1.test(e), R = (e) => ee(e, "length", T1), J = (e) => !!e && !Number.isNaN(Number(e)), ke = (e) => ee(e, "number", J), le = (e) => !!e && Number.isInteger(Number(e)), B1 = (e) => e.endsWith("%") && J(e.slice(0, -1)), $ = (e) => Ue.test(e), N = (e) => $1.test(e), _1 = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Z1 = (e) => ee(e, _1, Ke), S1 = (e) => ee(e, "position", Ke), I1 = /* @__PURE__ */ new Set(["image", "url"]), z1 = (e) => ee(e, I1, A1), D1 = (e) => ee(e, "", j1), ae = () => !0, ee = (e, t, r) => {
  const l = Ue.exec(e);
  return l ? l[1] ? typeof t == "string" ? l[1] === t : t.has(l[1]) : r(l[2]) : !1;
}, T1 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  V1.test(e) && !L1.test(e)
), Ke = () => !1, j1 = (e) => M1.test(e), A1 = (e) => H1.test(e), E1 = () => {
  const e = _("colors"), t = _("spacing"), r = _("blur"), l = _("brightness"), a = _("borderColor"), i = _("borderRadius"), u = _("borderSpacing"), c = _("borderWidth"), f = _("contrast"), h = _("grayscale"), x = _("hueRotate"), v = _("invert"), p = _("gap"), y = _("gradientColorStops"), V = _("gradientColorStopPositions"), S = _("inset"), H = _("margin"), B = _("opacity"), j = _("padding"), oe = _("saturate"), U = _("scale"), de = _("sepia"), Ve = _("skew"), Le = _("space"), Me = _("translate"), me = () => ["auto", "contain", "none"], Ce = () => ["auto", "hidden", "clip", "visible", "scroll"], xe = () => ["auto", $, t], I = () => [$, t], He = () => ["", F, R], ce = () => ["auto", J, $], Be = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ue = () => ["solid", "dashed", "dotted", "double", "none"], _e = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ve = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], se = () => ["", "0", $], Ze = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], P = () => [J, $];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ae],
      spacing: [F, R],
      blur: ["none", "", N, $],
      brightness: P(),
      borderColor: [e],
      borderRadius: ["none", "", "full", N, $],
      borderSpacing: I(),
      borderWidth: He(),
      contrast: P(),
      grayscale: se(),
      hueRotate: P(),
      invert: se(),
      gap: I(),
      gradientColorStops: [e],
      gradientColorStopPositions: [B1, R],
      inset: xe(),
      margin: xe(),
      opacity: P(),
      padding: I(),
      saturate: P(),
      scale: P(),
      sepia: se(),
      skew: P(),
      space: I(),
      translate: I()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", $]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [N]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Ze()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Ze()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...Be(), $]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Ce()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Ce()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Ce()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: me()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": me()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": me()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [S]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [S]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [S]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [S]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [S]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [S]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [S]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [S]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [S]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", le, $]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: xe()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", $]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: se()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: se()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", le, $]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ae]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", le, $]
        }, $]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ce()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ce()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ae]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [le, $]
        }, $]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ce()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ce()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", $]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", $]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [p]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [p]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [p]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...ve()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ve(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...ve(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [j]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [j]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [j]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [j]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [j]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [j]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [j]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [j]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [j]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [H]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [H]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [H]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [H]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [H]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [H]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [H]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [H]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [H]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [Le]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [Le]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", $, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [$, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [$, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [N]
        }, N]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [$, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [$, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [$, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [$, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", N, R]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ke]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ae]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", $]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", J, ke]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", F, $]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", $]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", $]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [B]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [B]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...ue(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", F, R]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", F, $]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: I()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", $]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", $]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [B]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...Be(), S1]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Z1]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, z1]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [V]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [V]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [V]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [y]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [y]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [y]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [c]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [c]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [c]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [c]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [c]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [c]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [c]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [c]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [c]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [B]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ue(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [c]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [c]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [B]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: ue()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [a]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [a]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [a]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [a]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [a]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [a]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [a]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [a]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [a]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [a]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...ue()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [F, $]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [F, R]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: He()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [B]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [F, R]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", N, D1]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ae]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [B]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [..._e(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": _e()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [l]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [f]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", N, $]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [h]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [x]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [v]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [oe]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [de]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [l]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [f]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [h]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [x]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [v]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [B]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [oe]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [de]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [u]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [u]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [u]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", $]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: P()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", $]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: P()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", $]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [U]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [U]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [U]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [le, $]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [Me]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [Me]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [Ve]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [Ve]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", $]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", $]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": I()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": I()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": I()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": I()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": I()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": I()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": I()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": I()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": I()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": I()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": I()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": I()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": I()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": I()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": I()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": I()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": I()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": I()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", $]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [F, R, ke]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, G1 = /* @__PURE__ */ y1(E1);
function m(...e) {
  return G1(i1(e));
}
const q1 = ["for"], P1 = {
  key: 0,
  class: "text-error-500"
}, F1 = { class: "relative" }, O1 = ["id", "aria-describedby", "aria-invalid", "type", "value", "placeholder", "required", "disabled"], R1 = {
  key: 0,
  class: "absolute right-3.5 top-1/2 -translate-y-1/2 text-error-500"
}, N1 = {
  key: 1,
  class: "absolute right-3.5 top-1/2 -translate-y-1/2 text-success-500"
}, W1 = ["id"], U1 = ["id"], K1 = ["id"], Nl = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "InputField",
  props: {
    modelValue: {},
    type: { default: "text" },
    label: {},
    placeholder: {},
    required: { type: Boolean },
    disabled: { type: Boolean },
    error: {},
    success: {},
    hint: {},
    showStateIcon: { type: Boolean, default: !0 },
    size: { default: "md" },
    class: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = q(), l = q(), a = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-2.5 text-sm",
      lg: "px-5 py-3 text-base"
    }, i = w(() => a[t.size]), u = w(() => t.error ? "border-error-300 focus:border-error-300 focus:ring-error-500/10 dark:border-error-700 dark:focus:border-error-800" : t.success ? "border-success-300 focus:border-success-300 focus:ring-success-500/10 dark:border-success-700 dark:focus:border-success-800" : "border-gray-300 focus:border-brand-300 focus:ring-brand-500/10 dark:border-gray-700 dark:focus:border-brand-800");
    return (c, f) => (o(), n("div", {
      class: g(d(m)(t.class))
    }, [
      e.label ? (o(), n("label", {
        key: 0,
        for: d(r),
        class: g(["mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400", d(m)(e.disabled && "text-gray-300 dark:text-white/15")])
      }, [
        T(C(e.label) + " ", 1),
        e.required ? (o(), n("span", P1, "*")) : b("", !0)
      ], 10, q1)) : b("", !0),
      s("div", F1, [
        s("input", {
          id: d(r),
          "aria-describedby": e.error || e.success || e.hint ? d(l) : void 0,
          "aria-invalid": e.error ? "true" : void 0,
          type: e.type,
          value: e.modelValue,
          onInput: f[0] || (f[0] = (h) => c.$emit("update:modelValue", h.target.value)),
          placeholder: e.placeholder,
          required: e.required,
          disabled: e.disabled,
          class: g(
            d(m)(
              "w-full rounded-lg border bg-white text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30",
              i.value,
              u.value,
              e.showStateIcon && (e.error || e.success) && "pr-10",
              e.disabled && "disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400 dark:disabled:border-gray-800 dark:disabled:bg-white/[0.03] dark:disabled:text-gray-500"
            )
          )
        }, null, 42, O1),
        e.showStateIcon && e.error ? (o(), n("span", R1, [...f[1] || (f[1] = [
          s("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            s("path", {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M2.58325 7.99967C2.58325 5.00813 5.00838 2.58301 7.99992 2.58301C10.9915 2.58301 13.4166 5.00813 13.4166 7.99967C13.4166 10.9912 10.9915 13.4163 7.99992 13.4163C5.00838 13.4163 2.58325 10.9912 2.58325 7.99967ZM7.99992 1.08301C4.17995 1.08301 1.08325 4.17971 1.08325 7.99967C1.08325 11.8196 4.17995 14.9163 7.99992 14.9163C11.8199 14.9163 14.9166 11.8196 14.9166 7.99967C14.9166 4.17971 11.8199 1.08301 7.99992 1.08301ZM7.09932 5.01639C7.09932 5.51345 7.50227 5.91639 7.99932 5.91639H7.99999C8.49705 5.91639 8.89999 5.51345 8.89999 5.01639C8.89999 4.51933 8.49705 4.11639 7.99999 4.11639H7.99932C7.50227 4.11639 7.09932 4.51933 7.09932 5.01639ZM7.99998 11.8306C7.58576 11.8306 7.24998 11.4948 7.24998 11.0806V7.29627C7.24998 6.88206 7.58576 6.54627 7.99998 6.54627C8.41419 6.54627 8.74998 6.88206 8.74998 7.29627V11.0806C8.74998 11.4948 8.41419 11.8306 7.99998 11.8306Z",
              fill: "currentColor"
            })
          ], -1)
        ])])) : b("", !0),
        e.showStateIcon && e.success && !e.error ? (o(), n("span", N1, [...f[2] || (f[2] = [
          s("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            s("path", {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M2.61792 8.00034C2.61792 5.02784 5.0276 2.61816 8.00009 2.61816C10.9726 2.61816 13.3823 5.02784 13.3823 8.00034C13.3823 10.9728 10.9726 13.3825 8.00009 13.3825C5.0276 13.3825 2.61792 10.9728 2.61792 8.00034ZM8.00009 1.11816C4.19917 1.11816 1.11792 4.19942 1.11792 8.00034C1.11792 11.8013 4.19917 14.8825 8.00009 14.8825C11.801 14.8825 14.8823 11.8013 14.8823 8.00034C14.8823 4.19942 11.801 1.11816 8.00009 1.11816ZM10.5192 7.266C10.8121 6.97311 10.8121 6.49823 10.5192 6.20534C10.2264 5.91245 9.75148 5.91245 9.45858 6.20534L7.45958 8.20434L6.54162 7.28638C6.24873 6.99349 5.77385 6.99349 5.48096 7.28638C5.18807 7.57927 5.18807 8.05415 5.48096 8.34704L6.92925 9.79533C7.0699 9.93599 7.26067 10.015 7.45958 10.015C7.6585 10.015 7.84926 9.93599 7.98991 9.79533L10.5192 7.266Z",
              fill: "currentColor"
            })
          ], -1)
        ])])) : b("", !0)
      ]),
      e.error ? (o(), n("p", {
        key: 1,
        id: d(l),
        class: "mt-1.5 text-xs text-error-500"
      }, C(e.error), 9, W1)) : e.success ? (o(), n("p", {
        key: 2,
        id: d(l),
        class: "mt-1.5 text-xs text-success-500"
      }, C(e.success), 9, U1)) : e.hint ? (o(), n("p", {
        key: 3,
        id: d(l),
        class: "mt-1.5 text-xs text-gray-500"
      }, C(e.hint), 9, K1)) : b("", !0)
    ], 2));
  }
}), J1 = ["for"], X1 = {
  key: 0,
  class: "text-error-500"
}, Q1 = { class: "flex" }, Y1 = {
  key: 0,
  class: "inline-flex items-center rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
}, et = ["id", "type", "value", "placeholder", "required", "disabled"], tt = {
  key: 1,
  class: "inline-flex items-center rounded-r-lg border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
}, rt = {
  key: 1,
  class: "mt-1.5 text-xs text-error-500"
}, Wl = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "InputGroup",
  props: {
    modelValue: {},
    type: { default: "text" },
    label: {},
    placeholder: {},
    required: { type: Boolean },
    disabled: { type: Boolean },
    error: {},
    prefix: {},
    suffix: {},
    class: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = fe(), l = q(), a = w(() => {
      const i = !!t.prefix || !!r.prefix, u = !!t.suffix || !!r.suffix;
      return i && u ? "rounded-none" : i ? "rounded-l-none rounded-r-lg" : u ? "rounded-l-lg rounded-r-none" : "rounded-lg";
    });
    return (i, u) => (o(), n("div", {
      class: g(d(m)(t.class))
    }, [
      e.label ? (o(), n("label", {
        key: 0,
        for: d(l),
        class: g(["mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400", d(m)(e.disabled && "text-gray-300 dark:text-white/15")])
      }, [
        T(C(e.label) + " ", 1),
        e.required ? (o(), n("span", X1, "*")) : b("", !0)
      ], 10, J1)) : b("", !0),
      s("div", Q1, [
        i.$slots.prefix || e.prefix ? (o(), n("span", Y1, [
          M(i.$slots, "prefix", {}, () => [
            T(C(e.prefix), 1)
          ])
        ])) : b("", !0),
        s("input", {
          id: d(l),
          type: e.type,
          value: e.modelValue,
          onInput: u[0] || (u[0] = (c) => i.$emit("update:modelValue", c.target.value)),
          placeholder: e.placeholder,
          required: e.required,
          disabled: e.disabled,
          class: g(
            d(m)(
              "h-11 w-full border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800",
              a.value,
              e.error ? "border-error-300 focus:border-error-300 focus:ring-error-500/10 dark:border-error-700 dark:focus:border-error-800" : "",
              e.disabled && "disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400 dark:disabled:border-gray-800 dark:disabled:bg-white/[0.03] dark:disabled:text-gray-500"
            )
          )
        }, null, 42, et),
        i.$slots.suffix || e.suffix ? (o(), n("span", tt, [
          M(i.$slots, "suffix", {}, () => [
            T(C(e.suffix), 1)
          ])
        ])) : b("", !0)
      ]),
      e.error ? (o(), n("p", rt, C(e.error), 1)) : b("", !0)
    ], 2));
  }
}), ot = ["for"], st = {
  key: 0,
  class: "text-error-500"
}, lt = { class: "relative" }, at = ["id", "value", "placeholder", "required", "disabled"], nt = {
  key: 1,
  class: "mt-1.5 text-xs text-error-500"
}, Ul = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "EmailField",
  props: {
    modelValue: {},
    label: {},
    placeholder: {},
    required: { type: Boolean },
    disabled: { type: Boolean },
    error: {},
    errorMessages: { default: () => ({
      required: "Email is required",
      invalid: "Please enter a valid email address"
    }) },
    class: { default: "" }
  },
  emits: ["update:modelValue", "validation"],
  setup(e, { emit: t }) {
    const r = e, l = t, a = q(), i = D(!1), u = D(""), c = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, f = w(() => r.error ? r.error : i.value && u.value ? u.value : "");
    function h(p) {
      var y, V;
      return !p && r.required ? (u.value = ((y = r.errorMessages) == null ? void 0 : y.required) || "Email is required", !1) : p && !c.test(p) ? (u.value = ((V = r.errorMessages) == null ? void 0 : V.invalid) || "Please enter a valid email address", !1) : (u.value = "", !0);
    }
    function x(p) {
      const y = p.target.value;
      l("update:modelValue", y), i.value && c.test(y) && (u.value = "", l("validation", !0));
    }
    function v() {
      i.value = !0;
      const p = h(r.modelValue);
      l("validation", p);
    }
    return be(
      () => r.modelValue,
      (p) => {
        if (i.value) {
          const y = h(p);
          l("validation", y);
        }
      }
    ), (p, y) => (o(), n("div", {
      class: g(d(m)(r.class))
    }, [
      e.label ? (o(), n("label", {
        key: 0,
        for: d(a),
        class: g(["mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400", d(m)(e.disabled && "text-gray-300 dark:text-white/15")])
      }, [
        T(C(e.label) + " ", 1),
        e.required ? (o(), n("span", st, "*")) : b("", !0)
      ], 10, ot)) : b("", !0),
      s("div", lt, [
        y[0] || (y[0] = s("span", { class: "absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400" }, [
          s("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            s("path", {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M3.04175 7.06206V14.375C3.04175 14.6511 3.26561 14.875 3.54175 14.875H16.4584C16.7346 14.875 16.9584 14.6511 16.9584 14.375V7.06245L11.1443 11.1168C10.457 11.5961 9.54373 11.5961 8.85638 11.1168L3.04175 7.06206ZM16.9584 5.19262C16.9584 5.19341 16.9584 5.1942 16.9584 5.19498V5.20026C16.9572 5.22216 16.946 5.24239 16.9279 5.25501L10.2864 9.88638C10.1145 10.0062 9.8862 10.0062 9.71437 9.88638L3.07255 5.25485C3.05342 5.24151 3.04202 5.21967 3.04202 5.19636C3.042 5.15695 3.07394 5.125 3.11335 5.125H16.8871C16.9253 5.125 16.9564 5.15494 16.9584 5.19262ZM18.4584 5.21428V14.375C18.4584 15.4796 17.563 16.375 16.4584 16.375H3.54175C2.43718 16.375 1.54175 15.4796 1.54175 14.375V5.19498C1.54175 5.1852 1.54194 5.17546 1.54231 5.16577C1.55858 4.31209 2.25571 3.625 3.11335 3.625H16.8871C17.7549 3.625 18.4584 4.32843 18.4585 5.19622C18.4585 5.20225 18.4585 5.20826 18.4584 5.21428Z",
              fill: "currentColor"
            })
          ])
        ], -1)),
        s("input", {
          id: d(a),
          type: "email",
          value: e.modelValue,
          onInput: x,
          onBlur: v,
          placeholder: e.placeholder || "email@example.com",
          required: e.required,
          disabled: e.disabled,
          class: g(
            d(m)(
              "h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pl-[62px] text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400 dark:disabled:border-gray-800 dark:disabled:bg-white/[0.03] dark:disabled:text-gray-500",
              f.value && "border-error-300 focus:border-error-300 focus:ring-error-500/10 dark:border-error-700 dark:focus:border-error-800"
            )
          )
        }, null, 42, at)
      ]),
      f.value ? (o(), n("p", nt, C(f.value), 1)) : b("", !0)
    ], 2));
  }
}), it = ["for"], dt = {
  key: 0,
  class: "text-error-500"
}, ct = { class: "relative z-20 bg-transparent" }, ut = ["id", "value", "required", "disabled"], gt = {
  key: 0,
  value: "",
  disabled: ""
}, ft = ["value"], bt = {
  key: 1,
  class: "mt-1.5 text-xs text-error-500"
}, Kl = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "SelectField",
  props: {
    modelValue: {},
    options: {},
    label: {},
    placeholder: {},
    required: { type: Boolean },
    disabled: { type: Boolean },
    error: {},
    size: { default: "md" },
    class: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = q(), l = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-2.5 text-sm",
      lg: "px-5 py-3 text-base"
    };
    return (a, i) => (o(), n("div", {
      class: g(d(m)(t.class))
    }, [
      e.label ? (o(), n("label", {
        key: 0,
        for: d(r),
        class: g(["mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400", d(m)(e.disabled && "text-gray-300 dark:text-white/15")])
      }, [
        T(C(e.label) + " ", 1),
        e.required ? (o(), n("span", dt, "*")) : b("", !0)
      ], 10, it)) : b("", !0),
      s("div", ct, [
        s("select", {
          id: d(r),
          value: e.modelValue,
          onChange: i[0] || (i[0] = (u) => a.$emit("update:modelValue", u.target.value)),
          required: e.required,
          disabled: e.disabled,
          class: g(
            d(m)(
              "w-full appearance-none rounded-lg border border-gray-300 bg-white bg-none pr-10 text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400 dark:disabled:border-gray-800 dark:disabled:bg-white/[0.03] dark:disabled:text-gray-500",
              l[e.size],
              e.error ? "border-error-300 focus:border-error-300 focus:ring-error-500/10 dark:border-error-700 dark:focus:border-error-800" : "",
              e.modelValue ? "text-gray-800 dark:text-white/90" : ""
            )
          )
        }, [
          e.placeholder ? (o(), n("option", gt, C(e.placeholder), 1)) : b("", !0),
          (o(!0), n(A, null, E(e.options, (u) => (o(), n("option", {
            key: u.value,
            value: u.value,
            class: "text-gray-700 dark:bg-gray-900 dark:text-gray-400"
          }, C(u.label), 9, ft))), 128))
        ], 42, ut),
        i[1] || (i[1] = s("span", { class: "absolute z-30 text-gray-700 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400" }, [
          s("svg", {
            class: "stroke-current",
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            s("path", {
              d: "M4.79175 7.396L10.0001 12.6043L15.2084 7.396",
              stroke: "",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ])
        ], -1))
      ]),
      e.error ? (o(), n("p", bt, C(e.error), 1)) : b("", !0)
    ], 2));
  }
}), ht = ["for"], mt = {
  key: 0,
  class: "text-error-500"
}, Ct = ["id", "value", "placeholder", "required", "disabled", "rows"], xt = {
  key: 1,
  class: "mt-1.5 text-xs text-error-500"
}, Jl = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "TextareaField",
  props: {
    modelValue: {},
    label: {},
    placeholder: {},
    required: { type: Boolean },
    disabled: { type: Boolean },
    error: {},
    rows: { default: 4 },
    class: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = q();
    return (l, a) => (o(), n("div", {
      class: g(d(m)(t.class))
    }, [
      e.label ? (o(), n("label", {
        key: 0,
        for: d(r),
        class: g(["mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400", d(m)(e.disabled && "text-gray-300 dark:text-white/15")])
      }, [
        T(C(e.label) + " ", 1),
        e.required ? (o(), n("span", mt, "*")) : b("", !0)
      ], 10, ht)) : b("", !0),
      s("textarea", {
        id: d(r),
        value: e.modelValue,
        onInput: a[0] || (a[0] = (i) => l.$emit("update:modelValue", i.target.value)),
        placeholder: e.placeholder,
        required: e.required,
        disabled: e.disabled,
        rows: e.rows,
        class: g(
          d(m)(
            "w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 disabled:border-gray-100 disabled:bg-gray-50 disabled:placeholder:text-gray-300 dark:disabled:border-gray-800 dark:disabled:bg-white/[0.03] dark:disabled:placeholder:text-white/15",
            e.error && "border-error-300 focus:border-error-300 focus:ring-error-500/10 dark:border-error-700 dark:focus:border-error-800"
          )
        )
      }, null, 42, Ct),
      e.error ? (o(), n("p", xt, C(e.error), 1)) : b("", !0)
    ], 2));
  }
}), vt = { class: "flex items-center h-5" }, pt = ["id", "checked", "disabled"], yt = { class: "flex flex-col" }, kt = ["for"], wt = {
  key: 1,
  class: "text-xs text-gray-500 dark:text-gray-400"
}, Xl = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "CheckboxField",
  props: {
    modelValue: { type: Boolean },
    label: {},
    description: {},
    disabled: { type: Boolean },
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = q();
    return (l, a) => (o(), n("div", {
      class: g(d(m)("flex items-start gap-3", t.class))
    }, [
      s("div", vt, [
        s("input", {
          id: d(r),
          type: "checkbox",
          checked: e.modelValue,
          onChange: a[0] || (a[0] = (i) => l.$emit(
            "update:modelValue",
            i.target.checked
          )),
          disabled: e.disabled,
          class: "h-5 w-5 rounded border-gray-300 text-brand-500 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-brand-600 disabled:opacity-50"
        }, null, 40, pt)
      ]),
      s("div", yt, [
        e.label ? (o(), n("label", {
          key: 0,
          for: d(r),
          class: g(["text-sm font-medium text-gray-700 dark:text-gray-300", d(m)(e.disabled && "text-gray-400 dark:text-gray-600")])
        }, C(e.label), 11, kt)) : b("", !0),
        e.description ? (o(), n("p", wt, C(e.description), 1)) : b("", !0)
      ])
    ], 2));
  }
}), $t = ["for"], Vt = {
  key: 0,
  class: "text-error-500"
}, Lt = { class: "relative" }, Mt = ["id", "value", "required", "disabled", "min", "max"], Ht = {
  key: 1,
  class: "mt-1.5 text-xs text-error-500"
}, Ql = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "DatePickerField",
  props: {
    modelValue: {},
    label: {},
    required: { type: Boolean },
    disabled: { type: Boolean },
    error: {},
    min: {},
    max: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = q();
    return (l, a) => (o(), n("div", {
      class: g(d(m)(t.class))
    }, [
      e.label ? (o(), n("label", {
        key: 0,
        for: d(r),
        class: g(["mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400", d(m)(e.disabled && "text-gray-300 dark:text-white/15")])
      }, [
        T(C(e.label) + " ", 1),
        e.required ? (o(), n("span", Vt, "*")) : b("", !0)
      ], 10, $t)) : b("", !0),
      s("div", Lt, [
        s("input", {
          id: d(r),
          type: "date",
          value: e.modelValue,
          onInput: a[0] || (a[0] = (i) => l.$emit("update:modelValue", i.target.value)),
          required: e.required,
          disabled: e.disabled,
          min: e.min,
          max: e.max,
          class: g(
            d(m)(
              "h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400 dark:disabled:border-gray-800 dark:disabled:bg-white/[0.03] dark:disabled:text-gray-500",
              e.error && "border-error-300 focus:border-error-300 focus:ring-error-500/10 dark:border-error-700 dark:focus:border-error-800"
            )
          )
        }, null, 42, Mt),
        a[1] || (a[1] = s("span", { class: "absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 dark:text-gray-400" }, [
          s("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            s("path", {
              d: "M6.66675 1.66667V4.16667M13.3334 1.66667V4.16667M2.91675 7.57501H17.0834M17.5001 7.08334V14.1667C17.5001 16.6667 16.2501 18.3333 13.3334 18.3333H6.66675C3.75008 18.3333 2.50008 16.6667 2.50008 14.1667V7.08334C2.50008 4.58334 3.75008 2.91667 6.66675 2.91667H13.3334C16.2501 2.91667 17.5001 4.58334 17.5001 7.08334Z",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-miterlimit": "10",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ])
        ], -1))
      ]),
      e.error ? (o(), n("p", Ht, C(e.error), 1)) : b("", !0)
    ], 2));
  }
}), Bt = ["for"], _t = {
  key: 0,
  class: "text-error-500"
}, Zt = { class: "relative" }, St = ["id", "value", "required", "disabled"], It = {
  key: 1,
  class: "mt-1.5 text-xs text-error-500"
}, Yl = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "TimePickerField",
  props: {
    modelValue: {},
    label: {},
    required: { type: Boolean },
    disabled: { type: Boolean },
    error: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = q();
    return (l, a) => (o(), n("div", {
      class: g(d(m)(t.class))
    }, [
      e.label ? (o(), n("label", {
        key: 0,
        for: d(r),
        class: g(["mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400", d(m)(e.disabled && "text-gray-300 dark:text-white/15")])
      }, [
        T(C(e.label) + " ", 1),
        e.required ? (o(), n("span", _t, "*")) : b("", !0)
      ], 10, Bt)) : b("", !0),
      s("div", Zt, [
        s("input", {
          id: d(r),
          type: "time",
          value: e.modelValue,
          onInput: a[0] || (a[0] = (i) => l.$emit("update:modelValue", i.target.value)),
          required: e.required,
          disabled: e.disabled,
          class: g(
            d(m)(
              "h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400 dark:disabled:border-gray-800 dark:disabled:bg-white/[0.03] dark:disabled:text-gray-500",
              e.error && "border-error-300 focus:border-error-300 focus:ring-error-500/10 dark:border-error-700 dark:focus:border-error-800"
            )
          )
        }, null, 42, St),
        a[1] || (a[1] = s("span", { class: "absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 dark:text-gray-400" }, [
          s("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            s("path", {
              d: "M18.3334 10C18.3334 14.6 14.6001 18.3333 10.0001 18.3333C5.40008 18.3333 1.66675 14.6 1.66675 10C1.66675 5.4 5.40008 1.66667 10.0001 1.66667C14.6001 1.66667 18.3334 5.4 18.3334 10Z",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }),
            s("path", {
              d: "M13.0917 12.65L10.5084 11.1083C10.0584 10.8417 9.69175 10.2 9.69175 9.67501V6.25833",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ])
        ], -1))
      ]),
      e.error ? (o(), n("p", It, C(e.error), 1)) : b("", !0)
    ], 2));
  }
}), zt = ["checked", "disabled"], Dt = {
  key: 0,
  class: "ms-3 text-sm font-medium text-gray-700 dark:text-gray-300"
}, ea = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "ToggleSwitch",
  props: {
    modelValue: { type: Boolean },
    label: {},
    disabled: { type: Boolean },
    class: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = e;
    return (r, l) => (o(), n("label", {
      class: g(
        d(m)(
          "relative inline-flex items-center cursor-pointer",
          e.disabled && "opacity-50 cursor-not-allowed",
          t.class
        )
      )
    }, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        onChange: l[0] || (l[0] = (a) => !e.disabled && r.$emit("update:modelValue", a.target.checked)),
        disabled: e.disabled,
        class: "sr-only peer"
      }, null, 40, zt),
      l[1] || (l[1] = s("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-300 dark:peer-focus:ring-brand-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-brand-500" }, null, -1)),
      e.label ? (o(), n("span", Dt, C(e.label), 1)) : b("", !0)
    ], 2));
  }
}), Tt = {
  key: 0,
  class: "text-error-500"
}, jt = {
  key: 0,
  class: "text-gray-400"
}, At = { class: "flex flex-wrap items-center flex-auto gap-2" }, Et = ["onClick"], Gt = {
  key: 0,
  class: "absolute z-10 w-full mt-1 bg-white rounded-lg shadow-theme-lg border border-gray-200 dark:bg-gray-900 dark:border-gray-800"
}, qt = {
  class: "overflow-y-auto divide-y divide-gray-100 custom-scrollbar max-h-60 dark:divide-gray-800",
  role: "listbox",
  "aria-multiselectable": "true"
}, Pt = ["onClick", "aria-selected"], Ft = { class: "grow" }, Ot = {
  key: 0,
  class: "w-5 h-5 text-brand-500",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, Rt = {
  key: 1,
  class: "mt-1.5 text-xs text-error-500"
}, ta = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "MultiSelect",
  props: {
    options: {},
    modelValue: { default: () => [] },
    label: {},
    placeholder: {},
    required: { type: Boolean },
    disabled: { type: Boolean },
    error: {},
    class: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, l = t, a = D(!1), i = D(null), u = w(() => r.modelValue), c = () => {
      a.value = !a.value;
    }, f = (p) => {
      const y = u.value.findIndex(
        (S) => S.value === p.value
      );
      let V;
      y === -1 ? V = [...u.value, p] : V = u.value.filter((S, H) => H !== y), l("update:modelValue", V);
    }, h = (p) => {
      const y = u.value.filter(
        (V) => V.value !== p.value
      );
      l("update:modelValue", y);
    }, x = (p) => u.value.some((y) => y.value === p.value), v = (p) => {
      i.value && !i.value.contains(p.target) && (a.value = !1);
    };
    return Y(() => {
      document.addEventListener("click", v);
    }), e1(() => {
      document.removeEventListener("click", v);
    }), (p, y) => (o(), n("div", {
      class: g(d(m)(r.class))
    }, [
      e.label ? (o(), n("label", {
        key: 0,
        class: g(["mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400", d(m)(e.disabled && "text-gray-300 dark:text-white/15")])
      }, [
        T(C(e.label) + " ", 1),
        e.required ? (o(), n("span", Tt, "*")) : b("", !0)
      ], 2)) : b("", !0),
      s("div", {
        class: "relative",
        ref_key: "multiSelectRef",
        ref: i
      }, [
        s("div", {
          onClick: y[0] || (y[0] = (V) => !e.disabled && c()),
          class: g(
            d(m)(
              "min-h-11 flex items-center w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800",
              a.value && "text-gray-800 dark:text-white/90",
              e.disabled && "cursor-not-allowed opacity-50",
              e.error ? "border-error-300 dark:border-error-700" : ""
            )
          )
        }, [
          u.value.length === 0 ? (o(), n("span", jt, C(e.placeholder || "Select items..."), 1)) : b("", !0),
          s("div", At, [
            (o(!0), n(A, null, E(u.value, (V) => (o(), n("div", {
              key: V.value,
              class: "group flex items-center justify-center h-[30px] rounded-full border-[0.7px] border-transparent bg-gray-100 py-1 pl-2.5 pr-2 text-sm text-gray-800 hover:border-gray-200 dark:bg-gray-800 dark:text-white/90 dark:hover:border-gray-800"
            }, [
              s("span", null, C(V.label), 1),
              e.disabled ? b("", !0) : (o(), n("button", {
                key: 0,
                onClick: Ae((S) => h(V), ["stop"]),
                class: "pl-2 text-gray-500 cursor-pointer group-hover:text-gray-400 dark:text-gray-400",
                "aria-label": "Remove item"
              }, [...y[1] || (y[1] = [
                s("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 14 14",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  s("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M3.40717 4.46881C3.11428 4.17591 3.11428 3.70104 3.40717 3.40815C3.70006 3.11525 4.17494 3.11525 4.46783 3.40815L6.99943 5.93975L9.53095 3.40822C9.82385 3.11533 10.2987 3.11533 10.5916 3.40822C10.8845 3.70112 10.8845 4.17599 10.5916 4.46888L8.06009 7.00041L10.5916 9.53193C10.8845 9.82482 10.8845 10.2997 10.5916 10.5926C10.2987 10.8855 9.82385 10.8855 9.53095 10.5926L6.99943 8.06107L4.46783 10.5927C4.17494 10.8856 3.70006 10.8856 3.40717 10.5927C3.11428 10.2998 3.11428 9.8249 3.40717 9.53201L5.93877 7.00041L3.40717 4.46881Z",
                    fill: "currentColor"
                  })
                ], -1)
              ])], 8, Et))
            ]))), 128))
          ]),
          (o(), n("svg", {
            class: g(["ml-auto shrink-0 transition-transform", d(m)(a.value && "rotate-180")]),
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [...y[2] || (y[2] = [
            s("path", {
              d: "M4.79175 7.39551L10.0001 12.6038L15.2084 7.39551",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, null, -1)
          ])], 2))
        ], 2),
        W(ne, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "transform scale-95 opacity-0",
          "enter-to-class": "transform scale-100 opacity-100",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-from-class": "transform scale-100 opacity-100",
          "leave-to-class": "transform scale-95 opacity-0"
        }, {
          default: z(() => [
            a.value ? (o(), n("div", Gt, [
              s("ul", qt, [
                (o(!0), n(A, null, E(e.options, (V) => (o(), n("li", {
                  key: V.value,
                  onClick: (S) => f(V),
                  class: g(
                    d(m)(
                      "relative flex items-center w-full px-3 py-2 cursor-pointer first:rounded-t-lg last:rounded-b-lg hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-white",
                      x(V) && "bg-gray-50 dark:bg-white/[0.03]"
                    )
                  ),
                  role: "option",
                  "aria-selected": x(V)
                }, [
                  s("span", Ft, C(V.label), 1),
                  x(V) ? (o(), n("svg", Ot, [...y[3] || (y[3] = [
                    s("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M5 13l4 4L19 7"
                    }, null, -1)
                  ])])) : b("", !0)
                ], 10, Pt))), 128))
              ])
            ])) : b("", !0)
          ]),
          _: 1
        })
      ], 512),
      e.error ? (o(), n("p", Rt, C(e.error), 1)) : b("", !0)
    ], 2));
  }
}), Nt = ["for"], Wt = {
  key: 0,
  class: "text-error-500"
}, Ut = ["id", "accept", "multiple", "disabled", "required"], Kt = {
  key: 1,
  class: "mt-1.5 text-xs text-error-500"
}, Jt = {
  key: 2,
  class: "mt-1.5 text-xs text-gray-500"
}, ra = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "FileInput",
  props: {
    label: {},
    accept: {},
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    required: { type: Boolean },
    error: {},
    hint: {},
    class: {}
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const r = e, l = t, a = q(), i = (u) => {
      const c = u.target;
      l("change", c.files);
    };
    return (u, c) => (o(), n("div", {
      class: g(d(m)(r.class))
    }, [
      e.label ? (o(), n("label", {
        key: 0,
        for: d(a),
        class: g(["mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400", d(m)(e.disabled && "text-gray-300 dark:text-white/15")])
      }, [
        T(C(e.label) + " ", 1),
        e.required ? (o(), n("span", Wt, "*")) : b("", !0)
      ], 10, Nt)) : b("", !0),
      s("input", {
        id: d(a),
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        required: e.required,
        onChange: i,
        class: g(
          d(m)(
            "h-11 w-full overflow-hidden rounded-lg border border-gray-300 bg-transparent text-sm text-gray-500 shadow-theme-xs transition-colors file:mr-5 file:border-collapse file:cursor-pointer file:rounded-l-lg file:border-0 file:border-r file:border-solid file:border-gray-200 file:bg-gray-50 file:py-3 file:pl-3.5 file:pr-3 file:text-sm file:text-gray-700 placeholder:text-gray-400 hover:file:bg-gray-100 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:file:border-gray-800 dark:file:bg-white/[0.03] dark:file:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50",
            e.error && "border-error-300 dark:border-error-700"
          )
        )
      }, null, 42, Ut),
      e.error ? (o(), n("p", Kt, C(e.error), 1)) : e.hint ? (o(), n("p", Jt, C(e.hint), 1)) : b("", !0)
    ], 2));
  }
}), Xt = ["disabled", "type"], Qt = {
  key: 0,
  class: "animate-spin h-4 w-4",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, Yt = {
  key: 1,
  class: "flex items-center"
}, e0 = {
  key: 2,
  class: "flex items-center"
}, oa = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "Button",
  props: {
    size: { default: "md" },
    variant: { default: "primary" },
    startIcon: {},
    endIcon: {},
    class: { default: "" },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    type: { default: "button" }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const r = e, l = t, a = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-2.5 text-sm",
      lg: "px-5 py-3 text-base"
    }, i = {
      primary: "bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 dark:disabled:bg-brand-700",
      outline: "bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300",
      ghost: "bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300",
      danger: "bg-error-500 text-white shadow-theme-xs hover:bg-error-600 disabled:bg-error-300 dark:disabled:bg-error-700"
    }, u = (c) => {
      !r.disabled && !r.loading && l("click", c);
    };
    return (c, f) => (o(), n("button", {
      class: g(
        d(m)(
          "inline-flex items-center justify-center font-medium gap-2 rounded-lg transition",
          a[e.size],
          i[e.variant],
          e.disabled && "cursor-not-allowed opacity-50",
          r.class
        )
      ),
      onClick: u,
      disabled: e.disabled || e.loading,
      type: e.type
    }, [
      e.loading ? (o(), n("svg", Qt, [...f[0] || (f[0] = [
        s("circle", {
          class: "opacity-25",
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "currentColor",
          "stroke-width": "4"
        }, null, -1),
        s("path", {
          class: "opacity-75",
          fill: "currentColor",
          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        }, null, -1)
      ])])) : e.startIcon ? (o(), n("span", Yt, [
        (o(), Z(G(e.startIcon)))
      ])) : b("", !0),
      M(c.$slots, "default"),
      e.endIcon && !e.loading ? (o(), n("span", e0, [
        (o(), Z(G(e.endIcon)))
      ])) : b("", !0)
    ], 10, Xt));
  }
}), t0 = ["role"], r0 = { class: "flex items-start gap-3" }, o0 = {
  key: 0,
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, s0 = {
  key: 1,
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, l0 = {
  key: 2,
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, a0 = {
  key: 3,
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, n0 = { class: "flex-1" }, i0 = { class: "mb-1 text-sm font-semibold text-gray-800 dark:text-white/90" }, d0 = { class: "text-sm text-gray-500 dark:text-gray-400" }, sa = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "Alert",
  props: {
    variant: {},
    title: {},
    message: {},
    showLink: { type: Boolean, default: !1 },
    linkHref: { default: "#" },
    linkText: { default: "Learn more" },
    dismissible: { type: Boolean, default: !1 },
    class: { default: "" }
  },
  emits: ["dismiss"],
  setup(e) {
    const t = e, r = {
      success: {
        container: "border-success-500 bg-success-50 dark:border-success-500/30 dark:bg-success-500/15",
        icon: "text-success-500"
      },
      error: {
        container: "border-error-500 bg-error-50 dark:border-error-500/30 dark:bg-error-500/15",
        icon: "text-error-500"
      },
      warning: {
        container: "border-warning-500 bg-warning-50 dark:border-warning-500/30 dark:bg-warning-500/15",
        icon: "text-warning-500"
      },
      info: {
        container: "border-blue-light-500 bg-blue-light-50 dark:border-blue-light-500/30 dark:bg-blue-light-500/15",
        icon: "text-blue-light-500"
      }
    };
    return (l, a) => {
      const i = Ee("router-link");
      return o(), n("div", {
        role: e.variant === "error" || e.variant === "warning" ? "alert" : "status",
        class: g(
          d(m)(
            "rounded-xl border p-4",
            r[e.variant].container,
            t.class
          )
        )
      }, [
        s("div", r0, [
          s("div", {
            class: g(d(m)("-mt-0.5", r[e.variant].icon))
          }, [
            e.variant === "success" ? (o(), n("svg", o0, [...a[1] || (a[1] = [
              s("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6024 1.66667 10 1.66667C5.39765 1.66667 1.66669 5.39763 1.66669 10C1.66669 14.6024 5.39765 18.3333 10 18.3333ZM13.8066 8.47339C14.0671 8.21289 14.0671 7.78711 13.8066 7.52661C13.5461 7.26612 13.1203 7.26612 12.8598 7.52661L8.75002 11.6364L7.14021 10.0266C6.87972 9.76612 6.45393 9.76612 6.19344 10.0266C5.93295 10.2871 5.93295 10.7129 6.19344 10.9734L8.27663 13.0566C8.53712 13.3171 8.96291 13.3171 9.2234 13.0566L13.8066 8.47339Z",
                fill: "currentColor"
              }, null, -1)
            ])])) : e.variant === "error" ? (o(), n("svg", s0, [...a[2] || (a[2] = [
              s("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6024 1.66667 10 1.66667C5.39765 1.66667 1.66669 5.39763 1.66669 10C1.66669 14.6024 5.39765 18.3333 10 18.3333ZM10.8334 6.66667C10.8334 6.20643 10.4603 5.83333 10 5.83333C9.53978 5.83333 9.16669 6.20643 9.16669 6.66667V10C9.16669 10.4602 9.53978 10.8333 10 10.8333C10.4603 10.8333 10.8334 10.4602 10.8334 10V6.66667ZM10 14.1667C10.4603 14.1667 10.8334 13.7936 10.8334 13.3333C10.8334 12.8731 10.4603 12.5 10 12.5C9.53978 12.5 9.16669 12.8731 9.16669 13.3333C9.16669 13.7936 9.53978 14.1667 10 14.1667Z",
                fill: "currentColor"
              }, null, -1)
            ])])) : e.variant === "warning" ? (o(), n("svg", l0, [...a[3] || (a[3] = [
              s("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M8.62861 2.5L1.38197 15C1.1396 15.4196 1.43087 15.9583 1.91736 15.9583H16.4107C16.8972 15.9583 17.1885 15.4196 16.9461 15L9.69949 2.5C9.45625 2.07956 8.87185 2.07956 8.62861 2.5ZM9.16407 6.66667C9.16407 6.20643 9.53717 5.83333 9.99741 5.83333C10.4576 5.83333 10.8307 6.20643 10.8307 6.66667V10C10.8307 10.4602 10.4576 10.8333 9.99741 10.8333C9.53717 10.8333 9.16407 10.4602 9.16407 10V6.66667ZM9.99741 14.1667C10.4576 14.1667 10.8307 13.7936 10.8307 13.3333C10.8307 12.8731 10.4576 12.5 9.99741 12.5C9.53717 12.5 9.16407 12.8731 9.16407 13.3333C9.16407 13.7936 9.53717 14.1667 9.99741 14.1667Z",
                fill: "currentColor"
              }, null, -1)
            ])])) : (o(), n("svg", a0, [...a[4] || (a[4] = [
              s("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6024 1.66667 10 1.66667C5.39765 1.66667 1.66669 5.39763 1.66669 10C1.66669 14.6024 5.39765 18.3333 10 18.3333ZM10.8334 6.66667C10.8334 7.12691 10.4603 7.5 10 7.5C9.53978 7.5 9.16669 7.12691 9.16669 6.66667C9.16669 6.20643 9.53978 5.83333 10 5.83333C10.4603 5.83333 10.8334 6.20643 10.8334 6.66667ZM10 9.16667C10.4603 9.16667 10.8334 9.53976 10.8334 10V13.3333C10.8334 13.7936 10.4603 14.1667 10 14.1667C9.53978 14.1667 9.16669 13.7936 9.16669 13.3333V10C9.16669 9.53976 9.53978 9.16667 10 9.16667Z",
                fill: "currentColor"
              }, null, -1)
            ])]))
          ], 2),
          s("div", n0, [
            s("h4", i0, C(e.title), 1),
            s("p", d0, C(e.message), 1),
            e.showLink && e.linkHref ? (o(), Z(i, {
              key: 0,
              to: e.linkHref,
              class: "inline-block mt-3 text-sm font-medium text-gray-500 underline dark:text-gray-400"
            }, {
              default: z(() => [
                T(C(e.linkText), 1)
              ]),
              _: 1
            }, 8, ["to"])) : b("", !0)
          ]),
          e.dismissible ? (o(), n("button", {
            key: 0,
            onClick: a[0] || (a[0] = (u) => l.$emit("dismiss")),
            class: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          }, [...a[5] || (a[5] = [
            s("svg", {
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              s("path", {
                d: "M15 5L5 15M5 5L15 15",
                stroke: "currentColor",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              })
            ], -1)
          ])])) : b("", !0)
        ])
      ], 10, t0);
    };
  }
}), c0 = {
  key: 0,
  class: "mr-1"
}, u0 = {
  key: 1,
  class: "ml-1"
}, g0 = "inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium capitalize", la = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "Badge",
  props: {
    variant: { default: "light" },
    size: { default: "md" },
    color: { default: "primary" },
    startIcon: {},
    endIcon: {},
    class: { default: "" }
  },
  setup(e) {
    const t = e, r = {
      sm: "text-theme-xs",
      md: "text-sm"
    }, l = {
      light: {
        primary: "bg-brand-50 text-brand-500 dark:bg-brand-500/15 dark:text-brand-400",
        success: "bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500",
        error: "bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500",
        warning: "bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-orange-400",
        info: "bg-blue-light-50 text-blue-light-500 dark:bg-blue-light-500/15 dark:text-blue-light-500",
        light: "bg-gray-100 text-gray-700 dark:bg-white/5 dark:text-white/80",
        dark: "bg-gray-500 text-white dark:bg-white/5 dark:text-white"
      },
      solid: {
        primary: "bg-brand-500 text-white dark:text-white",
        success: "bg-success-500 text-white dark:text-white",
        error: "bg-error-500 text-white dark:text-white",
        warning: "bg-warning-500 text-white dark:text-white",
        info: "bg-blue-light-500 text-white dark:text-white",
        light: "bg-gray-400 dark:bg-white/5 text-white dark:text-white/80",
        dark: "bg-gray-700 text-white dark:text-white"
      }
    }, a = w(() => r[t.size]), i = w(() => l[t.variant][t.color]);
    return (u, c) => (o(), n("span", {
      class: g(d(m)(g0, a.value, i.value, t.class))
    }, [
      e.startIcon ? (o(), n("span", c0, [
        (o(), Z(G(e.startIcon)))
      ])) : b("", !0),
      M(u.$slots, "default"),
      e.endIcon ? (o(), n("span", u0, [
        (o(), Z(G(e.endIcon)))
      ])) : b("", !0)
    ], 2));
  }
}), f0 = { class: "flex-shrink-0" }, b0 = { class: "flex-1 min-w-0" }, h0 = { class: "text-sm font-medium" }, m0 = {
  key: 0,
  class: "mt-1 text-sm opacity-90"
}, C0 = /* @__PURE__ */ L({
  __name: "Toast",
  props: {
    type: {},
    title: {},
    message: {},
    dismissible: { type: Boolean }
  },
  emits: ["dismiss"],
  setup(e) {
    const t = {
      success: "bg-success-50 border-success-200 text-success-800 dark:bg-success-900/30 dark:border-success-800 dark:text-success-200",
      error: "bg-error-50 border-error-200 text-error-800 dark:bg-error-900/30 dark:border-error-800 dark:text-error-200",
      warning: "bg-warning-50 border-warning-200 text-warning-800 dark:bg-warning-900/30 dark:border-warning-800 dark:text-warning-200",
      info: "bg-blue-light-50 border-blue-light-200 text-blue-light-800 dark:bg-blue-light-900/30 dark:border-blue-light-800 dark:text-blue-light-200"
    }, u = {
      success: () => O("svg", { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, [
        O("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d: "M5 13l4 4L19 7"
        })
      ]),
      error: () => O("svg", { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, [
        O("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d: "M6 18L18 6M6 6l12 12"
        })
      ]),
      warning: () => O("svg", { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, [
        O("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        })
      ]),
      info: () => O("svg", { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, [
        O("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        })
      ])
    };
    return (c, f) => (o(), n("div", {
      class: g(
        d(m)(
          "flex items-start gap-3 rounded-lg border p-4 shadow-lg",
          t[e.type]
        )
      ),
      role: "alert"
    }, [
      s("div", f0, [
        (o(), Z(G(u[e.type]), { class: "h-5 w-5" }))
      ]),
      s("div", b0, [
        s("p", h0, C(e.title), 1),
        e.message ? (o(), n("p", m0, C(e.message), 1)) : b("", !0)
      ]),
      e.dismissible ? (o(), n("button", {
        key: 0,
        type: "button",
        class: "flex-shrink-0 rounded-md p-1 hover:bg-black/10 dark:hover:bg-white/10 transition-colors",
        onClick: f[0] || (f[0] = (h) => c.$emit("dismiss"))
      }, [...f[1] || (f[1] = [
        s("svg", {
          class: "h-4 w-4",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor"
        }, [
          s("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M6 18L18 6M6 6l12 12"
          })
        ], -1)
      ])])) : b("", !0)
    ], 2));
  }
}), ie = D([]);
let x0 = 0;
function v0() {
  return `toast-${++x0}-${Date.now()}`;
}
function ge(e) {
  const t = v0(), r = e.duration ?? 5e3, l = {
    id: t,
    type: e.type,
    title: e.title,
    message: e.message,
    duration: r
  };
  return ie.value.push(l), r > 0 && setTimeout(() => {
    Je(t);
  }, r), t;
}
function Je(e) {
  const t = ie.value.findIndex((r) => r.id === e);
  t !== -1 && ie.value.splice(t, 1);
}
function p0() {
  ie.value = [];
}
function y0() {
  const e = (a) => ge({ ...a, type: "success" }), t = (a) => ge({ ...a, type: "error" }), r = (a) => ge({ ...a, type: "warning" }), l = (a) => ge({ ...a, type: "info" });
  return {
    toasts: t1(ie),
    success: e,
    error: t,
    warning: r,
    info: l,
    remove: Je,
    clear: p0
  };
}
const aa = /* @__PURE__ */ L({
  __name: "ToastContainer",
  props: {
    position: { default: "top-right" }
  },
  setup(e) {
    const { toasts: t, remove: r } = y0(), l = {
      "top-right": "top-0 right-0",
      "top-left": "top-0 left-0",
      "bottom-right": "bottom-0 right-0",
      "bottom-left": "bottom-0 left-0",
      "top-center": "top-0 left-1/2 -translate-x-1/2",
      "bottom-center": "bottom-0 left-1/2 -translate-x-1/2"
    };
    return (a, i) => (o(), Z(Ge, { to: "body" }, [
      s("div", {
        class: g(
          d(m)("fixed z-[99999] flex flex-col gap-2 p-4", l[e.position])
        )
      }, [
        W(r1, {
          "enter-active-class": "transition duration-300 ease-out",
          "enter-from-class": "transform translate-x-full opacity-0",
          "enter-to-class": "transform translate-x-0 opacity-100",
          "leave-active-class": "transition duration-200 ease-in",
          "leave-from-class": "transform translate-x-0 opacity-100",
          "leave-to-class": "transform translate-x-full opacity-0",
          "move-class": "transition duration-300 ease-out"
        }, {
          default: z(() => [
            (o(!0), n(A, null, E(d(t), (u) => (o(), Z(C0, {
              key: u.id,
              type: u.type,
              title: u.title,
              message: u.message,
              dismissible: !0,
              onDismiss: (c) => d(r)(u.id)
            }, null, 8, ["type", "title", "message", "onDismiss"]))), 128))
          ]),
          _: 1
        })
      ], 2)
    ]));
  }
}), k0 = {
  key: 0,
  class: "fixed inset-0 flex items-center justify-center overflow-y-auto z-[99999]"
}, w0 = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "Modal",
  props: {
    modelValue: { type: Boolean, default: !0 },
    size: { default: "md" },
    closeOnBackdrop: { type: Boolean, default: !0 },
    closeOnEscape: { type: Boolean, default: !0 },
    blur: { type: Boolean, default: !0 },
    class: { default: "" }
  },
  emits: ["update:modelValue", "close"],
  setup(e, { emit: t }) {
    const r = e, l = t, a = w(() => ({
      sm: "max-w-sm w-full",
      md: "max-w-lg w-full",
      lg: "max-w-2xl w-full",
      xl: "max-w-4xl w-full",
      full: "max-w-full w-full mx-4"
    })[r.size]), i = w(() => {
      const f = "fixed inset-0 h-full w-full", h = r.blur ? "backdrop-blur-[32px]" : "";
      return `${f} ${h} bg-black/60 dark:bg-black/70`;
    }), u = () => {
      r.closeOnBackdrop && (l("update:modelValue", !1), l("close"));
    }, c = (f) => {
      f.key === "Escape" && r.closeOnEscape && r.modelValue && (l("update:modelValue", !1), l("close"));
    };
    return be(
      () => r.modelValue,
      (f) => {
        f ? (document.body.style.overflow = "hidden", o1(() => {
          const h = document.querySelector(
            '[role="dialog"]'
          );
          h == null || h.focus();
        })) : document.body.style.overflow = "";
      }
    ), Y(() => {
      document.addEventListener("keydown", c);
    }), he(() => {
      document.removeEventListener("keydown", c), document.body.style.overflow = "";
    }), (f, h) => (o(), Z(Ge, { to: "body" }, [
      W(ne, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "leave-active-class": "transition ease-in duration-150",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: z(() => [
          e.modelValue ? (o(), n("div", k0, [
            s("div", {
              class: g(d(m)(i.value)),
              "aria-hidden": "true",
              onClick: u
            }, null, 2),
            W(ne, {
              "enter-active-class": "transition ease-out duration-200",
              "enter-from-class": "opacity-0 scale-95",
              "enter-to-class": "opacity-100 scale-100",
              "leave-active-class": "transition ease-in duration-150",
              "leave-from-class": "opacity-100 scale-100",
              "leave-to-class": "opacity-0 scale-95"
            }, {
              default: z(() => [
                e.modelValue ? (o(), n("div", {
                  key: 0,
                  role: "dialog",
                  "aria-modal": "true",
                  tabindex: "-1",
                  class: g(d(m)("relative z-10 outline-none", a.value, r.class))
                }, [
                  M(f.$slots, "default")
                ], 2)) : b("", !0)
              ]),
              _: 3
            })
          ])) : b("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), $0 = { class: "no-scrollbar overflow-y-auto rounded-3xl bg-white p-6 dark:bg-gray-900 lg:p-8" }, V0 = { class: "mb-6" }, L0 = { class: "text-xl font-semibold text-gray-800 dark:text-white/90 lg:text-2xl" }, M0 = {
  key: 0,
  class: "mt-1 text-sm text-gray-500 dark:text-gray-400"
}, H0 = { class: "mt-6 flex items-center gap-3 sm:justify-end" }, B0 = ["disabled"], _0 = {
  key: 0,
  class: "animate-spin -ml-1 mr-2 h-4 w-4 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, Z0 = /* @__PURE__ */ L({
  __name: "FormDialog",
  props: {
    modelValue: { type: Boolean, default: !0 },
    title: {},
    subtitle: {},
    confirmText: { default: "Save" },
    cancelText: { default: "Cancel" },
    loadingText: { default: "Please wait..." },
    loading: { type: Boolean, default: !1 },
    confirmDisabled: { type: Boolean, default: !1 },
    variant: { default: "primary" },
    size: { default: "md" },
    closeOnBackdrop: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "close", "confirm", "cancel"],
  setup(e, { emit: t }) {
    const r = e, l = t, a = w({
      get: () => r.modelValue,
      set: (f) => l("update:modelValue", f)
    }), i = w(() => {
      switch (r.variant) {
        case "danger":
          return "bg-error-500 hover:bg-error-600";
        case "success":
          return "bg-success-500 hover:bg-success-600";
        default:
          return "bg-brand-500 hover:bg-brand-600";
      }
    }), u = () => {
      !r.loading && !r.confirmDisabled && l("confirm");
    }, c = () => {
      l("cancel"), l("close"), l("update:modelValue", !1);
    };
    return (f, h) => (o(), Z(w0, {
      modelValue: a.value,
      "onUpdate:modelValue": h[0] || (h[0] = (x) => a.value = x),
      size: e.size,
      "close-on-backdrop": e.closeOnBackdrop
    }, {
      default: z(() => [
        s("div", $0, [
          s("div", V0, [
            s("h5", L0, C(e.title), 1),
            e.subtitle ? (o(), n("p", M0, C(e.subtitle), 1)) : b("", !0)
          ]),
          s("div", null, [
            M(f.$slots, "default")
          ]),
          s("div", H0, [
            s("button", {
              type: "button",
              onClick: c,
              class: "flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] sm:w-auto"
            }, C(e.cancelText), 1),
            s("button", {
              type: "button",
              onClick: u,
              disabled: e.loading || e.confirmDisabled,
              class: g(["flex w-full justify-center rounded-lg px-4 py-2.5 text-sm font-medium text-white sm:w-auto disabled:opacity-50", d(m)(i.value)])
            }, [
              e.loading ? (o(), n("svg", _0, [...h[1] || (h[1] = [
                s("circle", {
                  class: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  "stroke-width": "4"
                }, null, -1),
                s("path", {
                  class: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                }, null, -1)
              ])])) : b("", !0),
              T(" " + C(e.loading ? e.loadingText : e.confirmText), 1)
            ], 10, B0),
            M(f.$slots, "extra-buttons")
          ])
        ])
      ]),
      _: 3
    }, 8, ["modelValue", "size", "close-on-backdrop"]));
  }
}), S0 = {
  key: 0,
  class: "mb-4 flex justify-center"
}, I0 = {
  key: 0,
  class: "h-6 w-6 text-error-500",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, z0 = {
  key: 1,
  class: "h-6 w-6 text-success-500",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, D0 = {
  key: 2,
  class: "h-6 w-6 text-brand-500",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, na = /* @__PURE__ */ L({
  __name: "ConfirmDialog",
  props: {
    modelValue: { type: Boolean, default: !0 },
    title: {},
    message: {},
    confirmText: { default: "Confirm" },
    cancelText: { default: "Cancel" },
    variant: { default: "primary" },
    loading: { type: Boolean, default: !1 },
    showIcon: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "close", "confirm", "cancel"],
  setup(e, { emit: t }) {
    const r = e, l = t, a = w({
      get: () => r.modelValue,
      set: (u) => l("update:modelValue", u)
    }), i = w(() => {
      switch (r.variant) {
        case "danger":
          return "bg-error-100 dark:bg-error-500/20";
        case "success":
          return "bg-success-100 dark:bg-success-500/20";
        default:
          return "bg-brand-100 dark:bg-brand-500/20";
      }
    });
    return (u, c) => (o(), Z(Z0, {
      modelValue: a.value,
      "onUpdate:modelValue": c[0] || (c[0] = (f) => a.value = f),
      title: e.title,
      subtitle: e.message,
      confirmText: e.confirmText,
      cancelText: e.cancelText,
      loading: e.loading,
      variant: e.variant,
      size: "sm",
      onConfirm: c[1] || (c[1] = (f) => u.$emit("confirm")),
      onCancel: c[2] || (c[2] = (f) => u.$emit("cancel"))
    }, {
      default: z(() => [
        e.showIcon ? (o(), n("div", S0, [
          s("div", {
            class: g(
              d(m)(
                "flex h-12 w-12 items-center justify-center rounded-full",
                i.value
              )
            )
          }, [
            e.variant === "danger" ? (o(), n("svg", I0, [...c[3] || (c[3] = [
              s("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              }, null, -1)
            ])])) : e.variant === "success" ? (o(), n("svg", z0, [...c[4] || (c[4] = [
              s("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M5 13l4 4L19 7"
              }, null, -1)
            ])])) : (o(), n("svg", D0, [...c[5] || (c[5] = [
              s("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              }, null, -1)
            ])]))
          ], 2)
        ])) : b("", !0),
        M(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["modelValue", "title", "subtitle", "confirmText", "cancelText", "loading", "variant"]));
  }
}), Xe = Symbol("sidebar");
function T0(e = {}) {
  const { initialExpanded: t = !0, mobileBreakpoint: r = 768 } = e, l = D(t), a = D(!1), i = D(!1), u = D(!1), c = D(null), f = D(null), h = () => {
    const B = window.innerWidth < r;
    i.value = B, B || (a.value = !1);
  };
  Y(() => {
    h(), window.addEventListener("resize", h);
  }), he(() => {
    window.removeEventListener("resize", h);
  });
  const x = () => {
    i.value ? a.value = !a.value : l.value = !l.value;
  }, v = () => {
    a.value = !a.value;
  }, p = () => {
    a.value = !1;
  }, y = (B) => {
    u.value = B;
  }, V = (B) => {
    c.value = B;
  }, S = (B) => {
    f.value = f.value === B ? null : B;
  }, H = {
    isExpanded: w(() => i.value ? !1 : l.value),
    isMobileOpen: a,
    isHovered: u,
    activeItem: c,
    openSubmenu: f,
    toggleSidebar: x,
    toggleMobileSidebar: v,
    closeMobileSidebar: p,
    setIsHovered: y,
    setActiveItem: V,
    toggleSubmenu: S
  };
  return Pe(Xe, H), H;
}
function K() {
  const e = qe(Xe);
  return e || {
    isExpanded: w(() => !0),
    isMobileOpen: D(!1),
    isHovered: D(!1),
    activeItem: D(null),
    openSubmenu: D(null),
    toggleSidebar: () => {
    },
    toggleMobileSidebar: () => {
    },
    closeMobileSidebar: () => {
    },
    setIsHovered: () => {
    },
    setActiveItem: () => {
    },
    toggleSubmenu: () => {
    }
  };
}
const j0 = { class: "flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar flex-1" }, A0 = { class: "mb-6" }, E0 = {
  key: 0,
  class: "mt-auto"
}, G0 = /* @__PURE__ */ L({
  __name: "Sidebar",
  props: {
    hoverExpand: { type: Boolean, default: !0 },
    closeOnNavigate: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, {
      isExpanded: r,
      isMobileOpen: l,
      isHovered: a,
      setIsHovered: i,
      closeMobileSidebar: u
    } = K();
    let c = null;
    try {
      c = Fe();
    } catch {
    }
    c && be(
      () => c.path,
      () => {
        t.closeOnNavigate && u();
      }
    );
    const f = () => {
      t.hoverExpand && !r.value && i(!0);
    }, h = () => {
      i(!1);
    };
    return (x, v) => (o(), n("aside", {
      "aria-label": "Sidebar navigation",
      class: g(
        d(m)(
          "fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 dark:text-gray-100 h-screen transition-all duration-300 ease-in-out z-[9999] border-r border-gray-200",
          d(r) || d(l) || d(a) ? "lg:w-[290px]" : "lg:w-[90px]",
          d(l) ? "translate-x-0 w-[290px]" : "-translate-x-full",
          "lg:translate-x-0"
        )
      ),
      onMouseenter: f,
      onMouseleave: h
    }, [
      s("div", {
        class: g(
          d(m)(
            "py-8 flex",
            !d(r) && !d(a) ? "lg:justify-center" : "justify-start"
          )
        )
      }, [
        M(x.$slots, "logo", {
          isExpanded: d(r),
          isHovered: d(a),
          isMobileOpen: d(l)
        })
      ], 2),
      s("div", j0, [
        s("nav", A0, [
          M(x.$slots, "default", {
            isExpanded: d(r),
            isHovered: d(a),
            isMobileOpen: d(l),
            isCollapsed: !d(r) && !d(a) && !d(l)
          })
        ]),
        d(r) || d(a) || d(l) ? (o(), n("div", E0, [
          M(x.$slots, "footer", {
            isExpanded: d(r),
            isHovered: d(a),
            isMobileOpen: d(l)
          })
        ])) : b("", !0)
      ])
    ], 34));
  }
}), q0 = { class: "sticky top-0 flex w-full bg-white border-gray-200 z-[9999] dark:border-gray-800 dark:bg-gray-900 lg:border-b" }, P0 = { class: "flex flex-col items-center justify-between grow lg:flex-row lg:px-6" }, F0 = { class: "flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-gray-200 dark:border-gray-800 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4" }, O0 = {
  key: 0,
  class: "fill-current",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, R0 = {
  key: 1,
  width: "16",
  height: "12",
  viewBox: "0 0 16 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, N0 = ["aria-label", "aria-expanded"], W0 = { class: "hidden lg:block flex-1" }, U0 = /* @__PURE__ */ L({
  __name: "Header",
  setup(e) {
    const { toggleSidebar: t, toggleMobileSidebar: r, isMobileOpen: l } = K(), a = D(!1), i = () => {
      typeof window < "u" && window.innerWidth >= 1024 ? t() : r();
    }, u = () => {
      a.value = !a.value;
    };
    return (c, f) => (o(), n("header", q0, [
      s("div", P0, [
        s("div", F0, [
          s("button", {
            type: "button",
            onClick: i,
            "aria-label": "Toggle sidebar",
            class: g(
              d(m)(
                "flex items-center justify-center w-10 h-10 text-gray-500 border-gray-200 rounded-lg z-[9999] dark:border-gray-800 dark:text-gray-400 lg:h-11 lg:w-11 lg:border",
                d(l) ? "lg:bg-transparent dark:lg:bg-transparent bg-gray-100 dark:bg-gray-800" : ""
              )
            )
          }, [
            d(l) ? (o(), n("svg", O0, [...f[0] || (f[0] = [
              s("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92775 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7782 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z",
                fill: "currentColor"
              }, null, -1)
            ])])) : (o(), n("svg", R0, [...f[1] || (f[1] = [
              s("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M0.583252 1C0.583252 0.585788 0.919038 0.25 1.33325 0.25H14.6666C15.0808 0.25 15.4166 0.585786 15.4166 1C15.4166 1.41421 15.0808 1.75 14.6666 1.75L1.33325 1.75C0.919038 1.75 0.583252 1.41422 0.583252 1ZM0.583252 11C0.583252 10.5858 0.919038 10.25 1.33325 10.25L14.6666 10.25C15.0808 10.25 15.4166 10.5858 15.4166 11C15.4166 11.4142 15.0808 11.75 14.6666 11.75L1.33325 11.75C0.919038 11.75 0.583252 11.4142 0.583252 11ZM1.33325 5.25C0.919038 5.25 0.583252 5.58579 0.583252 6C0.583252 6.41421 0.919038 6.75 1.33325 6.75L7.99992 6.75C8.41413 6.75 8.74992 6.41421 8.74992 6C8.74992 5.58579 8.41413 5.25 7.99992 5.25L1.33325 5.25Z",
                fill: "currentColor"
              }, null, -1)
            ])]))
          ], 2),
          M(c.$slots, "logo"),
          s("button", {
            type: "button",
            onClick: u,
            "aria-label": a.value ? "Close menu" : "Open menu",
            "aria-expanded": a.value,
            class: "flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg z-[9999] hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 lg:hidden"
          }, [...f[2] || (f[2] = [
            s("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              s("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M5.99902 10.4951C6.82745 10.4951 7.49902 11.1667 7.49902 11.9951V12.0051C7.49902 12.8335 6.82745 13.5051 5.99902 13.5051C5.1706 13.5051 4.49902 12.8335 4.49902 12.0051V11.9951C4.49902 11.1667 5.1706 10.4951 5.99902 10.4951ZM17.999 10.4951C18.8275 10.4951 19.499 11.1667 19.499 11.9951V12.0051C19.499 12.8335 18.8275 13.5051 17.999 13.5051C17.1706 13.5051 16.499 12.8335 16.499 12.0051V11.9951C16.499 11.1667 17.1706 10.4951 17.999 10.4951ZM13.499 11.9951C13.499 11.1667 12.8275 10.4951 11.999 10.4951C11.1706 10.4951 10.499 11.1667 10.499 11.9951V12.0051C10.499 12.8335 11.1706 13.5051 11.999 13.5051C12.8275 13.5051 13.499 12.8335 13.499 12.0051V11.9951Z",
                fill: "currentColor"
              })
            ], -1)
          ])], 8, N0),
          s("div", W0, [
            M(c.$slots, "center")
          ])
        ]),
        s("div", {
          class: g(
            d(m)(
              "items-center justify-between w-full gap-4 px-5 py-4 shadow-theme-md lg:flex lg:justify-end lg:px-0 lg:shadow-none",
              a.value ? "flex" : "hidden"
            )
          )
        }, [
          M(c.$slots, "actions")
        ], 2)
      ])
    ]));
  }
}), K0 = /* @__PURE__ */ L({
  __name: "Backdrop",
  setup(e) {
    const { toggleMobileSidebar: t, isMobileOpen: r } = K();
    return (l, a) => (o(), Z(ne, {
      "enter-active-class": "transition-opacity duration-200",
      "enter-from-class": "opacity-0",
      "enter-to-class": "opacity-100",
      "leave-active-class": "transition-opacity duration-200",
      "leave-from-class": "opacity-100",
      "leave-to-class": "opacity-0"
    }, {
      default: z(() => [
        d(r) ? (o(), n("div", {
          key: 0,
          class: "fixed inset-0 bg-gray-900/50 z-[9998] lg:hidden",
          onClick: a[0] || (a[0] = //@ts-ignore
          (...i) => d(t) && d(t)(...i))
        })) : b("", !0)
      ]),
      _: 1
    }));
  }
}), J0 = { class: "min-h-screen xl:flex bg-gray-50 dark:bg-gray-950" }, X0 = { class: "p-4 mx-auto max-w-screen-2xl md:p-6" }, ia = /* @__PURE__ */ L({
  __name: "AdminLayout",
  setup(e) {
    const { isExpanded: t, isHovered: r } = K();
    return (l, a) => (o(), n("div", J0, [
      M(l.$slots, "sidebar", {}, () => [
        W(G0, null, {
          logo: z((i) => [
            M(l.$slots, "sidebar-logo", pe(ye(i)))
          ]),
          default: z((i) => [
            M(l.$slots, "sidebar-nav", pe(ye(i)))
          ]),
          footer: z((i) => [
            M(l.$slots, "sidebar-footer", pe(ye(i)))
          ]),
          _: 3
        })
      ]),
      W(K0),
      s("div", {
        class: g(["flex-1 transition-all duration-300 ease-in-out", [d(t) || d(r) ? "lg:ml-[290px]" : "lg:ml-[90px]"]])
      }, [
        M(l.$slots, "header", {}, () => [
          W(U0, null, {
            logo: z(() => [
              M(l.$slots, "header-logo")
            ]),
            center: z(() => [
              M(l.$slots, "header-center")
            ]),
            actions: z(() => [
              M(l.$slots, "header-actions")
            ]),
            _: 3
          })
        ]),
        s("div", X0, [
          M(l.$slots, "default")
        ])
      ], 2)
    ]));
  }
}), da = /* @__PURE__ */ L({
  __name: "SidebarProvider",
  props: {
    initialExpanded: { type: Boolean, default: !0 },
    mobileBreakpoint: { default: 768 }
  },
  setup(e) {
    const t = e;
    return T0({
      initialExpanded: t.initialExpanded,
      mobileBreakpoint: t.mobileBreakpoint
    }), (r, l) => M(r.$slots, "default");
  }
}), Qe = Symbol("theme");
function X(e) {
  typeof document > "u" || (e === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"));
}
function ca(e = "theme", t = "light") {
  var l;
  if (typeof window > "u") return;
  const r = localStorage.getItem(e);
  if (r === "light" || r === "dark") {
    X(r);
    return;
  }
  if ((l = window.matchMedia) != null && l.call(window, "(prefers-color-scheme: dark)").matches) {
    X("dark");
    return;
  }
  X(t);
}
function Q0(e = {}) {
  const {
    storageKey: t = "theme",
    defaultTheme: r = "light",
    syncWithSystem: l = !0
  } = e, a = D(r), i = D(!1), u = w(() => a.value === "dark"), c = () => {
    a.value = a.value === "light" ? "dark" : "light";
  }, f = (x) => {
    a.value = x;
  };
  Y(() => {
    var p;
    const x = localStorage.getItem(t);
    let v;
    x === "light" || x === "dark" ? v = x : l && ((p = window.matchMedia) != null && p.call(window, "(prefers-color-scheme: dark)").matches) ? v = "dark" : v = r, a.value = v, X(v), i.value = !0, l && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (y) => {
      if (!localStorage.getItem(t)) {
        const V = y.matches ? "dark" : "light";
        a.value = V, X(V);
      }
    });
  }), be([a, i], ([x, v]) => {
    v && (localStorage.setItem(t, x), X(x));
  });
  const h = {
    theme: a,
    isDarkMode: u,
    toggleTheme: c,
    setTheme: f
  };
  return Pe(Qe, h), h;
}
function Y0() {
  const e = qe(Qe);
  return e || {
    theme: D("light"),
    isDarkMode: w(() => !1),
    toggleTheme: () => {
    },
    setTheme: () => {
    }
  };
}
const ua = /* @__PURE__ */ L({
  __name: "ThemeProvider",
  props: {
    storageKey: { default: "theme" },
    defaultTheme: { default: "light" },
    syncWithSystem: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e;
    return Q0({
      storageKey: t.storageKey,
      defaultTheme: t.defaultTheme,
      syncWithSystem: t.syncWithSystem
    }), (r, l) => M(r.$slots, "default");
  }
}), er = ["aria-label"], ga = /* @__PURE__ */ L({
  __name: "ThemeToggler",
  setup(e) {
    const { isDarkMode: t, toggleTheme: r } = Y0();
    return (l, a) => (o(), n("button", {
      type: "button",
      "aria-label": d(t) ? "Switch to light mode" : "Switch to dark mode",
      class: "relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-dark-900 h-11 w-11 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",
      onClick: a[0] || (a[0] = Ae(
        //@ts-ignore
        (...i) => d(r) && d(r)(...i),
        ["prevent"]
      ))
    }, [...a[1] || (a[1] = [
      s("svg", {
        class: "hidden dark:block",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        s("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M9.99998 1.5415C10.4142 1.5415 10.75 1.87729 10.75 2.2915V3.5415C10.75 3.95572 10.4142 4.2915 9.99998 4.2915C9.58577 4.2915 9.24998 3.95572 9.24998 3.5415V2.2915C9.24998 1.87729 9.58577 1.5415 9.99998 1.5415ZM10.0009 6.79327C8.22978 6.79327 6.79402 8.22904 6.79402 10.0001C6.79402 11.7712 8.22978 13.207 10.0009 13.207C11.772 13.207 13.2078 11.7712 13.2078 10.0001C13.2078 8.22904 11.772 6.79327 10.0009 6.79327ZM5.29402 10.0001C5.29402 7.40061 7.40135 5.29327 10.0009 5.29327C12.6004 5.29327 14.7078 7.40061 14.7078 10.0001C14.7078 12.5997 12.6004 14.707 10.0009 14.707C7.40135 14.707 5.29402 12.5997 5.29402 10.0001ZM15.9813 5.08035C16.2742 4.78746 16.2742 4.31258 15.9813 4.01969C15.6884 3.7268 15.2135 3.7268 14.9207 4.01969L14.0368 4.90357C13.7439 5.19647 13.7439 5.67134 14.0368 5.96423C14.3297 6.25713 14.8045 6.25713 15.0974 5.96423L15.9813 5.08035ZM18.4577 10.0001C18.4577 10.4143 18.1219 10.7501 17.7077 10.7501H16.4577C16.0435 10.7501 15.7077 10.4143 15.7077 10.0001C15.7077 9.58592 16.0435 9.25013 16.4577 9.25013H17.7077C18.1219 9.25013 18.4577 9.58592 18.4577 10.0001ZM14.9207 15.9806C15.2135 16.2735 15.6884 16.2735 15.9813 15.9806C16.2742 15.6877 16.2742 15.2128 15.9813 14.9199L15.0974 14.036C14.8045 13.7431 14.3297 13.7431 14.0368 14.036C13.7439 14.3289 13.7439 14.8038 14.0368 15.0967L14.9207 15.9806ZM9.99998 15.7088C10.4142 15.7088 10.75 16.0445 10.75 16.4588V17.7088C10.75 18.123 10.4142 18.4588 9.99998 18.4588C9.58577 18.4588 9.24998 18.123 9.24998 17.7088V16.4588C9.24998 16.0445 9.58577 15.7088 9.99998 15.7088ZM5.96356 15.0972C6.25646 14.8043 6.25646 14.3295 5.96356 14.0366C5.67067 13.7437 5.1958 13.7437 4.9029 14.0366L4.01902 14.9204C3.72613 15.2133 3.72613 15.6882 4.01902 15.9811C4.31191 16.274 4.78679 16.274 5.07968 15.9811L5.96356 15.0972ZM4.29224 10.0001C4.29224 10.4143 3.95645 10.7501 3.54224 10.7501H2.29224C1.87802 10.7501 1.54224 10.4143 1.54224 10.0001C1.54224 9.58592 1.87802 9.25013 2.29224 9.25013H3.54224C3.95645 9.25013 4.29224 9.58592 4.29224 10.0001ZM5.96356 4.90298C6.25646 5.19587 6.25646 5.67075 5.96356 5.96364C5.67067 6.25654 5.1958 6.25654 4.9029 5.96364L4.01902 5.07977C3.72613 4.78687 3.72613 4.312 4.01902 4.0191C4.31191 3.72621 4.78679 3.72621 5.07968 4.0191L5.96356 4.90298Z",
          fill: "currentColor"
        })
      ], -1),
      s("svg", {
        class: "dark:hidden",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        s("path", {
          d: "M17.4547 11.97L18.1799 12.1611C18.265 11.8383 18.1265 11.4982 17.8401 11.3266C17.5538 11.1551 17.1885 11.1934 16.944 11.4207L17.4547 11.97ZM8.0306 2.5459L8.57989 3.05657C8.80718 2.81209 8.84554 2.44682 8.67398 2.16046C8.50243 1.8741 8.16227 1.73559 7.83948 1.82066L8.0306 2.5459ZM12.9154 13.0035C9.64678 13.0035 6.99707 10.3538 6.99707 7.08524H5.49707C5.49707 11.1823 8.81835 14.5035 12.9154 14.5035V13.0035ZM16.944 11.4207C15.8869 12.4035 14.4721 13.0035 12.9154 13.0035V14.5035C14.8657 14.5035 16.6418 13.7499 17.9654 12.5193L16.944 11.4207ZM16.7295 11.7789C15.9437 14.7607 13.2277 16.9586 10.0003 16.9586V18.4586C13.9257 18.4586 17.2249 15.7853 18.1799 12.1611L16.7295 11.7789ZM10.0003 16.9586C6.15734 16.9586 3.04199 13.8433 3.04199 10.0003H1.54199C1.54199 14.6717 5.32892 18.4586 10.0003 18.4586V16.9586ZM3.04199 10.0003C3.04199 6.77289 5.23988 4.05695 8.22173 3.27114L7.83948 1.82066C4.21532 2.77574 1.54199 6.07486 1.54199 10.0003H3.04199ZM6.99707 7.08524C6.99707 5.52854 7.5971 4.11366 8.57989 3.05657L7.48132 2.03522C6.25073 3.35885 5.49707 5.13487 5.49707 7.08524H6.99707Z",
          fill: "currentColor"
        })
      ], -1)
    ])], 8, er));
  }
}), tr = ["src", "alt"], fa = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "Avatar",
  props: {
    src: {},
    alt: { default: "User Avatar" },
    size: { default: "medium" },
    status: { default: "none" },
    name: {},
    initials: {},
    initialsBgClass: { default: "bg-brand-100 dark:bg-brand-900" },
    initialsTextClass: { default: "text-brand-600 dark:text-brand-400" },
    class: {}
  },
  setup(e) {
    const t = e, r = w(() => t.initials ? t.initials : t.name ? t.name.split(" ").map((u) => u[0]).join("").toUpperCase().slice(0, 2) : "?"), l = {
      xsmall: "h-6 w-6 text-xs",
      small: "h-8 w-8 text-xs",
      medium: "h-10 w-10 text-sm",
      large: "h-12 w-12 text-base",
      xlarge: "h-14 w-14 text-lg",
      xxlarge: "h-16 w-16 text-xl"
    }, a = {
      xsmall: "h-1.5 w-1.5",
      small: "h-2 w-2",
      medium: "h-2.5 w-2.5",
      large: "h-3 w-3",
      xlarge: "h-3.5 w-3.5",
      xxlarge: "h-4 w-4"
    }, i = {
      online: "bg-success-500",
      offline: "bg-error-400",
      busy: "bg-warning-500"
    };
    return (u, c) => (o(), n("div", {
      class: g(
        d(m)("relative rounded-full flex-shrink-0", l[e.size], t.class)
      )
    }, [
      e.src ? (o(), n("img", {
        key: 0,
        src: e.src,
        alt: e.alt,
        class: "object-cover rounded-full w-full h-full"
      }, null, 8, tr)) : (o(), n("div", {
        key: 1,
        class: g(
          d(m)(
            "flex items-center justify-center rounded-full w-full h-full font-medium",
            e.initialsBgClass,
            e.initialsTextClass
          )
        )
      }, C(r.value), 3)),
      e.status !== "none" ? (o(), n("span", {
        key: 2,
        class: g(
          d(m)(
            "absolute bottom-0 right-0 rounded-full border-[1.5px] border-white dark:border-gray-900",
            a[e.size],
            i[e.status] || ""
          )
        )
      }, null, 2)) : b("", !0)
    ], 2));
  }
}), rr = {
  key: 0,
  class: "px-6 py-5"
}, or = { class: "text-base font-medium text-gray-800 dark:text-white/90" }, sr = {
  key: 0,
  class: "mt-1 text-sm text-gray-500 dark:text-gray-400"
}, lr = {
  key: 1,
  class: "px-6 py-4 border-t border-gray-100 dark:border-gray-800"
}, te = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "Card",
  props: {
    title: {},
    description: {},
    class: {},
    contentClass: { default: "space-y-5" }
  },
  setup(e) {
    const t = e;
    return (r, l) => (o(), n("div", {
      class: g(
        d(m)(
          "rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]",
          t.class
        )
      )
    }, [
      e.title || r.$slots.header ? (o(), n("div", rr, [
        M(r.$slots, "header", {}, () => [
          s("h3", or, C(e.title), 1),
          e.description ? (o(), n("p", sr, C(e.description), 1)) : b("", !0)
        ])
      ])) : b("", !0),
      s("div", {
        class: g(
          d(m)(
            "p-4 sm:p-6",
            (e.title || r.$slots.header) && "border-t border-gray-100 dark:border-gray-800"
          )
        )
      }, [
        s("div", {
          class: g(e.contentClass)
        }, [
          M(r.$slots, "default")
        ], 2)
      ], 2),
      r.$slots.footer ? (o(), n("div", lr, [
        M(r.$slots, "footer")
      ])) : b("", !0)
    ], 2));
  }
}), re = {
  red: {
    trackLight: "stroke-red-200",
    trackDark: "dark:stroke-red-900/40",
    bar: "stroke-red-500",
    textLight: "text-red-600",
    textDark: "dark:text-red-400",
    gradient: "from-red-500/5",
    iconBg: "bg-red-100",
    iconBgDark: "dark:bg-red-500/10",
    hoverBorder: "hover:border-red-500/30",
    barGradient: "from-red-600 to-red-400",
    barSolid: "bg-red-500",
    barSolidMuted: "bg-red-500/50",
    barSolidFaded: "bg-red-500/25"
  },
  orange: {
    trackLight: "stroke-orange-200",
    trackDark: "dark:stroke-orange-900/40",
    bar: "stroke-orange-500",
    textLight: "text-orange-600",
    textDark: "dark:text-orange-400",
    gradient: "from-orange-500/5",
    iconBg: "bg-orange-100",
    iconBgDark: "dark:bg-orange-500/10",
    hoverBorder: "hover:border-orange-500/30",
    barGradient: "from-orange-600 to-orange-400",
    barSolid: "bg-orange-500",
    barSolidMuted: "bg-orange-500/50",
    barSolidFaded: "bg-orange-500/25"
  },
  amber: {
    trackLight: "stroke-amber-200",
    trackDark: "dark:stroke-amber-900/30",
    bar: "stroke-amber-500",
    textLight: "text-amber-600",
    textDark: "dark:text-amber-400",
    gradient: "from-amber-500/5",
    iconBg: "bg-amber-100",
    iconBgDark: "dark:bg-amber-500/10",
    hoverBorder: "hover:border-amber-500/30",
    barGradient: "from-amber-600 to-amber-400",
    barSolid: "bg-amber-500",
    barSolidMuted: "bg-amber-500/50",
    barSolidFaded: "bg-amber-500/25"
  },
  yellow: {
    trackLight: "stroke-yellow-200",
    trackDark: "dark:stroke-yellow-900/30",
    bar: "stroke-yellow-500",
    textLight: "text-yellow-600",
    textDark: "dark:text-yellow-400",
    gradient: "from-yellow-500/5",
    iconBg: "bg-yellow-100",
    iconBgDark: "dark:bg-yellow-500/10",
    hoverBorder: "hover:border-yellow-500/30",
    barGradient: "from-yellow-600 to-yellow-400",
    barSolid: "bg-yellow-500",
    barSolidMuted: "bg-yellow-500/50",
    barSolidFaded: "bg-yellow-500/25"
  },
  lime: {
    trackLight: "stroke-lime-200",
    trackDark: "dark:stroke-lime-900/30",
    bar: "stroke-lime-500",
    textLight: "text-lime-600",
    textDark: "dark:text-lime-400",
    gradient: "from-lime-500/5",
    iconBg: "bg-lime-100",
    iconBgDark: "dark:bg-lime-500/10",
    hoverBorder: "hover:border-lime-500/30",
    barGradient: "from-lime-600 to-lime-400",
    barSolid: "bg-lime-500",
    barSolidMuted: "bg-lime-500/50",
    barSolidFaded: "bg-lime-500/25"
  },
  green: {
    trackLight: "stroke-green-200",
    trackDark: "dark:stroke-green-900/30",
    bar: "stroke-green-500",
    textLight: "text-green-600",
    textDark: "dark:text-green-400",
    gradient: "from-green-500/5",
    iconBg: "bg-green-100",
    iconBgDark: "dark:bg-green-500/10",
    hoverBorder: "hover:border-green-500/30",
    barGradient: "from-green-600 to-green-400",
    barSolid: "bg-green-500",
    barSolidMuted: "bg-green-500/50",
    barSolidFaded: "bg-green-500/25"
  },
  emerald: {
    trackLight: "stroke-emerald-200",
    trackDark: "dark:stroke-emerald-900/30",
    bar: "stroke-emerald-500",
    textLight: "text-emerald-600",
    textDark: "dark:text-emerald-400",
    gradient: "from-emerald-500/5",
    iconBg: "bg-emerald-100",
    iconBgDark: "dark:bg-emerald-500/10",
    hoverBorder: "hover:border-emerald-500/30",
    barGradient: "from-emerald-600 to-emerald-400",
    barSolid: "bg-emerald-500",
    barSolidMuted: "bg-emerald-500/50",
    barSolidFaded: "bg-emerald-500/25"
  },
  teal: {
    trackLight: "stroke-teal-200",
    trackDark: "dark:stroke-teal-900/30",
    bar: "stroke-teal-500",
    textLight: "text-teal-600",
    textDark: "dark:text-teal-400",
    gradient: "from-teal-500/5",
    iconBg: "bg-teal-100",
    iconBgDark: "dark:bg-teal-500/10",
    hoverBorder: "hover:border-teal-500/30",
    barGradient: "from-teal-600 to-teal-400",
    barSolid: "bg-teal-500",
    barSolidMuted: "bg-teal-500/50",
    barSolidFaded: "bg-teal-500/25"
  },
  cyan: {
    trackLight: "stroke-cyan-200",
    trackDark: "dark:stroke-cyan-900/30",
    bar: "stroke-cyan-500",
    textLight: "text-cyan-600",
    textDark: "dark:text-cyan-400",
    gradient: "from-cyan-500/5",
    iconBg: "bg-cyan-100",
    iconBgDark: "dark:bg-cyan-500/10",
    hoverBorder: "hover:border-cyan-500/30",
    barGradient: "from-cyan-600 to-cyan-400",
    barSolid: "bg-cyan-500",
    barSolidMuted: "bg-cyan-500/50",
    barSolidFaded: "bg-cyan-500/25"
  },
  sky: {
    trackLight: "stroke-sky-200",
    trackDark: "dark:stroke-sky-900/30",
    bar: "stroke-sky-500",
    textLight: "text-sky-600",
    textDark: "dark:text-sky-400",
    gradient: "from-sky-500/5",
    iconBg: "bg-sky-100",
    iconBgDark: "dark:bg-sky-500/10",
    hoverBorder: "hover:border-sky-500/30",
    barGradient: "from-sky-600 to-sky-400",
    barSolid: "bg-sky-500",
    barSolidMuted: "bg-sky-500/50",
    barSolidFaded: "bg-sky-500/25"
  },
  blue: {
    trackLight: "stroke-blue-200",
    trackDark: "dark:stroke-blue-900/30",
    bar: "stroke-blue-500",
    textLight: "text-blue-600",
    textDark: "dark:text-blue-400",
    gradient: "from-blue-500/5",
    iconBg: "bg-blue-100",
    iconBgDark: "dark:bg-blue-500/10",
    hoverBorder: "hover:border-blue-500/30",
    barGradient: "from-blue-600 to-blue-400",
    barSolid: "bg-blue-500",
    barSolidMuted: "bg-blue-500/50",
    barSolidFaded: "bg-blue-500/25"
  },
  indigo: {
    trackLight: "stroke-indigo-200",
    trackDark: "dark:stroke-indigo-900/30",
    bar: "stroke-indigo-500",
    textLight: "text-indigo-600",
    textDark: "dark:text-indigo-400",
    gradient: "from-indigo-500/5",
    iconBg: "bg-indigo-100",
    iconBgDark: "dark:bg-indigo-500/10",
    hoverBorder: "hover:border-indigo-500/30",
    barGradient: "from-indigo-600 to-indigo-400",
    barSolid: "bg-indigo-500",
    barSolidMuted: "bg-indigo-500/50",
    barSolidFaded: "bg-indigo-500/25"
  },
  violet: {
    trackLight: "stroke-violet-200",
    trackDark: "dark:stroke-violet-900/30",
    bar: "stroke-violet-500",
    textLight: "text-violet-600",
    textDark: "dark:text-violet-400",
    gradient: "from-violet-500/5",
    iconBg: "bg-violet-100",
    iconBgDark: "dark:bg-violet-500/10",
    hoverBorder: "hover:border-violet-500/30",
    barGradient: "from-violet-600 to-violet-400",
    barSolid: "bg-violet-500",
    barSolidMuted: "bg-violet-500/50",
    barSolidFaded: "bg-violet-500/25"
  },
  purple: {
    trackLight: "stroke-purple-200",
    trackDark: "dark:stroke-purple-900/30",
    bar: "stroke-purple-500",
    textLight: "text-purple-600",
    textDark: "dark:text-purple-400",
    gradient: "from-purple-500/5",
    iconBg: "bg-purple-100",
    iconBgDark: "dark:bg-purple-500/10",
    hoverBorder: "hover:border-purple-500/30",
    barGradient: "from-purple-600 to-purple-400",
    barSolid: "bg-purple-500",
    barSolidMuted: "bg-purple-500/50",
    barSolidFaded: "bg-purple-500/25"
  },
  fuchsia: {
    trackLight: "stroke-fuchsia-200",
    trackDark: "dark:stroke-fuchsia-900/30",
    bar: "stroke-fuchsia-500",
    textLight: "text-fuchsia-600",
    textDark: "dark:text-fuchsia-400",
    gradient: "from-fuchsia-500/5",
    iconBg: "bg-fuchsia-100",
    iconBgDark: "dark:bg-fuchsia-500/10",
    hoverBorder: "hover:border-fuchsia-500/30",
    barGradient: "from-fuchsia-600 to-fuchsia-400",
    barSolid: "bg-fuchsia-500",
    barSolidMuted: "bg-fuchsia-500/50",
    barSolidFaded: "bg-fuchsia-500/25"
  },
  pink: {
    trackLight: "stroke-pink-200",
    trackDark: "dark:stroke-pink-900/30",
    bar: "stroke-pink-500",
    textLight: "text-pink-600",
    textDark: "dark:text-pink-400",
    gradient: "from-pink-500/5",
    iconBg: "bg-pink-100",
    iconBgDark: "dark:bg-pink-500/10",
    hoverBorder: "hover:border-pink-500/30",
    barGradient: "from-pink-600 to-pink-400",
    barSolid: "bg-pink-500",
    barSolidMuted: "bg-pink-500/50",
    barSolidFaded: "bg-pink-500/25"
  },
  rose: {
    trackLight: "stroke-rose-200",
    trackDark: "dark:stroke-rose-900/30",
    bar: "stroke-rose-500",
    textLight: "text-rose-600",
    textDark: "dark:text-rose-400",
    gradient: "from-rose-500/5",
    iconBg: "bg-rose-100",
    iconBgDark: "dark:bg-rose-500/10",
    hoverBorder: "hover:border-rose-500/30",
    barGradient: "from-rose-600 to-rose-400",
    barSolid: "bg-rose-500",
    barSolidMuted: "bg-rose-500/50",
    barSolidFaded: "bg-rose-500/25"
  },
  brand: {
    trackLight: "stroke-brand-200",
    trackDark: "dark:stroke-brand-900/30",
    bar: "stroke-brand-500",
    textLight: "text-brand-600",
    textDark: "dark:text-brand-400",
    gradient: "from-brand-500/5",
    iconBg: "bg-brand-100",
    iconBgDark: "dark:bg-brand-500/10",
    hoverBorder: "hover:border-brand-500/30",
    barGradient: "from-brand-600 to-brand-400",
    barSolid: "bg-brand-500",
    barSolidMuted: "bg-brand-500/50",
    barSolidFaded: "bg-brand-500/25"
  }
};
function Ye(e, t, r) {
  if (!r || r.length === 0) return t;
  const l = [...r].sort((a, i) => a.at - i.at);
  for (const a of l)
    if (e < a.at) return a.color;
  return t;
}
const ar = { class: "relative p-4 flex flex-col items-center" }, nr = { class: "text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2" }, ir = { class: "relative w-40 h-24" }, dr = {
  viewBox: "0 0 160 90",
  class: "w-full h-full"
}, cr = ["stroke-dashoffset"], ur = { class: "absolute inset-0 flex flex-col items-center justify-end pb-0" }, gr = { class: "flex items-baseline gap-0.5" }, fr = { class: "text-xs text-gray-400 dark:text-gray-500" }, br = {
  key: 0,
  class: "text-xs text-gray-400 dark:text-gray-500 mt-1"
}, hr = {
  key: 0,
  class: "relative px-4 pb-4"
}, mr = { class: "border-t border-gray-200 dark:border-gray-800 pt-3 space-y-1.5" }, Cr = { class: "text-[11px] text-gray-400 dark:text-gray-500" }, xr = { class: "text-[11px] font-medium tabular-nums text-gray-700 dark:text-gray-300" }, vr = 70, ze = 10, ba = /* @__PURE__ */ L({
  __name: "SemiCircleGauge",
  props: {
    label: {},
    value: {},
    max: {},
    unit: {},
    subtitle: {},
    color: { default: "sky" },
    thresholds: { default: () => [
      { at: 15, color: "red" },
      { at: 30, color: "amber" }
    ] },
    adaptive: { type: Boolean, default: !0 },
    details: {},
    locale: { default: "de-DE" },
    class: {}
  },
  setup(e) {
    const t = e, r = fe(), l = w(
      () => t.details && t.details.length > 0 || !!r.details
    ), a = w(() => t.value === null || t.max <= 0 ? 0 : Math.min(100, Math.max(0, t.value / t.max * 100))), i = w(() => t.value === null ? "--" : t.value.toLocaleString(t.locale)), u = w(() => t.adaptive ? Ye(a.value, t.color, t.thresholds) : t.color), c = w(() => re[u.value]), f = Math.PI * vr, h = w(
      () => f - a.value / 100 * f
    );
    return (x, v) => (o(), Z(te, {
      class: g(
        d(m)(
          "group relative overflow-hidden transition-colors",
          c.value.hoverBorder,
          t.class
        )
      ),
      "content-class": "!p-0"
    }, {
      default: z(() => [
        s("div", {
          class: g(`absolute inset-0 bg-gradient-to-br ${c.value.gradient} to-transparent`)
        }, null, 2),
        s("div", ar, [
          s("span", nr, C(e.label), 1),
          s("div", ir, [
            (o(), n("svg", dr, [
              s("path", {
                d: "M 10 80 A 70 70 0 0 1 150 80",
                fill: "none",
                class: g(d(m)(c.value.trackLight, c.value.trackDark)),
                "stroke-width": ze,
                "stroke-linecap": "round"
              }, null, 2),
              s("path", {
                d: "M 10 80 A 70 70 0 0 1 150 80",
                fill: "none",
                class: g(d(m)(c.value.bar, "transition-all duration-700 ease-out")),
                "stroke-width": ze,
                "stroke-linecap": "round",
                "stroke-dasharray": f,
                "stroke-dashoffset": h.value
              }, null, 10, cr)
            ])),
            s("div", ur, [
              s("div", gr, [
                s("span", {
                  class: g(
                    d(m)(
                      "text-2xl font-bold tabular-nums",
                      c.value.textLight,
                      c.value.textDark
                    )
                  )
                }, C(i.value), 3),
                s("span", fr, C(e.unit), 1)
              ])
            ])
          ]),
          e.subtitle ? (o(), n("span", br, C(e.subtitle), 1)) : b("", !0)
        ]),
        l.value ? (o(), n("div", hr, [
          s("div", mr, [
            M(x.$slots, "details", {}, () => [
              (o(!0), n(A, null, E(e.details, (p, y) => (o(), n("div", {
                key: y,
                class: "flex items-center justify-between"
              }, [
                s("span", Cr, C(p.label), 1),
                s("span", xr, C(p.value), 1)
              ]))), 128))
            ])
          ])
        ])) : b("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), pr = { class: "flex items-center justify-between px-5 pt-5" }, yr = { class: "text-sm font-medium text-gray-500 dark:text-gray-400" }, kr = { class: "flex items-baseline gap-1" }, wr = { class: "text-sm text-gray-400 dark:text-gray-500" }, $r = {
  key: 0,
  class: "flex items-center justify-between mb-2"
}, Vr = { class: "text-sm font-medium text-gray-500 dark:text-gray-400" }, Lr = { class: "flex items-baseline gap-1" }, Mr = { class: "text-xs text-gray-400 dark:text-gray-500" }, Hr = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, Br = { class: "text-xs font-semibold text-white mix-blend-difference" }, _r = {
  key: 0,
  class: "flex justify-between mt-1.5 text-xs text-gray-400 dark:text-gray-600"
}, ha = /* @__PURE__ */ L({
  __name: "ProgressBar",
  props: {
    label: {},
    value: {},
    max: { default: 100 },
    unit: { default: "%" },
    color: { default: "emerald" },
    thresholds: { default: () => [
      { at: 15, color: "red" },
      { at: 30, color: "amber" }
    ] },
    adaptive: { type: Boolean, default: !0 },
    showScale: { type: Boolean, default: !0 },
    scaleDivisions: { default: 4 },
    showInnerLabel: { type: Boolean, default: !0 },
    barHeight: { default: "h-5" },
    wrapped: { type: Boolean, default: !0 },
    class: {}
  },
  setup(e) {
    const t = e, r = w(() => t.value === null || t.max <= 0 ? 0 : Math.min(100, Math.max(0, t.value / t.max * 100))), l = w(() => Math.round(t.value ?? 0)), a = w(() => t.adaptive ? Ye(r.value, t.color, t.thresholds) : t.color), i = w(() => re[a.value]), u = w(() => {
      const c = [];
      for (let f = 0; f <= t.scaleDivisions; f++)
        c.push(Math.round(t.max / t.scaleDivisions * f));
      return c;
    });
    return (c, f) => (o(), Z(G(e.wrapped ? te : "div"), {
      class: g(t.class),
      "content-class": "!space-y-3"
    }, s1({
      default: z(() => [
        e.wrapped ? b("", !0) : (o(), n("div", $r, [
          s("span", Vr, C(e.label), 1),
          s("div", Lr, [
            s("span", {
              class: g(
                d(m)(
                  "text-lg font-bold tabular-nums",
                  i.value.textLight,
                  i.value.textDark
                )
              )
            }, C(e.value !== null ? l.value : "--"), 3),
            s("span", Mr, C(e.unit), 1)
          ])
        ])),
        s("div", {
          class: g(e.wrapped ? "px-5 pb-5" : "")
        }, [
          s("div", {
            class: g(
              d(m)(
                "relative w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden",
                e.barHeight
              )
            )
          }, [
            s("div", {
              class: g(
                d(m)(
                  "absolute inset-y-0 left-0 rounded-full bg-gradient-to-r transition-all duration-700 ease-out",
                  i.value.barGradient
                )
              ),
              style: Q({ width: `${r.value}%` })
            }, null, 6),
            e.showInnerLabel ? (o(), n("div", Hr, [
              s("span", Br, C(l.value) + " " + C(e.unit), 1)
            ])) : b("", !0)
          ], 2),
          e.showScale ? (o(), n("div", _r, [
            (o(!0), n(A, null, E(u.value, (h) => (o(), n("span", { key: h }, C(h) + C(e.unit), 1))), 128))
          ])) : b("", !0)
        ], 2)
      ]),
      _: 2
    }, [
      e.wrapped ? {
        name: "header",
        fn: z(() => [
          s("div", pr, [
            s("span", yr, C(e.label), 1),
            s("div", kr, [
              s("span", {
                class: g(
                  d(m)(
                    "text-2xl font-bold tabular-nums",
                    i.value.textLight,
                    i.value.textDark
                  )
                )
              }, C(e.value !== null ? l.value : "--"), 3),
              s("span", wr, C(e.unit), 1)
            ])
          ])
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["class"]));
  }
}), Zr = { class: "relative p-4" }, Sr = { class: "flex items-center gap-2 mb-3" }, Ir = { class: "text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" }, zr = { class: "flex items-baseline gap-1" }, Dr = {
  key: 0,
  class: "text-sm text-gray-400 dark:text-gray-500"
}, ma = /* @__PURE__ */ L({
  __name: "StatCard",
  props: {
    label: {},
    value: {},
    unit: {},
    color: { default: "sky" },
    subtitle: {},
    subtitleColor: {},
    pulse: { type: Boolean },
    absolute: { type: Boolean, default: !1 },
    locale: { default: "de-DE" },
    class: {}
  },
  setup(e) {
    const t = e, r = w(() => re[t.color]), l = w(() => {
      if (t.value === null || t.value === void 0) return "--";
      if (typeof t.value == "string") return t.value;
      const a = t.absolute ? Math.abs(t.value) : t.value;
      return Math.round(a).toLocaleString(t.locale);
    });
    return (a, i) => (o(), Z(te, {
      class: g(
        d(m)(
          "group relative overflow-hidden transition-colors",
          r.value.hoverBorder,
          t.class
        )
      ),
      "content-class": "!p-0"
    }, {
      default: z(() => [
        s("div", {
          class: g(`absolute inset-0 bg-gradient-to-br ${r.value.gradient} to-transparent`)
        }, null, 2),
        s("div", Zr, [
          s("div", Sr, [
            s("div", {
              class: g(
                d(m)(
                  "w-8 h-8 rounded-lg flex items-center justify-center",
                  r.value.iconBg,
                  r.value.iconBgDark
                )
              )
            }, [
              M(a.$slots, "icon")
            ], 2),
            s("span", Ir, C(e.label), 1),
            e.pulse ? (o(), n("div", {
              key: 0,
              class: g(
                d(m)(
                  "w-1.5 h-1.5 rounded-full animate-pulse ml-auto",
                  r.value.barSolid
                )
              )
            }, null, 2)) : b("", !0)
          ]),
          s("div", zr, [
            s("span", {
              class: g(
                d(m)(
                  "text-3xl font-bold tabular-nums",
                  r.value.textLight,
                  r.value.textDark
                )
              )
            }, C(l.value), 3),
            e.unit ? (o(), n("span", Dr, C(e.unit), 1)) : b("", !0)
          ]),
          e.subtitle ? (o(), n("div", {
            key: 0,
            class: g(
              d(m)(
                "text-xs mt-1",
                e.subtitleColor || "text-gray-400 dark:text-gray-500"
              )
            )
          }, C(e.subtitle), 3)) : b("", !0)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Tr = { class: "flex items-center justify-between" }, jr = { class: "text-sm text-gray-500 dark:text-gray-400" }, Ar = { class: "mt-1.5 w-full h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden" }, Er = {
  key: 0,
  class: "pt-2 border-t border-gray-200 dark:border-gray-800"
}, Ca = /* @__PURE__ */ L({
  __name: "StatsList",
  props: {
    rows: {},
    class: {}
  },
  setup(e) {
    const t = e;
    function r(i) {
      if (i.value === null) return "--";
      const u = i.decimals ?? 1, c = (Math.round(i.value * Math.pow(10, u)) / Math.pow(10, u)).toFixed(u);
      return i.unit ? `${c} ${i.unit}` : c;
    }
    function l(i) {
      if (i.value === null) return 0;
      const u = i.max ?? 100;
      return Math.min(100, Math.max(0, i.value / u * 100));
    }
    function a(i) {
      return re[i.color ?? "sky"];
    }
    return (i, u) => (o(), Z(te, {
      class: g(t.class),
      "content-class": "!space-y-4 !p-5"
    }, {
      default: z(() => [
        (o(!0), n(A, null, E(e.rows, (c, f) => (o(), n("div", { key: f }, [
          s("div", Tr, [
            s("span", jr, C(c.label), 1),
            s("span", {
              class: g(`text-sm font-medium tabular-nums ${a(c).textLight} ${a(c).textDark}`)
            }, C(r(c)), 3)
          ]),
          s("div", Ar, [
            s("div", {
              class: g(`h-full rounded-full ${a(c).barSolid} transition-all duration-700`),
              style: Q({ width: `${l(c)}%` })
            }, null, 6)
          ])
        ]))), 128)),
        i.$slots.footer ? (o(), n("div", Er, [
          M(i.$slots, "footer")
        ])) : b("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Gr = { class: "relative p-5" }, qr = {
  key: 0,
  class: "flex items-center justify-between mb-4"
}, Pr = {
  key: 0,
  class: "text-[9px] tabular-nums text-gray-400 dark:text-gray-500 leading-none mb-1 shrink-0"
}, Fr = { class: "w-full flex-1 relative" }, Or = {
  key: 2,
  class: "text-xs text-gray-400 dark:text-gray-600 text-center py-8"
}, xa = /* @__PURE__ */ L({
  __name: "BarChart",
  props: {
    items: {},
    color: { default: "sky" },
    height: { default: 140 },
    showValues: { type: Boolean, default: !0 },
    formatValue: {},
    minBarPercent: { default: 4 },
    showGroupBoundary: { type: Boolean, default: !0 },
    emptyLabel: { default: "Keine Daten verfügbar" },
    class: {}
  },
  setup(e) {
    const t = e, r = fe(), l = w(() => re[t.color]), a = w(() => t.items.length === 0 ? 1 : Math.max(...t.items.map((h) => h.value), 1));
    function i(h) {
      return h > 999 ? (h / 1e3).toFixed(1) : String(h);
    }
    function u(h) {
      return t.formatValue ? t.formatValue(h) : i(h);
    }
    function c(h) {
      return h <= 0 ? "0%" : `${Math.max(t.minBarPercent, h / a.value * 100)}%`;
    }
    const f = w(() => {
      if (!t.showGroupBoundary) return /* @__PURE__ */ new Set();
      const h = /* @__PURE__ */ new Set();
      for (let x = 1; x < t.items.length; x++)
        t.items[x].group !== void 0 && t.items[x - 1].group !== void 0 && t.items[x].group !== t.items[x - 1].group && h.add(x);
      return h;
    });
    return (h, x) => (o(), Z(te, {
      class: g(
        d(m)(
          "group relative overflow-hidden transition-colors",
          l.value.hoverBorder,
          t.class
        )
      ),
      "content-class": "!p-0"
    }, {
      default: z(() => [
        s("div", {
          class: g(`absolute inset-0 bg-gradient-to-br ${l.value.gradient} to-transparent`)
        }, null, 2),
        s("div", Gr, [
          d(r).header ? (o(), n("div", qr, [
            M(h.$slots, "header")
          ])) : b("", !0),
          e.items.length > 0 ? (o(), n("div", {
            key: 1,
            class: "flex items-end gap-1",
            style: Q({ height: `${e.height}px` })
          }, [
            (o(!0), n(A, null, E(e.items, (v, p) => {
              var y, V;
              return o(), n("div", {
                key: p,
                class: g([
                  "flex-1 flex flex-col items-center h-full",
                  d(m)(
                    f.value.has(p) ? "border-l border-gray-300 dark:border-gray-700 pl-0.5" : ""
                  )
                ])
              }, [
                e.showValues && v.value > 0 ? (o(), n("span", Pr, C(u(v.value)), 1)) : b("", !0),
                s("div", Fr, [
                  s("div", {
                    class: g(
                      d(m)(
                        "absolute bottom-0 left-0.5 right-0.5 rounded-t transition-all duration-500",
                        v.highlighted ? l.value.barSolid : v.group === ((y = e.items[e.items.length - 1]) == null ? void 0 : y.group) ? l.value.barSolidMuted : l.value.barSolidFaded
                      )
                    ),
                    style: Q({ height: c(v.value) })
                  }, null, 6)
                ]),
                s("span", {
                  class: g(
                    d(m)(
                      "text-[9px] leading-none mt-1.5 shrink-0",
                      v.highlighted ? `${l.value.textLight} ${l.value.textDark} font-medium` : v.group === ((V = e.items[e.items.length - 1]) == null ? void 0 : V.group) ? "text-gray-500 dark:text-gray-500" : "text-gray-300 dark:text-gray-500"
                    )
                  )
                }, C(v.label), 3)
              ], 2);
            }), 128))
          ], 4)) : (o(), n("div", Or, C(e.emptyLabel), 1))
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Rr = { class: "relative p-5" }, Nr = {
  key: 0,
  class: "flex items-center justify-between mb-4"
}, Wr = { class: "space-y-2" }, Ur = { class: "text-xs text-gray-400 dark:text-gray-500" }, Kr = {
  key: 1,
  class: "mt-4 pt-3 border-t border-gray-200 dark:border-gray-800"
}, va = /* @__PURE__ */ L({
  __name: "KeyValueList",
  props: {
    rows: {},
    color: { default: "sky" },
    showSeparators: { type: Boolean, default: !0 },
    class: {}
  },
  setup(e) {
    const t = e, r = fe(), l = w(() => re[t.color]);
    return (a, i) => (o(), Z(te, {
      class: g(
        d(m)(
          "group relative overflow-hidden transition-colors",
          l.value.hoverBorder,
          t.class
        )
      ),
      "content-class": "!p-0"
    }, {
      default: z(() => [
        s("div", {
          class: g(`absolute inset-0 bg-gradient-to-br ${l.value.gradient} to-transparent`)
        }, null, 2),
        s("div", Rr, [
          d(r).header ? (o(), n("div", Nr, [
            M(a.$slots, "header")
          ])) : b("", !0),
          s("div", Wr, [
            (o(!0), n(A, null, E(e.rows, (u, c) => (o(), n("div", {
              key: c,
              class: g([
                "flex items-center justify-between py-1",
                d(m)(
                  e.showSeparators && c < e.rows.length - 1 ? "border-b border-gray-100 dark:border-gray-800/50" : ""
                )
              ])
            }, [
              s("span", Ur, C(u.label), 1),
              s("span", {
                class: g(
                  d(m)(
                    "text-sm font-medium tabular-nums",
                    u.accent ? `${l.value.textLight} ${l.value.textDark}` : "text-gray-700 dark:text-gray-300"
                  )
                )
              }, C(u.value), 3)
            ], 2))), 128))
          ]),
          d(r).footer ? (o(), n("div", Kr, [
            M(a.$slots, "footer")
          ])) : b("", !0)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Jr = { class: "text-xl font-semibold text-gray-800 dark:text-white/90" }, Xr = { "aria-label": "Breadcrumb" }, Qr = { class: "flex items-center gap-1.5" }, Yr = {
  key: 2,
  class: "stroke-current text-gray-400",
  width: "17",
  height: "16",
  viewBox: "0 0 17 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, pa = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "Breadcrumb",
  props: {
    pageTitle: {},
    items: { default: () => [] },
    linkComponent: { default: "a" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, l) => (o(), n("div", {
      class: g(
        d(m)("flex flex-wrap items-center justify-between gap-3 mb-6", t.class)
      )
    }, [
      s("h2", Jr, C(e.pageTitle), 1),
      s("nav", Xr, [
        s("ol", Qr, [
          (o(!0), n(A, null, E(e.items, (a, i) => (o(), n("li", {
            key: i,
            class: "flex items-center gap-1.5"
          }, [
            a.href && i < e.items.length - 1 ? (o(), Z(G(e.linkComponent), {
              key: 0,
              href: a.href,
              to: a.to,
              class: "inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            }, {
              default: z(() => [
                T(C(a.label), 1)
              ]),
              _: 2
            }, 1032, ["href", "to"])) : (o(), n("span", {
              key: 1,
              class: g(
                d(m)(
                  "text-sm",
                  i === e.items.length - 1 ? "text-gray-800 dark:text-white/90" : "text-gray-500 dark:text-gray-400"
                )
              )
            }, C(a.label), 3)),
            i < e.items.length - 1 ? (o(), n("svg", Yr, [...l[0] || (l[0] = [
              s("path", {
                d: "M6.0765 12.667L10.2432 8.50033L6.0765 4.33366",
                stroke: "currentColor",
                "stroke-width": "1.2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, null, -1)
            ])])) : b("", !0)
          ]))), 128))
        ])
      ])
    ], 2));
  }
});
function e5(e, t) {
  const r = (l) => {
    e.value && !e.value.contains(l.target) && t(l);
  };
  Y(() => {
    document.addEventListener("click", r, !0);
  }), he(() => {
    document.removeEventListener("click", r, !0);
  });
}
const t5 = ["aria-expanded"], r5 = ["onClick"], ya = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "DropdownMenu",
  props: {
    items: { default: () => [] },
    buttonClass: { default: "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" },
    menuClass: { default: "absolute right-0 z-40 w-40 p-2 space-y-1 bg-white border border-gray-200 top-full mt-1 rounded-2xl shadow-lg dark:border-gray-800 dark:bg-gray-900" },
    itemClass: { default: "flex w-full items-center gap-2 px-3 py-2 font-medium text-left text-gray-500 rounded-lg text-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300" },
    position: { default: "right" },
    class: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const r = e, l = t, a = D(!1), i = D(null), u = () => {
      a.value = !a.value;
    }, c = () => {
      a.value = !1;
    }, f = (x) => {
      x.disabled || (x.onClick && x.onClick(), l("select", x), c());
    }, h = (x) => {
      x.key === "Escape" && a.value && c();
    };
    return Y(() => document.addEventListener("keydown", h)), he(() => document.removeEventListener("keydown", h)), e5(i, c), (x, v) => (o(), n("div", {
      class: g(d(m)("relative", r.class)),
      ref_key: "dropdownRef",
      ref: i
    }, [
      s("button", {
        type: "button",
        onClick: u,
        "aria-expanded": a.value,
        "aria-haspopup": "menu",
        class: g(d(m)(e.buttonClass))
      }, [
        M(x.$slots, "trigger", {}, () => [
          v[0] || (v[0] = s("svg", {
            class: "fill-current",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            s("path", {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M5.99902 10.245C6.96552 10.245 7.74902 11.0285 7.74902 11.995V12.005C7.74902 12.9715 6.96552 13.755 5.99902 13.755C5.03253 13.755 4.24902 12.9715 4.24902 12.005V11.995C4.24902 11.0285 5.03253 10.245 5.99902 10.245ZM17.999 10.245C18.9655 10.245 19.749 11.0285 19.749 11.995V12.005C19.749 12.9715 18.9655 13.755 17.999 13.755C17.0325 13.755 16.249 12.9715 16.249 12.005V11.995C16.249 11.0285 17.0325 10.245 17.999 10.245ZM13.749 11.995C13.749 11.0285 12.9655 10.245 11.999 10.245C11.0325 10.245 10.249 11.0285 10.249 11.995V12.005C10.249 12.9715 11.0325 13.755 11.999 13.755C12.9655 13.755 13.749 12.9715 13.749 12.005V11.995Z",
              fill: "currentColor"
            })
          ], -1))
        ])
      ], 10, t5),
      W(ne, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "transform scale-95 opacity-0",
        "enter-to-class": "transform scale-100 opacity-100",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-from-class": "transform scale-100 opacity-100",
        "leave-to-class": "transform scale-95 opacity-0"
      }, {
        default: z(() => [
          a.value ? (o(), n("div", {
            key: 0,
            role: "menu",
            class: g(d(m)(e.menuClass))
          }, [
            M(x.$slots, "menu", { close: c }, () => [
              (o(!0), n(A, null, E(e.items, (p, y) => (o(), n("button", {
                key: y,
                type: "button",
                onClick: (V) => f(p),
                role: "menuitem",
                class: g(d(m)(e.itemClass))
              }, [
                p.icon ? (o(), Z(G(p.icon), {
                  key: 0,
                  class: "w-4 h-4"
                })) : b("", !0),
                T(" " + C(p.label), 1)
              ], 10, r5))), 128))
            ])
          ], 2)) : b("", !0)
        ]),
        _: 3
      })
    ], 2));
  }
}), o5 = {
  key: 0,
  class: "flex items-center gap-2"
}, s5 = {
  key: 0,
  class: "ml-auto inline-flex items-center justify-center rounded-full bg-brand-500 px-1.5 py-0.5 text-[10px] font-semibold text-white"
}, l5 = {
  key: 0,
  class: "flex items-center gap-2"
}, a5 = {
  key: 0,
  class: "ml-auto inline-flex items-center justify-center rounded-full bg-brand-500 px-1.5 py-0.5 text-[10px] font-semibold text-white"
}, ka = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "SidebarItem",
  props: {
    to: {},
    icon: {},
    label: {},
    active: { type: Boolean },
    badge: {},
    class: {}
  },
  setup(e) {
    const t = e, { isExpanded: r, isMobileOpen: l, isHovered: a, setActiveItem: i } = K();
    let u = null;
    try {
      u = Fe();
    } catch {
    }
    const c = w(() => t.active !== void 0 ? t.active : u && t.to ? u.path === t.to || u.path.startsWith(t.to + "/") : !1), f = w(
      () => m(
        "group relative flex items-center w-full gap-3 px-3 py-2 font-medium rounded-lg text-theme-sm transition-colors duration-150",
        c.value ? "bg-brand-50 text-brand-500 dark:bg-brand-500/[0.12] dark:text-brand-400" : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-gray-300",
        !r.value && !l.value && !a.value && "lg:justify-center",
        t.class
      )
    ), h = w(
      () => m(
        "flex shrink-0 items-center justify-center w-6 h-6",
        c.value ? "text-brand-500 dark:text-brand-400" : "text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300"
      )
    ), x = () => {
      t.to ? i(t.to) : t.label && i(t.label);
    };
    return (v, p) => {
      const y = Ee("router-link");
      return e.to ? (o(), Z(y, {
        key: 0,
        to: e.to,
        class: g(f.value),
        onClick: x
      }, {
        default: z(() => [
          s("span", {
            class: g(h.value)
          }, [
            e.icon ? (o(), Z(G(e.icon), {
              key: 0,
              class: "w-6 h-6"
            })) : b("", !0)
          ], 2),
          d(r) || d(l) || d(a) ? (o(), n("span", o5, [
            T(C(e.label) + " ", 1),
            e.badge ? (o(), n("span", s5, C(e.badge), 1)) : b("", !0)
          ])) : b("", !0)
        ]),
        _: 1
      }, 8, ["to", "class"])) : (o(), n("button", {
        key: 1,
        type: "button",
        class: g(f.value),
        onClick: x
      }, [
        s("span", {
          class: g(h.value)
        }, [
          e.icon ? (o(), Z(G(e.icon), {
            key: 0,
            class: "w-6 h-6"
          })) : b("", !0)
        ], 2),
        d(r) || d(l) || d(a) ? (o(), n("span", l5, [
          T(C(e.label) + " ", 1),
          e.badge ? (o(), n("span", a5, C(e.badge), 1)) : b("", !0)
        ])) : b("", !0)
      ], 2));
    };
  }
}), n5 = {
  key: 0,
  class: "mb-1 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500"
}, i5 = { class: "flex flex-col gap-0.5" }, wa = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "SidebarGroup",
  props: {
    title: {},
    class: {}
  },
  setup(e) {
    const t = e, { isExpanded: r, isMobileOpen: l, isHovered: a } = K();
    return (i, u) => (o(), n("div", {
      class: g(d(m)("mb-6", t.class))
    }, [
      e.title && (d(r) || d(l) || d(a)) ? (o(), n("div", n5, C(e.title), 1)) : b("", !0),
      s("ul", i5, [
        M(i.$slots, "default")
      ])
    ], 2));
  }
}), d5 = {
  key: 0,
  class: "flex flex-1 items-center justify-between"
}, c5 = {
  key: 0,
  class: "mt-0.5 ml-9 flex flex-col gap-0.5"
}, $a = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "SidebarSubmenu",
  props: {
    label: {},
    icon: {},
    name: {},
    class: {}
  },
  setup(e) {
    const t = e, { isExpanded: r, isMobileOpen: l, isHovered: a, openSubmenu: i, toggleSubmenu: u } = K(), c = w(() => i.value === t.name), f = () => u(t.name);
    return (h, x) => (o(), n("div", {
      class: g(d(m)(t.class))
    }, [
      s("button", {
        type: "button",
        class: g(
          d(m)(
            "group relative flex items-center w-full gap-3 px-3 py-2 font-medium rounded-lg text-theme-sm transition-colors duration-150",
            c.value ? "bg-brand-50 text-brand-500 dark:bg-brand-500/[0.12] dark:text-brand-400" : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-gray-300",
            !d(r) && !d(l) && !d(a) && "lg:justify-center"
          )
        ),
        onClick: f
      }, [
        s("span", {
          class: g(
            d(m)(
              "flex shrink-0 items-center justify-center w-6 h-6",
              c.value ? "text-brand-500 dark:text-brand-400" : "text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300"
            )
          )
        }, [
          e.icon ? (o(), Z(G(e.icon), {
            key: 0,
            class: "w-6 h-6"
          })) : b("", !0)
        ], 2),
        d(r) || d(l) || d(a) ? (o(), n("span", d5, [
          s("span", null, C(e.label), 1),
          (o(), n("svg", {
            class: g(
              d(m)(
                "w-4 h-4 transition-transform duration-200",
                c.value ? "rotate-180" : ""
              )
            ),
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [...x[0] || (x[0] = [
            s("path", {
              d: "M6 9L12 15L18 9",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, null, -1)
          ])], 2))
        ])) : b("", !0)
      ], 2),
      c.value && (d(r) || d(l) || d(a)) ? (o(), n("div", c5, [
        M(h.$slots, "default")
      ])) : b("", !0)
    ], 2));
  }
}), k = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [l, a] of t)
    r[l] = a;
  return r;
}, u5 = {}, g5 = {
  class: "w-5 h-5",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function f5(e, t) {
  return o(), n("svg", g5, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M1.54175 4.8335C1.54175 3.59085 2.54911 2.5835 3.79175 2.5835H16.2084C17.4511 2.5835 18.4584 3.59085 18.4584 4.8335V5.16683C18.4584 5.96477 18.0431 6.66569 17.4167 7.06517V15.1668C17.4167 16.4095 16.4094 17.4168 15.1667 17.4168H4.83341C3.59077 17.4168 2.58341 16.4095 2.58341 15.1668V7.06517C1.95711 6.66568 1.54175 5.96476 1.54175 5.16683V4.8335ZM4.08341 7.41683H15.9167V15.1668C15.9167 15.581 15.581 15.9168 15.1667 15.9168H4.83341C4.4192 15.9168 4.08341 15.581 4.08341 15.1668V7.41683ZM16.9584 5.16683C16.9584 5.58104 16.6226 5.91683 16.2084 5.91683H3.79175C3.37753 5.91683 3.04175 5.58104 3.04175 5.16683V4.8335C3.04175 4.41928 3.37753 4.0835 3.79175 4.0835H16.2084C16.6226 4.0835 16.9584 4.41928 16.9584 4.8335V5.16683ZM8.33341 9.04183C7.9192 9.04183 7.58341 9.37762 7.58341 9.79183C7.58341 10.206 7.9192 10.5418 8.33341 10.5418H11.6667C12.081 10.5418 12.4167 10.206 12.4167 9.79183C12.4167 9.37762 12.081 9.04183 11.6667 9.04183H8.33341Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const b5 = /* @__PURE__ */ k(u5, [["render", f5]]), h5 = {}, m5 = {
  class: "w-5 h-5",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function C5(e, t) {
  return o(), n("svg", m5, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M9.85954 4.0835C9.5834 4.0835 9.35954 4.30735 9.35954 4.5835V15.4161C9.35954 15.6922 9.5834 15.9161 9.85954 15.9161H10.1373C10.4135 15.9161 10.6373 15.6922 10.6373 15.4161V4.5835C10.6373 4.30735 10.4135 4.0835 10.1373 4.0835H9.85954ZM7.85954 4.5835C7.85954 3.47893 8.75497 2.5835 9.85954 2.5835H10.1373C11.2419 2.5835 12.1373 3.47893 12.1373 4.5835V15.4161C12.1373 16.5206 11.2419 17.4161 10.1373 17.4161H9.85954C8.75497 17.4161 7.85954 16.5206 7.85954 15.4161V4.5835ZM4.58203 8.9598C4.30589 8.9598 4.08203 9.18366 4.08203 9.4598V15.4168C4.08203 15.693 4.30589 15.9168 4.58203 15.9168H4.85981C5.13595 15.9168 5.35981 15.693 5.35981 15.4168V9.4598C5.35981 9.18366 5.13595 8.9598 4.85981 8.9598H4.58203ZM2.58203 9.4598C2.58203 8.35523 3.47746 7.4598 4.58203 7.4598H4.85981C5.96438 7.4598 6.85981 8.35523 6.85981 9.4598V15.4168C6.85981 16.5214 5.96438 17.4168 4.85981 17.4168H4.58203C3.47746 17.4168 2.58203 16.5214 2.58203 15.4168V9.4598ZM14.637 12.435C14.637 12.1589 14.8609 11.935 15.137 11.935H15.4148C15.691 11.935 15.9148 12.1589 15.9148 12.435V15.4168C15.9148 15.693 15.691 15.9168 15.4148 15.9168H15.137C14.8609 15.9168 14.637 15.693 14.637 15.4168V12.435ZM15.137 10.435C14.0325 10.435 13.137 11.3304 13.137 12.435V15.4168C13.137 16.5214 14.0325 17.4168 15.137 17.4168H15.4148C16.5194 17.4168 17.4148 16.5214 17.4148 15.4168V12.435C17.4148 11.3304 16.5194 10.435 15.4148 10.435H15.137Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const x5 = /* @__PURE__ */ k(h5, [["render", C5]]), v5 = {}, p5 = {
  class: "w-5 h-5",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function y5(e, t) {
  return o(), n("svg", p5, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M10.7487 2.29248C10.7487 1.87827 10.4129 1.54248 9.9987 1.54248C9.58448 1.54248 9.2487 1.87827 9.2487 2.29248V2.83613C6.08132 3.20733 3.6237 5.9004 3.6237 9.16748V14.4591H3.33203C2.91782 14.4591 2.58203 14.7949 2.58203 15.2091C2.58203 15.6234 2.91782 15.9591 3.33203 15.9591H4.3737H15.6237H16.6654C17.0796 15.9591 17.4154 15.6234 17.4154 15.2091C17.4154 14.7949 17.0796 14.4591 16.6654 14.4591H16.3737V9.16748C16.3737 5.9004 13.9161 3.20733 10.7487 2.83613V2.29248ZM14.8737 14.4591V9.16748C14.8737 6.47509 12.6911 4.29248 9.9987 4.29248C7.30631 4.29248 5.1237 6.47509 5.1237 9.16748V14.4591H14.8737ZM7.9987 17.7085C7.9987 18.1228 8.33448 18.4585 8.7487 18.4585H11.2487C11.6629 18.4585 11.9987 18.1228 11.9987 17.7085C11.9987 17.2943 11.6629 16.9585 11.2487 16.9585H8.7487C8.33448 16.9585 7.9987 17.2943 7.9987 17.7085Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const k5 = /* @__PURE__ */ k(v5, [["render", y5]]), w5 = {}, $5 = {
  class: "w-5 h-5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function V5(e, t) {
  return o(), n("svg", $5, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.665 3.75618C11.8762 3.65061 12.1247 3.65061 12.3358 3.75618L18.7807 6.97853L12.3358 10.2009C12.1247 10.3064 11.8762 10.3064 11.665 10.2009L5.22014 6.97853L11.665 3.75618ZM4.29297 8.19199V16.0946C4.29297 16.3787 4.45347 16.6384 4.70757 16.7654L11.25 20.0365V11.6512C11.1631 11.6205 11.0777 11.5843 10.9942 11.5425L4.29297 8.19199ZM12.75 20.037L19.2933 16.7654C19.5474 16.6384 19.7079 16.3787 19.7079 16.0946V8.19199L13.0066 11.5425C12.9229 11.5844 12.8372 11.6207 12.75 11.6515V20.037ZM13.0066 2.41453C12.3732 2.09783 11.6277 2.09783 10.9942 2.41453L4.03676 5.89316C3.27449 6.27429 2.79297 7.05339 2.79297 7.90563V16.0946C2.79297 16.9468 3.27448 17.7259 4.03676 18.1071L10.9942 21.5857L11.3296 20.9149L10.9942 21.5857C11.6277 21.9024 12.3732 21.9024 13.0066 21.5857L19.9641 18.1071C20.7264 17.7259 21.2079 16.9468 21.2079 16.0946V7.90563C21.2079 7.05339 20.7264 6.27429 19.9641 5.89316L13.0066 2.41453Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const L5 = /* @__PURE__ */ k(w5, [["render", V5]]), M5 = {}, H5 = {
  class: "w-5 h-5",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function B5(e, t) {
  return o(), n("svg", H5, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M9.77692 3.24224C9.91768 3.17186 10.0834 3.17186 10.2241 3.24224L15.3713 5.81573L10.3359 8.33331C10.1248 8.43888 9.87626 8.43888 9.66512 8.33331L4.6298 5.81573L9.77692 3.24224ZM3.70264 7.0292V13.4124C3.70264 13.6018 3.80964 13.775 3.97903 13.8597L9.25016 16.4952L9.25016 9.7837C9.16327 9.75296 9.07782 9.71671 8.99432 9.67496L3.70264 7.0292ZM10.7502 16.4955V9.78396C10.8373 9.75316 10.923 9.71683 11.0067 9.67496L16.2984 7.0292V13.4124C16.2984 13.6018 16.1914 13.775 16.022 13.8597L10.7502 16.4955ZM9.41463 17.4831L9.10612 18.1002C9.66916 18.3817 10.3319 18.3817 10.8949 18.1002L16.6928 15.2013C17.3704 14.8625 17.7984 14.17 17.7984 13.4124V6.58831C17.7984 5.83076 17.3704 5.13823 16.6928 4.79945L10.8949 1.90059C10.3319 1.61908 9.66916 1.61907 9.10612 1.90059L9.44152 2.57141L9.10612 1.90059L3.30823 4.79945C2.63065 5.13823 2.20264 5.83076 2.20264 6.58831V13.4124C2.20264 14.17 2.63065 14.8625 3.30823 15.2013L9.10612 18.1002L9.41463 17.4831Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const _5 = /* @__PURE__ */ k(M5, [["render", B5]]), Z5 = {}, S5 = {
  class: "w-5 h-5",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function I5(e, t) {
  return o(), n("svg", S5, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M5.33329 1.0835C5.74751 1.0835 6.08329 1.41928 6.08329 1.8335V2.25016L9.91663 2.25016V1.8335C9.91663 1.41928 10.2524 1.0835 10.6666 1.0835C11.0808 1.0835 11.4166 1.41928 11.4166 1.8335V2.25016L12.3333 2.25016C13.2998 2.25016 14.0833 3.03366 14.0833 4.00016V6.00016L14.0833 12.6668C14.0833 13.6333 13.2998 14.4168 12.3333 14.4168L3.66663 14.4168C2.70013 14.4168 1.91663 13.6333 1.91663 12.6668L1.91663 6.00016L1.91663 4.00016C1.91663 3.03366 2.70013 2.25016 3.66663 2.25016L4.58329 2.25016V1.8335C4.58329 1.41928 4.91908 1.0835 5.33329 1.0835ZM5.33329 3.75016L3.66663 3.75016C3.52855 3.75016 3.41663 3.86209 3.41663 4.00016V5.25016L12.5833 5.25016V4.00016C12.5833 3.86209 12.4714 3.75016 12.3333 3.75016L10.6666 3.75016L5.33329 3.75016ZM12.5833 6.75016L3.41663 6.75016L3.41663 12.6668C3.41663 12.8049 3.52855 12.9168 3.66663 12.9168L12.3333 12.9168C12.4714 12.9168 12.5833 12.8049 12.5833 12.6668L12.5833 6.75016Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const z5 = /* @__PURE__ */ k(Z5, [["render", I5]]), D5 = {}, T5 = {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none"
};
function j5(e, t) {
  return o(), n("svg", T5, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M8 2C8.41421 2 8.75 2.33579 8.75 2.75V3.75H15.25V2.75C15.25 2.33579 15.5858 2 16 2C16.4142 2 16.75 2.33579 16.75 2.75V3.75H18.5C19.7426 3.75 20.75 4.75736 20.75 6V9V19C20.75 20.2426 19.7426 21.25 18.5 21.25H5.5C4.25736 21.25 3.25 20.2426 3.25 19V9V6C3.25 4.75736 4.25736 3.75 5.5 3.75H7.25V2.75C7.25 2.33579 7.58579 2 8 2ZM8 5.25H5.5C5.08579 5.25 4.75 5.58579 4.75 6V8.25H19.25V6C19.25 5.58579 18.9142 5.25 18.5 5.25H16H8ZM19.25 9.75H4.75V19C4.75 19.4142 5.08579 19.75 5.5 19.75H18.5C18.9142 19.75 19.25 19.4142 19.25 19V9.75Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const De = /* @__PURE__ */ k(D5, [["render", j5]]), A5 = {}, E5 = {
  class: "w-5 h-5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function G5(e, t) {
  return o(), n("svg", E5, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M4.00002 12.0957C4.00002 7.67742 7.58174 4.0957 12 4.0957C16.4183 4.0957 20 7.67742 20 12.0957C20 16.514 16.4183 20.0957 12 20.0957H5.06068L6.34317 18.8132C6.48382 18.6726 6.56284 18.4818 6.56284 18.2829C6.56284 18.084 6.48382 17.8932 6.34317 17.7526C4.89463 16.304 4.00002 14.305 4.00002 12.0957ZM12 2.5957C6.75332 2.5957 2.50002 6.849 2.50002 12.0957C2.50002 14.4488 3.35633 16.603 4.77303 18.262L2.71969 20.3154C2.50519 20.5299 2.44103 20.8525 2.55711 21.1327C2.6732 21.413 2.94668 21.5957 3.25002 21.5957H12C17.2467 21.5957 21.5 17.3424 21.5 12.0957C21.5 6.849 17.2467 2.5957 12 2.5957ZM7.62502 10.8467C6.93467 10.8467 6.37502 11.4063 6.37502 12.0967C6.37502 12.787 6.93467 13.3467 7.62502 13.3467H7.62512C8.31548 13.3467 8.87512 12.787 8.87512 12.0967C8.87512 11.4063 8.31548 10.8467 7.62512 10.8467H7.62502ZM10.75 12.0967C10.75 11.4063 11.3097 10.8467 12 10.8467H12.0001C12.6905 10.8467 13.2501 11.4063 13.2501 12.0967C13.2501 12.787 12.6905 13.3467 12.0001 13.3467H12C11.3097 13.3467 10.75 12.787 10.75 12.0967ZM16.375 10.8467C15.6847 10.8467 15.125 11.4063 15.125 12.0967C15.125 12.787 15.6847 13.3467 16.375 13.3467H16.3751C17.0655 13.3467 17.6251 12.787 17.6251 12.0967C17.6251 11.4063 17.0655 10.8467 16.3751 10.8467H16.375Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const q5 = /* @__PURE__ */ k(A5, [["render", G5]]), P5 = {}, F5 = {
  class: "w-5 h-5",
  viewBox: "0 0 14 14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function O5(e, t) {
  return o(), n("svg", F5, [...t[0] || (t[0] = [
    s("path", {
      d: "M11.6668 3.5L5.25016 9.91667L2.3335 7",
      stroke: "currentColor",
      "stroke-width": "1.94437",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, null, -1)
  ])]);
}
const R5 = /* @__PURE__ */ k(P5, [["render", O5]]), N5 = {}, W5 = {
  class: "w-5 h-5",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function U5(e, t) {
  return o(), n("svg", W5, [...t[0] || (t[0] = [
    s("path", {
      d: "M4.79175 7.396L10.0001 12.6043L15.2084 7.396",
      stroke: "currentColor",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, null, -1)
  ])]);
}
const K5 = /* @__PURE__ */ k(N5, [["render", U5]]), J5 = {}, X5 = {
  class: "w-5 h-5",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Q5(e, t) {
  return o(), n("svg", X5, [...t[0] || (t[0] = [
    s("path", {
      d: "M5.83333 12.6665L10 8.49984L5.83333 4.33317",
      stroke: "currentColor",
      "stroke-width": "1.2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, null, -1)
  ])]);
}
const Y5 = /* @__PURE__ */ k(J5, [["render", Q5]]), eo = {}, to = {
  class: "w-5 h-5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function ro(e, t) {
  return o(), n("svg", to, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M19.5 19.75C19.5 20.9926 18.4926 22 17.25 22H6.75C5.50736 22 4.5 20.9926 4.5 19.75V9.62105C4.5 9.02455 4.73686 8.45247 5.15851 8.03055L10.5262 2.65951C10.9482 2.23725 11.5207 2 12.1177 2H17.25C18.4926 2 19.5 3.00736 19.5 4.25V19.75ZM17.25 20.5C17.6642 20.5 18 20.1642 18 19.75V4.25C18 3.83579 17.6642 3.5 17.25 3.5H12.248L12.2509 7.49913C12.2518 8.7424 11.2442 9.75073 10.0009 9.75073H6V19.75C6 20.1642 6.33579 20.5 6.75 20.5H17.25ZM7.05913 8.25073L10.7488 4.55876L10.7509 7.5002C10.7512 7.91462 10.4153 8.25073 10.0009 8.25073H7.05913ZM8.25 14.5C8.25 14.0858 8.58579 13.75 9 13.75H15C15.4142 13.75 15.75 14.0858 15.75 14.5C15.75 14.9142 15.4142 15.25 15 15.25H9C8.58579 15.25 8.25 14.9142 8.25 14.5ZM8.25 17.5C8.25 17.0858 8.58579 16.75 9 16.75H12C12.4142 16.75 12.75 17.0858 12.75 17.5C12.75 17.9142 12.4142 18.25 12 18.25H9C8.58579 18.25 8.25 17.9142 8.25 17.5Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const oo = /* @__PURE__ */ k(eo, [["render", ro]]), so = {}, lo = {
  class: "w-5 h-5",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function ao(e, t) {
  return o(), n("svg", lo, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M3.04175 7.06206V14.375C3.04175 14.6511 3.26561 14.875 3.54175 14.875H16.4584C16.7346 14.875 16.9584 14.6511 16.9584 14.375V7.06245L11.1443 11.1168C10.457 11.5961 9.54373 11.5961 8.85638 11.1168L3.04175 7.06206ZM16.9584 5.19262C16.9584 5.19341 16.9584 5.1942 16.9584 5.19498V5.20026C16.9572 5.22216 16.946 5.24239 16.9279 5.25501L10.2864 9.88638C10.1145 10.0062 9.8862 10.0062 9.71437 9.88638L3.07255 5.25485C3.05342 5.24151 3.04202 5.21967 3.04202 5.19636C3.042 5.15695 3.07394 5.125 3.11335 5.125H16.8871C16.9253 5.125 16.9564 5.15494 16.9584 5.19262ZM18.4584 5.21428V14.375C18.4584 15.4796 17.563 16.375 16.4584 16.375H3.54175C2.43718 16.375 1.54175 15.4796 1.54175 14.375V5.19498C1.54175 5.1852 1.54194 5.17546 1.54231 5.16577C1.55858 4.31209 2.25571 3.625 3.11335 3.625H16.8871C17.7549 3.625 18.4584 4.32843 18.4585 5.19622C18.4585 5.20225 18.4585 5.20826 18.4584 5.21428Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const no = /* @__PURE__ */ k(so, [["render", ao]]), io = {}, co = {
  class: "w-5 h-5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function uo(e, t) {
  return o(), n("svg", co, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M8.12454 4.53906L15.8736 4.53906C16.1416 4.53906 16.3892 4.68201 16.5231 4.91406L20.3977 11.625C20.5317 11.857 20.5317 12.1429 20.3977 12.375L16.5231 19.0859C16.3892 19.3179 16.1416 19.4609 15.8736 19.4609H8.12454C7.85659 19.4609 7.609 19.3179 7.47502 19.0859L3.60048 12.375C3.46651 12.1429 3.46651 11.857 3.60048 11.625L7.47502 4.91406C7.609 4.68201 7.85659 4.53906 8.12454 4.53906ZM15.8736 3.03906H8.12454C7.3207 3.03906 6.57791 3.46791 6.17599 4.16406L2.30144 10.875C1.89952 11.5711 1.89952 12.4288 2.30144 13.125L6.17599 19.8359C6.57791 20.532 7.32069 20.9609 8.12454 20.9609H15.8736C16.6775 20.9609 17.4203 20.532 17.8222 19.8359L21.6967 13.125C22.0987 12.4288 22.0987 11.5711 21.6967 10.875L17.8222 4.16406C17.4203 3.46791 16.6775 3.03906 15.8736 3.03906ZM12.0007 7.81075C12.4149 7.81075 12.7507 8.14653 12.7507 8.56075V12.7803C12.7507 13.1945 12.4149 13.5303 12.0007 13.5303C11.5865 13.5303 11.2507 13.1945 11.2507 12.7803V8.56075C11.2507 8.14653 11.5865 7.81075 12.0007 7.81075ZM10.9998 15.3303C10.9998 14.778 11.4475 14.3303 11.9998 14.3303H12.0005C12.5528 14.3303 13.0005 14.778 13.0005 15.3303C13.0005 15.8826 12.5528 16.3303 12.0005 16.3303H11.9998C11.4475 16.3303 10.9998 15.8826 10.9998 15.3303Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const go = /* @__PURE__ */ k(io, [["render", uo]]), fo = {}, bo = {
  class: "w-5 h-5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function ho(e, t) {
  return o(), n("svg", bo, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M20.3499 12.0004C20.3499 16.612 16.6115 20.3504 11.9999 20.3504C7.38832 20.3504 3.6499 16.612 3.6499 12.0004C3.6499 7.38881 7.38833 3.65039 11.9999 3.65039C16.6115 3.65039 20.3499 7.38881 20.3499 12.0004ZM11.9999 22.1504C17.6056 22.1504 22.1499 17.6061 22.1499 12.0004C22.1499 6.3947 17.6056 1.85039 11.9999 1.85039C6.39421 1.85039 1.8499 6.3947 1.8499 12.0004C1.8499 17.6061 6.39421 22.1504 11.9999 22.1504ZM13.0008 16.4753C13.0008 15.923 12.5531 15.4753 12.0008 15.4753L11.9998 15.4753C11.4475 15.4753 10.9998 15.923 10.9998 16.4753C10.9998 17.0276 11.4475 17.4753 11.9998 17.4753L12.0008 17.4753C12.5531 17.4753 13.0008 17.0276 13.0008 16.4753ZM11.9998 6.62898C12.414 6.62898 12.7498 6.96476 12.7498 7.37898L12.7498 13.0555C12.7498 13.4697 12.414 13.8055 11.9998 13.8055C11.5856 13.8055 11.2498 13.4697 11.2498 13.0555L11.2498 7.37898C11.2498 6.96476 11.5856 6.62898 11.9998 6.62898Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const mo = /* @__PURE__ */ k(fo, [["render", ho]]), Co = {}, xo = {
  class: "w-5 h-5",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function vo(e, t) {
  return o(), n("svg", xo, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M12.2996 1.12891C11.4713 1.12891 10.7998 1.80033 10.7996 2.62867L10.7996 3.1264V3.12659L10.7997 4.87507H6.14591C3.6031 4.87507 1.54175 6.93642 1.54175 9.47923V14.3207C1.54175 15.4553 2.46151 16.3751 3.5961 16.3751H6.14591H10.0001H16.2084C17.4511 16.3751 18.4584 15.3677 18.4584 14.1251V10.1251C18.4584 7.22557 16.1079 4.87507 13.2084 4.87507H12.2997L12.2996 3.87651H13.7511C14.5097 3.87651 15.1248 3.26157 15.1249 2.50293C15.125 1.74411 14.5099 1.12891 13.7511 1.12891H12.2996ZM3.04175 9.47923C3.04175 7.76485 4.43153 6.37507 6.14591 6.37507C7.8603 6.37507 9.25008 7.76485 9.25008 9.47923V14.8751H6.14591H3.5961C3.28994 14.8751 3.04175 14.6269 3.04175 14.3207V9.47923ZM10.7501 9.47923V14.8751H16.2084C16.6226 14.8751 16.9584 14.5393 16.9584 14.1251V10.1251C16.9584 8.054 15.2795 6.37507 13.2084 6.37507H9.54632C10.294 7.19366 10.7501 8.28319 10.7501 9.47923Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const po = /* @__PURE__ */ k(Co, [["render", vo]]), yo = {}, ko = {
  class: "w-5 h-5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function wo(e, t) {
  return o(), n("svg", ko, [...t[0] || (t[0] = [
    s("path", {
      d: "M11.05 6.9L10.45 7.35L11.05 6.9ZM4.25 5.25H8.5V3.75H4.25V5.25ZM3.5 18V6H2V18H3.5ZM19.75 18.75H4.25V20.25H19.75V18.75ZM20.5 9V18H22V9H20.5ZM19.75 6.75H12.25V8.25H19.75V6.75ZM11.65 6.45L10.3 4.65L9.1 5.55L10.45 7.35L11.65 6.45ZM12.25 6.75C12.0139 6.75 11.7916 6.63885 11.65 6.45L10.45 7.35C10.8749 7.91656 11.5418 8.25 12.25 8.25V6.75ZM22 9C22 7.75736 20.9926 6.75 19.75 6.75V8.25C20.1642 8.25 20.5 8.58579 20.5 9H22ZM19.75 20.25C20.9926 20.25 22 19.2426 22 18H20.5C20.5 18.4142 20.1642 18.75 19.75 18.75V20.25ZM2 18C2 19.2426 3.00736 20.25 4.25 20.25V18.75C3.83579 18.75 3.5 18.4142 3.5 18H2ZM8.5 5.25C8.73607 5.25 8.95836 5.36115 9.1 5.55L10.3 4.65C9.87508 4.08344 9.2082 3.75 8.5 3.75V5.25ZM4.25 3.75C3.00736 3.75 2 4.75736 2 6H3.5C3.5 5.58579 3.83579 5.25 4.25 5.25V3.75Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const $o = /* @__PURE__ */ k(yo, [["render", wo]]), Vo = {}, Lo = {
  class: "w-5 h-5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Mo(e, t) {
  return o(), n("svg", Lo, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M5.5 3.25C4.25736 3.25 3.25 4.25736 3.25 5.5V8.99998C3.25 10.2426 4.25736 11.25 5.5 11.25H9C10.2426 11.25 11.25 10.2426 11.25 8.99998V5.5C11.25 4.25736 10.2426 3.25 9 3.25H5.5ZM4.75 5.5C4.75 5.08579 5.08579 4.75 5.5 4.75H9C9.41421 4.75 9.75 5.08579 9.75 5.5V8.99998C9.75 9.41419 9.41421 9.74998 9 9.74998H5.5C5.08579 9.74998 4.75 9.41419 4.75 8.99998V5.5ZM5.5 12.75C4.25736 12.75 3.25 13.7574 3.25 15V18.5C3.25 19.7426 4.25736 20.75 5.5 20.75H9C10.2426 20.75 11.25 19.7427 11.25 18.5V15C11.25 13.7574 10.2426 12.75 9 12.75H5.5ZM4.75 15C4.75 14.5858 5.08579 14.25 5.5 14.25H9C9.41421 14.25 9.75 14.5858 9.75 15V18.5C9.75 18.9142 9.41421 19.25 9 19.25H5.5C5.08579 19.25 4.75 18.9142 4.75 18.5V15ZM12.75 5.5C12.75 4.25736 13.7574 3.25 15 3.25H18.5C19.7426 3.25 20.75 4.25736 20.75 5.5V8.99998C20.75 10.2426 19.7426 11.25 18.5 11.25H15C13.7574 11.25 12.75 10.2426 12.75 8.99998V5.5ZM15 4.75C14.5858 4.75 14.25 5.08579 14.25 5.5V8.99998C14.25 9.41419 14.5858 9.74998 15 9.74998H18.5C18.9142 9.74998 19.25 9.41419 19.25 8.99998V5.5C19.25 5.08579 18.9142 4.75 18.5 4.75H15ZM15 12.75C13.7574 12.75 12.75 13.7574 12.75 15V18.5C12.75 19.7426 13.7574 20.75 15 20.75H18.5C19.7426 20.75 20.75 19.7427 20.75 18.5V15C20.75 13.7574 19.7426 12.75 18.5 12.75H15ZM14.25 15C14.25 14.5858 14.5858 14.25 15 14.25H18.5C18.9142 14.25 19.25 14.5858 19.25 15V18.5C19.25 18.9142 18.9142 19.25 18.5 19.25H15C14.5858 19.25 14.25 18.9142 14.25 18.5V15Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const Ho = /* @__PURE__ */ k(Vo, [["render", Mo]]), Bo = {}, _o = {
  class: "w-5 h-5",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Zo(e, t) {
  return o(), n("svg", _o, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M7.48994 3.61404C7.79216 3.38738 8.20771 3.38738 8.50993 3.61404L12.3433 6.48904C12.5573 6.64957 12.6833 6.9015 12.6833 7.16904V11.8333C12.6833 12.3028 12.3027 12.6833 11.8333 12.6833H8.64993V10.8333C8.64993 10.4744 8.35892 10.1833 7.99993 10.1833C7.64095 10.1833 7.34993 10.4744 7.34993 10.8333V12.6833H4.1666C3.69716 12.6833 3.3166 12.3028 3.3166 11.8333V7.16904C3.3166 6.9015 3.44257 6.64957 3.6566 6.48904L7.48994 3.61404ZM7.99478 13.9833H4.1666C2.97919 13.9833 2.0166 13.0207 2.0166 11.8333V7.16904C2.0166 6.49231 2.33522 5.85508 2.8766 5.44904L6.70994 2.57404C7.47438 2.00071 8.52549 2.00071 9.28993 2.57404L13.1233 5.44904C13.6647 5.85508 13.9833 6.49232 13.9833 7.16904V11.8333C13.9833 13.0207 13.0207 13.9833 11.8333 13.9833H8.00509C8.00337 13.9833 8.00166 13.9833 7.99993 13.9833C7.99821 13.9833 7.9965 13.9833 7.99478 13.9833Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const So = /* @__PURE__ */ k(Bo, [["render", Zo]]), Io = {}, zo = {
  class: "w-5 h-5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Do(e, t) {
  return o(), n("svg", zo, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M5.99915 10.2451C6.96564 10.2451 7.74915 11.0286 7.74915 11.9951V12.0051C7.74915 12.9716 6.96564 13.7551 5.99915 13.7551C5.03265 13.7551 4.24915 12.9716 4.24915 12.0051V11.9951C4.24915 11.0286 5.03265 10.2451 5.99915 10.2451ZM17.9991 10.2451C18.9656 10.2451 19.7491 11.0286 19.7491 11.9951V12.0051C19.7491 12.9716 18.9656 13.7551 17.9991 13.7551C17.0326 13.7551 16.2491 12.9716 16.2491 12.0051V11.9951C16.2491 11.0286 17.0326 10.2451 17.9991 10.2451ZM13.7491 11.9951C13.7491 11.0286 12.9656 10.2451 11.9991 10.2451C11.0326 10.2451 10.2491 11.0286 10.2491 11.9951V12.0051C10.2491 12.9716 11.0326 13.7551 11.9991 13.7551C12.9656 13.7551 13.7491 12.9716 13.7491 12.0051V11.9951Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const To = /* @__PURE__ */ k(Io, [["render", Do]]), jo = {}, Ao = {
  class: "w-5 h-5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Eo(e, t) {
  return o(), n("svg", Ao, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM11.0991 7.52507C11.0991 8.02213 11.5021 8.42507 11.9991 8.42507H12.0001C12.4972 8.42507 12.9001 8.02213 12.9001 7.52507C12.9001 7.02802 12.4972 6.62507 12.0001 6.62507H11.9991C11.5021 6.62507 11.0991 7.02802 11.0991 7.52507ZM12.0001 17.3714C11.5859 17.3714 11.2501 17.0356 11.2501 16.6214V10.9449C11.2501 10.5307 11.5859 10.1949 12.0001 10.1949C12.4143 10.1949 12.7501 10.5307 12.7501 10.9449V16.6214C12.7501 17.0356 12.4143 17.3714 12.0001 17.3714Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const Go = /* @__PURE__ */ k(jo, [["render", Eo]]), qo = {}, Po = {
  class: "w-5 h-5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Fo(e, t) {
  return o(), n("svg", Po, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M3.6501 11.9996C3.6501 7.38803 7.38852 3.64961 12.0001 3.64961C16.6117 3.64961 20.3501 7.38803 20.3501 11.9996C20.3501 16.6112 16.6117 20.3496 12.0001 20.3496C7.38852 20.3496 3.6501 16.6112 3.6501 11.9996ZM12.0001 1.84961C6.39441 1.84961 1.8501 6.39392 1.8501 11.9996C1.8501 17.6053 6.39441 22.1496 12.0001 22.1496C17.6058 22.1496 22.1501 17.6053 22.1501 11.9996C22.1501 6.39392 17.6058 1.84961 12.0001 1.84961ZM10.9992 7.52468C10.9992 8.07697 11.4469 8.52468 11.9992 8.52468H12.0002C12.5525 8.52468 13.0002 8.07697 13.0002 7.52468C13.0002 6.9724 12.5525 6.52468 12.0002 6.52468H11.9992C11.4469 6.52468 10.9992 6.9724 10.9992 7.52468ZM12.0002 17.371C11.586 17.371 11.2502 17.0352 11.2502 16.621V10.9445C11.2502 10.5303 11.586 10.1945 12.0002 10.1945C12.4144 10.1945 12.7502 10.5303 12.7502 10.9445V16.621C12.7502 17.0352 12.4144 17.371 12.0002 17.371Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const Oo = /* @__PURE__ */ k(qo, [["render", Fo]]), Ro = {}, No = {
  class: "w-5 h-5",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Wo(e, t) {
  return o(), n("svg", No, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M4.83203 2.5835C3.58939 2.5835 2.58203 3.59085 2.58203 4.83349V7.25015C2.58203 8.49279 3.58939 9.50015 4.83203 9.50015H7.2487C8.49134 9.50015 9.4987 8.49279 9.4987 7.25015V4.8335C9.4987 3.59086 8.49134 2.5835 7.2487 2.5835H4.83203ZM4.08203 4.83349C4.08203 4.41928 4.41782 4.0835 4.83203 4.0835H7.2487C7.66291 4.0835 7.9987 4.41928 7.9987 4.8335V7.25015C7.9987 7.66436 7.66291 8.00015 7.2487 8.00015H4.83203C4.41782 8.00015 4.08203 7.66436 4.08203 7.25015V4.83349ZM4.83203 10.5002C3.58939 10.5002 2.58203 11.5075 2.58203 12.7502V15.1668C2.58203 16.4095 3.58939 17.4168 4.83203 17.4168H7.2487C8.49134 17.4168 9.4987 16.4095 9.4987 15.1668V12.7502C9.4987 11.5075 8.49134 10.5002 7.2487 10.5002H4.83203ZM4.08203 12.7502C4.08203 12.336 4.41782 12.0002 4.83203 12.0002H7.2487C7.66291 12.0002 7.9987 12.336 7.9987 12.7502V15.1668C7.9987 15.5811 7.66291 15.9168 7.2487 15.9168H4.83203C4.41782 15.9168 4.08203 15.5811 4.08203 15.1668V12.7502ZM10.4987 4.83349C10.4987 3.59085 11.5061 2.5835 12.7487 2.5835H15.1654C16.408 2.5835 17.4154 3.59086 17.4154 4.8335V7.25015C17.4154 8.49279 16.408 9.50015 15.1654 9.50015H12.7487C11.5061 9.50015 10.4987 8.49279 10.4987 7.25015V4.83349ZM12.7487 4.0835C12.3345 4.0835 11.9987 4.41928 11.9987 4.83349V7.25015C11.9987 7.66436 12.3345 8.00015 12.7487 8.00015H15.1654C15.5796 8.00015 15.9154 7.66436 15.9154 7.25015V4.8335C15.9154 4.41928 15.5796 4.0835 15.1654 4.0835H12.7487ZM12.7487 10.5002C11.5061 10.5002 10.4987 11.5075 10.4987 12.7502V15.1668C10.4987 16.4095 11.5061 17.4168 12.7487 17.4168H15.1654C16.408 17.4168 17.4154 16.4095 17.4154 15.1668V12.7502C17.4154 11.5075 16.408 10.5002 15.1654 10.5002H12.7487ZM11.9987 12.7502C11.9987 12.336 12.3345 12.0002 12.7487 12.0002H15.1654C15.5796 12.0002 15.9154 12.336 15.9154 12.7502V15.1668C15.9154 15.5811 15.5796 15.9168 15.1654 15.9168H12.7487C12.3345 15.9168 11.9987 15.5811 11.9987 15.1668V12.7502Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const Uo = /* @__PURE__ */ k(Ro, [["render", Wo]]), Ko = {}, Jo = {
  class: "w-5 h-5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Xo(e, t) {
  return o(), n("svg", Jo, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M5.5 3.25C4.25736 3.25 3.25 4.25736 3.25 5.5V18.5C3.25 19.7426 4.25736 20.75 5.5 20.75H18.5001C19.7427 20.75 20.7501 19.7426 20.7501 18.5V5.5C20.7501 4.25736 19.7427 3.25 18.5001 3.25H5.5ZM4.75 5.5C4.75 5.08579 5.08579 4.75 5.5 4.75H18.5001C18.9143 4.75 19.2501 5.08579 19.2501 5.5V18.5C19.2501 18.9142 18.9143 19.25 18.5001 19.25H5.5C5.08579 19.25 4.75 18.9142 4.75 18.5V5.5ZM6.25005 9.7143C6.25005 9.30008 6.58583 8.9643 7.00005 8.9643L17 8.96429C17.4143 8.96429 17.75 9.30008 17.75 9.71429C17.75 10.1285 17.4143 10.4643 17 10.4643L7.00005 10.4643C6.58583 10.4643 6.25005 10.1285 6.25005 9.7143ZM6.25005 14.2857C6.25005 13.8715 6.58583 13.5357 7.00005 13.5357H17C17.4143 13.5357 17.75 13.8715 17.75 14.2857C17.75 14.6999 17.4143 15.0357 17 15.0357H7.00005C6.58583 15.0357 6.25005 14.6999 6.25005 14.2857Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const Qo = /* @__PURE__ */ k(Ko, [["render", Xo]]), Yo = {}, es = {
  class: "w-5 h-5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function ts(e, t) {
  return o(), n("svg", es, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M15.1007 19.247C14.6865 19.247 14.3507 18.9112 14.3507 18.497L14.3507 14.245H12.8507V18.497C12.8507 19.7396 13.8581 20.747 15.1007 20.747H18.5007C19.7434 20.747 20.7507 19.7396 20.7507 18.497L20.7507 5.49609C20.7507 4.25345 19.7433 3.24609 18.5007 3.24609H15.1007C13.8581 3.24609 12.8507 4.25345 12.8507 5.49609V9.74501L14.3507 9.74501V5.49609C14.3507 5.08188 14.6865 4.74609 15.1007 4.74609L18.5007 4.74609C18.9149 4.74609 19.2507 5.08188 19.2507 5.49609L19.2507 18.497C19.2507 18.9112 18.9149 19.247 18.5007 19.247H15.1007ZM3.25073 11.9984C3.25073 12.2144 3.34204 12.4091 3.48817 12.546L8.09483 17.1556C8.38763 17.4485 8.86251 17.4487 9.15549 17.1559C9.44848 16.8631 9.44863 16.3882 9.15583 16.0952L5.81116 12.7484L16.0007 12.7484C16.4149 12.7484 16.7507 12.4127 16.7507 11.9984C16.7507 11.5842 16.4149 11.2484 16.0007 11.2484L5.81528 11.2484L9.15585 7.90554C9.44864 7.61255 9.44847 7.13767 9.15547 6.84488C8.86248 6.55209 8.3876 6.55226 8.09481 6.84525L3.52309 11.4202C3.35673 11.5577 3.25073 11.7657 3.25073 11.9984Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const rs = /* @__PURE__ */ k(Yo, [["render", ts]]), os = {}, ss = {
  class: "w-5 h-5",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function ls(e, t) {
  return o(), n("svg", ss, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M12.2996 1.12891C11.4713 1.12891 10.7998 1.80033 10.7996 2.62867L10.7996 3.1264V3.12659L10.7997 4.87507H6.14591C3.6031 4.87507 1.54175 6.93642 1.54175 9.47923V14.3207C1.54175 15.4553 2.46151 16.3751 3.5961 16.3751H6.14591H10.0001H16.2084C17.4511 16.3751 18.4584 15.3677 18.4584 14.1251V10.1251C18.4584 7.22557 16.1079 4.87507 13.2084 4.87507H12.2997L12.2996 3.87651H13.7511C14.5097 3.87651 15.1248 3.26157 15.1249 2.50293C15.125 1.74411 14.5099 1.12891 13.7511 1.12891H12.2996ZM3.04175 9.47923C3.04175 7.76485 4.43153 6.37507 6.14591 6.37507C7.8603 6.37507 9.25008 7.76485 9.25008 9.47923V14.8751H6.14591H3.5961C3.28994 14.8751 3.04175 14.6269 3.04175 14.3207V9.47923ZM10.7501 9.47923V14.8751H16.2084C16.6226 14.8751 16.9584 14.5393 16.9584 14.1251V10.1251C16.9584 8.054 15.2795 6.37507 13.2084 6.37507H9.54632C10.294 7.19366 10.7501 8.28319 10.7501 9.47923Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const as = /* @__PURE__ */ k(os, [["render", ls]]), ns = {}, is = {
  class: "w-5 h-5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function ds(e, t) {
  return o(), n("svg", is, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M3.5 8.187V17.25C3.5 17.6642 3.83579 18 4.25 18H19.75C20.1642 18 20.5 17.6642 20.5 17.25V8.18747L13.2873 13.2171C12.5141 13.7563 11.4866 13.7563 10.7134 13.2171L3.5 8.187ZM20.5 6.2286C20.5 6.23039 20.5 6.23218 20.5 6.23398V6.24336C20.4976 6.31753 20.4604 6.38643 20.3992 6.42905L12.4293 11.9867C12.1716 12.1664 11.8291 12.1664 11.5713 11.9867L3.60116 6.42885C3.538 6.38481 3.50035 6.31268 3.50032 6.23568C3.50028 6.10553 3.60577 6 3.73592 6H20.2644C20.3922 6 20.4963 6.10171 20.5 6.2286ZM22 6.25648V17.25C22 18.4926 20.9926 19.5 19.75 19.5H4.25C3.00736 19.5 2 18.4926 2 17.25V6.23398C2 6.22371 2.00021 6.2135 2.00061 6.20333C2.01781 5.25971 2.78812 4.5 3.73592 4.5H20.2644C21.2229 4.5 22 5.27697 22.0001 6.23549C22.0001 6.24249 22.0001 6.24949 22 6.25648Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const cs = /* @__PURE__ */ k(ns, [["render", ds]]), us = {}, gs = {
  class: "w-5 h-5",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function fs(e, t) {
  return o(), n("svg", gs, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M2.43311 5.0001C2.43311 4.50304 2.83605 4.1001 3.33311 4.1001L16.6664 4.1001C17.1635 4.1001 17.5664 4.50304 17.5664 5.0001C17.5664 5.49715 17.1635 5.9001 16.6664 5.9001L3.33311 5.9001C2.83605 5.9001 2.43311 5.49716 2.43311 5.0001ZM2.43311 15.0001C2.43311 14.503 2.83605 14.1001 3.33311 14.1001L16.6664 14.1001C17.1635 14.1001 17.5664 14.503 17.5664 15.0001C17.5664 15.4972 17.1635 15.9001 16.6664 15.9001L3.33311 15.9001C2.83605 15.9001 2.43311 15.4972 2.43311 15.0001ZM3.33311 9.1001C2.83605 9.1001 2.43311 9.50304 2.43311 10.0001C2.43311 10.4972 2.83605 10.9001 3.33311 10.9001L16.6664 10.9001C17.1635 10.9001 17.5664 10.4972 17.5664 10.0001C17.5664 9.50304 17.1635 9.1001 16.6664 9.1001L3.33311 9.1001Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const bs = /* @__PURE__ */ k(us, [["render", fs]]), hs = {}, ms = {
  class: "w-5 h-5",
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Cs(e, t) {
  return o(), n("svg", ms, [...t[0] || (t[0] = [
    s("path", {
      d: "M9 15.6343C12.6244 15.6343 15.5625 12.6961 15.5625 9.07178C15.5625 5.44741 12.6244 2.50928 9 2.50928C5.37563 2.50928 2.4375 5.44741 2.4375 9.07178C2.4375 10.884 3.17203 12.5246 4.35961 13.7122L2.4375 15.6343H9Z",
      stroke: "currentColor",
      "stroke-width": "1.5",
      "stroke-linejoin": "round"
    }, null, -1)
  ])]);
}
const xs = /* @__PURE__ */ k(hs, [["render", Cs]]), vs = {}, ps = {
  class: "w-5 h-5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function ys(e, t) {
  return o(), n("svg", ps, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M8.50391 4.25C8.50391 3.83579 8.83969 3.5 9.25391 3.5H15.2777C15.4766 3.5 15.6674 3.57902 15.8081 3.71967L18.2807 6.19234C18.4214 6.333 18.5004 6.52376 18.5004 6.72268V16.75C18.5004 17.1642 18.1646 17.5 17.7504 17.5H16.248V17.4993H14.748V17.5H9.25391C8.83969 17.5 8.50391 17.1642 8.50391 16.75V4.25ZM14.748 19H9.25391C8.01126 19 7.00391 17.9926 7.00391 16.75V6.49854H6.24805C5.83383 6.49854 5.49805 6.83432 5.49805 7.24854V19.75C5.49805 20.1642 5.83383 20.5 6.24805 20.5H13.998C14.4123 20.5 14.748 20.1642 14.748 19.75L14.748 19ZM7.00391 4.99854V4.25C7.00391 3.00736 8.01127 2 9.25391 2H15.2777C15.8745 2 16.4468 2.23705 16.8687 2.659L19.3414 5.13168C19.7634 5.55364 20.0004 6.12594 20.0004 6.72268V16.75C20.0004 17.9926 18.9931 19 17.7504 19H16.248L16.248 19.75C16.248 20.9926 15.2407 22 13.998 22H6.24805C5.00541 22 3.99805 20.9926 3.99805 19.75V7.24854C3.99805 6.00589 5.00541 4.99854 6.24805 4.99854H7.00391Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const ks = /* @__PURE__ */ k(vs, [["render", ys]]), ws = {}, $s = {
  class: "w-5 h-5",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Vs(e, t) {
  return o(), n("svg", $s, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M6.88066 3.10905C8.54039 1.44932 11.2313 1.44933 12.8911 3.10906C14.5508 4.76878 14.5508 7.45973 12.8911 9.11946L12.0657 9.94479L11.0051 8.88413L11.8304 8.0588C12.9043 6.98486 12.9043 5.24366 11.8304 4.16972C10.7565 3.09577 9.01526 3.09577 7.94132 4.16971L7.11599 4.99504L6.05533 3.93438L6.88066 3.10905ZM8.88376 11.0055L9.94442 12.0661L9.11983 12.8907C7.4601 14.5504 4.76915 14.5504 3.10942 12.8907C1.44969 11.231 1.44969 8.54002 3.10942 6.88029L3.93401 6.0557L4.99467 7.11636L4.17008 7.94095C3.09614 9.01489 3.09614 10.7561 4.17008 11.83C5.24402 12.904 6.98522 12.904 8.05917 11.83L8.88376 11.0055ZM9.94458 7.11599C10.2375 6.8231 10.2375 6.34823 9.94458 6.05533C9.65169 5.76244 9.17682 5.76244 8.88392 6.05533L6.0555 8.88376C5.7626 9.17665 5.7626 9.65153 6.0555 9.94442C6.34839 10.2373 6.82326 10.2373 7.11616 9.94442L9.94458 7.11599Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const Ls = /* @__PURE__ */ k(ws, [["render", Vs]]), Ms = {}, Hs = {
  class: "w-5 h-5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Bs(e, t) {
  return o(), n("svg", Hs, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M12 2C11.5858 2 11.25 2.33579 11.25 2.75V12C11.25 12.4142 11.5858 12.75 12 12.75H21.25C21.6642 12.75 22 12.4142 22 12C22 6.47715 17.5228 2 12 2ZM12.75 11.25V3.53263C13.2645 3.57761 13.7659 3.66843 14.25 3.80098V3.80099C15.6929 4.19606 16.9827 4.96184 18.0104 5.98959C19.0382 7.01734 19.8039 8.30707 20.199 9.75C20.3316 10.2341 20.4224 10.7355 20.4674 11.25H12.75ZM2 12C2 7.25083 5.31065 3.27489 9.75 2.25415V3.80099C6.14748 4.78734 3.5 8.0845 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C15.9155 20.5 19.2127 17.8525 20.199 14.25H21.7459C20.7251 18.6894 16.7492 22 12 22C6.47715 22 2 17.5229 2 12Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const _s = /* @__PURE__ */ k(Ms, [["render", Bs]]), Zs = {}, Ss = {
  class: "w-5 h-5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Is(e, t) {
  return o(), n("svg", Ss, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M14 2.75C14 2.33579 14.3358 2 14.75 2C15.1642 2 15.5 2.33579 15.5 2.75V5.73291L17.75 5.73291H19C19.4142 5.73291 19.75 6.0687 19.75 6.48291C19.75 6.89712 19.4142 7.23291 19 7.23291H18.5L18.5 12.2329C18.5 15.5691 15.9866 18.3183 12.75 18.6901V21.25C12.75 21.6642 12.4142 22 12 22C11.5858 22 11.25 21.6642 11.25 21.25V18.6901C8.01342 18.3183 5.5 15.5691 5.5 12.2329L5.5 7.23291H5C4.58579 7.23291 4.25 6.89712 4.25 6.48291C4.25 6.0687 4.58579 5.73291 5 5.73291L6.25 5.73291L8.5 5.73291L8.5 2.75C8.5 2.33579 8.83579 2 9.25 2C9.66421 2 10 2.33579 10 2.75L10 5.73291L14 5.73291V2.75ZM7 7.23291L7 12.2329C7 14.9943 9.23858 17.2329 12 17.2329C14.7614 17.2329 17 14.9943 17 12.2329L17 7.23291L7 7.23291Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const zs = /* @__PURE__ */ k(Zs, [["render", Is]]), Ds = {}, Ts = {
  class: "w-5 h-5",
  viewBox: "0 0 12 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function js(e, t) {
  return o(), n("svg", Ts, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M5.25012 3C5.25012 2.58579 5.58591 2.25 6.00012 2.25C6.41433 2.25 6.75012 2.58579 6.75012 3V5.25012L9.00034 5.25012C9.41455 5.25012 9.75034 5.58591 9.75034 6.00012C9.75034 6.41433 9.41455 6.75012 9.00034 6.75012H6.75012V9.00034C6.75012 9.41455 6.41433 9.75034 6.00012 9.75034C5.58591 9.75034 5.25012 9.41455 5.25012 9.00034L5.25012 6.75012H3C2.58579 6.75012 2.25 6.41433 2.25 6.00012C2.25 5.58591 2.58579 5.25012 3 5.25012H5.25012V3Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const As = /* @__PURE__ */ k(Ds, [["render", js]]), Es = {}, Gs = {
  class: "w-5 h-5",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function qs(e, t) {
  return o(), n("svg", Gs, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M6.72763 4.33443C7.92401 3.6437 9.30836 3.34945 10.6823 3.49385C12.0562 3.63826 13.3491 4.2139 14.3757 5.13828C15.0468 5.74252 15.5815 6.4755 15.9517 7.28815L13.6069 6.49282C13.2147 6.35977 12.7888 6.5699 12.6557 6.96216C12.5227 7.35443 12.7328 7.78028 13.1251 7.91333L16.8227 9.16752C16.8668 9.18743 16.9129 9.20314 16.9605 9.21426L17.0868 9.25712C17.2752 9.32101 17.4813 9.30746 17.6597 9.21943C17.838 9.1314 17.9741 8.97611 18.038 8.78772L19.3816 4.82561C19.5147 4.43334 19.3045 4.0075 18.9122 3.87447C18.52 3.74145 18.0941 3.95161 17.9611 4.34388L17.2335 6.48938C16.783 5.5609 16.1553 4.72223 15.3794 4.02356C14.1174 2.88722 12.528 2.17958 10.839 2.00207C9.15012 1.82455 7.44834 2.18628 5.97763 3.03539C4.50692 3.88451 3.34277 5.17743 2.65203 6.72884C1.9613 8.28025 1.77944 10.0105 2.13252 11.6716C2.4856 13.3328 3.3555 14.8395 4.61753 15.9758C5.87957 17.1121 7.46894 17.8198 9.15788 17.9973C10.8468 18.1748 12.5486 17.8131 14.0193 16.964C14.378 16.7569 14.5009 16.2982 14.2938 15.9395C14.0867 15.5807 13.628 15.4578 13.2693 15.6649C12.0729 16.3557 10.6886 16.6499 9.31467 16.5055C7.94077 16.3611 6.64786 15.7855 5.62123 14.8611C4.5946 13.9367 3.88697 12.711 3.59974 11.3598C3.31252 10.0085 3.46046 8.60098 4.02235 7.33894C4.58424 6.07691 5.53125 5.02516 6.72763 4.33443Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const Ps = /* @__PURE__ */ k(Es, [["render", qs]]), Fs = {}, Os = {
  class: "w-5 h-5",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Rs(e, t) {
  return o(), n("svg", Os, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M4.98481 2.44399C3.11333 1.57147 1.15325 3.46979 1.96543 5.36824L3.82086 9.70527C3.90146 9.89367 3.90146 10.1069 3.82086 10.2953L1.96543 14.6323C1.15326 16.5307 3.11332 18.4291 4.98481 17.5565L16.8184 12.0395C18.5508 11.2319 18.5508 8.76865 16.8184 7.961L4.98481 2.44399ZM3.34453 4.77824C3.0738 4.14543 3.72716 3.51266 4.35099 3.80349L16.1846 9.32051C16.762 9.58973 16.762 10.4108 16.1846 10.68L4.35098 16.197C3.72716 16.4879 3.0738 15.8551 3.34453 15.2223L5.19996 10.8853C5.21944 10.8397 5.23735 10.7937 5.2537 10.7473L9.11784 10.7473C9.53206 10.7473 9.86784 10.4115 9.86784 9.99726C9.86784 9.58304 9.53206 9.24726 9.11784 9.24726L5.25157 9.24726C5.2358 9.20287 5.2186 9.15885 5.19996 9.11528L3.34453 4.77824Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const Ns = /* @__PURE__ */ k(Fs, [["render", Rs]]), Ws = {}, Us = {
  class: "w-5 h-5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Ks(e, t) {
  return o(), n("svg", Us, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M10.4858 3.5L13.5182 3.5C13.9233 3.5 14.2518 3.82851 14.2518 4.23377C14.2518 5.9529 16.1129 7.02795 17.602 6.1682C17.9528 5.96567 18.4014 6.08586 18.6039 6.43667L20.1203 9.0631C20.3229 9.41407 20.2027 9.86286 19.8517 10.0655C18.3625 10.9253 18.3625 13.0747 19.8517 13.9345C20.2026 14.1372 20.3229 14.5859 20.1203 14.9369L18.6039 17.5634C18.4013 17.9142 17.9528 18.0344 17.602 17.8318C16.1129 16.9721 14.2518 18.0471 14.2518 19.7663C14.2518 20.1715 13.9233 20.5 13.5182 20.5H10.4858C10.0804 20.5 9.75182 20.1714 9.75182 19.766C9.75182 18.0461 7.88983 16.9717 6.40067 17.8314C6.04945 18.0342 5.60037 17.9139 5.39767 17.5628L3.88167 14.937C3.67903 14.586 3.79928 14.1372 4.15026 13.9346C5.63949 13.0748 5.63946 10.9253 4.15025 10.0655C3.79926 9.86282 3.67901 9.41401 3.88165 9.06303L5.39764 6.43725C5.60034 6.08617 6.04943 5.96581 6.40065 6.16858C7.88982 7.02836 9.75182 5.9539 9.75182 4.23399C9.75182 3.82862 10.0804 3.5 10.4858 3.5ZM13.5182 2L10.4858 2C9.25201 2 8.25182 3.00019 8.25182 4.23399C8.25182 4.79884 7.64013 5.15215 7.15065 4.86955C6.08213 4.25263 4.71559 4.61859 4.0986 5.68725L2.58261 8.31303C1.96575 9.38146 2.33183 10.7477 3.40025 11.3645C3.88948 11.647 3.88947 12.3531 3.40026 12.6355C2.33184 13.2524 1.96578 14.6186 2.58263 15.687L4.09863 18.3128C4.71562 19.3814 6.08215 19.7474 7.15067 19.1305C7.64015 18.8479 8.25182 19.2012 8.25182 19.766C8.25182 20.9998 9.25201 22 10.4858 22H13.5182C14.7519 22 15.7518 20.9998 15.7518 19.7663C15.7518 19.2015 16.3632 18.8487 16.852 19.1309C17.9202 19.7476 19.2862 19.3816 19.9029 18.3134L21.4193 15.6869C22.0361 14.6185 21.6701 13.2523 20.6017 12.6355C20.1125 12.3531 20.1125 11.647 20.6017 11.3645C21.6701 10.7477 22.0362 9.38152 21.4193 8.3131L19.903 5.68667C19.2862 4.61842 17.9202 4.25241 16.852 4.86917C16.3632 5.15138 15.7518 4.79856 15.7518 4.23377C15.7518 3.00024 14.7519 2 13.5182 2ZM9.6659 11.9999C9.6659 10.7103 10.7113 9.66493 12.0009 9.66493C13.2905 9.66493 14.3359 10.7103 14.3359 11.9999C14.3359 13.2895 13.2905 14.3349 12.0009 14.3349C10.7113 14.3349 9.6659 13.2895 9.6659 11.9999ZM12.0009 8.16493C9.88289 8.16493 8.1659 9.88191 8.1659 11.9999C8.1659 14.1179 9.88289 15.8349 12.0009 15.8349C14.1189 15.8349 15.8359 14.1179 15.8359 11.9999C15.8359 9.88191 14.1189 8.16493 12.0009 8.16493Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const Js = /* @__PURE__ */ k(Ws, [["render", Ks]]), Xs = {}, Qs = {
  class: "w-5 h-5",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Ys(e, t) {
  return o(), n("svg", Qs, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M9.99993 2.375C10.2854 2.375 10.5461 2.53707 10.6725 2.79308L12.7318 6.96563L17.3365 7.63473C17.619 7.67578 17.8537 7.87367 17.9419 8.14517C18.0301 8.41668 17.9565 8.71473 17.7521 8.914L14.4201 12.1619L15.2067 16.748C15.255 17.0293 15.1393 17.3137 14.9083 17.4815C14.6774 17.6493 14.3712 17.6714 14.1185 17.5386L9.99993 15.3733L5.88137 17.5386C5.62869 17.6714 5.32249 17.6493 5.09153 17.4815C4.86057 17.3137 4.7449 17.0293 4.79316 16.748L5.57974 12.1619L2.24775 8.914C2.04332 8.71473 1.96975 8.41668 2.05797 8.14517C2.14619 7.87367 2.3809 7.67578 2.66341 7.63473L7.2681 6.96563L9.32738 2.79308C9.45373 2.53707 9.71445 2.375 9.99993 2.375ZM9.99993 4.81966L8.4387 7.98306C8.32946 8.20442 8.11828 8.35785 7.874 8.39334L4.38298 8.90062L6.90911 11.363C7.08587 11.5353 7.16653 11.7835 7.1248 12.0268L6.52847 15.5037L9.65093 13.8622C9.86942 13.7473 10.1304 13.7473 10.3489 13.8622L13.4714 15.5037L12.8751 12.0268C12.8333 11.7835 12.914 11.5353 13.0908 11.363L15.6169 8.90062L12.1259 8.39334C11.8816 8.35785 11.6704 8.20442 11.5612 7.98306L9.99993 4.81966Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const Te = /* @__PURE__ */ k(Xs, [["render", Ys]]), el = {}, tl = {
  class: "w-5 h-5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function rl(e, t) {
  return o(), n("svg", tl, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M3.70186 12.0001C3.70186 7.41711 7.41711 3.70186 12.0001 3.70186C16.5831 3.70186 20.2984 7.41711 20.2984 12.0001C20.2984 16.5831 16.5831 20.2984 12.0001 20.2984C7.41711 20.2984 3.70186 16.5831 3.70186 12.0001ZM12.0001 1.90186C6.423 1.90186 1.90186 6.423 1.90186 12.0001C1.90186 17.5772 6.423 22.0984 12.0001 22.0984C17.5772 22.0984 22.0984 17.5772 22.0984 12.0001C22.0984 6.423 17.5772 1.90186 12.0001 1.90186ZM15.6197 10.7395C15.9712 10.388 15.9712 9.81819 15.6197 9.46672C15.2683 9.11525 14.6984 9.11525 14.347 9.46672L11.1894 12.6243L9.6533 11.0883C9.30183 10.7368 8.73198 10.7368 8.38051 11.0883C8.02904 11.4397 8.02904 12.0096 8.38051 12.3611L10.553 14.5335C10.7217 14.7023 10.9507 14.7971 11.1894 14.7971C11.428 14.7971 11.657 14.7023 11.8257 14.5335L15.6197 10.7395Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const ol = /* @__PURE__ */ k(el, [["render", rl]]), sl = {}, ll = {
  class: "w-5 h-5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function al(e, t) {
  return o(), n("svg", ll, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10.9991 7.52507C10.9991 8.07736 11.4468 8.52507 11.9991 8.52507H12.0001C12.5524 8.52507 13.0001 8.07736 13.0001 7.52507C13.0001 6.97279 12.5524 6.52507 12.0001 6.52507H11.9991C11.4468 6.52507 10.9991 6.97279 10.9991 7.52507ZM12.0001 17.3714C11.5859 17.3714 11.2501 17.0356 11.2501 16.6214V10.9449C11.2501 10.5307 11.5859 10.1949 12.0001 10.1949C12.4143 10.1949 12.7501 10.5307 12.7501 10.9449V16.6214C12.7501 17.0356 12.4143 17.3714 12.0001 17.3714Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const nl = /* @__PURE__ */ k(sl, [["render", al]]), il = {}, dl = {
  class: "w-5 h-5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function cl(e, t) {
  return o(), n("svg", dl, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M3.25 5.5C3.25 4.25736 4.25736 3.25 5.5 3.25H18.5C19.7426 3.25 20.75 4.25736 20.75 5.5V18.5C20.75 19.7426 19.7426 20.75 18.5 20.75H5.5C4.25736 20.75 3.25 19.7426 3.25 18.5V5.5ZM5.5 4.75C5.08579 4.75 4.75 5.08579 4.75 5.5V8.58325L19.25 8.58325V5.5C19.25 5.08579 18.9142 4.75 18.5 4.75H5.5ZM19.25 10.0833H15.416V13.9165H19.25V10.0833ZM13.916 10.0833L10.083 10.0833V13.9165L13.916 13.9165V10.0833ZM8.58301 10.0833H4.75V13.9165H8.58301V10.0833ZM4.75 18.5V15.4165H8.58301V19.25H5.5C5.08579 19.25 4.75 18.9142 4.75 18.5ZM10.083 19.25V15.4165L13.916 15.4165V19.25H10.083ZM15.416 19.25V15.4165H19.25V18.5C19.25 18.9142 18.9142 19.25 18.5 19.25H15.416Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const ul = /* @__PURE__ */ k(il, [["render", cl]]), gl = {}, fl = {
  class: "w-5 h-5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function bl(e, t) {
  return o(), n("svg", fl, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M7.75586 5.50098C7.75586 5.08676 8.09165 4.75098 8.50586 4.75098H18.4985C18.9127 4.75098 19.2485 5.08676 19.2485 5.50098L19.2485 15.4956C19.2485 15.9098 18.9127 16.2456 18.4985 16.2456H8.50586C8.09165 16.2456 7.75586 15.9098 7.75586 15.4956V5.50098ZM8.50586 3.25098C7.26322 3.25098 6.25586 4.25834 6.25586 5.50098V6.26318H5.50195C4.25931 6.26318 3.25195 7.27054 3.25195 8.51318V18.4995C3.25195 19.7422 4.25931 20.7495 5.50195 20.7495H15.4883C16.7309 20.7495 17.7383 19.7421 17.7383 18.4995L17.7383 17.7456H18.4985C19.7411 17.7456 20.7485 16.7382 20.7485 15.4956L20.7485 5.50097C20.7485 4.25833 19.7411 3.25098 18.4985 3.25098H8.50586ZM16.2383 17.7456H8.50586C7.26322 17.7456 6.25586 16.7382 6.25586 15.4956V7.76318H5.50195C5.08774 7.76318 4.75195 8.09897 4.75195 8.51318V18.4995C4.75195 18.9137 5.08774 19.2495 5.50195 19.2495H15.4883C15.9025 19.2495 16.2383 18.9137 16.2383 18.4995L16.2383 17.7456Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const hl = /* @__PURE__ */ k(gl, [["render", bl]]), ml = {}, Cl = {
  class: "w-5 h-5",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function xl(e, t) {
  return o(), n("svg", Cl, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M6.54118 3.7915C6.54118 2.54886 7.54854 1.5415 8.79118 1.5415H11.2078C12.4505 1.5415 13.4578 2.54886 13.4578 3.7915V4.0415H15.6249H16.6658C17.08 4.0415 17.4158 4.37729 17.4158 4.7915C17.4158 5.20572 17.08 5.5415 16.6658 5.5415H16.3749V8.24638V13.2464V16.2082C16.3749 17.4508 15.3676 18.4582 14.1249 18.4582H5.87492C4.63228 18.4582 3.62492 17.4508 3.62492 16.2082V13.2464V8.24638V5.5415H3.33325C2.91904 5.5415 2.58325 5.20572 2.58325 4.7915C2.58325 4.37729 2.91904 4.0415 3.33325 4.0415H4.37492H6.54118V3.7915ZM14.8749 13.2464V8.24638V5.5415H13.4578H12.7078H7.29118H6.54118H5.12492V8.24638V13.2464V16.2082C5.12492 16.6224 5.46071 16.9582 5.87492 16.9582H14.1249C14.5391 16.9582 14.8749 16.6224 14.8749 16.2082V13.2464ZM8.04118 4.0415H11.9578V3.7915C11.9578 3.37729 11.6221 3.0415 11.2078 3.0415H8.79118C8.37696 3.0415 8.04118 3.37729 8.04118 3.7915V4.0415ZM8.33325 7.99984C8.74747 7.99984 9.08325 8.33562 9.08325 8.74984V13.7498C9.08325 14.1641 8.74747 14.4998 8.33325 14.4998C7.91904 14.4998 7.58325 14.1641 7.58325 13.7498V8.74984C7.58325 8.33562 7.91904 7.99984 8.33325 7.99984ZM12.4166 8.74984C12.4166 8.33562 12.0808 7.99984 11.6666 7.99984C11.2524 7.99984 10.9166 8.33562 10.9166 8.74984V13.7498C10.9166 14.1641 11.2524 14.4998 11.6666 14.4998C12.0808 14.4998 12.4166 14.1641 12.4166 13.7498V8.74984Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const vl = /* @__PURE__ */ k(ml, [["render", xl]]), pl = {}, yl = {
  class: "w-5 h-5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function kl(e, t) {
  return o(), n("svg", yl, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M7.99951 4.25C7.99951 3.00736 9.00687 2 10.2495 2H13.7495C14.9922 2 15.9995 3.00736 15.9995 4.25V5H18.75H19.999C20.4132 5 20.749 5.33579 20.749 5.75C20.749 6.16421 20.4132 6.5 19.999 6.5H19.5V9.89585V15.8958V19.75C19.5 20.9926 18.4926 22 17.25 22H6.75C5.50736 22 4.5 20.9926 4.5 19.75V15.8958V9.89585V6.5H4C3.58579 6.5 3.25 6.16421 3.25 5.75C3.25 5.33579 3.58579 5 4 5H5.25H7.99951V4.25ZM18 15.8958V9.89585V6.5H15.9995H15.2495H8.74951H7.99951H6V9.89585V15.8958V19.75C6 20.1642 6.33579 20.5 6.75 20.5H17.25C17.6642 20.5 18 20.1642 18 19.75V15.8958ZM9.49951 5H14.4995V4.25C14.4995 3.83579 14.1637 3.5 13.7495 3.5H10.2495C9.8353 3.5 9.49951 3.83579 9.49951 4.25V5ZM10 9.75C10.4142 9.75 10.75 10.0858 10.75 10.5V16.5C10.75 16.9142 10.4142 17.25 10 17.25C9.58579 17.25 9.25 16.9142 9.25 16.5V10.5C9.25 10.0858 9.58579 9.75 10 9.75ZM14.75 10.5C14.75 10.0858 14.4142 9.75 14 9.75C13.5858 9.75 13.25 10.0858 13.25 10.5V16.5C13.25 16.9142 13.5858 17.25 14 17.25C14.4142 17.25 14.75 16.9142 14.75 16.5V10.5Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const wl = /* @__PURE__ */ k(pl, [["render", kl]]), $l = {}, Vl = {
  class: "w-5 h-5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Ll(e, t) {
  return o(), n("svg", Vl, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 14.1526 4.3002 16.1184 5.61936 17.616C6.17279 15.3096 8.24852 13.5955 10.7246 13.5955H13.2746C15.7509 13.5955 17.8268 15.31 18.38 17.6167C19.6996 16.119 20.5 14.153 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM17.0246 18.8566V18.8455C17.0246 16.7744 15.3457 15.0955 13.2746 15.0955H10.7246C8.65354 15.0955 6.97461 16.7744 6.97461 18.8455V18.856C8.38223 19.8895 10.1198 20.5 12 20.5C13.8798 20.5 15.6171 19.8898 17.0246 18.8566ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.9991 7.25C10.8847 7.25 9.98126 8.15342 9.98126 9.26784C9.98126 10.3823 10.8847 11.2857 11.9991 11.2857C13.1135 11.2857 14.0169 10.3823 14.0169 9.26784C14.0169 8.15342 13.1135 7.25 11.9991 7.25ZM8.48126 9.26784C8.48126 7.32499 10.0563 5.75 11.9991 5.75C13.9419 5.75 15.5169 7.32499 15.5169 9.26784C15.5169 11.2107 13.9419 12.7857 11.9991 12.7857C10.0563 12.7857 8.48126 11.2107 8.48126 9.26784Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const Ml = /* @__PURE__ */ k($l, [["render", Ll]]), Hl = {}, Bl = {
  class: "w-5 h-5",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function _l(e, t) {
  return o(), n("svg", Bl, [...t[0] || (t[0] = [
    s("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M7.33633 4.79297C6.39425 4.79297 5.63054 5.55668 5.63054 6.49876C5.63054 7.44084 6.39425 8.20454 7.33633 8.20454C8.27841 8.20454 9.04212 7.44084 9.04212 6.49876C9.04212 5.55668 8.27841 4.79297 7.33633 4.79297ZM4.13054 6.49876C4.13054 4.72825 5.56582 3.29297 7.33633 3.29297C9.10684 3.29297 10.5421 4.72825 10.5421 6.49876C10.5421 8.26926 9.10684 9.70454 7.33633 9.70454C5.56582 9.70454 4.13054 8.26926 4.13054 6.49876ZM4.24036 12.7602C3.61952 13.3265 3.28381 14.0575 3.10504 14.704C3.06902 14.8343 3.09994 14.9356 3.17904 15.0229C3.26864 15.1218 3.4319 15.2073 3.64159 15.2073H10.9411C11.1507 15.2073 11.314 15.1218 11.4036 15.0229C11.4827 14.9356 11.5136 14.8343 11.4776 14.704C11.2988 14.0575 10.9631 13.3265 10.3423 12.7602C9.73639 12.2075 8.7967 11.7541 7.29132 11.7541C5.78595 11.7541 4.84626 12.2075 4.24036 12.7602ZM3.22949 11.652C4.14157 10.82 5.4544 10.2541 7.29132 10.2541C9.12825 10.2541 10.4411 10.82 11.3532 11.652C12.2503 12.4703 12.698 13.4893 12.9234 14.3042C13.1054 14.9627 12.9158 15.5879 12.5152 16.03C12.1251 16.4605 11.5496 16.7073 10.9411 16.7073H3.64159C3.03301 16.7073 2.45751 16.4605 2.06745 16.03C1.66689 15.5879 1.47723 14.9627 1.65929 14.3042C1.88464 13.4893 2.33237 12.4703 3.22949 11.652ZM12.7529 9.70454C12.1654 9.70454 11.6148 9.54648 11.1412 9.27055C11.4358 8.86714 11.6676 8.4151 11.8226 7.92873C12.0902 8.10317 12.4097 8.20454 12.7529 8.20454C13.695 8.20454 14.4587 7.44084 14.4587 6.49876C14.4587 5.55668 13.695 4.79297 12.7529 4.79297C12.4097 4.79297 12.0901 4.89435 11.8226 5.0688C11.6676 4.58243 11.4357 4.13039 11.1412 3.72698C11.6147 3.45104 12.1654 3.29297 12.7529 3.29297C14.5235 3.29297 15.9587 4.72825 15.9587 6.49876C15.9587 8.26926 14.5235 9.70454 12.7529 9.70454ZM16.3577 16.7072H13.8902C14.1962 16.2705 14.4012 15.7579 14.4688 15.2072H16.3577C16.5674 15.2072 16.7307 15.1217 16.8203 15.0228C16.8994 14.9355 16.9303 14.8342 16.8943 14.704C16.7155 14.0574 16.3798 13.3264 15.759 12.7601C15.2556 12.301 14.5219 11.9104 13.425 11.7914C13.1434 11.3621 12.7952 10.9369 12.3641 10.5437C12.2642 10.4526 12.1611 10.3643 12.0548 10.2791C12.2648 10.2626 12.4824 10.2541 12.708 10.2541C14.5449 10.2541 15.8577 10.82 16.7698 11.6519C17.6669 12.4702 18.1147 13.4892 18.34 14.3042C18.5221 14.9626 18.3324 15.5879 17.9319 16.03C17.5418 16.4605 16.9663 16.7072 16.3577 16.7072Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const Zl = /* @__PURE__ */ k(Hl, [["render", _l]]), Sl = {}, Il = {
  class: "w-5 h-5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function zl(e, t) {
  return o(), n("svg", Il, [...t[0] || (t[0] = [
    s("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.6501 12.0001C3.6501 7.38852 7.38852 3.6501 12.0001 3.6501C16.6117 3.6501 20.3501 7.38852 20.3501 12.0001C20.3501 16.6117 16.6117 20.3501 12.0001 20.3501C7.38852 20.3501 3.6501 16.6117 3.6501 12.0001ZM12.0001 1.8501C6.39441 1.8501 1.8501 6.39441 1.8501 12.0001C1.8501 17.6058 6.39441 22.1501 12.0001 22.1501C17.6058 22.1501 22.1501 17.6058 22.1501 12.0001C22.1501 6.39441 17.6058 1.8501 12.0001 1.8501ZM10.9992 7.52517C10.9992 8.07746 11.4469 8.52517 11.9992 8.52517H12.0002C12.5525 8.52517 13.0002 8.07746 13.0002 7.52517C13.0002 6.97289 12.5525 6.52517 12.0002 6.52517H11.9992C11.4469 6.52517 10.9992 6.97289 10.9992 7.52517ZM12.0002 17.3715C11.586 17.3715 11.2502 17.0357 11.2502 16.6215V10.945C11.2502 10.5308 11.586 10.195 12.0002 10.195C12.4144 10.195 12.7502 10.5308 12.7502 10.945V16.6215C12.7502 17.0357 12.4144 17.3715 12.0002 17.3715Z",
      fill: "currentColor"
    }, null, -1)
  ])]);
}
const Dl = /* @__PURE__ */ k(Sl, [["render", zl]]), je = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArchiveIcon: b5,
  BarChartIcon: x5,
  BellIcon: k5,
  BoxCubeIcon: L5,
  BoxIcon: _5,
  Calendar2Line: z5,
  CalendarIcon: De,
  CalenderIcon: De,
  ChatIcon: q5,
  CheckIcon: R5,
  ChevronDownIcon: K5,
  ChevronRightIcon: Y5,
  DocsIcon: oo,
  DraftIcon: no,
  ErrorHexaIcon: go,
  ErrorIcon: mo,
  FlagIcon: po,
  FolderIcon: $o,
  GridIcon: Ho,
  HomeIcon: So,
  HorizontalDots: To,
  InfoCircleIcon: Go,
  InfoIcon: Oo,
  LayoutDashboardIcon: Uo,
  ListIcon: Qo,
  LogoutIcon: rs,
  MailBox: as,
  MailIcon: cs,
  MenuIcon: bs,
  Message2Line: xs,
  PageIcon: ks,
  PaperclipIcon: Ls,
  PieChartIcon: _s,
  PlugInIcon: zs,
  PlusIcon: As,
  RefreshIcon: Ps,
  SendIcon: Ns,
  SettingsIcon: Js,
  StaredIcon: Te,
  StarredIcon: Te,
  SuccessIcon: ol,
  SupportIcon: nl,
  TableIcon: ul,
  TaskIcon: hl,
  TrashIcon: vl,
  TrashIconLg: wl,
  UserCircleIcon: Ml,
  UserGroupIcon: Zl,
  WarningIcon: Dl
}, Symbol.toStringTag, { value: "Module" })), Tl = { class: "icon-gallery" }, jl = {
  key: 0,
  class: "icon-gallery-search"
}, Al = { class: "icon-gallery-count" }, El = ["onClick", "title", "onKeydown"], Gl = { class: "icon-gallery-name" }, ql = {
  key: 0,
  class: "icon-gallery-badge"
}, Pl = {
  key: 1,
  class: "icon-gallery-empty"
}, Fl = /* @__PURE__ */ L({
  __name: "IconGallery",
  props: {
    filter: {},
    columns: {},
    searchable: { type: Boolean, default: !0 },
    iconSize: { default: 24 }
  },
  setup(e) {
    const t = e, r = D(""), l = D(null), a = w(() => {
      const h = Object.keys(je).filter(
        (x) => x.endsWith("Icon") || x === "HorizontalDots"
      );
      return t.filter && t.filter.length > 0 ? h.filter((x) => t.filter.includes(x)) : h;
    }), i = w(() => {
      if (!r.value) return a.value;
      const h = r.value.toLowerCase();
      return a.value.filter((x) => x.toLowerCase().includes(h));
    }), u = (h) => je[h], c = async (h) => {
      const x = `import { ${h} } from '@four-bytes/four-tailwind-ui'`;
      try {
        await navigator.clipboard.writeText(x), l.value = h, setTimeout(() => {
          l.value = null;
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy:", v);
      }
    }, f = w(() => t.columns ? { gridTemplateColumns: `repeat(${t.columns}, 1fr)` } : { gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))" });
    return (h, x) => (o(), n("div", Tl, [
      e.searchable ? (o(), n("div", jl, [
        l1(s("input", {
          "onUpdate:modelValue": x[0] || (x[0] = (v) => r.value = v),
          type: "text",
          placeholder: "Search icons...",
          class: "icon-gallery-input"
        }, null, 512), [
          [a1, r.value]
        ]),
        s("span", Al, C(i.value.length) + " icons", 1)
      ])) : b("", !0),
      s("div", {
        class: "icon-gallery-grid",
        style: Q(f.value)
      }, [
        (o(!0), n(A, null, E(i.value, (v) => (o(), n("div", {
          key: v,
          class: g(["icon-gallery-card", { "icon-gallery-card--copied": l.value === v }]),
          onClick: (p) => c(v),
          title: `Click to copy import for ${v}`,
          role: "button",
          tabindex: "0",
          onKeydown: n1((p) => c(v), ["enter"])
        }, [
          s("div", {
            class: "icon-gallery-preview",
            style: Q({ width: `${e.iconSize}px`, height: `${e.iconSize}px` })
          }, [
            (o(), Z(G(u(v))))
          ], 4),
          s("span", Gl, C(v), 1),
          l.value === v ? (o(), n("span", ql, "Copied!")) : b("", !0)
        ], 42, El))), 128))
      ], 4),
      i.value.length === 0 ? (o(), n("div", Pl, ' No icons found for "' + C(r.value) + '" ', 1)) : b("", !0)
    ]));
  }
}), Va = /* @__PURE__ */ k(Fl, [["__scopeId", "data-v-fe5652c1"]]), La = {
  mounted(e, t) {
    e.__clickOutsideHandler__ = (r) => {
      e === r.target || e.contains(r.target) || t.value(r);
    }, document.addEventListener("click", e.__clickOutsideHandler__);
  },
  unmounted(e) {
    e.__clickOutsideHandler__ && (document.removeEventListener("click", e.__clickOutsideHandler__), delete e.__clickOutsideHandler__);
  }
};
export {
  ia as AdminLayout,
  sa as Alert,
  b5 as ArchiveIcon,
  fa as Avatar,
  K0 as Backdrop,
  la as Badge,
  xa as BarChart,
  x5 as BarChartIcon,
  k5 as BellIcon,
  L5 as BoxCubeIcon,
  _5 as BoxIcon,
  pa as Breadcrumb,
  oa as Button,
  z5 as Calendar2Line,
  De as CalendarIcon,
  De as CalenderIcon,
  te as Card,
  q5 as ChatIcon,
  R5 as CheckIcon,
  Xl as CheckboxField,
  K5 as ChevronDownIcon,
  Y5 as ChevronRightIcon,
  na as ConfirmDialog,
  Ql as DatePickerField,
  oo as DocsIcon,
  no as DraftIcon,
  ya as DropdownMenu,
  Ul as EmailField,
  go as ErrorHexaIcon,
  mo as ErrorIcon,
  ra as FileInput,
  po as FlagIcon,
  $o as FolderIcon,
  Z0 as FormDialog,
  Ho as GridIcon,
  U0 as Header,
  So as HomeIcon,
  To as HorizontalDots,
  Va as IconGallery,
  Go as InfoCircleIcon,
  Oo as InfoIcon,
  Nl as InputField,
  Wl as InputGroup,
  va as KeyValueList,
  Uo as LayoutDashboardIcon,
  Qo as ListIcon,
  rs as LogoutIcon,
  as as MailBox,
  cs as MailIcon,
  bs as MenuIcon,
  xs as Message2Line,
  w0 as Modal,
  ta as MultiSelect,
  ks as PageIcon,
  Ls as PaperclipIcon,
  _s as PieChartIcon,
  zs as PlugInIcon,
  As as PlusIcon,
  ha as ProgressBar,
  Ps as RefreshIcon,
  Kl as SelectField,
  ba as SemiCircleGauge,
  Ns as SendIcon,
  Js as SettingsIcon,
  G0 as Sidebar,
  wa as SidebarGroup,
  ka as SidebarItem,
  da as SidebarProvider,
  $a as SidebarSubmenu,
  Xe as SidebarSymbol,
  Te as StaredIcon,
  Te as StarredIcon,
  ma as StatCard,
  Ca as StatsList,
  ol as SuccessIcon,
  nl as SupportIcon,
  ul as TableIcon,
  hl as TaskIcon,
  Jl as TextareaField,
  ua as ThemeProvider,
  Qe as ThemeSymbol,
  ga as ThemeToggler,
  Yl as TimePickerField,
  C0 as Toast,
  aa as ToastContainer,
  ea as ToggleSwitch,
  vl as TrashIcon,
  wl as TrashIconLg,
  Ml as UserCircleIcon,
  Zl as UserGroupIcon,
  Dl as WarningIcon,
  ca as autoInitTheme,
  La as clickOutside,
  m as cn,
  re as colorMap,
  Ye as resolveAdaptiveColor,
  e5 as useClickOutside,
  K as useSidebar,
  T0 as useSidebarProvider,
  Y0 as useTheme,
  Q0 as useThemeProvider,
  y0 as useToast,
  La as vClickOutside
};
