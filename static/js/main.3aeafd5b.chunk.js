(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[3],[,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return l}));const r={desktop:2080,laptop:1680,tablet:1024,mobile:696,mobileS:400},a=e=>`${e}px`,c=e=>e/16+"rem",o=e=>Number(e.replace("ms","")),i=e=>`${e}ms`,l=e=>e.split(" ").map((e=>Number(e)/255))},,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return b})),n.d(t,"h",(function(){return h})),n.d(t,"i",(function(){return f})),n.d(t,"j",(function(){return j})),n.d(t,"k",(function(){return m})),n.d(t,"l",(function(){return p}));var r=n(0),a=n(17);var c=function(){return Object(r.useContext)(a.a)};var o=function(e=""){const[t,n]=Object(r.useState)(e),[a,c]=Object(r.useState)(),[o,i]=Object(r.useState)(!1);return{value:t,error:a,onChange:e=>{n(e.target.value),i(!0),a&&e.target.checkValidity()&&c(null)},onBlur:e=>{o&&e.target.checkValidity()},onInvalid:e=>{e.preventDefault(),c(e.target.validationMessage)}}};let i=0;var l=()=>{const[e,t]=Object(r.useState)(null);return Object(r.useEffect)((()=>t(++i)),[]),e};var s=function(e,t,n){const a=Object(r.useRef)();Object(r.useEffect)((()=>{a.current=e})),Object(r.useEffect)((()=>{if(null!==t){let e=setInterval((function(){a.current()}),t);return()=>clearInterval(e)}}),[t,n])};var u=function(e,t,n={},a=!0){const[c,o]=Object(r.useState)(!1),[i,l]=Object(r.useState)(!1);return Object(r.useEffect)((()=>{if(!(null===e||void 0===e?void 0:e.current))return;const r=new IntersectionObserver((([e])=>{const{isIntersecting:n,target:a}=e;o(n),n&&t&&(r.unobserve(a),l(!0))}),n);return!i&&a&&r.observe(e.current),()=>r.disconnect()}),[e,t,n,i,a]),c};var d=function(e,t){const[n,a]=Object(r.useState)((()=>{try{const n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.error(n),t}}));return[n,t=>{try{const r=t instanceof Function?t(n):t;a(r),window.localStorage.setItem(e,JSON.stringify(r))}catch(r){console.error(r)}}]};var b=function(e,t=!0){const[n,a]=Object(r.useState)(0),c=h();return Object(r.useEffect)((()=>{let n=!1,r=null;const o=()=>{const{innerHeight:r}=window,c=Math.max(0,window.scrollY)*e,o=Math.max(-r,Math.min(r,c));a(t?o:c),n=!1},i=()=>{n||(n=!0,r=requestAnimationFrame(o))};return c||window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i),cancelAnimationFrame(r)}}),[t,e,c]),n};var h=function(){const[e,t]=Object(r.useState)((()=>{var e,t;return null===(e=(t=window).matchMedia)||void 0===e?void 0:e.call(t,"(prefers-reduced-motion: reduce)").matches}));return Object(r.useEffect)((()=>{var e,n;const r=null===(e=(n=window).matchMedia)||void 0===e?void 0:e.call(n,"(prefers-reduced-motion: reduce)"),a=()=>{t(null===r||void 0===r?void 0:r.matches)};return null===r||void 0===r||r.addListener(a),a(),()=>{null===r||void 0===r||r.removeListener(a)}}),[]),e};var f=function(e){const t=Object(r.useRef)();return Object(r.useEffect)((()=>{t.current=e}),[e]),t.current};var j=function(){return Object(r.useContext)(a.b)};var m=function(){const{status:e}=j(),t=f(e),n=h();Object(r.useEffect)((()=>{("entering"===t&&"entered"===e||n&&"entered"===e)&&(window.scrollTo(0,0),document.getElementById("MainContent").focus())}),[n,t,e])};var p=function(){const e="object"===typeof window,t=navigator.userAgent.match(/iphone|ipod|ipad/i),n=Object(r.useRef)((()=>({w:0,h:0}))),a=Object(r.useRef)((()=>Math.abs(window.orientation))),c=Object(r.useCallback)((()=>{let e=document.createElement("div");e.style.position="fixed",e.style.height="100vh",e.style.width=0,e.style.top=0,document.documentElement.appendChild(e),a.current.w=90===n.current?e.offsetHeight:window.innerWidth,a.current.h=90===n.current?window.innerWidth:e.offsetHeight,document.documentElement.removeChild(e),e=null}),[]),o=Object(r.useCallback)((()=>e?t?(c(),90!==Math.abs(window.orientation)?a.current.h:a.current.w):window.innerHeight:0),[c,e,t]),i=Object(r.useCallback)((()=>({width:e?window.innerWidth:0,height:o()})),[o,e]),[l,s]=Object(r.useState)((()=>i()));return Object(r.useEffect)((()=>{const e=()=>{s(i())};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[i,e]),l}},function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var r=n(2);const a="system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",c={base:{rgbBlack:"0 0 0",rgbWhite:"255 255 255",bezierFastoutSlowin:"cubic-bezier(0.4, 0.0, 0.2, 1)",durationXS:"200ms",durationS:"300ms",durationM:"400ms",durationL:"600ms",durationXL:"800ms",systemFontStack:a,fontStack:`Gotham, ${a}`,monoFontStack:"SFMono Regular, Roboto Mono, Consolas, Liberation Mono, Menlo, Courier, monospace",japaneseFontStack:"\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, \u30e1\u30a4\u30ea\u30aa, Meiryo, Segoe UI, sans-serif",fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,fontSizeH0:Object(r.e)(140),fontSizeH1:Object(r.e)(100),fontSizeH2:Object(r.e)(58),fontSizeH3:Object(r.e)(38),fontSizeH4:Object(r.e)(28),fontSizeBodyXL:Object(r.e)(22),fontSizeBodyL:Object(r.e)(20),fontSizeBodyM:Object(r.e)(18),fontSizeBodyS:Object(r.e)(16),fontSizeBodyXS:Object(r.e)(14),lineHeightTitle:"1.1",lineHeightBody:"1.5",maxWidthS:"540px",maxWidthM:"720px",maxWidthL:"1096px",maxWidthXL:"1680px",spaceOuter:"64px",spaceXS:"4px",spaceS:"8px",spaceM:"16px",spaceL:"24px",spaceXL:"32px",space2XL:"48px",space3XL:"64px",space4XL:"96px",space5XL:"128px"},desktop:{fontSizeH0:Object(r.e)(120),fontSizeH1:Object(r.e)(80)},laptop:{maxWidthS:"480px",maxWidthM:"640px",maxWidthL:"1000px",maxWidthXL:"1100px",spaceOuter:"48px",fontSizeH0:Object(r.e)(100),fontSizeH1:Object(r.e)(70),fontSizeH2:Object(r.e)(52),fontSizeH3:Object(r.e)(36),fontSizeH4:Object(r.e)(26)},tablet:{fontSizeH0:Object(r.e)(80),fontSizeH1:Object(r.e)(60),fontSizeH2:Object(r.e)(48),fontSizeH3:Object(r.e)(32),fontSizeH4:Object(r.e)(24)},mobile:{spaceOuter:"24px",fontSizeH0:Object(r.e)(56),fontSizeH1:Object(r.e)(40),fontSizeH2:Object(r.e)(34),fontSizeH3:Object(r.e)(28),fontSizeH4:Object(r.e)(22),fontSizeBodyL:Object(r.e)(18),fontSizeBodyM:Object(r.e)(16),fontSizeBodyS:Object(r.e)(14)},mobileS:{spaceOuter:"16px",fontSizeH0:Object(r.e)(42),fontSizeH1:Object(r.e)(38),fontSizeH2:Object(r.e)(28),fontSizeH3:Object(r.e)(24),fontSizeH4:Object(r.e)(20)}},o={dark:{themeId:"dark",rgbBackground:"17 17 17",rgbBackgroundLight:"26 26 26",rgbPrimary:"0 229 255",rgbAccent:"0 229 255",rgbText:"255 255 255",rgbError:"255 0 60",colorTextTitle:"rgb(var(--rgbText) / 1)",colorTextBody:"rgb(var(--rgbText) / 0.8)",colorTextLight:"rgb(var(--rgbText) / 0.6)"},light:{themeId:"light",rgbBackground:"242 242 242",rgbBackgroundLight:"255 255 255",rgbPrimary:"0 0 0",rgbAccent:"0 229 255",rgbText:"0 0 0",rgbError:"210 14 60",colorTextTitle:"rgb(var(--rgbText) / 1)",colorTextBody:"rgb(var(--rgbText) / 0.7)",colorTextLight:"rgb(var(--rgbText) / 0.6)"}}},,,,function(e,t,n){"use strict";var r=n(1),a=n(4),c=n.n(a),o=n(0);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=o.createElement("path",{d:"M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"});function s({title:e,titleId:t,...n},r){return o.createElement("svg",i({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,l)}const u=o.forwardRef(s);n.p;function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var b=o.createElement("path",{fillRule:"evenodd",d:"M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10A10 10 0 012 12zm14.86-6.09A7.726 7.726 0 0012 4.2c-.57 0-1.12.07-1.66.18.66.87 1.66 2.29 2.69 4.27 1.47-.65 2.81-1.51 3.83-2.74zM8.55 5c.55.65 1.63 2.06 2.79 4.25-2.34.71-4.73.87-6.16.87h-.13c-.24 0-.45 0-.62-.01C5 7.87 6.5 6 8.55 5zM4.2 11.89V12c0 1.91.7 3.66 1.84 5 .41-.61 1.12-1.54 2.15-2.5 1.08-.97 2.54-1.96 4.4-2.58-.15-.36-.3-.7-.45-1.03-2.78.87-5.52 1-7.08 1.01h-.01c-.34 0-.63 0-.85-.01zm12.22 6.53A57.5 57.5 0 0015 13.17c.5-.07 1-.11 1.58-.11h.02c.93 0 1.95.12 3.06.37a7.788 7.788 0 01-3.24 4.99zM12 19.8c-1.74 0-3.34-.57-4.64-1.54.28-.45.87-1.32 1.82-2.22.96-.93 2.32-1.89 4.05-2.46.59 1.67 1.13 3.57 1.54 5.71-.86.33-1.77.51-2.77.51zm6.13-12.62a7.823 7.823 0 011.66 4.45 15.32 15.32 0 00-3.19-.35h-.01c-.8 0-1.55.07-2.26.19l-.027-.067c-.16-.395-.313-.774-.493-1.143 1.58-.69 3.09-1.68 4.32-3.08z"});function h({title:e,titleId:t,...n},r){return o.createElement("svg",d({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,b)}const f=o.forwardRef(h);n.p;function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=o.createElement("path",{d:"M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"});function p({title:e,titleId:t,...n},r){return o.createElement("svg",j({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,m)}const v=o.forwardRef(p);n.p;function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=o.createElement("path",{d:"M12.875 3.516L12 1.932l-.875 1.584-9.393 17L.912 22h22.175l-.82-1.484-9.392-17zM19.697 20H4.303L12 6.068 19.697 20zM11 15v-4h2v4h-2zm0 3v-2h2v2h-2z"});function x({title:e,titleId:t,...n},r){return o.createElement("svg",O({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,g)}const y=o.forwardRef(x);n.p;function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var _=o.createElement("path",{d:"M22 6H2V4h20v2zM2 13h16v-2H2v2zm0 7h20v-2H2v2z"});function S({title:e,titleId:t,...n},r){return o.createElement("svg",w({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,_)}const z=o.forwardRef(S);n.p;function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var M=o.createElement("path",{d:"M14.207 4.793l6.5 6.5.707.707-.707.707-6.5 6.5-1.414-1.414L17.586 13H3v-2h14.586l-4.793-4.793 1.414-1.414z"});function E({title:e,titleId:t,...n},r){return o.createElement("svg",k({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,M)}const H=o.forwardRef(E);n.p;function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var L=o.createElement("path",{d:"M13.586 12L7.793 6.207l1.414-1.414 6.5 6.5.707.707-.707.707-6.5 6.5-1.414-1.414L13.586 12z"});function B({title:e,titleId:t,...n},r){return o.createElement("svg",N({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,L)}const C=o.forwardRef(B);n.p;function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var R=o.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"});function P({title:e,titleId:t,...n},r){return o.createElement("svg",I({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,R)}const $=o.forwardRef(P);n.p;function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var W=o.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z"});function F({title:e,titleId:t,...n},r){return o.createElement("svg",T({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,W)}const V=o.forwardRef(F);n.p;function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var A=o.createElement("path",{d:"M8 5v14l11-7z"});function U({title:e,titleId:t,...n},r){return o.createElement("svg",X({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,A)}const G=o.forwardRef(U);n.p;function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var D=o.createElement("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"});function q({title:e,titleId:t,...n},r){return o.createElement("svg",J({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,D)}const K=o.forwardRef(q);n.p;function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Z=o.createElement("path",{fillRule:"evenodd",d:"M15 10a2 2 0 100 4 2 2 0 000-4zm-2 5.464A4 4 0 0017.646 9 4 4 0 0015 2H9a4 4 0 00-2.646 7 4.01 4.01 0 00-.818 1 4 4 0 00.818 5 3.977 3.977 0 00-.818 1A4 4 0 1013 18v-2.536zM11 16H9a2 2 0 102 2v-2zM9 8h2V4H9a2 2 0 100 4zm0 2a2 2 0 100 4h2v-4H9zm4-2V4h2a2 2 0 010 4h-2z"});function Q({title:e,titleId:t,...n},r){return o.createElement("svg",Y({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,Z)}const ee=o.forwardRef(Q);n.p,n(44);const te={twitter:u,dribbble:f,github:v,error:y,menu:z,arrowRight:H,chevronRight:C,close:$,send:V,play:G,pause:K,figma:ee};t.a=({icon:e,style:t,className:n,...a})=>{const o=te[e];return Object(r.jsx)(o,{"aria-hidden":!0,className:c()("icon",n),...a})}},,function(e,t,n){"use strict";function r(e){e.currentTarget.blur()}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return T})),n.d(t,"b",(function(){return W}));var r=n(1),a=n(0),c=n(15),o=n(5),i=n(56),l=n(57),s=n(4),u=n.n(s),d=n(20),b=n(9);n(43);var h=function({highlight:e,className:t,...n}){const a=`monogram-clip-${Object(b.c)()}`;return Object(r.jsxs)("svg",{"aria-hidden":!0,className:u()("monogram",t),width:"46",height:"29",viewBox:"0 0 26 29",...n,children:[Object(r.jsx)("defs",{children:Object(r.jsx)("clipPath",{id:a,children:Object(r.jsx)("path",{d:"M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z"})})}),Object(r.jsx)("rect",{clipPath:`url(#${a})`,width:"100%",height:"100%"}),e&&Object(r.jsx)("g",{clipPath:`url(#${a})`,children:Object(r.jsx)("rect",{className:"monogram__highlight",width:"100%",height:"100%"})})]})},f=n(14),j=n(21);n(50);var m=({menuOpen:e,...t})=>{const n=u()("nav-toggle__icon",{"nav-toggle__icon--open":e});return Object(r.jsx)(j.a,{iconOnly:!0,className:"nav-toggle","aria-label":"Menu","aria-expanded":e,...t,children:Object(r.jsxs)("div",{className:"nav-toggle__inner",children:[Object(r.jsx)(f.a,{className:u()(n,"nav-toggle__icon--menu"),open:e,icon:"menu"}),Object(r.jsx)(f.a,{className:u()(n,"nav-toggle__icon--close"),open:e,icon:"close"})]})})};n(51);var p=({isMobile:e,...t})=>{const{dispatch:n,theme:a}=Object(b.a)(),c="dark"===a,o=`theme-toggle-mask-${Object(b.c)()}`;return Object(r.jsx)(j.a,{iconOnly:!0,className:u()("theme-toggle",{"theme-toggle--mobile":e}),"aria-label":"Toggle theme",onClick:()=>{n({type:"toggleTheme"})},...t,children:Object(r.jsxs)("svg",{"aria-hidden":!0,className:"theme-toggle__svg",width:"38",height:"38",viewBox:"0 0 38 38",children:[Object(r.jsx)("defs",{children:Object(r.jsxs)("mask",{id:o,children:[Object(r.jsx)("circle",{className:u()("theme-toggle__circle","theme-toggle__circle--mask",{"theme-toggle__circle--dark":c}),cx:"19",cy:"19",r:"13"}),Object(r.jsx)("circle",{className:u()("theme-toggle__mask",{"theme-toggle__mask--dark":c}),cx:"25",cy:"14",r:"9"})]})}),Object(r.jsx)("path",{className:u()("theme-toggle__path",{"theme-toggle__path--dark":c}),d:"M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"}),Object(r.jsx)("circle",{className:u()("theme-toggle__circle",{"theme-toggle__circle--dark":c}),mask:`url(#${o})`,cx:"19",cy:"19",r:"12"})]})})};const v=[{label:"Projects",pathname:"/",hash:"#project-1"},{label:"Details",pathname:"/",hash:"#details"},{label:"Contact",pathname:"/contact"}],O=[{label:"Github",url:"https://github.com/Xavier-WW",icon:"github"}];var g=n(22),x=n(2),y=n(10),w=n(16);n(52);const _=()=>Object(r.jsx)("div",{className:"navbar__nav-icons",children:O.map((({label:e,url:t,icon:n})=>Object(r.jsx)("a",{className:"navbar__nav-icon-link","aria-label":e,href:t,onMouseUp:w.a,target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(f.a,{className:"navbar__nav-icon",icon:n})},e)))});function S(e){const{menuOpen:t,dispatch:n}=Object(b.a)(),{location:o}=e,[i,s]=Object(a.useState)(),u=Object(b.l)(),d=Object(a.useRef)(),f=u.width<=x.a.mobile||u.height<=696,j=()=>{s(Math.random().toString(32).substr(2,8))},O=()=>{j(),t&&n({type:"toggleMenu"})};return Object(r.jsxs)("header",{className:"navbar",ref:d,children:[Object(r.jsx)(c.b,{className:"navbar__logo",to:{pathname:"/",hash:"#intro",state:i},"aria-label":"Hamish Williams, Designer",onClick:O,onMouseUp:w.a,children:Object(r.jsx)(h,{highlight:!0})}),Object(r.jsx)(m,{onClick:()=>n({type:"toggleMenu"}),menuOpen:t}),Object(r.jsxs)("nav",{className:"navbar__nav",children:[Object(r.jsx)("div",{className:"navbar__nav-list",children:v.map((({label:e,pathname:t,hash:n})=>Object(r.jsx)(c.c,{exact:!0,className:"navbar__nav-link",activeClassName:"navbar__nav-link--active",isActive:e=>(({match:e,hash:t=""})=>!!e&&`${e.url}${t}`===`${o.pathname}${o.hash}`)({match:e,hash:n}),onClick:j,to:{pathname:t,hash:n,state:i},onMouseUp:w.a,children:e},e)))}),Object(r.jsx)(_,{})]}),Object(r.jsx)(l.a,{mountOnEnter:!0,unmountOnExit:!0,in:t,timeout:{enter:0,exit:Object(x.b)(y.b.base.durationL)},onEnter:g.b,children:e=>Object(r.jsxs)("nav",{className:`navbar__mobile-nav navbar__mobile-nav--${e}`,children:[v.map((({label:t,pathname:n,hash:a},o)=>Object(r.jsx)(c.c,{className:`navbar__mobile-nav-link navbar__mobile-nav-link--${e}`,activeClassName:"navbar__mobile-nav-link--active",onClick:O,to:{pathname:n,hash:a,state:i},onMouseUp:w.a,style:{transitionDelay:Object(x.c)(Number(Object(x.b)(y.b.base.durationS))+50*o)},children:t},t))),Object(r.jsx)(_,{}),Object(r.jsx)(p,{isMobile:!0})]})}),!f&&Object(r.jsx)(p,{})]})}var z=Object(a.memo)(S),k=n(28),M=n(23),E=n(27);const H={menuOpen:!1,theme:"dark"};function N(e,t){const{type:n,value:r}=t;switch(n){case"setTheme":return{...e,theme:r};case"toggleTheme":{const t="dark"===e.theme?"light":"dark";return{...e,theme:t}}case"toggleMenu":return{...e,menuOpen:!e.menuOpen};default:throw new Error}}n(53),n(54);const L=Object(a.lazy)((()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(5)]).then(n.bind(null,109)))),B=Object(a.lazy)((()=>Promise.all([n.e(0),n.e(11)]).then(n.bind(null,113)))),C=Object(a.lazy)((()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(15),n.e(7)]).then(n.bind(null,107)))),I=Object(a.lazy)((()=>n.e(8).then(n.bind(null,110)))),R=Object(a.lazy)((()=>n.e(10).then(n.bind(null,108)))),P=Object(a.lazy)((()=>Promise.all([n.e(0),n.e(12)]).then(n.bind(null,114)))),$=Object(a.lazy)((()=>n.e(9).then(n.bind(null,111)))),T=Object(a.createContext)(),W=Object(a.createContext)(),F=()=>{const e=Object(o.f)(),{pathname:t}=e;return Object(r.jsxs)(a.Fragment,{children:[Object(r.jsx)(d.a,{children:Object(r.jsx)("link",{rel:"canonical",href:`https://X${t}`})}),Object(r.jsx)(M.a,{showOnFocus:!0,as:"a",className:"skip-to-main",href:"#MainContent",children:"Skip to main content"}),Object(r.jsx)(z,{location:e}),Object(r.jsx)(i.a,{component:"main",className:"app",tabIndex:-1,id:"MainContent",children:Object(r.jsx)(l.a,{timeout:Object(x.b)(y.b.base.durationS),onEnter:g.b,children:t=>Object(r.jsx)(W.Provider,{value:{status:t},children:Object(r.jsx)("div",{className:u()("app__page",`app__page--${t}`),children:Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)(a.Fragment,{}),children:Object(r.jsxs)(o.c,{location:e,children:[Object(r.jsx)(o.a,{exact:!0,path:"/",component:L}),Object(r.jsx)(o.a,{path:"/contact",component:B}),Object(r.jsx)(o.a,{path:"/projects/smart-sparrow",component:C}),Object(r.jsx)(o.a,{path:"/projects/slice",component:I}),Object(r.jsx)(o.a,{path:"/projects/volkihar-knight",component:R}),Object(r.jsx)(o.a,{path:"/uses",component:$}),Object(r.jsx)(o.a,{component:P})]})})})})},t)})]})};t.c=()=>{const[e]=Object(b.f)("theme","dark"),[t,n]=Object(a.useReducer)(N,H);return Object(a.useEffect)((()=>{E.a||console.info("\n__  __  __\n\\ \\ \\ \\ \\\u2215\n \\ \\\u2215\\ \\\n  \\\u2215  \\\u2215\n\n\n\n\n\n"),window.history.scrollRestoration="manual"}),[]),Object(a.useEffect)((()=>{n({type:"setTheme",value:e})}),[e]),Object(r.jsx)(T.Provider,{value:{...t,dispatch:n},children:Object(r.jsx)(k.b,{themeId:t.theme,children:Object(r.jsx)(c.a,{children:Object(r.jsx)(F,{})})})})}},,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(1),a=n(0),c=n(4),o=n.n(c),i=n(15),l=n(13),s=n(9),u=n(2),d=n(23);n(46);var b=({className:e,style:t,size:n=32,text:a="Loading...",...c})=>{const i=()=>Object(l.createPortal)(Object(r.jsx)(d.a,{className:"loader-announcement","aria-live":"assertive",children:a}),document.body);if(Object(s.h)())return Object(r.jsxs)("div",{className:"loader-text",...c,children:[a,i()]});const b=Math.round(n/3*.2),h=Math.round(n/3-2*b-1);return Object(r.jsxs)("div",{className:o()("loader",e),"aria-label":a,style:{"--size":Object(u.d)(n),"--spanSize":Object(u.d)(h),"--gapSize":Object(u.d)(b),...t},...c,children:[Object(r.jsxs)("div",{className:"loader__content",children:[Object(r.jsx)("div",{className:"loader__span"}),Object(r.jsx)("div",{className:"loader__span"}),Object(r.jsx)("div",{className:"loader__span"})]}),i()]})},h=n(14),f=n(16);n(47);const j=Object(a.forwardRef)((({className:e,as:t,secondary:n,loading:a,loadingText:c="loading",icon:l,iconEnd:s,iconHoverShift:u,iconOnly:d,children:j,rel:m,target:p,href:v,...O},g)=>{const x=null===v||void 0===v?void 0:v.includes("://"),y=x||"#"===(null===v||void 0===v?void 0:v[0])?"a":i.b,w=t||(v?y:"button");return Object(r.jsxs)(w,{className:o()("button",e,{"button--loading":a,"button--icon-only":d,"button--secondary":n}),href:v&&x?v:void 0,to:v&&!x?v:void 0,rel:m||x?"noopener noreferrer":void 0,target:p||x?"_blank":void 0,onMouseUp:f.a,ref:g,...O,children:[!!l&&Object(r.jsx)(h.a,{className:o()("button__icon",{"button__icon--start":!d,"button__icon--shift":u}),icon:l}),!!j&&Object(r.jsx)("span",{className:"button__text",children:j}),!!s&&Object(r.jsx)(h.a,{className:o()("button__icon",{"button__icon--end":!d,"button__icon--shift":u}),icon:s}),a&&Object(r.jsx)(b,{className:"button__loader",size:32,text:c})]})}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));const r=["entering","entered"],a=e=>r.includes(e),c=e=>e&&e.offsetHeight},function(e,t,n){"use strict";var r=n(1),a=n(4),c=n.n(a);n(45);t.a=({className:e,showOnFocus:t,as:n="span",children:a,visible:o,...i})=>Object(r.jsx)(n,{className:c()("visually-hidden",e,{"visually-hidden--hidden":!o&&!t,"visually-hidden--show-on-focus":t}),...i,children:a})},,,,function(e,t,n){"use strict";const r="ReactSnap"===navigator.userAgent;t.a=r},function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return f}));var r=n(1),a=n(0),c=n(20),o=n(4),i=n.n(o);var l=function(){return Object(a.useContext)(f)},s=n(10),u=n(2),d=n.p+"static/media/gotham-book.9c2a0ce4.woff2",b=n.p+"static/media/gotham-medium.0ad7d622.woff2";const h=`\n  @font-face {\n    font-family: "Gotham";\n    font-weight: 400;\n    src: url(${d}) format("woff");\n    font-display: swap;\n  }\n\n  @font-face {\n    font-family: "Gotham";\n    font-weight: 500;\n    src: url(${b}) format("woff2");\n    font-display: swap;\n  }\n`,f=Object(a.createContext)({});function j(e){return Object.keys(e).filter((e=>"themeId"!==e)).map((t=>`--${t}: ${e[t]};`)).join("\n")}function m(e){let t={};for(const n of Object.keys(e))"themeId"!==n&&(t[`--${n}`]=e[n]);return t}const p=`\n  :root {\n    ${j(s.b.base)}\n  }\n\n  ${Object.keys(u.a).map((e=>`\n        @media (max-width: ${u.a[e]}px) {\n          :root {\n            ${j(s.b[e])}\n          }\n        }\n      `)).join("\n")}\n\n  .dark {\n    ${j(s.a.dark)}\n  }\n\n  .light {\n    ${j(s.a.light)}\n  }\n`;t.b=({themeId:e="dark",theme:t,children:n,className:o,as:u="div"})=>{const j={...s.a[e],...t},v=!l().themeId;return Object(a.useEffect)((()=>{v&&(window.localStorage.setItem("theme",JSON.stringify(e)),document.body.classList.remove("light","dark"),document.body.classList.add(e))}),[e,v]),Object(r.jsxs)(f.Provider,{value:j,children:[v&&Object(r.jsxs)(a.Fragment,{children:[Object(r.jsxs)(c.a,{children:[Object(r.jsx)("link",{rel:"preload",href:b,as:"font",crossorigin:""}),Object(r.jsx)("link",{rel:"preload",href:d,as:"font",crossorigin:""}),Object(r.jsx)("style",{children:h}),Object(r.jsx)("style",{children:p})]}),n]}),!v&&Object(r.jsx)(u,{className:i()("theme-provider",o),style:m(j),children:n})]})}},,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(13),c=n(17);const o=document.getElementById("root");o.hasChildNodes()?Object(a.hydrate)(Object(r.jsx)(c.c,{}),o):Object(a.render)(Object(r.jsx)(c.c,{}),o)},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){}],[[35,4,6]]]);
//# sourceMappingURL=main.3aeafd5b.chunk.js.map