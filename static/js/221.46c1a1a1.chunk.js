"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[221],{221:function(t,e,r){r.r(e),r.d(e,{Movies:function(){return h}});var n=r(861),a=r(439),c=r(757),o=r.n(c),i=r(791),u=r(689),s=r(87),p=r(122),v=r(184),h=function(){var t=(0,i.useState)(""),e=(0,a.Z)(t,2),r=e[0],c=e[1],h=(0,i.useState)([]),f=(0,a.Z)(h,2),l=f[0],d=f[1],m=(0,u.s0)(),g=(0,u.TH)();(0,i.useEffect)((function(){var t,e=(t=g.search,new URLSearchParams(t).get("query")||"");c(e),e&&(0,p.vw)(e).then((function(t){d(t),m("/movies?query=".concat(e),{replace:!0,state:{from:g.pathname}})}))}),[g.pathname,g.search,m]);var w=function(){var t=(0,n.Z)(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.vw)(r);case 2:e=t.sent,d(e),m("/movies?query=".concat(r),{state:{from:g.pathname}});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,v.jsxs)("div",{children:[(0,v.jsx)("button",{onClick:function(){var t;null!==(t=g.state)&&void 0!==t&&t.from?m(g.state.from):m("/")},children:"Go Back"}),(0,v.jsx)("h1",{children:"Search Movies"}),(0,v.jsx)("input",{type:"text",value:r,onChange:function(t){return c(t.target.value)}}),(0,v.jsx)("button",{onClick:w,children:"Search"}),(0,v.jsx)("ul",{children:l.map((function(t){return(0,v.jsx)("li",{children:(0,v.jsx)(s.rU,{to:"/movies/".concat(t.id),state:{from:"/movies?query=".concat(r)},children:t.title})},t.id)}))})]})}},122:function(t,e,r){r.d(e,{Hx:function(){return f},Y5:function(){return v},vw:function(){return p},wr:function(){return s},y:function(){return h}});var n=r(861),a=r(757),c=r.n(a),o=r(340),i="b8d685aa89f64a6cf112c60dddfc9250",u="https://api.themoviedb.org/3/",s=function(){var t=(0,n.Z)(c().mark((function t(){var e,r,n,a,s=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.length>0&&void 0!==s[0]?s[0]:"day",r=s.length>1&&void 0!==s[1]?s[1]:1,n=s.length>2&&void 0!==s[2]?s[2]:"en-US",t.prev=3,t.next=6,o.Z.get("".concat(u,"trending/all/").concat(e),{params:{api_key:i,page:r,language:n}});case 6:return a=t.sent,t.abrupt("return",a.data.results.map((function(t){var e=t.id,r=t.title,n=t.overview,a=t.poster_path;return{id:e,title:r,overview:n,posterURL:"https://image.tmdb.org/t/p/w500".concat(a)}})));case 10:throw t.prev=10,t.t0=t.catch(3),t.t0;case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:1,t.prev=1,t.next=4,o.Z.get("".concat(u,"search/movie"),{params:{api_key:i,query:e,page:r,language:"en-US"}});case 4:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){var e=t.id,r=t.title,n=t.overview;t.poster_path;return{id:e,title:r,overview:n,posterURL:"https://api.themoviedb.org/3/movie/".concat(e,"/images")}})));case 8:throw t.prev=8,t.t0=t.catch(1),t.t0;case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(u,"movie/").concat(e),{params:{api_key:i,language:"en-US"}});case 3:return r=t.sent,t.abrupt("return",{id:r.data.id,title:r.data.title,overview:r.data.overview,posterURL:"https://api.themoviedb.org/3/movie/".concat(e,"/images"),genres:r.data.genres.map((function(t){return t.name})).join(", "),releaseDate:r.data.release_date});case 7:throw t.prev=7,t.t0=t.catch(0),console.error("Error fetching movie details:",t.t0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(u,"movie/").concat(e,"/credits"),{params:{api_key:i}});case 3:return r=t.sent,t.abrupt("return",r.data.cast.map((function(t){var e=t.cast_id,r=t.name,n=t.character,a=t.profile_path;return{castId:e,actorName:r,characterName:n,profilePicURL:a?"https://image.tmdb.org/t/p/w500".concat(a):null}})));case 7:throw t.prev=7,t.t0=t.catch(0),console.error("Error fetching movie cast:",t.t0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:1,t.prev=1,t.next=4,o.Z.get("".concat(u,"movie/").concat(e,"/reviews"),{params:{api_key:i,page:r}});case 4:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){return{id:t.id,author:t.author,content:t.content}})));case 8:throw t.prev=8,t.t0=t.catch(1),t.t0;case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=221.46c1a1a1.chunk.js.map