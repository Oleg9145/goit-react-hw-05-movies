"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[791],{63:function(e,t,r){r.r(t),r.d(t,{Reviews:function(){return m}});var n=r(861),a=r(439),c=r(757),i=r.n(c),o=r(791),s=r(689),u=r(122),p="reviews_reviewsContainer__KQ6F9",v="reviews_reviewsHeading__YexEG",l="reviews_reviewsList__9YDUL",h="reviews_reviewItem__8aks2",f="reviews_authorName__516Ew",d=r(184),m=function(){var e=(0,s.UO)().movieId,t=(0,o.useState)([]),r=(0,a.Z)(t,2),c=r[0],m=r[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,n.Z)(i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.Hx)(e);case 3:r=t.sent,m(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,d.jsxs)("div",{className:p,children:[(0,d.jsx)("h2",{className:v,children:"Reviews"}),(0,d.jsx)("ul",{className:l,children:c.map((function(e){return(0,d.jsxs)("li",{className:h,children:[(0,d.jsxs)("strong",{className:f,children:[e.author_name,":"]}),e.content]},e.id)}))})]})}},122:function(e,t,r){r.d(t,{Hx:function(){return h},Y5:function(){return v},vw:function(){return p},wr:function(){return u},y:function(){return l}});var n=r(861),a=r(757),c=r.n(a),i=r(340),o="b8d685aa89f64a6cf112c60dddfc9250",s="https://api.themoviedb.org/3/",u=function(){var e=(0,n.Z)(c().mark((function e(){var t,r,n,a,u=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:"day",r=u.length>1&&void 0!==u[1]?u[1]:1,n=u.length>2&&void 0!==u[2]?u[2]:"en-US",e.prev=3,e.next=6,i.Z.get("".concat(s,"trending/all/").concat(t),{params:{api_key:o,page:r,language:n}});case 6:return a=e.sent,e.abrupt("return",a.data.results.map((function(e){var t=e.id,r=e.title,n=e.overview,a=e.poster_path;return{id:t,title:r,overview:n,posterURL:"https://image.tmdb.org/t/p/w500".concat(a)}})));case 10:throw e.prev=10,e.t0=e.catch(3),e.t0;case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:1,e.prev=1,e.next=4,i.Z.get("".concat(s,"search/movie"),{params:{api_key:o,query:t,page:r,language:"en-US"}});case 4:return n=e.sent,e.abrupt("return",n.data.results.map((function(e){var t=e.id,r=e.title,n=e.overview;e.poster_path;return{id:t,title:r,overview:n,posterURL:"https://api.themoviedb.org/3/movie/".concat(t,"/images")}})));case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"movie/").concat(t),{params:{api_key:o,language:"en-US"}});case 3:return r=e.sent,e.abrupt("return",{id:r.data.id,title:r.data.title,overview:r.data.overview,posterURL:"https://api.themoviedb.org/3/movie/".concat(t,"/images"),genres:r.data.genres.map((function(e){return e.name})).join(", "),releaseDate:r.data.release_date});case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"movie/").concat(t,"/credits"),{params:{api_key:o}});case 3:return r=e.sent,e.abrupt("return",r.data.cast.map((function(e){var t=e.cast_id,r=e.name,n=e.character,a=e.profile_path;return{castId:t,actorName:r,characterName:n,profilePicURL:a?"https://image.tmdb.org/t/p/w500".concat(a):null}})));case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie cast:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:1,e.prev=1,e.next=4,i.Z.get("".concat(s,"movie/").concat(t,"/reviews"),{params:{api_key:o,page:r}});case 4:return n=e.sent,e.abrupt("return",n.data.results.map((function(e){return{id:e.id,author:e.author,content:e.content}})));case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=791.7cc95486.chunk.js.map