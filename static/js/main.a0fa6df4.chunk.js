(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{103:function(e,t,c){},237:function(e,t,c){},239:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(93),i=c.n(n),r=(c(103),c(7)),d=c(23),o=c(1),l=function(){var e=Object(a.useState)("stats"),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(o.jsxs)("div",{className:"navbar sticky-top",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"CovidStat"})}),Object(o.jsx)("div",{children:Object(o.jsxs)("ul",{className:"navlist",children:[Object(o.jsx)("li",{className:"stats"==c?"activenav":"",onClick:function(){s("stats")},children:Object(o.jsx)(d.b,{to:"/",children:"Stats"})}),Object(o.jsx)("li",{className:"News"==c?"activenav":"",onClick:function(){s("News")},children:Object(o.jsx)(d.b,{to:"/News",children:"News"})}),Object(o.jsx)("li",{className:"Con"==c?"activenav":"",onClick:function(){s("Contacts")},children:Object(o.jsx)(d.b,{to:"/contacts",children:"Contacts"})})]})})]})},j=c(10),b=c(29),h=c.n(b),u=c(44),O=c(45),x=c.n(O),p=function(e){return Object(o.jsxs)("div",{style:{border:"1px solid",margin:"4%",borderRadius:"20px"},children:[Object(o.jsx)("img",{style:{padding:"2%"},width:"100%",height:"100%",src:e.image}),Object(o.jsxs)("div",{style:{padding:"5%"},children:[Object(o.jsx)("h2",{style:{color:"white"},children:e.title}),Object(o.jsx)("p",{children:e.description})]})]})},v=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],n=function(){var e=Object(u.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=4d258bd4b31f40c59180ce5b754b72e7");case 2:t=e.sent,c=t.data.articles,s(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(c),Object(a.useEffect)((function(){n()}),[]),Object(o.jsxs)("div",{className:"newspage",children:[Object(o.jsx)("h1",{className:"heading",children:"Covid News"}),Object(o.jsxs)("div",{style:{padding:"5%"},children:[Object(o.jsx)("div",{style:{fontSize:"40px"},children:"All India's top healthcare news"}),c.map((function(e){return Object(o.jsx)(p,{image:e.urlToImage,title:e.title,description:e.description})}))]})]})},m=(c(238),c(33)),f=c(97),g=c.n(f),N=c(98),S=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),i=Object(r.a)(n,2),d=i[0],l=i[1],j=Object(a.useState)(""),b=Object(r.a)(j,2),O=b[0],p=b[1],v=Object(a.useState)(""),f=Object(r.a)(v,2),S=f[0],C=f[1],y=Object(a.useState)(""),w=Object(r.a)(y,2),k=w[0],A=w[1],R=Object(a.useState)(""),T=Object(r.a)(R,2),D=T[0],H=T[1],E=Object(a.useState)(""),F=Object(r.a)(E,2),I=F[0],L=F[1],B=Object(a.useState)(new Date),M=Object(r.a)(B,2),W=M[0],J=(M[1],Object(a.useState)("confirmed")),K=Object(r.a)(J,2),P=K[0],U=K[1],_=Object(a.useState)([]),z=Object(r.a)(_,2),G=(z[0],z[1],Object(a.useState)([])),q=Object(r.a)(G,2),Q=q[0],V=q[1],X=Object(a.useState)([]),Y=Object(r.a)(X,2),Z=Y[0],$=Y[1],ee=Object(a.useState)([]),te=Object(r.a)(ee,2),ce=te[0],ae=te[1],se=Object(a.useState)([]),ne=Object(r.a)(se,2),ie=ne[0],re=ne[1],de=Object(a.useState)([]),oe=Object(r.a)(de,2),le=oe[0],je=oe[1],be=Object(a.useState)(!1),he=Object(r.a)(be,2),ue=he[0],Oe=he[1],xe=Object(N.useSpeechSynthesis)().speak,pe=function(){var e=Object(u.a)(h.a.mark((function e(){var t,c,a,n,i,r,d,o,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://api.covid19india.org/data.json");case 2:return t=e.sent,c=t.data.cases_time_series,e.next=6,t.data.statewise;case 6:for(n in a=e.sent,s(a),p(a[0].active),C(a[0].confirmed),H(a[0].deaths),L(a[0].recovered),n=0,i=[],r=[],d=[],o=[],l=[],c)i.push(c[n].date),r.push(c[n].dailyconfirmed),o.push(c[n].dailyrecovered),d.push(c[n].dailydeceased),l.push(c[n].dailydeceased);$(r),V(i),je(o),re(d),ae(l);case 24:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){pe(),l(c)}),[]),Object(a.useEffect)((function(){l(c.filter((function(e){return e.state.toLowerCase().includes(k.toLowerCase())||""===k})).map((function(e){var t=e.state,c=e.statecode;return{state:t,confirmed:e.confirmed,recovered:e.recovered,active:e.active,deaths:e.deaths,statecode:c,lastupdatedtime:e.lastupdatedtime}})))}),[k]);return Object(o.jsxs)("div",{className:"statstable",children:[Object(o.jsx)("div",{className:"container-fluid mb-5",children:Object(o.jsx)(g.a,{text:"Welcome to covidstat!We present all the stats,News and the contacts u need about covid 19",voice:"Google UK English Female",rate:"0.9"})}),Object(o.jsxs)("div",{className:"totaldetails",children:[Object(o.jsxs)("div",{className:"confirmed box",onClick:function(){return U("confirmed"),void xe({text:"Total confirmed cases in india is of ".concat(S)})},children:[Object(o.jsx)("h5",{children:"Confirmed"}),Object(o.jsx)("h3",{children:S}),"confirmed"==P?Object(o.jsx)(m.a,{data:{labels:Q,datasets:[{label:"Confirmed",data:Z,fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"}]},height:300,width:500,options:{pointStyle:"line",pointBorderWidth:.1,maintainAspectRatio:!0}}):null]}),Object(o.jsxs)("div",{className:"active box",onClick:function(){return U("Active"),void xe({text:"Total active cases in india is of ".concat(O)})},children:[Object(o.jsx)("h5",{children:" Active "}),Object(o.jsx)("h3",{children:O}),"Active"==P?Object(o.jsx)(m.a,{data:{labels:Q,datasets:[{label:"Active",data:ce,fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"}]},height:300,width:500,options:{pointStyle:"line",maintainAspectRatio:!0}}):null]}),Object(o.jsxs)("div",{className:"recovered box",onClick:function(){return U("recovered"),void xe({text:"Total Recovered cases in india is of ".concat(I)})},children:[Object(o.jsx)("h5",{children:"Recovered"}),Object(o.jsx)("h3",{children:I}),"recovered"==P?Object(o.jsx)(m.a,{data:{labels:Q,datasets:[{label:"Recovered",data:le,fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"}]},height:300,width:500,options:{pointStyle:"line",maintainAspectRatio:!0}}):null]}),Object(o.jsxs)("div",{className:"death box",onClick:function(){return U("Death"),void xe({text:"Total deaths cases in india is of ".concat(D)})},children:[Object(o.jsx)("h5",{children:"Death"}),Object(o.jsx)("h3",{children:D}),"Death"==P?Object(o.jsx)(m.a,{data:{labels:Q,datasets:[{label:"deaths",data:ie,fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"}]},height:300,width:500,options:{pointStyle:"line",maintainAspectRatio:!0}}):null]})]}),Object(o.jsx)("input",{className:"search",type:"text",placeholder:"Search",value:k,onChange:function(e){return function(e){Oe(!0),A(e.target.value)}(e)}}),Object(o.jsx)("div",{className:"table-responsive",children:Object(o.jsxs)("table",{className:"table table-hover",children:[Object(o.jsx)("thead",{className:"thead-black",children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"State"}),Object(o.jsx)("th",{className:"confirmed",children:"Confirmed"}),Object(o.jsx)("th",{className:"recovered",children:"Recovered"}),Object(o.jsx)("th",{className:"death",children:"Death"}),Object(o.jsx)("th",{className:"active",children:"Active"}),Object(o.jsx)("th",{children:"Updated"})]})}),Object(o.jsx)("tbody",{children:ue?d.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsxs)("th",{style:{textAlign:"start"},children:[e.state," (",e.statecode,")"]}),Object(o.jsx)("td",{className:"confirmed",children:e.confirmed}),Object(o.jsx)("td",{className:"recovered",children:e.recovered}),Object(o.jsx)("td",{className:"death",children:e.deaths}),Object(o.jsx)("td",{className:"active",children:e.active}),Object(o.jsx)("td",{children:e.lastupdatedtime.split("/")[0]>=W.getDate()-1?W.getHours()-e.lastupdatedtime.split("")[12]>=0?"".concat(W.getHours()-e.lastupdatedtime.split("")[12]," hours ago"):"".concat(W.getHours()+24-e.lastupdatedtime.split("")[12]," hours ago"):"More Than day ago"})]},t)})):c.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsxs)("th",{style:{textAlign:"start"},children:[e.state," (",e.statecode,")"]}),Object(o.jsx)("td",{className:"confirmed",children:e.confirmed}),Object(o.jsx)("td",{className:"recovered",children:e.recovered}),Object(o.jsx)("td",{className:"death",children:e.deaths}),Object(o.jsx)("td",{className:"active",children:e.active}),Object(o.jsx)("td",{children:e.lastupdatedtime.split("/")[0]>=W.getDate()-1?W.getHours()-e.lastupdatedtime.split("")[12]>=0?"".concat(W.getHours()-e.lastupdatedtime.split("")[12]," hours ago"):"".concat(W.getHours()+24-e.lastupdatedtime.split("")[12]," hours ago"):"More Than day ago"})]},t)}))})]})})]})},C=function(){return Object(o.jsx)("div",{})},y=function(){return Object(o.jsxs)(j.c,{children:[" ",Object(o.jsx)(j.a,{exact:!0,path:"/",component:S}),Object(o.jsx)(j.a,{path:"/News",component:v}),Object(o.jsx)(j.a,{path:"/Contact",component:C})]})};c(237);var w=function(){return Object(o.jsx)(d.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{}),Object(o.jsx)(y,{})]})})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,242)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root")),k()}},[[239,1,2]]]);
//# sourceMappingURL=main.a0fa6df4.chunk.js.map