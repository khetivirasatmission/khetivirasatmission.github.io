(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"++Nj":function(e,t,n){e.exports=n.p+"static/2-0c3d1cbe560da39da08b843d4f419624.png"},"0JQy":function(e,t,n){n("SRfc"),n("Oyvg");var a="[\\ud800-\\udfff]",r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",o="\\ud83c[\\udffb-\\udfff]",i="[^\\ud800-\\udfff]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",c="(?:"+r+"|"+o+")"+"?",u="[\\ufe0e\\ufe0f]?"+c+("(?:\\u200d(?:"+[i,l,s].join("|")+")[\\ufe0e\\ufe0f]?"+c+")*"),d="(?:"+[i+r+"?",r,l,s,a].join("|")+")",f=RegExp(o+"(?="+o+")|"+d+u,"g");e.exports=function(e){return e.match(f)||[]}},"0YQZ":function(e,t,n){e.exports=n.p+"static/5-e96f2762fc518ab4e225d725ba436cdc.png"},"1jYA":function(e,t,n){"use strict";n.r(t);n("14J3");var a=n("BMrR"),r=(n("jCWc"),n("kPKH")),o=(n("cIOH"),n("6D9b"),n("91GP"),n("HAE/"),n("q1tI")),i=n.n(o),l=n("TSYQ"),s=n.n(l),c=n("H84U"),u=(n("pIFo"),n("SRfc"),n("B6l+")),d=n.n(u),f=function(e){var t,n=e.value,a=e.formatter,r=e.precision,i=e.decimalSeparator,l=e.groupSeparator,s=void 0===l?"":l,c=e.prefixCls;if("function"==typeof a)t=a(n);else{var u=String(n),f=u.match(/^(-?)(\d*)(\.(\d+))?$/);if(f&&"-"!==u){var m=f[1],h=f[2]||"0",p=f[4]||"";h=h.replace(/\B(?=(\d{3})+(?!\d))/g,s),"number"==typeof r&&(p=d()(p,r,"0").slice(0,r)),p&&(p="".concat(i).concat(p)),t=[o.createElement("span",{key:"int",className:"".concat(c,"-content-value-int")},m,h),p&&o.createElement("span",{key:"decimal",className:"".concat(c,"-content-value-decimal")},p)]}else t=u}return o.createElement("span",{className:"".concat(c,"-content-value")},t)};function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var h=function(e){var t=e.prefixCls,n=e.className,a=e.style,r=e.valueStyle,i=e.value,l=void 0===i?0:i,c=e.title,u=e.valueRender,d=e.prefix,h=e.suffix,p=e.direction,g=o.createElement(f,m({},e,{value:l}));u&&(g=u(g));var v=s()(t,n,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},"".concat(t,"-rtl"),"rtl"===p));return o.createElement("div",{className:v,style:a},c&&o.createElement("div",{className:"".concat(t,"-title")},c),o.createElement("div",{style:r,className:"".concat(t,"-content")},d&&o.createElement("span",{className:"".concat(t,"-content-prefix")},d),g,h&&o.createElement("span",{className:"".concat(t,"-content-suffix")},h)))};h.defaultProps={decimalSeparator:".",groupSeparator:","};var p=Object(c.c)({prefixCls:"statistic"})(h),g=(n("eM6i"),n("a1Th"),n("h7Nl"),n("Btvt"),n("I5cv"),n("/SS/"),n("hHhE"),n("rE2o"),n("ioFf"),n("Oyvg"),n("V+eJ"),n("DNiP"),n("bWfx"),n("LK8F"),n("rGqo"),n("XfO3"),n("HEwt"),n("f3/d"),n("QQZ/")),v=n.n(g);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(s){r=!0,o=s}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var w=[["Y",31536e6],["M",2592e6],["D",864e5],["H",36e5],["m",6e4],["s",1e3],["S",1]];function k(e,t){var n=t.format,a=void 0===n?"":n,r=new Date(e).getTime(),o=Date.now();return function(e,t){var n=e,a=/\[[^\]]*]/g,r=(t.match(a)||[]).map((function(e){return e.slice(1,-1)})),o=t.replace(a,"[]"),i=w.reduce((function(e,t){var a=y(t,2),r=a[0],o=a[1];if(-1!==e.indexOf(r)){var i=Math.floor(n/o);return n-=i*o,e.replace(new RegExp("".concat(r,"+"),"g"),(function(e){var t=e.length;return v()(i.toString(),t,"0")}))}return e}),o),l=0;return i.replace(a,(function(){var e=r[l];return l+=1,e}))}(Math.max(r-o,0),a)}var E=n("0n0R");function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=R(e);if(t){var r=R(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return A(this,n)}}function A(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function K(e){return new Date(e).getTime()}var M,O=((M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(i,e);var t,n,a,r=j(i);function i(){var e;return I(this,i),(e=r.apply(this,arguments)).syncTimer=function(){K(e.props.value)>=Date.now()?e.startTimer():e.stopTimer()},e.startTimer=function(){e.countdownId||(e.countdownId=window.setInterval((function(){e.forceUpdate()}),1e3/30))},e.stopTimer=function(){var t=e.props,n=t.onFinish,a=t.value;if(e.countdownId){clearInterval(e.countdownId),e.countdownId=void 0;var r=K(a);n&&r<Date.now()&&n()}},e.formatCountdown=function(t,n){var a=e.props.format;return k(t,S(S({},n),{format:a}))},e.valueRender=function(e){return Object(E.a)(e,{title:void 0})},e}return t=i,(n=[{key:"componentDidMount",value:function(){this.syncTimer()}},{key:"componentDidUpdate",value:function(){this.syncTimer()}},{key:"componentWillUnmount",value:function(){this.stopTimer()}},{key:"render",value:function(){return o.createElement(p,S({valueRender:this.valueRender},this.props,{formatter:this.formatCountdown}))}}])&&T(t.prototype,n),a&&T(t,a),i}(o.Component)).defaultProps={format:"HH:mm:ss"},M);p.Countdown=O;var P=p,C=(n("g9YV"),n("wCAj")),W=(n("IzEo"),n("bx4M")),B=n("Wbzz"),D=n("0Vgw"),H=(n("+L6B"),n("2/Rp")),J=function(){return i.a.createElement(B.Link,{to:"/donate",style:{float:"right"}},i.a.createElement(H.a,{type:"primary",size:"large"},"Donate now"))},V=n("H8eV"),q=n("z85T"),z=n("KwN3"),F=n.n(z),Z=n("++Nj"),_=n.n(Z),L=n("smML"),Q=n.n(L),U=n("0YQZ"),Y=n.n(U),G=n("eZQT"),X=n.n(G),$=[{title:"Stakeholder",dataIndex:"name",key:"name",className:"stakeholder"},{title:"Intervention",dataIndex:"intervention",key:"intervention",className:"intervention"}],ee=[{key:"1",name:"Cotton farmers",intervention:"Provide training on organic practices; buy cotton on premium price"},{key:"2",name:"Spinners",intervention:"Provide them with tools and raw material; conduct trainings to hone their skills"},{key:"3",name:"Natural dyers",intervention:"Standardise natural dyes; train the youngsters in the art of dyeing"},{key:"4",name:"Weavers and Embroiders",intervention:"Work on the fusion of traditional and contemporary designs; quality control"},{key:"5",name:"Tailors",intervention:"Work on the customized designs; maintain quality and enhance the productivity"},{key:"6",name:"Buyers",intervention:"Provide fabric with the compassionate warp and delicated weft carefully crafted by artistic hands"}],te=[{key:"rimpykaur",name:"Rimpy Kaur (18)",designation:"Natural dyer",image:F.a,expanded:!0,story:"Rimpy Kaur is from Kotli village in Muktsar district. With her academic background in fashion, she developed a quick passion for natural dyeing. We trained her into using all-natural plant materials to make dyes for the thread, including marigold flowers, carrots, onion skin, babul (gum arabic) bark, pomegranate skin, eucalyptus bark and much more. She attended regular trainings. Thus, not just her skills developed but also her wisdom. She understood that artificial dyes cause skin irritations and infections; thus switching to natural dyes is the need of the hour. TRINJAN has also given this young adult, a source of earning bread and butter, working from home. As people started acknowledging her work through KVM, her confidence is boosted by leaps and bounds. She says, “I will be glad to train others and share this art I have learnt through KVM. I will, happily, carry on with this work as it gives me deep creative satisfaction.” Rimpy represents the youth, which if provided with appropriate guidance and skills, can bring a change in the outlook of youngsters."},{key:"gagandeepkaur",name:"Gagandeep Kaur (26)",designation:"Embroider and Tailor",image:_.a,story:"A high school pass out, Gagandeep Kaur, lives in the Kotli village in district Muktsar. She had learnt embroidery from her mother and stitching from her sister at the age of 15. She says, “I continued both of these skills as a past time ever since I had learnt them. I lament the fact that now we are completely dependent on machines and look down upon blue collared professions. But I had always enjoyed my work.” Being grateful to KVM, she adds, “I am thankful to KVM for acknowledging my hobby and helping me take it to a professional level. Now I am able to provide financial backing to my family, too.” Being more delicate, working with natural material was little challenging in the beginning. But after receiving guidance from KVM, she has got a hang of it now."},{key:"ramandeepkaur",name:"Ramandeep Kaur (23)",designation:"Spinner",image:Y.a,story:"Ramandeep Kaur (23), from Kotli, Muktsar, holds BCA degree. Inheriting the art of spinning from her mother, she used to spin, sometimes as a past-time and sometimes as a stress-relieving exercise. Since 2017, she has started spinning regularly as a professional with KVM. Ramandeep revisits the moments when KVM came to see this young girl spinning, “I felt so happy and honoured that they appreciated my work and gave me an opportunity to hone my skills. I feel contented that the skills learnt playfully from my elders are now my tools for financial stability.” She always experience a mental peace and calm, which comes along, when she spins. For her, spinning is much more than a mechanical activity."},{key:"sindedrpalkaur",name:"Sinderpal Kaur (57)",designation:"Weaver",image:X.a,story:"Sinderpal Kaur (57) lives in the village of Kotli, Muktsar district. At the age of seven, she learnt weaving from her mother. After learning the basics in a month or so, she kept practising to perfect the skill. She says, “Working on loom keeps me focused and grounded. It is a perfect exercise to rein in my wandering thoughts.” She is even more satisfied that the work is, now, generating her money. From a pity home maker, her status has now uplifted to a professional artisan. As this art is at the verge of extinction, Punjab is left with very few weavers who still know the intricacies of it. And Sinderpal, is indeed one of those rare people, who need immediate assistance, for they hold the seeds for young generation."},{key:"asharani",name:"Aasha Rani (70)",designation:"Basket Weaver",image:Q.a,story:"With no academic background, Asha Rani (70) taught herself how to weave baskets and other crafts out of palm leaves in her early teens. Based at Jaitu, Faridkot, this is the source of bread and butter to her family of five. She explains her routine, “I go to different spots near the village pond to collect the raw material. I work for 8-9 hours per day to make two baskets and a plate in a day.” That's quite a speed! Despite some issues in her back, she manages to give continuous sitting, driven by her determination and passion. Even being a novice, Asha knows that any eatable, if kept in plastic, goes lifeless. Her work has multitude of benefits- from generating livelihood to the reviving of traditional craft and an eco-friendly alternative over plastic. KVM is supporting many little known artisans like Asha Rani, providing their products a market and their art a recognition through TRINJAN."}];t.default=function(){return i.a.createElement(D.a,null,i.a.createElement(V.a,{title:"Trinjan"}),i.a.createElement("h1",null,"Trinjan",i.a.createElement(J,null)),i.a.createElement(W.a,{title:" Trinjan - A Documentary Premiere on Reviving the Spinning Wheel in Punjab",bordered:!1},i.a.createElement("div",{className:"video-responsive"},i.a.createElement("iframe",{width:"1196",height:"673",src:"https://www.youtube.com/embed/e5xox_aJh1U",style:{border:"none"},allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}))),i.a.createElement(W.a,{title:"Weaving the Social Fabric with Compassionate Warp and Dedicated Weft",bordered:!1},i.a.createElement("p",null,"Trinjan, in rural Punjab, was the space where women would traditionally gather to spin on charkhas, weave, talk, counsel, learn from each other, cook and eat together. In the assaults made by Green Revolution, this culture of community gatherings in disguise of artistic activities was lost."),i.a.createElement("p",null,"KVM has revived this culture through its project TRINJAN. It is providing women artisans a platform to re-explore their art, earn livelihood and share their wisdom.")),i.a.createElement(W.a,{title:"Project TRINJAN",bordered:!1},i.a.createElement("p",null,"TRINJAN is an extension of Kheti Virasat’s Mission for Rural Livelihood through Traditional Skills. To revive the great knowledge of textile and handicrafts that women had, TRINJAN started in 4 villages in 2017. The self-reliance of cloth, aka 'Vastra Swavlambham’, which was once a part and parcel of our culture, was lost long ago. Most of the spinners and weavers were women. They were also actively involved in agriculture and dairy activities. In the course of industrialisation and modernization, most of them lost their patience and interest amid the flood of easily accessible ready-made garments and limited themselves to household chores. The charkhas were abandoned and the weavers were out of practice. KVM identified these women artisans, most of them from poor financial backgrounds, and encouraged them to restart their work professionally, with KVM."),i.a.createElement("p",null,"Under the umbrella of TRINJAN, we also organise festive gatherings known as Trinjan Melas, exhibitions with live demonstrations, traditional food festivals and cultural programmes.")),i.a.createElement(W.a,{title:"Value chain",bordered:!1},i.a.createElement("p",null,"Organic indigenous Cotton grown by the farmers, is procured by KVM at premium prices, hand spun, naturally dyed and hand woven by the rural artisans. Along with this, there are women artisans who do hand embroidery, crochet, Knitting, make different grass crafts and other decorative products."),i.a.createElement("p",null,"We are constantly working on the quality of the yarn, fabric, designing, productivity and marketing through regular trainings of women. For this, we have a network of experts and various organisations across India, which is constantly evolving."),i.a.createElement(C.a,{rowClassName:function(e,t){return t%2==0?"table-row-light":"table-row-dark"},columns:$,dataSource:ee,pagination:!1}),i.a.createElement("br",null)),i.a.createElement(W.a,{title:"TRINJAN Family",bordered:!1},i.a.createElement(a.a,null,i.a.createElement(r.a,{xs:12,sm:12,lg:4},i.a.createElement("div",null,i.a.createElement(P,{title:"Farmers",value:19}))),i.a.createElement(r.a,{xs:12,sm:12,lg:4},i.a.createElement("div",null,i.a.createElement(P,{title:"Spinners",value:137}))),i.a.createElement(r.a,{xs:12,sm:12,lg:5},i.a.createElement("div",null,i.a.createElement(P,{title:"Natural Dyers",value:10}))),i.a.createElement(r.a,{xs:12,sm:12,lg:4},i.a.createElement("div",null,i.a.createElement(P,{title:"Fabric Weavers",value:28}))),i.a.createElement(r.a,{xs:12,sm:12,lg:5},i.a.createElement("div",null,i.a.createElement(P,{title:"Hand Embroiders",value:13}))),i.a.createElement(r.a,{xs:12,sm:12,lg:4},i.a.createElement("div",null,i.a.createElement(P,{title:"Knitters",value:24}))),i.a.createElement(r.a,{xs:12,sm:12,lg:4},i.a.createElement("div",null,i.a.createElement(P,{title:"Darri Weavers",value:18}))),i.a.createElement(r.a,{xs:12,sm:12,lg:5},i.a.createElement("div",null,i.a.createElement(P,{title:"Crochet Workers",value:29}))),i.a.createElement(r.a,{xs:12,sm:12,lg:4},i.a.createElement("div",null,i.a.createElement(P,{title:"Tailors",value:7}))),i.a.createElement(r.a,{xs:12,sm:12,lg:5},i.a.createElement("div",null,i.a.createElement(P,{title:"Basket Weavers",value:11}))))),i.a.createElement(W.a,{title:"Our Products",bordered:!1},i.a.createElement("p",null,"These hardworking women make beautiful creative products including bedsheets, khes (topsheet), towels, stolls, mufflers, fabric for garments, darri, mats, rugs, woolen sweater, phulkaris, hand woven baskets, crochet earrings, toran, coasters, wall hangings etc. These products are than marketed by KVM on various public platforms.")),i.a.createElement(W.a,{title:"Meet our Artisans",bordered:!1},i.a.createElement(q.a,{list:te})),i.a.createElement(W.a,{title:"Work with TRINJAN",bordered:!1},i.a.createElement("strong",null,"We are looking for volunteers!"),i.a.createElement("p",null,"If the traditional art, handicraft and culture linkages amuses you,"," ",i.a.createElement(B.Link,{to:"/volunteer"},i.a.createElement("strong",null,"Join as a volunteer"))," ","to help us further explore, document, expand and evolve TRINJAN.")),i.a.createElement(W.a,{title:"Donate for TRINJAN",bordered:!1},i.a.createElement("p",null,"This project is supported by donations.","  ",i.a.createElement(B.Link,{to:"/donate"},i.a.createElement("strong",null,"Donate here"))," ","for a cause.")))}},"6D9b":function(e,t,n){},"711d":function(e,t){e.exports=function(e){return function(t){return null==t?void 0:t[e]}}},"B6l+":function(e,t,n){var a=n("Sq3C"),r=n("Z1HP"),o=n("Sxd8"),i=n("dt0z");e.exports=function(e,t,n){e=i(e);var l=(t=o(t))?r(e):0;return t&&l<t?e+a(t-l,n):e}},Em2t:function(e,t,n){var a=n("bahg"),r=n("quyA"),o=n("0JQy");e.exports=function(e){return r(e)?o(e):a(e)}},KwN3:function(e,t,n){e.exports=n.p+"static/1-2f322f135ff767563be88ea09fbe25e8.png"},KxBF:function(e,t){e.exports=function(e,t,n){var a=-1,r=e.length;t<0&&(t=-t>r?0:r+t),(n=n>r?r:n)<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;for(var o=Array(r);++a<r;)o[a]=e[a+t];return o}},"QQZ/":function(e,t,n){var a=n("Sq3C"),r=n("Z1HP"),o=n("Sxd8"),i=n("dt0z");e.exports=function(e,t,n){e=i(e);var l=(t=o(t))?r(e):0;return t&&l<t?a(t-l,n)+e:e}},Sq3C:function(e,t,n){var a=n("sKgW"),r=n("zoYe"),o=n("wy8a"),i=n("quyA"),l=n("Z1HP"),s=n("Em2t"),c=Math.ceil;e.exports=function(e,t){var n=(t=void 0===t?" ":r(t)).length;if(n<2)return n?a(t,e):t;var u=a(t,c(e/l(t)));return i(t)?o(s(u),0,e).join(""):u.slice(0,e)}},Sxd8:function(e,t,n){var a=n("ZCgT");e.exports=function(e){var t=a(e),n=t%1;return t==t?n?t-n:t:0}},Z1HP:function(e,t,n){var a=n("ycre"),r=n("quyA"),o=n("q4HE");e.exports=function(e){return r(e)?o(e):a(e)}},ZCgT:function(e,t,n){var a=n("tLB3");e.exports=function(e){return e?(e=a(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},bahg:function(e,t,n){n("KKXr"),e.exports=function(e){return e.split("")}},dt0z:function(e,t,n){var a=n("zoYe");e.exports=function(e){return null==e?"":a(e)}},eUgh:function(e,t){e.exports=function(e,t){for(var n=-1,a=null==e?0:e.length,r=Array(a);++n<a;)r[n]=t(e[n],n,e);return r}},eZQT:function(e,t,n){e.exports=n.p+"static/7-0d3f6e5e72e2f80af062c4108783e02c.png"},q4HE:function(e,t,n){n("Oyvg");var a="[\\ud800-\\udfff]",r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",o="\\ud83c[\\udffb-\\udfff]",i="[^\\ud800-\\udfff]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",c="(?:"+r+"|"+o+")"+"?",u="[\\ufe0e\\ufe0f]?"+c+("(?:\\u200d(?:"+[i,l,s].join("|")+")[\\ufe0e\\ufe0f]?"+c+")*"),d="(?:"+[i+r+"?",r,l,s,a].join("|")+")",f=RegExp(o+"(?="+o+")|"+d+u,"g");e.exports=function(e){for(var t=f.lastIndex=0;f.test(e);)++t;return t}},quyA:function(e,t,n){n("Oyvg");var a=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return a.test(e)}},sKgW:function(e,t){var n=Math.floor;e.exports=function(e,t){var a="";if(!e||t<1||t>9007199254740991)return a;do{t%2&&(a+=e),(t=n(t/2))&&(e+=e)}while(t);return a}},smML:function(e,t,n){e.exports=n.p+"static/3-79c206864a1cd71a9f4d1e66faee3a44.png"},wy8a:function(e,t,n){var a=n("KxBF");e.exports=function(e,t,n){var r=e.length;return n=void 0===n?r:n,!t&&n>=r?e:a(e,t,n)}},ycre:function(e,t,n){var a=n("711d")("length");e.exports=a},z85T:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));n("a1Th"),n("Btvt"),n("XfO3"),n("HEwt"),n("rGqo"),n("rE2o"),n("ioFf"),n("jCWc");var a=n("kPKH"),r=(n("IzEo"),n("bx4M")),o=(n("+L6B"),n("2/Rp")),i=(n("14J3"),n("BMrR")),l=(n("INYr"),n("f3/d"),n("q1tI")),s=n.n(l),c=n("bPv3"),u=n.n(c);function d(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var m={paddingTop:"4px"},h=function(e){var t=e.name,n=e.image;return s.a.createElement("div",{className:"custom-image"},s.a.createElement("img",{alt:t,width:"100%",src:n}))},p=function(e){var t=e.url,n=e.name,a=e.image;return s.a.createElement("a",{href:t,target:"_blank"},s.a.createElement(h,{name:n,image:a}))},g=function(e){var t=e.list,n=Object(l.useState)(t),a=n[0],r=n[1];return s.a.createElement(i.a,{gutter:18,type:"flex"},a.map((function(e){return s.a.createElement(v,{key:e.key,name:e.name,designation:e.designation,image:e.image,story:e.story,expanded:e.expanded,onClick:function(){return t=a,n=e.key,o=d(t),i=o.findIndex((function(e){return e.key===n})),o.push.apply(o,d(o.splice(0,i))),o.map((function(e){e.expanded=!1,e.key===n&&(e.expanded=!0)})),void r(o);var t,n,o,i}})})))},v=function(e){var t,n,i=e.name,l=e.designation,c=e.story,d=e.region,f=e.image,g=e.file,v=e.expanded,y=e.onClick;return t=f||u.a,n=g?s.a.createElement(p,{name:i,image:t,url:g}):s.a.createElement(h,{name:i,image:t}),s.a.createElement(s.a.Fragment,null,s.a.createElement(a.a,{xs:24,md:12,lg:6},s.a.createElement(r.a,{className:"card-team",bordered:!1,bodyStyle:{padding:0}},s.a.createElement("div",null,n),s.a.createElement("div",{className:"custom-card"},i&&s.a.createElement("h3",null,i),l&&s.a.createElement("p",null,l),d&&s.a.createElement("h4",null,d),!v&&s.a.createElement(o.a,{size:"small",onClick:y},"Read more...")))),v&&s.a.createElement(a.a,{xs:24,md:24,lg:18},c&&s.a.createElement("div",{style:m},s.a.createElement("p",{dangerouslySetInnerHTML:{__html:c}}))))};v.defaultProps={expanded:!1}},zoYe:function(e,t,n){n("a1Th"),n("h7Nl"),n("Btvt");var a=n("nmnc"),r=n("eUgh"),o=n("Z0cm"),i=n("/9aa"),l=a?a.prototype:void 0,s=l?l.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(o(t))return r(t,e)+"";if(i(t))return s?s.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}}}]);
//# sourceMappingURL=component---src-pages-trinjan-tsx-086a3f83496bef978691.js.map