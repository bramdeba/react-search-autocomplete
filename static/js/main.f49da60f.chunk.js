(this["webpackJsonpreact-search-autocomplete"]=this["webpackJsonpreact-search-autocomplete"]||[]).push([[0],{21:function(e,t,o){},22:function(e,t,o){},34:function(e,t,o){"use strict";o.r(t);var i=o(1),n=(o(0),o(11)),r=o.n(n),c=(o(21),o(2)),s=(o(22),o.p+"static/media/sickdoodle.d7740801.png"),a=o(4);var l=function(){var e=Object(c.a)(new Array(1e4)).map((function(e,t){return{id:t,name:"something".concat(t),description:"Some description text, where the search will be performed too."}})),t=function(e,t){console.log(e,t)},o=function(e){console.log(e)},n=function(){console.log("Focused")};return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsxs)("div",{style:{width:200,margin:20},children:[Object(i.jsx)("img",{src:s,alt:"logo",style:{width:"100%",marginBottom:20}}),Object(i.jsx)("div",{style:{marginBottom:20},children:'Try to type "JavaScript"'}),Object(i.jsx)(a.ReactSearchAutocomplete,{items:[{id:0,name:"Cobol"},{id:1,name:"JavaScript"},{id:2,name:"Basic"},{id:3,name:"PHP"},{id:4,name:"Java"}],onSearch:t,onSelect:o,onFocus:n,styling:{zIndex:2},autoFocus:!0}),Object(i.jsx)("div",{style:{marginTop:20},children:"This text will be covered!"})]}),Object(i.jsxs)("div",{style:{width:200,margin:20},children:[Object(i.jsx)("h2",{children:"10000 items!"}),Object(i.jsx)("div",{style:{marginBottom:20},children:"Try to type a number"}),Object(i.jsx)(a.ReactSearchAutocomplete,{items:e,maxResults:15,onSearch:t,onSelect:o,onFocus:n,fuseOptions:{keys:["name","description"]},styling:{zIndex:1}}),Object(i.jsx)("div",{style:{marginTop:20},children:"This text will be covered!"})]}),Object(i.jsxs)("div",{style:{width:200,margin:20},children:[Object(i.jsx)("h2",{children:"My custom searchbox!"}),Object(i.jsx)("div",{style:{marginBottom:20},children:'Try to type "Titanic"'}),Object(i.jsx)(a.ReactSearchAutocomplete,{items:[{id:0,title:"Titanic",description:"A movie about love"},{id:1,title:"Dead Poets Society",description:"A movie about poetry and the meaning of life"},{id:2,title:"Terminator 2",description:"A robot from the future is sent back in time"},{id:3,title:"Alien 2",description:"Ripley is back for a new adventure"}],fuseOptions:{keys:["title","description"]},resultStringKeyName:"title",onSearch:t,onSelect:o,onFocus:n,showIcon:!1,styling:{height:"34px",border:"1px solid darkgreen",borderRadius:"4px",backgroundColor:"white",boxShadow:"none",hoverBackgroundColor:"lightgreen",color:"darkgreen",fontSize:"12px",fontFamily:"Courier",iconColor:"green",lineColor:"lightgreen",placeholderColor:"darkgreen"}}),Object(i.jsx)("div",{style:{marginTop:20},children:"This text will be covered!"})]})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(i.jsx)(l,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.f49da60f.chunk.js.map