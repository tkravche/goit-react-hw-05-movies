"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[837],{837:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r,i,a=n(439),c=n(791),o=n(87),u=n(689),s=n(245),p=n(168),f=n(444),m=f.ZP.div(r||(r=(0,p.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),d=f.ZP.input(i||(i=(0,p.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n"]))),h=n(184),l=function(e){var t=e.OnHandleSubmit;return(0,h.jsx)(m,{children:(0,h.jsxs)("form",{onSubmit:t,children:[(0,h.jsx)(d,{type:"text",name:"search"}),(0,h.jsx)("button",{type:"submit",children:"Search"})]})})},v=function(e){var t=e.moviesSearch,n=e.location;return(0,h.jsx)("div",{children:(0,h.jsx)("ul",{children:t.map((function(e){return(0,h.jsx)("li",{children:(0,h.jsx)(o.rU,{to:"".concat(e.id),state:{from:n},children:e.title})},e.id)}))})})},x=function(){var e,t=(0,c.useState)([]),n=(0,a.Z)(t,2),r=n[0],i=n[1],p=(0,c.useState)(""),f=(0,a.Z)(p,2),m=(f[0],f[1]),d=(0,o.lr)(),x=(0,a.Z)(d,2),b=x[0],g=x[1],Z=null!==(e=b.get("search"))&&void 0!==e?e:"",j=(0,u.TH)();return(0,c.useEffect)((function(){""!==Z&&(0,s.mv)(Z).then((function(e){var t=e.data.results;i(t)})).catch((function(e){return m(e.message)}))}),[Z]),(0,h.jsxs)("main",{children:[(0,h.jsx)(l,{value:Z,OnHandleSubmit:function(e){e.preventDefault();var t=e.currentTarget;g({search:t.elements.search.value.trim()}),t.reset()}}),(0,h.jsx)(v,{location:j,moviesSearch:r})]})}},245:function(e,t,n){n.d(t,{Hx:function(){return u},Mc:function(){return c},mv:function(){return s},uV:function(){return o},wr:function(){return a}});var r=n(243);r.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="612624e4ceb53e70d9f6450958bf781b",a=function(){return(0,r.Z)("/trending/movie/day?",{params:{api_key:i}})},c=function(e){return(0,r.Z)("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i))},o=function(e){return(0,r.Z)("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(i))},u=function(e){return(0,r.Z)("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(i))},s=function(e){return(0,r.Z)("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=").concat(i,"&page=1"))}}}]);
//# sourceMappingURL=837.ba991cab.chunk.js.map