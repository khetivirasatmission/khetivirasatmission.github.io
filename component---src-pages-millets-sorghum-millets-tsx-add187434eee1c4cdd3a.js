"use strict";(self.webpackChunkkvm=self.webpackChunkkvm||[]).push([[4448],{93723:function(e,t,n){n.d(t,{L:function(){return m},M:function(){return A},P:function(){return v},S:function(){return P},_:function(){return o},a:function(){return s},b:function(){return c},g:function(){return d},h:function(){return l}});var a=n(67294),r=(n(92369),n(45697)),i=n.n(r);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(n=i[a])>=0||(r[n]=e[n]);return r}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,n,a,r){return void 0===r&&(r={}),s({},n,{loading:a,shouldLoad:e,"data-main-image":"",style:s({},r,{opacity:t?1:0})})}function d(e,t,n,a,r,i,o,l){const c={};i&&(c.backgroundColor=i,"fixed"===n?(c.width=a,c.height=r,c.backgroundColor=i,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],p=function(e){let{layout:t,width:n,height:r}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/n*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:n,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,n=o(e,u);return a.createElement(a.Fragment,null,a.createElement(p,s({},n)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:n,loading:r,alt:i="",shouldLoad:l}=e,c=o(e,g);return a.createElement("img",s({},c,{decoding:"async",loading:r,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?n:void 0,"data-srcset":l?void 0:n,alt:i}))},y=function(e){let{fallback:t,sources:n=[],shouldLoad:r=!0}=e,i=o(e,h);const l=i.sizes||(null==t?void 0:t.sizes),c=a.createElement(f,s({},i,t,{sizes:l,shouldLoad:r}));return n.length?a.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:i}=e;return a.createElement("source",{key:t+"-"+i+"-"+n,type:i,media:t,srcSet:r?n:void 0,"data-srcset":r?void 0:n,sizes:l})})),c):c};var w;f.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},y.displayName="Picture",y.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const b=["fallback"],v=function(e){let{fallback:t}=e,n=o(e,b);return t?a.createElement(y,s({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",s({},n))};v.displayName="Placeholder",v.propTypes={fallback:r.string,sources:null==(w=y.propTypes)?void 0:w.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};const A=function(e){return a.createElement(a.Fragment,null,a.createElement(y,s({},e)),a.createElement("noscript",null,a.createElement(y,s({},e,{shouldLoad:!0}))))};A.displayName="MainImage",A.propTypes=y.propTypes;const L=function(e,t,n){for(var a=arguments.length,r=new Array(a>3?a-3:0),s=3;s<a;s++)r[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,n].concat(r)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:i().object.isRequired,alt:L},E=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],C=["style","className"],Z=new Set;let k,q;const S=function(e){let{as:t="div",image:r,style:i,backgroundColor:c,className:d,class:u,onStartLoad:p,onLoad:m,onError:g}=e,h=o(e,E);const{width:f,height:y,layout:w}=r,b=function(e,t,n){const a={};let r="gatsby-image-wrapper";return"fixed"===n?(a.width=e,a.height=t):"constrained"===n&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:a}}(f,y,w),{style:v,className:A}=b,L=o(b,C),x=(0,a.useRef)(),S=(0,a.useMemo)((()=>JSON.stringify(r.images)),[r.images]);u&&(d=u);const T=function(e,t,n){let a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(w,f,y);return(0,a.useEffect)((()=>{k||(k=Promise.all([n.e(9774),n.e(8223)]).then(n.bind(n,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return q=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=x.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void Z.add(S);if(q&&Z.has(S))return;let t,a;return k.then((e=>{let{renderImageToString:n,swapPlaceholderImage:o}=e;x.current&&(x.current.innerHTML=n(s({isLoading:!0,isLoaded:Z.has(S),image:r},h)),Z.has(S)||(t=requestAnimationFrame((()=>{x.current&&(a=o(x.current,S,Z,i,p,m,g))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[r]),(0,a.useLayoutEffect)((()=>{Z.has(S)&&q&&(x.current.innerHTML=q(s({isLoading:Z.has(S),isLoaded:Z.has(S),image:r},h)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[r]),(0,a.createElement)(t,s({},L,{style:s({},v,i,{backgroundColor:c}),className:A+(d?" "+d:""),ref:x,dangerouslySetInnerHTML:{__html:T},suppressHydrationWarning:!0}))},T=(0,a.memo)((function(e){return e.image?(0,a.createElement)(S,e):null}));T.propTypes=x,T.displayName="GatsbyImage";const W=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],G=function(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},R=new Set(["fixed","fullWidth","constrained"]),N={src:i().string.isRequired,alt:L,width:G,height:G,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!R.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},P=(z=T,function(e){let{src:t,__imageData:n,__error:r}=e,i=o(e,W);return r&&console.warn(r),n?a.createElement(z,s({image:n},i)):(console.warn("Image not loaded",t),null)});var z;P.displayName="StaticImage",P.propTypes=N},92369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,n=!1,a=!1;for(let r=0;r<e.length;r++){const i=e[r];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,a=n,n=!0,r++):n&&a&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,r-1)+"-"+e.slice(r-1),a=n,n=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,a=n,n=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n;var n};e.exports=t,e.exports.default=t},66070:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r=n(20574);var i=n(61431);var s=function(e){let{description:t,title:n,pathname:s,children:o}=e;const{title:l,description:c,author:d,siteUrl:u}=(0,r.useStaticQuery)("764694655").site.siteMetadata,p={defaultTitle:l,title:n||l,author:d,description:t||c,url:""+u+(s||"")};return(0,i.tZ)(a.Fragment,null,(0,i.tZ)("title",null,p.title," | ",p.defaultTitle),(0,i.tZ)("meta",{charSet:"utf-8"}),(0,i.tZ)("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),(0,i.tZ)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,i.tZ)("meta",{name:"description",content:p.description}),(0,i.tZ)("meta",{name:"og:title",content:p.title}),(0,i.tZ)("meta",{name:"og:description",content:p.description}),(0,i.tZ)("meta",{name:"og:type",content:"website"}),(0,i.tZ)("meta",{name:"twitter:card",content:"summary"}),(0,i.tZ)("meta",{name:"twitter:title",content:p.title}),(0,i.tZ)("meta",{name:"twitter:description",content:p.description}),(0,i.tZ)("meta",{name:"twitter:url",content:p.url}),(0,i.tZ)("meta",{name:"twitter:creator",content:p.author}),(0,i.tZ)("link",{rel:"icon",href:"/images/logo.svg"}),o,(0,i.tZ)("script",{dangerouslySetInnerHTML:{__html:"(function(){\nvar d=document; var x=!d.getElementById('razorpay-embed-btn-js')\nif(x){ var s=d.createElement('script'); s.defer=!0;s.id='razorpay-embed-btn-js';\ns.src='https://cdn.razorpay.com/static/embed_btn/bundle.js';d.body.appendChild(s);} else{var rzp=window['__rzp__'];\nrzp && rzp.init && rzp.init()}})();"}}))}},56431:function(e,t,n){var a=n(20574),r=n(42093),i=n(5016),s=n(24300),o=n(61431);const l=(0,r.default)("div").withConfig({displayName:"PageLayout__StyledContent",componentId:"sc-1wnurew-0"})(["margin:3rem auto;width:100%;max-width:1024px;padding:10px;"]);t.Z=e=>{let{children:t}=e;return(0,o.tZ)(a.StaticQuery,{query:"3033529250",render:e=>(0,o.tZ)("div",null,(0,o.tZ)(s.Z,null),(0,o.tZ)(l,null,t),(0,o.tZ)(i.Z,null))})}},27691:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o}});var a=n(56431),r=n(66070),i=n(93723),s=n(61431);t.default=()=>(0,s.tZ)(a.Z,null,(0,s.tZ)("h1",null,"Sorghum Millets"),(0,s.tZ)("div",{className:"block w-full m-auto text-center"},(0,s.tZ)(i.S,{src:"../../images/millets/sorghum-info.png",alt:"Sorghum Millets",placeholder:"blurred",__imageData:n(76477)})));const o=()=>(0,s.tZ)(r.Z,{title:"Sorghum Millets"})},76477:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,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"},"images":{"fallback":{"src":"/static/5e0ec344746569463b28b191803cd4f5/680b2/sorghum-info.png","srcSet":"/static/5e0ec344746569463b28b191803cd4f5/050e7/sorghum-info.png 1125w,\\n/static/5e0ec344746569463b28b191803cd4f5/75990/sorghum-info.png 2250w,\\n/static/5e0ec344746569463b28b191803cd4f5/680b2/sorghum-info.png 4500w","sizes":"(min-width: 4500px) 4500px, 100vw"},"sources":[{"srcSet":"/static/5e0ec344746569463b28b191803cd4f5/cee0c/sorghum-info.webp 1125w,\\n/static/5e0ec344746569463b28b191803cd4f5/c8e0d/sorghum-info.webp 2250w,\\n/static/5e0ec344746569463b28b191803cd4f5/ba631/sorghum-info.webp 4500w","type":"image/webp","sizes":"(min-width: 4500px) 4500px, 100vw"}]},"width":4500,"height":10800}')}}]);
//# sourceMappingURL=component---src-pages-millets-sorghum-millets-tsx-add187434eee1c4cdd3a.js.map