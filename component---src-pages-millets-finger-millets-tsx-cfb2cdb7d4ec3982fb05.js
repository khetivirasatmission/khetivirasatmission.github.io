"use strict";(self.webpackChunkkvm=self.webpackChunkkvm||[]).push([[7939],{93723:function(e,t,a){a.d(t,{L:function(){return m},M:function(){return E},P:function(){return v},S:function(){return G},_:function(){return o},a:function(){return s},b:function(){return d},g:function(){return c},h:function(){return l}});var n=a(67294),r=(a(92369),a(45697)),i=a.n(r);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(a=i[n])>=0||(r[a]=e[a]);return r}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function d(e,t,a,n,r){return void 0===r&&(r={}),s({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:s({},r,{opacity:t?1:0})})}function c(e,t,a,n,r,i,o,l){const d={};i&&(d.backgroundColor=i,"fixed"===a?(d.width=n,d.height=r,d.backgroundColor=i,d.position="relative"):("constrained"===a||"fullWidth"===a)&&(d.position="absolute",d.top=0,d.left=0,d.bottom=0,d.right=0)),o&&(d.objectFit=o),l&&(d.objectPosition=l);const c=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},d)});return c}const u=["children"],p=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,a=o(e,u);return n.createElement(n.Fragment,null,n.createElement(p,s({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:a,loading:r,alt:i="",shouldLoad:l}=e,d=o(e,g);return n.createElement("img",s({},d,{decoding:"async",loading:r,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:i}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,i=o(e,f);const l=i.sizes||(null==t?void 0:t.sizes),d=n.createElement(h,s({},i,t,{sizes:l,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return n.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:l})})),d):d};var b;h.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},y.displayName="Picture",y.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const w=["fallback"],v=function(e){let{fallback:t}=e,a=o(e,w);return t?n.createElement(y,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",s({},a))};v.displayName="Placeholder",v.propTypes={fallback:r.string,sources:null==(b=y.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const E=function(e){return n.createElement(n.Fragment,null,n.createElement(y,s({},e)),n.createElement("noscript",null,n.createElement(y,s({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;const A=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),s=3;s<n;s++)r[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:i().object.isRequired,alt:A},C=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],L=new Set;let Z,N;const O=function(e){let{as:t="div",image:r,style:i,backgroundColor:d,className:c,class:u,onStartLoad:p,onLoad:m,onError:g}=e,f=o(e,C);const{width:h,height:y,layout:b}=r,w=function(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}(h,y,b),{style:v,className:E}=w,A=o(w,S),x=(0,n.useRef)(),O=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);u&&(c=u);const T=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(b,h,y);return(0,n.useEffect)((()=>{Z||(Z=Promise.all([a.e(9774),a.e(8223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return N=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=x.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void L.add(O);if(N&&L.has(O))return;let t,n;return Z.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;x.current&&(x.current.innerHTML=a(s({isLoading:!0,isLoaded:L.has(O),image:r},f)),L.has(O)||(t=requestAnimationFrame((()=>{x.current&&(n=o(x.current,O,L,i,p,m,g))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{L.has(O)&&N&&(x.current.innerHTML=N(s({isLoading:L.has(O),isLoaded:L.has(O),image:r},f)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[r]),(0,n.createElement)(t,s({},A,{style:s({},v,i,{backgroundColor:d}),className:E+(c?" "+c:""),ref:x,dangerouslySetInnerHTML:{__html:T},suppressHydrationWarning:!0}))},T=(0,n.memo)((function(e){return e.image?(0,n.createElement)(O,e):null}));T.propTypes=x,T.displayName="GatsbyImage";const k=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],I=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},q=new Set(["fixed","fullWidth","constrained"]),M={src:i().string.isRequired,alt:A,width:I,height:I,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!q.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},G=(j=T,function(e){let{src:t,__imageData:a,__error:r}=e,i=o(e,k);return r&&console.warn(r),a?n.createElement(j,s({image:a},i)):(console.warn("Image not loaded",t),null)});var j;G.displayName="StaticImage",G.propTypes=M},92369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,n=!1;for(let r=0;r<e.length;r++){const i=e[r];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,n=a,a=!0,r++):a&&n&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,r-1)+"-"+e.slice(r-1),n=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,n=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},66070:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294),r=a(20574);var i=a(61431);var s=function(e){let{description:t,title:a,pathname:s,children:o}=e;const{title:l,description:d,author:c,siteUrl:u}=(0,r.useStaticQuery)("764694655").site.siteMetadata,p={defaultTitle:l,title:a||l,author:c,description:t||d,url:""+u+(s||"")};return(0,i.tZ)(n.Fragment,null,(0,i.tZ)("title",null,p.title," | ",p.defaultTitle),(0,i.tZ)("meta",{charSet:"utf-8"}),(0,i.tZ)("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),(0,i.tZ)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,i.tZ)("meta",{name:"description",content:p.description}),(0,i.tZ)("meta",{name:"og:title",content:p.title}),(0,i.tZ)("meta",{name:"og:description",content:p.description}),(0,i.tZ)("meta",{name:"og:type",content:"website"}),(0,i.tZ)("meta",{name:"twitter:card",content:"summary"}),(0,i.tZ)("meta",{name:"twitter:title",content:p.title}),(0,i.tZ)("meta",{name:"twitter:description",content:p.description}),(0,i.tZ)("meta",{name:"twitter:url",content:p.url}),(0,i.tZ)("meta",{name:"twitter:creator",content:p.author}),(0,i.tZ)("link",{rel:"icon",href:"/images/logo.svg"}),o,(0,i.tZ)("script",{dangerouslySetInnerHTML:{__html:"(function(){\nvar d=document; var x=!d.getElementById('razorpay-embed-btn-js')\nif(x){ var s=d.createElement('script'); s.defer=!0;s.id='razorpay-embed-btn-js';\ns.src='https://cdn.razorpay.com/static/embed_btn/bundle.js';d.body.appendChild(s);} else{var rzp=window['__rzp__'];\nrzp && rzp.init && rzp.init()}})();"}}))}},56431:function(e,t,a){var n=a(20574),r=a(42093),i=a(5016),s=a(24300),o=a(61431);const l=(0,r.default)("div").withConfig({displayName:"PageLayout__StyledContent",componentId:"sc-1wnurew-0"})(["margin:3rem auto;width:100%;max-width:1024px;padding:10px;"]);t.Z=e=>{let{children:t}=e;return(0,o.tZ)(n.StaticQuery,{query:"3033529250",render:e=>(0,o.tZ)("div",null,(0,o.tZ)(s.Z,null),(0,o.tZ)(l,null,t),(0,o.tZ)(i.Z,null))})}},72955:function(e,t,a){a.r(t),a.d(t,{Head:function(){return o}});var n=a(56431),r=a(66070),i=a(93723),s=a(61431);t.default=()=>(0,s.tZ)(n.Z,null,(0,s.tZ)("h1",null,"Finger Millets"),(0,s.tZ)("div",{className:"block w-full m-auto text-center"},(0,s.tZ)(i.S,{src:"../../images/millets/finger-info.png",alt:"Finger Millets",placeholder:"blurred",__imageData:a(81190)})));const o=()=>(0,s.tZ)(r.Z,{title:"Finger Millets"})},81190:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,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"},"images":{"fallback":{"src":"/static/ef591997f2cd9d0bdafcd2a3fd0de8d0/680b2/finger-info.png","srcSet":"/static/ef591997f2cd9d0bdafcd2a3fd0de8d0/050e7/finger-info.png 1125w,\\n/static/ef591997f2cd9d0bdafcd2a3fd0de8d0/75990/finger-info.png 2250w,\\n/static/ef591997f2cd9d0bdafcd2a3fd0de8d0/680b2/finger-info.png 4500w","sizes":"(min-width: 4500px) 4500px, 100vw"},"sources":[{"srcSet":"/static/ef591997f2cd9d0bdafcd2a3fd0de8d0/cee0c/finger-info.webp 1125w,\\n/static/ef591997f2cd9d0bdafcd2a3fd0de8d0/c8e0d/finger-info.webp 2250w,\\n/static/ef591997f2cd9d0bdafcd2a3fd0de8d0/ba631/finger-info.webp 4500w","type":"image/webp","sizes":"(min-width: 4500px) 4500px, 100vw"}]},"width":4500,"height":10800}')}}]);
//# sourceMappingURL=component---src-pages-millets-finger-millets-tsx-cfb2cdb7d4ec3982fb05.js.map