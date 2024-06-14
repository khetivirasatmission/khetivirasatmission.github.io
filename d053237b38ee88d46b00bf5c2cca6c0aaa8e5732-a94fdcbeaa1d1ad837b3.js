"use strict";(self.webpackChunkkvm=self.webpackChunkkvm||[]).push([[5447],{7882:function(e,t,n){n.d(t,{Ay:function(){return H},cr:function(){return N}});var o=n(96540),r=n.t(o,2),a=n(71196),s=n(61053),c=n(28104),i=n(20488),l=n(18877),d=(0,o.createContext)(void 0),u=n(62246);let p=Object.assign({},u.A.Modal),g=[];const m=()=>g.reduce(((e,t)=>Object.assign(Object.assign({},e),t)),u.A.Modal);var h=n(60685);var f=e=>{const{locale:t={},children:n,_ANT_MARK__:r}=e;o.useEffect((()=>{const e=function(e){if(e){const t=Object.assign({},e);return g.push(t),p=m(),()=>{g=g.filter((e=>e!==t)),p=m()}}p=Object.assign({},u.A.Modal)}(t&&t.Modal);return e}),[t]);const a=o.useMemo((()=>Object.assign(Object.assign({},t),{exist:!0})),[t]);return o.createElement(h.A.Provider,{value:a},n)},b=n(89864),v=n(50723),y=n(62279),C=n(46784),O=n(24978),j=n(20998),k=n(34552);const x=`-ant-${Date.now()}-${Math.random()}`;function P(e,t){const n=function(e,t){const n={},o=(e,t)=>{let n=e.clone();return n=(null==t?void 0:t(n))||n,n.toRgbString()},r=(e,t)=>{const r=new O.q(e),a=(0,C.cM)(r.toRgbString());n[`${t}-color`]=o(r),n[`${t}-color-disabled`]=a[1],n[`${t}-color-hover`]=a[4],n[`${t}-color-active`]=a[6],n[`${t}-color-outline`]=r.clone().setAlpha(.2).toRgbString(),n[`${t}-color-deprecated-bg`]=a[0],n[`${t}-color-deprecated-border`]=a[2]};if(t.primaryColor){r(t.primaryColor,"primary");const e=new O.q(t.primaryColor),a=(0,C.cM)(e.toRgbString());a.forEach(((e,t)=>{n[`primary-${t+1}`]=e})),n["primary-color-deprecated-l-35"]=o(e,(e=>e.lighten(35))),n["primary-color-deprecated-l-20"]=o(e,(e=>e.lighten(20))),n["primary-color-deprecated-t-20"]=o(e,(e=>e.tint(20))),n["primary-color-deprecated-t-50"]=o(e,(e=>e.tint(50))),n["primary-color-deprecated-f-12"]=o(e,(e=>e.setAlpha(.12*e.getAlpha())));const s=new O.q(a[0]);n["primary-color-active-deprecated-f-30"]=o(s,(e=>e.setAlpha(.3*e.getAlpha()))),n["primary-color-active-deprecated-d-02"]=o(s,(e=>e.darken(2)))}return t.successColor&&r(t.successColor,"success"),t.warningColor&&r(t.warningColor,"warning"),t.errorColor&&r(t.errorColor,"error"),t.infoColor&&r(t.infoColor,"info"),`\n  :root {\n    ${Object.keys(n).map((t=>`--${e}-${t}: ${n[t]};`)).join("\n")}\n  }\n  `.trim()}(e,t);(0,j.A)()&&(0,k.BD)(n,`${x}-dynamic-theme`)}var M=n(98119),w=n(48224);var A=function(){return{componentDisabled:(0,o.useContext)(M.A),componentSize:(0,o.useContext)(w.A)}},E=n(43210);const S=Object.assign({},r),{useId:$}=S;var D=void 0===$?()=>"":$;var V=n(57557),T=n(365);function L(e){const{children:t}=e,[,n]=(0,T.Ay)(),{motion:r}=n,a=o.useRef(!1);return a.current=a.current||!1===r,a.current?o.createElement(V.Kq,{motion:r},t):t}var R=()=>null,I=n(62366),_=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const z=["getTargetContainer","getPopupContainer","renderEmpty","input","pagination","form","select","button"];let W,B,F,K;function q(){return W||"ant"}function G(){return B||y.pM}const N=()=>({getPrefixCls:(e,t)=>t||(e?`${q()}-${e}`:q()),getIconPrefixCls:G,getRootPrefixCls:()=>W||q(),getTheme:()=>F,holderRender:K}),Q=e=>{const{children:t,csp:n,autoInsertSpaceInButton:r,alert:p,anchor:g,form:m,locale:h,componentSize:C,direction:O,space:j,virtual:k,dropdownMatchSelectWidth:x,popupMatchSelectWidth:P,popupOverflow:A,legacyLocale:S,parentContext:$,iconPrefixCls:V,theme:T,componentDisabled:W,segmented:B,statistic:F,spin:K,calendar:q,carousel:G,cascader:N,collapse:Q,typography:U,checkbox:H,descriptions:J,divider:X,drawer:Y,skeleton:Z,steps:ee,image:te,layout:ne,list:oe,mentions:re,modal:ae,progress:se,result:ce,slider:ie,breadcrumb:le,menu:de,pagination:ue,input:pe,textArea:ge,empty:me,badge:he,radio:fe,rate:be,switch:ve,transfer:ye,avatar:Ce,message:Oe,tag:je,table:ke,card:xe,tabs:Pe,timeline:Me,timePicker:we,upload:Ae,notification:Ee,tree:Se,colorPicker:$e,datePicker:De,rangePicker:Ve,flex:Te,wave:Le,dropdown:Re,warning:Ie,tour:_e,floatButtonGroup:ze}=e,We=o.useCallback(((t,n)=>{const{prefixCls:o}=e;if(n)return n;const r=o||$.getPrefixCls("");return t?`${r}-${t}`:r}),[$.getPrefixCls,e.prefixCls]),Be=V||$.iconPrefixCls||y.pM,Fe=n||$.csp;(0,I.A)(Be,Fe);const Ke=function(e,t,n){var o;(0,l.rJ)("ConfigProvider");const r=e||{},a=!1!==r.inherit&&t?t:Object.assign(Object.assign({},b.sb),{hashed:null!==(o=null==t?void 0:t.hashed)&&void 0!==o?o:b.sb.hashed,cssVar:null==t?void 0:t.cssVar}),s=D();return(0,c.A)((()=>{var o,c;if(!e)return t;const i=Object.assign({},a.components);Object.keys(e.components||{}).forEach((t=>{i[t]=Object.assign(Object.assign({},i[t]),e.components[t])}));const l=`css-var-${s.replace(/:/g,"")}`,d=(null!==(o=r.cssVar)&&void 0!==o?o:a.cssVar)&&Object.assign(Object.assign(Object.assign({prefix:null==n?void 0:n.prefixCls},"object"==typeof a.cssVar?a.cssVar:{}),"object"==typeof r.cssVar?r.cssVar:{}),{key:"object"==typeof r.cssVar&&(null===(c=r.cssVar)||void 0===c?void 0:c.key)||l});return Object.assign(Object.assign(Object.assign({},a),r),{token:Object.assign(Object.assign({},a.token),r.token),components:i,cssVar:d})}),[r,a],((e,t)=>e.some(((e,n)=>{const o=t[n];return!(0,E.A)(e,o,!0)}))))}(T,$.theme,{prefixCls:We("")});const qe={csp:Fe,autoInsertSpaceInButton:r,alert:p,anchor:g,locale:h||S,direction:O,space:j,virtual:k,popupMatchSelectWidth:null!=P?P:x,popupOverflow:A,getPrefixCls:We,iconPrefixCls:Be,theme:Ke,segmented:B,statistic:F,spin:K,calendar:q,carousel:G,cascader:N,collapse:Q,typography:U,checkbox:H,descriptions:J,divider:X,drawer:Y,skeleton:Z,steps:ee,image:te,input:pe,textArea:ge,layout:ne,list:oe,mentions:re,modal:ae,progress:se,result:ce,slider:ie,breadcrumb:le,menu:de,pagination:ue,empty:me,badge:he,radio:fe,rate:be,switch:ve,transfer:ye,avatar:Ce,message:Oe,tag:je,table:ke,card:xe,tabs:Pe,timeline:Me,timePicker:we,upload:Ae,notification:Ee,tree:Se,colorPicker:$e,datePicker:De,rangePicker:Ve,flex:Te,wave:Le,dropdown:Re,warning:Ie,tour:_e,floatButtonGroup:ze};const Ge=Object.assign({},$);Object.keys(qe).forEach((e=>{void 0!==qe[e]&&(Ge[e]=qe[e])})),z.forEach((t=>{const n=e[t];n&&(Ge[t]=n)})),void 0!==r&&(Ge.button=Object.assign({autoInsertSpace:r},Ge.button));const Ne=(0,c.A)((()=>Ge),Ge,((e,t)=>{const n=Object.keys(e),o=Object.keys(t);return n.length!==o.length||n.some((n=>e[n]!==t[n]))})),Qe=o.useMemo((()=>({prefixCls:Be,csp:Fe})),[Be,Fe]);let Ue=o.createElement(o.Fragment,null,o.createElement(R,{dropdownMatchSelectWidth:x}),t);const He=o.useMemo((()=>{var e,t,n,o;return(0,i.h)((null===(e=u.A.Form)||void 0===e?void 0:e.defaultValidateMessages)||{},(null===(n=null===(t=Ne.locale)||void 0===t?void 0:t.Form)||void 0===n?void 0:n.defaultValidateMessages)||{},(null===(o=Ne.form)||void 0===o?void 0:o.validateMessages)||{},(null==m?void 0:m.validateMessages)||{})}),[Ne,null==m?void 0:m.validateMessages]);Object.keys(He).length>0&&(Ue=o.createElement(d.Provider,{value:He},Ue)),h&&(Ue=o.createElement(f,{locale:h,_ANT_MARK__:"internalMark"},Ue)),(Be||Fe)&&(Ue=o.createElement(s.A.Provider,{value:Qe},Ue)),C&&(Ue=o.createElement(w.c,{size:C},Ue)),Ue=o.createElement(L,null,Ue);const Je=o.useMemo((()=>{const e=Ke||{},{algorithm:t,token:n,components:o,cssVar:r}=e,s=_(e,["algorithm","token","components","cssVar"]),c=t&&(!Array.isArray(t)||t.length>0)?(0,a.an)(t):b.zQ,i={};Object.entries(o||{}).forEach((e=>{let[t,n]=e;const o=Object.assign({},n);"algorithm"in o&&(!0===o.algorithm?o.theme=c:(Array.isArray(o.algorithm)||"function"==typeof o.algorithm)&&(o.theme=(0,a.an)(o.algorithm)),delete o.algorithm),i[t]=o}));const l=Object.assign(Object.assign({},v.A),n);return Object.assign(Object.assign({},s),{theme:c,token:l,components:i,override:Object.assign({override:l},i),cssVar:r})}),[Ke]);return T&&(Ue=o.createElement(b.vG.Provider,{value:Je},Ue)),Ne.warning&&(Ue=o.createElement(l._n.Provider,{value:Ne.warning},Ue)),void 0!==W&&(Ue=o.createElement(M.X,{disabled:W},Ue)),o.createElement(y.QO.Provider,{value:Ne},Ue)},U=e=>{const t=o.useContext(y.QO),n=o.useContext(h.A);return o.createElement(Q,Object.assign({parentContext:t,legacyLocale:n},e))};U.ConfigContext=y.QO,U.SizeContext=w.A,U.config=e=>{const{prefixCls:t,iconPrefixCls:n,theme:o,holderRender:r}=e;void 0!==t&&(W=t),void 0!==n&&(B=n),"holderRender"in e&&(K=r),o&&(!function(e){return Object.keys(e).some((e=>e.endsWith("Color")))}(o)?F=o:P(q(),o))},U.useConfig=A,Object.defineProperty(U,"SizeContext",{get:()=>w.A});var H=U},72065:function(e,t,n){n.d(t,{A:function(){return i}});var o=n(89379),r="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),a="aria-",s="data-";function c(e,t){return 0===e.indexOf(t)}function i(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t=!1===n?{aria:!0,data:!0,attr:!0}:!0===n?{aria:!0}:(0,o.A)({},n);var i={};return Object.keys(e).forEach((function(n){(t.aria&&("role"===n||c(n,a))||t.data&&c(n,s)||t.attr&&r.includes(n))&&(i[n]=e[n])})),i}}}]);
//# sourceMappingURL=d053237b38ee88d46b00bf5c2cca6c0aaa8e5732-a94fdcbeaa1d1ad837b3.js.map