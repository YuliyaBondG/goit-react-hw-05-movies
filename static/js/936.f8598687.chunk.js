"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{155:function(t,e,n){n.d(e,{O:function(){return p}});var r=n(87),a=n(689),s="MoviesList_moviesList__P6SP5",c="MoviesList_moviesListTitle__fjOf0",i="MoviesList_moviesListItem__OFqms",u="MoviesList_moviesListLink__8Ci-i",o="MoviesList_moviesListImg__F+Cfs",f=n(184),p=function(t){var e=t.movies,n=(0,a.TH)();return(0,f.jsx)("ul",{className:s,children:e.map((function(t){return(0,f.jsx)("li",{className:i,children:(0,f.jsxs)(r.rU,{className:u,to:"/movies/".concat(t.id),state:{from:n},children:[(0,f.jsx)("p",{className:c,children:t.title||t.name}),(0,f.jsx)("img",{className:o,src:t.poster_path?"https://image.tmdb.org/t/p/w500/"+t.poster_path:"https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg",alt:t.title,width:"400"})]})},t.id)}))})}},936:function(t,e,n){n.r(e),n.d(e,{default:function(){return o}});var r=n(439),a=n(791),s=n(952),c=n(155),i="Home_hometitle__OKBYR",u=n(184),o=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],o=e[1];return(0,a.useEffect)((function(){(0,s.Df)().then((function(t){o(t.results)}))}),[]),(0,u.jsxs)("main",{children:[(0,u.jsx)("h2",{className:i,children:"Trending today"}),(0,u.jsx)(c.O,{movies:n})]})}},952:function(t,e,n){n.d(e,{Df:function(){return u},IQ:function(){return p},Jh:function(){return l},Pg:function(){return o},Wf:function(){return f}});var r=n(861),a=n(757),s=n.n(a),c=n(243),i="1d2ce5babf28ef05892bea5e31f7dd12";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var t=(0,r.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/all/day?api_key=".concat(i));case 2:return e=t.sent,console.log(e),t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?api_key=".concat(i,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=936.f8598687.chunk.js.map