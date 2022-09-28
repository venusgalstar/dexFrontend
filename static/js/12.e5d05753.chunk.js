(this["webpackJsonpbridgeswap-frontend"]=this["webpackJsonpbridgeswap-frontend"]||[]).push([[12],{1159:function(e,t,n){"use strict";n.r(t);var r,c,i,o,a,u,s,b,j,f,l,d,O,p,m,v=n(48),x=n(0),h=n(3),g=n(25),w=n(86),k=n(248),y=n(831),C=n.n(y),M=n(55),S=n(75),N=n(46),F=n(169),T=n(78),I=n(1),q=n.n(I),Q=n(5),A=n(30),P=h.e.div(r||(r=Object(v.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n"]))),U=n(122),D=n.n(U),E=n(151),H=n(144),J=n(793),R=n(10),W=Object(h.e)(g.Qb)(c||(c=Object(v.a)(["\n  font-weight: 600;\n"]))),_=h.e.div(i||(i=Object(v.a)(["\n  margin-bottom: 16px;\n"]))),B=h.e.div(o||(o=Object(v.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),L=h.e.label(a||(a=Object(v.a)(["\n  color: ",";\n  display: block;\n  margin-bottom: 8px;\n  margin-top: 24px;\n"])),(function(e){return e.theme.colors.text})),Y=function(e){var t=e.nft,n=e.tokenIds,r=e.onSuccess,c=e.onDismiss,i=Object(x.useState)(!1),o=Object(A.a)(i,2),a=o[0],u=o[1],s=Object(x.useState)(""),b=Object(A.a)(s,2),j=b[0],f=b[1],l=Object(x.useState)(null),d=Object(A.a)(l,2),O=d[0],p=d[1],m=Object(w.b)().t,v=Object(M.c)().account,h=Object(J.i)(Object(E.a)(t.type)),k=Object(H.a)().toastSuccess,y=function(){var e=Object(Q.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,D.a.utils.isAddress(j)){e.next=6;break}p(m("Please enter a valid wallet address")),e.next=8;break;case 6:return e.next=8,h.methods.transferFrom(v,j,n[0]).send({from:v}).on("sending",(function(){u(!0)})).on("receipt",(function(){c(),r(),k(m("NFT successfully transferred!"))})).on("error",(function(){console.error(O),p(m("Unable to transfer NFT")),u(!1)}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Unable to transfer NFT:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(R.jsxs)(g.pb,{title:m("Transfer NFT"),onDismiss:c,children:[Object(R.jsxs)(_,{children:[O&&Object(R.jsx)(g.Qb,{color:"failure",mb:"8px",children:O}),Object(R.jsxs)(P,{children:[Object(R.jsxs)(g.Qb,{children:[m("Transferring"),":"]}),Object(R.jsx)(W,{children:m("1x %nftName% NFT",{nftName:t.name})})]}),Object(R.jsxs)(L,{htmlFor:"transferAddress",children:[m("Receiving address"),":"]}),Object(R.jsx)(g.ab,{id:"transferAddress",name:"address",type:"text",placeholder:m("Paste address"),value:j,onChange:function(e){var t=e.target.value;f(t)},isWarning:O,disabled:a})]}),Object(R.jsxs)(B,{children:[Object(R.jsx)(g.q,{width:"100%",variant:"secondary",onClick:c,children:m("Cancel")}),Object(R.jsx)(g.q,{width:"100%",onClick:y,disabled:!v||a||!j,children:m("Confirm")})]})]})},z=h.e.div(u||(u=Object(v.a)(["\n  margin-bottom: 16px;\n"]))),G=h.e.div(s||(s=Object(v.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),K=function(e){var t=e.nft,n=e.onSuccess,r=e.onClaim,c=e.onDismiss,i=Object(x.useState)(!1),o=Object(A.a)(i,2),a=o[0],u=o[1],s=Object(w.b)().t,b=Object(M.c)().account,j=Object(H.a)(),f=j.toastError,l=j.toastSuccess,d=function(){var e=Object(Q.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r().once("sending",(function(){u(!0)})).once("receipt",(function(){l(s("Successfully claimed!")),c(),n()})).once("error",(function(e){console.error("Unable to claim NFT",e),f(s("Error"),s("Unable to claim NFT, please try again.")),u(!1)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(R.jsxs)(g.pb,{title:s("Claim Collectible"),onDismiss:c,children:[Object(R.jsx)(z,{children:Object(R.jsxs)(g.S,{alignItems:"center",mb:"8px",justifyContent:"space-between",children:[Object(R.jsxs)(g.Qb,{children:[s("You will receive"),":"]}),Object(R.jsx)(g.Qb,{bold:!0,children:s("1x %nftName% Collectible",{nftName:t.name})})]})}),Object(R.jsxs)(G,{children:[Object(R.jsx)(g.q,{width:"100%",variant:"secondary",onClick:c,children:s("Cancel")}),Object(R.jsx)(g.q,{width:"100%",onClick:d,disabled:!b,isLoading:a,endIcon:a?Object(R.jsx)(g.g,{color:"currentColor",spin:!0}):null,children:s("Confirm")})]})]})},V=h.e.div(b||(b=Object(v.a)(["\n  background-color: ",";\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  padding-bottom: 100%;\n"])),(function(e){return e.theme.colors.cardBorder})),X=h.e.img(j||(j=Object(v.a)(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  transition: opacity 1s linear;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 32px 32px 0 0;\n"]))),Z=h.e.video(f||(f=Object(v.a)(["\n  height: 100%;\n  width: 100%;\n"]))),$=function(e){var t=e.nft,n=e.isOwned,r=void 0!==n&&n,c=t.images,i=t.name,o=t.video,a="/images/nfts/".concat(c.lg);if(o){var u=Object(R.jsxs)(Z,{autoPlay:!0,controls:!1,loop:!0,muted:!0,poster:a,children:[Object(R.jsx)("source",{src:o.webm,type:"video/webm"}),Object(R.jsx)("source",{src:o.mp4,type:"video/mp4"})]});return r?Object(R.jsx)("a",{href:c.ipfs,target:"_blank",rel:"noreferrer noopener",children:u}):u}var s=Object(R.jsx)(X,{src:a,alt:i});return Object(R.jsx)(V,{children:r?Object(R.jsx)("a",{href:c.ipfs,target:"_blank",rel:"noreferrer noopener",children:s}):s})},ee=Object(h.e)(P)(l||(l=Object(v.a)(["\n  min-height: 28px;\n"]))),te=Object(h.e)(g.q).attrs({variant:"text"})(d||(d=Object(v.a)(["\n  height: auto;\n  padding: 16px 24px;\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n\n  &:focus:not(:active) {\n    box-shadow: none;\n  }\n"]))),ne=h.e.div(O||(O=Object(v.a)(["\n  padding: 24px;\n"]))),re=function(e){var t,n=e.nft,r=e.canClaim,c=void 0!==r&&r,i=e.tokenIds,o=void 0===i?[]:i,a=e.onClaim,u=e.refresh,s=Object(x.useState)(!1),b=Object(A.a)(s,2),j=b[0],f=b[1],l=Object(w.b)().t,d=Object(T.H)().profile,O=n.identifier,p=n.name,m=n.description,v=o.length>0,h=j?g.I:g.F,k=function(){var e=Object(Q.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(!j);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){u()},C=Object(g.ic)(Object(R.jsx)(Y,{nft:n,tokenIds:o,onSuccess:y})),M=Object(A.a)(C,1)[0],S=Object(g.ic)(Object(R.jsx)(K,{nft:n,onSuccess:y,onClaim:a})),N=Object(A.a)(S,1)[0];return Object(R.jsxs)(g.u,{isActive:v,children:[Object(R.jsx)($,{nft:n,isOwned:v}),Object(R.jsxs)(g.v,{children:[Object(R.jsxs)(ee,{children:[Object(R.jsx)(g.U,{children:p}),v&&Object(R.jsx)(g.Ob,{outline:!0,variant:"secondary",children:l("In Wallet")}),(null===d||void 0===d||null===(t=d.nft)||void 0===t?void 0:t.identifier)===O&&Object(R.jsx)(g.Ob,{outline:!0,variant:"success",children:l("Profile Pic")})]}),c&&Object(R.jsx)(g.q,{width:"100%",mt:"24px",onClick:N,children:l("Claim this NFT")}),v&&Object(R.jsx)(g.q,{width:"100%",variant:"secondary",mt:"24px",onClick:M,children:l("Transfer")})]}),Object(R.jsxs)(g.w,{p:"0",children:[Object(R.jsx)(te,{width:"100%",endIcon:Object(R.jsx)(h,{width:"24px",color:"primary"}),onClick:k,children:l("Details")}),j&&Object(R.jsx)(ne,{children:Object(R.jsx)(g.Qb,{as:"p",color:"textSubtle",style:{textAlign:"center"},children:l(m)})})]})]})},ce=h.e.div(p||(p=Object(v.a)(["\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  padding-bottom: 24px;\n  padding-top: 24px;\n\n  "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  "," {\n    grid-template-columns: repeat(3, 1fr);\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.md})),ie=n(4),oe=n(145),ae=function(e){var t=e.nft,n=Object(oe.a)(e,["nft"]),r=Object(x.useState)(!1),c=Object(A.a)(r,2),i=c[0],o=c[1],a=Object(M.c)().account,u=Object(J.c)(),s=t.variationId;return Object(x.useEffect)((function(){a&&function(){var e=Object(Q.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.methods.canClaimSingle(a,s).call();case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,s,u,o]),Object(R.jsx)(re,Object(ie.a)(Object(ie.a)({nft:t},n),{},{canClaim:i,onClaim:function(){return u.methods.mintNFT(s).send({from:a})}}))},ue={"easter-storm":1,"easter-flipper":2,"easter-caker":3},se=function(e){var t=e.nft,n=Object(oe.a)(e,["nft"]),r=Object(x.useState)(!1),c=Object(A.a)(r,2),i=c[0],o=c[1],a=Object(M.c)().account,u=Object(T.H)().profile,s=t.identifier,b=(null!==u&&void 0!==u?u:{}).team,j=Object(J.j)();return Object(x.useEffect)((function(){a&&b&&function(){var e=Object(Q.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.methods.canClaim(a).call();case 2:t=e.sent,o(!!t&&b.id===ue[s]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,s,b,j,o]),Object(R.jsx)(re,Object(ie.a)(Object(ie.a)({nft:t},n),{},{canClaim:i,onClaim:function(){return j.methods.mintNFT().send({from:a})}}))},be={hiccup:ae,bullish:ae,"easter-storm":se,"easter-flipper":se,"easter-caker":se},je=function(){var e=Object(T.l)().tokenIds,t=Object(N.b)(),n=Object(M.c)().account,r=function(){t(Object(F.b)(n))};return Object(R.jsx)(ce,{children:C()(S.b,"sortOrder").map((function(t){var n,c=null!==(n=be[t.identifier])&&void 0!==n?n:re;return Object(R.jsx)("div",{children:Object(R.jsx)(c,{nft:t,tokenIds:e[t.identifier],refresh:r})},t.name)}))})},fe=h.e.div(m||(m=Object(v.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 32px;\n"])),(function(e){return e.theme.colors.textSubtle}));t.default=function(){var e=Object(w.b)().t;return Object(R.jsxs)(k.a,{children:[Object(R.jsx)(fe,{children:Object(R.jsx)(g.U,{as:"h1",scale:"xxl",color:"secondary",children:e("Pancake Collectibles")})}),Object(R.jsx)(je,{})]})}},793:function(e,t,n){"use strict";n.d(t,"k",(function(){return o})),n.d(t,"l",(function(){return a})),n.d(t,"h",(function(){return u})),n.d(t,"i",(function(){return s})),n.d(t,"d",(function(){return b})),n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return f})),n.d(t,"s",(function(){return l})),n.d(t,"m",(function(){return d})),n.d(t,"p",(function(){return O})),n.d(t,"n",(function(){return p})),n.d(t,"t",(function(){return m})),n.d(t,"o",(function(){return v})),n.d(t,"u",(function(){return x})),n.d(t,"q",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"g",(function(){return w})),n.d(t,"v",(function(){return k})),n.d(t,"j",(function(){return y})),n.d(t,"e",(function(){return C})),n.d(t,"r",(function(){return M})),n.d(t,"f",(function(){return S}));var r=n(0),c=n(794),i=n(39),o=function(e){var t=Object(c.a)();return Object(r.useMemo)((function(){return Object(i.j)(e,t)}),[e,t])},a=function(e){var t=Object(c.a)();return Object(r.useMemo)((function(){return Object(i.k)(e,t)}),[e,t])},u=function(e){var t=Object(c.a)();return Object(r.useMemo)((function(){return Object(i.a)(e,t)}),[e,t])},s=function(e){var t=Object(c.a)();return Object(r.useMemo)((function(){return Object(i.i)(e,t)}),[e,t])},b=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(i.d)(e)}),[e])},j=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(i.d)(e)}),[e])},f=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(i.b)(e)}),[e])},l=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(i.u)(e)}),[e])},d=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(i.l)(e)}),[e])},O=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(i.q)(e)}),[e])},p=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(i.m)(e)}),[e])},m=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(i.v)(e)}),[e])},v=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(i.p)(e)}),[e])},x=function(e){var t=Object(c.a)();return Object(r.useMemo)((function(){return Object(i.w)(e,t)}),[e,t])},h=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(i.s)(e)}),[e])},g=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(i.c)(e)}),[e])},w=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(i.g)(e)}),[e])},k=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(i.y)(e)}),[e])},y=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(i.h)(e)}),[e])},C=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(i.e)(e)}),[e])},M=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(i.t)(e)}),[e])},S=function(){var e=Object(c.a)();return Object(r.useMemo)((function(){return Object(i.f)(e)}),[e])}},794:function(e,t,n){"use strict";var r=n(30),c=n(0),i=n(122),o=n.n(i),a=n(55),u=n(51);t.a=function(){var e=Object(a.c)().library,t=Object(c.useRef)(e),n=Object(c.useState)(e?new o.a(e):Object(u.b)()),i=Object(r.a)(n,2),s=i[0],b=i[1];return Object(c.useEffect)((function(){e!==t.current&&(b(e?new o.a(e):Object(u.b)()),t.current=e)}),[e]),s}},810:function(e,t,n){var r=n(815),c=n(816)(r);e.exports=c},815:function(e,t,n){var r=n(407),c=n(252);e.exports=function(e,t){return e&&r(e,t,c)}},816:function(e,t,n){var r=n(147);e.exports=function(e,t){return function(n,c){if(null==n)return n;if(!r(n))return e(n,c);for(var i=n.length,o=t?i:-1,a=Object(n);(t?o--:++o<i)&&!1!==c(a[o],o,a););return n}}},831:function(e,t,n){var r=n(832),c=n(79);e.exports=function(e,t,n,i){return null==e?[]:(c(t)||(t=null==t?[]:[t]),c(n=i?void 0:n)||(n=null==n?[]:[n]),r(e,t,n))}},832:function(e,t,n){var r=n(405),c=n(254),i=n(404),o=n(833),a=n(834),u=n(409),s=n(835),b=n(186),j=n(79);e.exports=function(e,t,n){t=t.length?r(t,(function(e){return j(e)?function(t){return c(t,1===e.length?e[0]:e)}:e})):[b];var f=-1;t=r(t,u(i));var l=o(e,(function(e,n,c){return{criteria:r(t,(function(t){return t(e)})),index:++f,value:e}}));return a(l,(function(e,t){return s(e,t,n)}))}},833:function(e,t,n){var r=n(810),c=n(147);e.exports=function(e,t){var n=-1,i=c(e)?Array(e.length):[];return r(e,(function(e,r,c){i[++n]=t(e,r,c)})),i}},834:function(e,t){e.exports=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}},835:function(e,t,n){var r=n(836);e.exports=function(e,t,n){for(var c=-1,i=e.criteria,o=t.criteria,a=i.length,u=n.length;++c<a;){var s=r(i[c],o[c]);if(s)return c>=u?s:s*("desc"==n[c]?-1:1)}return e.index-t.index}},836:function(e,t,n){var r=n(123);e.exports=function(e,t){if(e!==t){var n=void 0!==e,c=null===e,i=e===e,o=r(e),a=void 0!==t,u=null===t,s=t===t,b=r(t);if(!u&&!b&&!o&&e>t||o&&a&&s&&!u&&!b||c&&a&&s||!n&&s||!i)return 1;if(!c&&!o&&!b&&e<t||b&&n&&i&&!c&&!o||u&&n&&i||!a&&i||!s)return-1}return 0}}}]);
//# sourceMappingURL=12.e5d05753.chunk.js.map