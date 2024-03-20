(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[761],{43853:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/market/create",function(){return n(45541)}])},45541:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return G}});var s=n(34051),r=n.n(s),a=n(85893),i=n(65451),l=n(39279),c=n(91395),o=n(44718),u=n(54306),d=n(68155),m=n(13550),p=n.n(m),x=n(24762),b=n(11163),f=n(67294),h=n(87536),y=n(22920),g=n(74103),v=n(77768),j=n(34103);function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),s.forEach((function(t){w(e,t,n[t])}))}return e}function N(e){var t,n,s=e.useAdvancedOptions,r=e.register,i=e.setValue,l=e.formState.errors,c=e.totalMarketAccountSizes;return(0,a.jsxs)("div",{className:"space-y-3",children:[(0,a.jsx)("div",{children:(0,a.jsxs)(v.r.Group,{as:"div",className:"flex items-center justify-between",children:[(0,a.jsxs)("span",{className:"flex flex-grow flex-col space-y-0.5",children:[(0,a.jsx)(v.r.Label,{as:"span",className:"input-label",passive:!0,children:"Use Advanced Options"}),(0,a.jsx)(v.r.Description,{as:"span",className:"text-sm text-slate-500",children:"Set custom sizes for market accounts."})]}),(0,a.jsx)(v.r,{checked:s,onChange:function(e){return i("useAdvancedOptions",e)},className:(0,j.AK)(s?"bg-cyan-500":"bg-slate-400","relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-style"),children:(0,a.jsx)("span",{"aria-hidden":"true",className:(0,j.AK)(s?"translate-x-5":"translate-x-0","pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out")})})]})}),(0,a.jsxs)("div",{className:(0,j.AK)(s?"opacity-100":"opacity-30"),children:[(0,a.jsx)("label",{className:"block text-xs text-slate-400",children:"Event Queue Length"}),(0,a.jsxs)("div",{className:"mt-1",children:[(0,a.jsxs)("div",{className:"relative flex items-center",children:[(0,a.jsx)("input",k({type:"number",disabled:!s,className:"block w-full rounded-md p-2 bg-slate-700 border-gray-300 focus-style sm:text-sm"},r("eventQueueLength",{min:{value:1,message:"Must be at least 128"},max:11915,required:!0}))),(0,a.jsxs)("p",{className:"absolute right-0 mr-2 text-sm text-slate-400",children:[c.totalEventQueueSize," bytes"]})]}),(null===l||void 0===l?void 0:l.eventQueueLength)?(0,a.jsx)("p",{className:"text-xs text-red-400 mt-1",children:null===l||void 0===l||null===(t=l.eventQueueLength)||void 0===t?void 0:t.message}):null]})]}),(0,a.jsxs)("div",{className:(0,j.AK)(s?"opacity-100":"opacity-30"),children:[(0,a.jsx)("label",{className:"block text-xs text-slate-400",children:"Request Queue Length"}),(0,a.jsx)("div",{className:"mt-1",children:(0,a.jsxs)("div",{className:"relative flex items-center",children:[(0,a.jsx)("input",k({type:"number",disabled:!s,className:"block w-full rounded-md p-2 bg-slate-700 border-gray-300 focus-style sm:text-sm"},r("requestQueueLength",{min:1,max:100,required:!0}))),(0,a.jsxs)("p",{className:"absolute right-0 mr-2 text-sm text-slate-400",children:[c.totalRequestQueueSize," bytes"]})]})})]}),(0,a.jsxs)("div",{className:(0,j.AK)(s?"opacity-100":"opacity-30"),children:[(0,a.jsx)("label",{className:"block text-xs text-slate-400",children:"Orderbook Length"}),(0,a.jsxs)("div",{className:"mt-1",children:[(0,a.jsxs)("div",{className:"relative flex items-center",children:[(0,a.jsx)("input",k({type:"number",disabled:!s,className:"block w-full rounded-md p-2 bg-slate-700 border-gray-300 focus-style sm:text-sm"},r("orderbookLength",{min:{value:1,message:"Must be at least 201"},max:1e3,required:!0}))),(0,a.jsxs)("p",{className:"absolute right-0 mr-2 text-sm text-slate-400",children:[c.totalOrderbookSize," bytes"]})]}),(null===l||void 0===l?void 0:l.orderbookLength)?(0,a.jsx)("p",{className:"text-xs text-red-400 mt-1",children:null===l||void 0===l||null===(n=l.orderbookLength)||void 0===n?void 0:n.message}):null]})]})]})}function M(e){var t=e.active,n=e.checked,s=e.children;return(0,a.jsx)("div",{className:(0,j.AK)("p-2 flex-1 border border-slate-600 rounded-md flex items-center justify-center text-sm",t?"bg-slate-600 border-slate-500":"bg-slate-700 border-slate-600",n?"border-cyan-500 text-cyan-400":"text-slate-200"),children:s})}var S=n(78900);function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),s.forEach((function(t){A(e,t,n[t])}))}return e}function P(e){var t,n,s,r,i,l,c=e.register,o=e.formState.errors;return(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-xs text-slate-400",children:"Base Mint"}),(0,a.jsxs)("div",{className:"mt-1",children:[(0,a.jsx)("input",K({type:"text",className:"block w-full rounded-md p-2 bg-slate-700 focus-style sm:text-sm"},c("existingMints.baseMint",{required:!0,validate:S.d}))),(null===o||void 0===o||null===(t=o.existingMints)||void 0===t?void 0:t.baseMint)?(0,a.jsx)("p",{className:"text-xs text-red-400 mt-1",children:null===o||void 0===o||null===(n=o.existingMints)||void 0===n||null===(s=n.baseMint)||void 0===s?void 0:s.message}):null]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-xs text-slate-400",children:"Quote Mint"}),(0,a.jsxs)("div",{className:"mt-1",children:[(0,a.jsx)("input",K({type:"text",className:"block w-full rounded-md p-2 bg-slate-700 focus-style sm:text-sm"},c("existingMints.quoteMint",{required:!0,validate:S.d}))),(null===o||void 0===o||null===(r=o.existingMints)||void 0===r?void 0:r.quoteMint)?(0,a.jsx)("p",{className:"text-xs text-red-400 mt-1",children:null===o||void 0===o||null===(i=o.existingMints)||void 0===i||null===(l=i.quoteMint)||void 0===l?void 0:l.message}):null]})]})]})}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),s.forEach((function(t){O(e,t,n[t])}))}return e}function E(e){var t,n,s,r,i,l,c=e.register,o=e.formState.errors,d=e.setValue,m=(0,u.O)();return(0,a.jsxs)("div",{className:"divide-y divide-slate-700",children:[(0,a.jsxs)("div",{className:"pb-4 space-y-2",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-xs text-slate-400",children:"Base Decimals"}),(0,a.jsx)("div",{className:"mt-1",children:(0,a.jsx)("input",q({type:"number",className:"block w-full rounded-md p-2 bg-slate-700 border-gray-300 focus-style sm:text-sm"},c("newMints.baseDecimals",{min:0,required:!0})))})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-xs text-slate-400",children:"Base Authority"}),(0,a.jsxs)("div",{className:"mt-1",children:[(0,a.jsxs)("div",{className:"relative flex items-center",children:[(0,a.jsx)("input",q({type:"text",className:"block w-full rounded-md p-2 bg-slate-700 border-gray-300 focus-style sm:text-sm"},c("newMints.baseAuthority",{required:!0,validate:S.d}))),(0,a.jsx)("button",{type:"button",disabled:!m||!m.publicKey,onClick:function(){return d("newMints.baseAuthority",m.publicKey.toBase58())},className:"absolute right-0 mr-1.5 py-1 px-2 rounded bg-slate-600 hover:bg-slate-500 text-xs transition-colors disabled:opacity-20 focus-style",children:"Wallet"})]}),(null===o||void 0===o||null===(t=o.newMints)||void 0===t?void 0:t.baseAuthority)?(0,a.jsx)("p",{className:"text-xs text-red-400 mt-1",children:null===o||void 0===o||null===(n=o.newMints)||void 0===n||null===(s=n.baseAuthority)||void 0===s?void 0:s.message}):null]})]})]}),(0,a.jsxs)("div",{className:"pt-2 space-y-2",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-xs text-slate-400",children:"Quote Decimals"}),(0,a.jsx)("div",{className:"mt-1",children:(0,a.jsx)("input",q({type:"number",className:"block w-full rounded-md p-2 bg-slate-700 border-gray-300 focus-style sm:text-sm"},c("newMints.quoteDecimals",{min:0,required:!0})))})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-xs text-slate-400",children:"Quote Authority"}),(0,a.jsxs)("div",{className:"mt-1",children:[(0,a.jsxs)("div",{className:"relative flex items-center",children:[(0,a.jsx)("input",q({type:"text",className:"block w-full rounded-md p-2 bg-slate-700 border-gray-300 focus-style sm:text-sm"},c("newMints.quoteAuthority",{required:!0,validate:S.d}))),(0,a.jsx)("button",{type:"button",disabled:!m||!m.publicKey,onClick:function(){return d("newMints.quoteAuthority",m.publicKey.toBase58(),{shouldTouch:!1})},className:"absolute right-0 mr-1.5 py-1 px-2 rounded bg-slate-600 hover:bg-slate-500 text-xs transition-colors disabled:opacity-20 focus-style",children:"Wallet"})]}),(null===o||void 0===o||null===(r=o.newMints)||void 0===r?void 0:r.quoteAuthority)?(0,a.jsx)("p",{className:"text-xs text-red-400 mt-1",children:null===o||void 0===o||null===(i=o.newMints)||void 0===i||null===(l=i.quoteAuthority)||void 0===l?void 0:l.message}):null]})]})]})]})}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),s.forEach((function(t){Q(e,t,n[t])}))}return e}function L(e){var t=e.register;return(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block text-xs text-slate-400",children:"Min. Order Size"}),(0,a.jsxs)("div",{className:"relative mt-1 rounded-md shadow-sm",children:[(0,a.jsx)("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",children:(0,a.jsxs)("span",{className:"text-slate-400 sm:text-sm",children:["1e",(0,a.jsx)("sup",{children:"-x"})]})}),(0,a.jsx)("input",C({type:"number",className:"block w-full p-2 rounded-md text-slate-200 bg-slate-700 focus-style pl-16 sm:pl-14 sm:text-sm"},t("lotSize",{required:!0})))]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{"data-tooltip-target":"tooltip-default",className:"block text-xs text-slate-400",children:"Price Tick"}),(0,a.jsxs)("div",{id:"tooltip-default",role:"tooltip",className:"inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700",children:["Tooltip content",(0,a.jsx)("div",{className:"tooltip-arrow","data-popper-arrow":!0})]}),(0,a.jsxs)("div",{className:"relative mt-1 rounded-md shadow-sm",children:[(0,a.jsx)("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",children:(0,a.jsxs)("span",{className:"text-slate-400 sm:text-sm",children:["1e",(0,a.jsx)("sup",{children:"-x"})]})}),(0,a.jsx)("input",C({type:"number",className:"block w-full p-2 rounded-md text-slate-200 bg-slate-700 focus-style pl-16 sm:pl-14 sm:text-sm"},t("tickSize",{required:!0})))]})]})]})}var z=n(83454),I=n(7975),B=n(8957),T=n(65351),D=n(85972);function R(e,t,n,s,r,a,i){try{var l=e[a](i),c=l.value}catch(o){return void n(o)}l.done?t(c):Promise.resolve(c).then(s,r)}function V(e){return function(){var t=this,n=arguments;return new Promise((function(s,r){var a=e.apply(t,n);function i(e){R(a,s,r,i,l,"next",e)}function l(e){R(a,s,r,i,l,"throw",e)}i(void 0)}))}}function _(e){var t=(0,o.R)().connection,n=(0,f.useState)(0),s=n[0],a=n[1];return(0,f.useEffect)((function(){var n=!0;return function(){s.apply(this,arguments)}(),function(){n=!1};function s(){return(s=V(r().mark((function s(){var i;return r().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(e){s.next=3;break}return a(0),s.abrupt("return");case 3:return s.next=5,t.getMinimumBalanceForRentExemption(e);case 5:if(i=s.sent,n){s.next=8;break}return s.abrupt("return");case 8:a(i);case 9:case"end":return s.stop()}}),s)})))).apply(this,arguments)}}),[e,t.rpcEndpoint]),s}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function Z(e,t,n,s,r,a,i){try{var l=e[a](i),c=l.value}catch(o){return void n(o)}l.done?t(c):Promise.resolve(c).then(s,r)}function W(e){return function(){var t=this,n=arguments;return new Promise((function(s,r){var a=e.apply(t,n);function i(e){Z(a,s,r,i,l,"next",e)}function l(e){Z(a,s,r,i,l,"throw",e)}i(void 0)}))}}function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var s,r,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(a.push(s.value),!t||a.length!==t);i=!0);}catch(c){l=!0,r=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw r}}return a}}(e,t)||J(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e){return function(e){if(Array.isArray(e))return F(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||J(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e,t){if(e){if("string"===typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}var X=[{sendingMessage:"Creating mints.",successMessage:"Created mints successfully."},{sendingMessage:"Creating vaults.",successMessage:"Created vaults successfully."},{sendingMessage:"Creating market.",successMessage:"Created market successfully."}],$=function(){var e=(0,b.useRouter)(),t=(0,o.R)().connection,n=(0,u.O)(),s=(0,I.e)().programID,m=(0,h.cI)({defaultValues:{createMint:!0}}),v=m.register,j=m.handleSubmit,w=m.watch,k=m.setValue,S=m.formState,A=m.clearErrors,K=w("createMint"),O=w("useAdvancedOptions"),q=w("eventQueueLength"),Q=w("requestQueueLength"),C=w("orderbookLength"),z=_(K?c.Bl:0),R=_(c.lZ),V=function(e){var t=e.eventQueueLength,n=e.requestQueueLength,s=e.orderbookLength,r=(0,I.e)().programID,a=(0,f.useMemo)((function(){return(0,T.dT)(t,T.Bb,T.KQ)}),[t]),i=(0,f.useMemo)((function(){return(0,T.dT)(n,T.C1,T.zW)}),[n]),c=(0,f.useMemo)((function(){return(0,T.dT)(s,T.mf,T.yI)}),[s]);return{marketRent:_(l.Market.getLayout(r).span)+_(a)+_(i)+2*_(c),totalEventQueueSize:a,totalRequestQueueSize:i,totalOrderbookSize:c}}({eventQueueLength:q,requestQueueLength:Q,orderbookLength:C}),F=V.marketRent,Z=V.totalEventQueueSize,J=V.totalOrderbookSize,$=V.totalRequestQueueSize;(0,f.useEffect)((function(){O||(k("eventQueueLength",T.Sz),k("requestQueueLength",T.S7),k("orderbookLength",T.A3))}),[O,k]),(0,f.useEffect)((function(){K?(k("existingMints",void 0),A("existingMints")):(k("newMints",void 0),A("newMints"))}),[K,k,A]);var G=function(){var i=W(r().mark((function i(o){var u,m,x,b,f,h,v,j,w,k,N,M,S,A,P,O,q,E,Q,C,L,z,I,B,R,V,_,F,G,Y;return r().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(n&&n.publicKey){i.next=4;break}return y.Am.error("Wallet not connected"),i.abrupt("return");case 4:if(k=[],N=[],M=[],S=[],A=[],P=[],K){i.next=36;break}return i.prev=17,i.next=20,(0,c.ih)(t,new d.PublicKey(o.existingMints.baseMint));case 20:return O=i.sent,f=O.address,h=O.decimals,i.next=25,(0,c.ih)(t,new d.PublicKey(o.existingMints.quoteMint));case 25:q=i.sent,j=q.address,w=q.decimals,i.next=34;break;case 30:return i.prev=30,i.t0=i.catch(17),y.Am.error("Invalid mints provided."),i.abrupt("return");case 34:i.next=49;break;case 36:return i.next=39,(0,c.Mg)(t);case 39:C=i.sent,b=d.Keypair.generate(),f=b.publicKey,h=o.newMints.baseDecimals,v=d.Keypair.generate(),j=v.publicKey,w=o.newMints.quoteDecimals,(E=k).push.apply(E,[d.SystemProgram.createAccount({fromPubkey:n.publicKey,newAccountPubkey:b.publicKey,space:c.Bl,lamports:C,programId:c.H_}),d.SystemProgram.createAccount({fromPubkey:n.publicKey,newAccountPubkey:v.publicKey,space:c.Bl,lamports:C,programId:c.H_})]),(Q=k).push.apply(Q,[(0,c.I0)(f,o.newMints.baseDecimals,new d.PublicKey(o.newMints.baseAuthority),new d.PublicKey(o.newMints.baseAuthority)),(0,c.I0)(j,o.newMints.quoteDecimals,new d.PublicKey(o.newMints.quoteAuthority),new d.PublicKey(o.newMints.quoteAuthority))]),N.push(b,v);case 49:return L={market:d.Keypair.generate(),requestQueue:d.Keypair.generate(),eventQueue:d.Keypair.generate(),bids:d.Keypair.generate(),asks:d.Keypair.generate(),baseVault:d.Keypair.generate(),quoteVault:d.Keypair.generate()},i.t1=H,i.next=53,(0,T.aK)(L.market.publicKey,s);case 53:return i.t2=i.sent,z=(0,i.t1)(i.t2,2),I=z[0],B=z[1],i.t3=(u=M).push,i.t4=u,i.t5=d.SystemProgram,i.t6=n.publicKey,i.t7=L.baseVault.publicKey,i.next=64,t.getMinimumBalanceForRentExemption(c.lZ);case 64:return i.t8=i.sent,i.t9=c.lZ,i.t10=c.H_,i.t11={fromPubkey:i.t6,newAccountPubkey:i.t7,lamports:i.t8,space:i.t9,programId:i.t10},i.t12=i.t5.createAccount.call(i.t5,i.t11),i.t13=d.SystemProgram,i.t14=n.publicKey,i.t15=L.quoteVault.publicKey,i.next=74,t.getMinimumBalanceForRentExemption(c.lZ);case 74:return i.t16=i.sent,i.t17=c.lZ,i.t18=c.H_,i.t19={fromPubkey:i.t14,newAccountPubkey:i.t15,lamports:i.t16,space:i.t17,programId:i.t18},i.t20=i.t13.createAccount.call(i.t13,i.t19),i.t21=(0,c.FJ)(L.baseVault.publicKey,f,I),i.t22=(0,c.FJ)(L.quoteVault.publicKey,j,I),i.t23=[i.t12,i.t20,i.t21,i.t22],i.t3.apply.call(i.t3,i.t4,i.t23),S.push(L.baseVault,L.quoteVault),R=Math.round(Math.pow(10,h)*Math.pow(10,-1*o.lotSize)),V=Math.round(Math.pow(10,w)*Math.pow(10,-1*o.lotSize)*Math.pow(10,-1*o.tickSize)),i.t24=A,i.t25=d.SystemProgram,i.t26=L.market.publicKey,i.t27=n.publicKey,i.t28=l.Market.getLayout(s).span,i.next=93,t.getMinimumBalanceForRentExemption(l.Market.getLayout(s).span);case 93:return i.t29=i.sent,i.t30=s,i.t31={newAccountPubkey:i.t26,fromPubkey:i.t27,space:i.t28,lamports:i.t29,programId:i.t30},i.t32=i.t25.createAccount.call(i.t25,i.t31),i.t24.push.call(i.t24,i.t32),i.t33=A,i.t34=d.SystemProgram,i.t35=L.requestQueue.publicKey,i.t36=n.publicKey,i.t37=$,i.next=105,t.getMinimumBalanceForRentExemption($);case 105:return i.t38=i.sent,i.t39=s,i.t40={newAccountPubkey:i.t35,fromPubkey:i.t36,space:i.t37,lamports:i.t38,programId:i.t39},i.t41=i.t34.createAccount.call(i.t34,i.t40),i.t33.push.call(i.t33,i.t41),i.t42=A,i.t43=d.SystemProgram,i.t44=L.eventQueue.publicKey,i.t45=n.publicKey,i.t46=Z,i.next=117,t.getMinimumBalanceForRentExemption(Z);case 117:return i.t47=i.sent,i.t48=s,i.t49={newAccountPubkey:i.t44,fromPubkey:i.t45,space:i.t46,lamports:i.t47,programId:i.t48},i.t50=i.t43.createAccount.call(i.t43,i.t49),i.t42.push.call(i.t42,i.t50),i.next=124,t.getMinimumBalanceForRentExemption(J);case 124:return _=i.sent,A.push(d.SystemProgram.createAccount({newAccountPubkey:L.bids.publicKey,fromPubkey:n.publicKey,space:J,lamports:_,programId:s})),A.push(d.SystemProgram.createAccount({newAccountPubkey:L.asks.publicKey,fromPubkey:n.publicKey,space:J,lamports:_,programId:s})),P.push(L.market,L.requestQueue,L.eventQueue,L.bids,L.asks),A.push(l.DexInstructions.initializeMarket({market:L.market.publicKey,requestQueue:L.requestQueue.publicKey,eventQueue:L.eventQueue.publicKey,bids:L.bids.publicKey,asks:L.asks.publicKey,baseVault:L.baseVault.publicKey,quoteVault:L.quoteVault.publicKey,baseMint:f,quoteMint:j,baseLotSize:new(p())(R),quoteLotSize:new(p())(V),feeRateBps:150,quoteDustThreshold:new(p())(500),vaultSignerNonce:B,programId:s})),F=[],k.length>0&&F.push({transaction:(G=new d.Transaction).add.apply(G,U(k)),signers:N}),F.push({transaction:(m=new d.Transaction).add.apply(m,U(M)),signers:S},{transaction:(x=new d.Transaction).add.apply(x,U(A)),signers:P}),i.prev=132,i.next=135,(0,D.Dr)({transactionsAndSigners:F,wallet:n,connection:t});case 135:return Y=i.sent,i.next=138,(0,D.FI)({signedTransaction:Y[0],connection:t,skipPreflight:!1,successCallback:function(){var e=W(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,y.Am)((function(){return(0,a.jsx)(g.Z,{txSig:t,message:Y.length>2?X[0].successMessage:X[1].successMessage})}),{autoClose:5e3});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),sendingCallback:W(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y.Am.info(Y.length>2?X[0].sendingMessage:X[1].sendingMessage,{autoClose:2e3});case 1:case"end":return e.stop()}}),e)})))});case 138:return i.next=140,(0,D.FI)({signedTransaction:Y[1],connection:t,skipPreflight:!1,successCallback:function(){var e=W(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,y.Am)((function(){return(0,a.jsx)(g.Z,{txSig:t,message:Y.length>2?X[1].successMessage:X[2].successMessage})}),{autoClose:5e3});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),sendingCallback:W(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y.Am.info(Y.length>2?X[1].sendingMessage:X[2].sendingMessage,{autoClose:2e3});case 1:case"end":return e.stop()}}),e)})))});case 140:if(!(Y.length>2)){i.next=143;break}return i.next=143,(0,D.FI)({signedTransaction:Y[2],connection:t,skipPreflight:!1,successCallback:function(){var e=W(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,y.Am)((function(){return(0,a.jsx)(g.Z,{txSig:t,message:X[2].successMessage})}),{autoClose:5e3});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),sendingCallback:W(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y.Am.info(X[2].sendingMessage,{autoClose:2e3});case 1:case"end":return e.stop()}}),e)})))});case 143:e.push({pathname:"".concat(L.market.publicKey.toBase58()),query:e.query}),i.next=150;break;case 146:i.prev=146,i.t51=i.catch(132),console.error("[explorer]: ",i.t51),y.Am.error("Failed to create market.");case 150:case"end":return i.stop()}}),i,null,[[17,30],[132,146]])})));return function(e){return i.apply(this,arguments)}}();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"space-y-4 mb-6",children:[(0,a.jsx)("div",{children:(0,a.jsx)("h1",{className:"text-2xl text-slate-200",children:"Create Market"})}),(0,a.jsx)("form",{onSubmit:j(G),children:(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)("div",{className:"bg-slate-800 border border-slate-700 px-4 py-5 shadow rounded-lg sm:p-6",children:(0,a.jsxs)("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[(0,a.jsxs)("div",{className:"md:col-span-1",children:[(0,a.jsx)("h3",{className:"text-lg font-medium leading-6 text-slate-200",children:"Mints"}),(0,a.jsx)("p",{className:"mt-1 text-sm text-slate-400",children:"Configure the mints for the tokens you want to create a market for."})]}),(0,a.jsxs)("div",{className:"mt-5 space-y-4 md:col-span-2 md:mt-0",children:[(0,a.jsx)("div",{children:(0,a.jsxs)(i.E,{value:K,onChange:function(e){return k("createMint",e)},children:[(0,a.jsx)(i.E.Label,{className:"sr-only",children:"Create Mint"}),(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(i.E.Option,{value:!0,className:"flex-1 focus-style rounded-md",children:function(e){var t=e.active,n=e.checked;return(0,a.jsx)(M,{active:t,checked:n,children:(0,a.jsx)("p",{children:"New"})})}}),(0,a.jsx)(i.E.Option,{value:!1,className:"flex-1 focus-style rounded-md",children:function(e){var t=e.active,n=e.checked;return(0,a.jsx)(M,{active:t,checked:n,children:(0,a.jsx)("p",{children:"Existing"})})}})]})]})}),(0,a.jsx)("div",{children:K?(0,a.jsx)(E,{register:v,formState:S,setValue:k}):(0,a.jsx)(P,{register:v,formState:S})})]})]})}),(0,a.jsx)("div",{className:"bg-slate-800 border border-slate-700 px-4 py-5 shadow rounded-lg sm:p-6",children:(0,a.jsxs)("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[(0,a.jsxs)("div",{className:"md:col-span-1",children:[(0,a.jsx)("h3",{className:"text-lg font-medium leading-6 text-slate-200",children:"Tickers"}),(0,a.jsx)("p",{className:"mt-1 text-sm text-slate-400",children:"Configure the tick sizes, or lowest representable quantities of base and quote tokens."})]}),(0,a.jsx)("div",{className:"mt-5 space-y-4 md:col-span-2 md:mt-0",children:(0,a.jsx)(L,{register:v})})]})}),(0,a.jsx)("div",{className:"bg-slate-800 border border-slate-700 px-4 py-5 shadow rounded-lg sm:p-6",children:(0,a.jsxs)("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[(0,a.jsxs)("div",{className:"md:col-span-1",children:[(0,a.jsx)("h3",{className:"text-lg font-medium leading-6 text-slate-200",children:"Advanced Options"}),(0,a.jsx)("p",{className:"mt-1 text-sm text-slate-400",children:"Configure sizes for the different accounts used to create the market to adjust rent cost."}),(0,a.jsxs)("div",{className:"mt-6",children:[(0,a.jsx)("div",{className:"mb-1 flex items-center space-x-1",children:(0,a.jsxs)("p",{className:"text-xs text-slate-300",children:["Total Rent Estimate"," "]})}),(0,a.jsxs)("p",{className:"text-lg text-cyan-400",children:[(0,B.L4)(new(p())(F+2*R+2*z),9)," ","SOL"," "]})]})]}),(0,a.jsx)("div",{className:"mt-5 space-y-4 md:col-span-2 md:mt-0",children:(0,a.jsx)(N,{useAdvancedOptions:O,register:v,setValue:k,formState:S,totalMarketAccountSizes:{totalEventQueueSize:Z,totalRequestQueueSize:$,totalOrderbookSize:J}})})]})}),(0,a.jsx)("div",{className:"flex justify-end w-full",children:(0,a.jsx)("button",{className:"w-full md:max-w-xs rounded-lg p-2 bg-cyan-500 hover:bg-cyan-600 transition-colors disabled:opacity-20",children:"Create"})})]})})]}),(0,a.jsx)(x.Z,{place:"right"})]})};$.getLayout=function(e){return(0,z.y)(e,"Create Market")};var G=$},8957:function(e,t,n){"use strict";n.d(t,{DC:function(){return c},L4:function(){return d},wW:function(){return u}});var s=n(13550),r=n.n(s);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var s,r,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(a.push(s.value),!t||a.length!==t);i=!0);}catch(c){l=!0,r=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw r}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e){return"".concat(e).replace(/(-?)(\d*)\.?(\d+)e([+-]\d+)/,(function(e,t,n,s,r){return r<0?"".concat(t,"0.").concat(Array(1-r-n.length).join("0")).concat(n).concat(s):t+n+s+Array(r-s.length+1).join("0")}))}function c(e,t){return function(e,t){var n=i(e.split("."),2),s=n[0],a=n[1],l=void 0===a?"":a;return new(r())("".concat(s).concat("0".repeat(t))).add(new(r())(l.padEnd(t,"0")))}(l(e.toString()),t)}function o(e,t){return Math.floor(e*Math.pow(10,t))/Math.pow(10,t)}function u(e,t){return 0===e?0===t?"0":"0.".concat("0".repeat(t)):e<.01?"<0.01":e>=1e9?"".concat(o(e/1e9,t),"B"):e>=1e6?"".concat(o(e/1e6,t),"M"):"".concat(o(e,t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))}function d(e,t){var n=function(e,t){return Number(function(e,t){var n=e.toString().padStart(t+1,"0"),s=n.length-t;return"".concat(n.substring(0,s),".").concat(n.substring(s))}(e,t))}(e,t);return u(n,2)}}},function(e){e.O(0,[655,17,667,493,794,395,125,454,249,774,888,179],(function(){return t=43853,e(e.s=t);var t}));var t=e.O();_N_E=t}]);