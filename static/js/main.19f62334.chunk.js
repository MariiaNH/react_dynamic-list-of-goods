(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(5),o=n.n(r),c=n(3),a=n(6),s=n(1),u=n.n(s),i=n(2),d=(n(12),n(0)),l=function(t){var e=t.goods;return Object(d.jsx)("ul",{className:"goods",children:e.map((function(t){return Object(d.jsx)("li",{"data-cy":"good",className:"goods__item",style:{color:t.color},children:t.name},t.id)}))})};function b(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var f=function(){var t=Object(i.useState)([]),e=Object(a.a)(t,2),n=e[0],r=e[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Dynamic list of Goods"}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{type:"button","data-cy":"all-button",onClick:Object(c.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=r,t.next=3,b();case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)}))),children:"Load all goods"}),Object(d.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:Object(c.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=r,t.next=3,b().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)}));case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)}))),children:"Load 5 first goods"}),Object(d.jsx)("button",{type:"button","data-cy":"red-button",onClick:Object(c.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=r,t.next=3,b().then((function(t){return t.filter((function(t){return"red"===t.color}))}));case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)}))),children:"Load red goods"})]}),Object(d.jsx)(l,{goods:n})]})};o.a.render(Object(d.jsx)(f,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.19f62334.chunk.js.map