(this["webpackJsonpuse-reducer"]=this["webpackJsonpuse-reducer"]||[]).push([[0],{47:function(e,r,a){"use strict";a.r(r);var t=a(0),c=a(1),s=a(22),n=a.n(s),i=a(10),o=Object(c.createContext)(),l=a(4),h="[auth] login",u="[auth] logout",j=function(e,r){switch(null===r||void 0===r?void 0:r.type){case h:return Object(l.a)(Object(l.a)({},r.payload),{},{logged:!0});case u:return{logged:!1};default:return e}},d=a(9),m=a(2),b=a(14),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object(c.useState)(e),a=Object(i.a)(r,2),t=a[0],s=a[1],n=function(e){var r=e.target;s(Object(l.a)(Object(l.a)({},t),{},Object(b.a)({},r.name,r.value)))},o=function(){s(e)};return[t,n,o]},O=function(e){var r=e.history,a=Object(c.useContext)(o),s=a.user,n=a.dispatch,l=localStorage.getItem("lastname")||"",u=p({username:l}),j=Object(i.a)(u,2),d=j[0].username,m=j[1];return console.log(s),Object(t.jsxs)("div",{className:"container mt-5",children:[Object(t.jsx)("h1",{children:"Login"}),Object(t.jsx)("hr",{}),Object(t.jsx)("input",{type:"text",name:"username",value:d,onChange:m,autoComplete:"off",placeholder:"Username"}),Object(t.jsx)("button",{className:"btn btn-primary btn-box",onClick:function(){!function(){var e=localStorage.getItem("lastpath")||"/",a={type:h,payload:{name:d}};console.log(d),console.log(a),n(a),r.replace(e)}()},children:"Login!"})]})},v=a(6),x=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],g=function(e){var r=e.id,a=e.superhero,c=(e.publisher,e.alter_ego),s=e.first_appearance,n=e.characters;return Object(t.jsx)("div",{className:"card ms-3",style:{maxWidth:550},children:Object(t.jsx)("div",{className:"row no-gutters",children:Object(t.jsxs)("div",{className:"column col-md-4",children:[Object(t.jsx)("img",{src:"./assets/heroes/".concat(r,".jpg"),className:"card-img",alt:"Heroe"}),Object(t.jsx)("div",{className:"col-md-8",children:Object(t.jsxs)("div",{className:"card-body",children:[Object(t.jsx)("h5",{className:"card-title",children:a}),Object(t.jsx)("p",{className:"card-text",children:c}),c!==n&&Object(t.jsx)("p",{className:"card-text",children:n}),Object(t.jsx)("p",{className:"card-text",children:Object(t.jsx)("small",{className:"text-muted",children:s})}),Object(t.jsx)(v.Link,{to:"hero/".concat(r),children:"Mas..."})]})})]})})})},f=function(e){var r=e.publisher,a=Object(c.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error("Publisher ".concat(e," no es valido."));return x.filter((function(r){return r.publisher===e}))}(r)}),[r]);return Object(t.jsx)("div",{className:"row row-cols-1 animate__animated animate__fadeIn",children:a.map((function(e){return Object(t.jsx)(g,Object(l.a)({},e),e.id)}))})},C=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("h1",{children:"DC screen"}),Object(t.jsx)("hr",{}),Object(t.jsx)(f,{publisher:"DC Comics"})]})},N=function(e){var r=e.history,a=Object(v.useParams)().heroeId,s=Object(c.useMemo)((function(){return e=a,x.find((function(r){return r.id===e}));var e}),[a]);if(!s)return Object(t.jsx)(m.Redirect,{to:"/"});var n=s.superhero,i=s.alter_ego,o=s.characters,l=s.first_appearance,h=s.publisher;return Object(t.jsxs)("div",{className:"row mt-5",children:[Object(t.jsx)("div",{className:"col-4",children:Object(t.jsx)("img",{src:"../assets/heroes/".concat(a,".jpg"),alt:n,className:"img-thumbnail"})}),Object(t.jsxs)("div",{className:"col-8",children:[Object(t.jsx)("h3",{children:n}),Object(t.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(t.jsxs)("li",{className:"list-group-item",children:["Alter ego: ",i]}),Object(t.jsxs)("li",{className:"list-group-item",children:["Publisher: ",h]}),Object(t.jsxs)("li",{className:"list-group-item",children:["First Appearance: ",l]})]}),Object(t.jsx)("h5",{children:"Characters"}),Object(t.jsx)("p",{children:o}),Object(t.jsx)("button",{onClick:function(e){r.length<=2?r.push("/"):r.goBack()},className:"btn btn-outline-primary",children:"Return"})]})]})},_=function(){var e=Object(c.useContext)(o).user;return console.log(e),Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("h1",{children:"Marvel screen"}),Object(t.jsx)("hr",{}),Object(t.jsx)(f,{publisher:"Marvel Comics"})]})},y=a(24),S=a.n(y),k=function(e){var r=e.history,a=Object(v.useLocation)(),s=S.a.parse(a.search).q,n=void 0===s?"":s,o=p({search:n}),h=Object(i.a)(o,2),u=h[0].search,j=h[1],d=Object(c.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:x.filter((function(r){return r.superhero.toLowerCase().includes(e.toLowerCase())}))}(n)}),[n]);return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("h1",{children:"Search Screen"}),Object(t.jsx)("hr",{}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-5",children:[Object(t.jsx)("h4",{children:"Search form"}),Object(t.jsx)("hr",{}),Object(t.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.push("?q=".concat(u))},children:[Object(t.jsx)("input",{type:"text",placeholder:"Search",className:"form-control",name:"search",autoComplete:"off",value:u,onChange:j}),Object(t.jsx)("button",{type:"submit",className:"btn mt-1 btn-block btn-outline-primary",children:"Search"})]})]}),Object(t.jsxs)("div",{className:"col-7",children:[Object(t.jsx)("h4",{children:"Results"}),Object(t.jsx)("hr",{}),""===n&&Object(t.jsx)("div",{className:"alert alert-info",children:" Search a hero..."}),""!==n&&0==d.length&&Object(t.jsx)("div",{className:"alert alert-danger",children:" No results found"}),Object(t.jsx)("div",{children:d.map((function(e){return Object(t.jsx)(g,Object(l.a)({},e),e.id)}))})]})]})]})},M=function(){var e=Object(c.useContext)(o),r=e.user,a=e.dispatch,s=Object(m.useHistory)();return Object(t.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(t.jsx)(d.b,{className:"navbar-brand",to:"/",children:"Asociaciones"}),Object(t.jsx)("div",{className:"navbar-collapse",children:Object(t.jsxs)("div",{className:"navbar-nav",children:[Object(t.jsx)(d.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(t.jsx)(d.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(t.jsx)(d.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search..."})]})}),Object(t.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(t.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(t.jsx)("p",{className:"nav-item nav-link text-info",children:r.name}),Object(t.jsx)("button",{onClick:function(e){a({type:u}),s.replace("/login")},activeClassName:"active",className:"nav-item nav-link btn",exact:!0,to:"/login",children:"Logout"})]})})]})},D=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(M,{}),Object(t.jsx)("div",{className:"container",children:Object(t.jsxs)(v.Switch,{children:[Object(t.jsx)(v.Route,{exact:!0,path:"/marvel",component:_}),Object(t.jsx)(v.Route,{exact:!0,path:"/hero/:heroeId",component:N}),Object(t.jsx)(v.Route,{exact:!0,path:"/dc",component:C}),Object(t.jsx)(v.Route,{path:"/search",component:k}),Object(t.jsx)(v.Redirect,{to:"/marvel"})]})})]})},w=a(15),A=function(e){var r=e.isAuth,a=e.component,c=Object(w.a)(e,["isAuth","component"]);return localStorage.setItem("lastpath",c.location.pathname),Object(t.jsx)(m.Route,Object(l.a)(Object(l.a)({},c),{},{component:function(e){return r?Object(t.jsx)(a,Object(l.a)({},e)):Object(t.jsx)(m.Redirect,{to:"/login"})}}))},R=function(e){var r=e.isAuth,a=e.component,c=Object(w.a)(e,["isAuth","component"]);return Object(t.jsx)(m.Route,Object(l.a)(Object(l.a)({},c),{},{component:function(e){return r?Object(t.jsx)(m.Redirect,{to:"/"}):Object(t.jsx)(a,Object(l.a)({},e))}}))},B=function(){var e=Object(c.useContext)(o).user;return Object(t.jsx)(d.a,{children:Object(t.jsx)("div",{children:Object(t.jsxs)(m.Switch,{children:[Object(t.jsx)(R,{isAuth:e.logged,exact:!0,path:"/login",component:O}),Object(t.jsx)(A,{path:"/",isAuth:e.logged,component:D})]})})})},J=function(){var e=Object(c.useReducer)(j,{},(function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}})),r=Object(i.a)(e,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){localStorage.setItem("user",JSON.stringify(a)),a.name&&localStorage.setItem("lastname",a.name)}),[a]),Object(t.jsx)(o.Provider,{value:{user:a,dispatch:s},children:Object(t.jsx)(B,{})})};n.a.render(Object(t.jsx)(J,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.e68d41cb.chunk.js.map