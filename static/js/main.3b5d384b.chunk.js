(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(4),a=n.n(c),o=(n(14),n(3)),i=n.n(o),h=n(5),u=n(6),l=n(7),d=n(9),j=n(8),p=(n(16),n(17),n(18),n(0)),f=function(e){var t=e.monster;return Object(p.jsxs)("div",{className:"card-container",children:[Object(p.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(t.id,"?set=set2&size=180x180")}),Object(p.jsx)("h2",{children:t.name}),Object(p.jsx)("p",{children:t.email})]})},m=function(e){var t=e.monsters;return Object(p.jsx)("div",{className:"card-list",children:t.map((function(e,t){return Object(p.jsx)(f,{monster:e},e.id)}))})},b=(n(20),function(e){var t=e.placeholder,n=e.handleChange;return Object(p.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),x=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({search:t.target.value})},e.state={monsters:[],search:"",loading:!0},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;(function(){var t=Object(h.a)(i.a.mark((function t(){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,e.setState({loading:!1,monsters:r}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),e.setState({loading:!0});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.search,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(p.jsx)("div",{className:"App",children:this.state.loading?Object(p.jsx)("div",{children:"\u0141adowanie..."}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Monsters Rolodex"}),Object(p.jsx)(b,{placeholder:"search",handleChange:this.handleChange}),Object(p.jsx)(m,{monsters:r})]})})}}]),n}(r.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};a.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root")),v()}],[[21,1,2]]]);
//# sourceMappingURL=main.3b5d384b.chunk.js.map