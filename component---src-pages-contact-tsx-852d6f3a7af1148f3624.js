(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0Aie":function(e,t,n){"use strict";n.r(t);n("14J3");var o=n("BMrR"),a=(n("jCWc"),n("kPKH")),c=(n("E5k/"),n("pJf4"),n("cIOH"),n("rSSe"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("JHok"),n("q1tI")),r=n.n(c),i=(n("n7j8"),n("OeI1"),n("AqHK"),n("sc67"),n("1dPr"),n("jo6Y")),s=n.n(i),l=n("YEIV"),u=n.n(l),m=n("QbLZ"),p=n.n(m),d=n("iCc5"),f=n.n(d),h=n("V7oC"),v=n.n(h),y=n("FYw3"),g=n.n(y),C=n("mRg0"),b=n.n(C),E=n("17x9"),k=n.n(E),N=n("i8i4"),w=n.n(N),T=n("MFj2"),x=n("2GS6"),I=n("TSYQ"),j=n.n(I),O=function(e){function t(){var e,n,o,a;f()(this,t);for(var c=arguments.length,r=Array(c),i=0;i<c;i++)r[i]=arguments[i];return n=o=g()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),o.close=function(e){e&&e.stopPropagation(),o.clearCloseTimer(),o.props.onClose()},o.startCloseTimer=function(){o.props.duration&&(o.closeTimer=setTimeout((function(){o.close()}),1e3*o.props.duration))},o.clearCloseTimer=function(){o.closeTimer&&(clearTimeout(o.closeTimer),o.closeTimer=null)},a=n,g()(o,a)}return b()(t,e),v()(t,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentDidUpdate",value:function(e){(this.props.duration!==e.duration||this.props.update)&&this.restartCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"restartCloseTimer",value:function(){this.clearCloseTimer(),this.startCloseTimer()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls+"-notice",o=(e={},u()(e,""+n,1),u()(e,n+"-closable",t.closable),u()(e,t.className,!!t.className),e);return r.a.createElement("div",{className:j()(o),style:t.style,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer,onClick:t.onClick},r.a.createElement("div",{className:n+"-content"},t.children),t.closable?r.a.createElement("a",{tabIndex:"0",onClick:this.close,className:n+"-close"},t.closeIcon||r.a.createElement("span",{className:n+"-close-x"})):null)}}]),t}(c.Component);O.propTypes={duration:k.a.number,onClose:k.a.func,children:k.a.any,update:k.a.bool,closeIcon:k.a.node},O.defaultProps={onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}};var _=O,P=0,S=Date.now();var K=function(e){function t(){var e,n,o,a;f()(this,t);for(var c=arguments.length,r=Array(c),i=0;i<c;i++)r[i]=arguments[i];return n=o=g()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),o.state={notices:[]},o.add=function(e){var t=e.key=e.key||"rcNotification_"+S+"_"+P++,n=o.props.maxCount;o.setState((function(o){var a=o.notices,c=a.map((function(e){return e.key})).indexOf(t),r=a.concat();return-1!==c?r.splice(c,1,e):(n&&a.length>=n&&(e.updateKey=r[0].updateKey||r[0].key,r.shift()),r.push(e)),{notices:r}}))},o.remove=function(e){o.setState((function(t){return{notices:t.notices.filter((function(t){return t.key!==e}))}}))},a=n,g()(o,a)}return b()(t,e),v()(t,[{key:"getTransitionName",value:function(){var e=this.props,t=e.transitionName;return!t&&e.animation&&(t=e.prefixCls+"-"+e.animation),t}},{key:"render",value:function(){var e,t=this,n=this.props,o=this.state.notices,a=o.map((function(e,a){var c=Boolean(a===o.length-1&&e.updateKey),i=e.updateKey?e.updateKey:e.key,s=Object(x.a)(t.remove.bind(t,e.key),e.onClose);return r.a.createElement(_,p()({prefixCls:n.prefixCls},e,{key:i,update:c,onClose:s,onClick:e.onClick,closeIcon:n.closeIcon}),e.content)})),c=(e={},u()(e,n.prefixCls,1),u()(e,n.className,!!n.className),e);return r.a.createElement("div",{className:j()(c),style:n.style},r.a.createElement(T.a,{transitionName:this.getTransitionName()},a))}}]),t}(c.Component);K.propTypes={prefixCls:k.a.string,transitionName:k.a.string,animation:k.a.oneOfType([k.a.string,k.a.object]),style:k.a.object,maxCount:k.a.number,closeIcon:k.a.node},K.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}},K.newInstance=function(e,t){var n=e||{},o=n.getContainer,a=s()(n,["getContainer"]),c=document.createElement("div");o?o().appendChild(c):document.body.appendChild(c);var i=!1;w.a.render(r.a.createElement(K,p()({},a,{ref:function(e){i||(i=!0,t({notice:function(t){e.add(t)},removeNotice:function(t){e.remove(t)},component:e,destroy:function(){w.a.unmountComponentAtNode(c),c.parentNode.removeChild(c)}}))}})),c)};var R=K,A=n("CtXQ");function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var D,H,J={},U=4.5,V=24,B=24,F="topRight";function M(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:V,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:B;switch(e){case"topLeft":t={left:0,top:n,bottom:"auto"};break;case"topRight":t={right:0,top:n,bottom:"auto"};break;case"bottomLeft":t={left:0,top:"auto",bottom:o};break;default:t={right:0,top:"auto",bottom:o}}return t}var G={success:"check-circle-o",info:"info-circle-o",error:"close-circle-o",warning:"exclamation-circle-o"};var Y={open:function(e){var t=e.prefixCls||"ant-notification",n="".concat(t,"-notice"),o=void 0===e.duration?U:e.duration,a=null;if(e.icon)a=c.createElement("span",{className:"".concat(n,"-icon")},e.icon);else if(e.type){var r=G[e.type];a=c.createElement(A.a,{className:"".concat(n,"-icon ").concat(n,"-icon-").concat(e.type),type:r})}var i=!e.description&&a?c.createElement("span",{className:"".concat(n,"-message-single-line-auto-margin")}):null;!function(e,t){var n=e.prefixCls,o=e.placement,a=void 0===o?F:o,r=e.getContainer,i=void 0===r?D:r,s=e.top,l=e.bottom,u=e.closeIcon,m=void 0===u?H:u,p="".concat(n,"-").concat(a);if(J[p])t(J[p]);else{var d=c.createElement("span",{className:"".concat(n,"-close-x")},m||c.createElement(A.a,{className:"".concat(n,"-close-icon"),type:"close"}));R.newInstance({prefixCls:n,className:"".concat(n,"-").concat(a),style:M(a,s,l),getContainer:i,closeIcon:d},(function(e){J[p]=e,t(e)}))}}({prefixCls:t,placement:e.placement,top:e.top,bottom:e.bottom,getContainer:e.getContainer,closeIcon:e.closeIcon},(function(t){t.notice({content:c.createElement("div",{className:a?"".concat(n,"-with-icon"):""},a,c.createElement("div",{className:"".concat(n,"-message")},i,e.message),c.createElement("div",{className:"".concat(n,"-description")},e.description),e.btn?c.createElement("span",{className:"".concat(n,"-btn")},e.btn):null),duration:o,closable:!0,onClose:e.onClose,onClick:e.onClick,key:e.key,style:e.style||{},className:e.className})}))},close:function(e){Object.keys(J).forEach((function(t){return J[t].removeNotice(e)}))},config:function(e){var t=e.duration,n=e.placement,o=e.bottom,a=e.top,c=e.getContainer,r=e.closeIcon;void 0!==t&&(U=t),void 0!==n&&(F=n),void 0!==o&&(B=o),void 0!==a&&(V=a),void 0!==c&&(D=c),void 0!==r&&(H=r)},destroy:function(){Object.keys(J).forEach((function(e){J[e].destroy(),delete J[e]}))}};["success","info","warning","error"].forEach((function(e){Y[e]=function(t){return Y.open(L(L({},t),{type:e}))}})),Y.warn=Y.warning;var q=Y,Q=n("+ZDr"),z=n("0Vgw"),W=n("H8eV");n.d(t,"default",(function(){return Z}));var Z=function(e){var t,n;function c(t){var n;return(n=e.call(this,t)||this).openNotification=function(){q.open({message:"Success",description:"Thanks for submitting the form. We will get back to you soon.",duration:3})},n.handleChange=function(e){var t;n.setState(((t={})[e.target.name]=e.target.value,t))},n.handleSubmit=function(e){e.preventDefault();var t;e.target;fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(t=Object.assign({"form-name":"contact"},n.state),Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"))}).then((function(){n.openNotification(),setTimeout((function(){Object(Q.navigate)("/")}))})).catch((function(e){return alert(e)}))},n.state={},n}return n=e,(t=c).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,c.prototype.render=function(){return r.a.createElement(z.a,null,r.a.createElement(W.a,{title:"Contact Us"}),r.a.createElement("div",null,r.a.createElement("h1",null,"Contact"),r.a.createElement(o.a,{gutter:64},r.a.createElement(a.a,{md:24,lg:12},r.a.createElement("iframe",{style:{border:"0",width:"100%"},src:"https://docs.google.com/forms/d/e/1FAIpQLSecB-GKr9wnBLkxahPKKTJmbVbNDFLRzBc59oKwHj4mglR_Yg/viewform?embedded=true",width:"482",height:"900"},"Loading...")),r.a.createElement(a.a,{md:24,lg:12},r.a.createElement("h3",null,"Address"),r.a.createElement("p",null,"Kheti Virasat Mission, House Number-72, Street Number- 4, R V Shanti Nagar, PO Box # 1, JAITU - 151202 Faridkot, Punjab"," "),r.a.createElement("p",null,r.a.createElement("strong",null,"Phone:")," +91 1635 503415, +91 9872682161"),r.a.createElement("p",null,r.a.createElement("strong",null,"Email:")," info@khetivirasatmission.org"),r.a.createElement("div",{className:"mapouter"},r.a.createElement("div",{className:"gmap_canvas"},r.a.createElement("iframe",{style:{border:"0",width:"100%"},width:"400",height:"400",id:"gmap_canvas",src:"https://maps.google.com/maps?q=kheti%20virasat%20mission&t=&z=17&ie=UTF8&iwloc=&output=embed"})))))))},c}(r.a.Component)}}]);
//# sourceMappingURL=component---src-pages-contact-tsx-852d6f3a7af1148f3624.js.map