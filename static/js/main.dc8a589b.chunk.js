(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{36:function(e,t,c){},62:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(28),i=c.n(a),j=(c(36),c(9)),r=c(0),d=function(){return Object(r.jsxs)("div",{className:"navbar",children:[Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"CovidStat"})}),Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(r.jsxs)("ul",{className:"navlist",children:[Object(r.jsx)("li",{children:Object(r.jsx)(j.b,{to:"/",activeClassName:"active",children:"Stats"})}),Object(r.jsx)("li",{children:Object(r.jsx)(j.b,{to:"/News",activeClassName:"active",children:"News"})}),Object(r.jsx)("li",{children:Object(r.jsx)(j.b,{to:"/contacts",activeClassName:"active",children:"Contacts"})})]})})]})},l=c(2),h=function(){return Object(r.jsx)("div",{})},b=c(18),O=c.n(b),o=c(30),x=c(8),u=c(31),v=c.n(u),m=(c(63),function(){var e=Object(s.useState)([]),t=Object(x.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),i=Object(x.a)(a,2),j=i[0],d=i[1],l=Object(s.useState)(""),h=Object(x.a)(l,2),b=h[0],u=h[1],m=Object(s.useState)(""),f=Object(x.a)(m,2),p=f[0],N=f[1],g=Object(s.useState)(""),C=Object(x.a)(g,2),S=C[0],w=C[1],y=Object(s.useState)(new Date),D=Object(x.a)(y,2),k=D[0],A=(D[1],function(){var e=Object(o.a)(O.a.mark((function e(){var t,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://api.covid19india.org/data.json");case 2:return t=e.sent,e.next=5,t.data.statewise;case 5:c=e.sent,n(c),d(c[0].active),u(c[0].confirmed),N(c[0].deaths),w(c[0].recovered);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(s.useEffect)((function(){A()}),[]),Object(r.jsxs)("div",{className:"statstable",children:[Object(r.jsx)("div",{className:"container-fluid mt-5 mb-5",children:Object(r.jsx)("h1",{className:"heading",children:"Stats"})}),Object(r.jsxs)("div",{className:"totaldetails",children:[Object(r.jsxs)("div",{className:"confirmed",children:[Object(r.jsx)("h5",{children:"Confirmed"}),Object(r.jsx)("h3",{children:b})]}),Object(r.jsxs)("div",{className:"active",children:[Object(r.jsx)("h5",{children:" Active "}),Object(r.jsx)("h3",{children:j})]}),Object(r.jsxs)("div",{className:"recovered",children:[Object(r.jsx)("h5",{children:"Recovered"}),Object(r.jsx)("h3",{children:S})]}),Object(r.jsxs)("div",{className:"death",children:[Object(r.jsx)("h5",{children:"Death"}),Object(r.jsx)("h3",{children:p})]})]}),Object(r.jsx)("div",{className:"table-responsive",children:Object(r.jsxs)("table",{className:"table table-hover",children:[Object(r.jsx)("thead",{className:"thead-black",children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"State"}),Object(r.jsx)("th",{children:"Confirmed"}),Object(r.jsx)("th",{children:"Recovered"}),Object(r.jsx)("th",{children:"Death"}),Object(r.jsx)("th",{children:"Active"}),Object(r.jsx)("th",{children:"Updated"})]})}),Object(r.jsx)("tbody",{children:c.map((function(e,t){return Object(r.jsxs)("tr",{children:[Object(r.jsxs)("th",{style:{textAlign:"start"},children:[e.state," (",e.statecode,")"]}),Object(r.jsx)("td",{children:e.confirmed}),Object(r.jsx)("td",{children:e.recovered}),Object(r.jsx)("td",{children:e.deaths}),Object(r.jsx)("td",{children:e.active}),Object(r.jsx)("td",{children:e.lastupdatedtime.split("/")[0]>=k.getDate()-1?"".concat(k.getHours()-e.lastupdatedtime.split("")[12]," Hours ago"):"More Than day ago"})]},t)}))})]})})]})}),f=function(){return Object(r.jsx)("div",{})},p=function(){return Object(r.jsxs)(l.c,{children:[" ",Object(r.jsx)(l.a,{exact:!0,path:"/",component:m}),Object(r.jsx)(l.a,{path:"/News",component:h}),Object(r.jsx)(l.a,{path:"/Contact",component:f})]})};c(62);var N=function(){return Object(r.jsx)(j.a,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(d,{}),Object(r.jsx)(p,{})]})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root")),g()}},[[64,1,2]]]);
//# sourceMappingURL=main.dc8a589b.chunk.js.map