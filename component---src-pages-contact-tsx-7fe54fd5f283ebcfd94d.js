(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return f});a(201);var n=a(203),r=a.n(n),i=(a(202),a(204)),o=a.n(i),c=(a(35),a(220),a(583),a(587)),l=a.n(c),m=a(7),s=a.n(m),u=(a(75),a(59),a(37),a(585),a(33)),p=a(0),d=a.n(p),h=a(183),E=a(179);var f=function(e){function t(t){var a;return(a=e.call(this,t)||this).openNotification=function(){l.a.open({message:"Success",description:"Thanks for submitting the form. We will get back to you soon.",duration:3})},a.handleChange=function(e){var t;a.setState(((t={})[e.target.name]=e.target.value,t))},a.handleSubmit=function(e){e.preventDefault();var t;e.target;fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(t=Object.assign({"form-name":"contact"},a.state),Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&"))}).then(function(){a.openNotification(),setTimeout(function(){Object(u.navigate)("/")})}).catch(function(e){return alert(e)})},a.state={},a}return s()(t,e),t.prototype.render=function(){return d.a.createElement(h.a,null,d.a.createElement(E.a,{title:"Contact Us"}),d.a.createElement("div",null,d.a.createElement("h1",null,"Contact"),d.a.createElement(r.a,{gutter:64},d.a.createElement(o.a,{md:24,lg:12},d.a.createElement("iframe",{style:{border:"0",width:"100%"},src:"https://docs.google.com/forms/d/e/1FAIpQLSecB-GKr9wnBLkxahPKKTJmbVbNDFLRzBc59oKwHj4mglR_Yg/viewform?embedded=true",width:"482",height:"900"},"Loading...")),d.a.createElement(o.a,{md:24,lg:12},d.a.createElement("h3",null,"Address"),d.a.createElement("p",null,"Kheti Virasat Mission, House Number-72, Street Number- 4, R V Shanti Nagar, PO Box # 1, JAITU - 151202 Faridkot, Punjab"," "),d.a.createElement("p",null,d.a.createElement("strong",null,"Phone:")," +91 1635 503415, +91 9872682161"),d.a.createElement("p",null,d.a.createElement("strong",null,"Email:")," info@khetivirasatmission.org"),d.a.createElement("div",{className:"mapouter"},d.a.createElement("div",{className:"gmap_canvas"},d.a.createElement("iframe",{style:{border:"0",width:"100%"},width:"400",height:"400",id:"gmap_canvas",src:"https://maps.google.com/maps?q=kheti%20virasat%20mission&t=&z=17&ie=UTF8&iwloc=&output=embed"})))))))},t}(d.a.Component)},169:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a});a(175);var m=r.a.createContext({}),s=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},175:function(e,t,a){var n;e.exports=(n=a(177))&&n.default||n},177:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(56),l=a(2),m=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};m.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=m},178:function(e,t,a){e.exports=a.p+"static/logo-df309b679e95ff1bc09b63b5347e6b99.jpeg"},179:function(e,t,a){"use strict";var n=a(180),r=a(4),i=a.n(r),o=a(0),c=a.n(o),l=a(216),m=a.n(l);function s(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,o=n.data.site,l=t||o.siteMetadata.description;return c.a.createElement(m.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:i},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:l}].concat(r)})}s.defaultProps={lang:"en",meta:[],description:""},s.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),title:i.a.string.isRequired},t.a=s},180:function(e){e.exports={data:{site:{siteMetadata:{title:"Kheti Virasat Mission",description:"A NGO with mission to promote organic farming in Punjab.",author:"@shirishgoyal"}}}}},181:function(e,t,a){"use strict";a(211);var n=a(214),r=a.n(n),i=(a(205),a(207)),o=a.n(i),c=(a(212),a(171)),l=a.n(c),m=a(7),s=a.n(m),u=a(0),p=a.n(u),d=a(178),h=a.n(d),E=(a(173),a(172)),f=a.n(E),g=f.a.SubMenu,y=f.a.ItemGroup,b=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return p.a.createElement(f.a,{mode:this.props.mode},p.a.createElement(f.a.Item,{key:"home"},p.a.createElement("a",{href:"#"},"Home")),p.a.createElement(f.a.Item,{key:"about"},p.a.createElement("a",{href:"#"},"About us")),p.a.createElement(g,{title:p.a.createElement("span",null,"About us")},p.a.createElement(y,{title:"Item 1"},p.a.createElement(f.a.Item,{key:"setting:1"},"Option 1"),p.a.createElement(f.a.Item,{key:"setting:2"},"Option 2")),p.a.createElement(y,{title:"Item 2"},p.a.createElement(f.a.Item,{key:"setting:3"},"Option 3"),p.a.createElement(f.a.Item,{key:"setting:4"},"Option 4"))),p.a.createElement(f.a.Item,{key:"initiatives"},p.a.createElement("a",{href:"#"},"Initiatives")),p.a.createElement(f.a.Item,{key:"volunteers"},p.a.createElement("a",{href:"#"},"Volunteers")),p.a.createElement(f.a.Item,{key:"contact"},p.a.createElement("a",{href:"#"},"Contact Us")))},t}(u.Component),v=(a(213),a(169)),w=f.a.SubMenu,I=(f.a.ItemGroup,function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return p.a.createElement(f.a,{mode:this.props.mode},p.a.createElement(f.a.Item,{key:"home"},p.a.createElement(v.a,{to:"/"},"Home")),p.a.createElement(w,{title:p.a.createElement("span",null,"About us")},p.a.createElement(f.a.Item,{key:"org"},p.a.createElement(v.a,{to:"/mission"},"Mission")),p.a.createElement(f.a.Item,{key:"team"},p.a.createElement(v.a,{to:"/team"},"Team"))),p.a.createElement(w,{title:p.a.createElement("span",null,"Initiatives")},p.a.createElement(f.a.Item,{key:"setting:1"},p.a.createElement(v.a,{to:"/wae"},"Women Action for Ecology"))),p.a.createElement(f.a.Item,{key:"certification"},p.a.createElement(v.a,{to:"/certification"},"Certification")),p.a.createElement(f.a.Item,{key:"contact"},p.a.createElement(v.a,{to:"/contact"},"Contact Us")))},t}(u.Component)),k=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={visible:!1},t.showDrawer=function(){t.setState({visible:!0})},t.onClose=function(){t.setState({visible:!1})},t}return s()(t,e),t.prototype.render=function(){return p.a.createElement("nav",{className:"menu"},p.a.createElement("div",{className:"menu__logo"},p.a.createElement(v.a,{to:"/"},p.a.createElement("img",{src:h.a})," ",p.a.createElement("h1",null,"Kheti Virasat Mission"))),p.a.createElement("div",{className:"menu__container"},p.a.createElement("div",{className:"menu_left"}),p.a.createElement("div",{className:"menu_rigth"},p.a.createElement(I,{mode:"horizontal"})),p.a.createElement(o.a,{className:"menu__mobile-button",type:"primary",onClick:this.showDrawer},p.a.createElement(l.a,{type:"align-right"})),p.a.createElement(r.a,{title:"Basic Drawer",placement:"right",className:"menu_drawer",closable:!1,onClose:this.onClose,visible:this.state.visible},p.a.createElement(b,{mode:"inline"}),p.a.createElement(I,{mode:"inline"}))))},t}(u.Component);t.a=k},183:function(e,t,a){"use strict";a(173);var n=a(172),r=a.n(n),i=(a(209),a(215)),o=a.n(i),c=a(184),l=a(169),m=a(4),s=a.n(m),u=a(0),p=a.n(u),d=a(218),h=(a(210),a(181)),E=o.a.Footer,f=o.a.Content,g=Object(d.a)(f).withConfig({displayName:"PageLayout__StyledContent",componentId:"sc-6yt2lu-0"})(["margin:3rem auto;width:100%;max-width:900px;padding:10px;"]),y=function(e){var t=e.children;return p.a.createElement(l.b,{query:"1096028375",render:function(e){return p.a.createElement(o.a,null,p.a.createElement(h.a,null),p.a.createElement(g,null,t),p.a.createElement(E,null,"Copyright © ",(new Date).getFullYear()," Kheti Virasat Mission. All rights reserved.",p.a.createElement(r.a,{mode:"horizontal",className:"footer-menu"},p.a.createElement(r.a.Item,{key:"faq"},p.a.createElement("a",{href:"/faq"},"FAQ")),p.a.createElement(r.a.Item,{key:"support"},p.a.createElement("a",{href:"#"},"Support")))))},data:c})};y.propTypes={children:s.a.node.isRequired},t.a=y},184:function(e){e.exports={data:{site:{siteMetadata:{title:"Kheti Virasat Mission"}}}}}}]);
//# sourceMappingURL=component---src-pages-contact-tsx-7fe54fd5f283ebcfd94d.js.map